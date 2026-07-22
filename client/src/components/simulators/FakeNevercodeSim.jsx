import React, { useState } from 'react';

export default function FakeNevercodeSim({ onComplete }) {
  const [phase, setPhase] = useState('view');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ gitEmail: '', gitPassword: '' });

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onComplete(['GitHub Credentials', 'CI/CD Pipeline Access']);
    }, 1500);
  };

  return (
    <div style={{
      maxWidth: '500px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden',
      boxShadow: '0 15px 50px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#fff', border: '1px solid #333'
    }}>
      {/* Fake Browser Toolbar */}
      <div style={{ background: '#2d2d2d', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{
          flex: 1, background: '#1e1e1e', borderRadius: '6px', padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: '8px', color: '#aaa', fontSize: '0.85rem'
        }}>
          <span style={{ color: '#e74c3c' }}>⚠️</span>
          <span style={{ color: '#e74c3c' }}>nevercode-build-alerts.io/auth/github</span>
        </div>
      </div>

      <div style={{ padding: '24px', background: '#f8f9fa', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #e0e0e0' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '8px', background: '#24292e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#fff' }}>
            ⚙️
          </div>
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: '1.2rem', color: '#111' }}>Nevercode CI/CD Alert</h2>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Build #492 Failed - Action Required</p>
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#d73a49', fontWeight: 'bold' }}>Status: Production Build Failed</h3>
          </div>
          <p style={{ color: '#444', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Your latest push to the <code>main</code> branch failed to compile. The automated deployment pipeline has been halted. You must re-authenticate your GitHub account to view the build logs and restart the pipeline.
          </p>
        </div>

        {phase === 'view' ? (
          <button 
            onClick={() => setPhase('form')}
            style={{
              width: '100%', padding: '14px', background: '#24292e',
              color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.05rem',
              fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            Authenticate with GitHub
          </button>
        ) : (
          <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #ddd', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 16px', color: '#111', fontSize: '1.1rem', borderBottom: '1px solid #eee', paddingBottom: '12px', textAlign: 'center' }}>
              Sign in to GitHub
            </h4>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '6px', color: '#555', fontSize: '0.85rem', fontWeight: '600' }}>Username or Email</label>
                <input 
                  type="text" 
                  required 
                  value={formData.gitEmail}
                  onChange={(e) => handleInputChange(e, 'gitEmail')}
                  style={{ width: '100%', padding: '10px 12px', background: '#f5f5f5', border: '1px solid #ccc', borderRadius: '6px', color: '#111', fontSize: '0.95rem', boxSizing: 'border-box' }} 
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '6px', color: '#555', fontSize: '0.85rem', fontWeight: '600' }}>Password</label>
                <input 
                  type="password" 
                  required 
                  value={formData.gitPassword}
                  onChange={(e) => handleInputChange(e, 'gitPassword')}
                  style={{ width: '100%', padding: '10px 12px', background: '#f5f5f5', border: '1px solid #ccc', borderRadius: '6px', color: '#111', fontSize: '0.95rem', boxSizing: 'border-box' }} 
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                style={{
                  width: '100%', padding: '14px', background: loading ? '#999' : '#2ea44f',
                  color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem',
                  fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '8px'
                }}
              >
                {loading ? 'Authenticating...' : 'Sign in'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
