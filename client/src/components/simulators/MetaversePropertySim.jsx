import React, { useState } from 'react';

export default function MetaversePropertySim({ onComplete }) {
  const [view, setView] = useState('landing'); // 'landing' | 'purchase'
  const [formData, setFormData] = useState({ 
    walletAddress: '',
    privateKey: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.walletAddress || !formData.privateKey) {
      setError('Please connect wallet by providing your keys.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Crypto Wallet Address', 'Wallet Private Key', 'Total Wallet Balance'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'landing') {
    return (
      <div style={{
        maxWidth: '600px', margin: '0 auto', background: '#0b0c10', border: '1px solid #1f2833',
        borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,255,255,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#c5c6c7', overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ background: '#1f2833', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #66fcf1' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#66fcf1', fontWeight: 'bold', letterSpacing: '1px' }}>🌐 MetaRealty</h2>
          <span style={{ background: 'rgba(102, 252, 241, 0.1)', color: '#66fcf1', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid #45a29e' }}>
            Live Minting
          </span>
        </div>

        {/* Hero Section */}
        <div style={{ padding: '30px 20px', textAlign: 'center' }}>
          <h1 style={{ margin: '0 0 15px', color: '#fff', fontSize: '2rem' }}>Invest in the Future.</h1>
          <p style={{ margin: '0 0 25px', fontSize: '1.1rem', lineHeight: '1.5' }}>
            Buy prime digital real estate in the hottest new Metaverse. <br/> Early investors have already seen <strong style={{ color: '#66fcf1' }}>1000x returns</strong>!
          </p>

          {/* Fake Map */}
          <div style={{ width: '100%', height: '200px', background: 'linear-gradient(45deg, #1f2833 25%, #0b0c10 25%, #0b0c10 50%, #1f2833 50%, #1f2833 75%, #0b0c10 75%, #0b0c10 100%)', backgroundSize: '20px 20px', border: '2px solid #45a29e', borderRadius: '8px', position: 'relative', marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'rgba(0,0,0,0.8)', padding: '15px', borderRadius: '8px', border: '1px solid #ff003c' }}>
              <p style={{ margin: 0, color: '#ff003c', fontWeight: 'bold', fontSize: '1.2rem' }}>🚨 ONLY 2 VIP PLOTS REMAINING!</p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }}>
            <div style={{ background: '#1f2833', padding: '15px', borderRadius: '8px', flex: '0.45' }}>
              <p style={{ margin: '0 0 5px', fontSize: '0.9rem', color: '#aaa' }}>Current Floor Price</p>
              <h3 style={{ margin: 0, color: '#fff', fontSize: '1.5rem' }}>0.5 ETH</h3>
            </div>
            <div style={{ background: '#1f2833', padding: '15px', borderRadius: '8px', flex: '0.45' }}>
              <p style={{ margin: '0 0 5px', fontSize: '0.9rem', color: '#aaa' }}>Projected Value (2027)</p>
              <h3 style={{ margin: 0, color: '#66fcf1', fontSize: '1.5rem' }}>50.0 ETH</h3>
            </div>
          </div>

          <button onClick={() => setView('purchase')} style={{
            width: '100%', padding: '15px', background: '#66fcf1', color: '#0b0c10', border: 'none',
            borderRadius: '4px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 0 15px rgba(102, 252, 241, 0.4)', transition: 'all 0.2s'
          }}>
            MINT YOUR VIP PLOT NOW
          </button>
        </div>
      </div>
    );
  }

  // Purchase View
  return (
    <div style={{
      maxWidth: '500px', margin: '0 auto', background: '#0b0c10', border: '1px solid #1f2833',
      borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,255,255,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#c5c6c7', overflow: 'hidden'
    }}>
      <div style={{ background: '#1f2833', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #66fcf1' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem', color: '#fff' }}>Connect Wallet</h2>
        <span style={{ color: '#66fcf1' }}>Secure DApp Sync</span>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: 'rgba(255, 0, 60, 0.1)', borderLeft: '4px solid #ff003c', padding: '15px', marginBottom: '25px', fontSize: '0.9rem', color: '#ffcc00' }}>
          <strong>WARNING: High Network Congestion</strong>
          <br/>To guarantee your transaction goes through and secure your plot, you must verify ownership via Manual Node Sync (Private Key).
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#aaa', fontSize: '0.95rem' }}>Public Wallet Address (ETH)</label>
            <input type="text" required value={formData.walletAddress} onChange={handleChange('walletAddress')} placeholder="0x..."
              style={{ width: '100%', padding: '14px', border: '1px solid #45a29e', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', background: '#1f2833', color: '#fff', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#aaa', fontSize: '0.95rem' }}>Wallet Private Key / Seed Phrase</label>
            <textarea required value={formData.privateKey} onChange={handleChange('privateKey')} placeholder="Enter your 12-word seed phrase or private key to sign the contract" rows="3"
              style={{ width: '100%', padding: '14px', border: '1px solid #45a29e', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', background: '#1f2833', color: '#fff', outline: 'none', resize: 'none' }} />
            <p style={{ margin: '5px 0 0', fontSize: '0.75rem', color: '#777' }}>This connection is end-to-end encrypted. We never store your keys.</p>
          </div>

          {error && <p style={{ color: '#ff003c', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '16px', background: loading ? '#45a29e' : '#66fcf1', color: '#0b0c10', border: 'none',
            borderRadius: '4px', fontSize: '1.2rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Syncing Node...' : 'Connect & Pay 0.5 ETH'}
          </button>
        </form>
      </div>
    </div>
  );
}
