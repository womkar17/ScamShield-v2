import React, { useState } from 'react';

export default function CardTrappingSim({ onComplete }) {
  const [view, setView] = useState('scene');
  const [card, setCard] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!card.trim() || !pin.trim()) {
      setError('Please enter your card number and re-enter the PIN as suggested.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Card Number', 'ATM PIN', 'Physical Card (retained by trap device)']);
    }, 1400);
  };

  if (view === 'scene') {
    return (
      <div style={{
        maxWidth: '420px', margin: '0 auto', borderRadius: '14px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', background: '#1c1c1c', color: '#eee',
        fontFamily: '"Segoe UI", Roboto, sans-serif', padding: '28px 24px', textAlign: 'center'
      }}>
        <div style={{ fontSize: '2.4rem', marginBottom: '10px' }}>🏧</div>
        <h3 style={{ margin: '0 0 10px', fontSize: '1.05rem', color: '#ff8a65' }}>Card Retained by ATM</h3>
        <p style={{ margin: '0 0 16px', fontSize: '0.88rem', color: '#ccc', lineHeight: '1.6' }}>
          Your card is stuck in the slot. A stranger standing nearby says: <br />
          <em>"This happens all the time here — just re-enter your PIN, it usually pops back out."</em>
        </p>
        <button onClick={() => setView('form')} style={{ width: '100%', padding: '13px', background: '#ff5722', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>
          Follow Stranger's Advice — Re-enter PIN
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '360px', margin: '0 auto', background: '#0b0b0b', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', color: '#7CFC00', fontFamily: '"Courier New", monospace', border: '10px solid #333' }}>
      <div style={{ padding: '18px', textAlign: 'center', borderBottom: '2px solid #333' }}>
        <p style={{ margin: 0, fontSize: '0.85rem' }}>⚠ CARD RETAINED — RE-VERIFY TO EJECT</p>
      </div>
      <div style={{ padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.8rem' }}>CARD NUMBER (as shown on screen)</label>
          <input type="text" value={card} onChange={e => { setCard(e.target.value); setError(''); }}
            style={{ width: '100%', padding: '10px', background: '#000', border: '1px solid #7CFC00', borderRadius: '4px', color: '#7CFC00', fontSize: '0.9rem', marginBottom: '16px', boxSizing: 'border-box' }} />
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.8rem' }}>RE-ENTER PIN</label>
          <input type="password" value={pin} onChange={e => { setPin(e.target.value); setError(''); }} maxLength={4}
            style={{ width: '100%', padding: '10px', background: '#000', border: '1px solid #7CFC00', borderRadius: '4px', color: '#7CFC00', fontSize: '1.1rem', letterSpacing: '8px', textAlign: 'center', marginBottom: '16px', boxSizing: 'border-box' }} />
          {error && <p style={{ color: '#ff5252', fontSize: '0.78rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', background: '#7CFC00', color: '#000', border: 'none', borderRadius: '4px', fontSize: '0.95rem', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'VERIFYING...' : 'CONFIRM & EJECT CARD'}
          </button>
        </form>
      </div>
    </div>
  );
}
