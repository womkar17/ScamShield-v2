import { createContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { getApiUrl } from '../lib/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
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
        let profile = null;

        // Step 1: Query Supabase directly by ID
        try {
          const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
          if (data) profile = data;
        } catch (e) { /* RLS or not found */ }

        // Step 2: If not found by ID, check by email (and link ID if found)
        if (!profile) {
          try {
            const { data: emailRows } = await supabase.from('profiles').select('*').eq('email', session.user.email);
            if (emailRows && emailRows.length > 0) {
              profile = emailRows.find(p => checkIsAdmin(p.role)) || emailRows[0];
              if (profile.id !== session.user.id) {
                await supabase.from('profiles').update({ id: session.user.id }).eq('email', session.user.email).catch(() => {});
              }
            }
          } catch (e) { /* RLS or not found */ }
        }

        // Step 3: If still no profile, insert clean new row
        if (!profile) {
          profile = { id: session.user.id, email: session.user.email, username, role: 'user', xp: 0, level: 1, streak: 1 };
          try {
            const { data: created } = await supabase.from('profiles').insert([profile]).select().single();
            if (created) profile = created;
          } catch (e) { /* use default in-memory profile */ }
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

  return (
    <AuthContext.Provider value={{
      currentUser, userProfile, isLoggedIn, isAdmin, loading,
      showLoginModal, openLogin, closeLogin,
      loginWithGoogle, sendOtp, verifyOtp, logout, updateProfileLocal,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
