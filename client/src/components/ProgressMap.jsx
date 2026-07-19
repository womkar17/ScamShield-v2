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
    moduleIds: [0, 3, 9, 15, 8, 62, 69, 72, 169, 170, 171, 173, 174, 176, 179, 183, 184, 186, 193, 194, 199, 203, 204, 206, 209, 210],
  },
  {
    id: 'identity',
    title: 'Identity & Accounts',
    icon: '🔐',
    description: 'Protect your personal data, accounts, and digital identity',
    color: '#4ecdc4',
    moduleIds: [12, 22, 17, 16, 13, 64, 177, 178, 187, 189, 195, 220],
  },
  {
    id: 'social',
    title: 'Social Engineering',
    icon: '👥',
    description: 'Learn how to detect manipulation, impersonation, and deepfakes',
    color: '#3b82f6',
    moduleIds: [10, 11, 14, 19, 21, 63, 65, 66, 67, 68, 70, 71, 168, 185, 188, 192, 197, 198, 201, 212, 213],
  },
  {
    id: 'shopping',
    title: 'Online Shopping & Delivery',
    icon: '🛒',
    description: 'Stay safe while shopping, dealing, and receiving parcels online',
    color: '#f1c40f',
    moduleIds: [2, 6, 4, 20, 18, 74, 190, 200, 214, 219, 224, 225, 229],
  },
  {
    id: 'advanced',
    title: 'Advanced Threats',
    icon: '🤖',
    description: 'Master emerging threats: deepfakes, crypto scams, and AI attacks',
    color: '#3b82f6',
    moduleIds: [1, 5, 7, 58, 59, 60, 61, 73, 182, 191, 196, 202, 205, 208, 211, 215, 216, 217, 218, 221, 222, 223, 226, 227, 228],
  },
  {
    id: 'psychology_workplace',
    title: 'Psychology & Workplace Defense',
    icon: '🧠',
    description: 'Master cognitive bias defense, shadow IT risks, and enterprise security',
    color: '#ec4899',
    moduleIds: [23, 24, 207],
  },
  {
    id: 'banking_upi_atm',
    title: 'Banking, UPI & ATM Security',
    icon: '💳',
    description: 'Defend against QR code traps, UPI payment frauds, ATM card trapping, and banking Trojans.',
    color: '#8b5cf6',
    moduleIds: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
  },
  {
    id: 'marketplace_scams',
    title: 'Marketplace Scams',
    icon: '🛍️',
    description: 'Learn to identify rental, resale, courier and marketplace frauds',
    color: '#f97316',
    moduleIds: [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91],
  },
  {
    id: 'job_visa_education',
    title: 'Career, Visa & Higher Education Frauds',
    icon: '💼',
    description: 'Avoid fake HR interviews, recruitment portals, visa consultancies, and admission guarantees.',
    color: '#ec4899',
    moduleIds: [92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108],
  },
  {
    id: 'medical_scams',
    title: 'Medical & Health Scams',
    icon: '🏥',
    description: 'Learn to spot fake hospital bills, fake pharmacies, and health card frauds.',
    color: '#e74c3c',
    moduleIds: [109, 110, 111, 112, 113],
  },
  {
    id: 'charity_scams',
    title: 'Charity & Donation Frauds',
    icon: '🤝',
    description: 'Protect your donations from fake NGOs, disaster relief scams, and fake crowdfunding.',
    color: '#2ecc71',
    moduleIds: [114, 115, 116, 117, 118, 119, 120],
  },
  {
    id: 'technical_scams',
    title: 'Technical & Malware Scams',
    icon: '💻',
    description: 'Defend against fake software updates, malicious USBs, and tech support scams.',
    color: '#34495e',
    moduleIds: [121, 122, 123, 124, 125],
  },
  {
    id: 'live_threat_sims',
    title: 'Live Threat Simulations',
    icon: '🚨',
    description: 'Interactive real-world scam simulations: Tech Support, Crypto Drainers, SIM Hijacking, Vishing & more',
    color: '#00d2d3',
    moduleIds: [126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142],
  },
  {
    id: 'travel_parcel_utility',
    title: 'Travel, Parcel Delivery & Utility Frauds',
    icon: '✈️',
    description: 'Spot fake pilgrimage packages, courier re-delivery fees, customs holds, and utility disconnections.',
    color: '#14b8a6',
    moduleIds: [143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159],
  },
  {
    id: 'misc_frauds',
    title: 'Miscellaneous Cyber Frauds',
    icon: '🎮',
    description: 'Learn to protect yourself against gaming and youth-targeted scams',
    color: '#10b981',
    moduleIds: [160, 161, 162, 163, 175, 181],
  },
  {
    id: 'education_frauds',
    title: 'Education & Tuition Frauds',
    icon: '🎓',
    description: 'Fake admissions, scholarships, WhatsApp parent groups, or coaching institutes.',
    color: '#f97316',
    moduleIds: [164, 165, 167],
  },
  {
    id: 'impersonation_frauds',
    title: 'Impersonation Scams',
    icon: '🎭',
    description: 'Scammer pretends to be from government, bank, or company.',
    color: '#ef4444',
    moduleIds: [166, 180],
  },
  {
    id: 'utility_frauds',
    title: 'Utility & EV Charging Scams',
    icon: '⚡',
    description: 'Fake bills for electricity, gas, water, or EV charging stations.',
    color: '#0ea5e9',
    moduleIds: [172],
  },
  {
    id: 'pending_review_48',
    title: '🧪 Pending Review: Developer & Technical Scams (IDs 230-277)',
    icon: '🔥',
    description: '48 newly generated developer, technical, and DevOps scam simulations kept separately for local inspection.',
    color: '#ff9f43',
    moduleIds: Array.from({ length: 48 }, (_, i) => 230 + i),
  }
];

export default function ProgressMap() {
  const navigate = useNavigate();
  const { completedModules } = useContext(AppContext);
  const { level } = useContext(GamificationContext);

  return (
    <div className="progress-map">
      {console.log('UNITS length:', UNITS.length)}
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
        // For testing/development, we unlock all units so you can see them!
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
                  // Temporarily unlock all modules for testing
                  const prevCompleted = true; // modIndex === 0 || completedModules.includes(unitModules[modIndex - 1]?.id);
                  const isActive = !isCompleted && prevCompleted;
                  const isModLocked = false; // !isCompleted && !isActive;

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
                          className={`module-connector ${isCompleted || isActive ? 'connector-active' : ''
                            }`}
                        />
                      )}

                      <button
                        className={`module-node ${isCompleted
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
