import React, { useState } from 'react';

export default function ATMCashOutSim({ onComplete }) {
  const [card, setCard] = useState('');
  const [pin, setPin] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!card.trim() || !pin.trim() || !location.trim()) {
      setError('Please fill in all fields to review the transaction alerts.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Cloned Card Data', 'Captured PIN', 'Withdrawal Limit Exploited']);
    }, 1500);
  };

  return (
    <div style={{
      maxWidth: '400px', margin: '0 auto', borderRadius: '14px', overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)', background: '#1c1c1c', color: '#eee',
      fontFamily: '"Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ background: '#b71c1c', padding: '16px 20px', textAlign: 'center' }}>
        <span style={{ fontSize: '1.6rem' }}>🏧</span>
        <h2 style={{ margin: '6px 0 0', color: '#fff', fontSize: '1.05rem' }}>Unusual Activity Detected</h2>
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{ background: '#2a2a2a', borderRadius: '8px', padding: '14px', marginBottom: '16px' }}>
          <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.6' }}>
            Your card was used to withdraw cash from <strong>4 different ATMs</strong> across the city within 6 minutes — exceeding your normal daily limit. This pattern is consistent with a cloned card being used in a coordinated cash-out attack, likely following an earlier skimming incident.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.82rem', color: '#bbb' }}>Original Card Number</label>
            <input type="text" value={card} onChange={e => { setCard(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px 12px', background: '#2a2a2a', border: '1px solid #444', borderRadius: '6px', color: '#eee', fontSize: '0.9rem', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.82rem', color: '#bbb' }}>PIN (as captured earlier)</label>
            <input type="password" value={pin} onChange={e => { setPin(e.target.value); setError(''); }} maxLength={4}
              style={{ width: '100%', padding: '10px 12px', background: '#2a2a2a', border: '1px solid #444', borderRadius: '6px', color: '#eee', fontSize: '1rem', letterSpacing: '6px', textAlign: 'center', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.82rem', color: '#bbb' }}>ATM Locations Used</label>
            <input type="text" value={location} onChange={e => { setLocation(e.target.value); setError(''); }} placeholder="e.g. MG Road, Sector 12, ..."
              style={{ width: '100%', padding: '10px 12px', background: '#2a2a2a', border: '1px solid #444', borderRadius: '6px', color: '#eee', fontSize: '0.9rem', boxSizing: 'border-box' }} />
          </div>
          {error && <p style={{ color: '#ff8a80', fontSize: '0.8rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', background: loading ? '#555' : '#b71c1c', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '0.95rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Reviewing...' : 'Review Withdrawal Alerts'}
          </button>
        </form>
      </div>
    </div>
  );
}
