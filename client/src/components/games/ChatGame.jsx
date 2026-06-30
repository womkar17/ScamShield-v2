import React, { useState, useEffect, useRef } from 'react';
import ThreatAnalysis from './ThreatAnalysis';

export default function ChatGame({ game, onComplete }) {
  const { data } = game;
  const messages = data.messages || [];
  const choices = data.choices || [];
  
  const [chatHistory, setChatHistory] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [showThreat, setShowThreat] = useState(false);
  const [score, setScore] = useState(0);
  
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isTyping, showChoices]);

  useEffect(() => {
    if (messageIndex < messages.length) {
      receiveMessage();
    } else {
      setShowChoices(true);
    }
  }, [messageIndex]);

  const receiveMessage = () => {
    setIsTyping(true);
    setShowChoices(false);
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, { sender: 'scammer', text: messages[messageIndex].text }]);
      setIsTyping(false);
      setMessageIndex(prev => prev + 1);
    }, 1500);
  };

  const handleChoice = (choice) => {
    setChatHistory(prev => [...prev, { sender: 'user', text: choice.text }]);
    setShowChoices(false);
    
    if (choice.isCorrect) {
      setScore(1);
    }
    
    setTimeout(() => setShowThreat(true), 1500);
  };

  const handleComplete = () => {
    onComplete(score, 1);
  };

  return (
    <div style={{ 
      position: 'relative', width: '100%', maxWidth: '400px', height: '600px', 
      margin: '0 auto', backgroundColor: '#efeae2', borderRadius: '24px', 
      overflow: 'hidden', display: 'flex', flexDirection: 'column', 
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{ backgroundColor: '#008069', color: 'white', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#dfe5e7', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
          👤
        </div>
        <div>
          <div style={{ fontWeight: '600', fontSize: '16px' }}>{data.senderName || 'Unknown Number'}</div>
          <div style={{ fontSize: '13px', opacity: 0.9 }}>online</div>
        </div>
      </div>

      {/* Chat Area */}
      <div style={{ 
        flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', 
        flexDirection: 'column', gap: '8px', 
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' 
      }}>
        {chatHistory.map((msg, idx) => (
          <div key={idx} style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.sender === 'user' ? '#d9fdd3' : 'white',
            padding: '8px 12px',
            borderRadius: '8px',
            borderTopRightRadius: msg.sender === 'user' ? '0px' : '8px',
            borderTopLeftRadius: msg.sender === 'scammer' ? '0px' : '8px',
            maxWidth: '85%',
            boxShadow: '0 1px 0.5px rgba(11,20,26,.13)',
            position: 'relative',
            fontSize: '15px',
            lineHeight: '1.4',
            color: '#111b21'
          }}>
            {msg.text}
          </div>
        ))}
        
        {isTyping && (
          <div style={{ 
            alignSelf: 'flex-start', backgroundColor: 'white', padding: '8px 12px', 
            borderRadius: '8px', borderTopLeftRadius: '0px', fontStyle: 'italic', 
            color: '#8696a0', fontSize: '14px', boxShadow: '0 1px 0.5px rgba(11,20,26,.13)' 
          }}>
            typing...
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Choices Area */}
      {showChoices && choices.length > 0 && (
        <div style={{ backgroundColor: '#f0f2f5', padding: '16px', borderTop: '1px solid #d1d7db', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '13px', color: '#54656f', textAlign: 'center', marginBottom: '4px', fontWeight: '500' }}>Choose your reply:</div>
          {choices.map((choice, idx) => (
            <button key={idx} onClick={() => handleChoice(choice)} style={{
              padding: '12px 16px',
              backgroundColor: 'white',
              border: '1px solid #d1d7db',
              borderRadius: '12px',
              cursor: 'pointer',
              color: '#111b21',
              textAlign: 'center',
              transition: 'background-color 0.2s',
              fontSize: '15px',
              fontWeight: '500',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
            }}
            onMouseOver={e => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseOut={e => e.target.style.backgroundColor = 'white'}
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}

      {showThreat && (
        <ThreatAnalysis data={data.threatAnalysis} onProceed={handleComplete} />
      )}
    </div>
  );
}
