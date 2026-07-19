import React, { useState } from "react";

export default function FakeGorillaMuxScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [projectRepo, setProjectRepo] = useState("");

  const [githubPat, setGithubPat] = useState("");
  const [sshKey, setSshKey] = useState("");

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
        SECURITY PATCH PAGE
  =================================== */
  if (view === "patch") {
    return (
      <div style={{ background: "#0c0604", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#1a0f0a", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(249,115,22,.3)", color: "#fff", border: "1px solid #7c2d12" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🚨</div>
            <h1 style={{ color: "#fb923c", fontFamily: "monospace" }}>CRITICAL VULNERABILITY</h1>
            <h2>CVE-2026-1847 — gorilla/mux</h2>
            <p style={{ color: "#fdba74" }}>Remote Code Execution via Path Traversal</p>
          </div>

          <div style={{ background: "#7c2d12", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "2px solid #f97316" }}>
            <h3 style={{ color: "#fb923c" }}>⚠️ Severity: CRITICAL (CVSS 9.8)</h3>
            <ul style={{ lineHeight: "1.8", color: "#fed7aa" }}>
              <li>Affects all versions &lt; 1.8.1-security</li>
              <li>Allows remote code execution via crafted URLs</li>
              <li>Immediate patching required</li>
              <li>Automated patcher available for GitHub repos</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              🔒 Your credentials are used only for automated patching and never stored.
            </p>
          </div>

          <div style={codeStyle}>
{`$ go get github.com/gorilla/mux-security-patch@latest
$ mux-patch --auto --github-token=YOUR_TOKEN
[INFO] Scanning repositories for vulnerable mux usage...`}
          </div>

          <label style={{ color: "#fdba74", fontSize: "13px" }}>GitHub Personal Access Token (with repo scope)</label>
          <input
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            value={githubPat}
            onChange={(e) => setGithubPat(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#fdba74", fontSize: "13px" }}>SSH Private Key (optional, for private repos)</label>
          <textarea
            placeholder="-----BEGIN OPENSSH PRIVATE KEY-----&#10;..."
            value={sshKey}
            onChange={(e) => setSshKey(e.target.value)}
            style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#ea580c,#c2410c)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ mux-patch --apply
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
            <h3>This was a Fake gorilla/mux Security Advisory Website.</h3>
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
                  <li>🔐 SSH Key: <b>{sshKey ? "•••••••• (exposed)" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Fake CVE number (CVE-2026-1847 doesn't exist).</li>
                  <li>Unofficial domain (not gorillatoolkit.org).</li>
                  <li>Requests GitHub PAT with broad scopes.</li>
                  <li>Requests SSH private key (NEVER share this).</li>
                  <li>Urgency tactics ("immediate patching required").</li>
                  <li>No official security advisory from gorilla team.</li>
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
              <h2>🛡 How to Handle Real Security Advisories</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Check official sources: <b>github.com/gorilla/mux/security</b></li>
                <li>✅ Verify CVE numbers at <b>cve.org</b> or <b>nvd.nist.gov</b></li>
                <li>✅ <b>Never share your GitHub PAT</b> with any website or tool.</li>
                <li>✅ <b>Never share your SSH private key</b> — it grants full access to your servers.</li>
                <li>✅ Use fine-grained PATs with minimal scopes and short expiry.</li>
                <li>✅ Update packages via official channels: <code>go get -u github.com/gorilla/mux</code></li>
                <li>✅ If compromised: <b>revoke tokens immediately</b> and rotate SSH keys.</li>
                <li>✅ Report phishing to GitHub Abuse team and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Received fake "critical vulnerability" alert</p>
              <p>⬇</p>
              <p>✅ Searched for "gorilla/mux security patch"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted security advisory site</p>
              <p>⬇</p>
              <p>✅ Entered GitHub PAT and SSH key</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Access to All Repos & Infrastructure</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, githubUsername, projectRepo, githubPat, sshKey })}
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
        HOME / SECURITY ADVISORY PAGE (Default Return)
  =================================== */
  return (
    <div style={{ background: "linear-gradient(135deg,#0c0604,#1a0f0a)", minHeight: "100vh", padding: "40px", color: "#fed7aa" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#1a0f0a", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(249,115,22,.25)", border: "1px solid #7c2d12" }}>
          <div style={{ background: "linear-gradient(90deg,#c2410c,#ea580c,#f97316)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🚨 CRITICAL SECURITY ADVISORY</h1>
            <h3 style={{ color: "#fff" }}>gorilla/mux — Remote Code Execution Vulnerability</h3>
            <p style={{ color: "#fff" }}>CVE-2026-1847 | CVSS Score: 9.8 (Critical)</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ background: "#7c2d12", padding: "25px", borderRadius: "12px", marginBottom: "30px", border: "2px solid #f97316" }}>
              <h2 style={{ color: "#fb923c", marginTop: 0 }}>⚠️ Vulnerability Details</h2>
              <p><b>Affected Component:</b> gorilla/mux HTTP Router</p>
              <p><b>Vulnerability Type:</b> Path Traversal leading to Remote Code Execution</p>
              <p><b>Affected Versions:</b> All versions &lt; 1.8.1-security</p>
              <p><b>Impact:</b> Attackers can execute arbitrary code on your server</p>
              <p style={{ color: "#fbbf24", fontWeight: "700", marginTop: "15px" }}>
                ⚠️ Immediate action required — patch your applications now!
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#7c2d12", padding: "20px", borderRadius: "12px", border: "1px solid #f97316" }}>
                <div style={{ fontSize: "36px" }}>🔍</div>
                <h3 style={{ color: "#fb923c" }}>Scan Repositories</h3>
                <p style={{ color: "#fdba74", fontSize: "14px" }}>Find vulnerable mux usage</p>
              </div>
              <div style={{ background: "#7c2d12", padding: "20px", borderRadius: "12px", border: "1px solid #f97316" }}>
                <div style={{ fontSize: "36px" }}>🛠️</div>
                <h3 style={{ color: "#fb923c" }}>Auto-Patch Tool</h3>
                <p style={{ color: "#fdba74", fontSize: "14px" }}>Automated security fixes</p>
              </div>
              <div style={{ background: "#7c2d12", padding: "20px", borderRadius: "12px", border: "1px solid #f97316" }}>
                <div style={{ fontSize: "36px" }}>📊</div>
                <h3 style={{ color: "#fb923c" }}>Compliance Report</h3>
                <p style={{ color: "#fdba74", fontSize: "14px" }}>Verify security posture</p>
              </div>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #7c2d12" }}>
              <h3 style={{ color: "#fb923c", fontFamily: "monospace" }}>📦 Quick Patch Installation</h3>
              <div style={codeStyle}>$ go get github.com/gorilla/mux-security-patch@latest</div>
              <div style={codeStyle}>$ mux-patch --auto --github-token=YOUR_TOKEN</div>
            </div>

            <div style={{ background: "#fef3c7", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "2px dashed #fbbf24" }}>
              <h2 style={{ color: "#92400e", marginTop: 0 }}>🔐 Authentication Required</h2>
              <p>To scan and patch your GitHub repositories, we need secure access to your account.</p>
              <p style={{ fontSize: "13px", color: "#78350f" }}>
                Your credentials are encrypted with AES-256 and used only for patching.
              </p>
            </div>

            <h2 style={{ color: "#fb923c" }}>📝 Register for Security Patch</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="GitHub Username" value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} style={inputStyle} />
            <input placeholder="Main Project Repository (e.g., username/repo)" value={projectRepo} onChange={(e) => setProjectRepo(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("patch")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#ea580c,#c2410c)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ mux-patch --start →
            </button>

            <p style={{ textAlign: "center", color: "#fdba74", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Gorilla Toolkit Security Team (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}