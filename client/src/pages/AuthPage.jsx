import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function AuthPage() {
  const navigate = useNavigate();
  const { isLoggedIn, loginWithGoogle } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    const res = await loginWithGoogle();
    if (!res?.ok) {
      setError(res?.err || 'Failed to start Google Sign In');
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div className="auth-card" style={styles.card}>
        <div style={styles.header}>
          <div style={styles.icon}>🛡️</div>
          <h1 style={styles.title}>ScamShield Portal</h1>
          <p style={styles.subtitle}>
            Authenticate with your Google account to access interactive cyber drills and leaderboards.
          </p>
        </div>

        {error && <div style={styles.error}>{error}</div>}

        <div style={{ width: '100%', marginTop: '2rem' }}>
          <button
            type="button"
            onClick={handleGoogleLogin}
            style={styles.googleBtn}
            disabled={loading}
          >
            {loading ? (
              <span style={styles.spinner}></span>
            ) : (
              <>
                <svg style={{ width: '22px', height: '22px', marginRight: '12px' }} viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.8C6.2 7.1 8.9 5 12 5z"/>
                  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                  <path fill="#FBBC05" d="M5.3 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.6 7.4C.6 9.4 0 11.6 0 14c0 2.4.6 4.6 1.6 6.6l3.7-2.9z"/>
                  <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.2L1.6 15.9C3.5 19.7 7.4 23 12 23z"/>
                </svg>
                <span>Continue with Google</span>
              </>
            )}
          </button>
        </div>

        <div style={styles.footer}>
          🔒 256-Bit Encrypted Google Cloud Authentication
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 1rem',
  },
  card: {
    backgroundColor: 'rgba(20, 20, 30, 0.85)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '3rem 2.5rem',
    width: '100%',
    maxWidth: '460px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(102, 126, 234, 0.15)',
    textAlign: 'center',
  },
  header: {
    marginBottom: '1.5rem',
  },
  icon: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    margin: '0 0 0.75rem 0',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: 0,
  },
  error: {
    backgroundColor: 'rgba(229, 62, 62, 0.15)',
    color: '#fc8181',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid rgba(229, 62, 62, 0.3)',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
  },
  googleBtn: {
    width: '100%',
    padding: '1.1rem 1.2rem',
    backgroundColor: '#ffffff',
    color: '#3c4043',
    border: '1px solid #dadce0',
    borderRadius: '14px',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  spinner: {
    width: '24px',
    height: '24px',
    border: '3px solid rgba(0,0,0,0.1)',
    borderTop: '3px solid #4285F4',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    display: 'inline-block',
  },
  footer: {
    marginTop: '2.5rem',
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.4)',
    letterSpacing: '0.5px',
  }
};
