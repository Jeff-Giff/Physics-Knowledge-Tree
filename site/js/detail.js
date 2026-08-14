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
  let currentId = null;

  /* 节点/连接目标的显示名（按当前语言） */
  function disp(idOrNode, fallbackName) {
    const n = typeof idOrNode === 'string' ? nodeMap[idOrNode] : idOrNode;
    if (n) return KTI18n.nodeName(n);
    return fallbackName || '';
  }

  function render(id) {
    const n = nodeMap[id];
    if (!n) return;
    currentId = id;
    const t = KTI18n.t;

    // ---- 头部 ----
    const mainName = KTI18n.lang === 'en' ? (n.nameEn || n.name) : n.name;
    const subName = KTI18n.lang === 'en' ? n.name : (n.nameEn || '');
    titleEl.innerHTML = esc(mainName) +
      (subName ? `<span class="en">${esc(subName)}</span>` : '');
    const domainText = KTI18n.domainName(n.domain);
    let sub = `<span class="badge-domain" style="background:${esc(n.color)}">${esc(domainText)}</span>`;
    if (n.aliases && n.aliases.length) {
      sub += `<span class="alias-list">${esc(t('det_alias'))}${n.aliases.map(esc).join(' / ')}</span>`;
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
        <span class="nm">${esc(disp(l.id, l.name))}</span>
        <span class="wtag ${l.type === 'related' ? 'rel' : ''}">${esc(tag)}</span>
        <span class="arrow">${arrow}</span>
      </div>
      ${l.note ? `<div class="link-card-note">${esc(l.note)}</div>` : ''}`;

    // 先修：学习本节点前应先掌握
    if (prereqOut.length) {
      html += `<div class="sec-links"><div class="lbl">${esc(t('det_prereq'))}</div>`;
      prereqOut.forEach(l => { html += card(l, t('rel_prereq'), '→'); });
      html += `</div>`;
    }

    // 后续：以本节点为先修的节点
    if (prereqIn.length) {
      html += `<div class="sec-links"><div class="lbl">${esc(t('det_successor'))}</div>`;
      prereqIn.forEach(l => { html += card(l, t('rel_successor'), '←'); });
      html += `</div>`;
    }

    // 相关
    if (related.length) {
      html += `<div class="sec-links"><div class="lbl">${esc(t('det_related'))}</div>`;
      related.forEach(l => { html += card(l, t('rel_related'), '→'); });
      html += `</div>`;
    }

    // 更远关联（软连接）
    const soft = n.softLinks || [];
    if (soft.length) {
      html += `<div class="sec-links"><div class="lbl">${esc(t('det_soft'))}</div>`;
      soft.forEach(l => {
        const tag = l.type === 'prereq' ? (l.dir === 'in' ? t('rel_successor') : t('rel_prereq')) : t('rel_related');
        html += `<div class="link-card soft ${l.type === 'prereq' ? 'prereq' : ''}" data-jump="${esc(l.id)}">
          <span class="nm">${esc(disp(l.id, l.name))}</span>
          <span class="wtag ${l.type === 'related' ? 'rel' : ''}">${esc(tag)}</span>
          <span class="arrow">↗</span>
        </div>`;
      });
      html += `</div>`;
    }

    // 脚注
    html += `<div class="sec-foot">${
      t('det_foot', { id: n.id, domain: domainText, links: n.links ? n.links.length : 0 })
    }${n.degree != null ? t('det_foot_degree', { degree: n.degree }) : ''}${
      n.updated ? t('det_foot_updated', { updated: n.updated }) : ''
    }</div>`;

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

  // 语言切换时重渲染已打开的详情
  KTI18n.onChange(() => {
    if (isOpen() && currentId) render(currentId);
  });

  return { render, close, isOpen };
})();
