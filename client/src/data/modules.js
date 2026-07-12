export const MODULES = [
      {
        id: 0, icon: '💰', title: 'Instant Loan Scam', desc: 'Approve ₹5 lakh loan without verification — just pay processing fee', diff: 'high', tag: 'Financial Fraud',
        url: 'fastloan-india.co.in', badge: 'Loan Approved!', amount: '₹5,00,000', amountLabel: 'Personal Loan Approved',
        fee: 'Processing Fee: ₹2,000', feeNote: 'Pay fee to release funds',
        fields: [{ n: 'name', p: 'Full Name', t: 'text' }, { n: 'mobile', p: 'Mobile Number', t: 'tel' }, { n: 'aadhaar', p: 'Aadhaar Number', t: 'text' }, { n: 'fee', p: 'Card No. for Fee Payment', t: 'text' }],
        exposed: ['Bank Account', 'Card Number', 'CVV', 'Contacts', 'Photos'],
        reveal: 'You just gave away your banking details AND installed a predatory app. These fake loan apps don\'t just steal the ₹1,999 "processing fee"—they hack your phone\'s contacts and photo gallery. If you don\'t pay their extortionate fake interest rates, they will morph your photos and send them to your family and colleagues to blackmail you.',
        flags: ['Loan approved without ANY document verification or credit check.', 'App asks for a "Security Deposit" or "Processing Fee" BEFORE disbursing the loan.', 'App requests permission to access your Contacts, Gallery, and SMS.', 'The app is not registered with the RBI as an NBFC.'],
        tips: ['NEVER pay an upfront fee for a loan. Real banks deduct processing fees from the final disbursed amount.', 'Check if the app is an RBI-registered NBFC. If it is not on the RBI website, it is illegal.', 'Never grant Contacts or Gallery permissions to a loan app. They use this data to blackmail you.', 'If blackmailed, DO NOT PAY. File a complaint immediately at cybercrime.gov.in (1930) and inform your contacts that your phone was hacked.'],
        quiz: [{ q: 'What is the first red flag of a loan scam?', opts: ['Low interest rate', 'Loan approved without any verification', 'Long repayment period', 'Friendly customer service'], ans: 1, exp: 'Legitimate loans require extensive KYC and credit checks. Instant approval is always a scam signal.' }, { q: 'Where should you verify an NBFC lender?', opts: ['Google search', 'RBI NBFC registry at rbi.org.in', 'Their website', 'Social media'], ans: 1, exp: 'RBI maintains an official list of registered NBFCs. Always verify.' }, { q: 'How are legitimate processing fees charged?', opts: ['Paid via UPI before disbursement', 'Collected as cash', 'Deducted from the disbursed loan amount', 'Paid via gift cards'], ans: 2, exp: 'Real lenders deduct fees from the loan — they never ask for upfront payments.' }]
      },
      {
        id: 1, icon: '💼', title: 'Fake Interview Fee Scam', desc: 'Cyber Analyst job ₹12 LPA — submit documents and pay ₹200 registration', diff: 'med', tag: 'Job Fraud',
        url: 'hiring-cyberjobs.in', badge: 'You\'re Selected!', amount: '₹12 LPA', amountLabel: 'Cyber Security Analyst',
        fee: 'Registration Fee: ₹200', feeNote: 'Secure your slot before it expires',
        fields: [{ n: 'name', p: 'Full Name', t: 'text' }, { n: 'resume', p: 'Upload Resume (Link)', t: 'text' }, { n: 'aadhaar', p: 'Aadhaar Number', t: 'text' }, { n: 'pan', p: 'PAN Card Number', t: 'text' }, { n: 'fee', p: 'Pay ₹200 Registration Fee (UPI)', t: 'text' }],
        exposed: ['Name', 'Resume (Work History)', 'Aadhaar Number', 'PAN Number', 'Payment Details'],
        reveal: 'You handed over PAN + Aadhaar — enough for identity theft, fraudulent loan applications, and SIM swaps.',
        flags: ['No official company website or verified email domain', 'Fee charged before interview happens', 'Requests Aadhaar + PAN together — perfect for identity theft', 'No HR contact name or office address'],
        tips: ['Legitimate companies never charge registration or interview fees', 'Verify the company on MCA21', 'Check company reviews on Glassdoor or LinkedIn', 'Never share Aadhaar + PAN in the same form'],
        quiz: [{ q: 'Which document combination is most dangerous to share with fake recruiters?', opts: ['Resume + Photo', 'Aadhaar + PAN together', 'Degree certificates', 'LinkedIn profile'], ans: 1, exp: 'Aadhaar + PAN together enables identity theft, fraudulent loans, and SIM swap attacks.' }, { q: 'What should you do before submitting to a job portal?', opts: ['Pay the fee quickly', 'Verify company on MCA21 or LinkedIn', 'Trust Google reviews', 'Accept the offer immediately'], ans: 1, exp: 'MCA21 shows registered companies in India. Fake companies won\'t appear there.' }, { q: 'Legitimate companies charge interview fees:', opts: ['Only for senior roles', 'For government jobs', 'Never', 'Always for tech jobs'], ans: 2, exp: 'No legitimate employer ever charges candidates for interviews or registration.' }]
      },
      {
        id: 2, icon: '📱', title: 'Too-Good-To-Be-True Phone Deal', desc: 'iPhone 16 Pro for ₹2,999 — today only! Enter address + card.', diff: 'high', tag: 'E-Commerce Fraud',
        url: 'apple-deals-india.shop', badge: 'Flash Sale Live!', amount: '₹2,999', amountLabel: 'iPhone 16 Pro (Was ₹1,39,900)',
        fee: 'Pay Now to Reserve', feeNote: 'Only 3 units left!',
        fields: [{ n: 'name', p: 'Full Name', t: 'text' }, { n: 'address', p: 'Delivery Address', t: 'text' }, { n: 'card', p: 'Card Number', t: 'text' }, { n: 'expiry', p: 'Card Expiry (MM/YY)', t: 'text' }, { n: 'cvv', p: 'CVV', t: 'text' }],
        exposed: ['Full Card Number', 'Expiry Date', 'CVV', 'Home Address'],
        reveal: 'You just handed over complete card details. This enables full card cloning and fraudulent purchases.',
        flags: ['URL ends in .shop — not apple.com', 'Price 98% below MRP is impossible', 'Urgency: "Only 3 units left"', 'No seller details, return policy, or GST number'],
        tips: ['Apple sells officially only at apple.com/in or authorised resellers', 'Prices 90%+ below MRP are always scams', 'CVV should NEVER be entered on unknown sites', 'Use virtual cards for online shopping'],
        quiz: [{ q: 'What is the safest way to buy Apple products in India?', opts: ['Facebook Marketplace', 'Telegram groups', 'apple.com/in or authorised resellers', 'WhatsApp deals'], ans: 2, exp: 'Apple has an official India store and authorized retail partners. Never buy from unverified sites.' }, { q: 'A product priced 95% below MRP is:', opts: ['A genuine clearance sale', 'A scam', 'A manufacturer defect', 'A beta product'], ans: 1, exp: 'No legitimate seller can price genuine Apple products 95% below MRP — it\'s always fraud.' }, { q: 'Which detail should you NEVER share online?', opts: ['Email address', 'Phone number', 'CVV of your credit card', 'Name'], ans: 2, exp: 'CVV is a security code that should only be used on secure, verified checkout pages.' }]
      },
      {
        id: 3, icon: '🥇', title: 'Fake Gold Coin Investment', desc: '24K gold coin market value ₹75,000 — get it for ₹4,999.', diff: 'med', tag: 'Investment Fraud',
        url: 'goldcoin-offer24k.com', badge: 'Certified 24K Gold', amount: '₹4,999', amountLabel: '24K Gold Coin (Market ₹75,000)',
        fee: 'Order Now — Offer Ends Soon', feeNote: 'BIS Hallmarked (claimed)',
        fields: [{ n: 'name', p: 'Full Name', t: 'text' }, { n: 'address', p: 'Delivery Address', t: 'text' }, { n: 'upi', p: 'UPI ID for Refund if Unavailable', t: 'text' }],
        exposed: ['Name', 'Home Address', 'UPI ID'],
        reveal: 'You ordered fake gold. The "coin" is brass-plated. Your UPI ID can be used to initiate payment requests.',
        flags: ['No BIS hallmark certificate shown', 'Price is 93% below market rate', 'No seller GST number or return policy', '"Limited stock" creates artificial urgency'],
        tips: ['Buy gold only from RBI-authorised dealers or bank gold schemes', 'Always verify BIS hallmark at bis.gov.in', 'Sovereign Gold Bonds are the safest gold investment', 'Never share UPI ID as refund destination — it can be misused'],
        quiz: [{ q: 'Where should you buy certified gold in India?', opts: ['WhatsApp groups', 'Facebook Marketplace', 'Banks or BIS-hallmarked jewellers', 'Telegram channels'], ans: 2, exp: 'RBI-authorised dealers and banks are the only safe sources for gold purchases in India.' }, { q: 'BIS hallmark can be verified at:', opts: ['The seller\'s website', 'bis.gov.in', 'Google', 'Social media'], ans: 1, exp: 'BIS (Bureau of Indian Standards) maintains an official registry of hallmarked products.' }, { q: 'What can fraudsters do with your UPI ID?', opts: ['Nothing — it\'s only for receiving', 'Send you money only', 'Initiate collect requests to trick you', 'Block your account'], ans: 2, exp: 'Fraudsters use collect/request features to trick victims into entering PIN and approving payments.' }]
      },
      {
        id: 4, icon: '🎰', title: 'Lucky Draw Entry Fee', desc: 'Win BMW, iPhone, or ₹10 Lakhs cash. Entry fee just ₹50.', diff: 'low', tag: 'Lottery Fraud',
        url: 'india-lucky-draw2025.in', badge: 'YOU HAVE BEEN SELECTED!', amount: '₹10,00,000', amountLabel: 'Grand Prize Pool',
        fee: 'Entry Fee: ₹50', feeNote: 'Only 2 entries left at this price!',
        fields: [{ n: 'name', p: 'Full Name', t: 'text' }, { n: 'mobile', p: 'Mobile Number', t: 'text' }, { n: 'upi', p: 'UPI ID to Receive Winnings', t: 'text' }],
        exposed: ['Name', 'Mobile Number', 'UPI ID'],
        reveal: 'There is no draw. Once you pay ₹50, you get "You almost won — try again for ₹200." The cycle never ends.',
        flags: ['You "won" without entering any contest', 'Pressure: "only 2 entries left"', 'No organiser name or registration', 'RBI and Govt of India prohibit paid lottery schemes except state lotteries'],
        tips: ['Online lotteries requiring upfront payment are illegal in India (except state lotteries)', 'No one "wins" a contest they never entered', 'Report at 1930 (National Cyber Helpline)', 'The prize amount always grows with each refusal'],
        quiz: [{ q: 'What happens after you pay the initial ₹50 entry fee?', opts: ['You receive your winnings', 'You get asked to pay more fees repeatedly', 'A courier arrives with your prize', 'The organiser contacts you via email'], ans: 1, exp: 'This is advance fee fraud. After the first payment, requests escalate to ₹200, ₹500, ₹2000 etc.' }, { q: 'Online lottery schemes requiring upfront payment are:', opts: ['Legal if registered', 'Illegal in India except state lotteries', 'Only legal if over ₹100 entry fee', 'Legal if prize is physical'], ans: 1, exp: 'The Prize Chits and Money Circulation Schemes (Banning) Act 1978 prohibits such schemes.' }, { q: 'If you "won" a prize you never entered, it is:', opts: ['Your lucky day', 'A scam — always', 'A marketing promotion', 'A government scheme'], ans: 1, exp: 'You cannot win contests you never participated in. Unsolicited "wins" are always scams.' }]
      },
      {
        id: 5, icon: '💳', title: 'Credit Card Discount Scam', desc: '90% OFF sale — verify your card to unlock exclusive discounts.', diff: 'high', tag: 'Card Fraud',
        url: 'hdfc-exclusive-offers.net', badge: 'Exclusive Offer for You!', amount: '90% OFF', amountLabel: 'All Products — Limited Time',
        fee: 'Verify Card to Activate', feeNote: 'Enter card details to confirm identity',
        fields: [{ n: 'name', p: 'Cardholder Name', t: 'text' }, { n: 'card', p: 'Card Number (16 digits)', t: 'text' }, { n: 'expiry', p: 'Expiry Date', t: 'text' }, { n: 'cvv', p: 'CVV', t: 'text' }, { n: 'otp', p: 'OTP sent to your mobile', t: 'text' }],
        exposed: ['Cardholder Name', 'Full Card Number', 'Expiry Date', 'CVV', 'OTP'],
        reveal: 'You gave them everything including OTP — complete card compromise. Fraudsters can now make unlimited transactions.',
        flags: ['Domain is hdfc-offers.net NOT hdfc.com', 'Banks NEVER ask for CVV or OTP through websites', '90% discount is impossible for a real bank offer', 'No HTTPS padlock or company registration'],
        tips: ['Banks NEVER ask for OTP, CVV, or full card number', 'Always access banking at the official domain', 'Report card fraud immediately by calling the number on your card', 'Enable transaction alerts and set spending limits'],
        quiz: [{ q: 'Your bank will NEVER ask for:', opts: ['Your account number', 'Your registered mobile', 'Your CVV and OTP together', 'Your name'], ans: 2, exp: 'Banks never ask for CVV, PIN, or OTP via any channel. Anyone asking is a fraudster.' }, { q: 'How do you identify the real bank website?', opts: ['Google the bank name', 'Check the URL exactly matches the official domain', 'Look for a nice logo', 'Check if it has HTTPS'], ans: 1, exp: 'Always manually type the official URL. Phishing sites mimic logos and even use HTTPS certificates.' }, { q: 'You receive an OTP you did not request. You should:', opts: ['Enter it on the site that asked', 'Call your bank immediately', 'Wait to see what happens', 'Share it with the caller'], ans: 1, exp: 'An unrequested OTP means someone is trying to use your card. Call your bank immediately.' }]
      },
      {
        id: 6, icon: '🎁', title: 'Free Gift Delivery Scam', desc: 'You\'ve won a Mixer Grinder! Pay ₹99 delivery charge to receive it.', diff: 'low', tag: 'Delivery Fraud',
        url: 'giftsdelivery-india.in', badge: 'Congratulations!', amount: 'Free Gift', amountLabel: 'Bajaj Mixer Grinder',
        fee: 'Delivery Fee: ₹99', feeNote: 'Pay to confirm your address',
        fields: [{ n: 'name', p: 'Full Name', t: 'text' }, { n: 'address', p: 'Complete Delivery Address', t: 'text' }, { n: 'card', p: 'Card Details for ₹99', t: 'text' }],
        exposed: ['Full Name', 'Home Address', 'Card Details'],
        reveal: 'No gift is coming. The ₹99 is just the start — they now have your card details for larger charges.',
        flags: ['You won a gift you never registered for', 'Real companies never charge delivery for prizes', 'Card details for ₹99 enables any amount to be charged', 'No prize organizer name, location, or registration'],
        tips: ['Legitimate prizes from companies have official communication on company letterhead', 'Winners of real contests are verified through official channels', 'Never pay to "claim" a prize', 'Your card details entered once can be charged repeatedly'],
        quiz: [{ q: 'Why do scammers charge ₹99 instead of a large amount?', opts: ['Because the gift costs that much to deliver', 'Small amounts feel harmless and lower suspicion', 'It\'s a government tax', 'To cover packaging'], ans: 1, exp: 'Small charges reduce suspicion while capturing card details. They then attempt larger charges.' }, { q: 'A genuine company prize requires you to:', opts: ['Pay delivery charges', 'Verify via official channels only', 'Share card details', 'Pay registration'], ans: 1, exp: 'Real prizes are verified through official company communications — never through random websites.' }, { q: 'After entering card details for ₹99, the fraudster can:', opts: ['Only charge ₹99', 'Charge any amount at any time', 'Only do 1 transaction', 'Nothing'], ans: 1, exp: 'Once card details are stored by fraudsters, they can attempt charges at any time and amount.' }]
      },
      {
        id: 7, icon: '⭐', title: 'Reward Points Expiry Scam', desc: 'Your reward points worth ₹5,000 expire today. Redeem via our app.', diff: 'med', tag: 'Malware/App Fraud',
        url: 'rewardpoints-redeem.app', badge: 'Your Points Expire TODAY', amount: '₹5,000', amountLabel: 'Reward Points — Use Before Midnight',
        fee: 'Install App to Redeem', feeNote: 'Available on direct download only',
        fields: [{ n: 'mobile', p: 'Registered Mobile Number', t: 'tel' }, { n: 'bank', p: 'Bank Name', t: 'text' }, { n: 'app', p: 'App Install Confirmation Code', t: 'text' }],
        exposed: ['Mobile Number', 'Bank Name', 'Device Access (via App)'],
        reveal: 'The app is malware. Once installed, it reads your SMS (OTPs), monitors banking apps, and can take screenshots.',
        flags: ['Real bank apps are ONLY on Play Store/App Store — never side-loaded', 'Urgency: "expire tonight" forces hasty action', 'Official bank apps never send APK download links', 'Sideloaded apps bypass Google Play Protect'],
        tips: ['ONLY install banking apps from Google Play Store or Apple App Store', 'Banks never send APK download links via SMS/WhatsApp', 'Revoke permissions of suspicious apps immediately in Settings', 'Report malware apps to cert-in.org.in'],
        quiz: [{ q: 'Where should you ONLY download banking apps from?', opts: ['SMS links', 'WhatsApp links', 'Official Play Store or App Store', 'Bank website APK'], ans: 2, exp: 'Only Google Play Store and Apple App Store verify app safety. Sideloaded apps bypass all security.' }, { q: 'A sideloaded malicious banking app can:', opts: ['Only show ads', 'Read your OTPs and banking credentials', 'Just track location', 'Only access contacts'], ans: 1, exp: 'Malicious apps can read SMS (OTPs), log keystrokes, take screenshots, and drain accounts.' }, { q: 'Real bank reward points are redeemed:', opts: ['In 24 hours only', 'Through the official bank app only', 'Via separate download', 'By calling customer care'], ans: 1, exp: 'Banks provide redemption only through their official, verified apps — never through third-party downloads.' }]
      },
      {
        id: 8, icon: '🏠', title: 'Work From Home Scam', desc: 'Earn ₹5,000 daily doing simple data entry. No experience needed.', diff: 'med', tag: 'Job Fraud',
        url: 'wfh-earnindia.com', badge: 'Hiring Now!', amount: '₹5,000/day', amountLabel: 'Data Entry — Work From Home',
        fee: 'Registration Fee: ₹500', feeNote: 'Refundable after first task completion',
        fields: [{ n: 'name', p: 'Full Name', t: 'text' }, { n: 'mobile', p: 'WhatsApp Number', t: 'tel' }, { n: 'bank', p: 'Bank Account for Payments', t: 'text' }, { n: 'fee', p: 'Registration Fee ₹500 (UPI)', t: 'text' }],
        exposed: ['Name', 'WhatsApp Number', 'Bank Account Details', 'Payment'],
        reveal: 'After paying ₹500, you get a "task" that requires buying more products or paying "insurance". The refund never comes.',
        flags: ['No company name, PAN, or GST number', '₹5,000/day for "data entry" is not a real market rate', 'Refundable fee is a classic bait-and-switch', 'WhatsApp-only communication avoids paper trail'],
        tips: ['Market rate for data entry is ₹200–800/day — ₹5,000 is impossible', 'Legitimate employers do not charge registration fees', 'Always get a written offer letter with company details', 'Verify on Glassdoor, LinkedIn, or MCA21'],
        quiz: [{ q: 'What is the realistic daily rate for data entry work in India?', opts: ['₹5,000–10,000', '₹200–800', '₹50,000', '₹2,000–5,000'], ans: 1, exp: 'Market rate for data entry is ₹200–800/day. Anything claiming ₹5,000+ for simple tasks is a scam.' }, { q: 'A "refundable registration fee" for a job is:', opts: ['Standard practice', 'A scam signal — legitimate jobs never charge fees', 'Only for government jobs', 'Required by law'], ans: 1, exp: 'No legitimate employer charges registration, training, or deposit fees. This is always a scam.' }, { q: 'WFH scam operators prefer WhatsApp because:', opts: ['It\'s more professional', 'It avoids creating a paper trail', 'It\'s faster', 'You can send files'], ans: 1, exp: 'WhatsApp messages are harder to trace and disappear — unlike official email or documents.' }]
      },
      {
        id: 9, icon: '📈', title: 'Fake Investment Scheme', desc: 'Invest ₹10,000 — guaranteed ₹20,000 back in 7 days.', diff: 'high', tag: 'Ponzi Scheme',
        url: 'doublemoney-invest.in', badge: '100% Guaranteed Returns', amount: '2X in 7 Days', amountLabel: 'Invest ₹10,000 → Get ₹20,000',
        fee: 'Minimum Investment: ₹10,000', feeNote: 'Returns paid daily. Withdraw anytime.',
        fields: [{ n: 'name', p: 'Full Name', t: 'text' }, { n: 'mobile', p: 'Mobile Number', t: 'tel' }, { n: 'amount', p: 'Investment Amount (Min ₹10,000)', t: 'number' }, { n: 'upi', p: 'UPI ID for Returns', t: 'text' }],
        exposed: ['Full Name', 'Mobile Number', 'UPI ID', 'Investment Money'],
        reveal: 'This is a Ponzi scheme. Early investors are paid using new investor money. When recruitment stops, everyone loses.',
        flags: ['100% guaranteed returns are impossible in any legal investment', '7-day doubling = 5,200% annual return — physically impossible', 'No SEBI registration number shown', 'No explanation of how returns are generated'],
        tips: ['SEBI-regulated investments cap realistic returns at 10-15% annually', 'Verify investment companies at sebi.gov.in', '"Guaranteed returns" are illegal to promise under SEBI regulations', 'Report Ponzi schemes to sebi.gov.in'],
        quiz: [{ q: 'What annual return does "double in 7 days" translate to?', opts: ['200%', '1,000%', 'Over 5,000%', '100%'], ans: 2, exp: 'Doubling in 7 days = ~5,200% annual return. The entire global stock market averages 10% per year.' }, { q: 'Where do you verify a legitimate investment firm in India?', opts: ['Google', 'Their website', 'SEBI registry at sebi.gov.in', 'Social media'], ans: 2, exp: 'SEBI (Securities and Exchange Board of India) maintains the official registry of regulated investment firms.' }, { q: 'In a Ponzi scheme, early investors are paid using:', opts: ['Genuine investment profits', 'New investors\' money', 'Bank loans', 'Government funds'], ans: 1, exp: 'Ponzi schemes have no real investment. Early investors are paid with money from new recruits until collapse.' }]
      },
      {
        id: 10, icon: '👮', title: 'Digital Arrest Scam', desc: 'CBI/Narcotics Bureau: Your number linked to illegal activity. Pay fine to avoid arrest.', diff: 'high', tag: 'Impersonation Fraud',
        url: 'cbinarcoticsunit.gov.fake', badge: 'OFFICIAL NOTICE', amount: 'Warrant Issued', amountLabel: 'Cybercrime Investigation Unit',
        fee: 'Pay Fine to Avoid Arrest: ₹25,000', feeNote: 'Failure to comply = immediate physical arrest',
        fields: [{ n: 'name', p: 'Full Name', t: 'text' }, { n: 'aadhaar', p: 'Aadhaar Number (for verification)', t: 'text' }, { n: 'amount', p: 'Fine Amount ₹25,000 (UPI)', t: 'text' }],
        exposed: ['Full Name', 'Aadhaar Number', 'Money'],
        reveal: '"Digital arrest" does not exist in Indian law. Police NEVER demand money via UPI. This is impersonation fraud.',
        flags: ['"Digital arrest" is not a legal concept in India', 'Real law enforcement cannot arrest you over a video call', 'Official FIRs are served physically — never via WhatsApp', 'No government agency accepts UPI payments for fines'],
        tips: ['Indian law has no provision for "digital arrest"', 'Real police contact happens in person or through official court summons', 'PM Modi warned the nation about digital arrest scams in October 2024', 'Hang up immediately and call 1930 to report'],
        quiz: [{ q: '"Digital arrest" in India is:', opts: ['A new cyber law', 'Not a legal concept — it does not exist', 'Only for cybercriminals', 'A Supreme Court ruling'], ans: 1, exp: 'Digital arrest has no legal basis in India. PM Modi specifically warned citizens about this in October 2024.' }, { q: 'Real Indian law enforcement fines are paid:', opts: ['Via UPI on video calls', 'In Bitcoin', 'Through official court/challan systems only', 'Via WhatsApp Pay'], ans: 2, exp: 'All official government payments go through court-mandated channels, challans, or NEFT — never personal UPI.' }, { q: 'If you receive a "digital arrest" video call, you should:', opts: ['Pay the fine immediately', 'Stay on the call to explain yourself', 'Hang up and call 1930 to report', 'Ask for more time'], ans: 1, exp: 'Hang up immediately. The more you engage, the more psychological pressure they apply. Call 1930.' }]
      },
      {
        id: 11, icon: '🤖', title: 'Deepfake Family Emergency', desc: 'Urgent: Your son/daughter has been in an accident. Send ₹15,000 immediately.', diff: 'high', tag: 'Deepfake/AI Fraud',
        url: 'whatsapp-voice-message.fake', badge: 'URGENT Voice Message', amount: '₹15,000 Needed', amountLabel: 'Family Emergency — Act Now',
        fee: 'Send via UPI Immediately', feeNote: 'They are at the hospital right now',
        fields: [{ n: 'name', p: 'Your Name', t: 'text' }, { n: 'relation', p: 'Relation (Son/Daughter/Parent)', t: 'text' }, { n: 'upi', p: 'UPI to Send ₹15,000', t: 'text' }],
        exposed: ['Name', 'Family Details', 'Money'],
        reveal: 'AI voice cloning can replicate anyone\'s voice from just 3 seconds of audio. The "emergency" is fabricated.',
        flags: ['Extreme urgency prevents rational thinking', 'Caller asks you NOT to call the person back directly', 'Voice may sound slightly robotic or have audio artifacts', 'Always demands immediate transfer — will not wait'],
        tips: ['Always hang up and call the family member directly on their known number', 'Establish a family "safe word" for emergency verification', '3-second audio sample is enough for modern AI voice cloning', 'Slow down — scammers rely on panic. Take 60 seconds to verify.'],
        quiz: [{ q: 'AI voice cloning requires approximately how much audio?', opts: ['1 hour of audio', '30 minutes', 'As little as 3–5 seconds', 'At least a day of samples'], ans: 2, exp: 'Modern AI voice cloning tools can clone a voice from just 3-5 seconds of audio from social media videos.' }, { q: 'When you receive an emergency call, the FIRST thing to do is:', opts: ['Send money immediately', 'Hang up and call the person on their known number', 'Stay on call for more details', 'Call 100'], ans: 1, exp: 'Always verify by directly calling the person supposedly in distress on their saved number.' }, { q: 'The best protection against voice cloning scams is:', opts: ['Keeping your phone private', 'A family safe word for verification', 'Only answering known numbers', 'Installing antivirus'], ans: 1, exp: 'A pre-agreed family code word (unrelated to emergency context) cannot be guessed by an AI caller.' }]
      },
      {
        id: 12, icon: '🏦', title: 'Bank KYC Verification Scam', desc: 'Your bank account will be blocked today unless you complete KYC verification immediately.',
        diff: 'med', tag: 'Banking Fraud',
        url: 'secure-kyc-update.bankverify.com', badge: 'Account Suspension Alert', amount: 'Account at Risk', amountLabel: 'Verify KYC Within 30 Minutes',
        fee: 'Update PAN & Aadhaar Details',
        feeNote: 'Failure may result in account freeze',
        fields: [{ n: 'fullname', p: 'Full Name', t: 'text' }, { n: 'account', p: 'Bank Account Number', t: 'text' }, { n: 'otp', p: 'OTP Received', t: 'text' }],
        exposed: ['Bank Details', 'OTP', 'Identity Information'],
        reveal: 'Banks never ask customers to share OTPs or complete KYC through random links sent via SMS or WhatsApp.',
        flags: ['Creates panic by threatening account closure', 'Requests OTP or login credentials', 'Link does not belong to official bank domain', 'Urgent deadlines pressure users'],
        tips: ['Always visit the official bank website manually', 'Never share OTPs with anyone', 'Contact your bank directly for verification', 'Check sender information carefully'],
        quiz: [{ q: 'What should you do if you receive a KYC update message?', opts: ['Click immediately', 'Verify through official bank channels', 'Share OTP for verification', 'Ignore all banking messages'], ans: 1, exp: 'Always verify directly with your bank using official contact methods.' }, { q: 'Who should know your OTP?', opts: ['Bank employee', 'Customer support', 'Only you', 'Relationship manager'], ans: 2, exp: 'OTP is confidential and should never be shared.' }, { q: 'Why do scammers create urgency?', opts: ['To save time', 'To prevent verification', 'To make victims act without thinking', 'To improve service'], ans: 2, exp: 'Urgency reduces critical thinking and increases compliance.' }]
      },
      {
        id: 13, icon: '📸', title: 'Instagram Account Verification Scam', desc: 'Your Instagram account is at risk of suspension. Verify your identity now to keep your blue tick and followers.', diff: 'med', tag: 'Social Media Phishing',
        url: 'instagram-security-verify.com', badge: 'Account Suspension Warning',
        amount: 'Account Restricted',
        amountLabel: 'Verify Within 12 Hours',
        fee: 'Login Required',
        feeNote: 'Failure may result in account deletion',
        fields: [
          { n: 'username', p: 'Instagram Username', t: 'text' },
          { n: 'email', p: 'Recovery Email', t: 'email' },
          { n: 'password', p: 'Instagram Password', t: 'password' }
        ],
        exposed: ['Username', 'Password', 'Email Access'],
        reveal: 'Attackers steal Instagram credentials and take over accounts to scam followers or sell access.',
        flags: ['Threatens account suspension', 'Requests your password directly', 'Domain is not instagram.com', 'Creates urgency to bypass thinking'],
        tips: ['Instagram never asks for passwords through external links', 'Check the website domain carefully', 'Enable two-factor authentication', 'Use a password manager'],
        quiz: [
          { q: 'Which website should you trust for Instagram login?', opts: ['instagram-security-verify.com', 'instagram-help-login.net', 'instagram.com', 'secure-meta-verify.com'], ans: 2, exp: 'Only official Instagram domains should be trusted.' },
          { q: 'What is the biggest risk?', opts: ['Losing followers', 'Account takeover', 'Slow internet', 'App update'], ans: 1, exp: 'Stolen credentials allow complete account takeover.' },
          { q: 'What helps protect accounts?', opts: ['Strong passwords only', '2FA', 'Private account', 'More followers'], ans: 1, exp: 'Two-factor authentication greatly reduces account compromise risk.' }]
      },
      {
        id: 14, icon: '⚡', title: 'Electricity Bill Disconnection Scam', desc: 'Your electricity service will be disconnected today due to an unpaid bill. Pay immediately.', diff: 'med', tag: 'Utility Fraud',
        url: 'power-bill-payment.in', badge: 'FINAL DISCONNECTION NOTICE',
        amount: '₹2,485 Due',
        amountLabel: 'Service Termination Today',
        fee: 'Pay Outstanding Bill',
        feeNote: 'Power supply will be disconnected within 30 minutes',
        fields: [
          { n: 'name', p: 'Consumer Name', t: 'text' },
          { n: 'mobile', p: 'Registered Mobile Number', t: 'text' },
          { n: 'upi', p: 'UPI ID For Payment', t: 'text' }
        ],
        exposed: ['Personal Details', 'UPI Information', 'Money'],
        reveal: 'Scammers impersonate electricity providers and pressure victims into making immediate payments.',
        flags: ['Threatens immediate disconnection', 'Uses fear and urgency', 'Demands payment through personal accounts', 'Message often arrives outside normal billing cycles'],
        tips: ['Verify bills through official utility portals', 'Call customer service directly', 'Never trust payment links from SMS', 'Check your actual bill status first'],
        quiz: [
          { q: 'What is the first step after receiving such a message?', opts: ['Pay immediately', 'Verify with utility provider', 'Ignore forever', 'Share with friends'], ans: 1, exp: 'Always verify directly with the utility provider.' },
          { q: 'Why do scammers use disconnection threats?', opts: ['To improve service', 'To create panic', 'To save time', 'To help customers'], ans: 1, exp: 'Fear causes people to act quickly without verification.' },
          { q: 'Where should bills be verified?', opts: ['SMS links', 'WhatsApp forwards', 'Official provider website/app', 'Social media comments'], ans: 2, exp: 'Official channels are safest.' }]
      },
      {
        id: 15, icon: '💰', title: 'Income Tax Refund Scam', desc: 'You are eligible for a tax refund of ₹48,500. Submit your bank details to receive payment.', diff: 'high', tag: 'Identity Theft',
        url: 'incometax-refund-gov.co.in', badge: 'Tax Refund Approved',
        amount: '₹48,500 Refund',
        amountLabel: 'Claim Within 24 Hours',
        fee: 'Bank Verification Required',
        feeNote: 'Refund will expire if not claimed',
        fields: [
          { n: 'pan', p: 'PAN Number', t: 'text' },
          { n: 'account', p: 'Bank Account Number', t: 'text' },
          { n: 'ifsc', p: 'IFSC Code', t: 'text' }
        ],
        exposed: ['PAN', 'Bank Details', 'Identity Information'],
        reveal: 'Scammers use fake refund notices to steal financial and identity information.',
        flags: ['Unexpected refund notification', 'Non-government website', 'Demands banking details', 'Short deadlines'],
        tips: ['Check refunds only through official government portals', 'Never share banking details through email links', 'Verify sender addresses carefully', 'Enable account alerts'],
        quiz: [
          { q: 'What should you verify first?', opts: ['Refund amount', 'Website domain', 'Bank balance', 'PAN number'], ans: 1, exp: 'Always verify the website before entering data.' },
          { q: 'Which information is especially sensitive?', opts: ['PAN and bank account details', 'Mobile wallpaper', 'Browser history', 'WiFi name'], ans: 0, exp: 'Identity and banking information can be abused.' },
          { q: 'Government refund notices should be checked via?', opts: ['WhatsApp', 'Official tax portal', 'SMS links', 'Facebook'], ans: 1, exp: 'Always use official government portals.' }
        ]
      },
      {
        id: 16, icon: '🏢', title: 'Corporate Password Reset Scam', desc: 'Your Microsoft 365 account password expires today. Reset it immediately to avoid losing email access.', diff: 'high', tag: 'Corporate Phishing',
        url: 'microsoft365-password-reset.net', badge: 'Password Expiration Notice',
        amount: 'Corporate Account Alert',
        amountLabel: 'Reset Required Today',
        fee: 'Security Verification',
        feeNote: 'Access may be suspended',
        fields: [
          { n: 'employeeid', p: 'Employee ID', t: 'text' },
          { n: 'email', p: 'Work Email', t: 'email' },
          { n: 'password', p: 'Current Password', t: 'password' }
        ],
        exposed: ['Corporate Credentials', 'Employee Information', 'Email Access'],
        reveal: 'Corporate phishing attacks target employee accounts to gain access to company systems and sensitive data.',
        flags: ['Requests current password', 'External website', 'Urgent expiration warning', 'Impersonates IT department'],
        tips: ['Verify with internal IT teams', 'Check sender domain carefully', 'Use MFA wherever possible', 'Report suspicious emails immediately'],
        quiz: [
          { q: 'Who should verify password reset requests?', opts: ['Random email links', 'Coworkers', 'IT department', 'Social media'], ans: 2, exp: 'Always confirm with official IT channels.' },
          { q: 'Why are employees targeted?', opts: ['Entertainment', 'Access to company systems', 'Free software', 'Internet speed'], ans: 1, exp: 'Corporate accounts often provide access to valuable resources.' },
          { q: 'Best defense against credential theft?', opts: ['Ignoring emails', 'Multi-factor authentication', 'Using public WiFi', 'Sharing passwords'], ans: 1, exp: 'MFA significantly reduces compromise risk.' }
        ]
      },
      {
        id: 17, icon: '📶', title: 'SIM Upgrade Scam', desc: 'Your SIM must be upgraded to support 5G services. Verify your number and OTP now.', diff: 'high', tag: 'Telecom Fraud',
        url: '5g-network-upgrade.com', badge: 'SIM Upgrade Required',
        amount: 'Free 5G Upgrade',
        amountLabel: 'Activate Today',
        fee: 'Verification Required',
        feeNote: 'Your number may stop working',
        fields: [
          { n: 'mobile', p: 'Mobile Number', t: 'text' },
          { n: 'aadhaar', p: 'Aadhaar Number', t: 'text' },
          { n: 'otp', p: 'OTP Received', t: 'text' }
        ],
        exposed: ['Mobile Number', 'OTP', 'Identity Information'],
        reveal: 'Scammers use OTPs to transfer your number to a SIM card they control, allowing them to intercept banking and authentication messages.',
        flags: ['Unexpected upgrade request', 'Asks for OTP', 'Threatens service disruption', 'Requests identity documents'],
        tips: ['Telecom companies never ask for OTPs over calls or messages', 'Contact your provider directly', 'Enable SIM lock where available', 'Monitor sudden loss of network signal'],
        quiz: [
          { q: 'What can happen after a successful SIM swap?', opts: ['Faster internet', 'Number transferred to attacker', 'Free upgrade', 'Better signal'], ans: 1, exp: 'The attacker gains control of your phone number.' },
          { q: 'Why is OTP theft dangerous?', opts: ['It changes wallpaper', 'It enables account takeover', 'It improves security', 'It updates SIM'], ans: 1, exp: 'Many services use OTPs for authentication.' },
          { q: 'What should you do if your phone suddenly loses network service?', opts: ['Ignore it', 'Contact your telecom provider immediately', 'Restart later', 'Buy a new phone'], ans: 1, exp: 'Unexpected loss of service may indicate SIM swap activity.' }
        ]
      },
      {
        id: 18, icon: '🎓', title: 'Government Scholarship Scam', desc: 'Congratulations! You have been selected for a government scholarship worth ₹50,000.', diff: 'med', tag: 'Education Fraud',
        url: 'national-scholarship-benefits.in',
        badge: 'Scholarship Approved',
        amount: '₹50,000 Award',
        amountLabel: 'Claim Before Deadline',
        fee: 'Bank Verification Required',
        feeNote: 'Scholarship expires in 24 hours',
        fields: [
          { n: 'name', p: 'Student Name', t: 'text' },
          { n: 'aadhaar', p: 'Aadhaar Number', t: 'text' },
          { n: 'account', p: 'Bank Account Number', t: 'text' }
        ],
        exposed: ['Identity Information', 'Bank Details'],
        reveal: 'Scammers target students by promising scholarships and collecting identity and banking information.',
        flags: ['Unexpected scholarship approval', 'Requests Aadhaar and bank details', 'Creates urgency', 'Uses unofficial website'],
        tips: ['Verify scholarships through official portals', 'Never share personal documents via random links', 'Check eligibility criteria carefully', 'Confirm with your institution'],
        quiz: [
          { q: 'What should you verify first?', opts: ['Amount offered', 'Official scholarship website', 'Bank account', 'Aadhaar'], ans: 1, exp: 'Always verify through official government or institution portals.' },
          { q: 'Why do scammers target students?', opts: ['Students have more money', 'Students may be less familiar with fraud', 'Scholarships are illegal', 'Banks require it'], ans: 1, exp: 'Students are often targeted because they are actively seeking opportunities.' },
          { q: 'Which information is sensitive?', opts: ['Aadhaar number', 'Favorite subject', 'College name', 'Age'], ans: 0, exp: 'Identity documents can be misused for fraud.' }
        ]
      },
      {
        id: 19, icon: '📢', title: 'Copyright Violation Account Suspension', desc: 'Your Facebook/Instagram page violated copyright policies. Appeal now to avoid deletion.', diff: 'high', tag: 'Social Engineering',
        url: 'meta-copyright-review.com',
        badge: 'Page Removal Warning',
        amount: 'Account Restricted',
        amountLabel: 'Appeal Required',
        fee: 'Identity Verification',
        feeNote: 'Page may be deleted within 12 hours',
        fields: [
          { n: 'username', p: 'Page Username', t: 'text' },
          { n: 'email', p: 'Business Email', t: 'email' },
          { n: 'password', p: 'Account Password', t: 'password' }
        ],
        exposed: ['Social Media Credentials', 'Email Access'],
        reveal: 'Attackers impersonate Meta and steal login credentials to hijack social media accounts.',
        flags: ['Threatens immediate page deletion', 'Requests password directly', 'Uses unofficial domain', 'Creates panic'],
        tips: ['Check notification center inside the app', 'Never enter passwords on external sites', 'Enable 2FA', 'Verify domain names carefully'],
        quiz: [
          { q: 'Where should policy violations appear?', opts: ['Random websites', 'Official platform notifications', 'WhatsApp', 'SMS only'], ans: 1, exp: 'Legitimate violations appear inside the platform.' },
          { q: 'What is the scammer after?', opts: ['Likes', 'Credentials', 'Followers', 'Photos'], ans: 1, exp: 'The goal is account takeover.' },
          { q: 'What helps protect accounts?', opts: ['2FA', 'More posts', 'Private profile', 'Faster internet'], ans: 0, exp: 'Two-factor authentication adds extra security.' }
        ]
      },
      {
        id: 20, icon: '✈️', title: 'International Parcel Customs Fee Scam', desc: 'Your international parcel is held at customs. Pay clearance charges immediately.', diff: 'med', tag: 'Delivery Fraud',
        url: 'customs-clearance-india.com',
        badge: 'Parcel Held At Customs',
        amount: '₹1,950 Clearance Fee',
        amountLabel: 'Release Package Today',
        fee: 'Customs Processing Charge',
        feeNote: 'Parcel will be returned if unpaid',
        fields: [
          { n: 'name', p: 'Recipient Name', t: 'text' },
          { n: 'address', p: 'Delivery Address', t: 'text' },
          { n: 'card', p: 'Card Number', t: 'text' }
        ],
        exposed: ['Card Information', 'Address', 'Personal Data'],
        reveal: 'Victims are tricked into paying fake customs fees and revealing payment details.',
        flags: ['Unexpected international shipment', 'Small fee requests', 'Urgency', 'Unofficial customs website'],
        tips: ['Verify tracking with official courier websites', 'Confirm whether you actually ordered something', 'Never trust customs requests via SMS links', 'Use official tracking numbers'],
        quiz: [
          { q: 'What should you check first?', opts: ['Payment amount', 'Whether you ordered the package', 'Card limit', 'Address'], ans: 1, exp: 'Many victims never ordered any package.' },
          { q: 'What do scammers want?', opts: ['Customs data', 'Card details and money', 'Delivery confirmation', 'Phone updates'], ans: 1, exp: 'The primary goal is financial theft.' },
          { q: 'Where should tracking be verified?', opts: ['SMS link', 'Official courier site', 'WhatsApp', 'Facebook'], ans: 1, exp: 'Always use official courier services.' }
        ]
      },
      {
        id: 21, icon: '❤️', title: 'Disaster Relief Donation Scam', desc: 'Help flood victims immediately. Donate now to save lives.', diff: 'med', tag: 'Charity Fraud',
        url: 'emergency-relief-fund-help.org',
        badge: 'Emergency Appeal',
        amount: 'Donate Any Amount',
        amountLabel: 'Lives Depend On You',
        fee: 'Instant UPI Donation',
        feeNote: 'Campaign ending tonight',
        fields: [
          { n: 'name', p: 'Full Name', t: 'text' },
          { n: 'mobile', p: 'Mobile Number', t: 'text' },
          { n: 'upi', p: 'UPI ID', t: 'text' }
        ],
        exposed: ['Personal Details', 'Financial Information'],
        reveal: 'Scammers exploit emotions during disasters to collect donations for fake causes.',
        flags: ['Heavy emotional pressure', 'Little transparency', 'Urgent donation requests', 'No verified charity registration'],
        tips: ['Donate through verified organizations', 'Research charities before donating', 'Check registration details', 'Avoid donating via forwarded messages'],
        quiz: [
          { q: 'What should you verify before donating?', opts: ['Logo color', 'Organization legitimacy', 'Donation amount', 'Website design'], ans: 1, exp: 'Always verify the charity is genuine.' },
          { q: 'Why do these scams work?', opts: ['People are emotional', 'Internet is slow', 'Banks require donations', 'Government support'], ans: 0, exp: 'Scammers exploit empathy and urgency.' },
          { q: 'Best place to donate?', opts: ['Random UPI IDs', 'Verified charities', 'Social media DMs', 'Unknown links'], ans: 1, exp: 'Verified organizations are safest.' }
        ]
      },
      {
        id: 22, icon: '📶', title: 'Free Public Wi-Fi Login Scam', desc: 'Connect to free Wi-Fi by signing in with your email account.', diff: 'high', tag: 'Credential Theft',
        url: 'free-airport-wifi-login.com',
        badge: 'Free Wi-Fi Access',
        amount: 'Unlimited Internet',
        amountLabel: 'Login To Continue',
        fee: 'Account Verification',
        feeNote: 'Access expires in 5 minutes',
        fields: [
          { n: 'email', p: 'Email Address', t: 'email' },
          { n: 'password', p: 'Password', t: 'password' }
        ],
        exposed: ['Email Credentials', 'Personal Data'],
        reveal: 'Fake captive portals steal email credentials and can lead to account compromise.',
        flags: ['Requests full email password', 'Suspicious Wi-Fi network', 'Poor website design', 'Unexpected login requirements'],
        tips: ['Use trusted networks only', 'Avoid entering passwords on public Wi-Fi portals', 'Use VPNs when possible', 'Enable MFA on important accounts'],
        quiz: [
          { q: 'What is the main goal of fake Wi-Fi portals?', opts: ['Improve internet speed', 'Steal credentials', 'Show ads', 'Collect surveys'], ans: 1, exp: 'Credential theft is the primary objective.' },
          { q: 'Which account is commonly targeted?', opts: ['Gaming account', 'Email account', 'Calculator app', 'Gallery app'], ans: 1, exp: 'Email access often leads to other account compromises.' },
          { q: 'What helps secure public Wi-Fi usage?', opts: ['VPN', 'More tabs open', 'Bluetooth', 'Airplane mode'], ans: 0, exp: 'VPNs help protect traffic on untrusted networks.' }
        ]
      },
      {
        id: 23, icon: '🧠', title: 'Cognitive Biases in Social Engineering', desc: 'Learn how hackers exploit human psychology like Urgency, Authority, and Halo Effect.', diff: 'med', tag: 'Psychology & Defense',
        url: 'internal-hr-portal-update.com', badge: 'Mandatory Compliance', amount: 'Urgent Action Required', amountLabel: 'CEO Office Notice',
        fee: 'Security Clearance', feeNote: 'Failure results in account suspension',
        fields: [
          { n: 'empId', p: 'Employee ID', t: 'text' },
          { n: 'pass', p: 'Current Domain Password', t: 'password' },
          { n: 'mfa', p: 'MFA Backup Token', t: 'text' }
        ],
        exposed: ['Corporate Domain Password', 'MFA Backup Tokens', 'Employee Identity'],
        reveal: 'You were manipulated by Authority and Urgency bias! Scammers impersonated senior executives and threatened disciplinary action to bypass your analytical thinking.',
        flags: ['Extreme urgency demanding action within minutes', 'Impersonation of CEO or HR authority figures', 'Threats of account suspension or termination', 'Unusual requests for credentials via non-standard links'],
        tips: ['Take a 60-second "tactical pause" when feeling panic or urgency', 'Verify authority requests through known out-of-band communication', 'Remember that executives will never demand passwords via email or chat', 'Understand your own cognitive blind spots when stressed'],
        quiz: [
          { q: 'Which cognitive bias forces you to act quickly without thinking?', opts: ['Confirmation Bias', 'Urgency Bias', 'Halo Effect', 'Sunk Cost Fallacy'], ans: 1, exp: 'Urgency triggers fight-or-flight panic, bypassing logical verification.' },
          { q: 'When a hacker pretends to be the CEO or police, what bias are they exploiting?', opts: ['Authority Bias', 'Scarcity Bias', 'Reciprocity', 'Anchoring'], ans: 0, exp: 'We are conditioned from childhood to obey authority figures without questioning.' },
          { q: 'What is the most effective defense against psychological manipulation?', opts: ['Faster typing', 'Taking a tactical pause to verify out-of-band', 'Ignoring all emails', 'Using Incognito mode'], ans: 1, exp: 'A tactical pause breaks the emotional hijacking and allows rational thought to return.' }
        ]
      },
      {
        id: 24, icon: '🏢', title: 'Workplace & Shadow IT Security', desc: 'Navigate Slack phishing, unapproved AI tools, USB drop baiting, and remote work hazards.', diff: 'high', tag: 'Enterprise Security',
        url: 'fast-ai-pdf-summarizer-free.com', badge: 'Free AI Tool', amount: '100% Free Enterprise AI', amountLabel: 'Upload Confidential Contracts',
        fee: 'No Login Required', feeNote: 'Instant processing',
        fields: [
          { n: 'doc', p: 'Upload Confidential NDA / Contract PDF', t: 'text' },
          { n: 'apiKey', p: 'Paste Company AWS / API Key for Analysis', t: 'text' }
        ],
        exposed: ['Confidential Legal Contracts', 'Corporate AWS/API Keys', 'Customer Data'],
        reveal: 'You committed a Shadow IT security breach! Uploading company data or API keys to unapproved third-party AI tools can expose your organization to severe data leaks and regulatory fines.',
flags: ['Using free third-party tools without IT/Security approval', 'Uploading proprietary company data to public AI services', 'Pasting API keys or secrets into external web forms', 'Accepting random calendar invites or Slack files from external vendors'],
        tips: ['Only use company-approved enterprise AI assistants with data privacy agreements', 'Never paste API keys, passwords, or customer PII into free online utilities', 'Report unapproved software or suspicious Slack/Teams messages to IT Security', 'Be wary of free tools whose business model is harvesting user data'],
        quiz: [
          { q: 'What is "Shadow IT"?', opts: ['Working in a dark room', 'Using software or tools without IT department approval', 'Dark mode in Windows', 'Secret corporate server rooms'], ans: 1, exp: 'Shadow IT introduces unmonitored security vulnerabilities and data leakage risks.' },
          { q: 'Why is uploading company contracts to a free online PDF summarizer dangerous?', opts: ['It uses too much internet bandwidth', 'The site\'s terms may allow them to store and sell your confidential data', 'The PDF might get deleted', 'It makes the computer slow'], ans: 1, exp: 'Many free utilities monetize by harvesting and indexing uploaded proprietary data.' },
          { q: 'What should you do if an external vendor sends an executable (.exe) via Slack?', opts: ['Run it immediately', 'Forward it to everyone', 'Do not open it and report to IT security', 'Rename it to .txt'], ans: 2, exp: 'External chat attachments are a common vector for ransomware and infostealers.' }
        ]
      },
      {
        id: 126,
        exposed: ["Remote Desktop Access","Saved Browser Passwords","Online Banking Sessions"],
        reveal: "You gave a scammer remote access to your computer! Once connected via tools like AnyDesk, attackers can steal files, passwords, and transfer money from active banking sessions.",
        flags: ["Unsolicited pop-up warning with a loud siren or phone number","Caller claiming to be from Microsoft/Apple tech support","Instruction to download screen-sharing or remote access software"],
        tips: ["Legitimate tech companies never make unsolicited support calls","Never download AnyDesk or TeamViewer at the request of a stranger","Close browser popups immediately without calling the toll-free number"],
        icon: '🖥️',
        title: 'Tech Support Remote Access Scam',
        desc: 'Fake tech support calls claiming your computer is infected.',
        diff: 'med',
        tag: 'Tech Support',
        safetyTip: 'Legitimate tech companies never call unsolicited. Hang up.',
        quiz: [
          { q: 'Do legitimate companies like Microsoft or Apple make unsolicited calls claiming your PC is infected?', opts: ['Yes, always', 'Never', 'Only for premium users', 'Only on weekends'], ans: 1, exp: 'Legitimate tech companies never initiate unsolicited phone calls or popups asking for remote access.' },
          { q: 'What is the primary danger of downloading remote access tools like AnyDesk for an unknown caller?', opts: ['It slows down your internet', 'They gain full control of your screen, files, and banking sessions', 'It deletes your wallpaper', 'It increases electricity bill'], ans: 1, exp: 'Remote desktop software grants the scammer complete administrative control over your device.' },
          { q: 'What should you do if a browser popup shows a loud siren and a toll-free support number?', opts: ['Call the number immediately', 'Pay the fee shown', 'Close the browser tab or restart your computer', 'Download their repair tool'], ans: 2, exp: 'Scary popups are malicious web ads designed to induce panic; closing the tab stops the alert.' }
        ]
      },
      {
        id: 127,
        exposed: ["Browser Notification Permissions","System Adware Infection"],
        reveal: "You allowed malicious push notifications! Unscrupulous websites use notification permissions to spam your desktop with fake virus alerts and phishing links.",
        flags: ["Streaming or download site forcing you to click Allow notifications to continue","Persistent system alerts appearing from web browsers","Popups claiming your PC is infected with multiple viruses"],
        tips: ["Never click Allow on notification prompts from unfamiliar websites","Check browser settings under Site Settings -> Notifications to revoke rogue sites","Use an ad-blocker or modern browser protection"],
        icon: '🔔',
        title: 'Browser Notification Scam',
        desc: 'Malicious software that infects devices to steal data or ransom.',
        diff: 'low',
        tag: 'Malware',
        safetyTip: 'Install reputable antivirus and keep software updated.',
        quiz: [
          { q: 'Why do suspicious streaming or download websites ask you to click "Allow" notifications?', opts: ['To check internet speed', 'To flood your desktop with fake virus alerts and adware', 'To improve video resolution', 'To verify your age'], ans: 1, exp: 'Abusive push notifications display fake system warnings to trick you into purchasing malware.' },
          { q: 'Can a website notification scan your computer hard drive for viruses?', opts: ['Yes, browsers scan hardware', 'No, notifications are just text alerts sent by web servers', 'Only on Windows 11', 'Only if you use Chrome'], ans: 1, exp: 'Web push notifications have no access to scan your local disk or detect real viruses.' },
          { q: 'How do you stop persistent fake antivirus popups appearing in the corner of your screen?', opts: ['Buy the antivirus they advertise', 'Revoke notification permissions for unknown sites in browser settings', 'Format your hard drive', 'Unplug your monitor'], ans: 1, exp: 'Removing the site from your browser\'s Allowed Notifications list instantly stops the popups.' }
        ]
      },
      {
        id: 128,
        exposed: ["Cryptocurrency Wallet Address","High-Value Crypto Transfer"],
        reveal: "You fell victim to clipboard hijacking (Clipper malware)! The malware monitored your copy-paste memory and swapped your intended recipient address with the attacker's wallet address.",
        flags: ["Pasted cryptocurrency address looks slightly different in the middle characters","Unverified utility or pirated software installed recently","Transactions sent to addresses matching only the first/last few letters"],
        tips: ["Verify every single character of a cryptocurrency wallet address before sending","Use hardware wallets with physical screens to confirm destination addresses","Keep your OS and antivirus definitions updated"],
        icon: '📋',
        title: 'Clipboard Hijacking Malware',
        desc: 'Malicious software that infects devices to steal data or ransom.',
        diff: 'high',
        tag: 'Malware',
        safetyTip: 'Install reputable antivirus and keep software updated.',
        quiz: [
          { q: 'What does a "Clipper" or clipboard hijacking trojan do?', opts: ['Deletes your copy-paste history', 'Monitors clipboard memory and replaces copied crypto/bank addresses with the attacker\'s address', 'Locks your keyboard', 'Speeds up typing'], ans: 1, exp: 'Clipper malware intercepts copy-paste actions to divert high-value transactions to attacker accounts.' },
          { q: 'Why do attackers generate addresses with matching first and last characters?', opts: ['Because of blockchain rules', 'To trick users who only glance at the start and end of a pasted address', 'To make transfers faster', 'To lower transaction fees'], ans: 1, exp: 'Scammers use vanity address generators so lookalike addresses fool superficial inspections.' },
          { q: 'What is the best habit before confirming any large cryptocurrency transfer?', opts: ['Only check the first 2 characters', 'Verify the entire recipient address character-by-character on a trusted hardware display', 'Paste it 5 times rapidly', 'Turn off Wi-Fi before sending'], ans: 1, exp: 'Full character-by-character verification prevents loss from clipboard replacement.' }
        ]
      },
      {
        id: 129,
        exposed: ["All Wallet Tokens & NFTs","Unlimited Smart Contract Approval"],
        reveal: "You signed a wallet drainer transaction! Approving a setApprovalForAll signature allows malicious Web3 smart contracts to empty your wallet instantly.",
        flags: ["Unsolicited crypto airdrop or urgent NFT mint website","Signature prompt requesting unlimited token allowance or approval","Unverified Web3 dApp requesting wallet connection"],
        tips: ["Never connect your crypto wallet to unknown airdrop or giveaway links","Carefully inspect transaction permissions before signing Web3 messages","Use tools like Revoke.cash to cancel open token allowances"],
        icon: '🦊',
        title: 'Crypto Wallet Drainer',
        desc: 'Cryptocurrency scams, fake exchanges, or investment fraud.',
        diff: 'high',
        tag: 'Crypto',
        safetyTip: 'Invest only through regulated exchanges. Avoid guaranteed returns.',
        quiz: [
          { q: 'What happens when you sign a `setApprovalForAll` permission on a malicious Web3 dApp?', opts: ['You receive free airdrop tokens', 'You grant the smart contract permission to withdraw all tokens and NFTs from your wallet', 'Your wallet gets upgraded', 'You pay zero gas fees'], ans: 1, exp: 'Unlimited approval permissions allow malicious contracts to drain your entire token balance.' },
          { q: 'How do crypto drainer scams typically lure victims?', opts: ['Offering free token airdrops, NFT mints, or urgent reward claims', 'Sending physical letters', 'Calling on landlines', 'Offering bank loans'], ans: 0, exp: 'Free crypto airdrops and FOMO tactics induce users to sign unverified wallet signatures.' },
          { q: 'What should you do if you accidentally connect your wallet to a suspicious dApp?', opts: ['Send more ETH to test it', 'Use a trusted revocation tool (like Revoke.cash) to immediately cancel open token allowances', 'Delete the browser app', 'Wait 24 hours'], ans: 1, exp: 'Revoking smart contract allowances immediately removes their ability to move your assets.' }
        ]
      },
      {
        id: 130,
        exposed: ["Credit Card Number & CVV","Fake Renewal Charge ()"],
        reveal: "You entered payment details on a fake antivirus invoice popup! Scammers impersonate brands like Norton or McAfee to trick you into calling fake refund helplines or paying bogus charges.",
        flags: ["Email or web popup claiming an automatic  renewal charge","Urgent phone number provided to cancel or refund the subscription","Customer care agent asking for card details or screen-sharing"],
        tips: ["Verify subscriptions by logging into your official antivirus account directly","Never call phone numbers listed in unexpected invoice emails or popups","Check your real bank statement independently before reacting"],
        icon: '🛡️',
        title: 'Fake Antivirus Subscription',
        desc: 'Malicious software that infects devices to steal data or ransom.',
        diff: 'med',
        tag: 'Malware',
        safetyTip: 'Install reputable antivirus and keep software updated.',
        quiz: [
          { q: 'How can you distinguish a fake antivirus popup from real security software?', opts: ['Real antivirus software runs locally on your OS, not inside website ad banners', 'Fake ones use green text', 'Real ones always ask for Bitcoin', 'Fake ones only appear on Tuesdays'], ans: 0, exp: 'Legitimate OS security alerts come from system notifications, never from website ad frames.' },
          { q: 'Why do scammers impersonate well-known brands like Norton or McAfee?', opts: ['To build false trust and panic victims into entering credit card details', 'Because they work for those companies', 'To offer legitimate discounts', 'To repair your computer for free'], ans: 0, exp: 'Brand spoofing leverages established reputation to lower victim skepticism.' },
          { q: 'What should you do if an email or popup claims you will be charged $399 for antivirus renewal?', opts: ['Click the refund link inside the email', 'Call the number listed in the alert', 'Log into your official account directly or check your real bank statement independently', 'Reply with your card number'], ans: 2, exp: 'Independent verification via official channels prevents falling for refund extortion traps.' }
        ]
      },
      {
        id: 131,
        exposed: ["Cellular Phone Number","Bank 2FA SMS OTPs","Email Password Recovery"],
        reveal: "You shared your SIM replacement OTP! Attackers use this code to transfer your phone number to their eSIM device, intercepting all your SMS OTPs.",
        flags: ["SMS warning that your SIM will be disconnected unless you upgrade immediately","Request to share a 6-digit network activation or eSIM OTP","Sudden loss of cellular network signal (No Service)"],
        tips: ["Never share OTP codes sent by your mobile carrier with anyone","Set a carrier account PIN to prevent unauthorized SIM replacements","Use authenticator apps (TOTP) instead of SMS for critical accounts"],
        icon: '📱',
        title: 'eSIM Hijacking',
        desc: 'SIM swap or SIM card fraud.',
        diff: 'high',
        tag: 'SIM',
        safetyTip: 'Contact your mobile provider immediately if SIM stops working.',
        quiz: [
          { q: 'What is eSIM hijacking or SIM swap fraud?', opts: ['Upgrading to 5G speed', 'Scammers tricking you or your carrier into transferring your phone number to their eSIM device', 'Buying a new phone case', 'Losing your phone charger'], ans: 1, exp: 'SIM hijacking redirects all incoming calls and SMS OTPs to the attacker\'s phone.' },
          { q: 'What is the most immediate warning sign of a successful SIM swap?', opts: ['Phone battery drains fast', 'Your phone suddenly loses cellular network service ("No Service / Emergency Calls Only")', 'Screen brightness increases', 'Wi-Fi disconnects'], ans: 1, exp: 'When your number is activated on an attacker\'s eSIM, your physical SIM loses network connection.' },
          { q: 'Should you ever share a 6-digit eSIM activation code or EID with an SMS caller?', opts: ['Yes, if they claim to be 5G support', 'Never under any circumstances', 'Only if they know your name', 'Only after 6 PM'], ans: 1, exp: 'Activation codes allow unauthorized devices to clone your mobile connection.' }
        ]
      },
      {
        id: 132,
        exposed: ["Exorbitant International Toll Charges","Phone Bill Balance"],
        reveal: "You returned a Wangiri missed call! Scammers call from premium-rate overseas numbers (+882, +234) so when you call back, you are billed expensive per-minute rates.",
        flags: ["Single-ring missed call from an unfamiliar international country code","Repeated missed calls at unusual hours","Automated voice recording keeping you on the line when you call back"],
        tips: ["Do not return unexpected missed calls from unknown international numbers","Block international spam prefixes on your phone","Check your carrier billing if you accidentally returned a suspicious call"],
        icon: '📞',
        title: 'Missed Call Scam',
        desc: 'Voice phishing via phone calls to steal personal information.',
        diff: 'low',
        tag: 'Vishing',
        safetyTip: 'Hang up and call back using official numbers. Never share OTP.',
        quiz: [
          { q: 'What is the "Wangiri" or One-Ring Missed Call scam?', opts: ['A free international greeting service', 'Scammers calling once from premium-rate overseas numbers so you call back and get billed exorbitant rates', 'A telecom network test', 'A wrong number'], ans: 1, exp: 'Wangiri bots rely on human curiosity to generate expensive international callback tolls.' },
          { q: 'What happens if you return a missed call to an unknown international satellite number (+882 / +234)?', opts: ['You get connected to customer care', 'Your phone bill is charged premium per-minute fees that get funneled to scammers', 'Your phone gets upgraded', 'Nothing happens'], ans: 1, exp: 'Premium-rate numbers charge high connection fees shared between carriers and fraudsters.' },
          { q: 'What is the safest response to repeated one-ring missed calls from unknown foreign prefixes?', opts: ['Call back immediately', 'Send a WhatsApp message asking who it is', 'Do not call back and block the number', 'Answer before the first ring ends'], ans: 2, exp: 'Blocking international Wangiri numbers prevents accidental callback charges.' }
        ]
      },
      {
        id: 133,
        exposed: ["Identity & Passport Details","Emergency Extortion Money"],
        reveal: "You fell for an international extortion call! Scammers impersonate customs or Interpol officers claiming your name was found on illegal parcels to extort money.",
        flags: ["Caller claiming to be police, customs, or Interpol threatening immediate arrest","Demand to transfer a security deposit to clear your name","High pressure refusing to let you disconnect or call a lawyer"],
        tips: ["Real police or customs departments never demand money transfers over the phone","Disconnect immediately if a caller threatens arrest for a parcel you never sent","Report fake government impersonators to the national cyber crime portal"],
        icon: '🎙️',
        title: 'International Call Scam',
        desc: 'Voice phishing via phone calls to steal personal information.',
        diff: 'med',
        tag: 'Vishing',
        safetyTip: 'Hang up and call back using official numbers. Never share OTP.',
        quiz: [
          { q: 'Why do international scammers threaten victims with fake Interpol or Customs arrest warrants over the phone?', opts: ['To enforce real international laws', 'To induce extreme psychological panic so victims transfer money without thinking', 'To verify address details', 'To recruit police officers'], ans: 1, exp: 'Fear and urgency bypass rational judgment during high-pressure Vishing calls.' },
          { q: 'Do real law enforcement agencies demand immediate "security deposits" via phone calls to cancel warrants?', opts: ['Yes, always', 'Never; legal procedures never involve transferring money over phone calls', 'Only for international parcels', 'Only on public holidays'], ans: 1, exp: 'No police or customs department asks for money or crypto transfers over the telephone.' },
          { q: 'What should you do if an international caller claims your identity was used in illegal parcel trafficking?', opts: ['Stay on the line and argue', 'Transfer the requested verification bond', 'Hang up immediately and report the number to cyber crime authorities', 'Give your bank account number'], ans: 2, exp: 'Disconnecting immediately breaks the scammer\'s psychological manipulation.' }
        ]
      },
      {
        id: 134,
        exposed: ["WhatsApp Account Access","Impersonation of Your Contacts"],
        reveal: "You forwarded your WhatsApp verification code! Scammers use the 6-digit SMS registration code to hijack your WhatsApp account and solicit money from your friends.",
        flags: ["Friend on WhatsApp asking you to forward an SMS code you just received","SMS notification containing a WhatsApp registration code you did not request","Sudden logout from your WhatsApp app"],
        tips: ["Enable Two-Step Verification (2FA PIN) in WhatsApp Settings immediately","Never forward any 6-digit SMS verification code to anyone, even friends","Call your friend on their phone number if they ask for urgent help"],
        icon: '💬',
        title: 'WhatsApp OTP Theft',
        desc: 'Fraudulent messages or calls via WhatsApp.',
        diff: 'med',
        tag: 'WhatsApp',
        safetyTip: 'Ignore forwarded offers. Verify with official sources.',
        quiz: [
          { q: 'Why would a "friend" on WhatsApp ask you to forward a 6-digit SMS code you just received?', opts: ['Their phone screen is broken', 'Their account was hacked, and they are trying to log into YOUR WhatsApp account using that OTP', 'They want to send you money', 'It is a WhatsApp software update'], ans: 1, exp: 'Forwarding a WhatsApp registration code gives the attacker full takeover of your account.' },
          { q: 'How can you protect your WhatsApp account even if someone intercepts your SMS OTP?', opts: ['Change your profile photo', 'Enable Two-Step Verification (2FA PIN) in WhatsApp Settings', 'Turn off read receipts', 'Use dark theme'], ans: 1, exp: 'Two-Step Verification requires a custom PIN that scammers cannot get from SMS OTPs.' },
          { q: 'What should you do if a contact suddenly asks for emergency money or OTP codes via chat?', opts: ['Send it immediately', 'Call them directly on their standard phone number to verify their voice and situation', 'Forward the message to groups', 'Block all your contacts'], ans: 1, exp: 'Direct voice verification exposes account takeover scams immediately.' }
        ]
      },
      {
        id: 135,
        exposed: ["Bank KYC Credentials","Net Banking Password"],
        reveal: "You clicked a link in a spoofed SMS! Attackers forge sender IDs (like AD-HDFCBK) to send fake KYC suspension messages containing phishing links.",
        flags: ["Urgent SMS claiming your bank account will be blocked today","Link pointing to an unofficial shortened or lookalike domain","Request to enter sensitive banking passwords or PAN card details online"],
        tips: ["Always open your official banking app or visit the bank branch directly for KYC","Never click links inside urgent account suspension SMS messages","Remember that sender IDs can be spoofed by third-party SMS gateways"],
        icon: '✉️',
        title: 'SMS Spoofing',
        desc: 'Fraudulent SMS messages with malicious links or fake offers.',
        diff: 'med',
        tag: 'SMS',
        safetyTip: 'Delete suspicious SMS. Don\'t click links or call back unknown numbers.',
        quiz: [
          { q: 'Can scammers send SMS messages that appear under your real bank\'s official Sender ID header?', opts: ['No, Sender IDs are unhackable', 'Yes, SMS spoofing allows attackers to forge alphanumeric sender names like AD-HDFCBK', 'Only on older phones', 'Only via email'], ans: 1, exp: 'SMS protocols allow sender name manipulation via third-party bulk messaging gateways.' },
          { q: 'What is the key indicator that an urgent KYC SMS is fraudulent?', opts: ['It contains a suspicious shortened or non-official web domain URL', 'It is delivered during daytime', 'It mentions your bank\'s name', 'It uses correct English grammar'], ans: 0, exp: 'Banks never send external `.top`, `.xyz`, or unverified links for KYC updates.' },
          { q: 'What is the safest way to update your bank KYC details?', opts: ['Click the link in the SMS message', 'Log directly into your official banking mobile app or visit your bank branch', 'Reply to the SMS with your Aadhaar number', 'Call the number given in the text'], ans: 1, exp: 'Using official, authenticated channels ensures you never submit data to phishing portals.' }
        ]
      },
      {
        id: 136,
        exposed: ["Corporate Email Password","Office 365 Account Credentials"],
        reveal: "You fell for Email Display Name Spoofing! Scammers disguise their display name as IT Helpdesk or CEO while using an external sender address to harvest login credentials.",
        flags: ["Display name says IT Helpdesk but actual email address is from an external domain","Urgent threat that your email account will be locked within 24 hours","Link directing to an unverified non-Microsoft login portal"],
        tips: ["Always inspect the actual email address and domain, not just the sender display name","Type official login URLs manually instead of clicking email links","Report suspicious corporate emails to your IT security team"],
        icon: '📧',
        title: 'Email Spoofing',
        desc: 'Fake communication (email/SMS) tricking you into revealing credentials.',
        diff: 'med',
        tag: 'Phishing',
        safetyTip: 'Never click links in unsolicited emails/SMS. Type the URL manually.',
        quiz: [
          { q: 'What is Email Display Name Spoofing?', opts: ['Changing your font size', 'Setting the email display name to "IT Helpdesk" or "CEO" while the actual sender address is an external domain', 'Encrypting an email attachment', 'Sending emails faster'], ans: 1, exp: 'Attackers rely on email clients prominently showing display names while hiding raw addresses.' },
          { q: 'How can you inspect the true origin of a suspicious corporate email?', opts: ['Look at the subject line color', 'Check the full email headers (`Return-Path` and actual domain address)', 'Print the email on paper', 'Forward it to yourself'], ans: 1, exp: 'Email headers reveal the true sending server and Reply-To destination.' },
          { q: 'Why do phishing emails often warn that your account will be locked within 24 hours?', opts: ['To help you manage time', 'To create urgency so you click without checking URLs or consulting IT security', 'Because servers shut down daily', 'To save server storage'], ans: 1, exp: 'Artificial deadlines induce cognitive hurry, suppressing analytical vigilance.' }
        ]
      },
      {
        id: 137,
        exposed: ["Banking OTP Code","Debit Card PIN","Account Funds"],
        reveal: "You shared your OTP on a spoofed phone call! Attackers use Caller ID spoofing to make their call appear from your bank's official helpline number.",
        flags: ["Caller showing your bank's helpline number asking you to read out an OTP","Agent claiming your account is under attack and requires an OTP to stop it","Pressure to stay on the line without hanging up"],
        tips: ["Banks never ask you to read out an OTP or PIN over the phone","Hang up and dial the official number on the back of your card yourself","Sharing an OTP always authorizes a transaction—never share it verbally"],
        icon: '☎️',
        title: 'Caller ID Spoofing',
        desc: 'Voice phishing via phone calls to steal personal information.',
        diff: 'high',
        tag: 'Vishing',
        safetyTip: 'Hang up and call back using official numbers. Never share OTP.',
        quiz: [
          { q: 'If your incoming phone display shows your bank\'s exact official 1800 helpline number, does that prove it is your bank?', opts: ['Yes, phone networks verify all caller IDs', 'No, Caller ID spoofing allows fraudsters to display any number on your screen', 'Only if the call is recorded', 'Only on landlines'], ans: 1, exp: 'Caller ID information can be easily manipulated using VoIP spoofing services.' },
          { q: 'Will a genuine bank customer service agent ever ask you to read out an OTP over the phone to cancel a transaction?', opts: ['Yes, for emergencies', 'Never; OTPs are confidential and banks never ask for them verbally', 'Only for credit cards', 'Only for amounts above ₹50,000'], ans: 1, exp: 'OTPs authenticate transactions; sharing them authorizes whatever charge the scammer initiated.' },
          { q: 'What should you do if an agent on a spoofed call claims your account is under active fraud attack?', opts: ['Stay on the line and share your OTP', 'Hang up immediately and dial the official number on the back of your card yourself', 'Read out your debit card PIN', 'Transfer funds to a "safe account"'], ans: 1, exp: 'Initiating a fresh call yourself guarantees you are speaking to authentic bank systems.' }
        ]
      },
      {
        id: 138,
        exposed: ["Live Connection to Fraud Syndicate","Personal Identity Details"],
        reveal: "You pressed 1 on a scam robocall! Automated calls claiming illegal packages or customs seizures filter victims and connect them to extortion call centers.",
        flags: ["Automated voice message claiming your parcel or identity is under investigation","Instruction to press 1 to speak to an officer","Threats of legal indictment or police dispatch"],
        tips: ["Hang up immediately when you hear an automated press-1 legal threat","Never press buttons on unsolicited automated calls","Government agencies do not notify citizens of criminal charges via robocalls"],
        icon: '🤖',
        title: 'Robocall Scam',
        desc: 'Voice phishing via phone calls to steal personal information.',
        diff: 'low',
        tag: 'Vishing',
        safetyTip: 'Hang up and call back using official numbers. Never share OTP.',
        quiz: [
          { q: 'Why do scammers use automated robocalls claiming illegal parcels or customs seizures?', opts: ['To test phone speaker volume', 'To automatically filter thousands of calls for scared victims who press 1', 'To conduct government surveys', 'To offer courier discounts'], ans: 1, exp: 'Robocalls enable fraudsters to scale phishing campaigns to thousands of numbers simultaneously.' },
          { q: 'What happens when you press "1" during an automated customs or narcotics robocall alert?', opts: ['Your parcel gets delivered', 'You are routed to a scam call center where fake officers demand extortion payments', 'The call disconnects safely', 'Your phone number is hidden'], ans: 1, exp: 'Pressing 1 signals to the scam syndicate that you are receptive to their intimidation script.' },
          { q: 'Do customs or law enforcement departments notify citizens of criminal indictments via automated press-1 robocalls?', opts: ['Yes, it is standard procedure', 'Never; official legal notices follow formal documented judicial processes', 'Only for international shipments', 'Only on weekends'], ans: 1, exp: 'No legitimate enforcement agency uses pre-recorded press-1 robocall threats.' }
        ]
      },
      {
        id: 139,
        exposed: ["Flight Booking Payment","UPI / Bank Transfer Funds"],
        reveal: "You paid for a fake flight booking! Scammers advertise unrealistic airfare discounts on lookalike travel portals and demand direct UPI/QR transfers.",
        flags: ["Flight tickets priced 70-80% cheaper than every official airline website","Payment restricted to direct UPI QR codes or personal bank transfers","High-pressure countdown timer urging immediate payment"],
        tips: ["Book flights directly on official airline websites or verified travel platforms","Avoid booking sites that refuse standard credit card payment gateways","Verify your ticket PNR directly on the airline website"],
        icon: '✈️',
        title: 'Fake Flight Ticket',
        desc: 'Fake travel bookings, flight tickets, or holiday packages.',
        diff: 'med',
        tag: 'Travel',
        safetyTip: 'Book directly through official airline/railway/hotel websites.',
        quiz: [
          { q: 'What is a major red flag when buying flight tickets from an unfamiliar online portal?', opts: ['Airfares that are 75-80% cheaper than every official airline website with countdown timers', 'Accepting credit cards', 'Showing flight schedules', 'Sending email confirmations'], ans: 0, exp: 'Unrealistic discounts coupled with high-pressure flash timers are classic travel scam markers.' },
          { q: 'Why do fake travel agency portals insist on direct UPI or QR code bank transfers instead of card gateways?', opts: ['UPI is faster for planes', 'Direct bank transfers lack credit card chargeback protection, making stolen funds irreversible', 'Airlines do not accept credit cards', 'To save paper'], ans: 1, exp: 'Scammers avoid merchant gateways because card payments can be disputed and reversed.' },
          { q: 'How can you verify if a flight ticket PNR issued by a third-party agent is authentic?', opts: ['Look at the PDF logo', 'Enter the PNR and surname directly on the official airline\'s "Manage Booking" website', 'Check the ticket color', 'Ask the travel agent on WhatsApp'], ans: 1, exp: 'Verifying directly on the carrier\'s official database confirms whether a genuine seat exists.' }
        ]
      },
      {
        id: 140,
        exposed: ["Vacation Rental Advance","Personal Payment Transfer"],
        reveal: "You transferred money for a fake hotel rental! Scammers use stolen photos of luxury resorts and ask victims to pay deposits via direct WhatsApp transfer.",
        flags: ["Host asking you to cancel platform booking and pay via direct UPI/WhatsApp transfer","All-inclusive resort offered at a suspiciously low price on social media","Refusal to accept payment through verified booking platforms"],
        tips: ["Keep all communication and payments inside official booking platforms (Airbnb, Booking.com)","Never wire money or send UPI transfers to individual social media sellers","Check independent reviews and verify property details before booking"],
        icon: '🏨',
        title: 'Fake Hotel Booking',
        desc: 'Fake travel bookings, flight tickets, or holiday packages.',
        diff: 'med',
        tag: 'Travel',
        safetyTip: 'Book directly through official airline/railway/hotel websites.',
        quiz: [
          { q: 'Why would a resort host ask you to cancel an official platform booking and pay advance via direct WhatsApp transfer?', opts: ['To give you better room service', 'To bypass platform protection and pocket your advance for a non-existent or double-booked room', 'To register your ID faster', 'To avoid local taxes legally'], ans: 1, exp: 'Off-platform payments strip away booking platform guarantees and refund protections.' },
          { q: 'What often happens when travelers arrive at a property booked via an unverified social media direct transfer?', opts: ['They receive a free upgrade', 'The property does not exist, or the real owners have no record of the booking', 'They get complimentary breakfast', 'The host greets them at the airport'], ans: 1, exp: 'Scammers frequently misappropriate photos of real villas to advertise phantom rentals.' },
          { q: 'What is the safest practice when booking peak-season vacation rentals?', opts: ['Pay 100% upfront to an individual UPI ID via Instagram DM', 'Complete all messaging and payments exclusively within trusted, verified booking platforms', 'Transfer money to a personal bank account', 'Never check reviews'], ans: 1, exp: 'Official booking platforms hold funds in escrow and offer verified guest protections.' }
        ]
      },
      {
        id: 141,
        exposed: ["Passport Scans & Identity Data","Visa Processing Fee"],
        reveal: "You fell for a fake visa expedition scam! Private agencies claiming 100% guaranteed visa approval steal processing fees and passport documents.",
        flags: ["Agency claiming to guarantee 100% visa approval or bypass embassy interviews","Website using commercial domain (.com/.top) instead of official government (.gov)","Demands for upfront express processing fees via personal bank transfer"],
        tips: ["Apply for visas strictly through official government embassy portals or authorized centers","No private agency can guarantee sovereign consular visa approval","Protect your passport scans from unverified third-party websites"],
        icon: '🛂',
        title: 'Fake Visa Approval',
        desc: 'Fake travel bookings, flight tickets, or holiday packages.',
        diff: 'high',
        tag: 'Travel',
        safetyTip: 'Book directly through official airline/railway/hotel websites.',
        quiz: [
          { q: 'Can a private online agency guarantee 100% visa approval or bypass mandatory embassy interviews?', opts: ['Yes, if you pay express fees', 'No; sovereign embassies strictly control visa issuance and no agency can guarantee approval', 'Only for tourist visas', 'Only for online e-visas'], ans: 1, exp: 'Consular authorities alone decide visa outcomes; "guaranteed approval" claims are always fraudulent.' },
          { q: 'What domain extension should official government visa application websites typically use?', opts: ['.org or .net', 'Official government domains (.gov, .gov.uk, or verified diplomatic portals)', '.top or .xyz', '.shop'], ans: 1, exp: 'Government diplomatic services operate exclusively on verified sovereign web domains.' },
          { q: 'What is the double risk of submitting passport scans and fees to a fake visa expedition site?', opts: ['Losing internet bookmarks', 'Financial theft combined with identity theft (stolen passport documents used for fraud)', 'Receiving too many promotional emails', 'Slow browser loading'], ans: 1, exp: 'Identity thieves harvest uploaded passport credentials to open fraudulent accounts.' }
        ]
      },
      {
        id: 142,
        exposed: ["All-Inclusive Holiday Deposit","Financial & Personal Details"],
        reveal: "You booked a non-existent holiday package! Scammers advertise luxury travel packages on Instagram/Facebook DMs and disappear after receiving deposits.",
        flags: ["Travel agency operating exclusively via Instagram or Telegram DM","Unrealistically cheap luxury holiday packages with immediate deposit deadlines","No registered physical office, GST number, or travel association accreditation"],
        tips: ["Verify travel agency accreditation (IATA/TAFI) before booking holiday packages","Avoid agencies that only communicate via social media direct messages","Use credit cards for travel bookings to maintain chargeback protection"],
        icon: '🏝️',
        title: 'Fake Travel Package',
        desc: 'Fake travel bookings, flight tickets, or holiday packages.',
        diff: 'med',
        tag: 'Travel',
        safetyTip: 'Book directly through official airline/railway/hotel websites.',
        quiz: [
          { q: 'How do fake social media travel agencies lure holidaymakers?', opts: ['Posting stolen luxury resort photos with unbelievably low all-inclusive package prices', 'Sending paper brochures', 'Advertising on television only', 'Offering free bus rides'], ans: 0, exp: 'Visual luxury combined with extreme discounts triggers impulse buying on social media.' },
          { q: 'Why should you be cautious if a travel agency only operates via Instagram DM and UPI QR codes?', opts: ['They are too modern', 'Legitimate tour operators provide registered office addresses, GST/license numbers, and verified payment gateways', 'Instagram is slow', 'UPI does not work on weekends'], ans: 1, exp: 'Lack of verifiable business credentials or physical presence is a hallmark of fly-by-night scams.' },
          { q: 'What step should you take before booking an all-inclusive tour package with an unfamiliar company?', opts: ['Pay the deposit immediately before slots run out', 'Verify their travel association registration (IATA/TAFI) and read independent third-party reviews', 'Ask them if they are genuine on chat', 'Share your credit card CVV'], ans: 1, exp: 'Verifying trade accreditation ensures the agency is legally registered and accountable.' }
        ]
      }
    ];