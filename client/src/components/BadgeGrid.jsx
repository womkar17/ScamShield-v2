import { useContext, useState } from 'react';
import { GamificationContext } from '../context/GamificationContext';

export default function BadgeGrid() {
  const { badges } = useContext(GamificationContext);
  const [selectedBadge, setSelectedBadge] = useState(null);

  const unlockedCount = badges.filter(b => b.unlocked).length;

  return (
    <div className="badge-section">
      <div className="badge-section-header">
        <h3 className="badge-section-title">🏆 Achievements</h3>
        <span className="badge-section-count">
          {unlockedCount} / {badges.length} unlocked
        </span>
      </div>

      <div className="badge-grid">
        {badges.map(badge => (
          <div
            key={badge.id}
            className={`badge-item ${badge.unlocked ? 'badge-unlocked' : 'badge-locked'}`}
            onClick={() => setSelectedBadge(badge)}
            title={badge.description}
          >
            <div className="badge-icon-wrap">
              <span className="badge-icon">{badge.icon}</span>
              {!badge.unlocked && <span className="badge-lock-overlay">🔒</span>}
            </div>
            <div className="badge-name">{badge.name}</div>
          </div>
        ))}
      </div>

      {/* Badge Detail Modal */}
      {selectedBadge && (
        <div className="badge-detail-overlay" onClick={() => setSelectedBadge(null)}>
          <div className="badge-detail-card" onClick={e => e.stopPropagation()}>
            <button className="badge-detail-close" onClick={() => setSelectedBadge(null)}>×</button>
            <div className={`badge-detail-icon ${selectedBadge.unlocked ? 'badge-detail-unlocked' : ''}`}>
              {selectedBadge.icon}
            </div>
            <h3 className="badge-detail-name">{selectedBadge.name}</h3>
            <p className="badge-detail-desc">{selectedBadge.description}</p>
            {selectedBadge.unlocked ? (
              <div className="badge-detail-earned">
                ✅ Earned on {new Date(selectedBadge.unlockedAt).toLocaleDateString()}
              </div>
            ) : (
              <div className="badge-detail-locked">
                🔒 Not yet earned
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
