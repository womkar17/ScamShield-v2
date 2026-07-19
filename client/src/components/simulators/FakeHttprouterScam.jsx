import React, { useState } from "react";

export default function FakeHttprouterScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [projectRepo, setProjectRepo] = useState("");

  const [githubPat, setGithubPat] = useState("");
  const [goProxyToken, setGoProxyToken] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #06b6d4",
    fontSize: "15px",
    outline: "none",
    background: "#0c1a2a",
    color: "#cffafe",
    fontFamily: "monospace",
    boxSizing: "border-box"
  };

  const codeStyle = {
    background: "#000",
    color: "#22d3ee",
    padding: "12px 16px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    margin: "10px 0",
    border: "1px solid #164e63",
    overflowX: "auto",
    whiteSpace: "pre-wrap"
  };

  /* ===================================
        AUTHENTICATION / SYNC PAGE
  =================================== */
  if (view === "auth") {
    return (
      <div style={{ background: "#050e1a", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#0c1a2a", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(6,182,212,.25)", color: "#fff", border: "1px solid #164e63" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🚀</div>
            <h1 style={{ color: "#22d3ee", fontFamily: "monospace" }}>httprouter-enterprise</h1>
            <h2>Repository Authentication</h2>
            <p style={{ color: "#67e8f9" }}>Authenticate to sync middleware and access private modules</p>
          </div>

          <div style={{ background: "#164e63", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #06b6d4" }}>
            <h3 style={{ color: "#22d3ee" }}>🔐 Why we need your credentials</h3>
            <ul style={{ lineHeight: "1.8", color: "#cffafe" }}>
              <li>✔ Sync custom middleware across your projects</li>
              <li>✔ Access enterprise-only route handlers</li>
              <li>✔ Enable advanced telemetry & monitoring</li>
              <li>✔ Integrate with your private Go modules</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ Your credentials are encrypted with AES-256 and never stored.
            </p>
          </div>

          <div style={codeStyle}>
{`$ go get httprouter-enterprise.dev/v2@latest
$ httprouter-enterprise --init --sync
[INFO] Authenticating with GitHub...`}
          </div>

          <label style={{ color: "#67e8f9", fontSize: "13px" }}>GitHub Personal Access Token (with repo scope)</label>
          <input
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            value={githubPat}
            onChange={(e) => setGithubPat(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#67e8f9", fontSize: "13px" }}>Go Module Proxy Token (for private modules)</label>
          <input
            placeholder="Enter your Go proxy token..."
            value={goProxyToken}
            onChange={(e) => setGoProxyToken(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#06b6d4,#0891b2)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ httprouter-enterprise --auth --sync
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
      <div style={{ background: "#050e1a", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.4)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake httprouter Enterprise Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>💻 GitHub Username: <b>{githubUsername || "Not provided"}</b></li>
                  <li>📦 Project Repo: <b>{projectRepo || "Not provided"}</b></li>
                  <li>🔑 GitHub PAT: <b>{githubPat ? githubPat.slice(0, 8) + "..." + githubPat.slice(-4) : "Not provided"}</b></li>
                  <li>📦 Go Proxy Token: <b>{goProxyToken ? goProxyToken.slice(0, 8) + "..." : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Unofficial domain (not github.com/julienschmidt/httprouter).</li>
                  <li>Requests GitHub PAT with broad scopes.</li>
                  <li>Requests Go module proxy token (NEVER share this).</li>
                  <li>"Enterprise" version of a free open-source tool.</li>
                  <li>Promises to "sync middleware" across projects (suspicious).</li>
                  <li>No official httprouter project endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "98%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — REPOSITORY & MODULE REGISTRY COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How to Safely Use httprouter</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Install from official source: <b>github.com/julienschmidt/httprouter</b></li>
                <li>✅ Use the official command: <code>go get github.com/julienschmidt/httprouter</code></li>
                <li>✅ <b>Never share your GitHub PAT</b> with any website or tool.</li>
                <li>✅ <b>Never share Go module proxy tokens</b> — they grant access to private modules.</li>
                <li>✅ Use fine-grained PATs with minimal scopes and short expiry.</li>
                <li>✅ Verify package sources before adding to <code>go.mod</code>.</li>
                <li>✅ If compromised: <b>revoke tokens immediately</b> in GitHub settings.</li>
                <li>✅ Report phishing to GitHub Abuse team and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Searched for "httprouter enterprise" or "Go HTTP router"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted website</p>
              <p>⬇</p>
              <p>✅ Ran suggested go get command</p>
              <p>⬇</p>
              <p>✅ Entered GitHub PAT and Go proxy token</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Access to Repos & Private Modules</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, githubUsername, projectRepo, githubPat, goProxyToken })}
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
        HOME PAGE (Default Return)
  =================================== */
  return (
    <div style={{ background: "linear-gradient(135deg,#050e1a,#0c1a2a)", minHeight: "100vh", padding: "40px", color: "#cffafe" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#0c1a2a", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(6,182,212,.2)", border: "1px solid #164e63" }}>
          <div style={{ background: "linear-gradient(90deg,#0891b2,#06b6d4,#22d3ee)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🚀 httprouter-enterprise</h1>
            <h3 style={{ color: "#ecfeff" }}>High-Performance HTTP Router for Go — Enterprise Edition</h3>
            <p style={{ color: "#cffafe" }}>Advanced middleware, telemetry & private module support</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#164e63", padding: "20px", borderRadius: "12px", border: "1px solid #06b6d4" }}>
                <div style={{ fontSize: "36px" }}>⚡</div>
                <h3 style={{ color: "#22d3ee" }}>100x Faster</h3>
                <p style={{ color: "#67e8f9", fontSize: "14px" }}>Than standard net/http</p>
              </div>
              <div style={{ background: "#164e63", padding: "20px", borderRadius: "12px", border: "1px solid #06b6d4" }}>
                <div style={{ fontSize: "36px" }}>🔌</div>
                <h3 style={{ color: "#22d3ee" }}>Middleware</h3>
                <p style={{ color: "#67e8f9", fontSize: "14px" }}>50+ enterprise plugins</p>
              </div>
              <div style={{ background: "#164e63", padding: "20px", borderRadius: "12px", border: "1px solid #06b6d4" }}>
                <div style={{ fontSize: "36px" }}>📊</div>
                <h3 style={{ color: "#22d3ee" }}>Telemetry</h3>
                <p style={{ color: "#67e8f9", fontSize: "14px" }}>Built-in monitoring</p>
              </div>
              <div style={{ background: "#164e63", padding: "20px", borderRadius: "12px", border: "1px solid #06b6d4" }}>
                <div style={{ fontSize: "36px" }}>🔒</div>
                <h3 style={{ color: "#22d3ee" }}>Private Modules</h3>
                <p style={{ color: "#67e8f9", fontSize: "14px" }}>Secure integration</p>
              </div>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #164e63" }}>
              <h3 style={{ color: "#22d3ee", fontFamily: "monospace" }}>📦 Quick Install</h3>
              <div style={codeStyle}>$ go get httprouter-enterprise.dev/v2@latest</div>
              <div style={codeStyle}>$ httprouter-enterprise --init --sync</div>
            </div>

            <div style={{ background: "#164e63", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ Repository Authentication Required</h2>
              <p>To sync middleware and access private Go modules, authenticate with your GitHub account.</p>
            </div>

            <h2 style={{ color: "#22d3ee" }}>📝 Register for Enterprise Access</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="GitHub Username" value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} style={inputStyle} />
            <input placeholder="Main Project Repository (e.g., username/repo)" value={projectRepo} onChange={(e) => setProjectRepo(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("auth")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#06b6d4,#0891b2)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ httprouter-enterprise --setup →
            </button>

            <p style={{ textAlign: "center", color: "#67e8f9", fontSize: "12px", marginTop: "20px" }}>
              © 2026 httprouter-enterprise Development Team (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}