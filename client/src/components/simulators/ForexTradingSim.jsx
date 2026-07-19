import React, { useState } from 'react';

export default function ForexTradingSim({ onComplete }) {
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'withdraw'
  const [name, setName] = useState('');
  const [pan, setPan] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [bankAcc, setBankAcc] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleWithdrawClick = () => {
    setView('withdraw');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !pan || !aadhaar || !bankAcc || !ifsc) {
      setError('Please fill in all KYC and bank details to process withdrawal.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      // Exposed data sent back to the main app
      onComplete(['Full Name', 'PAN Card Number', 'Aadhaar Number', 'Bank Account Number', 'IFSC Code']);
    }, 1500);
  };

  // --- PHASE 1: FAKE TRADING DASHBOARD ---
  if (view === 'dashboard') {
    return (
      <div style={{
        maxWidth: '480px', margin: '0 auto', background: '#0f172a', borderRadius: '12px',
        overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', fontFamily: 'sans-serif',
        color: '#fff', minHeight: '680px', display: 'flex', flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          background: '#1e293b', padding: '16px 20px', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155'
        }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#38bdf8' }}>📈 ForexPro India</h2>
          <span style={{
            background: '#22c55e', color: '#000', padding: '4px 10px', borderRadius: '12px',
            fontSize: '0.75rem', fontWeight: 'bold'
          }}>LIVE</span>
        </div>

        {/* Balance Card */}
        <div style={{ padding: '24px 20px', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <p style={{ margin: '0 0 8px', color: '#94a3b8', fontSize: '0.9rem' }}>Total Portfolio Value</p>
          <h1 style={{ margin: '0 0 4px', fontSize: '2.5rem', fontWeight: 'bold' }}>₹3,00,000</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#22c55e', fontSize: '1.1rem', fontWeight: 'bold' }}>+ ₹2,50,000</span>
            <span style={{
              background: '#22c55e', color: '#000', padding: '2px 8px', borderRadius: '4px',
              fontSize: '0.8rem', fontWeight: 'bold'
            }}>+500%</span>
          </div>
        </div>

        {/* Fake Chart */}
        <div style={{ padding: '0 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '12px' }}>EUR/USD - 1H Chart</p>
          <div style={{
            display: 'flex', alignItems: 'flex-end', gap: '4px', height: '120px',
            padding: '10px 0', borderBottom: '1px solid #334155'
          }}>
            {[30, 45, 20, 60, 80, 50, 90, 70, 110, 85, 120, 100].map((h, i) => (
              <div key={i} style={{
                flex: 1, height: `${h}px`, background: i === 11 ? '#22c55e' : '#334155',
                borderRadius: '2px 2px 0 0'
              }} />
            ))}
          </div>
        </div>

        {/* Active Trades */}
        <div style={{ padding: '20px', borderTop: '1px solid #334155' }}>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 12px' }}>Active Trades</p>
          <div style={{
            background: '#1e293b', padding: '12px', borderRadius: '8px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <div>
              <p style={{ margin: 0, fontWeight: 'bold' }}>EUR/USD <span style={{ color: '#22c55e', fontSize: '0.8rem' }}>BUY</span></p>
              <p style={{ margin: '4px 0 0', color: '#94a3b8', fontSize: '0.8rem' }}>Qty: 5 Lots</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, color: '#22c55e', fontWeight: 'bold' }}>+ ₹1,20,000</p>
              <p style={{ margin: '4px 0 0', color: '#94a3b8', fontSize: '0.8rem' }}>ROI: 240%</p>
            </div>
          </div>
        </div>

        {/* Withdraw Button */}
        <div style={{ padding: '20px', borderTop: '1px solid #334155' }}>
          <button onClick={handleWithdrawClick} style={{
            width: '100%', padding: '16px', background: '#22c55e', color: '#000',
            border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold',
            cursor: 'pointer', boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
          }}>
            Withdraw Funds
          </button>
        </div>
      </div>
    );
  }

  // --- PHASE 2: WITHDRAWAL / KYC TRAP ---
  if (view === 'withdraw') {
    return (
      <div style={{
        maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '12px',
        overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', fontFamily: 'sans-serif',
        color: '#333', minHeight: '680px', display: 'flex', flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{ background: '#1e293b', padding: '20px', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 8px', fontSize: '1.3rem' }}>Withdrawal Request</h2>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem' }}>Process your payout securely</p>
        </div>

        {/* Tax Notice */}
        <div style={{
          background: '#fef3c7', padding: '16px 20px', borderBottom: '2px solid #f59e0b',
          display: 'flex', gap: '12px', alignItems: 'flex-start'
        }}>
          <span style={{ fontSize: '1.5rem' }}>⚠️</span>
          <div>
            <p style={{ margin: '0 0 4px', fontWeight: 'bold', color: '#92400e', fontSize: '0.95rem' }}>Withdrawal Tax Required</p>
            <p style={{ margin: 0, color: '#92400e', fontSize: '0.85rem', lineHeight: '1.4' }}>
              As per RBI guidelines, a <strong>10% Tax (₹25,000)</strong> must be cleared before releasing your profit of ₹2,50,000. Please verify your bank details below to pay the tax and process the withdrawal.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '24px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 16px', fontSize: '1.1rem', color: '#1e293b' }}>KYC & Bank Verification</h3>
          
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#475569' }}>Full Name (as per Bank)</label>
            <input type="text" value={name} onChange={e => { setName(e.target.value); setError(''); }} placeholder="John Doe"
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px',
                fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none'
              }} />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#475569' }}>PAN Card Number</label>
            <input type="text" value={pan} onChange={e => { setPan(e.target.value.toUpperCase()); setError(''); }} placeholder="ABCDE1234F" maxLength={10}
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px',
                fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none', textTransform: 'uppercase', letterSpacing: '1px'
              }} />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#475569' }}>Aadhaar Number</label>
            <input type="text" value={aadhaar} onChange={e => { setAadhaar(e.target.value.replace(/\D/g, '')); setError(''); }} placeholder="1234 5678 9012" maxLength={12}
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px',
                fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none', letterSpacing: '1px'
              }} />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#475569' }}>Bank Account Number</label>
            <input type="text" value={bankAcc} onChange={e => { setBankAcc(e.target.value); setError(''); }} placeholder="Enter your account number"
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px',
                fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none'
              }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#475569' }}>IFSC Code</label>
            <input type="text" value={ifsc} onChange={e => { setIfsc(e.target.value.toUpperCase()); setError(''); }} placeholder="SBIN0001234" maxLength={11}
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px',
                fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none', textTransform: 'uppercase', letterSpacing: '1px'
              }} />
          </div>

          {error && <p style={{ color: '#ef4444', fontSize: '0.85rem', margin: '0 0 12px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '14px', background: loading ? '#94a3b8' : '#2563eb', color: '#fff',
            border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer', marginTop: 'auto', boxShadow: '0 4px 10px rgba(37, 99, 235, 0.2)'
          }}>
            {loading ? 'Processing Tax Payment...' : 'Pay ₹25,000 Tax & Withdraw'}
          </button>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px',
            paddingTop: '16px', borderTop: '1px solid #e2e8f0'
          }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>🔒 SSL Secured</span>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>🏛️ RBI Compliant</span>
          </div>
        </form>
      </div>
    );
  }

  return null;
}