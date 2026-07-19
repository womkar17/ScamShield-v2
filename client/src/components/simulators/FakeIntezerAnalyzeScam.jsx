import React, { useState } from "react";

export default function FakeIntezerAnalyzeScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const [apiKey, setApiKey] = useState("");
  const [malwareHash, setMalwareHash] = useState("");
  const [sampleUploaded, setSampleUploaded] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #10b981",
    fontSize: "15px",
    outline: "none",
    background: "#0a1f1a",
    color: "#a7f3d0",
    fontFamily: "monospace",
    boxSizing: "border-box"
  };

  const codeStyle = {
    background: "#000",
    color: "#34d399",
    padding: "12px 16px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    margin: "10px 0",
    border: "1px solid #064e3b",
    overflowX: "auto",
    whiteSpace: "pre-wrap"
  };

  /* ===================================
        ANALYSIS / AUTH PAGE
  =================================== */
  if (view === "analyze") {
    return (
      <div style={{ background: "#050f0c", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#0a1f1a", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(16,185,129,.3)", color: "#fff", border: "1px solid #064e3b" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🦠</div>
            <h1 style={{ color: "#34d399", fontFamily: "monospace" }}>Intezer Analyze Pro</h1>
            <h2>Premium Analysis Activation</h2>
            <p style={{ color: "#6ee7b7" }}>Authenticate to unlock advanced malware analysis features</p>
          </div>

          <div style={{ background: "#064e3b", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #10b981" }}>
            <h3 style={{ color: "#34d399" }}>🔐 Why we need your credentials</h3>
            <ul style={{ lineHeight: "1.8", color: "#a7f3d0" }}>
              <li>✔ Activate premium gene technology analysis</li>
              <li>✔ Access private malware repository & threat intel</li>
              <li>✔ Enable automated IOC extraction & hunting</li>
              <li>✔ Integrate with your SIEM & SOAR platform</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ All credentials are encrypted and stored in a zero-knowledge vault.
            </p>
          </div>

          <div style={codeStyle}>
{`$ intezer-analyze-pro --activate --premium
[INFO] Verifying API key...
[INFO] Uploading sample for deep analysis...
[INFO] Extracting genetic code signatures...`}
          </div>

          <label style={{ color: "#6ee7b7", fontSize: "13px" }}>Intezer API Key (for premium features)</label>
          <input
            placeholder="Enter your Intezer API key..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#6ee7b7", fontSize: "13px" }}>Malware SHA256 Hash (for quick lookup)</label>
          <input
            placeholder="e.g., a1b2c3d4e5f6..."
            value={malwareHash}
            onChange={(e) => setMalwareHash(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#6ee7b7", fontSize: "13px" }}>Upload Malware Sample (optional, for deep analysis)</label>
          <input
            placeholder="Filename (e.g., suspicious_sample.exe)"
            value={sampleUploaded}
            onChange={(e) => setSampleUploaded(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#10b981,#059669)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ intezer-analyze-pro --analyze --deep-scan
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
      <div style={{ background: "#050f0c", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.5)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Intezer Analyze Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#991b1b", marginTop: 0 }}>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>🏢 Company: <b>{company || "Not provided"}</b></li>
                  <li>💼 Role: <b>{role || "Not provided"}</b></li>
                  <li>🔑 API Key: <b>{apiKey ? apiKey.slice(0, 10) + "..." : "Not provided"}</b></li>
                  <li>🦠 Malware Hash: <b>{malwareHash ? malwareHash.slice(0, 12) + "..." : "Not provided"}</b></li>
                  <li>📦 Sample Uploaded: <b>{sampleUploaded || "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#9a3412", marginTop: 0 }}>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Unofficial domain (not intezer.com or analyze.intezer.com).</li>
                  <li>Requests Intezer API key (NEVER share this).</li>
                  <li>Requests malware samples or hashes (sensitive data).</li>
                  <li>"Free premium" activation (Intezer's premium features are paid).</li>
                  <li>Promises "deep analysis" of uploaded malware (huge red flag).</li>
                  <li>No official Intezer partnership or endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#1e40af", marginTop: 0 }}>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — MALWARE SAMPLE EXPOSURE & API COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#065f46", marginTop: 0 }}>🛡 How to Safely Use Intezer Analyze</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Access Intezer <b>only</b> through the official portal: <b>analyze.intezer.com</b></li>
                <li>✅ <b>Never share your API key</b> with any third-party website or tool.</li>
                <li>✅ <b>Never upload sensitive malware samples</b> to unverified platforms — use isolated sandboxes.</li>
                <li>✅ Purchase premium licenses only through <b>intezer.com</b> or authorized resellers.</li>
                <li>✅ Verify the website URL carefully — watch for typosquatting (e.g., "intezer-analyze-pro.dev").</li>
                <li>✅ Use API keys with minimal scopes and short expiry.</li>
                <li>✅ If compromised: <b>revoke API key immediately</b> and audit your analysis history.</li>
                <li>✅ If you uploaded malware: <b>assume the sample is now exposed</b> and adjust your threat hunting accordingly.</li>
                <li>✅ Report phishing to Intezer Security team and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#334155", marginTop: 0 }}>📈 Scam Timeline</h2>
              <p>✅ Searched for "Intezer Analyze free" or "malware analysis API"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted website</p>
              <p>⬇</p>
              <p>✅ Entered personal and company details</p>
              <p>⬇</p>
              <p>✅ Entered Intezer API key for "premium activation"</p>
              <p>⬇</p>
              <p>✅ Uploaded sensitive malware sample for "deep analysis"</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Stole API Key & Gained Access to Sensitive Malware Samples</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, company, role, apiKey, malwareHash, sampleUploaded })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#10b981,#059669)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#050f0c,#0a1f1a)", minHeight: "100vh", padding: "40px", color: "#a7f3d0" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#0a1f1a", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(16,185,129,.2)", border: "1px solid #064e3b" }}>
          <div style={{ background: "linear-gradient(90deg,#059669,#10b981,#34d399)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🦠 Intezer Analyze Pro</h1>
            <h3 style={{ color: "#d1fae5" }}>Advanced Malware Analysis & Genetic Code Technology</h3>
            <p style={{ color: "#a7f3d0" }}>Trusted by 5,000+ security teams worldwide</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#064e3b", padding: "20px", borderRadius: "12px", border: "1px solid #10b981" }}>
                <div style={{ fontSize: "36px" }}>🧬</div>
                <h3 style={{ color: "#34d399" }}>Gene Technology</h3>
                <p style={{ color: "#6ee7b7", fontSize: "14px" }}>Code family classification</p>
              </div>
              <div style={{ background: "#064e3b", padding: "20px", borderRadius: "12px", border: "1px solid #10b981" }}>
                <div style={{ fontSize: "36px" }}>🔍</div>
                <h3 style={{ color: "#34d399" }}>Deep Analysis</h3>
                <p style={{ color: "#6ee7b7", fontSize: "14px" }}>Static & dynamic analysis</p>
              </div>
              <div style={{ background: "#064e3b", padding: "20px", borderRadius: "12px", border: "1px solid #10b981" }}>
                <div style={{ fontSize: "36px" }}>📊</div>
                <h3 style={{ color: "#34d399" }}>Threat Intel</h3>
                <p style={{ color: "#6ee7b7", fontSize: "14px" }}>Malware family mapping</p>
              </div>
              <div style={{ background: "#064e3b", padding: "20px", borderRadius: "12px", border: "1px solid #10b981" }}>
                <div style={{ fontSize: "36px" }}>🔌</div>
                <h3 style={{ color: "#34d399" }}>API & SIEM</h3>
                <p style={{ color: "#6ee7b7", fontSize: "14px" }}>Seamless integration</p>
              </div>
            </div>

            <div style={{ background: "linear-gradient(135deg,#fbbf24,#f59e0b)", padding: "25px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#0a1f1a", margin: "0 0 10px 0" }}>🎁 LIMITED OFFER: Free Premium Analysis Credits</h2>
              <p style={{ color: "#78350f", fontSize: "16px", margin: "0 0 10px 0" }}>Get 100 free premium analysis credits for your team.</p>
              <p style={{ color: "#92400e", fontWeight: "700", margin: 0 }}>⚠️ Only 8 activations remaining this month!</p>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #064e3b" }}>
              <h3 style={{ color: "#34d399", fontFamily: "monospace" }}>📦 Quick Integration</h3>
              <div style={codeStyle}>$ pip install intezer-analyze-pro</div>
              <div style={codeStyle}>$ intezer-analyze-pro --activate --premium</div>
            </div>

            <div style={{ background: "#064e3b", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ Premium Activation Required</h2>
              <p>To unlock advanced gene technology analysis and access the private malware repository, authenticate with your API key.</p>
            </div>

            <h2 style={{ color: "#34d399" }}>📝 Register for Premium Access</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle} />
            <input placeholder="Your Role (e.g., Malware Analyst, SOC Lead)" value={role} onChange={(e) => setRole(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("analyze")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#10b981,#059669)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ intezer-analyze-pro --setup →
            </button>

            <p style={{ textAlign: "center", color: "#6ee7b7", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Intezer Analyze Pro (FAKE — for educational purposes only. Intezer is a legitimate company.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}