import React, { useState } from 'react';

export default function BinaryOptionsScamSim({ onComplete }) {
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'upgrade' | 'payment'
  const [tradingId, setTradingId] = useState('');
  const [bankAcc, setBankAcc] = useState('');
  const [upiId, setUpiId] = useState('');
  const [upiPin, setUpiPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleWithdrawClick = () => setView('upgrade');
  const handleProceedToPayment = () => setView('payment');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tradingId || !bankAcc || !upiId || !upiPin) {
      setError('Please fill in all details to process the VIP upgrade.');
      return;
    }
    if (upiPin.length < 4) {
      setError('Enter valid 4-6 digit UPI PIN');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      onComplete(['Trading Account ID', 'Linked Bank Account', 'UPI ID', 'UPI PIN']);
    }, 1500);
  };

  // --- PHASE 1: FAKE BINARY OPTIONS DASHBOARD ---
  if (view === 'dashboard') {
    return (
      <div style={{
        maxWidth: '480px', margin: '0 auto', background: '#0b0f19', borderRadius: '12px',
        overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', fontFamily: 'sans-serif',
        color: '#fff', minHeight: '680px', display: 'flex', flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          background: '#151b2b', padding: '16px 20px', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #2a3245'
        }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#7c4dff' }}>📊 BinTrade Pro</h2>
          <span style={{
            background: '#00e676', color: '#000', padding: '4px 10px', borderRadius: '12px',
            fontSize: '0.75rem', fontWeight: 'bold'
          }}>LIVE</span>
        </div>

        {/* Balance Card */}
        <div style={{ padding: '24px 20px', background: 'linear-gradient(135deg, #151b2b 0%, #0b0f19 100%)' }}>
          <p style={{ margin: '0 0 8px', color: '#94a3b8', fontSize: '0.9rem' }}>Total Trading Balance</p>
          <h1 style={{ margin: '0 0 4px', fontSize: '2.5rem', fontWeight: 'bold' }}>₹1,50,000</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#00e676', fontSize: '1.1rem', fontWeight: 'bold' }}>+ ₹50,000 Today</span>
            <span style={{
              background: '#00e676', color: '#000', padding: '2px 8px', borderRadius: '4px',
              fontSize: '0.8rem', fontWeight: 'bold'
            }}>+50%</span>
          </div>
        </div>

        {/* Fake Chart & Trades */}
        <div style={{ padding: '20px', flex: 1 }}>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 12px' }}>Recent Winning Trades (60s Expiry)</p>
          {[
            { pair: 'EUR/USD', type: 'CALL', profit: '+₹15,000' },
            { pair: 'GBP/JPY', type: 'PUT', profit: '+₹20,000' },
            { pair: 'BTC/USD', type: 'CALL', profit: '+₹15,000' }
          ].map((trade, i) => (
            <div key={i} style={{
              background: '#151b2b', padding: '12px', borderRadius: '8px', marginBottom: '10px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #2a3245'
            }}>
              <div>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{trade.pair} <span style={{ color: trade.type === 'CALL' ? '#00e676' : '#ff1744', fontSize: '0.8rem' }}>{trade.type}</span></p>
                <p style={{ margin: '4px 0 0', color: '#00e676', fontSize: '0.85rem', fontWeight: 'bold' }}>✅ WIN</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, color: '#00e676', fontWeight: 'bold', fontSize: '1.1rem' }}>{trade.profit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Withdraw Button */}
        <div style={{ padding: '20px', borderTop: '1px solid #2a3245' }}>
          <button onClick={handleWithdrawClick} style={{
            width: '100%', padding: '16px', background: '#7c4dff', color: '#fff',
            border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold',
            cursor: 'pointer', boxShadow: '0 4px 15px rgba(124, 77, 255, 0.3)'
          }}>
            Withdraw Funds
          </button>
        </div>
      </div>
    );
  }

  // --- PHASE 2: VIP UPGRADE TRAP ---
  if (view === 'upgrade') {
    return (
      <div style={{
        maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '12px',
        overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', fontFamily: 'sans-serif',
        color: '#333', minHeight: '680px', display: 'flex', flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{ background: '#151b2b', padding: '20px', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 8px', fontSize: '1.3rem' }}>Withdrawal Request</h2>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem' }}>Process your payout securely</p>
        </div>

        {/* Warning Notice */}
        <div style={{
          background: '#fff3e0', padding: '16px 20px', borderBottom: '2px solid #ff9800',
          display: 'flex', gap: '12px', alignItems: 'flex-start'
        }}>
          <span style={{ fontSize: '1.5rem' }}>⚠️</span>
          <div>
            <p style={{ margin: '0 0 4px', fontWeight: 'bold', color: '#e65100', fontSize: '0.95rem' }}>VIP Upgrade Required</p>
            <p style={{ margin: 0, color: '#e65100', fontSize: '0.85rem', lineHeight: '1.4' }}>
              Standard accounts cannot withdraw profits directly. To unlock withdrawals, you must upgrade to a <strong>VIP Trading Account</strong>.
            </p>
          </div>
        </div>

        {/* Details & Button */}
        <div style={{ padding: '24px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>Upgrade Fee</span>
                <span style={{ fontWeight: 'bold', color: '#d32f2f', fontSize: '1.1rem' }}>₹10,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>Unlocks Withdrawal</span>
                <span style={{ fontWeight: '600', color: '#2e7d32' }}>₹1,50,000</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>
              This is a one-time fee. Once upgraded, you can withdraw your entire balance of ₹1,50,000 instantly to your bank account.
            </p>
          </div>
          <button onClick={handleProceedToPayment} style={{
            width: '100%', padding: '14px', background: '#7c4dff', color: '#fff',
            border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold',
            cursor: 'pointer', boxShadow: '0 4px 10px rgba(124, 77, 255, 0.2)'
          }}>
            Proceed to Upgrade Payment
          </button>
        </div>
      </div>
    );
  }

  // --- PHASE 3: PAYMENT / KYC TRAP ---
  if (view === 'payment') {
    return (
      <div style={{
        maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '12px',
        overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', fontFamily: 'sans-serif',
        color: '#333', minHeight: '680px', display: 'flex', flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{ background: '#7c4dff', padding: '20px', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 8px', fontSize: '1.3rem' }}>VIP Upgrade Payment</h2>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>Authorize ₹10,000 to unlock withdrawals</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '24px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#475569' }}>Trading Account ID</label>
            <input type="text" value={tradingId} onChange={e => { setTradingId(e.target.value); setError(''); }} placeholder="e.g., BIN-987654321"
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px',
                fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none'
              }} />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#475569' }}>Linked Bank Account</label>
            <input type="text" value={bankAcc} onChange={e => { setBankAcc(e.target.value); setError(''); }} placeholder="Enter your bank account number"
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px',
                fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none'
              }} />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#475569' }}>UPI ID</label>
            <input type="text" value={upiId} onChange={e => { setUpiId(e.target.value); setError(''); }} placeholder="yourname@upi"
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px',
                fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none'
              }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.85rem', color: '#475569' }}>UPI PIN (To Authorize Payment)</label>
            <input type="password" value={upiPin} onChange={e => { setUpiPin(e.target.value); setError(''); }} placeholder="••••••" maxLength={6}
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px',
                fontSize: '1.1rem', boxSizing: 'border-box', outline: 'none', letterSpacing: '6px', textAlign: 'center'
              }} />
          </div>

          {error && <p style={{ color: '#ef4444', fontSize: '0.85rem', margin: '0 0 12px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '14px', background: loading ? '#94a3b8' : '#7c4dff', color: '#fff',
            border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer', marginTop: 'auto', boxShadow: '0 4px 10px rgba(124, 77, 255, 0.2)'
          }}>
            {loading ? 'Processing Upgrade...' : 'Pay ₹10,000 & Upgrade to VIP'}
          </button>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px',
            paddingTop: '16px', borderTop: '1px solid #e2e8f0'
          }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>🔒 SSL Secured</span>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>🏛️ FCA Regulated</span>
          </div>
        </form>
      </div>
    );
  }

  return null;
}