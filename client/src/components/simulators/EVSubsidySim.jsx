import React, { useState } from 'react';

export default function EVSubsidySim({ onComplete }) {
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [account, setAccount] = useState('');
  const [card, setCard] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !vehicle.trim() || !aadhaar.trim() || !account.trim() || !card.trim()) {
      setError('Please complete all fields to claim your subsidy.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Aadhaar Number', 'Vehicle Registration Details', 'Bank Account Number', 'Card Number']);
    }, 1500);
  };

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: '"Open Sans", Arial, sans-serif', color: '#333' }}>
      <div style={{ background: '#f0f0f0', padding: '10px 14px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem' }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e74c3c', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f39c12', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2ecc71', display: 'inline-block' }} />
        </div>
        <div style={{ flex: 1, background: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '6px 10px', color: '#555' }}>
          https://ev-subsidy-fame2claim.in/apply
        </div>
      </div>
      <div style={{ background: 'linear-gradient(135deg, #1b5e20 0%, #4caf50 100%)', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🔋</div>
        <div>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.1rem' }}>FAME-II EV Subsidy Portal</h2>
          <p style={{ margin: '2px 0 0', color: '#e8f5e9', fontSize: '0.8rem' }}>Claim ₹1,50,000 Electric Vehicle Subsidy</p>
        </div>
      </div>
      <div style={{ background: '#e8f5e9', padding: '14px 24px', borderBottom: '2px solid #4caf50' }}>
        <p style={{ margin: 0, color: '#1b5e20', fontSize: '0.95rem', fontWeight: '700' }}>✅ Subsidy Approved: ₹1,50,000</p>
        <p style={{ margin: '4px 0 0', color: '#e65100', fontSize: '0.8rem', fontWeight: '600' }}>⏳ Application closes in 1 hr 58 mins</p>
      </div>
      <div style={{ padding: '28px 24px' }}>
        <h3 style={{ margin: '0 0 20px', color: '#1b5e20', fontSize: '1.05rem' }}>Complete Application to Receive Subsidy</h3>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Full Name', value: name, set: setName },
            { label: 'Vehicle Registration Number', value: vehicle, set: setVehicle },
            { label: 'Aadhaar Number', value: aadhaar, set: setAadhaar },
            { label: 'Bank Account for Subsidy Credit', value: account, set: setAccount },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>{f.label}</label>
              <input type="text" value={f.value} onChange={e => { f.set(e.target.value); setError(''); }}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
          ))}
          <div style={{ marginBottom: '16px', background: '#fff8e1', padding: '12px', borderRadius: '6px', border: '1px solid #ffe082' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>
              Processing Fee ₹999 — Card Number for Processing Fee
            </label>
            <input type="text" value={card} onChange={e => { setCard(e.target.value); setError(''); }} placeholder="XXXX XXXX XXXX XXXX" maxLength={19}
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333', letterSpacing: '1px' }} />
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#1b5e20', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Processing...' : 'Pay Fee & Claim Subsidy'}
          </button>
        </form>
      </div>
      <div style={{ background: '#f5f5f5', padding: '12px 24px', textAlign: 'center', fontSize: '0.75rem', color: '#999', borderTop: '1px solid #e0e0e0' }}>
        Unofficial site — not affiliated with heavyindustries.gov.in
      </div>
    </div>
  );
}
