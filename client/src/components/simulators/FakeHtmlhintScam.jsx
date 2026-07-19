import React, { useState } from "react";

export default function FakeHtmlhintScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [projectRepo, setProjectRepo] = useState("");

  const [npmToken, setNpmToken] = useState("");
  const [githubPat, setGithubPat] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #f97316",
    fontSize: "15px",
    outline: "none",
    background: "#1a0f0a",
    color: "#fed7aa",
    fontFamily: "monospace",
    boxSizing: "border-box"
  };

  const codeStyle = {
    background: "#000",
    color: "#fb923c",
    padding: "12px 16px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    margin: "10px 0",
    border: "1px solid #7c2d12",
    overflowX: "auto",
    whiteSpace: "pre-wrap"
  };

  /* ===================================
        AUTHENTICATION / SYNC PAGE
  =================================== */
  if (view === "auth") {
    return (
      <div style={{ background: "#0c0604", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#1a0f0a", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(249,115,22,.25)", color: "#fff", border: "1px solid #7c2d12" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🔍</div>
            <h1 style={{ color: "#fb923c", fontFamily: "monospace" }}>htmlhint-enterprise</h1>
            <h2>Repository Authentication</h2>
            <p style={{ color: "#fdba74" }}>Authenticate to sync rules and scan private repositories</p>
          </div>

          <div style={{ background: "#7c2d12", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #f97316" }}>
            <h3 style={{ color: "#fb923c" }}>🔐 Why we need your credentials</h3>
            <ul style={{ lineHeight: "1.8", color: "#fed7aa" }}>
              <li>✔ Sync custom HTMLHint rules across your team</li>
              <li>✔ Scan HTML files in private GitHub repositories</li>
              <li>✔ Generate accessibility compliance reports</li>
              <li>✔ Integrate with your CI/CD pipeline</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ Your tokens are encrypted with AES-256 and used only for read-only access.
            </p>
          </div>

          <div style={codeStyle}>
{`$ npm install -g htmlhint-enterprise
$ htmlhint-enterprise --init --sync
[INFO] Authenticating with GitHub...`}
          </div>

          <label style={{ color: "#fdba74", fontSize: "13px" }}>GitHub Personal Access Token (with repo scope)</label>
          <input
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            value={githubPat}
            onChange={(e) => setGithubPat(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#fdba74", fontSize: "13px" }}>npm Access Token (for private packages)</label>
          <input
            placeholder="npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            value={npmToken}
            onChange={(e) => setNpmToken(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#ea580c,#c2410c)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ htmlhint-enterprise --auth --sync
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
      <div style={{ background: "#0c0604", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.4)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake HTMLHint Enterprise Website.</h3>
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
                  <li>📦 npm Token: <b>{npmToken ? npmToken.slice(0, 8) + "..." : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Unofficial domain (not htmlhint.com or github.com/htmlhint).</li>
                  <li>Requests GitHub PAT with broad scopes.</li>
                  <li>Requests npm access token (NEVER share this).</li>
                  <li>"Enterprise" version of a free open-source tool.</li>
                  <li>Promises to "scan private repositories" (suspicious).</li>
                  <li>No official HTMLHint project endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "98%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — REPOSITORY & PACKAGE REGISTRY COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How to Safely Use HTMLHint</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Install from official sources: <b>npmjs.com/package/htmlhint</b> or <b>github.com/htmlhint/htmlhint</b></li>
                <li>✅ Use the official command: <code>npm install -g htmlhint</code></li>
                <li>✅ <b>Never share your GitHub PAT</b> with any website or tool.</li>
                <li>✅ <b>Never share your npm token</b> — it grants access to publish packages.</li>
                <li>✅ Use fine-grained PATs with minimal scopes and short expiry.</li>
                <li>✅ Run HTMLHint locally or in your CI/CD pipeline — no cloud account needed.</li>
                <li>✅ If compromised: <b>revoke tokens immediately</b> in GitHub and npm settings.</li>
                <li>✅ Report phishing to GitHub Abuse team and npm Security.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Searched for "htmlhint enterprise" or "html linting tool"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted website</p>
              <p>⬇</p>
              <p>✅ Ran suggested npm install command</p>
              <p>⬇</p>
              <p>✅ Entered GitHub PAT and npm token</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Access to Repos & Package Registry</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, githubUsername, projectRepo, npmToken, githubPat })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#ea580c,#c2410c)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#0c0604,#1a0f0a)", minHeight: "100vh", padding: "40px", color: "#fed7aa" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#1a0f0a", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(249,115,22,.2)", border: "1px solid #7c2d12" }}>
          <div style={{ background: "linear-gradient(90deg,#c2410c,#ea580c,#f97316)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🔍 htmlhint-enterprise</h1>
            <h3 style={{ color: "#fff" }}>Advanced HTML Linting for Enterprise Teams</h3>
            <p style={{ color: "#fed7aa" }}>Automated code quality, accessibility & compliance</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#7c2d12", padding: "20px", borderRadius: "12px", border: "1px solid #f97316" }}>
                <div style={{ fontSize: "36px" }}>🔍</div>
                <h3 style={{ color: "#fb923c" }}>500+ Rules</h3>
                <p style={{ color: "#fdba74", fontSize: "14px" }}>Comprehensive HTML checks</p>
              </div>
              <div style={{ background: "#7c2d12", padding: "20px", borderRadius: "12px", border: "1px solid #f97316" }}>
                <div style={{ fontSize: "36px" }}>♿</div>
                <h3 style={{ color: "#fb923c" }}>Accessibility</h3>
                <p style={{ color: "#fdba74", fontSize: "14px" }}>WCAG 2.1 compliance</p>
              </div>
              <div style={{ background: "#7c2d12", padding: "20px", borderRadius: "12px", border: "1px solid #f97316" }}>
                <div style={{ fontSize: "36px" }}>📊</div>
                <h3 style={{ color: "#fb923c" }}>Reports</h3>
                <p style={{ color: "#fdba74", fontSize: "14px" }}>Detailed analytics</p>
              </div>
              <div style={{ background: "#7c2d12", padding: "20px", borderRadius: "12px", border: "1px solid #f97316" }}>
                <div style={{ fontSize: "36px" }}>🔌</div>
                <h3 style={{ color: "#fb923c" }}>CI/CD</h3>
                <p style={{ color: "#fdba74", fontSize: "14px" }}>GitHub Actions, Jenkins</p>
              </div>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #7c2d12" }}>
              <h3 style={{ color: "#fb923c", fontFamily: "monospace" }}>📦 Quick Install</h3>
              <div style={codeStyle}>$ npm install -g htmlhint-enterprise</div>
              <div style={codeStyle}>$ htmlhint-enterprise --init --sync</div>
            </div>

            <div style={{ background: "#7c2d12", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ Repository Authentication Required</h2>
              <p>To sync custom rules and scan private repositories, authenticate with your GitHub and npm accounts.</p>
            </div>

            <h2 style={{ color: "#fb923c" }}>📝 Register for Enterprise Access</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="GitHub Username" value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} style={inputStyle} />
            <input placeholder="Main Project Repository (e.g., username/repo)" value={projectRepo} onChange={(e) => setProjectRepo(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("auth")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#ea580c,#c2410c)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ htmlhint-enterprise --setup →
            </button>

            <p style={{ textAlign: "center", color: "#fdba74", fontSize: "12px", marginTop: "20px" }}>
              © 2026 htmlhint-enterprise Development Team (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}