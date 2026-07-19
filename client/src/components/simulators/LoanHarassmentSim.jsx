import React, { useState } from 'react';

export default function LoanHarassmentSim({ onComplete }) {
  const [view, setView] = useState('call');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [upi, setUpi] = useState('');
  const [contacts, setContacts] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const openForm = (e) => { e.preventDefault(); setView('form'); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !amount.trim() || !upi.trim()) {
      setError('Please complete the settlement details to stop the calls.');
      return;
    }
    if (!contacts) {
      setError('You must confirm access to your contacts so we can "verify" you.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Full Name', 'Settlement Payment', 'UPI ID', 'Phone Contact List Access']);
    }, 1500);
  };

  if (view === 'call') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', height: '560px', display: 'flex', flexDirection: 'column',
        background: '#1a0f0f', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
        alignItems: 'center', justifyContent: 'space-between', padding: '40px 24px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#ff8a8a' }}>Unknown Number</p>
          <h2 style={{ margin: '8px 0 0', fontSize: '1.4rem' }}>+91 98XXX-XXXXX</h2>
          <p style={{ marginTop: '6px', color: '#ccc', fontSize: '0.85rem' }}>"Recovery Agent — QuickCash Loans"</p>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '14px', padding: '16px 18px', margin: '20px 0' }}>
          <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.6', color: '#f5d5d5' }}>
            "Your ₹3,000 loan is overdue by 2 days. Pay the settlement amount right now, or we will message
            every contact in your phone with your photo and 'defaulter' notice within the hour."
          </p>
        </div>
        <button onClick={openForm} style={{ padding: '14px 28px', background: '#c0392b', color: '#fff', border: 'none', borderRadius: '30px', fontWeight: 'bold', fontSize: '1rem' }}>
          Pay Settlement to Stop Calls
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', overflow: 'hidden', fontFamily: 'Arial, sans-serif', color: '#222' }}>
      <div style={{ padding: '20px 24px', background: '#c0392b', color: '#fff' }}>
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>⚠️ Immediate Settlement Required</h2>
        <p style={{ margin: '4px 0 0', fontSize: '0.8rem', opacity: 0.9 }}>Pay now to stop contact harassment</p>
      </div>
      <form onSubmit={handleSubmit} style={{ padding: '22px' }}>
        {[
          { label: 'Full Name', value: name, set: setName },
          { label: 'Settlement Amount (₹)', value: amount, set: setAmount },
          { label: 'UPI ID for Payment', value: upi, set: setUpi },
        ].map((f, i) => (
          <div key={i} style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#555' }}>{f.label}</label>
            <input type="text" value={f.value} onChange={e => { f.set(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
          </div>
        ))}
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: '#555', marginBottom: '18px', lineHeight: '1.4' }}>
          <input type="checkbox" checked={contacts} onChange={e => { setContacts(e.target.checked); setError(''); }} style={{ marginTop: '3px' }} />
          I confirm the app may access my phone contacts for "identity verification".
        </label>
        {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', background: loading ? '#999' : '#c0392b', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Processing…' : 'Pay Settlement Now'}
        </button>
      </form>
    </div>
  );
}
