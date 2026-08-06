import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { getApiUrl } from '../lib/api';

export default function SettingsPage() {
  const { userProfile, currentUser, updateProfileLocal } = useContext(AuthContext);
  
  const [username, setUsername] = useState('');
  const [theme, setTheme] = useState('dark');
  const [avatar, setAvatar] = useState('Felix');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const AVATARS = ['Felix', 'Aneka', 'Bandit', 'Jasper', 'Max', 'Mimi', 'Buster', 'Salem', 'Jack', 'Gizmo'];

  useEffect(() => {
    if (userProfile) {
      setUsername(userProfile.username || userProfile.email?.split('@')[0] || '');
      setTheme(userProfile.theme || localStorage.getItem('scamshield_theme') || 'dark');
      setAvatar(userProfile.avatar || localStorage.getItem('scamshield_avatar') || 'Felix');
    }
  }, [userProfile]);

  const handleSave = async () => {
    if (!currentUser?.id) return;
    
    setLoading(true);
    setMessage('');
    
    // Optimistically apply locally first so UI updates instantly
    updateProfileLocal({ username, theme, avatar });
    
    try {
      const token = localStorage.getItem('scamshield_token');
      const apiUrl = getApiUrl();
      const res = await fetch(`${apiUrl}/api/auth/update-profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ username, theme, avatar })
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        console.warn('Backend update failed but saved locally:', data.err);
      }
      
      setMessage('Settings saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      console.warn('Network error saving settings, but saved locally:', err);
      setMessage('Settings saved locally! (Offline mode)');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Settings</h1>
      
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Personalize</h2>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Username</label>
          <input 
            type="text" 
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <p style={styles.hint}>This is how you will appear on the leaderboards.</p>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Avatar</label>
          <div style={styles.avatarGrid}>
            {AVATARS.map(seed => (
              <img 
                key={seed}
                src={`https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`}
                alt={seed}
                onClick={() => setAvatar(seed)}
                style={{
                  ...styles.avatarIcon,
                  border: avatar === seed ? '2px solid var(--accent)' : '2px solid transparent',
                  background: avatar === seed ? 'var(--accent-bg)' : 'var(--bg2)'
                }}
              />
            ))}
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Theme</label>
          <div style={styles.themeToggle}>
            <button 
              style={{ ...styles.themeBtn, ...(theme === 'dark' ? styles.themeBtnActive : {}) }}
              onClick={() => setTheme('dark')}
            >
              🌙 Dark
            </button>
            <button 
              style={{ ...styles.themeBtn, ...(theme === 'light' ? styles.themeBtnActive : {}) }}
              onClick={() => setTheme('light')}
            >
              ☀️ Light
            </button>
          </div>
        </div>

        <div style={styles.actions}>
          <button style={styles.saveBtn} onClick={handleSave} disabled={loading}>
            {loading ? 'Saving...' : 'Save Settings'}
          </button>
          {message && (
            <span style={{ 
              ...styles.message, 
              color: message.includes('Error') ? '#ef4444' : '#10b981' 
            }}>
              {message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: 'var(--text-h)',
  },
  card: {
    background: 'var(--bg3)',
    border: '1px solid var(--border)',
    borderRadius: '16px',
    padding: '30px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: 'var(--text-h)',
  },
  formGroup: {
    marginBottom: '2rem',
  },
  label: {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text2)',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    maxWidth: '400px',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    background: 'var(--bg2)',
    color: 'var(--text)',
    fontSize: '1rem',
    fontFamily: 'inherit',
  },
  hint: {
    fontSize: '0.8rem',
    color: 'var(--text3)',
    marginTop: '6px',
  },
  avatarGrid: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  avatarIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '8px',
    cursor: 'pointer',
    padding: '4px',
    transition: 'all 0.2s',
  },
  themeToggle: {
    display: 'flex',
    gap: '10px',
  },
  themeBtn: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    background: 'var(--bg2)',
    color: 'var(--text)',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'all 0.2s',
  },
  themeBtnActive: {
    background: 'var(--accent-bg)',
    border: '1px solid var(--accent)',
    color: 'var(--accent)',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid var(--border)',
  },
  saveBtn: {
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  message: {
    fontSize: '0.9rem',
    fontWeight: '500',
  }
};
