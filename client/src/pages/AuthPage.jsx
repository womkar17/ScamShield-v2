import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

export default function AuthPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div style={styles.container}>
      <div className="auth-card" style={styles.card}>
        <div style={styles.header}>
          <div style={styles.icon}>🛡️</div>
          <h1 style={styles.title}>ScamShield Portal</h1>
          <p style={styles.subtitle}>
            Choose your preferred authentication method to access interactive cyber drills and leaderboards.
          </p>
        </div>

        <div style={{ width: '100%', marginTop: '1.5rem' }}>
          <AuthForm onSuccess={() => navigate('/dashboard')} />
        </div>

        <div style={styles.footer}>
          ðŸ”’ 256-Bit Encrypted Google Cloud &amp; Supabase Security
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 1rem',
  },
  card: {
    backgroundColor: 'var(--bg2)',
    backdropFilter: 'blur(20px)',
    border: '1px solid var(--border)',
    borderRadius: '24px',
    padding: '3.5rem 3rem',
    width: '100%',
    maxWidth: '480px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(102, 126, 234, 0.1)',
    textAlign: 'center',
  },
  header: {
    marginBottom: '1.5rem',
  },
  icon: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: '800',
    color: 'var(--text-h)',
    margin: '0 0 0.75rem 0',
    background: 'linear-gradient(135deg, var(--blue), var(--purple))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    color: 'var(--text2)',
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: 0,
  },
  footer: {
    marginTop: '3rem',
    fontSize: '0.85rem',
    color: 'var(--text3)',
    letterSpacing: '0.5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  }
};

