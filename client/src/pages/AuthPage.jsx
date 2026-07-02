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
          🔒 256-Bit Encrypted Google Cloud &amp; Supabase Security
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
    marginBottom: '1rem',
  },
  icon: {
    fontSize: '3.5rem',
    marginBottom: '0.75rem',
  },
  title: {
    fontSize: '2rem',
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
    marginTop: '2.5rem',
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.4)',
    letterSpacing: '0.5px',
  }
};
