import { useContext } from 'react';
import { GamificationContext } from '../context/GamificationContext';

export default function StatsBar() {
  const { xp, level, streak, badges, getProgress } = useContext(GamificationContext);
  const progress = getProgress();
  const unlockedCount = badges.filter(b => b.unlocked).length;

  return (
    <div className="stats-dashboard" style={{ display: 'flex', gap: '1.2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
      {/* Total XP & Level Card with XP Bar */}
      <div 
        className="stats-card" 
        style={{ 
          '--stat-color': 'var(--gold)', 
          flex: '2 1 320px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'stretch', 
          gap: '0.8rem',
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          padding: '1.4rem 1.8rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="stats-icon" style={{ fontSize: '2.5rem' }}>⭐</div>
            <div>
              <div className="stats-value" style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--gold)' }}>
                {xp.toLocaleString()} <span style={{ fontSize: '1rem', fontWeight: '600', color: '#cbd5e1' }}>Total XP</span>
              </div>
              <div className="stats-label" style={{ fontSize: '1rem', fontWeight: '700', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ background: 'linear-gradient(90deg, #a855f7, #6366f1)', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '800', color: '#fff' }}>
                  LEVEL {level.number}
                </span>
                <span>{level.name}</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600' }}>
            Next: Level {level.number + 1}
          </div>
        </div>

        {/* XP Bar Track */}
        <div style={{ width: '100%', marginTop: '0.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '600' }}>
            <span>Level Progress</span>
            <span>{xp} / {level.maxXp} XP ({progress.percentToNextLevel}%)</span>
          </div>
          <div style={{ width: '100%', height: '10px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '5px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ 
              width: `${progress.percentToNextLevel}%`, 
              height: '100%', 
              background: 'linear-gradient(90deg, #f59e0b, #ec4899, #a855f7)', 
              borderRadius: '5px', 
              transition: 'width 0.5s ease', 
              boxShadow: '0 0 12px rgba(245, 158, 11, 0.6)' 
            }} />
          </div>
        </div>
      </div>

      {/* Streak Card */}
      <div className="stats-card" style={{ '--stat-color': 'var(--accent)', flex: '1 1 180px' }}>
        <div className="stats-icon">🔥</div>
        <div className="stats-info">
          <div className="stats-value">{streak.count} days</div>
          <div className="stats-label">{streak.isActive ? 'Active Streak' : 'No Streak'}</div>
        </div>
      </div>

      {/* Badges Card */}
      <div className="stats-card" style={{ '--stat-color': 'var(--blue)', flex: '1 1 180px' }}>
        <div className="stats-icon">🏆</div>
        <div className="stats-info">
          <div className="stats-value">{unlockedCount} / {badges.length}</div>
          <div className="stats-label">Badges Earned</div>
        </div>
      </div>
    </div>
  );
}
