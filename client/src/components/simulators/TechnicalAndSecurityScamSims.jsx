import React, { useState } from 'react';

// ID 231: Burp Suite Pro Keygen Crack UI
export function BurpSuiteSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [avConfirm, setAvConfirm] = useState(false);
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Windows Defender Exception', 'Master System PIN', 'Full System Access']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0a0a0a', border: '2px solid #3f3f46', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f3f4f6', boxShadow: '0 0 20px rgba(239,68,68,0.2)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #262626', paddingBottom: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>🐞</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#f87171' }}>Burp Suite Pro 2024 Ultimate Keygen</h3>
            <span style={{ fontSize: '0.75rem', color: '#a3a3a3' }}>ShadowCrackers VIP Underground Forum • Downloaded 14,892 times</span>
          </div>
        </div>
        <span style={{ background: '#450a0a', color: '#fca5a5', border: '1px solid #ef4444', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>CRACK / TROJAN</span>
      </div>

      <div style={{ background: '#171717', padding: '14px', borderRadius: '8px', marginBottom: '16px', borderLeft: '4px solid #ef4444' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fca5a5', marginBottom: '4px' }}>⚠️ Activator Warning: Antivirus False Positive</div>
        <div style={{ fontSize: '0.8rem', color: '#d4d4d8' }}>To inject the license certificate into `burp.jar`, you must disable Windows Defender Real-time Protection and authorize the registry patcher.</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#1c1917', padding: '12px', borderRadius: '8px', border: '1px solid #44403c', cursor: 'pointer', fontSize: '0.85rem', color: '#fca5a5' }}>
            <input required type="checkbox" checked={avConfirm} onChange={e => setAvConfirm(e.target.checked)} style={{ width: '18px', height: '18px' }} />
            <span>I confirm Windows Defender / Antivirus real-time protection is temporarily disabled (`[OFF]`)</span>
          </label>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e5e7eb' }}>System Administrator Password / Master Vault PIN (for DLL injection):</label>
            <input required type="password" placeholder="Enter PIN / Admin Password" value={pin} onChange={e => setPin(e.target.value)} style={{ width: '100%', padding: '10px', background: '#171717', border: '1px solid #404040', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#dc2626', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Patching JVM & injecting registry backdoor...' : 'Run Keygen Activator & Patch Burp Suite'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>💥</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>System Root Compromised!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d4d4d8', margin: 0 }}>Disabling Windows Defender and running `burp_loader_v2.exe` dropped an async Cobalt Strike payload into `C:\Windows\Temp\` and harvested your master PIN.</p>
        </div>
      )}
    </div>
  );
}

// ID 233: Call Centre / Tech Support Siren UI
export function CallCentreSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [remoteId, setRemoteId] = useState('');
  const [bankUser, setBankUser] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['AnyDesk Remote Access ID', 'Online Banking Username', 'Full Desktop Control']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#450a0a', border: '3px solid #ef4444', borderRadius: '16px', padding: '2rem', maxWidth: '680px', margin: '0 auto', color: '#fff', textAlign: 'center', boxShadow: '0 0 40px rgba(239,68,68,0.6)' }}>
      <div style={{ background: '#dc2626', color: '#fff', padding: '8px 16px', borderRadius: '30px', display: 'inline-block', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '16px', textTransform: 'uppercase' }}>
        ⚠️ CRITICAL SYSTEM ALERT #0x80070422
      </div>

      <h2 style={{ fontSize: '1.6rem', color: '#fff', margin: '0 0 12px 0' }}>MICROSOFT SECURITY DEFENDER WARNING</h2>
      <p style={{ fontSize: '0.95rem', color: '#fca5a5', marginBottom: '16px', lineHeight: '1.5' }}>
        Your computer has been locked due to illegal spyware activity! Your net banking passwords and social security records are exposed. DO NOT REBOOT.
      </p>

      <div style={{ background: '#7f1d1d', border: '1px solid #ef4444', padding: '14px', borderRadius: '10px', marginBottom: '20px' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fef08a' }}>Call Toll-Free Certified Support Now:</div>
        <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', margin: '6px 0' }}>+91-1800-889-9999</div>
        <div style={{ fontSize: '0.8rem', color: '#fca5a5' }}>Live Chat with Technician Michael connected...</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left', background: '#1c1917', padding: '16px', borderRadius: '12px', border: '1px solid #57534e' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#fdba74' }}>Enter your AnyDesk / UltraViewer 9-Digit Remote ID (requested by technician Michael):</label>
            <input required type="text" placeholder="e.g. 849-201-442" value={remoteId} onChange={e => setRemoteId(e.target.value)} style={{ width: '100%', padding: '10px', background: '#0c0a09', border: '1px solid #78350f', borderRadius: '6px', color: '#fff', fontSize: '1rem', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#fdba74' }}>Verify Online Banking Username (to check for unauthorized wire transactions):</label>
            <input required type="text" placeholder="Enter retail net banking username" value={bankUser} onChange={e => setBankUser(e.target.value)} style={{ width: '100%', padding: '10px', background: '#0c0a09', border: '1px solid #78350f', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#ef4444', color: '#fff', padding: '14px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1.05rem' }}>
            {loading ? 'Connecting technician & initiating remote screen sharing...' : 'Grant Remote Access & Verify Bank Account'}
          </button>
        </form>
      ) : (
        <div style={{ background: '#1c1917', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🔓</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Remote Desktop & Banking Hijacked!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d4d4d8', margin: 0 }}>Sharing your AnyDesk ID allowed scammers to remotely control your screen, blank out your monitor, and initiate wire transfers using your verified banking ID.</p>
        </div>
      )}
    </div>
  );
}

// ID 243: Fake Chrome Remote Desktop Support UI
export function ChromeRemoteDesktopSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [accessCode, setAccessCode] = useState('');
  const [ssoAuth, setSsoAuth] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Chrome Remote Access Code', 'Workplace SSO Credentials', 'Unrestricted Screen Access']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>🌐</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8' }}>Chrome Remote Desktop Support Portal</h3>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Corporate IT Helpdesk Ticket #IT-2026-991 • Priority: URGENT</span>
          </div>
        </div>
        <span style={{ background: '#1e3a8a', color: '#93c5fd', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>HELP DESK PHISHING</span>
      </div>

      <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.85rem', color: '#cbd5e1' }}>
        💬 <strong>IT Helpdesk Message:</strong> "We detected severe CPU throttling and network latency on your workstation (`WS-ENG-04`). Please generate a 12-digit Chrome Remote Desktop access code so our team can apply the patch."
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>12-Digit Chrome Remote Desktop Access Code (`remotedesktop.google.com`):</label>
            <input required type="text" placeholder="1234 5678 9012" value={accessCode} onChange={e => setAccessCode(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#38bdf8', fontSize: '1.1rem', fontFamily: 'monospace', letterSpacing: '2px', textAlign: 'center' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Workplace Single Sign-On (SSO) Email &amp; Password:</label>
            <input required type="password" placeholder="user@company.com : WorkplacePass123" value={ssoAuth} onChange={e => setSsoAuth(e.target.value)} style={{ width: '100%', padding: '10px', background: '#020617', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Verifying access code & establishing remote session...' : 'Connect IT Support Technician'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Unrestricted Remote Access Granted!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The fake IT helpdesk used your Chrome Remote Desktop code to take over your mouse, open corporate folders, and export sensitive company data.</p>
        </div>
      )}
    </div>
  );
}

// ID 246: Fake Citrix XenApp Enterprise Gateway UI
export function CitrixXenAppSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [domainUser, setDomainUser] = useState('');
  const [adAuth, setAdAuth] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Active Directory Domain Credentials', 'MFA OTP Token', 'Corporate VPN & Desktop Access']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#e6edf3' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #21262d', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#58a6ff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🏢</span> Citrix Remote Workspace Gateway (`workspace.remote-corp.com`)
        </h3>
        <span style={{ background: '#21262d', color: '#ff7b72', border: '1px solid #f85149', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>CREDENTIAL PHISHING</span>
      </div>

      <div style={{ background: '#161b22', padding: '12px', borderRadius: '8px', border: '1px solid #30363d', marginBottom: '16px', fontSize: '0.85rem', color: '#8b949e' }}>
        🔒 <strong>SSL Notice:</strong> Active Directory Certificate expired for domain `CORP-REMOTE`. Please synchronize your domain credentials and Authenticator OTP to maintain Citrix XenApp virtual desktop access.
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#c9d1d9' }}>Corporate Active Directory Domain &amp; Username (`CORP-DOMAIN\username`):</label>
            <input required type="text" placeholder="CORP-DOMAIN\jdoe" value={domainUser} onChange={e => setDomainUser(e.target.value)} style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#c9d1d9' }}>Active Directory Password + Microsoft Authenticator 6-Digit OTP:</label>
            <input required type="password" placeholder="CorpPassword123 + OTP: 489201" value={adAuth} onChange={e => setAdAuth(e.target.value)} style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#238636', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Validating Active Directory ticket & syncing session...' : 'Synchronize Citrix Active Directory Session'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#ff7b72', margin: '0 0 8px 0' }}>Citrix Enterprise Gateway Compromised!</h4>
          <p style={{ fontSize: '0.85rem', color: '#8b949e', margin: 0 }}>The login portal was an exact phishing clone. Scammers captured your Active Directory credentials and OTP, logging directly into your corporate VPN.</p>
        </div>
      )}
    </div>
  );
}

// ID 262: Fake Crystal Reports Scam UI
export function CrystalReportsSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [netShare, setNetShare] = useState('\\\\FILE-SERVER-01\\Accounting_Data\\');
  const [localAdmin, setLocalAdmin] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Shared Network Drive Path', 'Local Administrator Password', 'Accounting Database Access']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafaf9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #44403c', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#f97316', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📊</span> SAP Crystal Reports 2024 DLL Keygen Patcher
        </h3>
        <span style={{ background: '#431407', color: '#ffedd5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>NETWORK RANSOMWARE</span>
      </div>

      <div style={{ background: '#292524', padding: '12px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#fbbf24', marginBottom: '16px' }}>
        <div>[!] Accounting .RPT Viewer License Expired</div>
        <div>[+] Patching crystal32.dll across local and shared accounting drives...</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>Shared Accounting Network Drive Path (`\\FILE-SERVER-01\`):</label>
            <input required type="text" value={netShare} onChange={e => setNetShare(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>Local Administrator Password (to overwrite System DLLs):</label>
            <input required type="password" placeholder="Enter Local Admin Password" value={localAdmin} onChange={e => setLocalAdmin(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#ea580c', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Patching DLLs & executing network worm traversal...' : 'Patch SAP Crystal DLLs & Run Keygen'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Network Drive Encrypted by Ransomware!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d6d3d1', margin: 0 }}>The keygen executable contained a network-worm ransomware that traversed `\\FILE-SERVER-01\Accounting_Data\` and encrypted all corporate financial reports.</p>
        </div>
      )}
    </div>
  );
}

// ID 276: Fake Dial-Up Internet Scam UI
export function DialUpInternetSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [routerPass, setRouterPass] = useState('');
  const [payment, setPayment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Router Admin Password (192.168.1.1)', 'UPI / Card Payment Credentials', 'DNS Configuration Access']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🔌</span> ISP Broadband Network Speed Diagnostic
        </h3>
        <span style={{ background: '#1e3a8a', color: '#93c5fd', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>ROUTER DNS HIJACK</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Detected Connection Speed</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#f87171' }}>14.4 kbps (Throttled)</div>
        </div>
        <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Required Driver Patch</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#38bdf8' }}>NetFix_Driver.msi</div>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Broadband Router Admin Password (`192.168.1.1` Gateway unlock):</label>
            <input required type="password" placeholder="admin / router_password_123" value={routerPass} onChange={e => setRouterPass(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>UPI ID or Debit Card for ₹999 Network Patch Consultation Fee:</label>
            <input required type="text" placeholder="username@okaxis / 4592-xxxx-xxxx-xxxx" value={payment} onChange={e => setPayment(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Patching router DNS & processing ₹999 charge...' : 'Install Driver Patch & Pay ₹999 Fee'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Router DNS Hijacked!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>Submitting your router admin password allowed scammers to modify your DNS settings (`192.168.1.1`), redirecting all future banking logins to phishing mirrors.</p>
        </div>
      )}
    </div>
  );
}
