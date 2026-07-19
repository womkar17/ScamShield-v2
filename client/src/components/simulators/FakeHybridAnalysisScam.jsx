import React, { useState } from "react";

export default function FakeHybridAnalysisScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const [vtApiKey, setVtApiKey] = useState("");
  const [falconClientId, setFalconClientId] = useState("");
  const [falconClientSecret, setFalconClientSecret] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #0284c7",
    fontSize: "15px",
    outline: "none",
    background: "#0c1929",
    color: "#bae6fd",
    fontFamily: "monospace",
    boxSizing: "border-box"
  };

  const codeStyle = {
    background: "#000",
    color: "#38bdf8",
    padding: "12px 16px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    margin: "10px 0",
    border: "1px solid #0c4a6e",
    overflowX: "auto",
    whiteSpace: "pre-wrap"
  };

  /* ===================================
        API INTEGRATION PAGE
  =================================== */
  if (view === "integrate") {
    return (
      <div style={{ background: "#050d18", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#0c1929", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(2,132,199,.25)", color: "#fff", border: "1px solid #0c4a6e" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🔬</div>
            <h1 style={{ color: "#38bdf8", fontFamily: "monospace" }}>Hybrid Analysis Pro</h1>
            <h2>Threat Intelligence Integration</h2>
            <p style={{ color: "#7dd3fc" }}>Connect your APIs to unlock advanced analysis features</p>
          </div>

          <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #0284c7" }}>
            <h3 style={{ color: "#38bdf8" }}>🔐 Why we need your API keys</h3>
            <ul style={{ lineHeight: "1.8", color: "#bae6fd" }}>
              <li>✔ Enrich samples with VirusTotal intelligence</li>
              <li>✔ Sync detections with CrowdStrike Falcon</li>
              <li>✔ Share findings with MISP threat intel platform</li>
              <li>✔ Enable automated IOC extraction & hunting</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ All API keys are encrypted with AES-256 and stored in a zero-knowledge vault.
            </p>
          </div>

          <div style={codeStyle}>
{`$ hybrid-analysis-pro --init --integrate
[INFO] Connecting to VirusTotal API...
[INFO] Authenticating with CrowdStrike Falcon...
[INFO] Syncing threat intelligence...`}
          </div>

          <label style={{ color: "#7dd3fc", fontSize: "13px" }}>VirusTotal API Key (for sample enrichment)</label>
          <input
            placeholder="Enter your VirusTotal API key..."
            value={vtApiKey}
            onChange={(e) => setVtApiKey(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#7dd3fc", fontSize: "13px" }}>CrowdStrike Falcon Client ID</label>
          <input
            placeholder="Enter Falcon Client ID..."
            value={falconClientId}
            onChange={(e) => setFalconClientId(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#7dd3fc", fontSize: "13px" }}>CrowdStrike Falcon Client Secret</label>
          <input
            placeholder="Enter Falcon Client Secret..."
            type="password"
            value={falconClientSecret}
            onChange={(e) => setFalconClientSecret(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#0284c7,#0369a1)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ hybrid-analysis-pro --connect --sync
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
      <div style={{ background: "#050d18", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.4)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Hybrid Analysis Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>🏢 Company: <b>{company || "Not provided"}</b></li>
                  <li>💼 Role: <b>{role || "Not provided"}</b></li>
                  <li>🔍 VirusTotal API Key: <b>{vtApiKey ? vtApiKey.slice(0, 8) + "..." : "Not provided"}</b></li>
                  <li>🦅 Falcon Client ID: <b>{falconClientId || "Not provided"}</b></li>
                  <li>🔐 Falcon Client Secret: <b>{falconClientSecret ? "•••••••• (exposed)" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Unofficial domain (not hybrid-analysis.com).</li>
                  <li>Requests VirusTotal API key (NEVER share this).</li>
                  <li>Requests CrowdStrike Falcon credentials (NEVER share these).</li>
                  <li>"Pro" version of a free community tool.</li>
                  <li>Promises to "sync with Falcon" (huge red flag).</li>
                  <li>No official CrowdStrike endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — SECURITY INFRASTRUCTURE COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How to Safely Use Hybrid Analysis</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Use the official website: <b>hybrid-analysis.com</b> (owned by CrowdStrike).</li>
                <li>✅ <b>Never share your VirusTotal API key</b> with any third-party tool or website.</li>
                <li>✅ <b>Never share CrowdStrike Falcon credentials</b> — they grant full EDR access.</li>
                <li>✅ Store API keys in environment variables or a secrets manager (Vault, AWS Secrets Manager).</li>
                <li>✅ Use read-only API keys with minimal scopes when possible.</li>
                <li>✅ Verify the website URL carefully — watch for typosquatting.</li>
                <li>✅ If compromised: <b>rotate all API keys immediately</b> and audit your EDR logs.</li>
                <li>✅ Report phishing to CrowdStrike Security team and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Searched for "hybrid analysis pro" or "malware sandbox"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted website</p>
              <p>⬇</p>
              <p>✅ Entered VirusTotal API key</p>
              <p>⬇</p>
              <p>✅ Entered CrowdStrike Falcon credentials</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Access to Threat Intel & EDR Infrastructure</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, company, role, vtApiKey, falconClientId, falconClientSecret })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#0284c7,#0369a1)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#050d18,#0c1929)", minHeight: "100vh", padding: "40px", color: "#bae6fd" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#0c1929", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(2,132,199,.2)", border: "1px solid #0c4a6e" }}>
          <div style={{ background: "linear-gradient(90deg,#0369a1,#0284c7,#0ea5e9)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🔬 Hybrid Analysis Pro</h1>
            <h3 style={{ color: "#e0f2fe" }}>Advanced Malware Analysis & Threat Intelligence Platform</h3>
            <p style={{ color: "#bae6fd" }}>Trusted by 50,000+ security researchers worldwide</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0284c7" }}>
                <div style={{ fontSize: "36px" }}>🦠</div>
                <h3 style={{ color: "#38bdf8" }}>Deep Analysis</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>Static & dynamic analysis</p>
              </div>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0284c7" }}>
                <div style={{ fontSize: "36px" }}>🔍</div>
                <h3 style={{ color: "#38bdf8" }}>VT Integration</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>VirusTotal enrichment</p>
              </div>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0284c7" }}>
                <div style={{ fontSize: "36px" }}>🦅</div>
                <h3 style={{ color: "#38bdf8" }}>Falcon Sync</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>CrowdStrike integration</p>
              </div>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0284c7" }}>
                <div style={{ fontSize: "36px" }}>📊</div>
                <h3 style={{ color: "#38bdf8" }}>IOC Extraction</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>Automated hunting</p>
              </div>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #0c4a6e" }}>
              <h3 style={{ color: "#38bdf8", fontFamily: "monospace" }}>📦 Quick Start</h3>
              <div style={codeStyle}>$ pip install hybrid-analysis-pro</div>
              <div style={codeStyle}>$ hybrid-analysis-pro --init --integrate</div>
            </div>

            <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ API Integration Required</h2>
              <p>To unlock advanced features like VirusTotal enrichment and CrowdStrike Falcon sync, connect your API keys.</p>
            </div>

            <h2 style={{ color: "#38bdf8" }}>📝 Register for Pro Access</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle} />
            <input placeholder="Your Role (e.g., SOC Analyst, Malware Researcher)" value={role} onChange={(e) => setRole(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("integrate")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#0284c7,#0369a1)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ hybrid-analysis-pro --setup →
            </button>

            <p style={{ textAlign: "center", color: "#7dd3fc", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Hybrid Analysis Pro (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}