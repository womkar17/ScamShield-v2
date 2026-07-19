import React, { useState } from 'react';

export default function HealthIDSim({ onComplete }) {
  const [view, setView] = useState('whatsapp');
  const [name, setName] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [mobile, setMobile] = useState('');
  const [history, setHistory] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLinkClick = (e) => { e.preventDefault(); setView('form'); };

  const handleSendOtp = () => {
    if (!name.trim() || !aadhaar.trim() || !mobile.trim()) {
      setError('Please fill Name, Aadhaar and Mobile Number first.');
      return;
    }
    setError('');
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp.trim() || !history.trim()) {
      setError('Please complete OTP and medical conditions field.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Aadhaar Number', 'Mobile Number', 'OTP', 'Medical History']);
    }, 1500);
  };

  if (view === 'whatsapp') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', height: '620px', display: 'flex',
        flexDirection: 'column', background: '#e5ddd5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ background: '#075e54', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '38px', height: '38px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>🏥</div>
          <div>
            <h3 style={{ margin: 0, fontSize: '0.95rem', color: '#fff' }}>NDHM Health Alerts</h3>
            <p style={{ margin: 0, fontSize: '0.72rem', color: '#cfe9e5' }}>online</p>
          </div>
        </div>
        <div style={{ flex: 1, padding: '18px 14px', overflowY: 'auto' }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '12px 14px', maxWidth: '90%', boxShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: 0, color: '#1a1a1a', fontSize: '0.9rem', lineHeight: '1.5' }}>
              🏥 <strong>National Digital Health Mission</strong>: Your ABHA Health ID is <strong style={{ color: '#c0392b' }}>not yet created</strong>. You will lose access to free government hospital benefits.
            </p>
            <p style={{ margin: '8px 0 0', fontSize: '0.9rem', color: '#1a1a1a' }}>Create your Health ID instantly:</p>
            <a href="#" onClick={handleLinkClick} style={{ display: 'block', marginTop: '8px', color: '#007AFF', fontSize: '0.85rem', wordBreak: 'break-all' }}>
              https://abha-healthid-register.co.in
            </a>
            <p style={{ margin: '10px 0 0', fontSize: '0.7rem', color: '#999', textAlign: 'right' }}>7:48 AM ✓✓</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: '"Open Sans", Arial, sans-serif', color: '#333' }}>
      <div style={{ background: 'linear-gradient(135deg, #00695c 0%, #00897b 100%)', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🏥</div>
        <div>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.1rem' }}>Ayushman Bharat Digital Mission</h2>
          <p style={{ margin: '2px 0 0', color: '#e0f2f1', fontSize: '0.8rem' }}>ABHA Health ID Registration</p>
        </div>
      </div>
      <div style={{ background: '#fff3e0', padding: '12px 24px', borderBottom: '2px solid #ff9800' }}>
        <p style={{ margin: 0, color: '#e65100', fontSize: '0.85rem', fontWeight: '600' }}>⚠️ Register today or lose hospital benefit eligibility.</p>
      </div>
      <div style={{ padding: '28px 24px' }}>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Full Name', value: name, set: setName },
            { label: 'Aadhaar Number', value: aadhaar, set: setAadhaar },
            { label: 'Mobile Number', value: mobile, set: setMobile },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>{f.label}</label>
              <input type="text" value={f.value} onChange={e => { f.set(e.target.value); setError(''); }}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
          ))}
          {!otpSent ? (
            <button type="button" onClick={handleSendOtp} style={{ width: '100%', padding: '12px', background: '#00695c', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', marginBottom: '10px' }}>
              Send Aadhaar OTP
            </button>
          ) : (
            <>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>Aadhaar OTP</label>
                <input type="text" value={otp} onChange={e => { setOtp(e.target.value); setError(''); }} maxLength={6}
                  style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '1.1rem', boxSizing: 'border-box', outline: 'none', color: '#333', letterSpacing: '8px', textAlign: 'center' }} />
              </div>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>Existing Medical Conditions</label>
                <input type="text" value={history} onChange={e => { setHistory(e.target.value); setError(''); }} placeholder="e.g. Diabetes, Hypertension"
                  style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
              </div>
              {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#00695c', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Creating Health ID...' : 'Create ABHA Health ID'}
              </button>
            </>
          )}
          {error && !otpSent && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '10px 0 0' }}>{error}</p>}
        </form>
      </div>
      <div style={{ background: '#f5f5f5', padding: '12px 24px', textAlign: 'center', fontSize: '0.75rem', color: '#999', borderTop: '1px solid #e0e0e0' }}>
        Unofficial Lookalike — Not affiliated with abdm.gov.in
      </div>
    </div>
  );
}
