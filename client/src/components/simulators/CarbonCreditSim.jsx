import React, { useState } from 'react';

export default function CarbonCreditSim({ onComplete }) {
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'invest'
  const [formData, setFormData] = useState({ 
    bankName: 'State Bank of India',
    customerId: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.customerId || !formData.password) {
      setError('Please provide Net Banking credentials to fund your account.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Net Banking User ID', 'Net Banking Password', 'Full Bank Balance'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'dashboard') {
    return (
      <div style={{
        maxWidth: '550px', margin: '0 auto', background: '#f0fdf4', border: '1px solid #bbf7d0',
        borderRadius: '16px', boxShadow: '0 8px 32px rgba(34, 197, 94, 0.15)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#166534', overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ background: '#166534', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff' }}>
          <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🌱</span> EcoCarbon Yields
          </h2>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
            Govt. Certified
          </span>
        </div>

        {/* Hero Section */}
        <div style={{ padding: '30px 25px', textAlign: 'center' }}>
          <h1 style={{ margin: '0 0 10px', color: '#14532d', fontSize: '1.8rem' }}>Invest in the Green Future</h1>
          <p style={{ margin: '0 0 25px', fontSize: '1rem', lineHeight: '1.6', color: '#15803d' }}>
            New regulations mandate corporations to buy Carbon Credits. <br/> Invest in our exclusive pre-market blocks for a <strong>guaranteed 45% annual return</strong>.
          </p>

          <div style={{ background: '#fff', border: '1px solid #dcfce7', borderRadius: '12px', padding: '20px', marginBottom: '25px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <p style={{ margin: '0 0 10px', fontSize: '0.9rem', color: '#166534', fontWeight: 'bold' }}>Live Market Price (1 Block = 100 Credits)</p>
            <h3 style={{ margin: '0 0 5px', fontSize: '2.5rem', color: '#16a34a' }}>₹50,000</h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
              <span style={{ fontSize: '1.2rem' }}>📈</span> +12.4% this week
            </p>
          </div>

          <div style={{ background: '#fef08a', padding: '15px', borderRadius: '8px', marginBottom: '25px', border: '1px solid #facc15' }}>
            <p style={{ margin: 0, color: '#854d0e', fontSize: '0.9rem', fontWeight: 'bold' }}>
              ⚠️ Only 4 Premium Blocks left before the institutional buy-out at midnight!
            </p>
          </div>

          <button onClick={() => setView('invest')} style={{
            width: '100%', padding: '16px', background: '#16a34a', color: '#fff', border: 'none',
            borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(22, 163, 74, 0.4)', transition: 'all 0.2s'
          }}>
            Secure Your Block Now
          </button>
        </div>
      </div>
    );
  }

  // Invest View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#ffffff', border: '1px solid #e5e7eb',
      borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#374151', overflow: 'hidden'
    }}>
      <div style={{ background: '#166534', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Fund Your Green Portfolio</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#86efac' }}>Secure Net Banking Gateway</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', padding: '15px', borderRadius: '8px', marginBottom: '25px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 5px', fontSize: '0.9rem', color: '#6b7280' }}>Total Investment Amount</p>
          <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#111827' }}>₹50,000</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#4b5563', fontSize: '0.9rem' }}>Select Bank</label>
            <select value={formData.bankName} onChange={handleChange('bankName')}
              style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem', background: '#f9fafb', outline: 'none' }}>
              <option value="State Bank of India">State Bank of India</option>
              <option value="HDFC Bank">HDFC Bank</option>
              <option value="ICICI Bank">ICICI Bank</option>
              <option value="Axis Bank">Axis Bank</option>
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#4b5563', fontSize: '0.9rem' }}>Net Banking Customer ID</label>
            <input type="text" required value={formData.customerId} onChange={handleChange('customerId')} placeholder="Customer ID or Username"
              style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#4b5563', fontSize: '0.9rem' }}>Net Banking Password</label>
            <input type="password" required value={formData.password} onChange={handleChange('password')} placeholder="Enter Password"
              style={{ width: '100%', padding: '12px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
            <p style={{ margin: '8px 0 0', fontSize: '0.75rem', color: '#9ca3af' }}>We use 256-bit encryption. Your credentials are safe.</p>
          </div>

          {error && <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '16px', background: loading ? '#9ca3af' : '#16a34a', color: '#fff', border: 'none',
            borderRadius: '6px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s'
          }}>
            {loading ? 'Authenticating...' : 'Confirm & Transfer ₹50,000'}
          </button>
        </form>
      </div>
    </div>
  );
}
