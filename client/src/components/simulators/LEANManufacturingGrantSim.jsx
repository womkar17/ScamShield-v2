import React, { useState } from 'react';

// Inlined Base Template (GovtSchemeSim) for self-contained simulation

/**
 * Reusable simulator for "fake government scheme / utility booking" scams
 * delivered as an SMS with a link to a lookalike portal.
 *
 * Props:
 *  - schemeName, icon, smsText, siteUrl
 *  - onComplete(exposedArray)
 */
function GovtSchemeSim({ schemeName, icon = '🏛️', smsText, siteUrl, onComplete }) {
  const [view, setView] = useState('sms');
  const [name, setName] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [account, setAccount] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const openForm = (e) => { e.preventDefault(); setView('form'); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !aadhaar.trim() || !account.trim() || !otp.trim()) {
      setError('Please complete all fields to process your application.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Full Name', 'Aadhaar Number', 'Bank Account / UPI ID', 'OTP']);
    }, 1500);
  };

  if (view === 'sms') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', height: '560px', display: 'flex', flexDirection: 'column',
        background: '#f5f5f5', fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif'
      }}>
        <div style={{ background: '#fff', padding: '12px 18px', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: '#007AFF' }}>← Messages</span>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '1rem', color: '#333' }}>{schemeName}</h3>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>SMS</p>
          </div>
        </div>
        <div style={{ flex: 1, padding: '20px 16px' }}>
          <div style={{ background: '#e8e8e8', borderRadius: '18px 18px 18px 6px', padding: '14px 16px', boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}>
            <p style={{ margin: 0, color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.5' }}>
              {smsText}
            </p>
            <a href="#" onClick={openForm} style={{ display: 'block', marginTop: '10px', color: '#007AFF', fontSize: '0.88rem', wordBreak: 'break-all', textDecoration: 'underline' }}>
              {siteUrl}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', overflow: 'hidden', fontFamily: 'Arial, sans-serif', color: '#222' }}>
      <div style={{ padding: '20px 24px', background: 'linear-gradient(135deg, #1a5f3f, #0d3d26)', color: '#fff', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '1.6rem' }}>{icon}</span>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.1rem' }}>{schemeName} — Verification</h2>
          <p style={{ margin: '2px 0 0', fontSize: '0.78rem', opacity: 0.9 }}>{siteUrl}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} style={{ padding: '22px' }}>
        {[
          { label: 'Full Name', value: name, set: setName },
          { label: 'Aadhaar Number', value: aadhaar, set: setAadhaar },
          { label: 'Bank Account / UPI ID', value: account, set: setAccount },
        ].map((f, i) => (
          <div key={i} style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#555' }}>{f.label}</label>
            <input type="text" value={f.value} onChange={e => { f.set(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
          </div>
        ))}
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#555' }}>OTP sent to your mobile</label>
          <input type="text" value={otp} onChange={e => { setOtp(e.target.value); setError(''); }} maxLength={6}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
        </div>
        {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', background: loading ? '#999' : '#1a5f3f', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Verifying…' : 'Submit & Verify'}
        </button>
      </form>
    </div>
  );
}


// Main Simulation Component

export default function LEANManufacturingGrantSim({ onComplete }) {
  return (
    <GovtSchemeSim
      schemeName="LEAN Manufacturing Grant"
      icon="🏭"
      smsText="Your business is eligible for the Govt LEAN Manufacturing Grant of ₹2,00,000. Verify your bank account to receive funds before the scheme closes."
      siteUrl="lean-grant-msme.in"
      onComplete={onComplete}
    />
  );
}
