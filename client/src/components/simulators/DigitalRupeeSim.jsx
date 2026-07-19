import React, { useState } from 'react';

export default function DigitalRupeeSim({ onComplete }) {
  const [view, setView] = useState('landing'); // 'landing' | 'link'
  const [formData, setFormData] = useState({ 
    cardNumber: '',
    expiry: '',
    atmPin: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cardNumber || !formData.atmPin) {
      setError('Please provide card details and PIN.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Debit Card Details', 'ATM PIN', 'Bank Account Balance'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'landing') {
    return (
      <div style={{
        maxWidth: '400px', margin: '0 auto', background: '#fff', border: '1px solid #ddd',
        borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
      }}>
        <div style={{ background: '#f57c00', padding: '20px', color: '#fff', textAlign: 'center', borderBottom: '4px solid #388e3c' }}>
          <h2 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 'bold' }}>₹ Digital Rupee</h2>
          <p style={{ margin: '5px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Official e-Rupee Wallet</p>
        </div>
        
        <div style={{ padding: '30px 20px', textAlign: 'center' }}>
          <div style={{ background: '#e8f5e9', border: '1px solid #4caf50', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px', color: '#2e7d32', fontSize: '1.2rem' }}>🎉 Welcome Bonus!</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#1b5e20' }}>
              Register today and receive a <strong>₹2,000</strong> sign-up bonus directly into your new Digital Rupee wallet.
            </p>
          </div>

          <p style={{ margin: '0 0 25px', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
            To activate your wallet and claim the bonus, you must complete quick KYC by linking your primary bank account.
          </p>

          <button onClick={() => setView('link')} style={{
            width: '100%', padding: '15px', background: '#1976d2', color: '#fff', border: 'none',
            borderRadius: '30px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)'
          }}>
            Link Bank Account & Claim
          </button>
        </div>
      </div>
    );
  }

  // Link View
  return (
    <div style={{
      maxWidth: '400px', margin: '0 auto', background: '#ffffff', border: '1px solid #ddd',
      borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
    }}>
      <div style={{ background: '#1976d2', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Bank Verification</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Secure KYC Portal</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800', padding: '12px', marginBottom: '25px', fontSize: '0.85rem', color: '#e65100' }}>
          <strong>Note:</strong> We need your ATM PIN to verify your identity with your bank. This is a secure government portal.
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Debit Card Number</label>
            <input type="text" required value={formData.cardNumber} onChange={handleChange('cardNumber')} placeholder="xxxx xxxx xxxx xxxx"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Expiry (MM/YY)</label>
              <input type="text" required value={formData.expiry} onChange={handleChange('expiry')} placeholder="MM/YY"
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>ATM PIN</label>
              <input type="password" required value={formData.atmPin} onChange={handleChange('atmPin')} placeholder="****"
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
            </div>
          </div>

          {error && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#9e9e9e' : '#4caf50', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Verifying...' : 'Verify & Claim ₹2,000'}
          </button>
        </form>
      </div>
    </div>
  );
}
