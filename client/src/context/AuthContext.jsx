import { createContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_BASE = `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth`;

  useEffect(() => {
    // Check for existing token on mount
    const initAuth = async () => {
      const token = localStorage.getItem('scamshield_token');
      if (token) {
        try {
          const res = await fetch(`${API_BASE}/me`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          const data = await res.json();
          
          if (data.ok && data.profile) {
            // Update Supabase client headers to use our custom JWT
            // This is required so Row Level Security works correctly if enabled later
            supabase.realtime.setAuth(token);
            // Alternatively if you query DB from frontend directly with supabase-js:
            // (Since RLS is off for profiles, it works either way)

            setCurrentUser({ id: data.profile.id, email: data.profile.email });
            setUserProfile(data.profile);
            setIsLoggedIn(true);
            setIsAdmin(data.profile.role === 'admin');
            
            document.documentElement.setAttribute('data-theme', 'dark');
          } else {
            localStorage.removeItem('scamshield_token');
          }
        } catch (err) {
          console.error('Auth check error:', err);
        }
      }
      setLoading(false);
    };

    initAuth();
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
    // Optional: if using supabase for normal queries
    supabase.auth.signOut().catch(()=> {}); 
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
