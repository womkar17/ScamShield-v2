import React, { useState, useEffect, useRef } from 'react';

export default function GoldCoinSim({ onComplete }) {
  const [messages, setMessages] = useState([
    { sender: 'scammer', text: 'Namaste saheb. Main Ramu bol raha hu, contractor Ramesh ka aadmi.', time: '09:30 AM' },
    { sender: 'scammer', text: 'Saheb, plot par khudai karte waqt hume ek matka mila hai jisme purane zamane ke sone ke sikke (gold coins) hain.', time: '09:31 AM' },
    { sender: 'scammer', text: 'Hume dar hai police pakad legi. Hum garib log hain, aap inhe aade daam (half price) mein le lijiye.', time: '09:32 AM' },
    { sender: 'scammer', image: '💰🪙🪙', type: 'emoji_image', time: '09:32 AM' }
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
        botMsg = { sender: 'scammer', text: 'Bazar me iski keemat 10 lakh hai, hum aapko sirf 2 lakh me de denge. Par hume gaon bhagna hai.', time };
        setPhase(1);
      } else if (phase === 1) {
        botMsg = { sender: 'scammer', text: 'Aap abhi 10,000 rupaye advance bhej dijiye toh hum kisi aur ko nahi denge aur aapke paas le aayenge.', time };
        setPhase(2);
      } else if (phase === 2) {
        botMsg = { 
          sender: 'scammer', 
          text: 'Ye mera GPay number hai: 9876543210. Paise bhej kar screenshot bhejo.', 
          time,
          isPayment: true
        };
        setPhase(3);
      } else if (phase === 3) {
        const exposed = [];
        exposed.push('Interest in Buying Gold Coins');
        exposed.push('Willingness to Pay Advance');
        exposed.push('UPI/GPay Payment Engagement');
        exposed.push('Chat Conversation History');
        onComplete(exposed);
        return;
      }
      
      setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      background: '#efe7dd',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column',
      height: '600px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundImage: 'url("https://transparenttextures.com/patterns/cubes.png")'
    }}>
      {/* WhatsApp Header */}
      <div style={{ background: '#075e54', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ width: '40px', height: '40px', background: '#ccc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', overflow: 'hidden' }}>
          👷🏽
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>+91 98765 43210</h3>
          <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>online</p>
        </div>
      </div>

      {/* Messages Area */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ background: '#e1f5fe', alignSelf: 'center', padding: '5px 15px', borderRadius: '10px', fontSize: '0.8rem', color: '#666', marginBottom: '10px', boxShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>
          Messages and calls are end-to-end encrypted.
        </div>
        
        {messages.map((msg, i) => (
          <div key={i} style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            background: msg.sender === 'user' ? '#dcf8c6' : '#fff',
            padding: msg.type === 'emoji_image' ? '15px' : '8px 12px',
            borderRadius: '8px',
            maxWidth: '80%',
            position: 'relative',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}>
            {msg.type === 'emoji_image' ? (
              <div style={{ fontSize: '3rem', textAlign: 'center' }}>{msg.image}</div>
            ) : (
              <p style={{ margin: '0 0 5px', color: '#303030', fontSize: '0.95rem', lineHeight: '1.4' }}>
                {msg.text}
              </p>
            )}
            
            {msg.isPayment && (
              <div style={{ background: '#f0f0f0', padding: '10px', borderRadius: '8px', marginTop: '10px', textAlign: 'center' }}>
                <strong>GPay: 9876543210</strong>
              </div>
            )}
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
              <span style={{ fontSize: '0.65rem', color: '#999' }}>{msg.time}</span>
              {msg.sender === 'user' && <span style={{ color: '#4fc3f7', fontSize: '0.7rem' }}>✓✓</span>}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div style={{ background: '#f0f0f0', padding: '10px' }}>
        <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px' }}>
          <div style={{
            flex: 1,
            background: 'white',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            padding: '5px 15px'
          }}>
            <span style={{ color: '#999', fontSize: '1.2rem', marginRight: '10px' }}>😀</span>
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Message"
              style={{ 
                flex: 1, 
                padding: '8px 0', 
                border: 'none', 
                outline: 'none',
                fontSize: '1rem'
              }}
            />
            <span style={{ color: '#999', fontSize: '1.2rem', marginLeft: '10px' }}>📷</span>
          </div>
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
