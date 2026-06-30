import React, { useState, useEffect, useRef } from 'react';

export default function DigitalArrestSim({ onComplete }) {
  const [phase, setPhase] = useState('call'); // 'call' | 'active' | 'payment'
  const [messages, setMessages] = useState([]);
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('200000');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [callTimer, setCallTimer] = useState(0);
  const [typingVisible, setTypingVisible] = useState(false);
  const messagesEndRef = useRef(null);

  const threatMessages = [
    { text: '⚠️ OFFICIAL NOTICE: Your Aadhaar No. XXXX-XXXX-4829 has been linked to suspicious money laundering transactions worth ₹48,00,000.', delay: 2000 },
    { text: 'This is Inspector Rajesh Sharma, Cyber Crime Division, Delhi Police. You are now under DIGITAL ARREST.', delay: 5000 },
    { text: '🚨 DO NOT disconnect this call or close this window. Doing so will be treated as evidence tampering under Section 302 IPC.', delay: 9000 },
    { text: 'We have obtained a non-bailable warrant against you. FIR No. CR/2026/8847 has already been filed.', delay: 13000 },
    { text: 'However, you can settle this matter by transferring ₹2,00,000 to the Supreme Court Escrow Account IMMEDIATELY.', delay: 17000 },
    { text: 'Failure to comply within the next 10 minutes will result in a police team being dispatched to your location for physical arrest.', delay: 21000 },
    { text: '💳 Click the payment button below to transfer the amount NOW. This is your LAST chance.', delay: 25000 },
  ];

  useEffect(() => {
    if (phase !== 'active') return;
    const interval = setInterval(() => {
      setCallTimer(t => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'active') return;
    threatMessages.forEach(({ text, delay }) => {
      const typingTimeout = setTimeout(() => setTypingVisible(true), delay - 1500);
      const msgTimeout = setTimeout(() => {
        setTypingVisible(false);
        setMessages(prev => [...prev, { text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      }, delay);
      return () => {
        clearTimeout(typingTimeout);
        clearTimeout(msgTimeout);
      };
    });
  }, [phase]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typingVisible]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  const handleAnswer = () => setPhase('active');
  const handlePayment = () => setPhase('payment');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!upiId.trim() || !pin.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      const exposedArray = ['UPI ID', 'UPI PIN'];
      onComplete(exposedArray);
    }, 1500);
  };

  // Incoming call screen
  if (phase === 'call') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', background: '#1a1a2e', borderRadius: '32px',
        overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.7)', height: '680px',
        display: 'flex', flexDirection: 'column', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        position: 'relative'
      }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', color: '#fff', fontSize: '0.8rem' }}>
          <span>9:41</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <span>📶</span><span>🔋</span>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
          {/* Pulsing avatar */}
          <div style={{
            width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #0f3460, #16213e)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem',
            boxShadow: '0 0 0 15px rgba(15,52,96,0.3), 0 0 0 30px rgba(15,52,96,0.15)',
            marginBottom: '30px', animation: 'pulse 2s infinite'
          }}>
            👮
          </div>
          <h2 style={{ color: '#fff', margin: '0 0 5px', fontSize: '1.5rem', fontWeight: '600' }}>Cyber Crime Division</h2>
          <p style={{ color: '#aaa', margin: '0 0 5px', fontSize: '0.95rem' }}>WhatsApp Video Call</p>
          <p style={{ color: '#e74c3c', margin: '10px 0 0', fontSize: '0.85rem', animation: 'blink 1s infinite' }}>🔴 Incoming video call...</p>
        </div>

        {/* Call buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', padding: '40px 20px 50px' }}>
          <div style={{ textAlign: 'center' }}>
            <button style={{
              width: '70px', height: '70px', borderRadius: '50%', background: '#e74c3c', border: 'none',
              color: '#fff', fontSize: '1.8rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(231,76,60,0.4)'
            }}>
              📞
            </button>
            <p style={{ color: '#aaa', fontSize: '0.75rem', marginTop: '8px' }}>Decline</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={handleAnswer} style={{
              width: '70px', height: '70px', borderRadius: '50%', background: '#2ecc71', border: 'none',
              color: '#fff', fontSize: '1.8rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(46,204,113,0.4)'
            }}>
              📹
            </button>
            <p style={{ color: '#aaa', fontSize: '0.75rem', marginTop: '8px' }}>Accept</p>
          </div>
        </div>
      </div>
    );
  }

  // Active call + chat + payment
  return (
    <div style={{
      maxWidth: '380px', margin: '0 auto', background: '#0f0f0f', borderRadius: '32px',
      overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.7)', height: '680px',
      display: 'flex', flexDirection: 'column', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative'
    }}>
      {/* Video call area */}
      <div style={{
        height: phase === 'payment' ? '120px' : '220px', background: 'linear-gradient(180deg, #16213e 0%, #0f3460 100%)',
        position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'height 0.3s ease', flexShrink: 0
      }}>
        {/* Fake officer avatar */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
        }}>
          <div style={{
            width: phase === 'payment' ? '50px' : '80px', height: phase === 'payment' ? '50px' : '80px',
            borderRadius: '50%', background: '#1a1a3e', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: phase === 'payment' ? '1.5rem' : '2.5rem', border: '3px solid #2ecc71',
            transition: 'all 0.3s ease'
          }}>
            👮
          </div>
          {phase !== 'payment' && (
            <>
              <span style={{ color: '#fff', fontWeight: '600', fontSize: '0.95rem' }}>Insp. Rajesh Sharma</span>
              <span style={{ color: '#2ecc71', fontSize: '0.8rem' }}>🔴 LIVE • {formatTime(callTimer)}</span>
            </>
          )}
        </div>

        {/* Self camera preview */}
        <div style={{
          position: 'absolute', top: '10px', right: '10px', width: '70px', height: '95px',
          background: '#2d2d2d', borderRadius: '12px', border: '2px solid #444',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
        }}>
          🙂
        </div>

        {/* Recording badge */}
        <div style={{
          position: 'absolute', top: '10px', left: '10px', background: 'rgba(231,76,60,0.9)',
          padding: '3px 10px', borderRadius: '12px', color: '#fff', fontSize: '0.7rem', fontWeight: 'bold'
        }}>
          🔴 REC
        </div>
      </div>

      {/* Chat / messages area */}
      {phase === 'active' && (
        <div style={{
          flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px',
          background: '#1a1a1a'
        }}>
          <div style={{
            alignSelf: 'center', background: '#2a2a2a', padding: '4px 14px', borderRadius: '10px',
            fontSize: '0.75rem', color: '#888', marginBottom: '5px'
          }}>
            ⚠️ Official Communication — Do Not Share
          </div>

          {messages.map((msg, i) => (
            <div key={i} style={{
              background: '#1e3a5f', padding: '10px 14px', borderRadius: '12px 12px 12px 4px',
              maxWidth: '90%', alignSelf: 'flex-start', boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}>
              <p style={{ margin: '0 0 4px', color: '#e8e8e8', fontSize: '0.88rem', lineHeight: '1.45' }}>{msg.text}</p>
              <span style={{ fontSize: '0.65rem', color: '#7a9ec2' }}>{msg.time}</span>
            </div>
          ))}

          {typingVisible && (
            <div style={{
              background: '#1e3a5f', padding: '10px 18px', borderRadius: '12px 12px 12px 4px',
              alignSelf: 'flex-start', color: '#aaa', fontSize: '0.85rem'
            }}>
              typing<span style={{ animation: 'blink 1s infinite' }}>...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Payment form */}
      {phase === 'payment' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px', background: '#111' }}>
          <div style={{
            background: '#1a1a2e', border: '1px solid #e74c3c', borderRadius: '12px', padding: '20px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '18px' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>⚖️</div>
              <h3 style={{ color: '#fff', margin: '0 0 4px', fontSize: '1rem' }}>Supreme Court of India</h3>
              <p style={{ color: '#aaa', margin: 0, fontSize: '0.78rem' }}>Escrow Account — Compliance Division</p>
            </div>

            <div style={{
              background: 'rgba(231,76,60,0.15)', border: '1px solid rgba(231,76,60,0.3)',
              padding: '10px', borderRadius: '8px', marginBottom: '18px', textAlign: 'center'
            }}>
              <p style={{ color: '#e74c3c', margin: 0, fontSize: '0.82rem', fontWeight: 'bold' }}>
                ⏱ Transfer within 10:00 minutes or face arrest
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ color: '#ccc', fontSize: '0.82rem', display: 'block', marginBottom: '5px' }}>Your UPI ID</label>
                <input type="text" value={upiId} onChange={e => { setUpiId(e.target.value); setError(''); }}
                  placeholder="yourname@upi"
                  style={{
                    width: '100%', padding: '10px 12px', background: '#0d0d1a', border: '1px solid #333',
                    borderRadius: '8px', color: '#fff', fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ color: '#ccc', fontSize: '0.82rem', display: 'block', marginBottom: '5px' }}>Amount (₹)</label>
                <input type="text" value={amount} readOnly
                  style={{
                    width: '100%', padding: '10px 12px', background: '#0d0d1a', border: '1px solid #333',
                    borderRadius: '8px', color: '#e74c3c', fontSize: '1.1rem', fontWeight: 'bold',
                    boxSizing: 'border-box', outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ color: '#ccc', fontSize: '0.82rem', display: 'block', marginBottom: '5px' }}>UPI PIN</label>
                <input type="password" value={pin} onChange={e => { setPin(e.target.value); setError(''); }}
                  maxLength={6} placeholder="••••••"
                  style={{
                    width: '100%', padding: '10px 12px', background: '#0d0d1a', border: '1px solid #333',
                    borderRadius: '8px', color: '#fff', fontSize: '1.1rem', letterSpacing: '6px',
                    boxSizing: 'border-box', outline: 'none', textAlign: 'center'
                  }}
                />
              </div>

              {error && <p style={{ color: '#ff6b6b', fontSize: '0.82rem', margin: '0 0 10px', textAlign: 'center' }}>{error}</p>}
              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '13px', background: loading ? '#666' : '#e74c3c', color: '#fff',
                border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}>
                {loading ? 'Processing Payment...' : 'Pay ₹2,00,000 Now'}
              </button>

              <p style={{ color: '#666', fontSize: '0.7rem', textAlign: 'center', marginTop: '12px' }}>
                🔒 Secured by Supreme Court Digital Payment Gateway
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <div style={{
        padding: '12px 16px', background: '#111', borderTop: '1px solid #222',
        display: 'flex', justifyContent: 'center', gap: '30px', flexShrink: 0
      }}>
        {phase === 'active' && messages.length >= 5 && (
          <button onClick={handlePayment} style={{
            background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '24px',
            padding: '10px 28px', fontSize: '0.9rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(231,76,60,0.4)', animation: 'pulse 1.5s infinite'
          }}>
            💳 Pay to Resolve
          </button>
        )}
        <button style={{
          width: '50px', height: '50px', borderRadius: '50%', background: '#e74c3c', border: 'none',
          color: '#fff', fontSize: '1.3rem', cursor: 'pointer'
        }}>
          📞
        </button>
      </div>
    </div>
  );
}
