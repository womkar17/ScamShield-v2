import React, { useState } from 'react';

export default function FakeNextjournalSim({ onComplete }) {
  const [phase, setPhase] = useState('view');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onComplete(['Institutional SSO Credentials', 'Proprietary Research Data']);
    }, 1500);
  };

  return (
    <div style={{
      maxWidth: '550px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden',
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
          <span style={{ color: '#e74c3c' }}>nextjournal-collaboration.com/invite/dr-smith</span>
        </div>
      </div>

      <div style={{ padding: '24px', background: '#f8f9fa', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #e0e0e0' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '8px', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#fff' }}>
            📓
          </div>
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: '1.2rem', color: '#111' }}>Nextjournal</h2>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Collaborative Data Science & Research</p>
          </div>
        </div>

        <div style={{ marginBottom: '24px', background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#111', fontWeight: 'bold' }}>Dr. A. Smith invited you to collaborate</h3>
          </div>
          <p style={{ color: '#444', lineHeight: '1.6', fontSize: '0.95rem', margin: '0 0 12px 0' }}>
            You have been invited to view and edit the confidential notebook: <strong>"Q3 Machine Learning Dataset & Analysis.ipynb"</strong>
          </p>
          <div style={{ padding: '10px', background: '#f1f5f9', borderRadius: '6px', borderLeft: '4px solid #3b82f6', fontSize: '0.9rem', color: '#475569' }}>
            "Hi team, I've compiled the final training data. Please review the results before we publish."
          </div>
        </div>

        {phase === 'view' ? (
          <button 
            onClick={() => setPhase('form')}
            style={{
              width: '100%', padding: '14px', background: '#3b82f6',
              color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.05rem',
              fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            Accept Invitation & View Notebook
          </button>
        ) : (
          <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #ddd', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 16px', color: '#111', fontSize: '1.1rem', borderBottom: '1px solid #eee', paddingBottom: '12px', textAlign: 'center' }}>
              Sign in to Nextjournal
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#666', textAlign: 'center', marginBottom: '16px' }}>
              Authenticate with your institutional or corporate email to access this private workspace.
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '6px', color: '#555', fontSize: '0.85rem', fontWeight: '600' }}>Institutional Email</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, 'email')}
                  style={{ width: '100%', padding: '10px 12px', background: '#f5f5f5', border: '1px solid #ccc', borderRadius: '6px', color: '#111', fontSize: '0.95rem', boxSizing: 'border-box' }} 
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '6px', color: '#555', fontSize: '0.85rem', fontWeight: '600' }}>Password</label>
                <input 
                  type="password" 
                  required 
                  value={formData.password}
                  onChange={(e) => handleInputChange(e, 'password')}
                  style={{ width: '100%', padding: '10px 12px', background: '#f5f5f5', border: '1px solid #ccc', borderRadius: '6px', color: '#111', fontSize: '0.95rem', boxSizing: 'border-box' }} 
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                style={{
                  width: '100%', padding: '14px', background: loading ? '#999' : '#3b82f6',
                  color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem',
                  fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '8px'
                }}
              >
                {loading ? 'Authenticating...' : 'Sign in & Access Data'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
