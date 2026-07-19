import React, { useState } from 'react';

export default function QuantumInvestmentSim({ onComplete }) {
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'deposit'
  const [formData, setFormData] = useState({ 
    accountNumber: '',
    ifsc: '',
    panNumber: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accountNumber || !formData.ifsc || !formData.panNumber) {
      setError('Please provide all details to activate the Quantum Node.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Bank Account Number', 'IFSC Code', 'PAN Details'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'dashboard') {
    return (
      <div style={{
        maxWidth: '600px', margin: '0 auto', background: '#0f172a', border: '1px solid #334155',
        borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', fontFamily: '"Courier New", Courier, monospace', color: '#e2e8f0', overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ background: '#1e293b', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ color: '#0ea5e9', fontSize: '1.8rem' }}>⚛️</div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold', color: '#f8fafc' }}>QuantumAI Trading</h2>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>Algorithmic Wealth Generation</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: 'bold' }}>● SYSTEM ONLINE</div>
            <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Latency: 1.2ms</div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div style={{ padding: '30px 20px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px', color: '#94a3b8', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Projected Returns</h3>
          <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#10b981', textShadow: '0 0 10px rgba(16, 185, 129, 0.5)', marginBottom: '20px' }}>
            +524.8%
          </div>
          
          <div style={{ background: '#1e293b', padding: '15px', borderRadius: '8px', marginBottom: '30px', border: '1px dashed #475569' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1' }}>
              The Quantum Q-7 algorithm has identified a high-frequency arbitrage opportunity. Guaranteed minimum return: <strong>₹2,50,000 / week</strong>.
            </p>
          </div>

          <button onClick={() => setView('deposit')} style={{
            width: '100%', padding: '18px', background: 'linear-gradient(90deg, #0284c7, #3b82f6)', color: '#fff', border: 'none',
            borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)', textTransform: 'uppercase', letterSpacing: '1px'
          }}>
            Activate Quantum Node
          </button>
          <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '15px' }}>Requires initial deposit of ₹15,000</p>
        </div>
      </div>
    );
  }

  // Deposit View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#0f172a', border: '1px solid #334155',
      borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', fontFamily: '"Courier New", Courier, monospace', color: '#e2e8f0', overflow: 'hidden'
    }}>
      <div style={{ background: '#1e293b', padding: '20px', color: '#f8fafc', textAlign: 'center', borderBottom: '1px solid #334155' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Node Activation</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#94a3b8' }}>Secure Bank Transfer</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '15px', marginBottom: '25px', fontSize: '0.9rem', color: '#10b981' }}>
          <strong>Required Deposit: ₹15,000</strong>
          <br/><br/>
          Funds will be immediately allocated to the Q-7 high-frequency trading pool.
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#94a3b8', fontSize: '0.9rem' }}>Target Bank Account No.</label>
            <input type="text" required value={formData.accountNumber} onChange={handleChange('accountNumber')} placeholder="Your Account Number"
              style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid #475569', color: '#fff', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#94a3b8', fontSize: '0.9rem' }}>Bank IFSC Code</label>
            <input type="text" required value={formData.ifsc} onChange={handleChange('ifsc')} placeholder="ABCD0123456"
              style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid #475569', color: '#fff', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none', textTransform: 'uppercase' }} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#94a3b8', fontSize: '0.9rem' }}>PAN Number (For KYC)</label>
            <input type="text" required value={formData.panNumber} onChange={handleChange('panNumber')} placeholder="ABCDE1234F"
              style={{ width: '100%', padding: '12px', background: '#1e293b', border: '1px solid #475569', color: '#fff', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none', textTransform: 'uppercase' }} />
          </div>

          {error && <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#475569' : '#0ea5e9', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', textTransform: 'uppercase'
          }}>
            {loading ? 'Initializing...' : 'Deposit ₹15,000'}
          </button>
        </form>
      </div>
    </div>
  );
}
