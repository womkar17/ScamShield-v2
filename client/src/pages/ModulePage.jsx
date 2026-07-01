import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MODULES } from '../data/modules';
import { AppContext } from '../context/AppContext';
import { GamificationContext } from '../context/GamificationContext';
import { getValidator } from '../utils/validators';
import { useToast } from '../components/Toast';
import ScamSimulatorEngine from '../components/simulators/ScamSimulatorEngine';

const BRIEFINGS = {
  0: {
    scenario: "You're scrolling through social media when you see an ad: \"Get ₹50,000 loan in just 5 minutes! No documents needed!\" You're short on cash this month, so you download the app...",
    challenge: "Can you spot the red flags before it's too late? Interact with the app below — but think before you click.",
    realWorldNote: "In 2023 alone, over 600 predatory loan apps were banned by RBI. Victims lost crores and many were blackmailed with morphed photos."
  },
  1: {
    scenario: "You've been job hunting for months. Then you spot a dream listing — Senior Developer at Google, ₹25 LPA, remote work. You apply and immediately get shortlisted...",
    challenge: "Everything seems perfect. But why are they asking for money from YOU?",
    realWorldNote: "Fake job portals steal over ₹500 crore annually from desperate job seekers in India. No legitimate employer charges an 'interview fee'."
  },
  2: {
    scenario: "While browsing online, you find an iPhone 15 Pro Max for just ₹8,999 — that's 94% off! The sale ends in 2 hours. Only 2 units left in stock...",
    challenge: "The deal looks incredible. The website looks legit. But is it really?",
    realWorldNote: "Fake e-commerce sites spike 300% during festival seasons. They clone real websites pixel-by-pixel to steal your card details."
  },
  3: {
    scenario: "You receive a WhatsApp message from an unknown number. They claim to be a construction worker who found gold coins while digging at a site...",
    challenge: "This is a classic street-level scam adapted for the digital age. Chat with the scammer and see if you can identify the trap.",
    realWorldNote: "This scam has existed for decades. Scammers use fake gold-painted coins and create urgency to extract advance payments."
  },
  4: {
    scenario: "Your phone buzzes with a notification: \"🎉 CONGRATULATIONS! You've won ₹10,00,000 in the Jio Lucky Draw!\" It looks official with the Jio logo and everything...",
    challenge: "You never entered any contest. So how did you 'win'? Let's find out.",
    realWorldNote: "Telecom companies NEVER conduct random lucky draws via SMS. Over 10,000 people fall for fake lottery scams daily in India."
  },
  5: {
    scenario: "You get a message from 'HDFC Bank': \"Your credit card has been selected for an EXCLUSIVE ₹50,000 cashback offer! Activate now before it expires.\"",
    challenge: "Banks do send offers. But do they ask for your full card details over SMS?",
    realWorldNote: "Credit card phishing is the #1 cause of financial fraud. Banks NEVER ask for your CVV or OTP via links."
  },
  6: {
    scenario: "You get an email: \"You have a surprise gift package waiting! Tracking ID: #IND2847361.\" You don't remember ordering anything, but maybe someone sent you a gift?",
    challenge: "A free gift that requires payment? Something doesn't add up. Investigate the delivery page.",
    realWorldNote: "Fake delivery scams surged 400% during COVID. Scammers exploit the high volume of online orders to blend in."
  },
  7: {
    scenario: "Your banking app sends a notification: \"⚠️ 15,000 reward points (worth ₹7,500) expiring in 24 hours! Redeem NOW to avoid losing them.\"",
    challenge: "The urgency feels real. But is this notification actually from your bank?",
    realWorldNote: "Reward point scams trick people into entering net banking credentials on fake portals, draining their accounts completely."
  },
  8: {
    scenario: "You receive a Telegram message from someone claiming to be HR at Amazon. They're offering a part-time work-from-home job — just like YouTube videos and earn ₹2,000-₹5,000 daily...",
    challenge: "The offer sounds too good to be true. But what if it's real? Chat with the recruiter and find out.",
    realWorldNote: "Task-based job scams are the fastest growing fraud in India. Scammers make you do small tasks first, then demand 'registration fees'."
  },
  9: {
    scenario: "A friend tells you about an amazing crypto platform where their ₹10,000 investment turned into ₹50,000 in just one week. You decide to check it out...",
    challenge: "The dashboard looks professional. The returns look incredible. But can you withdraw your money?",
    realWorldNote: "Ponzi crypto schemes stole over $7.8 billion globally in 2022. The profits shown on screen are always fake."
  },
  10: {
    scenario: "You receive a video call from an unknown number. The caller is in a police uniform and claims to be a CBI officer. They say your Aadhaar is linked to a money laundering case...",
    challenge: "They're threatening immediate arrest. Can you keep calm and spot the scam?",
    realWorldNote: "Digital arrest scams have exploded in India, with PM Modi himself warning citizens in 'Mann Ki Baat'. No real officer demands money on video calls."
  },
  11: {
    scenario: "You get an urgent phone call. The voice sounds EXACTLY like your mother, crying and saying she's been in an accident and needs ₹50,000 immediately...",
    challenge: "AI can now clone anyone's voice from just 3 seconds of audio. Can you verify before you pay?",
    realWorldNote: "AI deepfake voice scams increased 3000% in 2023. Scammers use AI to clone voices from social media videos."
  },
  12: {
    scenario: "You receive an SMS from 'SBI-ALERTS': \"Dear customer, your account will be BLOCKED in 24 hours due to incomplete KYC. Update immediately.\"",
    challenge: "The message creates panic. The link looks official. But should you click it?",
    realWorldNote: "Banks NEVER send KYC update links via SMS. Always visit the official bank branch or app directly for KYC updates."
  },
  13: {
    scenario: "You get a DM on Instagram from '@instagram.verified.support' saying your account has been flagged for copyright violation and will be deleted in 24 hours...",
    challenge: "Instagram support would never DM you. But the page looks convincing. Will you fall for it?",
    realWorldNote: "Social media phishing accounts impersonating platform support steal millions of accounts yearly. Instagram NEVER contacts users via DM."
  },
  14: {
    scenario: "You receive an SMS: \"URGENT: Your electricity will be disconnected TODAY at 8:00 PM due to pending bill of ₹1,847. Pay immediately to avoid disconnection.\"",
    challenge: "The threat of sitting in the dark tonight is scary. But is this message really from your electricity board?",
    realWorldNote: "Utility disconnection scams spike during summer months. Real disconnection notices are sent via registered post, not SMS links."
  },
  15: {
    scenario: "You're checking your email and notice a message from the 'Income Tax Department' saying you have a pending refund of ₹45,500. The email looks official...",
    challenge: "Government impersonation is one of the most effective scam tactics. Can you spot the fake before entering your credentials?",
    realWorldNote: "The real Income Tax department NEVER sends refund links via email. They process refunds automatically to your registered bank account."
  },
  16: {
    scenario: "It's Monday morning. You open your work email and see an URGENT message from IT Security: \"Security breach detected. Reset your Microsoft 365 password within 2 hours.\"",
    challenge: "Corporate phishing is how major data breaches happen. This email looks exactly like a real IT alert. Can you spot the difference?",
    realWorldNote: "91% of all cyber attacks begin with a phishing email. Corporate phishing costs businesses over $2.4 billion annually."
  },
  17: {
    scenario: "Your phone rings. The caller says they're from Jio and your SIM card needs to be urgently upgraded to 5G, or it will be deactivated within 24 hours...",
    challenge: "They just want a small OTP to 'verify' your identity. Seems harmless, right?",
    realWorldNote: "SIM swap fraud allows scammers to take over your phone number and access all OTP-based accounts — banking, email, everything."
  },
  18: {
    scenario: "A WhatsApp forward tells you about the 'PM Vidya Lakshmi Scholarship — ₹75,000 for all students!' The last date to apply is tomorrow...",
    challenge: "Free government money sounds great. But is this scholarship real?",
    realWorldNote: "Fake scholarship scams target students and parents, collecting fees and sensitive documents. Always verify on scholarships.gov.in."
  },
  19: {
    scenario: "You receive an email from 'Facebook Security' saying your page has been reported for copyright infringement and will be disabled within 24 hours unless you appeal...",
    challenge: "Losing your social media account feels devastating. But is this email actually from Facebook?",
    realWorldNote: "Social engineering attacks on content creators have risen 500%. Scammers target accounts with large followings for resale on the dark web."
  },
  20: {
    scenario: "You get a call from 'FedEx India'. They say an international parcel addressed to you contains 'illegal substances' and you're now under customs investigation...",
    challenge: "They're threatening legal action and offering a way out. Can you stay calm?",
    realWorldNote: "Customs/courier scams combine fear and authority to extract large sums. Real customs never demand payment over phone calls."
  },
  21: {
    scenario: "After a devastating earthquake, you see an emotional post on social media: \"Help the victims! Every ₹100 saves a life.\" The charity website looks professional...",
    challenge: "Your empathy is being weaponized. Is this a real charity or a scam?",
    realWorldNote: "After every natural disaster, fake charity scams surge by 600%. Always donate through verified platforms like PM Relief Fund or established NGOs."
  },
  22: {
    scenario: "You're at a coffee shop and connect to 'Starbucks_Free_WiFi'. A login page pops up asking you to sign in with your Google or Facebook account...",
    challenge: "Free WiFi is everywhere. But do you know who's running this network?",
    realWorldNote: "Rogue WiFi hotspots can intercept ALL your unencrypted data — passwords, messages, banking details. This is called an 'Evil Twin' attack."
  }
};

export default function ModulePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const moduleId = parseInt(id, 10);
  const moduleData = MODULES.find(m => m.id === moduleId);
  
  const { markModuleCompleted, logAttempt } = useContext(AppContext);
  const { addXP } = useContext(GamificationContext);
  const { showToast } = useToast();

  const [phase, setPhase] = useState('briefing');
  const [formData, setFormData] = useState({});
  const [riskScore, setRiskScore] = useState(0);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [exposedItems, setExposedItems] = useState([]);

  useEffect(() => {
    if (!moduleData) {
      navigate('/dashboard');
    }
  }, [moduleData, navigate]);

  if (!moduleData) return null;

  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    const currentLength = Object.values(formData).join('').length;
    const newRisk = Math.min(100, Math.floor(((currentLength + 1) / 30) * 100));
    setRiskScore(newRisk);
  };

  const handleSimulationSubmit = (exposedDataOrEvent) => {
    // Simulators can call onComplete(['Card Number', 'CVV', ...]) with specific leaked data
    if (Array.isArray(exposedDataOrEvent)) {
      setExposedItems(exposedDataOrEvent);
    } else {
      // Fallback to static module data
      if (exposedDataOrEvent && exposedDataOrEvent.preventDefault) exposedDataOrEvent.preventDefault();
      setExposedItems(moduleData.exposed || []);
    }
    setRiskScore(100);
    setPhase('alert');
  };

  const handleQuizAnswer = (selectedIndex) => {
    if (quizAnswered) return;
    setQuizAnswered(true);
    setSelectedAnswer(selectedIndex);
    const isCorrect = selectedIndex === moduleData.quiz[quizIdx].ans;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
      showToast('Correct! +10 XP', 'ok');
      addXP(10, 'quiz_answer');
    } else {
      showToast('Wrong answer — read the explanation below.', 'err');
    }
  };

  const nextQuizQuestion = () => {
    if (quizIdx < moduleData.quiz.length - 1) {
      setQuizIdx(prev => prev + 1);
      setQuizAnswered(false);
      setSelectedAnswer(null);
    } else {
      const isPerfect = quizScore === moduleData.quiz.length;
      if (isPerfect) {
        addXP(30, 'quiz_perfect');
        showToast('Perfect Quiz! +30 Bonus XP', 'badge');
      }
      markModuleCompleted(moduleId);
      addXP(50, 'module_complete');
      logAttempt({
        module_id: moduleId,
        risk_score: riskScore,
        quiz_score: quizScore,
        quiz_total: moduleData.quiz.length,
        submitted: true
      });
      setPhase('cert');
    }
  };

  const briefing = BRIEFINGS[moduleId];

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <div className="module-header">
          <button 
            className="btn back-btn" 
            onClick={() => navigate('/dashboard')}
            style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', border: 'none', color: '#fff', padding: '0.6rem 1.4rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)', transition: 'all 0.2s' }}
          >
            ← Back to Home
          </button>
          <div className="module-title-wrap">
            <span className="module-icon">{moduleData.icon}</span>
            <h2>{moduleData.title}</h2>
          </div>
        </div>

        {/* ═══════════ PHASE: BRIEFING ═══════════ */}
        {phase === 'briefing' && (
          <div style={{ maxWidth: '750px', margin: '2rem auto', padding: '0 1rem' }}>
            <div style={{
              background: 'linear-gradient(145deg, rgba(255,107,107,0.08), rgba(168,85,247,0.08))',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              overflow: 'hidden'
            }}>
              {/* Top Banner */}
              <div style={{
                background: 'linear-gradient(135deg, var(--accent), var(--purple))',
                padding: '2rem 2.5rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{moduleData.icon}</div>
                <h2 style={{ fontSize: '1.8rem', color: '#fff', margin: '0 0 0.5rem' }}>Can You Spot the Scam?</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', margin: 0 }}>
                  {moduleData.tag} • Difficulty: <span style={{ textTransform: 'capitalize' }}>{moduleData.diff}</span>
                </p>
              </div>

              <div style={{ padding: '2rem 2.5rem' }}>
                {/* The Scenario */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: 'var(--blue)', fontSize: '1.1rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    📖 The Situation
                  </h3>
                  <p style={{ color: 'var(--text)', lineHeight: '1.7', fontSize: '1.05rem', margin: 0 }}>
                    {briefing ? briefing.scenario : moduleData.desc}
                  </p>
                </div>

                {/* Your Challenge */}
                <div style={{
                  background: 'rgba(78,205,196,0.1)',
                  border: '1px solid rgba(78,205,196,0.3)',
                  borderRadius: '10px',
                  padding: '1.2rem 1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{ color: 'var(--blue)', fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    🎯 Your Challenge
                  </h3>
                  <p style={{ color: 'var(--text)', lineHeight: '1.6', margin: 0 }}>
                    {briefing ? briefing.challenge : "Interact with the simulation below. Try to identify the red flags before it's too late."}
                  </p>
                </div>

                {/* Real World Context */}
                {briefing && briefing.realWorldNote && (
                  <div style={{
                    background: 'rgba(255,107,107,0.08)',
                    border: '1px solid rgba(255,107,107,0.25)',
                    borderRadius: '10px',
                    padding: '1rem 1.5rem',
                    marginBottom: '2rem'
                  }}>
                    <p style={{ color: 'var(--text2)', lineHeight: '1.6', margin: 0, fontSize: '0.95rem' }}>
                      <strong style={{ color: 'var(--accent)' }}>⚠️ Real-world fact:</strong> {briefing.realWorldNote}
                    </p>
                  </div>
                )}

                <button
                  className="btn btn-primary"
                  onClick={() => setPhase('simulation')}
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--accent), var(--purple))',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(255,107,107,0.3)'
                  }}
                >
                  Enter the Simulation →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════ PHASE: SIMULATION ═══════════ */}
        {phase === 'simulation' && (
          <div className="simulation-area" style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
            <ScamSimulatorEngine 
              moduleId={moduleId}
              moduleData={moduleData}
              formData={formData}
              handleInputChange={handleInputChange}
              handleSimulationSubmit={handleSimulationSubmit}
              riskScore={riskScore}
            />
          </div>
        )}

        {/* ═══════════ PHASE: ALERT (Scam Reveal) ═══════════ */}
        {phase === 'alert' && (
          <div style={{ maxWidth: '750px', margin: '2rem auto', padding: '0 1rem' }}>
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '2px solid var(--accent)',
              boxShadow: '0 0 40px rgba(255,107,107,0.15)'
            }}>
              {/* Red Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                padding: '2.5rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>🚨</div>
                <h2 style={{ color: '#fff', fontSize: '2rem', margin: '0 0 0.5rem', letterSpacing: '3px' }}>YOU GOT SCAMMED</h2>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', margin: 0 }}>
                  Don't worry — this was a simulation. But in real life, here's what would have happened:
                </p>
              </div>

              <div style={{ padding: '2rem 2.5rem', background: 'var(--bg2)' }}>
                {/* What You Gave Away */}
                <div style={{
                  background: 'rgba(255,107,107,0.08)',
                  border: '1px solid rgba(255,107,107,0.25)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                    💀 Data You Exposed to the Scammer:
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {(exposedItems.length > 0 ? exposedItems : moduleData.exposed).map((item, i) => (
                      <span key={i} style={{
                        background: 'rgba(255,107,107,0.15)',
                        color: 'var(--accent)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        border: '1px solid rgba(255,107,107,0.3)'
                      }}>
                        ❌ {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* The Reveal */}
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                  borderLeft: '4px solid var(--accent)'
                }}>
                  <h3 style={{ color: 'var(--text)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>
                    🔍 What Actually Happened:
                  </h3>
                  <p style={{ color: 'var(--text)', lineHeight: '1.8', margin: 0, fontSize: '1.05rem' }}>
                    {moduleData.reveal}
                  </p>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => setPhase('learn')}
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    fontSize: '1.15rem',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--blue), var(--green))',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  🛡️ Learn How to Protect Yourself
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════ PHASE: LEARN (Protection Guide) ═══════════ */}
        {phase === 'learn' && (
          <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🛡️</div>
              <h2 style={{ fontSize: '2rem', color: 'var(--text)', margin: '0 0 0.5rem' }}>
                Protect Yourself
              </h2>
              <p style={{ color: 'var(--text2)', fontSize: '1.05rem', margin: 0 }}>
                Here's exactly how to spot and avoid this scam in real life.
              </p>
            </div>

            {/* Red Flags Section */}
            <div style={{
              background: 'linear-gradient(145deg, rgba(255,107,107,0.06), transparent)',
              border: '1px solid rgba(255,107,107,0.2)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🚩 Red Flags to Watch For
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {moduleData.flags.map((flag, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '1rem 1.2rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border)'
                  }}>
                    <span style={{
                      background: 'rgba(255,107,107,0.15)',
                      color: 'var(--accent)',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>
                      {i + 1}
                    </span>
                    <p style={{ margin: 0, lineHeight: '1.6', color: 'var(--text)', fontSize: '1rem' }}>
                      {flag}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Protection Tips Section */}
            <div style={{
              background: 'linear-gradient(145deg, rgba(46,204,113,0.06), transparent)',
              border: '1px solid rgba(46,204,113,0.2)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: 'var(--green)', marginBottom: '1.5rem', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ✅ How to Stay Safe
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {moduleData.tips.map((tip, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '1rem 1.2rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border)'
                  }}>
                    <span style={{
                      background: 'rgba(46,204,113,0.15)',
                      color: 'var(--green)',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '1rem'
                    }}>
                      ✓
                    </span>
                    <p style={{ margin: 0, lineHeight: '1.6', color: 'var(--text)', fontSize: '1rem' }}>
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => setPhase('quiz')}
              style={{
                width: '100%',
                padding: '1.2rem',
                fontSize: '1.15rem',
                fontWeight: 'bold',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--purple), var(--blue))',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(168,85,247,0.3)'
              }}
            >
              📝 Take the Quiz →
            </button>
          </div>
        )}

        {/* ═══════════ PHASE: QUIZ ═══════════ */}
        {phase === 'quiz' && (
          <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
            <div style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}>
              {/* Progress Bar */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: 'var(--text2)', fontSize: '0.95rem' }}>
                  <span>Question {quizIdx + 1} of {moduleData.quiz.length}</span>
                  <span>Score: {quizScore}/{quizIdx + (quizAnswered ? 1 : 0)}</span>
                </div>
                <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${((quizIdx + (quizAnswered ? 1 : 0)) / moduleData.quiz.length) * 100}%`,
                    background: 'linear-gradient(90deg, var(--blue), var(--purple))',
                    transition: 'width 0.5s ease',
                    borderRadius: '3px'
                  }} />
                </div>
              </div>
              
              <h2 style={{ fontSize: '1.4rem', marginBottom: '2rem', lineHeight: '1.5', color: 'var(--text)' }}>
                {moduleData.quiz[quizIdx].q}
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1rem' }}>
                {moduleData.quiz[quizIdx].opts.map((opt, i) => {
                  const isCorrect = i === moduleData.quiz[quizIdx].ans;
                  const isSelected = selectedAnswer === i;
                  
                  let bg = 'transparent';
                  let borderColor = 'var(--border)';
                  let textColor = 'var(--text)';
                  
                  if (quizAnswered) {
                    if (isCorrect) {
                      bg = 'rgba(46,204,113,0.15)';
                      borderColor = 'var(--green)';
                      textColor = 'var(--green)';
                    } else if (isSelected && !isCorrect) {
                      bg = 'rgba(255,107,107,0.15)';
                      borderColor = 'var(--accent)';
                      textColor = 'var(--accent)';
                    }
                  }
                  
                  return (
                    <button 
                      key={i} 
                      onClick={() => handleQuizAnswer(i)}
                      disabled={quizAnswered}
                      style={{ 
                        textAlign: 'left', 
                        padding: '1.1rem 1.3rem', 
                        background: bg,
                        border: `2px solid ${borderColor}`,
                        borderRadius: '10px',
                        color: textColor,
                        cursor: quizAnswered ? 'default' : 'pointer',
                        fontSize: '1rem',
                        lineHeight: '1.5',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                    >
                      <span style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        border: `2px solid ${borderColor}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        background: quizAnswered && isCorrect ? 'var(--green)' : quizAnswered && isSelected ? 'var(--accent)' : 'transparent',
                        color: quizAnswered && (isCorrect || isSelected) ? '#fff' : textColor
                      }}>
                        {quizAnswered && isCorrect ? '✓' : quizAnswered && isSelected ? '✗' : String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              
              {/* Feedback + Next Button — always visible when answered */}
              {quizAnswered && (
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1.5rem',
                  background: selectedAnswer === moduleData.quiz[quizIdx].ans
                    ? 'rgba(46,204,113,0.08)'
                    : 'rgba(255,107,107,0.08)',
                  borderRadius: '12px',
                  border: `1px solid ${selectedAnswer === moduleData.quiz[quizIdx].ans ? 'rgba(46,204,113,0.3)' : 'rgba(255,107,107,0.3)'}`
                }}>
                  <p style={{
                    marginBottom: '1.5rem',
                    lineHeight: '1.7',
                    fontSize: '1.05rem',
                    color: 'var(--text)'
                  }}>
                    <strong style={{ color: selectedAnswer === moduleData.quiz[quizIdx].ans ? 'var(--green)' : 'var(--accent)' }}>
                      {selectedAnswer === moduleData.quiz[quizIdx].ans ? '✅ Correct! ' : '❌ Incorrect. '}
                    </strong>
                    {moduleData.quiz[quizIdx].exp || "Review the material to understand why."}
                  </p>
                  
                  <button 
                    onClick={nextQuizQuestion}
                    style={{ 
                      width: '100%', 
                      padding: '1.2rem', 
                      fontSize: '1.15rem', 
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, var(--accent), var(--purple))',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(255,107,107,0.3)',
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    {quizIdx < moduleData.quiz.length - 1 ? 'Next Question →' : 'Finish Module 🏆'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ═══════════ PHASE: CERTIFICATE ═══════════ */}
        {phase === 'cert' && (
          <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--bg2), var(--bg3))',
              border: '2px solid var(--gold)',
              borderRadius: '16px',
              padding: '3rem',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏆</div>
              <h2 style={{ color: 'var(--gold)', fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'serif' }}>Module Complete!</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text2)', marginBottom: '2rem' }}>
                You've completed the <strong style={{ color: 'var(--text)' }}>{moduleData.title}</strong> module
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem' }}>
                <div>
                  <div style={{ color: 'var(--text2)', fontSize: '0.9rem' }}>Quiz Score</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: quizScore === moduleData.quiz.length ? 'var(--green)' : 'var(--text)' }}>
                    {quizScore}/{moduleData.quiz.length}
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--text2)', fontSize: '0.9rem' }}>XP Earned</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--gold)' }}>
                    +{50 + (quizScore === moduleData.quiz.length ? 30 : 0)} XP
                  </div>
                </div>
              </div>
              
              <button
                className="btn btn-primary"
                onClick={() => navigate('/dashboard')}
                style={{
                  padding: '1rem 3rem',
                  fontSize: '1.1rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--gold), #e67e22)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Return to Map →
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
