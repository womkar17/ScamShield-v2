import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAdmin, logout, userProfile, currentUser } = useContext(AuthContext);

  const displayName = userProfile?.username || userProfile?.email?.split('@')[0] || currentUser?.email?.split('@')[0] || 'User';

  const menuItems = [
    { name: 'Dashboard', icon: '🏠', path: '/dashboard' },
    { name: 'Arcade', icon: '🎮', path: '/games' },
    { name: 'Case Studies', icon: '📚', path: '/case-studies' },
  ];

  if (isAdmin) {
    menuItems.push({ name: 'Admin Panel', icon: '⚙️', path: '/admin' });
  }
  
  menuItems.push({ name: 'Settings', icon: '🔧', path: '/settings' });

  return (
    <div className={`sidebar-nav ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{...styles.sidebar, transition: 'all 0.3s ease'}}>
      <button 
        className="sidebar-toggle-btn"
        onClick={() => setIsOpen(!isOpen)} 
        style={styles.toggleBtn}
        title={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
      >
        {isOpen ? '◀' : '▶'}
      </button>

      {isOpen && (
        <button
          className="mobile-sidebar-close-btn"
          onClick={() => setIsOpen(false)}
          style={{
            display: 'none', // Shown via CSS on mobile
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: 'rgba(239, 68, 68, 0.15)',
            color: '#ef4444',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            zIndex: 105
          }}
        >
          ✕ Close
        </button>
      )}

      <div style={styles.userSection}>
        <div style={{...styles.avatar, width: isOpen ? '60px' : '40px', height: isOpen ? '60px' : '40px', fontSize: isOpen ? '1.5rem' : '1.2rem', transition: 'all 0.3s ease'}}>
          {displayName[0]?.toUpperCase() || '?'}
        </div>
        {isOpen && <div style={styles.userName}>{displayName}</div>}
      </div>

      <div style={styles.menu}>
        {menuItems.map(item => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.name}
              style={{ ...styles.menuBtn, ...(isActive ? styles.activeBtn : {}) }}
              onClick={() => {
                navigate(item.path);
                if (window.innerWidth <= 768) setIsOpen(false);
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text2, #cbd5e1)';
                }
              }}
            >
              <span style={styles.icon}>{item.icon}</span>
              {isOpen && item.name}
            </button>
          );
        })}

        {/* Mobile-Only Achievements & Badges Section in Menu */}
        <div className="sidebar-mobile-badges-section" style={{ display: 'none', flexDirection: 'column', width: '100%', borderTop: '1px solid rgba(255, 255, 255, 0.08)', marginTop: '0.8rem', paddingTop: '0.8rem' }}>
          {isOpen && (
            <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', padding: '0 1rem 0.4rem', opacity: 0.85 }}>
              ACHIEVEMENTS
            </div>
          )}
          <button
            style={{ ...styles.menuBtn, ...(location.pathname === '/badges' ? styles.activeBtn : {}) }}
            onClick={() => {
              navigate('/badges');
              if (window.innerWidth <= 768) setIsOpen(false);
            }}
            onMouseEnter={(e) => {
              if (location.pathname !== '/badges') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/badges') {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text2, #cbd5e1)';
              }
            }}
          >
            <span style={styles.icon}>🏆</span>
            {isOpen && "Badges"}
          </button>
        </div>
      </div>

      <div style={styles.footer}>
        <button 
          style={{ ...styles.menuBtn, ...styles.logoutBtn }} 
          onClick={() => {
            if (window.innerWidth <= 768) setIsOpen(false);
            navigate('/');
            setTimeout(() => logout(), 50);
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          title="Logout"
        >
          <span style={styles.icon}>🚪</span>
          {isOpen && "Logout"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    background: 'var(--bg2, #111827)',
    borderRight: '1px solid var(--border, #1e3a5f)',
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '60px', // Below navbar
    zIndex: 90,
  },
  toggleBtn: {
    position: 'absolute',
    top: '20px',
    right: '-15px',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    zIndex: 100,
  },
  userSection: {
    padding: '20px',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  menu: {
    padding: '20px 10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    flex: 1,
  },
  menuBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
    padding: '12px 15px',
    background: 'transparent',
    border: 'none',
    borderRadius: '8px',
    color: 'var(--text2, #cbd5e1)',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'left',
  },
  activeBtn: {
    background: 'rgba(59, 130, 246, 0.15)',
    color: 'var(--blue, #3b82f6)',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: '1.2rem',
  },
  footer: {
    padding: '20px 10px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  },
  logoutBtn: {
    color: '#fc8181',
  },
};
