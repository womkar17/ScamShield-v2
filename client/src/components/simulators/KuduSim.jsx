import React, { useState } from 'react';

// Inlined Base Template (MalwareDownloadSim) for self-contained simulation

/**
 * Reusable simulator for "fake software / tool download" scams.
 * A lookalike site impersonates a real developer tool, OS, or addon and
 * tricks the user into handing over contact details and disabling their
 * device's built-in protection to "unlock" the download.
 *
 * Props:
 *  - toolName: display name of the impersonated tool (e.g. "KiTTY")
 *  - icon: emoji shown in the header
 *  - siteUrl: the fake lookalike domain shown in the browser bar
 *  - fileLabel: what's being downloaded (e.g. "Windows Installer", "APK", "ISO Image")
 *  - onComplete(exposedArray)
 */
function MalwareDownloadSim({ toolName, icon = '🧩', siteUrl, fileLabel = 'Installer', onComplete }) {
  const [view, setView] = useState('search');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [disableAV, setDisableAV] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const goToDownload = (e) => {
    e.preventDefault();
    setView('download');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !mobile.trim()) {
      setError('Please fill in both fields to unlock your download.');
      return;
    }
    if (!disableAV) {
      setError('You must allow the installer permission to continue (uncheck your antivirus block).');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Email Address', 'Phone Number', 'Antivirus / Security Protection Disabled', 'Malware Installed on Device']);
    }, 1500);
  };

  if (view === 'search') {
    return (
      <div style={{
        maxWidth: '520px', margin: '0 auto', background: '#fff', borderRadius: '10px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.35)', overflow: 'hidden', fontFamily: 'Arial, sans-serif', color: '#202124'
      }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.2rem' }}>🔍</span>
          <span style={{ color: '#5f6368', fontSize: '0.95rem' }}>{toolName} download free full version</span>
        </div>
        <div style={{ padding: '18px 20px' }}>
          <p style={{ fontSize: '0.78rem', color: '#006621', margin: '0 0 4px' }}>{siteUrl}</p>
          <a href="#" onClick={goToDownload} style={{ fontSize: '1.05rem', color: '#1a0dab', textDecoration: 'none', display: 'block', marginBottom: '6px' }}>
            Download {toolName} {fileLabel} — 100% Free, Verified &amp; Virus-Free
          </a>
          <p style={{ fontSize: '0.85rem', color: '#4d5156', margin: 0, lineHeight: '1.5' }}>
            Get the latest {toolName} {fileLabel} instantly. No sign-up needed — fastest mirror, updated today. Trusted by
            thousands of users worldwide. Click to download now.
          </p>
        </div>
        <div style={{ padding: '10px 20px', background: '#f8f9fa', fontSize: '0.75rem', color: '#999' }}>
          This listing is not affiliated with the official {toolName} project or maintainers.
        </div>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '480px', margin: '0 auto', background: '#12141c', borderRadius: '12px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)', overflow: 'hidden', fontFamily: 'Segoe UI, Arial, sans-serif', color: '#eee'
    }}>
      <div style={{ background: 'linear-gradient(135deg, #2c2f4a, #1b1d2e)', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '48px', height: '48px', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>{icon}</div>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.1rem' }}>{toolName} {fileLabel}</h2>
          <p style={{ margin: '2px 0 0', fontSize: '0.78rem', color: '#9aa0b4' }}>{siteUrl}</p>
        </div>
      </div>
      <div style={{ padding: '24px' }}>
        <p style={{ fontSize: '0.9rem', color: '#c7cad6', lineHeight: '1.6', marginTop: 0 }}>
          To prevent bot downloads, please verify you're human and unlock your high-speed download link below.
        </p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#9aa0b4' }}>Email Address</label>
            <input type="text" value={email} onChange={e => { setEmail(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #333', background: '#1c1f2e', color: '#fff', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#9aa0b4' }}>Mobile Number</label>
            <input type="text" value={mobile} onChange={e => { setMobile(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #333', background: '#1c1f2e', color: '#fff', boxSizing: 'border-box' }} />
          </div>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: '#9aa0b4', marginBottom: '18px', lineHeight: '1.4' }}>
            <input type="checkbox" checked={disableAV} onChange={e => { setDisableAV(e.target.checked); setError(''); }} style={{ marginTop: '3px' }} />
            I allow this installer to bypass my antivirus / SmartScreen warning so setup can continue.
          </label>
          {error && <p style={{ color: '#ff6b6b', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#555' : 'linear-gradient(135deg, #6366f1, #a855f7)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Preparing download…' : `Unlock ${fileLabel} Download`}
          </button>
        </form>
      </div>
      <div style={{ background: '#0d0f18', padding: '10px 24px', fontSize: '0.72rem', color: '#666', textAlign: 'center' }}>
        Unofficial mirror — not affiliated with the real {toolName} project
      </div>
    </div>
  );
}


// Main Simulation Component

export default function KuduSim({ onComplete }) {
  return (
    <MalwareDownloadSim
      toolName="Kudu"
      icon="☁️"
      siteUrl="kudu-download.com"
      fileLabel="Installer"
      onComplete={onComplete}
    />
  );
}
