import React, { useState, useEffect, useRef } from 'react';

// Master configuration for all Chat-Based Scams
const CHAT_PROFILES = {
  63: { 
    appName: 'WhatsApp', headerColor: '#075E54', bgImg: 'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png',
    name: 'Sarah 💖', status: 'online', icon: '👩',
    messages: [
      { sender: 'them', text: 'Hey... I really miss you. I wish we could finally meet in person.', delay: 1000 },
      { sender: 'you', text: 'Me too! When are you coming to visit?', delay: 3500 },
      { sender: 'them', text: 'I want to come this weekend! But my bank card just got blocked while booking the flight 😭', delay: 6000 },
      { sender: 'them', text: 'Could you transfer ₹12,000 for the ticket? I promise I will pay you back the second I arrive!', delay: 9000 }
    ],
    formTitle: 'Send Flight Money', formType: 'upi', buttonText: 'Send ₹12,000',
    exposed: ['Bank Account Details', 'UPI PIN', 'Financial Data']
  },
  69: { 
    appName: 'Telegram', headerColor: '#2AABEE', bgImg: 'none', bgColor: '#0f0f1a',
    name: 'Crypto VIP Signals 📈', status: '14,023 members', icon: '💎',
    messages: [
      { sender: 'them', text: '🚨 URGENT SIGNAL: Buy #ETH now! Guaranteed 500% pump in 2 hours!', delay: 1000 },
      { sender: 'them', text: 'Only VIP members get the exact sell target. Send 0.1 BTC to join the VIP club.', delay: 3500 },
      { sender: 'you', text: 'Is this guaranteed?', delay: 6000 },
      { sender: 'them', text: '100% Guaranteed or we refund double. Transfer to our smart contract address below to get the VIP link instantly.', delay: 8500 }
    ],
    formTitle: 'VIP Registration', formType: 'crypto', buttonText: 'Transfer Crypto',
    exposed: ['Crypto Wallet Address', 'Investment Funds']
  },
  71: { 
    appName: 'Snapchat', headerColor: '#FFFC00', bgImg: 'none', bgColor: '#111', textColor: '#000',
    name: 'Alex 🔥', status: 'Typing...', icon: '👱‍♂️',
    messages: [
      { sender: 'them', text: 'Heyy beautiful 😍', delay: 1000 },
      { sender: 'you', text: 'Hey Alex! You promised to video call today?', delay: 3500 },
      { sender: 'them', text: 'My camera is broken right now :( But I bought you a gift!', delay: 6000 },
      { sender: 'them', text: 'I just need you to pay the ₹1,500 customs delivery fee to receive it. Just use the payment link below.', delay: 9000 }
    ],
    formTitle: 'Pay Delivery Fee', formType: 'card', buttonText: 'Pay ₹1,500',
    exposed: ['Credit Card Number', 'CVV', 'Home Address']
  }
};

export default function ChatAppSim({ onComplete, moduleId }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  // Default to ID 63 if not found
  const profile = CHAT_PROFILES[moduleId] || CHAT_PROFILES[63];

  useEffect(() => {
    profile.messages.forEach((msg, idx) => {
      const timeout = setTimeout(() => setMsgIndex(idx + 1), msg.delay);
      return () => clearTimeout(timeout);
    });
  }, [profile]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onComplete(profile.exposed);
    }, 1500);
  };

  const isSnapchat = profile.appName === 'Snapchat';

  return (
    <div style={{
      maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.6)', height: '680px', display: 'flex',
      flexDirection: 'column', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: profile.bgImg !== 'none' ? `url(${profile.bgImg})` : profile.bgColor,
      backgroundSize: 'cover', border: '8px solid #222'
    }}>
      {/* App Header */}
      <div style={{
        background: profile.headerColor, padding: '16px 20px', 
        display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0,
        color: isSnapchat ? '#000' : '#fff'
      }}>
        <div style={{ fontSize: '1.2rem', cursor: 'pointer' }}>←</div>
        <div style={{
          width: '40px', height: '40px', borderRadius: '50%', background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
        }}>
          {profile.icon}
        </div>
        <div>
          <h3 style={{ margin: '0 0 2px', fontSize: '1.1rem', fontWeight: 'bold' }}>{profile.name}</h3>
          <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{profile.status}</span>
        </div>
        <div style={{ marginLeft: 'auto', fontSize: '1.2rem' }}>
          {isSnapchat ? '📷' : '📞'}
        </div>
      </div>

      {/* Chat Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', margin: '10px 0 20px' }}>
          <span style={{ background: 'rgba(0,0,0,0.4)', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem' }}>
            Today
          </span>
        </div>

        {profile.messages.slice(0, msgIndex).map((msg, i) => (
          <div key={i} style={{
            alignSelf: msg.sender === 'you' ? 'flex-end' : 'flex-start',
            maxWidth: '75%', marginBottom: '12px',
            background: msg.sender === 'you' ? (isSnapchat ? '#0B84FF' : '#DCF8C6') : (isSnapchat ? '#FFFC00' : '#fff'),
            color: (msg.sender === 'you' && isSnapchat) ? '#fff' : '#000',
            padding: '10px 14px', borderRadius: '14px',
            borderBottomRightRadius: msg.sender === 'you' ? '4px' : '14px',
            borderBottomLeftRadius: msg.sender === 'you' ? '14px' : '4px',
            fontSize: '0.95rem', lineHeight: '1.4', boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}>
            {msg.text}
          </div>
        ))}

        {/* Typing indicator */}
        {msgIndex > 0 && msgIndex < profile.messages.length && (
          <div style={{ alignSelf: 'flex-start', background: '#fff', padding: '10px 14px', borderRadius: '14px', marginBottom: '12px', color: '#666', fontSize: '0.9rem', fontStyle: 'italic' }}>
            typing...
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Action Form (Appears when chat is done) */}
      {(msgIndex >= profile.messages.length) && (
        <div style={{ background: '#1e1e1e', padding: '20px', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', flexShrink: 0, boxShadow: '0 -4px 20px rgba(0,0,0,0.3)' }}>
          <h4 style={{ color: '#fff', margin: '0 0 16px', textAlign: 'center' }}>{profile.formTitle}</h4>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '12px' }}>
              <input type="text" placeholder={profile.formType === 'card' ? 'Card Number' : profile.formType === 'crypto' ? 'Your Wallet Address' : 'UPI ID'} 
                value={inputValue} onChange={e => setInputValue(e.target.value)} required
                style={{ width: '100%', padding: '12px', background: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', boxSizing: 'border-box', outline: 'none' }} />
            </div>
            {profile.formType !== 'crypto' && (
              <div style={{ marginBottom: '16px' }}>
                <input type="password" placeholder={profile.formType === 'card' ? 'CVV' : 'UPI PIN'} required
                  style={{ width: '100%', padding: '12px', background: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', boxSizing: 'border-box', outline: 'none', letterSpacing: '4px' }} />
              </div>
            )}
            <button type="submit" disabled={loading} style={{
              width: '100%', padding: '14px', background: profile.headerColor, color: isSnapchat ? '#000' : '#fff',
              border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
            }}>
              {loading ? 'Processing...' : profile.buttonText}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}