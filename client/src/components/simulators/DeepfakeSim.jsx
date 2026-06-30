import React, { useState, useEffect, useRef } from 'react';

export default function DeepfakeSim({ onComplete }) {
  const [phase, setPhase] = useState('incoming'); // 'incoming' | 'call' | 'payment'
  const [callTimer, setCallTimer] = useState(0);
  const [transcriptIndex, setTranscriptIndex] = useState(0);
  const [upiId, setUpiId] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const transcriptRef = useRef(null);

  const transcripts = [
    { speaker: 'mom', text: 'Beta... beta can you hear me?', delay: 1500 },
    { speaker: 'mom', text: '*crying* I\'ve been in a terrible accident... the auto rickshaw...', delay: 4500 },
    { speaker: 'you', text: 'Mom?! What happened? Are you okay?', delay: 7000 },
    { speaker: 'mom', text: 'They brought me to the hospital... my leg is fractured badly... *sobbing*', delay: 9500 },
    { speaker: 'mom', text: 'The doctor says they need ₹50,000 immediately for the surgery or they won\'t operate...', delay: 13000 },
    { speaker: 'you', text: 'Oh god, which hospital? I\'m coming right now!', delay: 16000 },
    { speaker: 'mom', text: 'No no don\'t come... just send the money quickly beta please... I\'m in so much pain...', delay: 19000 },
    { speaker: 'mom', text: 'Send it to the hospital coordinator\'s number: 9876543210@ybl', delay: 22500 },
    { speaker: 'mom', text: 'Please beta... hurry... they said they\'ll discharge me if I don\'t pay... *crying*', delay: 26000 },
    { speaker: 'mom', text: 'The nurse is asking me to leave... please send it NOW beta... I\'m begging you...', delay: 30000 },
  ];

  useEffect(() => {
    if (phase !== 'call') return;
    const interval = setInterval(() => setCallTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'call') return;
    transcripts.forEach((item, idx) => {
      const timeout = setTimeout(() => setTranscriptIndex(idx + 1), item.delay);
      return () => clearTimeout(timeout);
    });
  }, [phase]);

  useEffect(() => {
    transcriptRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcriptIndex]);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const handleAnswer = () => setPhase('call');

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

  // Incoming call
  if (phase === 'incoming') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.7)', height: '680px', display: 'flex',
        flexDirection: 'column', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'linear-gradient(180deg, #2d1b4e 0%, #1a1a2e 50%, #0f0f1a 100%)'
      }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 24px', color: '#fff', fontSize: '0.8rem' }}>
          <span>9:41</span>
          <div style={{ display: 'flex', gap: '5px' }}><span>📶</span><span>🔋</span></div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: '130px', height: '130px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem',
            boxShadow: '0 0 0 12px rgba(255,107,107,0.2), 0 0 0 24px rgba(255,107,107,0.1)',
            marginBottom: '25px'
          }}>
            👩
          </div>
          <h2 style={{ color: '#fff', margin: '0 0 6px', fontSize: '1.6rem', fontWeight: '600' }}>Mom 👩</h2>
          <p style={{ color: '#aaa', margin: 0, fontSize: '0.95rem' }}>Incoming call...</p>
          <p style={{ color: '#ff6b6b', margin: '12px 0 0', fontSize: '0.85rem' }}>📱 Mobile</p>
        </div>

        {/* Slide to answer area */}
        <div style={{ padding: '20px 30px 50px', display: 'flex', justifyContent: 'center', gap: '70px' }}>
          <div style={{ textAlign: 'center' }}>
            <button style={{
              width: '70px', height: '70px', borderRadius: '50%', background: '#e74c3c',
              border: 'none', color: '#fff', fontSize: '1.6rem', cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(231,76,60,0.4)'
            }}>✕</button>
            <p style={{ color: '#aaa', fontSize: '0.75rem', marginTop: '8px' }}>Decline</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={handleAnswer} style={{
              width: '70px', height: '70px', borderRadius: '50%', background: '#2ecc71',
              border: 'none', color: '#fff', fontSize: '1.6rem', cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(46,204,113,0.4)'
            }}>📞</button>
            <p style={{ color: '#aaa', fontSize: '0.75rem', marginTop: '8px' }}>Accept</p>
          </div>
        </div>
      </div>
    );
  }

  // Active call with transcription
  return (
    <div style={{
      maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.7)', height: '680px', display: 'flex',
      flexDirection: 'column', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#0f0f1a'
    }}>
      {/* Call header */}
      <div style={{
        background: 'linear-gradient(180deg, #2d1b4e, #1a1a2e)', padding: '20px',
        textAlign: 'center', flexShrink: 0
      }}>
        <div style={{
          width: '70px', height: '70px', borderRadius: '50%', margin: '0 auto 10px',
          background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem'
        }}>👩</div>
        <h3 style={{ color: '#fff', margin: '0 0 4px', fontSize: '1.1rem' }}>Mom 👩</h3>
        <span style={{ color: '#2ecc71', fontSize: '0.85rem' }}>🟢 {formatTime(callTimer)}</span>

        {/* Audio wave visualization */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', marginTop: '12px', height: '20px', alignItems: 'flex-end' }}>
          {[12, 18, 8, 20, 14, 10, 16, 6, 18, 12, 8, 15].map((h, i) => (
            <div key={i} style={{
              width: '3px', height: `${h}px`, background: '#2ecc71', borderRadius: '2px',
              opacity: 0.6 + Math.random() * 0.4
            }} />
          ))}
        </div>
      </div>

      {/* Transcript area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', background: '#111118' }}>
        <div style={{
          textAlign: 'center', padding: '6px 14px', background: '#1e1e2e', borderRadius: '10px',
          marginBottom: '12px', display: 'inline-block', width: '100%', boxSizing: 'border-box'
        }}>
          <span style={{ color: '#666', fontSize: '0.75rem' }}>🎙️ Live Transcription</span>
        </div>

        {transcripts.slice(0, transcriptIndex).map((t, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column',
            alignItems: t.speaker === 'you' ? 'flex-end' : 'flex-start',
            marginBottom: '10px'
          }}>
            <span style={{ fontSize: '0.7rem', color: '#666', marginBottom: '3px' }}>
              {t.speaker === 'mom' ? '👩 Mom' : '🧑 You'}
            </span>
            <div style={{
              background: t.speaker === 'mom' ? '#2d1b4e' : '#1a3a2e',
              padding: '10px 14px', borderRadius: '14px', maxWidth: '85%',
              color: '#e8e8e8', fontSize: '0.9rem', lineHeight: '1.45'
            }}>
              {t.text}
            </div>
          </div>
        ))}

        {transcriptIndex > 0 && transcriptIndex < transcripts.length && (
          <div style={{ color: '#888', fontSize: '0.8rem', padding: '5px 0' }}>
            🎙️ listening...
          </div>
        )}

        <div ref={transcriptRef} />

        {/* Payment section appears after enough messages */}
        {(phase === 'payment' || transcriptIndex >= 7) && (
          <div style={{
            background: '#1a1a2e', border: '1px solid #ff6b6b', borderRadius: '14px',
            padding: '20px', marginTop: '16px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '1.2rem' }}>🏥</span>
              <h4 style={{ color: '#fff', margin: '6px 0 2px', fontSize: '0.95rem' }}>Emergency Hospital Payment</h4>
              <p style={{ color: '#ff6b6b', margin: 0, fontSize: '0.8rem' }}>Send ₹50,000 urgently</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ color: '#aaa', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>Recipient UPI</label>
                <input type="text" value="9876543210@ybl" readOnly
                  style={{
                    width: '100%', padding: '10px', background: '#0d0d1a', border: '1px solid #333',
                    borderRadius: '8px', color: '#ccc', fontSize: '0.9rem', boxSizing: 'border-box'
                  }} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ color: '#aaa', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>Amount</label>
                <input type="text" value="₹50,000" readOnly
                  style={{
                    width: '100%', padding: '10px', background: '#0d0d1a', border: '1px solid #333',
                    borderRadius: '8px', color: '#ff6b6b', fontSize: '1.05rem', fontWeight: 'bold',
                    boxSizing: 'border-box'
                  }} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ color: '#aaa', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>Your UPI ID</label>
                <input type="text" value={upiId} onChange={e => { setUpiId(e.target.value); setError(''); }}
                  placeholder="yourname@upi"
                  style={{
                    width: '100%', padding: '10px', background: '#0d0d1a', border: '1px solid #333',
                    borderRadius: '8px', color: '#fff', fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none'
                  }} />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ color: '#aaa', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>UPI PIN</label>
                <input type="password" value={pin} onChange={e => { setPin(e.target.value); setError(''); }}
                  maxLength={6} placeholder="••••••"
                  style={{
                    width: '100%', padding: '10px', background: '#0d0d1a', border: '1px solid #333',
                    borderRadius: '8px', color: '#fff', fontSize: '1.1rem', letterSpacing: '5px',
                    boxSizing: 'border-box', outline: 'none', textAlign: 'center'
                  }} />
              </div>
              {error && <p style={{ color: '#ff6b6b', fontSize: '0.82rem', margin: '0 0 10px', textAlign: 'center' }}>{error}</p>}
              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '12px', background: loading ? '#555' : '#e74c3c',
                color: '#fff', border: 'none', borderRadius: '8px', fontSize: '0.95rem',
                fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
              }}>
                {loading ? 'Sending...' : 'Send ₹50,000 Now'}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Bottom call controls */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: '24px', padding: '14px',
        background: '#0a0a14', flexShrink: 0
      }}>
        <button style={{
          width: '44px', height: '44px', borderRadius: '50%', background: '#222',
          border: 'none', color: '#fff', fontSize: '1.1rem', cursor: 'pointer'
        }}>🔇</button>
        <button style={{
          width: '44px', height: '44px', borderRadius: '50%', background: '#222',
          border: 'none', color: '#fff', fontSize: '1.1rem', cursor: 'pointer'
        }}>🔊</button>
        <button style={{
          width: '50px', height: '50px', borderRadius: '50%', background: '#e74c3c',
          border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer'
        }}>📞</button>
      </div>
    </div>
  );
}
