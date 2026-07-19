import React, { useState } from 'react';

export default function XboxSim({ onComplete }) {
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
    const exposedArray = ['Microsoft Account Email', 'Microsoft Password'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'generator') {
    return (
      <div style={{
        maxWidth: '500px', margin: '0 auto', background: '#101010', border: '1px solid #107C10',
        borderRadius: '8px', boxShadow: '0 8px 24px rgba(16,124,16,0.2)', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', color: '#e6e6e6', overflow: 'hidden'
      }}>
        <div style={{ padding: '25px', textAlign: 'center', background: '#107C10', color: '#ffffff' }}>
          <h2 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
            XBOX LIVE CODE GENERATOR
          </h2>
          <p style={{ fontSize: '0.9rem', margin: '5px 0 0', opacity: 0.9 }}>Add funds to your Microsoft account instantly.</p>
        </div>

        <div style={{ padding: '30px' }}>
          <div style={{ background: '#1e1e1e', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #333' }}>
            <p style={{ margin: '0 0 15px', color: '#ccc', fontSize: '0.95rem', fontWeight: 'bold', textAlign: 'center' }}>Select Gift Card Value:</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
                {['$15', '$25', '$50', '$100'].map(amount => (
                    <button 
                        key={amount}
                        onClick={() => setCardAmount(amount)}
                        style={{
                            flex: 1, padding: '12px 5px', background: cardAmount === amount ? '#107C10' : '#2a2a2a',
                            color: cardAmount === amount ? '#fff' : '#999', border: `2px solid ${cardAmount === amount ? '#107C10' : '#444'}`, 
                            borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold',
                            transition: 'all 0.2s'
                        }}
                    >
                        {amount}
                    </button>
                ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', background: 'rgba(16,124,16,0.1)', border: '1px solid #107C10', borderRadius: '4px', padding: '12px', marginBottom: '25px' }}>
            <p style={{ margin: 0, color: '#107C10', fontSize: '0.9rem', fontWeight: 'bold' }}>● Generator Status: Online</p>
            <p style={{ margin: '5px 0 0', color: '#888', fontSize: '0.8rem' }}>Unclaimed codes remaining: 842</p>
          </div>

          <button onClick={handleGenerateClick} style={{
            width: '100%', padding: '16px', background: '#107C10', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            transition: 'background 0.2s', boxShadow: '0 4px 10px rgba(16, 124, 16, 0.4)', textTransform: 'uppercase'
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
      maxWidth: '450px', margin: '0 auto', background: '#ffffff', overflow: 'hidden', border: '1px solid #ccc',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', color: '#000'
    }}>
      <div style={{ padding: '40px', minHeight: '400px' }}>
        <div style={{ marginBottom: '25px' }}>
          <div style={{ width: '108px', height: '24px', background: '#e6e6e6', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontWeight: 'bold', fontSize: '12px' }}>
            Microsoft
          </div>
          <h2 style={{ margin: '0 0 10px', fontSize: '1.5rem', color: '#1b1b1b', fontWeight: '600' }}>Sign in</h2>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#1b1b1b' }}>
            to continue to Xbox Live and claim <strong style={{color: '#107C10'}}>{cardAmount}</strong>.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <input type="email" required value={formData.email} onChange={handleChange('email')} placeholder="Email, phone, or Skype"
              style={{ width: '100%', padding: '10px 0', border: 'none', borderBottom: '1px solid #666', boxSizing: 'border-box', fontSize: '1rem', color: '#000', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <input type="password" required value={formData.password} onChange={handleChange('password')} placeholder="Password"
              style={{ width: '100%', padding: '10px 0', border: 'none', borderBottom: '1px solid #666', boxSizing: 'border-box', fontSize: '1rem', color: '#000', outline: 'none' }} />
          </div>

          {error && <p style={{ color: '#e81123', fontSize: '0.85rem', margin: '0 0 15px' }}>{error}</p>}

          <p style={{ fontSize: '0.85rem', color: '#0067b8', margin: '0 0 25px', cursor: 'pointer' }}>No account? Create one!</p>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" disabled={loading} style={{
              padding: '10px 30px', background: loading ? '#ccc' : '#0067b8', color: '#fff', border: 'none',
              fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s', fontWeight: '600'
            }}>
              {loading ? 'Wait...' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
