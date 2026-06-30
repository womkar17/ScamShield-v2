export const LS_SESSIONS = 'ss_sessions';
export const LS_ATTEMPTS = 'ss_attempts';
export const LS_CUR_SID = 'ss_session';
export const LS_VERSION = 'ss_data_version';
export const CURRENT_SCHEMA_VERSION = 2;
export const API_BASE = 'https://scamshield-api-wgca.onrender.com/api';
export const API_ENABLED = true;

export function lsGet(key) {
  try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; }
}

export function lsSet(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
    return { ok: true };
  } catch (e) {
    if (e && e.name === 'QuotaExceededError') {
      console.warn('localStorage quota exceeded for', key);
      return { ok: false, err: 'quota' };
    }
    return { ok: false, err: e?.message || 'unknown' };
  }
}

export function runMigrations() {
  const stored = parseInt(localStorage.getItem(LS_VERSION) || '0', 10);
  if (stored === 0) {
    localStorage.setItem(LS_VERSION, String(CURRENT_SCHEMA_VERSION));
    return;
  }
  if (stored < CURRENT_SCHEMA_VERSION) {
    localStorage.setItem(LS_VERSION, String(CURRENT_SCHEMA_VERSION));
    console.log(`Migrated schema to v${CURRENT_SCHEMA_VERSION}`);
  }
}

export function getAllSessions() { return lsGet(LS_SESSIONS) || {}; }
export function getAllAttempts() { return lsGet(LS_ATTEMPTS) || []; }

export function saveSession(obj) {
  const sessions = getAllSessions();
  sessions[obj.session_id] = obj;
  return lsSet(LS_SESSIONS, sessions);
}

export function saveAttempt(obj) {
  const attempts = getAllAttempts();
  const idx = attempts.findIndex(a => a.session_id === obj.session_id && a.module_id === obj.module_id);
  if (idx >= 0) attempts[idx] = { ...attempts[idx], ...obj, completed_at: new Date().toISOString() };
  else attempts.push({ ...obj, completed_at: new Date().toISOString() });
  return lsSet(LS_ATTEMPTS, attempts);
}

export async function localSessionStart(existing_id) {
  if (API_ENABLED) {
    try {
      const res = await fetch(API_BASE + '/session/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: existing_id || null })
      });
      const data = await res.json();
      if (data.ok) {
        const sessions = getAllSessions();
        if (!sessions[data.session_id]) {
          sessions[data.session_id] = {
            session_id: data.session_id,
            started_at: new Date().toISOString(),
            last_seen: new Date().toISOString()
          };
          lsSet(LS_SESSIONS, sessions);
        }
        return { ok: true, session_id: data.session_id, from_api: true };
      }
    } catch (e) {
      console.warn('API unavailable, using localStorage:', e.message);
    }
  }

  const sessions = getAllSessions();
  if (existing_id && sessions[existing_id]) {
    sessions[existing_id].last_seen = new Date().toISOString();
    lsSet(LS_SESSIONS, sessions);
    return { ok: true, session_id: existing_id, from_api: false };
  }
  const newId = 'ss_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
  saveSession({ session_id: newId, started_at: new Date().toISOString(), last_seen: new Date().toISOString() });
  return { ok: true, session_id: newId, from_api: false };
}

export async function localLogAttempt(sessionId, data) {
  data.session_id = sessionId;
  if (API_ENABLED && sessionId) {
    try {
      const res = await fetch(API_BASE + '/attempt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (json.ok) {
        return { ok: true, from_api: true };
      }
    } catch (e) {
      console.warn('API unavailable, saving to localStorage:', e.message);
    }
  }

  saveAttempt(data);
  return { ok: true, from_api: false };
}
