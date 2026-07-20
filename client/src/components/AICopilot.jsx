import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getApiUrl } from '../lib/api';

export default function AICopilot() {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I am your **ScamShield AI Copilot** 🤖.\n\nYou can ask me *anything*—whether it's cybersecurity questions, pasting a suspicious SMS/URL to scan for red flags, or general advice!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [engine, setEngine] = useState('groq'); // 'groq' or 'gemini'
  const [activeEngineLabel, setActiveEngineLabel] = useState('Groq (Llama-3.3)');
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const apiMessages = updatedMessages.map(m => ({ role: m.role, content: m.content }));
      
      let replyText = null;

      try {
        const apiUrl = getApiUrl();
        const res = await fetch(`${apiUrl}/api/ai/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: apiMessages, engine })
        });
        const data = await res.json();
        if (data.ok) {
          replyText = data.reply;
          if (data.engine) setActiveEngineLabel(data.engine);
        }
      } catch (backendErr) {
        // Vercel Serverless Fallback: call Groq / Gemini directly from client!
        const groqKey = import.meta.env.VITE_GROQ_API_KEY || '';
        const geminiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

        if (engine === 'groq' || !geminiKey) {
          const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${groqKey}`
            },
            body: JSON.stringify({
              model: 'llama-3.3-70b-versatile',
              messages: [
                { role: 'system', content: 'You are ScamShield AI Copilot, a helpful cybersecurity assistant.' },
                ...apiMessages
              ],
              temperature: 0.7
            })
          });
          const groqData = await groqRes.json();
          replyText = groqData.choices?.[0]?.message?.content || 'Sorry, AI response could not be generated.';
          setActiveEngineLabel('Groq (Llama-3.3 Cloud)');
        } else {
          const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: apiMessages.map(m => ({
                role: m.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: m.content }]
              }))
            })
          });
          const geminiData = await geminiRes.json();
          replyText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, AI response could not be generated.';
          setActiveEngineLabel('Gemini (Cloud Flash)');
        }
      }

      if (replyText) {
        setMessages(prev => [...prev, { role: 'assistant', content: replyText }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: "⚠️ Could not generate response from AI engines." }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "⚠️ **Network Error:** Failed to communicate with AI servers." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickScan = () => {
    setInput("Please analyze this suspicious text/URL for scams and red flags: ");
  };

  if (!isLoggedIn || location.pathname === '/' || location.pathname.startsWith('/auth') || location.pathname.startsWith('/login') || location.pathname.startsWith('/register')) {
    return null;
  }

  return (
    <div className={`ai-copilot-container ${isOpen ? 'is-open' : ''}`} style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {/* Closed State: Floating Robot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            transition: 'all 0.3s ease',
            color: '#fff'
          }}
          title="Open ScamShield AI Copilot"
        >
          🤖
        </button>
      )}

      {/* Open State: Chat Window */}
      {isOpen && (
        <div
          className="ai-copilot-window"
          style={{
            width: '380px',
            height: '560px',
            background: 'rgba(15, 23, 42, 0.96)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(168, 85, 247, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            fontFamily: "'Inter', sans-serif"
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '24px' }}>🤖</span>
              <div>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#fff' }}>ScamShield Copilot</h3>
                <span style={{ fontSize: '11px', color: '#a855f7', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                  {activeEngineLabel}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Engine Toggle */}
              <button
                onClick={() => setEngine(prev => prev === 'groq' ? 'gemini' : 'groq')}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '4px 8px',
                  color: '#e2e8f0',
                  fontSize: '11px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
                title="Toggle AI Engine"
              >
                {engine === 'groq' ? '⚡ Groq' : '🧠 Gemini'}
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '18px',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Quick Action Pill */}
          <div style={{ padding: '8px 16px', background: 'rgba(0, 0, 0, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', gap: '8px' }}>
            <button
              onClick={handleQuickScan}
              style={{
                background: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                borderRadius: '20px',
                padding: '4px 10px',
                color: '#d8b4fe',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
            >
              🚨 Quick Scam Scan
            </button>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {messages.map((msg, index) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={index}
                  style={{
                    alignSelf: isUser ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    padding: '12px 14px',
                    borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: isUser ? 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)' : 'rgba(30, 41, 59, 0.8)',
                    border: isUser ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '13.5px',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    boxShadow: isUser ? '0 4px 12px rgba(168, 85, 247, 0.3)' : 'none'
                  }}
                >
                  {msg.content}
                </div>
              );
            })}
            {loading && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '10px 16px',
                  borderRadius: '16px',
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#a855f7',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  animation: 'pulse 1.5s infinite'
                }}
              >
                🤖 Analyzing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            className="ai-copilot-form"
            onSubmit={handleSend}
            style={{
              padding: '12px 16px',
              background: 'rgba(15, 23, 42, 0.9)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              gap: '8px'
            }}
          >
            <input
              className="ai-copilot-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={(e) => {
                setTimeout(() => {
                  e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
              }}
              placeholder="Ask AI or paste scam link..."
              disabled={loading}
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: 'rgba(0, 0, 0, 0.4)',
                color: '#fff',
                fontSize: '13px',
                outline: 'none'
              }}
            />
            <button
              className="ai-copilot-submit"
              type="submit"
              disabled={loading || !input.trim()}
              style={{
                background: input.trim() && !loading ? 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '12px',
                padding: '0 16px',
                color: '#fff',
                fontWeight: '600',
                cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px'
              }}
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
