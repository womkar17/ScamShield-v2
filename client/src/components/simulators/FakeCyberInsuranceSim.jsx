import React, { useState } from 'react';

export default function FakeCyberInsuranceSim({ onComplete }) {
  const [view, setView] = useState('home'); // 'home' | 'checkout'
  const [formData, setFormData] = useState({ 
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cardNumber || !formData.cvv) {
      setError('Please provide card details to activate your policy.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Credit Card Number', 'Card Expiry', 'CVV'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'home') {
    return (
      <div style={{
        maxWidth: '550px', margin: '0 auto', background: '#fff', border: '1px solid #ccc',
        borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ background: '#004d40', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', color: '#fff' }}>
          <div style={{ fontSize: '2.5rem' }}>🛡️</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>CyberShield Protect+</h2>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#b2dfdb' }}>100% Guaranteed Anti-Scam Insurance</p>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ padding: '30px 20px', textAlign: 'center' }}>
          <div style={{ background: '#e0f2f1', border: '1px solid #b2dfdb', padding: '20px', borderRadius: '8px', marginBottom: '25px' }}>
            <h3 style={{ margin: '0 0 10px', color: '#00695c', fontSize: '1.3rem' }}>Never Lose Money Online Again</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#004d40' }}>
              For just <strong>₹999/year</strong>, we guarantee a 100% refund if you are a victim of phishing, UPI fraud, or credit card scams. Instant coverage!
            </p>
          </div>

          <div style={{ textAlign: 'left', marginBottom: '25px' }}>
            <h4 style={{ margin: '0 0 10px', color: '#333' }}>Coverage Includes:</h4>
            <ul style={{ paddingLeft: '20px', margin: 0, color: '#555', lineHeight: '1.6' }}>
              <li>✅ Immediate Reversal of UPI Scams</li>
              <li>✅ Stolen Credit Card Protection</li>
              <li>✅ Deepfake & Identity Theft Cover</li>
            </ul>
          </div>

          <button onClick={() => setView('checkout')} style={{
            width: '100%', padding: '15px', background: '#ff6f00', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(255, 111, 0, 0.3)'
          }}>
            Get Protected Now (₹999)
          </button>
        </div>
      </div>
    );
  }

  // Checkout View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#ffffff', border: '1px solid #ccc',
      borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
    }}>
      <div style={{ background: '#004d40', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Secure Checkout</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#b2dfdb' }}>CyberShield Protect+ Premium</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800', padding: '15px', marginBottom: '25px', fontSize: '0.9rem', color: '#e65100' }}>
          <strong>Amount Due: ₹999.00</strong>
          <br/><br/>
          Pay your annual premium below. Your protection activates instantly upon payment.
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Card Number</label>
            <input type="text" required value={formData.cardNumber} onChange={handleChange('cardNumber')} placeholder="XXXX XXXX XXXX XXXX"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Expiry (MM/YY)</label>
              <input type="text" required value={formData.expiry} onChange={handleChange('expiry')} placeholder="MM/YY"
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>CVV</label>
              <input type="password" required value={formData.cvv} onChange={handleChange('cvv')} placeholder="***"
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
            </div>
          </div>

          {error && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#9e9e9e' : '#4caf50', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Processing...' : 'Pay ₹999 Securely'}
          </button>
        </form>
      </div>
    </div>
  );
}
