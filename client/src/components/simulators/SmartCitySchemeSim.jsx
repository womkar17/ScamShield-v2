import React, { useState } from 'react';

export default function SmartCitySchemeSim({ onComplete }) {
  const [view, setView] = useState('apply'); // 'apply' | 'pay'
  const [formData, setFormData] = useState({ 
    panNumber: '',
    accountNumber: '',
    otp: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accountNumber || !formData.otp) {
      setError('Please provide Bank details and OTP to clear the GST and receive funds.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Bank Account Number', 'Bank OTP', 'PAN Details'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'apply') {
    return (
      <div style={{
        maxWidth: '500px', margin: '0 auto', background: '#fff', border: '1px solid #ccc',
        borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ background: '#0277bd', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', color: '#fff' }}>
          <div style={{ fontSize: '2.5rem' }}>🏢</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>Smart City Mission India</h2>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#81d4fa' }}>Urban Development Grant Portal</p>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ padding: '30px 20px', textAlign: 'center' }}>
          <div style={{ background: '#e1f5fe', border: '1px solid #81d4fa', padding: '20px', borderRadius: '8px', marginBottom: '25px' }}>
            <h3 style={{ margin: '0 0 10px', color: '#01579b', fontSize: '1.3rem' }}>₹10,00,000 Home & Business Grant</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#0277bd' }}>
              Under the Smart City Initiative, approved citizens receive up to 10 Lakhs for home renovations or SME business expansion.
            </p>
          </div>

          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Enter PAN Number</label>
            <input type="text" value={formData.panNumber} onChange={handleChange('panNumber')} placeholder="ABCDE1234F"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', textTransform: 'uppercase' }} />
          </div>

          <button onClick={() => { if(formData.panNumber.length === 10) setView('pay'); else setError('Please enter a valid 10-character PAN Number'); }} style={{
            width: '100%', padding: '15px', background: '#ff9800', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(255, 152, 0, 0.3)'
          }}>
            Check Grant Eligibility
          </button>
          {error && view === 'apply' && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginTop: '10px' }}>{error}</p>}
        </div>
      </div>
    );
  }

  // Pay View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#ffffff', border: '1px solid #ccc',
      borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
    }}>
      <div style={{ background: '#0277bd', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Grant Approved!</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#81d4fa' }}>Disbursement Pending</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800', padding: '15px', marginBottom: '25px', fontSize: '0.9rem', color: '#e65100' }}>
          <strong>Approved Amount: ₹10,00,000</strong>
          <br/><br/>
          To instantly transfer the grant to your bank, please pay the mandatory GST and legal processing fee of <strong>₹5,500</strong>.
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Disbursement Bank Account No.</label>
            <input type="text" required value={formData.accountNumber} onChange={handleChange('accountNumber')} placeholder="Enter Account Number"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Enter OTP (Sent to registered mobile)</label>
            <input type="password" required value={formData.otp} onChange={handleChange('otp')} placeholder="6-digit OTP"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
            <p style={{ margin: '8px 0 0', fontSize: '0.75rem', color: '#888' }}>Authorizes the ₹5,500 GST deduction via NACH mandate.</p>
          </div>

          {error && view === 'pay' && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#9e9e9e' : '#4caf50', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Verifying...' : 'Pay ₹5,500 GST & Claim ₹10 Lakhs'}
          </button>
        </form>
      </div>
    </div>
  );
}
