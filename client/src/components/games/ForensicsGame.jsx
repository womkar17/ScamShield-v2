import React, { useState } from 'react';
import ThreatAnalysis from './ThreatAnalysis';
import { soundEffects } from '../../utils/soundEffects';

export default function ForensicsGame({ game, onComplete }) {
  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const headers = rawData.headers || [
    { label: "Received (Origin)", value: "from mail-out.scam-proxy-relay.ru (185.220.101.5) by mx.corporate.com", isSuspicious: true, explanation: "Origin IP maps to an unauthorized external proxy host in Russia." },
    { label: "Authentication-Results", value: "spf=softfail (domain of g00gle-support.net does not designate 185.220.101.5); dkim=none", isSuspicious: true, explanation: "SPF check failed and DKIM digital signature is completely missing." },
    { label: "From Header (Display)", value: "\"Google Cloud Security\" <security-update@g00gle-support.net>", isSuspicious: true, explanation: "Homoglyph attack: zero ('0') replacing letter 'o' in domain." },
    { label: "To", value: "undisclosed-recipients:;", isSuspicious: true, explanation: "Mass BCC blast typical of spray-and-pray phishing campaigns." }
  ];

  const threatAnalysis = rawData.threatAnalysis || game.threatAnalysis || {
    psychology: "Authority Impersonation — Displaying a trusted brand name while hiding the raw technical header anomalies.",
    payload: "Credential harvesting via reverse proxy toolkit (`EvilProxy`/`Modlishka`).",
    defense: "Always inspect SPF/DKIM verification results and check the raw `Return-Path` header before clicking links."
  };

  const [inspectedIds, setInspectedIds] = useState(new Set());
  const [verdict, setVerdict] = useState(null); // 'scam' or 'safe'
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [score, setScore] = useState(0);

  const toggleInspect = (idx) => {
    soundEffects.play('click');
    setInspectedIds(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const submitVerdict = (playerSaysScam) => {
    if (verdict !== null) return;
    setVerdict(playerSaysScam ? 'scam' : 'safe');
    
    // In our forensics lab, if any header is suspicious, the correct answer is SCAM
    const hasAnomalies = headers.some(h => h.isSuspicious);
    const isCorrect = playerSaysScam === hasAnomalies;

    if (isCorrect) {
      soundEffects.play('success');
      setScore(1);
    } else {
      soundEffects.play('error');
    }

    setTimeout(() => {
      if (isCorrect) soundEffects.play('win');
      setShowAnalysis(true);
    }, 2500);
  };

  if (showAnalysis) {
    return <ThreatAnalysis analysis={threatAnalysis} onContinue={() => onComplete(score, 1)} />;
  }

  return (
    <div style={{
      background: '#0f172a',
      border: '2px solid #38bdf8',
      borderRadius: '16px',
      padding: '24px',
      color: '#f8fafc',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '14px', marginBottom: '20px' }}>
        <div>
          <h3 style={{ margin: 0, color: '#38bdf8', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🔬</span> Email Header &amp; DNS Forensics Lab
          </h3>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>
            Click each raw header field below to analyze anomalies and verify email authenticity.
          </p>
        </div>
        <span style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
          LAB STATUS: ACTIVE INSPECTION
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {headers.map((hdr, idx) => {
          const isOpen = inspectedIds.has(idx);
          return (
            <div key={idx} style={{
              background: '#1e293b',
              border: `1px solid ${isOpen ? (hdr.isSuspicious ? '#ef4444' : '#22c55e') : '#334155'}`,
              borderRadius: '10px',
              padding: '14px 16px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }} onClick={() => toggleInspect(idx)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#94a3b8', fontWeight: 'bold', fontSize: '0.85rem' }}>{hdr.label}</span>
                <span style={{ fontSize: '0.8rem', color: isOpen ? (hdr.isSuspicious ? '#ef4444' : '#22c55e') : '#38bdf8' }}>
                  {isOpen ? (hdr.isSuspicious ? '🚨 ANOMALY DETECTED' : '✅ VERIFIED SAFE') : '🔍 CLICK TO INSPECT'}
                </span>
              </div>
              <div style={{ fontFamily: 'monospace', color: '#e2e8f0', marginTop: '6px', fontSize: '0.95rem', wordBreak: 'break-all' }}>
                {hdr.value}
              </div>
              {isOpen && (
                <div style={{
                  marginTop: '10px',
                  padding: '10px 12px',
                  background: hdr.isSuspicious ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 197, 94, 0.15)',
                  borderLeft: `3px solid ${hdr.isSuspicious ? '#ef4444' : '#22c55e'}`,
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  color: '#cbd5e1'
                }}>
                  <strong>Forensics Report:</strong> {hdr.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ borderTop: '1px solid #334155', paddingTop: '18px' }}>
        <p style={{ textAlign: 'center', margin: '0 0 14px 0', fontSize: '0.95rem', color: '#cbd5e1' }}>
          Based on header inspection, what is your final forensic verdict?
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onClick={() => submitVerdict(true)}
            disabled={verdict !== null}
            style={{
              flex: 1,
              padding: '16px',
              background: verdict === 'scam' ? '#ef4444' : '#7f1d1d',
              border: '1px solid #ef4444',
              borderRadius: '12px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.05rem',
              cursor: verdict !== null ? 'default' : 'pointer',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)'
            }}
          >
            🚨 CONFIRM SPOOFED PHISHING
          </button>
          <button
            onClick={() => submitVerdict(false)}
            disabled={verdict !== null}
            style={{
              flex: 1,
              padding: '16px',
              background: verdict === 'safe' ? '#22c55e' : '#14532d',
              border: '1px solid #22c55e',
              borderRadius: '12px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.05rem',
              cursor: verdict !== null ? 'default' : 'pointer',
              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
            }}
          >
            ✅ VERIFY LEGITIMATE EMAIL
          </button>
        </div>
      </div>
    </div>
  );
}
