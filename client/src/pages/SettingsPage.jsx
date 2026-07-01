import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { getApiUrl } from '../lib/api';

export default function SettingsPage() {
  const { userProfile, currentUser, updateProfileLocal, claimAdmin } = useContext(AuthContext);
  
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (userProfile) {
      setUsername(userProfile.username || userProfile.email?.split('@')[0] || '');
    }
  }, [userProfile]);

  const handleSave = async () => {
    if (!currentUser?.id) return;
    
    setLoading(true);
    setMessage('');
    
    try {
      const token = localStorage.getItem('scamshield_token');
      const apiUrl = getApiUrl();
      const res = await fetch(`${apiUrl}/api/auth/update-profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ username, theme: 'dark' })
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.err || 'Failed to update');

      updateProfileLocal({ username, theme: 'dark' });
      
      setMessage('Settings saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      console.error('Error saving settings:', err);
      setMessage('Error saving settings. Please try again.');
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

      <div style={{ ...styles.card, marginTop: '24px', border: '1px solid rgba(236, 72, 153, 0.3)', background: 'linear-gradient(135deg, rgba(236,72,153,0.05), rgba(168,85,247,0.05))' }}>
        <h2 style={{ ...styles.cardTitle, color: '#f472b6' }}>🔐 Developer & Admin Testing Access</h2>
        <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '16px' }}>
          Need to test the Admin Panel without manually editing the Supabase database? Click below to immediately upgrade your current logged-in account (<strong>{currentUser?.email}</strong>) to Admin status.
        </p>
        <button
          style={{
            background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(236, 72, 153, 0.3)',
            transition: 'transform 0.2s'
          }}
          onClick={async () => {
            if (claimAdmin) {
              const res = await claimAdmin();
              if (res?.ok) {
                alert('🎉 Access Granted! You are now an Admin. Check the left sidebar for the Admin Panel link!');
              } else {
                alert('Could not claim admin: ' + (res?.err || 'Try logging out and back in.'));
              }
            }
          }}
        >
          🚀 Unlock Admin Privileges Now
        </button>
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
    background: 'rgba(59, 130, 246, 0.15)',
    border: '1px solid var(--blue)',
    color: 'var(--blue)',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(255,255,255,0.05)',
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
