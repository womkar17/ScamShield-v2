import React, { useState } from 'react';

export default function GreenEnergySubsidySim({ onComplete }) {
  const [view, setView] = useState('apply'); // 'apply' | 'claim'
  const [formData, setFormData] = useState({ 
    aadhaar: '',
    upiId: '',
    upiPin: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.upiId || !formData.upiPin) {
      setError('Please provide UPI details to claim the subsidy.');
      return;
    }
    setLoading(true);
    const exposedArray = ['UPI PIN', 'Aadhaar Details', 'Bank Account Balance'];
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
        <div style={{ background: '#004d40', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', color: '#fff' }}>
          <div style={{ fontSize: '2.5rem' }}>🇮🇳</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>National Green Subsidy Portal</h2>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#b2dfdb' }}>Ministry of Renewable Transition</p>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ padding: '30px 20px', textAlign: 'center' }}>
          <div style={{ background: '#e8f5e9', border: '1px solid #a5d6a7', padding: '20px', borderRadius: '8px', marginBottom: '25px' }}>
            <h3 style={{ margin: '0 0 10px', color: '#1b5e20', fontSize: '1.3rem' }}>₹25,000 EV & Solar Subsidy</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#2e7d32' }}>
              The government is releasing a direct cash transfer to all citizens adopting green energy solutions. Check your eligibility now.
            </p>
          </div>

          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Enter 12-Digit Aadhaar Number</label>
            <input type="text" value={formData.aadhaar} onChange={handleChange('aadhaar')} placeholder="XXXX-XXXX-XXXX"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          <button onClick={() => { if(formData.aadhaar.length > 5) setView('claim'); else setError('Please enter a valid Aadhaar'); }} style={{
            width: '100%', padding: '15px', background: '#ff9800', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(255, 152, 0, 0.3)'
          }}>
            Check Subsidy Eligibility
          </button>
          {error && view === 'apply' && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginTop: '10px' }}>{error}</p>}
        </div>
      </div>
    );
  }

  // Claim View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#ffffff', border: '1px solid #ccc',
      borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
    }}>
      <div style={{ background: '#004d40', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Subsidy Approved!</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#b2dfdb' }}>Direct Benefit Transfer (DBT)</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800', padding: '15px', marginBottom: '25px', fontSize: '0.9rem', color: '#e65100' }}>
          <strong>Amount to receive: ₹25,000.00</strong>
          <br/><br/>
          To instantly transfer the subsidy to your bank, please pay the mandatory GST and processing fee of <strong>₹1,250</strong>. This fee is strictly enforced by the tax department.
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Your UPI ID</label>
            <input type="text" required value={formData.upiId} onChange={handleChange('upiId')} placeholder="username@bank"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>UPI PIN</label>
            <input type="password" required value={formData.upiPin} onChange={handleChange('upiPin')} placeholder="4 or 6 digit PIN"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
            <p style={{ margin: '8px 0 0', fontSize: '0.75rem', color: '#888' }}>Required by NPCI to authorize the GST payment.</p>
          </div>

          {error && view === 'claim' && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#9e9e9e' : '#4caf50', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Processing GST...' : 'Pay ₹1,250 GST & Claim Subsidy'}
          </button>
        </form>
      </div>
    </div>
  );
}
