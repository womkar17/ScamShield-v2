export const MODULES = [
  {
    id: 0, icon: "💰", title: "Instant Loan Scam", desc: "Approve ₹5 lakh loan without verification — just pay processing fee", diff: "high", tag: "Financial Fraud",
    url: "fastloan-india.co.in", badge: "Loan Approved!", amount: "₹5,00,000", amountLabel: "Personal Loan Approved",
    fee: "Processing Fee: ₹2,000", feeNote: "Pay fee to release funds",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"tel"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"fee","p":"Card No. for Fee Payment","t":"text"}],
    exposed: ["Bank Account","Card Number","CVV","Contacts","Photos"],
    reveal: "You just gave away your banking details AND installed a predatory app. These fake loan apps don't just steal the ₹1,999 \"processing fee\"—they hack your phone's contacts and photo gallery. If you don't pay their extortionate fake interest rates, they will morph your photos and send them to your family and colleagues to blackmail you.",
    flags: ["Loan approved without ANY document verification or credit check.","App asks for a \"Security Deposit\" or \"Processing Fee\" BEFORE disbursing the loan.","App requests permission to access your Contacts, Gallery, and SMS.","The app is not registered with the RBI as an NBFC."],
    tips: ["NEVER pay an upfront fee for a loan. Real banks deduct processing fees from the final disbursed amount.","Check if the app is an RBI-registered NBFC. If it is not on the RBI website, it is illegal.","Never grant Contacts or Gallery permissions to a loan app. They use this data to blackmail you.","If blackmailed, DO NOT PAY. File a complaint immediately at cybercrime.gov.in (1930) and inform your contacts that your phone was hacked."],
    quiz: [
      { q: "What is the first red flag of a loan scam?", opts: ["Low interest rate","Loan approved without any verification","Long repayment period","Friendly customer service"], ans: 1, exp: "Legitimate loans require extensive KYC and credit checks. Instant approval is always a scam signal." },
      { q: "Where should you verify an NBFC lender?", opts: ["Google search","RBI NBFC registry at rbi.org.in","Their website","Social media"], ans: 1, exp: "RBI maintains an official list of registered NBFCs. Always verify." },
      { q: "How are legitimate processing fees charged?", opts: ["Paid via UPI before disbursement","Collected as cash","Deducted from the disbursed loan amount","Paid via gift cards"], ans: 2, exp: "Real lenders deduct fees from the loan — they never ask for upfront payments." }
    ]
  },

  {
    id: 1, icon: "💼", title: "Fake Interview Fee Scam", desc: "Cyber Analyst job ₹12 LPA — submit documents and pay ₹200 registration", diff: "med", tag: "Job Fraud",
    url: "hiring-cyberjobs.in", badge: "You're Selected!", amount: "₹12 LPA", amountLabel: "Cyber Security Analyst",
    fee: "Registration Fee: ₹200", feeNote: "Secure your slot before it expires",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"resume","p":"Upload Resume (Link)","t":"text"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"pan","p":"PAN Card Number","t":"text"},{"n":"fee","p":"Pay ₹200 Registration Fee (UPI)","t":"text"}],
    exposed: ["Name","Resume (Work History)","Aadhaar Number","PAN Number","Payment Details"],
    reveal: "You handed over PAN + Aadhaar — enough for identity theft, fraudulent loan applications, and SIM swaps.",
    flags: ["No official company website or verified email domain","Fee charged before interview happens","Requests Aadhaar + PAN together — perfect for identity theft","No HR contact name or office address"],
    tips: ["Legitimate companies never charge registration or interview fees","Verify the company on MCA21","Check company reviews on Glassdoor or LinkedIn","Never share Aadhaar + PAN in the same form"],
    quiz: [
      { q: "Which document combination is most dangerous to share with fake recruiters?", opts: ["Resume + Photo","Aadhaar + PAN together","Degree certificates","LinkedIn profile"], ans: 1, exp: "Aadhaar + PAN together enables identity theft, fraudulent loans, and SIM swap attacks." },
      { q: "What should you do before submitting to a job portal?", opts: ["Pay the fee quickly","Verify company on MCA21 or LinkedIn","Trust Google reviews","Accept the offer immediately"], ans: 1, exp: "MCA21 shows registered companies in India. Fake companies won't appear there." },
      { q: "Legitimate companies charge interview fees:", opts: ["Only for senior roles","For government jobs","Never","Always for tech jobs"], ans: 2, exp: "No legitimate employer ever charges candidates for interviews or registration." }
    ]
  },

  {
    id: 2, icon: "📱", title: "Too-Good-To-Be-True Phone Deal", desc: "iPhone 16 Pro for ₹2,999 — today only! Enter address + card.", diff: "high", tag: "E-Commerce Fraud",
    url: "apple-deals-india.shop", badge: "Flash Sale Live!", amount: "₹2,999", amountLabel: "iPhone 16 Pro (Was ₹1,39,900)",
    fee: "Pay Now to Reserve", feeNote: "Only 3 units left!",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"address","p":"Delivery Address","t":"text"},{"n":"card","p":"Card Number","t":"text"},{"n":"expiry","p":"Card Expiry (MM/YY)","t":"text"},{"n":"cvv","p":"CVV","t":"text"}],
    exposed: ["Full Card Number","Expiry Date","CVV","Home Address"],
    reveal: "You just handed over complete card details. This enables full card cloning and fraudulent purchases.",
    flags: ["URL ends in .shop — not apple.com","Price 98% below MRP is impossible","Urgency: \"Only 3 units left\"","No seller details, return policy, or GST number"],
    tips: ["Apple sells officially only at apple.com/in or authorised resellers","Prices 90%+ below MRP are always scams","CVV should NEVER be entered on unknown sites","Use virtual cards for online shopping"],
    quiz: [
      { q: "What is the safest way to buy Apple products in India?", opts: ["Facebook Marketplace","Telegram groups","apple.com/in or authorised resellers","WhatsApp deals"], ans: 2, exp: "Apple has an official India store and authorized retail partners. Never buy from unverified sites." },
      { q: "A product priced 95% below MRP is:", opts: ["A genuine clearance sale","A scam","A manufacturer defect","A beta product"], ans: 1, exp: "No legitimate seller can price genuine Apple products 95% below MRP — it's always fraud." },
      { q: "Which detail should you NEVER share online?", opts: ["Email address","Phone number","CVV of your credit card","Name"], ans: 2, exp: "CVV is a security code that should only be used on secure, verified checkout pages." }
    ]
  },

  {
    id: 3, icon: "🥇", title: "Fake Gold Coin Investment", desc: "24K gold coin market value ₹75,000 — get it for ₹4,999.", diff: "med", tag: "Investment Fraud",
    url: "goldcoin-offer24k.com", badge: "Certified 24K Gold", amount: "₹4,999", amountLabel: "24K Gold Coin (Market ₹75,000)",
    fee: "Order Now — Offer Ends Soon", feeNote: "BIS Hallmarked (claimed)",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"address","p":"Delivery Address","t":"text"},{"n":"upi","p":"UPI ID for Refund if Unavailable","t":"text"}],
    exposed: ["Name","Home Address","UPI ID"],
    reveal: "You ordered fake gold. The \"coin\" is brass-plated. Your UPI ID can be used to initiate payment requests.",
    flags: ["No BIS hallmark certificate shown","Price is 93% below market rate","No seller GST number or return policy","\"Limited stock\" creates artificial urgency"],
    tips: ["Buy gold only from RBI-authorised dealers or bank gold schemes","Always verify BIS hallmark at bis.gov.in","Sovereign Gold Bonds are the safest gold investment","Never share UPI ID as refund destination — it can be misused"],
    quiz: [
      { q: "Where should you buy certified gold in India?", opts: ["WhatsApp groups","Facebook Marketplace","Banks or BIS-hallmarked jewellers","Telegram channels"], ans: 2, exp: "RBI-authorised dealers and banks are the only safe sources for gold purchases in India." },
      { q: "BIS hallmark can be verified at:", opts: ["The seller's website","bis.gov.in","Google","Social media"], ans: 1, exp: "BIS (Bureau of Indian Standards) maintains an official registry of hallmarked products." },
      { q: "What can fraudsters do with your UPI ID?", opts: ["Nothing — it's only for receiving","Send you money only","Initiate collect requests to trick you","Block your account"], ans: 2, exp: "Fraudsters use collect/request features to trick victims into entering PIN and approving payments." }
    ]
  },

  {
    id: 4, icon: "🎰", title: "Lucky Draw Entry Fee", desc: "Win BMW, iPhone, or ₹10 Lakhs cash. Entry fee just ₹50.", diff: "low", tag: "Lottery Fraud",
    url: "india-lucky-draw2025.in", badge: "YOU HAVE BEEN SELECTED!", amount: "₹10,00,000", amountLabel: "Grand Prize Pool",
    fee: "Entry Fee: ₹50", feeNote: "Only 2 entries left at this price!",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"text"},{"n":"upi","p":"UPI ID to Receive Winnings","t":"text"}],
    exposed: ["Name","Mobile Number","UPI ID"],
    reveal: "There is no draw. Once you pay ₹50, you get \"You almost won — try again for ₹200.\" The cycle never ends.",
    flags: ["You \"won\" without entering any contest","Pressure: \"only 2 entries left\"","No organiser name or registration","RBI and Govt of India prohibit paid lottery schemes except state lotteries"],
    tips: ["Online lotteries requiring upfront payment are illegal in India (except state lotteries)","No one \"wins\" a contest they never entered","Report at 1930 (National Cyber Helpline)","The prize amount always grows with each refusal"],
    quiz: [
      { q: "What happens after you pay the initial ₹50 entry fee?", opts: ["You receive your winnings","You get asked to pay more fees repeatedly","A courier arrives with your prize","The organiser contacts you via email"], ans: 1, exp: "This is advance fee fraud. After the first payment, requests escalate to ₹200, ₹500, ₹2000 etc." },
      { q: "Online lottery schemes requiring upfront payment are:", opts: ["Legal if registered","Illegal in India except state lotteries","Only legal if over ₹100 entry fee","Legal if prize is physical"], ans: 1, exp: "The Prize Chits and Money Circulation Schemes (Banning) Act 1978 prohibits such schemes." },
      { q: "If you \"won\" a prize you never entered, it is:", opts: ["Your lucky day","A scam — always","A marketing promotion","A government scheme"], ans: 1, exp: "You cannot win contests you never participated in. Unsolicited \"wins\" are always scams." }
    ]
  },

  {
    id: 5, icon: "💳", title: "Credit Card Discount Scam", desc: "90% OFF sale — verify your card to unlock exclusive discounts.", diff: "high", tag: "Card Fraud",
    url: "hdfc-exclusive-offers.net", badge: "Exclusive Offer for You!", amount: "90% OFF", amountLabel: "All Products — Limited Time",
    fee: "Verify Card to Activate", feeNote: "Enter card details to confirm identity",
    fields: [{"n":"name","p":"Cardholder Name","t":"text"},{"n":"card","p":"Card Number (16 digits)","t":"text"},{"n":"expiry","p":"Expiry Date","t":"text"},{"n":"cvv","p":"CVV","t":"text"},{"n":"otp","p":"OTP sent to your mobile","t":"text"}],
    exposed: ["Cardholder Name","Full Card Number","Expiry Date","CVV","OTP"],
    reveal: "You gave them everything including OTP — complete card compromise. Fraudsters can now make unlimited transactions.",
    flags: ["Domain is hdfc-offers.net NOT hdfc.com","Banks NEVER ask for CVV or OTP through websites","90% discount is impossible for a real bank offer","No HTTPS padlock or company registration"],
    tips: ["Banks NEVER ask for OTP, CVV, or full card number","Always access banking at the official domain","Report card fraud immediately by calling the number on your card","Enable transaction alerts and set spending limits"],
    quiz: [
      { q: "Your bank will NEVER ask for:", opts: ["Your account number","Your registered mobile","Your CVV and OTP together","Your name"], ans: 2, exp: "Banks never ask for CVV, PIN, or OTP via any channel. Anyone asking is a fraudster." },
      { q: "How do you identify the real bank website?", opts: ["Google the bank name","Check the URL exactly matches the official domain","Look for a nice logo","Check if it has HTTPS"], ans: 1, exp: "Always manually type the official URL. Phishing sites mimic logos and even use HTTPS certificates." },
      { q: "You receive an OTP you did not request. You should:", opts: ["Enter it on the site that asked","Call your bank immediately","Wait to see what happens","Share it with the caller"], ans: 1, exp: "An unrequested OTP means someone is trying to use your card. Call your bank immediately." }
    ]
  },

  {
    id: 6, icon: "🎁", title: "Free Gift Delivery Scam", desc: "You've won a Mixer Grinder! Pay ₹99 delivery charge to receive it.", diff: "low", tag: "Delivery Fraud",
    url: "giftsdelivery-india.in", badge: "Congratulations!", amount: "Free Gift", amountLabel: "Bajaj Mixer Grinder",
    fee: "Delivery Fee: ₹99", feeNote: "Pay to confirm your address",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"address","p":"Complete Delivery Address","t":"text"},{"n":"card","p":"Card Details for ₹99","t":"text"}],
    exposed: ["Full Name","Home Address","Card Details"],
    reveal: "No gift is coming. The ₹99 is just the start — they now have your card details for larger charges.",
    flags: ["You won a gift you never registered for","Real companies never charge delivery for prizes","Card details for ₹99 enables any amount to be charged","No prize organizer name, location, or registration"],
    tips: ["Legitimate prizes from companies have official communication on company letterhead","Winners of real contests are verified through official channels","Never pay to \"claim\" a prize","Your card details entered once can be charged repeatedly"],
    quiz: [
      { q: "Why do scammers charge ₹99 instead of a large amount?", opts: ["Because the gift costs that much to deliver","Small amounts feel harmless and lower suspicion","It's a government tax","To cover packaging"], ans: 1, exp: "Small charges reduce suspicion while capturing card details. They then attempt larger charges." },
      { q: "A genuine company prize requires you to:", opts: ["Pay delivery charges","Verify via official channels only","Share card details","Pay registration"], ans: 1, exp: "Real prizes are verified through official company communications — never through random websites." },
      { q: "After entering card details for ₹99, the fraudster can:", opts: ["Only charge ₹99","Charge any amount at any time","Only do 1 transaction","Nothing"], ans: 1, exp: "Once card details are stored by fraudsters, they can attempt charges at any time and amount." }
    ]
  },

  {
    id: 7, icon: "⭐", title: "Reward Points Expiry Scam", desc: "Your reward points worth ₹5,000 expire today. Redeem via our app.", diff: "med", tag: "Malware/App Fraud",
    url: "rewardpoints-redeem.app", badge: "Your Points Expire TODAY", amount: "₹5,000", amountLabel: "Reward Points — Use Before Midnight",
    fee: "Install App to Redeem", feeNote: "Available on direct download only",
    fields: [{"n":"mobile","p":"Registered Mobile Number","t":"tel"},{"n":"bank","p":"Bank Name","t":"text"},{"n":"app","p":"App Install Confirmation Code","t":"text"}],
    exposed: ["Mobile Number","Bank Name","Device Access (via App)"],
    reveal: "The app is malware. Once installed, it reads your SMS (OTPs), monitors banking apps, and can take screenshots.",
    flags: ["Real bank apps are ONLY on Play Store/App Store — never side-loaded","Urgency: \"expire tonight\" forces hasty action","Official bank apps never send APK download links","Sideloaded apps bypass Google Play Protect"],
    tips: ["ONLY install banking apps from Google Play Store or Apple App Store","Banks never send APK download links via SMS/WhatsApp","Revoke permissions of suspicious apps immediately in Settings","Report malware apps to cert-in.org.in"],
    quiz: [
      { q: "Where should you ONLY download banking apps from?", opts: ["SMS links","WhatsApp links","Official Play Store or App Store","Bank website APK"], ans: 2, exp: "Only Google Play Store and Apple App Store verify app safety. Sideloaded apps bypass all security." },
      { q: "A sideloaded malicious banking app can:", opts: ["Only show ads","Read your OTPs and banking credentials","Just track location","Only access contacts"], ans: 1, exp: "Malicious apps can read SMS (OTPs), log keystrokes, take screenshots, and drain accounts." },
      { q: "Real bank reward points are redeemed:", opts: ["In 24 hours only","Through the official bank app only","Via separate download","By calling customer care"], ans: 1, exp: "Banks provide redemption only through their official, verified apps — never through third-party downloads." }
    ]
  },

  {
    id: 8, icon: "🏠", title: "Work From Home Scam", desc: "Earn ₹5,000 daily doing simple data entry. No experience needed.", diff: "med", tag: "Job Fraud",
    url: "wfh-earnindia.com", badge: "Hiring Now!", amount: "₹5,000/day", amountLabel: "Data Entry — Work From Home",
    fee: "Registration Fee: ₹500", feeNote: "Refundable after first task completion",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"WhatsApp Number","t":"tel"},{"n":"bank","p":"Bank Account for Payments","t":"text"},{"n":"fee","p":"Registration Fee ₹500 (UPI)","t":"text"}],
    exposed: ["Name","WhatsApp Number","Bank Account Details","Payment"],
    reveal: "After paying ₹500, you get a \"task\" that requires buying more products or paying \"insurance\". The refund never comes.",
    flags: ["No company name, PAN, or GST number","₹5,000/day for \"data entry\" is not a real market rate","Refundable fee is a classic bait-and-switch","WhatsApp-only communication avoids paper trail"],
    tips: ["Market rate for data entry is ₹200–800/day — ₹5,000 is impossible","Legitimate employers do not charge registration fees","Always get a written offer letter with company details","Verify on Glassdoor, LinkedIn, or MCA21"],
    quiz: [
      { q: "What is the realistic daily rate for data entry work in India?", opts: ["₹5,000–10,000","₹200–800","₹50,000","₹2,000–5,000"], ans: 1, exp: "Market rate for data entry is ₹200–800/day. Anything claiming ₹5,000+ for simple tasks is a scam." },
      { q: "A \"refundable registration fee\" for a job is:", opts: ["Standard practice","A scam signal — legitimate jobs never charge fees","Only for government jobs","Required by law"], ans: 1, exp: "No legitimate employer charges registration, training, or deposit fees. This is always a scam." },
      { q: "WFH scam operators prefer WhatsApp because:", opts: ["It's more professional","It avoids creating a paper trail","It's faster","You can send files"], ans: 1, exp: "WhatsApp messages are harder to trace and disappear — unlike official email or documents." }
    ]
  },

  {
    id: 9, icon: "📈", title: "Fake Investment Scheme", desc: "Invest ₹10,000 — guaranteed ₹20,000 back in 7 days.", diff: "high", tag: "Ponzi Scheme",
    url: "doublemoney-invest.in", badge: "100% Guaranteed Returns", amount: "2X in 7 Days", amountLabel: "Invest ₹10,000 → Get ₹20,000",
    fee: "Minimum Investment: ₹10,000", feeNote: "Returns paid daily. Withdraw anytime.",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"tel"},{"n":"amount","p":"Investment Amount (Min ₹10,000)","t":"number"},{"n":"upi","p":"UPI ID for Returns","t":"text"}],
    exposed: ["Full Name","Mobile Number","UPI ID","Investment Money"],
    reveal: "This is a Ponzi scheme. Early investors are paid using new investor money. When recruitment stops, everyone loses.",
    flags: ["100% guaranteed returns are impossible in any legal investment","7-day doubling = 5,200% annual return — physically impossible","No SEBI registration number shown","No explanation of how returns are generated"],
    tips: ["SEBI-regulated investments cap realistic returns at 10-15% annually","Verify investment companies at sebi.gov.in","\"Guaranteed returns\" are illegal to promise under SEBI regulations","Report Ponzi schemes to sebi.gov.in"],
    quiz: [
      { q: "What annual return does \"double in 7 days\" translate to?", opts: ["200%","1,000%","Over 5,000%","100%"], ans: 2, exp: "Doubling in 7 days = ~5,200% annual return. The entire global stock market averages 10% per year." },
      { q: "Where do you verify a legitimate investment firm in India?", opts: ["Google","Their website","SEBI registry at sebi.gov.in","Social media"], ans: 2, exp: "SEBI (Securities and Exchange Board of India) maintains the official registry of regulated investment firms." },
      { q: "In a Ponzi scheme, early investors are paid using:", opts: ["Genuine investment profits","New investors' money","Bank loans","Government funds"], ans: 1, exp: "Ponzi schemes have no real investment. Early investors are paid with money from new recruits until collapse." }
    ]
  },

  {
    id: 10, icon: "👮", title: "Digital Arrest Scam", desc: "CBI/Narcotics Bureau: Your number linked to illegal activity. Pay fine to avoid arrest.", diff: "high", tag: "Impersonation Fraud",
    url: "cbinarcoticsunit.gov.fake", badge: "OFFICIAL NOTICE", amount: "Warrant Issued", amountLabel: "Cybercrime Investigation Unit",
    fee: "Pay Fine to Avoid Arrest: ₹25,000", feeNote: "Failure to comply = immediate physical arrest",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"aadhaar","p":"Aadhaar Number (for verification)","t":"text"},{"n":"amount","p":"Fine Amount ₹25,000 (UPI)","t":"text"}],
    exposed: ["Full Name","Aadhaar Number","Money"],
    reveal: "\"Digital arrest\" does not exist in Indian law. Police NEVER demand money via UPI. This is impersonation fraud.",
    flags: ["\"Digital arrest\" is not a legal concept in India","Real law enforcement cannot arrest you over a video call","Official FIRs are served physically — never via WhatsApp","No government agency accepts UPI payments for fines"],
    tips: ["Indian law has no provision for \"digital arrest\"","Real police contact happens in person or through official court summons","PM Modi warned the nation about digital arrest scams in October 2024","Hang up immediately and call 1930 to report"],
    quiz: [
      { q: "\"Digital arrest\" in India is:", opts: ["A new cyber law","Not a legal concept — it does not exist","Only for cybercriminals","A Supreme Court ruling"], ans: 1, exp: "Digital arrest has no legal basis in India. PM Modi specifically warned citizens about this in October 2024." },
      { q: "Real Indian law enforcement fines are paid:", opts: ["Via UPI on video calls","In Bitcoin","Through official court/challan systems only","Via WhatsApp Pay"], ans: 2, exp: "All official government payments go through court-mandated channels, challans, or NEFT — never personal UPI." },
      { q: "If you receive a \"digital arrest\" video call, you should:", opts: ["Pay the fine immediately","Stay on the call to explain yourself","Hang up and call 1930 to report","Ask for more time"], ans: 1, exp: "Hang up immediately. The more you engage, the more psychological pressure they apply. Call 1930." }
    ]
  },

  {
    id: 11, icon: "🤖", title: "Deepfake Family Emergency", desc: "Urgent: Your son/daughter has been in an accident. Send ₹15,000 immediately.", diff: "high", tag: "Deepfake/AI Fraud",
    url: "whatsapp-voice-message.fake", badge: "URGENT Voice Message", amount: "₹15,000 Needed", amountLabel: "Family Emergency — Act Now",
    fee: "Send via UPI Immediately", feeNote: "They are at the hospital right now",
    fields: [{"n":"name","p":"Your Name","t":"text"},{"n":"relation","p":"Relation (Son/Daughter/Parent)","t":"text"},{"n":"upi","p":"UPI to Send ₹15,000","t":"text"}],
    exposed: ["Name","Family Details","Money"],
    reveal: "AI voice cloning can replicate anyone's voice from just 3 seconds of audio. The \"emergency\" is fabricated.",
    flags: ["Extreme urgency prevents rational thinking","Caller asks you NOT to call the person back directly","Voice may sound slightly robotic or have audio artifacts","Always demands immediate transfer — will not wait"],
    tips: ["Always hang up and call the family member directly on their known number","Establish a family \"safe word\" for emergency verification","3-second audio sample is enough for modern AI voice cloning","Slow down — scammers rely on panic. Take 60 seconds to verify."],
    quiz: [
      { q: "AI voice cloning requires approximately how much audio?", opts: ["1 hour of audio","30 minutes","As little as 3–5 seconds","At least a day of samples"], ans: 2, exp: "Modern AI voice cloning tools can clone a voice from just 3-5 seconds of audio from social media videos." },
      { q: "When you receive an emergency call, the FIRST thing to do is:", opts: ["Send money immediately","Hang up and call the person on their known number","Stay on call for more details","Call 100"], ans: 1, exp: "Always verify by directly calling the person supposedly in distress on their saved number." },
      { q: "The best protection against voice cloning scams is:", opts: ["Keeping your phone private","A family safe word for verification","Only answering known numbers","Installing antivirus"], ans: 1, exp: "A pre-agreed family code word (unrelated to emergency context) cannot be guessed by an AI caller." }
    ]
  },

  {
    id: 12, icon: "🏦", title: "Bank KYC Verification Scam", desc: "Your bank account will be blocked today unless you complete KYC verification immediately.", diff: "med", tag: "Banking Fraud",
    url: "secure-kyc-update.bankverify.com", badge: "Account Suspension Alert", amount: "Account at Risk", amountLabel: "Verify KYC Within 30 Minutes",
    fee: "Update PAN & Aadhaar Details", feeNote: "Failure may result in account freeze",
    fields: [{"n":"fullname","p":"Full Name","t":"text"},{"n":"account","p":"Bank Account Number","t":"text"},{"n":"otp","p":"OTP Received","t":"text"}],
    exposed: ["Bank Details","OTP","Identity Information"],
    reveal: "Banks never ask customers to share OTPs or complete KYC through random links sent via SMS or WhatsApp.",
    flags: ["Creates panic by threatening account closure","Requests OTP or login credentials","Link does not belong to official bank domain","Urgent deadlines pressure users"],
    tips: ["Always visit the official bank website manually","Never share OTPs with anyone","Contact your bank directly for verification","Check sender information carefully"],
    quiz: [
      { q: "What should you do if you receive a KYC update message?", opts: ["Click immediately","Verify through official bank channels","Share OTP for verification","Ignore all banking messages"], ans: 1, exp: "Always verify directly with your bank using official contact methods." },
      { q: "Who should know your OTP?", opts: ["Bank employee","Customer support","Only you","Relationship manager"], ans: 2, exp: "OTP is confidential and should never be shared." },
      { q: "Why do scammers create urgency?", opts: ["To save time","To prevent verification","To make victims act without thinking","To improve service"], ans: 2, exp: "Urgency reduces critical thinking and increases compliance." }
    ]
  },

  {
    id: 13, icon: "📸", title: "Instagram Account Verification Scam", desc: "Your Instagram account is at risk of suspension. Verify your identity now to keep your blue tick and followers.", diff: "med", tag: "Social Media Phishing",
    url: "instagram-security-verify.com", badge: "Account Suspension Warning", amount: "Account Restricted", amountLabel: "Verify Within 12 Hours",
    fee: "Login Required", feeNote: "Failure may result in account deletion",
    fields: [{"n":"username","p":"Instagram Username","t":"text"},{"n":"email","p":"Recovery Email","t":"email"},{"n":"password","p":"Instagram Password","t":"password"}],
    exposed: ["Username","Password","Email Access"],
    reveal: "Attackers steal Instagram credentials and take over accounts to scam followers or sell access.",
    flags: ["Threatens account suspension","Requests your password directly","Domain is not instagram.com","Creates urgency to bypass thinking"],
    tips: ["Instagram never asks for passwords through external links","Check the website domain carefully","Enable two-factor authentication","Use a password manager"],
    quiz: [
      { q: "Which website should you trust for Instagram login?", opts: ["instagram-security-verify.com","instagram-help-login.net","instagram.com","secure-meta-verify.com"], ans: 2, exp: "Only official Instagram domains should be trusted." },
      { q: "What is the biggest risk?", opts: ["Losing followers","Account takeover","Slow internet","App update"], ans: 1, exp: "Stolen credentials allow complete account takeover." },
      { q: "What helps protect accounts?", opts: ["Strong passwords only","2FA","Private account","More followers"], ans: 1, exp: "Two-factor authentication greatly reduces account compromise risk." }
    ]
  },

  {
    id: 14, icon: "⚡", title: "Electricity Bill Disconnection Scam", desc: "Your electricity service will be disconnected today due to an unpaid bill. Pay immediately.", diff: "med", tag: "Utility Fraud",
    url: "power-bill-payment.in", badge: "FINAL DISCONNECTION NOTICE", amount: "₹2,485 Due", amountLabel: "Service Termination Today",
    fee: "Pay Outstanding Bill", feeNote: "Power supply will be disconnected within 30 minutes",
    fields: [{"n":"name","p":"Consumer Name","t":"text"},{"n":"mobile","p":"Registered Mobile Number","t":"text"},{"n":"upi","p":"UPI ID For Payment","t":"text"}],
    exposed: ["Personal Details","UPI Information","Money"],
    reveal: "Scammers impersonate electricity providers and pressure victims into making immediate payments.",
    flags: ["Threatens immediate disconnection","Uses fear and urgency","Demands payment through personal accounts","Message often arrives outside normal billing cycles"],
    tips: ["Verify bills through official utility portals","Call customer service directly","Never trust payment links from SMS","Check your actual bill status first"],
    quiz: [
      { q: "What is the first step after receiving such a message?", opts: ["Pay immediately","Verify with utility provider","Ignore forever","Share with friends"], ans: 1, exp: "Always verify directly with the utility provider." },
      { q: "Why do scammers use disconnection threats?", opts: ["To improve service","To create panic","To save time","To help customers"], ans: 1, exp: "Fear causes people to act quickly without verification." },
      { q: "Where should bills be verified?", opts: ["SMS links","WhatsApp forwards","Official provider website/app","Social media comments"], ans: 2, exp: "Official channels are safest." }
    ]
  },

  {
    id: 15, icon: "💰", title: "Income Tax Refund Scam", desc: "You are eligible for a tax refund of ₹48,500. Submit your bank details to receive payment.", diff: "high", tag: "Identity Theft",
    url: "incometax-refund-gov.co.in", badge: "Tax Refund Approved", amount: "₹48,500 Refund", amountLabel: "Claim Within 24 Hours",
    fee: "Bank Verification Required", feeNote: "Refund will expire if not claimed",
    fields: [{"n":"pan","p":"PAN Number","t":"text"},{"n":"account","p":"Bank Account Number","t":"text"},{"n":"ifsc","p":"IFSC Code","t":"text"}],
    exposed: ["PAN","Bank Details","Identity Information"],
    reveal: "Scammers use fake refund notices to steal financial and identity information.",
    flags: ["Unexpected refund notification","Non-government website","Demands banking details","Short deadlines"],
    tips: ["Check refunds only through official government portals","Never share banking details through email links","Verify sender addresses carefully","Enable account alerts"],
    quiz: [
      { q: "What should you verify first?", opts: ["Refund amount","Website domain","Bank balance","PAN number"], ans: 1, exp: "Always verify the website before entering data." },
      { q: "Which information is especially sensitive?", opts: ["PAN and bank account details","Mobile wallpaper","Browser history","WiFi name"], ans: 0, exp: "Identity and banking information can be abused." },
      { q: "Government refund notices should be checked via?", opts: ["WhatsApp","Official tax portal","SMS links","Facebook"], ans: 1, exp: "Always use official government portals." }
    ]
  },

  {
    id: 16, icon: "🏢", title: "Corporate Password Reset Scam", desc: "Your Microsoft 365 account password expires today. Reset it immediately to avoid losing email access.", diff: "high", tag: "Corporate Phishing",
    url: "microsoft365-password-reset.net", badge: "Password Expiration Notice", amount: "Corporate Account Alert", amountLabel: "Reset Required Today",
    fee: "Security Verification", feeNote: "Access may be suspended",
    fields: [{"n":"employeeid","p":"Employee ID","t":"text"},{"n":"email","p":"Work Email","t":"email"},{"n":"password","p":"Current Password","t":"password"}],
    exposed: ["Corporate Credentials","Employee Information","Email Access"],
    reveal: "Corporate phishing attacks target employee accounts to gain access to company systems and sensitive data.",
    flags: ["Requests current password","External website","Urgent expiration warning","Impersonates IT department"],
    tips: ["Verify with internal IT teams","Check sender domain carefully","Use MFA wherever possible","Report suspicious emails immediately"],
    quiz: [
      { q: "Who should verify password reset requests?", opts: ["Random email links","Coworkers","IT department","Social media"], ans: 2, exp: "Always confirm with official IT channels." },
      { q: "Why are employees targeted?", opts: ["Entertainment","Access to company systems","Free software","Internet speed"], ans: 1, exp: "Corporate accounts often provide access to valuable resources." },
      { q: "Best defense against credential theft?", opts: ["Ignoring emails","Multi-factor authentication","Using public WiFi","Sharing passwords"], ans: 1, exp: "MFA significantly reduces compromise risk." }
    ]
  },

  {
    id: 17, icon: "📶", title: "SIM Upgrade Scam", desc: "Your SIM must be upgraded to support 5G services. Verify your number and OTP now.", diff: "high", tag: "Telecom Fraud",
    url: "5g-network-upgrade.com", badge: "SIM Upgrade Required", amount: "Free 5G Upgrade", amountLabel: "Activate Today",
    fee: "Verification Required", feeNote: "Your number may stop working",
    fields: [{"n":"mobile","p":"Mobile Number","t":"text"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"otp","p":"OTP Received","t":"text"}],
    exposed: ["Mobile Number","OTP","Identity Information"],
    reveal: "Scammers use OTPs to transfer your number to a SIM card they control, allowing them to intercept banking and authentication messages.",
    flags: ["Unexpected upgrade request","Asks for OTP","Threatens service disruption","Requests identity documents"],
    tips: ["Telecom companies never ask for OTPs over calls or messages","Contact your provider directly","Enable SIM lock where available","Monitor sudden loss of network signal"],
    quiz: [
      { q: "What can happen after a successful SIM swap?", opts: ["Faster internet","Number transferred to attacker","Free upgrade","Better signal"], ans: 1, exp: "The attacker gains control of your phone number." },
      { q: "Why is OTP theft dangerous?", opts: ["It changes wallpaper","It enables account takeover","It improves security","It updates SIM"], ans: 1, exp: "Many services use OTPs for authentication." },
      { q: "What should you do if your phone suddenly loses network service?", opts: ["Ignore it","Contact your telecom provider immediately","Restart later","Buy a new phone"], ans: 1, exp: "Unexpected loss of service may indicate SIM swap activity." }
    ]
  },

  {
    id: 18, icon: "🎓", title: "Government Scholarship Scam", desc: "Congratulations! You have been selected for a government scholarship worth ₹50,000.", diff: "med", tag: "Education Fraud",
    url: "national-scholarship-benefits.in", badge: "Scholarship Approved", amount: "₹50,000 Award", amountLabel: "Claim Before Deadline",
    fee: "Bank Verification Required", feeNote: "Scholarship expires in 24 hours",
    fields: [{"n":"name","p":"Student Name","t":"text"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"account","p":"Bank Account Number","t":"text"}],
    exposed: ["Identity Information","Bank Details"],
    reveal: "Scammers target students by promising scholarships and collecting identity and banking information.",
    flags: ["Unexpected scholarship approval","Requests Aadhaar and bank details","Creates urgency","Uses unofficial website"],
    tips: ["Verify scholarships through official portals","Never share personal documents via random links","Check eligibility criteria carefully","Confirm with your institution"],
    quiz: [
      { q: "What should you verify first?", opts: ["Amount offered","Official scholarship website","Bank account","Aadhaar"], ans: 1, exp: "Always verify through official government or institution portals." },
      { q: "Why do scammers target students?", opts: ["Students have more money","Students may be less familiar with fraud","Scholarships are illegal","Banks require it"], ans: 1, exp: "Students are often targeted because they are actively seeking opportunities." },
      { q: "Which information is sensitive?", opts: ["Aadhaar number","Favorite subject","College name","Age"], ans: 0, exp: "Identity documents can be misused for fraud." }
    ]
  },

  {
    id: 19, icon: "📢", title: "Copyright Violation Account Suspension", desc: "Your Facebook/Instagram page violated copyright policies. Appeal now to avoid deletion.", diff: "high", tag: "Social Engineering",
    url: "meta-copyright-review.com", badge: "Page Removal Warning", amount: "Account Restricted", amountLabel: "Appeal Required",
    fee: "Identity Verification", feeNote: "Page may be deleted within 12 hours",
    fields: [{"n":"username","p":"Page Username","t":"text"},{"n":"email","p":"Business Email","t":"email"},{"n":"password","p":"Account Password","t":"password"}],
    exposed: ["Social Media Credentials","Email Access"],
    reveal: "Attackers impersonate Meta and steal login credentials to hijack social media accounts.",
    flags: ["Threatens immediate page deletion","Requests password directly","Uses unofficial domain","Creates panic"],
    tips: ["Check notification center inside the app","Never enter passwords on external sites","Enable 2FA","Verify domain names carefully"],
    quiz: [
      { q: "Where should policy violations appear?", opts: ["Random websites","Official platform notifications","WhatsApp","SMS only"], ans: 1, exp: "Legitimate violations appear inside the platform." },
      { q: "What is the scammer after?", opts: ["Likes","Credentials","Followers","Photos"], ans: 1, exp: "The goal is account takeover." },
      { q: "What helps protect accounts?", opts: ["2FA","More posts","Private profile","Faster internet"], ans: 0, exp: "Two-factor authentication adds extra security." }
    ]
  },

  {
    id: 20, icon: "✈️", title: "International Parcel Customs Fee Scam", desc: "Your international parcel is held at customs. Pay clearance charges immediately.", diff: "med", tag: "Delivery Fraud",
    url: "customs-clearance-india.com", badge: "Parcel Held At Customs", amount: "₹1,950 Clearance Fee", amountLabel: "Release Package Today",
    fee: "Customs Processing Charge", feeNote: "Parcel will be returned if unpaid",
    fields: [{"n":"name","p":"Recipient Name","t":"text"},{"n":"address","p":"Delivery Address","t":"text"},{"n":"card","p":"Card Number","t":"text"}],
    exposed: ["Card Information","Address","Personal Data"],
    reveal: "Victims are tricked into paying fake customs fees and revealing payment details.",
    flags: ["Unexpected international shipment","Small fee requests","Urgency","Unofficial customs website"],
    tips: ["Verify tracking with official courier websites","Confirm whether you actually ordered something","Never trust customs requests via SMS links","Use official tracking numbers"],
    quiz: [
      { q: "What should you check first?", opts: ["Payment amount","Whether you ordered the package","Card limit","Address"], ans: 1, exp: "Many victims never ordered any package." },
      { q: "What do scammers want?", opts: ["Customs data","Card details and money","Delivery confirmation","Phone updates"], ans: 1, exp: "The primary goal is financial theft." },
      { q: "Where should tracking be verified?", opts: ["SMS link","Official courier site","WhatsApp","Facebook"], ans: 1, exp: "Always use official courier services." }
    ]
  },

  {
    id: 21, icon: "❤️", title: "Disaster Relief Donation Scam", desc: "Help flood victims immediately. Donate now to save lives.", diff: "med", tag: "Charity Fraud",
    url: "emergency-relief-fund-help.org", badge: "Emergency Appeal", amount: "Donate Any Amount", amountLabel: "Lives Depend On You",
    fee: "Instant UPI Donation", feeNote: "Campaign ending tonight",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"text"},{"n":"upi","p":"UPI ID","t":"text"}],
    exposed: ["Personal Details","Financial Information"],
    reveal: "Scammers exploit emotions during disasters to collect donations for fake causes.",
    flags: ["Heavy emotional pressure","Little transparency","Urgent donation requests","No verified charity registration"],
    tips: ["Donate through verified organizations","Research charities before donating","Check registration details","Avoid donating via forwarded messages"],
    quiz: [
      { q: "What should you verify before donating?", opts: ["Logo color","Organization legitimacy","Donation amount","Website design"], ans: 1, exp: "Always verify the charity is genuine." },
      { q: "Why do these scams work?", opts: ["People are emotional","Internet is slow","Banks require donations","Government support"], ans: 0, exp: "Scammers exploit empathy and urgency." },
      { q: "Best place to donate?", opts: ["Random UPI IDs","Verified charities","Social media DMs","Unknown links"], ans: 1, exp: "Verified organizations are safest." }
    ]
  },

  {
    id: 22, icon: "📶", title: "Free Public Wi-Fi Login Scam", desc: "Connect to free Wi-Fi by signing in with your email account.", diff: "high", tag: "Credential Theft",
    url: "free-airport-wifi-login.com", badge: "Free Wi-Fi Access", amount: "Unlimited Internet", amountLabel: "Login To Continue",
    fee: "Account Verification", feeNote: "Access expires in 5 minutes",
    fields: [{"n":"email","p":"Email Address","t":"email"},{"n":"password","p":"Password","t":"password"}],
    exposed: ["Email Credentials","Personal Data"],
    reveal: "Fake captive portals steal email credentials and can lead to account compromise.",
    flags: ["Requests full email password","Suspicious Wi-Fi network","Poor website design","Unexpected login requirements"],
    tips: ["Use trusted networks only","Avoid entering passwords on public Wi-Fi portals","Use VPNs when possible","Enable MFA on important accounts"],
    quiz: [
      { q: "What is the main goal of fake Wi-Fi portals?", opts: ["Improve internet speed","Steal credentials","Show ads","Collect surveys"], ans: 1, exp: "Credential theft is the primary objective." },
      { q: "Which account is commonly targeted?", opts: ["Gaming account","Email account","Calculator app","Gallery app"], ans: 1, exp: "Email access often leads to other account compromises." },
      { q: "What helps secure public Wi-Fi usage?", opts: ["VPN","More tabs open","Bluetooth","Airplane mode"], ans: 0, exp: "VPNs help protect traffic on untrusted networks." }
    ]
  },

  {
    id: 23, icon: "🧠", title: "Cognitive Biases in Social Engineering", desc: "Learn how hackers exploit human psychology like Urgency, Authority, and Halo Effect.", diff: "med", tag: "Psychology & Defense",
    url: "internal-hr-portal-update.com", badge: "Mandatory Compliance", amount: "Urgent Action Required", amountLabel: "CEO Office Notice",
    fee: "Security Clearance", feeNote: "Failure results in account suspension",
    fields: [{"n":"empId","p":"Employee ID","t":"text"},{"n":"pass","p":"Current Domain Password","t":"password"},{"n":"mfa","p":"MFA Backup Token","t":"text"}],
    exposed: ["Corporate Domain Password","MFA Backup Tokens","Employee Identity"],
    reveal: "You were manipulated by Authority and Urgency bias! Scammers impersonated senior executives and threatened disciplinary action to bypass your analytical thinking.",
    flags: ["Extreme urgency demanding action within minutes","Impersonation of CEO or HR authority figures","Threats of account suspension or termination","Unusual requests for credentials via non-standard links"],
    tips: ["Take a 60-second \"tactical pause\" when feeling panic or urgency","Verify authority requests through known out-of-band communication","Remember that executives will never demand passwords via email or chat","Understand your own cognitive blind spots when stressed"],
    quiz: [
      { q: "Which cognitive bias forces you to act quickly without thinking?", opts: ["Confirmation Bias","Urgency Bias","Halo Effect","Sunk Cost Fallacy"], ans: 1, exp: "Urgency triggers fight-or-flight panic, bypassing logical verification." },
      { q: "When a hacker pretends to be the CEO or police, what bias are they exploiting?", opts: ["Authority Bias","Scarcity Bias","Reciprocity","Anchoring"], ans: 0, exp: "We are conditioned from childhood to obey authority figures without questioning." },
      { q: "What is the most effective defense against psychological manipulation?", opts: ["Faster typing","Taking a tactical pause to verify out-of-band","Ignoring all emails","Using Incognito mode"], ans: 1, exp: "A tactical pause breaks the emotional hijacking and allows rational thought to return." }
    ]
  },

  {
    id: 24, icon: "🏢", title: "Workplace & Shadow IT Security", desc: "Navigate Slack phishing, unapproved AI tools, USB drop baiting, and remote work hazards.", diff: "high", tag: "Enterprise Security",
    url: "fast-ai-pdf-summarizer-free.com", badge: "Free AI Tool", amount: "100% Free Enterprise AI", amountLabel: "Upload Confidential Contracts",
    fee: "No Login Required", feeNote: "Instant processing",
    fields: [{"n":"doc","p":"Upload Confidential NDA / Contract PDF","t":"text"},{"n":"apiKey","p":"Paste Company AWS / API Key for Analysis","t":"text"}],
    exposed: ["Confidential Legal Contracts","Corporate AWS/API Keys","Customer Data"],
    reveal: "You committed a Shadow IT security breach! Uploading company data or API keys to unapproved third-party AI tools can expose your organization to severe data leaks and regulatory fines.",
    flags: ["Using free third-party tools without IT/Security approval","Uploading proprietary company data to public AI services","Pasting API keys or secrets into external web forms","Accepting random calendar invites or Slack files from external vendors"],
    tips: ["Only use company-approved enterprise AI assistants with data privacy agreements","Never paste API keys, passwords, or customer PII into free online utilities","Report unapproved software or suspicious Slack/Teams messages to IT Security","Be wary of free tools whose business model is harvesting user data"],
    quiz: [
      { q: "What is \"Shadow IT\"?", opts: ["Working in a dark room","Using software or tools without IT department approval","Dark mode in Windows","Secret corporate server rooms"], ans: 1, exp: "Shadow IT introduces unmonitored security vulnerabilities and data leakage risks." },
      { q: "Why is uploading company contracts to a free online PDF summarizer dangerous?", opts: ["It uses too much internet bandwidth","The site's terms may allow them to store and sell your confidential data","The PDF might get deleted","It makes the computer slow"], ans: 1, exp: "Many free utilities monetize by harvesting and indexing uploaded proprietary data." },
      { q: "What should you do if an external vendor sends an executable (.exe) via Slack?", opts: ["Run it immediately","Forward it to everyone","Do not open it and report to IT security","Rename it to .txt"], ans: 2, exp: "External chat attachments are a common vector for ransomware and infostealers." }
    ]
  },

  {
    id: 25, icon: "🌾", title: "PM Kisan 18th Installment Phishing", desc: "Your PM Kisan 18th installment of ₹2,000 is pending — verify your bank account now.", diff: "med", tag: "Government Scheme Fraud",
    url: "pmkisan-installment-status.in", badge: "Installment Pending!", amount: "₹2,000", amountLabel: "PM Kisan 18th Installment",
    fee: "Verify Bank Details to Receive", feeNote: "Payment will be reversed if not verified within 24 hours",
    fields: [{"n":"name","p":"Registered Farmer Name","t":"text"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"account","p":"Bank Account Number","t":"text"},{"n":"ifsc","p":"IFSC Code","t":"text"},{"n":"otp","p":"OTP Sent to Registered Mobile","t":"text"}],
    exposed: ["Aadhaar Number","Bank Account Number","OTP","Farmer ID"],
    reveal: "The real PM Kisan portal (pmkisan.gov.in) never asks farmers to \"verify\" bank details via SMS links or share OTPs. Entering the OTP here would let scammers link your account to their own device and drain it.",
    flags: ["Link is a lookalike domain, not the official pmkisan.gov.in","Message creates urgency about installment reversal","Asks for OTP, which the real scheme never requires for status checks","Poor grammar and generic greeting instead of your registered name"],
    tips: ["Check installment status only on pmkisan.gov.in or the official PM Kisan mobile app","Never share Aadhaar-linked bank OTPs with anyone, including \"portal\" links","Beneficiary status can also be verified at your local Common Service Centre (CSC)","Report suspicious PM Kisan messages to the scheme helpline 155261 or 1800-115-526"],
    quiz: [
      { q: "Where should you check your real PM Kisan installment status?", opts: ["Any SMS link received","pmkisan.gov.in official website/app","A forwarded WhatsApp link","A phone call from an unknown number"], ans: 1, exp: "Only the official portal and app show accurate, secure beneficiary status." },
      { q: "Does the PM Kisan scheme ever ask for OTP to \"release\" an installment?", opts: ["Yes, always","No, never","Only for large amounts","Only on weekends"], ans: 1, exp: "Government disbursements are automatic to verified accounts; OTP requests are always a scam sign." },
      { q: "What should you do if you get a suspicious PM Kisan SMS?", opts: ["Click the link to check","Forward it to family so they can also check","Verify directly on the official portal or helpline and ignore the link","Reply with your Aadhaar number to confirm"], ans: 2, exp: "Always bypass the link entirely and go to trusted official sources." }
    ]
  },

  {
    id: 26, icon: "🏥", title: "Fake National Digital Health Mission Link", desc: "Create your ABHA Health ID now or lose access to government hospital benefits.", diff: "med", tag: "Government Scheme Fraud",
    url: "abha-healthid-register.co.in", badge: "Action Required", amount: "Free Health ID", amountLabel: "ABHA / NDHM Registration",
    fee: "Complete Registration Now", feeNote: "Benefits suspended if not registered today",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"mobile","p":"Mobile Number","t":"text"},{"n":"otp","p":"Aadhaar OTP","t":"text"},{"n":"history","p":"Existing Medical Conditions","t":"text"}],
    exposed: ["Aadhaar Number","Mobile Number","OTP","Medical History"],
    reveal: "This fake NDHM/ABHA site harvests Aadhaar OTP and sensitive medical history together — enough to both hijack your Aadhaar-linked services and sell your health data. The real ABHA ID is created only on abha.abdm.gov.in or verified hospital counters.",
    flags: ["Domain is not the official abdm.gov.in / abha.abdm.gov.in","Threatens loss of hospital benefits to force quick action","Requests Aadhaar OTP outside the official ABDM app or portal","Asks for medical history on an unrelated \"registration\" page"],
    tips: ["Create or manage your ABHA Health ID only at abha.abdm.gov.in or the ABHA mobile app","Never enter Aadhaar OTP on a site reached through an SMS/WhatsApp link","Hospitals and CSCs can create your ABHA ID in person with proper verification","Report suspicious health-ID links to cybercrime.gov.in"],
    quiz: [
      { q: "What is the official website for creating an ABHA Health ID?", opts: ["Any hospital-branded site","abha.abdm.gov.in","A link shared over WhatsApp","A third-party health app"], ans: 1, exp: "ABDM (Ayushman Bharat Digital Mission) operates the only official ABHA portal." },
      { q: "Why is sharing medical history on an unfamiliar site risky?", opts: ["It is not risky","It can be sold or used for targeted scams and insurance fraud","It speeds up registration","Hospitals require it publicly"], ans: 1, exp: "Sensitive health data combined with Aadhaar details enables highly targeted fraud." },
      { q: "A message threatens loss of hospital benefits unless you register in the next hour. This is:", opts: ["Normal government process","A classic urgency-based scam tactic","Required by law","A hospital policy"], ans: 1, exp: "Government health scheme enrolment is never time-boxed to force a rushed decision." }
    ]
  },

  {
    id: 27, icon: "🤖", title: "AI-Powered Trading Bot Scam", desc: "Our AI trading bot guarantees 15% daily returns — deposit now and let the algorithm trade for you.", diff: "high", tag: "Investment Fraud",
    url: "quantum-ai-trader.pro", badge: "Guaranteed Returns!", amount: "15% Daily ROI", amountLabel: "AI Trading Bot Deposit Plan",
    fee: "Minimum Deposit: ₹10,000", feeNote: "Bot slots filling fast — limited seats today",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"text"},{"n":"deposit","p":"Deposit via Card/UPI","t":"text"},{"n":"panscreenshot","p":"PAN Card (for \"compliance\")","t":"text"}],
    exposed: ["Full Name","PAN Number","Payment Details","Deposited Funds"],
    reveal: "No legitimate algorithm can guarantee fixed daily returns — markets fluctuate, and any \"guarantee\" is illegal under SEBI rules. The dashboard shows fake rising profits to encourage bigger deposits, then blocks withdrawals with fake \"tax\" or \"unlock\" fees.",
    flags: ["Guarantees a fixed, unrealistically high daily/monthly return","Not registered with SEBI as an investment advisor or portfolio manager","Dashboard shows profits but withdrawals require extra \"fees\" first","Pressure to deposit more to \"unlock higher AI tiers\""],
    tips: ["Verify any trading platform or advisor on the SEBI website (sebi.gov.in)","No investment can legally guarantee fixed returns — this is always a red flag","Never pay extra fees to \"unlock\" a withdrawal of your own money","Start with tiny, verifiable amounts and confirm real withdrawals before trusting any platform"],
    quiz: [
      { q: "Can any legitimate trading bot guarantee 15% daily returns?", opts: ["Yes, with good AI","No — this is a guaranteed sign of fraud","Only for crypto","Only for institutional investors"], ans: 1, exp: "Markets are inherently unpredictable; fixed guaranteed returns are illegal to promise and always fraudulent." },
      { q: "Where can you verify if an investment platform is legitimate in India?", opts: ["Its own website","SEBI website (sebi.gov.in)","Social media reviews","The app store rating"], ans: 1, exp: "SEBI maintains registries of authorised investment advisors and brokers." },
      { q: "What happens when scam trading apps ask for extra fees before withdrawal?", opts: ["Normal processing charge","A tactic to extract more money — your original deposit is already gone","Required by tax law","A one-time formality"], ans: 1, exp: "Legitimate platforms never charge fees to release your own funds; this is a common final-stage extraction tactic." }
    ]
  },

  {
    id: 28, icon: "🔋", title: "Fake EV Subsidy Portal", desc: "Claim your ₹1,50,000 government EV subsidy for your new electric vehicle purchase — apply before the deadline.", diff: "med", tag: "Government Scheme Fraud",
    url: "ev-subsidy-fame2claim.in", badge: "Subsidy Approved!", amount: "₹1,50,000", amountLabel: "FAME-II EV Subsidy",
    fee: "Processing Fee: ₹999", feeNote: "Application closes in 2 hours",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"vehicle","p":"Vehicle Registration Number","t":"text"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"account","p":"Bank Account for Subsidy Credit","t":"text"},{"n":"fee","p":"Card Number for Processing Fee","t":"text"}],
    exposed: ["Aadhaar Number","Vehicle Registration Details","Bank Account Number","Card Number"],
    reveal: "Genuine FAME-II/state EV subsidies are applied automatically by the registered dealer at the time of purchase and adjusted in the invoice — there is no separate \"portal\" charging a processing fee afterward. This site was built purely to collect your card details.",
    flags: ["Genuine EV subsidies are applied by the dealer at purchase, not via a separate online claim","Charges a \"processing fee\" to release a government subsidy","Domain is unofficial and uses lookalike spelling","False urgency about a closing deadline"],
    tips: ["EV subsidies under FAME-II/state policies are deducted directly from the invoice by the authorised dealer","Never pay a fee to \"claim\" a subsidy you are already entitled to","Check scheme details only on heavyindustries.gov.in or your state transport department site","Report fake subsidy portals to cybercrime.gov.in"],
    quiz: [
      { q: "How are legitimate EV subsidies usually applied?", opts: ["Via a separate paid online portal after purchase","Deducted directly from the invoice by the authorised dealer","Sent as cash by post","Only through social media ads"], ans: 1, exp: "Government EV subsidies are built into the purchase invoice through registered dealers." },
      { q: "A site asks for a \"processing fee\" to release your government subsidy. This is:", opts: ["Standard practice","A major red flag of fraud","Required by RTO","Optional but recommended"], ans: 1, exp: "Government benefits are never gated behind a private processing fee." },
      { q: "Where should you verify official EV subsidy scheme details?", opts: ["Random ad links","heavyindustries.gov.in or your state transport department","WhatsApp forwards","Dealer's personal number only"], ans: 1, exp: "Official ministry and state government sites list authentic, current subsidy rules." }
    ]
  },

  {
    id: 29, icon: "📦", title: "Courier Re-delivery Fee Scam (FedEx/DHL)", desc: "Your FedEx/DHL package is held at customs — pay a small re-delivery fee of ₹49 to release it.", diff: "low", tag: "Delivery Fraud",
    url: "fedex-redelivery-in.com", badge: "Delivery Held", amount: "₹49", amountLabel: "Customs Re-delivery Fee",
    fee: "Pay ₹49 to Reschedule Delivery", feeNote: "Package will be returned to sender in 24 hours",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"address","p":"Delivery Address","t":"text"},{"n":"card","p":"Card Number","t":"text"},{"n":"expiry","p":"Expiry (MM/YY)","t":"text"},{"n":"cvv","p":"CVV","t":"text"}],
    exposed: ["Full Card Number","Expiry Date","CVV","Home Address"],
    reveal: "The tiny ₹49 fee is designed to feel harmless, but entering full card details (including CVV) on this fake courier page lets scammers make unlimited unauthorized charges. FedEx and DHL never collect customs fees through SMS links.",
    flags: ["You did not order or expect any international package","Fee amount is deliberately small to lower your guard","Link is not the official fedex.com or dhl.com domain","Requests full card number and CVV for a ₹49 charge"],
    tips: ["FedEx/DHL customs duties are paid via their official website/app or in person, never via random SMS links","A suspiciously small fee is still a scam tactic — card skimming does not need a large amount","Track any real shipment only using the tracking number on the courier's official site","Never enter your CVV on a page you reached through an SMS link"],
    quiz: [
      { q: "Why do scammers ask for a very small \"re-delivery fee\"?", opts: ["To be helpful","To lower your suspicion while still stealing full card details","It is a government tax","To cover printing costs"], ans: 1, exp: "A small amount feels low-risk, but the real goal is capturing your complete card details for later misuse." },
      { q: "Where should you track a real FedEx/DHL shipment?", opts: ["Any SMS link","The courier's official website/app using your tracking number","A forwarded WhatsApp message","A phone call from an unknown number"], ans: 1, exp: "Only the official courier site/app gives accurate shipment status." },
      { q: "What is most dangerous to enter on an unexpected courier payment page?", opts: ["Your name","CVV and full card number","Your city","Your email"], ans: 1, exp: "CVV and full card number allow unauthorized transactions to be made immediately." }
    ]
  },

  {
    id: 30, icon: "📲", title: "QR Code Payment Scam", desc: "Scan this QR code to \"receive\" your ₹5,000 refund — just enter your UPI PIN to confirm.", diff: "high", tag: "UPI Fraud",
    url: "upi-refund-scan.app", badge: "Refund Ready to Receive", amount: "₹5,000", amountLabel: "Refund via QR Scan",
    fee: "Scan & Enter UPI PIN to Receive", feeNote: "Refund window closes in 10 minutes",
    fields: [{"n":"upiId","p":"Your UPI ID","t":"text"},{"n":"pin","p":"UPI PIN (to \"confirm receipt\")","t":"password"}],
    exposed: ["UPI ID","UPI PIN","Bank Account Access"],
    reveal: "Scanning a QR code and entering your UPI PIN always AUTHORIZES a debit — it can never be used to receive money. This \"refund\" QR was actually a payment request; entering your PIN sent money out of your account.",
    flags: ["Claims you can \"receive\" money by scanning a QR and entering your PIN","Creates urgency with a closing time window","No legitimate refund process ever requires your UPI PIN","Unsolicited refund you never requested"],
    tips: ["UPI PIN is only ever needed to SEND money, never to receive it — remember this always","Refunds are credited automatically to your original payment method with no PIN needed","Never scan QR codes from unknown senders promising money","If you scan by mistake, check the app screen carefully before confirming — it will show an amount being debited, not credited"],
    quiz: [
      { q: "Do you ever need to enter your UPI PIN to RECEIVE money?", opts: ["Yes, always","No, never — PIN is only for sending money","Only for large amounts","Only from unknown senders"], ans: 1, exp: "This is the single most important UPI safety rule: PIN entry always means you are paying, not receiving." },
      { q: "How are real UPI refunds credited to you?", opts: ["By scanning a QR code and entering PIN","Automatically, with no PIN needed","By calling customer care and sharing PIN","By installing a screen-share app"], ans: 1, exp: "Refunds are pushed to your account automatically by the payment processor." },
      { q: "A QR code scam creates urgency by:", opts: ["Giving you unlimited time","Setting a short \"refund window\" to pressure quick action","Asking you to think it over","Sending it from a bank branch"], ans: 1, exp: "Artificial time pressure is a classic tactic to prevent victims from thinking critically." }
    ]
  },

  {
    id: 31, icon: "💸", title: "Fake UPI Refund Scam", desc: "Customer care says your failed transaction refund of ₹2,500 needs a quick screen-share app to process.", diff: "high", tag: "UPI Fraud",
    url: "upi-support-refund.help", badge: "Refund In Process", amount: "₹2,500", amountLabel: "Failed Transaction Refund",
    fee: "Install Screen Share App to Continue", feeNote: "Refund will be auto-cancelled if not verified now",
    fields: [{"n":"app","p":"Screen Sharing App Installed (AnyDesk/TeamViewer)","t":"text"},{"n":"upiId","p":"UPI ID","t":"text"},{"n":"pin","p":"UPI PIN to \"Verify\" Refund","t":"password"}],
    exposed: ["Full Screen/Device Access","UPI ID","UPI PIN","Bank Balance"],
    reveal: "Once you install a screen-sharing app and enter your UPI PIN, the \"support agent\" can see everything on your screen and approve payment requests on your behalf. Real refunds never require a screen-share app or your PIN.",
    flags: ["\"Customer care\" calls first and asks you to install a remote screen-share app","Claims a refund needs your UPI PIN to \"verify\"","Uses generic apps like AnyDesk/TeamViewer for a supposed refund process","Creates urgency about the refund being cancelled"],
    tips: ["Never install screen-sharing apps for anyone claiming to process a refund","Bank and UPI customer care never call you first about a \"failed transaction refund\"","Refunds are automatic — no agent interaction is ever required","If in doubt, hang up and call your bank's official number from the back of your card"],
    quiz: [
      { q: "Why do scammers ask victims to install a screen-sharing app?", opts: ["To fix the phone faster","To see your screen and control approvals in real time","It is required by RBI","To speed up refunds"], ans: 1, exp: "Screen-sharing apps give scammers live visibility and control to authorize fraudulent payments." },
      { q: "Does a real bank/UPI refund ever need your PIN to be \"verified\"?", opts: ["Yes, always","No — refunds are automatic and PIN-free","Only for amounts over ₹10,000","Only on weekends"], ans: 1, exp: "PIN is never needed to receive a refund; this is always a scam request." },
      { q: "What should you do if \"customer care\" calls first about your refund?", opts: ["Follow their instructions immediately","Hang up and call the bank's official number yourself","Share your PIN to save time","Install any app they suggest"], ans: 1, exp: "Always independently verify by contacting the bank through official channels." }
    ]
  },

  {
    id: 32, icon: "🔁", title: "UPI AutoPay Scam", desc: "Approve a ₹1 AutoPay mandate to \"verify your account\" for a free trial subscription.", diff: "med", tag: "UPI Fraud",
    url: "freetrial-autopay-setup.in", badge: "Free Trial Activated", amount: "₹1", amountLabel: "AutoPay Mandate Setup",
    fee: "Approve Mandate to Continue", feeNote: "Mandate auto-renews monthly after trial",
    fields: [{"n":"upiId","p":"UPI ID","t":"text"},{"n":"mandateAmount","p":"Mandate Limit Approved","t":"text"},{"n":"pin","p":"UPI PIN to Approve Mandate","t":"password"}],
    exposed: ["UPI ID","UPI PIN","Recurring Payment Authorization"],
    reveal: "The ₹1 charge is real, but approving the mandate also sets a much higher recurring debit limit hidden in the fine print — scammers then trigger large recurring charges every month that look \"authorised\" because you approved the mandate yourself.",
    flags: ["Mandate approval screen shows a tiny amount but a much larger hidden \"maximum limit\"","Pressure to approve quickly for a \"free trial\"","Unfamiliar or unverified merchant name on the mandate","No easy visible way to review the actual recurring amount before approving"],
    tips: ["Always read the maximum mandate limit carefully, not just the small trial amount","Check and manage all active AutoPay mandates regularly in your UPI app","Cancel any mandate you don't recognize immediately from your bank app","Never approve a mandate from an unfamiliar or unverified merchant"],
    quiz: [
      { q: "What should you always check before approving a UPI AutoPay mandate?", opts: ["Only the first charge amount","The maximum recurring limit set in the mandate","The app's color scheme","The time of day"], ans: 1, exp: "Scammers hide a high recurring limit behind a tiny first charge." },
      { q: "Where can you review and cancel active UPI mandates?", opts: ["Only by calling the merchant","Inside your UPI app's mandate/AutoPay management section","You cannot cancel a mandate","Only your bank branch can do it"], ans: 1, exp: "All UPI apps let users view and revoke active mandates directly." },
      { q: "A \"free trial\" mandate for ₹1 is always safe because the charge is tiny.", opts: ["True","False — the hidden recurring limit is what matters","True only for known brands","True if approved via SMS"], ans: 1, exp: "The visible trial charge is a decoy; the real risk is the approved recurring limit." }
    ]
  },

  {
    id: 33, icon: "🏷️", title: "QR Sticker Replacement Scam", desc: "You scan the shop's payment QR code as usual, but a fraudulent sticker has been pasted over the real one.", diff: "med", tag: "UPI Fraud",
    url: "merchant-checkout-scan.local", badge: "Pay Merchant", amount: "₹850", amountLabel: "Bill Payment via QR",
    fee: "Scan & Pay", feeNote: "Verify payee name before confirming",
    fields: [{"n":"upiId","p":"Your UPI ID","t":"text"},{"n":"payeeCheck","p":"Displayed Payee Name (check carefully!)","t":"text"},{"n":"pin","p":"UPI PIN to Confirm Payment","t":"password"}],
    exposed: ["UPI ID","UPI PIN","Payment Sent to Wrong Account"],
    reveal: "A fraudster pasted their own QR sticker over the merchant's genuine one. The payment app displayed an unfamiliar payee name before confirmation — a detail most people skip past — sending the money to the scammer instead of the shop.",
    flags: ["The payee name shown before confirming does not match the shop's name","QR sticker looks slightly newer, crooked, or peeling compared to the counter","No printed receipt or till confirmation matching the payment","Shopkeeper isn't aware of any \"updated\" QR code"],
    tips: ["Always read the payee name shown on the confirmation screen before entering your PIN","If the payee name doesn't match the shop, cancel the transaction immediately","Shopkeepers should regularly inspect their displayed QR codes for tampering","Prefer paying via the merchant's own billing app/POS terminal when available"],
    quiz: [
      { q: "What is the most reliable way to catch a QR sticker swap scam?", opts: ["Trust the sticker's appearance","Check the payee name shown before confirming payment","Pay faster to avoid queues","Ask other customers"], ans: 1, exp: "The payee name on the confirmation screen reveals the true recipient regardless of which QR was scanned." },
      { q: "What should a shopkeeper do to prevent QR sticker fraud?", opts: ["Nothing, it's not their responsibility","Regularly inspect the displayed QR code for tampering or overlays","Remove QR payments entirely","Change the shop location"], ans: 1, exp: "Periodic physical checks catch pasted-over fraudulent QR stickers." },
      { q: "If the payee name doesn't match the store, what should you do?", opts: ["Enter your PIN anyway","Cancel the transaction and alert the shop","Pay cash and ignore it","Scan again quickly"], ans: 1, exp: "Mismatched payee names mean the payment is going to the wrong account — always cancel." }
    ]
  },

  {
    id: 34, icon: "🕳️", title: "Card Trapping Scam", desc: "Your ATM card gets stuck in the machine. A \"helpful stranger\" offers to guide you through re-entering your PIN.", diff: "high", tag: "ATM Fraud",
    url: "atm-helpdesk-support.local", badge: "Card Retention Alert", amount: "Card Stuck", amountLabel: "ATM Card Trapped in Slot",
    fee: "Re-enter PIN to Retrieve Card", feeNote: "Helper suggests trying your PIN again",
    fields: [{"n":"card","p":"Card Number (visible on screen)","t":"text"},{"n":"pin","p":"Re-enter ATM PIN as \"helper\" suggests","t":"password"}],
    exposed: ["Card Number","ATM PIN","Physical Card (retained by trap device)"],
    reveal: "A thin plastic device (\"Lebanese loop\") was inserted into the card slot to physically trap your card. The \"helpful stranger\" watched you re-enter your PIN (shoulder-surfing), then retrieved the trapped card themselves once you left — now they have both your card and PIN.",
    flags: ["A stranger appears immediately, already familiar with the exact \"solution\"","They encourage you to re-enter your PIN multiple times while watching","They suggest trying again instead of immediately calling the bank","The card slot looks slightly modified, loose, or has an extra attachment"],
    tips: ["If your card is retained, leave the PIN pad immediately and call your bank's helpline to block the card","Never re-enter your PIN because a stranger suggests it — cover the keypad always","Report the incident to the bank and the ATM security guard/branch right away","Prefer ATMs inside bank branches or well-monitored locations, especially at night"],
    quiz: [
      { q: "What should you do first if your card gets stuck in an ATM?", opts: ["Re-enter your PIN as suggested by a stranger","Immediately call your bank to block the card","Wait for the \"helper\" to fix it","Leave without reporting it"], ans: 1, exp: "Blocking the card immediately prevents any fraudulent use even if it has been physically trapped." },
      { q: "What is a \"Lebanese loop\"?", opts: ["A type of ATM receipt","A physical device inserted to trap cards inside the ATM slot","A banking app feature","A type of PIN"], ans: 1, exp: "It is a card-trapping device fraudsters insert into ATM card slots." },
      { q: "Why do card-trapping fraudsters watch you re-enter your PIN?", opts: ["To help you faster","To capture your PIN via shoulder-surfing before retrieving the trapped card","It is required by the bank","To count ATM users"], ans: 1, exp: "Combining your PIN with the physically trapped card gives them full account access." }
    ]
  },

  {
    id: 35, icon: "📶", title: "NFC Payment Scam", desc: "A \"verification\" app asks you to tap your contactless card to your phone to check for ₹1 to \"activate\" NFC payments.", diff: "high", tag: "Card Fraud",
    url: "nfc-card-activate.app", badge: "NFC Activation Required", amount: "₹1", amountLabel: "Contactless Verification Charge",
    fee: "Tap Card & Enter Details to Activate", feeNote: "Contactless payments disabled until activated",
    fields: [{"n":"card","p":"Card Number (tap simulated)","t":"text"},{"n":"expiry","p":"Expiry (MM/YY)","t":"text"},{"n":"cvv","p":"CVV","t":"text"}],
    exposed: ["Full Card Number","Expiry Date","CVV","NFC Card Data"],
    reveal: "A malicious app used your phone's NFC reader combined with the entered card details to clone enough data for card-not-present fraud. Real card issuers never need you to \"activate\" contactless payments through a third-party app — it is enabled automatically by your bank.",
    flags: ["Contactless/NFC is already enabled by default on your bank-issued card, no \"activation\" needed","App is from an unofficial source, not your bank's official app","Asks for CVV, which is never needed for genuine NFC/contactless verification","Charges a token ₹1 fee to seem legitimate"],
    tips: ["Contactless payments are enabled by your bank by default — no separate app activation is ever required","Never enter your CVV into any third-party \"verification\" app","Only install banking-related apps from your bank's official, verified source","Use an RFID-blocking card sleeve if concerned about unauthorized NFC scans in public"],
    quiz: [
      { q: "Do you need a third-party app to \"activate\" contactless/NFC payments on your card?", opts: ["Yes, always","No — it is enabled automatically by your bank","Only for new cards","Only for premium cards"], ans: 1, exp: "Banks enable contactless functionality by default; no external activation app is needed." },
      { q: "Why is entering your CVV into an \"NFC activation\" app dangerous?", opts: ["It is not dangerous","CVV combined with card number/expiry enables card-not-present fraud","CVV is public information","It only affects contactless payments"], ans: 1, exp: "CVV is the key piece needed for unauthorized online transactions." },
      { q: "Where should you get apps related to your bank card?", opts: ["Any app claiming to be official","Only your bank's verified official app/source","Third-party app stores","Links from SMS messages"], ans: 1, exp: "Always verify you are using your bank's genuinely published app." }
    ]
  },

  {
    id: 36, icon: "💳", title: "Contactless Card Scam", desc: "A \"card safety check\" website offers to scan your contactless card for skimming vulnerability — just enter your card details to test.", diff: "med", tag: "Card Fraud",
    url: "card-skim-check.online", badge: "Free Vulnerability Scan", amount: "Free Check", amountLabel: "Contactless Card Safety Test",
    fee: "Enter Card Details to Scan", feeNote: "Results shown instantly",
    fields: [{"n":"card","p":"Card Number","t":"text"},{"n":"expiry","p":"Expiry (MM/YY)","t":"text"},{"n":"cvv","p":"CVV","t":"text"},{"n":"name","p":"Name on Card","t":"text"}],
    exposed: ["Full Card Number","Expiry Date","CVV","Cardholder Name"],
    reveal: "There is no legitimate way to \"test\" your contactless card for skimming risk by entering its full details online — this collected everything needed for immediate card-not-present fraud. Genuine RFID-skimming protection comes from physical shielding, not entering data into a website.",
    flags: ["No real security check ever requires you to submit your full card number, expiry, and CVV online","Offers a \"free scan\" as bait for an unrelated benefit","Domain is unrelated to any bank or card network","Instant \"results\" with no real verification process"],
    tips: ["Never enter full card details (especially CVV) into any site claiming to \"test\" or \"verify\" your card","Protect against real RFID skimming using an RFID-blocking wallet or card sleeve","Your bank or card network (Visa/Mastercard/RuPay) never asks you to submit card details for a \"vulnerability scan\"","Report any card data theft immediately to your bank to block the card"],
    quiz: [
      { q: "Does testing your card for \"skimming vulnerability\" ever require entering your CVV online?", opts: ["Yes, it is standard practice","No — this is always a data-harvesting scam","Only for old cards","Only for contactless cards"], ans: 1, exp: "No legitimate security check requires submitting your full card details online." },
      { q: "What is a real way to protect against contactless/RFID skimming?", opts: ["Entering your card details on a \"scan\" website","Using an RFID-blocking wallet or sleeve","Sharing your CVV with the bank by SMS","Disabling your bank account"], ans: 1, exp: "Physical RFID shielding blocks unauthorized scans without exposing your data anywhere." },
      { q: "A \"free card safety scan\" website is likely:", opts: ["A bank service","A data-harvesting scam","A government tool","Required before using contactless cards"], ans: 1, exp: "These sites exist solely to collect full card data for fraud." }
    ]
  },

  {
    id: 37, icon: "🏦", title: "Fake Bank KYC Update", desc: "Complete your re-KYC by filling this detailed form or your account will be permanently deactivated in 24 hours.", diff: "med", tag: "Banking Fraud",
    url: "kyc-rebank-update-portal.in", badge: "Account Deactivation Warning", amount: "Account at Risk", amountLabel: "Mandatory Re-KYC Form",
    fee: "Submit Full KYC Form Now", feeNote: "Deactivation in 24 hours if not submitted",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"dob","p":"Date of Birth","t":"text"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"pan","p":"PAN Number","t":"text"},{"n":"debitcard","p":"Debit Card Number & Expiry","t":"text"},{"n":"pin","p":"ATM PIN (for \"verification\")","t":"password"}],
    exposed: ["Aadhaar Number","PAN Number","Debit Card Number","ATM PIN","Full Identity Profile"],
    reveal: "Real KYC re-verification is done in-branch or through your bank's official app with document upload, and never asks for your ATM PIN — a PIN is only for authorizing transactions, not for identity verification. This form collected a complete identity + card + PIN package, enough for total account takeover.",
    flags: ["Requests ATM PIN, which KYC verification never legitimately needs","Threatens permanent account deactivation within an aggressive deadline","Domain is not your bank's official website","Collects Aadhaar, PAN, and card details all in a single unofficial form"],
    tips: ["Complete KYC updates only via your bank's official app, website, or in-branch visit","Never share your ATM PIN for any reason — no verification process requires it","Banks give reasonable, official-channel notice for KYC updates, not urgent SMS deadlines","If unsure, call your bank's official customer care number printed on your card"],
    quiz: [
      { q: "Does a real KYC update ever require your ATM PIN?", opts: ["Yes, for identity confirmation","No, never — PIN is only for authorizing transactions","Only for savings accounts","Only during festivals"], ans: 1, exp: "Identity verification uses documents, not your transaction PIN." },
      { q: "Where should you complete a genuine KYC update?", opts: ["Any link received by SMS","Your bank's official app, website, or branch","A third-party \"KYC portal\"","A number that called you"], ans: 1, exp: "Only official, verified bank channels handle KYC updates." },
      { q: "A form asking for Aadhaar, PAN, card number AND PIN together is:", opts: ["Normal for KYC","Extremely dangerous — enough for full account takeover","Required by RBI","Safe if the site looks professional"], ans: 1, exp: "This combination of data allows a scammer to fully impersonate and control your identity and account." }
    ]
  },

  {
    id: 38, icon: "📱", title: "Fake Banking App", desc: "Download our \"upgraded\" banking app from this link for faster transactions and better security.", diff: "high", tag: "Banking Fraud",
    url: "securebank-app-update.download", badge: "App Update Available", amount: "Free Upgrade", amountLabel: "New Banking App Download",
    fee: "Download & Login to Migrate", feeNote: "Old app will stop working soon",
    fields: [{"n":"apk","p":"APK Download Link Clicked","t":"text"},{"n":"userId","p":"Net Banking User ID","t":"text"},{"n":"password","p":"Net Banking Password","t":"text"},{"n":"otp","p":"OTP to Complete Login","t":"text"}],
    exposed: ["Net Banking Login Credentials","OTP","Full Account Access"],
    reveal: "This is a fake APK impersonating your real bank's app, distributed outside the Play Store/App Store. Logging in sent your credentials directly to scammers, and the OTP let them complete a live login on their own device — giving them full control of your account.",
    flags: ["App is downloaded via a direct APK link, not from Play Store or App Store","Claims the \"old\" official app will stop working, pressuring migration","Asks for OTP immediately after entering login credentials, unlike normal app usage","Sender is an SMS/WhatsApp link, not an official bank communication"],
    tips: ["Only download banking apps from the official Play Store or Apple App Store","Your bank will never ask you to install an app via a direct APK link","Never share an OTP that arrives right after logging in through a suspicious app","If you've installed a suspicious banking APK, uninstall it immediately and change your net banking password from a trusted device"],
    quiz: [
      { q: "Where should you always download your bank's app from?", opts: ["A direct APK link via SMS","Official Play Store or App Store only","Any banking-related website","A link from an unknown caller"], ans: 1, exp: "Official app stores verify publisher authenticity; direct APK links bypass this and are commonly used for fake apps." },
      { q: "What should you do if you already installed a suspicious \"bank update\" APK?", opts: ["Keep using it, it's probably fine","Uninstall immediately and change your password from a trusted device","Just ignore any pop-ups","Restart your phone only"], ans: 1, exp: "Immediate uninstallation and password change limits damage after exposure." },
      { q: "Receiving an OTP request right after logging into an unofficial app is a sign of:", opts: ["Normal security","A live fraud attempt using your credentials in real time","A software bug","Two-factor authentication working correctly"], ans: 1, exp: "This pattern indicates scammers are using your stolen credentials to log in simultaneously and need your OTP to complete it." }
    ]
  },

  {
    id: 39, icon: "🦠", title: "Mobile Banking Trojan", desc: "A \"package tracking\" app you installed silently requests SMS and Accessibility permissions in the background.", diff: "high", tag: "Malware & Banking Fraud",
    url: "track-my-parcel-live.apk", badge: "Permissions Requested", amount: "Background Access", amountLabel: "SMS & Accessibility Permissions",
    fee: "Grant Permissions to Continue Tracking", feeNote: "App will not function without these permissions",
    fields: [{"n":"smsPermission","p":"Allow SMS Access","t":"text"},{"n":"accessibilityPermission","p":"Allow Accessibility Service","t":"text"},{"n":"bankApp","p":"Banking App Installed on Device","t":"text"}],
    exposed: ["All Incoming SMS (including OTPs)","On-screen Content via Accessibility Service","Banking App Activity"],
    reveal: "This \"tracking\" app was a banking trojan. SMS permission lets it silently read and forward every OTP to the attacker, while Accessibility permission lets it read your banking app's screen and even simulate taps — enabling fully automated, invisible fund transfers.",
    flags: ["A parcel/utility app requesting SMS and Accessibility permissions has no legitimate need for them","App installed from outside the Play Store as an APK","Permission requests are unrelated to the app's stated purpose","No visible activity, but background battery/data usage increases"],
    tips: ["Question any non-banking app that requests SMS or Accessibility Service permissions — these are almost never legitimately needed","Only install apps from the Play Store/App Store, and check permissions requested before installing","Review and revoke Accessibility Service access for unfamiliar apps in your phone's settings regularly","If you suspect a banking trojan, disconnect from the internet, uninstall the app, and contact your bank immediately"],
    quiz: [
      { q: "Why would a parcel-tracking app request SMS read permission?", opts: ["To notify you of delivery updates","To silently intercept OTPs for banking fraud","It is a standard Android requirement","To improve GPS accuracy"], ans: 1, exp: "Legitimate tracking apps have no need to read your SMS inbox; this is a hallmark of banking trojans." },
      { q: "What does Accessibility Service permission allow a malicious app to do?", opts: ["Nothing significant","Read on-screen content and simulate taps, including inside banking apps","Only change font size","Access the camera only"], ans: 1, exp: "Accessibility Service was designed to assist users with disabilities but is heavily abused by trojans to control the screen." },
      { q: "What should you do if you suspect a banking trojan on your phone?", opts: ["Restart the phone and continue normally","Disconnect internet, uninstall the app, and contact your bank immediately","Wait and see if anything happens","Just change your phone lock screen PIN"], ans: 1, exp: "Quick isolation and bank notification can prevent or limit unauthorized transactions." }
    ]
  },

  {
    id: 40, icon: "🏧", title: "ATM Cash-Out Attack", desc: "Multiple ATMs in your city dispense cash simultaneously using cloned card data from a compromised network.", diff: "high", tag: "ATM & Card Fraud",
    url: "atm-network-alert.internal", badge: "Unusual Activity Detected", amount: "Multiple Withdrawals", amountLabel: "Simultaneous ATM Cash-Outs",
    fee: "Review Transaction Alerts", feeNote: "Cloned card used across multiple ATMs within minutes",
    fields: [{"n":"card","p":"Original Card Number (compromised earlier)","t":"text"},{"n":"pin","p":"PIN (captured via earlier skimming)","t":"password"},{"n":"location","p":"ATM Locations Used","t":"text"}],
    exposed: ["Cloned Card Data","Captured PIN","Withdrawal Limit Exploited"],
    reveal: "This attack relies on card data and PIN stolen earlier — often via a skimmer or trapping device — then cloned onto multiple blank cards used simultaneously across ATMs (sometimes with manipulated withdrawal limits) to drain funds before you can react. It confirms why acting fast on the very first suspicious skim or trap warning matters.",
    flags: ["Multiple withdrawal alerts from different ATM locations within minutes of each other","Withdrawals exceed your normal daily limit, suggesting a compromised switch or cloned card","You did not use your card at any of the listed locations","Follows an earlier unnoticed skimming or card-trapping incident"],
    tips: ["Enable instant SMS/app alerts for every ATM transaction so you notice cash-outs immediately","Set a lower daily ATM withdrawal limit through your bank app if you rarely need large cash withdrawals","Inspect ATM card slots and keypads for tampering before use, and cover the keypad when entering your PIN","If you see unrecognized withdrawals, call your bank's fraud helpline immediately to block the card and dispute the transactions"],
    quiz: [
      { q: "What usually precedes a large-scale ATM cash-out attack?", opts: ["A random bank error","Earlier card skimming or trapping that captured card data and PIN","A software update","A scheduled maintenance"], ans: 1, exp: "Cash-out attacks rely on previously stolen card data and PINs cloned onto multiple cards." },
      { q: "What is an effective way to catch a cash-out attack early?", opts: ["Checking your statement once a year","Enabling instant transaction alerts via SMS/app","Ignoring small transactions","Using the same PIN everywhere"], ans: 1, exp: "Real-time alerts let you notice and report unauthorized withdrawals within minutes." },
      { q: "What should you do immediately if you notice withdrawals you didn't make?", opts: ["Wait a day to confirm","Call your bank's fraud helpline immediately to block the card","Post about it on social media first","Try to withdraw the rest yourself"], ans: 1, exp: "Immediate action can stop further fraudulent withdrawals and start the dispute process." }
    ]
  },

  {
    id: 41, icon: "🏛️", title: "Cash Deposit Machine Scam", desc: "A stranger at the Cash Deposit Machine offers to \"help\" you deposit cash into your account for a small favor.", diff: "med", tag: "ATM & Banking Fraud",
    url: "cdm-assist-helper.local", badge: "Deposit Assistance Offered", amount: "₹20,000", amountLabel: "Cash Deposit in Progress",
    fee: "Let Helper Complete Deposit", feeNote: "Helper offers to enter account number for you",
    fields: [{"n":"account","p":"Account Number (entered by \"helper\")","t":"text"},{"n":"cash","p":"Cash Handed to Helper","t":"text"},{"n":"receipt","p":"Receipt Received","t":"text"}],
    exposed: ["Account Number Redirected","Cash Deposited to Wrong/Scammer Account","False Receipt"],
    reveal: "The \"helper\" entered their own account number instead of yours while distracting you, or swapped the printed receipt for a fake one — your cash was deposited into the scammer's account, not yours, and you walked away believing the deposit succeeded.",
    flags: ["A stranger offers unsolicited help at the Cash Deposit Machine, especially with elderly or unfamiliar users","They insist on entering the account number or handling your cash directly","They rush you or stand very close, blocking your view of the screen","The final receipt looks slightly different or is handed to you already printed"],
    tips: ["Always enter your own account number and complete deposit transactions yourself, never let a stranger operate the machine for you","Double-check the account number displayed on the confirmation screen before inserting cash","Verify your bank balance via SMS alert or the app immediately after any CDM deposit","If you need help, ask bank branch staff or security personnel, not random strangers at the machine"],
    quiz: [
      { q: "What is the safest response to a stranger offering to help at a Cash Deposit Machine?", opts: ["Let them handle it to save time","Politely decline and complete the transaction yourself, or ask official bank staff","Give them your cash to hold","Share your account number with them"], ans: 1, exp: "Only you or verified bank staff should handle your cash and account details at a CDM." },
      { q: "What should you verify immediately after any CDM deposit?", opts: ["Nothing, the receipt is enough","Your account balance via SMS alert or banking app","The machine's serial number","The time on the receipt only"], ans: 1, exp: "Checking your real balance confirms the deposit actually reached your own account." },
      { q: "Why do CDM scammers rush or crowd the victim?", opts: ["To be friendly","To block their view and swap account numbers or receipts unnoticed","Machines require quick operation","To help you finish faster"], ans: 1, exp: "Distraction and obstruction are key tactics to manipulate the transaction unnoticed." }
    ]
  },

  {
    id: 58, icon: "🤖", title: "Deepfake Family Emergency", desc: "AI-generated audio/video to impersonate someone you trust.", diff: "high", tag: "Deepfake",
    url: "fake-call-simulator.com", badge: "URGENT!", amount: "₹15,000", amountLabel: "Emergency Transfer",
    fee: "Verify Now", feeNote: "Verify with family first",
    fields: [{"n":"callBack","p":"Confirm by calling known number","t":"checkbox"}],
    reveal: "AI voice cloning can replicate anyone's voice. Always verify by calling them back on their saved personal number.",
    flags: ["Extreme urgency","Asks not to call back on original number","Voice artifacts"],
    tips: ["Always hang up and call the family member directly on their known number.","Establish a family \"safe word\"."],
    quiz: [
      { q: "How much audio is typically needed for modern AI to clone a voice?", opts: ["At least 10 minutes","An hour of clear speaking","Just 3 to 5 seconds","Multiple phone calls"], ans: 2, exp: "Modern AI tools can clone a voice convincingly from just a 3-second clip stolen from social media." },
      { q: "What is a strong preventative measure against AI family emergency scams?", opts: ["Agreeing on a family \"safe word\"","Never answering the phone","Only using FaceTime","Deleting social media"], ans: 0, exp: "A pre-agreed safe word allows you to instantly verify if the caller is actually your family member." },
      { q: "If someone calls from an unknown number claiming to be a relative in trouble, you should:", opts: ["Send a small test amount first","Keep them on the line to gather details","Ask them for their ID","Hang up immediately and dial their saved number"], ans: 3, exp: "Hanging up breaks the psychological urgency. Dialing their known number ensures you are speaking to the real person." }
    ]
  },

  {
    id: 59, icon: "🤖", title: "Deepfake CEO Scam", desc: "AI-generated audio/video to impersonate someone you trust.", diff: "high", tag: "Deepfake",
    url: "internal-corp-portal.com", badge: "CEO Order", amount: "Confidential", amountLabel: "Urgent Transfer",
    fee: "Verify Order", feeNote: "Check company channels",
    fields: [{"n":"verify","p":"Check Email Domain/Source","t":"checkbox"}],
    reveal: "Attackers use deepfakes to pressure employees. Always verify through official channels.",
    flags: ["Urgency","Request to bypass procedures","Deepfake video artifacts"],
    tips: ["Verify via secondary internal channels.","Never bypass company financial procedures."],
    quiz: [
      { q: "What visual artifact might indicate a live video is a deepfake?", opts: ["Unnatural blinking or blurred edges around the face","The background is too dark","The video is in 4K resolution","The person is wearing glasses"], ans: 0, exp: "Deepfakes often struggle with natural facial boundaries, blinking, and lighting consistency." },
      { q: "Business Email Compromise (BEC) often uses deepfakes to:", opts: ["Get free company products","Bypass financial authorization protocols","Hack company Wi-Fi","Steal office supplies"], ans: 1, exp: "Scammers use executive authority to force employees to bypass standard security and wire protocols." },
      { q: "If an executive demands an urgent, confidential wire transfer via a video call, you should:", opts: ["Do it immediately to save your job","Ask your coworkers for their opinion","Verify the request via an alternative official channel","Trust the video completely"], ans: 2, exp: "Never rely on a single channel. Verify through a secure internal message or a separate phone call." }
    ]
  },

  {
    id: 60, icon: "🤖", title: "AI Customer Care Scam", desc: "AI-generated fake audio/video to impersonate someone.", diff: "high", tag: "Deepfake",
    url: "support-verify.com", badge: "Support Alert", amount: "N/A", amountLabel: "Account Issue",
    fee: "Verify Support", feeNote: "Check official site",
    fields: [{"n":"verify","p":"Check Official Support Website","t":"checkbox"}],
    reveal: "Customer care will never ask for sensitive credentials via a voice call.",
    flags: ["Calls from unknown numbers","Requests for OTPs/Passwords","Creating panic"],
    tips: ["Customer care never asks for OTPs or passwords.","Visit the official website manually."],
    quiz: [
      { q: "If a support agent sends a link via SMS while on a call, you should:", opts: ["Click it to resolve the issue quickly","Forward it to your email","Ignore it and navigate to the official site manually","Ask them to text it on WhatsApp"], ans: 2, exp: "SMS links from \"agents\" are often phishing pages designed to steal your login credentials." },
      { q: "Why do scammers impersonate customer care using AI voices?", opts: ["To provide better service","To build false trust and bypass your security defenses","To test your microphone","Because it is cheaper"], ans: 1, exp: "An authoritative or helpful tone lowers your guard, making you more likely to hand over sensitive data." },
      { q: "Legitimate customer support agents will NEVER ask for your:", opts: ["Email address","Name","Account number","OTP or account password"], ans: 3, exp: "OTPs are for your eyes only. No real support agent requires your OTP or password to help you." }
    ]
  },

  {
    id: 61, icon: "🤖", title: "AI Video Interview Scam", desc: "AI-generated fake audio/video to impersonate someone.", diff: "high", tag: "Deepfake",
    url: "hiring-portal.com", badge: "Interview", amount: "12 LPA", amountLabel: "Job Offer",
    fee: "Confirm Offer", feeNote: "Check domain",
    fields: [{"n":"verify","p":"Confirm Company Domain","t":"checkbox"}],
    reveal: "Fake interviews are used to harvest personal data. Always verify the recruiter's domain.",
    flags: ["Unprofessional domain","Fee demand","No office address"],
    tips: ["Verify company on official records.","Never pay for an interview."],
    quiz: [
      { q: "A major red flag during a video interview with a recruiter is:", opts: ["Asking for a refundable registration fee","Asking about your experience","Wearing business casual attire","Scheduling a follow-up"], ans: 0, exp: "Legitimate employers pay you. They will never ask you to pay a fee for an interview or equipment." },
      { q: "Before attending an online interview, how should you verify the company?", opts: ["Trust the recruiter's email signature","Check the company's official career page and domain","Look at their profile picture","Ask them if they are real"], ans: 1, exp: "Scammers use fake domains (e.g., @google-careers.com instead of @google.com). Always verify independently." },
      { q: "Fake job interviews often use AI avatars to:", opts: ["Make the interview faster","Test your technical skills","Provide unbiased feedback","Mask the scammer's real identity and location"], ans: 3, exp: "Scammers use AI avatars to look professional and hide the fact that they are operating a fraud ring." }
    ]
  },

  {
    id: 62, icon: "📈", title: "AI Investment Advisor Scam", desc: "Fake investment opportunities promising high returns.", diff: "med", tag: "Investment",
    url: "ai-wealth-growth.com/dashboard", badge: "Market Alert", amount: "Guaranteed Returns", amountLabel: "Invest Today",
    fee: "Deposit Amount", feeNote: "Verify SEBI",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"amount","p":"Amount to Invest","t":"number"}],
    reveal: "High-return schemes with no risk are guaranteed scams.",
    flags: ["High returns","No risk","Unregulated"],
    tips: ["Verify with SEBI.","Don't trust unsolicited tips."],
    quiz: [
      { q: "Scammers use terms like \"Proprietary AI Algorithm\" primarily to:", opts: ["Confuse victims with tech jargon and create false legitimacy","Explain how the stock market actually works","Show off their coding skills","Help you learn programming"], ans: 0, exp: "Buzzwords like \"AI Algorithm\" are used to make the scam sound sophisticated and hide the fact that there is no real trading happening." },
      { q: "Where must legitimate investment advisors be registered in India?", opts: ["RBI","SEBI","Ministry of Finance","BSE"], ans: 1, exp: "The Securities and Exchange Board of India (SEBI) regulates all legal investment advisors and platforms." },
      { q: "An AI trading bot promising \"guaranteed risk-free daily returns\" is mathematically:", opts: ["Possible in a bull market","Only available to VIPs","Impossible and a guaranteed scam","A standard banking feature"], ans: 2, exp: "All investments carry risk. \"Guaranteed returns\" in trading is the defining feature of a Ponzi scheme." }
    ]
  },

  {
    id: 63, icon: "❤️", title: "AI Romance Scam", desc: "Fake romantic relationship to extract money or gifts.", diff: "med", tag: "Romance",
    url: "match-finder.com", badge: "Love Match", amount: "N/A", amountLabel: "Urgent Help",
    fee: "Verify Identity", feeNote: "Video call first",
    fields: [{"n":"name","p":"Full Name","t":"text"}],
    reveal: "Scammers build emotional trust to manipulate you. Never send money to someone you have not met.",
    flags: ["Requests for money","Refusal to video call","Perfect profile"],
    tips: ["Video call to verify identity.","Never send money to strangers."],
    quiz: [
      { q: "What is the primary goal of a romance scammer?", opts: ["Building emotional dependency to eventually extract money","Finding a long-term partner","Learning a new language","Getting more social media followers"], ans: 0, exp: "Romance scammers spend months building trust entirely to manipulate you into sending them money later." },
      { q: "If an online match suddenly needs money for a \"medical emergency\" or \"flight\", you should:", opts: ["Send half the money","Ask for a receipt","Refuse the request and report the profile","Borrow money to help them"], ans: 2, exp: "Sudden financial emergencies are the classic climax of a romance scam. Cut contact immediately." },
      { q: "Romance scammers avoid real-time, unscripted video calls because:", opts: ["Their internet is bad","They are shy","Their camera is broken","It exposes their fake identity"], ans: 3, exp: "Scammers use stolen photos. A live video call will instantly reveal they are not the person in the pictures." }
    ]
  },

  {
    id: 64, icon: "📞", title: "AI Voice OTP Scam", desc: "Voice phishing via phone calls to steal personal information.", diff: "high", tag: "Vishing",
    url: "bank-support.com", badge: "Security Alert", amount: "N/A", amountLabel: "Account Secure",
    fee: "Do Not Share", feeNote: "Hang up",
    fields: [{"n":"otp","p":"Enter OTP (DO NOT)","t":"text"}],
    reveal: "Never share OTPs on a call. Official organizations will never ask for them.",
    flags: ["Call from bank","Request for OTP","Urgency"],
    tips: ["Hang up immediately.","Call official bank number."],
    quiz: [
      { q: "If you receive a call from your \"bank\" asking for an OTP to stop a fraudulent charge, it is:", opts: ["A social engineering attack to steal your money","A standard security procedure","A helpful customer service agent","A system glitch"], ans: 0, exp: "Scammers create a fake emergency to panic you into handing over the OTP that actually authorizes the theft." },
      { q: "Fraudsters use urgency in OTP scams to:", opts: ["Save time on the phone","Prevent you from reading the full warning text in the SMS","Process the refund faster","Help other customers"], ans: 1, exp: "Bank SMS messages often say \"Do not share this OTP.\" Urgency stops you from reading that warning." },
      { q: "Which entity legitimately requires your OTP over a phone call?", opts: ["The RBI","Your local police station","Your bank manager","Nobody"], ans: 3, exp: "An OTP is a digital key meant ONLY to be typed into a secure app or website by you. No human needs it." }
    ]
  },

  {
    id: 65, icon: "📱", title: "Facebook Marketplace Scam", desc: "Scams on platforms like Facebook.", diff: "low", tag: "Social Media",
    url: "facebook-deals.com", badge: "Offer", amount: "Variable", amountLabel: "Item Sale",
    fee: "Verify Seller", feeNote: "Meet in person",
    fields: [{"n":"verify","p":"Check Profile Authenticity","t":"checkbox"}],
    reveal: "Always inspect seller profiles and deal in person.",
    flags: ["Cheap items","No profile photo","Asks for advance"],
    tips: ["Check reviews.","Meet in public places."],
    quiz: [
      { q: "What is the safest payment method for local marketplace transactions?", opts: ["Cash on delivery or in-person exchange","Sending a UPI transfer in advance","Giving your credit card number","Mailing a cheque"], ans: 0, exp: "In-person cash or instant transfer upon receiving the item ensures you do not get scammed." },
      { q: "A seller profile created just a few days ago with no reviews selling cheap electronics is likely:", opts: ["A new legitimate business","Someone decluttering","A burner account for fraud","A great opportunity"], ans: 2, exp: "Scammers constantly create fresh accounts because their old ones get banned after scamming people." },
      { q: "Why do scammers on Facebook Marketplace insist on \"advance payment\"?", opts: ["To cover shipping materials","To secure the item for you","To secure the money before disappearing","To avoid taxes"], ans: 2, exp: "Once you send an advance or \"booking fee,\" the scammer blocks you and never sends the item." }
    ]
  },

  {
    id: 66, icon: "📱", title: "Instagram Verification Scam", desc: "Scams on platforms like Instagram.", diff: "low", tag: "Social Media",
    url: "insta-verify.com", badge: "Verification", amount: "Status", amountLabel: "Get Blue Tick",
    fee: "Verify", feeNote: "Official App Only",
    fields: [{"n":"verify","p":"Check Profile Authenticity","t":"checkbox"}],
    reveal: "Official verification requests come from the app, not DMs.",
    flags: ["DMs from unknown accounts","Urgent links"],
    tips: ["Use official settings.","Ignore DMs."],
    quiz: [
      { q: "Who can guarantee an Instagram verification badge for a fee?", opts: ["No one","Digital marketing agencies","Meta employees","Hackers"], ans: 0, exp: "Verification is an internal platform process. Anyone promising to sell you a badge is a scammer." },
      { q: "How does Instagram officially notify users about verification badges?", opts: ["Via direct messages (DMs)","Through the app settings, never via DMs","Through WhatsApp","By calling your phone"], ans: 1, exp: "Meta (Instagram) handles all verification requests natively inside the app's settings menu." },
      { q: "Clicking a fake verification link usually leads to:", opts: ["A faster approval process","A free blue tick","A credential harvesting phishing page","A virus scan"], ans: 2, exp: "The link takes you to a fake login page that steals your username and password, compromising your account." }
    ]
  },

  {
    id: 67, icon: "📱", title: "Blue Tick Scam", desc: "Scams on platforms like Twitter/X.", diff: "low", tag: "Social Media",
    url: "x-verify.com", badge: "Verified", amount: "Subscription", amountLabel: "Upgrade",
    fee: "Verify", feeNote: "Official site only",
    fields: [{"n":"verify","p":"Check Profile Authenticity","t":"checkbox"}],
    reveal: "Verification is a status, not something you buy from a random link.",
    flags: ["DMs","Links","Urgency"],
    tips: ["Use official app.","Don't click links."],
    quiz: [
      { q: "If an email warns that your \"Blue Tick will be removed in 2 hours,\" what tactic is being used?", opts: ["Artificial Urgency","Friendly reminder","Account maintenance","Network update"], ans: 0, exp: "Creating a false sense of urgency forces victims to click malicious links without thinking critically." },
      { q: "Phishing links for X subscriptions often use:", opts: ["Official app notifications","Typosquatted domains like twitter-billing.com","Encrypted text messages","Postal mail"], ans: 1, exp: "Scammers use fake URLs that look slightly real to trick you into entering your credit card details." },
      { q: "On X (Twitter), premium subscriptions are managed exclusively through:", opts: ["DM links from support","Third-party resellers","Telegram bots","The official app or website billing section"], ans: 3, exp: "You should only ever enter payment details directly inside the verified app or official website." }
    ]
  },

  {
    id: 68, icon: "📱", title: "Fake Influencer Giveaway", desc: "Scams on platforms like Instagram/Twitter.", diff: "low", tag: "Social Media",
    url: "giveaway-portal.com", badge: "Win Prize", amount: "High", amountLabel: "Contest",
    fee: "Verify", feeNote: "Check profile",
    fields: [{"n":"verify","p":"Check Profile Authenticity","t":"checkbox"}],
    reveal: "If the account is not verified, the giveaway is likely a phishing attempt.",
    flags: ["New account","Link in bio","Requires sharing"],
    tips: ["Check official profile.","Don't enter personal data."],
    quiz: [
      { q: "How can you distinguish a fake influencer account from the real one?", opts: ["Check the exact spelling of the handle and account history","Look at their profile picture","Check how many likes they have","Read their bio"], ans: 0, exp: "Scammers use handles like @Real_ElonMuskk. Always check the exact spelling and verification badge." },
      { q: "If a giveaway requires you to pay a \"shipping fee\" to claim a free iPhone, it is:", opts: ["Standard procedure","A legitimate tax","An advance-fee fraud scam","A courier policy"], ans: 2, exp: "If you won a prize, you shouldn't have to pay for it. The scammer just wants your credit card details." },
      { q: "Scammers clone influencer accounts to host fake giveaways in order to:", opts: ["Promote new products","Increase the influencer's fame","Exploit the influencer's trusted reputation","Help their followers"], ans: 2, exp: "Victims trust the influencer, so scammers impersonate them to bypass the victim's natural skepticism." }
    ]
  },

  {
    id: 69, icon: "📈", title: "Telegram Investment Scam", desc: "Fake investment opportunities promising high returns.", diff: "med", tag: "Investment",
    url: "crypto-group.com", badge: "Join Now", amount: "High", amountLabel: "Investment",
    fee: "Join Group", feeNote: "Verify source",
    fields: [{"n":"name","p":"Full Name","t":"text"}],
    reveal: "Legitimate investment firms do not operate solely on Telegram.",
    flags: ["Telegram group","High returns","Anonymous admin"],
    tips: ["Use regulated platforms.","Verify firm registration."],
    quiz: [
      { q: "If a VIP crypto group guarantees 500% returns, it is:", opts: ["A Ponzi scheme or outright theft","A great opportunity","A standard hedge fund","A safe mutual fund"], ans: 0, exp: "There is no such thing as guaranteed astronomical returns. It is a mathematical impossibility designed to steal your deposit." },
      { q: "\"Pump and dump\" groups on Telegram enrich:", opts: ["All group members","Only the group admins who bought in early","The crypto exchanges","New investors"], ans: 1, exp: "Admins buy cheap coins, tell the group to buy (pumping the price), and then sell their coins for profit, leaving the members with worthless assets." },
      { q: "Why do scammers prefer Telegram for investment fraud?", opts: ["Better charting tools","Cheaper transaction fees","It offers anonymity and easy deletion of evidence","SEBI recommends it"], ans: 2, exp: "Telegram allows scammers to hide their identities, use bots, and delete groups instantly once they steal enough money." }
    ]
  },

  {
    id: 70, icon: "📱", title: "Discord Nitro Scam", desc: "Scams on platforms like Discord.", diff: "low", tag: "Social Media",
    url: "discord-gift.com", badge: "Nitro", amount: "Gift", amountLabel: "Free Nitro",
    fee: "Click Link", feeNote: "Official App Only",
    fields: [{"n":"verify","p":"Check Link Source","t":"checkbox"}],
    reveal: "Official Nitro gifts are managed through the Discord app/website.",
    flags: ["Link to claim","Urgency"],
    tips: ["Use official app.","Don't click links."],
    quiz: [
      { q: "If a friend suddenly sends a Nitro link out of nowhere, what likely happened?", opts: ["Their account was compromised by malware","They bought you a gift","Discord is running a promotion","They pressed the wrong button"], ans: 0, exp: "When a user clicks a fake Nitro link, malware takes over their account and spams the malicious link to all their friends." },
      { q: "Official Discord Nitro gifts are always claimed:", opts: ["Through external websites","Directly inside the Discord application without external login","Via email confirmation","By entering credit card details"], ans: 1, exp: "Real Nitro gifts appear as an embedded button inside the chat. You never have to click an external link or log in again." },
      { q: "Fake Discord Nitro links are primarily designed to steal your:", opts: ["Game saves","IP address","Chat history","Discord authentication token"], ans: 3, exp: "Scammers want your Discord token to hijack your account, access your servers, and steal your payment methods." }
    ]
  },

  {
    id: 71, icon: "❤️", title: "Snapchat Romance Scam", desc: "Fake romantic relationship to extract money.", diff: "med", tag: "Romance",
    url: "snap-chat.com", badge: "Match", amount: "N/A", amountLabel: "Chat",
    fee: "Verify", feeNote: "Video call",
    fields: [{"n":"name","p":"Full Name","t":"text"}],
    reveal: "Be wary of profiles that refuse to video call.",
    flags: ["No video","Asking for money","Too perfect"],
    tips: ["Video call.","Meet in person."],
    quiz: [
      { q: "Why do scammers send pictures that disappear (like Snaps)?", opts: ["To save storage space","It leaves no evidence for the victim to report","It improves image quality","It is faster"], ans: 1, exp: "Disappearing messages make it incredibly difficult for law enforcement to investigate the fraud later." },
      { q: "What is a \"Customs Delivery Scam\" in the context of romance fraud?", opts: ["A shipping delay","A tax issue","The scammer sends a fake gift, and you pay fake customs fees","A lost package"], ans: 2, exp: "The scammer pretends to send expensive jewelry, but a \"customs agent\" contacts you demanding fees. The agent is actually the scammer." },
      { q: "If an online friend refuses to video call but sends you a link to pay for a gift's delivery, you should:", opts: ["Pay it quickly","Ask for a discount","Wait for the gift","Block them immediately"], ans: 3, exp: "Refusing video calls proves they are using fake photos. The payment link is designed to steal your card details." }
    ]
  },

  {
    id: 72, icon: "💼", title: "LinkedIn Recruitment Scam", desc: "Fake job offers that demand fees.", diff: "med", tag: "Job",
    url: "jobs-recruit.com", badge: "Job Offer", amount: "Salary", amountLabel: "Apply",
    fee: "Do Not Pay", feeNote: "Research company",
    fields: [{"n":"fee","p":"Registration Fee (DO NOT PAY)","t":"text"}],
    reveal: "No legitimate employer charges for a job interview or training.",
    flags: ["Fee request","Unprofessional communication","Fake company"],
    tips: ["Research company.","Never pay fees."],
    quiz: [
      { q: "What is a major indicator of a fake recruiter on LinkedIn?", opts: ["Asking for money for training or software","Having a professional headshot","Listing their job history","Messaging you directly"], ans: 0, exp: "Real companies supply their own software and training. If they ask you to buy it from their \"vendor,\" it is a scam." },
      { q: "How do scammers make their fake job posts look legitimate?", opts: ["By asking tough interview questions","By copying real job descriptions and company logos","By providing great benefits","By paying high salaries"], ans: 1, exp: "Scammers clone legitimate job postings from companies like Google or Amazon to make the opportunity look authentic." },
      { q: "A legitimate job offer letter will NEVER require you to:", opts: ["Sign an NDA","Provide references","Complete a background check","Pay a refundable deposit"], ans: 3, exp: "There is no such thing as a \"refundable deposit\" in legitimate employment. It is an advance-fee fraud." }
    ]
  },

  {
    id: 73, icon: "₿", title: "X (Twitter) Crypto Giveaway Scam", desc: "Cryptocurrency scams.", diff: "high", tag: "Crypto",
    url: "x-official-crypto-giveaway.org/claim-btc", badge: "Giveaway", amount: "BTC", amountLabel: "Win Crypto",
    fee: "Verify", feeNote: "Regulated only",
    fields: [{"n":"wallet","p":"Wallet Address","t":"text"}],
    reveal: "There is no such thing as \"free\" crypto or doubling money.",
    flags: ["\"Free\" money","Send to get back","Urgency"],
    tips: ["Use regulated exchanges.","Never send crypto to get more."],
    quiz: [
      { q: "Why is it impossible to reverse a transaction if you fall for a crypto giveaway scam?", opts: ["Blockchain transactions are immutable and decentralized","Customer service is too slow","Banks block it","The internet drops"], ans: 0, exp: "Unlike credit cards, cryptocurrency transactions cannot be reversed or refunded by a central authority once confirmed." },
      { q: "Verified accounts (Blue Ticks) promoting crypto giveaways:", opts: ["Are highly trustworthy","Are sponsored by the platform","Are guaranteed to pay out","Are often compromised accounts bought by scammers"], ans: 3, exp: "Scammers hijack verified accounts to make their fake giveaways look like official endorsements from celebrities or companies." },
      { q: "The core mechanism of a crypto doubling scam is:", opts: ["Mining new coins","Trading algorithms","\"Send me 1 BTC, I will send back 2 BTC\"","Staking rewards"], ans: 2, exp: "The scam relies on greed. Once you send your crypto to \"verify\" your address, they keep it and send nothing back." }
    ]
  },

  {
    id: 74, icon: "🛒", title: "Amazon Seller Scam", desc: "Fake online stores or fraudulent listings.", diff: "med", tag: "E-commerce",
    url: "amazon-deals-india.shop/iphone15", badge: "Deal", amount: "Low", amountLabel: "Shop",
    fee: "Verify", feeNote: "Use HTTPS",
    fields: [{"n":"verify","p":"Check HTTPS and Reviews","t":"checkbox"}],
    reveal: "Always check if the URL is amazon.in and look for the \"Fulfilled by Amazon\" badge.",
    flags: ["Wrong URL","No reviews","Cheap prices"],
    tips: ["Check URL.","Read reviews."],
    quiz: [
      { q: "Legitimate Amazon fulfillment ensures:", opts: ["Buyer protection and a verified return policy","Guaranteed lowest prices","Free gifts with purchase","No taxes"], ans: 0, exp: "Items marked \"Fulfilled by Amazon\" are stored and shipped by the company, meaning you are protected if the item is fake." },
      { q: "A product listed at 90% below its market value on an unverified site is:", opts: ["A great clearance deal","A bait-and-switch or phishing attempt","A refurbished item","A wholesale discount"], ans: 1, exp: "Scammers use impossible prices (like an iPhone for ₹10,000) to blind buyers to the obvious red flags on the website." },
      { q: "What is the danger of buying from a site like \"amazon-deals-india.shop\"?", opts: ["Slow shipping times","Poor customer service","It is a spoofed domain designed to steal credit card data","The products are low quality"], ans: 2, exp: "The site has nothing to do with Amazon. It is built solely to harvest the credit card details you enter at checkout." }
    ]
  },

  {
    id: 75, icon: "🛒", title: "Flipkart Seller Scam", desc: "Learn how fake Flipkart sellers trick buyers.", diff: "high", tag: "E-Commerce Fraud",
    url: "seller-flipkart-verify.in", badge: "Verification Required!", amount: "₹0", amountLabel: "Pending Settlement",
    fee: "Verification Fee: ₹1,000", feeNote: "Pay to release your funds",
    fields: [{"n":"businessName","p":"Business Name","t":"text"},{"n":"gstNumber","p":"GST Number","t":"text"},{"n":"sellerId","p":"Seller ID","t":"text"},{"n":"mobile","p":"Registered Mobile","t":"tel"},{"n":"email","p":"Email Address","t":"email"},{"n":"bankName","p":"Bank Name","t":"text"},{"n":"accountNumber","p":"Bank Account Number","t":"text"},{"n":"ifsc","p":"IFSC Code","t":"text"},{"n":"upi","p":"UPI ID","t":"text"},{"n":"otp","p":"OTP","t":"text"}],
    exposed: ["Business Name","GST Number","Seller ID","Mobile Number","Email","Bank Account","IFSC","UPI ID","OTP"],
    reveal: "You just handed over your complete business and banking details, plus the OTP! The scammers can now drain your bank account, take over your seller account, and take out loans in your business name.",
    flags: ["Urgent message claiming your account will be suspended.","Link leads to a fake domain (not flipkart.com).","Asks for bank details and OTP to \"verify\" your account.","Demands a \"verification fee\" to release payments."],
    tips: ["Flipkart will NEVER ask for your OTP, password, or bank details via WhatsApp or SMS.","Always check the URL. Official Flipkart seller links end with flipkart.com.","Log in to your seller dashboard directly through the official app or website, not via links.","Report suspicious messages to Flipkart Seller Support immediately."],
    quiz: [
      { q: "What is a common sign of a fake Flipkart seller?", opts: ["Verified seller badge","Requests payment outside Flipkart","Offers return policy","Has customer reviews"], ans: 1, exp: "Legitimate sellers process payments through Flipkart. Requests to pay outside the platform are a major red flag." },
      { q: "Why should you avoid paying through UPI directly to a seller?", opts: ["UPI is slow","It bypasses Flipkart buyer protection","It costs more","UPI only works on weekends"], ans: 1, exp: "Paying outside the platform means you lose all buyer protection and refund guarantees." },
      { q: "Where should payments always be made?", opts: ["WhatsApp","Google Pay link","Inside the Flipkart app","SMS link"], ans: 2, exp: "Always keep transactions inside the official app to ensure buyer protection." },
      { q: "A seller asks you to cancel the order and pay privately. What should you do?", opts: ["Pay immediately","Negotiate","Refuse and report the seller","Ignore the app"], ans: 2, exp: "This is a classic scam tactic. Refuse and report them to the platform." },
      { q: "Which feature helps identify trusted sellers?", opts: ["Seller ratings","Phone number","Instagram page","Telegram channel"], ans: 0, exp: "Verified reviews and ratings on the platform are the best indicator of a trusted seller." }
    ]
  },

  {
    id: 76, icon: "🛍️", title: "Meesho Seller Scam", desc: "Identify fake Meesho sellers and fraudulent payment requests.", diff: "high", tag: "E-Commerce Fraud",
    url: "meesho-verify.in", badge: "Account Blocked!", amount: "₹0", amountLabel: "Blocked Balance",
    fee: "Unblock Fee: ₹500", feeNote: "Pay to reactivate your account",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"tel"},{"n":"upi","p":"UPI ID","t":"text"},{"n":"otp","p":"OTP","t":"text"}],
    exposed: ["Name","Mobile Number","UPI ID","OTP"],
    reveal: "You shared your UPI ID and OTP. The scammers have initiated a \"collect request\" or drained your linked bank account. Your Meesho account is also compromised.",
    flags: ["Claims your account is blocked for \"suspicious activity\".","Asks for UPI PIN or OTP to \"receive\" money (you never need a PIN/OTP to receive money).","Uses unofficial links or WhatsApp for verification."],
    tips: ["You NEVER need to enter a UPI PIN or OTP to RECEIVE money.","Meesho support will not ask for sensitive details via WhatsApp.","Always navigate to the app directly instead of clicking links.","Report the number to Meesho and Cybercrime."],
    quiz: [
      { q: "A Meesho seller asks for advance payment on WhatsApp. You should:", opts: ["Pay immediately","Pay half","Refuse and use Meesho checkout","Ask a friend"], ans: 2, exp: "Never pay outside the official app. Always use the secure checkout." },
      { q: "What is the safest payment method?", opts: ["Cash sent by courier","UPI to personal account","Official Meesho payment system","Gift cards"], ans: 2, exp: "The official payment system provides buyer protection and secure transactions." },
      { q: "Why should you avoid clicking unknown payment links?", opts: ["They may steal money or data","They are too slow","They use more internet","They delete photos"], ans: 0, exp: "Phishing links are designed to steal your credentials and financial data." },
      { q: "What should you verify before purchasing?", opts: ["Seller ratings","Profile picture","WhatsApp DP","Instagram followers"], ans: 0, exp: "On-platform ratings and reviews are verified and reliable." },
      { q: "If an offer seems too good to be true, it is usually:", opts: ["Guaranteed","A scam warning","Official","Government approved"], ans: 1, exp: "Unrealistic discounts are a classic bait used in scams." }
    ]
  },

  {
    id: 77, icon: "🏷️", title: "Fake eBay Listing", desc: "Spot fake product listings on eBay.", diff: "med", tag: "Marketplace Scam",
    url: "ebay-deals.co.in", badge: "Buyer Protection Active", amount: "₹15,000", amountLabel: "Item Price",
    fee: "Shipping Fee: ₹500", feeNote: "Pay via direct bank transfer",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"address","p":"Shipping Address","t":"text"},{"n":"card","p":"Card Number","t":"text"},{"n":"cvv","p":"CVV","t":"text"}],
    exposed: ["Full Name","Address","Card Number","CVV"],
    reveal: "You just gave your credit card details to a fake seller. They will max out your card and ship you nothing. Because you paid outside eBay, you have zero buyer protection.",
    flags: ["Price is significantly lower than market value.","Seller asks to complete the transaction outside eBay.","Requests direct bank transfer or gift cards.","Poor grammar and stock photos in the listing."],
    tips: ["Keep all communications and payments inside the eBay platform.","Never wire money or use gift cards for purchases.","Check the seller's feedback score and history carefully.","If a deal looks too good to be true, it probably is."],
    quiz: [
      { q: "Which is a red flag?", opts: ["Very low price","Verified reviews","Buyer protection","Clear return policy"], ans: 0, exp: "Prices drastically below market value are often bait for scams." },
      { q: "Scammers often ask buyers to:", opts: ["Pay through eBay","Leave feedback","Pay outside eBay","Compare products"], ans: 2, exp: "Moving the transaction off-platform removes all buyer protections." },
      { q: "Why should you read seller reviews?", opts: ["To check seller reputation","To increase internet speed","To unlock discounts","To change currency"], ans: 0, exp: "Reviews help you verify if the seller is legitimate and trustworthy." },
      { q: "What protects buyers?", opts: ["eBay payment system","Telegram","Direct bank transfer","Cash in envelope"], ans: 0, exp: "eBay's payment system holds funds and offers money-back guarantees." },
      { q: "Suspicious listings usually contain:", opts: ["Detailed policies","Unrealistic discounts","Verified seller badge","Customer support"], ans: 1, exp: "Unrealistic discounts are used to lure victims into making hasty decisions." }
    ]
  },

  {
    id: 78, icon: "📦", title: "OLX Courier Scam", desc: "Learn how fake courier scams work on OLX.", diff: "high", tag: "Marketplace Scam",
    url: "olx-secure-pay.in", badge: "QR Code to Receive Payment", amount: "₹20,000", amountLabel: "Item Sold!",
    fee: "Courier Charge: ₹150", feeNote: "Scan QR to pay courier fee",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"tel"},{"n":"upi","p":"UPI ID","t":"text"},{"n":"pin","p":"UPI PIN","t":"password"}],
    exposed: ["Name","Mobile Number","UPI ID","UPI PIN"],
    reveal: "You entered your UPI PIN to \"receive\" money. Scammers use this trick to drain your bank account. You never need a PIN or OTP to receive funds.",
    flags: ["Buyer claims they sent money via \"OLX Secure Payment\" or \"Courier\".","Asks you to scan a QR code or enter a UPI PIN to receive the payment.","Creates a false sense of urgency.","Refuses to meet in person or use standard payment apps."],
    tips: ["You NEVER need to enter a PIN, OTP, or scan a QR code to RECEIVE money.","OLX does not have a built-in courier payment system that requires seller fees.","Meet buyers in person and exchange cash, or use standard UPI apps directly.","Report the user on OLX immediately."],
    quiz: [
      { q: "A fake courier asks you to pay before delivery. You should:", opts: ["Pay quickly","Verify with OLX first","Share OTP","Send Aadhaar"], ans: 1, exp: "Always verify the courier and the transaction through official channels." },
      { q: "What should never be shared?", opts: ["OTP","Name","City","Email"], ans: 0, exp: "OTPs are the final key to your accounts. Never share them with anyone." },
      { q: "Which payment request is suspicious?", opts: ["OLX secure payment","Courier UPI payment","Cash on delivery","Official checkout"], ans: 1, exp: "Fake courier services often ask for upfront UPI payments to release goods." },
      { q: "Scammers often pretend to be:", opts: ["Courier agents","Teachers","Doctors","Bank managers"], ans: 0, exp: "Pretending to be a courier or delivery agent is a common tactic to extract fees." },
      { q: "Best practice before paying?", opts: ["Verify buyer and courier","Pay immediately","Share card PIN","Ignore messages"], ans: 0, exp: "Always independently verify the identity of the buyer and the courier service." }
    ]
  },

  {
    id: 79, icon: "🏍️", title: "Bike Sale Scam", desc: "Recognize fake bike sale advertisements.", diff: "med", tag: "Marketplace Scam",
    url: "used-bikes-india.in", badge: "Urgent Sale!", amount: "₹40,000", amountLabel: "Bike Price",
    fee: "Token Advance: ₹2,000", feeNote: "Pay to book a test ride",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"tel"},{"n":"address","p":"Home Address","t":"text"},{"n":"advance","p":"Token Advance (UPI)","t":"text"}],
    exposed: ["Name","Mobile Number","Address","Payment Details"],
    reveal: "You paid a \"token advance\" for a bike that doesn't exist. The seller has vanished, and you have no proof of purchase or legal recourse.",
    flags: ["Price is significantly below market value.","Seller demands an advance payment just to \"hold\" the bike or allow a test ride.","Refuses to meet in a public place.","Uses stolen photos from the internet."],
    tips: ["Never pay any advance amount before physically inspecting the vehicle.","Always verify the RC (Registration Certificate) and match it with the seller's ID.","Meet in a safe, public location and bring a trusted mechanic if possible.","Complete the transfer papers at the RTO before finalizing the deal."],
    quiz: [
      { q: "A bike is listed at half its market value. This is:", opts: ["Normal","A scam warning","Government sale","Dealer offer"], ans: 1, exp: "Prices drastically below market value are a major red flag for scams." },
      { q: "Before buying a used bike, always:", opts: ["Pay advance","Inspect the bike","Trust photos only","Skip documents"], ans: 1, exp: "Physical inspection is crucial to verify the condition and existence of the bike." },
      { q: "Which document should be verified?", opts: ["RC Book","Restaurant bill","Passport","Electricity bill"], ans: 0, exp: "The RC Book proves legal ownership of the vehicle." },
      { q: "Scammers often ask for:", opts: ["Advance payment","Inspection","Negotiation","Test ride"], ans: 0, exp: "Demanding an advance payment before meeting is a classic scam tactic." },
      { q: "Safest place to meet?", opts: ["Public location","Unknown warehouse","Dark alley","Remote village"], ans: 0, exp: "Public, well-lit locations ensure your physical safety during the transaction." }
    ]
  },

  {
    id: 80, icon: "🚗", title: "Used Car Scam", desc: "Protect yourself from fraudulent used car deals.", diff: "med", tag: "Marketplace Scam",
    url: "direct-car-sale.in", badge: "Direct Owner!", amount: "₹3,00,000", amountLabel: "Car Price",
    fee: "RTO Transfer Fee: ₹5,000", feeNote: "Pay to process paperwork",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"bank","p":"Bank Account Details","t":"text"},{"n":"fee","p":"RTO Fee Payment","t":"text"}],
    exposed: ["Name","Aadhaar Number","Bank Details","Payment Details"],
    reveal: "You shared your Aadhaar and bank details to \"process the RTO transfer\". The scammer now has enough information to commit identity theft and drain your accounts.",
    flags: ["Seller claims to be a \"direct owner\" but is actually a middleman.","Asks for money for \"RTO fees\" or \"paperwork\" before handing over the car.","Refuses to let you take the car to a trusted mechanic.","Documents look tampered or forged."],
    tips: ["Verify the RC book and check for any pending challans or loans on the vehicle.","Never share your Aadhaar or bank details with the seller.","Use a trusted mechanic to inspect the car thoroughly.","Only pay after all transfer papers are signed and verified at the RTO."],
    quiz: [
      { q: "What should you check first?", opts: ["Vehicle documents","Seller's Instagram","WhatsApp status","Music system"], ans: 0, exp: "Verifying the RC and legal documents is the most critical first step." },
      { q: "Why inspect the vehicle?", opts: ["To verify condition","To clean it","To take photos","To increase price"], ans: 0, exp: "A thorough inspection reveals hidden damages or mechanical issues." },
      { q: "Never pay:", opts: ["After verification","Before seeing the vehicle","Using official method","After paperwork"], ans: 1, exp: "Never pay any amount before physically seeing and inspecting the vehicle." },
      { q: "Which is suspicious?", opts: ["Pressure to pay immediately","Test drive","Service records","Transfer papers"], ans: 0, exp: "Scammers create false urgency to prevent you from thinking clearly." },
      { q: "Best protection?", opts: ["Verify ownership documents","Trust verbal promises","Skip inspection","Ignore registration"], ans: 0, exp: "Ensuring the seller is the legal owner prevents you from buying stolen or financed vehicles." }
    ]
  },

  {
    id: 81, icon: "🏠", title: "Property Rental Scam", desc: "Avoid rental listing fraud.", diff: "high", tag: "Real Estate Fraud",
    url: "flat-for-rent-delhi.in", badge: "Prime Location!", amount: "₹15,000", amountLabel: "Monthly Rent",
    fee: "Token Advance: ₹20,000", feeNote: "Pay to lock the deal before others do",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"tel"},{"n":"company","p":"Company Name","t":"text"},{"n":"advance","p":"Token Advance (UPI)","t":"text"}],
    exposed: ["Name","Mobile Number","Company Details","Payment Details"],
    reveal: "You paid a \"token advance\" for a flat that doesn't exist or isn't available for rent. The \"landlord\" has blocked you, and you lost your money.",
    flags: ["Landlord asks for a deposit or token advance before you even visit the property.","Claims to be out of station and asks you to pay to \"hold\" the flat.","Rent is significantly lower than the area average.","Refuses to show the original property documents."],
    tips: ["NEVER pay any advance before physically visiting the property and verifying ownership.","Ask to see the original property documents (Sale Deed, Tax Receipts).","Verify the landlord's identity with an Aadhaar card or PAN card.","Draft a proper rental agreement on stamp paper before paying the deposit."],
    quiz: [
      { q: "A landlord asks for a deposit before viewing. You should:", opts: ["Pay immediately","Refuse until verification","Pay half","Share bank details"], ans: 1, exp: "Never pay before seeing the property and verifying the landlord." },
      { q: "Before renting, always:", opts: ["Visit the property","Trust photos","Pay deposit","Share OTP"], ans: 0, exp: "Physical inspection is mandatory to ensure the property exists and is in good condition." },
      { q: "What should be verified?", opts: ["Ownership documents","Instagram followers","Phone wallpaper","Favorite color"], ans: 0, exp: "Verifying ownership documents ensures you are dealing with the actual owner." },
      { q: "Scammers often use:", opts: ["Stolen property photos","Real estate agents","Legal agreements","Property tours"], ans: 0, exp: "They copy photos from legitimate listings to create fake ads." },
      { q: "Best payment practice?", opts: ["After agreement verification","Immediately","Cash in envelope","Gift cards"], ans: 0, exp: "Only pay after the rental agreement is verified and signed." }
    ]
  },

  {
    id: 82, icon: "🏡", title: "Fake Airbnb Listing", desc: "Recognize fake vacation rental listings.", diff: "med", tag: "Travel Scam",
    url: "airbnb-vacation-deals.in", badge: "Superhost!", amount: "₹5,000", amountLabel: "Per Night",
    fee: "Cleaning Fee: ₹2,000", feeNote: "Pay via direct bank transfer to avoid Airbnb fees",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"email","p":"Email Address","t":"email"},{"n":"card","p":"Card Number","t":"text"},{"n":"cvv","p":"CVV","t":"text"}],
    exposed: ["Name","Email","Card Number","CVV"],
    reveal: "You paid outside Airbnb to \"save on fees\". The listing is fake, the property doesn't exist, and because you bypassed Airbnb's payment system, you have no refund protection.",
    flags: ["Host asks you to pay outside the Airbnb platform.","Offers a huge discount if you pay via direct bank transfer or wire.","Profile has no reviews or very recent reviews.","Communication moves quickly to WhatsApp or email."],
    tips: ["ALWAYS keep payments and communication inside the Airbnb platform.","Never wire money or use gift cards for bookings.","Read reviews carefully and check the host's verification status.","If a deal seems too good to be true, it's likely a scam."],
    quiz: [
      { q: "A host asks you to pay outside Airbnb. You should:", opts: ["Pay immediately","Refuse and use Airbnb payment","Pay by bank transfer","Use gift cards"], ans: 1, exp: "Paying outside the platform voids all Airbnb protections and guarantees." },
      { q: "Why should payments stay inside Airbnb?", opts: ["Buyer protection","Faster internet","Lower taxes","Better photos"], ans: 0, exp: "Airbnb's secure payment system ensures you get a refund if the listing is fake." },
      { q: "Which is a scam warning?", opts: ["Huge discount with urgency","Verified reviews","Host identity verified","Secure payment"], ans: 0, exp: "Scammers use massive discounts and urgency to trap victims." },
      { q: "What should you check before booking?", opts: ["Reviews and host profile","Host's WhatsApp DP","Facebook likes","Twitter followers"], ans: 0, exp: "Reviews and verified profiles on the platform are the best indicators of legitimacy." },
      { q: "If something feels suspicious, you should:", opts: ["Report the listing","Ignore it","Pay faster","Share OTP"], ans: 0, exp: "Reporting suspicious listings helps protect you and other users." }
    ]
  },

  {
    id: 84, icon: "📈", title: "IPO Allotment Scam", desc: "Fake guaranteed IPO allotment messages.", diff: "high", tag: "Investment Fraud",
    url: "ipo-guaranteed-allotment.in", badge: "IPO Allotted!", amount: "₹1,00,000", amountLabel: "Expected Listing Price",
    fee: "Allotment Fee: ₹5,000", feeNote: "Pay to confirm your shares",
    fields: [{"n":"dematId","p":"Depository Participant (DP) ID","t":"text"},{"n":"pan","p":"PAN Card Number","t":"text"},{"n":"bankAcc","p":"Bank Account Number","t":"text"},{"n":"upiPin","p":"UPI PIN (to pay allotment fee)","t":"password"}],
    exposed: ["DP ID","PAN Number","Bank Account","UPI PIN"],
    reveal: "You just shared your UPI PIN to \"pay the fee\". The scammer has initiated a money request from your bank account. There is no IPO allotment; it is a complete fabrication.",
    flags: ["Guaranteed IPO allotment via WhatsApp or SMS.","Asks for UPI PIN or OTP to \"receive\" the shares.","Unregistered broker or fake website.","Urgency to pay immediately before the window closes."],
    tips: ["IPO allotments are done purely through a computerized lottery system by SEBI-registered exchanges.","NEVER share your UPI PIN, OTP, or CVV to receive shares or money.","Verify the broker on the SEBI website.","Apply for IPOs only through your official banking or broker app."],
    quiz: [
      { q: "How are IPO shares actually allotted?", opts: ["First come first serve","Guaranteed to premium users","Computerized lottery system","By paying a fee"], ans: 2, exp: "SEBI mandates a lottery system for oversubscribed IPOs. No one can guarantee allotment." },
      { q: "What is the biggest red flag in an IPO scam?", opts: ["Low issue price","Asking for UPI PIN to receive shares","Long listing history","High demand"], ans: 1, exp: "You never need a PIN or OTP to receive shares or money. This is always a scam." },
      { q: "Where should you apply for an IPO?", opts: ["WhatsApp links","Telegram groups","Official broker/bank app","Instagram ads"], ans: 2, exp: "Always use your official, SEBI-registered broker or bank application." },
      { q: "Can a broker guarantee IPO allotment?", opts: ["Yes, if you pay extra","Yes, for large amounts","No, never","Only for NRI clients"], ans: 2, exp: "No broker or agent can guarantee an IPO allotment. It is strictly regulated." },
      { q: "What should you do if you receive a fake IPO message?", opts: ["Share your PAN","Click the link to check","Report to SEBI and ignore","Pay the fee quickly"], ans: 2, exp: "Report the number to SEBI and the cyber crime portal. Do not engage." }
    ]
  },

  {
    id: 85, icon: "💱", title: "Forex Trading Scam", desc: "Fake Forex platforms promising 100% returns.", diff: "high", tag: "Investment Fraud",
    url: "forex-profits-india.in", badge: "Profit Unlocked!", amount: "₹2,50,000", amountLabel: "Trading Profit",
    fee: "Withdrawal Tax: ₹25,000", feeNote: "Pay tax to withdraw your profits",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"pan","p":"PAN Card Number","t":"text"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"bankAcc","p":"Bank Account Number","t":"text"},{"n":"ifsc","p":"IFSC Code","t":"text"}],
    exposed: ["Name","PAN","Aadhaar","Bank Account","IFSC"],
    reveal: "You handed over your complete KYC and bank details to \"withdraw profits\". The platform is fake, the profits are just numbers on a screen, and they now have enough data to commit identity theft or drain your account.",
    flags: ["Promises of guaranteed, risk-free returns in Forex.","Platform is not registered with SEBI.","Asks for upfront \"tax\" or \"fee\" to withdraw your own money.","Uses WhatsApp/Telegram \"gurus\" to guide you."],
    tips: ["Retail Forex trading on unauthorized electronic trading platforms is banned by RBI.","Check if the broker is SEBI-registered before investing.","Never pay a fee to withdraw your own money.","Forex trading involves high risk; there are no guaranteed profits."],
    quiz: [
      { q: "Is retail Forex trading legal on all platforms in India?", opts: ["Yes, everywhere","No, only on recognized exchanges","Only on crypto apps","Only with a PAN card"], ans: 1, exp: "RBI has authorized only specific exchanges (NSE, BSE, MSE) for Forex trading." },
      { q: "What is a major red flag in Forex scams?", opts: ["High volatility","Guaranteed fixed returns","Low margin requirements","24/7 market"], ans: 1, exp: "No legitimate trading platform can guarantee fixed returns due to market volatility." },
      { q: "Why do scammers ask for \"withdrawal tax\"?", opts: ["It is a legal requirement","To steal more money from you","To process the transaction","To verify your bank"], ans: 1, exp: "Legitimate brokers deduct taxes automatically. Asking for upfront fees is a scam tactic." },
      { q: "Where should you verify a Forex broker?", opts: ["Google Reviews","SEBI website","Telegram channel","YouTube video"], ans: 1, exp: "Always verify the broker's registration on the official SEBI website." },
      { q: "What should you do if a \"guru\" messages you on WhatsApp?", opts: ["Follow their tips","Pay for premium signals","Block and report them","Share your bank details"], ans: 2, exp: "Unsolicited trading tips on social media are almost always scams." }
    ]
  },

  {
    id: 86, icon: "📊", title: "Binary Options Scam", desc: "Fake trading apps showing manipulated profits.", diff: "high", tag: "Investment Fraud",
    url: "binary-trade-win.in", badge: "Trade Won!", amount: "₹50,000", amountLabel: "Binary Option Profit",
    fee: "Account Upgrade: ₹10,000", feeNote: "Upgrade to VIP to withdraw",
    fields: [{"n":"tradingId","p":"Trading Account ID","t":"text"},{"n":"bankAcc","p":"Linked Bank Account","t":"text"},{"n":"upiId","p":"UPI ID","t":"text"},{"n":"upiPin","p":"UPI PIN (for VIP upgrade)","t":"password"}],
    exposed: ["Trading ID","Bank Account","UPI ID","UPI PIN"],
    reveal: "You entered your UPI PIN to \"upgrade your account\". The scammers have drained your bank account. Binary options are essentially gambling, and the app's algorithms were rigged to make you lose.",
    flags: ["Binary options trading is banned by RBI in India.","App shows unrealistic winning streaks.","Asks for money to \"unlock\" or \"upgrade\" your account for withdrawal.","No physical office or SEBI registration."],
    tips: ["RBI has explicitly warned against Binary Options platforms; they are illegal.","If an app asks for money to withdraw your own funds, it is a scam.","Never share your UPI PIN for any \"account upgrade\".","Stick to SEBI-registered stock brokers."],
    quiz: [
      { q: "What is the legal status of Binary Options in India?", opts: ["Fully legal","Banned by RBI","Legal for NRIs","Legal up to ₹1 Lakh"], ans: 1, exp: "RBI has banned Binary Options as they are essentially gambling and highly risky." },
      { q: "Why do fake apps show you winning?", opts: ["To build trust and deposit more","Because you are lucky","It is a legal requirement","To test the algorithm"], ans: 0, exp: "Scammers let you win small amounts initially to build false confidence so you invest more." },
      { q: "What is the \"VIP upgrade\" fee?", opts: ["A real brokerage fee","A scam to steal more money","A government tax","A security deposit"], ans: 1, exp: "There is no VIP upgrade. It is just another excuse to steal your money." },
      { q: "How are Binary Options different from stock trading?", opts: ["They are safer","They are based on predicting short-term price movements (gambling)","They are regulated by SEBI","They guarantee returns"], ans: 1, exp: "Binary options are essentially betting on whether a price will go up or down in minutes." },
      { q: "What should you do if you cannot withdraw?", opts: ["Pay the \"tax\" fee","Contact customer support","Report to Cyber Crime immediately","Create a new account"], ans: 2, exp: "If you cannot withdraw, you are being scammed. Do not pay more; report it immediately." }
    ]
  },

  {
    id: 87, icon: "💸", title: "Ponzi Investment Scheme", desc: "\"Double your money in 21 days\" scams.", diff: "high", tag: "Investment Fraud",
    url: "double-wealth-fast.in", badge: "Returns Credited!", amount: "₹20,000", amountLabel: "Initial Returns",
    fee: "Processing Fee: ₹2,000", feeNote: "Pay to release the doubled amount",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"tel"},{"n":"bankAcc","p":"Bank Account Number","t":"text"},{"n":"upiPin","p":"UPI PIN (to verify account)","t":"password"}],
    exposed: ["Name","Mobile","Bank Account","UPI PIN"],
    reveal: "You shared your UPI PIN to \"verify\" your account for the doubled amount. The money was stolen. Ponzi schemes pay old investors with new investors' money and eventually collapse, taking everyone's money.",
    flags: ["Promises to \"double your money\" in a short time.","No clear business model or source of income.","Pays initial small returns to build trust.","Operates mostly through word-of-mouth or WhatsApp groups."],
    tips: ["No legitimate investment can double your money in 21 days.","Check if the scheme is registered with SEBI or RBI.","If it sounds too good to be true, it is a scam.","Beware of schemes that rely on recruiting others."],
    quiz: [
      { q: "How does a Ponzi scheme generate returns?", opts: ["Real business profits","Using money from new investors","Stock market trading","Government subsidies"], ans: 1, exp: "Ponzi schemes have no real business; they pay old investors using funds from new victims." },
      { q: "What is the biggest red flag?", opts: ["Low returns","\"Double your money\" guarantees","Long lock-in period","SEBI registration"], ans: 1, exp: "Guaranteed, abnormally high returns in a short time are the hallmark of a Ponzi scheme." },
      { q: "Why do they pay initial returns?", opts: ["To be nice","To build trust and lure larger investments","Because they made a profit","Legal requirement"], ans: 1, exp: "Paying small initial returns is a tactic to build false trust so victims invest more or refer others." },
      { q: "What happens when a Ponzi scheme collapses?", opts: ["Investors get their money back","The government bails it out","Investors lose their entire capital","It merges with a bank"], ans: 2, exp: "When new investments dry up, the scheme collapses, and the vast majority of investors lose everything." },
      { q: "How to verify an investment scheme?", opts: ["Check WhatsApp reviews","Verify with SEBI/RBI","Ask the agent","Check their office photos"], ans: 1, exp: "Always verify the entity's registration on the official SEBI or RBI websites." }
    ]
  },

  {
    id: 88, icon: "🕸️", title: "MLM Investment Scam", desc: "Fake network marketing with high joining fees.", diff: "med", tag: "Investment Fraud",
    url: "network-wealth-club.in", badge: "Welcome to the Team!", amount: "₹5,00,000", amountLabel: "Potential Monthly Income",
    fee: "Joining Fee: ₹15,000", feeNote: "Activate your ID to start earning",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"tel"},{"n":"upiId","p":"UPI ID (for receiving income)","t":"text"},{"n":"referral","p":"Referral Code (Who invited you?)","t":"text"}],
    exposed: ["Name","Mobile","UPI ID","Social Contacts"],
    reveal: "You paid a high joining fee for a \"business opportunity\" that doesn't sell any real product. The only way to make money is by recruiting others, which is an illegal pyramid scheme.",
    flags: ["High joining fee for no tangible product.","Income is primarily based on recruiting new members.","Promises of passive income and financial freedom.","Pressure to invite friends and family."],
    tips: ["Legal Multi-Level Marketing (MLM) focuses on selling actual products, not recruiting.","Check if the company complies with the Direct Selling Guidelines.","If the main focus is recruiting, it is likely an illegal pyramid scheme.","Never pay a large fee just to \"join\" a platform."],
    quiz: [
      { q: "What is the primary focus of a legal MLM?", opts: ["Recruiting members","Selling actual products/services","Collecting joining fees","Trading crypto"], ans: 1, exp: "Legal MLMs generate revenue from the sale of genuine products, not from recruiting." },
      { q: "What makes a pyramid scheme illegal?", opts: ["High returns","Earning primarily from recruiting","Lack of a website","Operating online"], ans: 1, exp: "Pyramid schemes are illegal because they rely on recruiting, which mathematically must collapse." },
      { q: "What is a red flag in an MLM opportunity?", opts: ["Detailed product catalog","High joining fee with no product","Clear compensation plan","Registered company"], ans: 1, exp: "Paying a large fee just to join, without a real product to sell, is a major red flag." },
      { q: "Are pyramid schemes sustainable?", opts: ["Yes, forever","No, they mathematically collapse","Only if registered","Only in big cities"], ans: 1, exp: "Pyramid schemes require an infinite number of new recruits, which is impossible; they always collapse." },
      { q: "What should you check before joining?", opts: ["Instagram followers","Direct Selling Guidelines compliance","WhatsApp group size","Agent's car"], ans: 1, exp: "Verify if the company complies with the government's Direct Selling Guidelines." }
    ]
  },

  {
    id: 89, icon: "📊", title: "Fake Mutual Fund Scam", desc: "Fake SEBI-registered mutual fund apps.", diff: "high", tag: "Investment Fraud",
    url: "sebi-verified-mf.in", badge: "KYC Verified!", amount: "₹10,000", amountLabel: "Minimum Investment",
    fee: "KYC Fee: ₹500", feeNote: "Pay to activate your folio",
    fields: [{"n":"pan","p":"PAN Card Number","t":"text"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"bankAcc","p":"Bank Account Number","t":"text"},{"n":"nominee","p":"Nominee Name & Details","t":"text"}],
    exposed: ["PAN","Aadhaar","Bank Account","Nominee Details"],
    reveal: "You handed over your complete KYC details to a fake app. They can now use your identity to take out loans, or the \"app\" will simply disappear with your investment. It is not a real mutual fund.",
    flags: ["App claims to be \"SEBI-registered\" but isn't on the AMFI list.","Asks for a \"KYC fee\" to start investing.","Offers guaranteed returns on mutual funds.","Poorly designed app with spelling errors."],
    tips: ["Verify the Asset Management Company (AMC) on the official AMFI or SEBI website.","Mutual fund KYC is free; never pay a fee for it.","Mutual funds are subject to market risks; no returns are guaranteed.","Invest only through the official AMC website or verified platforms (like Zerodha, Groww, etc.)."],
    quiz: [
      { q: "How to verify a mutual fund scheme?", opts: ["Ask the agent","Check AMFI/SEBI website","Read Google reviews","Check their Instagram"], ans: 1, exp: "Always verify the AMC and scheme details on the official AMFI or SEBI websites." },
      { q: "What do fake mutual fund apps ask for?", opts: ["Only your name","PAN, Aadhaar, and bank details for fake KYC","Just your mobile number","Your friends' details"], ans: 1, exp: "They collect complete KYC details to steal your identity or money." },
      { q: "Are mutual fund returns guaranteed?", opts: ["Yes, always","No, they are market-linked","Only for ELSS","Only for debt funds"], ans: 1, exp: "Mutual funds are subject to market risks. Any scheme promising guaranteed returns is fake." },
      { q: "Is KYC for mutual funds free?", opts: ["No, it costs ₹500","Yes, it is completely free","Only for first-time investors","It depends on the AMC"], ans: 1, exp: "KYC is a regulatory requirement and is always free. Never pay a fee for it." },
      { q: "Where is the safest place to invest?", opts: ["WhatsApp links","Official AMC website or verified broker","Telegram groups","YouTube ads"], ans: 1, exp: "Always use the official website of the AMC or a SEBI-registered broker/platform." }
    ]
  },

  {
    id: 90, icon: "🪙", title: "Fake Gold Investment", desc: "Buy digital gold at 50% discount scams.", diff: "med", tag: "Investment Fraud",
    url: "cheap-digital-gold.in", badge: "Gold Reserved!", amount: "10 Grams", amountLabel: "Gold Quantity",
    fee: "Locker Charge: ₹1,000", feeNote: "Pay to secure your gold in vault",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"tel"},{"n":"bankAcc","p":"Bank Account Number","t":"text"},{"n":"upiPin","p":"UPI PIN (for locker fee)","t":"password"}],
    exposed: ["Name","Mobile","Bank Account","UPI PIN"],
    reveal: "You paid a \"locker fee\" via UPI PIN for gold that doesn't exist. The app offered gold at a massive discount to lure you in, but they have no actual gold to sell or deliver.",
    flags: ["Offers gold at a significant discount to market rates.","Asks for upfront fees for \"vault\" or \"locker\" charges.","No clear buyback policy or physical delivery option.","Not a recognized bank or jeweler."],
    tips: ["Gold is a globally traded commodity; it cannot be sold at a 50% discount.","Buy digital gold only through recognized platforms (PhonePe, Paytm, SafeGold) or banks.","Check for a clear buyback policy and physical delivery options.","Sovereign Gold Bonds (SGB) issued by RBI are the safest way to invest in gold."],
    quiz: [
      { q: "Can gold be sold at a 50% discount?", opts: ["Yes, during festivals","No, it is a globally traded commodity","Only for digital gold","Yes, if bought in bulk"], ans: 1, exp: "Gold prices are determined globally. Massive discounts are always a scam." },
      { q: "What is the safest way to invest in gold in India?", opts: ["Fake digital gold apps","Sovereign Gold Bonds (SGB) by RBI","WhatsApp gold groups","Unregistered jewelers"], ans: 1, exp: "SGBs are issued by the RBI and are the safest, most secure way to invest in gold." },
      { q: "Why do scammers ask for \"locker fees\"?", opts: ["To store your gold safely","To steal more money from you","It is a legal requirement","To insure the gold"], ans: 1, exp: "There is no gold to store. The fee is just an excuse to extract more money." },
      { q: "Where should you buy digital gold?", opts: ["Random apps","Recognized banks or platforms (SafeGold, MMTC-PAMP)","Telegram channels","Instagram ads"], ans: 1, exp: "Only use recognized, secure platforms backed by major banks or jewelers." },
      { q: "What should a legitimate gold platform have?", opts: ["Guaranteed returns","Clear buyback policy and delivery options","Referral bonuses","Crypto payments"], ans: 1, exp: "Legitimate platforms will clearly state how you can sell the gold back or take physical delivery." }
    ]
  },

  {
    id: 91, icon: "🏘️", title: "Fake Real Estate Investment", desc: "Invest in premium plots with 20% guaranteed returns.", diff: "high", tag: "Investment Fraud",
    url: "premium-plots-india.in", badge: "Plot Booked!", amount: "₹5,00,000", amountLabel: "Token Amount",
    fee: "Registration Fee: ₹25,000", feeNote: "Pay to register the plot in your name",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"pan","p":"PAN Card Number","t":"text"},{"n":"bankAcc","p":"Bank Account Number","t":"text"},{"n":"upiPin","p":"UPI PIN (for registration)","t":"password"}],
    exposed: ["Name","PAN","Bank Account","UPI PIN"],
    reveal: "You paid a \"registration fee\" for a plot of land that doesn't exist or isn't owned by the seller. Real estate scams often use fake documents and \"guaranteed appreciation\" to steal your token amount.",
    flags: ["Promises of guaranteed high appreciation (e.g., 20% in 1 year).","Plot is not registered under RERA.","Seller pressures you to pay a \"token\" immediately.","Cannot provide clear title deeds or encumbrance certificate."],
    tips: ["Always verify the project's RERA registration number on the state RERA website.","Never pay a token amount without verifying the title deeds and legal status.","Hire an independent property lawyer to verify all documents.","Real estate appreciation is never guaranteed; it depends on market conditions."],
    quiz: [
      { q: "What is RERA?", opts: ["Real Estate Regulatory Authority","Real Estate Rent Agreement","Registered Estate Agent","Rural Estate Development"], ans: 0, exp: "RERA is the Real Estate Regulatory Authority that protects homebuyers and regulates the sector." },
      { q: "What is a major red flag in real estate?", opts: ["RERA registration","Guaranteed 20% appreciation","Clear title deeds","Bank loan approval"], ans: 1, exp: "No one can guarantee real estate appreciation. It is a market-driven asset." },
      { q: "What should you verify before paying a token?", opts: ["Agent's Instagram","Title deeds and RERA status","Office photos","WhatsApp reviews"], ans: 1, exp: "Always verify the legal ownership (title deeds) and RERA registration before paying anything." },
      { q: "Why do scammers pressure you to pay a token?", opts: ["To secure the best price","To prevent you from doing legal verification","Because it is company policy","To give you a discount"], ans: 1, exp: "Urgency is a tactic to prevent you from thinking clearly or verifying the documents." },
      { q: "Who should verify your property documents?", opts: ["The seller's agent","An independent property lawyer","Your friend","The token provider"], ans: 1, exp: "Always hire an independent, trusted property lawyer to verify all legal documents." }
    ]
  },

  {
    id: 83, icon: "📱", title: "Stock Tip WhatsApp Group", desc: "Fake \"premium\" stock tips and pump-and-dump groups.", diff: "med", tag: "Investment Fraud",
    url: "premium-stock-tips.in", badge: "Guaranteed Multi-Baggers!", amount: "₹10,000", amountLabel: "Membership Fee",
    fee: "Join Premium Group", feeNote: "Pay via UPI to get daily 100% returns",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"mobile","p":"Mobile Number","t":"tel"},{"n":"demat","p":"Demat Account Broker","t":"text"},{"n":"upiPin","p":"UPI PIN (to pay fee)","t":"password"}],
    exposed: ["Name","Mobile","Broker Details","UPI PIN"],
    reveal: "You paid a fee to join a fake stock tip group and gave away your UPI PIN. These groups operate pump-and-dump schemes, where the admins buy a cheap stock, tell members to buy it (pumping the price), and then sell their own shares at a profit, leaving members with huge losses.",
    flags: ["Promises of guaranteed daily profits or \"sure shot\" multi-baggers.","Unregistered \"advisors\" operating via WhatsApp or Telegram.","High upfront membership fees paid via personal UPI.","Pressure to buy specific penny stocks immediately."],
    tips: ["Only take investment advice from SEBI-registered Investment Advisors (RIAs).","Never share your UPI PIN or pay fees to unverified WhatsApp groups.","If an investment promises guaranteed stock market returns, it is a scam.","Do your own research instead of following blind tips."],
    quiz: [
      { q: "Who is legally authorized to give stock tips in India?", opts: ["Anyone on WhatsApp","SEBI-registered Investment Advisors","Your broker only","News channels"], ans: 1, exp: "Only SEBI-registered Investment Advisors (RIAs) or Research Analysts are legally allowed to provide stock tips and recommendations." },
      { q: "What is a \"pump-and-dump\" scheme?", opts: ["A legal trading strategy","Pumping up a stock price with fake tips to sell at a profit","A mutual fund scheme","A way to save taxes"], ans: 1, exp: "Scammers buy cheap stocks, hype them up (pump) so members buy, and then sell (dump) at the peak, crashing the price." },
      { q: "Why do fake tip groups charge a membership fee?", opts: ["Because their tips are valuable","To guarantee profits","To steal your money upfront","To pay taxes"], ans: 2, exp: "The membership fee is just an upfront scam. The tips themselves are usually worthless or part of a manipulation scheme." },
      { q: "What should you do if added to a stock tip WhatsApp group?", opts: ["Follow their advice","Pay for premium","Report and exit the group","Ask for free tips"], ans: 2, exp: "Unsolicited stock tip groups are usually scams. Report the group and exit immediately." },
      { q: "Can stock market returns be guaranteed?", opts: ["Yes, by experts","No, never","Yes, for large sums","Only in blue-chip stocks"], ans: 1, exp: "The stock market is inherently volatile and subject to risk. Returns can never be guaranteed." }
    ]
  },

  {
    id: 92, icon: "⛏️", title: "Cloud Crypto Mining Scam", desc: "Rent a \"mining rig\" remotely for guaranteed 3% daily returns.", diff: "high", tag: "Crypto Fraud",
    url: "cloudhash-mining.io", badge: "Rig Activated!", amount: "$150.00", amountLabel: "Est. Daily Payout",
    fee: "Minimum Deposit: ₹5,000 (USDT)", feeNote: "Required to activate your rig",
    fields: [{"n":"walletAddress","p":"Wallet Address","t":"text"},{"n":"walletSeed","p":"Wallet Recovery Phrase","t":"password"},{"n":"depositAmount","p":"Deposit Amount (USDT)","t":"text"}],
    exposed: ["Full Name","Email","Phone Number","Wallet Address","Wallet Recovery Phrase","Deposit Amount"],
    reveal: "There is no mining rig. By entering your wallet's recovery phrase, you gave the scammer complete, irreversible control over your crypto wallet — they can now drain every asset in it. The \"3% daily return\" was never real; it exists only to get you to deposit and then hand over your seed phrase.",
    flags: ["Guaranteed fixed daily returns — real mining/trading returns are never guaranteed","Asks for your wallet seed phrase to \"link\" your account — no legitimate platform ever needs this","No verifiable physical mining infrastructure or audited operations","Artificial urgency (\"214 people joined in the last hour\")"],
    tips: ["Never share your wallet's seed phrase with any platform, app, or person — it gives full control of your funds.","Treat any \"guaranteed daily return\" claim as an automatic scam signal.","Research whether a mining platform has verifiable, audited operations before depositing anything."],
    quiz: [
      { q: "A mining platform asks for your wallet's recovery phrase to \"link\" your account. What should you do?", opts: ["Refuse — no legitimate platform needs your seed phrase","Give a partial version of it","Send it only after depositing funds","Provide it — it's required to activate mining"], ans: 0, exp: "A seed phrase gives complete control of a wallet. No legitimate service will ever ask for it." },
      { q: "What return pattern is a hallmark of crypto mining scams?", opts: ["Returns paid only in company stock","Variable, market-linked returns","Guaranteed fixed daily percentage returns","No returns until year-end"], ans: 2, exp: "Markets and mining yields fluctuate; a fixed guaranteed daily return is a classic scam signal." },
      { q: "Once you share your seed phrase, what can the scammer do?", opts: ["Only mine new coins for you","Only see your balance","Nothing without your password too","Fully drain your wallet with no way to reverse it"], ans: 3, exp: "The seed phrase is the master key to a crypto wallet — anyone with it can transfer out all funds instantly and irreversibly." }
    ]
  },

  {
    id: 93, icon: "🖼️", title: "NFT Whitelist Mint Scam", desc: "Connect your wallet to mint the \"Genesis Ape\" collection before public sale.", diff: "high", tag: "Crypto Fraud",
    url: "metamint-genesisape.xyz", badge: "Whitelist Open", amount: "Guaranteed 10x", amountLabel: "Promised Flip Value",
    fee: "Wallet Connect Required", feeNote: "87/100 whitelist spots claimed",
    fields: [{"n":"walletAddress","p":"Wallet Address","t":"text"},{"n":"walletSeed","p":"Seed Phrase (to verify ownership)","t":"password"}],
    exposed: ["Name","Email","Discord Username","Wallet Address","Wallet Seed Phrase"],
    reveal: "A real wallet \"connect\" only ever asks for a signature approval — it never needs your seed phrase. By entering it here, you gave the scammer full control of your wallet. There was no NFT collection worth minting; the entire whitelist countdown existed purely to rush you past your own caution.",
    flags: ["Countdown pressure on whitelist spots (\"87/100 claimed\")","Requests seed phrase to \"verify wallet ownership\" — never legitimate","Anonymous, undoxxed team with no track record","Promises of guaranteed price appreciation (\"10x flip\")"],
    tips: ["A wallet \"connect\" only ever requires a signature approval — never your seed phrase.","Double-check mint site URLs character-by-character against the official project's verified links.","Be skeptical of any NFT project promising guaranteed returns; value is always speculative."],
    quiz: [
      { q: "An NFT minting site asks for your seed phrase to \"verify ownership.\" This is:", opts: ["Only risky if you've already minted once","A major red flag — never enter your seed phrase anywhere","Standard practice for all NFT mints","Safe as long as the site has a lock icon"], ans: 1, exp: "Legitimate wallet connections use signature approvals, never your seed phrase." },
      { q: "Which is a genuine sign of urgency-manipulation in an NFT scam?", opts: ["A public, doxxed development team","An audited smart contract","A clear roadmap document","A live countdown showing whitelist spots running out"], ans: 3, exp: "Artificial scarcity and countdowns are designed to short-circuit careful evaluation." },
      { q: "What should you check before minting from a link you received?", opts: ["That the URL exactly matches the official project domain","Nothing — mints are always safe","That other people are minting too","That it looks professionally designed"], ans: 0, exp: "Fake mint sites use lookalike domains; always verify the exact URL against official channels." }
    ]
  },

  {
    id: 94, icon: "🤖", title: "AI Trading Bot Scam", desc: "An \"AI bot\" promises a 92% win rate if you fund your account.", diff: "high", tag: "Investment Fraud",
    url: "quantumtrade-ai.co", badge: "Bot Activated!", amount: "92% Win Rate", amountLabel: "Claimed Performance",
    fee: "Minimum Funding: ₹10,000", feeNote: "Required to unlock the AI bot",
    fields: [{"n":"cardNumber","p":"Card Number","t":"text"},{"n":"cardExpiry","p":"Expiry (MM/YY)","t":"text"},{"n":"cardCvv","p":"CVV","t":"password"}],
    exposed: ["Full Name","Phone Number","Email","Card Number","Card Expiry","CVV"],
    reveal: "No trading bot can guarantee a 92% win rate — real markets don't work that way. The \"verified user\" testimonial was fabricated. Once you enter full card details including the CVV, the scammer can make unauthorized charges, and any \"funded\" balance you see in the dashboard is fictional — withdrawals will be blocked or require new fees.",
    flags: ["Claimed win rate above ~80% with no independent verification","Fabricated, unverifiable testimonials","Minimum funding requirement before the \"AI\" activates","No regulatory license or registration disclosed"],
    tips: ["No trading bot can guarantee a 90%+ win rate — treat this claim as an automatic red flag.","Check whether the platform is registered with a real financial regulator in your country.","Never enter full card details, especially the CVV, into an unverified trading site."],
    quiz: [
      { q: "A trading platform claims \"92% win rate with our AI bot.\" What should you do?", opts: ["Trust it because of the positive reviews shown","Fund the account immediately to capture the returns","Treat the claim skeptically and check for regulatory registration first","Share your CVV to unlock premium mode"], ans: 2, exp: "Extraordinary, guaranteed win-rate claims should always trigger skepticism and verification." },
      { q: "What is a common sign that a \"trading platform\" is a scam?", opts: ["It requires a regulatory license disclosure","Withdrawals get blocked or require new fees to release","It has a customer support phone line","It shows clearly-labeled historical backtest data"], ans: 1, exp: "Blocking withdrawals behind new fees is a classic sign the platform never intended to pay out." },
      { q: "Why is entering your CVV on an unverified site especially risky?", opts: ["It enables unauthorized card-not-present charges","It allows the merchant to save your address","It slows down the checkout","It has no real risk"], ans: 0, exp: "The CVV is meant to prove physical card possession for legitimate purchases; leaking it enables fraudulent charges." }
    ]
  },

  {
    id: 95, icon: "💼", title: "Fake Internship Offer", desc: "Work-from-home internship with certificate + stipend — pay to confirm your seat.", diff: "med", tag: "Job Fraud",
    url: "brightpath-internships.co.in", badge: "Seat Confirmed!", amount: "Certificate + Stipend", amountLabel: "Internship Offer",
    fee: "Registration Fee: ₹499", feeNote: "Refundable — to issue ID card and materials",
    fields: [{"n":"upiId","p":"UPI ID","t":"text"},{"n":"address","p":"Home Address (courier)","t":"text"}],
    exposed: ["Full Name","College","Email","Phone Number","UPI ID","Home Address","Registration Fee"],
    reveal: "There is no internship, no certificate, and no stipend. The \"registration fee\" is the entire goal — no company with a real internship program ever charges students to work for them. Your address and UPI ID can now be used for further scams or unsolicited payment requests.",
    flags: ["No interview or screening process at all","Upfront \"registration fee\" required to confirm a seat","Certificate and stipend promised regardless of performance","Company has no verifiable website, LinkedIn presence, or reviews"],
    tips: ["Legitimate internships never charge you a fee to participate — money should flow to you, not from you.","Verify the company's existence via LinkedIn, official website, and independent reviews before applying.","Insist on communication via an official company email domain, not personal messaging apps."],
    quiz: [
      { q: "An internship offer requires a ₹499 \"registration fee\" to confirm your seat. This is:", opts: ["Acceptable if the fee is refundable","Fine if a certificate is promised in return","Normal — many internships charge onboarding fees","A red flag — legitimate internships don't charge you to work"], ans: 3, exp: "A genuine employer or program never requires payment from the intern to participate." },
      { q: "Which is the strongest sign an internship offer is fake?", opts: ["A defined start and end date","No interview at all despite promising a stipend","A company website with verifiable employee profiles","A structured multi-round interview process"], ans: 1, exp: "Skipping any screening while still promising pay is a strong sign there is no real role behind the offer." },
      { q: "What should you verify before applying to an unfamiliar internship program?", opts: ["Whether friends have heard of the brand","Whether the logo looks professional","The company's presence on LinkedIn and independent reviews","Nothing, just apply quickly"], ans: 2, exp: "Independent verification (LinkedIn, reviews, official site) is the most reliable way to confirm legitimacy." }
    ]
  },

  {
    id: 96, icon: "🏠", title: "Fake Work From Home Task Scam", desc: "Earn ₹3,000/day doing \"simple data entry\" — buy a starter kit to begin.", diff: "med", tag: "Job Fraud",
    url: "earneasy-jobs.chat", badge: "Job Unlocked!", amount: "₹3,000/day", amountLabel: "Promised Daily Earnings",
    fee: "Starter Kit Fee: ₹1,499", feeNote: "One-time payment for training material",
    fields: [{"n":"bankAccount","p":"Bank Account Number","t":"text"},{"n":"ifsc","p":"IFSC Code","t":"text"},{"n":"aadhaar","p":"Aadhaar Number","t":"text"}],
    exposed: ["Full Name","WhatsApp Number","Age","Bank Account Number","IFSC Code","Aadhaar Number"],
    reveal: "There is no data-entry job. The \"starter kit fee\" is the entire scam — real employers pay you, they never charge you to start working. You've now handed over your Aadhaar and full bank details, which can be used for identity theft or unauthorized transactions.",
    flags: ["Unusually high pay for extremely simple or vague tasks","Upfront payment required for a \"starter kit\" or \"training material\"","Requests full bank details and Aadhaar before any job description is given","No formal offer letter, contract, or verifiable company registration"],
    tips: ["If a work-from-home job asks you to pay first, it is not a real job.","Be skeptical of pay that is far above market rate for simple tasks.","Never share your Aadhaar or full bank account details as part of a \"job application.\""],
    quiz: [
      { q: "A WFH job asks you to buy a ₹1,499 \"starter kit\" before starting. This is:", opts: ["A scam pattern — real jobs don't require you to pay to work","Fine since it includes training material","A standard onboarding cost","Only a concern if the amount is over ₹5,000"], ans: 0, exp: "Any job that requires payment from the applicant before they can start is a scam pattern." },
      { q: "What should you never share during a WFH job \"application\"?", opts: ["Your name","Your area of interest","Your Aadhaar number and full bank details before any formal offer","Your availability hours"], ans: 2, exp: "Sensitive KYC details should only ever be shared during a verified, formal hiring process." },
      { q: "Why is \"₹3,000/day for simple data entry\" a red flag?", opts: ["It is too specific an amount","It mentions WhatsApp","Data entry jobs don't exist","The pay is implausibly high for the described task"], ans: 3, exp: "Pay far above market rate for extremely simple, vague work is a common scam lure." }
    ]
  },

  {
    id: 97, icon: "📄", title: "Resume Collection Portal Scam", desc: "Upload your resume to get \"matched\" to 50+ companies — but they need your Aadhaar and bank details first.", diff: "med", tag: "Job Fraud",
    url: "megahire-portal.in", badge: "Matches Unlocked!", amount: "50+ Companies", amountLabel: "Promised Matches",
    fee: "Profile Unlock: KYC Required", feeNote: "To \"verify\" candidates",
    fields: [{"n":"dob","p":"Date of Birth","t":"text"},{"n":"aadhaar","p":"Aadhaar / Govt ID Number","t":"text"},{"n":"salaryBank","p":"Salary & Bank Details","t":"text"}],
    exposed: ["Full Name","Email","Phone Number","Resume","Date of Birth","Government ID Number","Salary & Bank Details"],
    reveal: "There are no 50 companies and no matches. This portal exists purely to harvest resumes and KYC-level personal data — which gets sold or reused for identity theft and further scams. No real job portal needs your Aadhaar and bank details just to show you job listings.",
    flags: ["Asks for government ID numbers or full salary/bank details just to \"match\" you to jobs","Vague promise of \"50+ companies\" with no specific job listings","No verifiable company names or hiring managers involved","Excessive data collection unrelated to a normal job application"],
    tips: ["Legitimate job portals don't need your Aadhaar or bank details just to \"match\" you with employers.","Be wary of portals that promise matches to unnamed companies.","Only share sensitive KYC information during an actual, verified hiring process — not at the resume-upload stage."],
    quiz: [
      { q: "A job portal asks for your Aadhaar number just to \"unlock matches.\" What should you do?", opts: ["Provide it only if the site uses HTTPS","Decline — this level of ID isn't needed to browse job matches","Provide a fake number instead","Provide it, since job portals need ID verification"], ans: 1, exp: "Browsing or matching to job listings never legitimately requires government ID numbers." },
      { q: "What is the main risk of a resume collection scam?", opts: ["You might get too many job offers","You waste time filling forms but face no other risk","Your resume format gets standardized","Your personal and financial data gets harvested with no real jobs behind it"], ans: 3, exp: "The core harm is data harvesting for identity theft or resale, not wasted time." },
      { q: "What should a real job portal only ask for at the browsing stage?", opts: ["Basic contact info and resume","Aadhaar and bank OTP","ATM PIN","Full salary slips"], ans: 0, exp: "Legitimate portals only need basic contact details and a resume to show you matches." }
    ]
  },

  {
    id: 98, icon: "🎙️", title: "Fake HR Interview Scam", desc: "A chat-based \"HR interview\" ends with a request for a refundable equipment deposit.", diff: "med", tag: "Job Fraud",
    url: "novacorp-careers.chat", badge: "Offer Letter Ready!", amount: "Software Analyst Role", amountLabel: "Position Offered",
    fee: "Security Deposit: ₹6,000", feeNote: "Required before laptop/equipment is issued",
    fields: [{"n":"bankAccount","p":"Bank Account Number","t":"text"},{"n":"upiId","p":"UPI ID for Deposit","t":"text"}],
    exposed: ["Full Name","Phone Number","Email","Bank Account Number","UPI ID","Security Deposit"],
    reveal: "The entire \"interview\" was scripted chat with no real interviewer. Real companies issue laptops and equipment without ever charging the employee a deposit — the \"refundable deposit\" is never refunded, and the offer letter that follows is worthless.",
    flags: ["Shortlisted without ever formally applying, or with minimal effort","Interview conducted entirely over chat with no verifiable HR identity","\"Refundable deposit\" required before issuing an offer letter or equipment","Recruiter's email domain doesn't match the company's official website"],
    tips: ["Real companies issue equipment or laptops without requiring you to pay a deposit first.","Verify the recruiter's email domain matches the company's official website.","Cross-check the job opening on the company's official careers page before proceeding."],
    quiz: [
      { q: "After a chat-only \"interview,\" you're asked for a ₹6,000 refundable deposit before receiving a laptop. This is:", opts: ["Normal only for remote roles","Acceptable since it's \"refundable\"","A scam pattern — legitimate employers don't charge deposits for equipment","Standard equipment policy at most companies"], ans: 2, exp: "No legitimate employer requires an employee to pay a deposit for company-issued equipment." },
      { q: "What should you verify before trusting an HR interview offer?", opts: ["That the offer letter uses a colorful template","That the interviewer's email domain matches the official company website","That the interview was conducted quickly","That the interviewer responded within an hour"], ans: 1, exp: "A mismatched or generic email domain is one of the clearest indicators of a fake recruiter." },
      { q: "Why is a purely chat-based \"interview\" with no video or call suspicious?", opts: ["It removes any way to verify the interviewer is a real person from a real company","It means the job is technical","It is always fine for remote roles","Chat interviews are illegal"], ans: 0, exp: "A chat-only process makes it easy for scammers to impersonate HR without ever being seen or verified." }
    ]
  },

  {
    id: 99, icon: "🏛️", title: "Fake Government Job Portal", desc: "A clone \"Sarkari Naukri\" site collects Aadhaar and ATM PIN under an \"application fee.\"", diff: "high", tag: "Government Impersonation",
    url: "sarkari-naukri-setu.co.in", badge: "Application Started!", amount: "10,000+ Vacancies", amountLabel: "Listed Government Jobs",
    fee: "Processing Fee: ₹350", feeNote: "Mandatory per government norms (claimed)",
    fields: [{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"bankAccount","p":"Bank Account Number","t":"text"},{"n":"atmPin","p":"ATM PIN","t":"password"}],
    exposed: ["Full Name","Father's Name","Date of Birth","Aadhaar Number","Bank Account Number","ATM PIN"],
    reveal: "This is a clone of an official government recruitment site on a lookalike domain. Real government job applications are processed only through official department portals, and none of them ever ask for your ATM PIN. That detail alone gives the scammer everything needed to drain your account.",
    flags: ["Domain name is a close imitation of a real government portal","Requests ATM PIN or OTP for \"verification\" — government forms never need this","Countdown pressure to apply before a vague deadline","No official government domain or verifiable notification PDF"],
    tips: ["Always apply through the official government recruitment domain, not links from SMS/WhatsApp forwards.","No legitimate application will ever ask for your ATM PIN or OTP.","When in doubt, visit the official portal directly by typing the URL yourself rather than clicking a link."],
    quiz: [
      { q: "A \"government job portal\" asks for your ATM PIN to \"verify\" your application. This is:", opts: ["Fine since it's described as verification","Acceptable if requested by SMS","Standard KYC procedure","A major red flag — no legitimate application ever needs your ATM PIN"], ans: 3, exp: "No government form or job application legitimately requires an ATM PIN." },
      { q: "What's the safest way to apply for a government job?", opts: ["Apply via any site that mentions \"Sarkari\" in its name","Type the official government domain directly into your browser","Click the link shared in a WhatsApp forward","Use whichever site ranks first in a search engine"], ans: 1, exp: "Manually navigating to the verified official domain avoids clone/phishing sites entirely." },
      { q: "Why do scammers use domains that closely resemble the real government portal?", opts: ["It improves search rankings","It has no purpose","To trick victims into thinking they are on the official site","It is required by law"], ans: 2, exp: "Lookalike domains exploit quick visual scanning to pass as the legitimate site." }
    ]
  },

  {
    id: 100, icon: "🛂", title: "Fake Visa Consultancy Fee Scam", desc: "\"100% guaranteed\" visa approval — pay a large fee before any documentation review.", diff: "high", tag: "Immigration Fraud",
    url: "globalmove-visaservices.com", badge: "Slot Locked!", amount: "100% Guaranteed*", amountLabel: "Claimed Approval Rate",
    fee: "Documentation Fee: ₹15,000", feeNote: "Locks your visa slot (claimed)",
    fields: [{"n":"passportNumber","p":"Passport Number","t":"text"},{"n":"bankAccount","p":"Bank Account (fee payment)","t":"text"}],
    exposed: ["Full Name","Phone Number","Destination Country","Passport Number","Passport Copy","Bank Account Number"],
    reveal: "No consultancy can guarantee a visa outcome — that decision belongs solely to the destination country's government. There was no license, no real document review, and the \"documentation fee\" simply disappears along with your passport copy, which can now be used for identity fraud.",
    flags: ["Claims \"100% guaranteed\" visa approval — no consultant can guarantee a government decision","Large upfront fee demanded before any documentation review","Requests your passport copy very early in the process","No verifiable license/accreditation with a relevant immigration authority"],
    tips: ["No consultancy can guarantee visa approval — that decision is made solely by the destination government.","Verify the consultancy's license/accreditation with the relevant regulatory body before paying anything.","Never send your passport copy to an unverified consultancy."],
    quiz: [
      { q: "A visa consultancy promises \"100% guaranteed approval.\" What does this indicate?", opts: ["This is a red flag — no one can guarantee a visa decision","They are highly experienced and trustworthy","It is standard marketing language and is fine","They have special government connections"], ans: 0, exp: "Visa decisions rest entirely with the destination government; no consultancy can guarantee them." },
      { q: "Before paying a visa consultancy, you should:", opts: ["Pay the full fee to show commitment","Send your passport immediately to speed up processing","Verify their license/accreditation and get a written service agreement","Skip research since visas are urgent"], ans: 2, exp: "Verifying accreditation and getting a written agreement protects you before any money changes hands." },
      { q: "Why is sending your passport copy early in the process risky?", opts: ["It is never risky","Passports cannot be copied","It slows down processing","It can be used for identity theft if the consultancy is fraudulent"], ans: 3, exp: "A passport copy in the wrong hands can enable identity fraud and impersonation." }
    ]
  },

  {
    id: 101, icon: "🌍", title: "Fake Immigration Liaison Scam", desc: "\"Fast-track PR\" through a private government liaison — pay a fee to reserve a case officer.", diff: "high", tag: "Immigration Fraud",
    url: "immigration-fasttrack.org", badge: "Case Officer Assigned!", amount: "PR in 30 Days*", amountLabel: "Claimed Timeline",
    fee: "Liaison Fee: Confidential", feeNote: "Payable directly (claimed)",
    fields: [{"n":"passportNumber","p":"Passport Number","t":"text"},{"n":"paymentAccount","p":"Payment Account (Bank/Crypto)","t":"text"}],
    exposed: ["Full Name","Email","Current Country","Passport Number","Payment Account Details"],
    reveal: "Official immigration processes have no paid \"fast-track\" via a private liaison — every applicant goes through the same public queue. There is no case officer, no quota, and the \"liaison fee\" simply disappears once paid to a personal account or wallet outside any official government channel.",
    flags: ["Claims to \"skip the queue\" via a special government liaison","Urgency around a shrinking \"quota\" that resets soon","Fee requested to a personal account or crypto wallet, not an official government channel","No official case number or verifiable government reference"],
    tips: ["Official immigration processes never offer a paid \"fast-track\" via a private liaison.","Always verify status and fees through the destination country's official immigration website.","Be suspicious of any payment requested to a personal account or crypto wallet for a \"government\" process."],
    quiz: [
      { q: "You're offered \"fast-track PR\" through a private liaison outside the normal government process. This is:", opts: ["A legitimate expedited service some governments offer","A scam — legitimate immigration has no such private backdoor","Trustworthy if the fee is paid in installments","Fine if the liaison provides a business card"], ans: 1, exp: "No government immigration system has a private, paid backdoor around the standard process." },
      { q: "How should immigration-related fees typically be paid?", opts: ["In cash to a local agent","Via cryptocurrency for anonymity","To a personal bank account of the case handler","Through official government fee channels only"], ans: 3, exp: "Real government fees are always paid through official, traceable government channels." },
      { q: "What is a key sign that an \"immigration liaison\" offer is fraudulent?", opts: ["There is no official case number or verifiable government reference","It has a phone number","It uses formal language","It mentions a country name"], ans: 0, exp: "A lack of any verifiable official reference is a strong sign the process is fabricated." }
    ]
  },

  {
    id: 102, icon: "🎓", title: "Fake Scholarship Alert Scam", desc: "You're \"pre-selected\" for a ₹50,000 scholarship you never applied for.", diff: "med", tag: "Education Fraud",
    url: "nationalmerit-scholarshipfund.org", badge: "Pre-Selected!", amount: "₹50,000", amountLabel: "Promised Scholarship",
    fee: "Verification Fee: ₹999", feeNote: "Refundable (claimed) — to release funds",
    fields: [{"n":"bankAccount","p":"Bank Account Number","t":"text"},{"n":"ifsc","p":"IFSC Code","t":"text"},{"n":"parentPhone","p":"Parent's Phone Number","t":"tel"}],
    exposed: ["Full Name","School/College","Email","Bank Account Number","IFSC Code","Parent's Phone Number"],
    reveal: "Real scholarships never require a \"verification fee\" to release money — funds always flow toward the student, never from them. This scholarship never existed; the goal was to collect a small fee and your family's banking and contact details.",
    flags: ["You never applied but are told you're \"pre-selected\"","A fee is required before funds can be \"released\" or \"verified\"","Vague sponsor name with no verifiable institutional backing","Requests parent's phone number and bank details early in the process"],
    tips: ["Legitimate scholarships never require you to pay a fee to receive money.","Verify the scholarship's sponsoring institution independently before providing any information.","Discuss any scholarship offer with a parent, teacher, or school counselor before acting."],
    quiz: [
      { q: "You receive a message saying you're \"pre-selected\" for a ₹50,000 scholarship you never applied for, pending a ₹999 fee. This is:", opts: ["Safe if a parent co-signs the form","Worth trying since the fee is small","A scam pattern — real scholarships don't charge fees to release funds","A legitimate opportunity — act fast"], ans: 2, exp: "The direction of money is the key tell: real scholarships pay students, they never charge them." },
      { q: "What is a hallmark of a real scholarship program?", opts: ["It requires a \"verification fee\" before payout","Money flows to the student, never from the student","It selects students without any application","It requires bank OTPs to be shared"], ans: 1, exp: "Genuine scholarships never require payment from recipients at any stage." },
      { q: "Who should you consult before acting on an unexpected scholarship offer?", opts: ["A parent, teacher, or school counselor","Social media followers","The sender's WhatsApp contact","No one — act immediately"], ans: 0, exp: "A trusted adult can help verify legitimacy and spot red flags a student might miss." }
    ]
  },

  {
    id: 103, icon: "🏦", title: "Fake Student Loan App Scam", desc: "Instant education loan approved in minutes — pay an \"insurance fee\" before disbursal.", diff: "high", tag: "Financial Fraud",
    url: "quickedu-loans.app", badge: "Loan Approved!", amount: "Instant Approval", amountLabel: "Loan Status",
    fee: "Insurance Premium: ₹2,999", feeNote: "Deducted before disbursal (claimed)",
    fields: [{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"panCard","p":"PAN Number","t":"text"},{"n":"bankAccount","p":"Bank Account Number","t":"text"}],
    exposed: ["Full Name","Course & Institution","Loan Amount","Aadhaar Number","PAN Number","Bank Account Number"],
    reveal: "Legitimate lenders deduct any fees directly from the disbursed loan amount — they never ask you to pay a separate fee upfront by transfer. There is no loan and no lender; the \"insurance premium\" is the entire scam, and your Aadhaar and PAN can now be used for further identity fraud.",
    flags: ["Loan \"approved\" within minutes with no credit or document checks","Requires a fee to be paid before the loan is disbursed","No RBI/regulator-registered NBFC or bank name behind the offer","Pressure to share Aadhaar, PAN, and bank login details together"],
    tips: ["Legitimate lenders deduct fees from the disbursed amount — never pay a separate upfront fee by transfer.","Verify the lender is a registered bank or RBI-regulated NBFC before proceeding.","Insist on a formal, signed loan agreement before sharing any sensitive financial details."],
    quiz: [
      { q: "A lender approves your loan instantly and asks you to pay a ₹2,999 \"insurance fee\" via UPI before disbursal. This is:", opts: ["Fine since insurance protects the loan","Acceptable if a receipt is provided","Normal loan processing procedure","A red flag — legitimate lenders deduct fees from the loan, not via separate upfront payment"], ans: 3, exp: "Real lenders deduct any charges from the loan amount itself, never as a separate advance payment." },
      { q: "What should you check before accepting a student loan offer?", opts: ["Whether the loan was approved in under 10 minutes","Whether the lender is a registered bank/regulated NBFC","Whether the interest rate is unpublished","Whether the agent responds on WhatsApp"], ans: 1, exp: "Regulatory registration is the single most important thing to verify before trusting any lender." },
      { q: "Why is instant approval with zero document checks suspicious?", opts: ["It means the loan has no interest","It is always a sign of great service","Real lending requires at least basic credit or document verification","It is standard for all loans"], ans: 2, exp: "Legitimate lending always involves some form of verification; skipping it entirely is a scam signal." }
    ]
  },

  {
    id: 104, icon: "🏫", title: "Guaranteed University Admission Scam", desc: "\"Guaranteed\" admission with no entrance exam — pay a large seat-booking fee.", diff: "high", tag: "Education Fraud",
    url: "globalinternational-university.edu.co", badge: "Seat Booked!", amount: "Direct Admission", amountLabel: "Guaranteed Seat",
    fee: "Seat Booking Fee: ₹25,000", feeNote: "One-time — secures admission letter (claimed)",
    fields: [{"n":"marksheet","p":"Upload Marksheet","t":"text"},{"n":"bankAccount","p":"Bank Account (fee payment)","t":"text"}],
    exposed: ["Full Name","Course of Interest","Email","Marksheet","Bank Account Number"],
    reveal: "This \"university\" has no verifiable accreditation and no real management quota to sell. The ₹25,000 seat-booking fee disappears, and there is no admission letter, no campus, and no course. Your marksheet has also now been shared with an unverified party.",
    flags: ["Guarantees admission with no entrance exam or academic screening","Demands a large \"seat booking\" fee before providing accreditation proof","No verifiable accreditation from the relevant education authority","No physical campus address that can be independently verified"],
    tips: ["Verify a university's accreditation with the relevant national education regulator before applying.","Be wary of \"guaranteed\" admission with no academic screening — legitimate institutions have standards.","Never pay a large \"booking fee\" before verifying the institution's legitimacy and accreditation."],
    quiz: [
      { q: "A university guarantees admission with zero entrance exam and asks for a ₹25,000 seat-booking fee. Before paying, you should:", opts: ["Verify the institution's accreditation with the relevant education authority first","Ask a friend to also apply for a group discount","Trust it because it has a professional-looking website","Pay quickly to secure the \"guaranteed\" seat"], ans: 0, exp: "Accreditation verification is the essential first step before trusting any admission offer." },
      { q: "Which is a red flag for a fake university?", opts: ["A defined academic calendar","A verifiable accreditation certificate","Guaranteed admission with no academic screening at all","Published entrance exam requirements"], ans: 2, exp: "Real institutions maintain some form of academic standard; skipping it entirely is suspicious." },
      { q: "What can happen if you upload your marksheet to an unverified admission portal?", opts: ["It is required by law","It automatically gets you admission elsewhere","Nothing, marksheets are public","It can be misused since the portal is unverified"], ans: 3, exp: "Sharing academic documents with an unverified party carries the same risk as any personal document leak." }
    ]
  },

  {
    id: 105, icon: "📚", title: "Rank-Guarantee Coaching Institute Scam", desc: "\"Guaranteed rank in 30 days\" — pay full course fee immediately to lock the \"early-bird\" price.", diff: "med", tag: "Education Fraud",
    url: "rankmaster-academy.in", badge: "Enrollment Confirmed!", amount: "Guaranteed Rank*", amountLabel: "Claimed Outcome",
    fee: "Early-Bird Fee: ₹18,999", feeNote: "Regular price ₹40,000 (claimed)",
    fields: [{"n":"cardNumber","p":"Card Number","t":"text"},{"n":"cardExpiry","p":"Expiry (MM/YY)","t":"text"},{"n":"cardCvv","p":"CVV","t":"password"}],
    exposed: ["Full Name","Target Exam","Phone Number","Card Number","Card Expiry","CVV"],
    reveal: "No coaching institute can guarantee an exam rank — outcomes depend on the exam itself, which no private company controls. The \"early-bird\" urgency exists solely to get your full card details, including CVV, before you have time to research the institute's actual track record.",
    flags: ["Guarantees a specific exam rank or result — no institute can guarantee this","\"Early-bird\" urgency pressuring same-day full payment","Unverifiable claims of past toppers with no independently checkable record","No trial class or refund policy offered"],
    tips: ["No coaching institute can guarantee a specific rank or exam result — treat this claim as a red flag.","Ask for verifiable, checkable results from a genuinely independent source before enrolling.","Take advantage of trial classes before committing to full payment."],
    quiz: [
      { q: "A coaching institute claims \"guaranteed rank in 30 days\" and pressures same-day payment. This is:", opts: ["Reasonable if the price is discounted","A red flag — no institute can guarantee exam outcomes","A trustworthy claim if they have many students","Fine as long as a certificate is provided"], ans: 1, exp: "Exam outcomes depend on the exam itself; no private institute can guarantee a specific rank." },
      { q: "What should you do before paying full fees to a coaching institute?", opts: ["Trust testimonials shown on their homepage","Pay immediately to lock the discount","Recommend it to others first","Attend a trial class and verify claimed results independently"], ans: 3, exp: "A trial class plus independent verification of results is the safest way to evaluate a coaching program." },
      { q: "Why does the \"early-bird\" urgency exist in this scam?", opts: ["To rush you into paying before you can research the institute properly","To reward loyal students","To reduce class sizes","It is a standard marketing practice with no downside"], ans: 0, exp: "Artificial urgency is designed to prevent careful evaluation before payment." }
    ]
  },

  {
    id: 106, icon: "🛠️", title: "Fake Skill Development Scheme", desc: "\"Free govt-certified\" skill course with a stipend — pay a refundable caution deposit.", diff: "med", tag: "Government Impersonation",
    url: "skillmission-govt.in", badge: "Enrollment Confirmed!", amount: "₹8,000 Stipend", amountLabel: "Promised Stipend",
    fee: "Caution Deposit: ₹1,200", feeNote: "Refundable (claimed)",
    fields: [{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"bankAccount","p":"Bank Account Number","t":"text"}],
    exposed: ["Full Name","Qualification","Phone Number","Aadhaar Number","Bank Account Number"],
    reveal: "A genuinely free government scheme never charges participants a deposit. There is no real government backing here, no training center, and no stipend — the \"caution deposit\" is never returned, and your Aadhaar and bank details are now exposed.",
    flags: ["Claims government backing but has no official domain or verifiable scheme code","A \"free\" course that still requires a caution/security deposit","Requests Aadhaar and bank details early, before any actual training begins","No physical or verifiable training center"],
    tips: ["Verify any \"government scheme\" through the relevant ministry's official website before enrolling.","A truly free government course will not require a \"caution deposit\" from participants.","Look for a verifiable physical training location and staff credentials."],
    quiz: [
      { q: "A \"free government skill scheme\" asks for a ₹1,200 refundable caution deposit. This is likely:", opts: ["Standard government procedure","Fine because it's labeled refundable","A scam pattern — genuinely free schemes don't charge deposits","Acceptable if a phone number is provided"], ans: 2, exp: "A truly free government program has no reason to collect a deposit from participants." },
      { q: "How can you verify a \"government-backed\" skill program is real?", opts: ["Assume it's real if a stipend is promised","Check the relevant ministry's official website for the scheme","Trust it if it was shared via WhatsApp","Check if it has a professional logo"], ans: 1, exp: "The relevant ministry's official website is the authoritative source for verifying any government scheme." },
      { q: "What detail combination is most risky to share with an unverified \"scheme\"?", opts: ["Aadhaar number and bank account together","Name and course interest","Highest qualification only","Preferred training time"], ans: 0, exp: "Aadhaar plus bank account together enables both identity misuse and direct financial fraud." }
    ]
  },

  {
    id: 107, icon: "🩺", title: "Fake Medical Insurance Scam", desc: "₹10 lakh health cover for ₹499/year, no medical checkup — pay by card to activate.", diff: "med", tag: "Insurance Fraud",
    url: "familycare-healthshield.co", badge: "Policy Activated!", amount: "₹10,00,000", amountLabel: "Claimed Cover",
    fee: "Annual Premium: ₹499", feeNote: "Activates instantly on payment (claimed)",
    fields: [{"n":"medicalHistory","p":"Existing Medical Conditions","t":"text"},{"n":"cardNumber","p":"Card Number","t":"text"},{"n":"cardCvv","p":"CVV","t":"password"}],
    exposed: ["Full Name","Date of Birth","Family Details","Medical History","Card Number","CVV"],
    reveal: "A ₹10 lakh cover for ₹499/year with no medical checkup is not mathematically viable for any real insurer — this \"policy\" is fabricated. There is no coverage, no claims process, and no registered insurer behind it. You've now exposed your card details, CVV, and sensitive medical history.",
    flags: ["Coverage amount is wildly disproportionate to the premium charged","No medical checkup or health declaration required for high coverage","Insurer is not listed with the relevant insurance regulator","Payment requested via personal card rather than an official insurer payment gateway"],
    tips: ["Verify the insurer is registered with the relevant national insurance regulator before paying any premium.","Be skeptical of coverage amounts that seem too high for the premium charged.","Always pay premiums through the insurer's official payment gateway, not an unverified form."],
    quiz: [
      { q: "A policy offers ₹10 lakh health cover for ₹499/year with no medical checkup. This is:", opts: ["Normal for online-only insurers","A great deal worth grabbing immediately","Safe if payment is by card","Implausible and likely fraudulent — verify the insurer's regulatory registration first"], ans: 3, exp: "The economics of real insurance make this coverage-to-premium ratio implausible without underwriting." },
      { q: "What should every genuine insurance policy provide?", opts: ["A referral bonus program","A verifiable policy number and issuer registered with the insurance regulator","A same-day discount code","A social media page with testimonials"], ans: 1, exp: "A verifiable policy number tied to a regulator-registered issuer is the baseline for any real policy." },
      { q: "Why is sharing medical history on this form especially risky?", opts: ["It automatically gets deleted","It is never risky","It combines with financial data to enable more convincing follow-up scams","Medical history has no value to scammers"], ans: 2, exp: "Combined medical and financial data makes victims easier to target with more convincing future scams." }
    ]
  },

  {
    id: 108, icon: "🫀", title: "Fake Organ Donation Registry Scam", desc: "Register as a donor for ₹5 lakh \"compensation\" — pay a medical processing fee first.", diff: "high", tag: "Healthcare Fraud",
    url: "national-organregistry.org", badge: "Registered!", amount: "₹5,00,000", amountLabel: "Promised Compensation",
    fee: "Medical Processing Fee: ₹7,500", feeNote: "Covers \"hospital paperwork\" (claimed)",
    fields: [{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"medicalHistory","p":"Medical History","t":"text"},{"n":"bankAccount","p":"Bank Account (compensation)","t":"text"}],
    exposed: ["Full Name","Blood Group","Phone Number","Aadhaar Number","Medical History","Bank Account Number"],
    reveal: "In most countries, buying or selling organs is illegal — any offer of cash \"compensation\" for donation is itself a red flag, separate from the fee scam layered on top. There is no urgent match and no compensation; the ₹7,500 \"processing fee\" disappears, and sensitive medical and financial data has been exposed.",
    flags: ["Offers cash payment for organ donation — buying/selling organs is illegal in most countries","Creates false urgency around an \"urgent match\" needing a response within hours","Requests an upfront \"medical processing fee\" before any compensation is paid","No verifiable hospital, doctor, or medical registration involved"],
    tips: ["In most countries, buying or selling organs is illegal — any offer of cash payment for donation is a red flag.","Legitimate organ donation is coordinated through licensed hospitals and official transplant registries, never private \"registries.\"","Never pay an upfront fee to receive compensation — that direction of payment is itself a scam signal."],
    quiz: [
      { q: "A \"registry\" offers ₹5 lakh for organ donation and asks for a ₹7,500 processing fee first. This is:", opts: ["Both illegal (organ sale) and a financial scam requiring an upfront fee","A legitimate compensation program","Safe if a hospital name is mentioned","Worth considering if urgently needed"], ans: 0, exp: "Paid organ donation is illegal in most jurisdictions, and the upfront fee is a separate financial scam layer." },
      { q: "How is legitimate organ donation actually coordinated?", opts: ["Through social media crowdfunding for donors","Through WhatsApp groups matching donors and recipients","Through licensed hospitals and official transplant authorities, without cash payment to donors","Through private registries offering cash payment"], ans: 2, exp: "Real organ donation goes through licensed medical institutions and official transplant systems, not private cash-based registries." },
      { q: "What should you do if approached for a \"financially compensated\" organ donation?", opts: ["Ask for half the payment upfront","Share your medical history to see if you qualify","Proceed if the amount is attractive","Recognize it as both illegal and a likely scam, and decline"], ans: 3, exp: "Recognizing both the legal and financial red flags is the safest response — decline and do not share personal data." }
    ]
  },

  {
    id: 109, icon: "🏥", title: "Fake Hospital Admission", desc: "Learn how scammers exploit family medical emergencies to steal funds.", diff: "high", tag: "Medical Scams",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Phone Number","Payment Details"],
    reveal: "Scammers manufacture extreme panic (e.g., '15 minutes left or the bed is given away') to completely bypass your logical thinking and force an impulsive payment.",
    flags: ["The Urgency Trap"],
    tips: ["Always hang up and call the hospital's official landline or your family member directly. Official institutions do not demand instant UPI payments via random WhatsApp numbers."],
    quiz: [
      { q: "What is the primary psychological tactic used in the Fake Hospital scam?", opts: ["Offering a massive discount on medical bills","Creating extreme time pressure and panic to force a quick payment","Sending a detailed PDF of the patient's medical history","Asking for the patient's blood type"], ans: 1, exp: "Scammers rely on time pressure (like a 15-minute countdown) to make you panic and pay without verifying the facts." }
    ]
  },

  {
    id: 110, icon: "🚑", title: "Fake Ambulance Booking", desc: "Understand how fraudsters manipulate search engine ads for fake emergency services.", diff: "med", tag: "Medical Scams",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Pickup Location","Payment Details"],
    reveal: "Scammers buy 'Sponsored' ads at the top of search results for keywords like 'emergency ambulance'. These fake sites demand an upfront 'dispatch fee' but no ambulance ever arrives.",
    flags: ["Malicious Google Ads"],
    tips: ["Rely on official national emergency numbers (like 108 in India) or save the direct contact numbers of your local trusted hospitals in advance."],
    quiz: [
      { q: "Why is it dangerous to click the very first 'Sponsored' link when searching for emergency services?", opts: ["Sponsored links are always slower to load","Search engines do not fully verify if the ad belongs to a legitimate emergency service provider","Sponsored links charge more for the ambulance ride","The ambulance will get lost using Google Maps"], ans: 1, exp: "Scammers frequently buy ad space to place their fake websites at the top of search results, bypassing organic verification." }
    ]
  },

  {
    id: 111, icon: "💊", title: "Fake Medicine Delivery", desc: "Identify fraudulent online pharmacies offering unrealistic discounts on prescription drugs.", diff: "low", tag: "Medical Scams",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Delivery Address","Financial Data"],
    reveal: "Fake pharmacies lure victims—especially the elderly—with massive discounts on expensive or hard-to-find prescription drugs. They take the payment, but the medicines are never shipped.",
    flags: ["The Discount Bait"],
    tips: ["Legitimate online pharmacies always require a valid doctor's prescription. Beware of sites that offer heavy discounts, have a countdown timer at checkout, and disable Cash on Delivery (COD)."],
    quiz: [
      { q: "Which of these is a major red flag when buying prescription medicines online?", opts: ["The website requires you to upload a valid doctor's prescription","The website offers a 60% discount but disables Cash on Delivery (COD)","The website lists a registered physical address","The website has a customer care phone number"], ans: 1, exp: "Scammers disable COD because they need you to pay upfront before you realize the medicine isn't coming." }
    ]
  },

  {
    id: 112, icon: "🩺", title: "Fake Telemedicine App", desc: "See how scammers set up fake online doctor consultations to steal fees and medical data.", diff: "med", tag: "Medical Scams",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Health Data","Payment Details"],
    reveal: "Scammers take advantage of people seeking quick medical advice by offering unbelievable deals (like a specialist for ₹199). The platform looks real, but the 'doctor' never connects.",
    flags: ["The Cheap Consultation Trap"],
    tips: ["Only use well-known, official telemedicine platforms (like Practo, Apollo, or Tata 1mg). Never click links in random SMS messages to book health appointments."],
    quiz: [
      { q: "Why do fake telemedicine scams usually charge a very small fee (like ₹199)?", opts: ["Because online doctors are cheaper than in-person doctors","To make the victim think it's a low-risk trial and easily part with their payment details","Because the government subsidizes fake telemedicine apps","To pay for the video call software"], ans: 1, exp: "A low fee lowers your guard. The scammers don't just want the ₹199; they want to steal your card details or UPI PIN during the transaction." }
    ]
  },

  {
    id: 113, icon: "🪪", title: "Fake Health Card", desc: "Learn how fraudsters use fake government health schemes to steal identity details.", diff: "high", tag: "Medical Scams",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Government ID","Payment Details"],
    reveal: "Scammers build websites that mimic official government portals (using Ashoka pillars, tricolors, and official-sounding names) to make you feel secure while handing over your Aadhaar/PAN.",
    flags: ["Government Impersonation"],
    tips: ["Real government digital health IDs (like ABHA) are completely free. If a site asks for a 'processing fee' or 'card generation fee', it is a scam."],
    quiz: [
      { q: "What is the biggest red flag when applying for a government document or health card online?", opts: ["The website asks for your date of birth","The website requires a small 'processing fee' via UPI or card for a free government scheme","The website takes more than 2 minutes to load","The website asks for your name"], ans: 1, exp: "Official digital health IDs are free. Scammers use tiny 'processing fees' to steal your financial data." }
    ]
  },

  {
    id: 114, icon: "🩸", title: "Fake Blood Donation Request", desc: "Understand how scammers exploit your empathy during fake medical emergencies.", diff: "low", tag: "Charity & Donation",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Personal Info","Payment Details"],
    reveal: "Scammers post urgent, highly emotional requests for rare blood types. When you reach out to help, they redirect you to a fake NGO site.",
    flags: ["Emotional Manipulation"],
    tips: ["Legitimate blood banks and hospitals will NEVER ask a blood donor to pay a 'registration fee' or 'verification fee'. Donating blood is always free."],
    quiz: [
      { q: "You want to donate blood for an urgent online request. What should make you instantly realize it's a scam?", opts: ["The hospital is far away","The patient has a rare blood type","The registration portal asks for a ₹49 refundable verification fee","The post has thousands of retweets"], ans: 2, exp: "No legitimate hospital or NGO will ever ask a donor to pay money to donate blood." }
    ]
  },

  {
    id: 115, icon: "🛕", title: "Temple Donation Scam", desc: "Discover how fraudsters create fake religious trusts to steal devotion-driven donations.", diff: "med", tag: "Charity & Donation",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Personal Info","Payment Details"],
    reveal: "Scammers capitalize on major festivals or temple inaugurations by creating fake websites that look exactly like the official trust boards. They offer fast-track Darshan or home-delivered Prasad to lure devotees.",
    flags: ["Faith-Based Fraud"],
    tips: ["Never donate through random WhatsApp links. Always Google the official temple trust website and look for verified payment gateways and official government registration numbers."],
    quiz: [
      { q: "Why do scammers frequently use WhatsApp forwards for Temple Donation scams?", opts: ["WhatsApp has the best payment gateway","People are more likely to trust and click a link if it was forwarded by a family member or friend","WhatsApp automatically verifies temple trusts","It is the only way to send links in India"], ans: 1, exp: "Social proof is powerful. If a relative forwards a religious message, most people assume it is safe and legitimate without checking the URL." }
    ]
  },

  {
    id: 116, icon: "🤝", title: "Fake NGO Donation Scam", desc: "Learn how fake NGOs steal funds and PAN card details under the guise of tax exemptions.", diff: "high", tag: "Charity & Donation",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Government ID","Payment Details"],
    reveal: "Scammers know donors want tax exemptions. They use fake '80G Registered' badges to make you comfortable handing over highly sensitive data like your PAN card number.",
    flags: ["The 80G Tax Trap"],
    tips: ["Before donating, always look up the NGO on the government's official Darpan portal. If a random ad forces you to enter your PAN card for a small donation, close the page."],
    quiz: [
      { q: "What sensitive piece of information do fake NGO portals often request by falsely promising tax exemptions?", opts: ["Your home address","Your PAN card number","Your passport number","Your voter ID"], ans: 1, exp: "Fake NGOs use the promise of 80G tax receipts to trick you into exposing your PAN card, which they use for identity theft." }
    ]
  },

  {
    id: 117, icon: "🌊", title: "Fake Disaster Relief Scam", desc: "See how scammers mimic government emergency funds during natural disasters.", diff: "med", tag: "Charity & Donation",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Contact Info","Payment Details"],
    reveal: "Scammers monitor the news. The moment a disaster strikes, they launch copycat websites mimicking the PM or CM Relief Funds to siphon off the public's goodwill.",
    flags: ["Tragedy Hijacking"],
    tips: ["Official government portals in India usually end in '.gov.in' or '.nic.in'. Websites ending in '.com', '.org', or '.in' claiming to be official relief funds are usually fake."],
    quiz: [
      { q: "Which website domain suffix is a strong indicator that a disaster relief fund is an official Indian government portal?", opts: [".org",".com",".gov.in",".co.in"], ans: 2, exp: "Legitimate Indian government websites exclusively use .gov.in or .nic.in domains." }
    ]
  },

  {
    id: 118, icon: "📢", title: "Fake Crowdfunding Scam", desc: "Discover how scammers steal emotional stories and photos to run fake crowdfunding campaigns.", diff: "med", tag: "Charity & Donation",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Personal Info","Payment Details"],
    reveal: "Scammers frequently steal photos from legitimate past campaigns or news stories to create fake fundraisers on platforms that mimic GoFundMe or Milaap.",
    flags: ["Stolen Tragedies"],
    tips: ["Always check the organizer's profile, look for updates on the campaign, and reverse-image search the photos used in the pitch."],
    quiz: [
      { q: "What is a common trick used by fake crowdfunding campaigns on social media?", opts: ["They only accept cash donations","They steal photos from real, older campaigns to manufacture fake emergencies","They always require you to upload your ID to donate","They refund your money if the goal isn't met"], ans: 1, exp: "Scammers prey on impulse and empathy by using stolen, tragic photos to make you donate quickly without researching the organizer." }
    ]
  },

  {
    id: 119, icon: "👶", title: "Fake Child Medical Emergency", desc: "Learn how highly urgent medical appeals for children are fabricated to steal funds.", diff: "high", tag: "Charity & Donation",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Contact Info","Financial Data"],
    reveal: "Medical scams often use extreme countdown timers (e.g., 'Only 14 hours left to save her') to force you into a panicked, emotional donation without verifying the facts.",
    flags: ["The 24-Hour Trap"],
    tips: ["If a campaign claims a child is at a specific hospital, call the hospital's official landline to verify if the patient and the fundraising campaign are real."],
    quiz: [
      { q: "Why do fake medical campaigns often include a countdown timer?", opts: ["To show when the hospital closes","To trigger a sense of panic so you donate immediately without verifying","To track how long the website has been active","To follow government fundraising regulations"], ans: 1, exp: "Timers create false urgency, bypassing your logical thinking and pushing you to act purely on emotion." }
    ]
  },

  {
    id: 120, icon: "🛡️", title: "Fake Army Welfare Donation", desc: "Understand how patriotism is exploited by fake national defense and martyr welfare funds.", diff: "high", tag: "Charity & Donation",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Citizen Data","Payment Details"],
    reveal: "Scammers create websites using national flags, military logos, and terms like 'Martyr Fund' to manipulate citizens into donating out of respect and duty.",
    flags: ["Exploiting Patriotism"],
    tips: ["Legitimate army welfare funds (like the Armed Forces Battle Casualties Welfare Fund) have specific, official government bank accounts and will not use random UPI IDs or WhatsApp links."],
    quiz: [
      { q: "If you want to donate to an Army Welfare fund, what is the safest approach?", opts: ["Click the link in a WhatsApp forward that has a tricolor flag","Pay the UPI ID provided in a patriotic Facebook post","Go directly to the official government website (.gov.in) to find the verified bank details","Download a donation app sent via SMS"], ans: 2, exp: "Never trust links on social media for official funds. Always verify the exact bank details on the official government or defense website." }
    ]
  },

  {
    id: 121, icon: "🧩", title: "Fake Browser Extension Scam", desc: "See how malicious browser extensions steal your data under the guise of free tools.", diff: "med", tag: "Technical Scams",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Account Info","Financial Data"],
    reveal: "Scammers promise amazing free features (like unlimited VPNs) to get you to install their extension. Once installed, it tracks your keystrokes, steals passwords, and demands 'activation' fees.",
    flags: ["The 'Free' Trap"],
    tips: ["Legitimate browser extensions from the official Chrome Web Store do not require you to pay a 'human verification' or 'bot check' fee via credit card to activate them."],
    quiz: [
      { q: "You install a free browser extension and a popup asks for a ₹99 credit card fee for 'bot verification'. What should you do?", opts: ["Pay it, since it's a very small amount","Use a UPI ID instead of a credit card to be safe","Immediately uninstall the extension and run an antivirus scan","Enter a fake credit card number"], ans: 2, exp: "This is a classic bait-and-switch scam. The extension is malicious and trying to steal your payment details." }
    ]
  },

  {
    id: 122, icon: "🖥️", title: "Fake Software Update", desc: "Learn how fake antivirus popups scare you into paying for useless license renewals.", diff: "med", tag: "Technical Scams",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Account Info","Payment Details"],
    reveal: "Fraudsters use malicious website scripts to create full-screen popups that look exactly like Windows or Antivirus warnings. They want you to panic and pay to 'remove the viruses'.",
    flags: ["Scareware Tactics"],
    tips: ["If you get a virus warning in your web browser, close the browser immediately. Real antivirus software alerts come from your system tray, not a website, and they don't demand instant payment."],
    quiz: [
      { q: "What is the primary goal of a 'Scareware' popup?", opts: ["To update your computer's drivers","To make you panic about a fake virus so you pay for a fake solution","To securely backup your files","To optimize your internet speed"], ans: 1, exp: "Scareware relies on fear. They manufacture a fake crisis so you hand over your credit card details to 'fix' it." }
    ]
  },

  {
    id: 123, icon: "🌐", title: "Fake Chrome Update", desc: "Understand how scammers spoof browser update warnings to steal Google credentials.", diff: "high", tag: "Technical Scams",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Credentials","Financial Data"],
    reveal: "Scammers mimic the exact red UI of Google's 'Safe Browsing' warning to trick you into downloading malware or entering your actual Google password on a fake verification screen.",
    flags: ["Phishing via Fear"],
    tips: ["Google Chrome updates automatically in the background. It will NEVER redirect you to a website that asks for your Google password or a credit card fee to download a patch."],
    quiz: [
      { q: "A website tells you Chrome is outdated and asks for a ₹5 card payment to verify you are human before downloading the patch. Is this normal?", opts: ["Yes, Google charges a small fee for security patches","No, browser updates are always free and never require a credit card for verification","Yes, but only if you use a Mac","No, you should only pay via UPI"], ans: 1, exp: "Browser updates are entirely free and automated. Any request for payment or passwords to update your browser is a scam." }
    ]
  },

  {
    id: 124, icon: "🪟", title: "Fake Windows Update", desc: "Experience how the fake 'Blue Screen of Death' is used to run tech support scams.", diff: "high", tag: "Technical Scams",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["Personal Info","Payment Details"],
    reveal: "Scammers use full-screen web pages to mimic a Windows crash (Blue Screen of Death). It locks your cursor and plays a loud beeping noise to panic you into paying a 'Tech Support' fee.",
    flags: ["The Fake BSOD"],
    tips: ["This is usually just a web browser stuck in full-screen mode. Pressing Esc, F11, or Ctrl+Alt+Delete to close the browser will instantly 'fix' the issue without paying anyone."],
    quiz: [
      { q: "If your screen locks up with a blue error message telling you to call a 1-800 support number, what is the best first step?", opts: ["Call the number immediately to prevent data loss","Enter your credit card details to buy the diagnostic software","Press Ctrl+Alt+Delete to force close your web browser","Unplug your internet router and wait for 24 hours"], ans: 2, exp: "Most fake lock screens are just web browser tricks. Force-closing the browser removes the fake warning." }
    ]
  },

  {
    id: 125, icon: "🔌", title: "USB Malware Scam", desc: "Discover the dangers of 'Baiting' and how unknown USB drives can deploy ransomware.", diff: "high", tag: "Technical Scams",
    url: "secure-portal-auth.com", badge: "Urgent Action", amount: "₹0", amountLabel: "Amount at Risk",
    fee: "Action Required", feeNote: "Immediate action requested",
    fields: [],
    exposed: ["System Access","Financial Data"],
    reveal: "Cybercriminals leave infected USB drives in public places. When a curious person plugs it in, hidden malware or ransomware is silently installed on their network.",
    flags: ["USB Baiting"],
    tips: ["Paying the ransom on a locked screen never guarantees your files will be decrypted. The best defense is regular offline backups and never plugging in unknown devices."],
    quiz: [
      { q: "You find a USB drive in your company's parking lot labeled 'Confidential Layoffs'. What should you do?", opts: ["Plug it into your work laptop but run an antivirus scan first","Plug it into your personal laptop at home instead","Give it to your IT security department without plugging it in anywhere","Format the drive immediately so you can use it for free storage"], ans: 2, exp: "Never connect unknown devices to any computer. Handing it directly to IT ensures it is handled safely without compromising any networks." }
    ]
  },

  {
    id: 126, icon: "🖥️", title: "Tech Support Remote Access Scam", desc: "Fake tech support calls claiming your computer is infected.", diff: "med", tag: "Tech Support",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Remote Desktop Access","Saved Browser Passwords","Online Banking Sessions"],
    reveal: "You gave a scammer remote access to your computer! Once connected via tools like AnyDesk, attackers can steal files, passwords, and transfer money from active banking sessions.",
    flags: ["Unsolicited pop-up warning with a loud siren or phone number","Caller claiming to be from Microsoft/Apple tech support","Instruction to download screen-sharing or remote access software"],
    tips: ["Legitimate tech companies never make unsolicited support calls","Never download AnyDesk or TeamViewer at the request of a stranger","Close browser popups immediately without calling the toll-free number"],
    quiz: [
      { q: "Do legitimate companies like Microsoft or Apple make unsolicited calls claiming your PC is infected?", opts: ["Yes, always","Never","Only for premium users","Only on weekends"], ans: 1, exp: "Legitimate tech companies never initiate unsolicited phone calls or popups asking for remote access." },
      { q: "What is the primary danger of downloading remote access tools like AnyDesk for an unknown caller?", opts: ["It slows down your internet","They gain full control of your screen, files, and banking sessions","It deletes your wallpaper","It increases electricity bill"], ans: 1, exp: "Remote desktop software grants the scammer complete administrative control over your device." },
      { q: "What should you do if a browser popup shows a loud siren and a toll-free support number?", opts: ["Call the number immediately","Pay the fee shown","Close the browser tab or restart your computer","Download their repair tool"], ans: 2, exp: "Scary popups are malicious web ads designed to induce panic; closing the tab stops the alert." }
    ]
  },

  {
    id: 127, icon: "🔔", title: "Browser Notification Scam", desc: "Malicious software that infects devices to steal data or ransom.", diff: "low", tag: "Malware",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Browser Notification Permissions","System Adware Infection"],
    reveal: "You allowed malicious push notifications! Unscrupulous websites use notification permissions to spam your desktop with fake virus alerts and phishing links.",
    flags: ["Streaming or download site forcing you to click Allow notifications to continue","Persistent system alerts appearing from web browsers","Popups claiming your PC is infected with multiple viruses"],
    tips: ["Never click Allow on notification prompts from unfamiliar websites","Check browser settings under Site Settings -> Notifications to revoke rogue sites","Use an ad-blocker or modern browser protection"],
    quiz: [
      { q: "Why do suspicious streaming or download websites ask you to click \"Allow\" notifications?", opts: ["To check internet speed","To flood your desktop with fake virus alerts and adware","To improve video resolution","To verify your age"], ans: 1, exp: "Abusive push notifications display fake system warnings to trick you into purchasing malware." },
      { q: "Can a website notification scan your computer hard drive for viruses?", opts: ["Yes, browsers scan hardware","No, notifications are just text alerts sent by web servers","Only on Windows 11","Only if you use Chrome"], ans: 1, exp: "Web push notifications have no access to scan your local disk or detect real viruses." },
      { q: "How do you stop persistent fake antivirus popups appearing in the corner of your screen?", opts: ["Buy the antivirus they advertise","Revoke notification permissions for unknown sites in browser settings","Format your hard drive","Unplug your monitor"], ans: 1, exp: "Removing the site from your browser's Allowed Notifications list instantly stops the popups." }
    ]
  },

  {
    id: 128, icon: "📋", title: "Clipboard Hijacking Malware", desc: "Malicious software that infects devices to steal data or ransom.", diff: "high", tag: "Malware",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Cryptocurrency Wallet Address","High-Value Crypto Transfer"],
    reveal: "You fell victim to clipboard hijacking (Clipper malware)! The malware monitored your copy-paste memory and swapped your intended recipient address with the attacker's wallet address.",
    flags: ["Pasted cryptocurrency address looks slightly different in the middle characters","Unverified utility or pirated software installed recently","Transactions sent to addresses matching only the first/last few letters"],
    tips: ["Verify every single character of a cryptocurrency wallet address before sending","Use hardware wallets with physical screens to confirm destination addresses","Keep your OS and antivirus definitions updated"],
    quiz: [
      { q: "What does a \"Clipper\" or clipboard hijacking trojan do?", opts: ["Deletes your copy-paste history","Monitors clipboard memory and replaces copied crypto/bank addresses with the attacker's address","Locks your keyboard","Speeds up typing"], ans: 1, exp: "Clipper malware intercepts copy-paste actions to divert high-value transactions to attacker accounts." },
      { q: "Why do attackers generate addresses with matching first and last characters?", opts: ["Because of blockchain rules","To trick users who only glance at the start and end of a pasted address","To make transfers faster","To lower transaction fees"], ans: 1, exp: "Scammers use vanity address generators so lookalike addresses fool superficial inspections." },
      { q: "What is the best habit before confirming any large cryptocurrency transfer?", opts: ["Only check the first 2 characters","Verify the entire recipient address character-by-character on a trusted hardware display","Paste it 5 times rapidly","Turn off Wi-Fi before sending"], ans: 1, exp: "Full character-by-character verification prevents loss from clipboard replacement." }
    ]
  },

  {
    id: 129, icon: "🦊", title: "Crypto Wallet Drainer", desc: "Cryptocurrency scams, fake exchanges, or investment fraud.", diff: "high", tag: "Crypto",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["All Wallet Tokens & NFTs","Unlimited Smart Contract Approval"],
    reveal: "You signed a wallet drainer transaction! Approving a setApprovalForAll signature allows malicious Web3 smart contracts to empty your wallet instantly.",
    flags: ["Unsolicited crypto airdrop or urgent NFT mint website","Signature prompt requesting unlimited token allowance or approval","Unverified Web3 dApp requesting wallet connection"],
    tips: ["Never connect your crypto wallet to unknown airdrop or giveaway links","Carefully inspect transaction permissions before signing Web3 messages","Use tools like Revoke.cash to cancel open token allowances"],
    quiz: [
      { q: "What happens when you sign a `setApprovalForAll` permission on a malicious Web3 dApp?", opts: ["You receive free airdrop tokens","You grant the smart contract permission to withdraw all tokens and NFTs from your wallet","Your wallet gets upgraded","You pay zero gas fees"], ans: 1, exp: "Unlimited approval permissions allow malicious contracts to drain your entire token balance." },
      { q: "How do crypto drainer scams typically lure victims?", opts: ["Offering free token airdrops, NFT mints, or urgent reward claims","Sending physical letters","Calling on landlines","Offering bank loans"], ans: 0, exp: "Free crypto airdrops and FOMO tactics induce users to sign unverified wallet signatures." },
      { q: "What should you do if you accidentally connect your wallet to a suspicious dApp?", opts: ["Send more ETH to test it","Use a trusted revocation tool (like Revoke.cash) to immediately cancel open token allowances","Delete the browser app","Wait 24 hours"], ans: 1, exp: "Revoking smart contract allowances immediately removes their ability to move your assets." }
    ]
  },

  {
    id: 130, icon: "🛡️", title: "Fake Antivirus Subscription", desc: "Malicious software that infects devices to steal data or ransom.", diff: "med", tag: "Malware",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Credit Card Number & CVV","Fake Renewal Charge ()"],
    reveal: "You entered payment details on a fake antivirus invoice popup! Scammers impersonate brands like Norton or McAfee to trick you into calling fake refund helplines or paying bogus charges.",
    flags: ["Email or web popup claiming an automatic  renewal charge","Urgent phone number provided to cancel or refund the subscription","Customer care agent asking for card details or screen-sharing"],
    tips: ["Verify subscriptions by logging into your official antivirus account directly","Never call phone numbers listed in unexpected invoice emails or popups","Check your real bank statement independently before reacting"],
    quiz: [
      { q: "How can you distinguish a fake antivirus popup from real security software?", opts: ["Real antivirus software runs locally on your OS, not inside website ad banners","Fake ones use green text","Real ones always ask for Bitcoin","Fake ones only appear on Tuesdays"], ans: 0, exp: "Legitimate OS security alerts come from system notifications, never from website ad frames." },
      { q: "Why do scammers impersonate well-known brands like Norton or McAfee?", opts: ["To build false trust and panic victims into entering credit card details","Because they work for those companies","To offer legitimate discounts","To repair your computer for free"], ans: 0, exp: "Brand spoofing leverages established reputation to lower victim skepticism." },
      { q: "What should you do if an email or popup claims you will be charged $399 for antivirus renewal?", opts: ["Click the refund link inside the email","Call the number listed in the alert","Log into your official account directly or check your real bank statement independently","Reply with your card number"], ans: 2, exp: "Independent verification via official channels prevents falling for refund extortion traps." }
    ]
  },

  {
    id: 131, icon: "📱", title: "eSIM Hijacking", desc: "SIM swap or SIM card fraud.", diff: "high", tag: "SIM",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Cellular Phone Number","Bank 2FA SMS OTPs","Email Password Recovery"],
    reveal: "You shared your SIM replacement OTP! Attackers use this code to transfer your phone number to their eSIM device, intercepting all your SMS OTPs.",
    flags: ["SMS warning that your SIM will be disconnected unless you upgrade immediately","Request to share a 6-digit network activation or eSIM OTP","Sudden loss of cellular network signal (No Service)"],
    tips: ["Never share OTP codes sent by your mobile carrier with anyone","Set a carrier account PIN to prevent unauthorized SIM replacements","Use authenticator apps (TOTP) instead of SMS for critical accounts"],
    quiz: [
      { q: "What is eSIM hijacking or SIM swap fraud?", opts: ["Upgrading to 5G speed","Scammers tricking you or your carrier into transferring your phone number to their eSIM device","Buying a new phone case","Losing your phone charger"], ans: 1, exp: "SIM hijacking redirects all incoming calls and SMS OTPs to the attacker's phone." },
      { q: "What is the most immediate warning sign of a successful SIM swap?", opts: ["Phone battery drains fast","Your phone suddenly loses cellular network service (\"No Service / Emergency Calls Only\")","Screen brightness increases","Wi-Fi disconnects"], ans: 1, exp: "When your number is activated on an attacker's eSIM, your physical SIM loses network connection." },
      { q: "Should you ever share a 6-digit eSIM activation code or EID with an SMS caller?", opts: ["Yes, if they claim to be 5G support","Never under any circumstances","Only if they know your name","Only after 6 PM"], ans: 1, exp: "Activation codes allow unauthorized devices to clone your mobile connection." }
    ]
  },

  {
    id: 132, icon: "📞", title: "Missed Call Scam", desc: "Voice phishing via phone calls to steal personal information.", diff: "low", tag: "Vishing",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Exorbitant International Toll Charges","Phone Bill Balance"],
    reveal: "You returned a Wangiri missed call! Scammers call from premium-rate overseas numbers (+882, +234) so when you call back, you are billed expensive per-minute rates.",
    flags: ["Single-ring missed call from an unfamiliar international country code","Repeated missed calls at unusual hours","Automated voice recording keeping you on the line when you call back"],
    tips: ["Do not return unexpected missed calls from unknown international numbers","Block international spam prefixes on your phone","Check your carrier billing if you accidentally returned a suspicious call"],
    quiz: [
      { q: "What is the \"Wangiri\" or One-Ring Missed Call scam?", opts: ["A free international greeting service","Scammers calling once from premium-rate overseas numbers so you call back and get billed exorbitant rates","A telecom network test","A wrong number"], ans: 1, exp: "Wangiri bots rely on human curiosity to generate expensive international callback tolls." },
      { q: "What happens if you return a missed call to an unknown international satellite number (+882 / +234)?", opts: ["You get connected to customer care","Your phone bill is charged premium per-minute fees that get funneled to scammers","Your phone gets upgraded","Nothing happens"], ans: 1, exp: "Premium-rate numbers charge high connection fees shared between carriers and fraudsters." },
      { q: "What is the safest response to repeated one-ring missed calls from unknown foreign prefixes?", opts: ["Call back immediately","Send a WhatsApp message asking who it is","Do not call back and block the number","Answer before the first ring ends"], ans: 2, exp: "Blocking international Wangiri numbers prevents accidental callback charges." }
    ]
  },

  {
    id: 133, icon: "🎙️", title: "International Call Scam", desc: "Voice phishing via phone calls to steal personal information.", diff: "med", tag: "Vishing",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Identity & Passport Details","Emergency Extortion Money"],
    reveal: "You fell for an international extortion call! Scammers impersonate customs or Interpol officers claiming your name was found on illegal parcels to extort money.",
    flags: ["Caller claiming to be police, customs, or Interpol threatening immediate arrest","Demand to transfer a security deposit to clear your name","High pressure refusing to let you disconnect or call a lawyer"],
    tips: ["Real police or customs departments never demand money transfers over the phone","Disconnect immediately if a caller threatens arrest for a parcel you never sent","Report fake government impersonators to the national cyber crime portal"],
    quiz: [
      { q: "Why do international scammers threaten victims with fake Interpol or Customs arrest warrants over the phone?", opts: ["To enforce real international laws","To induce extreme psychological panic so victims transfer money without thinking","To verify address details","To recruit police officers"], ans: 1, exp: "Fear and urgency bypass rational judgment during high-pressure Vishing calls." },
      { q: "Do real law enforcement agencies demand immediate \"security deposits\" via phone calls to cancel warrants?", opts: ["Yes, always","Never; legal procedures never involve transferring money over phone calls","Only for international parcels","Only on public holidays"], ans: 1, exp: "No police or customs department asks for money or crypto transfers over the telephone." },
      { q: "What should you do if an international caller claims your identity was used in illegal parcel trafficking?", opts: ["Stay on the line and argue","Transfer the requested verification bond","Hang up immediately and report the number to cyber crime authorities","Give your bank account number"], ans: 2, exp: "Disconnecting immediately breaks the scammer's psychological manipulation." }
    ]
  },

  {
    id: 134, icon: "💬", title: "WhatsApp OTP Theft", desc: "Fraudulent messages or calls via WhatsApp.", diff: "med", tag: "WhatsApp",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["WhatsApp Account Access","Impersonation of Your Contacts"],
    reveal: "You forwarded your WhatsApp verification code! Scammers use the 6-digit SMS registration code to hijack your WhatsApp account and solicit money from your friends.",
    flags: ["Friend on WhatsApp asking you to forward an SMS code you just received","SMS notification containing a WhatsApp registration code you did not request","Sudden logout from your WhatsApp app"],
    tips: ["Enable Two-Step Verification (2FA PIN) in WhatsApp Settings immediately","Never forward any 6-digit SMS verification code to anyone, even friends","Call your friend on their phone number if they ask for urgent help"],
    quiz: [
      { q: "Why would a \"friend\" on WhatsApp ask you to forward a 6-digit SMS code you just received?", opts: ["Their phone screen is broken","Their account was hacked, and they are trying to log into YOUR WhatsApp account using that OTP","They want to send you money","It is a WhatsApp software update"], ans: 1, exp: "Forwarding a WhatsApp registration code gives the attacker full takeover of your account." },
      { q: "How can you protect your WhatsApp account even if someone intercepts your SMS OTP?", opts: ["Change your profile photo","Enable Two-Step Verification (2FA PIN) in WhatsApp Settings","Turn off read receipts","Use dark theme"], ans: 1, exp: "Two-Step Verification requires a custom PIN that scammers cannot get from SMS OTPs." },
      { q: "What should you do if a contact suddenly asks for emergency money or OTP codes via chat?", opts: ["Send it immediately","Call them directly on their standard phone number to verify their voice and situation","Forward the message to groups","Block all your contacts"], ans: 1, exp: "Direct voice verification exposes account takeover scams immediately." }
    ]
  },

  {
    id: 135, icon: "✉️", title: "SMS Spoofing", desc: "Fraudulent SMS messages with malicious links or fake offers.", diff: "med", tag: "SMS",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Bank KYC Credentials","Net Banking Password"],
    reveal: "You clicked a link in a spoofed SMS! Attackers forge sender IDs (like AD-HDFCBK) to send fake KYC suspension messages containing phishing links.",
    flags: ["Urgent SMS claiming your bank account will be blocked today","Link pointing to an unofficial shortened or lookalike domain","Request to enter sensitive banking passwords or PAN card details online"],
    tips: ["Always open your official banking app or visit the bank branch directly for KYC","Never click links inside urgent account suspension SMS messages","Remember that sender IDs can be spoofed by third-party SMS gateways"],
    quiz: [
      { q: "Can scammers send SMS messages that appear under your real bank's official Sender ID header?", opts: ["No, Sender IDs are unhackable","Yes, SMS spoofing allows attackers to forge alphanumeric sender names like AD-HDFCBK","Only on older phones","Only via email"], ans: 1, exp: "SMS protocols allow sender name manipulation via third-party bulk messaging gateways." },
      { q: "What is the key indicator that an urgent KYC SMS is fraudulent?", opts: ["It contains a suspicious shortened or non-official web domain URL","It is delivered during daytime","It mentions your bank's name","It uses correct English grammar"], ans: 0, exp: "Banks never send external `.top`, `.xyz`, or unverified links for KYC updates." },
      { q: "What is the safest way to update your bank KYC details?", opts: ["Click the link in the SMS message","Log directly into your official banking mobile app or visit your bank branch","Reply to the SMS with your Aadhaar number","Call the number given in the text"], ans: 1, exp: "Using official, authenticated channels ensures you never submit data to phishing portals." }
    ]
  },

  {
    id: 136, icon: "📧", title: "Email Spoofing", desc: "Fake communication (email/SMS) tricking you into revealing credentials.", diff: "med", tag: "Phishing",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Corporate Email Password","Office 365 Account Credentials"],
    reveal: "You fell for Email Display Name Spoofing! Scammers disguise their display name as IT Helpdesk or CEO while using an external sender address to harvest login credentials.",
    flags: ["Display name says IT Helpdesk but actual email address is from an external domain","Urgent threat that your email account will be locked within 24 hours","Link directing to an unverified non-Microsoft login portal"],
    tips: ["Always inspect the actual email address and domain, not just the sender display name","Type official login URLs manually instead of clicking email links","Report suspicious corporate emails to your IT security team"],
    quiz: [
      { q: "What is Email Display Name Spoofing?", opts: ["Changing your font size","Setting the email display name to \"IT Helpdesk\" or \"CEO\" while the actual sender address is an external domain","Encrypting an email attachment","Sending emails faster"], ans: 1, exp: "Attackers rely on email clients prominently showing display names while hiding raw addresses." },
      { q: "How can you inspect the true origin of a suspicious corporate email?", opts: ["Look at the subject line color","Check the full email headers (`Return-Path` and actual domain address)","Print the email on paper","Forward it to yourself"], ans: 1, exp: "Email headers reveal the true sending server and Reply-To destination." },
      { q: "Why do phishing emails often warn that your account will be locked within 24 hours?", opts: ["To help you manage time","To create urgency so you click without checking URLs or consulting IT security","Because servers shut down daily","To save server storage"], ans: 1, exp: "Artificial deadlines induce cognitive hurry, suppressing analytical vigilance." }
    ]
  },

  {
    id: 137, icon: "☎️", title: "Caller ID Spoofing", desc: "Voice phishing via phone calls to steal personal information.", diff: "high", tag: "Vishing",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Banking OTP Code","Debit Card PIN","Account Funds"],
    reveal: "You shared your OTP on a spoofed phone call! Attackers use Caller ID spoofing to make their call appear from your bank's official helpline number.",
    flags: ["Caller showing your bank's helpline number asking you to read out an OTP","Agent claiming your account is under attack and requires an OTP to stop it","Pressure to stay on the line without hanging up"],
    tips: ["Banks never ask you to read out an OTP or PIN over the phone","Hang up and dial the official number on the back of your card yourself","Sharing an OTP always authorizes a transaction—never share it verbally"],
    quiz: [
      { q: "If your incoming phone display shows your bank's exact official 1800 helpline number, does that prove it is your bank?", opts: ["Yes, phone networks verify all caller IDs","No, Caller ID spoofing allows fraudsters to display any number on your screen","Only if the call is recorded","Only on landlines"], ans: 1, exp: "Caller ID information can be easily manipulated using VoIP spoofing services." },
      { q: "Will a genuine bank customer service agent ever ask you to read out an OTP over the phone to cancel a transaction?", opts: ["Yes, for emergencies","Never; OTPs are confidential and banks never ask for them verbally","Only for credit cards","Only for amounts above ₹50,000"], ans: 1, exp: "OTPs authenticate transactions; sharing them authorizes whatever charge the scammer initiated." },
      { q: "What should you do if an agent on a spoofed call claims your account is under active fraud attack?", opts: ["Stay on the line and share your OTP","Hang up immediately and dial the official number on the back of your card yourself","Read out your debit card PIN","Transfer funds to a \"safe account\""], ans: 1, exp: "Initiating a fresh call yourself guarantees you are speaking to authentic bank systems." }
    ]
  },

  {
    id: 138, icon: "🤖", title: "Robocall Scam", desc: "Voice phishing via phone calls to steal personal information.", diff: "low", tag: "Vishing",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Live Connection to Fraud Syndicate","Personal Identity Details"],
    reveal: "You pressed 1 on a scam robocall! Automated calls claiming illegal packages or customs seizures filter victims and connect them to extortion call centers.",
    flags: ["Automated voice message claiming your parcel or identity is under investigation","Instruction to press 1 to speak to an officer","Threats of legal indictment or police dispatch"],
    tips: ["Hang up immediately when you hear an automated press-1 legal threat","Never press buttons on unsolicited automated calls","Government agencies do not notify citizens of criminal charges via robocalls"],
    quiz: [
      { q: "Why do scammers use automated robocalls claiming illegal parcels or customs seizures?", opts: ["To test phone speaker volume","To automatically filter thousands of calls for scared victims who press 1","To conduct government surveys","To offer courier discounts"], ans: 1, exp: "Robocalls enable fraudsters to scale phishing campaigns to thousands of numbers simultaneously." },
      { q: "What happens when you press \"1\" during an automated customs or narcotics robocall alert?", opts: ["Your parcel gets delivered","You are routed to a scam call center where fake officers demand extortion payments","The call disconnects safely","Your phone number is hidden"], ans: 1, exp: "Pressing 1 signals to the scam syndicate that you are receptive to their intimidation script." },
      { q: "Do customs or law enforcement departments notify citizens of criminal indictments via automated press-1 robocalls?", opts: ["Yes, it is standard procedure","Never; official legal notices follow formal documented judicial processes","Only for international shipments","Only on weekends"], ans: 1, exp: "No legitimate enforcement agency uses pre-recorded press-1 robocall threats." }
    ]
  },

  {
    id: 139, icon: "✈️", title: "Fake Flight Ticket", desc: "Fake travel bookings, flight tickets, or holiday packages.", diff: "med", tag: "Travel",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Flight Booking Payment","UPI / Bank Transfer Funds"],
    reveal: "You paid for a fake flight booking! Scammers advertise unrealistic airfare discounts on lookalike travel portals and demand direct UPI/QR transfers.",
    flags: ["Flight tickets priced 70-80% cheaper than every official airline website","Payment restricted to direct UPI QR codes or personal bank transfers","High-pressure countdown timer urging immediate payment"],
    tips: ["Book flights directly on official airline websites or verified travel platforms","Avoid booking sites that refuse standard credit card payment gateways","Verify your ticket PNR directly on the airline website"],
    quiz: [
      { q: "What is a major red flag when buying flight tickets from an unfamiliar online portal?", opts: ["Airfares that are 75-80% cheaper than every official airline website with countdown timers","Accepting credit cards","Showing flight schedules","Sending email confirmations"], ans: 0, exp: "Unrealistic discounts coupled with high-pressure flash timers are classic travel scam markers." },
      { q: "Why do fake travel agency portals insist on direct UPI or QR code bank transfers instead of card gateways?", opts: ["UPI is faster for planes","Direct bank transfers lack credit card chargeback protection, making stolen funds irreversible","Airlines do not accept credit cards","To save paper"], ans: 1, exp: "Scammers avoid merchant gateways because card payments can be disputed and reversed." },
      { q: "How can you verify if a flight ticket PNR issued by a third-party agent is authentic?", opts: ["Look at the PDF logo","Enter the PNR and surname directly on the official airline's \"Manage Booking\" website","Check the ticket color","Ask the travel agent on WhatsApp"], ans: 1, exp: "Verifying directly on the carrier's official database confirms whether a genuine seat exists." }
    ]
  },

  {
    id: 140, icon: "🏨", title: "Fake Hotel Booking", desc: "Fake travel bookings, flight tickets, or holiday packages.", diff: "med", tag: "Travel",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Vacation Rental Advance","Personal Payment Transfer"],
    reveal: "You transferred money for a fake hotel rental! Scammers use stolen photos of luxury resorts and ask victims to pay deposits via direct WhatsApp transfer.",
    flags: ["Host asking you to cancel platform booking and pay via direct UPI/WhatsApp transfer","All-inclusive resort offered at a suspiciously low price on social media","Refusal to accept payment through verified booking platforms"],
    tips: ["Keep all communication and payments inside official booking platforms (Airbnb, Booking.com)","Never wire money or send UPI transfers to individual social media sellers","Check independent reviews and verify property details before booking"],
    quiz: [
      { q: "Why would a resort host ask you to cancel an official platform booking and pay advance via direct WhatsApp transfer?", opts: ["To give you better room service","To bypass platform protection and pocket your advance for a non-existent or double-booked room","To register your ID faster","To avoid local taxes legally"], ans: 1, exp: "Off-platform payments strip away booking platform guarantees and refund protections." },
      { q: "What often happens when travelers arrive at a property booked via an unverified social media direct transfer?", opts: ["They receive a free upgrade","The property does not exist, or the real owners have no record of the booking","They get complimentary breakfast","The host greets them at the airport"], ans: 1, exp: "Scammers frequently misappropriate photos of real villas to advertise phantom rentals." },
      { q: "What is the safest practice when booking peak-season vacation rentals?", opts: ["Pay 100% upfront to an individual UPI ID via Instagram DM","Complete all messaging and payments exclusively within trusted, verified booking platforms","Transfer money to a personal bank account","Never check reviews"], ans: 1, exp: "Official booking platforms hold funds in escrow and offer verified guest protections." }
    ]
  },

  {
    id: 141, icon: "🛂", title: "Fake Visa Approval", desc: "Fake travel bookings, flight tickets, or holiday packages.", diff: "high", tag: "Travel",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["Passport Scans & Identity Data","Visa Processing Fee"],
    reveal: "You fell for a fake visa expedition scam! Private agencies claiming 100% guaranteed visa approval steal processing fees and passport documents.",
    flags: ["Agency claiming to guarantee 100% visa approval or bypass embassy interviews","Website using commercial domain (.com/.top) instead of official government (.gov)","Demands for upfront express processing fees via personal bank transfer"],
    tips: ["Apply for visas strictly through official government embassy portals or authorized centers","No private agency can guarantee sovereign consular visa approval","Protect your passport scans from unverified third-party websites"],
    quiz: [
      { q: "Can a private online agency guarantee 100% visa approval or bypass mandatory embassy interviews?", opts: ["Yes, if you pay express fees","No; sovereign embassies strictly control visa issuance and no agency can guarantee approval","Only for tourist visas","Only for online e-visas"], ans: 1, exp: "Consular authorities alone decide visa outcomes; \"guaranteed approval\" claims are always fraudulent." },
      { q: "What domain extension should official government visa application websites typically use?", opts: [".org or .net","Official government domains (.gov, .gov.uk, or verified diplomatic portals)",".top or .xyz",".shop"], ans: 1, exp: "Government diplomatic services operate exclusively on verified sovereign web domains." },
      { q: "What is the double risk of submitting passport scans and fees to a fake visa expedition site?", opts: ["Losing internet bookmarks","Financial theft combined with identity theft (stolen passport documents used for fraud)","Receiving too many promotional emails","Slow browser loading"], ans: 1, exp: "Identity thieves harvest uploaded passport credentials to open fraudulent accounts." }
    ]
  },

  {
    id: 142, icon: "🏝️", title: "Fake Travel Package", desc: "Fake travel bookings, flight tickets, or holiday packages.", diff: "med", tag: "Travel",
    url: undefined, badge: undefined, amount: undefined, amountLabel: undefined,
    fee: undefined, feeNote: undefined,
    fields: [],
    exposed: ["All-Inclusive Holiday Deposit","Financial & Personal Details"],
    reveal: "You booked a non-existent holiday package! Scammers advertise luxury travel packages on Instagram/Facebook DMs and disappear after receiving deposits.",
    flags: ["Travel agency operating exclusively via Instagram or Telegram DM","Unrealistically cheap luxury holiday packages with immediate deposit deadlines","No registered physical office, GST number, or travel association accreditation"],
    tips: ["Verify travel agency accreditation (IATA/TAFI) before booking holiday packages","Avoid agencies that only communicate via social media direct messages","Use credit cards for travel bookings to maintain chargeback protection"],
    quiz: [
      { q: "How do fake social media travel agencies lure holidaymakers?", opts: ["Posting stolen luxury resort photos with unbelievably low all-inclusive package prices","Sending paper brochures","Advertising on television only","Offering free bus rides"], ans: 0, exp: "Visual luxury combined with extreme discounts triggers impulse buying on social media." },
      { q: "Why should you be cautious if a travel agency only operates via Instagram DM and UPI QR codes?", opts: ["They are too modern","Legitimate tour operators provide registered office addresses, GST/license numbers, and verified payment gateways","Instagram is slow","UPI does not work on weekends"], ans: 1, exp: "Lack of verifiable business credentials or physical presence is a hallmark of fly-by-night scams." },
      { q: "What step should you take before booking an all-inclusive tour package with an unfamiliar company?", opts: ["Pay the deposit immediately before slots run out","Verify their travel association registration (IATA/TAFI) and read independent third-party reviews","Ask them if they are genuine on chat","Share your credit card CVV"], ans: 1, exp: "Verifying trade accreditation ensures the agency is legally registered and accountable." }
    ]
  },

  {
    id: 143, icon: "🛕", title: "Fake Pilgrimage Package", desc: "Fraudulent pilgrimage tour packages offering fake bookings and huge discounts.", diff: "med", tag: "Travel Scam",
    url: "pilgrimage-booking-india.com", badge: "Limited Time Offer", amount: "₹4,999", amountLabel: "Complete Package",
    fee: "Advance Booking", feeNote: "Non-refundable",
    fields: [{"n":"name","p":"Full Name","t":"text"},{"n":"phone","p":"Mobile Number","t":"tel"},{"n":"payment","p":"UPI ID","t":"text"}],
    exposed: ["Personal Information","Payment Details"],
    reveal: "Scammers create fake pilgrimage websites and collect advance payments without providing any travel services.",
    flags: ["Huge discounts","Advance payment only","No verified contact","Fake testimonials"],
    tips: ["Book only through official travel operators","Verify GST and business registration","Avoid paying full amount upfront","Read genuine reviews"],
    quiz: [
      { q: "What is a common sign of a fake pilgrimage package?", opts: ["Official booking office","Huge unrealistic discount","Government website","Verified payment gateway"], ans: 1, exp: "Scammers attract victims using unbelievable discounts." },
      { q: "Where should you book religious tours?", opts: ["Unknown WhatsApp number","Official travel portals","Telegram group","Random Facebook page"], ans: 1, exp: "Official booking portals are much safer." },
      { q: "What should you verify before paying?", opts: ["GST and business details","Logo color","Website font","Number of photos"], ans: 0, exp: "Always verify the travel company." }
    ]
  },

  {
    id: 144, icon: "🚆", title: "Fake Railway Refund", desc: "Fake refund messages pretending to be from Indian Railways.", diff: "med", tag: "Travel Scam",
    url: "railway-refund-help.com", badge: "Refund Pending", amount: "₹2,450", amountLabel: "Claim Refund",
    fee: "Verification Charge", feeNote: "Refund expires today",
    fields: [{"n":"pnr","p":"PNR Number","t":"text"},{"n":"upi","p":"UPI ID","t":"text"}],
    exposed: ["PNR Details","Bank Information"],
    reveal: "Fake refund websites steal payment details or ask for OTPs.",
    flags: ["Unexpected refund SMS","Requests OTP","Unknown website","Urgent deadline"],
    tips: ["Check refunds on IRCTC only","Never share OTP","Ignore unknown links","Verify sender ID"],
    quiz: [
      { q: "Where should railway refunds be checked?", opts: ["IRCTC","WhatsApp","Telegram","Facebook"], ans: 0, exp: "Always use official railway platforms." },
      { q: "Should you pay a fee to receive a refund?", opts: ["Yes","No"], ans: 1, exp: "Legitimate refunds never require payment." },
      { q: "What should never be shared?", opts: ["OTP","Train Number","Coach Number","Station Name"], ans: 0, exp: "OTP gives attackers access to your account." }
    ]
  },

  {
    id: 145, icon: "✈️", title: "Fake Airport Assistance", desc: "Fraudsters offering fake airport VIP assistance and fast-track services.", diff: "med", tag: "Travel Scam",
    url: "airport-vip-help.com", badge: "VIP Assistance", amount: "₹1,999", amountLabel: "Fast Track Entry",
    fee: "Booking Fee", feeNote: "Limited seats",
    fields: [{"n":"name","p":"Passenger Name","t":"text"},{"n":"pnr","p":"Flight PNR","t":"text"}],
    exposed: ["Travel Details","Personal Information"],
    reveal: "Scammers collect payments for airport services that do not exist.",
    flags: ["Only WhatsApp booking","No official website","Advance payment","Unverified offers"],
    tips: ["Book through airlines","Verify airport services","Avoid unofficial agents","Check reviews"],
    quiz: [
      { q: "Who should provide airport assistance?", opts: ["Official airline","Random WhatsApp","Unknown Instagram page","Telegram"], ans: 0, exp: "Always book through official providers." },
      { q: "What is a red flag?", opts: ["Official invoice","Advance payment only","Verified website","Customer support"], ans: 1, exp: "Scammers demand advance payments." },
      { q: "Where should bookings be made?", opts: ["Official websites","Random links","SMS","Social media comments"], ans: 0, exp: "Official portals are safest." }
    ]
  },

  {
    id: 146, icon: "📦", title: "Fake FedEx Delivery", desc: "Fake parcel delivery notifications pretending to be FedEx.", diff: "high", tag: "Parcel Scam",
    url: "fedex-track-update.com", badge: "Parcel On Hold", amount: "₹99", amountLabel: "Delivery Fee",
    fee: "Custom Charge", feeNote: "Pay immediately",
    fields: [{"n":"tracking","p":"Tracking Number","t":"text"},{"n":"card","p":"Card Number","t":"text"}],
    exposed: ["Card Details","Tracking Information"],
    reveal: "Fake courier websites steal banking information.",
    flags: ["Unexpected parcel","Small payment request","Fake tracking page","Unknown sender"],
    tips: ["Track parcels on official website","Ignore suspicious SMS","Never enter card details","Verify shipment"],
    quiz: [
      { q: "Where should tracking be done?", opts: ["Official courier site","SMS link","WhatsApp","Telegram"], ans: 0, exp: "Always verify on the official website." },
      { q: "Why do scammers ask for ₹99?", opts: ["Delivery fee scam","Discount","Tax refund","Gift"], ans: 0, exp: "Small payments are used to steal banking details." },
      { q: "What should you verify?", opts: ["Tracking number","Emoji","SMS font","Wallpaper"], ans: 0, exp: "Verify tracking directly." }
    ]
  },

  {
    id: 147, icon: "📦", title: "Fake DHL Delivery", desc: "Fraudulent DHL parcel delivery notification scam.", diff: "high", tag: "Parcel Scam",
    url: "dhl-delivery-update.com", badge: "Shipment Delayed", amount: "₹120", amountLabel: "Delivery Charge",
    fee: "Processing Fee", feeNote: "Required today",
    fields: [{"n":"tracking","p":"Tracking ID","t":"text"},{"n":"upi","p":"UPI ID","t":"text"}],
    exposed: ["Payment Details","Personal Data"],
    reveal: "Attackers impersonate DHL to steal payments.",
    flags: ["Unknown shipment","Fake payment page","Urgent delivery","Suspicious domain"],
    tips: ["Track via official DHL website","Ignore fake SMS","Verify tracking number","Never pay through unknown links"],
    quiz: [
      { q: "What should you do first?", opts: ["Verify tracking","Pay instantly","Reply SMS","Call unknown number"], ans: 0, exp: "Verify the shipment independently." },
      { q: "Should you pay using SMS links?", opts: ["No","Yes"], ans: 0, exp: "Official couriers do not request payments through random links." },
      { q: "What is a warning sign?", opts: ["Official app","Unexpected parcel","Verified website","Known sender"], ans: 1, exp: "Unexpected deliveries are common scam bait." }
    ]
  },

  {
    id: 148, icon: "📦", title: "Fake Blue Dart Tracking", desc: "Fake Blue Dart parcel tracking scam.", diff: "high", tag: "Parcel Scam",
    url: "bluedart-track-now.com", badge: "Delivery Failed", amount: "₹75", amountLabel: "Redelivery Fee",
    fee: "Service Charge", feeNote: "Required within 2 hours",
    fields: [{"n":"tracking","p":"Tracking Number","t":"text"},{"n":"mobile","p":"Mobile Number","t":"tel"}],
    exposed: ["Personal Information","Payment Details"],
    reveal: "Fake tracking websites steal money and personal information.",
    flags: ["Fake tracking page","Urgent payment","Unknown parcel","Short deadline"],
    tips: ["Use official tracking portal","Verify courier details","Ignore suspicious SMS","Never pay via unknown links"],
    quiz: [
      { q: "How should parcels be tracked?", opts: ["Official website","Random SMS link","Telegram","Email attachment"], ans: 0, exp: "Official portals are safest." },
      { q: "What is the scam trying to steal?", opts: ["Payments","Photos","Music","Wallpaper"], ans: 0, exp: "Financial fraud is the objective." },
      { q: "Should you trust unexpected delivery alerts?", opts: ["No","Yes"], ans: 0, exp: "Always verify independently." }
    ]
  },

  {
    id: 149, icon: "📮", title: "Fake India Post Tracking", desc: "Fake India Post parcel tracking messages.", diff: "high", tag: "Parcel Scam",
    url: "indiapost-track-online.com", badge: "Parcel Waiting", amount: "₹50", amountLabel: "Processing Fee",
    fee: "Verification", feeNote: "Pay now",
    fields: [{"n":"tracking","p":"Article Number","t":"text"},{"n":"upi","p":"UPI ID","t":"text"}],
    exposed: ["Personal Data","Payment Details"],
    reveal: "Scammers impersonate India Post to steal payment information.",
    flags: ["Unexpected parcel","Unknown sender","Payment request","Fake website"],
    tips: ["Track only on official portal","Verify article number","Ignore fake SMS","Never share banking details"],
    quiz: [
      { q: "What should you verify?", opts: ["Tracking number","Logo color","SMS font","Wallpaper"], ans: 0, exp: "Always verify tracking." },
      { q: "Should you pay via SMS links?", opts: ["No","Yes"], ans: 0, exp: "Avoid unknown payment pages." },
      { q: "What information is targeted?", opts: ["Payment details","Weather","Photos","Games"], ans: 0, exp: "The goal is financial fraud." }
    ]
  },

  {
    id: 150, icon: "🚚", title: "Courier Redelivery Fee Scam", desc: "Fraudsters demand small fees for fake redelivery attempts.", diff: "med", tag: "Parcel Scam",
    url: "parcel-redelivery.com", badge: "Redelivery Needed", amount: "₹99", amountLabel: "Redelivery Charge",
    fee: "Mandatory Payment", feeNote: "Today only",
    fields: [{"n":"address","p":"Delivery Address","t":"text"},{"n":"card","p":"Card Details","t":"text"}],
    exposed: ["Address","Card Information"],
    reveal: "Victims pay fake delivery fees and lose banking information.",
    flags: ["Unexpected payment","Tiny fee","Unknown courier","Urgent deadline"],
    tips: ["Verify delivery status","Avoid unknown payment links","Track officially","Ignore suspicious SMS"],
    quiz: [
      { q: "What is the biggest red flag in a courier redelivery scam?", opts: ["A small unexpected payment request","Courier tracking number","Official courier app","Delivery notification"], ans: 0, exp: "Scammers often request a small payment to steal your financial information." },
      { q: "How should you verify a delivery?", opts: ["Click the SMS link","Track it on the official courier website","Reply to the message","Pay immediately"], ans: 1, exp: "Always verify parcel status through the courier’s official website or app." },
      { q: "What should you avoid entering on suspicious courier websites?", opts: ["Tracking number","Delivery address","Card or banking details","Parcel weight"], ans: 2, exp: "Never enter your banking details on unknown courier websites." }
    ]
  },

  {
    id: 151, icon: "🛃", title: "Customs Clearance Scam", desc: "Fake customs officers demand clearance charges for parcels.", diff: "high", tag: "Parcel Scam",
    url: "customs-clearance-help.com", badge: "Parcel Held", amount: "₹3,500", amountLabel: "Customs Fee",
    fee: "Immediate Payment", feeNote: "Release today",
    fields: [{"n":"tracking","p":"Tracking Number","t":"text"},{"n":"upi","p":"UPI ID","t":"text"}],
    exposed: ["Payment Details","Personal Information"],
    reveal: "Scammers pretend customs fees are required for fake parcels.",
    flags: ["Unknown international parcel","Urgent payment","Threats","Fake officials"],
    tips: ["Verify with courier","Never pay unknown fees","Contact customs directly","Ignore threatening calls"],
    quiz: [
      { q: "What do customs clearance scammers usually claim?", opts: ["Your parcel requires customs fees","Your password has expired","Your SIM card is blocked","Your internet is slow"], ans: 0, exp: "Scammers pretend your parcel is held at customs and demand payment." },
      { q: "How should you verify customs charges?", opts: ["Pay immediately","Contact the courier or customs office directly","Reply to the SMS","Call the unknown number"], ans: 1, exp: "Verify directly with the courier or official customs authorities." },
      { q: "What is a common pressure tactic?", opts: ["Discount offers","Urgent payment threats","Cashback rewards","Free delivery"], ans: 1, exp: "Urgency is used to trick victims into paying without verification." }
    ]
  },

  {
    id: 152, icon: "⚡", title: "Electricity Bill Scam", desc: "Fake electricity bill payment messages.", diff: "high", tag: "Utility Scam",
    url: "electricity-payment-now.com", badge: "Power Disconnection", amount: "₹1,480", amountLabel: "Outstanding Bill",
    fee: "Reconnect Fee", feeNote: "Pay within 30 minutes",
    fields: [{"n":"consumer","p":"Consumer Number","t":"text"},{"n":"upi","p":"UPI ID","t":"text"}],
    exposed: ["Utility Account","Payment Details"],
    reveal: "Scammers threaten disconnection to pressure immediate payment.",
    flags: ["Urgent disconnection warning","Unknown payment link","SMS only","Threatening language"],
    tips: ["Check official utility portal","Never pay through SMS links","Call customer care","Verify bill"],
    quiz: [
      { q: "How do electricity bill scammers create panic?", opts: ["Threaten immediate power disconnection","Offer discounts","Send coupons","Provide cashback"], ans: 0, exp: "Fake disconnection notices pressure victims into making quick payments." },
      { q: "Where should you verify your electricity bill?", opts: ["Official electricity provider portal","WhatsApp","Telegram","Unknown website"], ans: 0, exp: "Always verify bills using the official utility website or app." },
      { q: "What should you avoid?", opts: ["Checking the official app","Paying via links received in SMS","Calling customer support","Viewing your bill history"], ans: 1, exp: "Never make bill payments through unknown SMS links." }
    ]
  },

  {
    id: 153, icon: "💧", title: "Water Bill Scam", desc: "Fake municipal water bill payment scam.", diff: "med", tag: "Utility Scam",
    url: "waterbill-payment.com", badge: "Water Supply Notice", amount: "₹680", amountLabel: "Pending Bill",
    fee: "Late Fee", feeNote: "Pay today",
    fields: [{"n":"consumer","p":"Consumer ID","t":"text"}],
    exposed: ["Consumer Details"],
    reveal: "Fraudsters impersonate municipal water departments.",
    flags: ["Urgent payment","Fake portal","Unknown sender","Threats"],
    tips: ["Verify bills on official website","Ignore suspicious links","Call municipality","Pay through official apps"],
    quiz: [
      { q: "How should you verify a water bill?", opts: ["Use the official municipal portal","Click the SMS link","Reply to the sender","Trust any payment request"], ans: 0, exp: "Always verify bills on the official municipal website." },
      { q: "What is a common sign of a fake water bill?", opts: ["Urgent payment demand","Printed receipt","Customer ID","Bill number"], ans: 0, exp: "Scammers often create urgency to trick victims." },
      { q: "What should you do before paying?", opts: ["Verify with your municipality","Pay immediately","Share OTP","Ignore the bill forever"], ans: 0, exp: "Confirm the bill with your local water authority." }
    ]
  },

  {
    id: 154, icon: "🔥", title: "Gas Connection Scam", desc: "Fake gas connection verification and payment scam.", diff: "med", tag: "Utility Scam",
    url: "gas-connection-update.com", badge: "Connection Verification", amount: "₹999", amountLabel: "Renew Connection",
    fee: "Processing Fee", feeNote: "Required today",
    fields: [{"n":"consumer","p":"Consumer Number","t":"text"}],
    exposed: ["Consumer Information"],
    reveal: "Scammers demand fake gas verification payments.",
    flags: ["Unexpected call","Urgent payment","Fake website","Unknown agent"],
    tips: ["Contact official gas agency","Verify requests","Never pay unknown agents","Use official apps"],
    quiz: [
      { q: "What do gas connection scammers usually request?", opts: ["Verification payment","Gas refill schedule","Safety tips","Cylinder booking number"], ans: 0, exp: "Fake verification fees are commonly used in gas connection scams." },
      { q: "Who should you contact to verify your gas connection?", opts: ["Official gas distributor","Unknown caller","Random website","Social media page"], ans: 0, exp: "Always verify requests with your official gas agency." },
      { q: "What should you avoid?", opts: ["Official mobile app","Paying unknown agents","Customer care","Checking booking status"], ans: 1, exp: "Never make payments to unverified agents." }
    ]
  },

  {
    id: 155, icon: "⛽", title: "LPG Booking Scam", desc: "Fake LPG booking and payment websites.", diff: "med", tag: "Utility Scam",
    url: "lpg-booking-online.com", badge: "Book Cylinder", amount: "₹1,050", amountLabel: "Cylinder Booking",
    fee: "Advance Payment", feeNote: "Instant confirmation",
    fields: [{"n":"consumer","p":"Consumer ID","t":"text"}],
    exposed: ["Consumer Details"],
    reveal: "Fake LPG booking portals steal payments.",
    flags: ["Cheap cylinder offers","Unknown portal","Advance payment","No confirmation"],
    tips: ["Book via official distributor","Use official apps","Verify agency","Avoid unknown websites"],
    quiz: [
      { q: "Where should LPG cylinders be booked?", opts: ["Official distributor app or website","Unknown website","Random WhatsApp number","Telegram"], ans: 0, exp: "Always use the official LPG booking portal." },
      { q: "What is a common lure?", opts: ["Huge discounts on LPG cylinders","Weather alerts","Bank rewards","Insurance offers"], ans: 0, exp: "Scammers attract victims using fake discount offers." },
      { q: "What should you verify before paying?", opts: ["Distributor details","Logo color","Website font","Banner image"], ans: 0, exp: "Verify the LPG distributor before making payments." }
    ]
  },

  {
    id: 156, icon: "🏷️", title: "FASTag KYC Scam", desc: "Fake FASTag KYC update messages.", diff: "high", tag: "Phishing",
    url: "fastag-kyc-update.com", badge: "KYC Required", amount: "Update FASTag", amountLabel: "Avoid Suspension",
    fee: "Verification", feeNote: "Complete today",
    fields: [{"n":"mobile","p":"Registered Mobile","t":"tel"},{"n":"otp","p":"OTP","t":"text"}],
    exposed: ["Mobile Number","OTP"],
    reveal: "Fake KYC pages steal OTPs and banking credentials.",
    flags: ["Urgent KYC","Fake domain","OTP request","SMS link"],
    tips: ["Update only through official FASTag provider","Never share OTP","Ignore unknown links","Verify notifications"],
    quiz: [
      { q: "What do FASTag KYC scammers try to steal?", opts: ["OTP and banking details","Vehicle color","Driving experience","Fuel receipts"], ans: 0, exp: "Their goal is to steal OTPs and financial credentials." },
      { q: "Where should FASTag KYC be updated?", opts: ["Official FASTag provider website","SMS link","WhatsApp","Telegram"], ans: 0, exp: "Update KYC only through your official FASTag issuer." },
      { q: "Should you share OTP with anyone?", opts: ["No","Yes","Only over phone","Only through SMS"], ans: 0, exp: "Never share OTPs with anyone." }
    ]
  },

  {
    id: 157, icon: "🛣️", title: "Toll Payment Scam", desc: "Fake toll payment and FASTag deduction notifications.", diff: "high", tag: "Phishing",
    url: "toll-payment-alert.com", badge: "Pending Toll", amount: "₹250", amountLabel: "Pay Now",
    fee: "Penalty", feeNote: "Avoid fine",
    fields: [{"n":"vehicle","p":"Vehicle Number","t":"text"}],
    exposed: ["Vehicle Information"],
    reveal: "Scammers impersonate toll authorities to collect payments.",
    flags: ["Unexpected deduction","Urgent payment","Unknown website","SMS link"],
    tips: ["Check FASTag account","Use official apps","Verify transactions","Ignore suspicious messages"],
    quiz: [
      { q: "What is the safest way to verify a toll payment?", opts: ["Check your official FASTag account","Click the SMS link","Reply to the sender","Ignore all toll transactions"], ans: 0, exp: "Verify deductions using your official FASTag account." },
      { q: "What is a common scam tactic?", opts: ["Urgent unpaid toll notice","Discount coupon","Fuel cashback","Parking receipt"], ans: 0, exp: "Fake unpaid toll notices are used to steal payments." },
      { q: "What should you avoid?", opts: ["Official app","Unknown payment links","Customer support","Transaction history"], ans: 1, exp: "Never pay through unknown links." }
    ]
  },

  {
    id: 158, icon: "🎮", title: "Free Fire Diamond Scam", desc: "Fake websites promising free Free Fire Diamonds.", diff: "med", tag: "Gaming Scam",
    url: "freefire-free-diamonds.com", badge: "Unlimited Diamonds", amount: "50,000 Diamonds", amountLabel: "Free Claim",
    fee: "Login Required", feeNote: "Offer expires soon",
    fields: [{"n":"player","p":"Player ID","t":"text"},{"n":"password","p":"Game Password","t":"password"}],
    exposed: ["Gaming Account","Credentials"],
    reveal: "These scams steal gaming accounts instead of providing rewards.",
    flags: ["Free unlimited currency","Login required","Fake generator","Survey scam"],
    tips: ["Never share gaming passwords","Use official events","Enable 2FA","Avoid cheats"],
    quiz: [
      { q: "What is the goal of Free Fire Diamond scams?", opts: ["Steal gaming accounts","Improve game graphics","Increase FPS","Update the game"], ans: 0, exp: "Fake diamond generators steal account credentials." },
      { q: "Should you enter your game password on a free diamond website?", opts: ["No","Yes","Only once","If it looks professional"], ans: 0, exp: "Legitimate rewards never require your password." },
      { q: "Where should you get Diamonds?", opts: ["Official Garena events and stores","Random websites","Telegram bots","YouTube links"], ans: 0, exp: "Only use official channels to purchase or earn Diamonds." }
    ]
  },

  {
    id: 159, icon: "🎯", title: "PUBG UC Scam", desc: "Fake PUBG UC generator and reward scam.", diff: "med", tag: "Gaming Scam",
    url: "pubg-free-uc.com", badge: "Unlimited UC", amount: "10,000 UC", amountLabel: "Claim Free",
    fee: "Verification", feeNote: "Limited offer",
    fields: [{"n":"player","p":"Player ID","t":"text"},{"n":"password","p":"Account Password","t":"password"}],
    exposed: ["Gaming Credentials"],
    reveal: "Fake UC generators steal PUBG accounts and personal information.",
    flags: ["Free UC promise","Password request","Fake rewards","Survey completion"],
    tips: ["Buy UC only through official stores","Never share credentials","Avoid generators","Enable account security"],
    quiz: [
      { q: "What do fake PUBG UC generators usually steal?", opts: ["Game account credentials","Internet speed","Phone battery","Graphics settings"], ans: 0, exp: "They are designed to steal your PUBG account." },
      { q: "Where should UC be purchased?", opts: ["Official PUBG stores","Random generator websites","Telegram bots","Unknown links"], ans: 0, exp: "Always purchase UC through official platforms." },
      { q: "What is a major warning sign?", opts: ["Unlimited free UC promise","Official payment receipt","Verified account","Game update"], ans: 0, exp: "There are no legitimate unlimited UC generators." }
    ]
  },

  {
    id: 160, icon: "🎮", title: "Roblox Robux Scam", desc: "Miscellaneous cyber frauds.", diff: "med", tag: "Other",
    url: "freerobux-generator-v2.com", badge: "Free Robux Generator", amount: "10,000 R$", amountLabel: "Claim Your Free Robux",
    fee: "Generate Robux Now", feeNote: "Verification required to prevent bots",
    fields: [{"n":"username","p":"Roblox Username","t":"text"},{"n":"password","p":"Roblox Password","t":"password"}],
    exposed: ["Roblox Username","Roblox Password"],
    reveal: "You gave away your Roblox login credentials! Scam sites promising free Robux are designed to steal your account, sell your items, and use your account to scam your friends.",
    flags: ["Promising free Robux, which is not possible outside of the official platform","Asking for your password outside of roblox.com","Creating artificial urgency or \"Verification\" steps"],
    tips: ["Stay cautious. Verify the source before taking any action.","Never enter your Roblox password on any site other than the official Roblox website.","Enable 2-Step Verification on your Roblox account."],
    quiz: [
      { q: "Can you get free Robux from third-party generator websites?", opts: ["Yes, if you do a survey","No, they are always scams","Yes, but they take a week to arrive","Only if you share the link with 5 friends"], ans: 1, exp: "Robux can only be purchased officially through Roblox or earned through game development." },
      { q: "What is the best way to secure your Roblox account?", opts: ["Making your profile private","Never playing popular games","Enabling 2-Step Verification (2FA)","Changing your password every day"], ans: 2, exp: "2-Step Verification adds an extra layer of security that protects your account even if someone guesses your password." },
      { q: "If a friend sends you a link saying \"Click here for free Robux\", what should you do?", opts: ["Click it to see if it is real","Ask them if it worked for them","Do not click it, their account might be compromised","Send it to other friends to test"], ans: 2, exp: "Compromised accounts are often used to send phishing links to everyone on their friends list." }
    ]
  },

  {
    id: 161, icon: "👾", title: "Steam Wallet Scam", desc: "Miscellaneous cyber frauds.", diff: "med", tag: "Other",
    url: "steam-freewallet-codes.net", badge: "Free Steam Codes", amount: "$50.00", amountLabel: "Claim Wallet Funds",
    fee: "Claim Now", feeNote: "Account login required",
    fields: [{"n":"username","p":"Steam Account Name","t":"text"},{"n":"password","p":"Steam Password","t":"password"}],
    exposed: ["Steam Account Name","Steam Password"],
    reveal: "You gave away your Steam login credentials! Scammers build fake websites to steal your Steam account, sell your valuable in-game items (like CS:GO skins), and use your account to send phishing links to your friends list.",
    flags: ["Promising free Steam Wallet funds","Asking you to log in to a third-party site using your Steam credentials","Using fake urgency (like \"Codes remaining\")"],
    tips: ["Stay cautious. Verify the source before taking any action.","Never log into Steam from a link sent by a stranger or an unofficial website.","Enable Steam Guard Mobile Authenticator to protect your account."],
    quiz: [
      { q: "Can you get free Steam Wallet codes from third-party generator websites?", opts: ["Yes, if you do a survey","No, they are always scams designed to steal accounts","Yes, but they take weeks to arrive","Only if you share the link with 5 friends"], ans: 1, exp: "Steam Wallet funds can only be added through official purchases or physical gift cards." },
      { q: "What is the best way to secure your Steam account from being stolen?", opts: ["Making your profile private","Never adding friends","Enabling Steam Guard 2FA","Changing your password every year"], ans: 2, exp: "Steam Guard two-factor authentication (2FA) is the strongest protection against unauthorized access." },
      { q: "If a friend sends you a link saying \"Vote for my CS:GO team\" and it asks for your Steam login, what is likely happening?", opts: ["Your friend really needs your vote","Your friend's account is compromised and the link is phishing","It is an official tournament","Steam is doing a promotion"], ans: 1, exp: "Compromised accounts automatically spam phishing links to their friends list to steal more accounts." }
    ]
  },

  {
    id: 162, icon: "🎮", title: "PlayStation Gift Card Scam", desc: "Miscellaneous cyber frauds.", diff: "med", tag: "Other",
    url: "psn-card-generator.com", badge: "Free PSN Codes", amount: "$100.00", amountLabel: "Claim Gift Card",
    fee: "Sign In", feeNote: "Account login required",
    fields: [{"n":"email","p":"Sign-In ID (Email Address)","t":"email"},{"n":"password","p":"Password","t":"password"}],
    exposed: ["PSN Sign-In ID (Email)","PSN Password"],
    reveal: "You surrendered your PlayStation Network credentials! Fraudsters trick gamers with fake gift card generators to hijack their PSN accounts, make unauthorized purchases with linked credit cards, and steal their digital libraries.",
    flags: ["Promising free PSN gift cards or games","Requiring you to log in on a non-Sony website","Claiming a \"Generator\" can produce working store codes"],
    tips: ["Stay cautious. Verify the source before taking any action.","Never enter your PSN credentials on any site other than the official playstation.com or sony.com.","Enable 2-Step Verification on your PSN account."],
    quiz: [
      { q: "Can third-party \"code generators\" actually create valid PlayStation Store codes?", opts: ["Yes, if they are sponsored by Sony","No, they are always scams designed to steal accounts or install malware","Yes, but they are illegal","Only if you download their application"], ans: 1, exp: "Gift card codes are activated at the point of sale. Algorithms cannot generate working codes, and sites claiming to do so are always scams." },
      { q: "If a website asks for your PSN login to \"verify\" you for a giveaway, what should you do?", opts: ["Log in with a temporary password","Create a new account just for the giveaway","Do not log in; it is a phishing attempt to steal your account","Log in but remove your credit card first"], ans: 2, exp: "Legitimate giveaways do not require you to provide your password or log into third-party sites." },
      { q: "What is the most effective way to protect your PSN account from unauthorized access?", opts: ["Hiding your trophies","Enabling 2-Step Verification (2SV)","Using a complex username","Never buying games online"], ans: 1, exp: "2-Step Verification adds an essential layer of security, requiring a code from your mobile device when logging in from a new console." }
    ]
  },

  {
    id: 163, icon: "🟢", title: "Xbox Gift Card Scam", desc: "Miscellaneous cyber frauds.", diff: "med", tag: "Other",
    url: "xbox-live-rewards.net", badge: "Free Xbox Live Codes", amount: "$50.00", amountLabel: "Claim Gift Card",
    fee: "Sign In", feeNote: "Microsoft login required",
    fields: [{"n":"email","p":"Microsoft Account Email","t":"email"},{"n":"password","p":"Password","t":"password"}],
    exposed: ["Microsoft Account Email","Microsoft Password"],
    reveal: "You gave away your Microsoft account credentials! Scammers use fake Xbox code generators to steal Microsoft accounts, gaining access to your games, email, and connected payment methods.",
    flags: ["Promising free Xbox gift cards or Xbox Game Pass subscriptions","Asking you to log in on an unofficial website","Creating false scarcity (e.g. \"Unclaimed codes remaining\")"],
    tips: ["Stay cautious. Verify the source before taking any action.","Never enter your Microsoft password on any site other than the official login.live.com.","Enable Two-Step Verification on your Microsoft account."],
    quiz: [
      { q: "Why do scammers create fake Xbox gift card generators?", opts: ["To test website security","To steal Microsoft account credentials and payment information","To give away extra codes they bought","To promote their own games"], ans: 1, exp: "These sites are designed exclusively to phish for login details. Once they have your Microsoft account, they can make purchases or steal your personal data." },
      { q: "How can you tell if a Microsoft login page is real?", opts: ["By checking if it has the Microsoft logo","By looking at the web address (URL) for login.live.com or microsoft.com","By seeing if it asks for an email and password","By checking if the page is secure (padlock icon)"], ans: 1, exp: "Scammers can easily copy logos and get a padlock icon. The only true way to verify a login page is by checking the official domain name in the URL bar." },
      { q: "What should you do if you accidentally enter your password on a fake generator site?", opts: ["Wait and see if you get a gift card","Immediately go to the official Microsoft site, change your password, and check for unauthorized purchases","Close the browser and restart your computer","Email Microsoft to ask for a refund"], ans: 1, exp: "Time is critical. Change your password immediately to lock out the scammers before they can change it themselves." }
    ]
  },

  {
    id: 164, icon: "🎓", title: "Fake School Fee Payment", desc: "Fake admissions, scholarships, or coaching institutes.", diff: "med", tag: "Education",
    url: "national-edu-admissions.org", badge: "Admission Portal", amount: "$2,550.00", amountLabel: "Admission Fee Due",
    fee: "Pay Now", feeNote: "Seat allocation expires in 24 hours",
    fields: [{"n":"applicationNo","p":"Application Number","t":"text"},{"n":"dob","p":"Date of Birth","t":"date"},{"n":"cardNumber","p":"Credit Card Number","t":"text"}],
    exposed: ["Application Number","Date of Birth","Credit Card Details"],
    reveal: "You paid thousands of dollars to a fake institution! Scammers create convincing \"official\" education portals to pressure students into paying fake admission, coaching, or scholarship processing fees.",
    flags: ["Urgent deadlines like \"Seat expires in 24 hours\"","Unverified third-party websites claiming to represent official education boards","Directly asking for credit card details without standard institutional payment gateways"],
    tips: ["Verify university/coach credentials on official education ministry sites.","Never panic-pay under pressure of losing a seat without calling the institution directly.","Official institutions usually offer multiple traceable payment methods, not just direct credit card forms."],
    quiz: [
      { q: "Why do scammers put urgent 24-hour deadlines on fake admission portals?", opts: ["Because university servers clear data every 24 hours","To force victims into paying without giving them time to verify the website","Because that is how real universities do it","To test if the student is serious"], ans: 1, exp: "Artificial urgency is a classic social engineering tactic designed to induce panic and prevent critical thinking." },
      { q: "What is the best way to verify if an admission fee request is legitimate?", opts: ["Check if the website has a padlock icon","Look for an official logo on the payment page","Contact the university directly using a phone number from their official, known website","Ask friends on social media"], ans: 2, exp: "Scammers can easily copy logos and get SSL certificates (padlocks). Always verify by contacting the institution directly through known official channels." },
      { q: "Which of the following is a major red flag for an educational payment portal?", opts: ["The portal uses a .edu web address","The payment page only accepts direct credit card input on an unknown domain","The school sends an email confirming your application","The school asks for your student ID"], ans: 1, exp: "Legitimate institutions usually use verified, third-party payment gateways (like student portals or bank transfers) on recognized domains." }
    ]
  },

  {
    id: 165, icon: "📱", title: "Fake Parent WhatsApp Group", desc: "Fraudulent messages or calls via WhatsApp.", diff: "med", tag: "WhatsApp",
    url: "whatsapp-chat", badge: "New Message", amount: "$45.00", amountLabel: "Emergency Fee",
    fee: "Pay Now", feeNote: "Due today",
    fields: [{"n":"cardNumber","p":"Credit Card Number","t":"text"}],
    exposed: ["Credit Card Details"],
    reveal: "You paid a scammer imitating the school principal! Cybercriminals often infiltrate or create fake WhatsApp parent groups, using the names of real school officials to trick parents into paying fake \"emergency\" fees or field trip costs.",
    flags: ["A sudden, urgent request for money in a WhatsApp group","Payment links sent via chat instead of official school emails","The sender’s phone number does not match the official school directory"],
    tips: ["Ignore forwarded offers and urgent payment links in group chats.","Verify any unexpected fee requests directly with the school office by calling their official phone number.","Do not rely solely on the contact name displayed on WhatsApp; check the actual phone number."],
    quiz: [
      { q: "Why do scammers target parent WhatsApp groups?", opts: ["Because parents are usually wealthy","Parents are highly invested in their children and more likely to panic-pay for school-related \"emergencies\"","Because WhatsApp is unhackable","To get free homework answers"], ans: 1, exp: "Scammers exploit the emotional connection and responsibility parents feel, knowing they are likely to pay quickly if they think their child might miss out on a school activity." },
      { q: "If the \"Principal\" messages the parent group asking for urgent funds to a provided link, what is the safest response?", opts: ["Click the link and pay immediately to avoid late fees","Ask other parents in the chat to pay first","Ignore the link and call the school's official front office number to verify","Message the principal privately on WhatsApp to confirm"], ans: 2, exp: "Never use the provided link or rely solely on the chat to verify. Always contact the institution directly using a known, official communication channel." },
      { q: "How do scammers typically make their fake WhatsApp profiles look legitimate?", opts: ["By asking WhatsApp for a verification badge","By copying the school's logo and the principal's name as their profile picture and display name","By hacking the official school database","By sending a formal letter first"], ans: 1, exp: "Anyone can set their profile picture to a school logo and change their display name to \"Principal XYZ\". Always check the actual phone number against official records." }
    ]
  },

  {
    id: 166, icon: "📞", title: "Child Kidnap Emergency Scam", desc: "Scammer pretends to be from government, bank, or company.", diff: "hard", tag: "Impersonation",
    url: "mobile-call", badge: "Active Call", amount: "$2,000.00", amountLabel: "Ransom Demand",
    fee: "Transfer", feeNote: "Emergency situation",
    fields: [{"n":"routingNo","p":"Routing Number","t":"text"},{"n":"accountNo","p":"Account Number","t":"text"}],
    exposed: ["Transferred Funds","Bank Account Number"],
    reveal: "You wired money to a scammer! In \"virtual kidnapping\" scams, fraudsters call victims randomly, sometimes playing background audio of a screaming child, and demand immediate ransom. They force you to stay on the phone so you cannot verify the story.",
    flags: ["Caller demands money immediately via wire transfer, cryptocurrency, or gift cards","Caller insists you stay on the line and threatens harm if you hang up or call police","Caller is unwilling to let you speak directly to your loved one to verify their identity"],
    tips: ["Hang up immediately. Government agencies and real kidnappers operate differently.","Call or text your loved one directly from another phone line to verify they are safe.","Never wire money, send gift cards, or provide OTPs over the phone to unverified callers."],
    quiz: [
      { q: "What is the main reason a scammer demands you stay on the phone during a \"virtual kidnapping\"?", opts: ["To negotiate the price","To prevent you from calling your child or the police to verify the story","Because they want to trace your location","To record your voice"], ans: 1, exp: "By keeping you on the line, scammers prevent you from using your phone to check on your loved one or contact authorities, maintaining the illusion of the emergency." },
      { q: "If you receive a call claiming your child has been kidnapped, what is the best immediate action?", opts: ["Transfer a small amount of money to show cooperation","Stay on the line and drive to the police station","Hang up and immediately call or text your child directly","Ask the scammer for their bank details"], ans: 2, exp: "In almost all of these cases, the child is perfectly safe at school or work. Hanging up and contacting them directly instantly defeats the scam." },
      { q: "How do scammers typically collect money in virtual kidnapping or emergency scams?", opts: ["Through a legal escrow account","By asking for untraceable methods like wire transfers, cryptocurrency, or gift cards","By mailing an invoice to your house","By asking for a personal check"], ans: 1, exp: "Scammers require instant, untraceable, and irreversible payment methods so the victim cannot recover the funds once they realize it is a scam." }
    ]
  },

  {
    id: 167, icon: "💻", title: "Fake Online Tuition Scam", desc: "Fake admissions, scholarships, or coaching institutes.", diff: "med", tag: "Education",
    url: "elitetutors-pro.net", badge: "Online Coaching", amount: "$1.00", amountLabel: "Trial Fee",
    fee: "Book Trial", feeNote: "Limited slots available",
    fields: [{"n":"studentName","p":"Student Name","t":"text"},{"n":"email","p":"Parent Email","t":"email"},{"n":"cardNumber","p":"Credit Card Number","t":"text"}],
    exposed: ["Student Name","Email","Credit Card Details"],
    reveal: "You gave your credit card to a fake tutoring platform! Scammers often target parents seeking academic help for their children, luring them with unrealistic guarantees (\"Guaranteed A+\") and low initial fees, which result in stolen credit card details or hidden, recurring exorbitant charges.",
    flags: ["Unrealistic academic guarantees like \"Guaranteed A+ in two weeks\"","Extremely low trial fees that require full credit card details immediately","High pressure tactics like \"Limited slots available\" on digital coaching"],
    tips: ["Verify the credentials of online tutors on official education or independent review sites.","Read the fine print. Often, a \"$1 trial\" automatically enrolls you in an expensive monthly subscription.","Be suspicious of programs making unrealistic academic guarantees."],
    quiz: [
      { q: "Why do fake tuition sites often charge a very small amount, like $1, for a trial?", opts: ["To make education affordable","To get you to enter your credit card details, allowing them to steal it or charge hidden subscriptions","To pay for the server costs","To verify you are a real person"], ans: 1, exp: "The low fee is bait. Once they have your card details, they will either use them fraudulently or bury terms in the fine print that enroll you in a massive monthly subscription." },
      { q: "What is a major red flag when looking for online tutors?", opts: ["They ask what subject your child needs help with","They offer a free consultation over Zoom","They guarantee perfect grades or Ivy League admission","They provide references from past students"], ans: 2, exp: "No legitimate educational institution or tutor can guarantee perfect grades or admissions to top universities. This is a classic false promise used by scammers." },
      { q: "How can you protect yourself from hidden subscriptions on educational sites?", opts: ["Use a fake name when signing up","Read the terms and conditions carefully before entering any payment information","Always pay with a wire transfer","Only sign up on your phone"], ans: 1, exp: "Scammers hide subscription clauses in the fine print. Always read the terms, or better yet, use trusted and verified platforms." }
    ]
  },

  {
    id: 168, icon: "🤖", title: "AI Avatar Scam", desc: "AI-generated fake audio/video to impersonate someone.", diff: "hard", tag: "Deepfake",
    url: "zoom-video-call", badge: "Active Call", amount: "$5,000.00", amountLabel: "Requested Wire",
    fee: "Transfer", feeNote: "Urgent acquisition",
    fields: [{"n":"routingNo","p":"Vendor Routing Number","t":"text"},{"n":"accountNo","p":"Vendor Account Number","t":"text"}],
    exposed: ["Transferred Funds","Corporate Bank Details"],
    reveal: "You transferred corporate funds to a scammer! AI-generated video and audio deepfakes can now mimic the voice and face of executives or loved ones in real-time video calls, fooling employees into making massive unauthorized financial transfers.",
    flags: ["The person on the video call sounds slightly robotic or the lip-syncing is slightly off","The \"executive\" demands immediate, secret financial transfers that bypass standard company procedures","The caller refuses to answer impromptu, personal questions that only the real person would know"],
    tips: ["Always verify urgent financial requests through a second channel (e.g., call back on a known phone number).","Implement a multi-person approval process for all corporate wire transfers.","Ask a specific, non-public question to verify the identity of the person on the call."],
    quiz: [
      { q: "What is a common sign that a video call might be an AI deepfake?", opts: ["The video resolution is 4K","Unnatural blinking patterns and slight delays in lip-syncing","They use a virtual background","They are wearing a suit"], ans: 1, exp: "While deepfake technology is improving, real-time generation often results in subtle visual artifacts, robotic eye movements, or audio-visual desync." },
      { q: "Your CEO calls you on video and asks you to immediately wire $50,000 to a secret vendor, bypassing standard approvals. What should you do?", opts: ["Wire the money immediately because they are the CEO","Ask another employee for their password to do it faster","Hang up or pause the request, and call the CEO directly using their known phone number to verify","Record the video call"], ans: 2, exp: "Never bypass standard security protocols for \"urgent\" or \"secret\" requests, even if they appear to come from the CEO. Always verify out-of-band." },
      { q: "Which of the following makes it easier for scammers to create convincing deepfakes?", opts: ["The victim using a strong password","The target having a large amount of publicly available video and audio online (like speeches or podcasts)","The target not having a social media account","Using a flip phone"], ans: 1, exp: "Scammers train their AI models using publicly available data. Executives, politicians, and influencers who speak publicly online are easiest to clone." }
    ]
  },

  {
    id: 169, icon: "🏙️", title: "Metaverse Property Scam", desc: "Fake investment opportunities promising high returns.", diff: "med", tag: "Investment",
    url: "metarealty-mint.io", badge: "DApp Sync", amount: "0.5 ETH", amountLabel: "Minting Fee",
    fee: "Mint Plot", feeNote: "Only 2 plots remaining",
    fields: [{"n":"walletAddress","p":"Wallet Address","t":"text"},{"n":"privateKey","p":"Private Key","t":"password"}],
    exposed: ["Crypto Wallet Address","Wallet Private Key","Total Wallet Balance"],
    reveal: "You gave a scammer full control of your crypto wallet! Fraudsters create hype around fake Metaverse properties or NFT projects, promising huge returns (\"1000x\"). They then use fake \"wallet sync\" portals to steal your private keys or seed phrases, instantly draining your account.",
    flags: ["Promises of guaranteed, astronomically high returns (e.g., 1000x)","Artificial scarcity to induce FOMO (Fear Of Missing Out) like \"Only 2 plots remaining!\"","Asking for your Private Key or Seed Phrase to \"verify\" or \"sync\" a transaction"],
    tips: ["Verify with financial regulators. Don't trust unsolicited investment tips.","Never, under any circumstances, share your Private Key or Seed Phrase with anyone or any website.","If an investment promises massive returns with zero risk, it is almost certainly a scam."],
    quiz: [
      { q: "Why do crypto and Metaverse scammers emphasize that \"only a few plots are left\"?", opts: ["Because the server can only hold a few users","To create FOMO (Fear Of Missing Out) so victims invest quickly without doing research","To keep the community small and exclusive","Because real estate is limited on the internet"], ans: 1, exp: "Artificial scarcity is a psychological trick designed to make you panic-buy and ignore obvious red flags." },
      { q: "What is the absolute golden rule of cryptocurrency wallets?", opts: ["Always use a strong password for your trading app","Never share your Private Key or Seed Phrase with ANYONE, even a \"support agent\" or \"sync portal\"","Keep all your crypto in one single wallet","Connect your wallet to as many dApps as possible"], ans: 1, exp: "Your Private Key or Seed Phrase is the master key to your funds. If you enter it on a website, the owners of that website have full control over your money." },
      { q: "You see a Facebook ad for a Metaverse property claiming guaranteed 50x returns in one year. What should you do?", opts: ["Invest a small amount just in case it is real","Ask your friends if they have heard of it","Ignore it. Guaranteed high returns with low risk do not exist.","Take out a loan to maximize profits"], ans: 2, exp: "Any investment that guarantees extremely high returns is a scam. All investments carry risk, and regulators crack down on real companies making guaranteed promises." }
    ]
  },

  {
    id: 170, icon: "🏦", title: "Fake Digital Rupee Wallet", desc: "Cryptocurrency scams, fake exchanges, or investment fraud.", diff: "med", tag: "Crypto",
    url: "e-rupee-gov.net", badge: "Official CBDC App", amount: "₹2,000", amountLabel: "Bonus Offer",
    fee: "Claim Now", feeNote: "Limited time registration",
    fields: [{"n":"cardNumber","p":"Debit Card Number","t":"text"},{"n":"atmPin","p":"ATM PIN","t":"password"}],
    exposed: ["Debit Card Details","ATM PIN","Bank Account Balance"],
    reveal: "You gave your debit card and PIN to a fake banking app! Scammers exploit the launch of new financial technologies (like the Digital Rupee or CBDCs) to create fake apps that look official, tricking users into handing over their core banking credentials under the guise of KYC or a sign-up bonus.",
    flags: ["An app offering free money or a high sign-up bonus just for registering","An app asking for your ATM PIN or UPI PIN (which should never be shared)","An unofficial URL pretending to be a government or bank portal (e.g., .net or .org instead of .gov.in)"],
    tips: ["Invest only through regulated exchanges and download official apps from your actual bank.","Never enter your ATM PIN or UPI PIN on any website to \"receive\" money.","Avoid guaranteed returns or free cash bonuses; if it sounds too good to be true, it is."],
    quiz: [
      { q: "Why do scammers create fake apps for new technologies like the Digital Rupee?", opts: ["To help the government spread awareness","To exploit public confusion and excitement around new financial tech to steal banking details","Because building an app is fun","To give away their own money"], ans: 1, exp: "When a new technology launches, people are curious but uneducated about how it works. Scammers use this confusion to create convincing fakes." },
      { q: "Which of the following is a detail you should NEVER have to provide to \"receive\" money or verify an account?", opts: ["Your name","Your phone number","Your secret ATM PIN or UPI PIN","Your email address"], ans: 2, exp: "A PIN is exclusively used by YOU to authorize a debit or transfer FROM your account. You never need to enter it to receive money." },
      { q: "How can you verify if a Digital Rupee (or banking) app is legitimate?", opts: ["Search for it on social media","Download whatever is sent to you in a WhatsApp forward","Check your official bank's website for links to their authorized digital currency apps","Look for the app with the most colorful logo"], ans: 2, exp: "Official CBDC and banking apps are directly tied to regulated banks. Always go through your bank’s official, verified website to find the correct app." }
    ]
  },

  {
    id: 171, icon: "🏛️", title: "CBDC Wallet Scam", desc: "Cryptocurrency scams, fake exchanges, or investment fraud.", diff: "med", tag: "Crypto",
    url: "cbdc-global-exchange.io", badge: "Regulatory Migration", amount: "ALL ASSETS", amountLabel: "Migration Limit",
    fee: "Migrate Assets", feeNote: "Deadline approaching",
    fields: [{"n":"walletType","p":"Wallet Type","t":"text"},{"n":"seedPhrase","p":"Seed Phrase","t":"password"}],
    exposed: ["Crypto Wallet Seed Phrase","Full Wallet Balance"],
    reveal: "You gave your wallet seed phrase to a scammer! Scammers use fear and urgency about new \"regulations\" (like forced CBDC migration or account freezes) to panic users into entering their recovery phrases on fake websites, instantly losing all their crypto.",
    flags: ["Urgent deadlines threatening to freeze or seize your assets if you don't act immediately","Claims that decentralized crypto must be \"migrated\" to a CBDC network via a random website","Asking for your 12- or 24-word recovery seed phrase"],
    tips: ["Central Banks do not force you to migrate private wallets via third-party websites.","Never enter your seed phrase anywhere except directly in the official wallet app (like MetaMask) when restoring it.","Ignore threats about account freezing; always verify with official sources."],
    quiz: [
      { q: "Why do scammers often use urgent deadlines in crypto scams?", opts: ["To process transactions faster on the blockchain","To create panic, preventing the victim from thinking critically or verifying the claim","Because the government requires strict deadlines","To save on server hosting costs"], ans: 1, exp: "Urgency is a key component of social engineering. Panic forces mistakes." },
      { q: "Can a government or Central Bank force you to type your decentralized wallet seed phrase into a website?", opts: ["Yes, it is part of new international KYC laws","Yes, but only for balances over $10,000","No. Entering your seed phrase gives full control to whoever owns the website. Regulators will never ask for this.","Yes, if you use Bitcoin"], ans: 2, exp: "Your seed phrase is your private key. No legitimate entity, regulatory body, or support team will EVER ask for it." },
      { q: "What should you do if you receive an email threatening to freeze your crypto wallet due to \"CBDC compliance\"?", opts: ["Click the link and migrate immediately","Forward it to your friends so they can migrate too","Enter a fake seed phrase just to see what happens","Ignore it, as it is a phishing scam. Check official news sources independently if concerned."], ans: 3, exp: "Phishing emails often use regulatory buzzwords like \"CBDC compliance\" to look official. Ignore them and never click their links." }
    ]
  },

  {
    id: 172, icon: "⚡", title: "Fake EV Charging App", desc: "Fake bills for electricity, gas, water, etc.", diff: "med", tag: "Utility",
    url: "ev-utility-update.net", badge: "Bill Warning", amount: "₹12.50", amountLabel: "Update Fee",
    fee: "Pay Now", feeNote: "Avoid disconnection",
    fields: [{"n":"cardNumber","p":"Card Number","t":"text"},{"n":"upiPin","p":"UPI PIN","t":"password"}],
    exposed: ["Payment Credentials","Bank Account Balance"],
    reveal: "You gave a scammer your payment credentials! Scammers send fake SMS warnings claiming your electricity, EV charger, or gas connection will be cut off tonight unless you click a link and pay a small \"update fee.\" The link goes to a fake portal designed to steal your UPI PIN or card details.",
    flags: ["Urgent SMS threatening immediate disconnection of a utility service","The SMS contains a generic link (.net, .com) instead of your official provider's app or website","Asking for a UPI PIN to \"update\" a bill (UPI PINs are only used to transfer money out)"],
    tips: ["Always check your bills directly on your official utility provider’s app or website.","Never pay a bill by clicking a link sent via an unsolicited SMS or WhatsApp message.","Remember that legitimate utility companies do not threaten immediate disconnection via text message."],
    quiz: [
      { q: "You receive an SMS saying your electricity will be disconnected at 9:30 PM today. What should you do?", opts: ["Click the link in the SMS and pay the small fee to be safe","Call the phone number provided in the text message","Ignore the message, and check your official utility app or website independently to verify your bill status","Reply to the SMS with your account number"], ans: 2, exp: "Never trust panic-inducing texts. Always go directly to the official source to check your account status." },
      { q: "Why do fake utility bill scams often ask for a very small amount, like ₹10 or ₹15?", opts: ["Because the scammers feel bad stealing large amounts","To make the victim think it is just a harmless \"processing fee\", lowering their guard while stealing their UPI PIN or card details","Because that is the actual cost of electricity","To test if your internet connection is working"], ans: 1, exp: "The small fee is just bait. The real goal is to capture your card details, CVV, or UPI PIN to drain your account later." },
      { q: "Is it ever safe to enter your UPI PIN on a website to \"receive\" an update or verify a bill?", opts: ["Yes, if it is a government website","Yes, if the amount is very small","No, UPI PINs are exclusively used to send money or authorize deductions from your account","Yes, but only during business hours"], ans: 2, exp: "You NEVER need to enter a UPI PIN to receive money, receive an update, or verify an account. Entering a UPI PIN always authorizes a payment." }
    ]
  },

  {
    id: 173, icon: "🌱", title: "Fake Carbon Credit Investment", desc: "Fake investment opportunities promising high returns.", diff: "med", tag: "Investment",
    url: "ecocarbon-yields.com", badge: "Green Tech", amount: "₹50,000", amountLabel: "Block Price",
    fee: "Invest Now", feeNote: "Guaranteed 45% ROI",
    fields: [{"n":"customerId","p":"Net Banking ID","t":"text"},{"n":"password","p":"Net Banking Password","t":"password"}],
    exposed: ["Net Banking User ID","Net Banking Password","Full Bank Balance"],
    reveal: "You gave your bank login credentials to a scammer! Fraudsters use buzzwords like \"Green Energy,\" \"Carbon Credits,\" or \"ESG\" to sound legitimate. They promise guaranteed, massive returns (like 45% ROI) and create fake portals that look like secure payment gateways to harvest your net banking details.",
    flags: ["Promises of guaranteed, incredibly high returns on \"new\" asset classes (like Carbon Credits)","Pressuring you to invest quickly by claiming there are \"only 4 blocks left\"","A third-party investment portal asking for your raw net banking login ID and password directly on their site"],
    tips: ["Always verify investments with SEBI or official financial regulators. Do not trust unsolicited investment tips.","Real payment gateways redirect you to your bank's actual URL. Never type your bank password into a random website.","There is no such thing as a \"guaranteed\" 45% return in any real investment."],
    quiz: [
      { q: "Why do scammers use themes like \"Carbon Credits\" or \"Green Energy\" for fake investments?", opts: ["Because scammers care about the environment","Because they are popular buzzwords that make the investment sound modern, sophisticated, and legitimate","Because carbon credits are easy to fake","Because it is illegal to scam people using gold or stocks"], ans: 1, exp: "Scammers frequently latch onto trending topics (Crypto, AI, Carbon Credits) to sound knowledgeable and trick victims into thinking they are getting in early on a huge opportunity." },
      { q: "What is a massive red flag on the payment screen of this investment portal?", opts: ["It asks you to select your bank from a list","It displays the total amount of ₹50,000","It asks you to type your Net Banking Customer ID and Password directly into their website rather than redirecting you to your bank's official site","It uses 256-bit encryption"], ans: 2, exp: "Legitimate payment gateways (like Razorpay, BillDesk) will redirect you to your bank’s official URL to log in. You should never type your bank password into an unauthorized third-party webpage." },
      { q: "An investment promises a \"guaranteed 45% annual return\" because of \"new government mandates.\" What should you do?", opts: ["Borrow money to invest as much as possible","Recognize it as a scam, as all high-yield investments carry risk and \"guarantees\" of 45% are universally fraudulent","Share the opportunity with family members only","Invest a small amount first to see if it works"], ans: 1, exp: "The promise of extremely high, guaranteed returns with zero risk is the universal hallmark of a Ponzi scheme or investment fraud." }
    ]
  },

  {
    id: 174, icon: "♻️", title: "Fake Green Energy Subsidy", desc: "Various financial frauds like tax refunds, GST, etc.", diff: "med", tag: "Financial",
    url: "green-subsidy-india.in", badge: "Govt. Scheme", amount: "₹1,250", amountLabel: "GST / Processing Fee",
    fee: "Pay GST", feeNote: "Claim ₹25,000",
    fields: [{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"upiPin","p":"UPI PIN","t":"password"}],
    exposed: ["UPI PIN","Aadhaar Details","Bank Account Balance"],
    reveal: "You paid a scammer to receive a fake subsidy! Scammers create fake government portals offering non-existent grants, subsidies, or tax refunds. They exploit people by asking them to pay an \"advance fee\" (like GST, legal fee, or processing fee) via UPI to unlock a much larger, imaginary sum.",
    flags: ["A government website asking for an \"advance fee\" or \"GST payment\" before releasing a grant or subsidy","Asking for your UPI PIN to process a tax refund or subsidy (UPI PINs only transfer money out)","A website URL that sounds official but is not an actual \".gov.in\" domain (e.g., .in, .com, .org)"],
    tips: ["Always use official \".gov.in\" websites for government grants, tax refunds, and GST.","The government will never ask you to pay an advance processing fee or GST to release a subsidy.","You never need to enter a UPI PIN to receive money in your account."],
    quiz: [
      { q: "Why do fake government portals often ask you to pay a small \"processing fee\" or \"GST\" to receive a subsidy?", opts: ["Because the government has outsourced tax collection to them","It is an advance-fee scam; you pay the fee, but the larger subsidy never arrives","To cover the server costs of the portal","To ensure your bank account is active"], ans: 1, exp: "This is a classic \"advance-fee\" fraud. The victim is lured by a large sum of money but must pay a smaller fee upfront. The large sum does not exist." },
      { q: "Which of the following website URLs is most likely to be a legitimate Indian government portal?", opts: ["www.subsidy-india.org","www.pm-scheme.com","www.mre.gov.in","www.india-gov-subsidy.net"], ans: 2, exp: "Legitimate government websites in India use the \".gov.in\" or \".nic.in\" domains. Scammers use .com, .org, or .in and add official-sounding words." },
      { q: "Is it ever required to enter your UPI PIN to accept a tax refund or government subsidy?", opts: ["Yes, to verify your identity","Yes, if the amount is over ₹10,000","No, UPI PINs are only used to authorize money LEAVING your account","Yes, the tax department requires it"], ans: 2, exp: "A UPI PIN is your authorization to send money to someone else. You never need it to receive funds." }
    ]
  },

  {
    id: 175, icon: "🚁", title: "Fake Drone Registration", desc: "Miscellaneous cyber frauds.", diff: "med", tag: "Other",
    url: "uav-registry.org", badge: "Licensing Fraud", amount: "₹2,500", amountLabel: "Registration Fee",
    fee: "Register Now", feeNote: "Mandatory Compliance",
    fields: [{"n":"cardNumber","p":"Card Number","t":"text"},{"n":"cvv","p":"CVV","t":"password"}],
    exposed: ["Credit Card Number","CVV","Drone Serial Number"],
    reveal: "You paid a scammer to register your drone! Scammers exploit the growing popularity of drones by creating fake regulatory websites. They send phishing emails or run ads claiming you must pay an urgent fee to avoid severe legal penalties. The goal is to steal your credit card details.",
    flags: ["Urgent warnings threatening confiscation or massive fines if you do not comply within 48 hours","A website charging an exorbitant \"processing fee\" for a registration process that is often much cheaper or free via official government portals","Using fear of \"new airspace laws\" to pressure victims into immediate payment"],
    tips: ["Always verify regulations and register drones only on the official government civil aviation portal (e.g., DigitalSky in India).","Do not click links in unsolicited emails or SMS messages warning about drone confiscation.","Official government agencies do not typically use high-pressure tactics or 48-hour deadlines for routine registrations."],
    quiz: [
      { q: "Why do scammers often use threats of \"confiscation\" or \"heavy fines\" in compliance scams?", opts: ["Because they are enforcing actual laws","To trigger a fear response, making the victim act quickly without verifying the source","Because it increases their search engine ranking","To help the government collect taxes"], ans: 1, exp: "Fear and urgency are the primary tools of social engineering. They bypass critical thinking." },
      { q: "Where is the ONLY place you should register a drone or check compliance laws?", opts: ["A link sent to you via a WhatsApp forward","The official government civil aviation portal (e.g., .gov.in domain)","Any website that appears at the top of a Google search","The website of the company that sold you the drone"], ans: 1, exp: "Regulatory compliance should only ever be done through official, verified government portals. Third-party sites often charge massive markup fees or steal data." },
      { q: "You receive an email claiming to be from the \"UAV Registration Authority\". What should be your first step?", opts: ["Pay the fee immediately to avoid trouble","Reply to the email with your drone's serial number","Independently search for the official civil aviation authority website to verify if this requirement is real","Forward the email to other drone owners"], ans: 2, exp: "Always verify unsolicited claims by independently navigating to the official source, rather than clicking links provided in the message." }
    ]
  },

  {
    id: 176, icon: "🏙️", title: "Fake Smart City Scheme", desc: "Various financial frauds like tax refunds, GST, etc.", diff: "med", tag: "Financial",
    url: "smart-city-grants.in", badge: "Govt. Fraud", amount: "₹5,500", amountLabel: "GST/Processing Fee",
    fee: "Pay GST", feeNote: "Claim ₹10,00,000",
    fields: [{"n":"accountNumber","p":"Account Number","t":"text"},{"n":"otp","p":"Bank OTP","t":"password"}],
    exposed: ["Bank Account Number","Bank OTP","PAN Details"],
    reveal: "You paid an advance fee to a scammer! Scammers create fake government websites (like \"Smart City Grants\") offering massive loans or funds. They ask for an upfront \"GST\" or \"Processing Fee\" via OTP authorization to release the funds. In reality, they are just stealing your advance payment, and the grant doesn't exist.",
    flags: ["A government website asking for an \"advance fee\" or \"GST payment\" before releasing a grant","Asking for your Bank OTP to \"authorize a GST deduction\" (OTPs authorize deductions, but real governments don't ask for them this way)","The promise of a massive amount (₹10 Lakhs) for simply entering your PAN number"],
    tips: ["Always use official \".gov.in\" websites for government grants, tax refunds, and GST.","The government will NEVER ask you to pay an advance GST fee via OTP to release a subsidy or grant.","If it sounds too good to be true (free 10 Lakhs for a PAN card), it is a scam."],
    quiz: [
      { q: "Why do fake government portals ask you to pay a \"GST fee\" before releasing a large grant?", opts: ["Because the government requires GST on all transactions","It is an advance-fee scam; you pay the fee, but the larger grant never arrives","To verify that your bank account is active","To pay for the website hosting"], ans: 1, exp: "This is the core of an \"advance-fee\" fraud. Scammers dangle a large sum of money to trick you into paying a smaller fee upfront." },
      { q: "Is it safe to provide a bank OTP to authorize a \"GST deduction\" for a government scheme?", opts: ["Yes, if the website looks official","Yes, but only if the amount is small","No, sharing an OTP authorizes a transaction that you cannot reverse. Governments do not collect GST this way.","Yes, if you applied for the scheme"], ans: 2, exp: "Never share an OTP. It gives scammers direct authorization to deduct funds from your account." },
      { q: "How can you verify if a \"Smart City Grant\" portal is a legitimate Indian government website?", opts: ["Check if it has a picture of the Prime Minister","Check if the URL ends in \".gov.in\" or \".nic.in\"","Call the phone number listed on the website","Check if it requires an Aadhaar or PAN card"], ans: 1, exp: "Official Indian government portals will almost always use the .gov.in or .nic.in domains. Anyone can use a .in or .com domain." }
    ]
  },

  {
    id: 177, icon: "🆔", title: "Fake Digital Identity Verification", desc: "Fake communication (email/SMS) tricking you into revealing credentials.", diff: "med", tag: "Phishing",
    url: "uidai-digital-verify.com", badge: "Credential Theft", amount: "Identity", amountLabel: "Risk",
    fee: "Verify Now", feeNote: "Account Suspension Risk",
    fields: [{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"emailPassword","p":"Email Password","t":"password"}],
    exposed: ["Aadhaar Number","Email Password","Personal Identity Data"],
    reveal: "You gave a scammer your Aadhaar number and your email password! Scammers send phishing emails claiming your digital identity, Aadhaar, or PAN will be \"suspended\" unless you click a link and verify your details. They trick you into entering passwords on a fake site, gaining access to your real accounts.",
    flags: ["An email claiming your government ID will be \"suspended\" within 24 hours (a tactic to create panic)","A link in an email that takes you to a non-government URL (e.g., .com instead of .gov.in)","A website asking for your email password to \"verify\" a government ID (governments NEVER need your email password)"],
    tips: ["Never click links in unsolicited emails or SMS messages regarding your identity or bank accounts. Type the official URL manually.","No government agency will ever ask for your email password or social media password.","If you are worried about your Aadhaar or PAN status, log in directly through the official UIDAI or Income Tax portal."],
    quiz: [
      { q: "Why do phishing emails often threaten that your account or ID will be \"suspended within 24 hours\"?", opts: ["Because the system automatically deletes accounts every night","To create a sense of urgency and panic, so you click the link without checking if it is real","Because they want to give you enough time to respond","To help you manage your time better"], ans: 1, exp: "Urgency is a massive red flag. Scammers want you to panic so you don't notice the fake sender email or the fake website URL." },
      { q: "You click a link in an email about your Aadhaar card, and the website asks for your Gmail password to \"cross-verify\" your identity. What should you do?", opts: ["Enter your password, since it says it is required","Enter a fake password to see what happens","Close the page immediately. No legitimate website will ever ask for the password to your personal email account.","Call Google support to complain"], ans: 2, exp: "Your email password is the master key to your digital life. No government agency, bank, or company will ever need it to verify your identity." },
      { q: "What is the safest way to check if an email claiming your \"Aadhaar is out of sync\" is real?", opts: ["Click the link in the email and see if the website looks professional","Reply to the email asking for proof","Ignore the email, open your browser, and manually type in the official UIDAI website URL (uidai.gov.in) to check your status","Forward it to your bank"], ans: 2, exp: "Never trust the links in an email. Manually navigating to the known, official website is the only way to be completely safe." }
    ]
  },

  {
    id: 178, icon: "👁️", title: "Fake Biometric Update", desc: "Fake communication (email/SMS) tricking you into revealing credentials.", diff: "med", tag: "Phishing",
    url: "uidai-home-biometric.in", badge: "Credential Theft", amount: "₹50", amountLabel: "Booking Fee",
    fee: "Book Now", feeNote: "Avoid Deactivation",
    fields: [{"n":"aadhaar","p":"Aadhaar Number","t":"text"},{"n":"cardNumber","p":"Card Number","t":"text"}],
    exposed: ["Aadhaar Number","Credit Card Number","CVV"],
    reveal: "You paid a scammer and exposed your card details! Scammers use the real requirement (updating old biometrics) to create fake urgency. They send SMS alerts offering a fake \"home visit\" service for a tiny fee of ₹50. Their goal isn't the ₹50; it's to capture your Aadhaar and Credit Card details.",
    flags: ["An SMS warning that your Aadhaar will be \"deactivated tonight\" (UIDAI gives ample time and official notices, not sudden texts)","A non-official URL offering UIDAI services (.in instead of .gov.in)","Charging a fee online via a random link for a \"doorstep biometric service\""],
    tips: ["Always verify biometric update requirements and book appointments only on the official UIDAI portal (uidai.gov.in).","Do not click links in SMS messages threatening sudden deactivation of PAN or Aadhaar.","Remember that scammers often ask for a very small amount (like ₹50) to lower your defenses while stealing your card details."],
    quiz: [
      { q: "Why do scammers ask for a very small fee (like ₹50) in phishing scams?", opts: ["To test if your card works","Because they don't want to steal too much","To lower your suspicion so you willingly enter your full credit card details and CVV","To pay for the SMS they sent you"], ans: 2, exp: "The small fee is just bait. Once you enter your card number, CVV, and potentially an OTP, they use those details to authorize a much larger fraudulent transaction." },
      { q: "You get an SMS saying your Aadhaar will be deactivated tonight. What is the best action?", opts: ["Click the link and pay the fee immediately to stay safe","Ignore the SMS, open your browser, and visit the official uidai.gov.in website to check your status","Reply to the SMS with your Aadhaar number to confirm","Call the police"], ans: 1, exp: "Urgent threats via SMS are almost always scams. Always verify the claim by independently visiting the official government website." },
      { q: "Which of these is a common indicator of a phishing SMS?", opts: ["It addresses you by your full name","It contains a link that does NOT end in .gov.in or .nic.in","It is sent during business hours","It asks you to visit an official Aadhaar Seva Kendra"], ans: 1, exp: "Scam links often try to look official (e.g., uidai-update.in) but they do not use the restricted .gov.in domain that real Indian government sites use." }
    ]
  },

  {
    id: 179, icon: "⚛️", title: "Fake Quantum Investment", desc: "Fake investment opportunities promising high returns.", diff: "hard", tag: "Financial",
    url: "quantum-ai-wealth.io", badge: "Investment Scam", amount: "₹15,000", amountLabel: "Initial Deposit",
    fee: "Deposit Funds", feeNote: "Guaranteed 500% Return",
    fields: [{"n":"accountNumber","p":"Account Number","t":"text"},{"n":"ifsc","p":"IFSC Code","t":"text"},{"n":"panNumber","p":"PAN Number","t":"text"}],
    exposed: ["Bank Account Number","IFSC Code","PAN Details"],
    reveal: "You deposited money into a fake investment platform! Scammers use buzzwords like \"Quantum\", \"AI\", or \"Algorithmic Trading\" to create high-tech-looking dashboards. They show fake, impossibly high returns to trick you into depositing real money. Once you deposit, the money is gone, and the \"returns\" on the screen mean nothing.",
    flags: ["Promising \"guaranteed\" astronomical returns (e.g., 500% or ₹2.5 Lakhs a week)","Using complex tech buzzwords (Quantum AI) to sound legitimate but failing to explain how the money is actually made","A platform that is not registered with SEBI or any known financial regulator"],
    tips: ["If an investment guarantees huge returns with zero risk, it is almost certainly a scam.","Always check if the trading platform or broker is registered with SEBI (Securities and Exchange Board of India).","Don't be fooled by high-tech looking websites; scammers can easily build dashboards with fake numbers."],
    quiz: [
      { q: "Why do scammers use buzzwords like \"Quantum AI\" or \"Algorithmic Arbitrage\"?", opts: ["Because that is the legal name of the technology","To confuse you and make the scam seem like a highly sophisticated, exclusive opportunity","Because SEBI requires those terms for new investments","To make the website load faster"], ans: 1, exp: "Buzzwords are used to create an illusion of complexity and authority, making you less likely to question the unrealistic returns." },
      { q: "A platform promises \"guaranteed minimum returns of 500%\". What is the reality?", opts: ["It is a great, low-risk opportunity","You should only invest half your savings","In financial markets, high returns always come with high risk; \"guaranteed\" astronomical returns are the hallmark of a scam","It is a government-backed scheme"], ans: 2, exp: "There are no guaranteed 500% returns in legitimate finance. Risk and reward are always linked." },
      { q: "What is the most important check before depositing money into an online trading platform in India?", opts: ["Checking if the website looks futuristic","Seeing if your friends are using it","Verifying that the platform or broker is registered with SEBI","Checking if they have a WhatsApp support number"], ans: 2, exp: "SEBI registration is mandatory for legitimate securities trading in India. If they aren't registered, they are operating illegally." }
    ]
  },

  {
    id: 180, icon: "👮", title: "Fake Cyber Complaint Portal", desc: "Scammer pretends to be from government, bank, or company.", diff: "med", tag: "Impersonation",
    url: "cyber-recovery-india.com", badge: "Recovery Fraud", amount: "₹100", amountLabel: "E-FIR Fee",
    fee: "Pay E-FIR Fee", feeNote: "To recover funds",
    fields: [{"n":"accountNumber","p":"Account Number","t":"text"},{"n":"otp","p":"Bank OTP","t":"password"}],
    exposed: ["Bank Account Number","Bank OTP"],
    reveal: "You gave a scammer your bank OTP! This is a devastating \"Recovery Scam\". Victims who have already lost money to a scam search online for \"cyber crime complaint\" and land on fake sites. The scammers impersonate cyber police or \"recovery agents\", promising to get your money back for a small processing fee. Instead, they use your OTP to steal whatever money you have left.",
    flags: ["A website claiming to be the cyber police but asking for an \"E-FIR fee\" or \"processing fee\" to recover funds","Asking for a Bank OTP to \"verify your account\" (OTPs authorize deductions, not identity verification)","Links or search ads that do NOT direct you to the official government portal (cybercrime.gov.in)"],
    tips: ["The only official cybercrime reporting portal in India is cybercrime.gov.in.","The government and police NEVER charge a fee to file an FIR or a cyber complaint.","Be extremely cautious of \"recovery agents\" or lawyers who contact you online promising to recover scammed money for an upfront fee."],
    quiz: [
      { q: "You lost money to a scam and found a \"Cyber Police Recovery Unit\" website offering to get it back for a ₹500 fee. What is this?", opts: ["A legitimate government service","A \"Recovery Scam\" targeting people who have already been scammed","A private detective agency","A standard legal process"], ans: 1, exp: "Scammers specifically target previous victims because they are desperate. Law enforcement does not charge a fee to investigate cybercrime." },
      { q: "Why is it dangerous to provide a bank OTP to a website claiming they need it to \"deposit recovered funds\"?", opts: ["It might slow down the deposit","Because the bank might flag the transaction","Because an OTP is only used to AUTHORIZE money leaving your account, never to receive money","Because OTPs expire quickly"], ans: 2, exp: "This is a fundamental rule: you never need an OTP to receive money. Giving an OTP to anyone allows them to withdraw funds from your account." },
      { q: "What is the correct, official URL for reporting cybercrime in India?", opts: ["www.cyber-police-india.com","www.india-cyber-recovery.org","www.cybercrime.gov.in","www.report-scams.in"], ans: 2, exp: "The official portal is managed by the Ministry of Home Affairs and uses the secure .gov.in domain. All other similar-sounding domains are likely scams." }
    ]
  },

  {
    id: 181, icon: "🛡️", title: "Fake Cyber Insurance", desc: "Miscellaneous cyber frauds.", diff: "med", tag: "Other",
    url: "cybershield-protect-india.com", badge: "Insurance Fraud", amount: "₹999", amountLabel: "Annual Premium",
    fee: "Buy Policy", feeNote: "100% Scam Protection",
    fields: [{"n":"cardNumber","p":"Card Number","t":"text"},{"n":"cvv","p":"CVV","t":"password"}],
    exposed: ["Credit Card Number","Card Expiry","CVV"],
    reveal: "You bought fake insurance from a scammer! Ironically, scammers are now preying on people's fear of being scammed. They set up fake websites offering \"Cyber Insurance\" that guarantees a 100% refund if you are ever defrauded online. The insurance doesn't exist; they just charge your card for the \"premium\" and steal your credit card details.",
    flags: ["Promises of \"100% guaranteed refunds\" for any online fraud (legitimate cyber insurance has many terms, limits, and deductibles)","Insurance sold by unknown entities not registered with the IRDAI (Insurance Regulatory and Development Authority of India)","High-pressure sales claiming immediate activation and total immunity from scams"],
    tips: ["If you want cyber insurance, only buy policies from well-known, IRDAI-registered insurance companies.","Read the policy documents carefully. No insurance covers 100% of losses without investigation or limits.","Do not provide credit card details to unknown websites offering \"Anti-Scam\" protection."],
    quiz: [
      { q: "Why might someone fall for a \"Fake Cyber Insurance\" scam?", opts: ["Because they want to make money","Because they are afraid of the rising number of online scams and want protection","Because the government mandates it","Because it is free"], ans: 1, exp: "Scammers exploit emotions. In this case, they exploit the anxiety and fear people have about losing their savings to cybercriminals." },
      { q: "What is a major red flag that an insurance policy is fake?", opts: ["It requires you to fill out an application","It promises \"100% guaranteed refunds\" for any and all scams immediately without investigation","It is sold by a bank","It charges an annual premium"], ans: 1, exp: "Legitimate insurance involves risk assessment, claims processing, and investigations. \"100% guaranteed, instant refunds\" are not a real insurance product." },
      { q: "How can you verify if an insurance company is legitimate in India?", opts: ["Check if their website uses HTTPS","Look for reviews on social media","Verify their registration with the IRDAI (Insurance Regulatory and Development Authority of India)","Ask them for a certificate on WhatsApp"], ans: 2, exp: "The IRDAI regulates all legitimate insurance companies in India. If they are not registered there, they cannot legally sell insurance." }
    ]
  },

  {
    id: 182, icon: "🤖", title: "AI Phishing-as-a-Service", desc: "Fake communication (email/SMS) tricking you into revealing credentials.", diff: "hard", tag: "Phishing",
    url: "company-sso-portal.com", badge: "Credential Theft", amount: "Corporate Access", amountLabel: "Risk",
    fee: "Sign In", feeNote: "To view HR Document",
    fields: [{"n":"workEmail","p":"Work Email Address","t":"text"},{"n":"password","p":"Corporate Password","t":"password"}],
    exposed: ["Work Email Address","Corporate Password"],
    reveal: "You just gave away your corporate credentials to a Phishing-as-a-Service (PaaS) platform! Scammers now use AI tools and subscription services to generate flawlessly written, highly personalized emails. They scrape LinkedIn to know your HR director's name, reference recent events (like a town hall), and send you to a fake Microsoft 365 login page. Because it has no spelling errors and knows your context, it bypasses your usual suspicion.",
    flags: ["An unexpected email asking you to log in to view a document, even if the sender's name is familiar","The URL of the login page does not match the official Microsoft/Google/Corporate SSO domain (e.g., login.microsoftonline.com)","A sense of urgency tied to HR policies, payroll, or performance reviews"],
    tips: ["Always check the sender's email address carefully, not just the display name.","Never click a link to a login portal from an email. Always navigate to your company's intranet or apps directly from your bookmarks.","Remember that AI has eliminated the \"bad spelling and grammar\" red flags from modern phishing emails."],
    quiz: [
      { q: "In the past, you could spot a phishing email by poor grammar. Why is this no longer reliable?", opts: ["Because scammers go to school now","Because AI tools (like ChatGPT) can generate perfectly written, professional, and context-aware emails","Because email providers fix the grammar automatically","Because scammers only target people who don't speak English"], ans: 1, exp: "Generative AI has made it effortless for scammers to create highly persuasive, error-free text in any language, removing one of the easiest ways to spot a scam." },
      { q: "The email mentions a recent \"town hall\" and uses your real HR Director's name. How did the scammer know this?", opts: ["They hacked the HR Director's computer","They work for your company","They use automated tools to scrape public information from LinkedIn, company websites, and social media to personalize the attack","They guessed it"], ans: 2, exp: "Spear-phishing uses Open Source Intelligence (OSINT). Scammers can scrape LinkedIn and news articles to craft a highly believable context." },
      { q: "You click a link to view an HR document and see a Microsoft login page. What should you check immediately?", opts: ["The Microsoft logo to see if it is high quality","The URL in the browser address bar","The copyright date at the bottom","If your password auto-fills"], ans: 1, exp: "The URL is the most critical check. A fake page can look exactly like Microsoft, but the domain will be wrong (e.g., company-sso-login.com instead of microsoftonline.com)." }
    ]
  },

  {
    id: 183, icon: "✉️", title: "Nigerian 419 Scam", desc: "Classic letter/email promising millions for upfront fees.", diff: "low", tag: "Advance-Fee Fraud",
    url: "confidential-email", badge: "Urgent Proposal", amount: "$25,500,000", amountLabel: "Promised Inheritance",
    fee: "Transfer Fee: $500", feeNote: "Pay upfront to release the millions",
    fields: [],
    exposed: ["Full Name","Bank Account Details","Processing Fee Amount"],
    reveal: "You paid an \"upfront fee\" for a massive inheritance that does not exist. This is the classic 419 Advance-Fee fraud. Scammers will keep asking for more taxes and fees until you run out of money.",
    flags: ["Promises of massive, unearned wealth from a stranger.","Requests for strict confidentiality and urgency.","Demand for an upfront fee or tax that \"cannot be deducted\" from the principal."],
    tips: ["Never pay money to unknown parties in order to receive a larger sum.","If an unsolicited offer seems too good to be true, it is a scam.","Government agencies and central banks do not use personal webmail for official multi-million dollar transfers."],
    quiz: [
      { q: "What is the core trick of an Advance-Fee (419) scam?", opts: ["Hacking your computer","Promising a large sum of money in exchange for a small upfront fee","Stealing your credit card","Offering a job"], ans: 1, exp: "The scammer promises millions but requires you to pay \"taxes\" or \"fees\" first. The millions never arrive." },
      { q: "Why do scammers say the fee cannot be deducted from the main amount?", opts: ["It is a banking law","Because the main amount does not actually exist","For tax purposes","To save time"], ans: 1, exp: "There are no actual millions. The upfront fee is the entire goal of the scam." },
      { q: "What should you do if you receive such an email?", opts: ["Reply to find out more","Send a small amount","Delete it immediately and do not reply","Forward it to friends"], ans: 2, exp: "Replying confirms your email is active. Just delete these obvious scam attempts." },
      { q: "Which is a common persona used in these scams?", opts: ["A distant royal, barrister, or government official","A local shopkeeper","Your high school teacher","A popular actor"], ans: 0, exp: "Scammers use authority figures (princes, lawyers, generals) to make the massive sum of money sound plausible." },
      { q: "Is it safe to share your bank account number?", opts: ["Yes, if they promise money","No, they can use it for fraudulent transfers or identity theft","Yes, it is harmless","Only with a SWIFT code"], ans: 1, exp: "Sharing banking details with criminals can lead to unauthorized access and identity theft." }
    ]
  },

  {
    id: 184, icon: "💳", title: "ATM Skimming", desc: "Hidden devices installed on ATMs to steal card data.", diff: "med", tag: "Banking",
    url: "bank-security-alert.com", badge: "Warning", amount: "N/A", amountLabel: "Card Security",
    fee: "Avoid Skimming", feeNote: "Check the card slot",
    fields: [{"n":"check","p":"Inspect for loose parts","t":"checkbox"}],
    reveal: "Always wiggle the card reader slot. If it feels loose or bulky, it is a skimmer.",
    flags: ["Bulky card reader","Loose keypad","Hidden cameras"],
    tips: ["Cover your hand while typing PIN.","Use machines inside well-lit banks."],
    quiz: [
      { q: "What is a common sign of an ATM skimmer?", opts: ["The machine is clean","The card reader slot feels loose or looks bulky","The screen has a reflection","The keypad is brightly lit"], ans: 1, exp: "Skimmers are often overlaid on the original card slot; if it wobbles or looks misaligned, do not use it." },
      { q: "How can you protect your PIN while using an ATM?", opts: ["Type it quickly","Use a fake PIN","Cover the keypad with your other hand","Don't type a PIN"], ans: 2, exp: "Cameras hidden above the keypad record your PIN; covering your hand prevents them from seeing the numbers." },
      { q: "Which ATM location is generally safest from skimming?", opts: ["A remote roadside booth","A machine inside a secure, monitored bank lobby","A poorly lit street corner","An unbranded kiosk"], ans: 1, exp: "Bank lobby machines have security cameras and are frequently inspected by staff, making them harder to tamper with." }
    ]
  },

  {
    id: 185, icon: "✉️", title: "Chain Letter Pyramid Scheme", desc: "Mail-based scams promising wealth for recruiting.", diff: "low", tag: "Pyramid",
    url: "wealth-program.org", badge: "Join Now", amount: "High", amountLabel: "Potential",
    fee: "Verify", feeNote: "Research scheme",
    fields: [{"n":"verify","p":"Confirm legality","t":"checkbox"}],
    reveal: "If the scheme relies on recruiting others rather than selling a product, it is a pyramid scheme.",
    flags: ["Recruitment focus","Vague promises","Pay to join"],
    tips: ["Check legal status.","Avoid \"get-rich-quick\"."],
    quiz: [
      { q: "What characterizes a pyramid scheme?", opts: ["Selling legitimate software","Profits come mainly from recruiting new members","Customer support","Government backing"], ans: 1, exp: "Pyramid schemes collapse because they require an infinite supply of new recruits to pay the existing members." },
      { q: "Are pyramid schemes legal?", opts: ["Yes, if they are online","No, they are illegal in almost all jurisdictions","Yes, if you join early","Only for charities"], ans: 1, exp: "Pyramid schemes are illegal because they are inherently unsustainable and designed to defraud the vast majority of participants." },
      { q: "Why do chain letters ask you to send money to people at the top of a list?", opts: ["To track your donation","To build trust","To ensure the scammer gets paid","To help the economy"], ans: 2, exp: "The list is designed so that your money flows upwards to the original creator, while you likely get nothing in return." }
    ]
  },

  {
    id: 186, icon: "🏦", title: "Cosmos Bank Cyber Heist", desc: "Simulated malware attack on banking infrastructure.", diff: "high", tag: "Banking",
    url: "bank-security-portal.com", badge: "Alert", amount: "Millions", amountLabel: "Heist Target",
    fee: "Secure", feeNote: "Check firewalls",
    fields: [{"n":"verify","p":"Check System Logs","t":"checkbox"}],
    reveal: "Large-scale heists often exploit weak network security and unpatched software.",
    flags: ["Unauthorized access","System anomalies","Large transactions"],
    tips: ["Implement MFA.","Regular security audits."],
    quiz: [
      { q: "Large bank heists often involve what kind of compromise?", opts: ["Physical break-ins","Network and server compromise via malware","Customer errors","Lost passwords"], ans: 1, exp: "Modern heists frequently use advanced malware to manipulate inter-bank transaction systems (like SWIFT)." },
      { q: "What is a critical defense against bank cyber heists?", opts: ["More security guards","Network segmentation and real-time transaction monitoring","Deleting all emails","Printing more statements"], ans: 1, exp: "Monitoring and isolating sensitive financial networks prevents attackers from moving laterally after initial access." },
      { q: "How do attackers typically move stolen funds in a heist?", opts: ["Through cryptocurrency","Via split accounts in multiple countries","By carrying cash","Using prepaid cards"], ans: 1, exp: "By splitting funds rapidly across multiple international accounts, they make the money nearly impossible to track or recover." }
    ]
  },

  {
    id: 187, icon: "💉", title: "COVID Vaccine Phishing", desc: "Scams exploiting health crisis for data.", diff: "med", tag: "Health",
    url: "vaccine-registration-official.com", badge: "Health", amount: "N/A", amountLabel: "Appointment",
    fee: "Verify", feeNote: "Use Gov site",
    fields: [{"n":"verify","p":"Check Govt Link","t":"checkbox"}],
    reveal: "Government vaccine sites always end in .gov.in.",
    flags: ["Suspicious link","Asking for payment"],
    tips: ["Verify official site.","Don't pay."],
    quiz: [
      { q: "Why do scammers create fake health registration sites?", opts: ["To test their web design","To harvest Aadhaar/Identity data","To track viral spread","To sell vaccines"], ans: 1, exp: "Identity data harvested during health emergencies is highly valuable for secondary fraud like banking or loan scams." },
      { q: "How do you verify if a health portal is official in India?", opts: ["Check if it has many images","Look for the .gov.in domain suffix","Trust the search result order","Call the provided mobile number"], ans: 1, exp: "Government portals will always use .gov.in. Any other domain, even if it looks professional, is suspicious." },
      { q: "If a registration site asks for your bank account or OTP, it is:", opts: ["Standard verification","A scam","A banking integration","Optional"], ans: 1, exp: "Health portals have no reason to ask for your bank details or OTPs. This is a clear indicator of a scam." }
    ]
  },

  {
    id: 188, icon: "🎁", title: "Facebook Lottery Scam", desc: "Fake lottery wins via social media.", diff: "low", tag: "Social Media",
    url: "fb-lottery-claim.com", badge: "Win", amount: "High", amountLabel: "Prize",
    fee: "Verify", feeNote: "Check source",
    fields: [{"n":"verify","p":"Check Official Account","t":"checkbox"}],
    reveal: "You cannot win a lottery you never entered.",
    flags: ["High prize","Urgent claim","Ask for tax"],
    tips: ["Ignore DMs.","Block sender."],
    quiz: [
      { q: "If you \"won\" a lottery you never entered, it is:", opts: ["A technical error","A guaranteed scam","A lucky break","Marketing"], ans: 1, exp: "Lotteries require an entry. If you didn't buy a ticket, you cannot win a prize. This is a classic advance-fee scam." },
      { q: "Why do scammers ask for \"tax\" or \"processing fees\" to claim a prize?", opts: ["To pay government taxes","To check your bank account","To steal the fee and never give the prize","To fund the lottery"], ans: 2, exp: "The prize is non-existent. The scammer’s goal is to keep you paying fees until you stop." },
      { q: "What is the best way to handle a \"You Won!\" DM on Facebook?", opts: ["Reply asking for proof","Click the link","Block and report the account immediately","Call the number"], ans: 2, exp: "Interacting with scammers only marks you as a potential target for further fraud." }
    ]
  },

  {
    id: 189, icon: "🆔", title: "Fake Aadhaar Update", desc: "Phishing websites mimicking Aadhaar services.", diff: "med", tag: "Gov",
    url: "aadhaar-service-update.net", badge: "Alert", amount: "N/A", amountLabel: "Data",
    fee: "Verify", feeNote: "UIDAI site only",
    fields: [{"n":"verify","p":"Check UIDAI link","t":"checkbox"}],
    reveal: "Only use uidai.gov.in for Aadhaar updates.",
    flags: ["Fake site","Urgency"],
    tips: ["Visit UIDAI.","Don't share OTP."],
    quiz: [
      { q: "Which is the ONLY official website for Aadhaar services?", opts: ["aadhaar-update.com","uidai.gov.in","my-aadhaar.org","govt-aadhaar.in"], ans: 1, exp: "The UIDAI only operates through its official .gov.in domain." },
      { q: "What happens if you input your Aadhaar number into a fake site?", opts: ["Your card is upgraded","It is verified","Your identity data is harvested for illegal activities","Nothing happens"], ans: 2, exp: "Stolen Aadhaar data is used to open fake bank accounts, take out loans, or create fraudulent SIM cards in your name." },
      { q: "Why is an Aadhaar OTP dangerous in the hands of a scammer?", opts: ["They can see your balance","It allows them to bypass biometric authentication for banking and e-KYC","They can change your name","They can lock your card"], ans: 1, exp: "An Aadhaar OTP effectively replaces your physical biometric scan, giving scammers full control over your digital identity." }
    ]
  },

  {
    id: 190, icon: "🚚", title: "Fake Army Canteen Sale", desc: "Fraudulent deals pretending to be army surplus.", diff: "low", tag: "Marketplace",
    url: "army-canteen-deals.shop", badge: "Discount", amount: "Low", amountLabel: "Price",
    fee: "Verify", feeNote: "Check source",
    fields: [{"n":"verify","p":"Check Seller","t":"checkbox"}],
    reveal: "Army canteens do not have public online stores.",
    flags: ["Low price","Army logo","Advance payment"],
    tips: ["Avoid marketplace deals.","Verify seller."],
    quiz: [
      { q: "Are army canteen items sold on public marketplaces?", opts: ["Yes, by the government","No, these are private sales and illegal for civilians","Yes, on Amazon","Only during holidays"], ans: 1, exp: "Army canteen facilities are exclusive and not available via public websites. Any such site is a scam." },
      { q: "What tactic do fake army canteen scammers use?", opts: ["Sending free samples","Using army logos to build trust","Providing official documents","Meeting in person"], ans: 1, exp: "Scammers use prestigious-looking logos to trick people into believing the deal is authorized and trustworthy." },
      { q: "Why do they ask for an \"advance\" for army items?", opts: ["To reserve the item","Because they need to transport it","To steal your money and block you","To pay for shipping"], ans: 2, exp: "There is no item to sell. The goal is to get you to send money via UPI before you realize the site is fake." }
    ]
  },

  {
    id: 191, icon: "☁️", title: "Fake Azure Container Registry", desc: "Phishing targeting developers.", diff: "high", tag: "Tech",
    url: "azure-registry-login.com", badge: "Registry", amount: "N/A", amountLabel: "Access",
    fee: "Verify", feeNote: "Check URL",
    fields: [{"n":"verify","p":"Check Domain","t":"checkbox"}],
    reveal: "Always check domains for typos (e.g., azur instead of azure).",
    flags: ["Misspelled domain","Fake login"],
    tips: ["Check domain.","Use SSO."],
    quiz: [
      { q: "How can you spot a phishing login for cloud services?", opts: ["Check the SSL certificate details and the exact URL","Check the font size","See if it has a login button","Check if it has images"], ans: 0, exp: "Phishing sites often look identical to the real login page, but the URL will be slightly off (e.g., azu-re.com)." },
      { q: "What is the danger of compromised Container Registry credentials?", opts: ["It slows down your PC","Attackers can inject malicious code into your software","You lose your email","It changes your password"], ans: 1, exp: "If attackers control your registry, they can replace legitimate software updates with malware, infecting your customers." },
      { q: "What is a best practice to avoid cloud credential theft?", opts: ["Write passwords on sticky notes","Use Hardware Security Keys (FIDO2) or MFA","Use simple passwords","Login from any device"], ans: 1, exp: "Hardware MFA keys are immune to phishing, even if you accidentally enter your password into a fake site." }
    ]
  },

  {
    id: 192, icon: "💻", title: "Free Laptop/Tablet Scam", desc: "Scams promising free tech.", diff: "low", tag: "Social Media",
    url: "free-tech-scheme.com", badge: "Free", amount: "N/A", amountLabel: "Prize",
    fee: "Verify", feeNote: "Check Govt site",
    fields: [{"n":"verify","p":"Check Govt Domain","t":"checkbox"}],
    reveal: "Check official government education portals only.",
    flags: ["Too good to be true","Link sharing"],
    tips: ["Use official sites.","Don't share info."],
    quiz: [
      { q: "Most \"Free Laptop\" links on social media are designed to:", opts: ["Help students","Collect your data for spam or marketing fraud","Increase brand awareness","Distribute old stock"], ans: 1, exp: "These sites are built specifically to harvest your personal details and sell them to scammers." },
      { q: "Why do they ask you to \"share this link with 10 friends\"?", opts: ["To verify your identity","To make the scam viral","To prove you have friends","To track the device"], ans: 1, exp: "Forcing virality is a free marketing strategy for the scammer to reach more victims without paying for ads." },
      { q: "If a site asks you to complete \"surveys\" to get a free item, it is:", opts: ["Legitimate data collection","A revenue-generating scam","A requirement","Government policy"], ans: 1, exp: "The \"surveys\" generate affiliate income for the scammer while you receive nothing in return." }
    ]
  },

  {
    id: 193, icon: "💰", title: "GainBitcoin Scam", desc: "Ponzi scheme disguised as mining.", diff: "med", tag: "Investment",
    url: "gainbitcoin-mining.com", badge: "High Yield", amount: "N/A", amountLabel: "Investment",
    fee: "Avoid", feeNote: "Verify SEBI",
    fields: [{"n":"verify","p":"Check Regulation","t":"checkbox"}],
    reveal: "Mining scams offer fake returns.",
    flags: ["Guaranteed returns","Recruitment"],
    tips: ["Research firm.","Avoid Ponzi."],
    quiz: [
      { q: "What is the hallmark of a Ponzi scheme?", opts: ["Legitimate business earnings","New investor money pays older investors","Government regulation","Low profit margins"], ans: 1, exp: "Ponzi schemes appear profitable only as long as new victims keep joining to pay the older members." },
      { q: "If an investment promises \"doubling your Bitcoins in 10 months,\" it is:", opts: ["A crypto trend","A high-risk investment","A mathematical impossibility","A banking service"], ans: 2, exp: "Bitcoin prices fluctuate; there is no way to guarantee a doubling of assets via a private company." },
      { q: "Where should you check if a cryptocurrency platform is legitimate?", opts: ["Social media groups","Financial regulators like SEBI/FIU","Their own website","YouTube comments"], ans: 1, exp: "Regulatory bodies maintain lists of approved and banned financial entities. Always check these lists first." }
    ]
  },

  {
    id: 194, icon: "📑", title: "Income Tax Refund Phishing", desc: "Fake emails from tax authorities.", diff: "med", tag: "Gov",
    url: "incometax-refund-claim.com", badge: "Refund", amount: "Varies", amountLabel: "Claim",
    fee: "Use Official App", feeNote: "Check IT Portal",
    fields: [{"n":"verify","p":"Check Portal","t":"checkbox"}],
    reveal: "Official refund status is only on incometax.gov.in.",
    flags: ["Refund offer","Urgent email"],
    tips: ["Visit portal.","Don't click links."],
    quiz: [
      { q: "How does the Income Tax department communicate refunds?", opts: ["Via SMS/Email with links","Only through the secure, official Income Tax e-filing portal","By calling you directly","Through WhatsApp"], ans: 1, exp: "Official portals are the only secure way to manage refunds. Emails or SMS with links are almost always scams." },
      { q: "A fake IT refund email will often try to:", opts: ["Help you save taxes","Install tax software","Steal your bank/card details for \"refund processing\"","Update your profile"], ans: 2, exp: "To \"process your refund,\" they need your account number and credentials, which they then use to drain your account." },
      { q: "What is a common sign of a phishing refund email?", opts: ["Correct name spelling","Impersonal greeting like \"Dear Taxpayer\"","Official letterhead","No links"], ans: 1, exp: "Official government communication is usually personalized. Generic greetings are a sign of a bulk phishing campaign." }
    ]
  },

  {
    id: 195, icon: "📸", title: "Instagram Sextortion", desc: "Blackmail using intimate photos.", diff: "high", tag: "Social Media",
    url: "insta-report.com", badge: "Blackmail", amount: "Variable", amountLabel: "Demand",
    fee: "Report", feeNote: "Don't pay",
    fields: [{"n":"report","p":"Report Profile","t":"checkbox"}],
    reveal: "Never pay. The demands will never stop.",
    flags: ["Blackmail","Threats"],
    tips: ["Don't pay.","Contact cyber cell."],
    quiz: [
      { q: "If you are being blackmailed with images, what is the #1 rule?", opts: ["Pay once to make it stop","Negotiate the price","Do not pay, block the user, and report to authorities","Delete your own account"], ans: 2, exp: "Paying a blackmailer guarantees they will return for more money. They have no incentive to stop if you pay." },
      { q: "Where should you report sextortion cases in India?", opts: ["The Instagram help center","Cyber Crime Cell (cybercrime.gov.in)","Social media comments","Local police station"], ans: 1, exp: "The National Cyber Crime Reporting Portal is the fastest way to get help and document the evidence for legal action." },
      { q: "Why do sextortionists use social media?", opts: ["To find public photos","It provides easy access to contacts to maximize the threat","It is cheaper than email","Better messaging"], ans: 1, exp: "By threatening to send images to your friends and family on social media, they maximize pressure for you to pay." }
    ]
  },

  {
    id: 196, icon: "📞", title: "Jamtara Phishing Hub", desc: "Simulation of large-scale vishing operations.", diff: "high", tag: "Vishing",
    url: "bank-verify.com", badge: "Call", amount: "N/A", amountLabel: "Account",
    fee: "Verify", feeNote: "Hang up",
    fields: [{"n":"verify","p":"Confirm Caller","t":"checkbox"}],
    reveal: "Hang up on unsolicited \"bank\" calls.",
    flags: ["Unknown caller","Asking for data"],
    tips: ["Hang up.","Visit bank."],
    quiz: [
      { q: "What characterizes \"Jamtara\" style fraud?", opts: ["Mass-scale, coordinated phone phishing operations","A single hacker","A technical glitch","Corporate espionage"], ans: 0, exp: "These operations utilize scripts, social engineering, and thousands of calls to systematically defraud victims." },
      { q: "What is the most effective defense against vishing?", opts: ["Answering and telling them off","Hanging up and manually calling your bank's official number","Recording the call","Asking for their badge"], ans: 1, exp: "Engaging the caller gives them data to use against you. Breaking the call is the only way to ensure your safety." },
      { q: "How do phishers gain initial trust?", opts: ["By knowing your name and recent bank activity","By sending a gift","By using a professional email","By being polite"], ans: 0, exp: "By citing your actual account activity or past transactions, they make you believe they are legitimately from your bank." }
    ]
  },

  {
    id: 197, icon: "💍", title: "Matrimonial Fraud", desc: "Scams on matrimonial websites.", diff: "med", tag: "Romance",
    url: "matrimony-secure.com", badge: "Profile", amount: "N/A", amountLabel: "Request",
    fee: "Verify", feeNote: "Video call",
    fields: [{"n":"verify","p":"Check Identity","t":"checkbox"}],
    reveal: "Verify identity thoroughly before sharing anything.",
    flags: ["Request for money","Too perfect"],
    tips: ["Verify.","Meet in person."],
    quiz: [
      { q: "A matrimonial fraudster often claims they are:", opts: ["Wealthy and living abroad","A student","Already married","Retired"], ans: 0, exp: "By claiming to be successful and abroad, they create an excuse for why they cannot meet in person right away." },
      { q: "What is the usual request right before a matrimonial scammer \"disappears\"?", opts: ["A coffee date","A wedding invitation","Emergency money for travel or customs","Profile deletion"], ans: 2, exp: "The \"emergency\" is the final push to get a large sum of money from you before they abandon the fake account." },
      { q: "How can you identify a fake matrimonial profile?", opts: ["Photos that look like models","No social media footprint","Refusal to talk on video","All of the above"], ans: 3, exp: "A combination of overly perfect photos, lack of online history, and excuses to avoid video calls is a massive red flag." }
    ]
  },

  {
    id: 198, icon: "🤴", title: "Nigerian Prince Scam", desc: "Advance-fee fraud email.", diff: "low", tag: "Email",
    url: "wealth-transfer-dept.com", badge: "Funds", amount: "Millions", amountLabel: "Transfer",
    fee: "Verify", feeNote: "Delete email",
    fields: [{"n":"delete","p":"Delete Email","t":"checkbox"}],
    reveal: "Never engage with \"wealth transfer\" emails.",
    flags: ["Too good to be true","Legal language"],
    tips: ["Delete.","Don't reply."],
    quiz: [
      { q: "What is the core premise of the \"Nigerian Prince\" scam?", opts: ["Charity donation","Sharing inherited wealth for a fee","Job opening","Prize claim"], ans: 1, exp: "They pretend to have millions of dollars and offer to share it with you if you pay small \"transfer\" fees." },
      { q: "What is the goal of the initial email?", opts: ["To test your email","To gauge your willingness to participate in fraud","To spam you","To send you money"], ans: 1, exp: "By replying, you signal that you are susceptible to scams, making you a primary target for further victimization." },
      { q: "Why do scammers still use this dated scam?", opts: ["It works for tech-savvy people","Because even a tiny percentage of success is profitable","They can't change it","It is legal"], ans: 1, exp: "The low effort and high reward make it worthwhile if even one out of every 10,000 people falls for it." }
    ]
  },

  {
    id: 199, icon: "📦", title: "OLX Advance Payment", desc: "Fraudulent advance payments on OLX.", diff: "low", tag: "Marketplace",
    url: "olx-secure-payment.com", badge: "Deal", amount: "Variable", amountLabel: "Price",
    fee: "Verify", feeNote: "Use cash",
    fields: [{"n":"verify","p":"Check Seller","t":"checkbox"}],
    reveal: "Never pay advance for local deals.",
    flags: ["Advance demand","No meeting"],
    tips: ["Meet in person.","Pay after check."],
    quiz: [
      { q: "Why do OLX scammers demand payment via QR code/UPI before meeting?", opts: ["To speed up the process","To ensure you have money","To steal the money without ever intending to sell the item","To pay for taxes"], ans: 2, exp: "Once you scan the QR code, the money leaves your account. There is no item to pick up." },
      { q: "What is the safest way to trade on marketplaces like OLX?", opts: ["Pay in advance","Meet in a public place, inspect the item, and pay via cash","Use a provided link","Trust the delivery agent"], ans: 1, exp: "In-person inspection is the only way to guarantee you are buying exactly what was advertised." },
      { q: "If a seller claims they are in the \"Army\" to sound trustworthy, you should:", opts: ["Trust them immediately","Ask for a video call","Assume it is a scam and verify independently","Send the advance"], ans: 2, exp: "Scammers frequently pretend to be in the military to create a false sense of duty, honor, and reliability." }
    ]
  },

  {
    id: 200, icon: "🏠", title: "Online Rental Scam", desc: "Fake rental listings.", diff: "med", tag: "Marketplace",
    url: "rental-deals.com", badge: "Rent", amount: "N/A", amountLabel: "Deposit",
    fee: "Verify", feeNote: "Visit property",
    fields: [{"n":"verify","p":"Check Property","t":"checkbox"}],
    reveal: "Never pay a deposit without visiting the property.",
    flags: ["Too cheap","Can't visit"],
    tips: ["Visit house.","Check owner ID."],
    quiz: [
      { q: "What is a classic red flag in a rental listing?", opts: ["High rent","The landlord is out of town and wants a deposit to \"reserve\" the house","Great photos","Professional response"], ans: 1, exp: "This ensures you pay the deposit without ever verifying if the house actually exists or is available to rent." },
      { q: "How can you verify if a rental listing is real?", opts: ["Go to the address and speak to neighbors","Trust the listing description","Call the provided phone number","Look at the view"], ans: 0, exp: "Visiting the location in person and speaking to neighbors/security is the best way to uncover property fraud." },
      { q: "Why do rental scammers steal photos from real estate websites?", opts: ["To test their skills","To make their fake listing look highly desirable","To find a tenant for the real landlord","To look professional"], ans: 1, exp: "Using high-quality photos from expensive homes makes the \"deal\" seem amazing, blinding victims to the scam." }
    ]
  },

  {
    id: 201, icon: "💔", title: "Orkut Fake Profile", desc: "Dating scams (nostalgia/legacy).", diff: "low", tag: "Social Media",
    url: "orkut-legacy.com", badge: "Profile", amount: "N/A", amountLabel: "Connection",
    fee: "Verify", feeNote: "Check site",
    fields: [{"n":"verify","p":"Check Identity","t":"checkbox"}],
    reveal: "Stay away from \"revived\" old social media sites.",
    flags: ["Fake site","Request for info"],
    tips: ["Be careful.","Don't share info."],
    quiz: [
      { q: "Are \"revived\" versions of defunct social networks usually safe?", opts: ["Yes","No, they are often phishing traps collecting login data","Maybe","Yes, they are official"], ans: 1, exp: "Scammers create fake websites mimicking defunct services to trick users into using old, reused passwords." },
      { q: "What is the danger of using old, reused passwords on fake sites?", opts: ["Your computer gets slow","Your account security is compromised across other platforms","Nothing","You get more followers"], ans: 1, exp: "If you reuse passwords, a scammer gets access to your email, bank, and social media from a single leak." },
      { q: "What is the best way to handle messages from \"strangers\" on revival sites?", opts: ["Reply","Ignore","Block and delete the account immediately","Ask them for money"], ans: 2, exp: "Ignoring them might not be enough; report the account to prevent others from falling for the same trap." }
    ]
  },

  {
    id: 202, icon: "📧", title: "PayPal Phishing Email", desc: "Fake emails from PayPal.", diff: "med", tag: "Email",
    url: "paypal-security-update.com", badge: "Alert", amount: "N/A", amountLabel: "Account",
    fee: "Verify", feeNote: "Official site",
    fields: [{"n":"verify","p":"Check URL","t":"checkbox"}],
    reveal: "Always log in via the official app.",
    flags: ["Urgency","Fake link"],
    tips: ["Check email header.","Don't click links."],
    quiz: [
      { q: "How do you correctly identify a PayPal email as legitimate?", opts: ["Check the sender address for the official domain","Check if it has a nice logo","Read the message text","Look for the \"Pay Now\" link"], ans: 0, exp: "Scammers use email addresses like paypal-support@gmail.com; the real one is always @paypal.com." },
      { q: "Why do phishing emails say your account is \"limited\"?", opts: ["To help you","To create panic so you enter your details without checking the URL","To show off their skills","To update your balance"], ans: 1, exp: "Panic is a key tool in phishing; it forces you to act quickly before you notice the domain is a fake." },
      { q: "What is the most secure way to check your account status?", opts: ["Click the link in the email","Go directly to paypal.com in your browser","Call a number in the email","Reply for help"], ans: 1, exp: "Manually typing the official URL is the only way to guarantee you are on the real website." }
    ]
  },

  {
    id: 203, icon: "📱", title: "Remote Access Scam", desc: "Software like AnyDesk/TeamViewer.", diff: "high", tag: "Vishing",
    url: "support-remote.com", badge: "Access", amount: "High", amountLabel: "Bank",
    fee: "Deny", feeNote: "Never share access",
    fields: [{"n":"deny","p":"Deny Access","t":"checkbox"}],
    reveal: "Never allow remote access to strangers.",
    flags: ["Remote software request","Urgency"],
    tips: ["Never share access.","Bank never asks for remote."],
    quiz: [
      { q: "What can an attacker do with remote access software?", opts: ["Fix your computer","See your screen, control your mouse, and drain your accounts","Speed up your PC","Delete junk files"], ans: 1, exp: "Remote access software gives the scammer total control over your computer, including your banking apps." },
      { q: "Legitimate banks will never ask you to install:", opts: ["An official bank app","Remote access software (AnyDesk, TeamViewer)","Anti-virus software","A web browser"], ans: 1, exp: "Installation of remote software is the hallmark of financial fraud. No bank requires this for any account activity." },
      { q: "If a \"customer agent\" asks for your remote access code, you should:", opts: ["Share it quickly","Ask for their ID","Hang up immediately and uninstall the software","Share it after verifying their name"], ans: 2, exp: "Sharing that code grants the scammer full administrative control of your computer. Break the connection immediately." }
    ]
  },

  {
    id: 204, icon: "📈", title: "Pig Butchering Scam", desc: "Long-term investment fraud.", diff: "high", tag: "Investment",
    url: "trading-platform-pro.com", badge: "Wealth", amount: "High", amountLabel: "Investment",
    fee: "Verify", feeNote: "Avoid",
    fields: [{"n":"verify","p":"Check SEBI","t":"checkbox"}],
    reveal: "These build trust over months before stealing everything.",
    flags: ["Too friendly","Crypto focus"],
    tips: ["Meet in person.","Verify regulation."],
    quiz: [
      { q: "What does \"Pig Butchering\" mean in the context of scams?", opts: ["A farming scam","Luring a victim with false trust before \"slaughtering\" their finances","A butchery store scam","Meat market fraud"], ans: 1, exp: "The victim is the \"pig\" which is \"fattened\" with fake profits before the scammers steal everything." },
      { q: "How do \"Pig Butchering\" scammers usually find their victims?", opts: ["Via LinkedIn","Random texts or social media messages","In newspapers","In person"], ans: 1, exp: "They initiate contact via random messages, building rapport before slowly introducing fake crypto investment platforms." },
      { q: "Why do victims of this scam often lose so much money?", opts: ["They are bad at math","They trust the fake \"profits\" they see on the site","They want to get rich fast","They have too much money"], ans: 1, exp: "The platform shows fake, highly convincing profit screens, tricking the victim into investing more and more money." }
    ]
  },

  {
    id: 205, icon: "🙏", title: "PM CARES Fake Donation", desc: "Fake donation websites.", diff: "med", tag: "Gov",
    url: "pm-cares-fund-donate.in", badge: "Donate", amount: "Variable", amountLabel: "Donation",
    fee: "Use Official Site", feeNote: "Check gov site",
    fields: [{"n":"verify","p":"Check Official Link","t":"checkbox"}],
    reveal: "Only donate via official pmcares.gov.in.",
    flags: ["Suspicious domain","Urgent appeal"],
    tips: ["Check gov domain.","Verify appeal."],
    quiz: [
      { q: "Where should you go to donate to official government funds?", opts: ["Any search result","Only the official .gov.in website","Social media links","Email attachments"], ans: 1, exp: "Government funds exclusively use official .gov.in websites. Any other site is likely a phishing scam." },
      { q: "What is the danger of donating on a fake site?", opts: ["The money is stolen","Your identity and payment info are harvested","Nothing","It goes to charity"], ans: 1, exp: "Fake donation sites are phishing tools; they capture your credit card information for fraudulent use later." },
      { q: "How can you identify an official government donation portal?", opts: ["It has professional colors","The URL ends in .gov.in and it is listed on official govt handles","It has many donation buttons","It has high traffic"], ans: 1, exp: "Official portals are linked from established government social media accounts and clearly use verified government domains." }
    ]
  },

  {
    id: 206, icon: "💳", title: "PM Jan Dhan Phishing", desc: "Fraudulent schemes using govt program names.", diff: "med", tag: "Gov",
    url: "jan-dhan-scheme-portal.com", badge: "Alert", amount: "Variable", amountLabel: "Fund",
    fee: "Verify", feeNote: "Check official site",
    fields: [{"n":"verify","p":"Check Domain","t":"checkbox"}],
    reveal: "Government welfare programs do not require fees.",
    flags: ["Fee demand","Fake site"],
    tips: ["Verify.","Don't pay."],
    quiz: [
      { q: "What is a core characteristic of government welfare schemes?", opts: ["They cost money to join","They are always free and distributed through banks","They require a deposit","They are online only"], ans: 1, exp: "Welfare schemes are government initiatives. If someone asks for a \"registration fee,\" it is a scam." },
      { q: "How should you apply for Jan Dhan or similar schemes?", opts: ["Through your local bank branch","Via random WhatsApp links","Through survey websites","Via social media DMs"], ans: 0, exp: "Always go directly to your bank or a government service center. Never apply through online advertisements or random links." },
      { q: "What information do Jan Dhan scammers typically want?", opts: ["Your feedback","Bank account, KYC, and OTP details","Your opinion","Your address"], ans: 1, exp: "They want your bank details to link your account to their fraud networks or directly siphon off your funds." }
    ]
  },

  {
    id: 207, icon: "♻️", title: "Pyramid Scheme Chain Letter", desc: "Recruitment-based wealth scams.", diff: "low", tag: "Pyramid",
    url: "money-chain-club.com", badge: "Join", amount: "High", amountLabel: "Earnings",
    fee: "Verify", feeNote: "Check legality",
    fields: [{"n":"verify","p":"Check Legality","t":"checkbox"}],
    reveal: "Sustainable businesses sell products, not just memberships.",
    flags: ["Recruitment focus","No real product"],
    tips: ["Check for product sales.","Avoid recruitment models."],
    quiz: [
      { q: "In a sustainable business, where does profit come from?", opts: ["Recruiting new members","Selling goods or services to real customers","Investments","Donations"], ans: 1, exp: "Legitimate businesses generate revenue through value-based exchanges, not by charging new members to join." },
      { q: "Why do chain letters rely on \"mathematical\" growth projections?", opts: ["To show it is realistic","To hide the fact that they collapse rapidly","To help with math","To look professional"], ans: 1, exp: "Mathematical charts in these schemes ignore reality; they don't account for the finite number of people in the world." },
      { q: "What should you do if invited to a \"get rich\" meeting?", opts: ["Ask for the product being sold","Bring your checkbook","Join immediately","Invite others"], ans: 0, exp: "Asking about the underlying product or service often exposes the lack of real business activity." }
    ]
  },

  {
    id: 208, icon: "🛡️", title: "Scareware / Fake Antivirus", desc: "Pop-ups claiming you have a virus.", diff: "med", tag: "Tech",
    url: "pc-scanner-fix.com", badge: "Alert", amount: "N/A", amountLabel: "Scan",
    fee: "Avoid", feeNote: "Use official AV",
    fields: [{"n":"scan","p":"Do Not Scan","t":"checkbox"}],
    reveal: "Never click \"Fix Now\" on browser pop-ups.",
    flags: ["Pop-up warning","Urgent scan"],
    tips: ["Use trusted AV.","Clear browser cache."],
    quiz: [
      { q: "How do scareware sites detect viruses on your PC?", opts: ["They don't; it is a fake visual effect","Through deep scans","They connect to your hardware","They are connected to OS vendors"], ans: 0, exp: "Websites cannot scan your computer for viruses. These pop-ups are just animations designed to trick you." },
      { q: "What happens if you click \"Remove Viruses\" on a scareware site?", opts: ["It cleans your PC","It installs malware or demands payment for fake software","Nothing","It updates Windows"], ans: 1, exp: "The \"fix\" tool is actually the malware the scammer wants you to install on your system." },
      { q: "What is the safe way to scan for viruses?", opts: ["Use pop-up alerts","Use a reputable, installed anti-virus software","Click ads","Call the number in the pop-up"], ans: 1, exp: "Always rely on software you installed intentionally from official vendor websites." }
    ]
  },

  {
    id: 209, icon: "📱", title: "SIM Swap Fraud", desc: "Hijacking your phone number.", diff: "high", tag: "Banking",
    url: "sim-support-portal.com", badge: "Security", amount: "N/A", amountLabel: "Account",
    fee: "Verify", feeNote: "Check your signal",
    fields: [{"n":"verify","p":"Check Signal","t":"checkbox"}],
    reveal: "If your signal drops suddenly, contact your operator.",
    flags: ["Signal loss","OTP alerts"],
    tips: ["Contact telco.","Monitor accounts."],
    quiz: [
      { q: "What is the first sign of a SIM swap attack?", opts: ["Your battery drains","Sudden, unexplained loss of cellular signal","Your phone gets hot","You get extra data"], ans: 1, exp: "When the scammer activates a new SIM with your number, your old SIM is deactivated, cutting your service." },
      { q: "What is the goal of a SIM swap?", opts: ["To use your data","To receive your OTPs and hijack your bank/crypto accounts","To call your friends","To see your photos"], ans: 1, exp: "Most services use SMS for 2FA. Controlling your phone number gives them the \"key\" to your financial accounts." },
      { q: "How can you protect yourself from SIM swaps?", opts: ["Use an e-SIM if possible","Switch to app-based authenticator apps instead of SMS for 2FA","Set a PIN with your carrier","All of the above"], ans: 3, exp: "Multiple layers, like authenticator apps and carrier PINs, make it much harder for scammers to hijack your identity." }
    ]
  },

  {
    id: 210, icon: "💸", title: "UPI Collect Request Scam", desc: "Fraudulent UPI requests.", diff: "low", tag: "Banking",
    url: "upi-secure-pay.com", badge: "Request", amount: "Variable", amountLabel: "Payment",
    fee: "Verify", feeNote: "Do not approve",
    fields: [{"n":"verify","p":"Check Request","t":"checkbox"}],
    reveal: "Entering your PIN authorizes a deduction, not a payment receipt.",
    flags: ["Collect request","Too good to be true"],
    tips: ["Don't enter PIN.","Check source."],
    quiz: [
      { q: "What does entering your UPI PIN actually do?", opts: ["Authorizes money to be sent FROM your account","Receives money INTO your account","Checks your balance","Cancels a request"], ans: 0, exp: "This is the most common misconception. UPI PINs are only for sending money, never for receiving." },
      { q: "If someone sends you a \"Collect Request\" for a refund, what should you do?", opts: ["Approve it to get your money","Ignore it, as refunds are never processed via collect requests","Check your balance","Call them"], ans: 1, exp: "Refunds never require you to \"pay\" or approve a collect request. This is a deliberate tactic to steal funds." },
      { q: "How do you check for incoming money via UPI?", opts: ["Look at your balance, no action required","Click on \"Pay\"","Enter your PIN","Approve the notification"], ans: 0, exp: "Money received via UPI just appears in your account balance. You never need to enter a PIN to receive funds." }
    ]
  },

  {
    id: 211, icon: "📞", title: "Vishing / Fake Bank Call", desc: "Sophisticated voice phishing.", diff: "med", tag: "Vishing",
    url: "bank-support.com", badge: "Call", amount: "N/A", amountLabel: "Account",
    fee: "Hang up", feeNote: "Visit bank",
    fields: [{"n":"verify","p":"Verify Caller","t":"checkbox"}],
    reveal: "Banks never call to ask for OTPs or PINs.",
    flags: ["Urgent tone","Request for data"],
    tips: ["Verify.","Hang up."],
    quiz: [
      { q: "Why do vishers pretend to be from \"Head Office\"?", opts: ["To sound authoritative and intimidate you","Because they work there","It is a random guess","It sounds official"], ans: 0, exp: "\"Head Office\" or \"Fraud Department\" adds a layer of fear, ensuring you follow their instructions without questioning." },
      { q: "What should you do if the caller insists you must stay on the line?", opts: ["Stay on the line","Immediately hang up; no legitimate agent will prevent you from hanging up","Explain why you are hanging up","Ask to speak to a manager"], ans: 1, exp: "Pressure to \"stay on the line\" is a control tactic. A real bank will never keep you hostage on a call." },
      { q: "How can you verify if a call is legitimate?", opts: ["Ask the caller for their ID","Hang up, find the bank’s official number on their website, and call them yourself","Wait for them to call back","Search the phone number online"], ans: 1, exp: "Calling the official number you sourced yourself is the only way to be 100% sure you are talking to the bank." }
    ]
  },

  {
    id: 212, icon: "📱", title: "Free Recharge Scam", desc: "Fake \"free recharge\" links.", diff: "low", tag: "Social Media",
    url: "free-recharge-now.com", badge: "Free", amount: "N/A", amountLabel: "Recharge",
    fee: "Verify", feeNote: "Check telco app",
    fields: [{"n":"verify","p":"Check App","t":"checkbox"}],
    reveal: "No one gives free recharge via links.",
    flags: ["Link","Urgency"],
    tips: ["Check official app.","Ignore links."],
    quiz: [
      { q: "What do fake recharge scams steal?", opts: ["Your phone data","Your personal and financial credentials through phishing","Your battery","Your photos"], ans: 1, exp: "The \"recharge\" is a decoy to get you to fill out a form that steals your sensitive info." },
      { q: "Where should you manage your mobile recharges?", opts: ["Official operator app/website only","Random links from friends","Email attachments","Social media ads"], ans: 0, exp: "Using official channels is the only way to ensure your payment is secure and credited." },
      { q: "If a \"Free Recharge\" link requires sharing to 20 people, it is:", opts: ["A real promotion","A viral scam designed to spread itself","A friendly deal","A new marketing trend"], ans: 1, exp: "They use your social trust to spread the scam to as many people as possible, maximizing their victim pool." }
    ]
  },

  {
    id: 213, icon: "✨", title: "WhatsApp Gold/Pink Scam", desc: "Malicious versions of WhatsApp.", diff: "med", tag: "Tech",
    url: "whatsapp-gold-update.com", badge: "Update", amount: "N/A", amountLabel: "App",
    fee: "Avoid", feeNote: "Use App Store",
    fields: [{"n":"avoid","p":"Do Not Download","t":"checkbox"}],
    reveal: "Only use the official WhatsApp app.",
    flags: ["Fake features","Direct link"],
    tips: ["Use App Store.","Delete fake app."],
    quiz: [
      { q: "What is \"WhatsApp Gold/Pink\"?", opts: ["An official upgrade","Malware designed to hijack your device and chats","A hidden feature","A premium service"], ans: 1, exp: "These are malicious apps disguised as upgrades; they steal your data and use your phone for bot activities." },
      { q: "Why should you avoid apps outside the official Play/App store?", opts: ["They are too big","They are not vetted for security and likely contain malware","They cost money","They are slow"], ans: 1, exp: "Stores like Google Play and Apple App Store vet apps for security. Third-party apps have no such protections." },
      { q: "What happens if you install an unofficial WhatsApp mod?", opts: ["You get new colors","Your private messages are exposed to the malware author","Nothing","You get more features"], ans: 1, exp: "The \"mod\" gives the attacker access to your contacts, chat history, and any files shared in your conversations." }
    ]
  },

  {
    id: 214, icon: "✉️", title: "Envelope Stuffing Scam", desc: "Classic work-from-home fraud.", diff: "low", tag: "Job",
    url: "home-jobs-portal.com", badge: "Work", amount: "N/A", amountLabel: "Salary",
    fee: "Verify", feeNote: "Check company",
    fields: [{"n":"verify","p":"Check Company","t":"checkbox"}],
    reveal: "No legitimate company pays you to stuff envelopes.",
    flags: ["Fee demand","No office"],
    tips: ["Verify.","Avoid."],
    quiz: [
      { q: "Why is the \"envelope stuffing\" job a scam?", opts: ["It is too easy","It is low pay","Real companies automate this; there is no such job","It is illegal"], ans: 2, exp: "Envelope stuffing is a completely automated process in real business. No company would pay people to do this by hand." },
      { q: "What is the goal of the \"starter fee\" they ask for?", opts: ["To train you","To test your honesty","To steal the money and disappear","To buy materials"], ans: 2, exp: "The fee is the scam. Once paid, the \"employer\" either sends you useless instructions or stops replying altogether." },
      { q: "Legitimate work-from-home jobs will:", opts: ["Never ask you to pay for the \"privilege\" of working","Always ask for a deposit","Request your bank login","Ask for money"], ans: 0, exp: "You are there to provide value, not to pay them. Any \"job\" that demands money is a scam." }
    ]
  },

  {
    id: 215, icon: "📺", title: "YouTube Channel Hacking", desc: "Phishing for creators.", diff: "high", tag: "Tech",
    url: "youtube-collab-portal.com", badge: "Collab", amount: "High", amountLabel: "Value",
    fee: "Verify", feeNote: "Check domain",
    fields: [{"n":"verify","p":"Check Domain","t":"checkbox"}],
    reveal: "Collab requests with external links are high-risk.",
    flags: ["Suspicious link","Urgency"],
    tips: ["Verify email.","Use 2FA."],
    quiz: [
      { q: "How do hackers usually target YouTube channels?", opts: ["By brute force","By sending fake collaboration/sponsorship emails with malicious links","By guessing passwords","By calling the owner"], ans: 1, exp: "They pretend to be sponsors and send you a link to \"view their product,\" which actually steals your session cookies." },
      { q: "What are \"session cookies\" in this context?", opts: ["Temporary files","Keys that allow you to stay logged into your account","Video files","Bank details"], ans: 1, exp: "If a scammer steals these cookies, they can bypass your password and 2FA to take over your account entirely." },
      { q: "What is the best way for a creator to stay secure?", opts: ["Use a separate email for channel business","Don't open external links in sponsorship emails","Enable hardware-based 2FA","All of the above"], ans: 3, exp: "A combination of these practices significantly reduces the attack surface for account takeover." }
    ]
  },

  {
    id: 216, icon: "💥", title: "Fake Bash Scam", desc: "Scams using fake events.", diff: "low", tag: "Marketplace",
    url: "event-registration-fake.com", badge: "Event", amount: "N/A", amountLabel: "Entry",
    fee: "Verify", feeNote: "Use official page",
    fields: [{"n":"verify","p":"Check Page","t":"checkbox"}],
    reveal: "Check official social media handles for event tickets.",
    flags: ["Link","Urgency"],
    tips: ["Verify event.","Don't pay."],
    quiz: [
      { q: "How do you verify if a \"bash\" or event is real?", opts: ["Check the organizer's official verified social media pages","Trust the email invite","Check the ticket price","Call the number"], ans: 0, exp: "Organizers will always cross-promote events on verified channels. If it’s not there, it’s not happening." },
      { q: "What happens if you buy a ticket from a random event site?", opts: ["You get the ticket","Your money is stolen, and you get no ticket","You get a discount","You get a gift"], ans: 1, exp: "The site exists only to process your payment. You will arrive at the venue to find there is no such event." },
      { q: "Why do scammers use \"event\" themes?", opts: ["They are fun","Events create excitement and urgency, making victims less critical","They are cheap","They are easy"], ans: 1, exp: "Excitement bypasses rational thinking. People want to secure their spot quickly, ignoring security red flags." }
    ]
  },

  {
    id: 217, icon: "🎵", title: "Fake Beat Selling Scam", desc: "Fraudulent music industry offers.", diff: "low", tag: "Marketplace",
    url: "beat-sales-portal.com", badge: "Music", amount: "Low", amountLabel: "Price",
    fee: "Verify", feeNote: "Check source",
    fields: [{"n":"verify","p":"Check Seller","t":"checkbox"}],
    reveal: "Verify music producers on professional platforms.",
    flags: ["Advance payment","Fake reviews"],
    tips: ["Listen first.","Check reviews."],
    quiz: [
      { q: "How can you protect your music deals?", opts: ["Pay in full upfront","Use verified marketplaces like BeatStars","Send money via UPI","Trust emails"], ans: 1, exp: "Verified marketplaces have buyer protection and track records. Direct emails are often fraudulent." },
      { q: "Why do scammers offer \"exclusive\" beats at low prices?", opts: ["They are generous","To entice you to pay via non-refundable methods","They are amateurs","They want fame"], ans: 1, exp: "The price is a hook. Once you pay, they either provide stolen music or simply disappear with your money." },
      { q: "What should you check before buying a beat?", opts: ["The producer's portfolio and platform history","The beat name","The price","The upload date"], ans: 0, exp: "An established history and positive reviews on legitimate platforms are your best insurance against fraud." }
    ]
  },

  {
    id: 218, icon: "📢", title: "Fake Beego ORM Scam", desc: "Software supply chain poisoning.", diff: "high", tag: "Tech",
    url: "beego-update.com", badge: "Update", amount: "N/A", amountLabel: "Access",
    fee: "Verify", feeNote: "Check source",
    fields: [{"n":"verify","p":"Check Source","t":"checkbox"}],
    reveal: "Only download software from official repositories.",
    flags: ["Fake package","Malicious code"],
    tips: ["Check hashes.","Use trusted repos."],
    quiz: [
      { q: "What is software supply chain poisoning?", opts: ["A bug","Hackers inserting malicious code into popular libraries","A system crash","Bad design"], ans: 1, exp: "They upload malicious versions of popular packages (like Beego) so developers unknowingly install malware." },
      { q: "How can developers avoid this?", opts: ["Download from any site","Verify package signatures and use official repositories (npm/Go)","Never update","Trust new authors"], ans: 1, exp: "Official repositories are constantly monitored. Never download packages from unknown or unofficial sites." },
      { q: "What is the danger of a malicious library?", opts: ["Slow code","It can steal environment variables, passwords, and source code","Bad formatting","Compiler errors"], ans: 1, exp: "The library runs with your permissions, meaning it can steal your entire project and developer credentials." }
    ]
  },

  {
    id: 219, icon: "🥦", title: "Fake Big Basket Scam", desc: "Fraudulent grocery site links.", diff: "low", tag: "E-commerce",
    url: "bigbasket-offer.shop", badge: "Sale", amount: "Low", amountLabel: "Price",
    fee: "Verify", feeNote: "Check URL",
    fields: [{"n":"verify","p":"Check URL","t":"checkbox"}],
    reveal: "Big Basket is only at bigbasket.com.",
    flags: ["Fake URL","Offer"],
    tips: ["Check URL.","Use official app."],
    quiz: [
      { q: "What happens when you use a fake shopping site?", opts: ["You get groceries","Your credit card details are stolen","You get a refund","Nothing"], ans: 1, exp: "The site is designed to collect your credit card details; no groceries will ever be delivered." },
      { q: "How do you identify a fake grocery site?", opts: ["Check the URL (must be bigbasket.com)","Check the logo","Check the products","Look for phone numbers"], ans: 0, exp: "URL spoofing (e.g., big-basket-deals.com) is the most common trick. Always check the main domain." },
      { q: "If an offer is \"too good to be true,\" you should:", opts: ["Buy more","Share it with family","Be suspicious and check the official website","Order immediately"], ans: 2, exp: "Scammers exploit greed. When you see an \"unbelievable\" deal, it is almost always a phishing trap." }
    ]
  },

  {
    id: 220, icon: "📜", title: "Fake Birth Certificate", desc: "Fraudulent document download sites.", diff: "med", tag: "Gov",
    url: "birth-cert-download.in", badge: "Cert", amount: "N/A", amountLabel: "Download",
    fee: "Verify", feeNote: "Check gov site",
    fields: [{"n":"verify","p":"Check Govt Link","t":"checkbox"}],
    reveal: "Only use state/local government portals.",
    flags: ["Fake site","Fee"],
    tips: ["Use gov sites.","Avoid pay sites."],
    quiz: [
      { q: "Can you download a birth certificate from any site?", opts: ["Yes","No, only from official state government portals","Only via email","Only via WhatsApp"], ans: 1, exp: "Identity documents are only issued via official, secure government infrastructure." },
      { q: "Why do scammers create fake certificate sites?", opts: ["To test their skills","To steal personal identification and credit card info","To help people","To track birth rates"], ans: 1, exp: "They steal your identity information and charge \"processing fees\" for a document they cannot legally issue." },
      { q: "How to safely get a birth certificate?", opts: ["Google the first link","Go to your municipal corporation website","Search on social media","Call a random number"], ans: 1, exp: "Official municipal websites have dedicated, secure portals for birth/death certificates." }
    ]
  },

  {
    id: 221, icon: "🖥️", title: "Fake Bliss OS Scam", desc: "Malicious OS ISOs.", diff: "high", tag: "Tech",
    url: "bliss-os-download.com", badge: "Download", amount: "N/A", amountLabel: "OS",
    fee: "Verify", feeNote: "Use official site",
    fields: [{"n":"verify","p":"Check Hash","t":"checkbox"}],
    reveal: "Only download OS ISOs from official project pages.",
    flags: ["Malicious ISO","Fake site"],
    tips: ["Check hash.","Use official."],
    quiz: [
      { q: "What is the danger of downloading an OS ISO from an unofficial site?", opts: ["It might be slow","It could contain backdoors, ransomware, or spyware","It won't boot","It lacks drivers"], ans: 1, exp: "An OS is the most powerful software on your PC. A compromised version gives attackers total control." },
      { q: "What are cryptographic hashes (MD5/SHA) used for?", opts: ["To speed up downloads","To verify the downloaded file has not been tampered with","To identify the OS","To set passwords"], ans: 1, exp: "Comparing the official file hash to your download ensures you have the genuine, untampered file." },
      { q: "What is the safest way to download an Operating System?", opts: ["Find a torrent","Use the official project website/repository","Search on Bing","Trust a blog post"], ans: 1, exp: "Only the project owners can guarantee the integrity of their files. Always go to the primary source." }
    ]
  },

  {
    id: 222, icon: "🎓", title: "Fake Blockchain Course", desc: "Fraudulent tech training.", diff: "med", tag: "Tech",
    url: "blockchain-expert-course.com", badge: "Learn", amount: "Variable", amountLabel: "Fee",
    fee: "Verify", feeNote: "Check certs",
    fields: [{"n":"verify","p":"Check Accreditation","t":"checkbox"}],
    reveal: "Verify accreditation before paying for courses.",
    flags: ["Fake cert","Advance fee"],
    tips: ["Research.","Verify."],
    quiz: [
      { q: "How to avoid fake certification courses?", opts: ["Check the institution's accreditation","Look for nice logos","Trust the ad","Ask friends"], ans: 0, exp: "Accreditation by recognized educational boards is the only way to ensure the certificate has any real-world value." },
      { q: "Why do scammers offer fake tech courses?", opts: ["They love teaching","To harvest fees and personal info","They are professors","They are boredom"], ans: 1, exp: "The course is a front. They want your registration fee and your personal data for secondary fraud." },
      { q: "Where should you look for legitimate blockchain courses?", opts: ["Random Google ads","Established universities or well-known platforms (e.g., Coursera)","Social media DMs","Email links"], ans: 1, exp: "Reputable platforms vet their instructors and provide real value; random sites do neither." }
    ]
  },

  {
    id: 223, icon: "✍️", title: "Fake Blogger Blog Scam", desc: "Blogger platform fraud.", diff: "low", tag: "Social Media",
    url: "blog-create-earn.com", badge: "Blog", amount: "N/A", amountLabel: "Account",
    fee: "Verify", feeNote: "Use official site",
    fields: [{"n":"verify","p":"Check Source","t":"checkbox"}],
    reveal: "Official Blogger is a Google service.",
    flags: ["Fake site","Data collection"],
    tips: ["Use Google.","Avoid links."],
    quiz: [
      { q: "What is the risk of \"Blogger\" sites that aren't google.com?", opts: ["Slow loading","Credential theft (phishing) and identity tracking","No themes","Bad layout"], ans: 1, exp: "They mimic the interface of legitimate services to harvest your Google/social login credentials." },
      { q: "How to spot a fake blogging platform?", opts: ["Check the domain","Check the footer","Check the color","Look for images"], ans: 0, exp: "Always check if the URL is officially linked to the service provider (e.g., blogger.com)." },
      { q: "What happens to your content on fake blogging sites?", opts: ["It goes viral","It is never published; it is used to build the fake site's credibility","It gets deleted","It is sold"], ans: 1, exp: "These sites are rarely functional blogging platforms. Their only purpose is to steal your time and data." }
    ]
  },

  {
    id: 224, icon: "🍬", title: "Fake Bombay Sweet Shop", desc: "Fake online food orders.", diff: "low", tag: "Marketplace",
    url: "bombay-sweets-order.com", badge: "Shop", amount: "Low", amountLabel: "Price",
    fee: "Verify", feeNote: "Check URL",
    fields: [{"n":"verify","p":"Check URL","t":"checkbox"}],
    reveal: "Order directly from official brand websites.",
    flags: ["Fake URL","Offer"],
    tips: ["Check URL.","Call store."],
    quiz: [
      { q: "What is the risk of using fake food delivery sites?", opts: ["Food is cold","Card information is stolen","No delivery","Wrong flavor"], ans: 1, exp: "Fake stores are phishing sites designed specifically to steal payment details." },
      { q: "How to verify an online food order site?", opts: ["Check the official brand social media","Trust the ad","Check the price","Look for images"], ans: 0, exp: "Official brands link to their true store from their social media accounts." },
      { q: "If a \"sweet shop\" asks for a \"shipping advance\" before ordering, it is:", opts: ["Normal","A huge red flag for a scam","Required","Standard"], ans: 1, exp: "Established food businesses accept payment at checkout on their official site, never via advance UPI transfers." }
    ]
  },

  {
    id: 225, icon: "🧩", title: "Fake Bonkers Corner", desc: "Fraudulent clothing store.", diff: "low", tag: "E-commerce",
    url: "bonkers-store.shop", badge: "Offer", amount: "Low", amountLabel: "Price",
    fee: "Verify", feeNote: "Check URL",
    fields: [{"n":"verify","p":"Check URL","t":"checkbox"}],
    reveal: "Only shop at bonkerscorner.com.",
    flags: ["Fake URL","Cheap prices"],
    tips: ["Check URL.","Use official."],
    quiz: [
      { q: "Why do fake stores use \".shop\" domains?", opts: ["They are cheaper","They mimic real brands but differ in domain for phishing","They are fast","They are better"], ans: 1, exp: "Scammers buy cheap, suspicious domains to host fake storefronts that look like popular brands." },
      { q: "What is a hallmark of a fake clothing store?", opts: ["Great reviews","Extreme discounts and an inability to track the order","Good support","Free gifts"], ans: 1, exp: "There is no stock. They take your money, provide a fake tracking number, and go silent." },
      { q: "How to protect yourself when shopping online?", opts: ["Only use official domains, use credit cards for chargebacks","Click every ad","Pay via cash transfers","Use debit cards"], ans: 0, exp: "Credit cards offer better protection; if the store is a scam, you can often dispute the transaction." }
    ]
  },

  {
    id: 226, icon: "🤖", title: "Fake Bot Management", desc: "Fraudulent security services.", diff: "high", tag: "Tech",
    url: "bot-protection-services.com", badge: "Security", amount: "N/A", amountLabel: "Service",
    fee: "Verify", feeNote: "Check domain",
    fields: [{"n":"verify","p":"Check Domain","t":"checkbox"}],
    reveal: "Verify security vendors via official channels.",
    flags: ["Fake service","Data capture"],
    tips: ["Check accreditation.","Verify company."],
    quiz: [
      { q: "Why do scammers offer fake \"Bot Management\"?", opts: ["To help sites","To gain access to your website infrastructure","To be nice","To sell software"], ans: 1, exp: "By installing their \"security\" script, you give them full visibility and control over your website traffic." },
      { q: "How to vet a security service?", opts: ["Search online","Check corporate reputation and client lists","Look at logos","Check price"], ans: 1, exp: "Reputation, client lists, and independent security audits are essential for vetting security partners." },
      { q: "What is the danger of fake security tools?", opts: ["Slower site","Backdoors that allow data theft","Broken layout","Nothing"], ans: 1, exp: "A fake tool is an attacker’s foothold in your site, designed to bypass security, not improve it." }
    ]
  },

  {
    id: 227, icon: "📦", title: "Fake BoxedApp Packer", desc: "Malicious software packaging tool.", diff: "high", tag: "Tech",
    url: "boxedapp-packer.org", badge: "Tool", amount: "N/A", amountLabel: "Software",
    fee: "Verify", feeNote: "Use official",
    fields: [{"n":"verify","p":"Check Hash","t":"checkbox"}],
    reveal: "Use official developer websites only.",
    flags: ["Fake tool","Malware"],
    tips: ["Download from official.","Check hash."],
    quiz: [
      { q: "Why should you be careful with software packaging tools?", opts: ["They are complex","Unofficial versions can be wrapped with malicious \"payloads\"","They cost money","They are heavy"], ans: 1, exp: "Scammers modify tools to include spyware or ransomware that activates when you run the software." },
      { q: "How to ensure your software tool is safe?", opts: ["Use the original developer's official website","Trust search results","Download from forums","Use random links"], ans: 0, exp: "The original developer’s source is the only one you can trust for legitimate tool integrity." },
      { q: "What is \"packaging\" in software?", opts: ["Putting it in a box","Compressing software to run as a single file","Selling it","Updating it"], ans: 1, exp: "It combines various files into one executable. If compromised, it is a perfect vehicle for delivering malware." }
    ]
  },

  {
    id: 228, icon: "🚂", title: "Fake Brakeman Scam", desc: "Fraudulent railway/job tools.", diff: "low", tag: "Job",
    url: "brakeman-job-portal.com", badge: "Job", amount: "N/A", amountLabel: "Salary",
    fee: "Verify", feeNote: "Check govt site",
    fields: [{"n":"verify","p":"Check Govt Link","t":"checkbox"}],
    reveal: "Railway jobs only exist on official RRB portals.",
    flags: ["Fee","No official link"],
    tips: ["Visit official RRB site.","Avoid pay portals."],
    quiz: [
      { q: "Where are official railway job notifications posted?", opts: ["Social media","Official Railway Recruitment Board (RRB) websites only","Email ads","Random job boards"], ans: 1, exp: "The RRB is the only authority. Any site charging for \"job access\" is a scam." },
      { q: "Why is paying for a job portal a red flag?", opts: ["It shows dedication","Government recruitment is always processed through official, free channels","It is mandatory","It saves time"], ans: 1, exp: "Never pay anyone to apply for a government job. The application processes are always free." },
      { q: "What information do these fake sites target?", opts: ["Your favorite color","Personal identity info (Aadhaar, PAN) and application fees","Your feedback","Nothing"], ans: 1, exp: "They harvest identity data for document fraud and take your money as a \"registration fee.\"" }
    ]
  },

  {
    id: 229, icon: "🐃", title: "Fake Buffalo Pop Scam", desc: "Fraudulent game/pop scam.", diff: "low", tag: "Marketplace",
    url: "buffalo-pop-game.shop", badge: "Play", amount: "N/A", amountLabel: "Prize",
    fee: "Avoid", feeNote: "Check Store",
    fields: [{"n":"avoid","p":"Do Not Play","t":"checkbox"}],
    reveal: "Only play games from official app stores.",
    flags: ["Fake site","Data request"],
    tips: ["Use App Store.","Check ratings."],
    quiz: [
      { q: "Why are random online games dangerous?", opts: ["They are addictive","They often act as phishing fronts for data collection","They use data","They are slow"], ans: 1, exp: "These \"games\" are frequently just web forms designed to capture your login and personal information." },
      { q: "How to safely play mobile games?", opts: ["Download from official app stores (Google Play/App Store) only","Click ads","Use random sites","Share links"], ans: 0, exp: "Official stores vet games for security and privacy; random websites do not." },
      { q: "What is a red flag in a browser-based game?", opts: ["It asks you to log in with Google/FB for a \"prize\"","It has bad graphics","It is free","It has sound"], ans: 0, exp: "Asking for social logins is the primary way they steal your account credentials." }
    ]
  }
];
