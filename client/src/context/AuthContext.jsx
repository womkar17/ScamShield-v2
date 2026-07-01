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

    // Helper to process a Supabase session (e.g. from Google OAuth)
    const handleSupabaseSession = async (session) => {
      if (!session?.user || !mounted) return false;
      try {
        localStorage.setItem('scamshield_token', session.access_token);
        let { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (!profile) {
          const newProfile = {
            id: session.user.id,
            email: session.user.email,
            display_name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || session.user.email.split('@')[0],
            role: 'user',
            xp: 100,
            level: 1,
            completed_modules: []
          };
          const { data: createdProfile } = await supabase
            .from('profiles')
            .upsert([newProfile])
            .select()
            .single();
          profile = createdProfile || newProfile;
        }

        if (mounted) {
          setCurrentUser(session.user);
          setUserProfile(profile);
          setIsLoggedIn(true);
          setIsAdmin(profile.role === 'admin');
          document.documentElement.setAttribute('data-theme', 'dark');
        }
        return true;
      } catch (err) {
        console.error('Error handling Supabase OAuth session:', err);
        return false;
      }
    };

    const initAuth = async () => {
      // 1. Check if Supabase already has an OAuth or active session
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          const handled = await handleSupabaseSession(session);
          if (handled) {
            if (mounted) setLoading(false);
            return;
          }
        }
      } catch (e) {
        console.error('Supabase getSession error:', e);
      }

      // 2. Fallback to existing custom OTP token in localStorage
      const token = localStorage.getItem('scamshield_token');
      if (token) {
        try {
          const res = await fetch(`${API_BASE}/me`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          const data = await res.json();
          
          if (data.ok && data.profile) {
            supabase.realtime.setAuth(token);
            if (mounted) {
              setCurrentUser({ id: data.profile.id, email: data.profile.email });
              setUserProfile(data.profile);
              setIsLoggedIn(true);
              setIsAdmin(data.profile.role === 'admin');
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          } else {
            localStorage.removeItem('scamshield_token');
          }
        } catch (err) {
          console.error('Auth check error:', err);
        }
      }
      if (mounted) setLoading(false);
    };

    initAuth();

    // Listen for OAuth login/logout events from Supabase
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
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
          redirectTo: `${window.location.origin}/dashboard`
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

  const sendOtp = useCallback(async (email) => {
    try {
      const res = await fetch(`${API_BASE}/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      return data.ok ? { ok: true } : { ok: false, err: data.err };
    } catch (err) {
      console.error('Send OTP error:', err);
      return { ok: false, err: 'Network error. Is the server running?' };
    }
  }, []);

  const verifyOtp = useCallback(async (email, tokenStr) => {
    try {
      const res = await fetch(`${API_BASE}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token: tokenStr })
      });
      const data = await res.json();

      if (data.ok) {
        // Save token
        localStorage.setItem('scamshield_token', data.token);
        
        // Fetch full profile manually or rely on /me endpoint (but let's just do it here to be fast)
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single();

        setCurrentUser(data.user);
        const finalProfile = profile || data.user;
        setUserProfile(finalProfile);
        setIsLoggedIn(true);
        setIsAdmin(data.user.role === 'admin');
        
        document.documentElement.setAttribute('data-theme', 'dark');

        return { ok: true, isNewUser: data.isNewUser, profile: finalProfile };
      } else {
        return { ok: false, err: data.err };
      }
    } catch (err) {
      console.error('Verify OTP error:', err);
      return { ok: false, err: 'Network error. Is the server running?' };
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

  // We are not using the generic password login for this flow anymore
  const login = async () => { return { ok: false, err: 'Use OTP flow instead.'} };
  const signUp = async () => { return { ok: false, err: 'Use OTP flow instead.'} };

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
      sendOtp,
      verifyOtp,
      login,
      signUp,
      logout,
      updateProfileLocal,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
