import { useContext } from 'react';
import BadgeGrid from '../components/BadgeGrid';
import { GamificationContext } from '../context/GamificationContext';

export default function BadgesPage() {
  const { badges } = useContext(GamificationContext);
  const unlockedCount = badges.filter(b => b.unlocked).length;

  return (
    <div className="app-container">
      <main className="main-content" style={{ padding: '1.5rem 1rem', maxWidth: '1100px', margin: '0 auto', boxSizing: 'border-box', width: '100%' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15))', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem', boxSizing: 'border-box' }}>
          <h1 style={{ fontSize: '1.8rem', margin: '0 0 0.5rem 0', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span>🏆</span> Achievements & Badges
          </h1>
          <p style={{ color: '#cbd5e1', margin: 0, fontSize: '0.95rem', lineHeight: 1.4 }}>
            You have unlocked <strong style={{ color: 'var(--gold)' }}>{unlockedCount} of {badges.length}</strong> Badges! Complete simulations, maintain daily streaks, and ace quizzes to unlock every badge.
          </p>
        </div>
        <BadgeGrid />
      </main>
    </div>
  );
}
