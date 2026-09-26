/* ============================================================
 * resource-editor.js —— WYSIWYG 资源编辑器（通过 Worker/D1）
 * ============================================================ */
'use strict';

window.KTResourceEditor = (() => {
  const WORKER = 'https://pkt-oauth.pkt-oauth.workers.dev';

  let currentNodeId = null;
  let currentResources = [];

  function getToken() {
    try { return sessionStorage.getItem('pkt-github-token') || null; } catch (e) { return null; }
  }

  function $(id) { return document.getElementById(id); }

  function t(key) { return window.KTI18n.t(key); }

  const TYPE_OPTIONS = ['', '教材', '公开课', '论文', '笔记', '工具'];

  /* ---------- Worker API ---------- */
  async function workerApi(path, opts = {}) {
    const token = getToken();
    if (!token) throw new Error('未登录');
    const res = await fetch(`${WORKER}${path}`, {
      ...opts,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(opts.headers || {}),
      },
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || `Worker API ${res.status}`);
    return data;
  }

  /* ---------- 编辑器 HTML ---------- */
  function buildEditorHTML() {
    return `
<div id="res-editor-overlay" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);z-index:9999;overflow-y:auto;padding:20px;">
  <div id="res-editor-panel" style="background:#fff;border-radius:8px;max-width:640px;width:90%;margin:20px auto;max-height:none;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
    <div id="res-editor-header" style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid #eee;">
      <strong style="font-size:16px;">编辑推荐资料</strong>
      <button id="res-editor-close" style="background:none;border:none;font-size:22px;cursor:pointer;color:#999;">&times;</button>
    </div>
    <div id="res-editor-body" style="padding:14px 18px;flex:1;overflow:auto;">
      <div id="res-editor-rows"></div>
      <button id="res-editor-add" style="margin-top:10px;padding:6px 14px;background:rgba(88,166,255,0.1);border:1px dashed var(--accent);color:var(--accent);border-radius:6px;cursor:pointer;font-size:13px;">+ 添加资料</button>
    </div>
    <div id="res-editor-footer" style="display:flex;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid #eee;">
      <span id="res-editor-status" style="margin-right:auto;font-size:13px;color:#666;align-self:center;"></span>
      <button id="res-editor-cancel" class="btn">取消</button>
      <button id="res-editor-save" class="btn" style="background:var(--accent);color:#fff;">保存</button>
    </div>
  </div>
</div>`;
  }

  /* ---------- 事件绑定 ---------- */
  function bindEvents() {
    $('res-editor-close').addEventListener('click', close);
    $('res-editor-cancel').addEventListener('click', close);
    $('res-editor-save').addEventListener('click', doSave);
    $('res-editor-add').addEventListener('click', () => {
      currentResources.push({ title: '', type: '', url: '', note: '' });
      renderRows();
    });
    $('res-editor-overlay').addEventListener('click', e => {
      if (e.target === $('res-editor-overlay')) close();
    });
  }

  /* ---------- 渲染行 ---------- */
  function renderRows() {
    const container = $('res-editor-rows');
    if (!container) return;
    container.innerHTML = currentResources.map((r, i) => `
<div class="res-row" style="display:flex;gap:8px;align-items:center;margin-bottom:10px;flex-wrap:wrap;">
  <input data-idx="${i}" data-field="title" value="${esc(r.title)}" placeholder="名称" style="flex:1;min-width:100px;padding:6px 8px;border:1px solid #ddd;border-radius:4px;font-size:13px;">
  <select data-idx="${i}" data-field="type" style="padding:6px 8px;border:1px solid #ddd;border-radius:4px;font-size:13px;">
    ${TYPE_OPTIONS.map(o => `<option value="${esc(o)}" ${r.type === o ? 'selected' : ''}>${esc(o || '类型')}</option>`).join('')}
  </select>
  <input data-idx="${i}" data-field="url" value="${esc(r.url)}" placeholder="https://..." style="flex:2;min-width:160px;padding:6px 8px;border:1px solid #ddd;border-radius:4px;font-size:13px;">
  <input data-idx="${i}" data-field="note" value="${esc(r.note)}" placeholder="备注" style="flex:1;min-width:80px;padding:6px 8px;border:1px solid #ddd;border-radius:4px;font-size:13px;">
  <button data-del="${i}" style="padding:4px 10px;background:#fee2e2;border:1px solid #fecaca;color:#ef4444;border-radius:4px;cursor:pointer;font-size:12px;">删除</button>
</div>`).join('');

    container.querySelectorAll('input,select').forEach(el => {
      el.addEventListener('input', () => {
        const idx = parseInt(el.dataset.idx, 10);
        const field = el.dataset.field;
        currentResources[idx][field] = el.value;
      });
    });
    container.querySelectorAll('button[data-del]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.del, 10);
        currentResources.splice(idx, 1);
        renderRows();
      });
    });
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  /* ---------- 保存 ---------- */
  async function doSave() {
    const status = $('res-editor-status');
    if (!currentNodeId) return;

    // 过滤空行
    const filtered = currentResources.filter(r => r.title.trim() || r.url.trim());

    // 校验 URL
    for (const r of filtered) {
      if (r.url && !r.url.startsWith('https://')) {
        status.textContent = 'URL 必须以 https:// 开头';
        return;
      }
    }

    status.textContent = '保存中…';
    $('res-editor-save').disabled = true;
    try {
      await workerApi(`/api/node/${encodeURIComponent(currentNodeId)}/resources`, {
        method: 'POST',
        body: JSON.stringify({ resources: filtered }),
      });
      status.textContent = '已保存，约 30 秒后刷新生效';
      setTimeout(() => close(), 800);
    } catch (e) {
      status.textContent = '保存失败：' + e.message;
    } finally {
      $('res-editor-save').disabled = false;
    }
  }

  /* ---------- 打开/关闭 ---------- */
  async function open(nodeId) {
    if (!window.KTAuth || !window.KTAuth.isAdmin()) {
      alert('您没有编辑权限');
      return;
    }

    currentNodeId = nodeId;
    const node = window.PHYSICS_GRAPH?.nodes?.find(n => n.id === nodeId);
    currentResources = (node?.resources || []).map(r => ({
      title: String(r.title || ''),
      type: String(r.type || ''),
      url: String(r.url || ''),
      note: String(r.note || ''),
    }));

    const overlay = $('res-editor-overlay');
    if (!overlay) {
      document.body.insertAdjacentHTML('beforeend', buildEditorHTML());
      bindEvents();
    }
    $('res-editor-overlay').style.display = 'block';
    $('res-editor-status').textContent = '';
    renderRows();
  }

  function close() {
    const overlay = $('res-editor-overlay');
    if (overlay) overlay.style.display = 'none';
    currentNodeId = null;
  }

  return { open, close };
})();
