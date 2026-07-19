import React, { useState } from 'react';

export default function PlayStationSim({ onComplete }) {
  const [view, setView] = useState('generator'); // 'generator' | 'login'
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cardAmount, setCardAmount] = useState('$50');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleGenerateClick = (e) => {
    e.preventDefault();
    setView('login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!formData.email.trim() || !formData.password.trim()) {
      setError('Please fill in both fields.');
      return;
    }
    setLoading(true);
    const exposedArray = ['PSN Sign-In ID (Email)', 'PSN Password'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'generator') {
    return (
      <div style={{
        maxWidth: '500px', margin: '0 auto', background: '#ffffff', border: '1px solid #e1e1e1',
        borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"SST W01 Roman", "Helvetica Neue", Helvetica, Arial, sans-serif', color: '#1f1f1f', overflow: 'hidden'
      }}>
        <div style={{ padding: '25px', textAlign: 'center', background: '#00439c', color: '#ffffff' }}>
          <h2 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 'bold' }}>
            PSN GIFT CARD GENERATOR
          </h2>
          <p style={{ fontSize: '0.9rem', margin: '5px 0 0', opacity: 0.8 }}>Get free PlayStation Store codes directly to your account.</p>
        </div>

        <div style={{ padding: '30px' }}>
          <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <p style={{ margin: '0 0 15px', color: '#333', fontSize: '0.95rem', fontWeight: 'bold', textAlign: 'center' }}>Select Card Value:</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
                {['$10', '$25', '$50', '$100'].map(amount => (
                    <button 
                        key={amount}
                        onClick={() => setCardAmount(amount)}
                        style={{
                            flex: 1, padding: '12px 5px', background: cardAmount === amount ? '#00439c' : '#ffffff',
                            color: cardAmount === amount ? '#fff' : '#00439c', border: `2px solid ${cardAmount === amount ? '#00439c' : '#00439c'}`, 
                            borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold',
                            transition: 'all 0.2s'
                        }}
                    >
                        {amount}
                    </button>
                ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', background: '#e8f5e9', border: '1px solid #c8e6c9', borderRadius: '4px', padding: '12px', marginBottom: '25px' }}>
            <p style={{ margin: 0, color: '#2e7d32', fontSize: '0.9rem', fontWeight: 'bold' }}>● Status: Generator is Online</p>
            <p style={{ margin: '5px 0 0', color: '#555', fontSize: '0.8rem' }}>Success rate today: 99.4%</p>
          </div>

          <button onClick={handleGenerateClick} style={{
            width: '100%', padding: '16px', background: '#00439c', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            transition: 'background 0.2s', boxShadow: '0 4px 10px rgba(0, 67, 156, 0.3)'
          }}>
            Generate {cardAmount} Gift Card
          </button>
        </div>
      </div>
    );
  }

  // Phishing Login View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#f5f5f5', overflow: 'hidden',
      fontFamily: '"SST W01 Roman", "Helvetica Neue", Helvetica, Arial, sans-serif', color: '#1f1f1f'
    }}>
      <div style={{ background: '#00439c', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '1.5rem', margin: 0, letterSpacing: '2px', fontWeight: 'bold' }}>SONY</h1>
      </div>
      
      <div style={{ padding: '40px', background: '#ffffff', minHeight: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ margin: '0 0 10px', fontSize: '1.4rem', color: '#1f1f1f', fontWeight: 'normal' }}>Sign In to PlayStation Network</h2>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#757575' }}>
            Link your account to deposit your <strong style={{color: '#00439c'}}>{cardAmount}</strong> reward.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input type="email" required value={formData.email} onChange={handleChange('email')} placeholder="Sign-In ID (Email Address)"
              style={{ width: '100%', padding: '14px', border: '1px solid #757575', boxSizing: 'border-box', fontSize: '1rem', color: '#1f1f1f', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <input type="password" required value={formData.password} onChange={handleChange('password')} placeholder="Password"
              style={{ width: '100%', padding: '14px', border: '1px solid #757575', boxSizing: 'border-box', fontSize: '1rem', color: '#1f1f1f', outline: 'none' }} />
          </div>

          {error && <p style={{ color: '#d32f2f', fontSize: '0.85rem', margin: '0 0 15px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '14px', background: loading ? '#9e9e9e' : '#00439c', color: '#fff', border: 'none',
            fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s', fontWeight: 'bold'
          }}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <a href="#" style={{ color: '#00439c', fontSize: '0.9rem', textDecoration: 'none' }}>Trouble Signing In?</a>
        </div>
      </div>
    </div>
  );
}
