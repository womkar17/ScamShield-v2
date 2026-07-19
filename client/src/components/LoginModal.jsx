import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthForm from './AuthForm';

export default function LoginModal() {
  const { showLoginModal, closeLogin, isDev, devBypassLogin } = useContext(AuthContext);

  if (!showLoginModal) return null;

  return (
    <div style={styles.overlay}>
      <div className="auth-card" style={styles.card}>
        <button style={styles.closeButton} onClick={closeLogin}>✕</button>
        
        <div style={styles.header}>
          <div style={styles.icon}>🛡️</div>
          <h2 style={styles.title}>Secure Portal Access</h2>
          <p style={styles.subtitle}>
            Sign in with Google OAuth or Email OTP to sync your cyber training progress.
          </p>
        </div>

        <div style={{ width: '100%', marginTop: '1.25rem' }}>
          <AuthForm onSuccess={closeLogin} />
          
          {isDev && (
            <button 
              onClick={devBypassLogin}
              style={{ ...styles.button, marginTop: '1rem', background: '#3b82f6', color: 'white', fontWeight: 'bold' }}
            >
              🛠️ Quick Login (Local Dev Mode)
            </button>
          )}
        </div>

        <div style={styles.footer}>
          🔒 Protected by Google Cloud &amp; Supabase OAuth Security
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '1rem',
  },
  card: {
    backgroundColor: 'rgba(20, 20, 30, 0.85)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '3rem 2.5rem',
    width: '100%',
    maxWidth: '450px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(102, 126, 234, 0.15)',
    position: 'relative',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: '0.875rem',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    transition: 'all 0.2s',
  },
  closeButton: {
    position: 'absolute',
    top: '1.2rem',
    right: '1.2rem',
    background: 'none',
    border: 'none',
    color: 'var(--text-muted, rgba(255,255,255,0.5))',
    fontSize: '1.2rem',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  header: {
    marginBottom: '1rem',
  },
  icon: {
    fontSize: '3.5rem',
    marginBottom: '0.75rem',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: 'white',
    margin: '0 0 0.75rem 0',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    margin: 0,
  },
  footer: {
    marginTop: '2rem',
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.4)',
    letterSpacing: '0.5px',
  }
};
