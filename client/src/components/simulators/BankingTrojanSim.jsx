import React, { useState } from 'react';

export default function BankingTrojanSim({ onComplete }) {
  const [smsPermission, setSmsPermission] = useState(false);
  const [accessibilityPermission, setAccessibilityPermission] = useState(false);
  const [bankApp, setBankApp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!smsPermission || !accessibilityPermission || !bankApp.trim()) {
      setError('Please grant both permissions and confirm your installed banking app to continue tracking.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['All Incoming SMS (including OTPs)', 'On-screen Content via Accessibility Service', 'Banking App Activity']);
    }, 1600);
  };

  return (
    <div style={{
      maxWidth: '380px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)', background: '#202124', color: '#e8eaed',
      fontFamily: '"Roboto", "Segoe UI", sans-serif'
    }}>
      <div style={{ background: '#303134', padding: '18px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>📦</div>
        <h2 style={{ margin: 0, fontSize: '1.05rem' }}>Track My Parcel — Live</h2>
        <p style={{ margin: '2px 0 0', fontSize: '0.75rem', color: '#9aa0a6' }}>Requesting permissions to continue</p>
      </div>
      <div style={{ padding: '22px 20px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ background: '#303134', borderRadius: '10px', padding: '14px', marginBottom: '14px' }}>
            <p style={{ margin: '0 0 8px', fontSize: '0.88rem' }}>Allow "Track My Parcel" to read your SMS messages?</p>
            <p style={{ margin: '0 0 10px', fontSize: '0.72rem', color: '#9aa0a6' }}>Needed to "auto-detect delivery OTPs"</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" onClick={() => setSmsPermission(true)} style={{ flex: 1, padding: '9px', background: smsPermission ? '#8ab4f8' : '#3c4043', color: smsPermission ? '#202124' : '#e8eaed', border: 'none', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>Allow</button>
              <button type="button" onClick={() => setSmsPermission(false)} style={{ flex: 1, padding: '9px', background: '#3c4043', color: '#e8eaed', border: 'none', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer' }}>Deny</button>
            </div>
          </div>
          <div style={{ background: '#303134', borderRadius: '10px', padding: '14px', marginBottom: '18px' }}>
            <p style={{ margin: '0 0 8px', fontSize: '0.88rem' }}>Enable Accessibility Service for "Track My Parcel"?</p>
            <p style={{ margin: '0 0 10px', fontSize: '0.72rem', color: '#9aa0a6' }}>Needed to "show delivery overlay on screen"</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" onClick={() => setAccessibilityPermission(true)} style={{ flex: 1, padding: '9px', background: accessibilityPermission ? '#8ab4f8' : '#3c4043', color: accessibilityPermission ? '#202124' : '#e8eaed', border: 'none', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>Enable</button>
              <button type="button" onClick={() => setAccessibilityPermission(false)} style={{ flex: 1, padding: '9px', background: '#3c4043', color: '#e8eaed', border: 'none', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer' }}>Skip</button>
            </div>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#9aa0a6' }}>Which banking app is installed on your device?</label>
            <input type="text" value={bankApp} onChange={e => { setBankApp(e.target.value); setError(''); }} placeholder="e.g. My Bank App"
              style={{ width: '100%', padding: '11px 14px', background: '#3c4043', border: '1px solid #5f6368', borderRadius: '6px', fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none', color: '#e8eaed' }} />
          </div>
          {error && <p style={{ color: '#f28b82', fontSize: '0.8rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#5f6368' : '#8ab4f8', color: '#202124', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Setting up tracking...' : 'Continue Tracking Parcel'}
          </button>
        </form>
      </div>
    </div>
  );
}
