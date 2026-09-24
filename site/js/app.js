/* ============================================================
 * app.js —— 3D 全局视图 + 2D 局部平面视图 + 云图 + 交互编排
 * ============================================================ */
'use strict';

window.KTApp = (() => {
  const KT = window.KT;
  const { GRAPH, nodeMap, $, $$ } = KT;

  // ------------------------- 状态 -------------------------
  const LS_KEY = 'physics-kn-tree-settings';
  function loadSettings() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch (e) { return {}; }
  }
  function saveSettings() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({
        labelFontSize: state.labelFontSize,
        spacing: state.spacing,
      }));
    } catch (e) { /* ignore */ }
  }
  const saved = loadSettings();

  const state = {
    mode: '3d',                 // '3d' 全局 | '2d' 局部平面
    selected: null,             // 当前选中节点 id
    labelsOn: true,
    hiddenDomains: new Set(),
    labelFontSize: typeof saved.labelFontSize === 'number' ? saved.labelFontSize : 15,
    spacing: typeof saved.spacing === 'number' ? saved.spacing : 1,
    highlightId: null,                      // 单击高亮的节点 id
    highlightSet: null,                     // 单击高亮的节点集合（相连 + 先修链与子树）
    hlDomains: new Set(),                   // 分类高亮：勾选的领域 id 集合（3D，可多选）
    lastClick: { id: null, time: 0 },       // 双击判定
  };

  const dom = {
    graph3d: $('#graph3d'),
    graph2d: $('#graph2d'),
    hint2d: $('#hint2d'),
    legend: $('#cloud-legend'),
    loading: $('#loading'),
    btnGlobal: $('#btn-global'),
    btnLabels: $('#btn-labels'),
    btnLegend: $('#btn-legend'),
    btnReset: $('#btn-reset'),
    btnLang: $('#btn-lang'),
    btnDomainHl: $('#btn-domain-hl'),
    domainPanel: $('#domain-panel'),
    fontSlider: $('#font-slider'),
    spacingCtl: $('#spacing-ctl'),
    spacingSlider: $('#spacing-slider'),
    stat: $('#stat'),
    detailClose: $('#detail-close'),
  };

  // ------------------------- 数据 -------------------------
  function buildNodes() {
    return GRAPH.nodes.map(n => ({
      id: n.id, name: n.name, nameEn: n.nameEn, domain: n.domain, color: n.color,
      size: n.size, degree: n.degree,
    }));
  }
  function buildLinks() {
    return GRAPH.links.map(l => ({
      source: l.source, target: l.target,
      type: l.type || 'related', soft: !!l.soft,
    }));
  }

  const adj = {};
  // 先修关系的有向邻接（数据方向：source=先修, target=后继）
  const prereqChildren = {};  // 先修节点 -> 后继节点集合（向下）
  const prereqParents = {};   // 后继节点 -> 先修节点集合（向上）
  GRAPH.links.forEach(l => {
    (adj[l.source] = adj[l.source] || new Set()).add(l.target);
    (adj[l.target] = adj[l.target] || new Set()).add(l.source);
    if (l.type === 'prereq') {
      (prereqChildren[l.source] = prereqChildren[l.source] || new Set()).add(l.target);
      (prereqParents[l.target] = prereqParents[l.target] || new Set()).add(l.source);
    }
  });

  // 单击高亮集合：直接相连（含一级后继子树）+ 沿先修向上追溯到顶端（完整先修链）
  function computeHighlightSet(id) {
    const set = new Set([id]);
    // 1) 直接相连（任意关系；先修后继即为一级子树，先修前驱即先修链第一站）
    (adj[id] || new Set()).forEach(x => set.add(x));
    // 2) 向上追溯：先修的先修……直到无先修（如追溯到 高等数学）
    // 注意：用独立的 visited 记录遍历进度——直接相连的祖先已在 set 中，
    // 但仍需继续向上扩展它们的先修。
    const stack = [...(prereqParents[id] || new Set())];
    const visited = new Set();
    while (stack.length) {
      const x = stack.pop();
      if (visited.has(x)) continue;
      visited.add(x);
      set.add(x);
      (prereqParents[x] || new Set()).forEach(p => stack.push(p));
    }
    return set;
  }

  const isDomainVisible = d => !state.hiddenDomains.has(d);

  // ------------------------- 3D 节点对象 -------------------------
  const labelTextureCache = new Map();
  function getLabelTexture(text) {
    const key = state.labelFontSize + ':' + text;
    let tex = labelTextureCache.get(key);
    if (!tex) {
      tex = makeLabelTexture(text);
      labelTextureCache.set(key, tex);
    }
    return tex;
  }

  function makeLabelTexture(text) {
    const dpr = 4;
    const fontSize = state.labelFontSize * dpr;
    const font = `${fontSize}px "Microsoft YaHei","PingFang SC",sans-serif`;
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    ctx.font = font;
    const tw = ctx.measureText(text).width;
    const padX = 10 * dpr;
    const padY = 12 * dpr;
    const W = Math.ceil(tw + padX * 2);
    const H = Math.ceil(fontSize + padY * 2);
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    g.font = font;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.lineJoin = 'round';
    g.strokeStyle = 'rgba(0,0,0,0.85)';
    g.lineWidth = Math.max(2, fontSize * 0.1);
    g.strokeText(text, W / 2, H / 2);
    g.fillStyle = '#ffffff';
    g.fillText(text, W / 2, H / 2);
    const tex = new THREE.CanvasTexture(c);
    tex.generateMipmaps = false;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }

  function makeLabelSprite(text) {
    const tex = getLabelTexture(text);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.renderOrder = 999;
    const worldH = (state.labelFontSize + 20) * 0.055;
    const W = tex.image.width, H = tex.image.height;
    sprite.scale.set(worldH * (W / H), worldH, 1);
    return sprite;
  }

  function nodeRadius(n) {
    return 0.8 + Math.sqrt(n.size) * 0.30;
  }

  // 节点是否处于压暗状态：单击高亮优先；否则按分类高亮勾选压暗其他领域
  function isNodeDimmed(node) {
    if (state.highlightId) return state.highlightSet ? !state.highlightSet.has(node.id) : false;
    if (state.hlDomains.size) return !state.hlDomains.has(node.domain);
    return false;
  }

  function makeNodeObject(node) {
    const r = nodeRadius(node);
    const group = new THREE.Group();
    const dimmed = isNodeDimmed(node);
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(r, 22, 22),
      new THREE.MeshPhongMaterial({ color: node.color, transparent: true, opacity: dimmed ? 0.12 : 0.92 })
    );
    sphere.userData.isNode = true;
    sphere.userData.nodeId = node.id;
    group.add(sphere);

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(r * 1.4, r * 0.1, 8, 48),
      new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.85 })
    );
    halo.userData.isHalo = true;
    halo.visible = node.id === state.selected || node.id === state.highlightId;
    group.add(halo);

    const label = makeLabelSprite(KTI18n.nodeName(node));
    label.position.set(0, r + 1.2 + state.labelFontSize / 60, 0);
    label.userData.isLabel = true;
    label.visible = state.labelsOn;
    if (state.labelsOn && dimmed) label.material.opacity = 0.18;
    group.add(label);
    return group;
  }

  function setLabels(on) {
    state.labelsOn = on;
    Graph3D.scene().traverse(o => {
      if (o.userData && o.userData.isLabel) o.visible = on;
    });
    dom.btnLabels.classList.toggle('active', on);
  }

  // ------------------------- 云图 -------------------------
  const cloudSprites = {};

  function makeCloudTexture() {
    const size = 128;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d');
    const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, 'rgba(255,255,255,0.9)');
    grad.addColorStop(0.45, 'rgba(255,255,255,0.32)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(c);
  }

  function initClouds() {
    const tex = makeCloudTexture();
    Object.entries(GRAPH.meta.domains).forEach(([did, d]) => {
      const mat = new THREE.SpriteMaterial({
        map: tex, color: d.color, transparent: true,
        opacity: Math.max(0.22, (d.cloud_alpha || 0.08) * 3),
        depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.userData.isCloud = true;
      sprite.userData.domain = did;
      sprite.visible = false;
      Graph3D.scene().add(sprite);
      cloudSprites[did] = sprite;
    });
  }

  function updateClouds() {
    const nodes = Graph3D.graphData().nodes;
    if (!nodes || !nodes.length) return;
    const sums = {}, cnt = {}, maxr = {};
    nodes.forEach(n => {
      (sums[n.domain] = sums[n.domain] || { x: 0, y: 0, z: 0 });
      sums[n.domain].x += n.x; sums[n.domain].y += n.y; sums[n.domain].z += n.z;
      cnt[n.domain] = (cnt[n.domain] || 0) + 1;
    });
    nodes.forEach(n => {
      const c = sums[n.domain], k = cnt[n.domain];
      if (!c || !k) return;
      const dx = n.x - c.x / k, dy = n.y - c.y / k, dz = n.z - c.z / k;
      const rr = Math.sqrt(dx * dx + dy * dy + dz * dz);
      maxr[n.domain] = Math.max(maxr[n.domain] || 0, rr);
    });
    Object.entries(cloudSprites).forEach(([did, sprite]) => {
      const d = GRAPH.meta.domains[did];
      const k = cnt[did];
      const visible = state.mode === '3d' && isDomainVisible(did) && k > 0;
      if (!visible) { sprite.visible = false; return; }
      if (sprite.parent === null) Graph3D.scene().add(sprite);
      sprite.visible = true;
      const cx = sums[did].x / k, cy = sums[did].y / k, cz = sums[did].z / k;
      sprite.position.set(cx, cy, cz);
      const targetR = Math.max(70, (maxr[did] || 40) * 2.6) * (d.cloud_r || 1);
      sprite.scale.set(targetR, targetR, 1);
      // 高亮激活时云团大幅减弱，避免加色发光盖过高亮链路；
      // 分类高亮时未勾选领域的云团同样减弱
      let cloudFade = 1;
      if (state.highlightId) cloudFade = 0.15;
      else if (state.hlDomains.size && !state.hlDomains.has(did)) cloudFade = 0.15;
      sprite.material.opacity = Math.max(0.22, (d.cloud_alpha || 0.08) * 3) * cloudFade;
      sprite.material.color.set(d.color);
    });
  }

  // 领域聚集力：把同领域节点拉向领域质心，形成云团
  function cloudClusterForce(alpha) {
    const nodes = Graph3D.graphData().nodes;
    const sums = {}, cnt = {};
    nodes.forEach(n => {
      (sums[n.domain] = sums[n.domain] || { x: 0, y: 0, z: 0 });
      sums[n.domain].x += n.x; sums[n.domain].y += n.y; sums[n.domain].z += n.z;
      cnt[n.domain] = (cnt[n.domain] || 0) + 1;
    });
    const strength = 0.03;
    nodes.forEach(n => {
      const c = sums[n.domain], k = cnt[n.domain];
      if (!c || !k) return;
      n.vx += (c.x / k - n.x) * strength * alpha;
      n.vy += (c.y / k - n.y) * strength * alpha;
      n.vz += (c.z / k - n.z) * strength * alpha;
    });
  }

  // ------------------------- 样式函数 -------------------------
  function nodeLabelHTML(n) {
    const d = GRAPH.meta.domains[n.domain];
    const main = KTI18n.nodeName(n);
    const sub = KTI18n.lang === 'en' ? n.name : (n.nameEn || '');
    return `<div style="font-size:13px;line-height:1.6">
      <b style="font-size:15px">${main}</b>
      <div style="color:#9aa7b4">${sub}</div>
      <div><span style="color:${d ? d.color : '#888'}">●</span> ${KTI18n.domainName(n.domain)}</div>
      <div style="color:#9aa7b4">${KTI18n.t('tooltip_links', { d: n.degree })}</div>
    </div>`;
  }

  function emphasis(l) {
    const a = l.source.id, b = l.target.id;
    if (state.highlightId && state.highlightSet) {
      return (state.highlightSet.has(a) && state.highlightSet.has(b)) ? 1 : 0.22;
    }
    // 分类高亮：连线两端领域均被勾选才保持亮起
    if (state.hlDomains.size) {
      const da = l.source.domain, db = l.target.domain;
      return (state.hlDomains.has(da) && state.hlDomains.has(db)) ? 1 : 0.22;
    }
    return 1;
  }

  function linkColor3D(l) {
    const em = emphasis(l);
    const hl = state.highlightId || state.hlDomains.size;
    if (l.type === 'prereq') {
      if (!hl) return '#58a6ff';
      return em < 0.5 ? 'rgba(88,166,255,0.05)' : '#b5dcff';
    }
    if (!hl) return 'rgba(139,152,165,0.69)';
    return em < 0.5 ? 'rgba(139,152,165,0.04)' : 'rgba(220,230,242,0.85)';
  }
  function linkWidth3D(l) {
    const base = l.type === 'prereq' ? 1.3 : 0.9;
    const em = emphasis(l);
    // 高亮激活时：集合内连线加粗、集合外压细，让先修链一眼可辨
    if (state.highlightId || state.hlDomains.size) return em < 0.5 ? base * 0.25 : base * 2.2;
    return base;
  }

  // ------------------------- 3D 图 -------------------------
  let Graph3D = null;
  let Graph2 = null;

  function initGraph3D() {
    Graph3D = new ForceGraph3D(dom.graph3d)
      .backgroundColor('#0d1117')
      .nodeThreeObject(node => makeNodeObject(node))
      .nodeThreeObjectExtend(false)
      .nodeLabel(node => nodeLabelHTML(node))
      .nodeVisibility(node => isDomainVisible(node.domain))
      .linkColor(linkColor3D)
      .linkWidth(linkWidth3D)
      .linkVisibility(l => isDomainVisible(l.source.domain) && isDomainVisible(l.target.domain))
      .linkDirectionalParticles(l => {
        if (l.type !== 'prereq') return 0;
        if (state.highlightId && state.highlightSet) return emphasis(l) >= 0.5 ? 5 : 0;
        return 2;
      })
      .linkDirectionalParticleWidth(2)
      .linkDirectionalParticleSpeed(l => (l.type === 'prereq' ? 0.004 : 0))
      .linkDirectionalArrowLength(l => (l.type === 'prereq' ? 4.5 : 0))
      .linkDirectionalArrowRelPos(0.85)
      .onNodeClick(n => onNodeClicked(n.id))
      .onBackgroundClick(() => { if (state.mode === '3d') deselectAll(); })
      .graphData({ nodes: buildNodes(), links: buildLinks() });

    // 力配置：先修边更近，相关边稍远
    Graph3D.d3Force('link')
      .distance(l => l.type === 'prereq' ? 34 : 56)
      .strength(l => (l.soft ? 0 : 1));
    Graph3D.d3Force('charge').strength(n => -38 - n.size * 0.5);
    Graph3D.d3Force('center').x(0).y(0).z(0);
    Graph3D.d3Force('cloudCluster', cloudClusterForce);
    Graph3D.d3AlphaDecay(0.0055)
      .d3VelocityDecay(0.35)
      .cooldownTime(180000)
      .warmupTicks(20);

    Graph3D.onEngineTick(() => updateClouds());
    initClouds();
    updateClouds();
    (function cloudLoop() {
      let frame = 0;
      (function step() {
        frame++;
        if (state.mode === '3d' && frame % 2 === 0) updateClouds();
        requestAnimationFrame(step);
      })();
    })();
  }

  // ------------------------- 2D 图 -------------------------
  function nodeRadius2D(n) {
    if (n.id === state.selected) return 11;
    if (n.weak) return 4;
    return 5 + Math.min(8, n.degree) * 0.7;
  }

  function isHighlighted2D(n) {
    if (!state.highlightId) return true;
    return state.highlightSet ? state.highlightSet.has(n.id) : true;
  }

  function draw2DNode(n, ctx, gs) {
    const isCenter = n.id === state.selected;
    const weak = !!n.weak;
    const hlDim = state.highlightId && !isHighlighted2D(n);
    const r = nodeRadius2D(n) / gs;
    const baseAlpha = weak ? 0.35 : 0.92;
    ctx.beginPath();
    ctx.arc(n.x, n.y, r * gs, 0, 2 * Math.PI);
    ctx.fillStyle = n.color;
    ctx.globalAlpha = hlDim ? baseAlpha * 0.18 : baseAlpha;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.lineWidth = (isCenter ? 2.5 : (weak ? 0.8 : 1)) / gs;
    ctx.strokeStyle = isCenter ? '#ffffff'
      : (hlDim ? 'rgba(255,255,255,0.08)' : (weak ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.25)'));
    ctx.stroke();
    if (isCenter || n.id === state.highlightId) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, r * gs + 6, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(255,255,255,0.5)';
      ctx.lineWidth = 1.5 / gs;
      ctx.stroke();
    }
    // 名称标签
    const fs = 14 / gs;
    ctx.font = `${fs}px "Microsoft YaHei","PingFang SC",sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.shadowColor = 'rgba(0,0,0,0.9)';
    ctx.shadowBlur = weak ? 2 : 4;
    ctx.fillStyle = hlDim ? 'rgba(255,255,255,0.22)' : (weak ? 'rgba(255,255,255,0.45)' : '#fff');
    ctx.fillText(KTI18n.nodeName(n), n.x, n.y - r * gs - 3);
    ctx.shadowBlur = 0;
  }

  function paintNodePointer(n, color, ctx, gs) {
    const r = (nodeRadius2D(n) + 5) / gs;
    ctx.beginPath();
    ctx.arc(n.x, n.y, r * gs, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function linkEmphasis2D(l) {
    if (!state.highlightId || !state.highlightSet) return 1;
    const a = l.source.id, b = l.target.id;
    return (state.highlightSet.has(a) && state.highlightSet.has(b)) ? 1 : 0.2;
  }

  function initGraph2() {
    Graph2 = new ForceGraph(dom.graph2d)
      .nodeCanvasObjectMode(() => 'replace')
      .nodeCanvasObject(draw2DNode)
      .nodePointerAreaPaint(paintNodePointer)
      .nodeLabel(node => nodeLabelHTML(node))
      .linkColor(l => {
        const em = linkEmphasis2D(l);
        if (l.type === 'prereq') return em < 0.5 ? 'rgba(88,166,255,0.25)' : '#58a6ff';
        const a = (l.soft ? 0.3 : 0.8) * (0.25 + 0.75 * em);
        return `rgba(139,152,165,${a.toFixed(2)})`;
      })
      .linkWidth(l => (l.type === 'prereq' ? 1.8 : 1.1) * (l.soft ? 0.6 : 1) * (0.4 + 0.6 * linkEmphasis2D(l)))
      .linkLineDash(l => (l.soft ? [4, 4] : null))
      .linkDirectionalParticles(l => {
        if (l.type !== 'prereq') return 0;
        if (state.highlightId && state.highlightSet) return emphasis(l) >= 0.5 ? 5 : 0;
        return 2;
      })
      .linkDirectionalParticleWidth(2)
      .linkDirectionalParticleSpeed(l => (l.type === 'prereq' ? 0.006 : 0))
      .onNodeClick(n => onNodeClicked(n.id))
      .onBackgroundClick(() => { if (state.mode === '2d') backToGlobal(); })
      .enableNodeDrag(true)
      .onNodeDragEnd(n => { n.fx = n.x; n.fy = n.y; })
      .autoPauseRedraw(false)
      .d3VelocityDecay(0.5)
      .d3AlphaDecay(0.03)
      .cooldownTime(12000);
  }

  function linkDistance2D(l) {
    const base = l.type === 'prereq' ? 80 : (l.soft ? 150 : 120);
    return base * (state.spacing || 1);
  }

  function showEgo2D(id) {
    const node = nodeMap[id];
    if (!node) return;
    // 画布 CSS 已避开右侧详情面板（#graph2d right:440px），
    // 但 force-graph 只在窗口 resize 时重测容器尺寸，这里显式同步一次
    try { Graph2.width(dom.graph2d.clientWidth).height(dom.graph2d.clientHeight); } catch (e) { /* ignore */ }
    const ids = new Set([id]);
    const strongIds = new Set([id]);
    (node.links || []).forEach(l => { ids.add(l.id); strongIds.add(l.id); });
    (node.softLinks || []).forEach(l => ids.add(l.id));

    const nodes = GRAPH.nodes.filter(n => ids.has(n.id)).map(n => ({
      id: n.id, name: n.name, nameEn: n.nameEn, domain: n.domain, color: n.color,
      size: n.size, degree: n.degree,
      weak: !strongIds.has(n.id),
      val: 1,
    }));
    const links = GRAPH.links.filter(l => ids.has(l.source) && ids.has(l.target))
      .map(l => ({ source: l.source, target: l.target, type: l.type || 'related', soft: !!l.soft }));

    Graph2.graphData({ nodes, links });
    Graph2.graphData().nodes.forEach(n => {
      if (n.id === id) { n.fx = 0; n.fy = 0; }
    });
    Graph2.d3Force('link')
      .distance(linkDistance2D)
      .strength(l => (l.soft ? 0.1 : 0.85));
    Graph2.d3Force('charge').strength(n => (n.weak ? -140 : -80));
    Graph2.d3Force('center').x(0).y(0).strength(0.02);
    Graph2.centerAt(0, 0, 0);
    Graph2.d3ReheatSimulation();
    setTimeout(() => {
      try { Graph2.zoomToFit(500, 70, n => n.id !== id); } catch (e) { /* ignore */ }
    }, 60);
  }

  // ------------------------- 模式切换 / 选择 -------------------------
  function setMode(mode) {
    state.mode = mode;
    dom.graph3d.classList.toggle('hidden', mode !== '3d');
    dom.graph2d.classList.toggle('hidden', mode !== '2d');
    dom.hint2d.classList.toggle('hidden', mode !== '2d');
    dom.btnGlobal.textContent = KTI18n.t(mode === '2d' ? 'btn_global_back' : 'btn_global');
    dom.btnGlobal.classList.toggle('active', mode === '3d');
    dom.spacingCtl.classList.toggle('hidden', mode !== '2d');
    dom.btnReset.classList.toggle('hidden', mode !== '2d');
    // 分类高亮仅 3D 可用：进入 2D 时收起面板（勾选状态保留，回 3D 继续生效）
    dom.btnDomainHl.classList.toggle('hidden', mode !== '3d');
    if (mode !== '3d') dom.domainPanel.classList.add('hidden');

    if (mode === '3d') {
      try { Graph2.pauseAnimation(); } catch (e) { /* ignore */ }
      try { Graph3D.resumeAnimation(); } catch (e) { /* ignore */ }
      Graph3D.refresh();
      updateClouds();
      setTimeout(() => {
        try { Graph3D.zoomToFit(600, 70); } catch (e) { /* ignore */ }
      }, 80);
    } else if (mode === '2d' && state.selected) {
      try { Graph3D.pauseAnimation(); } catch (e) { /* ignore */ }
      try { Graph2.resumeAnimation(); } catch (e) { /* ignore */ }
      showEgo2D(state.selected);
      dom.hint2d.textContent =
        KTI18n.t('hint2d', { name: KTI18n.nodeName(nodeMap[state.selected]) });
    }
  }

  function onNodeClicked(id) {
    const now = Date.now();
    if (state.lastClick.id === id && now - state.lastClick.time < 350) {
      state.lastClick = { id: null, time: 0 };
      selectNode(id, 'click');
    } else {
      state.lastClick = { id: id, time: now };
      state.highlightId = id;
      state.highlightSet = computeHighlightSet(id);
      if (state.mode === '3d') Graph3D.refresh();
    }
  }

  function selectNode(id, source) {
    state.selected = id;
    state.highlightId = null;
    state.highlightSet = null;
    KTDetail.render(id);
    setMode('2d');
    if (window.KTTree) KTTree.onEntered(id, source || 'click');
  }

  function deselectAll() {
    state.selected = null;
    state.highlightId = null;
    state.highlightSet = null;
    KTDetail.close();
    setMode('3d');
  }

  function backToGlobal() {
    deselectAll();
  }

  // ------------------------- 图例 -------------------------
  function domainCounts() {
    const counts = {};
    GRAPH.nodes.forEach(n => { counts[n.domain] = (counts[n.domain] || 0) + 1; });
    return counts;
  }

  function buildLegend() {
    const counts = domainCounts();
    const items = Object.entries(GRAPH.meta.domains).map(([did, d]) => `
      <div class="lg-item" data-domain="${did}">
        <span class="lg-swatch" style="background:${d.color}"></span>
        <span>${KTI18n.domainName(did)}</span>
        <span class="lg-count">${counts[did] || 0}</span>
      </div>`).join('');
    dom.legend.innerHTML = `
      <div class="lg-title">${KTI18n.t('legend_title')}</div>
      ${items}
      <div class="lg-tip">${KTI18n.t('legend_tip')}</div>`;
    $$('.lg-item', dom.legend).forEach(el => {
      el.classList.toggle('off', state.hiddenDomains.has(el.getAttribute('data-domain')));
      el.addEventListener('click', () => {
        const did = el.getAttribute('data-domain');
        if (state.hiddenDomains.has(did)) state.hiddenDomains.delete(did);
        else state.hiddenDomains.add(did);
        el.classList.toggle('off', state.hiddenDomains.has(did));
        Graph3D.refresh();
        updateClouds();
      });
    });
  }

  // ------------------------- 分类高亮侧边栏（3D，多选） -------------------------
  function syncDomainHlBtn() {
    dom.btnDomainHl.classList.toggle('on', state.hlDomains.size > 0);
  }

  function applyDomainHighlight() {
    syncDomainHlBtn();
    Graph3D.refresh();
    updateClouds();
  }

  function buildDomainPanel() {
    const counts = domainCounts();
    const items = Object.entries(GRAPH.meta.domains).map(([did, d]) => `
      <label class="dp-item" data-domain="${did}">
        <input type="checkbox" ${state.hlDomains.has(did) ? 'checked' : ''}>
        <span class="lg-swatch" style="background:${d.color}"></span>
        <span class="dp-name">${KTI18n.domainName(did)}</span>
        <span class="lg-count">${counts[did] || 0}</span>
      </label>`).join('');
    dom.domainPanel.innerHTML = `
      <div class="dp-head">
        <span class="lg-title">${KTI18n.t('dp_title')}</span>
        <span class="dp-actions">
          <button class="btn dp-btn" data-act="all">${KTI18n.t('dp_all')}</button>
          <button class="btn dp-btn" data-act="clear">${KTI18n.t('dp_clear')}</button>
        </span>
      </div>
      ${items}
      <div class="lg-tip">${KTI18n.t('dp_tip')}</div>`;
    $$('.dp-item input', dom.domainPanel).forEach(cb => {
      cb.addEventListener('change', () => {
        const did = cb.closest('.dp-item').getAttribute('data-domain');
        if (cb.checked) state.hlDomains.add(did);
        else state.hlDomains.delete(did);
        applyDomainHighlight();
      });
    });
    $$('.dp-btn', dom.domainPanel).forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.getAttribute('data-act') === 'all') {
          Object.keys(GRAPH.meta.domains).forEach(did => state.hlDomains.add(did));
        } else {
          state.hlDomains.clear();
        }
        $$('.dp-item input', dom.domainPanel).forEach(cb => {
          cb.checked = state.hlDomains.has(cb.closest('.dp-item').getAttribute('data-domain'));
        });
        applyDomainHighlight();
      });
    });
  }

  // ------------------------- 界面语言 -------------------------
  function applyLang() {
    const t = KTI18n.t;
    document.title = t('doc_title');
    document.documentElement.lang = KTI18n.lang === 'en' ? 'en' : 'zh-CN';
    $('#brand-title').textContent = t('brand_title');
    $('#brand-subtitle').textContent = t('brand_subtitle');
    $('#search-input').placeholder = t('search_ph');
    dom.btnGlobal.textContent = t(state.mode === '2d' ? 'btn_global_back' : 'btn_global');
    dom.btnLabels.textContent = t('btn_labels');
    $('#btn-tree').textContent = t('btn_tree');
    dom.btnLegend.textContent = t('btn_legend');
    dom.btnDomainHl.textContent = t('btn_domainhl');
    dom.btnLang.textContent = t('btn_lang');
    $('#ctl-font-label').textContent = t('ctl_font');
    $('#ctl-spacing-label').textContent = t('ctl_spacing');
    dom.btnReset.textContent = t('btn_reset');
    $('#tree-title').textContent = t('tree_title');
    $('#tree-save-btn').textContent = t('tree_save');
    $('#tree-save-btn').title = t('tree_save_title');
    $('#tree-forest-btn').textContent = t('tree_forest');
    $('#tree-forest-btn').title = t('tree_forest_title');
    $('#tree-clear').textContent = t('tree_clear');
    $('#tree-clear').title = t('tree_clear');
    $('#tree-name-input').placeholder = t('tree_name_ph');
    $('#tree-save-confirm').textContent = t('tree_ok');
    $('#tree-save-cancel').textContent = t('tree_cancel');
    $('#tree-empty').textContent = t('tree_empty');
    dom.detailClose.title = t('detail_close');
    const loading = $('#loading');
    if (loading) loading.textContent = t('loading');
    updateStat();
    buildLegend();
    buildDomainPanel();
    if (state.mode === '2d' && state.selected) {
      dom.hint2d.textContent = KTI18n.t('hint2d', { name: KTI18n.nodeName(nodeMap[state.selected]) });
    }
  }

  function updateStat() {
    const nNodes = GRAPH.nodes.length;
    const nPrereq = GRAPH.links.filter(l => l.type === 'prereq').length;
    const nRelated = GRAPH.links.filter(l => l.type !== 'prereq').length;
    dom.stat.textContent = KTI18n.t('stat', { n: nNodes, p: nPrereq, r: nRelated });
  }

  // ------------------------- 初始化 -------------------------
  function init() {
    initGraph3D();
    initGraph2();
    buildLegend();
    buildDomainPanel();
    applyLang();

    KTSearch.init(id => selectNode(id, 'search'));

    if (window.KTTree) KTTree.init({ gotoNode: id => selectNode(id, 'nav') });

    dom.detailClose.addEventListener('click', deselectAll);
    dom.btnGlobal.addEventListener('click', () => {
      if (state.mode === '2d') deselectAll();
    });
    dom.btnLabels.addEventListener('click', () => setLabels(!state.labelsOn));
    dom.btnLegend.addEventListener('click', () => {
      dom.legend.classList.toggle('hidden');
      dom.btnLegend.classList.toggle('active', !dom.legend.classList.contains('hidden'));
      // 与分类高亮面板互斥
      if (!dom.legend.classList.contains('hidden')) dom.domainPanel.classList.add('hidden');
    });
    dom.btnDomainHl.addEventListener('click', () => {
      dom.domainPanel.classList.toggle('hidden');
      // 与领域图例互斥
      if (!dom.domainPanel.classList.contains('hidden')) {
        dom.legend.classList.add('hidden');
        dom.btnLegend.classList.remove('active');
      }
    });
    dom.btnLang.addEventListener('click', () => KTI18n.toggle());
    KTI18n.onChange(() => {
      labelTextureCache.clear();
      Graph3D.refresh();
      applyLang();
    });

    dom.fontSlider.value = state.labelFontSize;
    dom.spacingSlider.value = Math.round(state.spacing * 100);
    dom.fontSlider.addEventListener('input', () => {
      state.labelFontSize = +dom.fontSlider.value;
      saveSettings();
      labelTextureCache.clear();
      Graph3D.refresh();
    });
    dom.spacingSlider.addEventListener('input', () => {
      state.spacing = (+dom.spacingSlider.value) / 100;
      saveSettings();
      Graph2.d3Force('link').distance(linkDistance2D);
      Graph2.d3ReheatSimulation();
    });
    dom.btnReset.addEventListener('click', () => {
      if (state.mode === '2d' && state.selected) showEgo2D(state.selected);
    });

    document.addEventListener('keydown', ev => {
      if (ev.key === 'Escape' && state.mode === '2d') deselectAll();
    });

    updateStat();

    // 初始化登录模块
    initAuth();

    dom.loading.classList.add('fade');
    setTimeout(() => dom.loading.remove(), 700);
  }

  function initAuth() {
    const auth = window.KTAuth;
    const loginBtn = document.getElementById('btn-login');
    const userLink = document.getElementById('user-link');
    const userDropdown = document.getElementById('user-dropdown');
    const udName = document.getElementById('ud-name');
    const btnLogout = document.getElementById('btn-logout');
    const btnApplyAdmin = document.getElementById('btn-apply-admin');
    const btnAdminPanel = document.getElementById('btn-admin-panel');
    if (!auth || !loginBtn) return;

    function closeDropdown() {
      userDropdown.classList.add('hidden');
    }

    function openDropdown() {
      userDropdown.classList.remove('hidden');
    }

    function updateAuthUI(loggedIn, user, isAdmin) {
      const t = window.KTI18n.t;
      if (loggedIn && user) {
        loginBtn.style.display = 'none';
        userLink.style.display = '';
        userLink.textContent = `@${user.login}`;
        if (udName) udName.textContent = user.login;
        if (btnApplyAdmin) {
          btnApplyAdmin.style.display = isAdmin ? 'none' : '';
          btnApplyAdmin.textContent = t('admin_apply');
        }
        if (btnAdminPanel) {
          btnAdminPanel.style.display = isAdmin ? '' : 'none';
          btnAdminPanel.textContent = t('admin_panel');
        }
      } else {
        loginBtn.style.display = '';
        loginBtn.textContent = t('login_btn');
        loginBtn.onclick = () => auth.login();
        userLink.style.display = 'none';
        if (btnApplyAdmin) btnApplyAdmin.style.display = 'none';
        if (btnAdminPanel) btnAdminPanel.style.display = 'none';
        closeDropdown();
      }
    }

    if (userLink) {
      userLink.addEventListener('click', ev => {
        ev.stopPropagation();
        if (userDropdown.classList.contains('hidden')) {
          openDropdown();
        } else {
          closeDropdown();
        }
      });
    }

    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        auth.logout();
        closeDropdown();
      });
    }

    // 申请成为管理员
    if (btnApplyAdmin) {
      btnApplyAdmin.addEventListener('click', () => {
        closeDropdown();
        openApplyModal();
      });
    }

    // 管理后台
    if (btnAdminPanel) {
      btnAdminPanel.addEventListener('click', () => {
        closeDropdown();
        openAdminPanel();
      });
    }

    document.addEventListener('click', ev => {
      if (!userDropdown.classList.contains('hidden') &&
          !userDropdown.contains(ev.target) &&
          ev.target !== userLink) {
        closeDropdown();
      }
    });

    auth.onChange(updateAuthUI);
    auth.init().then(() => {
      updateAuthUI(auth.isLoggedIn(), auth.getUser(), auth.isAdmin());
    });
  }

  /* ---------- 申请成为管理员弹窗 ---------- */
  function openApplyModal() {
    const modal = document.getElementById('apply-modal');
    const reason = document.getElementById('apply-reason');
    const status = document.getElementById('apply-status');
    const t = window.KTI18n.t;
    if (!modal) return;

    document.getElementById('apply-title').textContent = t('admin_apply');
    document.getElementById('apply-submit').textContent = t('admin_submit');
    document.getElementById('apply-cancel').textContent = t('res_cancel');

    modal.style.display = 'flex';
    modal.classList.remove('hidden');
    if (reason) reason.value = '';
    if (status) status.textContent = '';

    const doSubmit = async () => {
      if (!reason.value.trim()) {
        status.textContent = '请填写理由';
        return;
      }
      status.textContent = '提交中…';
      try {
        await window.KTAdmin.applyAdmin(reason.value.trim());
        status.textContent = t('admin_app_submitted');
        setTimeout(() => closeApplyModal(), 1500);
      } catch (e) {
        status.textContent = t('admin_app_error', { msg: e.message });
      }
    };

    const submitBtn = document.getElementById('apply-submit');
    const cancelBtn = document.getElementById('apply-cancel');
    const closeBtn = document.getElementById('apply-close');

    submitBtn.onclick = doSubmit;
    cancelBtn.onclick = closeApplyModal;
    closeBtn.onclick = closeApplyModal;

    // 点击背景关闭
    modal.onclick = ev => {
      if (ev.target === modal) closeApplyModal();
    };
  }

  function closeApplyModal() {
    const modal = document.getElementById('apply-modal');
    if (modal) { modal.style.display = 'none'; modal.classList.add('hidden'); }
  }

  /* ---------- 管理后台弹窗 ---------- */
  async function openAdminPanel() {
    const modal = document.getElementById('admin-modal');
    const t = window.KTI18n.t;
    if (!modal) return;

    document.getElementById('admin-title').textContent = t('admin_panel');
    document.getElementById('admin-apps-title').textContent = t('admin_applications');
    document.getElementById('admin-list-title').textContent = t('admin_admins');

    modal.style.display = 'flex';
    modal.classList.remove('hidden');

    document.getElementById('admin-close').onclick = closeAdminPanel;
    modal.onclick = ev => { if (ev.target === modal) closeAdminPanel(); };

    await renderAdminPanel();
  }

  function closeAdminPanel() {
    const modal = document.getElementById('admin-modal');
    if (modal) { modal.style.display = 'none'; modal.classList.add('hidden'); }
  }

  async function renderAdminPanel() {
    const t = window.KTI18n.t;
    const appsList = document.getElementById('admin-apps-list');
    const adminsList = document.getElementById('admin-admins-list');

    // 加载申请列表
    if (appsList) {
      appsList.innerHTML = '<div style="color:var(--fg-dim);font-size:13px;">加载中…</div>';
      try {
        const apps = await window.KTAdmin.listApplications();
        if (!apps || apps.length === 0) {
          appsList.innerHTML = `<div style="color:var(--fg-dim);font-size:14px;padding:8px 0;">${t('admin_no_apps')}</div>`;
        } else {
          appsList.innerHTML = apps.map(app => {
            const login = app.user?.login || 'unknown';
            const bodyLines = (app.body || '').split('\n');
            const reasonLine = bodyLines.find(l => l.startsWith('**理由**:')) || '';
            const reason = reasonLine.replace('**理由**:', '').trim() || '未填写';
            return `
<div class="admin-app-item" style="padding:10px 0;border-bottom:1px solid var(--border);">
  <div style="font-size:14px;font-weight:600;">@${esc(login)}</div>
  <div style="font-size:13px;color:var(--fg-dim);margin:4px 0;">${esc(reason)}</div>
  <div style="display:flex;gap:8px;margin-top:6px;">
    <button class="btn admin-approve-btn" data-number="${app.number}" data-login="${esc(login)}" style="font-size:12px;padding:3px 10px;background:rgba(34,197,94,0.15);color:#22c55e;border:1px solid rgba(34,197,94,0.35);">${t('admin_approve')}</button>
    <button class="btn admin-reject-btn" data-number="${app.number}" style="font-size:12px;padding:3px 10px;background:rgba(239,68,68,0.15);color:#ef4444;border:1px solid rgba(239,68,68,0.35);">${t('admin_reject')}</button>
  </div>
</div>`;
          }).join('');

          // 绑定同意按钮
          appsList.querySelectorAll('.admin-approve-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
              const num = parseInt(btn.dataset.number, 10);
              const login = btn.dataset.login;
              btn.textContent = '处理中…';
              btn.disabled = true;
              try {
                await window.KTAdmin.approveApplication(num, login);
                await renderAdminPanel();
              } catch (e) {
                btn.textContent = e.message;
                btn.disabled = false;
              }
            });
          });

          // 绑定拒绝按钮
          appsList.querySelectorAll('.admin-reject-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
              const num = parseInt(btn.dataset.number, 10);
              const note = prompt(t('admin_reject_note'));
              if (note === null) return;
              btn.textContent = '处理中…';
              btn.disabled = true;
              try {
                await window.KTAdmin.rejectApplication(num, note);
                await renderAdminPanel();
              } catch (e) {
                btn.textContent = e.message;
                btn.disabled = false;
              }
            });
          });
        }
      } catch (e) {
        appsList.innerHTML = `<div style="color:#ef4444;font-size:13px;">加载失败: ${esc(e.message)}</div>`;
      }
    }

    // 加载管理员列表
    if (adminsList) {
      const admins = window.KTAdmin.listAdmins();
      const currentLogin = window.KTAuth.getUser()?.login?.toLowerCase();
      if (!admins || admins.length === 0) {
        adminsList.innerHTML = '<div style="color:var(--fg-dim);font-size:14px;">无</div>';
      } else {
        adminsList.innerHTML = admins.map(a => {
          const isSelf = a.toLowerCase() === currentLogin;
          return `
<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--border);">
  <span style="font-size:14px;">@${esc(a)}${isSelf ? ' <span style="color:var(--fg-dim);font-size:12px;">(你)</span>' : ''}</span>
  ${!isSelf ? `<button class="btn admin-remove-btn" data-login="${esc(a)}" style="font-size:12px;padding:2px 8px;background:rgba(239,68,68,0.12);color:#ef4444;border:1px solid rgba(239,68,68,0.3);">${t('admin_removed')}</button>` : ''}
</div>`;
        }).join('');

        adminsList.querySelectorAll('.admin-remove-btn').forEach(btn => {
          btn.addEventListener('click', async () => {
            const login = btn.dataset.login;
            if (!confirm(t('admin_confirm_remove'))) return;
            btn.disabled = true;
            try {
              await window.KTAdmin.removeAdminFromFile(login);
              await renderAdminPanel();
            } catch (e) {
              alert(e.message);
              btn.disabled = false;
            }
          });
        });
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { selectNode, backToGlobal, setMode };
})();
