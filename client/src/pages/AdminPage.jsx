import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

export default function AdminPage() {
  const navigate = useNavigate();
  const { isAdmin, loading: authLoading } = useContext(AuthContext);

  const [activeTab, setActiveTab] = useState('overview');
  const [profiles, setProfiles] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [stats, setStats] = useState({ totalUsers: 0, avgXp: 0, totalGames: 0 });

  // Content Manager state
  const [customGames, setCustomGames] = useState([]);
  const [newGame, setNewGame] = useState({
    title: '', description: '', type: 'quiz', difficulty: 'Easy', xpReward: 50
  });

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      navigate('/dashboard');
    }
  }, [authLoading, isAdmin, navigate]);

  useEffect(() => {
    if (isAdmin) {
      loadData();
      loadCustomGames();
    }
  }, [isAdmin]);

  const loadData = async () => {
    setDataLoading(true);
    try {
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*, user_progress(*)');

      if (profileData) {
        setProfiles(profileData);
        const total = profileData.length;
        const avgXp = Math.round(
          profileData.reduce((acc, p) => acc + (p.xp || 0), 0) / (total || 1)
        );
        let totalGames = 0;
        profileData.forEach(p => {
          if (p.user_progress?.[0]?.arcade_games_played) {
            totalGames += p.user_progress[0].arcade_games_played;
          }
        });
        setStats({ totalUsers: total, avgXp, totalGames });
      }
    } catch (err) {
      console.error('Admin data load error:', err);
    } finally {
      setDataLoading(false);
    }
  };

  const loadCustomGames = () => {
    try {
      const saved = localStorage.getItem('ss_custom_games');
      if (saved) setCustomGames(JSON.parse(saved));
    } catch (e) { /* ignore */ }
  };

  const toggleRole = async (userId, currentRole) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    await supabase.from('profiles').update({ role: newRole }).eq('id', userId);
    loadData();
  };

  const deleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to remove this user?')) return;
    await supabase.from('profiles').delete().eq('id', userId);
    loadData();
  };

  const saveCustomGame = () => {
    if (!newGame.title.trim()) return;
    const updated = [...customGames, { ...newGame, id: Date.now() }];
    setCustomGames(updated);
    localStorage.setItem('ss_custom_games', JSON.stringify(updated));
    setNewGame({ title: '', description: '', type: 'quiz', difficulty: 'Easy', xpReward: 50 });
  };

  const deleteCustomGame = (id) => {
    const updated = customGames.filter(g => g.id !== id);
    setCustomGames(updated);
    localStorage.setItem('ss_custom_games', JSON.stringify(updated));
  };

  const filteredProfiles = profiles.filter(p =>
    (p.email || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (authLoading || !isAdmin) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a1a', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Loading...
      </div>
    );
  }

  const tabs = [
    { key: 'overview', label: '📊 Overview' },
    { key: 'users', label: '👥 Users' },
    { key: 'content', label: '🎮 Content' },
  ];

  return (
    <div className="app-container">
      <Navbar />
      <main style={s.main}>
        {/* Header */}
        <div style={s.header}>
          <h1 style={s.pageTitle}>Admin Dashboard</h1>
          <button style={s.backBtn} onClick={() => navigate('/dashboard')}>
            ← Back to App
          </button>
        </div>

        {/* Tabs */}
        <div style={s.tabBar}>
          {tabs.map(t => (
            <button
              key={t.key}
              style={{ ...s.tab, ...(activeTab === t.key ? s.tabActive : {}) }}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={s.content}>
          {/* === OVERVIEW TAB === */}
          {activeTab === 'overview' && (
            <div style={s.grid3}>
              <div style={s.statCard}>
                <div style={{ ...s.statIcon, background: 'rgba(102,126,234,0.15)' }}>👥</div>
                <div style={s.statValue}>{stats.totalUsers}</div>
                <div style={s.statLabel}>Total Users</div>
              </div>
              <div style={s.statCard}>
                <div style={{ ...s.statIcon, background: 'rgba(236,201,75,0.15)' }}>⚡</div>
                <div style={s.statValue}>{stats.avgXp}</div>
                <div style={s.statLabel}>Average XP</div>
              </div>
              <div style={s.statCard}>
                <div style={{ ...s.statIcon, background: 'rgba(72,187,120,0.15)' }}>🎮</div>
                <div style={s.statValue}>{stats.totalGames}</div>
                <div style={s.statLabel}>Games Played</div>
              </div>
            </div>
          )}

          {/* === USERS TAB === */}
          {activeTab === 'users' && (
            <div style={s.card}>
              <div style={s.cardHeader}>
                <h2 style={s.cardTitle}>User Directory</h2>
                <input
                  type="text"
                  placeholder="Search by email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={s.searchInput}
                />
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={s.table}>
                  <thead>
                    <tr>
                      <th style={s.th}>Email</th>
                      <th style={s.th}>Role</th>
                      <th style={s.th}>Level / XP</th>
                      <th style={s.th}>Streak</th>
                      <th style={s.th}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProfiles.length === 0 ? (
                      <tr>
                        <td colSpan={5} style={{ ...s.td, textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
                          {dataLoading ? 'Loading...' : 'No users found.'}
                        </td>
                      </tr>
                    ) : (
                      filteredProfiles.map(p => (
                        <tr key={p.id} style={s.row}>
                          <td style={s.td}>{p.email || 'N/A'}</td>
                          <td style={s.td}>
                            <span style={{
                              ...s.badge,
                              background: p.role === 'admin' ? 'rgba(236,72,153,0.15)' : 'rgba(59,130,246,0.15)',
                              color: p.role === 'admin' ? '#f472b6' : '#93c5fd',
                            }}>
                              {p.role || 'user'}
                            </span>
                          </td>
                          <td style={s.td}>Lvl {p.level || 1} ({p.xp || 0} XP)</td>
                          <td style={s.td}>{p.streak || 0} days</td>
                          <td style={{ ...s.td, display: 'flex', gap: '0.5rem' }}>
                            <button style={s.actionBtn} onClick={() => toggleRole(p.id, p.role)}>
                              {p.role === 'admin' ? 'Demote' : 'Promote'}
                            </button>
                            <button style={{ ...s.actionBtn, ...s.dangerBtn }} onClick={() => deleteUser(p.id)}>
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* === CONTENT MANAGER TAB === */}
          {activeTab === 'content' && (
            <div>
              <div style={s.card}>
                <h2 style={s.cardTitle}>Add Custom Game</h2>
                <div style={s.formGrid}>
                  <div style={s.formGroup}>
                    <label style={s.formLabel}>Title</label>
                    <input
                      style={s.formInput}
                      value={newGame.title}
                      onChange={e => setNewGame({ ...newGame, title: e.target.value })}
                      placeholder="Game title"
                    />
                  </div>
                  <div style={s.formGroup}>
                    <label style={s.formLabel}>Type</label>
                    <select
                      style={s.formInput}
                      value={newGame.type}
                      onChange={e => setNewGame({ ...newGame, type: e.target.value })}
                    >
                      {['quiz', 'swipe', 'chat', 'audio', 'visual', 'password', 'spot-flag'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div style={s.formGroup}>
                    <label style={s.formLabel}>Difficulty</label>
                    <select
                      style={s.formInput}
                      value={newGame.difficulty}
                      onChange={e => setNewGame({ ...newGame, difficulty: e.target.value })}
                    >
                      {['Easy', 'Medium', 'Hard'].map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div style={s.formGroup}>
                    <label style={s.formLabel}>XP Reward</label>
                    <input
                      type="number"
                      style={s.formInput}
                      value={newGame.xpReward}
                      onChange={e => setNewGame({ ...newGame, xpReward: Number(e.target.value) })}
                    />
                  </div>
                </div>
                <div style={{ ...s.formGroup, marginTop: '1rem' }}>
                  <label style={s.formLabel}>Description</label>
                  <textarea
                    style={{ ...s.formInput, minHeight: '80px', resize: 'vertical' }}
                    value={newGame.description}
                    onChange={e => setNewGame({ ...newGame, description: e.target.value })}
                    placeholder="Describe the game scenario..."
                  />
                </div>
                <button style={{ ...s.submitBtn, marginTop: '1rem' }} onClick={saveCustomGame}>
                  + Add Game
                </button>
              </div>

              {customGames.length > 0 && (
                <div style={{ ...s.card, marginTop: '1.5rem' }}>
                  <h2 style={s.cardTitle}>Custom Games ({customGames.length})</h2>
                  {customGames.map(g => (
                    <div key={g.id} style={s.gameItem}>
                      <div>
                        <strong style={{ color: 'white' }}>{g.title}</strong>
                        <span style={{ ...s.badge, marginLeft: '0.5rem', background: 'rgba(102,126,234,0.15)', color: '#93c5fd' }}>{g.type}</span>
                        <span style={{ ...s.badge, marginLeft: '0.5rem', background: 'rgba(236,201,75,0.15)', color: '#ecc94b' }}>{g.xpReward} XP</span>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', margin: '0.3rem 0 0' }}>{g.description}</p>
                      </div>
                      <button style={{ ...s.actionBtn, ...s.dangerBtn }} onClick={() => deleteCustomGame(g.id)}>Delete</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

const s = {
  main: {
    padding: '2rem',
    maxWidth: '1100px',
    margin: '80px auto 0',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  pageTitle: {
    color: 'white',
    fontSize: '1.8rem',
    fontWeight: '800',
    margin: 0,
  },
  backBtn: {
    background: 'none',
    border: '1px solid rgba(255,255,255,0.15)',
    color: 'rgba(255,255,255,0.7)',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  tabBar: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '2rem',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    paddingBottom: '0.5rem',
  },
  tab: {
    padding: '0.7rem 1.5rem',
    background: 'transparent',
    border: 'none',
    color: 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
    fontSize: '0.95rem',
    borderRadius: '8px 8px 0 0',
    transition: 'all 0.2s',
  },
  tabActive: {
    color: 'white',
    background: 'rgba(102,126,234,0.15)',
    borderBottom: '2px solid #667eea',
  },
  content: {},
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
  },
  statCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '2rem',
    textAlign: 'center',
  },
  statIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    fontSize: '1.5rem',
  },
  statValue: {
    fontSize: '2.2rem',
    fontWeight: '800',
    color: 'white',
    marginBottom: '0.3rem',
  },
  statLabel: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: '0.9rem',
  },
  card: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '1.5rem',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  cardTitle: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: 0,
  },
  searchInput: {
    padding: '0.6rem 1rem',
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '0.9rem',
    outline: 'none',
    width: '250px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    color: 'white',
  },
  th: {
    padding: '1rem',
    textAlign: 'left',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.85rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  td: {
    padding: '1rem',
    fontSize: '0.9rem',
  },
  row: {
    borderBottom: '1px solid rgba(255,255,255,0.04)',
  },
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.6rem',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  actionBtn: {
    padding: '0.4rem 0.8rem',
    background: 'rgba(102,126,234,0.15)',
    border: '1px solid rgba(102,126,234,0.3)',
    color: '#93c5fd',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.8rem',
  },
  dangerBtn: {
    background: 'rgba(229,62,62,0.1)',
    border: '1px solid rgba(229,62,62,0.3)',
    color: '#fc8181',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  formLabel: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  formInput: {
    padding: '0.7rem',
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '0.9rem',
    outline: 'none',
  },
  submitBtn: {
    padding: '0.8rem 1.5rem',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.95rem',
  },
  gameItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '1rem',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    gap: '1rem',
  },
};
