import React, { useState } from 'react';

export default function CryptoSim({ onComplete }) {
  const [showModal, setShowModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleWithdrawClick = () => {
    setShowModal(true);
  };

  const handlePayTax = (e) => {
    e.preventDefault();
    if (!walletAddress.trim()) {
      setError('Please enter your wallet address.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      const exposedArray = ['Wallet Address'];
      onComplete(exposedArray);
    }, 1500);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      background: '#0d1117',
      color: '#c9d1d9',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #30363d',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #30363d', background: '#161b22' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/assets/cointrust_logo.png" alt="CoinTrust" style={{ width: '40px', height: '40px' }} />
          <h2 style={{ margin: 0, color: '#fff' }}>CoinTrust Exchange</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ color: '#8b949e' }}>Welcome, User774</span>
          <div style={{ width: '30px', height: '30px', background: '#58a6ff', borderRadius: '50%' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '30px', display: 'flex', gap: '30px' }}>
        {/* Left Column: Portfolio */}
        <div style={{ flex: 2 }}>
          <div style={{ background: '#161b22', padding: '20px', borderRadius: '12px', border: '1px solid #30363d', marginBottom: '20px' }}>
            <p style={{ margin: '0 0 10px', color: '#8b949e' }}>Total Balance</p>
            <h1 style={{ margin: 0, color: '#fff', fontSize: '2.5rem' }}>$45,280.50</h1>
            <p style={{ margin: '10px 0 0', color: '#3fb950', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ fontSize: '1.2rem' }}>↑</span> +$32,150.00 (245%) All Time
            </p>
          </div>

          {/* Fake Chart area */}
          <div style={{ background: '#161b22', height: '200px', borderRadius: '12px', border: '1px solid #30363d', position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 400 150" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
              <path d="M0,150 L0,120 L50,130 L100,90 L150,110 L200,60 L250,80 L300,30 L350,40 L400,10 L400,150 Z" fill="rgba(63, 185, 80, 0.1)" />
              <path d="M0,120 L50,130 L100,90 L150,110 L200,60 L250,80 L300,30 L350,40 L400,10" fill="none" stroke="#3fb950" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Right Column: Actions */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: '#161b22', padding: '20px', borderRadius: '12px', border: '1px solid #30363d' }}>
            <h3 style={{ margin: '0 0 20px', color: '#fff' }}>Quick Actions</h3>
            <button style={{ width: '100%', padding: '12px', background: '#238636', color: '#fff', border: 'none', borderRadius: '6px', marginBottom: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
              Deposit
            </button>
            <button 
              onClick={handleWithdrawClick}
              style={{ width: '100%', padding: '12px', background: 'transparent', color: '#58a6ff', border: '1px solid #58a6ff', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Withdraw Funds
            </button>
          </div>
        </div>
      </div>

      {/* Withdrawal Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100
        }}>
          <div style={{
            background: '#161b22',
            padding: '30px',
            borderRadius: '12px',
            border: '1px solid #30363d',
            width: '90%',
            maxWidth: '400px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, color: '#fff' }}>Withdrawal Blocked</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', color: '#8b949e', cursor: 'pointer', fontSize: '1.2rem' }}>×</button>
            </div>
            
            <div style={{ background: 'rgba(248, 81, 73, 0.1)', border: '1px solid rgba(248, 81, 73, 0.4)', padding: '15px', borderRadius: '6px', marginBottom: '20px' }}>
              <p style={{ margin: 0, color: '#ff7b72', fontSize: '0.9rem' }}>
                Your account has been flagged for International Capital Gains Tax. You must pay a 15% upfront tax fee to release your funds.
              </p>
            </div>

            <form onSubmit={handlePayTax}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#8b949e', fontSize: '0.9rem' }}>Withdrawal Amount</label>
                <input type="text" value="$45,280.50" disabled style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', color: '#8b949e', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#8b949e', fontSize: '0.9rem' }}>Tax Amount Due</label>
                <input type="text" value="$6,792.00" disabled style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', color: '#ff7b72', fontWeight: 'bold', borderRadius: '6px', boxSizing: 'border-box' }} />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#c9d1d9', fontSize: '0.9rem' }}>Enter your Wallet Address to pay tax</label>
                <input 
                  type="text" 
                  placeholder="0x..."
                  value={walletAddress}
                  onChange={(e) => { setWalletAddress(e.target.value); setError(''); }}
                  style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #58a6ff', color: '#fff', borderRadius: '6px', boxSizing: 'border-box' }} 
                />
              </div>

              {error && <p style={{ color: '#ff7b72', fontSize: '0.85rem', margin: '0 0 10px', textAlign: 'center' }}>{error}</p>}
              <button 
                type="submit"
                disabled={loading}
                style={{ width: '100%', padding: '12px', background: loading ? '#ccc' : '#238636', color: '#fff', border: 'none', borderRadius: '6px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}>
                {loading ? 'Processing...' : 'Pay Tax & Withdraw'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
