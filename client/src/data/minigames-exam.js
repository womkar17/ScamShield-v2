export const EXAM_MINIGAMES = [
  {
    id: 'exam_hard_1', title: 'Domain Deception', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'You receive an urgent email from "IT Support" with the link: https://vpn.company-update.com. Your actual company portal is vpn.company.com. What type of attack is this?',
        options: [
          { text: 'Typosquatting / Lookalike Domain', isCorrect: true, explanation: 'Scammers register domains that look like legitimate subdomains but are entirely different root domains.' },
          { text: 'Cross-Site Scripting (XSS)', isCorrect: false, explanation: 'XSS involves injecting malicious scripts into legitimate websites, not creating fake domains.' },
          { text: 'DNS Cache Poisoning', isCorrect: false, explanation: 'DNS poisoning redirects legitimate URLs to malicious IPs; this is simply a fake URL.' }
        ]
      }],
      threatAnalysis: { psychology: 'Urgency bypasses critical thinking.', payload: 'Credential harvesting.', defense: 'Always read URLs from right to left before the first single slash.' }
    }
  },
  {
    id: 'exam_hard_2', title: 'Homograph Attacks', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'You click a link to "apple.com", but notice the "a" looks slightly different. The site asks for your Apple ID. What is the most likely vector?',
        options: [
          { text: 'An Internationalized Domain Name (IDN) homograph attack using Cyrillic characters.', isCorrect: true, explanation: 'Attackers use characters from other alphabets (like Cyrillic "а") that look identical to Latin characters to spoof domains.' },
          { text: 'A man-in-the-middle (MitM) attack downgrading your connection.', isCorrect: false, explanation: 'MitM intercepts traffic, it doesn\'t change the characters in the URL bar.' },
          { text: 'A compromised browser extension changing the font.', isCorrect: false, explanation: 'While possible, IDN homograph attacks are the standard method for this visual deception.' }
        ]
      }],
      threatAnalysis: { psychology: 'Visual trust.', payload: 'Phishing of Apple ID credentials.', defense: 'Use password managers (they won\'t autofill on homograph domains) or disable Punycode in browser settings.' }
    }
  },
  {
    id: 'exam_hard_3', title: 'Authentication Failures', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'An email appears to come from "CEO@yourcompany.com", but the email headers show "spf=softfail" and "dmarc=fail". What does this indicate?',
        options: [
          { text: 'The email was sent from an unauthorized server and is spoofing the CEO.', isCorrect: true, explanation: 'SPF and DMARC failures indicate the sender\'s server is not authorized to send mail on behalf of yourcompany.com.' },
          { text: 'The email is legitimate but the CEO\'s email client is outdated.', isCorrect: false, explanation: 'SPF/DMARC evaluate the sending mail server, not the local client software.' },
          { text: 'The email was encrypted improperly.', isCorrect: false, explanation: 'SPF/DMARC handle sender authentication, not encryption.' }
        ]
      }],
      threatAnalysis: { psychology: 'Authority bias.', payload: 'Wire fraud / BEC.', defense: 'Never trust the "From" display name. Rely on DMARC policies and out-of-band verification.' }
    }
  },
  {
    id: 'exam_hard_4', title: 'Business Email Compromise', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'A trusted vendor emails you from their legitimate email address, asking to update their wire transfer routing number for a $50k invoice. How do you proceed?',
        options: [
          { text: 'Call the vendor using a known, pre-established phone number to verbally verify the change.', isCorrect: true, explanation: 'If the vendor\'s email is compromised, replying will just go to the attacker. Out-of-band voice verification is required.' },
          { text: 'Reply to the email asking them to confirm the old routing number first.', isCorrect: false, explanation: 'The attacker has access to the vendor\'s inbox and can easily look up the old routing number.' },
          { text: 'Update the details immediately since the email came from their verified address.', isCorrect: false, explanation: 'This is the exact payload of a BEC attack.' }
        ]
      }],
      threatAnalysis: { psychology: 'Trust in established business relationships.', payload: 'Direct wire fraud.', defense: 'Always use out-of-band communication (phone/video) to verify financial changes.' }
    }
  },
  {
    id: 'exam_hard_5', title: 'MFA Fatigue', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'At 2:00 AM, you receive 15 back-to-back Microsoft Authenticator push notifications on your phone. What is happening?',
        options: [
          { text: 'MFA Fatigue / Push Bombing. An attacker has your password and is trying to annoy you into approving the prompt.', isCorrect: true, explanation: 'Attackers spam MFA requests hoping the victim will accidentally or frustratedly press "Approve".' },
          { text: 'Your phone has a glitch and is re-sending an old login request.', isCorrect: false, explanation: 'Authenticator apps do not glitch in this specific manner; this is a known attack pattern.' },
          { text: 'Microsoft is performing a scheduled security audit of your account.', isCorrect: false, explanation: 'Microsoft never sends unsolicited MFA prompts for audits.' }
        ]
      }],
      threatAnalysis: { psychology: 'Annoyance and consent fatigue.', payload: 'Bypassing MFA for full account takeover.', defense: 'Never approve unsolicited MFA prompts. Switch to number-matching MFA.' }
    }
  },
  {
    id: 'exam_hard_6', title: 'SIM Swapping', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'Your cell phone suddenly loses all signal ("No Service"). A few minutes later, you get an email that your bank password was reset. What likely occurred?',
        options: [
          { text: 'A SIM Swapping attack. The attacker ported your number to their device to intercept SMS OTPs.', isCorrect: true, explanation: 'Loss of cellular service followed by password resets is the hallmark of a SIM swap.' },
          { text: 'Your cell tower went down while a coincidental phishing attack occurred.', isCorrect: false, explanation: 'The correlation between loss of service and account takeover indicates a targeted SIM swap.' },
          { text: 'A man-in-the-middle attack intercepted your WiFi.', isCorrect: false, explanation: 'WiFi interception does not cause your cellular network to display "No Service".' }
        ]
      }],
      threatAnalysis: { psychology: 'Exploiting telco customer service vulnerabilities.', payload: 'Bypassing SMS-based 2FA.', defense: 'Do not use SMS for 2FA. Use hardware keys (YubiKey) or Authenticator apps.' }
    }
  },
  {
    id: 'exam_hard_7', title: 'Session Hijacking', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'An attacker steals your browser session cookies via malware. Which security measure does this bypass?',
        options: [
          { text: 'Both your password and your Multi-Factor Authentication (MFA).', isCorrect: true, explanation: 'Session cookies are issued AFTER successful authentication and MFA. Stealing them grants direct access.' },
          { text: 'Only your password, they still need your MFA code.', isCorrect: false, explanation: 'The cookie proves MFA was already completed.' },
          { text: 'Neither, cookies are encrypted and tied to your IP address.', isCorrect: false, explanation: 'Cookies are often not tied to IP addresses to allow mobile roaming, making them vulnerable to theft.' }
        ]
      }],
      threatAnalysis: { psychology: 'Users feel safe once MFA is enabled.', payload: 'Pass-the-cookie account takeover.', defense: 'Use robust endpoint protection and avoid downloading pirated software which often contains info-stealers.' }
    }
  },
  {
    id: 'exam_hard_8', title: 'Rainbow Tables', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'Why is adding a random "salt" to password hashes critical for database security?',
        options: [
          { text: 'It defeats Rainbow Table attacks by ensuring identical passwords have different hashes.', isCorrect: true, explanation: 'A salt is random data added before hashing, meaning precomputed tables of hashes (Rainbow Tables) are useless.' },
          { text: 'It encrypts the password so the database administrator can read it.', isCorrect: false, explanation: 'Passwords should be hashed, never symmetrically encrypted or readable by admins.' },
          { text: 'It increases the minimum length requirement of user passwords.', isCorrect: false, explanation: 'Salting happens on the backend and does not affect the user\'s input length.' }
        ]
      }],
      threatAnalysis: { psychology: 'Reusing common passwords across sites.', payload: 'Mass credential unhashing.', defense: 'Developers must use salted, slow hashing algorithms (like Argon2 or bcrypt).' }
    }
  },
  {
    id: 'exam_hard_9', title: 'OAuth Scope Abuse', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'A calendar scheduling app requests the "mail.readwrite" OAuth scope for your Google account. What is the risk?',
        options: [
          { text: 'The app can secretly read your emails and send phishing emails on your behalf.', isCorrect: true, explanation: 'The mail.readwrite scope grants full control over the inbox, which is entirely unnecessary for a calendar app.' },
          { text: 'The app will consume too much storage in your Google Workspace.', isCorrect: false, explanation: 'Scopes determine access permissions, not storage quotas.' },
          { text: 'The app can bypass your Google Authenticator 2FA.', isCorrect: false, explanation: 'OAuth tokens are issued post-authentication; they don\'t "bypass" 2FA, they are the authorized session.' }
        ]
      }],
      threatAnalysis: { psychology: 'Consent fatigue (blindly clicking Allow).', payload: 'Silent data exfiltration and internal phishing.', defense: 'Enforce the principle of least privilege. Deny apps that over-request scopes.' }
    }
  },
  {
    id: 'exam_hard_10', title: 'Deepfake Audio', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'You receive a frantic voice call from a family member saying they were in an accident and need money wired to a "lawyer". The voice sounds exactly like them. What is your first step?',
        options: [
          { text: 'Hang up and call them back on their known, saved phone number.', isCorrect: true, explanation: 'AI voice cloning requires only a few seconds of audio to mimic someone perfectly. Always verify by calling their known number.' },
          { text: 'Keep them on the line and wire the money immediately to help.', isCorrect: false, explanation: 'This guarantees the success of the scam.' },
          { text: 'Ask them a security question about their childhood.', isCorrect: false, explanation: 'Scammers may have gathered extensive personal data from social media. Out-of-band verification is safer.' }
        ]
      }],
      threatAnalysis: { psychology: 'Panic, empathy, and absolute trust in voice recognition.', payload: 'Immediate financial theft.', defense: 'Establish a family "safe word" or immediately call back on a trusted number.' }
    }
  },
  {
    id: 'exam_hard_11', title: 'Physical Tailgating', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'A person carrying heavy boxes and wearing a courier uniform asks you to hold the secure office door open for them. What should you do?',
        options: [
          { text: 'Apologize and tell them they must badge in or use the intercom.', isCorrect: true, explanation: 'Tailgating is a primary physical security breach method. You must enforce access controls regardless of social pressure.' },
          { text: 'Hold the door, as they are clearly carrying heavy items.', isCorrect: false, explanation: 'This allows an unauthenticated person into a secure facility.' },
          { text: 'Hold the door but ask to see their ID card.', isCorrect: false, explanation: 'You are not a security guard equipped to verify ID cards; they must use the electronic badge system.' }
        ]
      }],
      threatAnalysis: { psychology: 'Social compliance and politeness.', payload: 'Physical access to internal networks, servers, or hardware.', defense: 'Foster a security culture where challenging unbadged individuals is praised, not considered rude.' }
    }
  },
  {
    id: 'exam_hard_12', title: 'Baiting / Drop Attacks', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'You find a USB drive in the company parking lot labeled "Q3 Layoffs & Bonuses". What is the safest action?',
        options: [
          { text: 'Give it to the IT Security department immediately without plugging it in.', isCorrect: true, explanation: 'Baiting relies on curiosity. USBs can act as malicious keyboards (Rubber Ducky) to instantly inject malware.' },
          { text: 'Plug it into an isolated "air-gapped" computer to see whose it is.', isCorrect: false, explanation: 'Even air-gapped machines can be compromised or bridging attacks can occur.' },
          { text: 'Plug it in but hold down the SHIFT key to prevent Autorun.', isCorrect: false, explanation: 'Modern malicious USBs emulate keyboards and type malicious commands; disabling Autorun does nothing.' }
        ]
      }],
      threatAnalysis: { psychology: 'Extreme curiosity and greed.', payload: 'Initial access / Remote Code Execution.', defense: 'Disable USB ports for mass storage via group policy and train employees on physical threats.' }
    }
  },
  {
    id: 'exam_hard_13', title: 'Macro Malware', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'You open an Excel attachment. The document is blurred and says "Click Enable Content to view secured document". What is actually happening?',
        options: [
          { text: 'Clicking "Enable Content" executes malicious VBA macros that download malware.', isCorrect: true, explanation: 'Attackers blur the background image to socially engineer users into bypassing Microsoft\'s macro security warnings.' },
          { text: 'The file is encrypted by Microsoft Information Protection and needs decryption.', isCorrect: false, explanation: 'MIP decrypts seamlessly if you have access; it never asks you to "Enable Content" via a blurred image.' },
          { text: 'Your version of Office is outdated and needs a plugin update.', isCorrect: false, explanation: 'Office updates are handled through the application settings, never via document contents.' }
        ]
      }],
      threatAnalysis: { psychology: 'Desire to access restricted/important information.', payload: 'Ransomware dropper (e.g., Emotet/Trickbot).', defense: 'Never enable macros on documents from external sources. IT should block macros globally.' }
    }
  },
  {
    id: 'exam_hard_14', title: 'Ransomware Response', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'Your screen turns red and a message demands Bitcoin to decrypt your files. What is your immediate FIRST step?',
        options: [
          { text: 'Physically disconnect the computer from the network (unplug Ethernet/turn off Wi-Fi).', isCorrect: true, explanation: 'Disconnecting immediately stops the ransomware from encrypting network shares and spreading to other devices.' },
          { text: 'Reboot the computer in Safe Mode.', isCorrect: false, explanation: 'Rebooting can sometimes trigger destructive payloads or finalize encryption processes.' },
          { text: 'Pay the ransom quickly before the timer expires.', isCorrect: false, explanation: 'Paying does not guarantee decryption and marks you as a lucrative target for future attacks.' }
        ]
      }],
      threatAnalysis: { psychology: 'Panic and fear of permanent data loss.', payload: 'Extortion and data destruction.', defense: 'Maintain immutable offline backups and disconnect infected machines instantly.' }
    }
  },
  {
    id: 'exam_hard_15', title: 'BGP Hijacking', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'Internet traffic intended for your company\'s servers in New York is suddenly routing through an ISP in Russia. What attack does this indicate?',
        options: [
          { text: 'BGP Hijacking.', isCorrect: true, explanation: 'Border Gateway Protocol (BGP) hijacking occurs when a malicious router announces shorter paths to an IP block, redirecting global internet traffic.' },
          { text: 'DNS Cache Poisoning.', isCorrect: false, explanation: 'DNS poisoning changes the IP address resolution, it does not alter the physical routing path to a legitimate IP.' },
          { text: 'DDoS Attack.', isCorrect: false, explanation: 'DDoS overwhelms servers with traffic; it does not reroute legitimate traffic.' }
        ]
      }],
      threatAnalysis: { psychology: 'Exploiting the trust-based nature of internet backbone routing.', payload: 'Traffic interception and espionage.', defense: 'Implement RPKI (Resource Public Key Infrastructure) to validate BGP routes.' }
    }
  },
  {
    id: 'exam_hard_16', title: 'Evil Twin Attacks', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'You are at "Starbucks" and see two Wi-Fi networks: "Starbucks_WiFi" and "Starbucks_Guest". You connect to one and it asks for your Google login to access the internet. What is likely happening?',
        options: [
          { text: 'You connected to an Evil Twin access point designed to harvest credentials.', isCorrect: true, explanation: 'Attackers set up rogue hotspots with legitimate-sounding names. The captive portal is a phishing page.' },
          { text: 'Google is providing the backend Wi-Fi infrastructure for the cafe.', isCorrect: false, explanation: 'Public Wi-Fi rarely requires SSO login, and if it does, it\'s highly suspicious without prior context.' },
          { text: 'Your browser\'s SSL certificates are expired.', isCorrect: false, explanation: 'SSL expiration causes browser warnings, not captive portal login screens.' }
        ]
      }],
      threatAnalysis: { psychology: 'Desire for free, frictionless internet access.', payload: 'Credential harvesting and MitM traffic interception.', defense: 'Use a VPN on all public networks and never enter credentials into Wi-Fi captive portals.' }
    }
  },
  {
    id: 'exam_hard_17', title: 'HTTPS Misconceptions', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'A user says a website is safe because it has a "padlock icon" (HTTPS). Why is this dangerous thinking?',
        options: [
          { text: 'HTTPS only encrypts the connection; the site itself can still be a malicious phishing site.', isCorrect: true, explanation: 'Attackers can easily obtain free SSL certificates (e.g., Let\'s Encrypt) to put a padlock on their scam websites.' },
          { text: 'HTTPS can be easily decrypted by modern web browsers.', isCorrect: false, explanation: 'Modern TLS encryption is secure against decryption; the threat is the destination, not the transit.' },
          { text: 'The padlock icon indicates the site uses HTTP, not HTTPS.', isCorrect: false, explanation: 'The padlock specifically denotes HTTPS.' }
        ]
      }],
      threatAnalysis: { psychology: 'False sense of security from browser UI indicators.', payload: 'Users confidently entering credentials into secure phishing sites.', defense: 'Train users that HTTPS means "securely communicating", not "communicating with a secure/safe entity".' }
    }
  },
  {
    id: 'exam_hard_18', title: 'Exposed Cloud Keys', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'A developer accidentally pushes an AWS Access Key to a public GitHub repository. How quickly can attackers compromise the cloud environment?',
        options: [
          { text: 'Within seconds. Automated bots constantly scan GitHub for exposed keys.', isCorrect: true, explanation: 'Threat actors use bots to scrape public commits in real-time. Keys are often compromised and used within seconds to spin up crypto-mining servers.' },
          { text: 'Within a few days, depending on manual repository audits.', isCorrect: false, explanation: 'The process is entirely automated by attackers.' },
          { text: 'It cannot be compromised unless they also know the developer\'s username.', isCorrect: false, explanation: 'AWS Access Keys are standalone API credentials that do not require a username.' }
        ]
      }],
      threatAnalysis: { psychology: 'Human error and rushing deployments.', payload: 'Massive cloud computing bills (crypto-jacking) or data deletion.', defense: 'Use secrets management tools (Vault, AWS Secrets Manager) and pre-commit hooks to block secrets.' }
    }
  },
  {
    id: 'exam_hard_19', title: 'S3 Bucket Misconfiguration', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'An organization suffers a massive data breach, but no servers were hacked. The attackers simply downloaded millions of records via a web URL. What was the vulnerability?',
        options: [
          { text: 'An improperly configured, publicly readable AWS S3 bucket.', isCorrect: true, explanation: 'If cloud storage permissions (ACLs/Bucket Policies) are set to "Public Read", anyone on the internet can download the contents without authentication.' },
          { text: 'A SQL Injection attack on the login page.', isCorrect: false, explanation: 'SQLi involves hacking the server logic, which the scenario explicitly rules out.' },
          { text: 'A compromised VPN gateway.', isCorrect: false, explanation: 'A compromised VPN implies network hacking, whereas public buckets are literally open to the internet.' }
        ]
      }],
      threatAnalysis: { psychology: 'Complexity of cloud IAM (Identity and Access Management) permissions.', payload: 'Massive data exfiltration and regulatory fines.', defense: 'Enable "Block Public Access" at the AWS account level and regularly audit bucket policies.' }
    }
  },
  {
    id: 'exam_hard_20', title: 'Pig Butchering Scams', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'You get a text: "Hi Alice, are we still on for golf tomorrow?" You reply "Wrong number." The person apologizes, strikes up a friendly conversation, and over weeks, suggests you invest in a crypto trading platform they use. What is this?',
        options: [
          { text: 'A "Pig Butchering" scam (Sha Zhu Pan).', isCorrect: true, explanation: 'Scammers build deep relationships over months (fattening the pig) before convincing victims to invest in fake crypto platforms (the slaughter).' },
          { text: 'A standard Advance-Fee Fraud.', isCorrect: false, explanation: 'Advance-fee asks for a small fee upfront for a large payout. This scam involves fake investing over a long period.' },
          { text: 'A pump-and-dump scheme.', isCorrect: false, explanation: 'Pump-and-dumps manipulate real market prices; pig butchering platforms are entirely fake simulations.' }
        ]
      }],
      threatAnalysis: { psychology: 'Loneliness, trust building, and FOMO on crypto wealth.', payload: 'Loss of life savings.', defense: 'Never invest money on platforms recommended by strangers you met via accidental texts or dating apps.' }
    }
  },
  {
    id: 'exam_hard_21', title: 'Tech Support Scams', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'A "support agent" remoted into your PC, opened the Command Prompt, typed "tree", and told you the scrolling text represents thousands of viruses infecting your network. What is actually happening?',
        options: [
          { text: 'The "tree" command simply lists your folder structure. They are using a harmless visual to scare you.', isCorrect: true, explanation: 'Tech support scammers use harmless Windows commands (tree, netstat, dir /s) to create scary-looking scrolling text to intimidate non-technical victims.' },
          { text: 'The command is actively downloading malware from their server.', isCorrect: false, explanation: 'The "tree" command is a local visual output, it does not download anything.' },
          { text: 'They are running an advanced antivirus heuristic scan.', isCorrect: false, explanation: 'The "tree" command has zero antivirus capabilities.' }
        ]
      }],
      threatAnalysis: { psychology: 'Intimidation through technical jargon and confusing visuals.', payload: 'Extortion for fake support contracts.', defense: 'Recognize that legitimate tech support will never use the command prompt to "show you viruses".' }
    }
  },
  {
    id: 'exam_hard_22', title: 'Advance-Fee Fraud', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'You receive an email stating you won a foreign lottery, but you must wire $500 for "customs and processing fees" before they release your $2 Million prize. What is the core mechanism of this scam?',
        options: [
          { text: 'Advance-Fee Fraud. The scam relies on paying small upfront fees for a massive, non-existent payoff.', isCorrect: true, explanation: 'Victims are kept on the hook, repeatedly paying "just one more fee" (taxes, bribes, processing) until they run out of money.' },
          { text: 'Money Laundering.', isCorrect: false, explanation: 'Money laundering involves cleaning dirty money, not extracting fees for a fake lottery.' },
          { text: 'Business Email Compromise.', isCorrect: false, explanation: 'BEC targets corporate payments, this targets individuals with promises of lottery winnings.' }
        ]
      }],
      threatAnalysis: { psychology: 'Greed and the sunk-cost fallacy.', payload: 'Continuous financial drain.', defense: 'You cannot win a lottery you didn\'t enter. Legitimate lotteries deduct taxes from the winnings, they don\'t ask for upfront wires.' }
    }
  },
  {
    id: 'exam_hard_23', title: 'Fake App Permissions', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'You download a free "Flashlight" app on Android. It requests permissions for your Camera, Contacts, SMS, and Microphone. Why is this dangerous?',
        options: [
          { text: 'The app is likely spyware. A flashlight only needs Camera permission to access the LED flash.', isCorrect: true, explanation: 'Over-requesting permissions is a classic sign of data-harvesting malware disguised as utility apps.' },
          { text: 'It will drain your battery faster.', isCorrect: false, explanation: 'While true, the primary threat is severe privacy invasion and data theft.' },
          { text: 'It indicates the app is poorly coded and will crash.', isCorrect: false, explanation: 'The permissions are requested maliciously on purpose, not due to bad coding.' }
        ]
      }],
      threatAnalysis: { psychology: 'Users blindly clicking "Accept" to use an app quickly.', payload: 'Contact lists, SMS messages (including OTPs), and audio surveillance.', defense: 'Apply least privilege. Deny unnecessary permissions. If an app refuses to work without them, uninstall it.' }
    }
  },
  {
    id: 'exam_hard_24', title: 'Smishing', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'You receive an SMS: "Netflix: Your payment declined. Update via netflix-billing-update.com to avoid suspension." What is the primary attack vector here?',
        options: [
          { text: 'Smishing (SMS Phishing) using urgency and a lookalike domain.', isCorrect: true, explanation: 'Attackers use SMS because users trust texts more than emails and mobile browsers hide full URLs, making spoofed domains harder to spot.' },
          { text: 'A Man-in-the-Middle attack on your cellular network.', isCorrect: false, explanation: 'The attacker simply sent a text message; they did not intercept your network traffic.' },
          { text: 'A malware payload hidden in the SMS text encoding.', isCorrect: false, explanation: 'The payload is on the website you are tricked into clicking, not in the text itself.' }
        ]
      }],
      threatAnalysis: { psychology: 'Fear of losing a valued service (Netflix) + mobile interface limitations.', payload: 'Credit card theft.', defense: 'Never click links in SMS alerts. Go directly to the service\'s official app or website to check your account.' }
    }
  },
  {
    id: 'exam_hard_25', title: 'Typosquatting in Package Managers', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'A developer types "npm install react-doms" instead of "react-dom". The malicious package installs a backdoor. What is this attack called?',
        options: [
          { text: 'Supply Chain Attack via Typosquatting.', isCorrect: true, explanation: 'Attackers upload malicious packages to public registries (NPM, PyPI) with names nearly identical to popular libraries.' },
          { text: 'Dependency Confusion.', isCorrect: false, explanation: 'Dependency confusion involves publishing a public package with the same name as a private internal package.' },
          { text: 'Cross-Site Scripting (XSS).', isCorrect: false, explanation: 'XSS is a client-side web vulnerability, not a backend package management attack.' }
        ]
      }],
      threatAnalysis: { psychology: 'Developer fatigue and fast typing mistakes.', payload: 'Remote Code Execution (RCE) on developer machines and production servers.', defense: 'Use package lockfiles, automated vulnerability scanners, and verify package names carefully.' }
    }
  },
  {
    id: 'exam_hard_26', title: 'Dependency Confusion', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'Your company uses a private internal package named "company-auth-lib". An attacker publishes a malicious package with the exact same name to the public NPM registry. What happens during your next build?',
        options: [
          { text: 'The build tool may pull the malicious public package instead of the private one if configured improperly.', isCorrect: true, explanation: 'Package managers often default to pulling the highest version number. If the attacker uses version 99.9.9 on the public registry, the build tool will download the malware.' },
          { text: 'The build fails immediately due to a name collision.', isCorrect: false, explanation: 'Package managers are designed to resolve dependencies, often blindly trusting public registries over private ones if versions are higher.' },
          { text: 'NPM automatically blocks packages that match enterprise private names.', isCorrect: false, explanation: 'NPM has no way of knowing your private internal package names.' }
        ]
      }],
      threatAnalysis: { psychology: 'Trusting default package manager resolution logic.', payload: 'Supply chain compromise and RCE.', defense: 'Reserve your internal package names on public registries or strictly configure scoped registries (e.g., @company/auth-lib).' }
    }
  },
  {
    id: 'exam_hard_27', title: 'Physical Security: Baiting', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'An attacker leaves a high-end, branded power bank in the company lobby. A user plugs their phone into it to charge. What is the risk?',
        options: [
          { text: 'Juice Jacking. The power bank contains a hidden data connection that steals data or installs malware on the phone.', isCorrect: true, explanation: 'Malicious charging stations or cables (like the O.MG cable) can act as keyboards or storage devices when connected to a phone or PC.' },
          { text: 'The power bank will short-circuit and destroy the phone.', isCorrect: false, explanation: 'While possible, the primary cybersecurity threat of unknown USB devices is data theft/malware.' },
          { text: 'The power bank acts as a Wi-Fi jammer.', isCorrect: false, explanation: 'A connected USB cable is a direct vector for data transfer, not RF jamming.' }
        ]
      }],
      threatAnalysis: { psychology: 'Convenience and the universal need for phone battery.', payload: 'Mobile device compromise.', defense: 'Use USB data blockers (condoms) when charging at public stations, or only use your own AC adapter.' }
    }
  },
  {
    id: 'exam_hard_28', title: 'Deepfake Video Impersonation', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'You are on a Zoom call with your CFO. The video is slightly glitchy, they say their microphone is broken, and they use the Zoom chat to ask you to execute an urgent wire transfer. What is happening?',
        options: [
          { text: 'It is likely a deepfake video loop. The "broken mic" is an excuse because synthesizing live conversational audio is difficult.', isCorrect: true, explanation: 'Attackers use deepfake video overlays but avoid live audio interaction to prevent detection, relying on text chat to issue fraudulent commands.' },
          { text: 'The CFO is just having legitimate bandwidth issues.', isCorrect: false, explanation: 'While possible, urgent financial requests coupled with broken audio/glitchy video is a massive red flag for impersonation.' },
          { text: 'Zoom\'s servers are being DDoS attacked.', isCorrect: false, explanation: 'Server attacks cause lag or drops, not targeted chat requests for wire transfers.' }
        ]
      }],
      threatAnalysis: { psychology: 'Visual confirmation overrides skepticism.', payload: 'Massive wire fraud.', defense: 'Require voice confirmation for financial transactions. If audio fails, call their cell phone.' }
    }
  },
  {
    id: 'exam_hard_29', title: 'The "Reply-To" Spoof', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'An email displays "From: HR <hr@yourcompany.com>". However, when you hit "Reply", the "To" field populates with "hr-dept-external@gmail.com". What is this?',
        options: [
          { text: 'Reply-To Spoofing. The attacker spoofed the display name and From address, but set the Reply-To header to their own inbox.', isCorrect: true, explanation: 'Email protocols allow the "From" address and the "Reply-To" address to be completely different. Attackers use this to intercept your response.' },
          { text: 'Your email client has a bug routing internal emails.', isCorrect: false, explanation: 'Email clients correctly follow the standard Reply-To header; the header itself is malicious.' },
          { text: 'The HR department is using a backup email server.', isCorrect: false, explanation: 'Legitimate departments do not route internal replies to free webmail providers.' }
        ]
      }],
      threatAnalysis: { psychology: 'Users rarely check the actual destination address after hitting Reply.', payload: 'Data exfiltration of sensitive documents (W-2s, internal reports).', defense: 'Always verify the destination email address in the "To" field before hitting Send.' }
    }
  },
  {
    id: 'exam_hard_30', title: 'Reverse Social Engineering', description: 'Advanced Threat Analysis', type: 'quiz', difficulty: 'Hard', thumbnail: '🧠', xpReward: 100,
    data: {
      questions: [{
        question: 'An attacker deliberately breaks the company\'s network printer. The next day, they show up in an "HP Repair" uniform offering to fix it, and a frustrated employee lets them into the server room. What is this?',
        options: [
          { text: 'Reverse Social Engineering. The attacker creates a problem so the victim willingly seeks or accepts their malicious help.', isCorrect: true, explanation: 'Instead of tricking the victim directly, the attacker creates a frustrating situation where the victim views the attacker as a savior.' },
          { text: 'A Denial of Service (DoS) attack.', isCorrect: false, explanation: 'While the printer was denied service, the ultimate goal was physical intrusion via social engineering.' },
          { text: 'Phishing.', isCorrect: false, explanation: 'Phishing involves deceptive electronic communications, not physical manipulation.' }
        ]
      }],
      threatAnalysis: { psychology: 'Frustration and the desire to resolve workflow blockers quickly.', payload: 'Physical access to internal networks (rogue devices, network taps).', defense: 'All physical maintenance must be scheduled, verified, and escorted by IT staff.' }
    }
  }
];
