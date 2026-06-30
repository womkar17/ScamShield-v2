import React, { useState, useEffect, useRef } from 'react';

export default function ParcelSim({ onComplete }) {
  const [phase, setPhase] = useState('sms'); // 'sms' | 'videocall' | 'payment'
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const [formData, setFormData] = useState({ name: '', upi: '', amount: '15000' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  const dialogues = [
    { sender: 'officer', text: 'Good afternoon. I am Inspector Vijay Mehra, Badge #CUS-4782, from the Central Bureau of Customs, Mumbai Division.' },
    { sender: 'officer', text: 'We have intercepted an international parcel from Shanghai, China addressed to your name and Aadhaar number. Tracking ID: FX-IND-8847261.' },
    { sender: 'officer', text: 'Upon inspection, the parcel was found to contain 5 fake passports, 200 grams of undeclared substances, and ₹48 lakhs in foreign currency.' },
    { sender: 'officer', text: 'This is a serious offense under NDPS Act and Foreign Exchange Management Act. An FIR has been registered against you.' },
    { sender: 'you', text: 'But I never ordered any parcel! This must be a mistake!' },
    { sender: 'officer', text: 'Sir/Madam, your Aadhaar and PAN card details match the receiver. We have already informed the CBI.' },
    { sender: 'officer', text: 'However, if you cooperate, we can resolve this before the arrest warrant is issued. You need to pay a refundable customs clearance fee of ₹15,000 to release the parcel for investigation.' },
    { sender: 'officer', text: 'If you do not pay within 30 minutes, the Mumbai Police Cyber Cell will be forced to take action. I am transferring you to the payment portal now.' },
  ];

  useEffect(() => {
    if (phase === 'videocall' && dialogueIndex < dialogues.length) {
      setTyping(true);
      const delay = dialogues[dialogueIndex]?.sender === 'you' ? 1500 : 3000;
      const timer = setTimeout(() => {
        setTyping(false);
        setDialogueIndex(i => i + 1);
        if (dialogueIndex === dialogues.length - 1) {
          setTimeout(() => setPhase('payment'), 2000);
        }
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [phase, dialogueIndex]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [dialogueIndex, typing]);

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!formData.name.trim() || !formData.upi.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Full Name', 'UPI ID', 'Payment Amount'];
    setTimeout(() => onComplete(exposedArray), 1500);
  };

  // SMS screen
  if (phase === 'sms') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', background: '#f5f5f5', borderRadius: '32px', overflow: 'hidden',
        height: '680px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex', flexDirection: 'column', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', color: '#1a1a1a'
      }}>
        {/* Status bar */}
        <div style={{ background: '#fff', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '12px 25px', color: '#333' }}>
          <span>2:45 PM</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}><span>4G</span><span>🔋</span></div>
        </div>

        {/* Messages header */}
        <div style={{ background: '#fff', padding: '10px 20px', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.1rem', cursor: 'pointer', color: '#007aff' }}>← </span>
          <div style={{ width: '35px', height: '35px', background: '#4a148c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '700', fontSize: '0.85rem' }}>FE</div>
          <div>
            <p style={{ margin: 0, fontWeight: '600', fontSize: '0.95rem' }}>FedEx India</p>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#999' }}>+91 89XX-XXXX-47</p>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* SMS messages */}
          <div style={{ alignSelf: 'center', fontSize: '0.75rem', color: '#999', marginBottom: '5px' }}>Today 2:43 PM</div>

          <div style={{ background: '#fff', padding: '14px', borderRadius: '16px', borderTopLeftRadius: '4px', maxWidth: '90%', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: '0 0 8px', fontSize: '0.92rem', color: '#333', lineHeight: '1.6' }}>
              <strong>🚨 URGENT: FedEx International</strong><br /><br />
              Dear Customer,<br /><br />
              An international parcel (Tracking: FX-IND-8847261) addressed to your registered address has been held at Mumbai Customs due to suspicious contents.<br /><br />
              Items found: Fake documents, undeclared currency & prohibited substances.<br /><br />
              ⚠️ Legal action will be initiated if not resolved within 2 hours.<br /><br />
              Our customs officer will contact you on video call for verification. Please answer immediately.
            </p>
            <span style={{ fontSize: '0.7rem', color: '#999' }}>2:43 PM</span>
          </div>

          <div style={{ background: '#fff', padding: '14px', borderRadius: '16px', borderTopLeftRadius: '4px', maxWidth: '90%', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#333', lineHeight: '1.6' }}>
              A customs officer is requesting a video call for identity verification. Please join now to avoid FIR registration.
            </p>
            <span style={{ fontSize: '0.7rem', color: '#999' }}>2:44 PM</span>
          </div>
        </div>

        {/* Accept call button */}
        <div style={{ padding: '15px 20px', background: '#fff', borderTop: '1px solid #e0e0e0' }}>
          <button onClick={() => setPhase('videocall')} style={{
            width: '100%', padding: '14px', background: '#34c759', color: '#fff', border: 'none',
            borderRadius: '14px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(52,199,89,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
          }}>
            📹 Join Video Call with Customs Officer
          </button>
        </div>
      </div>
    );
  }

  // Video call with customs officer
  if (phase === 'videocall') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', background: '#111', borderRadius: '32px', overflow: 'hidden',
        height: '680px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex', flexDirection: 'column', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', color: '#fff', position: 'relative'
      }}>
        {/* Video feed area */}
        <div style={{
          flex: '0 0 220px', background: 'linear-gradient(135deg, #1a1a2e, #2d2d44)', position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          {/* Fake officer avatar */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '90px', height: '90px', borderRadius: '50%', background: 'linear-gradient(135deg, #8b4513, #a0522d)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px',
              fontSize: '2.5rem', border: '3px solid rgba(255,255,255,0.2)'
            }}>👮</div>
            <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem' }}>Inspector Vijay Mehra</p>
            <p style={{ margin: '3px 0 0', fontSize: '0.75rem', opacity: 0.6 }}>Central Bureau of Customs</p>
          </div>

          {/* Self view */}
          <div style={{
            position: 'absolute', top: '10px', right: '10px', width: '80px', height: '100px',
            background: '#333', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
          }}>🧑</div>

          {/* Recording indicator */}
          <div style={{
            position: 'absolute', top: '10px', left: '10px', display: 'flex', alignItems: 'center', gap: '5px',
            background: 'rgba(0,0,0,0.5)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.7rem'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff3b30', display: 'inline-block' }} />
            RECORDING
          </div>
        </div>

        {/* Dialogue area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 15px', display: 'flex', flexDirection: 'column', gap: '8px', background: '#1a1a1a' }}>
          {dialogues.slice(0, dialogueIndex).map((d, i) => (
            <div key={i} style={{
              alignSelf: d.sender === 'you' ? 'flex-end' : 'flex-start',
              background: d.sender === 'you' ? '#0b93f6' : 'rgba(255,255,255,0.1)',
              padding: '10px 14px', borderRadius: '14px', maxWidth: '88%', fontSize: '0.85rem', lineHeight: '1.5'
            }}>
              <span style={{ fontSize: '0.65rem', display: 'block', marginBottom: '3px', opacity: 0.6 }}>
                {d.sender === 'you' ? '🧑 You' : '👮 Inspector Mehra'}
              </span>
              {d.text}
            </div>
          ))}
          {typing && (
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 14px', borderRadius: '14px', maxWidth: '40%', fontSize: '0.85rem' }}>
              <span style={{ fontSize: '0.65rem', display: 'block', marginBottom: '3px', opacity: 0.6 }}>
                {dialogues[dialogueIndex]?.sender === 'you' ? '🧑 You' : '👮 Inspector Mehra'}
              </span>
              <span style={{ letterSpacing: '3px' }}>...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Call controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '12px 20px 20px', background: '#111' }}>
          {['🔇', '📹', '🔊', '💬'].map((icon, i) => (
            <div key={i} style={{
              width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', cursor: 'pointer'
            }}>{icon}</div>
          ))}
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%', background: '#ff3b30',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', cursor: 'pointer'
          }}>📞</div>
        </div>
      </div>
    );
  }

  // Payment form
  return (
    <div style={{
      maxWidth: '420px', margin: '0 auto', background: '#fff', borderRadius: '16px', overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#1a1a1a'
    }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #4a0e8f, #7b1fa2)', padding: '20px', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
          <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📦</div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.05rem' }}>FedEx Customs Clearance</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.78rem', opacity: 0.8 }}>Secure Payment Gateway</p>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '5px' }}>
            <span style={{ opacity: 0.8 }}>Tracking ID:</span><span style={{ fontWeight: '600' }}>FX-IND-8847261</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '5px' }}>
            <span style={{ opacity: 0.8 }}>Status:</span><span style={{ color: '#ffcdd2', fontWeight: '600' }}>Held at Customs</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
            <span style={{ opacity: 0.8 }}>Clearance Fee:</span><span style={{ fontWeight: '700', fontSize: '1.05rem' }}>₹15,000</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* Warning */}
        <div style={{ background: '#fff3e0', border: '1px solid #ffcc80', borderRadius: '8px', padding: '12px', marginBottom: '18px' }}>
          <p style={{ margin: 0, fontSize: '0.82rem', color: '#e65100', lineHeight: '1.5' }}>
            ⏱️ <strong>Time remaining:</strong> 28 minutes. Failure to pay will result in FIR registration under Sections 420/467/468 IPC.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.88rem', color: '#333' }}>Full Name (as per Aadhaar) *</label>
            <input type="text" required value={formData.name} onChange={handleChange('name')} placeholder="Enter your full name"
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontSize: '0.9rem' }} />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.88rem', color: '#333' }}>UPI ID *</label>
            <input type="text" required value={formData.upi} onChange={handleChange('upi')} placeholder="yourname@upi"
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontSize: '0.9rem' }} />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.88rem', color: '#333' }}>Amount</label>
            <input type="text" value="₹15,000" readOnly
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontSize: '0.9rem', background: '#f5f5f5', color: '#333', fontWeight: '700' }} />
          </div>

          <div style={{ background: '#f0faf0', borderRadius: '8px', padding: '10px', marginBottom: '15px', fontSize: '0.78rem', color: '#2e7d32', lineHeight: '1.4' }}>
            ✅ This is a fully refundable security deposit. Amount will be returned after investigation is complete (7-10 working days).
          </div>

          {error && <p style={{ color: '#c62828', fontSize: '0.85rem', margin: '0 0 10px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '14px', background: loading ? '#999' : '#7b1fa2', color: '#fff', border: 'none',
            borderRadius: '10px', fontSize: '1rem', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: loading ? 'none' : '0 4px 12px rgba(123,31,162,0.3)'
          }}>
            {loading ? 'Processing Payment...' : 'Pay ₹15,000 via UPI'}
          </button>

          <p style={{ margin: '10px 0 0', fontSize: '0.72rem', color: '#aaa', textAlign: 'center' }}>
            🔒 Secured by FedEx Payment Gateway | Transaction ID: TXN-{Math.floor(Math.random() * 9000000 + 1000000)}
          </p>
        </form>
      </div>
    </div>
  );
}
