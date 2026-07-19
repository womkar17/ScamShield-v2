import React, { useState } from 'react';

// ID 234: SweetCandy Match 3 Mod APK Sideload UI
export function CandySim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [phoneNo, setPhoneNo] = useState('');
  const [smsAllow, setSmsAllow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['RECEIVE_SMS / SEND_SMS Android Permissions', 'Mobile Phone Number', 'Device Contacts & OTP Access']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#18181b', border: '1px solid #3f3f46', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafafa' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #3f3f46', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>🍬</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#ec4899' }}>SweetCandy Match 3 - Unlimited Coins Mod APK</h3>
            <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>Android APK Mirror • Version 4.8.2 Modded (No Ads + 999k Gold)</span>
          </div>
        </div>
        <span style={{ background: '#500724', color: '#fbcfe8', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>APK SIDELOAD</span>
      </div>

      <div style={{ background: '#27272a', padding: '14px', borderRadius: '10px', marginBottom: '16px', borderLeft: '4px solid #ec4899' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#f472b6', marginBottom: '4px' }}>📱 Android Runtime Permissions Requested</div>
        <div style={{ fontSize: '0.8rem', color: '#d4d4d8' }}>To sync daily modded coin bonuses and bypass Google Play verification, the installer requires:</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '8px', fontFamily: 'monospace', fontSize: '0.75rem', color: '#fbbf24' }}>
          <div>&gt; android.permission.RECEIVE_SMS (Read incoming 2FA OTPs)</div>
          <div>&gt; android.permission.SEND_SMS (Send premium SMS toll messages)</div>
          <div>&gt; android.permission.READ_CONTACTS</div>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#27272a', padding: '12px', borderRadius: '8px', border: '1px solid #52525b', cursor: 'pointer', fontSize: '0.85rem' }}>
            <input required type="checkbox" checked={smsAllow} onChange={e => setSmsAllow(e.target.checked)} style={{ width: '18px', height: '18px' }} />
            <span>Allow `SweetCandy_Mod.apk` to read and send SMS messages on this device</span>
          </label>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>Enter Mobile Number to activate modded profile &amp; receive verification SMS:</label>
            <input required type="text" placeholder="+91 98765 43210" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff', fontSize: '1rem' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#db2777', color: '#fff', padding: '14px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1.05rem' }}>
            {loading ? 'Installing modded APK & granting SMS permissions...' : 'Install Mod APK & Grant SMS Permissions'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>💥</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>SMS Banking OTPs Intercepted!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d4d4d8', margin: 0 }}>Sideloading game mod APKs with `RECEIVE_SMS` permissions allowed scammers to read your bank OTP codes directly in the background and drain your linked bank accounts.</p>
        </div>
      )}
    </div>
  );
}

// ID 254: CompTIA Exam Voucher Discount UI
export function CompTIASim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [studentEmail, setStudentEmail] = useState('student@university.edu');
  const [card, setCard] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['$115 Academic Flash Payment', 'Student Academic Email Details', 'Credit Card Credentials']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📜</span> CompTIA Academic Certification Voucher Depot
        </h3>
        <span style={{ background: '#1e3a8a', color: '#93c5fd', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>70% ACADEMIC DISCOUNT</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>CompTIA Security+ (SY0-701) Retail</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#94a3b8', textDecoration: 'line-through' }}>$385.00 USD</div>
        </div>
        <div style={{ background: '#065f46', padding: '12px', borderRadius: '8px', border: '1px solid #10b981' }}>
          <div style={{ fontSize: '0.75rem', color: '#a7f3d0' }}>Student Flash Discount Voucher</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#fff' }}>$115.00 USD (Save 70%)</div>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Verify Student `.edu` or Academic Email Address:</label>
            <input required type="email" value={studentEmail} onChange={e => setStudentEmail(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Credit / Debit Card Number for $115 Voucher Code Purchase:</label>
            <input required type="text" placeholder="4592-xxxx-xxxx-xxxx + CVV" value={card} onChange={e => setCard(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Validating student status & emailing $115 exam voucher...' : 'Purchase $115 CompTIA Exam Voucher Code'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Fake Exam Voucher Scammed!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>Unverified discount stores (`comptia-voucher-depot.com`) sell expired, already-redeemed, or completely fake alphanumeric voucher codes to aspiring IT professionals.</p>
        </div>
      )}
    </div>
  );
}

// ID 256: Content Samurai AI Lifetime Deal Checkout UI
export function ContentSamuraiSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [stripeCard, setStripeCard] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Stripe Payment Credentials ($49)', 'Account Email details', 'Recurring Monthly Subscription Trap']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#18181b', border: '1px solid #3f3f46', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafafa' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #3f3f46', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#a855f7', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🎬</span> Content Samurai AI - Lifetime Pro License
        </h3>
        <span style={{ background: '#3b0764', color: '#d8b4fe', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>LIFETIME DEAL $49</span>
      </div>

      <div style={{ background: '#27272a', padding: '14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #3f3f46', fontSize: '0.85rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', color: '#d4d4d8', marginBottom: '10px' }}>
          <div>[✔] Unlimited AI Text-to-Video</div>
          <div>[✔] 4K Ultra-HD Rendering</div>
          <div>[✔] 1,200+ Neural Voiceovers</div>
          <div>[✔] Zero Monthly Subscription</div>
        </div>
        <div style={{ background: '#000', padding: '10px', borderRadius: '6px', textAlign: 'center', color: '#4ade80', fontWeight: 'bold', fontSize: '1.1rem' }}>
          Special Launch Price: $49.00 One-Time
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>Your Account Email for Lifetime License Activation:</label>
            <input required type="email" placeholder="creator@youtube.com" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>Stripe Credit Card Details for $49 One-Time Payment:</label>
            <input required type="text" placeholder="4592-xxxx-xxxx-xxxx + CVV" value={stripeCard} onChange={e => setStripeCard(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#9333ea', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            {loading ? 'Activating lifetime AI video studio license...' : 'Pay $49 & Unlock Lifetime Pro Studio'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Fake AI SaaS Lifetime Deal!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d4d4d8', margin: 0 }}>The website was a clone exploiting a shut-down SaaS brand. Not only did they steal your $49 checkout payment, but the fine print enrolled your credit card in a hidden $99/month recurring charge.</p>
        </div>
      )}
    </div>
  );
}

// ID 258: Country Bean Anniversary Flash Sale UI
export function CountryBeanSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [upiVpa, setUpiVpa] = useState('');
  const [address, setAddress] = useState('Flat 402, Sunshine Towers, MG Road');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['UPI Payment ID Credentials', '₹240 Instant UPI PIN Deduction', 'Home Delivery Address Data']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafaf9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #44403c', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>☕</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#f97316' }}>Country Bean 5th Anniversary Flash Sale</h3>
            <span style={{ fontSize: '0.75rem', color: '#a8a29e' }}>Official Instagram Ad Promo • Free Shipping on 4-Pack Combo</span>
          </div>
        </div>
        <span style={{ background: '#431407', color: '#ffedd5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>80% OFF COMBOS</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: '#292524', padding: '12px', borderRadius: '8px', border: '1px solid #44403c' }}>
          <div style={{ fontSize: '0.75rem', color: '#a8a29e' }}>Flavored Instant Coffee 4-Pack</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#a8a29e', textDecoration: 'line-through' }}>₹1,200</div>
        </div>
        <div style={{ background: '#052e16', padding: '12px', borderRadius: '8px', border: '1px solid #16a34a' }}>
          <div style={{ fontSize: '0.75rem', color: '#86efac' }}>Instagram Ad Anniversary Price</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4ade80' }}>₹240 (Save ₹960)</div>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>Delivery Address for Free Shipping &amp; Courier Tracking:</label>
            <input required type="text" value={address} onChange={e => setAddress(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>Enter UPI ID (`@okaxis / @paytm`) for Instant ₹240 Payment Mandate:</label>
            <input required type="text" placeholder="username@okicici / 9876543210@paytm" value={upiVpa} onChange={e => setUpiVpa(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#ea580c', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            {loading ? 'Sending ₹240 payment collect request to UPI app...' : 'Pay ₹240 via UPI & Order Coffee Combo'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Instagram Ad Storefront Phishing!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d6d3d1', margin: 0 }}>Scammers run sponsored ads on Instagram and Facebook pointing to cloned brand stores (`countrybean-sale.store`), debiting your ₹240 via UPI without shipping any coffee.</p>
        </div>
      )}
    </div>
  );
}

// ID 259: COVID Test Lab Emergency Verification UI
export function COVIDTestSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [passport, setPassport] = useState('Z88910245');
  const [upi, setUpi] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Passport & Identity Details', '₹1,499 Emergency Clearance Fee', 'UPI Payment Credentials']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🧬</span> National Health Lab Reports - Verification Portal
        </h3>
        <span style={{ background: '#450a0a', color: '#fca5a5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>QUARANTINE ALERT</span>
      </div>

      <div style={{ background: '#1e293b', padding: '14px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.85rem', color: '#cbd5e1', borderLeft: '4px solid #ef4444' }}>
        ⚠️ <strong>Travel Health Warning:</strong> Your pending international flight requires mandatory QR code validation of your medical RT-PCR report within 4 hours.
        <div style={{ marginTop: '6px', color: '#f87171' }}>To expedite instant laboratory sign-off and issue digital travel clearance, pay the ₹1,499 emergency laboratory fee.</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Passenger Passport Number / Aadhaar ID:</label>
            <input required type="text" value={passport} onChange={e => setPassport(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace', textTransform: 'uppercase' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>UPI ID / Card for ₹1,499 Emergency Lab Verification Fee:</label>
            <input required type="text" placeholder="traveler@okicici / Card Number" value={upi} onChange={e => setUpi(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Generating QR health pass & processing ₹1,499...' : 'Issue Digital QR Health Certificate & Pay ₹1,499'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Fake Medical Clearance Fee!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>Scammers exploit last-minute travel urgency with fake medical laboratory portals to collect ₹1,499 verification fees and steal traveler passport numbers.</p>
        </div>
      )}
    </div>
  );
}

// ID 274: Demographics Pro Social Media OAuth Scam UI
export function DemographicsProSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [handle, setHandle] = useState('@official_apex_brand');
  const [oauthPass, setOauthPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Instagram / X Full OAuth Token', 'Account Password', 'Read/Write/Post Permissions']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0a0f1d', border: '1px solid #1e293b', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f1f5f9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📊</span> Demographics Pro Audience Intelligence
        </h3>
        <span style={{ background: '#1e3a8a', color: '#93c5fd', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>OAUTH PERMISSION TRAP</span>
      </div>

      <div style={{ background: '#1e293b', padding: '14px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.85rem', borderLeft: '4px solid #38bdf8' }}>
        ℹ️ <strong>Analytics Scope Requested:</strong> Granting connection allows Demographics Pro to analyze follower sentiment and verify brand sponsorship eligibility.
        <div style={{ marginTop: '6px', color: '#fbbf24', fontSize: '0.75rem' }}>Requested OAuth Scopes: `account:read`, `messages:access`, `posts:publish_as_admin`</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Target Social Media Handle (`Instagram / X`):</label>
            <input required type="text" value={handle} onChange={e => setHandle(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Verify Account Password to authorize full read/write OAuth token:</label>
            <input required type="password" placeholder="Enter social account password" value={oauthPass} onChange={e => setOauthPass(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Granting full OAuth read/write/post access...' : 'Authorize OAuth Connection & Unlock Dashboard'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Social Media Account Hijacked!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>By granting `posts:publish_as_admin` and `messages:access` scopes to a rogue analytics app, scammers took over your brand account to broadcast crypto spam DMs to your followers.</p>
        </div>
      )}
    </div>
  );
}

// ID 275: Design Wizard Lifetime Voucher Subscription Trap UI
export function DesignWizardSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [card, setCard] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Stripe Payment Credentials ($39)', 'User Account details', 'Hidden $129/Month Recurring Billing Trap']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#18181b', border: '1px solid #3f3f46', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafafa' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #3f3f46', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#a855f7', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🎨</span> DesignWizard Pro Suite - Flash Lifetime Access
        </h3>
        <span style={{ background: '#3b0764', color: '#d8b4fe', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>LIFETIME PASS $39</span>
      </div>

      <div style={{ background: '#27272a', padding: '14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #3f3f46', fontSize: '0.85rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', color: '#d4d4d8', marginBottom: '10px' }}>
          <div>[✔] 1,500,000+ Premium Stock Photos</div>
          <div>[✔] Unlimited AI Vector & Logo Generator</div>
          <div>[✔] 4K Video Animation Editor</div>
          <div>[✔] Commercial Resell Rights Included</div>
        </div>
        <div style={{ background: '#000', padding: '10px', borderRadius: '6px', textAlign: 'center', color: '#4ade80', fontWeight: 'bold', fontSize: '1.1rem' }}>
          One-Time Clearance Offer: $39.00 USD
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>Your Email Address for Pro Suite Dashboard Delivery:</label>
            <input required type="email" placeholder="designer@studio.com" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>Credit Card Details for $39 Lifetime Pass Checkout:</label>
            <input required type="text" placeholder="4592-xxxx-xxxx-xxxx + CVV" value={card} onChange={e => setCard(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#9333ea', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            {loading ? 'Validating payment & activating lifetime graphics pass...' : 'Pay $39 & Activate Lifetime Graphic Suite'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Hidden $129/Month Subscription Trap!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d4d4d8', margin: 0 }}>The "Lifetime $39" banner concealed fine print stating that after 7 days, your card will be automatically billed $129/month indefinitely with no cancellation button inside the portal.</p>
        </div>
      )}
    </div>
  );
}
