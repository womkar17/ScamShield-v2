import React, { useState } from 'react';
import ThreatAnalysis from './ThreatAnalysis';
import { soundEffects } from '../../utils/soundEffects';

const QuizGame = ({ game, onComplete }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isCorrectScore, setIsCorrectScore] = useState(0);

  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const question = rawData.question || game.question || 'Which of the following is a key red flag of a social engineering attack?';
  const options = (Array.isArray(rawData.options) && rawData.options.length > 0)
    ? rawData.options
    : [
        { text: 'An urgent request to bypass normal security procedures', isCorrect: true, explanation: 'Scammers create artificial urgency to force hasty decisions.' },
        { text: 'An email from a known colleague signed with their standard signature', isCorrect: false, explanation: 'Standard internal communication is normally safe.' },
        { text: 'A scheduled security update notification from IT', isCorrect: false, explanation: 'Scheduled IT updates are routine.' }
      ];
  const threatAnalysis = rawData.threatAnalysis || game.threatAnalysis || {};

  const handleSelect = (idx) => {
    setSelectedIdx(idx);
    const isCorrect = options[idx]?.isCorrect;
    if (isCorrect) {
      soundEffects.play('success');
    } else {
      soundEffects.play('error');
    }
    setFeedback(isCorrect ? 'Correct!' : 'Incorrect.');
    setIsCorrectScore(isCorrect ? 1 : 0);
    
    setTimeout(() => {
      if (isCorrect) soundEffects.play('win');
      setShowAnalysis(true);
    }, 2000);
  };

  if (showAnalysis) {
    return <ThreatAnalysis analysis={threatAnalysis} onContinue={() => onComplete(isCorrectScore, 1)} />;
  }

  return (
    <div style={{ padding: '20px', color: 'white', fontFamily: 'sans-serif' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '1.5rem', color: '#ffeb3b' }}>{question}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {options.map((opt, idx) => {
          let bg = '#2a2a2a';
          if (selectedIdx === idx) {
            bg = opt.isCorrect ? '#4CAF50' : '#f44336';
          } else if (selectedIdx !== null && opt.isCorrect) {
            bg = '#4CAF50';
          }
          
          return (
            <button 
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selectedIdx !== null}
              style={{
                padding: '15px 20px',
                borderRadius: '8px',
                border: '1px solid #444',
                background: bg,
                color: 'white',
                fontSize: '1.1rem',
                textAlign: 'left',
                cursor: selectedIdx !== null ? 'default' : 'pointer',
                transition: 'background 0.3s'
              }}
            >
              {opt.text}
            </button>
          );
        })}
      </div>
      {selectedIdx !== null && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#333', borderRadius: '8px' }}>
          <strong>{feedback}</strong> {game.data.options[selectedIdx].explanation}
        </div>
      )}
    </div>
  );
};

export default QuizGame;
