import React, { useState, useEffect, useRef } from 'react';

export default function JobOfferSim({ onComplete }) {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am HR from Amazon Web Services. We are hiring part-time workers.', time: '10:00 AM' },
    { sender: 'bot', text: 'You can earn ₹2000-₹5000 daily just by liking YouTube videos. Are you interested?', time: '10:01 AM' }
  ]);
  const [inputText, setInputText] = useState('');
  const [phase, setPhase] = useState(0); 
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = { sender: 'user', text: inputText, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Bot logic
    setTimeout(() => {
      let botMsg = {};
      const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      
      if (phase === 0) {
        botMsg = { sender: 'bot', text: 'Great! To start earning, you just need to create an account on our task portal.', time };
        setPhase(1);
      } else if (phase === 1) {
        botMsg = { sender: 'bot', text: 'However, to activate your account and verify you are a real person, there is a fully refundable registration fee of ₹999.', time };
        setPhase(2);
      } else if (phase === 2) {
        botMsg = { 
          sender: 'bot', 
          text: 'Please pay the ₹999 registration fee at this UPI ID: hr.amazon@okicici. Once paid, send the UTR number here.', 
          time,
          isPayment: true
        };
        setPhase(3);
      } else if (phase === 3) {
        // When they send the UTR or anything after payment prompt
        const exposedArray = ['UTR Transaction Number'];
        onComplete(exposedArray);
        return;
      }
      
      setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      background: '#e5ddd5',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column',
      height: '600px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      {/* Chat Header */}
      <div style={{ background: '#075e54', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ width: '40px', height: '40px', background: '#ccc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
          👩‍💼
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>HR Priya - Amazon</h3>
          <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>online</p>
        </div>
      </div>

      {/* Messages Area */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ background: '#d9fdd3', alignSelf: 'center', padding: '5px 15px', borderRadius: '10px', fontSize: '0.8rem', color: '#666', marginBottom: '10px' }}>
          Today
        </div>
        
        {messages.map((msg, i) => (
          <div key={i} style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            background: msg.sender === 'user' ? '#d9fdd3' : '#fff',
            padding: '10px 15px',
            borderRadius: '12px',
            maxWidth: '80%',
            position: 'relative',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}>
            <p style={{ margin: '0 0 5px', color: '#333', fontSize: '0.95rem', lineHeight: '1.4' }}>
              {msg.text}
            </p>
            {msg.isPayment && (
              <div style={{ background: '#f0f0f0', padding: '10px', borderRadius: '8px', marginTop: '10px', textAlign: 'center' }}>
                <strong>UPI: hr.amazon@okicici</strong>
              </div>
            )}
            <span style={{ fontSize: '0.7rem', color: '#999', display: 'block', textAlign: 'right' }}>
              {msg.time} {msg.sender === 'user' && '✓✓'}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div style={{ background: '#f0f0f0', padding: '10px' }}>
        {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 6px 6px' }}>{error}</p>}
        <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => { setInputText(e.target.value); setError(''); }}
            placeholder={phase === 3 ? "Enter UTR number..." : "Type a message"}
            style={{ 
              flex: 1, 
              padding: '12px 15px', 
              border: 'none', 
              borderRadius: '24px',
              outline: 'none',
              fontSize: '1rem'
            }}
          />
          <button type="submit" style={{
            background: '#00a884',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
