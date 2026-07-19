import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { MODULES } from '../data/modules';
export default function LandingPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div style={styles.page}>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.navBrand}>
            <span style={{ fontSize: '1.8rem' }}>🛡️</span>
            <span style={styles.brandText}>ScamShield</span>
          </div>
          <div style={styles.navLinks}>
            <a href="#about" style={styles.navLink}>About</a>
            <a href="#features" style={styles.navLink}>Features</a>
            <a href="#threats" style={styles.navLink}>Threats</a>
            {isLoggedIn ? (
              <button style={styles.ctaBtn} onClick={() => navigate('/dashboard')}>
                Go to Dashboard
              </button>
            ) : (
              <button style={styles.ctaBtn} onClick={() => navigate('/auth')}>
                Get Started
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroGlow}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>🔒 Cybersecurity Awareness Platform</div>
          <h1 style={styles.heroTitle}>
            Don't Be the Next
            <span style={styles.heroHighlight}> Victim.</span>
          </h1>
          <p style={styles.heroSubtitle}>
            ScamShield is an interactive training platform that teaches you to recognize and defend 
            against phishing emails, fake calls, deepfake videos, and social engineering attacks — 
            before they cost you your money, identity, or privacy.
          </p>
          <div style={styles.heroActions}>
            <button style={styles.primaryBtn} onClick={() => navigate(isLoggedIn ? '/dashboard' : '/auth')}>
              {isLoggedIn ? 'Go to Dashboard' : 'Start Training Free'}
            </button>
            <a href="#about" style={styles.secondaryBtn}>
              Learn More ↓
            </a>
          </div>
          <div style={styles.heroStats}>
            <div style={styles.stat}>
              <span style={styles.statNumber}>{MODULES.length}+</span>
              <span style={styles.statLabel}>Training Modules</span>
            </div>
            <div style={styles.statDivider}></div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>50+</span>
              <span style={styles.statLabel}>Interactive Scenarios</span>
            </div>
            <div style={styles.statDivider}></div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>5</span>
              <span style={styles.statLabel}>Game Types</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>What is Cybersecurity?</h2>
          <p style={styles.sectionSubtitle}>
            Cybersecurity is the practice of protecting systems, networks, and data from digital attacks. 
            In today's hyper-connected world, cybercriminals use increasingly sophisticated methods to steal 
            personal information, financial data, and corporate secrets.
          </p>
          <div style={styles.cardGrid}>
            <div style={styles.infoCard}>
              <div style={styles.cardIcon}>🎣</div>
              <h3 style={styles.cardTitle}>Phishing</h3>
              <p style={styles.cardText}>
                Fraudulent emails and messages designed to trick you into revealing passwords, 
                credit card numbers, or other sensitive information by impersonating trusted sources.
              </p>
            </div>
            <div style={styles.infoCard}>
              <div style={styles.cardIcon}>📞</div>
              <h3 style={styles.cardTitle}>Vishing</h3>
              <p style={styles.cardText}>
                Voice phishing — scammers call you pretending to be from your bank, the IRS, 
                or tech support to pressure you into giving up money or personal data.
              </p>
            </div>
            <div style={styles.infoCard}>
              <div style={styles.cardIcon}>🤖</div>
              <h3 style={styles.cardTitle}>Deepfakes</h3>
              <p style={styles.cardText}>
                AI-generated fake videos and audio that can convincingly impersonate real people, 
                used for fraud, blackmail, and disinformation campaigns.
              </p>
            </div>
            <div style={styles.infoCard}>
              <div style={styles.cardIcon}>🧠</div>
              <h3 style={styles.cardTitle}>Social Engineering</h3>
              <p style={styles.cardText}>
                Psychological manipulation techniques that exploit human trust, fear, or urgency 
                to bypass security measures and gain unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{...styles.section, background: 'rgba(102, 126, 234, 0.03)'}}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>How ScamShield Works</h2>
          <p style={styles.sectionSubtitle}>
            Our gamified training platform uses real-world scenarios to build your cyber awareness skills. 
            Learn at your own pace through interactive modules and games.
          </p>
          <div style={styles.featureGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureNumber}>01</div>
              <h3 style={styles.featureTitle}>Learn</h3>
              <p style={styles.cardText}>
                Complete {MODULES.length}+ educational modules covering every type of modern scam — from phishing 
                emails to cryptocurrency fraud. Each module includes real examples and case studies.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureNumber}>02</div>
              <h3 style={styles.featureTitle}>Practice</h3>
              <p style={styles.cardText}>
                Test your skills in our Arcade with 50+ interactive mini-games. Swipe on suspicious 
                messages, analyze fake audio calls, spot deepfake videos, and build strong passwords.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureNumber}>03</div>
              <h3 style={styles.featureTitle}>Level Up</h3>
              <p style={styles.cardText}>
                Earn XP, unlock badges, maintain daily streaks, and climb from Beginner to Shield Master. 
                Track your progress on your personal dashboard and compete with yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section id="threats" style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.sectionTitle}>The Threat is Real</h2>
          <div style={styles.threatGrid}>
            <div style={styles.threatCard}>
              <div style={styles.threatStat}>$10.5B</div>
              <p style={styles.threatLabel}>Lost to cybercrime in 2023 (FBI IC3 Report)</p>
            </div>
            <div style={styles.threatCard}>
              <div style={styles.threatStat}>3.4B</div>
              <p style={styles.threatLabel}>Phishing emails sent daily worldwide</p>
            </div>
            <div style={styles.threatCard}>
              <div style={styles.threatStat}>91%</div>
              <p style={styles.threatLabel}>Of cyberattacks begin with a phishing email</p>
            </div>
            <div style={styles.threatCard}>
              <div style={styles.threatStat}>60%</div>
              <p style={styles.threatLabel}>Of small businesses close within 6 months of a cyberattack</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Protect Yourself?</h2>
          <p style={styles.ctaSubtitle}>
            Join ScamShield today and start building your cyber awareness skills. It's completely free.
          </p>
          <button style={styles.primaryBtn} onClick={() => navigate(isLoggedIn ? '/dashboard' : '/auth')}>
            {isLoggedIn ? 'Go to Dashboard' : 'Create Free Account'}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerBrand}>
            <span style={{ fontSize: '1.5rem' }}>🛡️</span>
            <span style={styles.brandText}>ScamShield</span>
          </div>
          <p style={styles.footerText}>
            An interactive cybersecurity awareness training platform.
          </p>
          <p style={styles.footerCopy}>
            © {new Date().getFullYear()} ScamShield. Built to protect.
          </p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'var(--bg, #0a0a1a)',
    color: 'var(--text, #e0e0e0)',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    overflowX: 'hidden',
  },

  /* Nav */
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '1rem 2rem',
    backgroundColor: 'rgba(10, 10, 26, 0.85)',
    backdropFilter: 'blur(15px)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  navInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
  },
  brandText: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLink: {
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.2s',
  },
  ctaBtn: {
    padding: '0.6rem 1.5rem',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.95rem',
  },

  /* Hero */
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '6rem 2rem 4rem',
  },
  heroGlow: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  heroContent: {
    position: 'relative',
    maxWidth: '800px',
    zIndex: 2,
  },
  heroBadge: {
    display: 'inline-block',
    padding: '0.5rem 1.2rem',
    background: 'rgba(102, 126, 234, 0.1)',
    border: '1px solid rgba(102, 126, 234, 0.3)',
    borderRadius: '50px',
    fontSize: '0.85rem',
    color: '#667eea',
    marginBottom: '1.5rem',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: '800',
    lineHeight: 1.1,
    margin: '0 0 1.5rem 0',
    color: 'white',
  },
  heroHighlight: {
    background: 'linear-gradient(135deg, #667eea, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '1.15rem',
    lineHeight: 1.7,
    color: 'rgba(255,255,255,0.6)',
    maxWidth: '650px',
    margin: '0 auto 2.5rem',
  },
  heroActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  primaryBtn: {
    padding: '1rem 2.5rem',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1.05rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)',
  },
  secondaryBtn: {
    padding: '1rem 2.5rem',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1.05rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  },
  heroStats: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#667eea',
  },
  statLabel: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.5)',
    marginTop: '0.3rem',
  },
  statDivider: {
    width: '1px',
    height: '40px',
    background: 'rgba(255,255,255,0.1)',
  },

  /* Sections */
  section: {
    padding: '6rem 2rem',
  },
  sectionInner: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
    color: 'white',
  },
  sectionSubtitle: {
    fontSize: '1.05rem',
    lineHeight: 1.7,
    color: 'rgba(255,255,255,0.55)',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 3rem',
  },

  /* Info Cards */
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.5rem',
  },
  infoCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '2rem',
    transition: 'transform 0.2s, border-color 0.2s',
  },
  cardIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.15rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.75rem',
  },
  cardText: {
    fontSize: '0.9rem',
    lineHeight: 1.6,
    color: 'rgba(255,255,255,0.5)',
  },

  /* Feature Cards */
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  featureCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '2.5rem 2rem',
  },
  featureNumber: {
    fontSize: '3.5rem',
    fontWeight: '900',
    color: '#a855f7',
    textShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
  },

  /* Threat Stats */
  threatGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
  },
  threatCard: {
    background: 'rgba(236, 72, 153, 0.05)',
    border: '1px solid rgba(236, 72, 153, 0.15)',
    borderRadius: '16px',
    padding: '2rem',
    textAlign: 'center',
  },
  threatStat: {
    fontSize: '3rem',
    fontWeight: '900',
    color: '#f97316',
    textShadow: '0 0 20px rgba(249, 115, 22, 0.4)',
    marginBottom: '0.5rem',
  },
  threatLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.5)',
    lineHeight: 1.5,
  },

  /* CTA Section */
  ctaSection: {
    padding: '6rem 2rem',
    textAlign: 'center',
    background: 'linear-gradient(180deg, transparent 0%, rgba(102, 126, 234, 0.05) 100%)',
  },
  ctaContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
  },
  ctaSubtitle: {
    fontSize: '1.05rem',
    color: 'rgba(255,255,255,0.55)',
    marginBottom: '2rem',
    lineHeight: 1.6,
  },

  /* Footer */
  footer: {
    padding: '3rem 2rem',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    textAlign: 'center',
  },
  footerInner: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  footerBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  footerText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
  },
  footerCopy: {
    color: 'rgba(255,255,255,0.25)',
    fontSize: '0.8rem',
  },
};
