import React, { useState } from 'react';

export default function OnlineTuitionSim({ onComplete }) {
  const [view, setView] = useState('landing'); // 'landing' | 'payment'
  const [formData, setFormData] = useState({ 
    studentName: '',
    email: '',
    cardNumber: '', 
    expiry: '', 
    cvv: '' 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cardNumber || !formData.expiry || !formData.cvv) {
      setError('Please fill all payment details.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Student Name', 'Email', 'Credit Card Details'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'landing') {
    return (
      <div style={{
        maxWidth: '500px', margin: '0 auto', background: '#fff', border: '1px solid #ddd',
        borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
      }}>
        <div style={{ background: '#4a148c', padding: '20px', color: '#fff', textAlign: 'center', position: 'relative' }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '800' }}>🎓 EliteTutors Pro</h2>
          <p style={{ margin: '5px 0 0', fontSize: '1rem', opacity: 0.9 }}>Guaranteed A+ or your money back!</p>
        </div>
        
        <div style={{ padding: '30px 20px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 15px', color: '#4a148c' }}>Unlock Your Child's Potential Today</h3>
          <p style={{ margin: '0 0 20px', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
            Get 1-on-1 coaching from former Ivy League professors. Limited slots available for the upcoming semester!
          </p>

          <div style={{ background: '#f3e5f5', padding: '15px', borderRadius: '8px', marginBottom: '25px', textAlign: 'left' }}>
            <p style={{ margin: '0 0 10px', fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>
              "My son went from a C- to an A+ in just two weeks! Best investment ever." <br/>
              <strong>- Sarah T. (Verified Parent) ⭐⭐⭐⭐⭐</strong>
            </p>
          </div>

          <div style={{ background: '#fff3e0', border: '1px dashed #ff9800', padding: '15px', borderRadius: '8px', marginBottom: '25px' }}>
            <h4 style={{ margin: '0 0 5px', color: '#e65100' }}>Special Offer</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Book a 1-hour trial session for just <strong>$1.00</strong>!</p>
            <p style={{ margin: '5px 0 0', fontSize: '0.75rem', color: '#888' }}>(By continuing, you agree to our hidden $199/month subscription terms)</p>
          </div>

          <button onClick={() => setView('payment')} style={{
            width: '100%', padding: '15px', background: '#e91e63', color: '#fff', border: 'none',
            borderRadius: '30px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(233, 30, 99, 0.3)'
          }}>
            Book $1.00 Trial Session Now
          </button>
        </div>
      </div>
    );
  }

  // Payment View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#ffffff', border: '1px solid #ddd',
      borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
    }}>
      <div style={{ background: '#4a148c', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.4rem' }}>Secure Checkout</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>1-Hour Trial Session</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Student Name</label>
            <input type="text" required value={formData.studentName} onChange={handleChange('studentName')} placeholder="John Doe"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Parent Email</label>
            <input type="email" required value={formData.email} onChange={handleChange('email')} placeholder="parent@example.com"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Credit Card Number</label>
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
            width: '100%', padding: '15px', background: loading ? '#9e9e9e' : '#e91e63', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Processing...' : 'Pay $1.00 & Book'}
          </button>
        </form>
      </div>
    </div>
  );
}
