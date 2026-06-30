import React, { useState, useEffect, useRef } from 'react';

export default function SIMUpgradeSim({ onComplete }) {
  const [phase, setPhase] = useState('incoming'); // 'incoming' | 'call' | 'otp'
  const [callTime, setCallTime] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [generatedOtp] = useState(() => String(Math.floor(100000 + Math.random() * 900000)));
  const [showOtpNotif, setShowOtpNotif] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const timerRef = useRef(null);
  const messagesEndRef = useRef(null);

  const dialogues = [
    { sender: 'caller', text: 'Good afternoon, sir/madam. This is Rohit Sharma calling from Jio Customer Care, Employee ID: JIO-28451.' },
    { sender: 'caller', text: 'I am calling to inform you that your current 4G SIM card is being deactivated by the telecom department as part of the mandatory 5G upgrade.' },
    { sender: 'caller', text: 'If you do not upgrade within the next 2 hours, your number will be permanently deactivated and you will lose this mobile number.' },
    { sender: 'caller', text: 'Don\'t worry, the upgrade is completely free. We just need to verify your identity.' },
    { sender: 'caller', text: 'I am sending a 6-digit OTP to your registered mobile number right now. Please share it with me so I can process the upgrade.' },
  ];

  useEffect(() => {
    if (phase === 'call') {
      timerRef.current = setInterval(() => {
        setCallTime(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [phase]);

  useEffect(() => {
    if (phase === 'call' && dialogueIndex < dialogues.length) {
      setTyping(true);
      const timer = setTimeout(() => {
        setTyping(false);
        setDialogueIndex(i => i + 1);
        if (dialogueIndex === dialogues.length - 1) {
          setTimeout(() => {
            setShowOtpNotif(true);
            setTimeout(() => setPhase('otp'), 2000);
          }, 1500);
        }
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [phase, dialogueIndex]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [dialogueIndex, typing]);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const handleAcceptCall = () => setPhase('call');

  const handleShareOtp = (e) => {
    e.preventDefault();
    setError('');
    if (otpInput.length !== 6) {
      setError('Please enter the complete 6-digit OTP.');
      return;
    }
    setLoading(true);
    const exposedArray = ['OTP Code', 'Phone Number Access', 'SIM Control'];
    setTimeout(() => onComplete(exposedArray), 1500);
  };

  // Incoming call screen
  if (phase === 'incoming') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        borderRadius: '32px', overflow: 'hidden', height: '680px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '40px 20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', position: 'relative', color: '#fff'
      }}>
        {/* Status bar */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', opacity: 0.7, padding: '0 5px' }}>
          <span>12:34</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <span>5G</span>
            <span>🔋</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <div style={{
            width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, #0052cc, #0066ff)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
            fontSize: '2.5rem', boxShadow: '0 0 40px rgba(0,102,255,0.4)'
          }}>📞</div>
          <h2 style={{ margin: '0 0 5px', fontSize: '1.5rem', fontWeight: '600' }}>Jio Customer Care</h2>
          <p style={{ margin: 0, opacity: 0.6, fontSize: '0.95rem' }}>+91 199-0000-199</p>
          <p style={{ margin: '8px 0 0', opacity: 0.5, fontSize: '0.85rem' }}>Incoming call...</p>
        </div>

        <div style={{ display: 'flex', gap: '60px', marginBottom: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => {}} style={{
              width: '70px', height: '70px', borderRadius: '50%', background: '#ff3b30', border: 'none',
              color: '#fff', fontSize: '1.8rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,59,48,0.4)'
            }}>✕</button>
            <p style={{ margin: '8px 0 0', fontSize: '0.8rem', opacity: 0.7 }}>Decline</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={handleAcceptCall} style={{
              width: '70px', height: '70px', borderRadius: '50%', background: '#34c759', border: 'none',
              color: '#fff', fontSize: '1.8rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(52,199,89,0.4)'
            }}>✓</button>
            <p style={{ margin: '8px 0 0', fontSize: '0.8rem', opacity: 0.7 }}>Accept</p>
          </div>
        </div>
      </div>
    );
  }

  // Active call with dialogue
  if (phase === 'call') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        borderRadius: '32px', overflow: 'hidden', height: '680px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex', flexDirection: 'column', color: '#fff', position: 'relative',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
      }}>
        {/* Status bar */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', opacity: 0.7, padding: '15px 25px', boxSizing: 'border-box' }}>
          <span>12:34</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}><span>5G</span><span>🔋</span></div>
        </div>

        {/* Caller info */}
        <div style={{ textAlign: 'center', padding: '10px 20px 15px' }}>
          <div style={{
            width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #0052cc, #0066ff)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: '2rem'
          }}>📞</div>
          <h3 style={{ margin: '0 0 4px', fontSize: '1.2rem' }}>Jio Customer Care</h3>
          <p style={{ margin: 0, color: '#34c759', fontSize: '0.9rem' }}>{formatTime(callTime)}</p>
        </div>

        {/* OTP Notification banner */}
        {showOtpNotif && (
          <div style={{
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', margin: '0 15px', padding: '12px 15px',
            borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px'
          }}>
            <span style={{ fontSize: '1.3rem' }}>💬</span>
            <div>
              <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: '600' }}>JioOTP</p>
              <p style={{ margin: '2px 0 0', fontSize: '0.78rem', opacity: 0.9 }}>Your OTP is {generatedOtp}. Do not share this with anyone. - Jio</p>
            </div>
          </div>
        )}

        {/* Call dialogue */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '15px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {dialogues.slice(0, dialogueIndex).map((d, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '16px', borderTopLeftRadius: '4px',
              maxWidth: '90%', fontSize: '0.9rem', lineHeight: '1.5', backdropFilter: 'blur(5px)'
            }}>
              <span style={{ fontSize: '0.7rem', color: '#aaa', display: 'block', marginBottom: '4px' }}>🔊 Caller</span>
              {d.text}
            </div>
          ))}
          {typing && (
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '16px', borderTopLeftRadius: '4px', maxWidth: '40%' }}>
              <span style={{ fontSize: '0.7rem', color: '#aaa', display: 'block', marginBottom: '4px' }}>🔊 Caller</span>
              <span style={{ letterSpacing: '3px', fontSize: '1.2rem' }}>...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Call controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', padding: '15px 20px 30px', flexWrap: 'wrap' }}>
          {['🔇 Mute', '🔊 Speaker', '⏸ Hold', '📱 Keypad'].map((label, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', cursor: 'pointer'
              }}>{label.split(' ')[0]}</div>
              <span style={{ fontSize: '0.65rem', opacity: 0.6, marginTop: '4px', display: 'block' }}>{label.split(' ')[1]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // OTP sharing screen
  return (
    <div style={{
      maxWidth: '380px', margin: '0 auto', background: '#fff', borderRadius: '32px', overflow: 'hidden',
      height: '680px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex', flexDirection: 'column', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', color: '#1a1a1a'
    }}>
      {/* Status bar */}
      <div style={{ background: '#0a1628', color: '#fff', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '12px 25px' }}>
        <span>12:36</span>
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}><span>5G</span><span>🔋</span></div>
      </div>

      {/* Active call banner */}
      <div style={{ background: '#34c759', padding: '8px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '600' }}>📞 Jio Customer Care — {formatTime(callTime)}</span>
        <span style={{ color: '#fff', fontSize: '0.75rem', opacity: 0.8 }}>On call</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '25px 20px' }}>
        {/* OTP notification */}
        <div style={{
          background: '#f0f4ff', border: '1px solid #c7d2fe', borderRadius: '12px', padding: '16px', marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.3rem' }}>💬</span>
            <span style={{ fontWeight: '600', color: '#1e40af', fontSize: '0.9rem' }}>Message from JIO-OTP</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#374151', lineHeight: '1.5' }}>
            Your OTP for SIM upgrade verification is <strong style={{ color: '#1e40af', fontSize: '1.1rem', letterSpacing: '2px' }}>{generatedOtp}</strong>. 
            Valid for 10 minutes. Do NOT share this OTP with anyone. — Jio
          </p>
        </div>

        {/* Warning from caller */}
        <div style={{
          background: '#fef3c7', border: '1px solid #fbbf24', borderRadius: '12px', padding: '14px', marginBottom: '25px'
        }}>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#92400e', lineHeight: '1.5' }}>
            🔊 <strong>Caller:</strong> "Sir/Madam, I can see the OTP has been delivered to your phone. 
            Please read out the 6-digit number so I can complete your 5G upgrade immediately. 
            Your SIM will be deactivated in 1 hour 45 minutes."
          </p>
        </div>

        {/* OTP Input form */}
        <form onSubmit={handleShareOtp}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', fontSize: '0.95rem', color: '#1f2937' }}>
            Share OTP with the caller:
          </label>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
            {[0, 1, 2, 3, 4, 5].map(i => (
              <input key={i} type="text" maxLength="1" value={otpInput[i] || ''}
                style={{
                  width: '45px', height: '55px', textAlign: 'center', fontSize: '1.4rem', fontWeight: '700',
                  border: '2px solid #d1d5db', borderRadius: '10px', outline: 'none', color: '#1f2937',
                  background: otpInput[i] ? '#e0f2fe' : '#fff'
                }}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, '');
                  if (val) {
                    const newOtp = otpInput.split('');
                    newOtp[i] = val;
                    setOtpInput(newOtp.join(''));
                    const next = e.target.nextElementSibling;
                    if (next) next.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && !otpInput[i]) {
                    const prev = e.target.previousElementSibling;
                    if (prev) prev.focus();
                    const newOtp = otpInput.split('');
                    newOtp[Math.max(0, i - 1)] = '';
                    setOtpInput(newOtp.join('').trim());
                  }
                }}
              />
            ))}
          </div>

          {error && <p style={{ color: '#c62828', fontSize: '0.85rem', margin: '0 0 10px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={otpInput.length < 6 || loading} style={{
            width: '100%', padding: '14px', background: loading ? '#9ca3af' : '#0052cc', color: '#fff', border: 'none',
            borderRadius: '12px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: loading ? 'none' : '0 4px 12px rgba(0,82,204,0.3)'
          }}>
            {loading ? 'Sharing OTP...' : 'Share OTP with Caller'}
          </button>
        </form>

        <p style={{ marginTop: '15px', fontSize: '0.78rem', color: '#9ca3af', textAlign: 'center', lineHeight: '1.4' }}>
          ⚠️ Warning: Never share OTP with anyone, even if they claim to be from your telecom provider.
        </p>
      </div>
    </div>
  );
}
