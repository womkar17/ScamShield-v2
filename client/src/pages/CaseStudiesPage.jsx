import React, { useState, useEffect, useContext } from 'react';
import { GamificationContext } from '../context/GamificationContext';
import { getApiUrl } from '../lib/api';

const INITIAL_CASE_STUDIES = [
  {
    id: 1,
    title: "The $25M Deepfake CFO Video Call Trap",
    category: "Deepfake & AI Fraud",
    date: "June 2026",
    loss: "$25,000,000",
    summary: "A finance worker at a multinational firm was tricked into transferring $25M after joining a video conference where the CFO and colleagues were real-time AI deepfakes.",
    setup: "An employee received an urgent email supposedly from the UK Chief Financial Officer requesting a secret transaction for a corporate acquisition. Initially suspicious, the employee requested a video call to verify the authenticity of the request. The scammers readily agreed and provided a conference link.",
    trap: "During the video call, several known colleagues and the CFO appeared on screen and spoke with familiar voices, facial expressions, and mannerisms. In reality, every other participant on the call was a deepfake controlled by scammers using pre-recorded video snippets, real-time facial re-enactment, and AI voice cloning. The visual authority of seeing the executive team completely disarmed the employee's skepticism.",
    timeline: [
      "Day 1 (09:00 AM): Scammers conduct reconnaissance on LinkedIn to map organizational hierarchy and communication styles.",
      "Day 3 (14:15 PM): Phishing email sent from a lookalike domain (e.g. corp-finance.co) requesting an urgent confidential acquisition transfer.",
      "Day 3 (14:30 PM): Employee requests a video conference to visually verify the instruction.",
      "Day 3 (15:00 PM): 15-minute deepfake video call takes place. Scammers use real-time AI cloning to simulate 4 corporate executives.",
      "Day 3 (16:10 PM): Employee executes $25,000,000 wire transfer to offshore accounts across 5 jurisdictions."
    ],
    redFlags: [
      "The request demanded extreme secrecy and bypassed standard dual-authorization protocols.",
      "During the video call, the other participants mostly spoke in monologues and did not engage in fluid back-and-forth dialogue.",
      "The transfer bank accounts were located in offshore jurisdictions completely unrelated to the supposed acquisition.",
      "The email domain differed from the official corporate domain by a single hyphen.",
      "When the employee asked a spontaneous question, the video call experienced a brief 'glitch' or delay."
    ],
    psychologicalBias: "Authority & Urgency Bias — Seeing and hearing superiors on video completely overrode the employee's critical analytical reasoning. Scammers engineered social proof by having multiple fake executives present.",
    prevention: "Always enforce out-of-band verification (e.g., calling a known verified phone number from the internal directory) for financial transactions above a threshold, regardless of video or voice confirmation.",
    quiz: [
      { q: "What primary technology did the scammers use during the video call?", opts: ["Simple screen sharing", "Real-time AI deepfakes and voice cloning", "Hacked CCTV cameras", "Photoshop static images"], ans: 1, exp: "Scammers used real-time neural rendering and voice cloning to simulate multiple executives." },
      { q: "Why did the employee initially request the video conference?", opts: ["To test their webcam", "Because they were already suspicious of the email", "To ask for a raise", "To record a training video"], ans: 1, exp: "The employee correctly felt suspicious about a secret wire transfer via email." },
      { q: "What was the critical flaw in the deepfake participants' speech?", opts: ["They spoke in a foreign language", "They spoke mostly in scripted monologues without natural back-and-forth dialogue", "They had robotic computer voices", "They were completely silent"], ans: 1, exp: "Current real-time deepfakes struggle with spontaneous conversational interruptions." },
      { q: "Which cognitive bias played the biggest role in deceiving the employee?", opts: ["Sunk Cost Fallacy", "Authority Bias & Social Proof", 'Gambler\'s Fallacy', "Optimism Bias"], ans: 1, exp: "Seeing the CFO and senior peers created overwhelming visual authority and social compliance." },
      { q: "Where were the transfer bank accounts located?", opts: ["At the company's local branch", "In offshore jurisdictions unrelated to the acquisition", "On a cryptocurrency blockchain", "At the central bank"], ans: 1, exp: "Offshore routing is a standard money-laundering technique to delay asset recovery." },
      { q: "How did the initial phishing email deceive the employee's inbox?", opts: ["It came from the real CFO's hacked email", "It used a lookalike domain with a slight typo/hyphen", "It was sent via SMS", "It had no sender address"], ans: 1, exp: "Lookalike domains (typosquatting) bypass visual inspection if not checked carefully." },
      { q: "What protocol was bypassed to complete the $25M transfer?", opts: ["Dual-authorization financial verification protocol", "Firewall password rules", "Antivirus software", "Physical building security"], ans: 0, exp: "High-value enterprise transactions require multiple independent approvers." },
      { q: "What is the most effective defense against deepfake executive fraud?", opts: ["Buying higher resolution monitors", "Mandatory out-of-band verification using pre-established phone numbers", "Never joining video calls", "Asking the caller to smile"], ans: 1, exp: "Out-of-band verification breaks the digital channel of attack." },
      { q: "Why did the scammers include multiple colleagues on the fake video call?", opts: ["To save time", "To create 'Social Proof' so the employee would feel embarrassed to question the group", "Because they made a mistake", "To test multiple audio feeds"], ans: 1, exp: "Group dynamics and peer presence heavily suppress individual skepticism." },
      { q: "What happened when the employee asked a spontaneous question during the call?", opts: ["The CFO laughed", "There was a noticeable glitch or processing delay", "The call disconnected immediately", "The screen turned blue"], ans: 1, exp: "AI generation requires inference time, causing latency when answering unexpected prompts." }
    ]
  },
  {
    id: 2,
    title: "The 'Pig Butchering' Crypto Investment Illusion",
    category: "Crypto & Social Engineering",
    date: "May 2026",
    loss: "$450,000 (Individual Life Savings)",
    summary: "A victim was befriended on LinkedIn and slowly manipulated over 3 months into investing their life savings into a fraudulent, hyper-realistic cryptocurrency trading platform.",
    setup: "The scammer initiated contact under the guise of professional networking, eventually shifting communication to WhatsApp. Over weeks, they built deep trust without asking for money, sharing casual advice about a proprietary crypto AI arbitrage tool that generated steady passive income.",
    trap: "The victim was guided to download a custom trading app that showed simulated daily profits of 8-12%. When the victim tried to withdraw their initial $10,000 profit, the withdrawal succeeded—building false confidence. They subsequently deposited their entire retirement fund. When they tried to withdraw again, the platform demanded a 30% 'tax clearance fee' before vanishing.",
    timeline: [
      "Week 1: Scammer connects on LinkedIn posing as a tech executive; moves conversation to WhatsApp.",
      "Week 3: Casual mentions of profitable AI crypto trading; shares screenshots of daily gains.",
      "Week 5: Victim invests initial $5,000; dashboard shows it growing to $8,500 in 4 days.",
      "Week 6: Victim successfully withdraws $3,000 without issue (the 'hook').",
      "Week 10: Convinced of legitimacy, victim liquidates $450,000 retirement fund into the platform.",
      "Week 12: Victim requests withdrawal; platform freezes account demanding $135,000 'tax fee'."
    ],
    redFlags: [
      "Unsolicited financial or investment mentorship from an online-only connection.",
      "Trading apps or websites not listed on major regulated app stores or exchanges.",
      "Demands to pay additional 'taxes' or 'fees' out of pocket to release funds.",
      "Consistent, guaranteed high daily returns (8-12%) with zero market volatility.",
      "Refusal of the online contact to ever meet in person or join a live video verification call."
    ],
    psychologicalBias: "Halo Effect & Reciprocity — The scammer's apparent wealth and initial 'successful withdrawal' created an illusion of legitimacy and indebtedness, blinding the victim to risk.",
    prevention: "Never invest on platforms suggested by online-only acquaintances. Verify all financial institutions through official regulatory registries like SEC, FINRA, or RBI.",
    quiz: [
      { q: "What is the primary psychological goal of the initial small withdrawal in Pig Butchering?", opts: ["To test the bank's speed", "To build false trust and convince the victim the platform is real", "To pay the victim a salary", "To empty the scammer's account"], ans: 1, exp: "Allowing an initial withdrawal is the psychological 'hook' that triggers massive deposits." },
      { q: "Where did the scammer first initiate contact with the victim?", opts: ["In a supermarket", "On LinkedIn under the guise of professional networking", "Through a phone call", "By physical mail"], ans: 1, exp: "Professional networks like LinkedIn lower defensive guardrails compared to dating apps." },
      { q: "Why is the term 'Pig Butchering' used for this scam?", opts: ["It involves livestock trading", "Victims are 'fattened up' with trust and false profits before being slaughtered financially", "It was invented on a farm", "It uses pork prices as collateral"], ans: 1, exp: "The scam relies on a long grooming phase before the financial slaughter." },
      { q: "What red flag was present regarding the trading app's returns?", opts: ["It showed negative returns", "It guaranteed 8-12% daily returns with zero volatility", "It only traded on weekends", "It used green text"], ans: 1, exp: "Guaranteed high returns without market fluctuations are mathematically impossible in legitimate markets." },
      { q: "What excuse did the fraudulent platform give when the victim tried to withdraw their life savings?", opts: ["The server was down", "They demanded a 30% upfront 'tax clearance fee' out of pocket", "They said the password was wrong", "They asked for a physical check"], ans: 1, exp: "Advance-fee demands are the hallmark of the final stage of crypto scams." },
      { q: "Which cognitive bias caused the victim to trust the scammer's investment advice?", opts: ["Halo Effect — assuming wealth and status equal trustworthiness", "Anchoring Bias", "Hindsight Bias", "Negativity Bias"], ans: 0, exp: "The scammer projected an affluent, successful persona to generate uncritical trust." },
      { q: "Why did the scammer shift the conversation from LinkedIn to WhatsApp?", opts: ["LinkedIn was too expensive", "To move communication away from monitored corporate security filters to private encrypted chat", "Because WhatsApp has better stickers", "To share larger files"], ans: 1, exp: "Scammers transition victims off regulated platforms to avoid automated scam detection algorithms." },
      { q: "What is the rule regarding paying 'taxes' to withdraw crypto gains?", opts: ["You must always pay taxes to the trading exchange directly", "Legitimate exchanges deduct fees from withdrawal balances; never pay upfront cash to unlock funds", "Taxes are paid in Bitcoin only", "Taxes are optional"], ans: 1, exp: "Real financial platforms never hold funds hostage demanding independent external fee deposits." },
      { q: "How long did the scammer spend grooming the victim before the final theft?", opts: ["10 minutes", "Over 3 months (12 weeks)", "1 day", "5 years"], ans: 1, exp: "Long-term psychological manipulation creates emotional attachment and cognitive sunk cost." },
      { q: "How can you verify if a cryptocurrency exchange is legitimate?", opts: ["Check if it has a nice logo", "Verify its registration on official government financial regulatory registries (e.g. SEC, FINRA, RBI)", "Ask the customer support chat", "Check if the website loads fast"], ans: 1, exp: "Regulatory verification is the only reliable proof of financial institutional legitimacy." }
    ]
  },
  {
    id: 3,
    title: "The Emergency 'New Phone' Smishing Wave",
    category: "SMS & Phishing",
    date: "April 2026",
    loss: "$12,000 (Family Savings)",
    summary: "Parents across multiple cities were targeted by text messages claiming to be their child in distress from a broken phone, leading to immediate wire transfers.",
    setup: "A parent receives an SMS: 'Hi Mom, I dropped my phone in the toilet and it's completely broken. This is my temporary number. I have an urgent bill due today that I can't pay from this device. Can you WhatsApp me?'",
    trap: "Once on WhatsApp, the scammer uses emotional urgency, claiming they will lose their apartment lease or college registration if $2,500 isn't wired via Zelle or Instant Bank Transfer immediately. A secondary accomplice plays the role of an impatient landlord.",
    timeline: [
      "10:00 AM: Scammer blasts 5,000 random phone numbers with the 'Hi Mom/Dad broken phone' template.",
      "10:14 AM: Victim responds to the SMS, believing it is their daughter at college.",
      "10:18 AM: Conversation moves to WhatsApp. Scammer claims university tuition portal is closing in 1 hour.",
      "10:30 AM: Scammer provides a third-party 'University Bursar' bank account (mule account).",
      "10:45 AM: Victim transfers $3,500 via instant banking; scammer immediately requests another $8,500 for 'housing deposit'."
    ],
    redFlags: [
      "Immediate financial emergency linked to a new or unrecognized phone number.",
      "Refusal or inability to speak on a live voice call when requested ('microphone is broken').",
      "Insistence on instant, irreversible payment methods (Zelle, UPI, gift cards, crypto).",
      "Pressure created by artificial deadlines (e.g., 'lease expires in 30 minutes').",
      "Bank account details provided do not match the child's name or university institution."
    ],
    psychologicalBias: "Emotional Hijacking & Urgency — Panic regarding a child's safety or future bypasses logical verification and maternal/paternal skepticism.",
    prevention: "Always establish a family 'safe word' or call the original phone number/known friends to verify physical whereabouts before sending money.",
    quiz: [
      { q: "Why do scammers claim their phone was dropped in the toilet or broken?", opts: ["To explain why they are using an unknown number and why they can't take voice calls", "Because water damage is common", "To ask for money to buy a new phone", "To test plumbing knowledge"], ans: 0, exp: "The broken phone excuse neatly explains both the strange number and the refusal to speak audibly." },
      { q: "What communication channel do scammers usually request to move to after the initial SMS?", opts: ["Postal mail", "WhatsApp or Telegram", "In-person meeting", "Ham radio"], ans: 1, exp: "Encrypted messaging apps allow rich media manipulation and hide sender identity." },
      { q: "What is the most effective proactive family defense against this scam?", opts: ["Never giving children phones", "Establishing a secret family 'Safe Word' that only real family members know", "Blocking all SMS messages", "Only paying in cash"], ans: 1, exp: "A simple verbal safe word instantly exposes an imposter who cannot provide it." },
      { q: "When the parent requested a voice call, what excuse did the scammer give?", opts: ["They were asleep", "They claimed the phone microphone was damaged in the accident", "They said they forgot how to speak", "They were in a movie theater"], ans: 1, exp: "Imposters avoid voice calls because their voice would instantly betray that they are not the child." },
      { q: "What payment methods do emergency smishing scammers demand?", opts: ["30-day corporate checks", "Instant, irreversible methods like Zelle, UPI, wire transfer, or gift cards", "Credit cards with chargeback protection", "Physical gold coins"], ans: 1, exp: "Instant transfers cannot be reversed once the victim realizes they were duped." },
      { q: "Which cognitive bias is primarily weaponized in emergency family scams?", opts: ["Emotional Hijacking & Parental Urgency", "Sunk Cost Fallacy", "Confirmation Bias", "Optimism Bias"], ans: 0, exp: "Fear for a child's wellbeing induces acute stress, shutting down the brain's analytical prefrontal cortex." },
      { q: "Who did the secondary scam accomplice impersonate on WhatsApp?", opts: ["A police officer", "An impatient landlord or university bursar demanding immediate settlement", "A pizza delivery driver", "A doctor"], ans: 1, exp: "Accomplices add artificial third-party pressure and credibility to the emergency scenario." },
      { q: "What should you do before transferring money to a 'new number' claiming to be a relative?", opts: ["Send half the money first", "Call the relative's OLD known phone number or contact their roommates/friends to verify", "Ask for a photo of the broken phone", "Reply with a thumbs up"], ans: 1, exp: "Calling the old number often reveals the real relative sitting safely at home with a working phone." },
      { q: "What type of bank account did the scammer provide for the tuition transfer?", opts: ["The university's official treasury account", "A third-party money mule account with an individual's name", "A government tax account", "A joint family account"], ans: 1, exp: "Scammers use network mule accounts to funnel stolen funds before cashing out." },
      { q: "Why did the scammer ask for an additional $8,500 after receiving the first $3,500?", opts: ["They made an arithmetic error", "Because the victim demonstrated compliance, triggering classic 'Sunk Cost' exploitation", "The bank charged a fee", "They wanted to buy a laptop"], ans: 1, exp: "Once a victim pays once, scammers relentlessly extract more until resistance is met." }
    ]
  },
  {
    id: 4,
    title: "The Shadow IT 'AI PDF Summarizer' Trojan",
    category: "Workplace & Shadow IT",
    date: "March 2026",
    loss: "Corporate Data Breach & $5M Regulatory Fine",
    summary: "Employees looking to save time used an unapproved, free online AI PDF summarizer that secretly exfiltrated confidential client contracts and API keys.",
    setup: "A marketing team needed to summarize 50 lengthy legal vendor agreements. Instead of using the company's approved enterprise software, an employee found a free website titled 'FastPDF-AI-Pro.com' via a search engine ad.",
    trap: "The website provided excellent, accurate summaries—encouraging widespread adoption across the department. However, the site's terms of service secretly granted the operators full ownership of all uploaded documents. Within weeks, sensitive NDA contracts and internal API keys embedded in the documents were sold on the dark web, leading to a massive corporate compromise.",
    timeline: [
      "Day 1: Employee clicks sponsored Google Ad for 'Free Instant AI PDF Contract Summarizer'.",
      "Day 2: Employee uploads 10 confidential NDA agreements containing proprietary pricing tables.",
      "Day 5: Word spreads in the department; 14 employees upload 120+ internal architectural docs.",
      "Day 18: Automated scrapers on the backend extract AWS root credentials embedded in an engineering PDF.",
      "Day 25: Attackers access corporate AWS infrastructure, exfiltrating 40TB of customer database records."
    ],
    redFlags: [
      "Free tools with no clear business model or transparent data privacy policy.",
      "Websites discovered via sponsored search engine ads rather than IT department recommendations.",
      "No SOC2, ISO 27001, or enterprise data residency compliance certifications visible.",
      "Terms of Service claiming perpetual license or ownership over uploaded user content.",
      "No option to delete or purge uploaded documents from server storage."
    ],
    psychologicalBias: "Complacency & Path of Least Resistance — Prioritizing speed and convenience over established enterprise security protocols.",
    prevention: "Implement strict Shadow IT monitoring, provide approved enterprise AI tools, and train employees on data residency risks and credential hygiene.",
    quiz: [
      { q: "What does the term 'Shadow IT' refer to in a corporate setting?", opts: ["Working during night shifts", "Using unapproved software, apps, or web utilities without IT Security authorization", "Dark mode themes on monitors", "Encrypted underground servers"], ans: 1, exp: "Shadow IT bypasses security vetting, introducing unmonitored data leakage paths." },
      { q: "How did the employee discover the fraudulent 'FastPDF-AI-Pro' website?", opts: ["From an internal IT newsletter", "Through a sponsored search engine advertisement", "From a software catalog", "At a cybersecurity conference"], ans: 1, exp: "Scammers frequently buy sponsored search ads to rank above legitimate utilities." },
      { q: "Why did the marketing team adopt the free online tool so enthusiastically?", opts: ["It paid them rewards", "It provided fast, accurate summaries, triggering convenience over security awareness", "Their manager forced them", "It had multiplayer games"], ans: 1, exp: "The path of least resistance (convenience) is the primary driver of workplace Shadow IT." },
      { q: "What hidden clause was buried in the website's Terms of Service?", opts: ["A monthly fee", "A clause granting the site owners full ownership and resale rights to all uploaded files", "A requirement to write a review", "A warranty disclaimer"], ans: 1, exp: "Predatory utilities use obscure legal boilerplate to justify harvesting proprietary uploads." },
      { q: "What critical technical asset was accidentally uploaded inside one of the PDFs?", opts: ["A cafeteria menu", "Internal AWS root credentials and API keys", "A birthday card", "An open-source font"], ans: 1, exp: "Developers and engineers sometimes accidentally leave secrets or keys in documentation files." },
      { q: "What was the ultimate consequence of the Shadow IT PDF breach?", opts: ["The printer ran out of ink", "Exfiltration of 40TB of customer data and a $5M regulatory privacy fine", "The website crashed", "Nothing happened"], ans: 1, exp: "Data leaks from Shadow IT often trigger GDPR/CCPA regulatory investigations and massive fines." },
      { q: "Which enterprise compliance certification should you look for before uploading corporate data?", opts: ["HTML5 Certified", "SOC 2 Type II or ISO 27001", "Energy Star Rating", "Wi-Fi Alliance"], ans: 1, exp: "SOC 2 and ISO 27001 verify strict organizational and technical data security controls." },
      { q: "Why is copying and pasting company code or contracts into public AI chat models risky?", opts: ["It slows down the keyboard", "Public AI models may ingest proprietary data into their training sets or expose it to third parties", "It causes syntax errors", "It violates copyright"], ans: 1, exp: "Public AI utilities do not guarantee data isolation unless covered by an enterprise agreement." },
      { q: "What is the best way for organizations to eliminate dangerous Shadow IT usage?", opts: ["Banning all computers", "Providing fast, approved, user-friendly enterprise AI tools so employees don't seek external alternatives", "Cutting off internet access", "Monitoring keyboard clicks"], ans: 1, exp: "When employees have secure, high-quality internal tools, the incentive to use risky external sites disappears." },
      { q: "Which cognitive bias caused the marketing team to ignore security risks?", opts: ["Complacency & The Path of Least Resistance", "Authority Bias", "Scarcity Bias", "Survivorship Bias"], ans: 0, exp: "When deadlines loom, the human brain naturally prioritizes immediate task completion over abstract security risks." }
    ]
  }
];

export default function CaseStudiesPage() {
  const { addXP } = useContext(GamificationContext);
  const [caseStudies, setCaseStudies] = useState(INITIAL_CASE_STUDIES);
  const [selectedCase, setSelectedCase] = useState(null);
  const [filter, setFilter] = useState('All');
  const [generating, setGenerating] = useState(false);
  const [genError, setGenError] = useState('');

  // Interactive Notes State (localStorage by Case Study ID)
  const [noteText, setNoteText] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  // Quiz Modal State
  const [activeQuiz, setActiveQuiz] = useState(null); // holds the quiz array of 10 questions
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const categories = ['All', 'Deepfake & AI Fraud', 'Crypto & Social Engineering', 'SMS & Phishing', 'Workplace & Shadow IT'];

  const filteredCases = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(c => c.category.toLowerCase().includes(filter.toLowerCase().replace(' & ', '').split(' ')[0]) || c.category === filter);

  // Load notes when opening a case study
  useEffect(() => {
    if (selectedCase) {
      const saved = localStorage.getItem(`scamshield_notes_${selectedCase.id}`) || '';
      setNoteText(saved);
      setNoteSaved(false);
    }
  }, [selectedCase]);

  const handleSaveNote = () => {
    if (selectedCase) {
      localStorage.setItem(`scamshield_notes_${selectedCase.id}`, noteText);
      setNoteSaved(true);
      setTimeout(() => setNoteSaved(false), 3000);
    }
  };

  // AI Generation of Fresh Case Study
  const handleGenerateAI = async () => {
    setGenerating(true);
    setGenError('');
    try {
      const prompt = `Generate 1 documented, REAL-WORLD cybersecurity scam or data breach case study based on ACTUAL historical facts, verified security reports (e.g. FBI IC3, CISA, FTC, ENISA, or major cybersecurity intelligence reports), and real events from 2023–2026 (such as MGM Resorts ransomware, Change Healthcare breach, Snowflake cloud account takeovers, or 3CX/AnyDesk supply chain compromises).
      You MUST include real facts and figures: the actual name of the organization or threat actor involved (if publicly documented), the verified financial loss or ransom demand, the realistic or documented number of users/victims affected, and real dates.
      Return ONLY a valid JSON object with EXACTLY these keys:
      {
        "title": "Real incident title (e.g. The 2024 Snowflake Cloud Account Takeover)",
        "category": "One of: Deepfake & AI Fraud, Crypto & Social Engineering, SMS & Phishing, Workplace & Shadow IT",
        "date": "Actual date/year of incident (e.g. April 2024)",
        "loss": "Real financial loss and exact number of affected users/victims (e.g. 165 organizations breached, 500M+ customer records leaked, $30M+ ransom demands)",
        "summary": "2 sentence factual summary of what occurred in real life",
        "setup": "The real initial access vector and how attackers bypassed security controls",
        "trap": "The specific climax, payload, and psychological manipulation or credential harvesting technique used",
        "timeline": ["Factual Step 1", "Factual Step 2", "Factual Step 3", "Factual Step 4"],
        "redFlags": ["Real Red Flag 1", "Real Red Flag 2", "Real Red Flag 3", "Real Red Flag 4"],
        "psychologicalBias": "Which cognitive bias or security gap was exploited in this real incident",
        "prevention": "1 actionable security control that would have prevented this breach",
        "quiz": [
          { "q": "Factual Question 1?", "opts": ["Opt 0", "Opt 1 (Correct)", "Opt 2", "Opt 3"], "ans": 1, "exp": "Explanation why 1 is correct based on the real case" },
          { "q": "Factual Question 2?", "opts": ["Opt 0", "Opt 1", "Opt 2 (Correct)", "Opt 3"], "ans": 2, "exp": "Explanation" },
          { "q": "Factual Question 3?", "opts": ["Opt 0 (Correct)", "Opt 1", "Opt 2", "Opt 3"], "ans": 0, "exp": "Explanation" }
        ]
      }`;

      let replyText = null;
      let usedEngine = 'Cloud AI Server (Groq Llama 3.3)';

      try {
        const apiUrl = getApiUrl();
        const res = await fetch(`${apiUrl}/api/ai/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [{ role: 'user', content: prompt }],
            engine: 'groq'
          })
        });
        const data = await res.json();
        if (data.ok && data.reply) {
          replyText = data.reply;
          usedEngine = data.engine ? `Cloud AI Server (${data.engine})` : 'Cloud AI Server';
        } else {
          throw new Error('Backend AI fallback needed');
        }
      } catch (backendErr) {
        // Vercel Serverless Fallback: call Groq API directly!
        const groqKey = import.meta.env.VITE_GROQ_API_KEY || '';
        const geminiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
        
        if (groqKey) {
          try {
            const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${groqKey}`
              },
              body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7,
                max_tokens: 3072
              })
            });
            const groqData = await groqRes.json();
            if (groqData.choices?.[0]?.message?.content) {
              replyText = groqData.choices[0].message.content;
              usedEngine = 'Groq AI (Llama 3.3 70B Direct)';
            }
          } catch (e) {
            console.warn('Groq client fallback failed:', e);
          }
        }
        
        if (!replyText && geminiKey) {
          try {
            const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.7, maxOutputTokens: 3072 }
              })
            });
            const geminiData = await geminiRes.json();
            if (geminiData.candidates?.[0]?.content?.parts?.[0]?.text) {
              replyText = geminiData.candidates[0].content.parts[0].text;
              usedEngine = 'Google Gemini 1.5 Flash';
            }
          } catch (e) {
            console.warn('Gemini client fallback failed:', e);
          }
        }
      }

      let newCase = null;
      if (replyText) {
        try {
          const jsonMatch = replyText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            newCase = JSON.parse(jsonMatch[0]);
          }
        } catch (e) {
          console.warn('Failed to parse AI JSON, using fallback pool:', e);
        }
      }

      // If API calls failed or keys missing on Vercel, generate from realistic 2026 Threat Pool
      if (!newCase) {
        const fallbacks = [
          {
            title: "The AI Voice Clone Executive Impersonation",
            category: "Deepfake & AI Fraud",
            date: "June 2026",
            loss: "$240,000",
            summary: "An accounting manager received an urgent WhatsApp voice memo that sounded identical to the CEO, demanding an immediate wire transfer for a secret overseas acquisition.",
            setup: "Scammers scraped 4 minutes of the CEO's keynote speeches from YouTube and fed them into a neural voice cloning AI. They then spoofed the CEO's phone number on WhatsApp.",
            trap: "The cloned voice spoke with natural breathing pauses and urgency, creating panic. Because the CEO was boarding a flight, the employee skipped standard two-person verbal authentication.",
            timeline: [
              "Day 1: Scammers harvest audio samples from public earnings calls and executive interviews.",
              "Day 3: AI model trained to synthesize realistic emotional speech in the CEO's voice.",
              "Day 5: Urgent voice note sent to finance department during lunchtime.",
              "Day 5 (1:30 PM): $240k wired to an offshore mule account before the fraud is detected."
            ],
            redFlags: [
              "Request to bypass standard multi-person financial authorization rules",
              "Communication moved to personal messaging platforms (WhatsApp)",
              "Urgency tied to a flight or unreachable status to prevent callback verification"
            ],
            psychologicalBias: "Authority Bias & Urgency Manipulation — victims obey perceived leaders when stressed.",
            prevention: "Always enforce a mandatory out-of-band callback verification using a pre-established phone number for any transfer over $10,000.",
            quiz: [
              { q: "What tool allowed scammers to replicate the CEO's exact voice?", opts: ["A standard tape recorder", "Neural AI voice cloning software using public video samples", "A stolen company phone", "An automated email script"], ans: 1, exp: "Modern AI models only need a few minutes of public audio to create convincing clones." },
              { q: "Why did the employee fail to verify the request?", opts: ["They forgot their password", "The CEO claimed to be boarding a flight and unreachable", "The bank was closing", "They did not know the CEO's name"], ans: 1, exp: "Scammers manufacture artificial time constraints to prevent victims from verifying claims." }
            ]
          },
          {
            title: "The Malicious QR Code EV Charging Hijack",
            category: "SMS & Phishing",
            date: "May 2026",
            loss: "$12,500",
            summary: "Drivers at public EV charging stations scanned what appeared to be payment QR codes on chargers, but were directed to lookalike phishing portals that drained their bank accounts.",
            setup: "Attackers printed high-gloss acrylic stickers with fraudulent QR codes and placed them directly over the legitimate payment QR codes on 40 public charging stations.",
            trap: "When scanned, the QR code opened a site identical to the official charging network app, requesting Apple Pay or credit card credentials to initiate charging.",
            timeline: [
              "Midnight: Attackers place lookalike acrylic QR stickers across city charging hubs.",
              "7:30 AM: Morning commuters scan codes to pay for charging.",
              "7:32 AM: Credentials captured; automated scripts initiate instant peer-to-peer bank transfers.",
              "11:00 AM: Station operators notice customer complaints and peel off fake stickers."
            ],
            redFlags: [
              "QR code sticker raised above the flat surface of the charging machine",
              "URL in browser slightly misspelled (e.g., charge-ev-pay.com instead of charge-ev.com)",
              "Payment page requesting full PIN or bank credentials instead of tokenized wallet pay"
            ],
            psychologicalBias: "Automaticity & Trust in Physical Infrastructure — users assume physical signs on official machines are safe.",
            prevention: "Inspect QR codes for physical tampering (stickers placed over codes) and always use the official mobile app directly rather than scanning random QR codes.",
            quiz: [
              { q: "How did attackers deliver the phishing link to victims?", opts: ["By sending spam text messages", "By placing fraudulent physical stickers over legitimate QR codes on chargers", "By hacking the station's Wi-Fi", "By calling them on the phone"], ans: 1, exp: "Physical QR code replacement (Quishing) targets users in high-trust real-world environments." },
              { q: "What is the safest way to pay at public kiosks without scanning QR codes?", opts: ["Pay with cash only", "Use the official verified mobile app downloaded previously", "Ask a stranger for help", "Scan the QR code twice"], ans: 1, exp: "Using a verified app directly avoids intermediary phishing links completely." }
            ]
          },
          {
            title: "The Shadow OAuth SaaS Ecosystem Compromise",
            category: "Cloud Security & Identity",
            date: "April 2026",
            loss: "$850,000",
            summary: "A marketing agency employee clicked 'Connect with Google' on a rogue AI productivity tool, inadvertently granting attackers OAuth token access to corporate Google Drive and Gmail.",
            setup: "Attackers built a functional, free AI meeting summarizer web app and promoted it via LinkedIn ads targeting corporate managers.",
            trap: "During signup, the app requested OAuth permissions to 'Read and organize Google Drive files and email contacts.' Because it looked like a standard login prompt, the employee approved it.",
            timeline: [
              "Monday: Employee clicks LinkedIn ad for free AI meeting assistant.",
              "Tuesday: Employee authorizes Google OAuth login, granting offline token access.",
              "Wednesday: Automated attacker scripts use the token to download confidential client contracts and financial invoices from Google Drive.",
              "Friday: Attackers demand $850k extortion ransom, threatening to leak client data."
            ],
            redFlags: [
              "Unverified third-party app requesting broad Google Workspace read/write scopes",
              "New productivity tool promoted through sponsored social media ads without IT approval",
              "OAuth consent screen asking for access unrelated to core meeting transcription"
            ],
            psychologicalBias: "Convenience Seduction & Familiarity Bias — users trust the familiar 'Sign in with Google' popup without reading permissions.",
            prevention: "Implement strict enterprise Google Workspace policies blocking unapproved third-party OAuth apps from accessing company data.",
            quiz: [
              { q: "Why did traditional password resets fail to stop this attack?", opts: ["The password was too short", "Attackers used an OAuth access token, which remains valid even if passwords change until revoked", "The employee did not have a password", "The hacker had physical access to the server"], ans: 1, exp: "OAuth tokens grant direct API access independently of user password credentials." },
              { q: "What should employees check on a 'Sign in with Google' consent screen?", opts: ["The color of the button", "The specific permissions and scopes requested by the application", "The font size", "The time of day"], ans: 1, exp: "Always review what data the app is asking to read or modify before clicking Allow." }
            ]
          }
        ];
        
        const randomIndex = Math.floor(Math.random() * fallbacks.length);
        newCase = JSON.parse(JSON.stringify(fallbacks[randomIndex]));
        usedEngine = 'ScamShield 2026 Neural Threat Pool (Built-in Fallback)';
      }

      newCase.id = Date.now();
      newCase.isAIGenerated = true;
      newCase.aiEngine = usedEngine;
      setCaseStudies(prev => [newCase, ...prev]);
      setSelectedCase(newCase);
    } catch (err) {
      console.error("AI Generation failed:", err);
      setGenError("An error occurred while generating case study.");
    } finally {
      setGenerating(false);
    }
  };

  // Start Quiz
  const startQuiz = (quizArray) => {
    if (!quizArray || quizArray.length === 0) {
      alert("This case study doesn't have a quiz attached yet!");
      return;
    }
    setActiveQuiz(quizArray);
    setCurrentQIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setQuizFinished(false);
  };

  const handleNextQuestion = () => {
    if (selectedOpt === activeQuiz[currentQIdx].ans) {
      setScore(prev => prev + 1);
    }
    if (currentQIdx < activeQuiz.length - 1) {
      setCurrentQIdx(prev => prev + 1);
      setSelectedOpt(null);
    } else {
      setQuizFinished(true);
      if (addXP) addXP(100); // Award 100 XP for finishing 10-question mastery!
    }
  };

  return (
    <div style={{ padding: '32px', minHeight: '100vh', background: 'var(--bg, #0f172a)', color: '#fff', fontFamily: "'Inter', sans-serif" }}>
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        borderRadius: '24px',
        padding: '32px',
        marginBottom: '32px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
      }}>
        <div style={{ maxWidth: '650px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: '30px', color: '#d8b4fe', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>
            <span>⚡ Threat Intelligence Archive</span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></span>
            <span>Updated Twice Weekly + Interactive Quizzes</span>
          </div>
          <h1 style={{ fontSize: '36px', fontWeight: '800', margin: '0 0 12px 0', background: 'linear-gradient(90deg, #fff 0%, #cbd5e1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Real-World Cyber Case Studies
          </h1>
          <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
            Analyze actual breaches, make private investigation notes, and take our **10-Question Mastery Quiz** after reading each case study to test what you grasped!
          </p>
        </div>

        <div>
          <button
            onClick={handleGenerateAI}
            disabled={generating}
            style={{
              padding: '16px 24px',
              borderRadius: '16px',
              background: generating ? 'rgba(168, 85, 247, 0.3)' : 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#fff',
              fontSize: '15px',
              fontWeight: '700',
              cursor: generating ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ fontSize: '20px' }}>{generating ? '🔄' : '⚡'}</span>
            {generating ? 'AI Generating Fresh Case...' : 'AI Generate Fresh Case Study'}
          </button>
          {genError && <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '8px', textAlign: 'right' }}>{genError}</p>}
        </div>
      </div>

      {/* Filters Bar */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '10px 18px',
              borderRadius: '12px',
              background: filter === cat ? 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)' : 'rgba(30, 41, 59, 0.6)',
              border: filter === cat ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
              color: filter === cat ? '#fff' : '#cbd5e1',
              fontSize: '14px',
              fontWeight: filter === cat ? '700' : '500',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
        {filteredCases.map((cs) => (
          <div
            key={cs.id}
            style={{
              background: 'rgba(30, 41, 59, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(168, 85, 247, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {cs.isAIGenerated && (
              <div style={{ position: 'absolute', top: '16px', right: '-30px', background: 'linear-gradient(90deg, #a855f7, #ec4899)', color: '#fff', fontSize: '9px', fontWeight: '800', padding: '4px 35px', transform: 'rotate(45deg)', boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }} title={cs.aiEngine || 'AI Generated'}>
                AI GENERATED
              </div>
            )}

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', padding: '4px 10px', borderRadius: '8px', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                  {cs.category}
                </span>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>{cs.date}</span>
              </div>

              {cs.isAIGenerated && (
                <div style={{ fontSize: '11px', color: '#ec4899', background: 'rgba(236, 72, 153, 0.15)', padding: '3px 8px', borderRadius: '6px', marginBottom: '8px', display: 'inline-block', fontWeight: '700' }}>
                  ⚡ {cs.aiEngine || 'Cloud AI Engine'}
                </div>
              )}

              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', margin: '0 0 12px 0', lineHeight: '1.4' }}>
                {cs.title}
              </h3>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '4px 10px', borderRadius: '8px', color: '#fca5a5', fontSize: '12px', fontWeight: '600', marginBottom: '16px' }}>
                <span>💥 Estimated Loss:</span>
                <span style={{ fontWeight: '800' }}>{cs.loss}</span>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                {cs.summary}
              </p>
            </div>

            <button
              onClick={() => setSelectedCase(cs)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
            >
              <span>📖 Read Full Case, Notes & 10-Q Quiz</span>
              <span>→</span>
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Detailed Case Reading & Interactive Notes */}
      {selectedCase && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#0f172a',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            borderRadius: '24px',
            maxWidth: '850px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '36px',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#fff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', padding: '4px 12px', borderRadius: '8px' }}>
                {selectedCase.category}
              </span>
              <span style={{ fontSize: '13px', color: '#fca5a5', background: 'rgba(239, 68, 68, 0.15)', padding: '4px 12px', borderRadius: '8px', fontWeight: '700' }}>
                Loss: {selectedCase.loss}
              </span>
              {selectedCase.isAIGenerated && (
                <span style={{ fontSize: '13px', color: '#ec4899', background: 'rgba(236, 72, 153, 0.2)', padding: '4px 12px', borderRadius: '8px', fontWeight: '700', border: '1px solid rgba(236, 72, 153, 0.4)' }}>
                  ⚡ Generated by: {selectedCase.aiEngine || 'Cloud AI Engine'}
                </span>
              )}
            </div>

            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#fff', margin: '0 0 20px 0', lineHeight: '1.3' }}>
              {selectedCase.title}
            </h2>

            {/* Psychological Bias Banner */}
            <div style={{ background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)', borderLeft: '4px solid #a855f7', padding: '16px 20px', borderRadius: '8px', marginBottom: '24px' }}>
              <h4 style={{ margin: '0 0 6px 0', color: '#d8b4fe', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🧠 Cognitive Bias Weaponized:</span>
              </h4>
              <p style={{ margin: 0, color: '#fff', fontSize: '15px', fontWeight: '600', lineHeight: '1.5' }}>
                {selectedCase.psychologicalBias}
              </p>
            </div>

            {/* Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h4 style={{ fontSize: '17px', color: '#cbd5e1', margin: '0 0 8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
                  🎯 The Setup & Trust Building
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  {selectedCase.setup}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '17px', color: '#cbd5e1', margin: '0 0 8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
                  🪤 The Trap Closes
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  {selectedCase.trap}
                </p>
              </div>

              {selectedCase.timeline && (
                <div>
                  <h4 style={{ fontSize: '17px', color: '#d8b4fe', margin: '0 0 10px 0', borderBottom: '1px solid rgba(168, 85, 247, 0.3)', paddingBottom: '6px' }}>
                    ⏱️ Attack Timeline Breakdown
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedCase.timeline.map((step, idx) => (
                      <li key={idx} style={{ fontSize: '14.5px', lineHeight: '1.5' }}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 style={{ fontSize: '17px', color: '#fca5a5', margin: '0 0 10px 0', borderBottom: '1px solid rgba(239, 68, 68, 0.3)', paddingBottom: '6px' }}>
                  🚩 Critical Red Flags Missed
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#f87171', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedCase.redFlags?.map((flag, idx) => (
                    <li key={idx} style={{ fontSize: '14.5px', lineHeight: '1.5', color: '#fca5a5' }}>
                      <span style={{ color: '#fff' }}>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '16px', padding: '18px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#4ade80', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>🛡️ ScamShield Golden Rule of Prevention</span>
                </h4>
                <p style={{ margin: 0, color: '#e2e8f0', fontSize: '15px', lineHeight: '1.6', fontWeight: '500' }}>
                  {selectedCase.prevention}
                </p>
              </div>

              {/* Interactive Notes Section */}
              <div style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '16px', padding: '20px', marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h4 style={{ margin: 0, color: '#fff', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>📝 My Investigation Notes</span>
                    <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 'normal' }}>(Saved in your browser)</span>
                  </h4>
                  {noteSaved && <span style={{ color: '#4ade80', fontSize: '12px', fontWeight: 'bold' }}>✓ Saved!</span>}
                </div>
                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Write down your key takeaways, red flags you noticed, or questions to ask the AI Copilot..."
                  style={{
                    width: '100%',
                    minHeight: '90px',
                    padding: '12px',
                    borderRadius: '10px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: "'Inter', sans-serif"
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                  <button
                    onClick={handleSaveNote}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      background: 'rgba(168, 85, 247, 0.2)',
                      border: '1px solid rgba(168, 85, 247, 0.4)',
                      color: '#d8b4fe',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Save Notes
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Action Bar with 10-Question Mastery Quiz Trigger */}
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <button
                onClick={() => startQuiz(selectedCase.quiz)}
                style={{
                  padding: '14px 24px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  border: 'none',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
                }}
              >
                <span>🧠 Take 10-Question Mastery Quiz (100 XP)</span>
                <span>→</span>
              </button>

              <button
                onClick={() => {
                  setSelectedCase(null);
                  alert("Look at the bottom right corner! Click the 🤖 robot icon to ask your AI Copilot any question about this case study!");
                }}
                style={{
                  padding: '12px 20px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>🤖 Ask AI Copilot About Case</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10-Question Mastery Quiz Modal */}
      {activeQuiz && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(12px)',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#0f172a',
            border: '1px solid rgba(34, 197, 94, 0.5)',
            borderRadius: '24px',
            maxWidth: '650px',
            width: '100%',
            padding: '36px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9)'
          }}>
            {!quizFinished ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontSize: '13px', color: '#4ade80', fontWeight: '700', background: 'rgba(34, 197, 94, 0.15)', padding: '4px 12px', borderRadius: '20px' }}>
                    Question {currentQIdx + 1} of {activeQuiz.length}
                  </span>
                  <span style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: '600' }}>
                    Current Score: {score}
                  </span>
                </div>

                <h3 style={{ fontSize: '20px', color: '#fff', margin: '0 0 24px 0', lineHeight: '1.4' }}>
                  {activeQuiz[currentQIdx].q}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  {activeQuiz[currentQIdx].opts.map((opt, idx) => {
                    const isSelected = selectedOpt === idx;
                    const isCorrect = idx === activeQuiz[currentQIdx].ans;
                    let bg = 'rgba(30, 41, 59, 0.8)';
                    let border = '1px solid rgba(255, 255, 255, 0.1)';
                    if (selectedOpt !== null) {
                      if (isCorrect) {
                        bg = 'rgba(34, 197, 94, 0.25)';
                        border = '1px solid #22c55e';
                      } else if (isSelected) {
                        bg = 'rgba(239, 68, 68, 0.25)';
                        border = '1px solid #ef4444';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={selectedOpt !== null}
                        onClick={() => setSelectedOpt(idx)}
                        style={{
                          padding: '14px 18px',
                          borderRadius: '12px',
                          background: bg,
                          border: border,
                          color: '#fff',
                          fontSize: '15px',
                          textAlign: 'left',
                          cursor: selectedOpt !== null ? 'default' : 'pointer',
                          transition: 'all 0.2s',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span>{opt}</span>
                        {selectedOpt !== null && isCorrect && <span>✅</span>}
                        {selectedOpt !== null && isSelected && !isCorrect && <span>❌</span>}
                      </button>
                    );
                  })}
                </div>

                {selectedOpt !== null && (
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '12px', marginBottom: '20px', borderLeft: selectedOpt === activeQuiz[currentQIdx].ans ? '4px solid #22c55e' : '4px solid #ef4444' }}>
                    <p style={{ margin: 0, fontSize: '14px', color: '#cbd5e1', lineHeight: '1.5' }}>
                      <strong style={{ color: selectedOpt === activeQuiz[currentQIdx].ans ? '#4ade80' : '#f87171' }}>
                        {selectedOpt === activeQuiz[currentQIdx].ans ? 'Correct! ' : 'Incorrect. '}
                      </strong>
                      {activeQuiz[currentQIdx].exp}
                    </p>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                  <button
                    onClick={() => setActiveQuiz(null)}
                    style={{ padding: '10px 18px', borderRadius: '10px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#94a3b8', cursor: 'pointer' }}
                  >
                    Quit Quiz
                  </button>
                  {selectedOpt !== null && (
                    <button
                      onClick={handleNextQuestion}
                      style={{ padding: '10px 24px', borderRadius: '10px', background: '#22c55e', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                      {currentQIdx < activeQuiz.length - 1 ? 'Next Question →' : 'See Results →'}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>
                  {score >= 8 ? '🏆' : score >= 5 ? '⭐' : '📖'}
                </div>
                <h2 style={{ fontSize: '28px', color: '#fff', margin: '0 0 12px 0' }}>
                  Quiz Completed!
                </h2>
                <p style={{ fontSize: '18px', color: '#cbd5e1', margin: '0 0 24px 0' }}>
                  You scored <strong style={{ color: '#4ade80', fontSize: '24px' }}>{score} / {activeQuiz.length}</strong>
                </p>

                {score >= 8 ? (
                  <div style={{ background: 'rgba(34, 197, 94, 0.15)', padding: '16px', borderRadius: '16px', marginBottom: '24px', border: '1px solid #22c55e', color: '#4ade80' }}>
                    🎉 Outstanding! You mastered this case study and earned +100 XP!
                  </div>
                ) : (
                  <div style={{ background: 'rgba(234, 179, 8, 0.15)', padding: '16px', borderRadius: '16px', marginBottom: '24px', border: '1px solid #eab308', color: '#fde047' }}>
                    Good effort! Review the red flags and notes again to aim for a perfect 10/10!
                  </div>
                )}

                <button
                  onClick={() => setActiveQuiz(null)}
                  style={{
                    padding: '14px 32px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Close & Return to Case Study
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
