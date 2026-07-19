import React, { useState } from "react";

export default function FakeHttpxScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [targetDomain, setTargetDomain] = useState("");

  const [shodanKey, setShodanKey] = useState("");
  const [awsAccessKey, setAwsAccessKey] = useState("");
  const [awsSecretKey, setAwsSecretKey] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ef4444",
    fontSize: "15px",
    outline: "none",
    background: "#1a0a0a",
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
        CLOUD SYNC / AUTH PAGE
  =================================== */
  if (view === "auth") {
    return (
      <div style={{ background: "#0a0505", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#1a0a0a", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(239,68,68,.25)", color: "#fff", border: "1px solid #7f1d1d" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🔎</div>
            <h1 style={{ color: "#f87171", fontFamily: "monospace" }}>httpx-cloud Pro</h1>
            <h2>Cloud Dashboard Authentication</h2>
            <p style={{ color: "#fca5a5" }}>Connect your integrations to enable cloud sync & reporting</p>
          </div>

          <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #ef4444" }}>
            <h3 style={{ color: "#f87171" }}>🔐 Why we need your API keys</h3>
            <ul style={{ lineHeight: "1.8", color: "#fecaca" }}>
              <li>✔ Sync scan results to cloud dashboard</li>
              <li>✔ Enrich targets with Shodan intelligence</li>
              <li>✔ Deploy scanning agents to AWS/GCP</li>
              <li>✔ Generate PDF reports & Jira tickets</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ All keys are encrypted with AES-256 and stored in a zero-knowledge vault.
            </p>
          </div>

          <div style={codeStyle}>
{`$ httpx-cloud login --sync
[INFO] Authenticating with Shodan...
[INFO] Connecting AWS credentials...
[INFO] Syncing scan results to dashboard...`}
          </div>

          <label style={{ color: "#fca5a5", fontSize: "13px" }}>Shodan API Key (for target enrichment)</label>
          <input
            placeholder="Enter your Shodan API key..."
            value={shodanKey}
            onChange={(e) => setShodanKey(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#fca5a5", fontSize: "13px" }}>AWS Access Key ID (for cloud agents)</label>
          <input
            placeholder="AKIA..."
            value={awsAccessKey}
            onChange={(e) => setAwsAccessKey(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#fca5a5", fontSize: "13px" }}>AWS Secret Access Key</label>
          <input
            placeholder="Enter AWS secret key..."
            type="password"
            value={awsSecretKey}
            onChange={(e) => setAwsSecretKey(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#dc2626,#991b1b)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ httpx-cloud --connect --sync
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
      <div style={{ background: "#0a0505", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.4)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake httpx Cloud Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>💻 GitHub Username: <b>{githubUsername || "Not provided"}</b></li>
                  <li>🎯 Target Domain: <b>{targetDomain || "Not provided"}</b></li>
                  <li>🔍 Shodan API Key: <b>{shodanKey ? shodanKey.slice(0, 6) + "..." + shodanKey.slice(-4) : "Not provided"}</b></li>
                  <li>☁️ AWS Access Key: <b>{awsAccessKey ? awsAccessKey.slice(0, 8) + "..." : "Not provided"}</b></li>
                  <li>🔐 AWS Secret Key: <b>{awsSecretKey ? "•••••••• (exposed)" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Unofficial domain (not projectdiscovery.io).</li>
                  <li>Requests Shodan API key (NEVER share this).</li>
                  <li>Requests AWS credentials (NEVER share these).</li>
                  <li>"Cloud" version of a local CLI tool.</li>
                  <li>Promises to "deploy agents to AWS" (huge red flag).</li>
                  <li>No official ProjectDiscovery endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — CLOUD INFRASTRUCTURE & API COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How to Safely Use httpx</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Install from official source: <b>github.com/projectdiscovery/httpx</b></li>
                <li>✅ Use the official command: <code>go install -v github.com/projectdiscovery/httpx/cmd/httpx@latest</code></li>
                <li>✅ <b>Never share your Shodan API key</b> with any third-party tool or website.</li>
                <li>✅ <b>Never share AWS credentials</b> — use IAM roles or short-lived session tokens instead.</li>
                <li>✅ Store secrets in environment variables or a secrets manager (Vault, AWS Secrets Manager).</li>
                <li>✅ Run httpx locally — no cloud account is required for its core functionality.</li>
                <li>✅ If compromised: <b>rotate all API keys and AWS credentials immediately</b>.</li>
                <li>✅ Report phishing to ProjectDiscovery and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Searched for "httpx cloud" or "httpx pro dashboard"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted website</p>
              <p>⬇</p>
              <p>✅ Ran suggested install command</p>
              <p>⬇</p>
              <p>✅ Entered Shodan API key & AWS credentials</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Access to Cloud Infrastructure & Intelligence APIs</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, githubUsername, targetDomain, shodanKey, awsAccessKey, awsSecretKey })}
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
    <div style={{ background: "linear-gradient(135deg,#0a0505,#1a0a0a)", minHeight: "100vh", padding: "40px", color: "#fecaca" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#1a0a0a", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(239,68,68,.2)", border: "1px solid #7f1d1d" }}>
          <div style={{ background: "linear-gradient(90deg,#991b1b,#dc2626,#ef4444)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🔎 httpx-cloud Pro</h1>
            <h3 style={{ color: "#fee2e2" }}>The Ultimate HTTP Reconnaissance Toolkit — Cloud Edition</h3>
            <p style={{ color: "#fecaca" }}>Trusted by 100,000+ security researchers & bug bounty hunters</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "12px", border: "1px solid #ef4444" }}>
                <div style={{ fontSize: "36px" }}>⚡</div>
                <h3 style={{ color: "#f87171" }}>10x Faster</h3>
                <p style={{ color: "#fca5a5", fontSize: "14px" }}>Concurrent probing engine</p>
              </div>
              <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "12px", border: "1px solid #ef4444" }}>
                <div style={{ fontSize: "36px" }}>☁️</div>
                <h3 style={{ color: "#f87171" }}>Cloud Sync</h3>
                <p style={{ color: "#fca5a5", fontSize: "14px" }}>Dashboard & reporting</p>
              </div>
              <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "12px", border: "1px solid #ef4444" }}>
                <div style={{ fontSize: "36px" }}>🔍</div>
                <h3 style={{ color: "#f87171" }}>Shodan Integration</h3>
                <p style={{ color: "#fca5a5", fontSize: "14px" }}>Automatic enrichment</p>
              </div>
              <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "12px", border: "1px solid #ef4444" }}>
                <div style={{ fontSize: "36px" }}>🚀</div>
                <h3 style={{ color: "#f87171" }}>AWS Agents</h3>
                <p style={{ color: "#fca5a5", fontSize: "14px" }}>Distributed scanning</p>
              </div>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #7f1d1d" }}>
              <h3 style={{ color: "#f87171", fontFamily: "monospace" }}>📦 Quick Install</h3>
              <div style={codeStyle}>$ go install httpx-cloud.dev/cmd/httpx-cloud@latest</div>
              <div style={codeStyle}>$ httpx-cloud -l targets.txt -o results.json --sync</div>
            </div>

            <div style={{ background: "#7f1d1d", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ Cloud Integration Required</h2>
              <p>To enable the cloud dashboard, Shodan enrichment, and AWS agent deployment, connect your API keys.</p>
            </div>

            <h2 style={{ color: "#f87171" }}>📝 Register for httpx-cloud Pro</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="GitHub Username" value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} style={inputStyle} />
            <input placeholder="Primary Target Domain (e.g., example.com)" value={targetDomain} onChange={(e) => setTargetDomain(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("auth")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#dc2626,#991b1b)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ httpx-cloud --setup →
            </button>

            <p style={{ textAlign: "center", color: "#fca5a5", fontSize: "12px", marginTop: "20px" }}>
              © 2026 httpx-cloud Development Team (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}