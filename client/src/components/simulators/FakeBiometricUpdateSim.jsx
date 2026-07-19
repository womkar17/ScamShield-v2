import React, { useState } from 'react';

export default function FakeBiometricUpdateSim({ onComplete }) {
  const [view, setView] = useState('sms'); // 'sms' | 'portal'
  const [formData, setFormData] = useState({ 
    aadhaar: '',
    cardNumber: '',
    cvv: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aadhaar || !formData.cardNumber) {
      setError('Please provide all details to book your appointment.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Aadhaar Number', 'Credit Card Number', 'CVV'];
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
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>TX-UIDAI</h3>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#888' }}>Text Message • Today</p>
          </div>
        </div>
        
        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: '#ffebee', padding: '15px', borderRadius: '15px', borderBottomLeftRadius: '2px', alignSelf: 'flex-start', maxWidth: '85%' }}>
            <p style={{ margin: '0 0 10px', fontSize: '0.95rem', lineHeight: '1.4' }}>
              Dear Aadhaar Holder, your biometric data is 10 years old and will be deactivated tonight.
            </p>
            <p style={{ margin: '0 0 10px', fontSize: '0.95rem', lineHeight: '1.4' }}>
              To avoid PAN & Bank deactivation, book a home biometric update (Fee: Rs.50) via link below:
            </p>
            <a href="#" onClick={(e) => { e.preventDefault(); setView('portal'); }} style={{ color: '#0277bd', fontWeight: 'bold', textDecoration: 'underline' }}>
              http://uidai-home-biometric.in/update
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Portal View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#ffffff', border: '1px solid #ddd',
      borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
    }}>
      <div style={{ background: '#1a237e', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Home Biometric Update</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Doorstep Service Booking</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: '#f5f5f5', borderLeft: '4px solid #1a237e', padding: '12px', marginBottom: '25px', fontSize: '0.9rem', color: '#333' }}>
          <strong>Service Fee: ₹50.00</strong>
          <br/>Pay the booking fee now. An executive will visit your address within 24 hours.
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Aadhaar Number</label>
            <input type="text" required value={formData.aadhaar} onChange={handleChange('aadhaar')} placeholder="12-digit Aadhaar"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Credit/Debit Card Number</label>
            <input type="text" required value={formData.cardNumber} onChange={handleChange('cardNumber')} placeholder="XXXX XXXX XXXX XXXX"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>CVV / PIN</label>
            <input type="password" required value={formData.cvv} onChange={handleChange('cvv')} placeholder="***"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          {error && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#9e9e9e' : '#4caf50', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Processing...' : 'Pay ₹50 & Book Appointment'}
          </button>
        </form>
      </div>
    </div>
  );
}
