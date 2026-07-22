import React, { useState } from 'react';

export default function FakeNoOpsSim({ onComplete }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', rootPassword: '' });

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onComplete(['Root Cloud Credentials', 'Serverless Infrastructure Access']);
    }, 1800);
  };

  return (
    <div style={{
      maxWidth: '850px', height: '550px', margin: '0 auto', borderRadius: '8px', overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#f9fafb', border: '1px solid #e5e7eb'
    }}>
      {/* Fake Browser Toolbar */}
      <div style={{ background: '#f3f4f6', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{
          flex: 1, background: '#fff', borderRadius: '4px', padding: '6px 12px',
          display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontSize: '0.85rem',
          border: '1px solid #d1d5db'
        }}>
          <span style={{ color: '#ef4444' }}>⚠️ Not Secure</span>
          <span style={{ color: '#374151' }}>console.serverless-noops-cloud.com/billing/suspend</span>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Fake Cloud Sidebar */}
        <div style={{ width: '220px', background: '#111827', color: '#fff', padding: '20px 0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '0 20px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>☁️</span>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '0.5px' }}>NoOps Cloud</span>
          </div>
          
          <div style={{ padding: '12px 20px', color: '#9ca3af', fontSize: '0.9rem', cursor: 'pointer' }}>📊 Dashboard</div>
          <div style={{ padding: '12px 20px', color: '#9ca3af', fontSize: '0.9rem', cursor: 'pointer' }}>⚡ Functions</div>
          <div style={{ padding: '12px 20px', color: '#9ca3af', fontSize: '0.9rem', cursor: 'pointer' }}>🌐 Edge Network</div>
          <div style={{ padding: '12px 20px', background: '#374151', color: '#fff', fontSize: '0.9rem', borderLeft: '4px solid #ef4444', fontWeight: 'bold' }}>💳 Billing</div>
          <div style={{ padding: '12px 20px', color: '#9ca3af', fontSize: '0.9rem', cursor: 'pointer' }}>⚙️ Settings</div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
          
          {/* Critical Banner */}
          <div style={{ background: '#fef2f2', border: '1px solid #f87171', borderRadius: '6px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '30px' }}>
            <span style={{ fontSize: '1.5rem' }}>🚨</span>
            <div>
              <h3 style={{ margin: '0 0 4px 0', color: '#991b1b', fontSize: '1.05rem' }}>URGENT: Serverless Quota Exceeded (Denial of Wallet)</h3>
              <p style={{ margin: 0, color: '#b91c1c', fontSize: '0.9rem' }}>
                Your serverless functions have received anomalous traffic, incurring a balance of <strong>$14,205.80</strong>. 
                Your automated payment method failed. All production environments will be terminated in 15 minutes unless the account owner authenticates and resolves the balance.
              </p>
            </div>
          </div>

          {/* Login Form */}
          <div style={{ maxWidth: '400px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ margin: '0 0 8px 0', color: '#111827', fontSize: '1.4rem', textAlign: 'center' }}>Root Account Login</h2>
            <p style={{ color: '#6b7280', fontSize: '0.85rem', textAlign: 'center', marginBottom: '24px' }}>
              Authentication required to access Billing & Quota controls.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', color: '#374151', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Root Account Email</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, 'email')}
                  style={{ 
                    width: '100%', padding: '10px 12px', background: '#f9fafb', border: '1px solid #d1d5db', 
                    borderRadius: '6px', color: '#111827', fontSize: '0.95rem', boxSizing: 'border-box'
                  }} 
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', color: '#374151', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Master Password</label>
                <input 
                  type="password" 
                  required 
                  value={formData.rootPassword}
                  onChange={(e) => handleInputChange(e, 'rootPassword')}
                  style={{ 
                    width: '100%', padding: '10px 12px', background: '#f9fafb', border: '1px solid #d1d5db', 
                    borderRadius: '6px', color: '#111827', fontSize: '0.95rem', boxSizing: 'border-box'
                  }} 
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                style={{
                  width: '100%', padding: '12px', background: loading ? '#9ca3af' : '#2563eb',
                  color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1rem',
                  fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s'
                }}
              >
                {loading ? 'Verifying Credentials...' : 'Sign in as Root User'}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
