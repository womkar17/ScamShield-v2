import React, { useState, useMemo } from 'react';
import ThreatAnalysis from './ThreatAnalysis';
import { soundEffects } from '../../utils/soundEffects';

const FALLBACK_QUESTIONS = [
  {
    question: "You receive an urgent email from your CEO at 11:45 PM asking you to purchase $1,000 in Apple gift cards for a client and text the PIN numbers. What is your immediate action?",
    options: [
      { text: "Immediately buy the gift cards so the CEO isn't kept waiting during an urgent deal.", isCorrect: false, explanation: "Never fulfill urgent financial requests over email or SMS without voice verification." },
      { text: "Verify the request by calling the CEO on a known, pre-established phone number or checking via secondary corporate channel.", isCorrect: true, explanation: "Executive Impersonation (CEO Fraud) relies on intimidation and urgency. Out-of-band verification is the #1 defense." },
      { text: "Reply to the email asking for the billing account number to expense the gift cards.", isCorrect: false, explanation: "Replying to a spoofed or compromised email address goes directly back to the scammer." }
    ]
  },
  {
    question: "You get a text message saying: 'Your bank package is on hold due to missing house number. Click https://usps-track-update-info.com within 12 hours.' What should you do?",
    options: [
      { text: "Click the link and quickly enter your tracking number to check the package status.", isCorrect: false, explanation: "Lookalike domains ('usps-track-update-info.com') are designed to steal your credentials and credit card numbers." },
      { text: "Do not click. Go directly to the official postal service website or app separately to check your tracking number if expecting a delivery.", isCorrect: true, explanation: "Smishing (SMS phishing) uses fake delivery notifications. Always visit official websites directly." },
      { text: "Text back 'STOP' or call the phone number that sent the text.", isCorrect: false, explanation: "Replying confirms your phone number is active to scammers, resulting in more spam attacks." }
    ]
  },
  {
    question: "While working at a coffee shop, a pop-up appears claiming your computer is infected with 5 critical viruses and instructing you to call a toll-free 'Microsoft Certified Tech Support' number immediately.",
    options: [
      { text: "Call the toll-free number immediately and allow the technician to remote into your PC via AnyDesk.", isCorrect: false, explanation: "Tech support scams trick victims into granting remote access (`AnyDesk/TeamViewer`) to drain bank accounts." },
      { text: "Close the browser tab immediately or terminate the browser process via Task Manager. Never call the number shown on a web pop-up.", isCorrect: true, explanation: "Legitimate OS vendors (Microsoft, Apple) never display phone numbers in web browser warning pop-ups." },
      { text: "Download and run the free 'System Fixer Utility' linked inside the pop-up window.", isCorrect: false, explanation: "Downloading utilities from alarm pop-ups guarantees installing rogue scareware or info-stealers." }
    ]
  },
  {
    question: "An external vendor emails an invoice with new bank account wire instructions, stating their old corporate account has been frozen for audit.",
    options: [
      { text: "Update the billing system and wire funds to the new account to avoid late fees.", isCorrect: false, explanation: "Business Email Compromise (BEC) attackers intercept invoice threads to divert payments to mule accounts." },
      { text: "Contact the vendor using the trusted phone number listed on prior contracts or verified invoices to confirm the change via voice call.", isCorrect: true, explanation: "Never change wire destination details based solely on an email notification without independent verification." },
      { text: "Forward the email to a coworker asking if they think it looks legitimate.", isCorrect: false, explanation: "Co-workers cannot verify external banking changes from inside an email thread alone." }
    ]
  },
  {
    question: "When logging into your company cloud portal, you get 6 back-to-back Multi-Factor Authentication (MFA) push notifications on your phone that you did not initiate.",
    options: [
      { text: "Tap 'Approve' to clear the annoying notifications from your phone screen.", isCorrect: false, explanation: "MFA Fatigue (Push Bombing) attacks spam push requests hoping the victim approves out of frustration or confusion." },
      { text: "Deny the request immediately, change your password, and report the unauthorized access attempt to your IT Security team.", isCorrect: true, explanation: "Unsolicited MFA prompts indicate your password has already been compromised by an attacker." },
      { text: "Turn off MFA in your account settings so the notifications stop interrupting your work.", isCorrect: false, explanation: "Disabling MFA removes your critical defensive barrier, allowing instant account takeover." }
    ]
  }
];

const QuizGame = ({ game, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const questions = useMemo(() => {
    // 1. If explicit questions array exists
    if (Array.isArray(rawData.questions) && rawData.questions.length > 0) {
      return rawData.questions;
    }

    // 2. Base question from rawData or game
    const baseQ = rawData.question || game.question || 'Which of the following is a key red flag of a social engineering attack?';
    const baseOpts = (Array.isArray(rawData.options) && rawData.options.length > 0)
      ? rawData.options
      : [
          { text: 'An urgent request to bypass normal security procedures', isCorrect: true, explanation: 'Scammers create artificial urgency to force hasty decisions.' },
          { text: 'An email from a known colleague signed with their standard signature', isCorrect: false, explanation: 'Standard internal communication is normally safe.' },
          { text: 'A scheduled security update notification from IT', isCorrect: false, explanation: 'Scheduled IT updates are routine.' }
        ];

    const initialArr = [{ question: baseQ, options: baseOpts }];
    const diff = String(game.difficulty || 'Medium').toLowerCase();

    // 3. If Hard or Medium, dynamically expand the question pool so the user gets multiple rounds matching difficulty!
    if (diff === 'hard') {
      return [...initialArr, ...FALLBACK_QUESTIONS.slice(0, 4)];
    } else if (diff === 'medium') {
      return [...initialArr, ...FALLBACK_QUESTIONS.slice(0, 2)];
    }
    return initialArr;
  }, [rawData, game.question, game.difficulty]);

  const currentQ = questions[currentIndex] || questions[0];
  const options = currentQ.options || [];
  const threatAnalysis = rawData.threatAnalysis || game.threatAnalysis || {};

  const handleSelect = (idx) => {
    if (selectedIdx !== null) return;
    setSelectedIdx(idx);
    const isCorrect = options[idx]?.isCorrect;
    
    if (isCorrect) {
      soundEffects.play('success');
      setScore(s => s + 1);
      setFeedback('✅ Correct! ' + (options[idx]?.explanation || ''));
    } else {
      soundEffects.play('error');
      setFeedback('❌ Incorrect. ' + (options[idx]?.explanation || ''));
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(c => c + 1);
        setSelectedIdx(null);
        setFeedback('');
      } else {
        if (score + (isCorrect ? 1 : 0) === questions.length) {
          soundEffects.play('win');
        }
        setShowAnalysis(true);
      }
    }, 2200);
  };

  if (showAnalysis) {
    return <ThreatAnalysis analysis={threatAnalysis} onContinue={() => onComplete(score, questions.length)} />;
  }

  return (
    <div style={{ padding: '20px', color: 'white', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #334155', paddingBottom: '12px' }}>
        <span style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          Question {currentIndex + 1} of {questions.length} ({game.difficulty || 'Medium'})
        </span>
        <span style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '0.9rem' }}>
          Score: {score} / {questions.length}
        </span>
      </div>

      <h2 style={{ marginBottom: '22px', fontSize: '1.4rem', color: '#facc15', lineHeight: '1.5' }}>
        {currentQ.question}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {options.map((opt, idx) => {
          let bg = '#1e293b';
          let borderCol = '#334155';
          if (selectedIdx === idx) {
            bg = opt.isCorrect ? 'rgba(34, 197, 94, 0.25)' : 'rgba(239, 68, 68, 0.25)';
            borderCol = opt.isCorrect ? '#22c55e' : '#ef4444';
          } else if (selectedIdx !== null && opt.isCorrect) {
            bg = 'rgba(34, 197, 94, 0.15)';
            borderCol = '#22c55e';
          }
          
          return (
            <button 
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selectedIdx !== null}
              style={{
                padding: '16px 20px',
                borderRadius: '12px',
                border: `1.5px solid ${borderCol}`,
                background: bg,
                color: '#f8fafc',
                fontSize: '1.05rem',
                textAlign: 'left',
                cursor: selectedIdx !== null ? 'default' : 'pointer',
                transition: 'all 0.2s',
                lineHeight: '1.4'
              }}
            >
              {opt.text}
            </button>
          );
        })}
      </div>

      {selectedIdx !== null && (
        <div style={{ 
          marginTop: '20px', 
          padding: '16px', 
          background: options[selectedIdx]?.isCorrect ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)', 
          borderLeft: `4px solid ${options[selectedIdx]?.isCorrect ? '#22c55e' : '#ef4444'}`,
          borderRadius: '8px',
          color: '#e2e8f0',
          fontSize: '0.95rem',
          lineHeight: '1.5'
        }}>
          {feedback}
        </div>
      )}
    </div>
  );
};

export default QuizGame;
