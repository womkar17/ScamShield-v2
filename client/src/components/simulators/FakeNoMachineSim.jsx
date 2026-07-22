import React, { useState } from 'react';

export default function FakeNoMachineSim({ onComplete }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onComplete(['Corporate Active Directory Credentials', 'VPN/Remote Desktop Access']);
    }, 1800);
  };

  return (
    <div style={{
      maxWidth: '800px', height: '500px', margin: '0 auto', borderRadius: '8px', overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.8)', display: 'flex', flexDirection: 'column',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      background: '#121212', border: '1px solid #333', position: 'relative'
    }}>
      {/* Fake Browser Toolbar */}
      <div style={{ background: '#222', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #111' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{
          flex: 1, background: '#111', borderRadius: '4px', padding: '6px 12px',
          display: 'flex', alignItems: 'center', gap: '8px', color: '#888', fontSize: '0.8rem'
        }}>
          <span style={{ color: '#e74c3c' }}>Not Secure</span>
          <span style={{ color: '#ccc' }}>nx-webplayer.corp-remote-access.net/nxwebplayer</span>
        </div>
      </div>

      {/* NoMachine Web UI Background */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle, #2a2a2a 0%, #121212 100%)' }}>
        
        {/* Login Modal */}
        <div style={{ 
          background: '#222', width: '360px', padding: '30px', borderRadius: '4px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid #333', textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <div style={{ 
              width: '48px', height: '48px', background: '#d32f2f', borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.8rem', fontWeight: 'bold'
            }}>
              N
            </div>
          </div>
          
          <h2 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 8px 0', fontWeight: '500' }}>NoMachine Web Client</h2>
          <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 24px 0' }}>Connect to: Enterprise NX Gateway (10.0.4.52)</p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px', textAlign: 'left' }}>
              <label style={{ display: 'block', color: '#aaa', fontSize: '0.8rem', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Username</label>
              <input 
                type="text" 
                required 
                value={formData.username}
                onChange={(e) => handleInputChange(e, 'username')}
                placeholder="DOMAIN\user"
                style={{ 
                  width: '100%', padding: '12px', background: '#111', border: '1px solid #444', 
                  borderRadius: '4px', color: '#fff', fontSize: '0.95rem', boxSizing: 'border-box',
                  outline: 'none'
                }} 
              />
            </div>
            
            <div style={{ marginBottom: '24px', textAlign: 'left' }}>
              <label style={{ display: 'block', color: '#aaa', fontSize: '0.8rem', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Password</label>
              <input 
                type="password" 
                required 
                value={formData.password}
                onChange={(e) => handleInputChange(e, 'password')}
                style={{ 
                  width: '100%', padding: '12px', background: '#111', border: '1px solid #444', 
                  borderRadius: '4px', color: '#fff', fontSize: '0.95rem', boxSizing: 'border-box',
                  outline: 'none'
                }} 
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              style={{
                width: '100%', padding: '12px', background: loading ? '#555' : '#d32f2f',
                color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem',
                fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s'
              }}
            >
              {loading ? 'Connecting to NX Server...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer Branding */}
      <div style={{ position: 'absolute', bottom: '10px', right: '15px', color: '#555', fontSize: '0.75rem' }}>
        NoMachine® Enterprise Client
      </div>
    </div>
  );
}
