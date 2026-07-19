import React, { useState } from 'react';

export default function FakeBankingAppSim({ onComplete }) {
  const [view, setView] = useState('download'); // 'download' | 'login'
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpStage, setOtpStage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = () => setView('login');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!userId.trim() || !password.trim()) {
      setError('Please enter your Net Banking User ID and Password.');
      return;
    }
    setError('');
    setOtpStage(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setError('Please enter the OTP to complete login.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Net Banking Login Credentials', 'OTP', 'Full Account Access']);
    }, 1500);
  };

  if (view === 'download') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', background: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ background: '#f5f5f5', padding: '10px 16px', fontSize: '0.75rem', color: '#666', borderBottom: '1px solid #ddd' }}>
          securebank-app-update.download
        </div>
        <div style={{ padding: '28px 24px', textAlign: 'center' }}>
          <div style={{ width: '76px', height: '76px', margin: '0 auto 14px', background: 'linear-gradient(135deg,#1a237e,#3949ab)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🏦</div>
          <h2 style={{ margin: '0 0 6px', fontSize: '1.1rem', color: '#1a237e' }}>SecureBank App Update</h2>
          <p style={{ margin: '0 0 4px', fontSize: '0.85rem', color: '#666' }}>New version with enhanced security</p>
          <p style={{ margin: '0 0 20px', fontSize: '0.78rem', color: '#c62828', fontWeight: '600' }}>⚠️ Your old app will stop working soon</p>
          <button onClick={handleDownload} style={{ width: '100%', padding: '13px', background: '#1a237e', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>
            Download & Migrate Account
          </button>
          <p style={{ marginTop: '14px', fontSize: '0.7rem', color: '#aaa' }}>APK · 24 MB · Direct Download</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '380px', margin: '0 auto', background: '#fff', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <div style={{ background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)', padding: '24px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>🏦</div>
        <h2 style={{ margin: 0, color: '#fff', fontSize: '1.1rem' }}>SecureBank</h2>
        <p style={{ margin: '2px 0 0', color: '#c5cae9', fontSize: '0.78rem' }}>Log in to migrate your account</p>
      </div>
      <div style={{ padding: '24px' }}>
        {!otpStage ? (
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Net Banking User ID</label>
              <input type="text" value={userId} onChange={e => { setUserId(e.target.value); setError(''); }}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Net Banking Password</label>
              <input type="password" value={password} onChange={e => { setPassword(e.target.value); setError(''); }}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
            {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '13px', background: '#1a237e', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>
              Log In
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ background: '#e8f5e9', padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', border: '1px solid #a5d6a7' }}>
              <p style={{ margin: 0, color: '#2e7d32', fontSize: '0.85rem' }}>✅ OTP sent to your registered mobile.</p>
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Enter OTP to Complete Login</label>
              <input type="text" value={otp} onChange={e => { setOtp(e.target.value); setError(''); }} maxLength={6}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '1.1rem', boxSizing: 'border-box', outline: 'none', color: '#333', letterSpacing: '8px', textAlign: 'center' }} />
            </div>
            {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
            <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#1a237e', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
