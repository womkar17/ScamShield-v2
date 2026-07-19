import React, { useState } from 'react';

export default function SteamWalletSim({ onComplete }) {
  const [view, setView] = useState('generator'); // 'generator' | 'login'
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [walletAmount, setWalletAmount] = useState('$50');

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
    const exposedArray = ['Steam Account Name', 'Steam Password'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'generator') {
    return (
      <div style={{
        maxWidth: '500px', margin: '0 auto', background: '#171a21', border: '1px solid #2a475e',
        borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.6)', fontFamily: 'Motiva Sans, Arial, Helvetica, sans-serif', color: '#c6d4df'
      }}>
        <div style={{ padding: '20px', textAlign: 'center', background: 'linear-gradient(to right, #1a2a3a, #171a21)', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', borderBottom: '2px solid #66c0f4' }}>
          <h2 style={{ margin: 0, color: '#ffffff', fontSize: '1.6rem', fontWeight: 'normal', letterSpacing: '2px' }}>
            STEAM WALLET GENERATOR
          </h2>
          <p style={{ color: '#66c0f4', fontSize: '0.9rem', margin: '5px 0 0' }}>Add funds instantly to your Steam Wallet</p>
        </div>

        <div style={{ padding: '30px' }}>
          <div style={{ background: '#1b2838', padding: '15px', borderRadius: '4px', marginBottom: '20px', border: '1px solid #2a475e' }}>
            <p style={{ margin: '0 0 10px', color: '#8f98a0', fontSize: '0.9rem' }}>Select Gift Card Value:</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                {['$20', '$50', '$100'].map(amount => (
                    <button 
                        key={amount}
                        onClick={() => setWalletAmount(amount)}
                        style={{
                            flex: 1, padding: '12px', background: walletAmount === amount ? 'linear-gradient(to right, #75b022, #588a1b)' : '#2a475e',
                            color: '#fff', border: 'none', borderRadius: '2px', cursor: 'pointer', fontWeight: 'bold',
                            transition: 'all 0.2s', boxShadow: walletAmount === amount ? '0 0 10px rgba(117,176,34,0.5)' : 'none'
                        }}
                    >
                        {amount}
                    </button>
                ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', padding: '12px', marginBottom: '25px' }}>
            <p style={{ margin: 0, color: '#a3cc27', fontSize: '0.85rem' }}>Status: Server Online</p>
            <p style={{ margin: '5px 0 0', color: '#626366', fontSize: '0.75rem' }}>Codes remaining: 1,248</p>
          </div>

          <button onClick={handleGenerateClick} style={{
            width: '100%', padding: '15px', background: 'linear-gradient(to right, #66c0f4, #1999e3)', color: '#fff', border: 'none',
            borderRadius: '2px', fontSize: '1.1rem', fontWeight: 'normal', cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(102, 192, 244, 0.2)', textTransform: 'uppercase', letterSpacing: '1px'
          }}>
            Generate {walletAmount} Code
          </button>
        </div>
      </div>
    );
  }

  // Phishing Login View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#171a21', borderRadius: '4px', overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0,0,0,0.5)', fontFamily: 'Motiva Sans, Arial, Helvetica, sans-serif', color: '#c6d4df'
    }}>
      <div style={{ padding: '30px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{ margin: '0 0 10px', fontSize: '1.5rem', color: '#ffffff', fontWeight: '300', textTransform: 'uppercase' }}>Sign In</h2>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#8f98a0' }}>
            Sign in to claim your <strong style={{color: '#66c0f4'}}>{walletAmount}</strong> wallet code.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{display: 'block', marginBottom: '5px', color: '#afcce6', fontSize: '0.8rem', textTransform: 'uppercase'}}>Sign in with account name</label>
            <input type="text" required value={formData.username} onChange={handleChange('username')}
              style={{ width: '100%', padding: '10px 14px', background: '#32353c', border: '1px solid #32353c', borderRadius: '3px', boxSizing: 'border-box', fontSize: '1rem', color: '#fff', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{display: 'block', marginBottom: '5px', color: '#afcce6', fontSize: '0.8rem', textTransform: 'uppercase'}}>Password</label>
            <input type="password" required value={formData.password} onChange={handleChange('password')}
              style={{ width: '100%', padding: '10px 14px', background: '#32353c', border: '1px solid #32353c', borderRadius: '3px', boxSizing: 'border-box', fontSize: '1rem', color: '#fff', outline: 'none' }} />
          </div>

          {error && <p style={{ color: '#ff5c5c', fontSize: '0.85rem', margin: '0 0 15px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '14px', background: loading ? '#32353c' : 'linear-gradient(to right, #47bfff, #1a44c2)', color: '#fff', border: 'none',
            borderRadius: '2px', fontSize: '1.1rem', cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s'
          }}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#626366' }}>
            Join Steam and discover thousands of games to play.
          </p>
        </div>
      </div>
    </div>
  );
}
