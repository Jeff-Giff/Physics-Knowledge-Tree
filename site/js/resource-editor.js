/* ============================================================
 * resource-editor.js —— 推荐资料 WYSIWYG 编辑器
 * 通过 GitHub Contents API 直接读写仓库文件
 * ============================================================ */
'use strict';

window.KTResourceEditor = (() => {
  const REPO = 'jeff-giff/Physics-Knowledge-Tree';
  const BRANCH = 'main';
  const CONTENT_API = `https://api.github.com/repos/${REPO}/contents`;

  const RESOURCE_TYPES = [
    { key: '教材', label: 'res_type_textbook' },
    { key: '公开课', label: 'res_type_course' },
    { key: '论文', label: 'res_type_paper' },
    { key: '笔记', label: 'res_type_note' },
    { key: '工具', label: 'res_type_tool' },
  ];

  let currentNodeId = null;
  let currentFilePath = null;
  let currentSha = null;
  let currentResources = [];

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function getToken() {
    try { return sessionStorage.getItem('pkt-github-token') || null; } catch (e) { return null; }
  }

  /* 从 graph.js 中查找节点 */
  function findNode(nid) {
    const g = window.PHYSICS_GRAPH;
    if (!g || !g.nodes) return null;
    return g.nodes.find(x => x.id === nid) || null;
  }

  function findNodeFile(nid) {
    const n = findNode(nid);
    return n ? (n.file || `content/${n.domain}/${nid}.md`) : null;
  }

  /* 拉取文件内容与 sha */
  async function fetchFile(path) {
    const token = getToken();
    if (!token) throw new Error('未登录');
    const res = await fetch(`${CONTENT_API}/${encodeURIComponent(path)}?ref=${BRANCH}`, {
      headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github+json' }
    });
    if (!res.ok) {
      if (res.status === 404) throw new Error('文件不存在');
      if (res.status === 401) throw new Error('登录已过期，请重新登录');
      throw new Error(`GitHub API ${res.status}`);
    }
    const data = await res.json();
    const text = atob(data.content.replace(/\n/g, ''));
    return { content: text, sha: data.sha };
  }

  /* 只替换 front-matter 中的 resources 块 */
  function patchResources(text, resources) {
    // 定位 front-matter
    if (!text.startsWith('---')) return null;
    const endIdx = text.indexOf('\n---', 3);
    if (endIdx === -1) return null;
    const fmText = text.slice(3, endIdx);
    const body = text.slice(endIdx + 4);

    // 生成新的 resources YAML
    let resYaml = '';
    if (resources.length === 0) {
      resYaml = 'resources: []';
    } else {
      resYaml = 'resources:\n' + resources.map(r => {
        const lines = [`  - title: ${r.title}`];
        if (r.type) lines.push(`    type: ${r.type}`);
        lines.push(`    url: ${r.url}`);
        if (r.note) lines.push(`    note: ${r.note}`);
        return lines.join('\n');
      }).join('\n');
    }

    // 替换或插入 resources 字段
    const fmLines = fmText.split('\n');
    const newLines = [];
    let i = 0;
    let inserted = false;
    while (i < fmLines.length) {
      const line = fmLines[i];
      // 如果遇到 resources: 行
      if (line.trim().startsWith('resources:')) {
        // 跳过旧 resources 块（缩进的行）
        i++;
        while (i < fmLines.length && (fmLines[i].startsWith('  ') || fmLines[i].startsWith('\t') || fmLines[i].trim() === '')) {
          i++;
        }
        newLines.push(resYaml);
        inserted = true;
        continue;
      }
      // 如果遇到下一个顶层键（非缩进且非空行），在此之前插入 resources（如果还没插入过）
      if (!inserted && line.trim() && !line.startsWith(' ') && !line.startsWith('\t') && i > 0) {
        newLines.push(resYaml);
        inserted = true;
      }
      newLines.push(line);
      i++;
    }
    if (!inserted) {
      newLines.push(resYaml);
    }

    return '---' + newLines.join('\n') + '\n---' + body;
  }

  /* 提交修改 */
  async function commitFile(path, content, sha) {
    const token = getToken();
    if (!token) throw new Error('未登录');
    const message = `资源更新: ${currentNodeId} by @${window.KTAuth.getUser()?.login || 'unknown'}`;
    const res = await fetch(`${CONTENT_API}/${encodeURIComponent(path)}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        content: btoa(unescape(encodeURIComponent(content))),
        sha,
        branch: BRANCH,
      }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      if (res.status === 409 || (data.message && data.message.includes('sha'))) {
        throw new Error('CONFLICT');
      }
      throw new Error(data.message || `GitHub API ${res.status}`);
    }
    return res.json();
  }

  /* 构建编辑器 HTML */
  function buildEditorHTML() {
    const t = window.KTI18n.t;
    const typeOptions = RESOURCE_TYPES.map(tp =>
      `<option value="${esc(tp.key)}">${esc(t(tp.label))}</option>`
    ).join('');

    return `
<div id="res-editor-overlay" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);z-index:9999;align-items:center;justify-content:center;">
  <div id="res-editor-panel" style="background:#fff;border-radius:8px;max-width:640px;width:90%;max-height:85vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
    <div style="padding:16px 20px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
      <strong style="font-size:16px;">${esc(t('res_title'))}</strong>
      <button id="res-editor-close" style="background:none;border:none;font-size:20px;cursor:pointer;color:#666;">✕</button>
    </div>
    <div id="res-editor-list" style="flex:1;overflow:auto;padding:16px 20px;"></div>
    <div style="padding:12px 20px;border-top:1px solid #e5e7eb;display:flex;gap:8px;justify-content:flex-end;">
      <button id="res-editor-add" class="btn" style="margin-right:auto;">${esc(t('res_add'))}</button>
      <button id="res-editor-cancel" class="btn">${esc(t('res_cancel'))}</button>
      <button id="res-editor-save" class="btn" style="background:#2563eb;color:#fff;">${esc(t('res_save'))}</button>
    </div>
    <div id="res-editor-status" style="padding:8px 20px;font-size:13px;color:#666;min-height:20px;"></div>
  </div>
</div>
<style>
.res-row { display:grid; grid-template-columns:1fr 100px 1fr 1fr 32px; gap:8px; margin-bottom:8px; align-items:center; }
.res-row input, .res-row select { padding:6px 8px; border:1px solid #d1d5db; border-radius:4px; font-size:13px; }
.res-row .res-del { background:#fee2e2; color:#b91c1c; border:none; border-radius:4px; cursor:pointer; font-size:16px; }
.res-row .res-del:hover { background:#fecaca; }
@media (max-width:600px) {
  .res-row { grid-template-columns:1fr 1fr; }
  .res-row input:nth-child(3), .res-row input:nth-child(4) { grid-column:1 / -1; }
}
</style>
`;
  }

  function renderRows() {
    const list = $('#res-editor-list');
    const t = window.KTI18n.t;
    if (!list) return;

    if (currentResources.length === 0) {
      list.innerHTML = `<div style="color:#999;text-align:center;padding:20px;">${esc(t('res_empty'))}</div>`;
      return;
    }

    list.innerHTML = currentResources.map((r, i) => {
      const typeOptions = RESOURCE_TYPES.map(tp =>
        `<option value="${esc(tp.key)}" ${r.type === tp.key ? 'selected' : ''}>${esc(t(tp.label))}</option>`
      ).join('');
      return `
<div class="res-row" data-idx="${i}">
  <input class="res-title" placeholder="${esc(t('res_label_title'))}" value="${esc(r.title)}">
  <select class="res-type">${typeOptions}</select>
  <input class="res-url" placeholder="${esc(t('res_label_url'))}" value="${esc(r.url)}">
  <input class="res-note" placeholder="${esc(t('res_label_note'))}" value="${esc(r.note)}">
  <button class="res-del" title="删除">✕</button>
</div>`;
    }).join('');

    // 绑定删除
    list.querySelectorAll('.res-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.closest('.res-row').dataset.idx, 10);
        currentResources.splice(idx, 1);
        renderRows();
      });
    });
  }

  function gatherFromDOM() {
    const list = $('#res-editor-list');
    if (!list) return [];
    const rows = list.querySelectorAll('.res-row');
    const arr = [];
    rows.forEach(row => {
      const title = row.querySelector('.res-title').value.trim();
      const type = row.querySelector('.res-type').value;
      const url = row.querySelector('.res-url').value.trim();
      const note = row.querySelector('.res-note').value.trim();
      if (!title || !url) return;
      arr.push({ title, type, url, note });
    });
    return arr;
  }

  async function open(nodeId) {
    currentNodeId = nodeId;
    currentFilePath = findNodeFile(nodeId);
    if (!currentFilePath) {
      alert('找不到节点对应的文件');
      return;
    }

    // 读取现有文件（取 sha 和完整内容用于 patch）
    const status = $('#res-editor-status');
    if (status) status.textContent = '读取中…';
    try {
      const file = await fetchFile(currentFilePath);
      currentSha = file.sha;
    } catch (e) {
      if (status) status.textContent = '读取失败: ' + e.message;
      return;
    }

    // 从 graph.js 读取当前 resources 作为初始值
    const node = findNode(nodeId);
    currentResources = (node && node.resources || []).map(r => ({
      title: String(r.title || ''),
      type: String(r.type || ''),
      url: String(r.url || ''),
      note: String(r.note || ''),
    }));

    // 显示编辑器
    const overlay = $('#res-editor-overlay');
    if (!overlay) {
      document.body.insertAdjacentHTML('beforeend', buildEditorHTML());
      bindEvents();
    }
    $('#res-editor-overlay').style.display = 'flex';
    renderRows();
    if (status) status.textContent = '';
  }

  function close() {
    const overlay = $('#res-editor-overlay');
    if (overlay) overlay.style.display = 'none';
    currentNodeId = null;
    currentFilePath = null;
    currentSha = null;
    currentResources = [];
  }

  function bindEvents() {
    $('#res-editor-close').addEventListener('click', close);
    $('#res-editor-cancel').addEventListener('click', close);
    $('#res-editor-add').addEventListener('click', () => {
      currentResources.push({ title: '', type: '教材', url: '', note: '' });
      renderRows();
    });
    $('#res-editor-save').addEventListener('click', async () => {
      const t = window.KTI18n.t;
      const status = $('#res-editor-status');
      if (!currentFilePath) { status.textContent = '状态异常'; return; }
      currentResources = gatherFromDOM().slice(0, 10);

      status.textContent = '保存中…';
      try {
        // 重新拉取最新文件内容（获取最新 sha，同时检测冲突）
        const file = await fetchFile(currentFilePath);
        const newText = patchResources(file.content, currentResources);
        if (!newText) { status.textContent = '文件格式异常'; return; }
        await commitFile(currentFilePath, newText, file.sha);
        status.textContent = t('save_success');
        setTimeout(() => { close(); }, 1200);
      } catch (e) {
        if (e.message === 'CONFLICT') {
          status.textContent = t('save_conflict');
        } else {
          status.textContent = t('save_error', { msg: e.message });
        }
      }
    });
  }

  return { open, close };
})();
