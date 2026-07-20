import React from 'react';

export default function ThreatAnalysis({ data, analysis, threatAnalysis, onProceed, onContinue, onComplete }) {
  const info = data || analysis || threatAnalysis || {
    psychology: "Scammers leverage urgency, emotional pressure, and authority impersonation to bypass logical scrutiny.",
    payload: "May lead to credential theft, unauthorized financial transfers, or malware execution.",
    defense: "Always verify unexpected or urgent requests through a separate, trusted verification channel."
  };

  const handleNext = () => {
    if (typeof onProceed === 'function') return onProceed();
    if (typeof onContinue === 'function') return onContinue();
    if (typeof onComplete === 'function') return onComplete(true);
  };

  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
      backgroundColor: 'rgba(15, 23, 42, 0.95)', color: '#f8fafc', 
      display: 'flex', flexDirection: 'column', padding: '24px', 
      justifyContent: 'center', alignItems: 'center', zIndex: 1000,
      backdropFilter: 'blur(8px)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#1e293b',
        padding: '32px',
        borderRadius: '20px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        maxWidth: '450px',
        width: '100%',
        border: '1px solid #334155'
      }}>
        <h2 style={{ 
          color: '#ef4444', 
          marginTop: 0, 
          borderBottom: '1px solid #334155', 
          paddingBottom: '16px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          fontSize: '24px'
        }}>
          <span>⚠️</span> Threat Analysis
        </h2>
        
        <div style={{ marginTop: '24px' }}>
          <Section title="Psychological Tactic" content={info.psychology || "Scammers leverage urgency and emotional pressure to force hasty decisions."} />
          <Section title="Payload / Goal" content={info.payload || "May lead to credential theft or unauthorized data access."} />
          <Section title="Defense Strategy" content={info.defense || "Always verify requests through a separate, trusted communication channel."} isSuccess />
        </div>
        
        <button onClick={handleNext} style={{
          width: '100%',
          padding: '16px 20px', 
          fontSize: '16px', 
          fontWeight: 'bold',
          backgroundColor: '#3b82f6', 
          border: 'none', 
          borderRadius: '12px', 
          color: 'white', 
          cursor: 'pointer',
          marginTop: '12px',
          transition: 'background-color 0.2s, transform 0.1s',
          boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
        }}
        onMouseOver={e => e.target.style.backgroundColor = '#2563eb'}
        onMouseOut={e => e.target.style.backgroundColor = '#3b82f6'}
        onMouseDown={e => e.target.style.transform = 'scale(0.98)'}
        onMouseUp={e => e.target.style.transform = 'scale(1)'}
        >
          Complete Simulation
        </button>
      </div>
    </div>
  );
}

function Section({ title, content, isSuccess }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <h4 style={{ 
        color: '#94a3b8', 
        margin: '0 0 8px 0', 
        textTransform: 'uppercase', 
        fontSize: '12px', 
        letterSpacing: '1px' 
      }}>
        {title}
      </h4>
      <p style={{ 
        margin: 0, 
        lineHeight: '1.6', 
        fontSize: '15px',
        color: isSuccess ? '#4ade80' : '#e2e8f0' 
      }}>
        {content}
      </p>
    </div>
  );
}
