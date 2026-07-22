import React, { useState, useEffect, useRef } from 'react';

export default function FakeNexusSim({ onComplete }) {
  const [lines, setLines] = useState([
    { type: 'system', text: 'Nexus Repository Manager CLI v3.42.0' },
    { type: 'system', text: 'Connecting to registry: https://nexus.internal-corp.net/repository/npm-private/' },
    { type: 'error', text: 'ERR! 401 Unauthorized - Authentication token expired or invalid.' },
    { type: 'info', text: 'Please re-authenticate to push package "auth-core-lib@1.0.4"' }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0); // 0: wait for username, 1: wait for password/token, 2: processing
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [lines]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || step === 2) return;

    if (step === 0) {
      setLines(prev => [...prev, { type: 'input', text: `username: ${input}` }]);
      setInput('');
      setStep(1);
    } else if (step === 1) {
      setLines(prev => [...prev, { type: 'input', text: `password/token: ${'*'.repeat(input.length)}` }]);
      setInput('');
      setStep(2);
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: 'system', text: 'Authenticating...' }]);
      }, 400);

      setTimeout(() => {
        setLines(prev => [...prev, { type: 'error', text: 'SUCCESS. Credentials harvested by attacker payload.' }]);
        setTimeout(() => {
          onComplete(['Nexus NPM Auth Token', 'Developer Credentials']);
        }, 1200);
      }, 1500);
    }
  };

  return (
    <div style={{
      maxWidth: '600px', margin: '0 auto', borderRadius: '8px', overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column',
      fontFamily: '"Fira Code", "Courier New", Courier, monospace',
      background: '#1e1e1e', border: '1px solid #444', height: '400px'
    }}>
      {/* Fake Terminal Header */}
      <div style={{ background: '#333', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{ color: '#aaa', fontSize: '0.8rem', letterSpacing: '1px' }}>
          developer@macbook-pro:~ 
        </div>
        <div style={{ width: '40px' }} />
      </div>

      {/* Terminal Content */}
      <div style={{ padding: '16px', flex: 1, overflowY: 'auto', color: '#d4d4d4', fontSize: '0.9rem', lineHeight: '1.5' }}>
        {lines.map((line, idx) => (
          <div key={idx} style={{ 
            color: line.type === 'error' ? '#f44336' : line.type === 'info' ? '#2196f3' : line.type === 'input' ? '#4caf50' : '#d4d4d4',
            marginBottom: '4px'
          }}>
            {line.text}
          </div>
        ))}
        
        {step < 2 && (
          <form onSubmit={handleSubmit} style={{ display: 'flex', marginTop: '8px' }}>
            <span style={{ color: '#4caf50', marginRight: '8px' }}>
              {step === 0 ? 'username:' : 'password/token:'}
            </span>
            <input
              type={step === 0 ? 'text' : 'password'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              style={{
                background: 'transparent', border: 'none', color: '#d4d4d4', flex: 1,
                fontFamily: 'inherit', fontSize: 'inherit', outline: 'none'
              }}
            />
          </form>
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
}
