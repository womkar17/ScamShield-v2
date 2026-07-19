import React, { useState } from 'react';

export default function FakeCyberComplaintSim({ onComplete }) {
  const [view, setView] = useState('home'); // 'home' | 'report'
  const [formData, setFormData] = useState({ 
    accountNumber: '',
    otp: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accountNumber || !formData.otp) {
      setError('Please provide Bank details and OTP to authenticate your complaint.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Bank Account Number', 'Bank OTP'];
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
        <div style={{ background: '#0d47a1', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', color: '#fff' }}>
          <div style={{ fontSize: '2.5rem' }}>🛡️</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>National Cyber Crime Investigation</h2>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#90caf9' }}>Citizen Fraud Recovery Portal</p>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ padding: '30px 20px', textAlign: 'center' }}>
          <div style={{ background: '#e3f2fd', border: '1px solid #90caf9', padding: '20px', borderRadius: '8px', marginBottom: '25px' }}>
            <h3 style={{ margin: '0 0 10px', color: '#1565c0', fontSize: '1.3rem' }}>Lost Money in a Scam?</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#0d47a1' }}>
              Our Cyber Recovery Unit has successfully traced your lost funds. Register an FIR to initiate auto-reversal to your bank account.
            </p>
          </div>

          <button onClick={() => setView('report')} style={{
            width: '100%', padding: '15px', background: '#e53935', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(229, 57, 53, 0.3)'
          }}>
            File E-FIR & Recover Funds
          </button>
          <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginTop: '15px', fontWeight: 'bold' }}>Important: Government E-FIR processing fee of ₹100 applies.</p>
        </div>
      </div>
    );
  }

  // Report View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#ffffff', border: '1px solid #ccc',
      borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
    }}>
      <div style={{ background: '#0d47a1', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Fund Reversal Form</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#90caf9' }}>Step 1: Account Verification</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800', padding: '15px', marginBottom: '25px', fontSize: '0.9rem', color: '#e65100' }}>
          <strong>Fee: ₹100 (E-Challan)</strong>
          <br/><br/>
          Provide your bank account details and authorize the ₹100 registration fee. Once verified, the recovered funds will be deposited to this account.
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Disbursement Bank Account No.</label>
            <input type="text" required value={formData.accountNumber} onChange={handleChange('accountNumber')} placeholder="Where we should send recovered money"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Bank OTP (Sent to mobile)</label>
            <input type="password" required value={formData.otp} onChange={handleChange('otp')} placeholder="Enter 6-digit OTP"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
            <p style={{ margin: '8px 0 0', fontSize: '0.75rem', color: '#888' }}>This authorizes the ₹100 registration fee deduction.</p>
          </div>

          {error && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#9e9e9e' : '#4caf50', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Authenticating...' : 'Verify OTP & Submit E-FIR'}
          </button>
        </form>
      </div>
    </div>
  );
}
