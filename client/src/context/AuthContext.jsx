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

  const API_BASE = `${getApiUrl()}/api/auth`;

  const checkIsAdmin = (role) => String(role || '').trim().toLowerCase() === 'admin';

  useEffect(() => {
    let mounted = true;

    const handleSupabaseSession = async (session) => {
      if (!session?.user || !mounted) return false;
      try {
        localStorage.setItem('scamshield_token', session.access_token);
        const username = session.user.user_metadata?.full_name || session.user.user_metadata?.name || session.user.email.split('@')[0];
        let profile = null;
        let backendProfile = null;

        // === ATTEMPT 1: Call Backend oauth-sync ===
        try {
          const syncRes = await fetch(`${API_BASE}/oauth-sync`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: session.user.id, email: session.user.email, username })
          });
          if (syncRes.ok) {
            const syncData = await syncRes.json();
            console.log('[Auth] Backend oauth-sync:', syncData?.profile?.role);
            if (syncData?.ok && syncData?.profile) {
              backendProfile = syncData.profile;
            }
          }
        } catch (backendErr) {
          console.warn('[Auth] Backend unreachable:', backendErr.message);
        }

        // === ATTEMPT 2: ALWAYS query Supabase directly from frontend by ID ===
        try {
          const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
          if (data) {
            console.log('[Auth] Found profile directly by ID, role:', data.role);
            profile = data;
          }
        } catch (e) { /* RLS or not found */ }

        // === ATTEMPT 3: ALWAYS query Supabase directly from frontend by EMAIL ===
        if (!profile || !checkIsAdmin(profile.role)) {
          try {
            const { data: emailRows } = await supabase.from('profiles').select('*').eq('email', session.user.email);
            if (emailRows && emailRows.length > 0) {
              const adminRow = emailRows.find(p => checkIsAdmin(p.role));
              if (adminRow) {
                console.log('[Auth] Found admin profile directly by email!');
                profile = adminRow;
              } else if (!profile) {
                profile = emailRows[0];
              }
            }
          } catch (e) { /* RLS or not found */ }
        }

        // === ATTEMPT 4: Fallback to backend profile or default new user ===
        if (!profile) {
          profile = backendProfile || { id: session.user.id, email: session.user.email, username, role: 'user', xp: 0, level: 1, streak: 1 };
          if (!backendProfile) {
            try {
              const { data: created } = await supabase.from('profiles').insert([profile]).select().single();
              if (created) profile = created;
            } catch (e) { /* use in-memory profile */ }
          }
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
      loginWithGoogle, logout, updateProfileLocal,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
