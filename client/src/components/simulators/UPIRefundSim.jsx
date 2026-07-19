import React, { useState } from 'react';

export default function UPIRefundSim({ onComplete }) {
  const [view, setView] = useState('call');
  const [app, setApp] = useState('');
  const [upiId, setUpiId] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!app.trim() || !upiId.trim() || !pin.trim()) {
      setError('Please install the screen-share app and complete the fields to verify your refund.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Full Screen/Device Access', 'UPI ID', 'UPI PIN', 'Bank Balance']);
    }, 1600);
  };

  if (view === 'call') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', background: '#1a1a2e', color: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: '30px 24px', textAlign: 'center'
      }}>
        <div style={{ width: '72px', height: '72px', margin: '0 auto 14px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🎧</div>
        <h3 style={{ margin: '0 0 4px', fontSize: '1.05rem' }}>"UPI Customer Care"</h3>
        <p style={{ margin: '0 0 20px', fontSize: '0.82rem', color: '#aaa' }}>Incoming Call · +91 98XXX-XXXXX</p>
        <div style={{ background: '#252547', borderRadius: '10px', padding: '14px', marginBottom: '20px', textAlign: 'left' }}>
          <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: '1.5' }}>
            "Sir/Ma'am, your failed UPI transaction of <strong>₹2,500</strong> is stuck in refund processing. Please install AnyDesk so I can verify and push the refund from our end."
          </p>
        </div>
        <button onClick={() => setView('form')} style={{ width: '100%', padding: '13px', background: '#e94560', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>
          Continue to Install & Verify
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: '"Open Sans", Arial, sans-serif', color: '#333' }}>
      <div style={{ background: 'linear-gradient(135deg, #e94560 0%, #533483 100%)', padding: '18px 24px' }}>
        <h2 style={{ margin: 0, color: '#fff', fontSize: '1.05rem' }}>Failed Transaction Refund — ₹2,500</h2>
        <p style={{ margin: '4px 0 0', color: '#f3d9e0', fontSize: '0.78rem' }}>upi-support-refund.help</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Screen Sharing App Installed</label>
            <input type="text" value={app} onChange={e => { setApp(e.target.value); setError(''); }} placeholder="AnyDesk / TeamViewer ID"
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>UPI ID</label>
            <input type="text" value={upiId} onChange={e => { setUpiId(e.target.value); setError(''); }} placeholder="yourname@bank"
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>UPI PIN to "Verify" Refund</label>
            <input type="password" value={pin} onChange={e => { setPin(e.target.value); setError(''); }} maxLength={6}
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '1.1rem', boxSizing: 'border-box', outline: 'none', color: '#333', letterSpacing: '8px', textAlign: 'center' }} />
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#e94560', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Verifying Refund...' : 'Verify & Process Refund'}
          </button>
        </form>
      </div>
    </div>
  );
}
