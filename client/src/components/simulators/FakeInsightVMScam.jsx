import React, { useState } from "react";

export default function FakeInsightVMScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [orgId, setOrgId] = useState("");

  const [rapid7Email, setRapid7Email] = useState("");
  const [rapid7Password, setRapid7Password] = useState("");
  const [apiKey, setApiKey] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #9333ea",
    fontSize: "15px",
    outline: "none",
    background: "#1a0b2e",
    color: "#e9d5ff",
    fontFamily: "monospace",
    boxSizing: "border-box"
  };

  const codeStyle = {
    background: "#000",
    color: "#c084fc",
    padding: "12px 16px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    margin: "10px 0",
    border: "1px solid #4c1d95",
    overflowX: "auto",
    whiteSpace: "pre-wrap"
  };

  /* ===================================
        LICENSE ACTIVATION / AUTH PAGE
  =================================== */
  if (view === "activate") {
    return (
      <div style={{ background: "#0a0518", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#1a0b2e", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(147,51,234,.3)", color: "#fff", border: "1px solid #4c1d95" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🛡️</div>
            <h1 style={{ color: "#c084fc", fontFamily: "monospace" }}>InsightVM Enterprise</h1>
            <h2>License Activation & Cloud Sync</h2>
            <p style={{ color: "#d8b4fe" }}>Authenticate to activate your enterprise license and sync scan data</p>
          </div>

          <div style={{ background: "#4c1d95", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #9333ea" }}>
            <h3 style={{ color: "#c084fc" }}>🔐 Why we need your credentials</h3>
            <ul style={{ lineHeight: "1.8", color: "#e9d5ff" }}>
              <li>✔ Activate your InsightVM Enterprise license</li>
              <li>✔ Sync scan data with Rapid7 Insight Platform</li>
              <li>✔ Deploy scan engines to your network</li>
              <li>✔ Integrate with your SIEM (Splunk, QRadar)</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ All credentials are encrypted with AES-256 and stored in a zero-knowledge vault.
            </p>
          </div>

          <div style={codeStyle}>
{`$ insightvm-enterprise --activate --license=ENT-2026-XXXX
[INFO] Connecting to Rapid7 Insight Platform...
[INFO] Authenticating user...
[INFO] Syncing vulnerability data...`}
          </div>

          <label style={{ color: "#d8b4fe", fontSize: "13px" }}>Rapid7 Insight Platform Email</label>
          <input
            placeholder="admin@yourcompany.com"
            value={rapid7Email}
            onChange={(e) => setRapid7Email(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#d8b4fe", fontSize: "13px" }}>Rapid7 Insight Platform Password</label>
          <input
            placeholder="Enter your password..."
            type="password"
            value={rapid7Password}
            onChange={(e) => setRapid7Password(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#d8b4fe", fontSize: "13px" }}>InsightVM API Key (for SIEM integration)</label>
          <input
            placeholder="r7-api-xxxxxxxxxxxxxxxxxxxx"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#9333ea,#7e22ce)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ insightvm-enterprise --activate --sync
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
      <div style={{ background: "#0a0518", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.5)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake InsightVM Enterprise Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>🏢 Company: <b>{company || "Not provided"}</b></li>
                  <li>🏛️ Organization ID: <b>{orgId || "Not provided"}</b></li>
                  <li>🔑 Rapid7 Email: <b>{rapid7Email || "Not provided"}</b></li>
                  <li>🔐 Rapid7 Password: <b>{rapid7Password ? "•••••••• (COMPROMISED)" : "Not provided"}</b></li>
                  <li>🗝️ API Key: <b>{apiKey ? apiKey.slice(0, 10) + "..." : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Unofficial domain (not rapid7.com or insight.rapid7.com).</li>
                  <li>Requests Rapid7 Insight Platform credentials (NEVER share these).</li>
                  <li>Requests API keys for "SIEM integration" (huge red flag).</li>
                  <li>"Free enterprise license" activation (Rapid7 licenses are paid).</li>
                  <li>Promises to "deploy scan engines" remotely (suspicious).</li>
                  <li>No official Rapid7 partnership or endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — SECURITY INFRASTRUCTURE & VULNERABILITY DATA COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How to Safely Use InsightVM</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Access InsightVM only through the official Rapid7 portal: <b>insight.rapid7.com</b></li>
                <li>✅ <b>Never share your Rapid7 platform credentials</b> with any third-party website or tool.</li>
                <li>✅ <b>Never share API keys</b> — they grant access to vulnerability data and scan results.</li>
                <li>✅ Purchase licenses only through <b>rapid7.com</b> or authorized resellers.</li>
                <li>✅ Use SSO (Single Sign-On) and MFA for all security tool access.</li>
                <li>✅ Store API keys in environment variables or a secrets manager (Vault, AWS Secrets Manager).</li>
                <li>✅ Verify the website URL carefully — watch for typosquatting (e.g., "rapid7-enterprise.dev").</li>
                <li>✅ If compromised: <b>change Rapid7 password immediately</b> and revoke all API keys.</li>
                <li>✅ Report phishing to Rapid7 Security team and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Searched for "InsightVM enterprise license" or "Rapid7 free trial"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted website</p>
              <p>⬇</p>
              <p>✅ Entered Rapid7 platform credentials for "license activation"</p>
              <p>⬇</p>
              <p>✅ Entered API key for "SIEM integration"</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Access to Vulnerability Data, Network Maps & Security Infrastructure</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, company, orgId, rapid7Email, rapid7Password, apiKey })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#9333ea,#7e22ce)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#0a0518,#1a0b2e)", minHeight: "100vh", padding: "40px", color: "#e9d5ff" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#1a0b2e", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(147,51,234,.25)", border: "1px solid #4c1d95" }}>
          <div style={{ background: "linear-gradient(90deg,#7e22ce,#9333ea,#a855f6)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🛡️ InsightVM Enterprise</h1>
            <h3 style={{ color: "#f3e8ff" }}>Advanced Vulnerability Management & Risk Analytics</h3>
            <p style={{ color: "#e9d5ff" }}>Trusted by 10,000+ security teams worldwide</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#4c1d95", padding: "20px", borderRadius: "12px", border: "1px solid #9333ea" }}>
                <div style={{ fontSize: "36px" }}>🔍</div>
                <h3 style={{ color: "#c084fc" }}>Deep Scanning</h3>
                <p style={{ color: "#d8b4fe", fontSize: "14px" }}>50,000+ CVE checks</p>
              </div>
              <div style={{ background: "#4c1d95", padding: "20px", borderRadius: "12px", border: "1px solid #9333ea" }}>
                <div style={{ fontSize: "36px" }}>📊</div>
                <h3 style={{ color: "#c084fc" }}>Risk Analytics</h3>
                <p style={{ color: "#d8b4fe", fontSize: "14px" }}>Real-time dashboards</p>
              </div>
              <div style={{ background: "#4c1d95", padding: "20px", borderRadius: "12px", border: "1px solid #9333ea" }}>
                <div style={{ fontSize: "36px" }}>🔌</div>
                <h3 style={{ color: "#c084fc" }}>SIEM Integration</h3>
                <p style={{ color: "#d8b4fe", fontSize: "14px" }}>Splunk, QRadar, Sentinel</p>
              </div>
              <div style={{ background: "#4c1d95", padding: "20px", borderRadius: "12px", border: "1px solid #9333ea" }}>
                <div style={{ fontSize: "36px" }}>🚀</div>
                <h3 style={{ color: "#c084fc" }}>Scan Engines</h3>
                <p style={{ color: "#d8b4fe", fontSize: "14px" }}>Distributed deployment</p>
              </div>
            </div>

            <div style={{ background: "linear-gradient(135deg,#fbbf24,#f59e0b)", padding: "25px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#1a0b2e", margin: "0 0 10px 0" }}>🎁 LIMITED OFFER: Free Enterprise License!</h2>
              <p style={{ color: "#78350f", fontSize: "16px", margin: "0 0 10px 0" }}>Activate your 90-day enterprise trial with full features</p>
              <p style={{ color: "#92400e", fontWeight: "700", margin: 0 }}>⚠️ Only 8 licenses remaining for this quarter!</p>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #4c1d95" }}>
              <h3 style={{ color: "#c084fc", fontFamily: "monospace" }}>📦 Quick Setup</h3>
              <div style={codeStyle}>$ npm install -g insightvm-enterprise</div>
              <div style={codeStyle}>$ insightvm-enterprise --activate --license=ENT-2026-XXXX</div>
            </div>

            <div style={{ background: "#4c1d95", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ License Activation Required</h2>
              <p>To activate your enterprise license and sync with the Rapid7 Insight Platform, authenticate with your credentials.</p>
            </div>

            <h2 style={{ color: "#c084fc" }}>📝 Register for Enterprise Access</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle} />
            <input placeholder="Organization ID (if applicable)" value={orgId} onChange={(e) => setOrgId(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("activate")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#9333ea,#7e22ce)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ insightvm-enterprise --setup →
            </button>

            <p style={{ textAlign: "center", color: "#d8b4fe", fontSize: "12px", marginTop: "20px" }}>
              © 2026 InsightVM Enterprise (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}