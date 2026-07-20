import React, { useState } from 'react';
import ThreatAnalysis from './ThreatAnalysis';
import { soundEffects } from '../../utils/soundEffects';

export default function TerminalGame({ game, onComplete }) {
  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const commands = rawData.commands || [
    { cmd: "$ kill -9 4412 && ufw deny from 185.220.101.4", isCorrect: true, output: "[SUCCESS] Process 'xmrig.exe' terminated. Firewall rule added: DENY 185.220.101.4.", explanation: "Immediately killing the rogue process and isolating the attacking IP prevents lateral exfiltration." },
    { cmd: "$ reboot --force", isCorrect: false, output: "[FATAL ERROR] Reboot triggered bootloader encryption! Ransomware deployed across all volumes.", explanation: "Forced reboots during active ransomware attacks often trigger boot-time encryption payload routines." },
    { cmd: "$ chmod -R 777 /var/www", isCorrect: false, output: "[CRITICAL WARNING] World-writable permissions granted! Attackers gained web root write access.", explanation: "Never open up system file permissions to solve access errors during an active intrusion." }
  ];

  const scenario = rawData.scenario || game.description || "EMERGENCY: Unauthorized XMRig crypto-miner and lateral SSH scanning detected on Production Server-04.";
  const threatAnalysis = rawData.threatAnalysis || game.threatAnalysis || {
    psychology: "Panic & Time Pressure — Attackers create server alerts hoping sysadmins make hasty mistakes.",
    payload: "Server resource exhaustion, cryptomining, or full boot-sector ransomware encryption.",
    defense: "Isolate the compromised network interface immediately and preserve memory logs before rebooting."
  };

  const [selectedIdx, setSelectedIdx] = useState(null);
  const [logs, setLogs] = useState([
    "[SYSTEM BOOT] ScamShield Sec-OS Terminal v2.4 initialized...",
    "[WARN] High CPU utilization spike detected (98.4%).",
    `[INCIDENT ALERT] ${scenario}`
  ]);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [score, setScore] = useState(0);

  const handleCommand = (idx) => {
    if (selectedIdx !== null) return;
    setSelectedIdx(idx);
    const chosen = commands[idx];
    const isCorrect = chosen.isCorrect;

    if (isCorrect) {
      soundEffects.play('success');
      setScore(1);
    } else {
      soundEffects.play('error');
    }

    setLogs(prev => [
      ...prev,
      `user@sec-terminal:~$ ${chosen.cmd}`,
      chosen.output,
      isCorrect ? `[🎯 DEFENSE SUCCESS] ${chosen.explanation}` : `[💥 BREACH ALERT] ${chosen.explanation}`
    ]);

    setTimeout(() => {
      if (isCorrect) soundEffects.play('win');
      setShowAnalysis(true);
    }, 2500);
  };

  if (showAnalysis) {
    return (
      <div style={{ position: 'relative', width: '100%', minHeight: '520px', display: 'flex', flex: 1 }}>
        <ThreatAnalysis analysis={threatAnalysis} onContinue={() => onComplete(score, 1)} />
      </div>
    );
  }

  return (
    <div style={{
      background: '#0c0d10',
      border: '2px solid #10b981',
      borderRadius: '12px',
      padding: '24px',
      fontFamily: "'Fira Code', 'Courier New', monospace",
      color: '#10b981',
      boxShadow: '0 0 30px rgba(16, 185, 129, 0.2)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1f2937', paddingBottom: '12px', marginBottom: '18px' }}>
        <span style={{ color: '#6ee7b7', fontWeight: 'bold' }}>⚡ CYBER TERMINAL // INCIDENT RESPONSE LAB</span>
        <span style={{ background: '#064e3b', color: '#6ee7b7', padding: '2px 10px', borderRadius: '4px', fontSize: '12px' }}>STATUS: DEFCON LEVEL 1</span>
      </div>

      <div style={{
        background: '#050505',
        border: '1px solid #1f2937',
        borderRadius: '8px',
        padding: '16px',
        height: '220px',
        overflowY: 'auto',
        marginBottom: '20px',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        {logs.map((log, i) => (
          <div key={i} style={{ color: log.includes('[FATAL') || log.includes('[💥') ? '#ef4444' : log.includes('[SUCCESS]') || log.includes('[🎯') ? '#22c55e' : log.includes('[WARN]') || log.includes('[INCIDENT') ? '#facc15' : '#10b981' }}>
            {log}
          </div>
        ))}
      </div>

      <div style={{ color: '#9ca3af', marginBottom: '12px', fontSize: '13px' }}>
        SELECT COUNTERMEASURE COMMAND TO EXECUTE:
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {commands.map((cmdObj, idx) => {
          let bg = '#111827';
          let borderCol = '#374151';
          if (selectedIdx === idx) {
            bg = cmdObj.isCorrect ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)';
            borderCol = cmdObj.isCorrect ? '#10b981' : '#ef4444';
          }
          return (
            <button
              key={idx}
              onClick={() => handleCommand(idx)}
              disabled={selectedIdx !== null}
              style={{
                background: bg,
                border: `1px solid ${borderCol}`,
                borderRadius: '8px',
                padding: '14px 18px',
                color: '#e5e7eb',
                fontFamily: 'monospace',
                fontSize: '14px',
                textAlign: 'left',
                cursor: selectedIdx !== null ? 'default' : 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>&gt;</span>
              <span>{cmdObj.cmd}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
