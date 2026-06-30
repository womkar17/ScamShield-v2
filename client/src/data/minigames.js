// ============================================================
// ScamShield Arcade – 50 Hand-Crafted Minigames
// Each game has a unique title, rich data, and a ThreatAnalysis.
// Game types: swipe, spot-flag, password, quiz, chat, audio, visual
// ============================================================

export const MINIGAMES = [

  // ──────────── SWIPE GAMES (1-8) ────────────
  {
    id: 'swipe_1', title: 'Phishing Frenzy', description: 'Swipe URLs left for SCAM, right for SAFE. Trust your instincts!',
    type: 'swipe', difficulty: 'Easy', thumbnail: '🎣', xpReward: 40,
    data: {
      items: [
        { content: 'https://paypal-secure-login.info/verify', isScam: true, explanation: 'paypal-secure-login.info is NOT paypal.com. Scammers use lookalike domains.' },
        { content: 'https://accounts.google.com/signin', isScam: false, explanation: 'This is the official Google sign-in page.' },
        { content: 'https://amaz0n-refund.com/claim', isScam: true, explanation: 'The zero replacing the "o" is a classic homoglyph attack.' },
        { content: 'https://github.com/settings/security', isScam: false, explanation: 'Legitimate GitHub settings page.' },
        { content: 'From: support@netflix-billing.co', isScam: true, explanation: 'Netflix uses netflix.com, not netflix-billing.co.' }
      ],
      threatAnalysis: { psychology: 'Urgency & Brand Trust', payload: 'Login credentials and financial data', defense: 'Always check the full domain name. Hover before you click.' }
    }
  },
  {
    id: 'swipe_2', title: 'Inbox Inspector', description: 'Are these emails legit or phishing attempts?',
    type: 'swipe', difficulty: 'Medium', thumbnail: '📧', xpReward: 50,
    data: {
      items: [
        { content: 'From: noreply@apple.com — Your Apple ID was used on a new device', isScam: false, explanation: 'Legitimate Apple notification from @apple.com.' },
        { content: 'From: security-alert@microsoft-verify.net — Unusual sign-in activity', isScam: true, explanation: 'microsoft-verify.net is not microsoft.com.' },
        { content: 'From: hr@yourcompany.com — Updated PTO Policy attached', isScam: false, explanation: 'Internal company email from a known domain.' },
        { content: 'From: irs-refund@tax-gov.us — You are owed a $3,200 refund', isScam: true, explanation: 'The IRS never initiates contact via email about refunds.' },
        { content: 'From: delivery@fedex.com — Your package is on the way', isScam: false, explanation: 'Standard FedEx tracking notification.' },
        { content: 'From: ceo@company-urgent.biz — Wire $50,000 immediately', isScam: true, explanation: 'CEO fraud / Business Email Compromise. The domain is fake.' }
      ],
      threatAnalysis: { psychology: 'Authority Impersonation & Urgency', payload: 'Corporate finances and credentials', defense: 'Verify sender domains character-by-character. When in doubt, call the sender directly.' }
    }
  },
  {
    id: 'swipe_3', title: 'SMS Sorting', description: 'Text messages: real alerts or smishing?',
    type: 'swipe', difficulty: 'Hard', thumbnail: '💬', xpReward: 60,
    data: {
      items: [
        { content: 'Your bank account has been locked. Click here to verify: bit.ly/3xK9mQ', isScam: true, explanation: 'Banks never send shortened URLs via SMS.' },
        { content: 'Your OTP for SBI Net Banking is 482913. Valid for 5 mins. Do not share.', isScam: false, explanation: 'Standard OTP format from a known bank.' },
        { content: 'Congratulations! You won ₹50,00,000 in the KBC lottery! Send ₹5,000 processing fee.', isScam: true, explanation: 'Advance-fee fraud. You cannot win a lottery you never entered.' },
        { content: 'Reminder: Your dentist appointment is tomorrow at 10:00 AM.', isScam: false, explanation: 'Standard appointment reminder.' },
        { content: 'URGENT: Your Aadhaar card has been suspended. Call 9876543210 immediately.', isScam: true, explanation: 'UIDAI never suspends Aadhaar cards via SMS.' }
      ],
      threatAnalysis: { psychology: 'Fear of Loss & Greed', payload: 'Banking credentials and personal identity', defense: 'Never click links in unexpected SMS messages. Go directly to the official app or website.' }
    }
  },
  {
    id: 'swipe_4', title: 'Link or Lie', description: 'Can you tell real download links from malware traps?',
    type: 'swipe', difficulty: 'Hard', thumbnail: '🔗', xpReward: 60,
    data: {
      items: [
        { content: 'https://download.mozilla.org/firefox-setup.exe', isScam: false, explanation: 'Official Mozilla download server.' },
        { content: 'https://free-photoshop-crack.ru/adobe_setup.exe', isScam: true, explanation: 'Pirated software sites are top malware vectors.' },
        { content: 'https://code.visualstudio.com/download', isScam: false, explanation: 'Official VS Code download page.' },
        { content: 'https://whatsapp-plus-mod.apk.download', isScam: true, explanation: 'Modded app APKs often contain spyware.' },
        { content: 'https://zoom.us/download', isScam: false, explanation: 'Official Zoom download page.' }
      ],
      threatAnalysis: { psychology: 'Desire for free premium software', payload: 'Full device compromise via malware', defense: 'Only download software from official websites. If it sounds too good to be true, it is.' }
    }
  },
  {
    id: 'swipe_5', title: 'QR Code Roulette', description: 'Would you scan these QR codes?',
    type: 'swipe', difficulty: 'Medium', thumbnail: '📱', xpReward: 50,
    data: {
      items: [
        { content: 'QR code on a restaurant table for the menu', isScam: false, explanation: 'Common and generally safe practice.' },
        { content: 'QR code stuck over a parking meter payment sign', isScam: true, explanation: 'Quishing! Scammers paste fake QR codes over real ones in public spaces.' },
        { content: 'QR code in an email saying "Scan to verify your identity"', isScam: true, explanation: 'No legitimate service asks you to scan a QR code from an email for identity verification.' },
        { content: 'QR code on a concert ticket from Ticketmaster', isScam: false, explanation: 'Standard digital ticket format.' },
        { content: 'Random QR code found taped to a bus stop', isScam: true, explanation: 'Never scan QR codes from unknown sources in public.' }
      ],
      threatAnalysis: { psychology: 'Curiosity & Convenience', payload: 'Redirecting to phishing sites or malware downloads', defense: 'Preview the URL a QR code leads to before visiting. Never scan codes stuck over other codes.' }
    }
  },
  {
    id: 'swipe_6', title: 'Social Media Scam Scan', description: 'Are these social media messages safe?',
    type: 'swipe', difficulty: 'Easy', thumbnail: '📲', xpReward: 40,
    data: {
      items: [
        { content: 'Instagram DM: "Hey! Check out this photo of you 😂" [suspicious link]', isScam: true, explanation: 'Classic social media phishing. The link leads to a credential harvester.' },
        { content: 'LinkedIn message from a recruiter at Google with a google.com email', isScam: false, explanation: 'Legitimate recruiter outreach with verifiable domain.' },
        { content: 'Facebook message: "OMG is this you in this video??" [link]', isScam: true, explanation: 'Fear/curiosity-based phishing. The link installs malware.' },
        { content: 'Twitter DM from a verified brand account about a partnership', isScam: false, explanation: 'Verified accounts with consistent history are generally safe.' }
      ],
      threatAnalysis: { psychology: 'Curiosity & Social Proof', payload: 'Account takeover and identity theft', defense: 'Never click links in unexpected DMs, even from friends. Their accounts may be compromised.' }
    }
  },
  {
    id: 'swipe_7', title: 'Crypto Con Check', description: 'Crypto offers: legit opportunity or rug pull?',
    type: 'swipe', difficulty: 'Hard', thumbnail: '🪙', xpReward: 70,
    data: {
      items: [
        { content: 'Tweet: "Send me 1 BTC and I\'ll send back 2! — @elonmusk_official"', isScam: true, explanation: 'Classic crypto doubling scam. Nobody gives away free money.' },
        { content: 'Coinbase email about scheduled maintenance on their platform', isScam: false, explanation: 'Standard maintenance notification from a legit exchange.' },
        { content: 'DM: "Invest in $MOONTOKEN — guaranteed 100x returns in 24 hours"', isScam: true, explanation: 'Guaranteed returns in crypto do not exist. This is a pump-and-dump.' },
        { content: 'Email from Binance about enabling 2FA on your account', isScam: false, explanation: 'Legitimate security recommendation.' },
        { content: 'WhatsApp group invite to an "exclusive crypto trading signals" channel', isScam: true, explanation: 'Signal groups are used to manipulate prices. You are the exit liquidity.' }
      ],
      threatAnalysis: { psychology: 'Greed & FOMO (Fear Of Missing Out)', payload: 'Cryptocurrency wallet funds', defense: 'If someone promises guaranteed returns, they are lying. Never share wallet keys or seed phrases.' }
    }
  },
  {
    id: 'swipe_8', title: 'Job Offer Judgment', description: 'Dream job or employment scam?',
    type: 'swipe', difficulty: 'Medium', thumbnail: '💼', xpReward: 50,
    data: {
      items: [
        { content: 'Email: "Work from home! Earn $5000/week reshipping packages"', isScam: true, explanation: 'Reshipping scams use you as a mule for stolen goods.' },
        { content: 'LinkedIn job posting from Microsoft with an @microsoft.com contact', isScam: false, explanation: 'Verifiable posting from a legitimate company domain.' },
        { content: 'Telegram: "Data entry job. Pay $200/day. Send ₹500 registration fee."', isScam: true, explanation: 'Legitimate employers never charge you a registration fee.' },
        { content: 'Email from Indeed about a job application you submitted', isScam: false, explanation: 'Standard job application update.' },
        { content: 'WhatsApp: "Part-time job reviewing products on Amazon. Easy money!"', isScam: true, explanation: 'Fake review jobs are fronts for advance-fee fraud.' }
      ],
      threatAnalysis: { psychology: 'Financial desperation & Aspiration', payload: 'Personal documents (ID, bank details) and upfront fees', defense: 'Real jobs never ask you to pay. Research the company independently before sharing any info.' }
    }
  },

  // ──────────── SPOT-THE-FLAG GAMES (9-16) ────────────
  {
    id: 'flag_1', title: 'Fake Bank Email', description: 'Find all the red flags in this "bank" email.',
    type: 'spot-flag', difficulty: 'Easy', thumbnail: '🏦', xpReward: 40,
    data: {
      scenario: 'SBI Account Alert',
      content: '<div style="padding:20px;font-family:Arial;background:#fff;color:#222;border-radius:8px"><div style="background:#0033a0;padding:15px;color:white;border-radius:8px 8px 0 0"><h2>State Bank of India</h2></div><p>Dear Valued Custmer,</p><p>We have detected <b>suspicious activty</b> on your account. Your account will be <b style="color:red">PERMANENTLY BLOCKED</b> within 24 hours unless you verify your identity immediately.</p><p>Click here to verify: <a style="color:#0033a0">http://sbi-secure-verify.co.in/login</a></p><p>If you do not act now, you will lose access to all funds.</p><p>Regards,<br>SBI Securtiy Team</p></div>',
      flags: [
        { id: 'f1', text: 'Custmer', hint: 'Spelling error: "Customer" is misspelled — a telltale sign of a phishing email.' },
        { id: 'f2', text: 'suspicious activty', hint: '"Activity" is misspelled. Legitimate banks have proofreaders.' },
        { id: 'f3', text: 'PERMANENTLY BLOCKED', hint: 'Extreme urgency language designed to make you panic and act without thinking.' },
        { id: 'f4', text: 'sbi-secure-verify.co.in', hint: 'This is NOT sbi.co.in — the real SBI domain. This is a phishing link.' },
        { id: 'f5', text: 'SBI Securtiy Team', hint: '"Security" is misspelled. Official emails do not have typos in department names.' }
      ],
      threatAnalysis: { psychology: 'Fear of financial loss combined with authority impersonation', payload: 'Net banking credentials, OTPs, and full account access', defense: 'Banks never threaten permanent account blocks via email. Always log in through the official app or website.' }
    }
  },
  {
    id: 'flag_2', title: 'Suspicious Invoice', description: 'Your CFO forwarded this invoice. Spot the fraud.',
    type: 'spot-flag', difficulty: 'Medium', thumbnail: '🧾', xpReward: 50,
    data: {
      scenario: 'Vendor Invoice',
      content: '<div style="padding:20px;font-family:Courier New;background:#fafafa;color:#222;border:1px solid #ccc;border-radius:8px"><h2>INVOICE #INV-2024-8817</h2><p><b>From:</b> Acme Supplies Ltd.</p><p><b>To:</b> Your Company</p><hr/><p>Services Rendered: IT Consulting — Q4 2024</p><p><b>Amount Due:</b> $47,500.00</p><p><b>Payment Method:</b> Wire transfer to NEW account</p><p><b>Bank:</b> Cayman Islands National Bank</p><p><b>Account:</b> 9912-3847-2231</p><p style="color:red;font-weight:bold">⚠ PAYMENT DUE WITHIN 24 HOURS — LATE FEE OF 25% APPLIES</p></div>',
      flags: [
        { id: 'f1', text: 'NEW account', hint: 'Sudden change in payment details is a classic Business Email Compromise (BEC) indicator.' },
        { id: 'f2', text: 'Cayman Islands National Bank', hint: 'Offshore bank for a domestic vendor? Highly suspicious.' },
        { id: 'f3', text: 'PAYMENT DUE WITHIN 24 HOURS', hint: 'Artificial urgency designed to bypass normal approval processes.' },
        { id: 'f4', text: 'LATE FEE OF 25%', hint: '25% late fee is outrageously high and designed to scare you into paying immediately.' }
      ],
      threatAnalysis: { psychology: 'Authority (CFO forwarded it) + Urgency (24-hour deadline)', payload: 'Direct financial theft via wire transfer', defense: 'Always verify payment changes via a phone call to the vendor using a known number — never the one on the invoice.' }
    }
  },
  {
    id: 'flag_3', title: 'Tech Support Popup', description: 'This popup appeared on your screen. Find the red flags.',
    type: 'spot-flag', difficulty: 'Easy', thumbnail: '🖥️', xpReward: 40,
    data: {
      scenario: 'Windows Security Alert',
      content: '<div style="padding:20px;font-family:Segoe UI;background:#1a1a2e;color:#e94560;border:3px solid #e94560;border-radius:8px;text-align:center"><h1>⚠️ WINDOWS DEFENDER — CRITICAL ALERT ⚠️</h1><p style="color:white;font-size:16px">Trojan Spyware detected on your PC!<br/>Your passwords, bank details, and photos are AT RISK.</p><p style="color:#ff0;font-size:20px;font-weight:bold">CALL MICROSOFT SUPPORT NOW: 1-800-555-0199</p><p style="color:#aaa">Do NOT close this window or your data will be deleted.</p><button style="background:#e94560;color:white;padding:15px 40px;font-size:18px;border:none;border-radius:8px;cursor:pointer">SCAN NOW</button></div>',
      flags: [
        { id: 'f1', text: 'CRITICAL ALERT', hint: 'Legitimate Windows Defender alerts appear in the system tray, not as browser popups.' },
        { id: 'f2', text: '1-800-555-0199', hint: 'Microsoft never displays phone numbers in security alerts.' },
        { id: 'f3', text: 'Do NOT close this window', hint: 'Scare tactic — closing the browser is EXACTLY what you should do.' },
        { id: 'f4', text: 'SCAN NOW', hint: 'This button will download malware or redirect to a scam site.' }
      ],
      threatAnalysis: { psychology: 'Panic and fear of data loss', payload: 'Remote access to your computer + payment for fake services', defense: 'Close the browser tab. Windows Defender alerts NEVER appear as web popups. Microsoft will never call you.' }
    }
  },
  {
    id: 'flag_4', title: 'Fake Delivery Notice', description: 'You got a delivery notification. Is it real?',
    type: 'spot-flag', difficulty: 'Medium', thumbnail: '📦', xpReward: 50,
    data: {
      scenario: 'Package Delivery Update',
      content: '<div style="padding:20px;font-family:Arial;background:#fff;color:#333;border-radius:8px"><div style="background:#ff6600;padding:12px;color:white;border-radius:8px 8px 0 0"><h3>📦 Amazon Delivery Update</h3></div><p>Your package could not be delivered due to an <b>incomplete address</b>.</p><p>Please update your address and pay a <b>redelivery fee of ₹49</b> to avoid return:</p><p><a style="color:blue">http://amazon-delivery-update.xyz/pay</a></p><p>Tracking ID: IND9283746512</p></div>',
      flags: [
        { id: 'f1', text: 'incomplete address', hint: 'If your address was incomplete, how did they know to email you?' },
        { id: 'f2', text: 'redelivery fee of ₹49', hint: 'Amazon does not charge redelivery fees.' },
        { id: 'f3', text: 'amazon-delivery-update.xyz', hint: 'Not amazon.in or amazon.com — this is a phishing domain.' }
      ],
      threatAnalysis: { psychology: 'Expectation (you might actually be waiting for a package)', payload: 'Credit/debit card details via fake payment page', defense: 'Check delivery status only through the official Amazon app or website. Never pay fees through third-party links.' }
    }
  },
  {
    id: 'flag_5', title: 'Romance Scam Profile', description: 'Is this dating profile real or a catfish?',
    type: 'spot-flag', difficulty: 'Hard', thumbnail: '💕', xpReward: 60,
    data: {
      scenario: 'Dating App Profile',
      content: '<div style="padding:20px;font-family:Arial;background:#fff;color:#333;border-radius:8px"><div style="text-align:center;padding:15px"><div style="width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,#ff6b6b,#feca57);margin:0 auto 15px;display:flex;align-items:center;justify-content:center;font-size:50px">👤</div><h2>Dr. James Williams, MD</h2><p style="color:#888">US Army Surgeon • Currently deployed in Syria</p></div><p>"Looking for someone special. I\'m a <b>widower</b> with one child. I make <b>$350,000/year</b> but money means nothing without love. I can\'t access my bank from here — could you help me with a small transfer? I\'ll pay you back double when I return."</p></div>',
      flags: [
        { id: 'f1', text: 'US Army Surgeon', hint: 'Military romance scams are the #1 type. They use deployment as an excuse for never meeting.' },
        { id: 'f2', text: 'widower', hint: 'Classic romance scam backstory designed to evoke sympathy.' },
        { id: 'f3', text: '$350,000/year', hint: 'Flaunting wealth to establish trust and make you think they\'re good for the money.' },
        { id: 'f4', text: 'help me with a small transfer', hint: 'THE red flag. Never send money to someone you\'ve never met in person.' },
        { id: 'f5', text: 'pay you back double', hint: 'Advance-fee fraud. The "double payment" will never come.' }
      ],
      threatAnalysis: { psychology: 'Loneliness, empathy, and emotional manipulation over weeks/months', payload: 'Direct financial theft — often life savings', defense: 'Never send money to someone you\'ve only met online. Reverse image search their photos. Insist on video calls.' }
    }
  },
  {
    id: 'flag_6', title: 'Phishing Login Page', description: 'This login page appeared after clicking a link. Spot the fakes.',
    type: 'spot-flag', difficulty: 'Medium', thumbnail: '🔐', xpReward: 50,
    data: {
      scenario: 'Gmail Login',
      content: '<div style="padding:30px;font-family:Arial;background:#fff;color:#333;border-radius:8px;max-width:400px;margin:0 auto"><div style="text-align:center"><h1 style="color:#4285f4;font-size:28px">G<span style="color:#ea4335">o</span><span style="color:#fbbc05">o</span><span style="color:#4285f4">g</span><span style="color:#34a853">l</span><span style="color:#ea4335">e</span></h1><p>Sign in to continue to Gmail</p></div><p style="font-size:10px;color:#999">URL: https://accounts.gooogle.com/signin</p><input style="width:100%;padding:12px;margin:8px 0;border:1px solid #ddd;border-radius:4px" placeholder="Email or phone"/><input type="password" style="width:100%;padding:12px;margin:8px 0;border:1px solid #ddd;border-radius:4px" placeholder="Password"/><p style="font-size:11px;color:#999">By signing in, you agree to share your password with our partners for verification.</p><button style="width:100%;padding:12px;background:#4285f4;color:white;border:none;border-radius:4px;cursor:pointer;font-size:16px">Sign In</button></div>',
      flags: [
        { id: 'f1', text: 'gooogle.com', hint: 'Three o\'s! The real domain is google.com with two o\'s. This is a typosquatting attack.' },
        { id: 'f2', text: 'share your password with our partners', hint: 'Google NEVER shares your password with partners. This is a credential harvester.' }
      ],
      threatAnalysis: { psychology: 'Familiarity — the page looks exactly like Google\'s real login', payload: 'Full Google account takeover (email, Drive, Photos, payments)', defense: 'Always check the URL bar before entering credentials. Bookmark important login pages.' }
    }
  },
  {
    id: 'flag_7', title: 'Fake App Review', description: 'Should you trust this app based on its store listing?',
    type: 'spot-flag', difficulty: 'Hard', thumbnail: '⭐', xpReward: 60,
    data: {
      scenario: 'Play Store App Listing',
      content: '<div style="padding:20px;font-family:Arial;background:#fff;color:#333;border-radius:8px"><h2>💰 QuickCash Loan Pro</h2><p style="color:#888">by FinTech Solutions LLC • ⭐⭐⭐⭐⭐ (4.9)</p><p><b>100% Instant Loan Approval!</b> No documents needed. Get up to ₹5,00,000 in just 2 minutes!</p><p style="font-size:12px;color:#999">Permissions requested: Contacts, SMS, Camera, Location, Phone, Storage, Call Logs</p><p>Reviews (all posted same day):</p><p style="color:#555">"Best app ever!" — User123<br/>"Got loan instantly!" — HappyUser<br/>"Amazing service!" — LuckyBorrower</p></div>',
      flags: [
        { id: 'f1', text: '100% Instant Loan Approval', hint: 'No legitimate lender approves 100% of applications. This is predatory lending.' },
        { id: 'f2', text: 'No documents needed', hint: 'Legitimate loans require KYC documents. No docs = illegal lending.' },
        { id: 'f3', text: 'Contacts, SMS, Camera, Location, Phone, Storage, Call Logs', hint: 'A loan app should NEVER need access to your contacts, SMS, or call logs. They will use this data to harass and blackmail you.' },
        { id: 'f4', text: 'all posted same day', hint: 'Fake reviews are often posted in bulk on the same day.' }
      ],
      threatAnalysis: { psychology: 'Financial desperation + false legitimacy through fake reviews', payload: 'Personal data (contacts, photos) used for blackmail and extortion', defense: 'Check RBI registration for any lending app. Never grant SMS/contacts permissions to financial apps.' }
    }
  },
  {
    id: 'flag_8', title: 'Charity Scam Email', description: 'This charity is asking for donations after a disaster. Is it real?',
    type: 'spot-flag', difficulty: 'Medium', thumbnail: '🎗️', xpReward: 50,
    data: {
      scenario: 'Disaster Relief Donation',
      content: '<div style="padding:20px;font-family:Georgia;background:#fff;color:#333;border-radius:8px"><h2>🌊 Flood Relief Foundation</h2><p>The recent floods have devastated millions. <b>Please donate generously.</b></p><p>We accept donations ONLY via:</p><ul><li>Crypto wallet: 1A2b3C4d5E...</li><li>Gift cards (Amazon, Google Play)</li></ul><p style="color:red;font-weight:bold">DONATE NOW — Every minute counts!</p><p style="font-size:11px;color:#999">Tax receipt not available. Registered in: Not specified.</p></div>',
      flags: [
        { id: 'f1', text: 'Crypto wallet', hint: 'Legitimate charities accept standard payment methods, not anonymous crypto.' },
        { id: 'f2', text: 'Gift cards', hint: 'NO real charity asks for gift cards as donations. This is a classic scam payment method.' },
        { id: 'f3', text: 'Tax receipt not available', hint: 'Real registered charities always provide tax-deductible receipts.' },
        { id: 'f4', text: 'Registered in: Not specified', hint: 'Legitimate NGOs prominently display their registration number.' }
      ],
      threatAnalysis: { psychology: 'Empathy exploitation during emotional crisis events', payload: 'Direct financial theft disguised as charitable giving', defense: 'Donate only to verified charities. Check registration on official government NGO portals.' }
    }
  },

  // ──────────── PASSWORD GAMES (17-22) ────────────
  {
    id: 'pass_1', title: 'Hack the Hacker', description: 'Create a password strong enough to survive a brute-force attack.',
    type: 'password', difficulty: 'Easy', thumbnail: '🔓', xpReward: 40,
    data: { threatAnalysis: { psychology: 'Convenience over Security — people reuse simple passwords', payload: 'Complete account takeover across all platforms using that password', defense: 'Use a password manager. Every account should have a unique, 16+ character password with mixed cases, numbers, and symbols.' } }
  },
  {
    id: 'pass_2', title: 'Fort Knox Mode', description: 'Build an unbreakable digital fortress.',
    type: 'password', difficulty: 'Medium', thumbnail: '🏰', xpReward: 50,
    data: { threatAnalysis: { psychology: 'Laziness — using the same password everywhere', payload: 'Credential stuffing attacks across banking, email, and social media', defense: 'Enable 2FA on every account. Use biometric authentication where available.' } }
  },
  {
    id: 'pass_3', title: 'Cipher Challenge', description: 'Can you create a password that takes centuries to crack?',
    type: 'password', difficulty: 'Hard', thumbnail: '🧬', xpReward: 60,
    data: { threatAnalysis: { psychology: 'Overconfidence in "clever" passwords like P@ssw0rd', payload: 'Dictionary attacks crack common substitutions in seconds', defense: 'Passphrases like "correct horse battery staple" are stronger than "P@$$w0rd". Length beats complexity.' } }
  },
  {
    id: 'pass_4', title: 'Brute Force Survivor', description: 'Your password vs. a GPU farm. Who wins?',
    type: 'password', difficulty: 'Hard', thumbnail: '⚡', xpReward: 70,
    data: { threatAnalysis: { psychology: 'Underestimating attacker resources', payload: 'Modern GPUs can test billions of passwords per second', defense: 'Use passwords of 20+ characters. Even simple long passphrases are exponentially harder to crack.' } }
  },
  {
    id: 'pass_5', title: 'Passphrase Pro', description: 'Turn a sentence into an unbreakable key.',
    type: 'password', difficulty: 'Medium', thumbnail: '📝', xpReward: 50,
    data: { threatAnalysis: { psychology: 'Thinking short complex passwords are better than long simple ones', payload: 'Short passwords fall to brute force regardless of complexity', defense: 'A 4-word random passphrase like "purple-elephant-dancing-raincoat" is both memorable AND secure.' } }
  },
  {
    id: 'pass_6', title: 'Rainbow Table Escape', description: 'Make a password that can\'t be found in any leaked database.',
    type: 'password', difficulty: 'Hard', thumbnail: '🌈', xpReward: 60,
    data: { threatAnalysis: { psychology: 'Using real words, birthdays, or pet names', payload: 'Rainbow table attacks match pre-computed hashes of common passwords', defense: 'Check haveibeenpwned.com to see if your passwords have been leaked. Never reuse compromised passwords.' } }
  },

  // ──────────── QUIZ GAMES (23-30) ────────────
  {
    id: 'quiz_1', title: 'Scam IQ Test', description: 'How much do you really know about online scams?',
    type: 'quiz', difficulty: 'Easy', thumbnail: '🧠', xpReward: 40,
    data: {
      question: 'You receive a call from "your bank" asking for your OTP to "block a suspicious transaction." What should you do?',
      options: [
        { text: 'Share the OTP to block the transaction quickly', isCorrect: false, explanation: 'NEVER share OTPs. Banks can block transactions without your OTP.' },
        { text: 'Hang up and call the bank\'s official number yourself', isCorrect: true, explanation: 'Correct! Always verify by calling the official number on your card or bank website.' },
        { text: 'Ask the caller to verify their identity first', isCorrect: false, explanation: 'Scammers have scripts ready for verification questions. Hang up instead.' }
      ],
      threatAnalysis: { psychology: 'Fear of unauthorized transactions creates panic', payload: 'OTP gives complete access to authorize fraudulent transactions', defense: 'Your bank will NEVER ask for your OTP, CVV, or full card number over the phone.' }
    }
  },
  {
    id: 'quiz_2', title: 'Digital Hygiene Quiz', description: 'Test your cybersecurity habits.',
    type: 'quiz', difficulty: 'Medium', thumbnail: '🧼', xpReward: 50,
    data: {
      question: 'Which of these is the STRONGEST password?',
      options: [
        { text: 'P@$$w0rd!2024', isCorrect: false, explanation: 'Common substitutions (@ for a, 0 for o) are well-known to cracking tools.' },
        { text: 'correct-horse-battery-staple', isCorrect: true, explanation: 'Long random passphrases are both strong AND memorable. Length beats complexity.' },
        { text: 'MyD0g$Name!sMax', isCorrect: false, explanation: 'Personal info (pet names) can be found on social media and used in targeted attacks.' }
      ],
      threatAnalysis: { psychology: 'The myth that symbols = security', payload: 'Account access via password cracking', defense: 'Length is king. A 4-word passphrase is stronger than an 8-character symbol soup.' }
    }
  },
  {
    id: 'quiz_3', title: 'Social Engineering 101', description: 'Can you resist a social engineer?',
    type: 'quiz', difficulty: 'Medium', thumbnail: '🎭', xpReward: 50,
    data: {
      question: 'A "delivery driver" calls and says they need your building gate code to deliver a package. What do you do?',
      options: [
        { text: 'Give the code — you ARE expecting a package', isCorrect: false, explanation: 'Tailgating! They could be anyone. Never give access codes to strangers.' },
        { text: 'Offer to come down and meet them at the gate', isCorrect: true, explanation: 'Correct! Verify in person without sharing access credentials.' },
        { text: 'Ask them to leave it at the reception', isCorrect: false, explanation: 'Better than giving the code, but doesn\'t verify their identity.' }
      ],
      threatAnalysis: { psychology: 'Helpfulness and social compliance — we don\'t want to be rude', payload: 'Physical access to a secured building', defense: 'It\'s okay to be cautious. Real delivery drivers have protocols for inaccessible addresses.' }
    }
  },
  {
    id: 'quiz_4', title: 'Deepfake Detective', description: 'Can you identify AI-generated content?',
    type: 'quiz', difficulty: 'Hard', thumbnail: '🤖', xpReward: 60,
    data: {
      question: 'Your "CEO" calls via video asking you to wire money urgently. The voice and face match perfectly. What\'s the best response?',
      options: [
        { text: 'Comply — you can see and hear them clearly', isCorrect: false, explanation: 'Deepfake video calls are now indistinguishable from real ones for short durations.' },
        { text: 'Ask them a personal question only the real CEO would know', isCorrect: false, explanation: 'Deepfake operators may have researched the CEO\'s personal life on social media.' },
        { text: 'Hang up and call the CEO back on their known phone number', isCorrect: true, explanation: 'Out-of-band verification is the ONLY reliable defense against deepfakes.' }
      ],
      threatAnalysis: { psychology: 'Visual confirmation bias — we trust what we see', payload: 'Corporate funds via wire fraud, often millions of dollars', defense: 'Deepfakes are nearly perfect now. Always verify identity through a separate, trusted communication channel.' }
    }
  },
  {
    id: 'quiz_5', title: 'Privacy Paradox', description: 'How well do you protect your personal data?',
    type: 'quiz', difficulty: 'Easy', thumbnail: '🔏', xpReward: 40,
    data: {
      question: 'A fun quiz app asks for access to your contacts, photos, and location. It\'s shared by a friend. What do you do?',
      options: [
        { text: 'Allow all permissions — it\'s just a quiz', isCorrect: false, explanation: 'Quiz apps are often data harvesters. Cambridge Analytica started as "just a quiz."' },
        { text: 'Deny all unnecessary permissions and take the quiz', isCorrect: true, explanation: 'Correct! A quiz needs ZERO device permissions. Deny everything it asks for.' },
        { text: 'Skip it entirely', isCorrect: false, explanation: 'Valid but not always practical. The key is understanding permissions.' }
      ],
      threatAnalysis: { psychology: 'Social proof (friend shared it) + "harmless fun" framing', payload: 'Contact lists, photos, and location data sold to data brokers', defense: 'Review app permissions before installing. If a flashlight app wants your contacts, it\'s spyware.' }
    }
  },
  {
    id: 'quiz_6', title: 'Wi-Fi Warrior', description: 'Are you safe on public Wi-Fi?',
    type: 'quiz', difficulty: 'Medium', thumbnail: '📡', xpReward: 50,
    data: {
      question: 'You\'re at a coffee shop and see two Wi-Fi networks: "CoffeeShop_WiFi" and "CoffeeShop_WiFi_FREE". Which is safer?',
      options: [
        { text: '"CoffeeShop_WiFi_FREE" — free is better', isCorrect: false, explanation: 'The "FREE" network is likely an Evil Twin attack — a rogue hotspot set up by a hacker.' },
        { text: 'Neither — ask the staff for the correct network name and password', isCorrect: true, explanation: 'Correct! Always confirm the exact network name with staff. Use a VPN on any public Wi-Fi.' },
        { text: '"CoffeeShop_WiFi" — it sounds more official', isCorrect: false, explanation: 'You can\'t tell which is legitimate by name alone. Either could be a rogue hotspot.' }
      ],
      threatAnalysis: { psychology: 'Convenience — we want free, fast internet', payload: 'All unencrypted traffic (passwords, emails, browsing) intercepted in real-time', defense: 'Always use a VPN on public Wi-Fi. Avoid accessing banking or sensitive sites on public networks.' }
    }
  },
  {
    id: 'quiz_7', title: 'Ransomware Rescue', description: 'Your files are encrypted. Now what?',
    type: 'quiz', difficulty: 'Hard', thumbnail: '💀', xpReward: 60,
    data: {
      question: 'Your computer displays: "All files encrypted. Pay 2 Bitcoin within 48 hours to decrypt." What should you do FIRST?',
      options: [
        { text: 'Pay the ransom to get your files back', isCorrect: false, explanation: 'Paying does NOT guarantee decryption. It funds criminal organizations and marks you as a repeat target.' },
        { text: 'Disconnect from the internet immediately and contact IT/cybersecurity professionals', isCorrect: true, explanation: 'Correct! Disconnecting prevents further spread. Professionals may have decryption tools available.' },
        { text: 'Try to delete the ransomware yourself', isCorrect: false, explanation: 'This could permanently destroy your encrypted files and make recovery impossible.' }
      ],
      threatAnalysis: { psychology: 'Panic over losing irreplaceable data + ticking countdown timer', payload: 'Financial extortion + permanent data loss', defense: 'Keep offline backups (3-2-1 rule). Keep your OS and software updated. Never open unexpected email attachments.' }
    }
  },
  {
    id: 'quiz_8', title: 'Two-Factor Tactics', description: 'Not all 2FA is created equal.',
    type: 'quiz', difficulty: 'Hard', thumbnail: '🔑', xpReward: 60,
    data: {
      question: 'Which form of Two-Factor Authentication (2FA) is the MOST secure?',
      options: [
        { text: 'SMS-based OTP codes', isCorrect: false, explanation: 'SMS can be intercepted via SIM swapping attacks. It\'s the weakest form of 2FA.' },
        { text: 'Hardware security keys (like YubiKey)', isCorrect: true, explanation: 'Correct! Hardware keys are phishing-resistant and cannot be remotely intercepted.' },
        { text: 'Email-based verification codes', isCorrect: false, explanation: 'If your email is compromised, so is your 2FA. Email is only as secure as your email account.' }
      ],
      threatAnalysis: { psychology: 'False sense of security from any type of 2FA', payload: 'Account takeover even with 2FA enabled', defense: 'Use hardware keys for critical accounts (email, banking). Authenticator apps are the next best option. Avoid SMS 2FA.' }
    }
  },

  // ──────────── CHAT SIMULATOR GAMES (31-38) ────────────
  {
    id: 'chat_1', title: 'The "Hi Mom" Scam', description: 'Your "child" texts you from a new number asking for money.',
    type: 'chat', difficulty: 'Medium', thumbnail: '👩‍👧', xpReward: 50,
    data: {
      messages: [
        { sender: 'scammer', text: 'Hi Mom! 👋 This is my new number. My phone fell in water and got damaged.' },
        { sender: 'scammer', text: 'I\'m in a bit of trouble. Can you help me with some money? I need to pay for something urgently.' },
        { sender: 'scammer', text: 'Can you transfer ₹15,000 to this account? I\'ll pay you back tomorrow when I get my new phone set up.' }
      ],
      choices: [
        { text: 'Oh no! Of course, sweetie. Sending the money now.', isCorrect: false, explanation: 'You just sent ₹15,000 to a scammer! They were not your child.' },
        { text: 'Let me call your old number first to make sure this is really you.', isCorrect: true, explanation: 'Excellent! Calling the known number is the best way to verify. The scammer will make excuses to prevent this.' },
        { text: 'What happened? Tell me more about what you need the money for.', isCorrect: false, explanation: 'Engaging further gives the scammer more time to manipulate you emotionally.' }
      ],
      threatAnalysis: { psychology: 'Parental instinct and love — the most powerful emotional manipulation', payload: 'Direct bank transfer of money', defense: 'Always call your family member on their KNOWN number. Establish a family code word for emergencies.' }
    }
  },
  {
    id: 'chat_2', title: 'Tech Support Trap', description: 'A "Microsoft agent" contacts you about a virus on your PC.',
    type: 'chat', difficulty: 'Easy', thumbnail: '🖥️', xpReward: 40,
    data: {
      messages: [
        { sender: 'scammer', text: 'Hello! This is John from Microsoft Technical Support. We have detected a critical virus on your Windows computer.' },
        { sender: 'scammer', text: 'Your computer is sending spam to other users. We need to fix this immediately or we will have to suspend your Windows license.' },
        { sender: 'scammer', text: 'Please download TeamViewer and give me remote access so I can remove the virus for you.' }
      ],
      choices: [
        { text: 'Oh no! Let me download TeamViewer right away.', isCorrect: false, explanation: 'NEVER give remote access! They will install malware, steal files, and demand payment.' },
        { text: 'I don\'t use Windows. I have a Mac.', isCorrect: false, explanation: 'Funny, but engaging with scammers wastes your time and can still lead to manipulation.' },
        { text: 'Microsoft doesn\'t make unsolicited support calls. I\'m hanging up.', isCorrect: true, explanation: 'Perfect response! Microsoft, Apple, and Google will NEVER cold-call you about viruses.' }
      ],
      threatAnalysis: { psychology: 'Authority (Microsoft) + Fear (virus/suspension)', payload: 'Remote access to your computer, banking credentials, payment for fake repairs', defense: 'Microsoft will NEVER call you unsolicited. If you need support, YOU initiate contact through official channels.' }
    }
  },
  {
    id: 'chat_3', title: 'The Customs Call', description: 'A "customs officer" says a parcel in your name contains contraband.',
    type: 'chat', difficulty: 'Hard', thumbnail: '🛃', xpReward: 60,
    data: {
      messages: [
        { sender: 'scammer', text: 'This is Inspector Sharma from Mumbai Customs. A parcel registered in your name from China contains 5 fake passports and 200g of drugs.' },
        { sender: 'scammer', text: 'An FIR has been filed against you. Your Aadhaar is being linked to this case. You will be arrested within 2 hours.' },
        { sender: 'scammer', text: 'To clear your name, you must transfer a security deposit of ₹2,00,000 to an RBI escrow account. I will send you the details.' }
      ],
      choices: [
        { text: 'Please don\'t arrest me! I\'ll transfer the money immediately.', isCorrect: false, explanation: 'Panic is exactly what they want. No legitimate officer demands money over the phone.' },
        { text: 'Can you give me a case number so I can verify with the police station?', isCorrect: false, explanation: 'They\'ll give you a fake case number. Don\'t engage further.' },
        { text: 'This is a scam. I\'m disconnecting and will report this number to cybercrime.gov.in.', isCorrect: true, explanation: 'Correct! Customs and police NEVER demand money over phone calls. File a report at cybercrime.gov.in.' }
      ],
      threatAnalysis: { psychology: 'Fear of arrest and legal consequences + government authority impersonation', payload: 'Large financial transfers and personal identity documents', defense: 'Government agencies do NOT demand money over phone calls. If arrested, you would be physically visited, not called.' }
    }
  },
  {
    id: 'chat_4', title: 'Lottery Winner', description: 'You\'ve "won" an international lottery you never entered.',
    type: 'chat', difficulty: 'Easy', thumbnail: '🎰', xpReward: 40,
    data: {
      messages: [
        { sender: 'scammer', text: 'CONGRATULATIONS! 🎉 Your email was randomly selected as the winner of the UK National Lottery! You have won £2,500,000!' },
        { sender: 'scammer', text: 'To claim your prize, we need a processing fee of $500 via Western Union to cover international transfer charges.' },
        { sender: 'scammer', text: 'Please also send a copy of your passport and bank account details for the wire transfer.' }
      ],
      choices: [
        { text: 'I can\'t believe it! Where do I send the $500?', isCorrect: false, explanation: 'You just fell for advance-fee fraud AND identity theft. You can\'t win a lottery you never entered.' },
        { text: 'You cannot win a lottery you never entered. This is a scam. Blocked.', isCorrect: true, explanation: 'Correct! This is textbook advance-fee fraud. Never pay to receive a "prize."' }
      ],
      threatAnalysis: { psychology: 'Greed and the dream of sudden wealth', payload: 'Processing fees + passport and bank details for identity theft', defense: 'You cannot win a lottery you didn\'t enter. Legitimate lotteries never ask for upfront fees.' }
    }
  },
  {
    id: 'chat_5', title: 'The Boss\'s Urgent Request', description: 'Your "CEO" needs gift cards ASAP.',
    type: 'chat', difficulty: 'Medium', thumbnail: '👔', xpReward: 50,
    data: {
      messages: [
        { sender: 'scammer', text: 'Hi, this is [CEO Name]. I\'m in a confidential meeting and can\'t take calls right now.' },
        { sender: 'scammer', text: 'I need you to purchase 5 Google Play gift cards of ₹10,000 each for a client incentive program. It\'s urgent.' },
        { sender: 'scammer', text: 'Buy them now and send me photos of the codes. I\'ll reimburse you from petty cash. Don\'t tell anyone — it\'s a surprise.' }
      ],
      choices: [
        { text: 'Sure thing, boss! On my way to the store now.', isCorrect: false, explanation: 'You would lose ₹50,000. CEOs don\'t buy gift cards through employees via text.' },
        { text: 'I\'d be happy to help, but let me verify this with HR/finance first.', isCorrect: true, explanation: 'Great instinct! Always verify unusual requests through official channels, even if it seems to come from the top.' },
        { text: 'Can I call you to confirm?', isCorrect: false, explanation: 'Better, but the scammer will say they "can\'t take calls." Verify through company channels instead.' }
      ],
      threatAnalysis: { psychology: 'Authority (CEO) + Secrecy ("don\'t tell anyone") + Urgency', payload: 'Gift card codes are untraceable and immediately redeemable', defense: 'No legitimate business transaction uses gift cards. Always verify through official company communication channels.' }
    }
  },
  {
    id: 'chat_6', title: 'The Investment Guru', description: 'A "financial advisor" promises guaranteed returns.',
    type: 'chat', difficulty: 'Hard', thumbnail: '📈', xpReward: 60,
    data: {
      messages: [
        { sender: 'scammer', text: 'Hi! I\'m a senior analyst at Goldman Sachs. I have insider information about a stock that will 5x in 3 days.' },
        { sender: 'scammer', text: 'I\'m sharing this with select individuals only. Invest ₹5,00,000 through my platform and I guarantee 500% returns.' },
        { sender: 'scammer', text: 'Our last 47 clients all made profits. Here are their testimonials. But you must invest before midnight tonight.' }
      ],
      choices: [
        { text: 'Wow, 500% returns? Sign me up!', isCorrect: false, explanation: 'There is no such thing as guaranteed returns. This is a classic Ponzi/advance-fee scheme.' },
        { text: 'Send me the SEBI registration number and I\'ll verify independently.', isCorrect: false, explanation: 'Good instinct, but they\'ll provide a fake number. The entire premise is fraudulent.' },
        { text: 'Guaranteed returns don\'t exist. Insider trading is illegal. Reported and blocked.', isCorrect: true, explanation: 'Correct! Guaranteed returns are the #1 red flag. Insider trading is a serious crime, and real analysts would never share it.' }
      ],
      threatAnalysis: { psychology: 'Greed + Authority (Goldman Sachs name-drop) + Scarcity (midnight deadline)', payload: 'Investment capital — often life savings', defense: 'Check SEBI registration of any advisor. Guaranteed returns = guaranteed scam. If it sounds too good to be true, it is.' }
    }
  },
  {
    id: 'chat_7', title: 'The Sextortion Threat', description: 'Someone claims to have compromising photos of you.',
    type: 'chat', difficulty: 'Hard', thumbnail: '😰', xpReward: 70,
    data: {
      messages: [
        { sender: 'scammer', text: 'I have access to your webcam and I\'ve recorded you visiting adult websites. I have video proof.' },
        { sender: 'scammer', text: 'I will send this video to all your contacts unless you pay me $2,000 in Bitcoin within 24 hours.' },
        { sender: 'scammer', text: 'Don\'t try to contact the police. I have your entire contact list and I WILL release the video.' }
      ],
      choices: [
        { text: 'Please don\'t! Here\'s the payment...', isCorrect: false, explanation: 'This is a mass-sent scam. They have NOTHING. Paying only marks you as a target for more extortion.' },
        { text: 'This is a known mass scam email. You have nothing. Blocked and reported to cybercrime.', isCorrect: true, explanation: 'Correct! These threats are sent to millions of people. They don\'t have any video. Report to cybercrime.gov.in.' }
      ],
      threatAnalysis: { psychology: 'Shame, fear, and social embarrassment', payload: 'Bitcoin payment + continued extortion (they never stop after one payment)', defense: 'This is a mass scam with NO actual footage. Cover your webcam with tape. Report to cybercrime.gov.in. Never pay.' }
    }
  },
  {
    id: 'chat_8', title: 'The Fake Recruiter', description: 'A recruiter on LinkedIn offers you a dream job — for a fee.',
    type: 'chat', difficulty: 'Medium', thumbnail: '💰', xpReward: 50,
    data: {
      messages: [
        { sender: 'scammer', text: 'Congratulations! Based on your LinkedIn profile, you\'ve been shortlisted for a Senior Developer role at Google. Salary: $250,000/year.' },
        { sender: 'scammer', text: 'To proceed, we need you to complete a background check. The fee is $150, refundable after your first paycheck.' },
        { sender: 'scammer', text: 'Please also share your PAN card, Aadhaar, and bank details for salary processing.' }
      ],
      choices: [
        { text: 'This sounds amazing! Let me pay the $150 and send my documents.', isCorrect: false, explanation: 'Legitimate companies NEVER charge candidates. You just shared identity documents with scammers.' },
        { text: 'Real recruiters don\'t charge fees. I\'ll verify directly with Google Careers.', isCorrect: true, explanation: 'Correct! Always verify job offers directly through the company\'s official careers page.' }
      ],
      threatAnalysis: { psychology: 'Career aspiration + flattery (you were "shortlisted")', payload: 'Identity documents + upfront fees', defense: 'Employers pay YOU, not the other way around. Never share PAN/Aadhaar before verifying the employer independently.' }
    }
  },

  // ──────────── AUDIO SCAM GAMES (39-44) ────────────
  {
    id: 'audio_1', title: 'IRS Impersonator', description: 'Answer the call. Can you spot the verbal red flag?',
    type: 'audio', difficulty: 'Easy', thumbnail: '📞', xpReward: 40,
    data: {
      script: [
        { text: 'This is an urgent message from the Internal Revenue Service.', isRedFlag: false },
        { text: 'Our records show that you owe $8,400 in back taxes from 2022.', isRedFlag: false },
        { text: 'A warrant has been issued for your arrest. To avoid arrest, you must make an immediate payment using Apple gift cards.', isRedFlag: true },
        { text: 'Please purchase $8,400 in Apple gift cards from your nearest store and read the codes to us over the phone.', isRedFlag: true }
      ],
      threatAnalysis: { psychology: 'Fear of arrest + government authority impersonation', payload: 'Gift card codes (untraceable, unreversible)', defense: 'The IRS NEVER calls to demand immediate payment, threatens arrest, or asks for gift cards. They communicate via mail first.' }
    }
  },
  {
    id: 'audio_2', title: 'Bank Fraud Alert', description: 'Your "bank" is calling about suspicious activity.',
    type: 'audio', difficulty: 'Medium', thumbnail: '🏧', xpReward: 50,
    data: {
      script: [
        { text: 'Hello, this is the fraud department from State Bank of India.', isRedFlag: false },
        { text: 'We have detected an unauthorized transaction of 47,000 rupees on your account.', isRedFlag: false },
        { text: 'To verify your identity and block this transaction, we need you to share the OTP that was just sent to your registered mobile number.', isRedFlag: true },
        { text: 'Please read the 6 digit code to me now. This is urgent.', isRedFlag: true }
      ],
      threatAnalysis: { psychology: 'Fear of financial loss + legitimate-sounding caller', payload: 'OTP gives full transaction authorization to the scammer', defense: 'Your bank will NEVER ask for your OTP over the phone. They can block transactions without it. Hang up and call the number on your debit card.' }
    }
  },
  {
    id: 'audio_3', title: 'Police Warrant Call', description: 'A "police officer" says there\'s a warrant against you.',
    type: 'audio', difficulty: 'Hard', thumbnail: '👮', xpReward: 60,
    data: {
      script: [
        { text: 'This is Sub-Inspector Patel from the Cyber Crime Division, Mumbai Police.', isRedFlag: false },
        { text: 'A money laundering case has been registered against your Aadhaar number. Your bank accounts will be frozen.', isRedFlag: false },
        { text: 'This case involves drug trafficking and NDPS Act violations.', isRedFlag: false },
        { text: 'To avoid arrest, you must immediately transfer your bank balance to this RBI safe account for verification. This is a mandatory government procedure.', isRedFlag: true }
      ],
      threatAnalysis: { psychology: 'Fear of criminal charges + urgency of arrest + government authority', payload: 'Entire bank balance transferred to scammer\'s account', defense: 'Police do NOT call to demand money transfers. There is no such thing as an "RBI safe account." Visit your nearest police station in person.' }
    }
  },
  {
    id: 'audio_4', title: 'Grandparent Scam', description: 'Your "grandchild" is in trouble and needs bail money.',
    type: 'audio', difficulty: 'Medium', thumbnail: '👴', xpReward: 50,
    data: {
      script: [
        { text: 'Grandma? Grandma, is that you? Please help me.', isRedFlag: false },
        { text: 'I was in a car accident and got arrested. I\'m at the police station. Please don\'t tell Mom and Dad.', isRedFlag: false },
        { text: 'My lawyer says I need 50,000 rupees for bail. Can you wire it right now? They said I can\'t make another call.', isRedFlag: true }
      ],
      threatAnalysis: { psychology: 'Love for family + urgency + secrecy ("don\'t tell anyone")', payload: 'Wire transfer or gift card payment for fake bail', defense: 'Establish a family code word. Call your grandchild\'s known phone number. Contact other family members to verify.' }
    }
  },
  {
    id: 'audio_5', title: 'Prize Notification', description: 'You\'ve won a luxury car! Just pay the taxes.',
    type: 'audio', difficulty: 'Easy', thumbnail: '🚗', xpReward: 40,
    data: {
      script: [
        { text: 'Congratulations! You have been selected as the winner of our annual customer appreciation draw.', isRedFlag: false },
        { text: 'You have won a brand new BMW 3 Series worth 55 lakh rupees.', isRedFlag: false },
        { text: 'To process the delivery, you need to pay a one-time tax and processing fee of 2 lakh rupees via bank transfer.', isRedFlag: true }
      ],
      threatAnalysis: { psychology: 'Excitement of winning + greed + artificial deadline', payload: 'Processing fee payment + personal details for identity theft', defense: 'You cannot win contests you never entered. Legitimate prizes never require upfront payment. Taxes are deducted, not pre-paid.' }
    }
  },
  {
    id: 'audio_6', title: 'Insurance Renewal Scam', description: 'Your "insurance company" says your policy has expired.',
    type: 'audio', difficulty: 'Medium', thumbnail: '📋', xpReward: 50,
    data: {
      script: [
        { text: 'Good afternoon. I am calling from LIC of India regarding your life insurance policy.', isRedFlag: false },
        { text: 'Your policy number ending in 4523 has lapsed. If you do not renew today, all your premiums will be forfeited.', isRedFlag: false },
        { text: 'I can process an immediate renewal. Please share your debit card number, expiry date, and the CVV number on the back.', isRedFlag: true }
      ],
      threatAnalysis: { psychology: 'Fear of losing years of premium payments', payload: 'Complete debit card details for unauthorized transactions', defense: 'Insurance companies never ask for CVV over the phone. Call your insurer directly using the number on your policy document.' }
    }
  },

  // ──────────── VISUAL/DEEPFAKE GAMES (45-50) ────────────
  {
    id: 'visual_1', title: 'Fake ID Detector', description: 'Examine this ID card. Is it genuine or forged?',
    type: 'visual', difficulty: 'Medium', thumbnail: '🪪', xpReward: 50,
    data: {
      content: '<div style="padding:20px;background:linear-gradient(135deg,#1a1a2e,#16213e);border-radius:12px;color:white;font-family:Arial;border:2px solid #e94560"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px"><h3 style="margin:0">GOVERNMENT OF INDIA</h3><div style="width:60px;height:60px;background:#e94560;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px">🏛️</div></div><div style="display:flex;gap:20px;margin-bottom:15px"><div style="width:100px;height:120px;background:#333;border-radius:4px;display:flex;align-items:center;justify-content:center">📷</div><div><p><b>Name:</b> Rajesh Kumar</p><p><b>DOB:</b> 15/13/1990</p><p><b>ID:</b> XXXX-XXXX-8842</p><p><b>Address:</b> 42 MG Road, Dlehi</p></div></div><p style="font-size:10px;color:#666">Holographic watermark: [NOT VISIBLE]</p></div>',
      flaws: ['15/13/1990 — Month 13 does not exist', 'Dlehi — Delhi is misspelled', 'Holographic watermark: NOT VISIBLE — real IDs always have visible security features'],
      isFake: true,
      threatAnalysis: { psychology: 'We tend to trust official-looking documents without scrutinizing details', payload: 'Fake IDs used for identity fraud, loan fraud, and impersonation', defense: 'Check dates, spellings, and security features. Real government IDs have holograms, microtext, and UV-reactive elements.' }
    }
  },
  {
    id: 'visual_2', title: 'Fake Payment Screenshot', description: 'A buyer sent this payment proof. Is it real?',
    type: 'visual', difficulty: 'Easy', thumbnail: '💸', xpReward: 40,
    data: {
      content: '<div style="padding:20px;background:#f0fdf4;border-radius:12px;font-family:Arial;color:#333;border:1px solid #86efac"><div style="text-align:center;margin-bottom:15px"><div style="font-size:48px">✅</div><h2 style="color:#16a34a;margin:5px 0">Payment Successful</h2></div><p><b>From:</b> Amit Sharma</p><p><b>To:</b> Your UPI ID</p><p><b>Amount:</b> ₹25,000.00</p><p><b>Date:</b> June 31, 2024</p><p><b>UPI Ref:</b> 847293651024</p><p style="font-size:10px;color:#999">Screenshot captured at 14:72:30</p></div>',
      flaws: ['June 31 — June only has 30 days', '14:72:30 — Invalid time (72 minutes?)', 'Always check your actual bank/UPI app for confirmation, never trust screenshots'],
      isFake: true,
      threatAnalysis: { psychology: 'Trust in visual "proof" + pressure to release goods/services', payload: 'Products or services handed over without actual payment received', defense: 'NEVER trust payment screenshots. Always verify in YOUR bank app or UPI app before releasing goods.' }
    }
  },
  {
    id: 'visual_3', title: 'Phishing Website Comparison', description: 'Compare these two login pages. Which details reveal the fake?',
    type: 'visual', difficulty: 'Hard', thumbnail: '🔍', xpReward: 60,
    data: {
      content: '<div style="display:flex;gap:20px;flex-wrap:wrap"><div style="flex:1;min-width:250px;padding:20px;background:#fff;border-radius:8px;border:2px solid #4285f4"><h3 style="color:#333">Page A (Real)</h3><p style="font-size:11px;color:#0a0;background:#e8f5e9;padding:4px 8px;border-radius:4px">🔒 https://accounts.google.com</p><div style="padding:15px;text-align:center"><p style="color:#333">Standard Google branding</p><p style="font-size:10px;color:#666">© 2024 Google LLC</p></div></div><div style="flex:1;min-width:250px;padding:20px;background:#fff;border-radius:8px;border:2px solid #e94560"><h3 style="color:#333">Page B (Fake)</h3><p style="font-size:11px;color:#333;background:#fff3cd;padding:4px 8px;border-radius:4px">⚠️ http://accounts.g00gle.com</p><div style="padding:15px;text-align:center"><p style="color:#333">Identical Google branding</p><p style="font-size:10px;color:#666">© 2024 Google LLC</p></div></div></div>',
      flaws: ['http:// instead of https:// — no SSL encryption', 'g00gle.com — zeros replacing the letter o (homoglyph attack)', 'The visual design is identical — you MUST check the URL'],
      isFake: true,
      threatAnalysis: { psychology: 'Visual similarity creates a false sense of security', payload: 'Login credentials for full Google account takeover', defense: 'Always check the URL bar before entering credentials. Look for https:// and the correct domain spelling. Bookmark important login pages.' }
    }
  },
  {
    id: 'visual_4', title: 'Deepfake Video Clues', description: 'This video call screenshot has AI artifacts. Can you find them?',
    type: 'visual', difficulty: 'Hard', thumbnail: '🎭', xpReward: 70,
    data: {
      content: '<div style="padding:20px;background:#000;border-radius:12px;color:white;font-family:Arial"><div style="position:relative;background:#1a1a1a;border-radius:8px;padding:30px;text-align:center"><h3>Video Call Screenshot</h3><div style="width:200px;height:200px;margin:15px auto;background:linear-gradient(135deg,#ffd5cd,#c9b1ff);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:60px;position:relative">👤<div style="position:absolute;bottom:5px;right:15px;width:12px;height:18px;background:#c9b1ff;border-radius:2px;transform:rotate(15deg)"></div></div><p>Notice: Earring on one side only. Slight blur where hair meets background. Skin tone is unnaturally smooth with no pores.</p><p style="color:#e94560;font-size:12px">Background objects have inconsistent lighting direction</p></div></div>',
      flaws: ['Asymmetric accessories (earring on one side)', 'Blur at hair-background boundary', 'Unnaturally smooth skin with no pores or texture', 'Inconsistent lighting/shadows in background'],
      isFake: true,
      threatAnalysis: { psychology: 'We trust video more than any other medium — seeing is believing', payload: 'Deepfake video calls used for CEO fraud, romance scams, and identity theft', defense: 'Look for: asymmetric features, edge blurring, unnatural skin, inconsistent lighting. Always verify via a separate communication channel.' }
    }
  },
  {
    id: 'visual_5', title: 'Fake E-commerce Listing', description: 'This product listing seems too good to be true. Find the proof.',
    type: 'visual', difficulty: 'Medium', thumbnail: '🛒', xpReward: 50,
    data: {
      content: '<div style="padding:20px;background:#fff;border-radius:12px;font-family:Arial;color:#333;border:1px solid #ddd"><div style="display:flex;gap:15px;flex-wrap:wrap"><div style="width:150px;height:150px;background:#f0f0f0;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:48px">👟</div><div style="flex:1"><h2>Nike Air Jordan 1 Retro High OG</h2><p style="color:#e94560;font-size:24px;font-weight:bold">₹1,499 <span style="color:#999;font-size:14px;text-decoration:line-through">₹16,999</span> <span style="color:#16a34a;font-size:14px">91% OFF!</span></p><p>⭐⭐⭐⭐⭐ (12,847 reviews)</p><p style="color:#e94560;font-weight:bold">🔥 Only 3 left in stock!</p><p style="font-size:12px;color:#999">Seller: NikeeOfficialStore (Joined: 2 days ago)</p><p style="font-size:12px;color:#999">Returns: No returns accepted. Payment: Bank transfer only.</p></div></div></div>',
      flaws: ['91% off on Nike Jordans is unrealistic', 'NikeeOfficialStore — extra "e" in Nike', 'Seller joined 2 days ago', 'No returns + bank transfer only = zero buyer protection'],
      isFake: true,
      threatAnalysis: { psychology: 'Deal-seeking behavior + artificial scarcity ("only 3 left")', payload: 'Payment via bank transfer (no chargeback possible) for counterfeit or non-existent products', defense: 'Check seller age and reviews. Prices 90%+ off are always scams. Only pay through platform-protected methods (never direct bank transfer).' }
    }
  },
  {
    id: 'visual_6', title: 'Manipulated Bank Statement', description: 'A loan applicant submitted this bank statement. Verify it.',
    type: 'visual', difficulty: 'Hard', thumbnail: '🏦', xpReward: 60,
    data: {
      content: '<div style="padding:20px;background:#fff;border-radius:12px;font-family:Courier New;color:#333;border:1px solid #999"><h3 style="text-align:center">HDFC BANK — Account Statement</h3><p>Account: XXXX-XXXX-7291 | Period: Jan–Jun 2024</p><hr/><table style="width:100%;font-size:12px;border-collapse:collapse"><tr style="background:#f0f0f0"><th style="padding:6px;text-align:left">Date</th><th>Description</th><th>Credit</th><th>Balance</th></tr><tr><td style="padding:6px">01-Jan</td><td>Salary Credit</td><td>₹1,50,000</td><td>₹3,42,100</td></tr><tr><td style="padding:6px">15-Jan</td><td>Freelance Income</td><td>₹2,75,000</td><td>₹6,17,100</td></tr><tr><td style="padding:6px">30-Feb</td><td>Bonus Payment</td><td>₹4,00,000</td><td>₹10,17,100</td></tr><tr><td style="padding:6px">15-Mar</td><td>Investment Return</td><td>₹3,50,000</td><td>₹13,67,100</td></tr></table><p style="font-size:10px;color:#999;margin-top:10px">Generated by: PDF Editor Pro v3.2</p></div>',
      flaws: ['30-Feb — February never has 30 days', 'Only credits, no debits — unrealistic spending pattern', '"Generated by: PDF Editor Pro v3.2" — real statements come from the bank\'s system, not a PDF editor', 'Suspiciously round, escalating amounts'],
      isFake: true,
      threatAnalysis: { psychology: 'Authority of official-looking financial documents', payload: 'Fraudulent loan approvals, embezzlement, and financial fraud', defense: 'Cross-verify statements with the issuing bank. Check for impossible dates, missing transactions, and metadata from editing tools.' }
    }
  }
];
