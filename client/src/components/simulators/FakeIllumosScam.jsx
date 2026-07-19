import React, { useState } from "react";

export default function FakeIllumosScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [hostname, setHostname] = useState("");

  const [rootPassword, setRootPassword] = useState("");
  const [sshKey, setSshKey] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #0066cc",
    fontSize: "15px",
    outline: "none",
    background: "#0a1628",
    color: "#bfdbfe",
    fontFamily: "monospace",
    boxSizing: "border-box"
  };

  const codeStyle = {
    background: "#000",
    color: "#60a5fa",
    padding: "12px 16px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    margin: "10px 0",
    border: "1px solid #1e3a5f",
    overflowX: "auto",
    whiteSpace: "pre-wrap"
  };

  /* ===================================
        AUTHENTICATION / REMOTE ACCESS PAGE
  =================================== */
  if (view === "auth") {
    return (
      <div style={{ background: "#050d1a", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#0a1628", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(0,102,204,.25)", color: "#fff", border: "1px solid #1e3a5f" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>☀️</div>
            <h1 style={{ color: "#60a5fa", fontFamily: "monospace" }}>illumos Enterprise Support</h1>
            <h2>Remote Access Authentication</h2>
            <p style={{ color: "#93c5fd" }}>Authenticate to enable remote ZFS optimization & security patching</p>
          </div>

          <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #0066cc" }}>
            <h3 style={{ color: "#60a5fa" }}>🔐 Why we need your credentials</h3>
            <ul style={{ lineHeight: "1.8", color: "#bfdbfe" }}>
              <li>✔ Remotely tune ZFS ARC and L2ARC cache</li>
              <li>✔ Apply critical kernel security patches</li>
              <li>✔ Optimize storage pool performance</li>
              <li>✔ Configure SMF services & network hardening</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ Your credentials are encrypted with AES-256 and used only for this session.
            </p>
          </div>

          <div style={codeStyle}>
{`$ ssh root@${hostname || "your-server"} "pkg install illumos-enterprise-tools"
[INFO] Authenticating with target system...
[INFO] Applying ZFS optimizations...`}
          </div>

          <label style={{ color: "#93c5fd", fontSize: "13px" }}>Root Password (for remote system access)</label>
          <input
            placeholder="Enter root password..."
            type="password"
            value={rootPassword}
            onChange={(e) => setRootPassword(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#93c5fd", fontSize: "13px" }}>SSH Private Key (for key-based authentication)</label>
          <textarea
            placeholder="-----BEGIN RSA PRIVATE KEY-----&#10;..."
            value={sshKey}
            onChange={(e) => setSshKey(e.target.value)}
            style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#0066cc,#0052a3)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ illumos-support --connect --optimize
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
      <div style={{ background: "#050d1a", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.4)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake illumos Enterprise Support Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>🏢 Company: <b>{company || "Not provided"}</b></li>
                  <li>🖥️ Hostname: <b>{hostname || "Not provided"}</b></li>
                  <li>🔑 Root Password: <b>{rootPassword ? "••••••••" : "Not provided"}</b></li>
                  <li>🔐 SSH Key: <b>{sshKey ? "•••••••• (exposed)" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>illumos is community-driven — no official "enterprise support" exists.</li>
                  <li>Requests root password (NEVER share this).</li>
                  <li>Requests SSH private key (NEVER share this).</li>
                  <li>Promises to "remotely optimize" production systems (huge red flag).</li>
                  <li>Unofficial domain (not illumos.org).</li>
                  <li>No official illumos foundation endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — FULL INFRASTRUCTURE COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How to Safely Manage illumos Systems</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Download illumos from official sources: <b>illumos.org</b> or <b>github.com/illumos</b>.</li>
                <li>✅ Use official package management: <b>pkg install</b> from verified repositories.</li>
                <li>✅ <b>Never share your root password</b> with any third-party service or website.</li>
                <li>✅ <b>Never share SSH private keys</b> — use certificate-based authentication instead.</li>
                <li>✅ Apply patches manually using <b>pkg update</b> from official repos.</li>
                <li>✅ For enterprise support, contact certified partners (not random websites).</li>
                <li>✅ If compromised: <b>change root password immediately</b> and rotate all SSH keys.</li>
                <li>✅ Report phishing to the illumos community and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Searched for "illumos enterprise support" or "ZFS optimization service"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted website</p>
              <p>⬇</p>
              <p>✅ Entered root password and SSH key for "remote access"</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Root Access to Critical Storage Infrastructure</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, company, hostname, rootPassword, sshKey })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#0066cc,#0052a3)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#050d1a,#0a1628)", minHeight: "100vh", padding: "40px", color: "#bfdbfe" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#0a1628", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,102,204,.2)", border: "1px solid #1e3a5f" }}>
          <div style={{ background: "linear-gradient(90deg,#0052a3,#0066cc,#3b82f6)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>☀️ illumos Enterprise Support</h1>
            <h3 style={{ color: "#dbeafe" }}>Professional ZFS Optimization & Security Services</h3>
            <p style={{ color: "#bfdbfe" }}>Trusted by Fortune 500 companies worldwide</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "12px", border: "1px solid #0066cc" }}>
                <div style={{ fontSize: "36px" }}>💾</div>
                <h3 style={{ color: "#60a5fa" }}>ZFS Tuning</h3>
                <p style={{ color: "#93c5fd", fontSize: "14px" }}>ARC, L2ARC optimization</p>
              </div>
              <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "12px", border: "1px solid #0066cc" }}>
                <div style={{ fontSize: "36px" }}>🔒</div>
                <h3 style={{ color: "#60a5fa" }}>Security Hardening</h3>
                <p style={{ color: "#93c5fd", fontSize: "14px" }}>Kernel & network patches</p>
              </div>
              <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "12px", border: "1px solid #0066cc" }}>
                <div style={{ fontSize: "36px" }}>⚡</div>
                <h3 style={{ color: "#60a5fa" }}>Performance</h3>
                <p style={{ color: "#93c5fd", fontSize: "14px" }}>Storage pool optimization</p>
              </div>
              <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "12px", border: "1px solid #0066cc" }}>
                <div style={{ fontSize: "36px" }}>🛠️</div>
                <h3 style={{ color: "#60a5fa" }}>24/7 Support</h3>
                <p style={{ color: "#93c5fd", fontSize: "14px" }}>Remote administration</p>
              </div>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #1e3a5f" }}>
              <h3 style={{ color: "#60a5fa", fontFamily: "monospace" }}>📦 Quick Setup</h3>
              <div style={codeStyle}>$ pkg install illumos-enterprise-tools</div>
              <div style={codeStyle}>$ illumos-support --connect --optimize</div>
            </div>

            <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ Remote Access Required</h2>
              <p>To enable ZFS optimization and apply security patches, we need secure remote access to your illumos systems.</p>
            </div>

            <h2 style={{ color: "#60a5fa" }}>📝 Register for Enterprise Support</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle} />
            <input placeholder="Target Hostname (e.g., zfs-prod-01)" value={hostname} onChange={(e) => setHostname(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("auth")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#0066cc,#0052a3)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ illumos-support --setup →
            </button>

            <p style={{ textAlign: "center", color: "#93c5fd", fontSize: "12px", marginTop: "20px" }}>
              © 2026 illumos Enterprise Support (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}