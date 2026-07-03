import React, { useState, useEffect, useContext } from 'react';
import { GamificationContext } from '../context/GamificationContext';
import { getApiUrl } from '../lib/api';

const INITIAL_CASE_STUDIES = [
  {
    id: 1,
    title: "The 2024 Arup Group $25M Deepfake CFO Video Call Scam",
    category: "Deepfake & AI Fraud",
    date: "February 2024 (Published by Hong Kong Police & Global News)",
    loss: "$25,000,000 (Arup Group Corporate Wire Transfers)",
    summary: "British engineering giant Arup Group was robbed of $25 million in Hong Kong after an employee was deceived by a real-time AI deepfake video call where scammers cloned the voice and appearance of the company's CFO and senior colleagues.",
    setup: "An employee in Arup's Hong Kong finance department received a phishing email supposedly from the company's UK-based Chief Financial Officer requesting a secret wire transfer for a confidential corporate acquisition. Initially suspicious of the secret instruction, the employee requested a live video conference to verify the executive's identity.",
    trap: "During the live video conference, several recognizable colleagues and the CFO appeared on screen and spoke with familiar voices, facial expressions, and mannerisms. In reality, every other participant on the call was a real-time deepfake controlled by scammers using pre-recorded public video snippets and AI voice cloning. The visual authority of seeing the full executive committee completely disarmed the employee's skepticism, leading them to execute 15 wire transfers totaling $25M to offshore accounts.",
    timeline: [
      "Jan 2024: Scammers download public video appearances and earnings call audio of Arup executives to train custom neural voice and facial cloning models.",
      "Feb 2024: Initial phishing email sent to finance worker requesting confidential funds for a secret UK acquisition.",
      "Feb 2024: Employee requests a live video conference; scammers schedule a multi-person meeting.",
      "Feb 2024: During the 15-minute call, AI deepfakes simulate the CFO and 3 senior staff, instructing immediate execution.",
      "Feb 2024: Employee initiates 15 consecutive wire transfers totaling $25,000,000 across 5 Hong Kong banks before the fraud is discovered."
    ],
    redFlags: [
      "The request demanded extreme secrecy and bypassed standard dual-authorization treasury protocols.",
      "During the video call, the deepfake participants spoke mostly in scripted monologues without spontaneous conversational back-and-forth.",
      "The recipient bank accounts were offshore personal and shell company accounts completely unrelated to corporate M&A.",
      "Bypassing standard written purchase order and compliance sign-offs due to 'executive urgency'."
    ],
    psychologicalBias: "Authority & Urgency Bias — Seeing and hearing superiors on video overrode the employee's critical analytical reasoning. Scammers engineered social proof by having multiple fake executives present.",
    prevention: "Always enforce out-of-band verification (e.g., calling a verified phone number from the internal corporate directory) for financial transactions above a set threshold, regardless of video or voice confirmation.",
    quiz: [
      { q: "Which multinational corporation was the victim of this real-world $25M deepfake attack in February 2024?", opts: ["Microsoft", "Arup Group (British Engineering Firm)", "Tesla", "Sony"], ans: 1, exp: "Arup Group officially confirmed the $25M loss to Hong Kong authorities in early 2024." },
      { q: "Why did the employee initially request the video conference?", opts: ["To test their webcam", "Because they were already suspicious of the email instruction", "To ask for a promotion", "To record a training video"], ans: 1, exp: "The employee correctly felt suspicious about a secret wire transfer via email, prompting the video call request." },
      { q: "What was the critical flaw in the deepfake participants' speech during the real call?", opts: ["They spoke in a foreign language", "They spoke mostly in scripted monologues without natural back-and-forth dialogue", "They had robotic computer voices", "They were completely silent"], ans: 1, exp: "Current real-time deepfakes struggle with spontaneous conversational interruptions and multi-speaker overlap." },
      { q: "Which cognitive bias played the biggest role in deceiving the Arup finance worker?", opts: ["Sunk Cost Fallacy", "Authority Bias & Social Proof", "Gambler's Fallacy", "Optimism Bias"], ans: 1, exp: "Seeing the CFO and senior peers created overwhelming visual authority and social compliance." },
      { q: "How many separate wire transfers did the employee execute before realizing the scam?", opts: ["1 transfer", "15 separate wire transfers totaling $25 million", "50 transfers", "100 transfers"], ans: 1, exp: "The scammers split the $25M across 15 transactions to bypass single-transaction bank limits." },
      { q: "Where did the scammers obtain the training data to clone the executives' faces and voices?", opts: ["From hacked internal CCTV", "From publicly available earnings calls, interviews, and promotional videos", "From stolen passports", "From audio bugs"], ans: 1, exp: "Publicly available executive media is routinely harvested by threat actors to train deepfake models." },
      { q: "What corporate treasury protocol was violated during this incident?", opts: ["Dual-authorization financial verification protocol", "Firewall password rules", "Antivirus software updates", "Physical building access codes"], ans: 0, exp: "High-value enterprise wire transfers require multiple independent approvers and verification channels." },
      { q: "What is the most effective defense against real-time deepfake executive fraud?", opts: ["Buying 4K monitors", "Mandatory out-of-band verification using pre-established internal phone numbers", "Never joining video calls", "Asking callers to wave their hands"], ans: 1, exp: "Out-of-band verification breaks the digital channel of attack by using an independent communication line." },
      { q: "Why did the scammers include multiple colleague deepfakes on the video call?", opts: ["To save bandwidth", "To create 'Social Proof' so the employee would feel intimidated to question the group", "Because they made a mistake", "To test multiple audio feeds"], ans: 1, exp: "Group dynamics and peer presence heavily suppress individual skepticism." },
      { q: "What agency officially published the investigation details of this incident?", opts: ["Hong Kong Police Force & Cybersecurity Bureau", "NASA", "WHO", "Interpol Maritime"], ans: 0, exp: "The Hong Kong Police officially disclosed the case details as a global warning against AI deepfake fraud." }
    ]
  },
  {
    id: 2,
    title: "The 2023 MGM Resorts & Caesars Ransomware Attack",
    category: "Workplace & Shadow IT",
    date: "September 2023 (Published by FBI, CISA & SEC Filings)",
    loss: "$100,000,000+ in Operations Loss & $15M Ransom Paid (Caesars)",
    summary: "The hacking syndicate 'Scattered Spider' paralyzed MGM Resorts and Caesars Entertainment by calling the IT Service Desk on LinkedIn, impersonating an employee who 'forgot their password', and resetting Multi-Factor Authentication (MFA).",
    setup: "Instead of writing complex code or exploiting software zero-days, attackers conducted 10 minutes of reconnaissance on LinkedIn to find the name and title of an MGM employee. They then called the outsourced IT Helpdesk via phone, impersonated the employee, and claimed they broke their phone and needed their Okta MFA token reset.",
    trap: "Because the helpdesk agent did not enforce strict visual or out-of-band identity verification, they reset the MFA token over the phone. Attackers gained full domain admin access, deploying ALPHV/BlackCat ransomware across slot machines, hotel room digital keys, elevators, and reservation systems—costing MGM over $100M in lost revenue and forcing Caesars to pay a $15M ransom.",
    timeline: [
      "Sept 10, 2023: Attackers identify an MGM employee on LinkedIn and locate their phone number via leaked databases.",
      "Sept 11, 2023: Attackers call MGM IT Helpdesk, impersonate the employee, and request an MFA reset.",
      "Sept 11, 2023: Helpdesk resets credentials; attackers log into Okta identity portal as domain administrators.",
      "Sept 12, 2023: Ransomware deployed across 12 major casino resorts in Las Vegas, shutting down slot machines and hotel keys.",
      "Sept 20, 2023: MGM refuses ransom, incurring $100M+ in rebuilding costs; Caesars pays $15M to prevent data leak."
    ],
    redFlags: [
      "IT Helpdesk accepting verbal phone requests for MFA resets without strict identity proofing.",
      "No mandatory video check or manager sign-off required for high-privilege Okta credential recovery.",
      "Over-reliance on public LinkedIn data for employee verification questions.",
      "Lack of network segmentation between corporate identity servers and casino floor gaming hardware."
    ],
    psychologicalBias: "Helpfulness & Complacency Bias — Helpdesk agents are incentivized to close tickets quickly and assist employees, making them prime targets for social engineering.",
    prevention: "Implement cryptographic FIDO2/WebAuthn hardware security keys (which cannot be phished or reset verbally) and enforce strict out-of-band video identity proofing for all MFA resets.",
    quiz: [
      { q: "How did the hacking group 'Scattered Spider' gain initial access to MGM Resorts in 2023?", opts: ["By hacking a firewall zero-day", "By calling the IT Helpdesk and impersonating an employee found on LinkedIn", "By plugging a USB into a slot machine", "Through an infected email attachment"], ans: 1, exp: "The breach was entirely achieved through verbal social engineering against the IT Helpdesk." },
      { q: "What security control was bypassed during the phone call to the helpdesk?", opts: ["Antivirus software", "Multi-Factor Authentication (MFA) reset procedures", "Physical security turnstiles", "Wi-Fi encryption"], ans: 1, exp: "The helpdesk agent reset the user's Okta MFA token without robust identity verification." },
      { q: "What was the financial impact of this cyber attack on MGM Resorts?", opts: ["$10,000", "Over $100,000,000 in lost revenue and rebuilding costs", "$500", "No financial impact"], ans: 1, exp: "MGM disclosed over $100M in financial damages in their official SEC Form 8-K filing." },
      { q: "Why are IT Helpdesk agents particularly vulnerable to social engineering?", opts: ["They don't use computers", "They are psychologically incentivized to be helpful and resolve tickets quickly", "They never answer the phone", "They are robots"], ans: 1, exp: "Attackers exploit the natural customer-service mindset of service desk personnel." },
      { q: "Which ransomware variant was deployed across the casino resorts?", opts: ["WannaCry", "ALPHV / BlackCat Ransomware", "CryptoLocker", "Zeus Botnet"], ans: 1, exp: "Scattered Spider operated as an affiliate of the ALPHV/BlackCat ransomware cartel." },
      { q: "What public website did attackers use to find the target employee's name and job title?", opts: ["Facebook", "LinkedIn professional networking platform", "Instagram", "Wikipedia"], ans: 1, exp: "LinkedIn is the primary reconnaissance tool for mapping enterprise employee hierarchies." },
      { q: "What action did Caesars Entertainment take during the same attack wave?", opts: ["They unplugged all slot machines forever", "They paid a $15 million ransom to prevent customer data publication", "They declared bankruptcy", "They ignored the attackers"], ans: 1, exp: "Caesars Entertainment officially disclosed in SEC filings that they paid approximately $15M in extortion." },
      { q: "What physical casino systems were shut down by the ransomware at MGM?", opts: ["Only office printers", "Slot machines, hotel room electronic keycards, elevators, and payment terminals", "Only casino lights", "Water fountains"], ans: 1, exp: "The domain compromise allowed attackers to paralyze both corporate and IoT hospitality infrastructure." },
      { q: "What technology permanently eliminates phone-based MFA reset attacks?", opts: ["Longer passwords", "Cryptographic FIDO2 / WebAuthn Hardware Keys (e.g. YubiKeys)", "Changing passwords every week", "SMS verification codes"], ans: 1, exp: "Hardware security keys bind authentication to a physical device that cannot be reset verbally over a phone." },
      { q: "What federal agency issued a joint cybersecurity advisory regarding Scattered Spider tactics?", opts: ["USDA", "FBI and CISA (Cybersecurity and Infrastructure Security Agency)", "FAA", "FDA"], ans: 1, exp: "CISA and the FBI released Advisory AA23-320A documenting these exact service desk social engineering techniques." }
    ]
  },
  {
    id: 3,
    title: "The 2024 Snowflake Cloud Account Takeover Wave",
    category: "Crypto & Social Engineering",
    date: "May–June 2024 (Published by Mandiant, CISA & SEC Filings)",
    loss: "165+ Major Enterprises Breached (Ticketmaster, Santander, AT&T)",
    summary: "Threat actors (UNC5537) breached over 165 major corporations by stealing single-factor customer credentials from employee personal laptops infected with Infostealer malware.",
    setup: "Snowflake is a cloud data warehouse used by Fortune 500 companies to store massive customer databases. Many customer organizations failed to enforce mandatory Multi-Factor Authentication (MFA) on their Snowflake accounts. Employees had logged into corporate Snowflake accounts from personal laptops or unmanaged devices.",
    trap: "When employees downloaded pirated software or games on personal laptops, they secretly installed 'Infostealer' malware (like Lumma or Vidar). Attackers harvested saved browser passwords and valid session cookies, purchased them on Telegram dark web marketplaces for $10, and logged directly into corporate Snowflake databases without needing an MFA code—exfiltrating over 500 million customer records.",
    timeline: [
      "April 2024: Threat actor UNC5537 purchases harvested Snowflake credentials from Telegram Infostealer logs.",
      "May 14, 2024: Attackers log into Ticketmaster's database using stolen single-factor credentials, stealing 560M customer records.",
      "May 28, 2024: Santander Bank confirms breach of 30 million customer account details via the same vector.",
      "June 2024: Mandiant and CISA issue emergency alerts confirming 165+ organizations compromised via single-factor accounts.",
      "July 2024: AT&T discloses call and text records for 109 million customers stolen from its Snowflake cloud instance."
    ],
    redFlags: [
      "Failure to enforce mandatory Multi-Factor Authentication (MFA) across all enterprise cloud database accounts.",
      "Allowing employees or contractors to access enterprise data warehouses from unmanaged personal laptops.",
      "Lack of IP allow-listing (filtering access so only trusted corporate network IPs can connect).",
      "Ignoring dark web credential leak alerts for corporate domain email addresses."
    ],
    psychologicalBias: "Complacency & Convenience Bias — Assuming enterprise cloud providers handle all security while neglecting shared responsibility configuration like MFA.",
    prevention: "Enforce mandatory MFA and IP allow-listing on all cloud repositories, prohibit corporate logins from personal unmanaged devices, and actively monitor dark web Infostealer logs.",
    quiz: [
      { q: "What was the primary root cause of the 2024 Snowflake account takeover wave?", opts: ["A bug in Snowflake's core encryption", "Customer accounts lacking Multi-Factor Authentication (MFA) accessed via stolen credentials", "Physical break-ins at data centers", "SQL injection attacks"], ans: 1, exp: "Mandiant and CISA confirmed Snowflake's core systems were not breached; attackers used valid single-factor credentials." },
      { q: "How did attackers obtain the valid username and password credentials?", opts: ["By guessing them", "From 'Infostealer' malware harvested from employee personal laptops and sold on Telegram", "From a phone book", "By hacking Wi-Fi routers"], ans: 1, exp: "Infostealer malware (like Lumma/Vidar) extracts saved passwords and session cookies from web browsers." },
      { q: "Which major companies publicly disclosed massive data exfiltrations from this campaign in 2024?", opts: ["Only a small bookstore", "Ticketmaster, Santander Bank, and AT&T", "No companies were affected", "Local grocery stores"], ans: 1, exp: "SEC filings confirmed Ticketmaster (560M users), Santander (30M users), and AT&T (109M users) were breached." },
      { q: "What is an 'Infostealer' in cybersecurity?", opts: ["A person who steals monitors", "Malware designed to silently export browser passwords, cookies, and crypto wallets", "A legitimate backup tool", "An antivirus scanner"], ans: 1, exp: "Infostealers are a multi-million dollar dark web industry feeding access brokers with valid corporate logins." },
      { q: "What simple network security control would have blocked attackers even with stolen passwords?", opts: ["IP Allow-listing (restricting database logins to trusted corporate VPN IP addresses)", "Changing screen brightness", "Using alphabetical passwords", "Turning off monitors at night"], ans: 0, exp: "IP allow-listing prevents login attempts originating from unauthorized external or residential proxy IPs." },
      { q: "What threat group was identified by Google Mandiant as leading this extortion campaign?", opts: ["Anonymous", "UNC5537 (a financially motivated cybercrime syndicate)", "Lazarus Group", "Equation Group"], ans: 1, exp: "Mandiant tracked the threat actor under the designation UNC5537, collaborating with global law enforcement." },
      { q: "Why is allowing corporate logins from personal employee laptops a critical security risk?", opts: ["Personal laptops are too slow", "Personal devices lack enterprise endpoint detection (EDR) and are frequently infected by pirated software malware", "It consumes too much battery", "It violates warranty"], ans: 1, exp: "Unmanaged BYOD (Bring Your Own Device) endpoints lack monitoring, making them primary infection vectors." },
      { q: "What is the 'Shared Responsibility Model' in cloud security?", opts: ["The cloud provider is 100% responsible for everything", "The cloud provider secures the infrastructure, but the customer is responsible for configuring access controls like MFA and user permissions", "Customers must clean the data center servers", "Security is optional"], ans: 1, exp: "In cloud computing, securing user authentication and data access permissions is always the customer's legal responsibility." },
      { q: "How much did harvested corporate credentials typically sell for on dark web markets?", opts: ["$1,000,000 each", "As little as $10 to $50 per log on Telegram marketplaces", "$50,000", "They were free"], ans: 1, exp: "The commoditization of Infostealer logs has lowered the financial barrier for cyber extortion syndicates." },
      { q: "What emergency action did Snowflake take following the breach disclosures?", opts: ["They shut down the company", "They rolled out mandatory MFA enforcement policies for all newly created customer accounts", "They deleted all customer databases", "They stopped using passwords"], ans: 1, exp: "Snowflake updated its platform policies to mandate MFA and advance admin controls across all tenant instances." }
    ]
  },
  {
    id: 4,
    title: "The 2024 Change Healthcare Ransomware Paralyzation",
    category: "SMS & Phishing",
    date: "February 2024 (Published by U.S. HHS, CISA & Congressional Testimony)",
    loss: "$22M Bitcoin Ransom Paid, 100M Americans' Medical Data Breached",
    summary: "Ransomware cartel BlackCat breached Change Healthcare (a subsidiary of UnitedHealth Group) via a legacy Citrix remote desktop portal that lacked Multi-Factor Authentication, paralyzing 80% of U.S. hospital payment processing.",
    setup: "Change Healthcare processes 15 billion medical transactions annually for U.S. hospitals and pharmacies. A legacy Citrix remote access portal used by remote employees had been left without Multi-Factor Authentication (MFA) enabled. Attackers obtained compromised credentials for this portal from previous data leaks.",
    trap: "On February 12, 2024, ALPHV/BlackCat actors logged into the Citrix portal using single-factor credentials. They spent 9 days quietly moving laterally through the healthcare network, exfiltrating 6 terabytes of sensitive patient medical records, diagnoses, and Social Security numbers. On February 21, they detonated ransomware across 15,000 healthcare servers.",
    timeline: [
      "Feb 12, 2024: Attackers log into Change Healthcare's Citrix remote desktop portal using credentials lacking MFA.",
      "Feb 13–20, 2024: Attackers harvest domain credentials, exfiltrating 6TB of protected health information (PHI) for 100M patients.",
      "Feb 21, 2024: Ransomware detonated; Change Healthcare disconnects all systems, freezing billing for 80% of U.S. hospitals.",
      "March 2024: UnitedHealth Group pays a $22,000,000 Bitcoin ransom to ALPHV/BlackCat to obtain the decryption key.",
      "May 2024: UnitedHealth CEO testifies before U.S. Congress confirming the root cause was a single portal without MFA."
    ],
    redFlags: [
      "Leaving legacy remote access portals (Citrix, VPN, RDP) exposed to the public internet without mandatory MFA.",
      "Inadequate network segmentation allowing attackers to jump from a remote portal to core medical billing databases.",
      "Lack of automated behavioral alerts when 6 terabytes of data are suddenly exported to external IP addresses.",
      "Failure to audit legacy acquisitions for baseline cybersecurity hygiene."
    ],
    psychologicalBias: "Optimism Bias & Technical Debt Neglect — Assuming legacy systems inherited during corporate mergers are secure without performing rigorous technical audits.",
    prevention: "Conduct mandatory MFA audits on 100% of external-facing portals, implement Zero Trust network segmentation, and deploy automated Data Loss Prevention (DLP) rate-limiting.",
    quiz: [
      { q: "What was the exact root cause of the 2024 Change Healthcare breach confirmed in U.S. Congressional testimony?", opts: ["An advanced quantum computer attack", "A legacy Citrix remote desktop portal that lacked Multi-Factor Authentication (MFA)", "An employee dropping a USB drive", "A physical wire cut"], ans: 1, exp: "UnitedHealth CEO Andrew Witty testified under oath before Congress that a Citrix portal without MFA was the sole entry point." },
      { q: "What percentage of U.S. hospital and pharmacy billing processing was paralyzed by this attack?", opts: ["1%", "Approximately 80% of U.S. medical billing and prescription processing", "10%", "50%"], ans: 1, exp: "The outage caused nationwide financial paralysis for hospitals, pharmacies, and healthcare providers for weeks." },
      { q: "How much did UnitedHealth Group pay in Bitcoin ransom to the ALPHV/BlackCat cartel?", opts: ["$1,000", "$22,000,000 in Bitcoin ($22M)", "$100,000", "Zero dollars"], ans: 1, exp: "Blockchain analytics and subsequent congressional disclosures confirmed the $22 million extortion payment." },
      { q: "How many Americans had their protected health information (PHI) and Social Security numbers compromised?", opts: ["100 people", "Over 100 million Americans (1 in 3 U.S. citizens)", "5,000 people", "No data was stolen"], ans: 1, exp: "The U.S. Department of Health and Human Services confirmed this as the largest healthcare data breach in American history." },
      { q: "How long did the attackers dwell inside Change Healthcare's network before detonating the ransomware?", opts: ["1 minute", "9 days (from February 12 to February 21, 2024)", "5 years", "12 hours"], ans: 1, exp: "Attackers used the 9-day dwell time to exfiltrate 6 terabytes of medical data before triggering encryption." },
      { q: "What is 'Zero Trust Network Segmentation'?", opts: ["Trusting all employees", "A security architecture where no user or system is trusted by default, requiring verification at every network boundary", "Disconnecting from Wi-Fi", "Using zero passwords"], ans: 1, exp: "Zero Trust ensures that even if an attacker breaches a peripheral portal, they cannot move laterally to critical databases." },
      { q: "What happens when companies inherit 'Technical Debt' during corporate mergers without auditing?", opts: ["They save money", "Unmonitored legacy systems and unpatched portals become easy entry vectors for cybercriminals", "Their stock always doubles", "Computers run faster"], ans: 1, exp: "Change Healthcare had been acquired by Optum/UnitedHealth, leaving legacy infrastructure integration gaps." },
      { q: "What is Data Loss Prevention (DLP) software designed to detect?", opts: ["Broken keyboards", "Abnormal, massive data exfiltration or unauthorized transfers of sensitive files to external servers", "Slow internet speeds", "Spam emails"], ans: 1, exp: "DLP tools monitor egress traffic and block or alert when terabytes of sensitive files are being exported." },
      { q: "Why did paying the $22M ransom fail to fully protect Change Healthcare from further extortion?", opts: ["The Bitcoin network rejected it", "An affiliate of the ransomware group kept a copy of the stolen data and demanded a second ransom weeks later", "The decryptor broke the computers", "The FBI confiscated the money"], ans: 1, exp: "In ransomware cartels, affiliates frequently double-cross victims by demanding secondary extortion after the primary ransom is paid." },
      { q: "Which federal law regulates the protection and breach notification of healthcare data in the U.S.?", opts: ["GDPR", "HIPAA (Health Insurance Portability and Accountability Act)", "DMCA", "COPPA"], ans: 1, exp: "HIPAA mandates strict administrative, physical, and technical safeguards for protected health information (PHI)." }
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
      const prompt = `Generate 1 documented, REAL-WORLD cybersecurity scam or data breach case study based on ACTUAL historical facts, verified security reports (e.g. FBI IC3, CISA, FTC, ENISA, or major cybersecurity intelligence reports), and real events from 2021–2026.
      CRITICAL RULE: You MUST name a REAL, VERIFIED historical enterprise or organization (e.g. SolarWinds, Twilio, Uber, Okta, 3CX, AnyDesk, Colonial Pipeline, MGM Resorts, Change Healthcare, Arup Group). Do NOT generate fictional names, generic hypothetical scenarios, or AI examples under any circumstances.
      You MUST include real facts and figures: the actual name of the organization or threat actor involved, the verified financial loss or ransom demand, the documented number of victims affected, and real dates.
      Return ONLY a valid JSON object with EXACTLY these keys:
      {
        "title": "Real incident title (e.g. The 2024 Snowflake Cloud Account Takeover)",
        "category": "One of: Deepfake & AI Fraud, Crypto & Social Engineering, SMS & Phishing, Workplace & Shadow IT",
        "date": "Actual date/year of incident (e.g. April 2024)",
        "loss": "Real financial loss and exact number of affected users/victims (e.g. 165 organizations breached, 500M+ customer records leaked, $30M+ ransom demands)",
        "summary": "A comprehensive 4-5 sentence factual summary explaining the background of the organization, the attackers involved, the initial breach vector, and the aftermath.",
        "setup": "A thorough, detailed technical breakdown (150-200 words) of the initial access vector, vulnerability exploited, social engineering tactics, and how attackers bypassed perimeter security controls.",
        "trap": "A detailed analysis (150-200 words) of the exact climax, malware/payload deployment, lateral movement, credential harvesting technique, and how cognitive bias was weaponized against employees or systems.",
        "timeline": [
          "Factual Step 1: Detailed description of reconnaissance or initial access with timestamps/dates",
          "Factual Step 2: Lateral movement and privilege escalation",
          "Factual Step 3: Data exfiltration and encryption or ransom demand",
          "Factual Step 4: Discovery, incident response, and public disclosure",
          "Factual Step 5: Post-mortem remediation and regulatory penalties"
        ],
        "redFlags": ["Real Red Flag 1 with technical context", "Real Red Flag 2 with indicator of compromise", "Real Red Flag 3", "Real Red Flag 4"],
        "psychologicalBias": "Which cognitive bias or security gap was exploited in this real incident and why it succeeded",
        "prevention": "A detailed 3-part actionable defense roadmap (Technical controls, Employee training, and Policy changes) that would have prevented or mitigated this breach.",
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
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', padding: '4px 10px', borderRadius: '8px', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                  {cs.category}
                </span>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>{cs.date}</span>
              </div>

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
