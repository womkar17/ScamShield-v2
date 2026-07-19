import React, { useState } from 'react';

// Inlined Base Template (BrandGiveawaySim) for self-contained simulation

/**
 * Reusable simulator for "fake brand giveaway / discount coupon" scams,
 * spread as a forwarded WhatsApp-style message impersonating a real brand.
 *
 * Props:
 *  - brandName, icon, brandColor, headline, prizeLabel, feeLabel
 *  - onComplete(exposedArray)
 */
function BrandGiveawaySim({ brandName, icon = '🎁', brandColor = '#e67e22', headline, prizeLabel, feeLabel = 'Delivery / Verification Fee: ₹49', onComplete }) {
  const [view, setView] = useState('chat');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [card, setCard] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const openForm = (e) => { e.preventDefault(); setView('form'); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || !address.trim() || !card.trim()) {
      setError('Please fill in every field to claim your prize.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Full Name', 'Mobile Number', 'Home Address', 'Card Details']);
    }, 1500);
  };

  if (view === 'chat') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '28px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', height: '560px', display: 'flex', flexDirection: 'column',
        background: '#e5ddd5', fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif'
      }}>
        <div style={{ background: '#075e54', padding: '14px 18px', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>←</span>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>{icon}</div>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.95rem' }}>{brandName} Official Offers</p>
            <p style={{ margin: 0, fontSize: '0.72rem', opacity: 0.85 }}>Forwarded many times</p>
          </div>
        </div>
        <div style={{ flex: 1, padding: '18px 14px', overflowY: 'auto' }}>
          <div style={{ background: '#fff', borderRadius: '10px', padding: '12px 14px', maxWidth: '92%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: '#1a1a1a' }}>
              🎉 {headline || `${brandName} is celebrating its anniversary! The first 500 people to claim get: `}
              <strong>{prizeLabel}</strong>
            </p>
            <a href="#" onClick={openForm} style={{ display: 'block', marginTop: '10px', color: '#0b93f6', fontSize: '0.85rem', wordBreak: 'break-all' }}>
              Tap here to claim your prize →
            </a>
            <p style={{ margin: '8px 0 0', fontSize: '0.72rem', color: '#e74c3c', fontWeight: 'bold' }}>Offer valid for the next 2 hours only!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', overflow: 'hidden', fontFamily: 'Arial, sans-serif', color: '#222' }}>
      <div style={{ padding: '20px 24px', background: brandColor, color: '#fff', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '1.6rem' }}>{icon}</span>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Claim your {brandName} prize</h2>
          <p style={{ margin: '2px 0 0', fontSize: '0.8rem', opacity: 0.9 }}>{prizeLabel}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} style={{ padding: '22px' }}>
        {[
          { label: 'Full Name', value: name, set: setName },
          { label: 'Mobile Number', value: mobile, set: setMobile },
          { label: 'Delivery Address', value: address, set: setAddress },
        ].map((f, i) => (
          <div key={i} style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#555' }}>{f.label}</label>
            <input type="text" value={f.value} onChange={e => { f.set(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
          </div>
        ))}
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#555' }}>Card Number (for {feeLabel})</label>
          <input type="text" value={card} onChange={e => { setCard(e.target.value); setError(''); }}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
        </div>
        {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', background: loading ? '#999' : brandColor, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Processing…' : `Pay & Claim (${feeLabel.split(':')[1]?.trim() || feeLabel})`}
        </button>
      </form>
    </div>
  );
}


// Main Simulation Component

export default function KunalRawalSim({ onComplete }) {
  return (
    <BrandGiveawaySim
      brandName="Kunal Rawal"
      icon="👔"
      prizeLabel="a designer outfit worth ₹15,000"
      onComplete={onComplete}
    />
  );
}
