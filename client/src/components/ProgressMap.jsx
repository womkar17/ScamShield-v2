import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { GamificationContext } from '../context/GamificationContext';
import { MODULES } from '../data/modules';

// Group modules into themed units for the Duolingo-style progress map
const UNITS = [
  {
    id: 'financial',
    title: 'Financial Frauds',
    icon: '💰',
    description: 'Learn to spot loan scams, investment traps, and payment fraud',
    color: '#ff6b6b',
    moduleIds: [0, 3, 9, 15, 8],
  },
  {
    id: 'identity',
    title: 'Digital Identity',
    icon: '🔐',
    description: 'Protect your personal data, accounts, and digital identity',
    color: '#4ecdc4',
    moduleIds: [12, 22, 17, 16, 13],
  },
  {
    id: 'social',
    title: 'Social Engineering',
    icon: '🎭',
    description: 'Recognize manipulation tactics used by scammers',
    color: '#a855f7',
    moduleIds: [10, 11, 14, 19, 21],
  },
  {
    id: 'shopping',
    title: 'Online Shopping & Delivery',
    icon: '🛒',
    description: 'Stay safe while shopping, dealing, and receiving parcels online',
    color: '#f1c40f',
    moduleIds: [2, 6, 4, 20, 18],
  },
  {
    id: 'advanced',
    title: 'Advanced Threats',
    icon: '🤖',
    description: 'Master emerging threats: deepfakes, crypto scams, and AI attacks',
    color: '#3b82f6',
    moduleIds: [1, 5, 7],
  },
  {
    id: 'psychology_workplace',
    title: 'Psychology & Workplace Defense',
    icon: '🧠',
    description: 'Master cognitive bias defense, shadow IT risks, and enterprise security',
    color: '#ec4899',
    moduleIds: [23, 24],
  },
  {
    id: 'live_threat_sims',
    title: 'Live Threat Simulations (#127 – #142)',
    icon: '🚨',
    description: 'Interactive real-world scam simulations: Tech Support, Crypto Drainers, SIM Hijacking, Vishing & more',
    color: '#00d2d3',
    moduleIds: [126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142],
  },
];

export default function ProgressMap() {
  const navigate = useNavigate();
  const { completedModules } = useContext(AppContext);
  const { level } = useContext(GamificationContext);

  return (
    <div className="progress-map">
      <div className="progress-map-header">
        <h2 className="progress-map-title">🗺️ Your Learning Path</h2>
        <p className="progress-map-subtitle">
          Complete modules to earn XP and unlock new units
        </p>
      </div>

      {UNITS.map((unit, unitIndex) => {
        const unitModules = unit.moduleIds
          .map(id => MODULES.find(m => m.id === id))
          .filter(Boolean);

        const completedInUnit = unitModules.filter(m =>
          completedModules.includes(m.id)
        ).length;

        const progressPct = unitModules.length
          ? Math.round((completedInUnit / unitModules.length) * 100)
          : 0;

        // Units unlock based on level: first 2 always open, rest need higher levels
        const isUnlocked = true; // unitIndex < 2 || level.number >= unitIndex;

        return (
          <div
            key={unit.id}
            className={`unit-section ${isUnlocked ? '' : 'unit-locked'}`}
          >
            {/* Unit Header */}
            <div
              className="unit-header"
              style={{ '--unit-color': unit.color }}
            >
              <div className="unit-header-left">
                <span className="unit-icon">{unit.icon}</span>
                <div>
                  <h3 className="unit-title">{unit.title}</h3>
                  <p className="unit-desc">{unit.description}</p>
                </div>
              </div>
              {isUnlocked ? (
                <div className="unit-progress-wrap">
                  <div className="unit-progress">
                    <div
                      className="unit-progress-fill"
                      style={{
                        width: `${progressPct}%`,
                        backgroundColor: unit.color,
                      }}
                    />
                  </div>
                  <span className="unit-progress-text">
                    {completedInUnit}/{unitModules.length}
                  </span>
                </div>
              ) : (
                <div className="unit-lock-badge">
                  <span>🔒</span> Level {unitIndex} Required
                </div>
              )}
            </div>

            {/* Module Nodes */}
            {isUnlocked && (
              <div className="module-grid">
                {unitModules.map((mod, modIndex) => {
                  const isCompleted = completedModules.includes(mod.id);
                  // First module in unit is always active; others need previous to be complete
                  const prevCompleted =
                    modIndex === 0 ||
                    completedModules.includes(unitModules[modIndex - 1]?.id);
                  const isActive = !isCompleted; // XP Barrier removed
                  const isModLocked = false; // XP Barrier removed

                  const diffColors = {
                    low: 'var(--green)',
                    med: 'var(--gold)',
                    high: 'var(--accent)',
                  };

                  return (
                    <div key={mod.id} className="module-node-wrap">
                      {/* Connector line */}
                      {modIndex > 0 && (
                        <div
                          className={`module-connector ${
                            isCompleted || isActive ? 'connector-active' : ''
                          }`}
                        />
                      )}

                      <button
                        className={`module-node ${
                          isCompleted
                            ? 'module-node--completed'
                            : isActive
                            ? 'module-node--active'
                            : 'module-node--locked'
                        }`}
                        onClick={() => {
                          if (!isModLocked) navigate(`/module/${mod.id}`);
                        }}
                        disabled={isModLocked}
                        title={isModLocked ? 'Complete previous modules first' : mod.title}
                      >
                        <div className="module-node-top">
                          <span className="module-node-icon">{mod.icon}</span>
                          {isCompleted && <span className="module-node-check">✅</span>}
                          {isModLocked && <span className="module-node-lock">🔒</span>}
                        </div>
                        <div className="module-node-title">{mod.title}</div>
                        <div className="module-node-meta">
                          <span
                            className="module-node-diff"
                            style={{ color: diffColors[mod.diff] }}
                          >
                            {mod.diff === 'low' ? 'Easy' : mod.diff === 'med' ? 'Medium' : 'Hard'}
                          </span>
                          <span className="module-node-tag">{mod.tag}</span>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export { UNITS };
