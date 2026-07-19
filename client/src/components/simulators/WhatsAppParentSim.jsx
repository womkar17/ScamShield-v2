import React, { useState } from 'react';

export default function WhatsAppParentSim({ onComplete }) {
  const [view, setView] = useState('chat'); // 'chat' | 'payment'
  const [formData, setFormData] = useState({ 
    cardNumber: '', 
    expiry: '', 
    cvv: '' 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleLinkClick = (e) => {
    e.preventDefault();
    setView('payment');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cardNumber || !formData.expiry || !formData.cvv) {
      setError('Please fill all payment details.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Credit Card Details'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'chat') {
    return (
      <div style={{
        maxWidth: '400px', margin: '0 auto', background: '#e5ddd5', border: '1px solid #ccc',
        borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', fontFamily: 'Helvetica, Arial, sans-serif', overflow: 'hidden'
      }}>
        {/* WhatsApp Header */}
        <div style={{ background: '#075e54', padding: '10px 15px', color: '#fff', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#075e54' }}>
            🎓
          </div>
          <div>
            <h3 style={{ margin: '0 0 2px', fontSize: '1.1rem' }}>Class 10 Parents (Official)</h3>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#dcf8c6' }}>Principal Smith, Mrs. Davis, You, +42 others</p>
          </div>
        </div>

        {/* Chat Body */}
        <div style={{ padding: '20px 15px', minHeight: '350px', background: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: 'cover' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <span style={{ background: '#e1f5fe', padding: '5px 10px', borderRadius: '10px', fontSize: '0.75rem', color: '#455a64' }}>TODAY</span>
          </div>

          <div style={{ background: '#fff', padding: '10px', borderRadius: '8px', marginBottom: '15px', maxWidth: '85%', position: 'relative', boxShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: '0 0 5px', fontSize: '0.85rem', fontWeight: 'bold', color: '#e53935' }}>+1 (555) 019-8372 ~ Principal Smith</p>
            <p style={{ margin: '0 0 8px', fontSize: '0.95rem', color: '#111', lineHeight: '1.4' }}>
              Dear Parents, the deadline for the upcoming Science Fair excursion fee is TODAY. Due to a system error, we are collecting it via an emergency portal.
            </p>
            <p style={{ margin: '0 0 8px', fontSize: '0.95rem', color: '#111', lineHeight: '1.4' }}>
              Please pay $45.00 immediately to ensure your child's participation. Late fees apply after 5 PM.
            </p>
            <a href="#" onClick={handleLinkClick} style={{ color: '#0277bd', textDecoration: 'underline', fontSize: '0.95rem', wordBreak: 'break-all' }}>
              https://school-emergency-fees.net/pay/10th
            </a>
            <div style={{ textAlign: 'right', marginTop: '5px' }}>
              <span style={{ fontSize: '0.7rem', color: '#999' }}>11:42 AM</span>
            </div>
          </div>

          <div style={{ background: '#dcf8c6', padding: '10px', borderRadius: '8px', marginBottom: '15px', maxWidth: '85%', marginLeft: 'auto', position: 'relative', boxShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: '0 0 5px', fontSize: '0.95rem', color: '#111' }}>
              Are you sure? We usually pay on the official portal.
            </p>
            <div style={{ textAlign: 'right', marginTop: '5px' }}>
              <span style={{ fontSize: '0.7rem', color: '#999' }}>11:45 AM ✓✓</span>
            </div>
          </div>

          <div style={{ background: '#fff', padding: '10px', borderRadius: '8px', marginBottom: '15px', maxWidth: '85%', position: 'relative', boxShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: '0 0 5px', fontSize: '0.85rem', fontWeight: 'bold', color: '#e53935' }}>+1 (555) 019-8372 ~ Principal Smith</p>
            <p style={{ margin: '0 0 5px', fontSize: '0.95rem', color: '#111', lineHeight: '1.4' }}>
              Yes, the main portal is down. This is the official backup. Please hurry.
            </p>
            <div style={{ textAlign: 'right', marginTop: '5px' }}>
              <span style={{ fontSize: '0.7rem', color: '#999' }}>11:46 AM</span>
            </div>
          </div>
        </div>

        {/* Fake Input */}
        <div style={{ background: '#f0f0f0', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ flex: 1, background: '#fff', padding: '10px 15px', borderRadius: '20px', color: '#999', fontSize: '0.9rem' }}>
            Type a message
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#128c7e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            ➤
          </div>
        </div>
      </div>
    );
  }

  // Payment View
  return (
    <div style={{
      maxWidth: '400px', margin: '0 auto', background: '#ffffff', border: '1px solid #ccc',
      borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
    }}>
      <div style={{ background: '#1976d2', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Emergency Payment Portal</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Science Fair Excursion Fee</p>
      </div>
      
      <div style={{ padding: '30px' }}>
        <div style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800', padding: '12px', marginBottom: '25px', fontSize: '0.9rem', color: '#e65100' }}>
          <strong>Amount Due:</strong> $45.00
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Card Number</label>
            <input type="text" required value={formData.cardNumber} onChange={handleChange('cardNumber')} placeholder="0000 0000 0000 0000"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Expiry (MM/YY)</label>
              <input type="text" required value={formData.expiry} onChange={handleChange('expiry')} placeholder="MM/YY"
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>CVV</label>
              <input type="password" required value={formData.cvv} onChange={handleChange('cvv')} placeholder="123"
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
            </div>
          </div>

          {error && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '14px', background: loading ? '#9e9e9e' : '#1976d2', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Processing...' : 'Pay $45.00'}
          </button>
        </form>
      </div>
    </div>
  );
}
