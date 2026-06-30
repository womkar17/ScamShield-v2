import { useState, useEffect, useContext } from 'react';
import { GamificationContext } from '../context/GamificationContext';

export default function LevelUpModal() {
  const { levelUpData, clearLevelUp } = useContext(GamificationContext);
  const [visible, setVisible] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    if (levelUpData) {
      // Generate confetti pieces
      const pieces = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
        color: ['#ff6b6b', '#4ecdc4', '#f1c40f', '#a855f7', '#2ecc71', '#3b82f6'][Math.floor(Math.random() * 6)],
        size: 6 + Math.random() * 8,
        rotation: Math.random() * 360,
      }));
      setConfettiPieces(pieces);
      setVisible(true);
    }
  }, [levelUpData]);

  if (!visible || !levelUpData) return null;

  const handleClose = () => {
    setVisible(false);
    clearLevelUp();
  };

  const levelEmojis = {
    1: '🌱',
    2: '👁️',
    3: '🛡️',
    4: '⚔️',
    5: '👑',
  };

  return (
    <div className="levelup-overlay" onClick={handleClose}>
      {/* Confetti */}
      {confettiPieces.map(piece => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}

      <div className="levelup-content" onClick={e => e.stopPropagation()}>
        <div className="levelup-icon">
          {levelEmojis[levelUpData.newLevel.number] || '⭐'}
        </div>
        <h2 className="levelup-title">Level Up!</h2>
        <p className="levelup-subtitle">
          You've reached <strong>{levelUpData.newLevel.name}</strong>
        </p>
        <div className="levelup-xp">
          <span className="levelup-xp-label">Level {levelUpData.oldLevel.number}</span>
          <span className="levelup-xp-arrow">→</span>
          <span className="levelup-xp-label levelup-xp-new">Level {levelUpData.newLevel.number}</span>
        </div>
        <button className="levelup-btn" onClick={handleClose}>
          Continue Learning
        </button>
      </div>
    </div>
  );
}
