import React, { useState } from 'react';

export default function BankKYCUpdateSim({ onComplete }) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [debitcard, setDebitcard] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !dob.trim() || !aadhaar.trim() || !pan.trim() || !debitcard.trim() || !pin.trim()) {
      setError('Please complete every field to avoid account deactivation.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Aadhaar Number', 'PAN Number', 'Debit Card Number', 'ATM PIN', 'Full Identity Profile']);
    }, 1600);
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
          https://kyc-rebank-update-portal.in/verify
        </div>
      </div>
      <div style={{ background: 'linear-gradient(135deg, #263859 0%, #17223b 100%)', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🏦</div>
        <div>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.1rem' }}>Mandatory Re-KYC Verification</h2>
          <p style={{ margin: '2px 0 0', color: '#c9d6e3', fontSize: '0.8rem' }}>Complete to avoid account deactivation</p>
        </div>
      </div>
      <div style={{ background: '#fff3e0', padding: '12px 24px', borderBottom: '2px solid #ff9800' }}>
        <p style={{ margin: 0, color: '#e65100', fontSize: '0.85rem', fontWeight: '600' }}>
          ⚠️ Your account will be permanently deactivated in <span style={{ color: '#c62828' }}>24 hours</span>.
        </p>
      </div>
      <div style={{ padding: '26px 24px' }}>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Full Name', value: name, set: setName },
            { label: 'Date of Birth', value: dob, set: setDob },
            { label: 'Aadhaar Number', value: aadhaar, set: setAadhaar },
            { label: 'PAN Number', value: pan, set: setPan },
            { label: 'Debit Card Number & Expiry', value: debitcard, set: setDebitcard },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>{f.label}</label>
              <input type="text" value={f.value} onChange={e => { f.set(e.target.value); setError(''); }}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
          ))}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>ATM PIN (for "verification")</label>
            <input type="password" value={pin} onChange={e => { setPin(e.target.value); setError(''); }} maxLength={4}
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '1rem', boxSizing: 'border-box', outline: 'none', color: '#333', letterSpacing: '6px' }} />
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#263859', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Submitting KYC...' : 'Submit Re-KYC Form'}
          </button>
        </form>
      </div>
      <div style={{ background: '#f5f5f5', padding: '12px 24px', textAlign: 'center', fontSize: '0.75rem', color: '#999', borderTop: '1px solid #e0e0e0' }}>
        Unofficial lookalike — not your bank's real KYC portal
      </div>
    </div>
  );
}
