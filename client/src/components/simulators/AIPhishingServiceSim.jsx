import React, { useState } from 'react';

export default function AIPhishingServiceSim({ onComplete }) {
  const [view, setView] = useState('email'); // 'email' | 'login'
  const [formData, setFormData] = useState({ 
    workEmail: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.password) {
      setError('Please provide your work email and password.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Work Email Address', 'Corporate Password'];
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
          <div style={{ color: '#64748b', fontSize: '0.9rem' }}>it-admin@company-sso-portal.com</div>
        </div>
        
        <div style={{ padding: '25px 20px', flex: 1, overflowY: 'auto' }}>
          <h2 style={{ margin: '0 0 15px', fontSize: '1.4rem', color: '#1e293b' }}>ACTION REQUIRED: Update to Q3 Benefits Policy</h2>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ width: '40px', height: '40px', background: '#0284c7', color: '#fff', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>HR</div>
            <div>
              <p style={{ margin: 0, fontWeight: 'bold' }}>Human Resources & IT</p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>to me</p>
            </div>
          </div>
          
          <div style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
            <p>Hi team,</p>
            <p>As discussed in the recent town hall, we are rolling out an updated employee benefits and remote work policy for Q3, effective immediately.</p>
            <p>I noticed you haven't acknowledged the new policy in the HR portal yet. This is required for your upcoming performance cycle.</p>
            
            <div style={{ margin: '25px 0' }}>
              <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>Please review and acknowledge the document here:</p>
              <button onClick={() => setView('login')} style={{
                background: '#0f172a', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '4px',
                fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', display: 'inline-block'
              }}>
                View Q3 Policy Document
              </button>
            </div>

            <p>Thanks,</p>
            <p style={{ color: '#475569', fontWeight: 'bold', margin: '5px 0' }}>Sarah Jenkins</p>
            <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>Director of HR Operations</p>
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
      <div style={{ padding: '40px 30px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
           <div style={{ width: '50px', height: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '2px' }}>
              <div style={{ background: '#f25022' }}></div>
              <div style={{ background: '#7fba00' }}></div>
              <div style={{ background: '#00a4ef' }}></div>
              <div style={{ background: '#ffb900' }}></div>
           </div>
        </div>
        <h2 style={{ margin: '0 0 25px 0', fontSize: '1.4rem', color: '#1e293b', textAlign: 'center' }}>Sign in</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input type="email" required value={formData.workEmail} onChange={handleChange('workEmail')} placeholder="Email, phone, or Skype"
              style={{ width: '100%', padding: '12px 10px', border: 'none', borderBottom: '1px solid #64748b', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <input type="password" required value={formData.password} onChange={handleChange('password')} placeholder="Password"
              style={{ width: '100%', padding: '12px 10px', border: 'none', borderBottom: '1px solid #64748b', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
             <button type="submit" disabled={loading} style={{
               padding: '10px 30px', background: loading ? '#94a3b8' : '#0067b8', color: '#fff', border: 'none',
               fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer'
             }}>
               {loading ? 'Signing in...' : 'Sign in'}
             </button>
          </div>
        </form>
      </div>
      <div style={{ background: '#f3f2f1', padding: '15px', textAlign: 'center', fontSize: '0.85rem', color: '#605e5c' }}>
        Sign-in options
      </div>
    </div>
  );
}
