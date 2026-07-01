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

  useEffect(() => {
    let mounted = true;

    const handleSupabaseSession = async (session) => {
      if (!session?.user || !mounted) return false;
      try {
        localStorage.setItem('scamshield_token', session.access_token);
        const username = session.user.user_metadata?.full_name || session.user.user_metadata?.name || session.user.email.split('@')[0];
        let profile = null;

        // Call backend oauth-sync (uses service_role key, bypasses RLS)
        try {
          const syncRes = await fetch(`${API_BASE}/oauth-sync`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: session.user.id,
              email: session.user.email,
              username: username
            })
          });
          const syncData = await syncRes.json();
          console.log('oauth-sync response:', syncData?.profile?.email, 'role:', syncData?.profile?.role);
          if (syncData?.ok && syncData?.profile) {
            profile = syncData.profile;
          }
        } catch (backendErr) {
          console.warn('Backend oauth-sync unreachable:', backendErr);
        }

        // Fallback: direct Supabase query by ID (only if backend is completely down)
        if (!profile) {
          console.log('Fallback: querying Supabase directly by id:', session.user.id);
          const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
          if (data) {
            profile = data;
            console.log('Fallback found profile, role:', data.role);
          }
        }

        // Last resort: create a new user profile
        if (!profile) {
          console.log('No profile found anywhere, creating new user');
          profile = { id: session.user.id, email: session.user.email, username, role: 'user', xp: 0, level: 1, streak: 1 };
          await supabase.from('profiles').insert([profile]).select().single();
        }

        if (mounted) {
          console.log('Setting auth state — email:', profile.email, 'role:', profile.role, 'isAdmin:', profile.role === 'admin');
          setCurrentUser(session.user);
          setUserProfile(profile);
          setIsLoggedIn(true);
          setIsAdmin(profile.role === 'admin');
          document.documentElement.setAttribute('data-theme', 'dark');
        }
        return true;
      } catch (err) {
        console.error('handleSupabaseSession error:', err);
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
        console.error('Supabase getSession error:', e);
      }
      if (mounted) setLoading(false);
    };

    initAuth();

    // Listen for Google OAuth login/logout events
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state change:', event);
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
          queryParams: {
            prompt: 'select_account consent',
          }
        }
      });
      if (error) {
        console.error('Google login error:', error.message);
        return { ok: false, err: error.message };
      }
      return { ok: true };
    } catch (err) {
      console.error('Google login exception:', err);
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
      currentUser,
      userProfile,
      isLoggedIn,
      isAdmin,
      loading,
      loginWithGoogle,
      logout,
      updateProfileLocal,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
