/* ============================================================
 * detail.js —— 右侧详情抽屉
 * ============================================================ */
'use strict';

window.KTDetail = (() => {
  const KT = window.KT;
  const { GRAPH, nodeMap, $, $$, esc, renderMarkdown, REL_LABEL } = KT;

  const drawer = $('#detail');
  const head = $('#detail-head');
  const scroll = $('#detail-scroll');
  const titleEl = $('#detail-title');
  const subEl = $('#detail-sub');

  function render(id) {
    const n = nodeMap[id];
    if (!n) return;

    // ---- 头部 ----
    titleEl.innerHTML = esc(n.name) +
      (n.nameEn ? `<span class="en">${esc(n.nameEn)}</span>` : '');
    let sub = `<span class="badge-domain" style="background:${esc(n.color)}">${esc(n.domainName)}</span>`;
    if (n.aliases && n.aliases.length) {
      sub += `<span class="alias-list">别名：${n.aliases.map(esc).join(' / ')}</span>`;
    }
    subEl.innerHTML = sub;

    // ---- 滚动区 ----
    let html = '';

    // 正文
    html += `<div class="sec-body" id="body-md"></div>`;

    // 连线（二元关系：先修 / 相关），先修在前
    const links = n.links || [];
    const prereqOut = links.filter(l => l.type === 'prereq' && l.dir === 'out');
    const prereqIn = links.filter(l => l.type === 'prereq' && l.dir === 'in');
    const related = links.filter(l => l.type === 'related');

    const card = (l, tag, arrow) =>
      `<div class="link-card ${l.type === 'prereq' ? 'prereq' : ''}" data-jump="${esc(l.id)}">
        <span class="nm">${esc(l.name)}</span>
        <span class="wtag ${l.type === 'related' ? 'rel' : ''}">${esc(tag)}</span>
        <span class="arrow">${arrow}</span>
      </div>
      ${l.note ? `<div class="link-card-note">${esc(l.note)}</div>` : ''}`;

    // 先修：学习本节点前应先掌握
    if (prereqOut.length) {
      html += `<div class="sec-links"><div class="lbl">先修知识（学习本节点前建议掌握）</div>`;
      prereqOut.forEach(l => { html += card(l, REL_LABEL.prereq, '→'); });
      html += `</div>`;
    }

    // 后续：以本节点为先修的节点
    if (prereqIn.length) {
      html += `<div class="sec-links"><div class="lbl">后续知识（以本节点为先修）</div>`;
      prereqIn.forEach(l => { html += card(l, '后续', '←'); });
      html += `</div>`;
    }

    // 相关
    if (related.length) {
      html += `<div class="sec-links"><div class="lbl">相关知识点</div>`;
      related.forEach(l => { html += card(l, REL_LABEL.related, '→'); });
      html += `</div>`;
    }

    // 更远关联（软连接）
    const soft = n.softLinks || [];
    if (soft.length) {
      html += `<div class="sec-links"><div class="lbl">更远的关联（图中未直接连线）</div>`;
      soft.forEach(l => {
        const tag = l.type === 'prereq' ? (l.dir === 'in' ? '后续' : REL_LABEL.prereq) : REL_LABEL.related;
        html += `<div class="link-card soft ${l.type === 'prereq' ? 'prereq' : ''}" data-jump="${esc(l.id)}">
          <span class="nm">${esc(l.name)}</span>
          <span class="wtag ${l.type === 'related' ? 'rel' : ''}">${esc(tag)}</span>
          <span class="arrow">↗</span>
        </div>`;
      });
      html += `</div>`;
    }

    // 脚注
    html += `<div class="sec-foot">
      ID：${esc(n.id)} · 领域：${esc(n.domainName)} · 直接连接 ${n.links ? n.links.length : 0} 个
      ${n.degree != null ? ` · 总关联 ${n.degree} 个` : ''}
      ${n.updated ? ` · 更新 ${esc(n.updated)}` : ''}
    </div>`;

    scroll.innerHTML = html;

    // 渲染正文 markdown + 公式
    const bodyEl = $('#body-md', scroll);
    renderMarkdown(n.body, bodyEl);

    // 绑定跳转
    $$('.jump-link, .link-card', scroll).forEach(el => {
      el.addEventListener('click', ev => {
        ev.stopPropagation();
        const target = el.getAttribute('data-jump');
        if (target && window.KTApp && KTApp.selectNode) {
          KTApp.selectNode(target, 'hyperlink');
        }
      });
    });

    drawer.classList.remove('closed');
  }

  function close() {
    drawer.classList.add('closed');
  }

  function isOpen() {
    return !drawer.classList.contains('closed');
  }

  return { render, close, isOpen };
})();
