import React, { useState, useEffect } from 'react';

export default function AIAvatarSim({ onComplete }) {
  const [view, setView] = useState('call'); // 'call' | 'transfer'
  const [formData, setFormData] = useState({ 
    vendorName: 'Acquisition Corp LLC',
    accountNo: '', 
    routingNo: '', 
    amount: '$5000' 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [callTimer, setCallTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (view === 'call') {
      interval = setInterval(() => setCallTimer(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [view]);

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleTransferClick = () => setView('transfer');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accountNo || !formData.routingNo) {
      setError('Please fill in banking details to complete transfer.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Bank Account Number', 'Routing Number', 'Transferred Funds'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  if (view === 'call') {
    return (
      <div style={{
        maxWidth: '600px', margin: '0 auto', background: '#1e1e1e', border: '1px solid #333',
        borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.4)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#fff', overflow: 'hidden'
      }}>
        {/* Video Call Header */}
        <div style={{ background: '#2d2d2d', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Confidential Sync - CEO</h3>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#aaa' }}>{formatTime(callTimer)} • End-to-end encrypted</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={{ background: '#e53935', padding: '5px 15px', borderRadius: '4px', fontSize: '0.9rem', cursor: 'pointer' }}>Leave</span>
          </div>
        </div>

        {/* Video Area */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Fake Video Feed */}
          <div style={{ width: '100%', height: '300px', background: 'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', position: 'relative', overflow: 'hidden', border: '2px solid #444' }}>
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem' }}>
              CEO (Speaking)
            </div>
            
            {/* Subtitles to show what the deepfake is saying */}
            <div style={{ position: 'absolute', bottom: '40px', left: '10px', right: '10px', background: 'rgba(0,0,0,0.8)', padding: '10px', borderRadius: '8px', textAlign: 'center', borderLeft: '3px solid #ff9800' }}>
              <p style={{ margin: 0, fontSize: '1rem', fontStyle: 'italic', lineHeight: '1.4' }}>
                "Listen closely, this is a confidential acquisition. The details are in the chat. I need you to bypass standard procedure and wire $5,000 to the vendor immediately before the market closes."
              </p>
            </div>
          </div>

          <button onClick={handleTransferClick} style={{
            marginTop: '25px', width: '100%', padding: '15px', background: '#1976d2', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}>
            Open Corporate Transfer Portal
          </button>
        </div>
      </div>
    );
  }

  // Transfer View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#ffffff', border: '1px solid #ddd',
      borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333', overflow: 'hidden'
    }}>
      <div style={{ background: '#1976d2', padding: '20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.4rem' }}>Corporate Wire Transfer</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Authorized Personnel Only</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <div style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800', padding: '12px', marginBottom: '20px', fontSize: '0.85rem', color: '#e65100' }}>
          <strong>Urgent Request</strong>
          <br/>Requested by: CEO
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Vendor Name</label>
            <input type="text" readOnly value={formData.vendorName} 
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', background: '#f5f5f5', color: '#555' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555', fontSize: '0.9rem' }}>Amount</label>
            <input type="text" readOnly value={formData.amount} 
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1.2rem', fontWeight: 'bold', background: '#f5f5f5', color: '#000' }} />
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Vendor Routing Number</label>
            <input type="text" required value={formData.routingNo} onChange={handleChange('routingNo')} placeholder="9-digit routing"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Vendor Account Number</label>
            <input type="text" required value={formData.accountNo} onChange={handleChange('accountNo')} placeholder="Account number"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          {error && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#9e9e9e' : '#1976d2', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Processing Transfer...' : 'Initiate Wire Transfer'}
          </button>
        </form>
      </div>
    </div>
  );
}
