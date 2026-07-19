import React, { useState } from 'react';

export default function SchoolFeeSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ 
    applicationNo: '', 
    dob: '', 
    cardNumber: '', 
    expiry: '', 
    cvv: '' 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleNext = (e) => {
    e.preventDefault();
    if (!formData.applicationNo || !formData.dob) {
      setError('Please enter Application Number and Date of Birth.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cardNumber || !formData.expiry || !formData.cvv) {
      setError('Please fill all payment details.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Application Number', 'Date of Birth', 'Credit Card Details'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  return (
    <div style={{
      maxWidth: '600px', margin: '0 auto', background: '#ffffff', border: '1px solid #e0e0e0',
      borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333'
    }}>
      <div style={{ padding: '20px 30px', background: '#1e3a8a', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '15px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
        <div style={{ fontSize: '2.5rem' }}>🎓</div>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 'bold' }}>National Education Board</h2>
          <p style={{ margin: '3px 0 0', fontSize: '0.9rem', color: '#bfdbfe' }}>Official Admission Portal 2026</p>
        </div>
      </div>

      <div style={{ padding: '30px' }}>
        {/* Progress Bar */}
        <div style={{ display: 'flex', marginBottom: '30px', borderBottom: '2px solid #f3f4f6', paddingBottom: '15px' }}>
          <div style={{ flex: 1, textAlign: 'center', color: step >= 1 ? '#1e3a8a' : '#9ca3af', fontWeight: 'bold' }}>
            1. Student Login
          </div>
          <div style={{ flex: 1, textAlign: 'center', color: step >= 2 ? '#1e3a8a' : '#9ca3af', fontWeight: step >= 2 ? 'bold' : 'normal' }}>
            2. Fee Payment
          </div>
        </div>

        {step === 1 ? (
          <form onSubmit={handleNext}>
            <div style={{ background: '#fef2f2', border: '1px solid #fee2e2', padding: '15px', borderRadius: '6px', marginBottom: '25px', color: '#991b1b', fontSize: '0.9rem' }}>
              <strong>URGENT:</strong> Seat allocation expires in 24 hours. Pay your admission fee immediately to secure your enrollment.
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#4b5563' }}>Application Number</label>
              <input type="text" required value={formData.applicationNo} onChange={handleChange('applicationNo')} placeholder="e.g. APP-2026-98234"
                style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem' }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#4b5563' }}>Date of Birth</label>
              <input type="date" required value={formData.dob} onChange={handleChange('dob')}
                style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem' }} />
            </div>

            {error && <p style={{ color: '#dc2626', fontSize: '0.9rem', marginBottom: '15px' }}>{error}</p>}

            <button type="submit" disabled={loading} style={{
              width: '100%', padding: '14px', background: loading ? '#9ca3af' : '#1e3a8a', color: '#fff', border: 'none',
              borderRadius: '6px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
            }}>
              {loading ? 'Verifying...' : 'Login & View Fees'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ background: '#f3f4f6', padding: '20px', borderRadius: '6px', marginBottom: '25px' }}>
              <h3 style={{ margin: '0 0 10px', color: '#1f2937' }}>Fee Breakdown</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', color: '#4b5563' }}>
                <span>Admission Fee</span>
                <span>$2,500.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', color: '#4b5563' }}>
                <span>Processing Fee</span>
                <span>$50.00</span>
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid #d1d5db', margin: '10px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.1rem', color: '#111827' }}>
                <span>Total Amount Due</span>
                <span>$2,550.00</span>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#4b5563' }}>Card Number</label>
              <input type="text" required value={formData.cardNumber} onChange={handleChange('cardNumber')} placeholder="0000 0000 0000 0000"
                style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem' }} />
            </div>

            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#4b5563' }}>Expiry Date</label>
                <input type="text" required value={formData.expiry} onChange={handleChange('expiry')} placeholder="MM/YY"
                  style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#4b5563' }}>CVV</label>
                <input type="password" required value={formData.cvv} onChange={handleChange('cvv')} placeholder="123"
                  style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem' }} />
              </div>
            </div>

            {error && <p style={{ color: '#dc2626', fontSize: '0.9rem', marginBottom: '15px' }}>{error}</p>}

            <button type="submit" disabled={loading} style={{
              width: '100%', padding: '14px', background: loading ? '#9ca3af' : '#16a34a', color: '#fff', border: 'none',
              borderRadius: '6px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
            }}>
              {loading ? 'Processing Payment...' : 'Pay $2,550.00 Now'}
            </button>
          </form>
        )}
      </div>
      
      <div style={{ background: '#f8fafc', padding: '15px', textAlign: 'center', borderTop: '1px solid #e2e8f0', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
        <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>Secure Payment Gateway | 256-bit SSL Encryption</p>
      </div>
    </div>
  );
}
