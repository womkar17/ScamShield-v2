import React, { useState } from 'react';

export default function IPOAllotmentSim({ onComplete }) {
  const [view, setView] = useState('sms'); // 'sms' | 'portal' | 'form' | 'upi'
  const [dematId, setDematId] = useState('');
  const [pan, setPan] = useState('');
  const [bankAcc, setBankAcc] = useState('');
  const [upiId, setUpiId] = useState('');
  const [upiPin, setUpiPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!dematId || !pan || !bankAcc || !upiId) {
      setError('Please fill in all details to claim your shares.');
      return;
    }
    setError('');
    setView('upi');
  };

  const handleUpiSubmit = (e) => {
    e.preventDefault();
    if (!upiPin || upiPin.length < 4) {
      setError('Enter valid 4-6 digit UPI PIN');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      // Exposed data sent back to the main app
      onComplete(['DP ID / Client ID', 'PAN Card Number', 'Bank Account Number', 'UPI ID', 'UPI PIN']);
    }, 1500);
  };

  // --- PHASE 1: FAKE SMS ---
  if (view === 'sms') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', height: '680px', display: 'flex',
        flexDirection: 'column', background: '#f5f5f5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', padding: '12px 20px',
          background: '#fff', color: '#333', fontSize: '0.8rem'
        }}>
          <span style={{ fontWeight: '600' }}>9:41</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <span>📶</span> <span>🔋 87%</span>
          </div>
        </div>
        <div style={{
          background: '#fff', padding: '8px 16px 14px', borderBottom: '1px solid #e0e0e0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#007AFF', fontSize: '1rem' }}>← Messages</span>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#333' }}>IPO-ALLOT</h3>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>SMS</p>
            </div>
            <span style={{ color: '#007AFF', fontSize: '1rem' }}>ⓘ</span>
          </div>
        </div>
        <div style={{ flex: 1, padding: '20px 16px', overflowY: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span style={{ background: '#e0e0e0', padding: '4px 14px', borderRadius: '12px', fontSize: '0.75rem', color: '#666' }}>
              Today 10:15 AM
            </span>
          </div>
          <div style={{
            background: '#e8e8e8', borderRadius: '18px 18px 18px 6px', padding: '14px 16px',
            maxWidth: '90%', boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
          }}>
            <p style={{ margin: 0, color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.5' }}>
              <strong style={{ color: '#2e7d32' }}>CONGRATULATIONS!</strong> You have been <strong>GUARANTEED</strong> allotment of 500 shares in the mega MEGA-IPO 2026.
            </p>
            <p style={{ margin: '10px 0 0', color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.5' }}>
              Expected Listing Price: ₹450 <br/>
              Expected Profit: ₹1,75,000!
            </p>
            <p style={{ margin: '10px 0 0', color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.5' }}>
              Pay a nominal processing fee of ₹99 to unlock and credit shares to your Demat account immediately:
            </p>
            <a href="#" onClick={(e) => { e.preventDefault(); setView('portal'); }} style={{
              display: 'block', marginTop: '10px', color: '#007AFF', fontSize: '0.88rem',
              wordBreak: 'break-all', textDecoration: 'underline'
            }}>
              https://ipo-guaranteed-claim.in/verify
            </a>
            <p style={{ margin: '10px 0 0', color: '#c62828', fontSize: '0.82rem', fontWeight: '600' }}>
              ⚠️ Offer expires in 15 minutes. Claim now!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --- PHASE 2: FAKE PORTAL ---
  if (view === 'portal') {
    return (
      <div style={{
        maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '8px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden',
        fontFamily: '"Open Sans", Arial, sans-serif', color: '#333'
      }}>
        <div style={{
          background: '#f0f0f0', padding: '10px 14px', borderBottom: '1px solid #ddd',
          display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem'
        }}>
          <div style={{ display: 'flex', gap: '4px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e74c3c', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f39c12', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2ecc71', display: 'inline-block' }} />
          </div>
          <div style={{
            flex: 1, background: '#fff', border: '1px solid #ccc', borderRadius: '4px',
            padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '6px'
          }}>
            <span style={{ color: '#2ecc71', fontSize: '0.9rem' }}>🔒</span>
            <span style={{ color: '#555' }}>https://ipo-guaranteed-claim.in/verify</span>
          </div>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)',
          padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '14px'
        }}>
          <div style={{
            width: '50px', height: '50px', background: '#fff', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 'bold', color: '#0d47a1', fontSize: '1.5rem'
          }}>📈</div>
          <div>
            <h2 style={{ margin: 0, color: '#fff', fontSize: '1.15rem' }}>IPO Allotment Portal</h2>
            <p style={{ margin: '2px 0 0', color: '#bbdefb', fontSize: '0.8rem' }}>SEBI Registered Claim Center</p>
          </div>
        </div>
        <div style={{
          background: '#e8f5e9', padding: '16px 24px', borderBottom: '2px solid #4caf50',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 8px', color: '#2e7d32', fontSize: '1.2rem' }}>✅ ALLOTMENT SUCCESSFUL</h3>
          <p style={{ margin: 0, color: '#1b5e20', fontSize: '0.9rem' }}>
            You have been allotted <strong>500 Shares</strong> of MEGA-IPO 2026.
          </p>
        </div>
        <div style={{ padding: '24px' }}>
          <div style={{ background: '#f9f9f9', padding: '16px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #eee' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>Issue Price:</span>
              <span style={{ fontWeight: '600', color: '#333' }}>₹100</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>Allotted Qty:</span>
              <span style={{ fontWeight: '600', color: '#333' }}>500 Shares</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>Expected Listing:</span>
              <span style={{ fontWeight: '600', color: '#2e7d32' }}>₹450 (Gains: ₹1,75,000)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed #ccc', paddingTop: '8px' }}>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>Processing Fee:</span>
              <span style={{ fontWeight: 'bold', color: '#c62828' }}>₹99</span>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#555', textAlign: 'center', marginBottom: '20px' }}>
            Pay the nominal processing fee of ₹99 to credit shares to your Demat account.
          </p>
          <button onClick={() => setView('form')} style={{
            width: '100%', padding: '14px', background: '#1565c0', color: '#fff',
            border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: '600',
            cursor: 'pointer'
          }}>
            Proceed to Claim Shares
          </button>
        </div>
      </div>
    );
  }

  // --- PHASE 3: KYC / AUTHENTICATION FORM ---
  if (view === 'form') {
    return (
      <div style={{
        maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '8px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden',
        fontFamily: '"Open Sans", Arial, sans-serif', color: '#333'
      }}>
        <div style={{
          background: '#1565c0', padding: '18px 24px', color: '#fff'
        }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Verify Demat Details</h3>
          <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.9 }}>Enter your details to credit shares</p>
        </div>
        <form onSubmit={handleFormSubmit} style={{ padding: '24px' }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>
              DP ID / Client ID
            </label>
            <input type="text" value={dematId} onChange={e => { setDematId(e.target.value); setError(''); }}
              placeholder="e.g., IN123456 / 12345678"
              style={{
                width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333'
              }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>
              PAN Card Number
            </label>
            <input type="text" value={pan} onChange={e => { setPan(e.target.value.toUpperCase()); setError(''); }}
              placeholder="ABCDE1234F" maxLength={10}
              style={{
                width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333',
                textTransform: 'uppercase', letterSpacing: '1px'
              }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>
              Bank Account Number
            </label>
            <input type="text" value={bankAcc} onChange={e => { setBankAcc(e.target.value); setError(''); }}
              placeholder="Enter linked bank account"
              style={{
                width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333'
              }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>
              UPI ID (to pay ₹99 fee)
            </label>
            <input type="text" value={upiId} onChange={e => { setUpiId(e.target.value); setError(''); }}
              placeholder="yourname@upi"
              style={{
                width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333'
              }} />
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" style={{
            width: '100%', padding: '13px', background: '#1565c0', color: '#fff',
            border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: '600',
            cursor: 'pointer'
          }}>
            Pay ₹99 & Claim Shares
          </button>
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px',
            padding: '14px 0', borderTop: '1px solid #eee'
          }}>
            <span style={{ fontSize: '0.75rem', color: '#888' }}>🔒 256-bit SSL</span>
            <span style={{ fontSize: '0.75rem', color: '#888' }}>🏛️ SEBI Verified</span>
          </div>
        </form>
      </div>
    );
  }

  // --- PHASE 4: UPI PIN TRAP ---
  if (view === 'upi') {
    return (
      <div style={{
        maxWidth: '400px', margin: '0 auto', background: '#fff', borderRadius: '16px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)', overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        height: '600px', display: 'flex', flexDirection: 'column'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #5f27cd, #341f97)', padding: '24px', color: '#fff',
          textAlign: 'center', flexShrink: 0
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>💸</div>
          <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>Pay ₹99</h3>
          <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.9 }}>IPO Processing Fee</p>
        </div>
        <form onSubmit={handleUpiSubmit} style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>Paying to</span>
                <span style={{ fontWeight: '600', color: '#333', fontSize: '0.9rem' }}>IPO-CLAIM-PROV@ybl</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>Amount</span>
                <span style={{ fontWeight: 'bold', color: '#333', fontSize: '1.1rem' }}>₹99</span>
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: '#333', textAlign: 'center' }}>
                Enter UPI PIN to authorize payment
              </label>
              <input type="password" value={upiPin} onChange={e => { setUpiPin(e.target.value); setError(''); }}
                maxLength={6} placeholder="••••••"
                style={{
                  width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px',
                  fontSize: '1.5rem', textAlign: 'center', letterSpacing: '8px',
                  boxSizing: 'border-box', outline: 'none'
                }} />
              {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '8px 0 0', textAlign: 'center' }}>{error}</p>}
            </div>
          </div>
          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '16px', background: loading ? '#999' : '#5f27cd', color: '#fff',
            border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer', marginTop: '20px'
          }}>
            {loading ? 'Processing...' : 'Submit PIN'}
          </button>
          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#888', marginTop: '16px' }}>
            🔒 Secure UPI Transaction
          </p>
        </form>
      </div>
    );
  }

  return null;
}