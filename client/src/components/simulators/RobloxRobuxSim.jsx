import React, { useState } from 'react';

export default function RobloxRobuxSim({ onComplete }) {
  const [view, setView] = useState('generator'); // 'generator' | 'login'
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [robuxAmount, setRobuxAmount] = useState('10,000');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleGenerateClick = (e) => {
    e.preventDefault();
    setView('login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Please fill in both fields.');
      return;
    }
    setLoading(true);
    // Simulating the "hacking" or "connecting" phase
    const exposedArray = ['Roblox Username', 'Roblox Password'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'generator') {
    return (
      <div style={{
        maxWidth: '500px', margin: '0 auto', background: '#121212', border: '1px solid #333',
        borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.5)', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', color: '#fff'
      }}>
        <div style={{ padding: '20px', textAlign: 'center', background: 'linear-gradient(135deg, #2b2b2b, #1a1a1a)', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', borderBottom: '2px solid #00a2ff' }}>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.8rem', fontWeight: 'bold' }}>
            ROBUX GENERATOR V2.4
          </h2>
          <p style={{ color: '#00a2ff', fontSize: '0.9rem', margin: '5px 0 0' }}>100% Free & Undetected</p>
        </div>

        <div style={{ padding: '30px' }}>
          <div style={{ background: '#1e1e1e', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #333' }}>
            <p style={{ margin: '0 0 10px', color: '#aaa', fontSize: '0.9rem' }}>Select Robux Amount:</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                {['1,000', '5,000', '10,000'].map(amount => (
                    <button 
                        key={amount}
                        onClick={() => setRobuxAmount(amount)}
                        style={{
                            flex: 1, padding: '10px', background: robuxAmount === amount ? '#00a2ff' : '#2a2a2a',
                            color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold',
                            transition: 'background 0.2s'
                        }}
                    >
                        {amount} R$
                    </button>
                ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', background: '#0a2e0a', border: '1px solid #1a5e1a', borderRadius: '8px', padding: '12px', marginBottom: '25px' }}>
            <p style={{ margin: 0, color: '#4caf50', fontSize: '0.85rem' }}>✅ Status: Online & Working</p>
            <p style={{ margin: '5px 0 0', color: '#aaa', fontSize: '0.75rem' }}>Last updated: Just now</p>
          </div>

          <button onClick={handleGenerateClick} style={{
            width: '100%', padding: '15px', background: 'linear-gradient(90deg, #00a2ff, #0077ff)', color: '#fff', border: 'none',
            borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 162, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '1px'
          }}>
            Generate {robuxAmount} R$
          </button>
        </div>
      </div>
    );
  }

  // Phishing Login View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#fff', borderRadius: '8px', overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#393b3d'
    }}>
      <div style={{ padding: '30px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{ margin: '0 0 10px', fontSize: '1.5rem', color: '#191b1d', fontWeight: '800' }}>Account Verification</h2>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#656667' }}>
            Please verify your Roblox account to deposit <strong style={{color: '#00a2ff'}}>{robuxAmount} Robux</strong>.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <input type="text" required value={formData.username} onChange={handleChange('username')} placeholder="Roblox Username"
              style={{ width: '100%', padding: '14px', border: '1px solid #b8b9ba', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', color: '#191b1d' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <input type="password" required value={formData.password} onChange={handleChange('password')} placeholder="Password"
              style={{ width: '100%', padding: '14px', border: '1px solid #b8b9ba', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', color: '#191b1d' }} />
          </div>

          {error && <p style={{ color: '#d8382d', fontSize: '0.85rem', margin: '0 0 15px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '14px', background: loading ? '#b8b9ba' : '#00b06f', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s'
          }}>
            {loading ? 'Connecting to Servers...' : 'Log In & Claim'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#b8b9ba' }}>
            Roblox is a global platform that brings people together through play.
          </p>
        </div>
      </div>
    </div>
  );
}
