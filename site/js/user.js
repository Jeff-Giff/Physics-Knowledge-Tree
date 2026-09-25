/* ============================================================
 * user.js —— 用户中心页面逻辑
 * ============================================================ */
'use strict';

(function () {
  const auth = window.KTAuth;
  const t = window.KTI18n.t;

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function initI18n() {
    $('brand-title').textContent = t('brand_title');
    $('brand-subtitle').textContent = t('brand_subtitle');
    $('btn-back').textContent = t('back');
    $('btn-login').textContent = t('login_btn');
    $('btn-logout').textContent = t('logout_btn');
    $('apply-sec-title').textContent = t('admin_apply');
    $('apply-submit').textContent = t('admin_submit');
    $('apply-reason').placeholder = t('admin_reason');
    $('apply-pending-title').textContent = t('admin_status');
    $('apply-pending-text').textContent = t('admin_pending');
    $('admin-sec-title').textContent = t('admin_panel');
    $('admin-apps-title').textContent = t('admin_applications');
    $('admin-list-title').textContent = t('admin_admins');
    $('feedback-title').textContent = t('feedback_title');
    $('feedback-submit').textContent = t('feedback_submit');
    $('feedback-title-input').placeholder = t('feedback_input_title');
    $('feedback-detail').placeholder = t('feedback_input_detail');
  }

  async function updateUI() {
    const loggedIn = auth.isLoggedIn();
    const user = auth.getUser();
    const isAdmin = auth.isAdmin();

    const avatar = $('user-avatar');
    const name = $('user-name');
    const login = $('user-login');
    const badges = $('user-badges');
    const guestHint = $('guest-hint');
    const applySection = $('apply-section');
    const feedbackSection = $('feedback-section');
    const adminSection = $('admin-section');
    const btnLogin = $('btn-login');
    const btnLogout = $('btn-logout');

    if (loggedIn && user) {
      if (avatar) { avatar.src = user.avatar_url || ''; avatar.style.display = ''; }
      if (name) name.textContent = user.name || user.login;
      if (login) login.textContent = '@' + user.login;
      if (badges) {
        badges.innerHTML = isAdmin
          ? '<span class="badge admin">管理员</span>'
          : '<span class="badge user">用户</span>';
      }
      if (guestHint) guestHint.style.display = 'none';
      if (applySection) applySection.style.display = isAdmin ? 'none' : '';
      if (feedbackSection) feedbackSection.style.display = '';
      if (adminSection) adminSection.style.display = isAdmin ? '' : 'none';
      if (btnLogin) btnLogin.style.display = 'none';
      if (btnLogout) btnLogout.style.display = '';

      // 检查是否已有 pending 的申请
      if (!isAdmin && applySection) {
        try {
          const myApp = await window.KTAdmin.checkMyApplication();
          const form = $('apply-form');
          const pending = $('apply-pending');
          if (myApp && myApp.state === 'open') {
            if (form) form.style.display = 'none';
            if (pending) pending.style.display = '';
          } else {
            if (form) form.style.display = '';
            if (pending) pending.style.display = 'none';
          }
        } catch (e) {
          // 静默失败，保持表单显示
        }
      }

      if (isAdmin) renderAdminPanel();
    } else {
      if (avatar) avatar.style.display = 'none';
      if (name) name.textContent = t('not_logged_in');
      if (login) login.textContent = '';
      if (badges) badges.innerHTML = '';
      if (guestHint) guestHint.style.display = '';
      if (applySection) applySection.style.display = 'none';
      if (feedbackSection) feedbackSection.style.display = 'none';
      if (adminSection) adminSection.style.display = 'none';
      if (btnLogin) btnLogin.style.display = '';
      if (btnLogout) btnLogout.style.display = 'none';
    }
  }

  async function renderAdminPanel() {
    const appsList = $('admin-apps-list');
    const adminsList = $('admin-admins-list');

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

    if (adminsList) {
      const admins = window.KTAdmin.listAdmins();
      const currentLogin = auth.getUser()?.login?.toLowerCase();
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

  async function init() {
    initI18n();

    // 登录 / 退出
    $('btn-login').addEventListener('click', () => auth.login());
    $('btn-logout').addEventListener('click', () => {
      auth.logout();
      window.location.reload();
    });

    // 语言切换
    $('btn-lang').addEventListener('click', () => {
      window.KTI18n.toggle();
      window.location.reload();
    });

    // 申请提交
    $('apply-submit').addEventListener('click', async () => {
      const reasonEl = $('apply-reason');
      const statusEl = $('apply-status');
      if (!reasonEl.value.trim()) {
        statusEl.textContent = t('admin_reason_hint');
        return;
      }
      statusEl.textContent = '提交中…';
      try {
        await window.KTAdmin.applyAdmin(reasonEl.value.trim());
        statusEl.textContent = t('admin_app_submitted');
        reasonEl.value = '';
        // 刷新 UI 显示 pending 状态
        await updateUI();
      } catch (e) {
        statusEl.textContent = t('admin_app_error', { msg: e.message });
      }
    });

    // 反馈提交
    $('feedback-submit').addEventListener('click', async () => {
      const categoryEl = $('feedback-category');
      const titleEl = $('feedback-title-input');
      const detailEl = $('feedback-detail');
      const statusEl = $('feedback-status');
      if (!titleEl.value.trim()) {
        statusEl.textContent = t('feedback_title_hint');
        return;
      }
      statusEl.textContent = '提交中…';
      try {
        await window.KTAdmin.reportIssue(categoryEl.value, titleEl.value.trim(), detailEl.value.trim());
        statusEl.textContent = t('feedback_submitted');
        titleEl.value = '';
        detailEl.value = '';
      } catch (e) {
        statusEl.textContent = t('feedback_error', { msg: e.message });
      }
    });

    await auth.init();
    await updateUI();
    auth.onChange(() => updateUI());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
