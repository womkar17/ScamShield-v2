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
  },
  {
    id: 5,
    title: "The 2024 Retool & Twilio Vishing & MFA Reverse Proxy Attack",
    category: "SMS & Phishing",
    date: "August–September 2024 (Published by Retool Security, Twilio & CISA)",
    loss: "Internal Admin Portals Breached & $15M+ in Cryptocurrency Compromised",
    summary: "Attackers executed a multi-stage voice phishing (vishing) and SMS phishing campaign against employees at Retool, Twilio, and Cloudflare, bypassing Okta Multi-Factor Authentication (MFA) via live reverse proxy kits (`EvilProxy`/`Modlishka`).",
    setup: "Retool builds customized internal admin panels for thousands of software companies and crypto platforms. While employees used Okta with OTP and app push notifications, standard SMS/TOTP MFA is vulnerable to Adversary-in-the-Middle (AiTM) reverse proxy phishing if employees enter OTP codes on spoofed login domains.",
    trap: "Attackers sent SMS alerts claiming an urgent IT payroll or enrollment issue directing employees to a lookalike portal (`retool-okta.com`). When an employee clicked and entered their credentials, the reverse proxy forwarded the login directly to the real Okta server, intercepted the live session cookie after OTP verification, and granted the attacker instant admin access without needing the password again.",
    timeline: [
      "Aug 26, 2024: Attackers register lookalike domains mimicking internal Okta single sign-on (SSO) portals.",
      "Aug 27, 2024: SMS blast sent to 120 employees across Retool, Twilio, and Cloudflare claiming mandatory IT updates.",
      "Aug 27, 2024: One Retool employee enters login details and OTP code into the reverse proxy portal during a synchronized phone call.",
      "Aug 28, 2024: Attackers use intercepted session tokens to log into internal customer support admin tools.",
      "Aug 29, 2024: Attackers take over 27 cloud customer accounts, diverting over $15M in cryptocurrency before containment."
    ],
    redFlags: [
      "SMS notifications from unverified external phone numbers claiming urgent IT/payroll account suspension.",
      "Lookalike URLs that closely mirror corporate SSO portals but differ by a hyphen or top-level domain (`retool-okta.com`).",
      "Receiving an unsolicited voice call from someone claiming to be IT Support asking to stay on the line during an MFA prompt."
    ],
    psychologicalBias: "Urgency & Compliance Bias — Employees instinctively trust instructions that appear to come from internal IT during work hours.",
    prevention: "Deploy FIDO2-compliant hardware security keys (like YubiKeys or Apple/Google Passkeys) which bind authentication to the exact cryptographic domain, making reverse proxy MFA bypass mathematically impossible.",
    quiz: [
      { q: "What is an 'Adversary-in-the-Middle' (AiTM) reverse proxy phishing attack?", opts: ["Physically tapping a network cable", "An attack where a fake website sits between the victim and the real login server, forwarding credentials and capturing session cookies", "Sending spam emails", "Guessing passwords with a dictionary"], ans: 1, exp: "Reverse proxies like EvilProxy intercept authentication tokens in real-time right after the user enters their OTP." },
      { q: "Why did standard One-Time Password (OTP) MFA fail to stop the Retool attackers?", opts: ["The OTP codes expired too quickly", "Because the employee typed the valid OTP into the attacker's proxy site, which immediately passed it to Okta to steal the session cookie", "The OTP generator broke", "The attacker guessed the 6-digit code"], ans: 1, exp: "OTP codes verify possession of a device, but do not verify whether the domain you are typing them into is authentic." },
      { q: "Which authentication technology completely prevents reverse proxy MFA bypass?", opts: ["FIDO2 / WebAuthn Hardware Security Keys (e.g., YubiKeys or Passkeys)", "Longer passwords", "SMS verification codes", "Security questions like 'Mother's maiden name'"], ans: 0, exp: "FIDO2 protocols cryptographically bind the authentication response to the actual domain origin (`retool.com`), failing instantly on lookalike sites." },
      { q: "What social engineering channel did attackers use to initiate the Retool breach?", opts: ["Carrier pigeon", "SMS phishing (smishing) paired with live voice phishing (vishing) phone calls", "Physical mail", "Social media comments"], ans: 1, exp: "Targeted SMS alerts directly to employee personal/work cell phones bypass email gateway spam filters." },
      { q: "What was the primary motive and payload after breaching Retool's internal support panel?", opts: ["Deleting customer records", "Taking over specific high-net-worth cryptocurrency and cloud customer accounts", "Printing free t-shirts", "Shutting down the website"], ans: 1, exp: "Attackers leveraged internal customer service impersonation tools to reset multi-factor authentication on targeted crypto accounts." },
      { q: "Why do lookalike domains like 'retool-okta.com' succeed in tricking IT-savvy engineers?", opts: ["They use invisible ink", "On mobile devices and under time pressure, users glance at familiar keywords ('okta', 'retool') without verifying the exact root domain", "They load faster than the real site", "They are recommended by Google"], ans: 1, exp: "Cognitive shortcuts cause human brains to read familiar brand keywords and skip careful domain syntax parsing." },
      { q: "What should an employee do if they receive an unexpected SMS from 'IT Support' asking them to log in?", opts: ["Click the link and log in quickly", "Ignore the text and independently verify the request via official corporate Slack/Teams directory or IT helpdesk ticket", "Forward the SMS to all coworkers", "Call the number that sent the text"], ans: 1, exp: "Never click authentication links sent via unsolicited SMS; always use internal bookmarks or verified corporate directories." },
      { q: "How quickly can an automated reverse proxy steal a session cookie after OTP entry?", opts: ["24 hours", "Less than 500 milliseconds (instantaneously)", "10 minutes", "1 week"], ans: 1, exp: "Automated reverse proxy scripts pass credentials and capture session tokens concurrently in sub-second timeframes." },
      { q: "What is 'Session Cookie Exfiltration'?", opts: ["Baking cookies for IT staff", "Stealing the temporary authentication token generated after login so attackers can access an account without re-entering passwords", "Deleting browser cache", "Encrypting hard drives"], ans: 1, exp: "Once an attacker holds a valid session cookie, they are treated by the server as a fully authenticated user." },
      { q: "Which other major cloud security company was targeted by the exact same AiTM proxy campaign?", opts: ["Cloudflare & Twilio", "Nintendo", "Walmart", "Local libraries"], ans: 0, exp: "Cloudflare disclosed that while 3 employees clicked the phishing SMS, their mandatory YubiKey hardware requirement blocked the attack entirely." }
    ]
  },
  {
    id: 6,
    title: "The 2024 PepsiCo Bottling & Supply Chain Ransomware",
    category: "Workplace & Shadow IT",
    date: "January–April 2024 (Published by Cybersecurity Infrastructure Security Agency & Vendor Advisories)",
    loss: "Logistics Distribution Paralyzed & $35M+ in Operations Disruption",
    summary: "Attackers breached regional PepsiCo bottling and logistics networks by exploiting single-factor VPN access at a downstream Managed Service Provider (MSP), demonstrating how third-party supply chains bypass perimeter defenses.",
    setup: "Large manufacturing and logistics enterprises rely on dozens of external IT vendors and MSPs for remote monitoring, HVAC control, and warehouse automation. While PepsiCo enforced enterprise security on core corporate networks, several acquired regional bottling distributors and third-party maintenance contractors maintained legacy VPN portals without mandatory MFA.",
    trap: "Threat actors harvested single-factor contractor credentials from dark web infostealer logs. Rather than attacking PepsiCo's hardened perimeter directly, they logged into the third-party MSP's remote access tunnel, pivoted laterally into the bottling distribution network, and deployed ransomware across warehouse inventory and automated routing servers.",
    timeline: [
      "Jan 15, 2024: Attackers obtain valid VPN credentials belonging to an external maintenance contractor.",
      "Feb 02, 2024: Attackers log into the third-party vendor portal using single-factor authentication without triggering alarms.",
      "Feb 18, 2024: Attackers move laterally from the vendor management network into the core bottling distribution VLAN.",
      "March 2024: Ransomware executed across automated bottling lines and logistics dispatch systems across 8 regional centers.",
      "April 2024: Enterprise forensics confirms the entry vector was an unmonitored third-party vendor connection."
    ],
    redFlags: [
      "Third-party vendors and contractors accessing internal corporate networks without mandatory Multi-Factor Authentication.",
      "Unrestricted lateral network movement allowed between third-party maintenance subnets and core production systems.",
      "Lack of real-time anomalous traffic alerting when external contractor accounts download massive internal network maps."
    ],
    psychologicalBias: "Transferred Trust Bias — Assuming that if a vendor or partner is well-known, their internal cybersecurity controls are automatically as rigorous as your own.",
    prevention: "Implement strict Vendor Risk Management (VRM), mandate Zero Trust Network Access (ZTNA) for all third-party connections, and segment contractor access exclusively to isolated jump boxes.",
    quiz: [
      { q: "What is a 'Supply Chain Cyber Attack'?", opts: ["Stealing delivery trucks", "Infiltrating a primary target organization through an external vendor, contractor, or software partner with weaker security controls", "Hacking grocery store cash registers", "Sending counterfeit invoices by mail"], ans: 1, exp: "Supply chain attacks exploit the trusted access granted to third-party vendors to bypass a target's primary defenses." },
      { q: "How did attackers bypass PepsiCo bottling network's primary firewall perimeter?", opts: ["By digging a tunnel under the building", "By logging into a third-party Managed Service Provider (MSP) VPN portal that lacked Multi-Factor Authentication", "By bribing the security guard", "By decoding Wi-Fi signals outside"], ans: 1, exp: "Third-party vendor access portals are frequently the weakest link in industrial and enterprise networks." },
      { q: "What is a 'Managed Service Provider' (MSP) in enterprise IT?", opts: ["A person who manages office furniture", "An external company contracted to remotely manage IT infrastructure, networks, or specialized software systems", "A marketing agency", "A courier service"], ans: 1, exp: "Because MSPs have remote access into multiple client networks, compromising one MSP can unlock access to dozens of enterprises." },
      { q: "Why is lateral movement between maintenance VLANs and production subnets dangerous?", opts: ["It slows down Wi-Fi speeds", "It allows an attacker who breaches an HVAC or vendor monitoring tool to jump directly into core financial and manufacturing servers", "It makes printers print backwards", "It deletes emails"], ans: 1, exp: "Network segmentation ensures that a breach in a low-security vendor subnet cannot reach critical business databases." },
      { q: "What authentication mechanism must be enforced on 100% of third-party contractor VPNs?", opts: ["Multi-Factor Authentication (MFA) with strict device compliance checking", "8-character passwords", "Monthly password rotation without MFA", "Shared group passwords"], ans: 0, exp: "Single-factor authentication on remote vendor tunnels is an open invitation for dark web credential brokers." },
      { q: "What is 'Zero Trust Network Access' (ZTNA)?", opts: ["Never hiring employees", "An access model where users and devices are verified continuously and granted access only to the exact applications they need, never the whole network", "Turning off all servers", "Trusting only senior executives"], ans: 1, exp: "ZTNA replaces traditional VPNs by isolating user sessions to specific authorized applications rather than the entire subnet." },
      { q: "How do threat actors typically acquire single-factor contractor credentials?", opts: ["From Infostealer malware logs sold on dark web forums and Telegram channels", "By asking nicely on LinkedIn", "From public library computers", "By intercepting satellite signals"], ans: 0, exp: "Contractors working from home frequently get infected by infostealers, exposing client VPN logins to dark web marketplaces." },
      { q: "What is 'Transferred Trust Bias' in vendor management?", opts: ["Trusting banks with money", "The cognitive blind spot where organizations assume external partners have strong security simply because they have a professional relationship", "Distrusting new employees", "Changing passwords daily"], ans: 1, exp: "Security teams must verify vendor security hygiene through rigorous audits (`SOC 2`, penetration tests) rather than assumption." },
      { q: "What operational impact did the ransomware outbreak have on bottling centers?", opts: ["It made soda taste sweet", "It shut down automated inventory routing, logistics dispatch, and regional distribution scheduling", "It doubled production speeds", "It had zero effect"], ans: 1, exp: "Modern industrial automation relies on networked servers; ransomware freezes physical production and supply chain dispatch." },
      { q: "What is a 'Jump Box' or Bastion Host in secure network architecture?", opts: ["A trampoline in the office", "A hardened, heavily monitored intermediary server that contractors must log into first before accessing restricted internal systems", "A backup hard drive", "An email spam filter"], ans: 1, exp: "Jump boxes isolate external contractor sessions, recording all keystrokes and preventing direct access to core servers." }
    ]
  },
  {
    id: 7,
    title: "The 2023 23andMe Credential Stuffing & Genetic Data Breach",
    category: "Crypto & Social Engineering",
    date: "October–December 2023 (Published by 23andMe SEC Filings & California Attorney General)",
    loss: "6.9 Million Users' Genetic Ancestry & Health Profiles Exposed",
    summary: "Threat actors exploited widespread password reuse across the internet using automated 'Credential Stuffing' botnets to breach 6.9 million 23andMe accounts and scrape sensitive genetic ancestry and family relationship data.",
    setup: "Millions of consumers use the same password across multiple websites (shopping, forums, gaming, and health portals). While 23andMe offered Multi-Factor Authentication, it was not mandatory at the time of the attack. Attackers compiled billions of username/password pairs leaked from older breaches of unrelated websites (`HaveIBeenPwned` lists).",
    trap: "Using automated proxy botnets, attackers fired millions of login requests per hour against 23andMe's login endpoints using leaked password lists (`Credential Stuffing`). When an account unlocked due to password reuse, attackers scraped the victim's profile and exploited the 'DNA Relatives' feature—where users share genetic links with thousands of extended family members—to harvest genetic ancestry, health reports, and family trees for 6.9 million people.",
    timeline: [
      "Sept 2023: Threat actors load 5 billion leaked username/password combos into automated credential stuffing botnets.",
      "Oct 2023: Botnets successfully authenticate into ~14,000 individual 23andMe user accounts via reused passwords.",
      "Oct 2023: Attackers scrape the 'DNA Relatives' feature of those 14,000 accounts, pulling genetic files for 6.9M linked relatives.",
      "Oct 06, 2023: Hackers post stolen genetic databases for sale on BreachForums, targeting specific demographic groups.",
      "Dec 2023: 23andMe officially mandates mandatory Multi-Factor Authentication (MFA) for 100% of user accounts worldwide."
    ],
    redFlags: [
      "Reusing the exact same password on a healthcare or genetic profile site that you used on gaming or shopping websites.",
      "Web applications failing to enforce mandatory Multi-Factor Authentication on portals handling highly sensitive health data.",
      "Absence of aggressive rate-limiting or CAPTCHA challenges when millions of login attempts originate from residential proxy networks."
    ],
    psychologicalBias: "Convenience Bias & Optimism Fallacy — Believing that 'no one would bother hacking my personal DNA account' while choosing memorable, reused passwords over unique generated passphrases.",
    prevention: "Use a dedicated Password Manager (`1Password`, `Bitwarden`) to generate unique 20-character passwords for every single website, and enable mandatory MFA/TOTP on all sensitive accounts.",
    quiz: [
      { q: "What is 'Credential Stuffing' in cybersecurity?", opts: ["Stuffing server racks with extra hard drives", "Automated bot attacks that test lists of usernames and passwords leaked from past data breaches against new website login portals", "Creating fake employee badges", "Sending physical mail to executives"], ans: 1, exp: "Because 60% of people reuse passwords across sites, attackers use automated scripts to test leaked credentials everywhere." },
      { q: "How many total users had their genetic ancestry profiles compromised in the 23andMe breach?", opts: ["100 people", "6.9 million users across the 'DNA Relatives' network", "10,000 users", "No accounts were accessed"], ans: 1, exp: "While only ~14,000 accounts were logged into directly, scraping their linked 'DNA Relatives' exposed 6.9 million individuals." },
      { q: "Why did 23andMe state in SEC filings that their core database servers were NOT hacked?", opts: ["Because they lied", "Because attackers did not exploit any server software vulnerability; they logged in using valid passwords chosen by users who reused them", "Because the servers were turned off", "Because the data was stored on paper"], ans: 1, exp: "In credential stuffing, every login uses authentic username and password credentials submitted via standard web interfaces." },
      { q: "What is 'Password Reuse Vulnerability'?", opts: ["Using passwords shorter than 4 characters", "The risk where compromising your password on one low-security website (like a local forum) gives hackers access to all your banking and healthcare accounts using the same password", "Forgetting your password", "Writing passwords on sticky notes"], ans: 1, exp: "If one site suffers a data breach, any account across the internet sharing that password becomes immediately compromised." },
      { q: "What tool is universally recommended by security experts to eliminate password reuse across hundreds of sites?", opts: ["A spiral notebook", "A secure Password Manager (`1Password`, `Bitwarden`, `Apple Keychain`) that generates high-entropy unique passwords", "Using your birthdate everywhere", "Adding '123' to the end of words"], ans: 1, exp: "Password managers store encrypted vaults, allowing users to have complex, unique passwords on every site without memorizing them." },
      { q: "What immediate security policy change did 23andMe enforce universally after the incident?", opts: ["They shut down the website", "They enforced mandatory Multi-Factor Authentication (MFA) and password resets for 100% of user accounts", "They stopped selling DNA test kits", "They removed passwords entirely"], ans: 1, exp: "Mandatory MFA stops credential stuffing dead in its tracks because even with a valid password, bots cannot supply the second factor." },
      { q: "Why is genetic and biological data breach exposure more permanent than a credit card theft?", opts: ["It is not more serious", "You can cancel and replace a stolen credit card in 5 minutes, but you can never change your physical DNA, ancestry, or genetic health risks", "Credit cards are made of plastic", "Genetic data expires in 30 days"], ans: 1, exp: "Biometric and genetic data is immutable and deeply private, creating lifelong risks of discrimination or targeted extortion." },
      { q: "How did botnets evade simple IP blocklists during the 23andMe attack?", opts: ["They used invisibility cloaks", "They routed login requests through millions of residential proxy IP addresses (`botnet proxies`) so each login came from a clean home IP", "They only logged in on Sundays", "They called customer support"], ans: 1, exp: "Residential proxy botnets rotate IPs on every attempt, making traditional IP address blocking ineffective without WAF behavioral analysis." },
      { q: "What is 'HaveIBeenPwned'?", opts: ["A video game cheat site", "A trusted public service by Troy Hunt where users can check if their email address or passwords have appeared in historical data breaches", "An infostealer malware group", "A federal law enforcement agency"], ans: 1, exp: "Checking HaveIBeenPwned allows users and enterprise defenders to identify compromised credentials before attackers exploit them." },
      { q: "What feature allowed attackers to pivot from 14,000 compromised accounts to 6.9M exposed users?", opts: ["The checkout shopping cart", "The 'DNA Relatives' social networking feature where users connect and share profiles with thousands of extended family matches", "The contact us page", "The password reset form"], ans: 1, exp: "Social networking features that expose wide networks of linked profiles must have granular access controls and strict rate limits." }
    ]
  },
  {
    id: 8,
    title: "The 2024 SEC Official X Account SIM Swap & Crypto Market Manipulation",
    category: "Deepfake & AI Fraud",
    date: "January 2024 (Published by FBI, SEC Inspector General & DOJ Indictments)",
    loss: "Billions in Temporary Crypto Market Volatility & Severe Regulatory Embarassment",
    summary: "Threat actors executed an unauthorized SIM Swap against the mobile phone number associated with the U.S. Securities and Exchange Commission (`@SECGov`) official X (Twitter) account, posting a fake Bitcoin ETF approval that spiked global financial markets.",
    setup: "The official `@SECGov` account on X (Twitter) is followed by millions of investors and financial institutions worldwide. Shockingly, the account had disabled Multi-Factor Authentication via TOTP/App and relied solely on SMS text message recovery linked to a dedicated mobile phone line.",
    trap: "On January 9, 2024, threat actors social engineered or bribed a telecom mobile provider employee (`SIM Swapping`) to transfer the phone number linked to the SEC's X account from the official government SIM card to an unauthorized SIM card in the attacker's phone. Attackers triggered a 'Forgot Password' request on X, intercepted the SMS verification code on their device, logged into `@SECGov`, and tweeted: 'Today the SEC grants approval for Bitcoin ETFs on all registered national securities exchanges.' Bitcoin spiked over $1,500 within minutes before the SEC Chairman clarified the account was compromised.",
    timeline: [
      "Jan 08, 2024: Attackers identify the specific mobile telephone number linked to the `@SECGov` social media account.",
      "Jan 09, 2024: Attackers execute a SIM Swap via telecom carrier impersonation, hijacking the mobile phone number.",
      "Jan 09, 2024 (4:11 PM EST): Attackers trigger SMS password reset, intercept OTP code, and take over `@SECGov`.",
      "Jan 09, 2024 (4:11 PM EST): Fake tweet posted approving Bitcoin ETFs; crypto markets experience massive liquidation spikes.",
      "Jan 09, 2024 (4:26 PM EST): SEC Chairman Gary Gensler posts from his personal account confirming `@SECGov` was hacked via SIM swap."
    ],
    redFlags: [
      "Relying on SMS-based One-Time Passwords (OTP) for high-stakes corporate or government social media accounts.",
      "Failing to mandate FIDO2 hardware keys (`YubiKey`) or authenticator apps (`TOTP`) on executive and brand channels.",
      "Absence of telecom carrier 'Port-Freeze' or 'SIM-Lock' PIN codes on mobile lines tied to sensitive corporate identities."
    ],
    psychologicalBias: "Default Configuration Complacency — Leaving account recovery settings on default SMS verification without upgrading to resistant hardware-backed authentication.",
    prevention: "Completely disable SMS-based 2FA across all corporate and social media profiles; enforce FIDO2 WebAuthn hardware keys, and place strict 'Port Freeze' holds with mobile carriers.",
    quiz: [
      { q: "What is a 'SIM Swap' (`SIM Splitting`) attack?", opts: ["Trading phone cases with a friend", "An attack where cybercriminals trick or bribe a telecom carrier into porting your phone number to a SIM card inside their device, allowing them to intercept all your phone calls and SMS texts", "Upgrading to a 5G network", "Stealing a physical cell phone tower"], ans: 1, exp: "Once an attacker ports your phone number via SIM swap, every SMS verification code sent to your phone goes directly to them instead." },
      { q: "Why was the official `@SECGov` X (Twitter) account vulnerable to a SIM swap?", opts: ["They used an outdated computer mouse", "The account did not have Time-Based One-Time Password (`TOTP`) or FIDO2 hardware keys enabled, relying entirely on SMS text recovery", "Their internet connection was too slow", "They posted too many tweets"], ans: 1, exp: "X security investigations confirmed that two-factor authentication via authenticator apps or hardware keys was not turned on at the time." },
      { q: "What was the immediate financial market consequence of the unauthorized SEC tweet on January 9, 2024?", opts: ["The stock market closed for the year", "Bitcoin prices surged rapidly by over $1,500 within minutes, causing hundreds of millions in leveraged trading liquidations globally", "Nothing happened", "Everyone got free cryptocurrency"], ans: 1, exp: "High-frequency trading bots and global investors immediately reacted to the fake regulatory announcement." },
      { q: "Why is SMS-based Two-Factor Authentication (`SMS 2FA`) widely considered insecure by CISA and NIST?", opts: ["SMS messages take too long to arrive", "SMS is vulnerable to SIM swapping, SS7 cellular protocol interception, and social engineering at mobile carrier retail stores", "SMS uses too much cellular data", "Text messages cannot contain numbers"], ans: 1, exp: "NIST Special Publication 800-63B officially deprecated SMS as an out-of-band authenticator due to fundamental telecom vulnerabilities." },
      { q: "What is a 'Port-Freeze' or 'SIM-Lock' PIN with a mobile carrier?", opts: ["Put your phone in the freezer", "An administrative hold placed on a cell phone account requiring high-security in-person verification or a secret passcode before any SIM card transfer can be processed", "Turning off roaming data", "A waterproof phone case"], ans: 1, exp: "Enforcing a Port-Freeze with carriers like Verizon, AT&T, or T-Mobile blocks unauthorized SIM transfer requests at the customer service level." },
      { q: "Which authentication method would have completely thwarted this SIM swap attack against the SEC?", opts: ["FIDO2 Hardware Security Keys (`YubiKey`) or an Authenticator App (`Google/Microsoft Authenticator`)", "Using a flip phone", "Adding exclamation marks to passwords", "Deleting the Twitter app at night"], ans: 0, exp: "Hardware keys (`WebAuthn`) and TOTP apps generate codes locally on the physical chip, completely independent of the cellular SMS network." },
      { q: "Who publicly clarified that the `@SECGov` account had been compromised approximately 15 minutes after the fake tweet?", opts: ["The President", "SEC Chairman Gary Gensler via his personal verified X account", "The CEO of Bitcoin", "Anonymous hackers"], ans: 1, exp: "Gary Gensler acted quickly to correct the record and notify financial markets that the SEC had not approved the ETF yet." },
      { q: "How do threat actors typically persuade telecom employees to perform unauthorized SIM swaps?", opts: ["By showing them magic tricks", "Through social engineering (impersonating the victim with fake ID data) or bribing corrupt retail store/call center employees via Telegram groups", "By sending them flowers", "By hacking satellite dishes"], ans: 1, exp: "DOJ indictments show SIM swapping rings regularly recruit and bribe telecom retail workers for $100–$500 per unauthorized SIM swap." },
      { q: "What was the primary motive of the actors behind the SEC SIM swap?", opts: ["To delete the SEC account", "Financial market manipulation (`Pump and Dump`) to profit off rapid cryptocurrency price volatility induced by fake regulatory news", "To complain about taxes", "To apply for a job"], ans: 1, exp: "Market manipulation via hijacked influential social media accounts is a lucrative tactic for sophisticated financial cybercrime rings." },
      { q: "What lesson should every corporate social media and brand marketing team learn from the SEC incident?", opts: ["Never post updates online", "Audit all brand accounts immediately to eliminate SMS 2FA and mandate hardware security keys for every social media manager and executive", "Only tweet on weekends", "Use shared passwords"], ans: 1, exp: "Corporate brand profiles carry massive financial and reputational weight and must be protected with enterprise-grade FIDO2 controls." }
    ]
  },
  {
    id: 9,
    title: "The 2024 CDK Global Dealership Ransomware Paralyzation",
    category: "Workplace & Shadow IT",
    date: "June–July 2024 (Published by Automotive News, CISA & BlackSuit Ransomware Disclosures)",
    loss: "15,000+ Car Dealerships Paralyzed & $1 Billion+ in Automotive Economic Losses",
    summary: "Ransomware syndicate 'BlackSuit' breached CDK Global—the software backbone for 15,000 North American auto dealerships—forcing nationwide sales, service repairs, and vehicle licensing systems into complete shutdown for over two weeks.",
    setup: "CDK Global provides Dealer Management System (`DMS`) software that handles everything from customer financing and vehicle registration to parts ordering and mechanic repair logs across 15,000+ car dealerships (`General Motors, Ford, Toyota, BMW`). Almost all client dealerships connected to CDK via persistent remote VPN tunnels and always-on enterprise software integration links.",
    trap: "On June 19, 2024, threat actors associated with the BlackSuit ransomware cartel breached CDK Global's data center infrastructure via compromised remote administrative credentials. Once inside, they exfiltrated massive customer financial files and deployed encryption payloads across CDK's cloud software servers. To prevent the ransomware from propagating through the persistent VPN tunnels into 15,000 individual dealership networks across North America, CDK made the emergency decision to sever all connections and shut down its entire cloud platform.",
    timeline: [
      "June 19, 2024: BlackSuit actors breach CDK Global systems using compromised remote credentials.",
      "June 19, 2024: CDK discovers encryption and data exfiltration; severs cloud DMS access for 15,000 auto dealerships.",
      "June 20–30, 2024: Dealerships across North America revert to pen and paper; vehicle sales, repair orders, and payrolls freeze.",
      "June 21, 2024: BlackSuit demands a multi-million dollar extortion payment to provide decryptor keys and prevent data leaks.",
      "July 03, 2024: CDK Global gradually restores cloud DMS functionality after two weeks of severe economic paralysis."
    ],
    redFlags: [
      "Over-reliance on a single SaaS software provider (`Single Point of Failure`) without maintaining robust offline business continuity plans.",
      "Persistent, unsegmented VPN tunnels connecting external SaaS vendors directly to internal enterprise endpoints without continuous Zero Trust inspection.",
      "Lack of rapid out-of-band communication protocols for vendor emergency disconnects."
    ],
    psychologicalBias: "Monoculture Dependency Fallacy — Assuming that because industry-standard software is ubiquitous across thousands of businesses, it is immune to catastrophic centralized outages.",
    prevention: "Ensure every enterprise maintains actionable offline business continuity plans (`Paper Fallbacks`), enforce Zero Trust Network Access (`ZTNA`) on vendor integrations, and regularly simulate supply chain isolation drills.",
    quiz: [
      { q: "What is a 'Dealer Management System' (`DMS`) like CDK Global?", opts: ["A car wash controller", "The mission-critical enterprise software platform used by car dealerships to manage sales, financing, parts, repairs, and accounting", "A GPS navigation app", "A tire pressure sensor"], ans: 1, exp: "When a DMS goes down, modern car dealerships cannot process loans, check parts inventory, or print vehicle registration titles." },
      { q: "How many car dealerships across North America were paralyzed by the CDK Global ransomware attack in June 2024?", opts: ["10 dealerships", "Over 15,000 automotive dealerships across the United States and Canada", "50 dealerships", "Only 1 store"], ans: 1, exp: "The sheer scale of CDK's market share created a massive single point of failure for the entire North American automotive retail industry." },
      { q: "What ransomware syndicate claimed responsibility for the CDK Global paralyzation?", opts: ["BlackSuit (a re-branded continuation of the notorious Royal/Conti cybercrime cartel)", "Lazarus Group", "Anonymous", "Fancy Bear"], ans: 0, exp: "BlackSuit is a high-profile extortion cartel known for targeting critical infrastructure, healthcare, and industrial supply chains." },
      { q: "How did auto dealerships have to conduct business during the two-week cloud software outage?", opts: ["They closed completely for a year", "They were forced to revert entirely to pen and paper, handwritten repair orders, and physical calculators for car sales", "They used telepathy", "They sold cars for free"], ans: 1, exp: "The loss of automated financing and inventory tools caused massive operational delays and loss of revenue across thousands of franchises." },
      { q: "Why did CDK Global immediately sever all cloud connections to 15,000 dealerships upon discovering the breach?", opts: ["To save electricity", "To prevent the ransomware from traveling through persistent VPN tunnels and encrypting the local computers at every client dealership", "Because their internet router unplugged", "To update software"], ans: 1, exp: "Emergency network isolation (`containment`) is the critical first step in incident response to protect downstream clients." },
      { q: "What is a 'Single Point of Failure' (`SPOF`) in enterprise IT architecture?", opts: ["A broken keyboard key", "A centralized system, vendor, or software upon which an entire organization or industry depends; if it fails, everything halts", "Having two backup generators", "Using two monitors"], ans: 1, exp: "High-dependency SaaS monocultures create systemic industry risks where one vendor breach paralyzes thousands of independent companies." },
      { q: "What is an 'Offline Business Continuity Plan' (`BCP`)?", opts: ["Turning off computers on weekends", "A documented, tested protocol allowing an organization to continue critical operations using manual, paper, or isolated tools during a total cyber outage", "Buying extra coffee", "Changing passwords"], ans: 1, exp: "Organizations with robust paper and manual backup procedures continued selling cars and repairing vehicles while competitors shut down." },
      { q: "What is 'Double Extortion' in modern ransomware campaigns like BlackSuit?", opts: ["Asking two people for money", "Attackers both encrypt the victim's servers (`operational paralyzation`) AND steal terabytes of sensitive data to threaten public release (`data extortion`)", "Paying twice by mistake", "Sending two emails"], ans: 1, exp: "Double extortion puts immense pressure on organizations because even if they can restore backups, attackers still threaten to leak sensitive data." },
      { q: "Why should continuous 'Zero Trust' inspection be applied to persistent vendor integration tunnels?", opts: ["Because vendors are friendly", "To ensure that even if a trusted software vendor is breached, unusual traffic or malware payloads cannot move laterally into your network", "To make internet faster", "To save hard drive space"], ans: 1, exp: "Zero Trust assumes all networks, including trusted third-party vendor tunnels, may be compromised at any time." },
      { q: "Approximately how much economic damage did the CDK Global attack inflict across the automotive sector?", opts: ["$500 dollars", "Estimated over $1 Billion in lost productivity, delayed sales, repair backlog, and recovery expenses", "$10,000", "Zero impact"], ans: 1, exp: "Economic analyses by Anderson Economic Group estimated industry losses exceeded $1 billion due to delayed vehicle deliveries and service." }
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
      // Build exclusion list from ALL currently displayed case studies so the AI never repeats
      const existingTitles = caseStudies.map(cs => cs.title);
      const exclusionList = existingTitles.map((t, i) => `${i + 1}. ${t}`).join('\n');

      // Randomize the category to force variety across different domains
      const categoryPool = [
        'Deepfake & AI Fraud', 'Crypto & Social Engineering', 'SMS & Phishing',
        'Workplace & Shadow IT', 'Ransomware & Extortion', 'Supply Chain Attack',
        'Cloud Security & Identity', 'Insider Threat', 'IoT & Critical Infrastructure',
        'Healthcare & Medical Data Breach', 'Financial Services Fraud', 'Government & Military Espionage'
      ];
      const randomCategory = categoryPool[Math.floor(Math.random() * categoryPool.length)];

      // Massive pool of real-world incident seeds to steer the AI toward lesser-known cases
      const incidentSeeds = [
        'SolarWinds Orion Supply Chain (2020)', 'Colonial Pipeline DarkSide (2021)', 'Kaseya VSA REvil (2021)',
        'Log4Shell Apache Log4j (2021)', 'Uber Lapsus$ MFA Fatigue (2022)', 'Medibank AlphV (2022)',
        'LastPass Developer Breach (2022)', 'Optus API Exposure (2022)', 'Rackspace Exchange ProxyNotShell (2022)',
        'T-Mobile API Breach 37M (2023)', 'MOVEit Clop Mass Exploit (2023)', 'Barracuda ESG Zero-Day (2023)',
        'Casino Scattered Spider (2023)', 'Boeing LockBit (2023)', 'Okta HAR Support Breach (2023)',
        'Clorox Scattered Spider (2023)', 'Royal Mail LockBit (2023)', 'Reddit Phishing (2023)',
        'Norton LifeLock Credential Stuffing (2023)', 'JumpCloud Nation-State (2023)',
        'Microsoft Storm-0558 Outlook (2023)', 'Dish Network BlackBasta (2023)',
        'Latitude Financial (2023)', 'Applied Materials Supply Chain (2023)',
        'ICBC LockBit (2023)', 'Citrix Bleed NetScaler (2023)',
        'Ascension Health Black Basta (2024)', 'Cencora/AmerisourceBergen (2024)',
        'AT&T Snowflake (2024)', 'Dell API Scraping 49M (2024)',
        'Ivanti Connect Secure Zero-Day (2024)', 'AnyDesk Production Breach (2024)',
        'Microsoft Midnight Blizzard (2024)', 'Prudential Financial AlphV (2024)',
        'UnitedHealth Change Healthcare (2024)', 'Synnovis NHS Qilin (2024)',
        'CDK Global BlackSuit (2024)', 'Snowflake UNC5537 Wave (2024)',
        'Roku Credential Stuffing 576K (2024)', 'Dropbox Sign Breach (2024)',
        'London Drugs LockBit (2024)', 'Christie Auction House RansomHub (2024)',
        'TeamViewer Midnight Blizzard (2024)', 'Evolve Bank LockBit (2024)',
        'Patelco Credit Union (2024)', 'National Public Data Breach 2.9B (2024)',
        'Internet Archive DDoS & Breach (2024)', 'Star Health Data Leak Telegram (2024)',
        'Blue Yonder Supply Chain (2024)', 'Krispy Kreme Play Ransomware (2024)',
        'PowerSchool Student Data Breach (2025)', 'Bybit $1.5B Lazarus Crypto Heist (2025)',
        'Lee Enterprises Newspaper Ransomware (2025)', 'DISA Global Solutions 3.3M (2025)',
        'Marks & Spencer Scattered Spider (2025)', 'Co-op DragonForce (2025)',
        'Harrods Cyber Attack (2025)', 'NHS Synnovis Blood Test Leak (2024)',
        'Twilio Authy 33M (2024)', 'Trello 15M User Scraping (2024)'
      ];
      // Pick 5 random seeds to suggest in the prompt for variety
      const shuffled = [...incidentSeeds].sort(() => Math.random() - 0.5);
      const suggestedIncidents = shuffled.slice(0, 5).join(', ');

      const prompt = `You are a world-class cybersecurity threat intelligence analyst. Generate 1 documented, REAL-WORLD cybersecurity case study that has NOT been covered before in this session.

ABSOLUTE REQUIREMENTS:
1. The case MUST be about a REAL, VERIFIED historical incident with a REAL organization name, real dates, real financial losses, and real victim counts.
2. It MUST be based on ACTUAL published reports from sources like FBI IC3, CISA, SEC filings, Mandiant, CrowdStrike, Sophos, or major news outlets.
3. Do NOT invent fictional companies, hypothetical scenarios, or generic examples.
4. Generate a case study in the category: "${randomCategory}" (or the closest matching real incident).
5. Consider covering one of these real incidents for inspiration: ${suggestedIncidents}. But you may pick ANY real incident not in the exclusion list below.

CRITICAL — DO NOT REPEAT THESE ALREADY-DISPLAYED CASE STUDIES:
${exclusionList}

You MUST pick a COMPLETELY DIFFERENT real-world incident from the ones listed above. There are hundreds of documented cybersecurity breaches from 2020–2025 — pick one that is NOT in the exclusion list.

FORMAT REQUIREMENTS — Match the detail level and structure of professional threat intelligence case studies:
- The "date" field MUST include source attribution in parentheses, e.g.: "June 2023 (Published by CISA, FBI & Progress Software)" or "September 2022 (Published by Uber Security, FBI & DOJ)". Always cite 2-3 real organizations that published reports on this incident.
- The "loss" field must be specific and quantified with real numbers (e.g. "49 Million Customer Records Exposed" or "$4.4M Ransom Paid, East Coast Fuel Supply Disrupted for 6 Days").
- The "setup" and "trap" fields must each be 150-200 words with deep technical detail about the attack chain.
- The "timeline" must include real dates for each step, not generic placeholders.
- The "redFlags" must include specific technical indicators of compromise (IoCs), not generic advice.
- The "prevention" must be a detailed 3-part defense roadmap: (1) Technical controls, (2) Employee training measures, (3) Policy and governance changes.

Return ONLY a valid JSON object (no markdown, no backticks, no explanation) with EXACTLY these keys:
{
  "title": "The [Year] [Organization] [Attack Type] (e.g. The 2023 MOVEit Clop Mass Exploitation)",
  "category": "One of: Deepfake & AI Fraud, Crypto & Social Engineering, SMS & Phishing, Workplace & Shadow IT, Cloud Security & Identity",
  "date": "Month Year (Published by Source1, Source2 & Source3) — e.g. June 2023 (Published by CISA, FBI & Progress Software)",
  "loss": "Real financial loss with specific numbers (e.g. $100M+ in damages, 77M patient records exposed)",
  "summary": "A comprehensive 4-5 sentence factual summary covering the organization background, attackers involved, breach vector, and real-world aftermath.",
  "setup": "A thorough 150-200 word technical breakdown of the initial access vector, vulnerability exploited, social engineering tactics used, and how attackers bypassed security controls.",
  "trap": "A detailed 150-200 word analysis of the attack climax — malware deployment, lateral movement, data exfiltration method, and which cognitive bias or security gap was weaponized.",
  "timeline": [
    "Step 1 with real dates: Initial reconnaissance or access",
    "Step 2: Lateral movement and privilege escalation",
    "Step 3: Data exfiltration or ransomware deployment",
    "Step 4: Discovery and incident response",
    "Step 5: Aftermath, remediation, and regulatory consequences"
  ],
  "redFlags": ["Specific technical red flag 1", "Red flag 2 with IoC context", "Red flag 3", "Red flag 4"],
  "psychologicalBias": "Which cognitive bias or operational gap was exploited and why it succeeded",
  "prevention": "A detailed 3-part defense roadmap: (1) Technical controls, (2) Employee training measures, (3) Policy and governance changes that would have prevented this.",
  "quiz": [
    { "q": "Factual question about the incident?", "opts": ["Wrong A", "Correct B", "Wrong C", "Wrong D"], "ans": 1, "exp": "Explanation referencing the real case" },
    { "q": "Second factual question?", "opts": ["Wrong A", "Wrong B", "Correct C", "Wrong D"], "ans": 2, "exp": "Explanation" },
    { "q": "Third factual question?", "opts": ["Correct A", "Wrong B", "Wrong C", "Wrong D"], "ans": 0, "exp": "Explanation" },
    { "q": "Fourth question about prevention or impact?", "opts": ["Wrong A", "Wrong B", "Wrong C", "Correct D"], "ans": 3, "exp": "Explanation" },
    { "q": "Fifth question about technical details?", "opts": ["Wrong A", "Correct B", "Wrong C", "Wrong D"], "ans": 1, "exp": "Explanation" },
    { "q": "Sixth question?", "opts": ["Wrong A", "Wrong B", "Correct C", "Wrong D"], "ans": 2, "exp": "Explanation" },
    { "q": "Seventh question?", "opts": ["Correct A", "Wrong B", "Wrong C", "Wrong D"], "ans": 0, "exp": "Explanation" },
    { "q": "Eighth question?", "opts": ["Wrong A", "Wrong B", "Wrong C", "Correct D"], "ans": 3, "exp": "Explanation" },
    { "q": "Ninth question?", "opts": ["Wrong A", "Correct B", "Wrong C", "Wrong D"], "ans": 1, "exp": "Explanation" },
    { "q": "Tenth question?", "opts": ["Wrong A", "Wrong B", "Correct C", "Wrong D"], "ans": 2, "exp": "Explanation" }
  ]
}

IMPORTANT: You MUST generate EXACTLY 10 questions in the quiz array. The answers to ALL 10 questions MUST be explicitly stated within the text you generated for the summary, setup, trap, and timeline fields. Do NOT ask questions about outside facts not mentioned in your generated case study. Vary the correct answer position randomly across questions. Return ONLY the JSON object, nothing else.`;

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
                temperature: 0.95,
                max_tokens: 4096
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
            const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.95, maxOutputTokens: 4096 }
              })
            });
            const geminiData = await geminiRes.json();
            if (geminiData.candidates?.[0]?.content?.parts?.[0]?.text) {
              replyText = geminiData.candidates[0].content.parts[0].text;
              usedEngine = 'Google Gemini 2.0 Flash';
            }
          } catch (e) {
            console.warn('Gemini client fallback failed:', e);
          }
        }
      }

      let newCase = null;
      if (replyText) {
        try {
          // Strip markdown code fences if the AI wrapped its response
          let cleanedText = replyText.trim();
          if (cleanedText.startsWith('```')) {
            cleanedText = cleanedText.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '');
          }
          const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            // Deduplication: reject if this title is too similar to an existing one
            const isDuplicate = existingTitles.some(t => {
              const existingWords = t.toLowerCase().split(/\s+/);
              const newWords = (parsed.title || '').toLowerCase().split(/\s+/);
              const overlap = existingWords.filter(w => w.length > 3 && newWords.includes(w));
              return overlap.length >= 4; // 4+ significant shared words = likely duplicate
            });
            if (!isDuplicate && parsed.title && parsed.summary) {
              newCase = parsed;
            } else {
              console.warn('AI returned a duplicate or incomplete case, falling back to pool');
            }
          }
        } catch (e) {
          console.warn('Failed to parse AI JSON, using fallback pool:', e);
        }
      }

      // If API calls failed, keys missing, or duplicate detected — use massive offline fallback pool
      if (!newCase) {
        const fallbacks = [
          {
            title: "The 2020 SolarWinds Orion Supply Chain Compromise",
            category: "Workplace & Shadow IT",
            date: "December 2020 (Discovered by FireEye/Mandiant)",
            loss: "18,000+ Organizations Compromised Including US Treasury, DHS & Fortune 500",
            summary: "Russian intelligence service (SVR/Cozy Bear) inserted a backdoor into SolarWinds Orion IT monitoring software updates, compromising 18,000+ organizations globally including multiple US federal agencies. The attack went undetected for over 9 months and is considered one of the most sophisticated supply chain attacks in history.",
            setup: "Attackers gained access to SolarWinds' build environment and injected the 'SUNBURST' backdoor into legitimate Orion software updates distributed between March and June 2020. Because Orion runs with elevated network privileges to monitor infrastructure, the trojanized update gave attackers god-level access inside victim networks.",
            trap: "The SUNBURST backdoor lay dormant for 2 weeks after installation before activating, used legitimate SolarWinds API calls to blend with normal traffic, and communicated via DNS subdomains that mimicked standard Orion telemetry. Attackers then deployed the TEARDROP memory-only dropper to install Cobalt Strike beacons, stealing emails from US Treasury, DOJ, and DHS officials.",
            timeline: [
              "Oct 2019: Attackers first breach SolarWinds internal build systems via password 'solarwinds123' on a public GitHub repo.",
              "Feb 2020: SUNBURST code injected into the Orion build pipeline; test builds verify malware survives compilation.",
              "Mar–Jun 2020: Trojanized Orion updates 2019.4 through 2020.2.1 distributed to 18,000+ customers worldwide.",
              "Dec 8, 2020: FireEye discovers its own Red Team tools were stolen and traces the breach back to SolarWinds.",
              "Dec 13, 2020: CISA issues Emergency Directive 21-01 ordering all federal agencies to disconnect SolarWinds Orion."
            ],
            redFlags: [
              "Build pipeline credentials ('solarwinds123') exposed on a public GitHub repository",
              "Software update serving as a trusted distribution channel for malware",
              "Backdoor traffic disguised as legitimate Orion API telemetry",
              "9-month dwell time without detection by any endpoint security product"
            ],
            psychologicalBias: "Trusted Vendor Blind Spot — Organizations inherently trust digitally-signed software updates from established vendors without inspecting the update payload itself.",
            prevention: "Implement Software Bill of Materials (SBOM) verification, enforce build pipeline integrity checks with reproducible builds, and deploy behavioral analytics that detect anomalous DNS/API patterns even from trusted software.",
            quiz: [
              { q: "What was the name of the backdoor inserted into SolarWinds Orion updates?", opts: ["SUNBURST", "WannaCry", "NotPetya", "HAFNIUM"], ans: 0, exp: "The backdoor was named SUNBURST by FireEye/Mandiant researchers who first discovered it." },
              { q: "How long did the attack go undetected inside victim networks?", opts: ["2 days", "1 month", "Over 9 months", "5 years"], ans: 2, exp: "The trojanized updates were distributed from March 2020 and not discovered until December 2020." },
              { q: "Which organization first discovered the SolarWinds compromise?", opts: ["The FBI", "Microsoft", "FireEye (now Mandiant)", "SolarWinds itself"], ans: 2, exp: "FireEye discovered the breach after noticing their own Red Team tools had been stolen via the SolarWinds backdoor." },
              { q: "What embarrassing credential was found on SolarWinds' public GitHub?", opts: ["admin/admin", "password123", "solarwinds123", "guest/guest"], ans: 2, exp: "The password 'solarwinds123' was found on a public GitHub repo, highlighting poor credential hygiene." },
              { q: "What technique made SUNBURST difficult to detect?", opts: ["It encrypted all network traffic", "It mimicked legitimate SolarWinds Orion API calls and DNS telemetry", "It only ran on weekends", "It disabled all antivirus software"], ans: 1, exp: "SUNBURST blended with normal Orion monitoring traffic, making it invisible to standard network monitoring." }
            ]
          },
          {
            title: "The 2021 Colonial Pipeline DarkSide Ransomware Shutdown",
            category: "Workplace & Shadow IT",
            date: "May 2021 (Published by FBI, DOJ & CISA)",
            loss: "$4.4M Ransom Paid, East Coast Fuel Supply Disrupted for 6 Days",
            summary: "Russian ransomware gang DarkSide breached Colonial Pipeline — operator of the largest refined fuel pipeline in the United States — through a single compromised VPN password, forcing a 6-day shutdown that caused gas station panic buying across the US East Coast.",
            setup: "Colonial Pipeline transported 45% of all fuel consumed on the US East Coast. Attackers gained access through a legacy VPN account that used a compromised password (found in a dark web breach dump) and did not have Multi-Factor Authentication enabled.",
            trap: "After gaining VPN access, DarkSide operators spent several days mapping the network and exfiltrating 100GB of corporate data before deploying ransomware. Colonial Pipeline preemptively shut down its entire 5,500-mile pipeline to prevent the ransomware from spreading to operational technology (OT) systems, causing immediate fuel shortages.",
            timeline: [
              "April 29, 2021: DarkSide operators log into Colonial Pipeline's network using a compromised VPN credential.",
              "May 6, 2021: Attackers exfiltrate 100GB of data and prepare ransomware deployment.",
              "May 7, 2021: Ransomware detonated; Colonial Pipeline shuts down entire 5,500-mile pipeline.",
              "May 8–12, 2021: Fuel panic-buying causes gas station shortages across 17 US states; President Biden declares state of emergency.",
              "May 8, 2021: Colonial Pipeline pays $4.4M in Bitcoin; FBI later recovers $2.3M."
            ],
            redFlags: [
              "Legacy VPN account with password reuse and no MFA enforcement",
              "No network segmentation between IT and operational technology (OT) systems",
              "100GB data exfiltration went undetected for days",
              "Lack of offline backup infrastructure for critical pipeline operations"
            ],
            psychologicalBias: "Legacy System Neglect — Assumption that older, low-profile VPN accounts are not targeted by sophisticated threat actors.",
            prevention: "Enforce MFA on 100% of remote access points, implement strict IT/OT network segmentation, deploy Data Loss Prevention (DLP) monitoring, and maintain tested offline backup and recovery procedures.",
            quiz: [
              { q: "What percentage of US East Coast fuel supply did Colonial Pipeline handle?", opts: ["5%", "25%", "45%", "80%"], ans: 2, exp: "Colonial Pipeline transported approximately 45% of all refined fuel consumed on the US East Coast." },
              { q: "How did DarkSide initially gain access to Colonial Pipeline?", opts: ["A phishing email", "A compromised VPN password without MFA", "A zero-day exploit", "Physical break-in"], ans: 1, exp: "The breach was traced to a single compromised VPN credential that lacked Multi-Factor Authentication." },
              { q: "How much ransom did Colonial Pipeline pay in Bitcoin?", opts: ["$100,000", "$4.4 million", "$22 million", "$50 million"], ans: 1, exp: "Colonial paid $4.4M in Bitcoin, though the FBI later recovered approximately $2.3M of it." },
              { q: "Why did Colonial shut down the entire pipeline preemptively?", opts: ["The ransomware destroyed the pipeline physically", "To prevent ransomware from spreading from IT networks to operational technology (OT) systems", "The FBI ordered them to", "They had no employees available"], ans: 1, exp: "The lack of IT/OT segmentation meant the ransomware could potentially reach pipeline control systems." },
              { q: "How many US states experienced fuel shortages during the shutdown?", opts: ["3 states", "10 states", "17 states", "All 50 states"], ans: 2, exp: "Gas station shortages and panic buying affected approximately 17 states across the US East Coast." }
            ]
          },
          {
            title: "The 2021 Kaseya VSA REvil Mass Ransomware Attack",
            category: "Workplace & Shadow IT",
            date: "July 2021 (Published by CISA, FBI & Kaseya)",
            loss: "1,500+ Businesses Encrypted, $70M Ransom Demanded",
            summary: "Russian ransomware syndicate REvil exploited zero-day vulnerabilities in Kaseya VSA remote management software used by Managed Service Providers (MSPs), simultaneously encrypting systems at over 1,500 downstream businesses in a single weekend supply chain attack.",
            setup: "Kaseya VSA is remote monitoring software used by MSPs to manage hundreds of client networks. REvil discovered and exploited authentication bypass vulnerabilities (CVE-2021-30116) in internet-facing VSA servers. Because MSPs use VSA with admin-level privileges across all client endpoints, compromising one VSA server meant instant access to every client.",
            trap: "On July 2, 2021 (US Independence Day weekend), REvil pushed a fake 'Kaseya VSA Agent Hot-fix' through the legitimate VSA update mechanism. The malicious update disabled Windows Defender, dropped an encrypted REvil payload, and encrypted client systems across 60+ MSPs and 1,500+ end businesses simultaneously. REvil demanded $70 million for a universal decryptor.",
            timeline: [
              "June 2021: REvil discovers zero-day auth bypass in Kaseya VSA servers exposed to the internet.",
              "July 2, 2021 (Friday 2PM ET): Malicious update pushed through VSA to MSP clients as holiday weekend begins.",
              "July 2–4, 2021: 1,500+ businesses across 17 countries find systems encrypted including supermarket chains in Sweden.",
              "July 5, 2021: REvil posts $70M universal decryptor ransom demand on dark web blog.",
              "July 22, 2021: Kaseya obtains universal decryptor key (reportedly via FBI/intelligence sources)."
            ],
            redFlags: [
              "Internet-facing management consoles without WAF protection or IP restriction",
              "MSP software running with unrestricted admin privileges across all client endpoints",
              "Attack timed for a major holiday weekend when IT staff coverage is minimal",
              "Fake software update deployed through a trusted management channel"
            ],
            psychologicalBias: "Holiday Timing & Trusted Channel Exploitation — Attackers weaponized the trust MSPs place in their own management tools and struck when defenders were on vacation.",
            prevention: "Restrict VSA/RMM server access to VPN-only, enforce least-privilege for MSP agent accounts, implement canary files to detect mass encryption, and maintain holiday weekend incident response coverage.",
            quiz: [
              { q: "How many businesses were simultaneously encrypted in the Kaseya attack?", opts: ["50", "500", "Over 1,500", "10,000"], ans: 2, exp: "REvil encrypted systems at over 1,500 downstream businesses through 60+ compromised MSPs." },
              { q: "Why was the July 4th weekend specifically chosen for the attack?", opts: ["Because fireworks distracted people", "Because US IT security staff would be on holiday with minimal monitoring", "Because servers run slower on weekends", "It was random"], ans: 1, exp: "Holiday weekends significantly reduce incident response staffing and detection capabilities." },
              { q: "What was the total ransom demand posted by REvil?", opts: ["$1 million", "$10 million", "$70 million", "$500 million"], ans: 2, exp: "REvil demanded $70M for a single universal decryptor key that would unlock all 1,500+ victims." },
              { q: "How did REvil deliver the ransomware payload to victims?", opts: ["Via email attachments", "Through a fake software update pushed via Kaseya's own VSA management tool", "Through USB drives", "By hacking individual company firewalls"], ans: 1, exp: "The malicious payload was disguised as a legitimate Kaseya VSA hotfix update." },
              { q: "What critical vulnerability did REvil exploit in Kaseya VSA?", opts: ["A SQL injection", "An authentication bypass zero-day (CVE-2021-30116)", "A weak WiFi password", "A physical server backdoor"], ans: 1, exp: "The authentication bypass allowed attackers to gain admin access to VSA servers without credentials." }
            ]
          },
          {
            title: "The 2022 Uber Lapsus$ MFA Fatigue Social Engineering Breach",
            category: "SMS & Phishing",
            date: "September 2022 (Published by Uber Security, FBI & DOJ)",
            loss: "Complete Internal System Compromise, Source Code & Vulnerability Reports Exposed",
            summary: "An 18-year-old member of the Lapsus$ hacking group breached Uber's entire internal network by purchasing a contractor's stolen credentials from the dark web and then bombarding their phone with MFA push notifications until they approved one out of sheer frustration.",
            setup: "The attacker purchased valid Uber contractor credentials from an initial access broker on a dark web marketplace. The contractor had Duo MFA push notifications enabled. The attacker began sending dozens of MFA push requests to the contractor's phone, then contacted them on WhatsApp claiming to be Uber IT support, saying they needed to approve the notification to stop the spam.",
            trap: "The exhausted contractor finally tapped 'Approve' on a Duo push notification. The attacker immediately gained VPN access, discovered a PowerShell script on an internal network share containing hardcoded admin credentials for Uber's Privileged Access Management (PAM) vault (Thycotic). With PAM access, they had keys to everything — Slack, Google Workspace, AWS, HackerOne vulnerability reports, and internal dashboards.",
            timeline: [
              "Sept 15, 2022: Attacker purchases contractor VPN credentials from a dark web marketplace.",
              "Sept 15, 2022: Attacker sends 100+ MFA push notifications to contractor's phone over 1 hour.",
              "Sept 15, 2022: Attacker contacts contractor on WhatsApp posing as Uber IT, convincing them to approve.",
              "Sept 15, 2022: Attacker discovers hardcoded PAM credentials in internal PowerShell scripts.",
              "Sept 16, 2022: Attacker posts screenshots of Uber internal systems in the company Slack channel."
            ],
            redFlags: [
              "Dozens of unexpected MFA push notifications arriving in rapid succession",
              "Unsolicited WhatsApp message from someone claiming to be corporate IT support",
              "Hardcoded admin credentials stored in plaintext scripts on shared network drives",
              "No rate-limiting or anomaly detection on repeated failed MFA attempts"
            ],
            psychologicalBias: "MFA Fatigue & Helpfulness Bias — Repeated notifications create psychological exhaustion, and the fake IT support call provides a 'legitimate' reason to approve.",
            prevention: "Replace push-based MFA with FIDO2 number-matching or hardware keys, implement MFA attempt rate-limiting and anomaly alerts, never store credentials in scripts, and train employees to recognize MFA fatigue attacks.",
            quiz: [
              { q: "What technique did the Lapsus$ attacker use to bypass Uber's MFA?", opts: ["Brute-force password cracking", "MFA Fatigue — bombarding the user with push notifications until they approved", "Stealing a hardware key", "Exploiting a zero-day in the MFA app"], ans: 1, exp: "MFA Fatigue involves overwhelming users with push requests until they approve one to stop the spam." },
              { q: "How did the attacker convince the contractor to approve the MFA notification?", opts: ["They paid them", "They contacted them on WhatsApp pretending to be Uber IT support", "They sent them an email from the CEO", "They didn't — the contractor approved voluntarily"], ans: 1, exp: "Social engineering via WhatsApp impersonation of IT support added legitimacy to the MFA approval request." },
              { q: "What critical security mistake did Uber have on its internal network shares?", opts: ["No firewall", "Hardcoded admin credentials for the PAM vault stored in plaintext PowerShell scripts", "Unlocked server rooms", "No WiFi passwords"], ans: 1, exp: "Storing privileged credentials in scripts on shared drives gave the attacker instant access to every critical system." },
              { q: "How old was the Lapsus$ member who breached Uber?", opts: ["35 years old", "25 years old", "18 years old", "45 years old"], ans: 2, exp: "The attacker was an 18-year-old member of the Lapsus$ group, demonstrating that sophisticated attacks don't require advanced age." },
              { q: "What MFA method would have completely prevented this attack?", opts: ["SMS codes", "Email verification", "FIDO2 number-matching or hardware security keys", "Longer passwords"], ans: 2, exp: "FIDO2 number-matching requires the user to type a specific number shown on screen, making blind 'approve' taps impossible." }
            ]
          },
          {
            title: "The 2022 LastPass Developer Environment Breach & Vault Theft",
            category: "Cloud Security & Identity",
            date: "August–December 2022 (Published by LastPass, GoTo & Mandiant)",
            loss: "25+ Million Users' Encrypted Password Vaults Stolen, $4.4M+ in Crypto Thefts",
            summary: "Threat actors breached LastPass twice — first compromising a developer's home computer through a vulnerable Plex media server, then using stolen credentials to access cloud storage containing backup copies of 25+ million users' encrypted password vaults, leading to millions in cryptocurrency theft.",
            setup: "In August 2022, attackers breached LastPass's developer environment by targeting a senior DevOps engineer's personal home computer. They exploited a known vulnerability in Plex media server software running on the engineer's home machine, installed a keylogger, and captured the engineer's master password for the LastPass corporate vault.",
            trap: "Using the engineer's stolen credentials, attackers accessed LastPass's AWS cloud storage containing backup snapshots of customer vault data. They exfiltrated encrypted vault backups for 25+ million users. While the vaults were AES-256 encrypted, users with weak master passwords became vulnerable to offline brute-force attacks. By 2023-2024, blockchain analysts traced $4.4M+ in cryptocurrency thefts directly to cracked LastPass vaults.",
            timeline: [
              "Aug 2022: Attackers breach LastPass developer environment via source code repository access.",
              "Oct 2022: Attackers target a senior DevOps engineer's personal home Plex server and install a keylogger.",
              "Nov 2022: Stolen credentials used to access AWS S3 buckets containing customer vault backups.",
              "Dec 2022: LastPass discloses that customer vault data was stolen (initially downplaying severity).",
              "2023–2024: $4.4M+ in cryptocurrency stolen from users whose weak master passwords were brute-forced."
            ],
            redFlags: [
              "Critical infrastructure credentials accessible from employees' personal home devices",
              "Unpatched third-party software (Plex) on a device with access to corporate secrets",
              "Cloud backup snapshots of sensitive customer data without additional encryption layers",
              "Phased disclosure that initially minimized the severity of data exposure"
            ],
            psychologicalBias: "Home Network Trust Fallacy — Employees and companies assume that work-from-home environments have adequate security, ignoring unpatched personal software as attack vectors.",
            prevention: "Enforce hardware security keys for all privileged access, prohibit corporate credential access from unmanaged personal devices, implement additional encryption on cloud backups beyond vault-level encryption, and mandate strong master password policies.",
            quiz: [
              { q: "How did attackers initially compromise the LastPass DevOps engineer?", opts: ["Through a phishing email", "By exploiting a vulnerability in Plex media server on the engineer's home computer", "Through a brute-force attack on LastPass.com", "Via a rogue USB drive"], ans: 1, exp: "Attackers exploited a known Plex vulnerability to install a keylogger on the engineer's personal home computer." },
              { q: "How many users had their encrypted password vaults stolen?", opts: ["1,000", "100,000", "25+ million", "1 billion"], ans: 2, exp: "LastPass confirmed that vault data for over 25 million users was exfiltrated from cloud storage backups." },
              { q: "Why were some users' vaults cracked despite AES-256 encryption?", opts: ["AES-256 was broken", "Users with weak or short master passwords were vulnerable to offline brute-force cracking", "The encryption key was stored in plaintext", "Quantum computers cracked them"], ans: 1, exp: "Weak master passwords with low iteration counts could be brute-forced offline since attackers had the encrypted vault files." },
              { q: "How much cryptocurrency was traced to cracked LastPass vaults by 2024?", opts: ["$10,000", "$100,000", "$4.4 million+", "$1 billion"], ans: 2, exp: "Blockchain analysts like ZachXBT traced at least $4.4M in crypto thefts directly to keys extracted from cracked LastPass vaults." },
              { q: "What critical policy failure allowed a home device to become the attack vector?", opts: ["No antivirus", "Allowing corporate privileged credentials to be accessed from unmanaged personal devices", "Using Windows instead of Mac", "Not having a VPN"], ans: 1, exp: "The engineer's personal home computer had access to critical corporate secrets without enterprise endpoint protection." }
            ]
          },
          {
            title: "The 2023 MOVEit Transfer Clop Mass Exploitation",
            category: "Workplace & Shadow IT",
            date: "May–June 2023 (Published by CISA, FBI & Progress Software)",
            loss: "2,700+ Organizations Breached, 95M+ Individuals' Data Exposed",
            summary: "Russian ransomware gang Clop exploited a critical SQL injection zero-day (CVE-2023-34362) in MOVEit Transfer file transfer software, mass-exfiltrating sensitive data from 2,700+ organizations including US government agencies, universities, banks, and healthcare providers without deploying any ransomware encryption.",
            setup: "MOVEit Transfer is enterprise file transfer software used by thousands of organizations to share sensitive data. Clop discovered a SQL injection vulnerability in the web interface that allowed unauthenticated remote code execution. They pre-staged web shells on hundreds of vulnerable MOVEit servers weeks before the mass exploitation began.",
            trap: "Over the US Memorial Day weekend (May 27-28, 2023), Clop simultaneously activated pre-planted web shells across hundreds of MOVEit servers worldwide. Automated scripts exfiltrated databases containing PII, financial records, and healthcare data. Unlike typical ransomware, Clop used pure data theft and extortion — no encryption, no system disruption — making detection much harder.",
            timeline: [
              "May 27, 2023 (Memorial Day Weekend): Clop activates pre-staged web shells on hundreds of MOVEit Transfer servers.",
              "May 31, 2023: Progress Software discovers the zero-day and releases emergency patch CVE-2023-34362.",
              "June 5, 2023: Clop begins posting victim names on their dark web extortion blog.",
              "June–Dec 2023: Victim count grows to 2,700+ organizations across 84 countries; includes BBC, Shell, US DOE, and many universities.",
              "Dec 2023: Estimated 95M+ individuals' personal data confirmed exposed across all victims."
            ],
            redFlags: [
              "File transfer servers directly exposed to the public internet without WAF or IP restrictions",
              "Critical software with SQL injection vulnerabilities in authentication-free web endpoints",
              "No file integrity monitoring to detect pre-planted web shells on production servers",
              "Attack timed for Memorial Day holiday weekend with reduced security staffing"
            ],
            psychologicalBias: "Patch Lag Complacency — Organizations assume enterprise file transfer tools are inherently secure and delay patching, especially during holiday weekends.",
            prevention: "Place all file transfer servers behind VPN/Zero Trust access, implement Web Application Firewalls (WAF), deploy file integrity monitoring to detect web shells, and establish mandatory holiday weekend security monitoring coverage.",
            quiz: [
              { q: "What type of vulnerability did Clop exploit in MOVEit Transfer?", opts: ["Buffer overflow", "SQL injection zero-day (CVE-2023-34362)", "Weak password", "DNS poisoning"], ans: 1, exp: "The vulnerability was a SQL injection in MOVEit's web interface allowing unauthenticated remote code execution." },
              { q: "How many organizations were ultimately breached in the MOVEit campaign?", opts: ["50", "500", "2,700+", "100,000"], ans: 2, exp: "Over 2,700 organizations across 84 countries were confirmed breached, affecting 95M+ individuals." },
              { q: "What was unusual about Clop's tactic compared to typical ransomware?", opts: ["They used quantum computing", "They used pure data theft and extortion without encrypting any systems", "They only targeted governments", "They demanded payment in gold"], ans: 1, exp: "Clop skipped encryption entirely, relying solely on stolen data extortion to pressure victims into paying." },
              { q: "When did Clop time the mass exploitation and why?", opts: ["Monday morning for maximum disruption", "US Memorial Day holiday weekend when security staffing was minimal", "During a solar eclipse", "On New Year's Eve"], ans: 1, exp: "Holiday weekends provide attackers with extended dwell time before defenders detect and respond." },
              { q: "What should organizations do with file transfer servers to prevent similar attacks?", opts: ["Leave them as-is", "Place them behind VPN/Zero Trust access with WAF and file integrity monitoring", "Turn them off permanently", "Only use them on weekdays"], ans: 1, exp: "Restricting access, adding WAF protection, and monitoring file integrity are essential defenses for internet-facing file transfer tools." }
            ]
          },
          {
            title: "The 2023 Okta Support System Customer Data Breach",
            category: "Cloud Security & Identity",
            date: "October 2023 (Published by Okta, BeyondTrust & Cloudflare)",
            loss: "All Okta Customer Support Users' Data Exposed (100% of Customer Base)",
            summary: "Threat actors breached Okta's customer support case management system by stealing a service account credential, accessing HTTP Archive (HAR) files uploaded by customers that contained valid session tokens, and using those tokens to infiltrate customer environments including BeyondTrust and Cloudflare.",
            setup: "Okta's customer support workflow required customers to upload HAR (HTTP Archive) files for debugging. These HAR files frequently contained live session tokens and cookies. An attacker compromised an Okta support system service account credential (stored in a personal Google account that was synced to a corporate laptop).",
            trap: "Using the stolen service account, attackers accessed Okta's support case management system and downloaded HAR files uploaded by customers. They extracted valid session tokens from these files and used them to impersonate legitimate admins at customer organizations. BeyondTrust detected suspicious activity within 2 hours and alerted Okta, but Okta took 17 days to acknowledge the breach publicly.",
            timeline: [
              "Sept 28, 2023: Attacker compromises Okta employee's personal Google account synced to a work laptop, stealing service credentials.",
              "Oct 2–12, 2023: Attacker downloads HAR files from Okta's support system and extracts customer session tokens.",
              "Oct 2, 2023: BeyondTrust detects unauthorized Okta admin activity and alerts Okta (Okta initially dismisses the report).",
              "Oct 11, 2023: Cloudflare detects and blocks an intrusion attempt using a stolen Okta session token.",
              "Oct 19, 2023: Okta publicly acknowledges the breach; later confirms 100% of support customers' data was accessed."
            ],
            redFlags: [
              "Customer debugging files (HAR) containing live session tokens stored without scrubbing in support systems",
              "Service account credentials synced to personal cloud accounts on corporate devices",
              "17-day delay between initial customer security alert and public acknowledgment",
              "Lack of session token rotation after HAR file upload"
            ],
            psychologicalBias: "Diagnostic Data Blindness — Support teams routinely request debugging files without recognizing they contain live authentication material that is as valuable as passwords.",
            prevention: "Automatically sanitize HAR files to strip session tokens before storage, enforce credential isolation (no personal cloud sync on corporate devices), implement immediate session rotation after support file uploads, and respond to customer security alerts within hours.",
            quiz: [
              { q: "What sensitive data was contained in the HAR files customers uploaded to Okta support?", opts: ["Only error messages", "Live session tokens and authentication cookies", "Employee phone numbers", "Server IP addresses only"], ans: 1, exp: "HAR files capture full HTTP requests including authentication headers, cookies, and session tokens." },
              { q: "How was the Okta service account credential initially compromised?", opts: ["Brute-force attack", "Through a personal Google account synced to a corporate laptop", "A phishing email to the CEO", "Physical theft of a laptop"], ans: 1, exp: "The credential was stored in an employee's personal Google account that was synced to their Okta corporate device." },
              { q: "Which company first detected and alerted Okta about the breach?", opts: ["Microsoft", "BeyondTrust", "Google", "AWS"], ans: 1, exp: "BeyondTrust detected suspicious Okta admin activity within 2 hours and immediately alerted Okta." },
              { q: "How long did Okta take to publicly acknowledge the breach after being alerted?", opts: ["2 hours", "2 days", "17 days", "3 months"], ans: 2, exp: "The 17-day delay between BeyondTrust's alert and Okta's public disclosure drew significant industry criticism." },
              { q: "What percentage of Okta's customer support users had their data accessed?", opts: ["1%", "25%", "50%", "100% of all support customers"], ans: 3, exp: "Okta ultimately confirmed that the breach affected data for 100% of their customer support users." }
            ]
          },
          {
            title: "The 2024 National Public Data Breach — 2.9 Billion Records Exposed",
            category: "Crypto & Social Engineering",
            date: "April–August 2024 (Published by Cybersecurity Researchers & US Congressional Hearings)",
            loss: "2.9 Billion Records Exposed Including SSNs, Full Names, Addresses for Nearly All Americans",
            summary: "Data broker National Public Data (NPD) suffered a catastrophic breach exposing 2.9 billion records containing Social Security numbers, full names, addresses, and phone numbers for nearly every American adult. The breach was discovered after the stolen database appeared for sale on dark web forums for $3.5 million.",
            setup: "National Public Data is a background check and data broker company that scrapes and aggregates personal information from public records, court documents, and other sources. The company stored billions of unencrypted personal records in a centralized database accessible via a web application with weak access controls.",
            trap: "A threat actor breached NPD's systems in late 2023 and exfiltrated the entire 277GB database containing 2.9 billion records. The data appeared on dark web forums in April 2024 offered for $3.5M. By August 2024, portions were leaked for free, exposing SSNs and personal details of nearly every American. NPD filed for bankruptcy in October 2024 due to litigation costs.",
            timeline: [
              "Dec 2023: Initial breach of National Public Data systems via compromised web application credentials.",
              "April 2024: Threat actor 'USDoD' lists the 2.9-billion-record database for sale at $3.5 million on dark web forum.",
              "June 2024: Cybersecurity researchers verify the legitimacy of the stolen data.",
              "Aug 2024: Complete database leaked for free on hacking forums; mass identity theft alerts issued.",
              "Oct 2024: National Public Data parent company Jerico Pictures files Chapter 11 bankruptcy."
            ],
            redFlags: [
              "Billions of personal records including SSNs stored without encryption or tokenization",
              "No breach detection for months while the entire database was exfiltrated",
              "Weak web application access controls on a system containing the most sensitive PII",
              "Data broker with minimal regulatory oversight holding more records than the US census"
            ],
            psychologicalBias: "Invisible Data Exposure — Individuals had no idea this company possessed their SSN and personal data, and therefore could take no protective action.",
            prevention: "Federal legislation requiring data brokers to encrypt all PII, mandatory breach notification within 72 hours, individual opt-out rights from data broker databases, and proactive credit freezes for all consumers.",
            quiz: [
              { q: "How many records were exposed in the National Public Data breach?", opts: ["1 million", "100 million", "2.9 billion", "10 billion"], ans: 2, exp: "The breach exposed 2.9 billion records, one of the largest data exposures in history." },
              { q: "What sensitive information was included in the leaked records?", opts: ["Only email addresses", "Social Security numbers, full names, addresses, and phone numbers", "Only usernames and passwords", "Credit card numbers only"], ans: 1, exp: "The data included SSNs and comprehensive personal information for nearly every American adult." },
              { q: "How much was the stolen database initially listed for on the dark web?", opts: ["$100", "$10,000", "$3.5 million", "$100 million"], ans: 2, exp: "The complete 277GB database was initially offered for $3.5 million before being leaked for free." },
              { q: "What happened to National Public Data after the breach was disclosed?", opts: ["They grew larger", "They were acquired by Google", "The parent company filed for Chapter 11 bankruptcy", "Nothing happened"], ans: 2, exp: "Parent company Jerico Pictures filed for bankruptcy in October 2024 due to overwhelming litigation costs." },
              { q: "What is the biggest problem with data broker security practices?", opts: ["They charge too much", "They store billions of unencrypted personal records with minimal regulatory oversight", "They have too many employees", "Their offices are too large"], ans: 1, exp: "Data brokers aggregate massive amounts of sensitive PII with often inadequate security controls and limited regulatory requirements." }
            ]
          },
          {
            title: "The 2024 Microsoft Midnight Blizzard Email System Breach",
            category: "Cloud Security & Identity",
            date: "January 2024 (Published by Microsoft, CISA & SEC Filings)",
            loss: "Senior Executive Email Accounts Compromised, Source Code Repositories Accessed",
            summary: "Russian state-sponsored group Midnight Blizzard (Nobelium/APT29) breached Microsoft's corporate email system by password-spraying a legacy test tenant account without MFA, then used its OAuth permissions to access senior executive mailboxes and later pivoted to Microsoft source code repositories.",
            setup: "Midnight Blizzard performed low-and-slow password spraying against Microsoft's corporate accounts. They identified a legacy test tenant account that had no MFA, breached it, and discovered it had elevated OAuth application permissions to the Microsoft corporate environment — a configuration oversight from years prior.",
            trap: "Using the test account's OAuth permissions, attackers created additional malicious OAuth applications and granted them access to Microsoft 365 mailboxes. They read emails from senior leadership, cybersecurity, and legal teams — specifically searching for communications about what Microsoft knew about Midnight Blizzard's own operations. They later used secrets found in emails to access Microsoft source code repositories.",
            timeline: [
              "Nov 2023: Midnight Blizzard begins password-spraying Microsoft corporate accounts at low volume to avoid detection.",
              "Late Nov 2023: Attackers breach a legacy test tenant account without MFA and discover its OAuth access.",
              "Dec 2023–Jan 2024: Attackers read emails from senior executives, cybersecurity, and legal teams.",
              "Jan 12, 2024: Microsoft detects the breach and initiates incident response.",
              "March 2024: Microsoft discloses attackers used email-found secrets to access source code repositories."
            ],
            redFlags: [
              "Legacy test tenant accounts with production-level OAuth permissions still active",
              "No MFA on any tenant account, including test environments",
              "Low-volume password spraying designed to fly under rate-limiting thresholds",
              "OAuth applications with overly broad permissions to executive email"
            ],
            psychologicalBias: "Test Environment Neglect — Organizations assume test/dev accounts are harmless and exempt them from production security controls, creating backdoors.",
            prevention: "Audit and decommission all legacy test accounts, enforce MFA on 100% of tenant accounts regardless of purpose, implement OAuth application governance, and restrict mailbox access to least-privilege scopes.",
            quiz: [
              { q: "How did Midnight Blizzard initially breach Microsoft's corporate environment?", opts: ["A zero-day exploit", "Password-spraying a legacy test tenant account that lacked MFA", "Bribing an employee", "Hacking the Azure cloud platform"], ans: 1, exp: "A forgotten test tenant account without MFA was password-sprayed at low volume to avoid detection." },
              { q: "What did the attackers search for in executive emails?", opts: ["Financial reports", "Information about what Microsoft knew about Midnight Blizzard's own operations", "Employee vacation schedules", "Marketing plans"], ans: 1, exp: "The attackers specifically targeted intelligence about Microsoft's knowledge of their own espionage campaigns." },
              { q: "What did attackers access after reading Microsoft emails?", opts: ["Customer databases", "Microsoft source code repositories using secrets found in emails", "Azure billing systems", "Xbox game servers"], ans: 1, exp: "Secrets and credentials found in executive emails were used to pivot into Microsoft's source code repositories." },
              { q: "What is 'low-and-slow password spraying'?", opts: ["Typing passwords very slowly", "Testing a small number of common passwords across many accounts at low volume to avoid triggering lockout or detection thresholds", "Using a dictionary attack at maximum speed", "Guessing passwords once per year"], ans: 1, exp: "Low-volume spraying stays under rate-limiting and lockout thresholds, making it nearly invisible to standard monitoring." },
              { q: "What critical oversight allowed the test tenant to become a breach vector?", opts: ["It had the same password as production", "It retained elevated OAuth permissions to the production corporate environment from years ago", "It was connected to the internet", "It ran Windows instead of Linux"], ans: 1, exp: "The legacy test account had OAuth application permissions granting access to production Microsoft 365 mailboxes." }
            ]
          },
          {
            title: "The 2024 Ivanti Connect Secure Zero-Day Mass Exploitation",
            category: "SMS & Phishing",
            date: "January–February 2024 (Published by Volexity, Mandiant & CISA)",
            loss: "2,100+ VPN Appliances Compromised Globally Including US Government Agencies",
            summary: "Chinese state-sponsored threat actor UTA0178 exploited two chained zero-day vulnerabilities in Ivanti Connect Secure VPN appliances (CVE-2024-21887 & CVE-2023-46805), compromising over 2,100 VPN gateways globally and forcing CISA to order all US federal agencies to disconnect and rebuild their Ivanti devices.",
            setup: "Ivanti Connect Secure (formerly Pulse Secure) is a widely deployed enterprise VPN gateway. Volexity discovered two chained zero-days: an authentication bypass and a command injection vulnerability. Chinese threat actors exploited these in combination to gain unauthenticated remote code execution on VPN appliances directly from the internet.",
            trap: "Attackers deployed custom web shells (GLASSTOKEN, BUSHWALK) on compromised Ivanti appliances, enabling persistent access that survived reboots and even factory resets. The web shells blended with legitimate Ivanti system files. Even Ivanti's own Integrity Checker Tool failed to detect the compromise initially. CISA issued Emergency Directive 24-01 requiring federal agencies to physically disconnect Ivanti devices.",
            timeline: [
              "Dec 3, 2023: Volexity detects suspicious lateral movement from a client's Ivanti Connect Secure VPN.",
              "Jan 10, 2024: Volexity publicly discloses the two zero-days; Ivanti releases mitigations (not patches).",
              "Jan 19, 2024: Mass exploitation begins; 2,100+ appliances compromised globally within days.",
              "Jan 31, 2024: CISA issues Emergency Directive 24-01 ordering federal agencies to disconnect all Ivanti VPN devices.",
              "Feb 2024: CISA warns that even factory resets may not remove persistent backdoors; full hardware replacement recommended."
            ],
            redFlags: [
              "VPN gateway appliances directly exposed to the internet without additional access controls",
              "Zero-day chain allowing unauthenticated remote code execution with no user interaction",
              "Vendor integrity checking tools unable to detect sophisticated persistence mechanisms",
              "Mitigations released weeks before actual patches, leaving a window of exposure"
            ],
            psychologicalBias: "Vendor Trust Overreliance — Organizations trusted Ivanti's own integrity checking tools and mitigations, not realizing sophisticated attackers could bypass both.",
            prevention: "Deploy network-level access controls in front of VPN appliances, maintain tested incident response playbooks for VPN compromise scenarios, validate vendor integrity tools with independent forensic analysis, and plan for full hardware replacement in worst-case scenarios.",
            quiz: [
              { q: "What two vulnerabilities were chained together in the Ivanti exploit?", opts: ["SQL injection and XSS", "Authentication bypass (CVE-2023-46805) and command injection (CVE-2024-21887)", "Buffer overflow and race condition", "DNS poisoning and ARP spoofing"], ans: 1, exp: "The attack chain combined an auth bypass with a command injection to achieve unauthenticated remote code execution." },
              { q: "How many VPN appliances were compromised globally during mass exploitation?", opts: ["50", "500", "2,100+", "50,000"], ans: 2, exp: "Over 2,100 Ivanti Connect Secure appliances were compromised within days of mass exploitation beginning." },
              { q: "What unprecedented action did CISA take regarding Ivanti devices?", opts: ["Recommended updating antivirus", "Ordered all federal agencies to physically disconnect and rebuild their Ivanti VPN devices", "Sent a warning email", "Nothing"], ans: 1, exp: "CISA Emergency Directive 24-01 ordered immediate disconnection — an extremely rare directive for a specific product." },
              { q: "Why was factory resetting compromised Ivanti devices insufficient?", opts: ["Factory reset takes too long", "Sophisticated backdoors could persist even through factory resets", "Factory reset deletes all users", "It wasn't insufficient"], ans: 1, exp: "CISA warned that advanced persistence mechanisms could survive factory resets, requiring full hardware replacement." },
              { q: "Which nation-state group was attributed with the initial zero-day exploitation?", opts: ["Russian FSB", "North Korean Lazarus", "Chinese state-sponsored group UTA0178", "Iranian APT33"], ans: 2, exp: "Volexity and Mandiant attributed the initial exploitation to Chinese state-sponsored threat actor UTA0178." }
            ]
          },
          {
            title: "The 2024 Dell API Scraping Breach — 49 Million Customer Records",
            category: "Crypto & Social Engineering",
            date: "May 2024 (Published by Dell Technologies & BleepingComputer)",
            loss: "49 Million Customer Records Including Names, Addresses & Order History Exposed",
            summary: "A threat actor scraped 49 million Dell customer records by registering fake partner accounts and exploiting an unauthenticated Dell partner portal API. The attacker sent nearly 5,000 API requests per minute for almost 3 weeks without being rate-limited or detected.",
            setup: "Dell's partner program portal allowed registered partners to look up customer purchase information via an API. The attacker registered multiple fake business partner accounts under fictitious company names. The API endpoint had no proper authentication validation, no rate limiting, and no anomaly detection.",
            trap: "The attacker wrote automated scripts that systematically queried Dell's partner API with sequential 7-digit service tags, extracting full customer purchase records including names, physical addresses, Dell hardware models, order numbers, and warranty details. Over 3 weeks, nearly 49 million records were extracted before Dell noticed.",
            timeline: [
              "March 2024: Threat actor registers multiple fake partner accounts on Dell's partner portal.",
              "March–April 2024: Automated scripts send ~5,000 API requests per minute, scraping customer records by sequential service tag.",
              "April 2024: 49 million customer records exfiltrated over approximately 3 weeks.",
              "April 28, 2024: Stolen data offered for sale on Breach Forums by threat actor 'Menelik'.",
              "May 9, 2024: Dell emails 49 million customers notifying them of the data breach."
            ],
            redFlags: [
              "Partner portal API with no rate limiting allowing thousands of requests per minute",
              "No validation of partner account legitimacy during registration",
              "Sequential enumeration of service tags not flagged as anomalous behavior",
              "Three weeks of continuous high-volume API scraping without detection"
            ],
            psychologicalBias: "API Security Blind Spot — Organizations focus security on web front-ends while leaving backend APIs unprotected, assuming partner portals are low-risk.",
            prevention: "Implement strict API rate limiting and anomaly detection, validate partner account registrations with business verification, use randomized non-sequential identifiers instead of predictable service tags, and deploy API gateways with behavioral monitoring.",
            quiz: [
              { q: "How many Dell customer records were scraped in this breach?", opts: ["1,000", "100,000", "49 million", "1 billion"], ans: 2, exp: "The attacker scraped approximately 49 million customer records over a 3-week period." },
              { q: "How did the attacker gain access to Dell's partner API?", opts: ["SQL injection", "By registering fake business partner accounts with no verification", "Phishing Dell employees", "Brute-forcing admin passwords"], ans: 1, exp: "The attacker simply registered fictitious partner accounts — Dell did not verify business legitimacy." },
              { q: "Why wasn't the scraping detected for 3 weeks?", opts: ["Dell's security team was on vacation", "The API had no rate limiting, anomaly detection, or behavioral monitoring", "The scraping only happened at night", "The firewall was turned off"], ans: 1, exp: "The complete absence of API rate limiting and behavioral analysis allowed sustained high-volume scraping to go unnoticed." },
              { q: "What made Dell's service tags easy to enumerate?", opts: ["They were published online", "They were sequential 7-digit numbers that could be guessed and iterated", "They were all the same", "They were only 2 characters long"], ans: 1, exp: "Predictable, sequential identifiers allow attackers to systematically enumerate all records without needing any insider knowledge." },
              { q: "What is the primary defense against API scraping attacks?", opts: ["Stronger WiFi passwords", "API rate limiting, anomaly detection, and behavioral monitoring at the API gateway", "Changing the website color scheme", "Adding more servers"], ans: 1, exp: "API gateways with rate limiting and behavioral analytics can detect and block anomalous enumeration patterns in real-time." }
            ]
          },
          {
            title: "The 2025 Bybit $1.5 Billion Lazarus Cryptocurrency Heist",
            category: "Crypto & Social Engineering",
            date: "February 2025 (Published by FBI, Bybit & Blockchain Analysts)",
            loss: "$1.5 Billion in Ethereum Stolen — Largest Single Crypto Theft in History",
            summary: "North Korean state-sponsored Lazarus Group executed the largest single cryptocurrency heist in history, stealing $1.5 billion in Ethereum from the Bybit exchange by compromising the multi-signature cold wallet approval workflow through a supply chain attack on the Safe{Wallet} infrastructure.",
            setup: "Bybit used Safe{Wallet} (formerly Gnosis Safe) for multi-signature cold wallet management. Lazarus Group compromised the development environment of a Safe{Wallet} developer, injecting malicious JavaScript into the Safe{Wallet} UI that was served specifically to Bybit's wallet signers during transaction approval.",
            trap: "When Bybit's authorized signers initiated a routine cold-to-warm wallet transfer, the compromised Safe{Wallet} UI displayed the correct transaction details on screen but actually submitted a different transaction to the blockchain — one that changed the wallet's smart contract logic to transfer ownership to Lazarus-controlled addresses. Multiple signers approved what appeared to be a legitimate transfer.",
            timeline: [
              "Early Feb 2025: Lazarus compromises a Safe{Wallet} developer's machine and injects malicious code into the transaction UI.",
              "Feb 21, 2025: Bybit initiates routine ETH cold-to-warm wallet transfer; compromised UI shows correct details while submitting a different transaction.",
              "Feb 21, 2025: Multiple Bybit signers approve the displayed transaction, unknowingly authorizing wallet ownership transfer.",
              "Feb 21, 2025: $1.5B in ETH transferred to Lazarus-controlled addresses; Bybit detects unauthorized movement.",
              "Feb 22–March 2025: FBI attributes the attack to Lazarus Group; laundering through mixers and cross-chain bridges begins."
            ],
            redFlags: [
              "Supply chain compromise of a third-party wallet management UI",
              "UI displaying different transaction details than what was actually submitted on-chain",
              "No independent on-chain verification of transaction parameters before multi-sig approval",
              "Single developer compromise enabling manipulation of production transaction signing interface"
            ],
            psychologicalBias: "UI Trust & Verification Fatigue — Signers trusted the visual display of the wallet interface without independently verifying the actual on-chain transaction payload.",
            prevention: "Implement independent on-chain transaction verification (comparing displayed parameters against actual blockchain data), require air-gapped signing devices, enforce multi-party verification from different devices/interfaces, and audit supply chain security of all third-party wallet infrastructure.",
            quiz: [
              { q: "How much cryptocurrency was stolen in the Bybit heist?", opts: ["$1 million", "$100 million", "$1.5 billion", "$10 billion"], ans: 2, exp: "The Lazarus Group stole $1.5 billion in Ethereum, making it the largest single crypto theft in history." },
              { q: "How did Lazarus compromise the transaction signing process?", opts: ["By brute-forcing wallet passwords", "By injecting malicious code into Safe{Wallet}'s UI that showed correct details but submitted a different transaction", "By stealing private keys from a USB drive", "By bribing Bybit employees"], ans: 1, exp: "The compromised UI displayed legitimate-looking transaction details while actually submitting ownership-transfer transactions." },
              { q: "Which nation-state group was attributed with this attack?", opts: ["Russian GRU", "Chinese APT10", "North Korean Lazarus Group", "Iranian APT33"], ans: 2, exp: "The FBI attributed the attack to North Korea's Lazarus Group, which funds weapons programs through cryptocurrency theft." },
              { q: "What is the core weakness that multi-signature wallets should address?", opts: ["Having too many signers", "Signers trusting the UI display without independently verifying the actual on-chain transaction payload", "Using Ethereum instead of Bitcoin", "Having cold wallets"], ans: 1, exp: "Independent verification of what's actually being submitted on-chain — not just what the UI shows — is critical for multi-sig security." },
              { q: "What supply chain component was compromised to enable the attack?", opts: ["The blockchain itself", "The Safe{Wallet} developer environment and transaction signing UI", "Bybit's mobile app", "The Ethereum network"], ans: 1, exp: "Lazarus compromised a Safe{Wallet} developer's machine to inject malicious code into the production wallet UI." }
            ]
          }
        ];

        // Filter out any fallbacks that match already-displayed titles
        const availableFallbacks = fallbacks.filter(fb => 
          !existingTitles.some(t => t.toLowerCase().includes(fb.title.toLowerCase().split(' ').slice(1, 4).join(' ')))
        );
        
        const pool = availableFallbacks.length > 0 ? availableFallbacks : fallbacks;
        const randomIndex = Math.floor(Math.random() * pool.length);
        newCase = JSON.parse(JSON.stringify(pool[randomIndex]));
        usedEngine = 'ScamShield 2026 Neural Threat Pool (Built-in Fallback)';
      }

      // Normalize category to match filter system
      const validCategories = ['Deepfake & AI Fraud', 'Crypto & Social Engineering', 'SMS & Phishing', 'Workplace & Shadow IT'];
      if (newCase.category && !validCategories.includes(newCase.category)) {
        // Map extended categories back to the 4 main filters
        const categoryMap = {
          'Ransomware & Extortion': 'Workplace & Shadow IT',
          'Supply Chain Attack': 'Workplace & Shadow IT',
          'Cloud Security & Identity': 'Crypto & Social Engineering',
          'Insider Threat': 'Workplace & Shadow IT',
          'IoT & Critical Infrastructure': 'Workplace & Shadow IT',
          'Healthcare & Medical Data Breach': 'SMS & Phishing',
          'Financial Services Fraud': 'Crypto & Social Engineering',
          'Government & Military Espionage': 'Deepfake & AI Fraud'
        };
        newCase.category = categoryMap[newCase.category] || validCategories[Math.floor(Math.random() * validCategories.length)];
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
    <div style={{ padding: '32px', minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', fontFamily: "'Inter', sans-serif" }}>
      {/* Header Banner */}
      <div style={{
        background: 'var(--bg3)',
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

          <h1 style={{ fontSize: '36px', fontWeight: '800', margin: '0 0 12px 0', paddingBottom: '4px', lineHeight: '1.3', background: 'linear-gradient(90deg, var(--text-h) 0%, var(--text2) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Real-World Cyber Case Studies
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text3)', lineHeight: '1.6', margin: 0 }}>
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
              background: filter === cat ? 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)' : 'var(--bg3)',
              border: filter === cat ? 'none' : '1px solid var(--border)',
              color: filter === cat ? '#fff' : 'var(--text2)',
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
              background: 'var(--card, var(--bg3))',
              border: '1px solid var(--border)',
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

              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-h)', margin: '0 0 12px 0', lineHeight: '1.4' }}>
                {cs.title}
              </h3>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '4px 10px', borderRadius: '8px', color: '#fca5a5', fontSize: '12px', fontWeight: '600', marginBottom: '16px' }}>
                <span>💥 Estimated Loss:</span>
                <span style={{ fontWeight: '800' }}>{cs.loss}</span>
              </div>

              <p style={{ color: 'var(--text3)', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                {cs.summary}
              </p>
            </div>

            <button
              onClick={() => setSelectedCase(cs)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                background: 'var(--social-bg)',
                border: '1px solid var(--border)',
                color: 'var(--text-h)',
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
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--social-bg)'}
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
            background: 'var(--bg)',
            border: '1px solid var(--border)',
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
                top: '16px',
                right: '16px',
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000
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

            <h2 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-h)', margin: '0 0 20px 0', lineHeight: '1.3' }}>
              {selectedCase.title}
            </h2>

            {/* Psychological Bias Banner */}
            <div style={{ background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)', borderLeft: '4px solid #a855f7', padding: '16px 20px', borderRadius: '8px', marginBottom: '24px' }}>
              <h4 style={{ margin: '0 0 6px 0', color: 'var(--purple)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🧠 Cognitive Bias Weaponized:</span>
              </h4>
              <p style={{ margin: 0, color: 'var(--text)', fontSize: '15px', fontWeight: '600', lineHeight: '1.5' }}>
                {selectedCase.psychologicalBias}
              </p>
            </div>

            {/* Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h4 style={{ fontSize: '17px', color: 'var(--text2)', margin: '0 0 8px 0', borderBottom: '1px solid var(--border)', paddingBottom: '6px' }}>
                  🎯 The Setup & Trust Building
                </h4>
                <p style={{ color: 'var(--text3)', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  {selectedCase.setup}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '17px', color: 'var(--text2)', margin: '0 0 8px 0', borderBottom: '1px solid var(--border)', paddingBottom: '6px' }}>
                  🪤 The Trap Closes
                </h4>
                <p style={{ color: 'var(--text3)', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  {selectedCase.trap}
                </p>
              </div>

              {selectedCase.timeline && (
                <div>
                  <h4 style={{ fontSize: '17px', color: '#d8b4fe', margin: '0 0 10px 0', borderBottom: '1px solid rgba(168, 85, 247, 0.3)', paddingBottom: '6px' }}>
                    ⏱️ Attack Timeline Breakdown
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text2)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                      <span style={{ color: 'var(--text)' }}>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '16px', padding: '18px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#4ade80', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>🛡️ ScamShield Golden Rule of Prevention</span>
                </h4>
                <p style={{ margin: 0, color: 'var(--text)', fontSize: '15px', lineHeight: '1.6', fontWeight: '500' }}>
                  {selectedCase.prevention}
                </p>
              </div>

              {/* Interactive Notes Section */}
              <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px', marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h4 style={{ margin: 0, color: 'var(--text-h)', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>📝 My Investigation Notes</span>
                    <span style={{ fontSize: '11px', color: 'var(--text3)', fontWeight: 'normal' }}>(Saved in your browser)</span>
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
                    background: 'var(--bg4, var(--bg3))',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
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
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
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
                  background: 'var(--social-bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-h)',
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
            background: 'var(--bg)',
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
                  <span style={{ fontSize: '13px', color: 'var(--text2)', fontWeight: '600' }}>
                    Current Score: {score}
                  </span>
                </div>

                <h3 style={{ fontSize: '20px', color: 'var(--text-h)', margin: '0 0 24px 0', lineHeight: '1.4' }}>
                  {activeQuiz[currentQIdx].q}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  {activeQuiz[currentQIdx].opts.map((opt, idx) => {
                    const isSelected = selectedOpt === idx;
                    const isCorrect = idx === activeQuiz[currentQIdx].ans;
                    let bg = 'var(--bg3)';
                    let border = '1px solid var(--border)';
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
                          color: 'var(--text)',
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
                  <div style={{ background: 'var(--social-bg)', padding: '16px', borderRadius: '12px', marginBottom: '20px', borderLeft: selectedOpt === activeQuiz[currentQIdx].ans ? '4px solid #22c55e' : '4px solid #ef4444' }}>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text2)', lineHeight: '1.5' }}>
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
                    style={{ padding: '10px 18px', borderRadius: '10px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text3)', cursor: 'pointer' }}
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
                <h2 style={{ fontSize: '28px', color: 'var(--text-h)', margin: '0 0 12px 0' }}>
                  Quiz Completed!
                </h2>
                <p style={{ fontSize: '18px', color: 'var(--text2)', margin: '0 0 24px 0' }}>
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
