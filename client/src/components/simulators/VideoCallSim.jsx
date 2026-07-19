import React, { useState, useEffect, useRef } from 'react';

// Master configuration for all Video/Audio Deepfake Scams
const CALL_PROFILES = {
  58: { 
    name: 'Mom', icon: '👩', role: 'Family', color: '#ff6b6b', formType: 'upi',
    title: 'Emergency Hospital Payment', desc: 'Send ₹15,000 urgently',
    transcripts: [
      { speaker: 'them', text: 'Beta... I was in an accident...', delay: 1500 },
      { speaker: 'you', text: 'Mom?! Are you okay?', delay: 4000 },
      { speaker: 'them', text: 'I need ₹15,000 for the clinic right now. Please hurry...', delay: 7000 },
    ]
  },
  59: { 
    name: 'Richard (CEO)', icon: '👔', role: 'Executive', color: '#3b82f6', formType: 'wire',
    title: 'Confidential Vendor Wire', desc: 'Authorize $250,000 Transfer',
    transcripts: [
      { speaker: 'them', text: 'Listen closely, I am in a confidential board meeting.', delay: 1500 },
      { speaker: 'you', text: 'Yes sir, how can I help?', delay: 4000 },
      { speaker: 'them', text: 'We are acquiring a startup. I need you to bypass standard protocol and wire the funds immediately.', delay: 7000 },
    ]
  },
  60: { 
    name: 'Amazon Support', icon: '🎧', role: 'Customer Care', color: '#f59e0b', formType: 'otp',
    title: 'Account Verification', desc: 'Enter OTP to secure account',
    transcripts: [
      { speaker: 'them', text: 'Hello, this is Amazon Fraud Prevention. Someone is trying to buy a MacBook on your account.', delay: 1500 },
      { speaker: 'you', text: 'I didn\'t order that! Cancel it!', delay: 5000 },
      { speaker: 'them', text: 'I can cancel it, but I need you to verify your identity. I am sending an OTP to your phone.', delay: 8000 },
    ]
  },
  61: { 
    name: 'Google HR', icon: '💼', role: 'Recruitment', color: '#10b981', formType: 'fee',
    title: 'Interview Registration', desc: 'Pay ₹500 Slot Fee',
    transcripts: [
      { speaker: 'them', text: 'Congratulations! You cleared the first round for the Software Engineer role.', delay: 1500 },
      { speaker: 'you', text: 'That is amazing news, thank you!', delay: 4000 },
      { speaker: 'them', text: 'To schedule the technical video round, you just need to pay the refundable scheduling fee.', delay: 7000 },
    ]
  },
  64: { 
    name: 'Bank Security', icon: '🏦', role: 'Support', color: '#e74c3c', formType: 'otp',
    title: 'Verify Your Identity', desc: 'Enter the 6-digit OTP sent to your phone',
    transcripts: [
      { speaker: 'them', text: 'Hello, this is the fraud department. We detected a suspicious login attempt on your account.', delay: 1500 },
      { speaker: 'you', text: 'Oh no, was my account hacked?', delay: 4000 },
      { speaker: 'them', text: 'We blocked it, but we need to verify you are the account owner. Please enter the OTP I just sent you.', delay: 7000 },
    ]
  }
};

export default function VideoCallSim({ onComplete, moduleId }) {
  const [phase, setPhase] = useState('incoming'); 
  const [callTimer, setCallTimer] = useState(0);
  const [transcriptIndex, setTranscriptIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [pinValue, setPinValue] = useState('');
  const [loading, setLoading] = useState(false);
  const transcriptRef = useRef(null);

  // Default to ID 58 if somehow loaded without an ID
  const profile = CALL_PROFILES[moduleId] || CALL_PROFILES[58];

  useEffect(() => {
    if (phase !== 'call') return;
    const interval = setInterval(() => setCallTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'call') return;
    profile.transcripts.forEach((item, idx) => {
      const timeout = setTimeout(() => setTranscriptIndex(idx + 1), item.delay);
      return () => clearTimeout(timeout);
    });
  }, [phase, profile]);

  useEffect(() => {
    transcriptRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcriptIndex]);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const exposed = profile.formType === 'otp' ? ['Phone Number', 'Secret OTP'] 
                    : profile.formType === 'wire' ? ['Corporate Credentials', 'Financial Authority'] 
                    : ['UPI ID', 'Bank Access'];
      onComplete(exposed);
    }, 1500);
  };

  if (phase === 'incoming') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.7)', height: '680px', display: 'flex',
        flexDirection: 'column', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: `linear-gradient(180deg, ${profile.color}40 0%, #1a1a2e 50%, #0f0f1a 100%)`
      }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: '130px', height: '130px', borderRadius: '50%', background: profile.color,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', marginBottom: '25px',
            boxShadow: `0 0 0 12px ${profile.color}20, 0 0 0 24px ${profile.color}10`
          }}>
            {profile.icon}
          </div>
          <h2 style={{ color: '#fff', margin: '0 0 6px', fontSize: '1.6rem' }}>{profile.name}</h2>
          <p style={{ color: profile.color, margin: '12px 0 0', fontSize: '0.85rem' }}>📱 Incoming Video Call...</p>
        </div>

        <div style={{ padding: '20px 30px 50px', display: 'flex', justifyContent: 'center', gap: '70px' }}>
          <div style={{ textAlign: 'center' }}>
            <button style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#e74c3c', border: 'none', color: '#fff', fontSize: '1.6rem', cursor: 'pointer' }}>✕</button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setPhase('call')} style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#2ecc71', border: 'none', color: '#fff', fontSize: '1.6rem', cursor: 'pointer' }}>📞</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.7)', height: '680px', display: 'flex',
      flexDirection: 'column', background: '#0f0f1a', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ background: '#1a1a2e', padding: '20px', textAlign: 'center', flexShrink: 0 }}>
        <h3 style={{ color: '#fff', margin: '0 0 4px', fontSize: '1.1rem' }}>{profile.name} {profile.icon}</h3>
        <span style={{ color: '#2ecc71', fontSize: '0.85rem' }}>🟢 {formatTime(callTimer)}</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', background: '#111118' }}>
        {profile.transcripts.slice(0, transcriptIndex).map((t, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: t.speaker === 'you' ? 'flex-end' : 'flex-start', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.7rem', color: '#666', marginBottom: '3px' }}>
              {t.speaker === 'you' ? '🧑 You' : profile.icon + ' ' + profile.name}
            </span>
            <div style={{ background: t.speaker === 'you' ? '#1a3a2e' : '#2d1b4e', padding: '10px 14px', borderRadius: '14px', maxWidth: '85%', color: '#e8e8e8', fontSize: '0.9rem' }}>
              {t.text}
            </div>
          </div>
        ))}
        <div ref={transcriptRef} />

        {(transcriptIndex >= profile.transcripts.length) && (
          <div style={{ background: '#1a1a2e', border: `1px solid ${profile.color}`, borderRadius: '14px', padding: '20px', marginTop: '16px' }}>
            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <h4 style={{ color: '#fff', margin: '6px 0 2px', fontSize: '0.95rem' }}>{profile.title}</h4>
              <p style={{ color: profile.color, margin: 0, fontSize: '0.8rem' }}>{profile.desc}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '12px' }}>
                <input type="text" placeholder={profile.formType === 'otp' ? 'Enter 6-Digit OTP' : 'Enter Details'} value={inputValue} onChange={e => setInputValue(e.target.value)}
                  style={{ width: '100%', padding: '10px', background: '#0d0d1a', border: '1px solid #333', borderRadius: '8px', color: '#fff', boxSizing: 'border-box' }} required />
              </div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', background: loading ? '#555' : profile.color, color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Processing...' : 'Confirm'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}