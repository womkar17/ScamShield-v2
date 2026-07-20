import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { getApiUrl } from '../lib/api';

const INITIAL_PHISHING_CAMPAIGNS = [];

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
  },
  "Mandatory VPN Client Upgrade": {
    from: "Enterprise Network Security <admin@vpn-security-client.net>",
    subject: "🚨 [MANDATORY ACTION] Critical Security Patch for Corporate VPN Client",
    date: "Today at 9:15 AM",
    body: `Attention Remote & Hybrid Teams,\n\nOur cybersecurity operations team has identified a critical zero-day vulnerability (CVE-2026-1184) in our legacy corporate VPN software.\n\nAll employees must immediately download and install the patched VPN Security Suite via the secure portal below before 5:00 PM today. Failure to update will result in automatic termination of remote network access and Slack connectivity.\n\nClick below to install the security certificate and authenticate your corporate credentials.`,
    buttonText: "🛡️ Download Patched VPN Security Client",
    buttonUrl: "https://vpn-security-client.net/download?auth=token",
    redFlags: [
      "Sender domain 'vpn-security-client.net' is an external unverified domain",
      "Threatening disconnection from remote work and Slack to create panic",
      "Bypassing standard MDM/IT software deployment centers"
    ]
  },
  "Urgent Package Delivery Exception": {
    from: "Global Courier Express <tracking@express-logistics-delivery.com>",
    subject: "📦 Delivery Failed: Signature Required for High-Value Corporate Parcel",
    date: "Today at 1:40 PM",
    body: `Hello,\n\nWe attempted to deliver a registered high-value corporate parcel addressed to your name at the front reception desk today at 1:15 PM, but our driver was unable to secure a verified signature.\n\nTo prevent return shipment to the sender and avoid storage penalties, please confirm your delivery time and pay the $1.85 customs processing fee using the link below.\n\nYou must verify your company address within 24 hours.`,
    buttonText: "🚚 Reschedule Delivery & Pay $1.85 Fee",
    buttonUrl: "https://express-logistics-delivery.com/track?parcel=88192A",
    redFlags: [
      "Unexpected package delivery notification demanding immediate payment",
      "Lookalike logistics domain not matching FedEx/UPS/DHL",
      "Small fee ($1.85) designed to harvest credit card or company expense details"
    ]
  },
  "Executive Deepfake Video Meeting Alert": {
    from: "Executive Assistant to CFO <meeting-room@conf-video-call.io>",
    subject: "URGENT: Join Confidential M&A Video Conference (Board Members Waiting)",
    date: "Today at 3:50 PM",
    body: `Hi,\n\nThe CFO and legal counsel have initiated an emergency video conference regarding an urgent merger acquisition. They require your immediate presence on the call to verify financial transaction details.\n\nYour standard Zoom link will not work for this high-security conference. Please use the secure enterprise bridge link below and log in using your corporate SSO credentials to join the call immediately.\n\nNote: The executive team is already on the bridge waiting for you. Do not delay.`,
    buttonText: "🎥 Join Confidential Executive Video Conference",
    buttonUrl: "https://conf-video-call.io/room/sso-login?id=cfo_ma_room",
    redFlags: [
      "High-pressure executive impersonation demanding immediate video call entry",
      "Third-party video bridge domain requiring SSO credential login",
      "Exploiting fear of keeping C-level executives waiting"
    ]
  },
  "Crypto Wallet Security Drainer Alert": {
    from: "Web3 Vault Security <security@decentralized-wallet-auth.io>",
    subject: "⚠️ SECURITY ALERT: Unauthorized Withdrawal Attempt Detected on Your Wallet",
    date: "Today at 6:10 PM",
    body: `Dear Wallet Holder,\n\nWe detected a pending smart contract withdrawal request for 4.5 ETH ($14,200) originating from an unrecognized IP in Minsk, Belarus.\n\nIf you did not authorize this transaction, you must connect your hardware or Web3 wallet immediately to revoke the smart contract permissions and freeze your assets before the block is finalized on-chain.\n\nFailure to revoke within 15 minutes will result in irreversible funds transfer.`,
    buttonText: "🛑 Connect Wallet & Revoke Transaction Now",
    buttonUrl: "https://decentralized-wallet-auth.io/revoke?tx=0x8f9b2a",
    redFlags: [
      "Classic Web3 phishing drainer tactics creating intense loss aversion",
      "Demanding wallet connection to 'revoke' permissions (actually grants drainer access)",
      "Unverified third-party security domain"
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
    title: '', description: '', type: 'quiz', difficulty: 'Easy', xpReward: 50, data: null
  });
  const [aiGeneratingContent, setAiGeneratingContent] = useState(false);

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
    name: '', targetEmail: 'john.doe@company.com', template: 'Password Reset Urgency', customSubject: '', customMessage: ''
  });
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [aiCrafting, setAiCrafting] = useState(false);
  const [smtpHelpOpen, setSmtpHelpOpen] = useState(false);
  const [aiGameCrafting, setAiGameCrafting] = useState(false);
  const [previewGame, setPreviewGame] = useState(null);

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
      loadPhishingDrills();
    }
  }, [isAdmin]);

  const loadPhishingDrills = async () => {
    // 1. Check local storage first for immediate display
    try {
      const saved = localStorage.getItem('ss_phishing_campaigns');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCampaigns(parsed);
        }
      }
    } catch (e) {}

    // 2. Fetch from unified server API / database
    try {
      const apiUrl = getApiUrl();
      const res = await fetch(`${apiUrl}/api/admin/phishing/drills`);
      const data = await res.json();
      if (data.ok && Array.isArray(data.drills)) {
        setCampaigns(data.drills);
        localStorage.setItem('ss_phishing_campaigns', JSON.stringify(data.drills));
        return;
      }
    } catch (e) {}

    // 3. Direct Supabase fallback if backend not reached
    try {
      const { data, error } = await supabase.from('phishing_drills').select('*').order('created_at', { ascending: false });
      if (!error && Array.isArray(data) && data.length > 0) {
        setCampaigns(data);
        localStorage.setItem('ss_phishing_campaigns', JSON.stringify(data));
      }
    } catch (e) {}
  };

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

  const loadCustomGames = async () => {
    // 1. Instant local display
    try {
      const saved = localStorage.getItem('ss_custom_games');
      if (saved) {
        const parsed = JSON.parse(saved).filter(g => g.title !== 'Phishy Email Alert');
        setCustomGames(parsed);
      }
    } catch (e) {}

    // 2. Unified Server API check (merges memory + Supabase DB + backup storage)
    try {
      const apiUrl = getApiUrl();
      const res = await fetch(`${apiUrl}/api/games/custom`);
      const data = await res.json();
      if (data.ok && Array.isArray(data.games)) {
        const clean = data.games.filter(g => g.title !== 'Phishy Email Alert');
        setCustomGames(clean);
        localStorage.setItem('ss_custom_games', JSON.stringify(clean));
        return;
      }
    } catch (e) {}

    // 3. Direct Supabase fallback
    try {
      const { data, error } = await supabase.from('custom_games').select('*').order('created_at', { ascending: false });
      if (!error && Array.isArray(data) && data.length > 0) {
        const clean = data.filter(g => g.title !== 'Phishy Email Alert').map(g => ({
          ...g,
          xpReward: g.xpReward ?? g.xpreward ?? 50
        }));
        setCustomGames(clean);
        localStorage.setItem('ss_custom_games', JSON.stringify(clean));
      }
    } catch (e) {}
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

  const resetUserXp = async (userId) => {
    if (!window.confirm('Reset this user\'s XP to 0?')) return;
    try {
      const apiUrl = getApiUrl();
      await fetch(`${apiUrl}/api/admin/users/${userId}/xp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ xp: 0, level: 1 })
      });
    } catch (e) { /* ignore */ }
    await supabase.from('profiles').update({ xp: 0, level: 1 }).eq('id', userId);
    setProfiles(prev => prev.map(p => p.id === userId ? { ...p, xp: 0, level: 1 } : p));
    if (userProfile && userProfile.id === userId) {
      userProfile.xp = 0;
      userProfile.level = 1;
    }
  };

  const addBonusXp = async (userId, currentXp = 0) => {
    const newXp = (currentXp || 0) + 500;
    const newLevel = Math.floor(newXp / 500) + 1;
    try {
      const apiUrl = getApiUrl();
      await fetch(`${apiUrl}/api/admin/users/${userId}/xp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ xp: newXp, level: newLevel })
      });
    } catch (e) { /* ignore */ }
    await supabase.from('profiles').update({ xp: newXp, level: newLevel }).eq('id', userId);
    setProfiles(prev => prev.map(p => p.id === userId ? { ...p, xp: newXp, level: newLevel } : p));
    if (userProfile && userProfile.id === userId) {
      userProfile.xp = newXp;
      userProfile.level = newLevel;
    }
  };

  const resetAllUsersXp = async () => {
    if (!window.confirm('⚠️ Reset ALL platform users to 0 XP and Level 1? This will wipe the XP leaderboard for everyone!')) return;
    try {
      const apiUrl = getApiUrl();
      await fetch(`${apiUrl}/api/admin/users/reset-all-xp`, { method: 'POST' });
    } catch (e) { /* ignore */ }
    await supabase.from('profiles').update({ xp: 0, level: 1 }).neq('id', '00000000-0000-0000-0000-000000000000');
    setProfiles(prev => prev.map(p => ({ ...p, xp: 0, level: 1 })));
    if (userProfile) {
      userProfile.xp = 0;
      userProfile.level = 1;
    }
    alert('✅ All platform users have been reset to 0 XP and Level 1!');
    loadData();
  };

  const saveCustomGame = async () => {
    if (!newGame.title.trim()) return;
    const created = { ...newGame, id: Date.now() };
    const updated = [created, ...customGames.filter(g => g.title !== 'Phishy Email Alert')];
    setCustomGames(updated);
    localStorage.setItem('ss_custom_games', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));

    try {
      const dbRow = { id: created.id, title: created.title, description: created.description, type: created.type, difficulty: created.difficulty, xpreward: created.xpReward, data: created.data || null };
      const { error } = await supabase.from('custom_games').upsert([dbRow]);
      if (error && error.message?.includes('data')) {
        const dbRowNoData = { id: created.id, title: created.title, description: created.description, type: created.type, difficulty: created.difficulty, xpreward: created.xpReward };
        await supabase.from('custom_games').upsert([dbRowNoData]);
      }
    } catch (e) {}

    try {
      const apiUrl = getApiUrl();
      await fetch(`${apiUrl}/api/admin/games/custom`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(created)
      });
    } catch (e) {}

    setNewGame({ title: '', description: '', type: 'quiz', difficulty: 'Easy', xpReward: 50, data: null });
    alert("✅ Custom Game saved with full playable content! Other users will see it in the Arcade immediately.");
  };

  const deleteCustomGame = async (id) => {
    const updated = customGames.filter(g => String(g.id) !== String(id));
    setCustomGames(updated);
    localStorage.setItem('ss_custom_games', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));
    try { await supabase.from('custom_games').delete().eq('id', id); } catch (e) {}
    try {
      const apiUrl = getApiUrl();
      await fetch(`${apiUrl}/api/admin/games/custom/${id}`, { method: 'DELETE' });
    } catch (e) {}
  };

  // AI Craft Phishing Email Assistant

  // AI Generate Full Game Content (type-specific, styled exactly like existing minigames.js games)
  const handleAIGenerateGameContent = async () => {
    const t = newGame.type;
    const title = newGame.title || 'Cyber Security Challenge';
    const diff = newGame.difficulty || 'Medium';
    setAiGeneratingContent(true);
    try {
      const apiUrl = getApiUrl();
      const prompts = {
        quiz: `Generate a cybersecurity quiz game about "${title}" (${diff} difficulty) styled like an existing high-quality arcade challenge. Return ONLY valid JSON:\n{"description":"Engaging 1-2 sentence scenario description","thumbnail":"🧠","data":{"question":"Clear cybersecurity scenario question?","options":[{"text":"Wrong option A","isCorrect":false,"explanation":"Why wrong"},{"text":"Correct secure action","isCorrect":true,"explanation":"Why correct"},{"text":"Wrong option B","isCorrect":false,"explanation":"Why wrong"}],"threatAnalysis":{"psychology":"Psychological manipulation tactic used","payload":"What attacker gains","defense":"Best defense habit"}}}`,
        swipe: `Generate a swipe card cybersecurity game about "${title}" (${diff} difficulty) styled like Tinder for Scam vs Safe items. Return ONLY valid JSON:\n{"description":"Engaging 1-2 sentence description inviting players to swipe Safe or Scam","thumbnail":"🎣","data":{"items":[{"content":"sender@example.com - Subject: Urgent Account Lockout","isScam":true,"explanation":"Domain lookalike and urgency."},{"content":"Legitimate notification item","isScam":false,"explanation":"Why safe."},{"content":"Suspicious SMS/URL item","isScam":true,"explanation":"Why scam."},{"content":"Official safe portal link","isScam":false,"explanation":"Why safe."},{"content":"Phishing bait message","isScam":true,"explanation":"Why scam."}],"threatAnalysis":{"psychology":"Urgency & Brand Trust","payload":"Credential theft","defense":"Always check full sender domain and URL."}}}`,
        chat: `Generate a WhatsApp-style chat scam simulation about "${title}" (${diff} difficulty). Return ONLY valid JSON:\n{"description":"Engaging 1-2 sentence scenario description","thumbnail":"💬","data":{"messages":[{"sender":"scammer","text":"Hi! This is IT support..."},{"sender":"scammer","text":"We need you to verify your password immediately..."}],"choices":[{"text":"Sure, sending credentials now.","isCorrect":false,"explanation":"Never share passwords in chat."},{"text":"I will verify through official IT support desk first.","isCorrect":true,"explanation":"Always verify through official channels."},{"text":"Can you send a link instead?","isCorrect":false,"explanation":"Links can lead to phishing."}],"threatAnalysis":{"psychology":"Authority Impersonation","payload":"Account takeover","defense":"IT Support never asks for passwords via chat."}}}`,
        audio: `Generate a vishing (voice phishing) phone call script about "${title}" (${diff} difficulty). Return ONLY valid JSON:\n{"description":"Engaging 1-2 sentence description of the phone call scenario","thumbnail":"📞","data":{"script":[{"text":"Hello, this is the fraud department calling...","isRedFlag":false},{"text":"We detected suspicious activity on your card...","isRedFlag":false},{"text":"Please read out the OTP sent to your phone immediately to block it.","isRedFlag":true},{"text":"Failure to read the OTP will result in permanent account freeze.","isRedFlag":true}],"threatAnalysis":{"psychology":"Fear of financial loss + urgency","payload":"OTP authorization for scam transfer","defense":"Banks never ask for OTP over the phone."}}}`,
        'spot-flag': `Generate a Spot The Flag cybersecurity game about "${title}" (${diff} difficulty).
Return ONLY valid JSON matching this exact structure:
{
  "description": "Examine this suspicious email/document. Click all the red flags to win.",
  "thumbnail": "📧",
  "data": {
    "scenario": "Suspicious Email Notification",
    "content": "<div style='font-family:Arial,sans-serif;padding:24px;background:#ffffff;color:#222222;border-radius:12px;border:1px solid #e2e8f0;box-shadow:0 4px 6px rgba(0,0,0,0.05)'><div style='background:#1a73e8;color:white;padding:16px;border-radius:8px 8px 0 0;margin:-24px -24px 20px -24px'><strong>From:</strong> security@g00gle-verify.net</div><p>Dear Valued Custmer,</p><p>We detected unusual login activity. Your account will be <b style='color:#dc2626'>PERMANENTLY BLOCKED</b> within 24 hours.</p><p style='margin:20px 0'><a style='background:#1a73e8;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block'>Verify Identity Now</a></p><p style='font-size:12px;color:#64748b'>Link target: http://g00gle-verify.net/login.php</p></div>",
    "flags": [
      { "id": "f1", "text": "Custmer", "hint": "Spelling typo in customer greeting." },
      { "id": "f2", "text": "PERMANENTLY BLOCKED", "hint": "Artificial extreme urgency language." },
      { "id": "f3", "text": "g00gle-verify.net", "hint": "Fake lookalike domain with zeros instead of o's." }
    ],
    "threatAnalysis": {
      "psychology": "Fear + Authority Impersonation",
      "payload": "Credential harvesting",
      "defense": "Check sender address and look for typos."
    }
  }
}
CRITICAL REQUIREMENTS FOR spot-flag:
1. You MUST include an HTML string inside 'content' representing a realistic email or notification.
2. You MUST include an array inside 'flags' with at least 3 flag objects.
3. Every single 'text' value in 'flags' MUST be an EXACT, literal substring inside the 'content' HTML string so the player can click on it!`,
        visual: `Generate a visual deepfake / forgery detection game about "${title}" (${diff} difficulty). Create an HTML mockup. Return ONLY valid JSON:\n{"description":"Examine this suspicious video call or payment screenshot. Can you detect the forgery?","thumbnail":"🔍","data":{"content":"<div style='background:#1a1a2e;padding:30px;border-radius:12px;text-align:center;color:white;border:2px solid #e94560'><div style='background:#16213e;padding:20px;border-radius:8px;margin-bottom:15px'><h3 style='color:#e94560'>EMERGENCY VIDEO CONFERENCE</h3><div style='font-size:70px;margin:15px'>👤</div><p>Executive Officer</p><p style='font-size:12px;color:#888'>Connected server: meet-secure-external.io</p></div><p style='color:#e94560;font-size:14px'>Notice: Audio latency mismatch and unnatural blinking patterns</p></div>","flaws":["meet-secure-external.io — unverified external server","Unnatural lip-sync and audio latency mismatch","Urgent demand to wire funds during low-quality video call"],"isFake":true,"threatAnalysis":{"psychology":"Executive authority impersonation via deepfake","payload":"Unauthorized wire transfer","defense":"Verify executive financial requests via a secondary communication channel."}}}`,
        password: `Generate a password security challenge about "${title}" (${diff} difficulty). Return ONLY valid JSON:\n{"description":"Test your password security against modern cracking tools.","thumbnail":"🔐","data":{"threatAnalysis":{"psychology":"Users choose convenience over security","payload":"Brute force dictionary attacks","defense":"Use 16+ character passphrases with mixed symbols and numbers."}}}`
      };
      const prompt = prompts[t] || prompts.quiz;
      const res = await fetch(`${apiUrl}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] })
      });
      const result = await res.json();
      if (result.ok && result.reply) {
        const match = result.reply.match(/\{[\s\S]*\}/);
        if (match) {
          const parsed = JSON.parse(match[0]);
          let gameData = parsed.data || parsed;

          // Strict validation & auto-healing for spot-flag to ensure playable flags and non-blank UI
          if (t === 'spot-flag') {
            const contentHtml = gameData.content || parsed.content || `<div style="font-family:Arial,sans-serif;padding:24px;background:#ffffff;color:#222222;border-radius:12px;border:1px solid #e2e8f0;box-shadow:0 4px 6px rgba(0,0,0,0.05)"><div style="background:#1a73e8;color:white;padding:16px;border-radius:8px 8px 0 0;margin:-24px -24px 20px -24px"><strong>From:</strong> security@g00gle-verify.net</div><p>Dear Valued Custmer,</p><p>We detected unusual login activity. Your account will be <b style="color:#dc2626">PERMANENTLY BLOCKED</b> within 24 hours.</p><p style="margin:20px 0"><a style="background:#1a73e8;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block">Verify Identity Now</a></p><p style="font-size:12px;color:#64748b">Link target: http://g00gle-verify.net/login.php</p></div>`;
            const flagList = (Array.isArray(gameData.flags) && gameData.flags.length > 0)
              ? gameData.flags
              : (Array.isArray(parsed.flags) && parsed.flags.length > 0 ? parsed.flags : [
                  { id: 'f1', text: 'Custmer', hint: 'Spelling typo in customer greeting.' },
                  { id: 'f2', text: 'PERMANENTLY BLOCKED', hint: 'Artificial extreme urgency language.' },
                  { id: 'f3', text: 'g00gle-verify.net', hint: 'Fake lookalike domain with zeros instead of o\'s.' }
                ]);
            gameData = {
              ...gameData,
              content: contentHtml,
              flags: flagList
            };
          }

          setNewGame(prev => ({
            ...prev,
            description: parsed.description || prev.description || 'Can you spot the social engineering manipulation in this scenario?',
            thumbnail: parsed.thumbnail || prev.thumbnail || '🎯',
            data: gameData
          }));
          alert(`✨ AI generated full ${t.toUpperCase()} game content matching Arcade style! Description, emoji & scenario are ready.`);
        } else {
          throw new Error('No JSON found in AI response');
        }
      } else {
        throw new Error(result.error || 'AI unavailable');
      }
    } catch (e) {
      console.error('AI game content error:', e);
      alert('⚠️ AI content generation failed: ' + e.message + '. You can still add content manually below.');
    } finally {
      setAiGeneratingContent(false);
    }
  };
  const handleAICraftPhishing = async () => {
    setAiCrafting(true);
    try {
      const apiUrl = getApiUrl();
      const prompt = `Write a professional, persuasive, but realistic cybersecurity awareness training phishing email for the template vector: "${newCampaign.template}".
Return ONLY a valid JSON object with exactly two keys:
{
  "subject": "The email subject line",
  "body": "The body text of the email without placeholders"
}`;
      const res = await fetch(`${apiUrl}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] })
      });
      const data = await res.json();
      if (data.ok && data.reply) {
        let parsed = null;
        try {
          const match = data.reply.match(/\{[\s\S]*\}/);
          if (match) parsed = JSON.parse(match[0]);
        } catch (e) { /* ignore */ }
        if (parsed && parsed.subject) {
          setNewCampaign(prev => ({ ...prev, customSubject: parsed.subject, customMessage: parsed.body }));
          alert("✨ AI successfully crafted a custom phishing drill subject and body! Review below.");
        } else {
          setNewCampaign(prev => ({ ...prev, customMessage: data.reply }));
          alert("✨ AI generated custom email content!");
        }
      }
    } catch (err) {
      alert("AI Crafting failed: " + err.message);
    } finally {
      setAiCrafting(false);
    }
  };

  // Launch Phishing Simulation against individual user email or list
  const handleLaunchCampaign = async () => {
    if (!newCampaign.name.trim()) return alert('Please enter a campaign name.');
    if (!newCampaign.targetEmail.trim()) return alert('Please enter a target user email address.');

    const target = newCampaign.targetEmail.trim();
    let sentCount = 1;
    let openedCount = 0;
    let clickedCount = 0;
    let reportedCount = 0;
    let statusText = "Dispatched (Awaiting Action)";

    // If targeting multiple / all
    if (target.includes(',') || target.toLowerCase().includes('all')) {
      sentCount = 50;
      statusText = "Broadcast Dispatched across all users";
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

    // Send real email via backend Google SMTP API
    try {
      const apiUrl = getApiUrl();
      const res = await fetch(`${apiUrl}/api/admin/phishing/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetEmail: target,
          campaignName: newCampaign.name,
          template: newCampaign.template,
          customSubject: newCampaign.customSubject,
          customMessage: newCampaign.customMessage,
          senderName: EMAIL_TEMPLATES[newCampaign.template]?.from,
          drillId: created.id
        })
      });
      const data = await res.json();
      if (data.ok && data.sent) {
        alert(`🚀 Phishing Drill "${created.name}" dispatched to ${target} via Google SMTP server! Check your inbox!`);
      } else if (data.ok && data.simulated) {
        alert(`🚀 Broadcast Drill "${created.name}" simulated across user database!`);
      } else {
        alert(`⚠️ Email Delivery Note: ${data.err || 'Simulated local delivery without real SMTP credentials.'}`);
      }
      loadPhishingDrills();
    } catch (e) {
      alert(`🚀 Phishing Drill "${created.name}" dispatched! Check metrics table below.`);
      loadPhishingDrills();
    }

    setNewCampaign({ name: '', targetEmail: '', template: 'Password Reset Urgency', customSubject: '', customMessage: '' });
  };

  // Live Threat Broadcast Handlers (Global server sync)
  const handleStartBroadcast = async () => {
    if (!broadcast.title || !broadcast.message) return alert("Please enter both a Threat Title and Message.");
    const updated = { ...broadcast, active: true };
    setBroadcast(updated);
    localStorage.setItem('ss_live_threat_broadcast', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));
    try {
      const apiUrl = getApiUrl();
      await fetch(`${apiUrl}/api/admin/broadcast`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
    } catch (e) { /* ignore */ }
    alert("📡 CRITICAL THREAT BROADCAST LIVE! Synced to global cloud server — appearing on all user screens!");
  };

  const handleStopBroadcast = async () => {
    const updated = { ...broadcast, active: false };
    setBroadcast(updated);
    localStorage.setItem('ss_live_threat_broadcast', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));
    try {
      const apiUrl = getApiUrl();
      await fetch(`${apiUrl}/api/admin/broadcast`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
    } catch (e) { /* ignore */ }
    alert("⏹️ Broadcast terminated. Removed globally from all user screens.");
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
            <>
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

              <div style={{ ...s.card, marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h2 style={s.cardTitle}>🔐 Platform Auth & XP Management</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', margin: '4px 0 0 0' }}>
                      Manage platform-wide gamification settings and check Supabase / Google OAuth status.
                    </p>
                  </div>
                  <button
                    style={{ ...s.actionBtn, background: 'linear-gradient(135deg, #ef4444, #b91c1c)', color: 'white', padding: '10px 18px', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                    onClick={resetAllUsersXp}
                  >
                    ⚠️ Reset All Platform Users XP to 0
                  </button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Google OAuth Provider</div>
                    <div style={{ fontSize: '15px', color: '#4ade80', fontWeight: 'bold', marginTop: '4px' }}>🟢 Active (Supabase Cloud)</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Initial Sign-up Bonus</div>
                    <div style={{ fontSize: '15px', color: '#38bdf8', fontWeight: 'bold', marginTop: '4px' }}>0 XP (Enforced)</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>OAuth Redirect Target</div>
                    <div style={{ fontSize: '15px', color: '#facc15', fontWeight: 'bold', marginTop: '4px' }}>/dashboard</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Consent Screen Prompt</div>
                    <div style={{ fontSize: '15px', color: '#c084fc', fontWeight: 'bold', marginTop: '4px' }}>select_account consent</div>
                  </div>
                </div>
              </div>
            </>
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
                          <td style={{ ...s.td, display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <button style={s.actionBtn} onClick={() => toggleRole(p.id, p.role)}>
                              {p.role === 'admin' ? 'Demote' : 'Promote'}
                            </button>
                            <button style={{ ...s.actionBtn, background: 'rgba(234,179,8,0.2)', color: '#facc15', border: '1px solid rgba(234,179,8,0.3)' }} onClick={() => resetUserXp(p.id)}>
                              Reset XP
                            </button>
                            <button style={{ ...s.actionBtn, background: 'rgba(34,197,94,0.2)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }} onClick={() => addBonusXp(p.id, p.xp)}>
                              +500 XP
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
                    <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                      <select
                        style={{ ...s.formInput, cursor: 'pointer', background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
                        value={newCampaign.targetEmail}
                        onChange={e => setNewCampaign({ ...newCampaign, targetEmail: e.target.value })}
                      >
                        <option value="" style={{ background: '#1e1e2e', color: '#fff' }}>-- Select from Registered Users ({profiles.length}) --</option>
                        <option value="all@company.com" style={{ background: '#1e1e2e', color: '#38bdf8' }}>🌐 All Registered Users (Broadcast Drill)</option>
                        {profiles.map(p => (
                          <option key={p.id || p.email} value={p.email} style={{ background: '#1e1e2e', color: '#fff' }}>
                            👤 {p.username || p.email?.split('@')[0]} ({p.email}) [{p.role || 'user'}]
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div style={s.formGroup}>
                    <label style={s.formLabel}>Phishing Template Vector</label>
                    <select
                      style={s.formInput}
                      value={newCampaign.template}
                      onChange={e => setNewCampaign({ ...newCampaign, template: e.target.value })}
                    >
                      <option value="Password Reset Urgency">🚨 Urgent IT Domain Password Reset</option>
                      <option value="HR Salary Phish">📄 HR Q3 Compensation & Salary Schedule</option>
                      <option value="CEO Gift Card Request">🎁 CEO Gift Card Purchase Favor</option>
                      <option value="IT Shadow API Phish">🤖 Free Enterprise AI Summarizer Access</option>
                      <option value="Mandatory VPN Client Upgrade">🛡️ Critical Patch: Corporate VPN Client</option>
                      <option value="Urgent Package Delivery Exception">📦 Delivery Failed: Signature Required</option>
                      <option value="Executive Deepfake Video Meeting Alert">🎥 Confidential Executive Video Conference</option>
                      <option value="Crypto Wallet Security Drainer Alert">🛑 Security Alert: Wallet Withdrawal Attempt</option>
                    </select>
                  </div>
                </div>

                {/* Custom Email Subject and Message Override */}
                <div style={{ marginTop: '16px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
                    <label style={{ ...s.formLabel, color: '#38bdf8', margin: 0 }}>
                      ✍️ Custom Email Subject & Message Body (Optional Overrides / AI Output)
                    </label>
                    <button
                      type="button"
                      onClick={handleAICraftPhishing}
                      disabled={aiCrafting}
                      style={{
                        background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                        color: '#fff',
                        border: 'none',
                        padding: '6px 14px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: 'bold',
                        cursor: aiCrafting ? 'wait' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(168, 85, 247, 0.3)'
                      }}
                    >
                      {aiCrafting ? '🤖 AI Crafting...' : '✨ AI Craft Phishing Email'}
                    </button>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input
                      style={s.formInput}
                      value={newCampaign.customSubject}
                      onChange={e => setNewCampaign({ ...newCampaign, customSubject: e.target.value })}
                      placeholder={`Default Subject: ${EMAIL_TEMPLATES[newCampaign.template]?.subject || 'Automatic Security Notice'}`}
                    />
                    <textarea
                      style={{ ...s.formInput, minHeight: '100px', resize: 'vertical', fontFamily: 'monospace', fontSize: '13px' }}
                      value={newCampaign.customMessage}
                      onChange={e => setNewCampaign({ ...newCampaign, customMessage: e.target.value })}
                      placeholder={`Type custom email message or click '✨ AI Craft Phishing Email' above to auto-write a hyper-persuasive drill script...`}
                    />
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
                  <label style={{ ...s.formLabel, margin: '0 0 8px 0', display: 'block' }}>Description & Scenario (Auto-populated by AI Content Generator)</label>
                  <input
                    style={s.formInput}
                    value={newGame.description}
                    onChange={e => setNewGame({ ...newGame, description: e.target.value })}
                    placeholder="Brief scenario description..."
                  />
                </div>

                {/* === GAME CONTENT EDITOR === */}
                <div style={{ marginTop: '1rem', background: 'rgba(168, 85, 247, 0.06)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <label style={{ ...s.formLabel, color: '#d8b4fe', margin: 0, fontSize: '14px', fontWeight: 'bold' }}>
                        🎮 Game Content & Questions ({newGame.type.toUpperCase()} Engine)
                      </label>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: '4px 0 0' }}>
                        {newGame.type === 'quiz' && 'Add a question with multiple-choice options. One must be correct.'}
                        {newGame.type === 'swipe' && 'Add email/URL items for users to swipe Safe or Scam.'}
                        {newGame.type === 'chat' && 'Create a scammer conversation with reply choices.'}
                        {newGame.type === 'audio' && 'Write a phone call script with red flag triggers.'}
                        {newGame.type === 'spot-flag' && 'Design an HTML email mockup with hidden flags to click.'}
                        {newGame.type === 'visual' && 'Create an HTML visual with deepfake detection elements.'}
                        {newGame.type === 'password' && 'Password games are self-contained — no content needed! Just add a description.'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAIGenerateGameContent}
                      disabled={aiGeneratingContent || newGame.type === 'password'}
                      style={{
                        background: aiGeneratingContent ? 'rgba(168, 85, 247, 0.3)' : 'linear-gradient(135deg, #ec4899, #a855f7)',
                        color: '#fff',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 'bold',
                        cursor: aiGeneratingContent ? 'wait' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 12px rgba(236, 72, 153, 0.3)',
                        opacity: newGame.type === 'password' ? 0.5 : 1
                      }}
                    >
                      {aiGeneratingContent ? '🤖 AI Generating Content...' : '✨ AI Generate Full Game Content'}
                    </button>
                  </div>

                  {/* Content Status Indicator */}
                  {newGame.data ? (
                    <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '8px', padding: '10px 14px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '13px' }}>✅ Game content loaded!</span>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
                        {newGame.type === 'quiz' && `Question: "${(newGame.data.question || '').substring(0, 60)}..."`}
                        {newGame.type === 'swipe' && `${(newGame.data.items || []).length} swipe items`}
                        {newGame.type === 'chat' && `${(newGame.data.messages || []).length} messages, ${(newGame.data.choices || []).length} choices`}
                        {newGame.type === 'audio' && `${(newGame.data.script || []).length} script segments`}
                        {newGame.type === 'spot-flag' && `${(newGame.data.flags || []).length} flags to find`}
                        {newGame.type === 'visual' && `Deepfake: ${newGame.data.isFake ? 'Yes' : 'No'}`}
                        {newGame.type === 'password' && 'Self-contained engine'}
                      </span>
                      <button
                        onClick={() => setNewGame(prev => ({ ...prev, data: null }))}
                        style={{ marginLeft: 'auto', background: 'rgba(239,68,68,0.2)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '6px', padding: '4px 10px', fontSize: '11px', cursor: 'pointer' }}
                      >
                        ✕ Clear
                      </button>
                    </div>
                  ) : newGame.type !== 'password' && (
                    <div style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.2)', borderRadius: '8px', padding: '10px 14px', marginBottom: '12px' }}>
                      <span style={{ color: '#facc15', fontSize: '12px' }}>⚠️ No custom content yet — click "✨ AI Generate" above or paste JSON below. Without content, the game will use a generic default quiz.</span>
                    </div>
                  )}

                  {/* Manual JSON Editor */}
                  {newGame.type !== 'password' && (
                    <div>
                      <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '6px' }}>
                        Advanced: Edit game data JSON (auto-populated by AI, or paste your own)
                      </label>
                      <textarea
                        style={{ ...s.formInput, minHeight: '120px', resize: 'vertical', fontFamily: 'monospace', fontSize: '12px', lineHeight: '1.5', background: 'rgba(0,0,0,0.3)' }}
                        value={newGame.data ? JSON.stringify(newGame.data, null, 2) : ''}
                        onChange={e => {
                          try {
                            const parsed = JSON.parse(e.target.value);
                            setNewGame(prev => ({ ...prev, data: parsed }));
                          } catch (err) {
                            // Allow typing — only update state when valid JSON
                          }
                        }}
                        placeholder={`Click "✨ AI Generate Full Game Content" to auto-fill, or paste valid JSON here...\n\nExample for ${newGame.type}:\n${newGame.type === 'quiz' ? '{"question":"...","options":[{"text":"...","isCorrect":true}],"threatAnalysis":{...}}' : ''
                        }${newGame.type === 'swipe' ? '{"items":[{"content":"...","isScam":true,"explanation":"..."}]}' : ''
                        }${newGame.type === 'chat' ? '{"messages":[{"text":"..."}],"choices":[{"text":"...","isCorrect":true}]}' : ''
                        }${newGame.type === 'audio' ? '{"script":[{"text":"...","isRedFlag":true}],"threatAnalysis":{...}}' : ''
                        }${newGame.type === 'spot-flag' ? '{"content":"<html>...","flags":[{"id":"f1","label":"...","x":50,"y":50}]}' : ''
                        }${newGame.type === 'visual' ? '{"content":"<html>...","isFake":true,"threatAnalysis":{...}}' : ''}`}
                      />
                    </div>
                  )}
                </div>

                <button style={{ ...s.submitBtn, marginTop: '1rem' }} onClick={saveCustomGame}>
                  + Add Game to Arcade
                </button>
              </div>

              {/* Detailed Explanation of How Custom Games Work & Get Layouts */}
              <div style={{ ...s.card, marginTop: '1.5rem', background: 'rgba(56, 189, 248, 0.05)', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h3 style={{ color: '#38bdf8', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>⚙️</span>
                  <span>How Custom Games Working & Layouts Function</span>
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13.5px', lineHeight: '1.6', margin: '8px 0 12px 0' }}>
                  When you create a custom game here, the system dynamically pairs your title, difficulty, and scenario description with one of <strong>7 interactive React Game Engines</strong> built into the Cyber Arcade (`/games`):
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', fontSize: '12.5px', color: 'rgba(255,255,255,0.7)' }}>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #38bdf8' }}>
                    <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>⚡ Quiz Engine (`quiz`)</strong>
                    Presents a situational scenario where users must pick the safest defense strategy from multiple choices.
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #a855f7' }}>
                    <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>🃏 Swipe Engine (`swipe`)</strong>
                    A Tinder-style card deck where users drag left/right to judge whether emails and domains are Safe or Scams.
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #4ade80' }}>
                    <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>💻 Terminal Engine (`password`)</strong>
                    A hacker console measuring real-time entropy and brute-force resistance as users type passwords.
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #facc15' }}>
                    <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>🚩 Visual Flag Engine (`spot-flag`)</strong>
                    A UI mock where users inspect corporate interfaces and click on hidden phishing indicators.
                  </div>
                </div>
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
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ ...s.actionBtn, background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.4)' }} onClick={() => setPreviewGame(g)}>👁️ Preview</button>
                        <button style={{ ...s.actionBtn, ...s.dangerBtn }} onClick={() => deleteCustomGame(g.id)}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal for Game Preview */}
        {previewGame && (
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
            <div style={{ background: '#1e1e2e', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', maxWidth: '500px', width: '100%', padding: '24px', position: 'relative', color: '#fff' }}>
              <button
                onClick={() => setPreviewGame(null)}
                style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#fff', fontSize: '20px', cursor: 'pointer' }}
              >
                ✕
              </button>
              <span style={{ background: 'rgba(168,85,247,0.2)', color: '#d8b4fe', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }}>
                GAME PREVIEW ({previewGame.type.toUpperCase()})
              </span>
              <h3 style={{ margin: '12px 0 8px 0', fontSize: '20px' }}>{previewGame.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5', marginBottom: '16px' }}>{previewGame.description || 'No description provided.'}</p>
              <div style={{ background: '#0f172a', padding: '16px', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.2)', textAlign: 'center', margin: '16px 0' }}>
                <p style={{ margin: 0, color: '#38bdf8', fontWeight: 'bold' }}>🎮 Interactive Sandbox Ready</p>
                <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#64748b' }}>Difficulty: {previewGame.difficulty} | Reward: +{previewGame.xpReward} XP</p>
              </div>
              <button
                onClick={() => setPreviewGame(null)}
                style={{ width: '100%', padding: '10px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Looks Good — Return to Content Manager
              </button>
            </div>
          </div>
        )}

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
                  <span style={{ color: '#dc2626', fontWeight: '700' }}>{newCampaign.customSubject || EMAIL_TEMPLATES[previewTemplate].subject}</span>
                </div>
                {newCampaign.customSubject && (
                  <div style={{ fontSize: '11px', color: '#a855f7', marginBottom: '4px' }}>✨ AI / Custom Subject Override Active</div>
                )}
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                  {EMAIL_TEMPLATES[previewTemplate].date}
                </div>
              </div>

              {/* Email Body */}
              <div style={{ padding: '28px 24px', fontSize: '15px', lineHeight: '1.6', color: '#334155', whiteSpace: 'pre-line' }}>
                {newCampaign.customMessage || EMAIL_TEMPLATES[previewTemplate].body}
                {newCampaign.customMessage && (
                  <div style={{ marginTop: '16px', padding: '8px 12px', background: '#f3e8ff', border: '1px solid #d8b4fe', borderRadius: '8px', fontSize: '12px', color: '#7c3aed' }}>
                    ✨ This preview reflects your custom / AI-crafted message. The actual email sent to the target will use this content.
                  </div>
                )}

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
