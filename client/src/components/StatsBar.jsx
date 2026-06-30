import { useContext } from 'react';
import { GamificationContext } from '../context/GamificationContext';

export default function StatsBar() {
  const { xp, level, streak, badges, getProgress } = useContext(GamificationContext);
  const progress = getProgress();
  const unlockedCount = badges.filter(b => b.unlocked).length;

  const stats = [
    {
      icon: '⭐',
      value: xp.toLocaleString(),
      label: 'Total XP',
      color: 'var(--gold)',
    },
    {
      icon: getLevelEmoji(level.number),
      value: level.name,
      label: `Level ${level.number}`,
      color: 'var(--purple)',
    },
    {
      icon: '🔥',
      value: `${streak.count} days`,
      label: streak.isActive ? 'Active Streak' : 'No Streak',
      color: 'var(--accent)',
    },
    {
      icon: '🏆',
      value: `${unlockedCount} / ${badges.length}`,
      label: 'Badges Earned',
      color: 'var(--blue)',
    },
  ];

  return (
    <div className="stats-dashboard">
      {stats.map((stat, i) => (
        <div className="stats-card" key={i} style={{ '--stat-color': stat.color }}>
          <div className="stats-icon">{stat.icon}</div>
          <div className="stats-info">
            <div className="stats-value">{stat.value}</div>
            <div className="stats-label">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function getLevelEmoji(levelNum) {
  const emojis = { 1: '🌱', 2: '👁️', 3: '🛡️', 4: '⚔️', 5: '👑' };
  return emojis[levelNum] || '🌱';
}
