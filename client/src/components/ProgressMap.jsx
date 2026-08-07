import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { GamificationContext } from '../context/GamificationContext';
import { MODULES } from '../data/modules';

// Group modules into themed units for the Duolingo-style progress map
const UNITS = [
  {
    id: 'level_1',
    title: 'Level 1',
    icon: '🟢',
    description: 'Master these 14 simulations.',
    color: '#2ecc71',
    moduleIds: [1, 4, 6, 7, 14, 15, 20, 22, 28, 29, 61, 78, 98, 99],
  },
  {
    id: 'level_2',
    title: 'Level 2',
    icon: '🌟',
    description: 'Master these 14 simulations.',
    color: '#3498db',
    moduleIds: [100, 110, 111, 134, 135, 139, 140, 144, 146, 147, 150, 152, 153, 155],
  },
  {
    id: 'level_3',
    title: 'Level 3',
    icon: '🛡️',
    description: 'Master these 14 simulations.',
    color: '#9b59b6',
    moduleIds: [158, 162, 163, 164, 165, 174, 234, 238, 240, 249, 188, 192, 194, 197],
  },
  {
    id: 'level_4',
    title: 'Level 4',
    icon: '📦',
    description: 'Master these 14 simulations.',
    color: '#f1c40f',
    moduleIds: [212, 213, 0, 2, 5, 8, 10, 11, 13, 16, 17, 18, 19, 21],
  },
  {
    id: 'level_5',
    title: 'Level 5',
    icon: '📱',
    description: 'Master these 14 simulations.',
    color: '#e67e22',
    moduleIds: [25, 26, 30, 33, 34, 36, 41, 58, 59, 60, 64, 65, 66, 67],
  },
  {
    id: 'level_6',
    title: 'Level 6',
    icon: '💳',
    description: 'Master these 14 simulations.',
    color: '#e74c3c',
    moduleIds: [68, 70, 63, 71, 72, 74, 75, 76, 77, 79, 80, 81, 82, 84],
  },
  {
    id: 'level_7',
    title: 'Level 7',
    icon: '🚨',
    description: 'Master these 14 simulations.',
    color: '#1abc9c',
    moduleIds: [89, 93, 95, 96, 97, 101, 102, 103, 104, 105, 107, 108, 109, 112],
  },
  {
    id: 'level_8',
    title: 'Level 8',
    icon: '🛒',
    description: 'Master these 14 simulations.',
    color: '#34495e',
    moduleIds: [113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 127, 130],
  },
  {
    id: 'level_9',
    title: 'Level 9',
    icon: '🎮',
    description: 'Master these 14 simulations.',
    color: '#2ecc71',
    moduleIds: [131, 132, 133, 136, 137, 138, 141, 142, 143, 145, 148, 149, 151, 154],
  },
  {
    id: 'level_10',
    title: 'Level 10',
    icon: '🚀',
    description: 'Master these 14 simulations.',
    color: '#3498db',
    moduleIds: [157, 159, 160, 161, 166, 167, 168, 169, 170, 171, 172, 175, 177, 178],
  },
  {
    id: 'level_11',
    title: 'Level 11',
    icon: '🧠',
    description: 'Master these 14 simulations.',
    color: '#9b59b6',
    moduleIds: [180, 181, 182, 183, 230, 232, 235, 236, 239, 241, 242, 244, 245, 247],
  },
  {
    id: 'level_12',
    title: 'Level 12',
    icon: '💼',
    description: 'Master these 14 simulations.',
    color: '#f1c40f',
    moduleIds: [248, 250, 252, 253, 254, 255, 256, 257, 258, 259, 260, 262, 263, 265],
  },
  {
    id: 'level_13',
    title: 'Level 13',
    icon: '🟢',
    description: 'Master these 14 simulations.',
    color: '#e67e22',
    moduleIds: [266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 325, 326],
  },
  {
    id: 'level_14',
    title: 'Level 14',
    icon: '🌟',
    description: 'Master these 14 simulations.',
    color: '#e74c3c',
    moduleIds: [327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340],
  },
  {
    id: 'level_15',
    title: 'Level 15',
    icon: '🛡️',
    description: 'Master these 14 simulations.',
    color: '#1abc9c',
    moduleIds: [341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354],
  },
  {
    id: 'level_16',
    title: 'Level 16',
    icon: '📦',
    description: 'Master these 14 simulations.',
    color: '#34495e',
    moduleIds: [355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368],
  },
  {
    id: 'level_17',
    title: 'Level 17',
    icon: '📱',
    description: 'Master these 14 simulations.',
    color: '#2ecc71',
    moduleIds: [369, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433],
  },
  {
    id: 'level_18',
    title: 'Level 18',
    icon: '💳',
    description: 'Master these 14 simulations.',
    color: '#3498db',
    moduleIds: [434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447],
  },
  {
    id: 'level_19',
    title: 'Level 19',
    icon: '🚨',
    description: 'Master these 14 simulations.',
    color: '#9b59b6',
    moduleIds: [448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461],
  },
  {
    id: 'level_20',
    title: 'Level 20',
    icon: '🛒',
    description: 'Master these 14 simulations.',
    color: '#f1c40f',
    moduleIds: [462, 463, 464, 465, 466, 467, 468, 278, 279, 280, 281, 568, 569, 571],
  },
  {
    id: 'level_21',
    title: 'Level 21',
    icon: '🎮',
    description: 'Master these 14 simulations.',
    color: '#e67e22',
    moduleIds: [572, 578, 580, 585, 587, 610, 614, 187, 189, 190, 191, 193, 195, 196],
  },
  {
    id: 'level_22',
    title: 'Level 22',
    icon: '🚀',
    description: 'Master these 14 simulations.',
    color: '#e74c3c',
    moduleIds: [198, 199, 200, 201, 202, 204, 205, 206, 208, 214, 215, 216, 217, 218],
  },
  {
    id: 'level_23',
    title: 'Level 23',
    icon: '🧠',
    description: 'Master these 14 simulations.',
    color: '#1abc9c',
    moduleIds: [219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 3, 9, 12],
  },
  {
    id: 'level_24',
    title: 'Level 24',
    icon: '💼',
    description: 'Master these 14 simulations.',
    color: '#34495e',
    moduleIds: [27, 31, 32, 35, 37, 38, 39, 40, 69, 73, 62, 83, 85, 86],
  },
  {
    id: 'level_25',
    title: 'Level 25',
    icon: '🟢',
    description: 'Master these 14 simulations.',
    color: '#2ecc71',
    moduleIds: [87, 88, 90, 91, 92, 94, 106, 125, 126, 128, 129, 156, 173, 176],
  },
  {
    id: 'level_26',
    title: 'Level 26',
    icon: '🌟',
    description: 'Master these 14 simulations.',
    color: '#3498db',
    moduleIds: [179, 231, 233, 237, 243, 246, 251, 261, 264, 184, 185, 186, 203, 207],
  },
  {
    id: 'level_27',
    title: 'Level 27',
    icon: '🛡️',
    description: 'Master the final 3 simulations.',
    color: '#9b59b6',
    moduleIds: [209, 210, 211],
  },
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

        // A Level unlocks only if it's the first Level, OR if all simulations in the previous Level are complete.
        const prevUnit = unitIndex > 0 ? UNITS[unitIndex - 1] : null;
        let prevUnitCompleted = true;
        if (prevUnit) {
          const prevModules = prevUnit.moduleIds.filter(Boolean);
          const completedPrev = prevModules.filter(id => completedModules.includes(id)).length;
          prevUnitCompleted = completedPrev === prevModules.length && prevModules.length > 0;
        }
        const isUnlocked = unitIndex === 0 || prevUnitCompleted;

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
              <div className="module-path">
                {unitModules.map((mod, modIndex) => {
                  const isCompleted = completedModules.includes(mod.id);
                  const prevCompleted = modIndex === 0 || completedModules.includes(unitModules[modIndex - 1]?.id);
                  const isActive = !isCompleted && prevCompleted;
                  const isModLocked = !isCompleted && !isActive;

                  const diffColors = {
                    low: 'var(--green)',
                    med: 'var(--gold)',
                    high: 'var(--accent)',
                  };

                  // Duolingo zigzag offsets: center(0) → right(+90) → center(0) → left(-90)
                  const getOffset = (idx) => {
                    const c = idx % 4;
                    return c === 0 ? 0 : c === 1 ? 90 : c === 2 ? 0 : -90;
                  };

                  const currentOffset = getOffset(modIndex);
                  const positionClass = currentOffset > 0 ? 'path-right' 
                    : currentOffset < 0 ? 'path-left' 
                    : 'path-center';

                  // Compute SVG connector that bridges from previous node to current
                  let connectorSvg = null;
                  if (modIndex > 0) {
                    const prevOffset = getOffset(modIndex - 1);
                    const offsetDiff = prevOffset - currentOffset;
                    const connectorActive = isCompleted || isActive;

                    if (offsetDiff === 0) {
                      // Straight vertical connector (same column)
                      connectorSvg = (
                        <div className={`path-connector ${connectorActive ? 'path-connector-active' : ''}`}
                             style={{ width: '4px', height: '50px' }}>
                          <svg viewBox="0 0 4 50" width="4" height="50">
                            <line x1="2" y1="0" x2="2" y2="50" className="path-curve" />
                          </svg>
                        </div>
                      );
                    } else {
                      // Curved connector between different columns
                      const absOff = Math.abs(offsetDiff);
                      const svgW = absOff + 4;
                      const svgH = 70;
                      // Start at previous node's side, end at current node's side
                      const startX = offsetDiff > 0 ? svgW - 2 : 2;
                      const endX = offsetDiff > 0 ? 2 : svgW - 2;

                      connectorSvg = (
                        <div className={`path-connector ${connectorActive ? 'path-connector-active' : ''}`}
                             style={{
                               width: `${svgW}px`,
                               height: `${svgH}px`,
                               transform: `translateX(${offsetDiff / 2}px)`
                             }}>
                          <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH}>
                            <path
                              d={`M ${startX} 0 C ${startX} ${svgH * 0.5}, ${endX} ${svgH * 0.5}, ${endX} ${svgH}`}
                              fill="none"
                              className="path-curve"
                            />
                          </svg>
                        </div>
                      );
                    }
                  }

                  return (
                    <div key={mod.id} className={`path-node-wrap ${positionClass}`}>
                      {connectorSvg}

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
