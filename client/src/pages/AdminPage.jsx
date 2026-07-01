import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { getApiUrl } from '../lib/api';

const INITIAL_PHISHING_CAMPAIGNS = [
  {
    id: 1,
    name: "Q3 Urgent HR Policy & Salary Adjustments",
    template: "HR Salary Phish",
    targetEmail: "alex.m@company.com",
    sent: 1,
    opened: 1,
    clicked: 1,
    reported: 0,
    status: "Failed Drill (Clicked Link)",
    date: "2026-06-25"
  },
  {
    id: 2,
    name: "AWS Root Key Verification Notice",
    template: "IT Shadow API Phish",
    targetEmail: "dev-team@company.com",
    sent: 12,
    opened: 11,
    clicked: 1,
    reported: 10,
    status: "Completed (83% Reported)",
    date: "2026-06-28"
  }
];

const EMAIL_TEMPLATES = {
  "Password Reset Urgency": {
    from: "IT Security Helpdesk <support@company-auth-verify.net>",
    subject: "🚨 URGENT: Mandatory Domain Password Reset Required (Expires in 30 Mins)",
    date: "Today at 2:14 PM",
    body: `Dear Employee,\n\nWe detected unauthorized login attempts against your corporate account from an unrecognized IP address (185.220.101.4). To prevent immediate account suspension and lock out, you must verify your identity and update your domain password immediately.\n\nFailure to comply within 30 minutes will result in your network credentials being revoked, requiring in-person identity verification at the IT Service Desk.`,
    buttonText: "🔒 Verify Identity & Reset Password Now",
    buttonUrl: "https://company-auth-verify.net/reset-portal?token=8f9a2b",
    redFlags: [
      "Sender domain is 'company-auth-verify.net' instead of official corporate domain",
      "Artificial urgency demanding action within 30 minutes under threat of suspension",
      "Generic greeting 'Dear Employee' instead of personalized name"
    ]
  },
  "HR Salary Phish": {
    from: "Human Resources <hr-benefits@workforce-portal-update.com>",
    subject: "CONFIDENTIAL: Q3 Compensation & Salary Adjustment Schedule",
    date: "Today at 9:05 AM",
    body: `Hi Team Member,\n\nFollowing the recent executive board meeting, our company has finalized the Q3 performance-based compensation adjustments and cost-of-living salary increases.\n\nPlease review your updated salary document and sign the attached digital acknowledgment form before end of day Friday to ensure your new pay rate is reflected in the upcoming payroll cycle.\n\nNote: This document contains strictly confidential compensation figures. Do not share with colleagues.`,
    buttonText: "📄 View Confidential Salary Document (PDF)",
    buttonUrl: "https://workforce-portal-update.com/login?doc=salary_q3",
    redFlags: [
      "External domain 'workforce-portal-update.com' impersonating HR",
      "Exploiting natural curiosity and financial desire (salary increase)",
      "Requires logging into an external link to view an internal HR document"
    ]
  },
  "CEO Gift Card Request": {
    from: "Executive Office - CEO <chief.exec.direct@gmail.com>",
    subject: "Quick favor needed for client meeting today",
    date: "Today at 11:30 AM",
    body: `Hi,\n\nI am currently tied up in an all-day confidential client negotiation with prospective investors and my calendar is blocked. I need a quick professional favor from you.\n\nWe want to present our client partners with digital Apple / Amazon gift cards as a token of appreciation before we close the deal at 2:00 PM. Could you please purchase 5 Apple gift cards ($200 value each) from the online store and reply directly with the digital redemption codes?\n\nI will instruct Accounts Payable to reimburse your corporate expense report immediately upon my return to the office tonight. Keep this discreet as it is a surprise for the client team.`,
    buttonText: "✉️ Reply Directly with Gift Card Codes",
    buttonUrl: "mailto:chief.exec.direct@gmail.com?subject=Gift%20Card%20Codes",
    redFlags: [
      "Executive using a personal free Gmail address instead of corporate email",
      "Requesting gift card purchases (a classic untraceable scam currency)",
      "Demanding secrecy and urgency while bypassing normal procurement channels"
    ]
  },
  "IT Shadow API Phish": {
    from: "Enterprise AI Assistant <notifications@ai-summarizer-free.io>",
    subject: "Upgrade your workflow: Free Enterprise AI Summarizer Access Assigned",
    date: "Today at 4:45 PM",
    body: `Hello,\n\nYou have been selected by your team lead to test our new automated AI Document & Contract Summarizer tool for enterprise workflows.\n\nOur system allows you to upload lengthy PDF agreements, NDA contracts, and codebase files for instant 10-second summaries. To activate your free enterprise license, click below and paste your company AWS or API access token for verification.\n\nIncrease your productivity by 10x today!`,
    buttonText: "🚀 Activate Free AI Summarizer & Paste API Key",
    buttonUrl: "https://ai-summarizer-free.io/activate",
    redFlags: [
      "Unsolicited third-party software invitation (Shadow IT risk)",
      "Asking users to paste proprietary AWS or API access tokens into an external form",
      "No verification from internal IT Security team"
    ]
  }
};

export default function AdminPage() {
  const navigate = useNavigate();
  const { isAdmin, loading: authLoading, userProfile } = useContext(AuthContext);

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

  // Simulated Phishing State
  const [campaigns, setCampaigns] = useState(() => {
    try {
      const saved = localStorage.getItem('ss_phishing_campaigns');
      return saved ? JSON.parse(saved) : INITIAL_PHISHING_CAMPAIGNS;
    } catch (e) {
      return INITIAL_PHISHING_CAMPAIGNS;
    }
  });
  const [newCampaign, setNewCampaign] = useState({
    name: '', targetEmail: 'john.doe@company.com', template: 'Password Reset Urgency'
  });
  const [previewTemplate, setPreviewTemplate] = useState(null);

  // Live Threat Broadcast State
  const [broadcast, setBroadcast] = useState(() => {
    try {
      const saved = localStorage.getItem('ss_live_threat_broadcast');
      return saved ? JSON.parse(saved) : { active: false, title: '', message: '', level: 'CRITICAL', actionText: '' };
    } catch (e) {
      return { active: false, title: '', message: '', level: 'CRITICAL', actionText: '' };
    }
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
      let profileData = null;
      const apiUrl = getApiUrl();
      
      try {
        const res = await fetch(`${apiUrl}/api/admin/users`);
        if (res.ok) {
          const data = await res.json();
          if (data.ok && data.users && data.users.length > 0) {
            profileData = data.users;
          }
        }
      } catch (e) { /* ignore */ }

      if (!profileData || profileData.length === 0) {
        try {
          const { data } = await supabase.from('profiles').select('*');
          if (data && data.length > 0) profileData = data;
        } catch (e) { /* ignore */ }
      }

      if (!profileData) profileData = [];
      
      // Ensure active logged in userProfile is always shown in Cloud DB table
      if (userProfile && !profileData.some(p => p.id === userProfile.id || p.email === userProfile.email)) {
        profileData.unshift(userProfile);
      }

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
    try {
      const apiUrl = getApiUrl();
      await fetch(`${apiUrl}/api/admin/users/${userId}/role`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole })
      });
    } catch (e) { /* ignore */ }
    await supabase.from('profiles').update({ role: newRole }).eq('id', userId);
    if (userProfile && userProfile.id === userId) {
      userProfile.role = newRole;
    }
    loadData();
  };

  const deleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to remove this user?')) return;
    try {
      const apiUrl = getApiUrl();
      await fetch(`${apiUrl}/api/admin/users/${userId}`, { method: 'DELETE' });
    } catch (e) { /* ignore */ }
    await supabase.from('profiles').delete().eq('id', userId);
    setProfiles(prev => prev.filter(p => p.id !== userId));
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

  // Launch Phishing Simulation against individual user email or list
  const handleLaunchCampaign = () => {
    if (!newCampaign.name.trim()) return alert('Please enter a campaign name.');
    if (!newCampaign.targetEmail.trim()) return alert('Please enter a target user email address.');

    const target = newCampaign.targetEmail.trim();
    let sentCount = 1;
    let openedCount = 1;
    let clickedCount = 0;
    let reportedCount = 1;
    let statusText = "Passed Drill (Reported)";

    // If targeting an individual vs multiple
    if (target.includes(',') || target.toLowerCase().includes('all')) {
      sentCount = Math.floor(Math.random() * 60) + 20;
      openedCount = Math.floor(sentCount * 0.9);
      clickedCount = Math.floor(openedCount * 0.2);
      reportedCount = openedCount - clickedCount;
      statusText = `Completed (${Math.round((reportedCount/sentCount)*100)}% Reported)`;
    } else {
      // Single individual drill outcome simulation
      const outcome = Math.random() > 0.35 ? 'reported' : 'clicked';
      if (outcome === 'clicked') {
        clickedCount = 1;
        reportedCount = 0;
        statusText = "Failed Drill (Clicked Link)";
      } else {
        clickedCount = 0;
        reportedCount = 1;
        statusText = "Passed Drill (Reported to IT)";
      }
    }

    const created = {
      id: Date.now(),
      name: newCampaign.name,
      template: newCampaign.template,
      targetEmail: target,
      sent: sentCount,
      opened: openedCount,
      clicked: clickedCount,
      reported: reportedCount,
      status: statusText,
      date: new Date().toISOString().split('T')[0]
    };

    const updated = [created, ...campaigns];
    setCampaigns(updated);
    localStorage.setItem('ss_phishing_campaigns', JSON.stringify(updated));
    setNewCampaign({ name: '', targetEmail: '', template: 'Password Reset Urgency' });
    alert(`🚀 Phishing Drill "${created.name}" dispatched to: ${target}! Check metrics table below.`);
  };

  // Live Threat Broadcast Handlers
  const handleStartBroadcast = () => {
    if (!broadcast.title || !broadcast.message) return alert("Please enter both a Threat Title and Message.");
    const updated = { ...broadcast, active: true };
    setBroadcast(updated);
    localStorage.setItem('ss_live_threat_broadcast', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));
    alert("📡 CRITICAL THREAT BROADCAST LIVE! It will now appear at the top of every user's screen!");
  };

  const handleStopBroadcast = () => {
    const updated = { ...broadcast, active: false };
    setBroadcast(updated);
    localStorage.setItem('ss_live_threat_broadcast', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));
    alert("⏹️ Broadcast terminated. Removed from user screens.");
  };

  const filteredProfiles = profiles.filter(p =>
    (p.email || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (authLoading || !isAdmin) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a1a', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Loading Admin Dashboard...
      </div>
    );
  }

  const tabs = [
    { key: 'overview', label: '📊 Overview' },
    { key: 'users', label: '👥 Users & Cloud DB' },
    { key: 'phishing', label: '🎣 Phishing Simulator' },
    { key: 'broadcast', label: '🚨 Live Threat Broadcast' },
    { key: 'content', label: '🎮 Content' },
  ];

  return (
    <div className="app-container">
      <main style={{ ...s.main, paddingTop: '1rem' }}>
        {/* Header */}
        <div style={s.header}>
          <div>
            <h1 style={s.pageTitle}>Admin Dashboard</h1>
          </div>
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
                <div style={s.statLabel}>Online DB Users</div>
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
                <div>
                  <h2 style={s.cardTitle}>Cloud Database Users Directory</h2>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', margin: '4px 0 0 0' }}>
                    Note: When hosted online, any user registering or signing in via Supabase appears here automatically!
                  </p>
                </div>
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
                        <td colSpan={5} style={{ ...s.td, textAlign: 'center', color: 'rgba(255,255,255,0.4)', padding: '40px' }}>
                          {dataLoading ? 'Connecting to Supabase Cloud...' : 'No online database users registered yet. As soon as your site is hosted and users sign up, they will appear here!'}
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

          {/* === PHISHING SIMULATION TAB === */}
          {activeTab === 'phishing' && (
            <div>
              <div style={s.card}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                  <h2 style={s.cardTitle}>🎣 Individual & Workforce Phishing Drill Simulator</h2>
                  <span style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                    Safe Training Sandbox
                  </span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '16px' }}>
                  Target any individual user email or a list of emails to test whether they recognize social engineering triggers. You can preview exactly what the email looks like before dispatching!
                </p>
                <div style={s.formGrid}>
                  <div style={s.formGroup}>
                    <label style={s.formLabel}>Campaign / Drill Name</label>
                    <input
                      style={s.formInput}
                      value={newCampaign.name}
                      onChange={e => setNewCampaign({ ...newCampaign, name: e.target.value })}
                      placeholder="e.g. Surprise Bonus Wire Drill"
                    />
                  </div>
                  <div style={s.formGroup}>
                    <label style={s.formLabel}>Target User Email Address</label>
                    <input
                      type="email"
                      style={s.formInput}
                      value={newCampaign.targetEmail}
                      onChange={e => setNewCampaign({ ...newCampaign, targetEmail: e.target.value })}
                      placeholder="e.g. employee@company.com (or all@company.com)"
                    />
                  </div>
                  <div style={s.formGroup}>
                    <label style={s.formLabel}>Phishing Template Vector</label>
                    <select
                      style={s.formInput}
                      value={newCampaign.template}
                      onChange={e => setNewCampaign({ ...newCampaign, template: e.target.value })}
                    >
                      <option value="Password Reset Urgency">Urgent IT Password Reset Notice</option>
                      <option value="HR Salary Phish">HR Salary Adjustment Document</option>
                      <option value="CEO Gift Card Request">CEO WhatsApp Gift Card Favor</option>
                      <option value="IT Shadow API Phish">Free AI Summarizer API Access</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                  <button
                    style={{ ...s.submitBtn, background: 'linear-gradient(135deg, #10b981, #059669)', display: 'flex', alignItems: 'center', gap: '8px' }}
                    onClick={handleLaunchCampaign}
                  >
                    <span>🚀</span>
                    <span>Launch Drill to Targeted Email</span>
                  </button>

                  <button
                    style={{ ...s.submitBtn, background: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(168, 85, 247, 0.5)', color: '#d8b4fe', display: 'flex', alignItems: 'center', gap: '8px' }}
                    onClick={() => setPreviewTemplate(newCampaign.template)}
                  >
                    <span>📧</span>
                    <span>Preview What Email Looks Like</span>
                  </button>
                </div>
              </div>

              <div style={{ ...s.card, marginTop: '1.5rem' }}>
                <h2 style={s.cardTitle}>Active & Past Targeted Email Drills</h2>
                <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                  <table style={s.table}>
                    <thead>
                      <tr>
                        <th style={s.th}>Drill / Campaign Name</th>
                        <th style={s.th}>Target User Email</th>
                        <th style={s.th}>Sent</th>
                        <th style={s.th}>Opened</th>
                        <th style={s.th}>Clicked (Failed)</th>
                        <th style={s.th}>Reported (Passed)</th>
                        <th style={s.th}>Drill Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map((c) => (
                        <tr key={c.id} style={s.row}>
                          <td style={{ ...s.td, fontWeight: 'bold' }}>{c.name}<br/><span style={{ fontSize: '11px', color: '#94a3b8' }}>Template: {c.template}</span></td>
                          <td style={{ ...s.td, color: '#93c5fd', fontFamily: 'monospace' }}>{c.targetEmail}</td>
                          <td style={s.td}>{c.sent}</td>
                          <td style={s.td}>{c.opened}</td>
                          <td style={{ ...s.td, color: '#f87171', fontWeight: 'bold' }}>{c.clicked}</td>
                          <td style={{ ...s.td, color: '#4ade80', fontWeight: 'bold' }}>{c.reported}</td>
                          <td style={s.td}>
                            <span style={{
                              ...s.badge,
                              background: c.status.includes('Failed') ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 197, 94, 0.2)',
                              color: c.status.includes('Failed') ? '#f87171' : '#4ade80'
                            }}>
                              {c.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* === LIVE THREAT BROADCAST TAB === */}
          {activeTab === 'broadcast' && (
            <div style={s.card}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={s.cardTitle}>🚨 Live Emergency Threat Broadcast</h2>
                <span style={{ background: broadcast.active ? 'rgba(239, 68, 68, 0.25)' : 'rgba(148, 163, 184, 0.2)', color: broadcast.active ? '#f87171' : '#94a3b8', padding: '4px 14px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px' }}>
                  {broadcast.active ? '🔴 BROADCAST ACTIVE ON ALL SCREENS' : '⚫ NO ACTIVE BROADCAST'}
                </span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '20px' }}>
                Instantly push high-priority cybersecurity alerts, zero-day warning banners, or urgent case studies directly to the top of every employee dashboard across the organization.
              </p>

              <div style={s.formGrid}>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Alert Title</label>
                  <input
                    style={s.formInput}
                    value={broadcast.title}
                    onChange={e => setBroadcast({ ...broadcast, title: e.target.value })}
                    placeholder="e.g. CRITICAL: New Zero-Day Chrome Exploit Detected"
                  />
                </div>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Severity Level</label>
                  <select
                    style={s.formInput}
                    value={broadcast.level}
                    onChange={e => setBroadcast({ ...broadcast, level: e.target.value })}
                  >
                    <option value="CRITICAL">🔴 CRITICAL (Red Banner)</option>
                    <option value="WARNING">🟡 WARNING (Yellow Banner)</option>
                    <option value="INFO">🔵 INFO (Blue Banner)</option>
                  </select>
                </div>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Action Button Label (Optional)</label>
                  <input
                    style={s.formInput}
                    value={broadcast.actionText}
                    onChange={e => setBroadcast({ ...broadcast, actionText: e.target.value })}
                    placeholder="e.g. Update Browser Now / Read Case Study"
                  />
                </div>
              </div>
              <div style={{ ...s.formGroup, marginTop: '1rem' }}>
                <label style={s.formLabel}>Alert Message Body</label>
                <input
                  style={s.formInput}
                  value={broadcast.message}
                  onChange={e => setBroadcast({ ...broadcast, message: e.target.value })}
                  placeholder="e.g. Do not click links in unsolicited Teams messages regarding Q3 Bonuses. Report immediately."
                />
              </div>

              <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                <button
                  style={{ ...s.submitBtn, background: 'linear-gradient(135deg, #ef4444, #b91c1c)', flex: 1, display: 'flex', alignItems: 'center', justify: 'center', gap: '8px' }}
                  onClick={handleStartBroadcast}
                >
                  <span>📡</span>
                  <span>Broadcast to All Screens Now</span>
                </button>
                {broadcast.active && (
                  <button
                    style={{ ...s.submitBtn, background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.3)', flex: 1 }}
                    onClick={handleStopBroadcast}
                  >
                    ⏹️ Stop & Clear Broadcast
                  </button>
                )}
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
                      onChange={e => setNewGame({ ...newGame, xpReward: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
                <div style={{ ...s.formGroup, marginTop: '1rem' }}>
                  <label style={s.formLabel}>Description</label>
                  <input
                    style={s.formInput}
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

        {/* Modal for Email Preview */}
        {previewTemplate && EMAIL_TEMPLATES[previewTemplate] && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div style={{
              background: '#fff',
              color: '#1e293b',
              borderRadius: '16px',
              maxWidth: '680px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
              fontFamily: "'Segoe UI', Arial, sans-serif"
            }}>
              {/* Email Header Bar */}
              <div style={{ background: '#0f172a', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '20px' }}>📧</span>
                  <span style={{ fontWeight: '700', fontSize: '15px' }}>Simulated Phishing Email Preview</span>
                </div>
                <button
                  onClick={() => setPreviewTemplate(null)}
                  style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontSize: '16px' }}
                >
                  ✕
                </button>
              </div>

              {/* Email Metadata */}
              <div style={{ padding: '20px 24px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                  <strong style={{ color: '#64748b' }}>From: </strong>
                  <span style={{ color: '#0f172a', fontWeight: '600' }}>{EMAIL_TEMPLATES[previewTemplate].from}</span>
                </div>
                <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                  <strong style={{ color: '#64748b' }}>To: </strong>
                  <span style={{ color: '#0f172a' }}>{newCampaign.targetEmail || 'employee@company.com'}</span>
                </div>
                <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                  <strong style={{ color: '#64748b' }}>Subject: </strong>
                  <span style={{ color: '#dc2626', fontWeight: '700' }}>{EMAIL_TEMPLATES[previewTemplate].subject}</span>
                </div>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                  {EMAIL_TEMPLATES[previewTemplate].date}
                </div>
              </div>

              {/* Email Body */}
              <div style={{ padding: '28px 24px', fontSize: '15px', lineHeight: '1.6', color: '#334155', whiteSpace: 'pre-line' }}>
                {EMAIL_TEMPLATES[previewTemplate].body}

                <div style={{ marginTop: '28px', textAlign: 'center' }}>
                  <button
                    onClick={() => {
                      alert("🚨 SCAMSHIELD PHISHING DRILL TRIGGERED!\n\nIf an employee clicked this link in real life, ScamShield would record a 'Failed Drill' in the Admin metrics table and automatically assign them a 5-minute refresher training module!");
                      setPreviewTemplate(null);
                    }}
                    style={{
                      padding: '14px 28px',
                      background: '#dc2626',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '15px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
                      transition: 'transform 0.1s'
                    }}
                  >
                    {EMAIL_TEMPLATES[previewTemplate].buttonText}
                  </button>
                </div>
              </div>

              {/* Red Flags Explainer Footnote */}
              <div style={{ padding: '16px 24px', background: '#fef2f2', borderTop: '1px solid #fee2e2' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#991b1b', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  🚩 Why This Is A Phishing Trap (ScamShield Trainer Note):
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#b91c1c', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {EMAIL_TEMPLATES[previewTemplate].redFlags.map((flag, i) => (
                    <li key={i}>{flag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
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
    fontSize: '2rem',
    fontWeight: '800',
    margin: '8px 0 0 0',
  },
  backBtn: {
    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    border: 'none',
    color: '#ffffff',
    padding: '0.6rem 1.4rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.9rem',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
    transition: 'all 0.2s',
  },
  tabBar: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '2rem',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    paddingBottom: '0.5rem',
    flexWrap: 'wrap'
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
    fontWeight: '600'
  },
  tabActive: {
    color: 'white',
    background: 'rgba(168, 85, 247, 0.2)',
    borderBottom: '2px solid #a855f7',
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
    background: 'rgba(30, 41, 59, 0.7)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '2rem',
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
    fontSize: '1.3rem',
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
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.85rem',
    fontWeight: '600',
  },
  formInput: {
    padding: '0.7rem',
    background: 'rgba(0,0,0,0.4)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '10px',
    color: 'white',
    fontSize: '0.95rem',
    outline: 'none',
  },
  submitBtn: {
    padding: '0.8rem 1.5rem',
    background: 'linear-gradient(135deg, #a855f7, #6366f1)',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.95rem',
    boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)'
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
