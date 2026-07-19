import React, { useState } from 'react';

export default function FakeMutualFundScamSim({ onComplete }) {
  const [view, setView] = useState('app'); // 'app' | 'kyc' | 'payment'
  const [pan, setPan] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [bankAcc, setBankAcc] = useState('');
  const [nominee, setNominee] = useState('');
  const [upiId, setUpiId] = useState('');
  const [upiPin, setUpiPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleKycSubmit = (e) => {
    e.preventDefault();
    if (!pan || !aadhaar || !bankAcc || !nominee) {
      setError('Please complete all KYC details to proceed.');
      return;
    }
    setError('');
    setView('payment');
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!upiId || !upiPin) {
      setError('Please enter UPI ID and PIN to pay the fee.');
      return;
    }
    if (upiPin.length < 4) {
      setError('Enter valid 4-6 digit UPI PIN');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      // Exposed data sent back to the main app
      onComplete(['PAN Card Number', 'Aadhaar Number', 'Bank Account Number', 'Nominee Details', 'UPI ID', 'UPI PIN']);
    }, 1500);
  };

  // --- PHASE 1: FAKE MUTUAL FUND APP ---
  if (view === 'app') {
    return (
      <div style={{
        maxWidth: '480px', margin: '0 auto', background: '#f8fafc', borderRadius: '16px',
        overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', fontFamily: 'sans-serif',
        minHeight: '680px', display: 'flex', flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)', padding: '20px',
          color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>WealthGrow MF</h2>
            <p style={{ margin: '2px 0 0', fontSize: '0.8rem', opacity: 0.9 }}>SEBI Registered AMC</p>
          </div>
          <div style={{
            background: '#fbbf24', color: '#000', padding: '4px 10px', borderRadius: '12px',
            fontSize: '0.7rem', fontWeight: 'bold'
          }}>VERIFIED</div>
        </div>

        {/* Main Content */}
        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            background: '#fff', padding: '24px', borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center', marginBottom: '24px'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>📈</div>
            <h3 style={{ margin: '0 0 8px', color: '#065f46', fontSize: '1.2rem' }}>New Fund Offer (NFO)</h3>
            <p style={{ margin: '0 0 16px', color: '#dc2626', fontWeight: 'bold', fontSize: '1.3rem' }}>
              Guaranteed 15% Annual Returns!
            </p>
            <div style={{ background: '#f1f5f9', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
              <p style={{ margin: 0, color: '#475569', fontSize: '0.85rem' }}>Minimum Investment</p>
              <p style={{ margin: '4px 0 0', color: '#0f172a', fontSize: '1.8rem', fontWeight: 'bold' }}>₹10,000</p>
            </div>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5' }}>
              Zero Risk • High Reward • Tax Benefits
            </p>
          </div>

          <button onClick={() => setView('kyc')} style={{
            width: '100%', padding: '16px', background: '#059669', color: '#fff',
            border: 'none', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold',
            cursor: 'pointer', boxShadow: '0 4px 15px rgba(5, 150, 105, 0.3)'
          }}>
            Start Investment & KYC
          </button>
        </div>
      </div>
    );
  }

  // --- PHASE 2: KYC FORM ---
  if (view === 'kyc') {
    return (
      <div style={{
        maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '16px',
        overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', fontFamily: 'sans-serif',
        minHeight: '680px', display: 'flex', flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{ background: '#065f46', padding: '20px', color: '#fff' }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem' }}>KYC Verification</h2>
          <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.9 }}>Mandatory as per SEBI guidelines</p>
        </div>

        {/* Form */}
        <form onSubmit={handleKycSubmit} style={{ padding: '24px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#334155' }}>PAN Card Number</label>
            <input type="text" value={pan} onChange={e => { setPan(e.target.value.toUpperCase()); setError(''); }} placeholder="ABCDE1234F" maxLength={10}
              style={{
                width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px',
                fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none', textTransform: 'uppercase', letterSpacing: '1px'
              }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#334155' }}>Aadhaar Number</label>
            <input type="text" value={aadhaar} onChange={e => { setAadhaar(e.target.value.replace(/\D/g, '')); setError(''); }} placeholder="1234 5678 9012" maxLength={12}
              style={{
                width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px',
                fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none', letterSpacing: '1px'
              }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#334155' }}>Bank Account Number</label>
            <input type="text" value={bankAcc} onChange={e => { setBankAcc(e.target.value); setError(''); }} placeholder="Enter linked bank account"
              style={{
                width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px',
                fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none'
              }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#334155' }}>Nominee Name & Relation</label>
            <input type="text" value={nominee} onChange={e => { setNominee(e.target.value); setError(''); }} placeholder="e.g., Rahul Sharma (Father)"
              style={{
                width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px',
                fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none'
              }} />
          </div>

          {error && <p style={{ color: '#ef4444', fontSize: '0.85rem', margin: '0 0 12px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" style={{
            width: '100%', padding: '14px', background: '#059669', color: '#fff',
            border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: 'bold',
            cursor: 'pointer', marginTop: 'auto'
          }}>
            Proceed to Activate Folio
          </button>
        </form>
      </div>
    );
  }

  // --- PHASE 3: PAYMENT / UPI PIN TRAP ---
  if (view === 'payment') {
    return (
      <div style={{
        maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '16px',
        overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', fontFamily: 'sans-serif',
        minHeight: '680px', display: 'flex', flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)', padding: '24px',
          color: '#fff', textAlign: 'center'
        }}>
          <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Folio Activation Fee</h2>
          <p style={{ margin: '4px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Pay to activate your mutual fund folio</p>
        </div>

        {/* Form */}
        <form onSubmit={handlePaymentSubmit} style={{ padding: '24px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            background: '#f8fafc', padding: '20px', borderRadius: '12px', marginBottom: '24px',
            border: '1px solid #e2e8f0', textAlign: 'center'
          }}>
            <p style={{ margin: '0 0 8px', color: '#64748b', fontSize: '0.9rem' }}>Amount to Pay</p>
            <p style={{ margin: 0, color: '#0f172a', fontSize: '2rem', fontWeight: 'bold' }}>₹500</p>
            <p style={{ margin: '8px 0 0', color: '#94a3b8', fontSize: '0.8rem' }}>One-time KYC Activation Fee</p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#334155' }}>Your UPI ID</label>
            <input type="text" value={upiId} onChange={e => { setUpiId(e.target.value); setError(''); }} placeholder="yourname@upi"
              style={{
                width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px',
                fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none'
              }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#334155' }}>UPI PIN (To Authorize Payment)</label>
            <input type="password" value={upiPin} onChange={e => { setUpiPin(e.target.value); setError(''); }} placeholder="••••••" maxLength={6}
              style={{
                width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px',
                fontSize: '1.2rem', boxSizing: 'border-box', outline: 'none', letterSpacing: '6px', textAlign: 'center'
              }} />
          </div>

          {error && <p style={{ color: '#ef4444', fontSize: '0.85rem', margin: '0 0 12px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '14px', background: loading ? '#94a3b8' : '#059669', color: '#fff',
            border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer', marginTop: 'auto'
          }}>
            {loading ? 'Processing...' : 'Pay ₹500 & Activate Folio'}
          </button>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px',
            paddingTop: '16px', borderTop: '1px solid #e2e8f0'
          }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>🔒 SSL Secured</span>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>🏛️ SEBI Compliant</span>
          </div>
        </form>
      </div>
    );
  }

  return null;
}