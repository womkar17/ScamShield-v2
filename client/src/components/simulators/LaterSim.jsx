import React, { useState } from 'react';

// Inlined Base Template (SaaSPhishSim) for self-contained simulation

/**
 * Reusable simulator for "fake SaaS / online-tool account" phishing scams.
 * An email warns the victim their account with a well-known service will be
 * suspended, walks them through a lookalike login page, then asks for
 * billing/card details to "reactivate" the account.
 *
 * Props:
 *  - serviceName, icon, brandColor, siteUrl, reason (why the account is "at risk")
 *  - onComplete(exposedArray)
 */
function SaaSPhishSim({ serviceName, icon = '🔒', brandColor = '#6366f1', siteUrl, reason = 'unusual account activity', onComplete }) {
  const [view, setView] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const goToLogin = (e) => { e.preventDefault(); setView('login'); };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password to continue.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => { setLoading(false); setView('billing'); }, 1200);
  };

  const handleBilling = (e) => {
    e.preventDefault();
    if (!card.trim() || !expiry.trim() || !cvv.trim()) {
      setError('Please complete your billing details to keep your account active.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Email Address', 'Account Password', 'Card Number', 'CVV']);
    }, 1500);
  };

  if (view === 'email') {
    return (
      <div style={{ maxWidth: '520px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', overflow: 'hidden', fontFamily: 'Arial, sans-serif', color: '#222' }}>
        <div style={{ padding: '16px 22px', borderBottom: '1px solid #eee', background: '#fafafa' }}>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#888' }}>From: {serviceName} Account Team &lt;no-reply@{siteUrl}&gt;</p>
          <p style={{ margin: '4px 0 0', fontWeight: 'bold' }}>Action required: verify your {serviceName} account</p>
        </div>
        <div style={{ padding: '22px' }}>
          <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>Hi there,</p>
          <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
            We detected {reason} on your {serviceName} account. To avoid suspension within 24 hours, please sign in and confirm your details.
          </p>
          <a href="#" onClick={goToLogin} style={{ display: 'inline-block', margin: '12px 0', padding: '12px 24px', background: brandColor, color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
            Verify My Account
          </a>
          <p style={{ fontSize: '0.8rem', color: '#999' }}>— The {serviceName} Team</p>
        </div>
      </div>
    );
  }

  if (view === 'login') {
    return (
      <div style={{ maxWidth: '420px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', overflow: 'hidden', fontFamily: 'Arial, sans-serif', color: '#222' }}>
        <div style={{ padding: '24px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
          <div style={{ fontSize: '2rem', marginBottom: '6px' }}>{icon}</div>
          <h2 style={{ margin: 0, fontSize: '1.15rem' }}>Sign in to {serviceName}</h2>
          <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#999' }}>{siteUrl}</p>
        </div>
        <form onSubmit={handleLogin} style={{ padding: '22px' }}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#555' }}>Email</label>
            <input type="text" value={email} onChange={e => { setEmail(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#555' }}>Password</label>
            <input type="password" value={password} onChange={e => { setPassword(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', background: loading ? '#999' : brandColor, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '440px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', overflow: 'hidden', fontFamily: 'Arial, sans-serif', color: '#222' }}>
      <div style={{ padding: '18px 22px', background: brandColor, color: '#fff' }}>
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Reactivate your {serviceName} account</h2>
      </div>
      <form onSubmit={handleBilling} style={{ padding: '22px' }}>
        <p style={{ fontSize: '0.88rem', color: '#555', marginTop: 0 }}>Confirm your billing details to keep your account active.</p>
        <div style={{ marginBottom: '14px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#555' }}>Card Number</label>
          <input type="text" value={card} onChange={e => { setCard(e.target.value); setError(''); }}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
        </div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '18px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#555' }}>Expiry (MM/YY)</label>
            <input type="text" value={expiry} onChange={e => { setExpiry(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#555' }}>CVV</label>
            <input type="password" value={cvv} onChange={e => { setCvv(e.target.value); setError(''); }} maxLength={4}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
          </div>
        </div>
        {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', background: loading ? '#999' : brandColor, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Processing…' : 'Confirm & Reactivate'}
        </button>
      </form>
    </div>
  );
}


// Main Simulation Component

export default function LaterSim({ onComplete }) {
  return (
    <SaaSPhishSim
      serviceName="Later"
      icon="📅"
      brandColor="#22c55e"
      siteUrl="later-accounts.com"
      reason="unusual sign-in activity"
      onComplete={onComplete}
    />
  );
}
