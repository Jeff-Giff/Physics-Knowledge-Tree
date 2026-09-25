/* ============================================================
 * i18n.js —— 中 / 英双语界面
 * KTI18n.t(key) 取词；KTI18n.nodeName(n) / domainName(did) 按当前语言给显示名；
 * KTI18n.onChange(cb) 注册语言切换回调；选择持久化到 localStorage。
 * 注意：仅界面（UI）双语；节点正文 Markdown 仍为中文。
 * ============================================================ */
'use strict';

window.KTI18n = (() => {
  const LS = 'physics-kn-lang';
  let lang = 'zh';
  try {
    const v = localStorage.getItem(LS);
    if (v === 'en' || v === 'zh') lang = v;
  } catch (e) { /* ignore */ }

  const STR = {
    zh: {
      doc_title: '中文物理知识树',
      brand_title: '中文物理知识树',
      brand_subtitle: 'PHYSICS KNOWLEDGE GRAPH',
      search_ph: '搜索知识点（名称 / 别名 / 标签）…',
      btn_global: '3D 全局',
      btn_global_back: '← 返回 3D 全局',
      btn_labels: '标签',
      btn_tree: '我的路径',
      btn_legend: '领域图例',
      btn_domainhl: '分类高亮',
      btn_lang: 'EN',
      ctl_font: '字号',
      ctl_spacing: '间距',
      btn_reset: '重置布局',
      loading: '正在加载知识树…',
      tree_title: '我的学习路径',
      tree_save: '保存',
      tree_save_title: '保存到森林',
      tree_forest: '已有路径',
      tree_forest_title: '载入已保存的学习树',
      tree_clear: '清空',
      tree_name_ph: '输入名称…',
      tree_ok: '确认',
      tree_cancel: '取消',
      tree_empty: '双击进入节点开始构建学习树',
      tree_saved: '已保存✓',
      tree_ff_empty: '暂无保存的学习树',
      tree_ff_nodes: '节点',
      tree_del: '删除',
      tree_mkroot: '设为根',
      tree_remove: '移除',
      tree_prompt: '「{name}」与现有根均无关联，是否建立新的独立根？',
      tree_new_root: '建立新根',
      tree_attach: '挂在最近根下',
      tree_default_name: '学习树',
      detail_close: '关闭',
      legend_title: '领域（点击切换显示 / 隐藏）',
      legend_tip: '节点间距越小、关系越紧密；云团表示领域区域。单击节点高亮其完整先修链与一级后继子树，双击进入节点。',
      dp_title: '分类高亮（可多选）',
      dp_all: '全选',
      dp_clear: '清空',
      dp_tip: '勾选领域后，仅高亮这些领域的节点与内部连线；再次点击空白处不影响勾选。与单击节点高亮互斥：单击高亮优先。',
      stat: '节点 {n} · 先修 {p} · 相关 {r}',
      hint2d: '以「{name}」为中心 · 单击高亮先修链与一级后继 · 双击切换中心 · 空白返回全局',
      tooltip_links: '关联 {d} · 点击查看详情',
      search_empty: '未找到「{q}」相关节点',
      rel_prereq: '先修',
      rel_related: '相关',
      rel_successor: '后续',
      det_alias: '别名：',
      det_prereq: '先修知识（学习本节点前建议掌握）',
      det_successor: '后续知识（以本节点为先修）',
      det_related: '相关知识点',
      det_soft: '更远的关联（图中未直接连线）',
      det_foot: 'ID：{id} · 领域：{domain} · 直接连接 {links} 个',
      det_foot_degree: ' · 总关联 {degree} 个',
      det_foot_updated: ' · 更新 {updated}',
      res_title: '推荐资料',
      res_edit: '编辑',
      res_save: '保存',
      res_cancel: '取消',
      res_add: '+ 添加资料',
      res_type_textbook: '教材',
      res_type_course: '公开课',
      res_type_paper: '论文',
      res_type_note: '笔记',
      res_type_tool: '工具',
      res_label_title: '标题',
      res_label_type: '类型',
      res_label_url: '链接',
      res_label_note: '备注',
      res_empty: '暂无推荐资料',
      login_btn: '登录',
      logout_btn: '退出',
      login_prompt: '使用 GitHub 登录以编辑',
      save_success: '已提交，约 1–2 分钟后生效',
      save_conflict: '内容已被他人修改，请刷新后重试',
      save_error: '保存失败：{msg}',
      admin_apply: '申请成为管理员',
      admin_panel: '管理后台',
      admin_applications: '待处理申请',
      admin_admins: '现有管理员',
      admin_reason: '申请理由',
      admin_submit: '提交申请',
      admin_approve: '同意',
      admin_reject: '拒绝',
      admin_reject_note: '拒绝理由（可选）',
      admin_no_apps: '暂无待处理申请',
      admin_app_submitted: '申请已提交，等待现有管理员审批',
      admin_app_error: '提交失败：{msg}',
      admin_added: '已添加管理员',
      admin_removed: '移除',
      admin_confirm_remove: '确定移除该管理员吗？',
      admin_build_notice: '修改管理员名单后需等待约 1–2 分钟重新构建生效',
      user_center: '用户中心',
      back: '返回知识树',
      not_logged_in: '未登录',
      admin_status: '申请状态',
      admin_pending: '您已提交管理员申请，等待审批中',
      admin_reason_hint: '请填写理由',
      feedback_title: '反映问题',
      feedback_submit: '提交反馈',
      feedback_input_title: '问题标题（简洁描述）…',
      feedback_input_detail: '详细描述问题或建议…',
      feedback_title_hint: '请填写标题',
      feedback_submitted: '反馈已提交，感谢你的帮助！',
      feedback_error: '提交失败：{msg}',
    },
    en: {
      doc_title: 'Science Knowledge Tree',
      brand_title: 'Science Knowledge Tree',
      brand_subtitle: 'SCIENCE KNOWLEDGE GRAPH',
      search_ph: 'Search nodes (name / alias / tag)…',
      btn_global: '3D Global',
      btn_global_back: '← Back to 3D',
      btn_labels: 'Labels',
      btn_tree: 'My Path',
      btn_legend: 'Legend',
      btn_domainhl: 'Highlight',
      btn_lang: '中',
      ctl_font: 'Font',
      ctl_spacing: 'Spacing',
      btn_reset: 'Reset Layout',
      loading: 'Loading knowledge tree…',
      tree_title: 'My Learning Path',
      tree_save: 'Save',
      tree_save_title: 'Save to library',
      tree_forest: 'Saved',
      tree_forest_title: 'Load a saved path',
      tree_clear: 'Clear',
      tree_name_ph: 'Name…',
      tree_ok: 'OK',
      tree_cancel: 'Cancel',
      tree_empty: 'Double-click a node to start building your path',
      tree_saved: 'Saved✓',
      tree_ff_empty: 'No saved paths yet',
      tree_ff_nodes: 'nodes',
      tree_del: 'Delete',
      tree_mkroot: 'Make root',
      tree_remove: 'Remove',
      tree_prompt: '"{name}" is unrelated to all existing roots. Create a new independent root?',
      tree_new_root: 'New root',
      tree_attach: 'Attach to latest root',
      tree_default_name: 'Learning Path',
      detail_close: 'Close',
      legend_title: 'Domains (click to show / hide)',
      legend_tip: 'Closer nodes are more tightly related; clouds mark domain regions. Click a node to highlight its full prerequisite chain and first-level successors; double-click to enter.',
      dp_title: 'Highlight by domain (multi-select)',
      dp_all: 'All',
      dp_clear: 'Clear',
      dp_tip: 'Checked domains stay bright while others fade. Click-highlight on a node takes precedence while active.',
      stat: '{n} nodes · {p} prereq · {r} related',
      hint2d: 'Centered on "{name}" · click to highlight prereq chain & direct successors · double-click to re-center · click blank to go back',
      tooltip_links: '{d} links · click for details',
      search_empty: 'No nodes match "{q}"',
      rel_prereq: 'Prereq',
      rel_related: 'Related',
      rel_successor: 'Successor',
      det_alias: 'Aliases: ',
      det_prereq: 'Prerequisites (recommended before this node)',
      det_successor: 'Successors (nodes that require this one)',
      det_related: 'Related nodes',
      det_soft: 'Further links (not drawn in the graph)',
      det_foot: 'ID: {id} · Domain: {domain} · {links} direct links',
      det_foot_degree: ' · {degree} total',
      det_foot_updated: ' · updated {updated}',
      res_title: 'Recommended Resources',
      res_edit: 'Edit',
      res_save: 'Save',
      res_cancel: 'Cancel',
      res_add: '+ Add Resource',
      res_type_textbook: 'Textbook',
      res_type_course: 'Course',
      res_type_paper: 'Paper',
      res_type_note: 'Notes',
      res_type_tool: 'Tool',
      res_label_title: 'Title',
      res_label_type: 'Type',
      res_label_url: 'URL',
      res_label_note: 'Note',
      res_empty: 'No resources yet',
      login_btn: 'Login',
      logout_btn: 'Logout',
      login_prompt: 'Login with GitHub to edit',
      save_success: 'Submitted, takes ~1–2 min to take effect',
      save_conflict: 'Content changed by others, please refresh and retry',
      save_error: 'Save failed: {msg}',
      admin_apply: 'Apply for Admin',
      admin_panel: 'Admin Panel',
      admin_applications: 'Pending Applications',
      admin_admins: 'Current Admins',
      admin_reason: 'Reason',
      admin_submit: 'Submit Application',
      admin_approve: 'Approve',
      admin_reject: 'Reject',
      admin_reject_note: 'Rejection note (optional)',
      admin_no_apps: 'No pending applications',
      admin_app_submitted: 'Application submitted, awaiting approval',
      admin_app_error: 'Submission failed: {msg}',
      admin_added: 'Admin added',
      admin_removed: 'Remove',
      admin_confirm_remove: 'Remove this admin?',
      admin_build_notice: 'Changes take ~1–2 min to rebuild',
      user_center: 'User Center',
      back: 'Back to Tree',
      not_logged_in: 'Not logged in',
      admin_status: 'Application Status',
      admin_pending: 'Your admin application is pending approval',
      admin_reason_hint: 'Please fill in the reason',
      feedback_title: 'Report Issue',
      feedback_submit: 'Submit Feedback',
      feedback_input_title: 'Issue title (brief description)…',
      feedback_input_detail: 'Describe the issue or suggestion in detail…',
      feedback_title_hint: 'Please fill in the title',
      feedback_submitted: 'Feedback submitted, thank you!',
      feedback_error: 'Submission failed: {msg}',
    },
  };

  const listeners = [];

  function t(key, params) {
    const pack = STR[lang] || STR.zh;
    let s = (pack[key] != null) ? pack[key] : (STR.zh[key] != null ? STR.zh[key] : key);
    if (params) {
      Object.keys(params).forEach(k => { s = s.replace('{' + k + '}', String(params[k])); });
    }
    return s;
  }

  function set(l) {
    if (l !== 'en' && l !== 'zh') return;
    if (l === lang) return;
    lang = l;
    try { localStorage.setItem(LS, l); } catch (e) { /* ignore */ }
    listeners.forEach(f => { try { f(lang); } catch (e) { /* ignore */ } });
  }
  function toggle() { set(lang === 'zh' ? 'en' : 'zh'); }
  function onChange(f) { listeners.push(f); }

  /* 节点显示名：英文模式优先 nameEn，缺失回退中文名 */
  function nodeName(n) {
    if (!n) return '';
    return lang === 'en' ? (n.nameEn || n.name) : n.name;
  }
  /* 领域显示名 */
  function domainName(did) {
    const d = window.PHYSICS_GRAPH && window.PHYSICS_GRAPH.meta.domains[did];
    if (!d) return did;
    return lang === 'en' ? (d.name_en || d.name) : d.name;
  }

  return {
    t, set, toggle, onChange, nodeName, domainName,
    get lang() { return lang; },
  };
})();
