import React, { useState } from "react";

export default function FakeGinGonicScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [projectName, setProjectName] = useState("");
  const [pat, setPat] = useState(""); // Personal Access Token

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #00bcd4",
    fontSize: "15px",
    outline: "none",
    background: "#0b1220",
    color: "#e2e8f0",
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
    border: "1px solid #1e293b",
    overflowX: "auto"
  };

  /* ===================================
        VERIFY / TOKEN PAGE
  =================================== */
  if (view === "verify") {
    return (
      <div style={{ background: "#050a14", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "700px", background: "#0b1220", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(0,188,212,.25)", color: "#fff", border: "1px solid #1e293b" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#22d3ee", fontFamily: "monospace" }}>⚙️ gin-gonic-enterprise.dev</h1>
            <h2>GitHub Authentication Required</h2>
            <p style={{ color: "#94a3b8" }}>To access premium middleware & private repos, verify your GitHub account.</p>
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #334155" }}>
            <h3 style={{ color: "#22d3ee" }}>🔐 Why we need your token</h3>
            <ul style={{ lineHeight: "1.8", color: "#cbd5e1" }}>
              <li>✔ Install private enterprise middleware</li>
              <li>✔ Sync license with your GitHub account</li>
              <li>✔ Access premium telemetry dashboard</li>
              <li>✔ Enable auto-update for paid modules</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ We only request <b>repo</b> and <b>user</b> scopes.
            </p>
          </div>

          <label style={{ color: "#94a3b8", fontSize: "13px" }}>GitHub Personal Access Token (PAT)</label>
          <input
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            value={pat}
            onChange={(e) => setPat(e.target.value)}
            style={inputStyle}
          />

          <div style={codeStyle}>
            $ go install gin-enterprise.dev/cli@latest
          </div>

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#06b6d4,#0891b2)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ authenticate --token
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
      <div style={{ background: "#050a14", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.4)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Gin Gonic Enterprise Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>💻 GitHub Username: <b>{githubUsername || "Not provided"}</b></li>
                  <li>📦 Project Name: <b>{projectName || "Not provided"}</b></li>
                  <li>🔑 GitHub PAT: <b>{pat ? pat.slice(0, 8) + "..." + pat.slice(-4) : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Typosquatted domain (gin-gonic-enterprise.dev).</li>
                  <li>"Premium" version of an open-source framework.</li>
                  <li>Requested GitHub PAT with broad scopes.</li>
                  <li>Not the official repo (gin-gonic/gin).</li>
                  <li>Urgency to "verify" before install.</li>
                  <li>No official Go team endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — FULL GITHUB ACCOUNT COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 Stay Safe as a Developer</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li><b>Never share your GitHub PAT</b> with any website — ever.</li>
                <li>Use official package registries: <code>pkg.go.dev</code>, <code>github.com</code>.</li>
                <li>Verify URLs carefully — watch for typosquatting (e.g., <code>gln-gonic</code>, <code>gin-gonlc</code>).</li>
                <li>Use fine-grained PATs with minimal scopes and short expiry.</li>
                <li>Inspect <code>go get</code> packages before adding to <code>go.mod</code>.</li>
                <li>If compromised: <b>revoke the token immediately</b> in GitHub → Settings → Developer Settings.</li>
                <li>Report typosquatting to GitHub Abuse team and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Googled "Gin Gonic Enterprise"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted documentation site</p>
              <p>⬇</p>
              <p>✅ Ran suggested <code>go install</code> command</p>
              <p>⬇</p>
              <p>✅ Entered GitHub Personal Access Token</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Access to Your Repos, Code & Secrets</p>
            </div>

            <button
              onClick={() => onComplete({ email, githubUsername, projectName, pat })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#06b6d4,#0891b2)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
            >
              Continue to Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ===================================
        HOME / DOCS PAGE (Default Return)
  =================================== */
  return (
    <div style={{ background: "#050a14", minHeight: "100vh", padding: "40px", color: "#e2e8f0" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#0b1220", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,188,212,.2)", border: "1px solid #1e293b" }}>
          <div style={{ background: "linear-gradient(90deg,#0891b2,#06b6d4,#22d3ee)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>⚙️ Gin Gonic Enterprise</h1>
            <h3 style={{ color: "#ecfeff" }}>The High-Performance HTTP Framework for Go — Pro Edition</h3>
            <p style={{ color: "#cffafe" }}>Trusted by 50,000+ companies worldwide</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px", border: "1px solid #334155" }}>
                <div style={{ fontSize: "36px" }}>⚡</div>
                <h3 style={{ color: "#22d3ee" }}>40x Faster</h3>
                <p style={{ color: "#94a3b8", fontSize: "14px" }}>Than standard net/http</p>
              </div>
              <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px", border: "1px solid #334155" }}>
                <div style={{ fontSize: "36px" }}>🛡️</div>
                <h3 style={{ color: "#22d3ee" }}>Enterprise Security</h3>
                <p style={{ color: "#94a3b8", fontSize: "14px" }}>Built-in OAuth & JWT</p>
              </div>
              <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px", border: "1px solid #334155" }}>
                <div style={{ fontSize: "36px" }}>📊</div>
                <h3 style={{ color: "#22d3ee" }}>Pro Telemetry</h3>
                <p style={{ color: "#94a3b8", fontSize: "14px" }}>Real-time metrics</p>
              </div>
              <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px", border: "1px solid #334155" }}>
                <div style={{ fontSize: "36px" }}>🔌</div>
                <h3 style={{ color: "#22d3ee" }}>Premium Middleware</h3>
                <p style={{ color: "#94a3b8", fontSize: "14px" }}>100+ private plugins</p>
              </div>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #1e293b" }}>
              <h3 style={{ color: "#4ade80", fontFamily: "monospace" }}>📦 Quick Install</h3>
              <div style={codeStyle}>$ go get gin-gonic-enterprise.dev/v2</div>
              <div style={codeStyle}>$ gin-enterprise init --pro</div>
            </div>

            <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24" }}>⚠️ GitHub Verification Required</h2>
              <p>To unlock premium middleware and private repos, verify your GitHub account.</p>
            </div>

            <h2 style={{ color: "#22d3ee" }}>🔐 Authenticate Your Account</h2>
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="GitHub Username" value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} style={inputStyle} />
            <input placeholder="Project Name (optional)" value={projectName} onChange={(e) => setProjectName(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("verify")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#06b6d4,#0891b2)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ gin-enterprise auth →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}