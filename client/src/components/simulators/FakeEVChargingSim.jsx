import React, { useState } from 'react';

export default function FakeEVChargingSim({ onComplete }) {
  const [view, setView] = useState('sms'); // 'sms' | 'payment'
  const [formData, setFormData] = useState({ 
    cardNumber: '',
    cvv: '',
    upiPin: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.upiPin && !formData.cardNumber) {
      setError('Please provide payment details to avoid disconnection.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Payment Credentials', 'Bank Account Balance'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'sms') {
    return (
      <div style={{
        maxWidth: '400px', margin: '0 auto', background: '#f5f5f5', border: '1px solid #ddd',
        borderRadius: '24px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden', height: '600px', display: 'flex', flexDirection: 'column'
      }}>
        <div style={{ background: '#fff', padding: '15px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '40px', height: '40px', background: '#ccc', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem' }}>📱</div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>TX-EVCBLL</h3>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#888' }}>Text Message • Today</p>
          </div>
        </div>
        
        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: '#e0f7fa', padding: '15px', borderRadius: '15px', borderBottomLeftRadius: '2px', alignSelf: 'flex-start', maxWidth: '85%' }}>
            <p style={{ margin: '0 0 10px', fontSize: '0.95rem', lineHeight: '1.4' }}>
              Dear Customer, your electricity connection for your EV Home Charger will be disconnected tonight at 9:30 PM because your previous month bill was not updated.
            </p>
            <p style={{ margin: '0 0 10px', fontSize: '0.95rem', lineHeight: '1.4' }}>
              Please call our support officer immediately or update via the link below:
            </p>
            <a href="#" onClick={(e) => { e.preventDefault(); setView('payment'); }} style={{ color: '#0277bd', fontWeight: 'bold', textDecoration: 'underline' }}>
              http://ev-utility-update.net/pay
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Payment View
  return (
    <div style={{
      maxWidth: '400px', margin: '0 auto', background: '#ffffff', border: '1px solid #ddd',
      borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
    }}>
      <div style={{ background: '#0288d1', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>EV Utility Portal</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Quick Bill Update</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: '#ffebee', borderLeft: '4px solid #f44336', padding: '12px', marginBottom: '25px', fontSize: '0.85rem', color: '#c62828' }}>
          <strong>Pending Amount: ₹12.50 (Update Fee)</strong>
          <br/>Pay immediately to prevent power disconnection.
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Card Number</label>
            <input type="text" value={formData.cardNumber} onChange={handleChange('cardNumber')} placeholder="xxxx xxxx xxxx xxxx"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          <p style={{ textAlign: 'center', margin: '10px 0', color: '#888', fontWeight: 'bold' }}>OR</p>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Enter UPI PIN to verify account</label>
            <input type="password" value={formData.upiPin} onChange={handleChange('upiPin')} placeholder="4 or 6 digit UPI PIN"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          {error && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#9e9e9e' : '#4caf50', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Processing...' : 'Pay ₹12.50 & Update Bill'}
          </button>
        </form>
      </div>
    </div>
  );
}
