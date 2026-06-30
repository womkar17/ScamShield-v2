import React, { useState } from 'react';

export default function TaxSim({ onComplete }) {
  const [view, setView] = useState('email'); // 'email' or 'portal'
  const [bankId, setBankId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLinkClick = (e) => {
    e.preventDefault();
    setView('portal');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!bankId.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      const exposedArray = ['User ID / Customer ID', 'Password'];
      onComplete(exposedArray);
    }, 1500);
  };

  if (view === 'email') {
    return (
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        background: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
        color: '#333'
      }}>
        <div style={{ padding: '15px 20px', borderBottom: '1px solid #e0e0e0', background: '#f8f9fa', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span style={{ color: '#5f6368', cursor: 'pointer' }}>← Back</span>
            <span style={{ color: '#5f6368', cursor: 'pointer' }}>Archive</span>
            <span style={{ color: '#5f6368', cursor: 'pointer' }}>Report spam</span>
            <span style={{ color: '#5f6368', cursor: 'pointer' }}>Delete</span>
          </div>
        </div>
        
        <div style={{ padding: '30px' }}>
          <h2 style={{ margin: '0 0 20px', fontSize: '1.4rem', fontWeight: 'normal' }}>
            Important: Your Income Tax Refund of ₹45,500 is Pending
            <span style={{ background: '#f2f2f2', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', marginLeft: '10px' }}>Inbox</span>
          </h2>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
            <div style={{ width: '40px', height: '40px', background: '#0a3d6e', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '15px' }}>
              IT
            </div>
            <div>
              <div style={{ fontWeight: 'bold' }}>Income Tax Department <span style={{ fontWeight: 'normal', color: '#5f6368', fontSize: '0.9rem' }}>&lt;refunds@incometax-gov-in.org&gt;</span></div>
              <div style={{ fontSize: '0.85rem', color: '#5f6368' }}>to me ▾</div>
            </div>
            <div style={{ marginLeft: 'auto', color: '#5f6368', fontSize: '0.9rem' }}>
              10:45 AM (2 hours ago)
            </div>
          </div>
          
          <div style={{ lineHeight: '1.6', fontSize: '1.05rem', padding: '0 10px' }}>
            <p>Dear Taxpayer,</p>
            <p>This is to inform you that your income tax refund of <strong>₹45,500</strong> for the assessment year 2023-24 has been approved.</p>
            <p>However, the transfer failed due to missing verification details in your bank mandate.</p>
            <p>To process your refund immediately, please click the link below and verify your banking details.</p>
            
            <div style={{ textAlign: 'center', margin: '30px 0' }}>
              <a href="#" onClick={handleLinkClick} style={{ 
                background: '#0a3d6e', 
                color: '#fff', 
                padding: '12px 24px', 
                textDecoration: 'none', 
                borderRadius: '4px',
                fontWeight: 'bold',
                display: 'inline-block'
              }}>
                Claim Your Refund Now
              </a>
            </div>
            
            <p style={{ color: '#d32f2f', fontSize: '0.9rem' }}>Note: If not claimed within 24 hours, the refund will be forfeited.</p>
            <br />
            <p style={{ fontSize: '0.9rem', color: '#5f6368' }}>
              Regards,<br />
              Refund Processing Cell<br />
              Govt. of India
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '450px',
      margin: '0 auto',
      background: '#fff',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
      fontFamily: '"Open Sans", Arial, sans-serif',
      color: '#333'
    }}>
      <div style={{ background: '#f5f5f5', padding: '10px 15px', borderBottom: '1px solid #ddd', fontSize: '0.85rem', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span style={{ color: '#4caf50' }}>🔒</span> 
        <span>https://incometax-gov-in.org/refund/verify</span>
      </div>
      
      <div style={{ padding: '30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <img src="/assets/tax_dept_logo.png" alt="Gov Logo" style={{ width: '80px', height: '80px', marginBottom: '15px' }} />
          <h2 style={{ margin: 0, color: '#0a3d6e', fontSize: '1.3rem' }}>e-Filing Anywhere Anytime</h2>
          <p style={{ margin: '5px 0 0', color: '#666', fontSize: '0.9rem' }}>Income Tax Department</p>
        </div>
        
        <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '4px', marginBottom: '25px', border: '1px solid #bbdefb', textAlign: 'center' }}>
          <strong>Refund Amount: ₹45,500</strong>
          <p style={{ margin: '5px 0 0', fontSize: '0.85rem', color: '#0277bd' }}>Please authenticate with your net banking to receive funds directly.</p>
        </div>
        
        <form onSubmit={handleLoginSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '0.9rem' }}>User ID / Customer ID</label>
            <input 
              type="text" 
              value={bankId}
              onChange={(e) => { setBankId(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '0.9rem' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          </div>
          
          {error && <p style={{ color: '#d32f2f', fontSize: '0.85rem', margin: '0 0 10px' }}>{error}</p>}
          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              width: '100%', 
              padding: '12px', 
              background: loading ? '#999' : '#0a3d6e', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Authenticating...' : 'Login & Claim Refund'}
          </button>
        </form>
      </div>
    </div>
  );
}
