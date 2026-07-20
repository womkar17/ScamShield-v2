import React, { useState } from 'react';
import ThreatAnalysis from './ThreatAnalysis';
import { soundEffects } from '../../utils/soundEffects';

export default function WireAuditGame({ game, onComplete }) {
  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const invoice = rawData.invoice || {
    vendor: "Global Logistics Supply Corp.",
    invoiceNo: "INV-2024-88419",
    amount: "$148,500.00",
    requestedBy: "CFO Executive Office (Urgent Request via Email)",
    destinationBank: "Apex Offshore Holdings (Account #9941-002-88)",
    previousBank: "Standard Corporate Account (Account #1104-882-10)",
    isFraud: true,
    redFlagReason: "Sudden request to change destination wire instructions to an unknown offshore holding account via email without secondary voice verification."
  };

  const threatAnalysis = rawData.threatAnalysis || game.threatAnalysis || {
    psychology: "Authority Impersonation & Financial Urgency — Bypassing standard treasury dual-authorization checks.",
    payload: "Irrecoverable wire transfer of $148,500 to money mule accounts.",
    defense: "Mandatory out-of-band voice verification with known vendor contacts for any banking detail changes."
  };

  const [verdict, setVerdict] = useState(null); // 'approve' or 'freeze'
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [score, setScore] = useState(0);

  const handleDecision = (playerApproves) => {
    if (verdict !== null) return;
    setVerdict(playerApproves ? 'approve' : 'freeze');
    
    // Check if player correctly spotted fraud vs legitimate
    const isFraud = invoice.isFraud;
    const isCorrect = (playerApproves && !isFraud) || (!playerApproves && isFraud);

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
      background: '#0a0f1d',
      border: '2px solid #f59e0b',
      borderRadius: '16px',
      padding: '24px',
      color: '#f8fafc',
      fontFamily: "'Inter', sans-serif",
      boxShadow: '0 0 40px rgba(245, 158, 11, 0.15)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '16px', marginBottom: '20px' }}>
        <div>
          <h3 style={{ margin: 0, color: '#f59e0b', fontSize: '1.35rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🏦</span> ScamShield Treasury &amp; Wire Audit Portal
          </h3>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>
            Review pending high-value corporate wire requests. Verify banking changes and dual-authorization rules.
          </p>
        </div>
        <span style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
          TREASURY ESCROW PENDING
        </span>
      </div>

      <div style={{
        background: '#111827',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '0.95rem' }}>
          <div>
            <span style={{ color: '#9ca3af', fontSize: '0.8rem', textTransform: 'uppercase' }}>Vendor / Beneficiary</span>
            <div style={{ fontWeight: 'bold', color: '#f8fafc', marginTop: '4px' }}>{invoice.vendor}</div>
          </div>
          <div>
            <span style={{ color: '#9ca3af', fontSize: '0.8rem', textTransform: 'uppercase' }}>Invoice Number</span>
            <div style={{ fontFamily: 'monospace', color: '#60a5fa', marginTop: '4px' }}>{invoice.invoiceNo}</div>
          </div>
          <div>
            <span style={{ color: '#9ca3af', fontSize: '0.8rem', textTransform: 'uppercase' }}>Wire Amount</span>
            <div style={{ fontWeight: 'bold', color: '#4ade80', fontSize: '1.25rem', marginTop: '4px' }}>{invoice.amount}</div>
          </div>
          <div>
            <span style={{ color: '#9ca3af', fontSize: '0.8rem', textTransform: 'uppercase' }}>Authorization Origin</span>
            <div style={{ color: '#fbbf24', marginTop: '4px', fontWeight: '500' }}>{invoice.requestedBy}</div>
          </div>
        </div>

        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed #374151' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Previous Bank Account (On File):</span>
            <span style={{ fontFamily: 'monospace', color: '#94a3b8' }}>{invoice.previousBank}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(239, 68, 68, 0.15)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.4)' }}>
            <span style={{ color: '#fca5a5', fontWeight: 'bold', fontSize: '0.85rem' }}>🚨 Requested Destination Bank:</span>
            <span style={{ fontFamily: 'monospace', color: '#f87171', fontWeight: 'bold' }}>{invoice.destinationBank}</span>
          </div>
        </div>
      </div>

      {verdict !== null && (
        <div style={{
          marginBottom: '20px',
          padding: '16px',
          background: ((verdict === 'approve' && !invoice.isFraud) || (verdict === 'freeze' && invoice.isFraud)) ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
          borderLeft: `4px solid ${((verdict === 'approve' && !invoice.isFraud) || (verdict === 'freeze' && invoice.isFraud)) ? '#22c55e' : '#ef4444'}`,
          borderRadius: '8px',
          color: '#e2e8f0',
          fontSize: '0.95rem'
        }}>
          <strong>Audit Verdict:</strong> {invoice.redFlagReason}
        </div>
      )}

      <div style={{ display: 'flex', gap: '16px' }}>
        <button
          onClick={() => handleDecision(false)}
          disabled={verdict !== null}
          style={{
            flex: 1,
            padding: '18px',
            background: verdict === 'freeze' ? '#ef4444' : '#991b1b',
            border: '1.5px solid #ef4444',
            borderRadius: '12px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: verdict !== null ? 'default' : 'pointer',
            boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)',
            transition: 'all 0.2s'
          }}
        >
          🛑 FREEZE TRANSFER &amp; REPORT FRAUD
        </button>
        <button
          onClick={() => handleDecision(true)}
          disabled={verdict !== null}
          style={{
            flex: 1,
            padding: '18px',
            background: verdict === 'approve' ? '#22c55e' : '#166534',
            border: '1.5px solid #22c55e',
            borderRadius: '12px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: verdict !== null ? 'default' : 'pointer',
            boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
            transition: 'all 0.2s'
          }}
        >
          ✅ AUTHORIZE WIRE TRANSFER
        </button>
      </div>
    </div>
  );
}
