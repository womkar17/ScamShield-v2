import React, { useState } from 'react';

export default function NFCPaymentSim({ onComplete }) {
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!card.trim() || !expiry.trim() || !cvv.trim()) {
      setError('Please enter your card details to activate NFC payments.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Full Card Number', 'Expiry Date', 'CVV', 'NFC Card Data']);
    }, 1400);
  };

  return (
    <div style={{
      maxWidth: '380px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)', background: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ background: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)', padding: '20px', textAlign: 'center' }}>
        <span style={{ fontSize: '2rem' }}>📶</span>
        <h2 style={{ margin: '8px 0 2px', color: '#fff', fontSize: '1.1rem' }}>NFC Activation Required</h2>
        <p style={{ margin: 0, color: '#e0f7fa', fontSize: '0.8rem' }}>nfc-card-activate.app</p>
      </div>
      <div style={{ padding: '24px' }}>
        <div style={{ background: '#e0f7fa', borderRadius: '10px', padding: '14px', marginBottom: '18px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#00646e' }}>
            📲 Tap your contactless card near your phone, then enter details below to activate — a ₹1 charge confirms activation.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Card Number (tap simulated)</label>
            <input type="text" value={card} onChange={e => { setCard(e.target.value); setError(''); }} placeholder="XXXX XXXX XXXX XXXX" maxLength={19}
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
          </div>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Expiry (MM/YY)</label>
              <input type="text" value={expiry} onChange={e => { setExpiry(e.target.value); setError(''); }} placeholder="MM/YY"
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>CVV</label>
              <input type="password" value={cvv} onChange={e => { setCvv(e.target.value); setError(''); }} maxLength={3}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#2193b0', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Activating...' : 'Activate Contactless Payments'}
          </button>
        </form>
      </div>
    </div>
  );
}
