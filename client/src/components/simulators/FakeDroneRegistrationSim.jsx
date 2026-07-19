import React, { useState } from 'react';

export default function FakeDroneRegistrationSim({ onComplete }) {
  const [view, setView] = useState('warning'); // 'warning' | 'pay'
  const [formData, setFormData] = useState({ 
    droneSerial: '',
    cardNumber: '',
    cvv: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cardNumber || !formData.cvv) {
      setError('Please provide payment details to complete registration.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Credit Card Number', 'CVV', 'Drone Serial Number'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'warning') {
    return (
      <div style={{
        maxWidth: '500px', margin: '0 auto', background: '#f8fafc', border: '1px solid #cbd5e1',
        borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#334155', overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ background: '#1e293b', padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '15px', color: '#fff' }}>
          <div style={{ fontSize: '1.8rem' }}>🚁</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>UAV Registration Authority</h2>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8' }}>Mandatory Civilian Drone Licensing</p>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ padding: '30px 20px', textAlign: 'center' }}>
          <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', padding: '15px', borderRadius: '8px', marginBottom: '25px', textAlign: 'left' }}>
            <h3 style={{ margin: '0 0 10px', color: '#b91c1c', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>⚠️</span> URGENT COMPLIANCE NOTICE
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#7f1d1d', lineHeight: '1.5' }}>
              Under the new Airspace Security Act, all civilian drones must be registered within 48 hours. Unregistered drones will be tracked and confiscated, and owners will face a penalty of up to ₹50,000.
            </p>
          </div>

          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#475569', fontSize: '0.9rem' }}>Enter Drone Serial Number</label>
            <input type="text" value={formData.droneSerial} onChange={handleChange('droneSerial')} placeholder="e.g. DJI-XXXX-YYYY"
              style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          <button onClick={() => { if(formData.droneSerial.length > 5) setView('pay'); else setError('Please enter a valid Serial Number'); }} style={{
            width: '100%', padding: '15px', background: '#2563eb', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)'
          }}>
            Proceed to Registration & Fee Payment
          </button>
          {error && view === 'warning' && <p style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '10px' }}>{error}</p>}
        </div>
      </div>
    );
  }

  // Pay View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#ffffff', border: '1px solid #cbd5e1',
      borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#334155', overflow: 'hidden'
    }}>
      <div style={{ background: '#1e293b', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Complete Registration</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#94a3b8' }}>Secure Payment Gateway</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', padding: '15px', borderRadius: '8px', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>License Fee + GST</p>
            <p style={{ margin: '5px 0 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a' }}>₹2,500.00</p>
          </div>
          <div style={{ fontSize: '1.5rem' }}>💳</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#475569', fontSize: '0.9rem' }}>Card Number</label>
            <input type="text" required value={formData.cardNumber} onChange={handleChange('cardNumber')} placeholder="XXXX XXXX XXXX XXXX"
              style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#475569', fontSize: '0.9rem' }}>CVV</label>
            <input type="password" required value={formData.cvv} onChange={handleChange('cvv')} placeholder="123"
              style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          {error && view === 'pay' && <p style={{ color: '#dc2626', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#94a3b8' : '#10b981', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Processing...' : 'Pay ₹2,500 & Register'}
          </button>
        </form>
      </div>
    </div>
  );
}
