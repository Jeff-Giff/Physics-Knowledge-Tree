/* ============================================================
 * Cloudflare Worker —— D1 后端（知识树数据 + OAuth + 管理）
 * ============================================================ */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  'Access-Control-Max-Age': '86400',
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

function jsResponse(code, status = 200) {
  return new Response(code, {
    status,
    headers: { 'Content-Type': 'application/javascript; charset=utf-8', ...CORS_HEADERS },
  });
}

function errorResponse(message, status = 400) {
  return jsonResponse({ error: message }, status);
}

/* ---------- GitHub token 验证 ---------- */
async function verifyGitHubToken(token) {
  const res = await fetch('https://api.github.com/user', {
    headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github+json' },
  });
  if (!res.ok) return null;
  return res.json();
}

function extractToken(request) {
  const auth = request.headers.get('Authorization') || '';
  const m = auth.match(/^Bearer\s+(.+)$/i);
  return m ? m[1].trim() : null;
}

/* ---------- 管理员权限校验 ---------- */
async function requireAdmin(request, env) {
  const token = extractToken(request);
  if (!token) throw errorResponse('Unauthorized', 401);
  const user = await verifyGitHubToken(token);
  if (!user) throw errorResponse('Invalid token', 401);
  const row = await env.DB.prepare('SELECT 1 FROM admins WHERE github_login = ?')
    .bind(user.login.toLowerCase()).first();
  if (!row) throw errorResponse('Forbidden', 403);
  return user;
}

/* ---------- 登录用户校验 ---------- */
async function requireUser(request) {
  const token = extractToken(request);
  if (!token) throw errorResponse('Unauthorized', 401);
  const user = await verifyGitHubToken(token);
  if (!user) throw errorResponse('Invalid token', 401);
  return user;
}

/* ---------- D1 初始化 ---------- */
async function initDB(db) {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
      github_login TEXT PRIMARY KEY,
      granted_by TEXT NOT NULL,
      granted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      role TEXT DEFAULT 'admin'
    );
    CREATE TABLE IF NOT EXISTS admin_applications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      github_login TEXT NOT NULL UNIQUE,
      reason TEXT,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      handled_by TEXT,
      handle_note TEXT
    );
    CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      github_login TEXT NOT NULL,
      category TEXT NOT NULL,
      title TEXT NOT NULL,
      detail TEXT,
      status TEXT DEFAULT 'open',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS audit_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      actor TEXT NOT NULL,
      action TEXT NOT NULL,
      target TEXT NOT NULL,
      detail TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS domains (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      name_en TEXT,
      color TEXT DEFAULT '#888888',
      cloud_alpha REAL DEFAULT 0.08,
      cloud_r REAL DEFAULT 1.0
    );
    CREATE TABLE IF NOT EXISTS nodes (
      id TEXT PRIMARY KEY,
      domain TEXT NOT NULL,
      title TEXT NOT NULL,
      title_en TEXT,
      description TEXT,
      body TEXT,
      aliases TEXT,
      tags TEXT,
      keywords TEXT,
      pos TEXT,
      fixed INTEGER DEFAULT 0,
      size_override REAL,
      updated TEXT,
      resources TEXT,
      links TEXT,
      wiki_refs TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS meta (
      key TEXT PRIMARY KEY,
      value TEXT
    );
  `);
}

async function audit(db, actor, action, target, detail) {
  try {
    await db.prepare('INSERT INTO audit_log (actor, action, target, detail) VALUES (?, ?, ?, ?)')
      .bind(actor, action, target, detail || '').run();
  } catch (e) {}
}

/* ============================================================
 * 图数据缓存（Worker 实例内内存缓存，30 秒 TTL）
 * ============================================================ */
let graphCache = null;
let graphCacheTime = 0;
const GRAPH_CACHE_TTL = 30000;

/* ============================================================
 * 图构建（从 D1 读取所有节点，实时构建 graph.js）
 * ============================================================ */
async function buildGraph(env) {
  const now = Date.now();
  if (graphCache && now - graphCacheTime < GRAPH_CACHE_TTL) {
    return graphCache;
  }

  // 读取 domains
  const domainsRows = await env.DB.prepare('SELECT * FROM domains').all();
  const domains = {};
  for (const d of (domainsRows.results || [])) {
    domains[d.id] = {
      name: d.name,
      name_en: d.name_en || '',
      color: d.color,
      cloud_alpha: d.cloud_alpha,
      cloud_r: d.cloud_r,
    };
  }

  // 读取 meta
  const metaRows = await env.DB.prepare('SELECT * FROM meta').all();
  const metaMap = {};
  for (const m of (metaRows.results || [])) {
    metaMap[m.key] = m.value;
  }
  const maxVisualDegree = parseInt(metaMap.max_visual_degree || '8', 10);

  // 读取所有 nodes
  const nodesRows = await env.DB.prepare('SELECT * FROM nodes ORDER BY id').all();
  const rawNodes = nodesRows.results || [];

  const nodesById = {};
  const order = [];
  for (const n of rawNodes) {
    nodesById[n.id] = n;
    order.push(n.id);
  }

  // 如果 domain 缺失，补默认
  for (const n of rawNodes) {
    if (!domains[n.domain]) {
      domains[n.domain] = { name: n.domain, name_en: '', color: '#888888', cloud_alpha: 0.08, cloud_r: 1.0 };
    }
  }

  // 构建边
  const edges = {};
  for (const nid of order) {
    const node = nodesById[nid];
    const links = JSON.parse(node.links || '[]');
    for (const lk of links) {
      const tid = lk.id;
      if (!nodesById[tid] || tid === nid) continue;
      const key = [nid, tid].sort().join('|');
      const e = edges[key] || { type: null, dir: null, notes: {} };

      if (lk.type === 'prereq') {
        const dirStr = `${nid},${tid}`;
        if (e.type === 'prereq' && e.dir && e.dir !== dirStr) {
          // circular, keep first
        } else if (e.type === 'related') {
          e.type = 'prereq';
          e.dir = dirStr;
        } else if (e.type === null) {
          e.type = 'prereq';
          e.dir = dirStr;
        }
      } else {
        if (e.type === null) {
          e.type = 'related';
        }
      }
      if (lk.note) {
        e.notes[nid] = lk.note;
      }
      edges[key] = e;
    }
  }

  // 可视化剪枝
  const visualSets = {};
  for (const nid of order) {
    visualSets[nid] = new Set();
    const neighbors = [];
    for (const [key, e] of Object.entries(edges)) {
      const [a, b] = key.split('|');
      let other = null;
      if (a === nid) other = b;
      else if (b === nid) other = a;
      if (other === null) continue;
      const prio = e.type === 'prereq' ? 0 : 1;
      neighbors.push([prio, other]);
    }
    neighbors.sort((x, y) => x[0] - y[0] || x[1].localeCompare(y[1]));
    for (const [, tid] of neighbors.slice(0, maxVisualDegree)) {
      visualSets[nid].add(tid);
    }
  }

  const edgeVisual = {};
  for (const key of Object.keys(edges)) {
    const [a, b] = key.split('|');
    edgeVisual[key] = visualSets[a]?.has(b) || visualSets[b]?.has(a);
  }

  // 组装输出节点
  const outNodes = [];
  for (const nid of order) {
    const node = nodesById[nid];
    const domain = domains[node.domain];

    const neigh = [];
    for (const [key, e] of Object.entries(edges)) {
      const [a, b] = key.split('|');
      let other = null;
      if (a === nid) other = b;
      else if (b === nid) other = a;
      if (other === null) continue;

      let direction = null;
      if (e.type === 'prereq') {
        direction = e.dir.startsWith(`${nid},`) ? 'out' : 'in';
      }
      neigh.push({
        id: other,
        type: e.type,
        dir: direction,
        note: e.notes[nid] || e.notes[other] || '',
        visual: edgeVisual[key],
      });
    }
    neigh.sort((a, b) => (a.type === 'prereq' ? 0 : 1) - (b.type === 'prereq' ? 0 : 1) || a.id.localeCompare(b.id));

    const linksOut = neigh.filter(x => x.visual);
    const softOut = neigh.filter(x => !x.visual);
    const degree = neigh.length;
    const size = node.size_override != null ? parseFloat(node.size_override) : Math.round(18 + 10 * degree);

    outNodes.push({
      id: nid,
      name: node.title,
      nameEn: node.title_en || '',
      domain: node.domain,
      domainName: domain.name,
      color: domain.color,
      aliases: JSON.parse(node.aliases || '[]'),
      tags: JSON.parse(node.tags || '[]'),
      keywords: JSON.parse(node.keywords || '[]'),
      size,
      degree,
      pos: node.pos ? JSON.parse(node.pos) : null,
      fixed: !!node.fixed,
      body: node.body || '',
      links: linksOut.map(x => ({ id: x.id, name: nodesById[x.id].title, type: x.type, dir: x.dir, note: x.note })),
      softLinks: softOut.map(x => ({ id: x.id, name: nodesById[x.id].title, type: x.type, dir: x.dir, note: x.note })),
      resources: JSON.parse(node.resources || '[]'),
    });
  }

  // 组装输出边
  const outLinks = [];
  for (const [key, e] of Object.entries(edges)) {
    const [a, b] = key.split('|');
    let src, tgt;
    if (e.type === 'prereq') {
      const [succ, pre] = e.dir.split(',');
      src = pre;
      tgt = succ;
    } else {
      src = a;
      tgt = b;
    }
    outLinks.push({
      source: src,
      target: tgt,
      type: e.type,
      soft: !edgeVisual[key],
      notes: Object.values(e.notes),
    });
  }

  const searchEntries = outNodes.map(n => ({
    id: n.id,
    name: n.name,
    nameEn: n.nameEn,
    aliases: n.aliases,
    tags: n.tags,
    keywords: n.keywords,
    domainName: n.domainName,
  }));

  const graph = {
    meta: {
      domains,
      max_visual_degree: maxVisualDegree,
    },
    nodes: outNodes,
    links: outLinks,
    search: searchEntries,
  };

  graphCache = graph;
  graphCacheTime = now;
  return graph;
}

function invalidateGraphCache() {
  graphCache = null;
  graphCacheTime = 0;
}

/* ============================================================
 * 主入口
 * ============================================================ */
export default {
  async fetch(request, env, ctx) {
    await initDB(env.DB);

    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    /* OAuth Callback */
    if (path === '/callback') {
      return handleOAuthCallback(request, env);
    }

    /* Graph API */
    if (path === '/api/graph.js') {
      const graph = await buildGraph(env);
      return jsResponse(`window.PHYSICS_GRAPH = ${JSON.stringify(graph)};`);
    }
    if (path === '/api/graph') {
      const graph = await buildGraph(env);
      return jsonResponse(graph);
    }

    /* Node API */
    const nodeMatch = path.match(/^\/api\/node\/([^\/]+)$/);
    if (nodeMatch) {
      const nodeId = decodeURIComponent(nodeMatch[1]);
      if (request.method === 'GET') {
        return handleGetNode(request, env, nodeId);
      }
      if (request.method === 'POST') {
        return handleUpdateNode(request, env, nodeId);
      }
    }

    const nodeResMatch = path.match(/^\/api\/node\/([^\/]+)\/resources$/);
    if (nodeResMatch && request.method === 'POST') {
      return handleUpdateResources(request, env, decodeURIComponent(nodeResMatch[1]));
    }

    /* Admin APIs */
    if (path === '/api/me') return handleApiMe(request, env);
    if (path === '/api/apply-admin' && request.method === 'POST') return handleApplyAdmin(request, env);
    if (path === '/api/applications') return handleListApplications(request, env);
    if (path === '/api/approve' && request.method === 'POST') return handleApprove(request, env);
    if (path === '/api/admins') {
      if (request.method === 'GET') return handleListAdmins(request, env);
      if (request.method === 'DELETE') return handleRemoveAdmin(request, env);
    }
    if (path === '/api/feedback' && request.method === 'POST') return handleFeedback(request, env);
    if (path === '/api/feedback-list') return handleListFeedback(request, env);

    return errorResponse('Not Found', 404);
  },
};

/* ============================================================
 * OAuth Callback
 * ============================================================ */
async function handleOAuthCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');
  const frontend = env.FRONTEND_URL || 'https://jeff-giff.github.io/Physics-Knowledge-Tree/';

  if (error) return Response.redirect(`${frontend}#error=${encodeURIComponent(error)}`, 302);
  if (!code) return Response.redirect(`${frontend}#error=no_code`, 302);

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });
  const tokenData = await tokenRes.json();
  if (tokenData.error) {
    return Response.redirect(`${frontend}#error=${encodeURIComponent(tokenData.error_description || tokenData.error)}`, 302);
  }
  return Response.redirect(`${frontend}#token=${tokenData.access_token}`, 302);
}

/* ============================================================
 * Node APIs
 * ============================================================ */
async function handleGetNode(request, env, nodeId) {
  const row = await env.DB.prepare('SELECT * FROM nodes WHERE id = ?').bind(nodeId).first();
  if (!row) return errorResponse('Node not found', 404);
  return jsonResponse({
    id: row.id,
    domain: row.domain,
    title: row.title,
    title_en: row.title_en,
    description: row.description,
    body: row.body,
    aliases: JSON.parse(row.aliases || '[]'),
    tags: JSON.parse(row.tags || '[]'),
    keywords: JSON.parse(row.keywords || '[]'),
    pos: row.pos ? JSON.parse(row.pos) : null,
    fixed: !!row.fixed,
    size_override: row.size_override,
    updated: row.updated,
    resources: JSON.parse(row.resources || '[]'),
    links: JSON.parse(row.links || '[]'),
  });
}

async function handleUpdateNode(request, env, nodeId) {
  const user = await requireAdmin(request, env);
  let body = {};
  try { body = await request.json(); } catch (e) {}

  const fields = [];
  const values = [];
  const updatable = ['domain','title','title_en','description','body','aliases','tags','keywords','pos','fixed','size_override','updated','resources','links'];
  for (const key of updatable) {
    if (body[key] !== undefined) {
      fields.push(`${key} = ?`);
      values.push(typeof body[key] === 'object' ? JSON.stringify(body[key]) : body[key]);
    }
  }
  if (fields.length === 0) return errorResponse('No fields to update', 400);

  values.push(new Date().toISOString());
  values.push(nodeId);

  await env.DB.prepare(`UPDATE nodes SET ${fields.join(', ')}, updated_at = ? WHERE id = ?`)
    .bind(...values).run();

  invalidateGraphCache();
  await audit(env.DB, user.login.toLowerCase(), 'update_node', nodeId, JSON.stringify(Object.keys(body)));
  return jsonResponse({ success: true });
}

async function handleUpdateResources(request, env, nodeId) {
  const user = await requireAdmin(request, env);
  let body = {};
  try { body = await request.json(); } catch (e) {}
  const resources = body.resources;
  if (!Array.isArray(resources)) return errorResponse('resources must be an array', 400);

  await env.DB.prepare('UPDATE nodes SET resources = ?, updated_at = ? WHERE id = ?')
    .bind(JSON.stringify(resources), new Date().toISOString(), nodeId).run();

  invalidateGraphCache();
  await audit(env.DB, user.login.toLowerCase(), 'update_resources', nodeId, `${resources.length} items`);
  return jsonResponse({ success: true });
}

/* ============================================================
 * Admin APIs
 * ============================================================ */
async function handleApiMe(request, env) {
  const token = extractToken(request);
  if (!token) return errorResponse('Unauthorized', 401);
  const user = await verifyGitHubToken(token);
  if (!user) return errorResponse('Invalid token', 401);

  const row = await env.DB.prepare('SELECT 1 FROM admins WHERE github_login = ?')
    .bind(user.login.toLowerCase()).first();

  return jsonResponse({
    login: user.login,
    name: user.name,
    avatar_url: user.avatar_url,
    is_admin: !!row,
  });
}

async function handleApplyAdmin(request, env) {
  const user = await requireUser(request);
  let body = {};
  try { body = await request.json(); } catch (e) {}
  const reason = String(body.reason || '').trim();
  const login = user.login.toLowerCase();

  const existingAdmin = await env.DB.prepare('SELECT 1 FROM admins WHERE github_login = ?').bind(login).first();
  if (existingAdmin) return errorResponse('Already admin', 409);

  const existingApp = await env.DB.prepare('SELECT 1 FROM admin_applications WHERE github_login = ? AND status = ?')
    .bind(login, 'pending').first();
  if (existingApp) return errorResponse('Application already pending', 409);

  await env.DB.prepare('INSERT INTO admin_applications (github_login, reason) VALUES (?, ?)')
    .bind(login, reason).run();
  await audit(env.DB, login, 'apply_admin', login, reason);
  return jsonResponse({ success: true });
}

async function handleListApplications(request, env) {
  await requireAdmin(request, env);
  const { results } = await env.DB.prepare(
    'SELECT * FROM admin_applications WHERE status = ? ORDER BY created_at ASC'
  ).bind('pending').all();
  return jsonResponse(results || []);
}

async function handleApprove(request, env) {
  const admin = await requireAdmin(request, env);
  let body = {};
  try { body = await request.json(); } catch (e) {}
  const applicant = String(body.applicant_login || '').toLowerCase().trim();
  const decision = String(body.decision || '').trim();
  const note = String(body.note || '').trim();

  if (!applicant || !['approve', 'reject'].includes(decision)) {
    return errorResponse('Bad request', 400);
  }

  const app = await env.DB.prepare(
    'SELECT * FROM admin_applications WHERE github_login = ? AND status = ?'
  ).bind(applicant, 'pending').first();
  if (!app) return errorResponse('Application not found', 404);

  const now = new Date().toISOString();
  if (decision === 'approve') {
    await env.DB.prepare('INSERT OR IGNORE INTO admins (github_login, granted_by) VALUES (?, ?)')
      .bind(applicant, admin.login.toLowerCase()).run();
    await env.DB.prepare(
      'UPDATE admin_applications SET status = ?, handled_by = ?, handle_note = ?, updated_at = ? WHERE id = ?'
    ).bind('approved', admin.login.toLowerCase(), note, now, app.id).run();
    await audit(env.DB, admin.login.toLowerCase(), 'approve_admin', applicant, note);
  } else {
    await env.DB.prepare(
      'UPDATE admin_applications SET status = ?, handled_by = ?, handle_note = ?, updated_at = ? WHERE id = ?'
    ).bind('rejected', admin.login.toLowerCase(), note, now, app.id).run();
    await audit(env.DB, admin.login.toLowerCase(), 'reject_admin', applicant, note);
  }
  return jsonResponse({ success: true });
}

async function handleListAdmins(request, env) {
  await requireAdmin(request, env);
  const { results } = await env.DB.prepare(
    'SELECT github_login, granted_by, granted_at, role FROM admins ORDER BY granted_at ASC'
  ).all();
  return jsonResponse(results || []);
}

async function handleRemoveAdmin(request, env) {
  const admin = await requireAdmin(request, env);
  const url = new URL(request.url);
  const target = String(url.searchParams.get('login') || '').toLowerCase().trim();
  if (!target) return errorResponse('Missing login', 400);
  if (target === admin.login.toLowerCase()) return errorResponse('Cannot remove yourself', 403);

  await env.DB.prepare('DELETE FROM admins WHERE github_login = ?').bind(target).run();
  await audit(env.DB, admin.login.toLowerCase(), 'remove_admin', target, '');
  return jsonResponse({ success: true });
}

async function handleFeedback(request, env) {
  const user = await requireUser(request);
  let body = {};
  try { body = await request.json(); } catch (e) {}
  const category = String(body.category || '').trim();
  const title = String(body.title || '').trim();
  const detail = String(body.detail || '').trim();

  if (!category || !title) return errorResponse('Category and title required', 400);

  await env.DB.prepare(
    'INSERT INTO feedback (github_login, category, title, detail) VALUES (?, ?, ?, ?)'
  ).bind(user.login.toLowerCase(), category, title, detail).run();
  await audit(env.DB, user.login.toLowerCase(), 'feedback', title, category);
  return jsonResponse({ success: true });
}

async function handleListFeedback(request, env) {
  await requireAdmin(request, env);
  const url = new URL(request.url);
  const status = url.searchParams.get('status') || 'open';
  const { results } = await env.DB.prepare(
    'SELECT * FROM feedback WHERE status = ? ORDER BY created_at DESC'
  ).bind(status).all();
  return jsonResponse(results || []);
}
