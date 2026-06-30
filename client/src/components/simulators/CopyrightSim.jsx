import React, { useState } from 'react';

export default function CopyrightSim({ onComplete }) {
  const [view, setView] = useState('email'); // 'email' | 'appeal'
  const [formData, setFormData] = useState({ email: '', password: '', dob: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleAppealClick = (e) => {
    e.preventDefault();
    setView('appeal');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!formData.email.trim() || !formData.password.trim() || !formData.dob.trim() || !formData.phone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Email', 'Password', 'Date of Birth', 'Phone Number'];
    setTimeout(() => onComplete(exposedArray), 1500);
  };

  if (view === 'email') {
    return (
      <div style={{
        maxWidth: '700px', margin: '0 auto', background: '#fff', border: '1px solid #e0e0e0',
        borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontFamily: 'Arial, sans-serif', color: '#333'
      }}>
        {/* Gmail toolbar */}
        <div style={{ padding: '12px 20px', borderBottom: '1px solid #e0e0e0', background: '#f8f9fa', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span style={{ color: '#5f6368', cursor: 'pointer' }}>← Back</span>
            <span style={{ color: '#5f6368', cursor: 'pointer' }}>Archive</span>
            <span style={{ color: '#5f6368', cursor: 'pointer' }}>Report spam</span>
            <span style={{ color: '#5f6368', cursor: 'pointer' }}>Delete</span>
          </div>
        </div>

        <div style={{ padding: '25px 30px' }}>
          {/* Subject */}
          <h2 style={{ margin: '0 0 20px', fontSize: '1.3rem', fontWeight: 'normal', color: '#202124' }}>
            ⚠️ Your Page Has Been Reported for Copyright Infringement
            <span style={{ background: '#fce4ec', color: '#c62828', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', marginLeft: '10px' }}>Important</span>
          </h2>

          {/* Sender */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
            <div style={{ width: '42px', height: '42px', background: '#1877f2', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '12px' }}>f</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', color: '#202124' }}>
                Facebook Security Team
                <span style={{ fontWeight: 'normal', color: '#5f6368', fontSize: '0.85rem' }}> &lt;security@facebookmail-support.com&gt;</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#5f6368' }}>to me ▾</div>
            </div>
            <div style={{ color: '#5f6368', fontSize: '0.85rem' }}>2:15 PM (30 min ago)</div>
          </div>

          {/* Email body */}
          <div style={{ lineHeight: '1.7', fontSize: '0.98rem' }}>
            {/* Facebook email header */}
            <div style={{ background: '#f0f2f5', borderRadius: '8px', padding: '20px', marginBottom: '20px', borderLeft: '4px solid #1877f2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877f2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span style={{ fontWeight: '700', fontSize: '1.05rem', color: '#1c1e21' }}>Facebook</span>
              </div>
            </div>

            <p>Dear User,</p>
            <p>We have received a report that content on your Facebook page <strong>violates copyright policies</strong>. A copyright holder has filed a formal complaint regarding unauthorized use of their intellectual property.</p>

            <div style={{ background: '#fff3e0', border: '1px solid #ffcc02', borderRadius: '8px', padding: '15px', margin: '15px 0' }}>
              <p style={{ margin: '0 0 8px', fontWeight: '700', color: '#e65100', fontSize: '0.95rem' }}>⚠️ Account Status: PENDING SUSPENSION</p>
              <ul style={{ margin: '0', paddingLeft: '20px', color: '#424242', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li>Report ID: <strong>#FB-CR-{Math.floor(Math.random() * 900000 + 100000)}</strong></li>
                <li>Violation Type: <strong>Copyright Infringement (DMCA)</strong></li>
                <li>Action Required: <strong>Identity Verification</strong></li>
                <li>Deadline: <strong style={{ color: '#d32f2f' }}>24 hours from this notification</strong></li>
              </ul>
            </div>

            <p>If no action is taken within <strong style={{ color: '#d32f2f' }}>24 hours</strong>, your account will be <strong>permanently disabled</strong> and all your data, photos, and page content will be deleted.</p>
            <p>To prevent account suspension, please verify your identity through our Appeals Center:</p>

            <div style={{ textAlign: 'center', margin: '25px 0' }}>
              <a href="#" onClick={handleAppealClick} style={{
                background: '#1877f2', color: '#fff', padding: '14px 40px', textDecoration: 'none',
                borderRadius: '6px', fontWeight: 'bold', display: 'inline-block', fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(24,119,242,0.3)'
              }}>
                Verify Your Identity →
              </a>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '20px 0' }} />
            <p style={{ fontSize: '0.82rem', color: '#65676b', lineHeight: '1.5' }}>
              This email was sent by Facebook Security Team. If you believe this is an error, you can still verify to protect your account.<br />
              Facebook, Inc. | 1 Hacker Way, Menlo Park, CA 94025
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Fake Facebook Appeals Center
  return (
    <div style={{
      maxWidth: '500px', margin: '0 auto', background: '#fff', borderRadius: '8px', overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#1c1e21'
    }}>
      {/* URL bar */}
      <div style={{ background: '#f0f2f5', padding: '8px 15px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem' }}>
        <span style={{ color: '#34a853' }}>🔒</span>
        <span style={{ color: '#555' }}>https://facebook-appeals-center.com/verify/identity</span>
      </div>

      {/* Facebook header */}
      <div style={{ background: '#1877f2', padding: '15px 25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          <span style={{ color: '#fff', fontWeight: '700', fontSize: '1.15rem' }}>Appeals Center</span>
        </div>
        <span style={{ color: '#fff', fontSize: '0.8rem', opacity: 0.8 }}>Secure Verification</span>
      </div>

      <div style={{ padding: '25px' }}>
        {/* Warning banner */}
        <div style={{ background: '#fef3f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '14px', marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <span style={{ fontSize: '1.3rem' }}>🛑</span>
          <div>
            <p style={{ margin: '0 0 4px', fontWeight: '700', color: '#dc2626', fontSize: '0.9rem' }}>Account Suspension Pending</p>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#7f1d1d', lineHeight: '1.4' }}>
              Your account will be permanently disabled in <strong>23 hours 29 minutes</strong>. Verify your identity to prevent suspension.
            </p>
          </div>
        </div>

        <h3 style={{ margin: '0 0 5px', fontSize: '1.1rem', color: '#1c1e21' }}>Identity Verification</h3>
        <p style={{ margin: '0 0 20px', fontSize: '0.85rem', color: '#65676b' }}>Please confirm your account details to complete the appeal process.</p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.88rem', color: '#333' }}>Email Address or Phone Number</label>
            <input type="text" required value={formData.email} onChange={handleChange('email')} placeholder="Enter your email or phone"
              style={{ width: '100%', padding: '12px', border: '1px solid #dddfe2', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.95rem' }} />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.88rem', color: '#333' }}>Facebook Password</label>
            <input type="password" required value={formData.password} onChange={handleChange('password')} placeholder="Enter your password"
              style={{ width: '100%', padding: '12px', border: '1px solid #dddfe2', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.95rem' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.88rem', color: '#333' }}>Date of Birth</label>
              <input type="date" required value={formData.dob} onChange={handleChange('dob')}
                style={{ width: '100%', padding: '12px', border: '1px solid #dddfe2', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.95rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.88rem', color: '#333' }}>Phone Number</label>
              <input type="tel" required value={formData.phone} onChange={handleChange('phone')} placeholder="+91 XXXXX XXXXX"
                style={{ width: '100%', padding: '12px', border: '1px solid #dddfe2', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.95rem' }} />
            </div>
          </div>

          <div style={{ background: '#f0f2f5', borderRadius: '8px', padding: '12px', marginBottom: '18px' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#444', cursor: 'pointer', lineHeight: '1.4' }}>
              <input type="checkbox" required style={{ marginTop: '2px' }} />
              I confirm that I am the rightful owner of this account and authorize Facebook to verify my identity for the purpose of resolving this copyright dispute.
            </label>
          </div>

          {error && <p style={{ color: '#c62828', fontSize: '0.85rem', margin: '0 0 10px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '13px', background: loading ? '#a0a0a0' : '#1877f2', color: '#fff', border: 'none',
            borderRadius: '6px', fontSize: '1rem', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: loading ? 'none' : '0 2px 8px rgba(24,119,242,0.3)'
          }}>
            {loading ? 'Verifying Identity...' : 'Submit Appeal'}
          </button>

          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <a href="#" style={{ color: '#1877f2', fontSize: '0.85rem', textDecoration: 'none' }}>Having trouble? Contact Support</a>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #e4e6eb', padding: '12px 25px', textAlign: 'center', fontSize: '0.75rem', color: '#8a8d91' }}>
        Meta © 2024 | <span style={{ cursor: 'pointer' }}>Privacy</span> · <span style={{ cursor: 'pointer' }}>Terms</span> · <span style={{ cursor: 'pointer' }}>Help Center</span>
      </div>
    </div>
  );
}
