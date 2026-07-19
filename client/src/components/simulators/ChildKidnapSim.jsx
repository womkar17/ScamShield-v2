import React, { useState, useEffect } from 'react';

export default function ChildKidnapSim({ onComplete }) {
  const [view, setView] = useState('incoming'); // 'incoming' | 'call' | 'transfer'
  const [formData, setFormData] = useState({ 
    accountNo: '', 
    routingNo: '', 
    amount: '$2000' 
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

  const handleAnswer = () => setView('call');
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

  if (view === 'incoming') {
    return (
      <div style={{
        maxWidth: '350px', margin: '0 auto', background: '#2c2c2c', borderRadius: '30px', border: '8px solid #111',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#fff', overflow: 'hidden', height: '600px', display: 'flex', flexDirection: 'column'
      }}>
        <div style={{ flex: 1, padding: '40px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)' }}>
          <h2 style={{ fontSize: '1.2rem', margin: '0 0 10px', fontWeight: 'normal', color: '#aaa' }}>Incoming Call</h2>
          <h1 style={{ fontSize: '2.2rem', margin: '0 0 5px', fontWeight: 'bold' }}>Unknown Caller</h1>
          <p style={{ fontSize: '1rem', color: '#ccc', margin: 0 }}>United States</p>
          
          <div style={{ marginTop: '150px', display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ textAlign: 'center' }}>
              <button style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#ff3b30', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ transform: 'rotate(135deg)' }}>📞</span>
              </button>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>Decline</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button onClick={handleAnswer} style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#34c759', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                📞
              </button>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>Accept</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'call') {
    return (
      <div style={{
        maxWidth: '350px', margin: '0 auto', background: '#1c1c1e', borderRadius: '30px', border: '8px solid #111',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#fff', overflow: 'hidden', height: '600px', display: 'flex', flexDirection: 'column'
      }}>
        <div style={{ padding: '40px 20px 20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', margin: '0 0 5px', fontWeight: 'bold' }}>Unknown Caller</h1>
          <p style={{ fontSize: '1rem', color: '#ccc', margin: 0 }}>{formatTime(callTimer)}</p>
        </div>

        <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', overflowY: 'auto' }}>
          <div style={{ background: '#2c2c2e', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #ff3b30' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.4', fontStyle: 'italic' }}>
              "Listen to me carefully. We have your child. They are safe right now, but if you hang up or call the police, things will end badly."
            </p>
          </div>
          <div style={{ background: '#2c2c2e', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #ff3b30' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.4', fontStyle: 'italic' }}>
              "I am texting you a bank account routing number. You will wire $2,000 immediately. Stay on the phone while you do it."
            </p>
          </div>

          <button onClick={handleTransferClick} style={{
            marginTop: '20px', padding: '15px', background: '#007aff', color: '#fff', border: 'none',
            borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 122, 255, 0.3)'
          }}>
            Open Banking App
          </button>
        </div>

        <div style={{ padding: '20px', textAlign: 'center' }}>
          <button style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#ff3b30', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
            <span style={{ transform: 'rotate(135deg)' }}>📞</span>
          </button>
        </div>
      </div>
    );
  }

  // Transfer View
  return (
    <div style={{
      maxWidth: '350px', margin: '0 auto', background: '#ffffff', borderRadius: '30px', border: '8px solid #111',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#000', overflow: 'hidden', height: '600px', display: 'flex', flexDirection: 'column'
    }}>
      <div style={{ background: '#005ea6', padding: '40px 20px 20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Global Bank Mobile</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>Wire Transfer</p>
      </div>
      
      <div style={{ padding: '25px 20px', flex: 1, overflowY: 'auto' }}>
        <div style={{ background: '#ffebee', border: '1px solid #ffcdd2', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.85rem', color: '#c62828' }}>
          <strong>Call in progress (Unknown Caller)</strong>
          <br/>Do not hang up.
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Amount</label>
            <input type="text" readOnly value={formData.amount} 
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '8px', boxSizing: 'border-box', fontSize: '1.2rem', fontWeight: 'bold', background: '#f5f5f5', color: '#000' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Destination Routing Number</label>
            <input type="text" required value={formData.routingNo} onChange={handleChange('routingNo')} placeholder="9-digit routing"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '8px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Destination Account Number</label>
            <input type="text" required value={formData.accountNo} onChange={handleChange('accountNo')} placeholder="Account number"
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '8px', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
          </div>

          {error && <p style={{ color: '#d32f2f', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '15px', background: loading ? '#9e9e9e' : '#005ea6', color: '#fff', border: 'none',
            borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s'
          }}>
            {loading ? 'Processing Transfer...' : 'Confirm Wire Transfer'}
          </button>
        </form>
      </div>
    </div>
  );
}
