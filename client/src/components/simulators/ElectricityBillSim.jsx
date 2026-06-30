import React, { useState } from 'react';

export default function ElectricityBillSim({ onComplete }) {
  const [view, setView] = useState('sms'); // 'sms' | 'payment'
  const [name, setName] = useState('');
  const [consumerId, setConsumerId] = useState('');
  const [upiId, setUpiId] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLinkClick = (e) => {
    e.preventDefault();
    setView('payment');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !consumerId.trim() || !upiId.trim() || !pin.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      const exposedArray = ['Consumer Name', 'Consumer ID', 'UPI ID', 'UPI PIN'];
      onComplete(exposedArray);
    }, 1500);
  };

  if (view === 'sms') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', height: '680px', display: 'flex',
        flexDirection: 'column', background: '#f5f5f5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Status bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', padding: '12px 20px',
          background: '#fff', color: '#333', fontSize: '0.8rem'
        }}>
          <span style={{ fontWeight: '600' }}>7:52 PM</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <span>📶</span><span>🔋 54%</span>
          </div>
        </div>

        {/* Messages header */}
        <div style={{
          background: '#fff', padding: '8px 16px 14px', borderBottom: '1px solid #e0e0e0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#007AFF', fontSize: '1rem' }}>← Messages</span>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#333' }}>ELEC-BOARD</h3>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>SMS</p>
            </div>
            <span style={{ color: '#007AFF', fontSize: '1rem' }}>ⓘ</span>
          </div>
        </div>

        {/* SMS content */}
        <div style={{ flex: 1, padding: '20px 16px', overflowY: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span style={{ background: '#e0e0e0', padding: '4px 14px', borderRadius: '12px', fontSize: '0.75rem', color: '#666' }}>
              Today 7:48 PM
            </span>
          </div>

          <div style={{
            background: '#e8e8e8', borderRadius: '18px 18px 18px 6px', padding: '14px 16px',
            maxWidth: '92%', boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
          }}>
            <p style={{ margin: 0, color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.55' }}>
              🔴 <strong>URGENT NOTICE</strong>
            </p>
            <p style={{ margin: '8px 0 0', color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.55' }}>
              Dear Consumer, your electricity connection will be <strong style={{ color: '#c0392b' }}>DISCONNECTED TODAY at 8:00 PM</strong> due to pending bill of <strong>₹1,847</strong>.
            </p>
            <p style={{ margin: '8px 0 0', color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.55' }}>
              Consumer ID: XXXX4829
            </p>
            <p style={{ margin: '8px 0 0', color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.55' }}>
              Pay immediately to avoid disconnection:
            </p>
            <a href="#" onClick={handleLinkClick} style={{
              display: 'block', marginTop: '8px', color: '#007AFF', fontSize: '0.88rem',
              wordBreak: 'break-all', textDecoration: 'underline'
            }}>
              https://electricity-bill-pay.in/quick
            </a>
            <p style={{ margin: '10px 0 0', color: '#c0392b', fontSize: '0.82rem', fontWeight: '600' }}>
              ⚡ Only 8 minutes remaining before disconnection!
            </p>
          </div>

          {/* Second SMS */}
          <div style={{ textAlign: 'center', margin: '16px 0' }}>
            <span style={{ background: '#e0e0e0', padding: '4px 14px', borderRadius: '12px', fontSize: '0.75rem', color: '#666' }}>
              Today 7:51 PM
            </span>
          </div>
          <div style={{
            background: '#e8e8e8', borderRadius: '18px 18px 18px 6px', padding: '14px 16px',
            maxWidth: '92%', boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
          }}>
            <p style={{ margin: 0, color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.55' }}>
              FINAL WARNING: Your electricity meter no. 4829 disconnection process has been initiated. Pay ₹1,847 via the link above to stop disconnection. -ELEC BOARD
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Fake Electricity Board Payment Portal
  return (
    <div style={{
      maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '8px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden',
      fontFamily: '"Open Sans", Arial, sans-serif', color: '#333'
    }}>
      {/* Browser bar */}
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
          <span style={{ color: '#2ecc71' }}>🔒</span>
          <span style={{ color: '#555' }}>https://electricity-bill-pay.in/quick</span>
        </div>
      </div>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #e65100 0%, #f57c00 100%)',
        padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '14px'
      }}>
        <div style={{
          width: '50px', height: '50px', background: '#fff', borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem'
        }}>⚡</div>
        <div>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.1rem' }}>State Electricity Board</h2>
          <p style={{ margin: '2px 0 0', color: '#ffe0b2', fontSize: '0.8rem' }}>Quick Bill Payment Portal</p>
        </div>
      </div>

      {/* Urgency banner */}
      <div style={{
        background: '#fbe9e7', padding: '12px 24px', borderBottom: '2px solid #e74c3c',
        display: 'flex', alignItems: 'center', gap: '10px'
      }}>
        <span style={{ fontSize: '1.2rem' }}>🚨</span>
        <div>
          <p style={{ margin: 0, color: '#c62828', fontSize: '0.88rem', fontWeight: '700' }}>
            DISCONNECTION IMMINENT
          </p>
          <p style={{ margin: '2px 0 0', color: '#d32f2f', fontSize: '0.8rem' }}>
            Pay before 8:00 PM today to avoid electricity cut
          </p>
        </div>
      </div>

      {/* Bill Details */}
      <div style={{ padding: '20px 24px' }}>
        <div style={{
          background: '#fff3e0', border: '1px solid #ffe0b2', borderRadius: '8px',
          padding: '16px', marginBottom: '20px'
        }}>
          <h4 style={{ margin: '0 0 12px', color: '#e65100', fontSize: '0.92rem' }}>Bill Summary</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ color: '#555', fontSize: '0.85rem' }}>Consumer ID:</span>
            <span style={{ color: '#333', fontSize: '0.85rem', fontWeight: '600' }}>XXXX4829</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ color: '#555', fontSize: '0.85rem' }}>Bill Period:</span>
            <span style={{ color: '#333', fontSize: '0.85rem' }}>May 2026</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ color: '#555', fontSize: '0.85rem' }}>Due Date:</span>
            <span style={{ color: '#c62828', fontSize: '0.85rem', fontWeight: '600' }}>29 Jun 2026 (TODAY)</span>
          </div>
          <div style={{ borderTop: '1px solid #ffe0b2', paddingTop: '8px', marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#333', fontSize: '1rem', fontWeight: '700' }}>Amount Due:</span>
            <span style={{ color: '#c62828', fontSize: '1.15rem', fontWeight: '700' }}>₹1,847</span>
          </div>
        </div>

        {/* Payment form */}
        <h3 style={{ margin: '0 0 16px', color: '#e65100', fontSize: '1rem' }}>
          Pay via UPI
        </h3>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>
              Consumer Name
            </label>
            <input type="text" value={name} onChange={e => { setName(e.target.value); setError(''); }}
              placeholder="Enter your name"
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none', color: '#333'
              }} />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>
              Consumer ID
            </label>
            <input type="text" value={consumerId} onChange={e => { setConsumerId(e.target.value); setError(''); }}
              placeholder="Enter your consumer ID"
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none', color: '#333'
              }} />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>
              Your UPI ID
            </label>
            <input type="text" value={upiId} onChange={e => { setUpiId(e.target.value); setError(''); }}
              placeholder="yourname@upi"
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none', color: '#333'
              }} />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>
              Amount
            </label>
            <input type="text" value="₹1,847" readOnly
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '1rem', boxSizing: 'border-box', background: '#f5f5f5', color: '#c62828',
                fontWeight: '700'
              }} />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>
              UPI PIN
            </label>
            <input type="password" value={pin} onChange={e => { setPin(e.target.value); setError(''); }}
              maxLength={6} placeholder="••••••"
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '1.1rem', boxSizing: 'border-box', outline: 'none', color: '#333',
                letterSpacing: '6px', textAlign: 'center'
              }} />
          </div>

          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '13px', background: loading ? '#999' : '#e65100',
            color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem',
            fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Processing Payment...' : 'Pay ₹1,847 Now'}
          </button>
        </form>

        {/* Trust badges */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '18px',
          padding: '14px 0', borderTop: '1px solid #eee'
        }}>
          <span style={{ fontSize: '0.73rem', color: '#888' }}>🔒 Secure Payment</span>
          <span style={{ fontSize: '0.73rem', color: '#888' }}>⚡ Govt. Authorized</span>
          <span style={{ fontSize: '0.73rem', color: '#888' }}>✅ UPI Verified</span>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: '#f5f5f5', padding: '12px 24px', textAlign: 'center', fontSize: '0.73rem',
        color: '#999', borderTop: '1px solid #e0e0e0'
      }}>
        © 2026 State Electricity Board. All rights reserved. | Helpline: 1912
      </div>
    </div>
  );
}
