import { createContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { getApiUrl } from '../lib/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  const [currentUser, setCurrentUser] = useState(isDev ? { id: 'test-user', email: 'test@example.com' } : null);
  const [userProfile, setUserProfile] = useState(isDev ? { username: 'TestUser', level: 10 } : null);
  const [isLoggedIn, setIsLoggedIn] = useState(isDev);
  const [isAdmin, setIsAdmin] = useState(isDev);
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const API_BASE = `${getApiUrl()}/api/auth`;

  const checkIsAdmin = (role) => String(role || '').trim().toLowerCase() === 'admin';

  const openLogin = useCallback(() => setShowLoginModal(true), []);
  const closeLogin = useCallback(() => setShowLoginModal(false), []);

  const sendOtp = useCallback(async (email) => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
          shouldCreateUser: true
        }
      });
      if (error) return { ok: false, err: error.message };
      return { ok: true };
    } catch (err) {
      return { ok: false, err: err.message || 'Failed to send verification code.' };
    }
  }, []);

  const verifyOtp = useCallback(async (email, token) => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email: email.trim(),
        token: token.trim(),
        type: 'email'
      });
      if (error) return { ok: false, err: error.message };
      return { ok: true, data };
    } catch (err) {
      return { ok: false, err: err.message || 'Failed to verify OTP code.' };
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    const handleSupabaseSession = async (session) => {
      if (!session?.user || !mounted) return false;
      try {
        localStorage.setItem('scamshield_token', session.access_token);
        const username = session.user.user_metadata?.full_name || session.user.user_metadata?.name || session.user.email?.split('@')[0] || 'CyberUser';
        let profile = null;

        // 1. Call secure Backend API (uses Admin Service Key to bypass RLS and sync roles)
        try {
          const syncRes = await fetch(`${API_BASE}/auth/sync`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: session.user.id, email: session.user.email, username })
          });
          if (syncRes.ok) {
            const syncData = await syncRes.json();
            if (syncData?.ok && syncData?.profile) {
              profile = syncData.profile;
            }
          }
        } catch (backendErr) {
          console.warn('[Auth] Backend sync failed, falling back to direct query:', backendErr.message);
        }

        // 2. Direct query fallback if backend is offline
        if (!profile) {
          try {
            const { data } = await supabase.from('profiles').select('*').eq('email', session.user.email);
            if (data && data.length > 0) {
              profile = data.find(p => checkIsAdmin(p.role)) || data[0];
            }
          } catch (e) { /* ignore */ }
        }

        // 3. In-memory fallback if all queries fail
        if (!profile) {
          profile = { id: session.user.id, email: session.user.email, username, role: 'user', xp: 0, level: 1, streak: 1 };
        }

        if (mounted) {
          const adminStatus = checkIsAdmin(profile.role);
          console.log('[Auth] FINAL → email:', profile.email, 'role:', profile.role, 'isAdmin:', adminStatus);
          setCurrentUser(session.user);
          setUserProfile(profile);
          setIsLoggedIn(true);
          setIsAdmin(adminStatus);
          document.documentElement.setAttribute('data-theme', 'dark');
        }
        return true;
      } catch (err) {
        console.error('[Auth] handleSupabaseSession error:', err);
        return false;
      }
    };

    const initAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          await handleSupabaseSession(session);
          if (mounted) setLoading(false);
          return;
        }
      } catch (e) {
        console.error('[Auth] getSession error:', e);
      }
      if (mounted) setLoading(false);
    };

    initAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('[Auth] onAuthStateChange:', event);
      if (event === 'SIGNED_IN' && session) {
        await handleSupabaseSession(session);
        if (mounted) setLoading(false);
      } else if (event === 'SIGNED_OUT') {
        if (mounted) {
          localStorage.removeItem('scamshield_token');
          setCurrentUser(null);
          setUserProfile(null);
          setIsLoggedIn(false);
          setIsAdmin(false);
        }
      }
    });

    return () => {
      mounted = false;
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const loginWithGoogle = useCallback(async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
          queryParams: { prompt: 'select_account consent' }
        }
      });
      if (error) return { ok: false, err: error.message };
      return { ok: true };
    } catch (err) {
      return { ok: false, err: 'Failed to initialize Google login.' };
    }
  }, []);

  const logout = useCallback(async () => {
    localStorage.removeItem('scamshield_token');
    setCurrentUser(null);
    setUserProfile(null);
    setIsLoggedIn(false);
    setIsAdmin(false);
    await supabase.auth.signOut().catch(() => {});
  }, []);

  const updateProfileLocal = (updates) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
  };

  const devBypassLogin = useCallback(() => {
    setCurrentUser({ id: 'dev-user', email: 'dev@localhost' });
    setUserProfile({ username: 'LocalDev', level: 10 });
    setIsLoggedIn(true);
    setIsAdmin(true);
    setLoading(false);
    setShowLoginModal(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      currentUser, userProfile, isLoggedIn, isAdmin, loading, isDev,
      showLoginModal, openLogin, closeLogin, devBypassLogin,
      loginWithGoogle, sendOtp, verifyOtp, logout, updateProfileLocal,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
