/* ============================================================
 * admin.js —— GitHub Issues 管理员申请与审批
 * 基于 GitHub Issues API，零后端数据库
 * ============================================================ */
'use strict';

window.KTAdmin = (() => {
  const REPO = 'jeff-giff/Physics-Knowledge-Tree';
  const BRANCH = 'main';
  const LABEL = 'admin-application';
  const ISSUES_API = `https://api.github.com/repos/${REPO}/issues`;
  const CONTENT_API = `https://api.github.com/repos/${REPO}/contents`;

  function getToken() {
    try { return sessionStorage.getItem('pkt-github-token') || null; } catch (e) { return null; }
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  async function ghApi(url, opts = {}) {
    const token = getToken();
    if (!token) throw new Error('未登录');
    const res = await fetch(url, {
      ...opts,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        ...(opts.headers || {}),
      },
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.message || `GitHub API ${res.status}`);
    }
    return res.status === 204 ? null : res.json();
  }

  /* Base64 → UTF-8 */
  function b64ToUtf8(b64) {
    const binary = atob(b64.replace(/\n/g, ''));
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  }

  /* UTF-8 → Base64 */
  function utf8ToB64(text) {
    const bytes = new TextEncoder().encode(text);
    let binary = '';
    bytes.forEach(b => binary += String.fromCharCode(b));
    return btoa(binary);
  }

  /* ---------- 申请 ---------- */

  const TITLE_PREFIX = '管理员申请: @';

  async function applyAdmin(reason) {
    const user = window.KTAuth.getUser();
    if (!user) throw new Error('未登录');
    const title = `${TITLE_PREFIX}${user.login}`;
    const body = `**申请人**: @${user.login}\n**理由**: ${reason || '未填写'}\n**时间**: ${new Date().toISOString()}`;
    // 注意：不传 labels，普通用户没有创建 label 的权限
    return ghApi(ISSUES_API, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
    });
  }

  /* ---------- 查询 ---------- */

  async function listApplications() {
    // 获取所有 open issues，前端按标题前缀过滤（避免 labels 权限问题）
    const url = `${ISSUES_API}?state=open&sort=created&direction=asc&per_page=100`;
    const all = await ghApi(url);
    return (all || []).filter(issue => issue.title && issue.title.startsWith(TITLE_PREFIX));
  }

  /* ---------- 审批 ---------- */

  async function approveApplication(issueNumber, applicantLogin) {
    // 1. 关闭 Issue + 评论
    await ghApi(`${ISSUES_API}/${issueNumber}`, {
      method: 'PATCH',
      body: JSON.stringify({ state: 'closed' }),
    });
    await ghApi(`${ISSUES_API}/${issueNumber}/comments`, {
      method: 'POST',
      body: JSON.stringify({ body: `✅ 已通过审批，@${applicantLogin} 已被添加至管理员名单。` }),
    });
    // 2. 修改 _admins.yaml
    await addAdminToFile(applicantLogin);
  }

  async function rejectApplication(issueNumber, note) {
    await ghApi(`${ISSUES_API}/${issueNumber}`, {
      method: 'PATCH',
      body: JSON.stringify({ state: 'closed' }),
    });
    await ghApi(`${ISSUES_API}/${issueNumber}/comments`, {
      method: 'POST',
      body: JSON.stringify({ body: `❌ 未通过审批。${note || ''}` }),
    });
  }

  /* ---------- _admins.yaml 读写 ---------- */

  async function fetchAdminsFile() {
    const res = await fetch(`${CONTENT_API}/content%2F_admins.yaml?ref=${BRANCH}`, {
      headers: { 'Authorization': `Bearer ${getToken()}`, 'Accept': 'application/vnd.github+json' },
    });
    if (!res.ok) throw new Error(`读取管理员文件失败: ${res.status}`);
    const data = await res.json();
    return { text: b64ToUtf8(data.content), sha: data.sha };
  }

  async function addAdminToFile(login) {
    const { text, sha } = await fetchAdminsFile();
    const lower = login.toLowerCase().trim();
    if (text.includes(`- ${lower}`)) return; // 已存在

    // 在 admins: 下插入新行
    const lines = text.split('\n');
    const idx = lines.findIndex(l => l.trim() === 'admins:');
    if (idx === -1) throw new Error('文件格式异常');

    // 找到 admins 列表末尾
    let insertIdx = idx + 1;
    while (insertIdx < lines.length && (lines[insertIdx].startsWith('  - ') || lines[insertIdx].trim() === '')) {
      insertIdx++;
    }
    lines.splice(insertIdx, 0, `  - ${lower}`);

    const newText = lines.join('\n');
    const user = window.KTAuth.getUser();
    const message = `添加管理员: ${lower} by @${user?.login || 'unknown'}`;

    const res = await fetch(`${CONTENT_API}/content%2F_admins.yaml`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        content: utf8ToB64(newText),
        sha,
        branch: BRANCH,
      }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.message || `更新管理员文件失败 ${res.status}`);
    }
  }

  async function removeAdminFromFile(login) {
    const { text, sha } = await fetchAdminsFile();
    const lower = login.toLowerCase().trim();
    const lines = text.split('\n');
    const filtered = lines.filter(l => l.trim() !== `- ${lower}`);
    if (filtered.length === lines.length) return; // 未找到

    const newText = filtered.join('\n');
    const user = window.KTAuth.getUser();
    const message = `移除管理员: ${lower} by @${user?.login || 'unknown'}`;

    const res = await fetch(`${CONTENT_API}/content%2F_admins.yaml`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        content: utf8ToB64(newText),
        sha,
        branch: BRANCH,
      }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.message || `更新管理员文件失败 ${res.status}`);
    }
  }

  /* ---------- 查询自己的申请 ---------- */

  async function checkMyApplication() {
    const user = window.KTAuth.getUser();
    if (!user) return null;
    const url = `${ISSUES_API}?state=all&sort=created&direction=desc&per_page=100`;
    const all = await ghApi(url);
    const mine = (all || []).filter(
      issue => issue.title && issue.title === `${TITLE_PREFIX}${user.login}`
    );
    return mine.length > 0 ? mine[0] : null;
  }

  /* ---------- 反映问题 ---------- */

  const FEEDBACK_PREFIX = '[反馈] ';

  async function reportIssue(category, title, detail) {
    const user = window.KTAuth.getUser();
    if (!user) throw new Error('未登录');
    const fullTitle = `${FEEDBACK_PREFIX}${category}: ${title}`;
    const body = `**反馈人**: @${user.login}\n**分类**: ${category}\n**详情**:\n${detail || '未填写'}\n**时间**: ${new Date().toISOString()}`;
    return ghApi(ISSUES_API, {
      method: 'POST',
      body: JSON.stringify({ title: fullTitle, body }),
    });
  }

  /* ---------- 当前管理员列表 ---------- */

  function listAdmins() {
    const g = window.PHYSICS_GRAPH;
    return (g && g.admins) ? [...g.admins] : [];
  }

  return {
    applyAdmin,
    listApplications,
    approveApplication,
    rejectApplication,
    checkMyApplication,
    reportIssue,
    listAdmins,
    addAdminToFile,
    removeAdminFromFile,
  };
})();
