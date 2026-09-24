/* ============================================================
 * auth.js —— GitHub OAuth 登录（通过 Cloudflare Worker 代理）
 * ============================================================ */
'use strict';

window.KTAuth = (() => {
  const LS_KEY = 'pkt-github-token';
  const OAUTH_CLIENT_ID = 'Ov23liwXl1I1bGvwv3Ou'; // GitHub OAuth App Client ID
  const OAUTH_PROXY = 'https://pkt-oauth.pkt-oauth.workers.dev';
  const FRONTEND_URL = 'https://jeff-giff.github.io/Physics-Knowledge-Tree/';

  let token = null;
  let user = null;
  let listeners = [];

  function loadToken() {
    try {
      token = sessionStorage.getItem(LS_KEY) || null;
    } catch (e) { token = null; }
  }

  function saveToken(t) {
    token = t;
    try {
      if (t) sessionStorage.setItem(LS_KEY, t);
      else sessionStorage.removeItem(LS_KEY);
    } catch (e) {}
  }

  async function fetchUser() {
    if (!token) { user = null; return; }
    try {
      const res = await fetch('https://api.github.com/user', {
        headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github+json' }
      });
      if (res.ok) {
        user = await res.json();
      } else {
        user = null;
        if (res.status === 401) saveToken(null);
      }
    } catch (e) {
      user = null;
    }
  }

  function isAdmin() {
    const g = window.PHYSICS_GRAPH;
    if (!g || !g.admins || !user || !user.login) return false;
    return g.admins.includes(user.login.toLowerCase());
  }

  function isLoggedIn() { return !!token && !!user; }
  function getUser() { return user; }

  function emit() {
    listeners.forEach(fn => { try { fn(isLoggedIn(), user, isAdmin()); } catch (e) {} });
  }

  function onChange(fn) { listeners.push(fn); }

  async function init() {
    // 处理 OAuth 回调（URL hash 中带有 token）
    const hash = window.location.hash;
    if (hash.includes('token=')) {
      const params = new URLSearchParams(hash.replace(/^#/, ''));
      const t = params.get('token');
      const state = params.get('state');
      if (t) {
        saveToken(t);
        // 清除 hash，避免刷新重复处理
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }

    loadToken();
    if (token) await fetchUser();
    emit();
  }

  function login() {
    const state = Math.random().toString(36).slice(2) + Date.now().toString(36);
    try { sessionStorage.setItem('pkt-oauth-state', state); } catch (e) {}
    const url = new URL('https://github.com/login/oauth/authorize');
    url.searchParams.set('client_id', OAUTH_CLIENT_ID);
    url.searchParams.set('redirect_uri', `${OAUTH_PROXY}/callback`);
    url.searchParams.set('scope', 'public_repo');
    url.searchParams.set('state', state);
    window.location.href = url.toString();
  }

  function logout() {
    saveToken(null);
    user = null;
    emit();
  }

  return { init, login, logout, isLoggedIn, isAdmin, getUser, onChange };
})();
