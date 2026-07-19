import React, { useState } from 'react';

// ID 232: Business Today Magazine Award Nomination UI
export function BusinessTodaySim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [companyName, setCompanyName] = useState('Apex Digital Solutions Pvt Ltd');
  const [founderName, setFounderName] = useState('');
  const [payment, setPayment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Company Registration Details', 'Founder Identity Proof', '₹49,999 Processing Fee']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', border: '2px solid #fbbf24', borderRadius: '16px', padding: '2rem', maxWidth: '680px', margin: '0 auto', color: '#fff', boxShadow: '0 0 30px rgba(251,191,36,0.2)' }}>
      <div style={{ textAlign: 'center', borderBottom: '1px solid #3730a3', paddingBottom: '16px', marginBottom: '20px' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🏆</div>
        <h2 style={{ margin: 0, fontSize: '1.6rem', color: '#fbbf24', letterSpacing: '1px' }}>BUSINESS TODAY TOP 50 EMERGING LEADERS 2026</h2>
        <span style={{ fontSize: '0.8rem', color: '#c7d2fe' }}>Official Editorial Board Nomination Portal • Reference: #BT-NOM-4491</span>
      </div>

      <div style={{ background: 'rgba(251, 191, 36, 0.1)', border: '1px solid #fbbf24', padding: '16px', borderRadius: '12px', marginBottom: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.85rem', color: '#fde68a' }}>Congratulations! Your organization has been shortlisted for the prestigious "Leader of the Year" cover feature.</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', margin: '8px 0' }}>Nomination Fee: ₹49,999</div>
        <div style={{ fontSize: '0.75rem', color: '#93c5fd' }}>Includes 2 Page Magazine Spread + Trophy Delivery + Press Release Distribution</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e0e7ff' }}>Nominated Enterprise Legal Name:</label>
            <input required type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #4338ca', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e0e7ff' }}>Founder / Managing Director Full Name (as to be printed on trophy):</label>
            <input required type="text" placeholder="Enter Managing Director Name" value={founderName} onChange={e => setFounderName(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #4338ca', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e0e7ff' }}>Corporate Credit Card / Net Banking Account for ₹49,999 Fee:</label>
            <input required type="text" placeholder="4592-xxxx-xxxx-xxxx / HDFC NetBanking ID" value={payment} onChange={e => setPayment(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #4338ca', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#f59e0b', color: '#000', padding: '14px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1.05rem' }}>
            {loading ? 'Verifying corporate nomination & processing ₹49,999...' : 'Confirm Nomination & Pay Processing Fee'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.2)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Vanity Award Scam Triggered!</h4>
          <p style={{ fontSize: '0.85rem', color: '#e0e7ff', margin: 0 }}>Legitimate editorial publications do not charge shortlisted candidates ₹49,999 for nomination trophies. Scammers operate fake award committees to siphon money from ambitious executives.</p>
        </div>
      )}
    </div>
  );
}

// ID 235: Car Insurance Flash Renewal UI
export function CarInsuranceSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [regNo, setRegNo] = useState('MH-04-AB-9821');
  const [upiId, setUpiId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Vehicle Registration Details', 'UPI / Card Payment Credentials', '₹1,999 Instant Premium']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#0f172a' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>🚗</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#1e40af' }}>QuickInsure Direct Policy Renewal Portal</h3>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>IRDAI Authorized Partner Mirror • Instant PDF Generation</span>
          </div>
        </div>
        <span style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>FLASH SALE 80% OFF</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
          <div style={{ fontSize: '0.75rem', color: '#3b82f6' }}>Standard Zero-Depreciation Rate</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#94a3b8', textDecoration: 'line-through' }}>₹14,500</div>
        </div>
        <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
          <div style={{ fontSize: '0.75rem', color: '#16a34a' }}>Flash Discount Renewal Price</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#15803d' }}>₹1,999 (Valid 15 Mins)</div>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#334155', fontWeight: 'bold' }}>Vehicle Registration Number (`MH-04-AB-XXXX`):</label>
            <input required type="text" value={regNo} onChange={e => setRegNo(e.target.value)} style={{ width: '100%', padding: '10px', background: '#fff', border: '1px solid #94a3b8', borderRadius: '6px', color: '#0f172a', fontWeight: 'bold', textTransform: 'uppercase' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#334155', fontWeight: 'bold' }}>UPI ID or Debit Card for Instant ₹1,999 Payment:</label>
            <input required type="text" placeholder="username@okicici / 4592-xxxx-xxxx-xxxx" value={upiId} onChange={e => setUpiId(e.target.value)} style={{ width: '100%', padding: '10px', background: '#fff', border: '1px solid #94a3b8', borderRadius: '6px', color: '#0f172a', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#16a34a', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            {loading ? 'Generating policy document & processing ₹1,999...' : 'Issue Policy Document & Pay ₹1,999'}
          </button>
        </form>
      ) : (
        <div style={{ background: '#fef2f2', border: '1px solid #f87171', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#dc2626', margin: '0 0 8px 0' }}>Fake Policy Issued! Money Stolen!</h4>
          <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0 }}>The website generated a forged PDF document with fake policy numbers while transferring your ₹1,999 to an unauthorized personal bank account.</p>
        </div>
      )}
    </div>
  );
}

// ID 238: CAT Coaching Scholarship Test UI
export function CATCoachingSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [studentId, setStudentId] = useState('CAT-2026-9981');
  const [payment, setPayment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Student Academic Credentials', '₹499 Test Registration Fee', 'UPI / Card Payment Credentials']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🎓</span> IIM CAT 99.9 Percentile Scholarship Test 2026
        </h3>
        <span style={{ background: '#1e3a8a', color: '#93c5fd', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>100% TUITION WAIVER</span>
      </div>

      <div style={{ background: '#1e293b', padding: '14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #334155', textAlign: 'center' }}>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>⏳ All-India Online Scholarship Exam Starts In:</div>
        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#f59e0b', margin: '6px 0' }}>12m : 45s</div>
        <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Top 500 scorers receive complete ₹3.5 Lakh coaching tuition waiver + iPad Pro study kit.</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Student Roll ID / Academic Enrollment Number:</label>
            <input required type="text" value={studentId} onChange={e => setStudentId(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>UPI ID / Card for ₹499 Exam Server Registration &amp; Proctoring Fee:</label>
            <input required type="text" placeholder="student@okaxis / 4592-xxxx-xxxx-xxxx" value={payment} onChange={e => setPayment(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Reserving online exam seat & processing ₹499 fee...' : 'Lock Exam Slot & Pay ₹499 Proctoring Fee'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Fake Scholarship Exam Fee!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>Scammers lure competitive exam aspirants (`CAT/JEE/UPSC`) with promises of 100% scholarship tests, collecting lakhs of ₹499 registration fees for an exam that never happens.</p>
        </div>
      )}
    </div>
  );
}

// ID 239: Chai Point Commercial Franchise Kiosk UI
export function ChaiPointSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState('Metro Station Concourse, Sector 18, Noida');
  const [wireUTR, setWireUTR] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['₹50,000 Earnest Money Security Deposit', 'Commercial Property Location Data', 'Bank Wire Transfer Reference']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#18181b', border: '1px solid #3f3f46', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafafa' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #3f3f46', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>☕</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#fb923c' }}>Chai Point Commercial Partner Applications</h3>
            <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>Tech-Enabled Smart Kiosk Franchise • High Footfall Retail Model</span>
          </div>
        </div>
        <span style={{ background: '#431407', color: '#fdba74', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>FRANCHISE PHISHING</span>
      </div>

      <div style={{ background: '#27272a', padding: '14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #3f3f46', fontSize: '0.85rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ color: '#a1a1aa' }}>Selected Franchise Format:</span>
          <strong>Model A: Automated Smart Chai Kiosk</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ color: '#a1a1aa' }}>Estimated Monthly Revenue:</span>
          <strong>₹3,50,000 - ₹5,00,000 / month</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4ade80', fontWeight: 'bold', borderTop: '1px solid #3f3f46', paddingTop: '6px' }}>
          <span>Required Refundable Site Allocation Deposit:</span>
          <span>₹50,000.00</span>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>Proposed Kiosk Commercial Location / Address (`for site visit`):</label>
            <input required type="text" value={location} onChange={e => setLocation(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>NEFT / RTGS Transaction UTR Reference Number for ₹50,000 Deposit:</label>
            <input required type="text" placeholder="Enter bank UTR / reference number" value={wireUTR} onChange={e => setWireUTR(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#ea580c', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Allocating kiosk territory & verifying ₹50,000 deposit...' : 'Submit UTR Reference & Lock Kiosk Territory'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Franchise Earnest Deposit Stolen!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d4d4d8', margin: 0 }}>Scammers register lookalike franchise application websites (`chaipoint-partner.org`) and issue fake approval letters to siphon ₹50,000 site allocation deposits from entrepreneurs.</p>
        </div>
      )}
    </div>
  );
}

// ID 240: Cheque / RTGS Fund Transfer Freeze UI
export function ChequeTransferSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [corpId, setCorpId] = useState('');
  const [panNo, setPanNo] = useState('ABCDE1234F');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Corporate NetBanking ID & Password', 'Company PAN / GST Credentials', '₹18,500 Bond Fee']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0a0f1d', border: '1px solid #1e293b', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f1f5f9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>🏦</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8' }}>Corporate NetBanking Clearing House (`ICICI/HDFC Portal`)</h3>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>RBI Compliance Gateway • RTGS Reference: #UTR-8891024</span>
          </div>
        </div>
        <span style={{ background: '#450a0a', color: '#fca5a5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>FROZEN INBOUND RTGS</span>
      </div>

      <div style={{ background: '#1e293b', padding: '16px', borderRadius: '10px', marginBottom: '16px', border: '1px solid #334155' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
          <span style={{ color: '#94a3b8' }}>Inbound Client Payment Status:</span>
          <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>ON HOLD (AML Verification Required)</span>
        </div>
        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>₹4,50,000.00 <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>RTGS Credit</span></div>
        <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '8px 0 0 0' }}>
          Per RBI guidelines, high-value commercial transfers require an immediate **₹18,500 refundable indemnity bond** deposit from the beneficiary account to clear AML hold.
        </p>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Corporate NetBanking User ID / Account Number (`for indemnity hold verification`):</label>
            <input required type="text" placeholder="CORP-USER-9912 / Account Number" value={corpId} onChange={e => setCorpId(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Company PAN Number + Authorizer OTP / Password:</label>
            <input required type="password" placeholder="ABCDE1234F + Auth Password / OTP" value={panNo} onChange={e => setPanNo(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            {loading ? 'Authorizing indemnity bond & releasing ₹4,50,000 credit...' : 'Authorize ₹18,500 Bond & Release RTGS Hold'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Advance Fee Fraud & Banking Takeover!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The inbound RTGS credit (`₹4,50,000`) was a complete fabrication. Entering your net banking credentials allowed scammers to debit the ₹18,500 fee and access your operating account.</p>
        </div>
      )}
    </div>
  );
}

// ID 244: CIBIL Score Improvement UI
export function CIBILScoreSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [pan, setPan] = useState('');
  const [card, setCard] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['PAN Number Details', 'Debit/Credit Card Credentials', '₹3,499 Upfront Fee']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>📈</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8' }}>CIBIL Express Credit Bureau Repair</h3>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Direct Bureau Backend Access • Guaranteed 750+ within 48 Hours</span>
          </div>
        </div>
        <span style={{ background: '#065f46', color: '#6ee7b7', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>780+ GUARANTEE</span>
      </div>

      <div style={{ background: '#1e293b', padding: '14px', borderRadius: '8px', marginBottom: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '8px' }}>Detected Credit Profile Status</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#f87171' }}>540 (Poor)</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Current Bureau Score</div>
          </div>
          <div style={{ fontSize: '1.5rem', color: '#64748b' }}>➡️</div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#4ade80' }}>780 (Excellent)</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Post-Deletions Target</div>
          </div>
        </div>
        <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '10px', borderTop: '1px solid #334155', paddingTop: '8px' }}>
          Our backend lawyers immediately erase negative defaults and write-offs for a flat **₹3,499 bureau filing fee**.
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Permanent Account Number (PAN Card ID):</label>
            <input required type="text" placeholder="ABCDE1234F" value={pan} onChange={e => setPan(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace', textTransform: 'uppercase' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Credit / Debit Card Number for ₹3,499 Bureau Filing Charge:</label>
            <input required type="text" placeholder="4592-xxxx-xxxx-xxxx + CVV / PIN" value={card} onChange={e => setCard(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Submitting legal dispute & processing ₹3,499 charge...' : 'Erase Defaults & Pay ₹3,499 Bureau Fee'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Credit Bureau Fraud!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>No third-party company can illegally delete legitimate defaults from official credit bureaus (`CIBIL/Equifax`). Scammers collected your ₹3,499 and PAN details without fixing your score.</p>
        </div>
      )}
    </div>
  );
}

// ID 248: CNC Machining B2B Advance Wire UI
export function CNCMachiningSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [wireRef, setWireRef] = useState('');
  const [gstNo, setGstNo] = useState('27AABCU9603R1ZM');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['50% Advance Wire Transfer (₹85,000)', 'Company GST / Bank Credentials', 'B2B Procurement Order']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#18181b', border: '1px solid #3f3f46', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafafa' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #3f3f46', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>⚙️</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#f97316' }}>CNC Precision Works India - Wholesale Portal</h3>
            <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>ISO 9001:2015 Certified Manufacturing Partner • Quote #CNC-8812</span>
          </div>
        </div>
        <span style={{ background: '#431407', color: '#fdba74', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>B2B SUPPLIER PHISHING</span>
      </div>

      <div style={{ background: '#27272a', padding: '14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #3f3f46', fontSize: '0.85rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ color: '#a1a1aa' }}>Order Specification:</span>
          <strong>500 Units Custom Al-6061 Milling Parts</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ color: '#a1a1aa' }}>Total Quotation:</span>
          <strong>₹1,70,000.00 (Excl. GST)</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4ade80', fontWeight: 'bold', borderTop: '1px solid #3f3f46', paddingTop: '6px' }}>
          <span>Required 50% Advance Wire Deposit:</span>
          <span>₹85,000.00</span>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>Company GSTIN / Billing Registration Number:</label>
            <input required type="text" value={gstNo} onChange={e => setGstNo(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>NEFT / RTGS Wire Transfer Reference / UTR Number for ₹85,000 Deposit:</label>
            <input required type="text" placeholder="Enter bank transaction reference number" value={wireRef} onChange={e => setWireRef(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#ea580c', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Verifying advance wire deposit with account dispatch...' : 'Submit Wire Reference & Lock Production Slot'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>B2B Advance Payment Stolen!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d4d4d8', margin: 0 }}>The website was a cloned storefront mimicking a legitimate precision engineering firm. Once the 50% wire transfer (`₹85,000`) cleared, the scammers shut down the domain without delivering any machined components.</p>
        </div>
      )}
    </div>
  );
}

// ID 249: Coding Bootcamp ISA Laptop Security Deposit UI
export function CodingBootcampSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [aadhar, setAadhar] = useState('');
  const [payment, setPayment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['₹15,000 Laptop Security Deposit', 'Student Aadhaar / PAN Details', 'Income Share Agreement Signature']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0a0f1d', border: '1px solid #1e293b', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f1f5f9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>💻</span> DevCareer 100% Placement Guarantee Bootcamp
        </h3>
        <span style={{ background: '#065f46', color: '#6ee7b7', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>PAY ₹0 UPFRONT TUITION</span>
      </div>

      <div style={{ background: '#1e293b', padding: '14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #334155', fontSize: '0.85rem', color: '#cbd5e1' }}>
        🎉 <strong>ISA Pledge Approved:</strong> You pay ₹0 tuition fees until you get placed at a product company (`₹8+ LPA package guaranteed`).
        <div style={{ marginTop: '8px', background: '#020617', padding: '10px', borderRadius: '6px', color: '#fbbf24' }}>
          📦 <strong>Mandatory Hardware Dispatch:</strong> To receive your pre-configured Apple MacBook Pro M3 workstation, pay the refundable **₹15,000 asset security deposit**.
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Student Aadhaar ID / Identity Number (for ISA bond verification):</label>
            <input required type="text" placeholder="1234 5678 9012" value={aadhar} onChange={e => setAadhar(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>UPI / Card Credentials for ₹15,000 MacBook Security Deposit:</label>
            <input required type="text" placeholder="student@okicici / Card Number" value={payment} onChange={e => setPayment(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Dispatching Apple MacBook Pro & processing ₹15,000...' : 'Pay ₹15,000 Hardware Deposit & Sign ISA'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Fake Bootcamp Hardware Deposit!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The "Pay ₹0 Tuition" offer was bait. Scammers use fake placement guarantees (`ISA schemes`) to trick job seekers into paying ₹15,000 for non-existent company laptops.</p>
        </div>
      )}
    </div>
  );
}

// ID 255: Construction Permit Stop-Work Penalty UI
export function ConstructionPermitSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [siteId, setSiteId] = useState('PLOT-449-SECTOR-21');
  const [upi, setUpi] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Site Registration Details', 'Municipal Penalty Payment (₹25,000)', 'Bank Payment Credentials']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#1c1917', border: '2px solid #ef4444', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafaf9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #44403c', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>🏗️</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#ef4444' }}>Municipal Corporation Stop-Work Order Notice</h3>
            <span style={{ fontSize: '0.75rem', color: '#a8a29e' }}>Building &amp; Zoning Compliance Division • Violation #BLD-2026-8910</span>
          </div>
        </div>
        <span style={{ background: '#7f1d1d', color: '#fca5a5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>STOP WORK ORDER</span>
      </div>

      <div style={{ background: '#292524', padding: '14px', borderRadius: '8px', marginBottom: '16px', borderLeft: '4px solid #ef4444', fontSize: '0.85rem' }}>
        ⚠️ <strong>Violation Summary:</strong> Unauthorized environmental setback detected at site `PLOT-449`. Construction operations must cease immediately under Municipal Act Section 342.
        <div style={{ marginTop: '8px', fontWeight: 'bold', color: '#fca5a5' }}>
          To avoid heavy equipment seizure and criminal filing, remit the online compounding penalty of ₹25,000 immediately.
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>Construction Site Plot ID / Architect Registration Number:</label>
            <input required type="text" value={siteId} onChange={e => setSiteId(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>UPI ID or NetBanking Account for ₹25,000 Municipal Settlement:</label>
            <input required type="text" placeholder="builder@okaxis / NetBanking Account" value={upi} onChange={e => setUpi(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#dc2626', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Processing municipal violation clearing receipt...' : 'Pay ₹25,000 Compounding Penalty & Revoke Notice'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Fake Stop-Work Penalty Extortion!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d6d3d1', margin: 0 }}>Scammers pull public building permit listings and send forged municipal stop-work notices to extort panic payments (`₹25,000`) from active construction project managers.</p>
        </div>
      )}
    </div>
  );
}

// ID 257: Copper Futures MCX AI Trading UI
export function CopperFuturesSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [dematId, setDematId] = useState('');
  const [upiNo, setUpiNo] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Demat Trading Credentials', '₹50,000 Initial Margin Deposit', 'Bank Verification OTP']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0a0f1d', border: '1px solid #1e293b', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f1f5f9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📈</span> MCX Copper Futures AI Algorithmic Desk
        </h3>
        <span style={{ background: '#065f46', color: '#6ee7b7', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>300% MONTHLY GAIN</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: '#0f172a', padding: '12px', borderRadius: '8px', border: '1px solid #1e293b' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Copper Spot Price (`MCX-JUL`)</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4ade80' }}>₹842.50 (+4.8%)</div>
        </div>
        <div style={{ background: '#0f172a', padding: '12px', borderRadius: '8px', border: '1px solid #1e293b' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>AI High-Frequency Signal</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#38bdf8' }}>STRONG BUY (10x Leverage)</div>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Zerodha / AngelOne Demat Trading ID (`for AI bot linking`):</label>
            <input required type="text" placeholder="IN300123-1029XXXX / Demat Client ID" value={dematId} onChange={e => setDematId(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>UPI ID for Required ₹50,000 Margin Account Deposit:</label>
            <input required type="text" placeholder="trader@okicici / Bank UPI ID" value={upiNo} onChange={e => setUpiNo(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Activating AI high-frequency bot & depositing ₹50,000...' : 'Activate AI Trading & Deposit ₹50,000 Margin'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Fake Trading App Deposit Loss!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The commodity futures charts were entirely fabricated. Scammers lured you with promise of guaranteed AI trading profits to steal your ₹50,000 margin deposit.</p>
        </div>
      )}
    </div>
  );
}

// ID 267: Dallas County Property Tax Assessor Lien UI
export function DallasTaxSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [parcel, setParcel] = useState('DAL-7781-SECTOR-A');
  const [cardNo, setCardNo] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Property Parcel ID Number', '$1,450 Tax Clearing Payment', 'Credit Card Credentials']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#18181b', border: '1px solid #3f3f46', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafafa' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #3f3f46', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#a855f7', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🏛️</span> Dallas County Assessor - Tax Lien Portal
        </h3>
        <span style={{ background: '#450a0a', color: '#fca5a5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>DELINQUENT HOLD</span>
      </div>

      <div style={{ background: '#27272a', padding: '14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #3f3f46', fontSize: '0.85rem' }}>
        <div style={{ color: '#f87171', fontWeight: 'bold', marginBottom: '4px' }}>⚠️ Delinquent Property Notice: Warrant Issued</div>
        <div style={{ color: '#d4d4d8' }}>An administrative hold and tax lien of **$1,450.00** has been filed against your deed. Remit clearing payment within 24 hours to halt municipal auction proceedings.</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>Property Parcel ID / Deed Registration Reference:</label>
            <input required type="text" value={parcel} onChange={e => setParcel(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>Credit Card / Bank ACH Account for $1,450 Lien Settlement:</label>
            <input required type="text" placeholder="4592-xxxx-xxxx-xxxx + CVV" value={cardNo} onChange={e => setCardNo(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#9333ea', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Processing $1,450 settlement & lifting lien warrant...' : 'Pay $1,450 Tax Warrant Settlement'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Spoofed Government Tax Portal!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d4d4d8', margin: 0 }}>Scammers send fake tax lien letters directing homeowners to phishing portals (`.net/.org` instead of `.gov`), stealing credit card details under threat of property seizure.</p>
        </div>
      )}
    </div>
  );
}

// ID 270: daveverwer iOS Dev Weekly Newsletter Sponsorship UI
export function DaveverwerSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [company, setCompany] = useState('SuperSwift UI Tools Inc');
  const [stripeCard, setStripeCard] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Stripe Payment Credentials ($1,200)', 'Sponsorship Banner Assets', 'Company Contact Details']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📱</span> iOS Dev Weekly (`daveverwer-sponsorships.net`)
        </h3>
        <span style={{ background: '#1e3a8a', color: '#93c5fd', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>50,000 SUBSCRIBERS</span>
      </div>

      <div style={{ background: '#1e293b', padding: '14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #334155' }}>
        <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 'bold' }}>🗓️ Selected Slot: Issue #668 (Top Banner Feature)</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', margin: '6px 0' }}>Sponsorship Rate: $1,200.00</div>
        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Reach 50,000+ senior iOS/macOS developers worldwide. Slot reserved for 2 hours.</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Sponsoring App / Product Legal Name:</label>
            <input required type="text" value={company} onChange={e => setCompany(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Stripe Credit Card Details for $1,200 Slot Reservation:</label>
            <input required type="text" placeholder="4592-xxxx-xxxx-xxxx + CVV / Expiry" value={stripeCard} onChange={e => setStripeCard(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Locking newsletter slot & processing $1,200 checkout...' : 'Reserve Issue #668 Slot & Pay $1,200'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Spoofed Newsletter Sponsorship!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>Scammers register lookalike domains (`daveverwer-sponsorships.net`) and intercept developer marketing teams looking to sponsor popular tech newsletters like iOS Dev Weekly.</p>
        </div>
      )}
    </div>
  );
}

// ID 272: 0% Interest Debt Consolidation Relief UI
export function DebtConsolidationSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [loanAcc, setLoanAcc] = useState('HDFC-LOAN-99124-ACC');
  const [payment, setPayment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Existing Loan Account Numbers', '₹4,999 Processing Fee', 'Bank Payment Credentials']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafaf9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #44403c', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#f97316', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>💳</span> National Debt Relief &amp; Settlement Agency
        </h3>
        <span style={{ background: '#431407', color: '#ffedd5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>0% INTEREST SCHEME</span>
      </div>

      <div style={{ background: '#292524', padding: '14px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.85rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ color: '#a8a29e' }}>Consolidated Debt Balance:</span>
          <strong>₹8,00,000.00 across 3 Cards</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4ade80', fontWeight: 'bold' }}>
          <span>New Consolidated Monthly EMI:</span>
          <span>₹12,500/month (60% Savings)</span>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>Existing Credit Card / Personal Loan Account Number to settle:</label>
            <input required type="text" value={loanAcc} onChange={e => setLoanAcc(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>UPI / Debit Card for ₹4,999 Legal File Opening &amp; Processing Charge:</label>
            <input required type="text" placeholder="borrower@okaxis / Card Number" value={payment} onChange={e => setPayment(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#ea580c', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Opening legal relief file & charging ₹4,999...' : 'Pay ₹4,999 File Fee & Lock 0% Interest Relief'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Debt Relief Advance Fee Scam!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d6d3d1', margin: 0 }}>Scammers target distressed borrowers with promises of cutting interest to 0% and consolidating loans, collecting ₹4,999 upfront fees before vanishing.</p>
        </div>
      )}
    </div>
  );
}
