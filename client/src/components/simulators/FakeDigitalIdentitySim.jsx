import React, { useState } from 'react';

export default function FakeDigitalIdentitySim({ onComplete }) {
  const [view, setView] = useState('email'); // 'email' | 'login'
  const [formData, setFormData] = useState({ 
    aadhaar: '',
    emailPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aadhaar || !formData.emailPassword) {
      setError('Please provide all details to verify your identity.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Aadhaar Number', 'Email Password', 'Personal Identity Data'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'email') {
    return (
      <div style={{
        maxWidth: '550px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0',
        borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#334155', overflow: 'hidden', height: '600px', display: 'flex', flexDirection: 'column'
      }}>
        <div style={{ background: '#f8fafc', padding: '15px 20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a' }}>Inbox (1)</div>
          <div style={{ color: '#64748b', fontSize: '0.9rem' }}>noreply@uidai-digital-verify.com</div>
        </div>
        
        <div style={{ padding: '25px 20px', flex: 1, overflowY: 'auto' }}>
          <h2 style={{ margin: '0 0 15px', fontSize: '1.4rem', color: '#1e293b' }}>ACTION REQUIRED: Your Digital Identity is Expiring</h2>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ width: '40px', height: '40px', background: '#ef4444', color: '#fff', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>UID</div>
            <div>
              <p style={{ margin: 0, fontWeight: 'bold' }}>National Identity Portal</p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>to me</p>
            </div>
          </div>
          
          <div style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
            <p>Dear Citizen,</p>
            <p>Our records indicate that your <strong>Central Digital Identity Profile (Aadhaar linking)</strong> is out of sync with the new biometric registry.</p>
            <p style={{ color: '#b91c1c', fontWeight: 'bold' }}>If you do not verify your identity within 24 hours, your Aadhaar, PAN, and linked bank accounts will be temporarily suspended.</p>
            
            <div style={{ background: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '15px', margin: '25px 0' }}>
              <p style={{ margin: '0 0 15px', fontWeight: 'bold' }}>Please click below to securely verify your identity:</p>
              <button onClick={() => setView('login')} style={{
                background: '#2563eb', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '4px',
                fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', display: 'inline-block'
              }}>
                Verify Digital Identity Now
              </button>
            </div>

            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
              For your security, this link will expire in 24 hours.<br/>
              © 2026 National E-Governance Division.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Login View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#ffffff', border: '1px solid #cbd5e1',
      borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#334155', overflow: 'hidden'
    }}>
      <div style={{ background: '#0f172a', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>National Identity Portal</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#94a3b8' }}>Secure Citizen Verification</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <p style={{ textAlign: 'center', marginBottom: '25px', fontSize: '0.95rem', color: '#475569' }}>
          Please verify your credentials to prevent suspension of your digital identity profile.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#475569', fontSize: '0.9rem' }}>Aadhaar Number</label>
            <input type="text" required value={formData.aadhaar} onChange={handleChange('aadhaar')} placeholder="XXXX-XXXX-XXXX"
              style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#475569', fontSize: '0.9rem' }}>Email Account Password</label>
            <input type="password" required value={formData.emailPassword} onChange={handleChange('emailPassword')} placeholder="Required for cross-verification"
              style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
            <p style={{ margin: '8px 0 0', fontSize: '0.75rem', color: '#dc2626' }}>We require your email password to verify your linked contact ID.</p>
          </div>

          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#94a3b8' : '#2563eb', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Authenticating...' : 'Submit & Verify Identity'}
          </button>
        </form>
      </div>
    </div>
  );
}
