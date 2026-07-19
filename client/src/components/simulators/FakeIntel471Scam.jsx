import React, { useState } from "react";

export default function FakeIntel471Scam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const [corporatePassword, setCorporatePassword] = useState("");
  const [existingApiKey, setExistingApiKey] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #dc2626",
    fontSize: "15px",
    outline: "none",
    background: "#0f0f0f",
    color: "#fecaca",
    fontFamily: "monospace",
    boxSizing: "border-box"
  };

  const codeStyle = {
    background: "#000",
    color: "#f87171",
    padding: "12px 16px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    margin: "10px 0",
    border: "1px solid #7f1d1d",
    overflowX: "auto",
    whiteSpace: "pre-wrap"
  };

  /* ===================================
        ACTIVATION / AUTH PAGE
  =================================== */
  if (view === "activate") {
    return (
      <div style={{ background: "#050505", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#0f0f0f", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(220,38,38,.3)", color: "#fff", border: "1px solid #7f1d1d" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🕸️</div>
            <h1 style={{ color: "#f87171", fontFamily: "monospace" }}>Intel 471 Platform</h1>
            <h2>Enterprise Trial Activation</h2>
            <p style={{ color: "#fca5a5" }}>Verify your corporate domain to unlock the Dark Web Monitoring dashboard</p>
          </div>

          <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #dc2626" }}>
            <h3 style={{ color: "#f87171" }}>🔐 Why we need your credentials</h3>
            <ul style={{ lineHeight: "1.8", color: "#fecaca" }}>
              <li>✔ Verify your corporate email domain for enterprise access</li>
              <li>✔ Sync existing threat intel feeds with your SIEM</li>
              <li>✔ Provision your dedicated APT monitoring instance</li>
              <li>✔ Grant access to exclusive cybercrime forum archives</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ All credentials are encrypted with AES-256 and used only for domain verification.
            </p>
          </div>

          <div style={codeStyle}>
{`$ intel471-cli --activate-trial --domain=${company.toLowerCase().replace(/\s+/g, '')}.com
[INFO] Verifying corporate domain...
[INFO] Requesting SSO/API integration...`}
          </div>

          <label style={{ color: "#fca5a5", fontSize: "13px" }}>Corporate Email Password (for domain verification)</label>
          <input
            placeholder="Enter your corporate password..."
            type="password"
            value={corporatePassword}
            onChange={(e) => setCorporatePassword(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#fca5a5", fontSize: "13px" }}>Existing Threat Intel API Key (for feed migration)</label>
          <input
            placeholder="e.g., i471-api-xxxxxxxxxxxxxxxxxxxx"
            value={existingApiKey}
            onChange={(e) => setExistingApiKey(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#dc2626,#991b1b)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ intel471-cli --verify --provision
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
      <div style={{ background: "#050505", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.5)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Intel 471 Threat Intelligence Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#991b1b", marginTop: 0 }}>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Corporate Email: <b>{email || "Not provided"}</b></li>
                  <li>🏢 Company: <b>{company || "Not provided"}</b></li>
                  <li>💼 Role: <b>{role || "Not provided"}</b></li>
                  <li>🔑 Corporate Password: <b>{corporatePassword ? "•••••••• (COMPROMISED)" : "Not provided"}</b></li>
                  <li>🗝️ Existing API Key: <b>{existingApiKey ? existingApiKey.slice(0, 10) + "..." : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#9a3412", marginTop: 0 }}>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Unofficial domain (not intel471.com).</li>
                  <li>Requests corporate passwords for "domain verification" (NEVER do this).</li>
                  <li>Requests existing API keys for "feed migration" (huge red flag).</li>
                  <li>Promises "free" access to premium enterprise threat intel.</li>
                  <li>Fake CLI commands designed to look legitimate.</li>
                  <li>No official Intel 471 partnership or endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#1e40af", marginTop: 0 }}>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — CORPORATE NETWORK & THREAT INTEL COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#065f46", marginTop: 0 }}>🛡 How to Safely Evaluate Threat Intel</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Access Intel 471 <b>only</b> through the official portal: <b>intel471.com</b></li>
                <li>✅ <b>Never enter your corporate password</b> on any third-party website or trial form.</li>
                <li>✅ <b>Never share existing API keys</b> — legitimate vendors do not need your competitor's or previous vendor's keys.</li>
                <li>✅ Request enterprise trials through official sales channels, not random web forms.</li>
                <li>✅ Use corporate SSO (Single Sign-On) and MFA for all security tool access.</li>
                <li>✅ If you entered your password: <b>change it immediately</b> and notify your IT/Security team.</li>
                <li>✅ If you shared an API key: <b>revoke it immediately</b> in the originating platform.</li>
                <li>✅ Report phishing to Intel 471 and your national CERT.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#334155", marginTop: 0 }}>📈 Scam Timeline</h2>
              <p>✅ Searched for "Intel 471 free trial" or "dark web monitoring API"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted website (e.g., intel471-trial.com)</p>
              <p>⬇</p>
              <p>✅ Entered corporate email and job role</p>
              <p>⬇</p>
              <p>✅ Entered corporate password for "domain verification"</p>
              <p>⬇</p>
              <p>✅ Entered existing threat intel API key</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Corporate Access & Stole Threat Intelligence Data</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, company, role, corporatePassword, existingApiKey })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#dc2626,#991b1b)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#050505,#0f0f0f)", minHeight: "100vh", padding: "40px", color: "#fecaca" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#0f0f0f", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(220,38,38,.2)", border: "1px solid #7f1d1d" }}>
          <div style={{ background: "linear-gradient(90deg,#991b1b,#dc2626,#ef4444)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🕸️ Intel 471 Platform</h1>
            <h3 style={{ color: "#fecaca" }}>Actionable Cybercrime Intelligence & Threat Hunting</h3>
            <p style={{ color: "#fca5a5" }}>Start your 30-Day Enterprise Dark Web Monitoring Trial</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "12px", border: "1px solid #dc2626" }}>
                <div style={{ fontSize: "36px" }}>🎯</div>
                <h3 style={{ color: "#f87171" }}>APT Tracking</h3>
                <p style={{ color: "#fca5a5", fontSize: "14px" }}>Real-time actor monitoring</p>
              </div>
              <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "12px", border: "1px solid #dc2626" }}>
                <div style={{ fontSize: "36px" }}>🕸️</div>
                <h3 style={{ color: "#f87171" }}>Dark Web Forums</h3>
                <p style={{ color: "#fca5a5", fontSize: "14px" }}>Underground community access</p>
              </div>
              <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "12px", border: "1px solid #dc2626" }}>
                <div style={{ fontSize: "36px" }}>🔌</div>
                <h3 style={{ color: "#f87171" }}>API & SIEM</h3>
                <p style={{ color: "#fca5a5", fontSize: "14px" }}>Seamless integration</p>
              </div>
              <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "12px", border: "1px solid #dc2626" }}>
                <div style={{ fontSize: "36px" }}>📊</div>
                <h3 style={{ color: "#f87171" }}>Malware Analysis</h3>
                <p style={{ color: "#fca5a5", fontSize: "14px" }}>Deep technical teardowns</p>
              </div>
            </div>

            <div style={{ background: "linear-gradient(135deg,#fbbf24,#f59e0b)", padding: "25px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#0f0f0f", margin: "0 0 10px 0" }}>🎁 LIMITED OFFER: Free 30-Day Enterprise Trial</h2>
              <p style={{ color: "#78350f", fontSize: "16px", margin: "0 0 10px 0" }}>Get full access to APT reports, forum monitoring, and API endpoints.</p>
              <p style={{ color: "#92400e", fontWeight: "700", margin: 0 }}>⚠️ Only 5 trial licenses remaining for this quarter!</p>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #7f1d1d" }}>
              <h3 style={{ color: "#f87171", fontFamily: "monospace" }}>📦 Quick Integration</h3>
              <div style={codeStyle}>$ npm install -g @intel471/cli</div>
              <div style={codeStyle}>$ intel471-cli --activate-trial --domain=yourcompany.com</div>
            </div>

            <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ Domain Verification Required</h2>
              <p>To prevent abuse and provision your dedicated enterprise instance, we must verify your corporate domain and existing integrations.</p>
            </div>

            <h2 style={{ color: "#f87171" }}>📝 Register for Enterprise Trial</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Corporate Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle} />
            <input placeholder="Your Role (e.g., SOC Analyst, CISO)" value={role} onChange={(e) => setRole(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("activate")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#dc2626,#991b1b)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ intel471-cli --begin-setup →
            </button>

            <p style={{ textAlign: "center", color: "#fca5a5", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Intel 471 Platform (FAKE — for educational purposes only. Intel 471 is a legitimate company.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}