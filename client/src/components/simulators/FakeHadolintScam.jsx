import React, { useState } from "react";

export default function FakeHadolintScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [dockerUsername, setDockerUsername] = useState("");

  const [dockerPassword, setDockerPassword] = useState("");
  const [registryToken, setRegistryToken] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #0ea5e9",
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
        REGISTRY AUTH PAGE
  =================================== */
  if (view === "auth") {
    return (
      <div style={{ background: "#050d18", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#0c1929", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(14,165,233,.25)", color: "#fff", border: "1px solid #0c4a6e" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🐳</div>
            <h1 style={{ color: "#38bdf8", fontFamily: "monospace" }}>hadolint-enterprise</h1>
            <h2>Docker Registry Authentication</h2>
            <p style={{ color: "#7dd3fc" }}>Connect your registry to enable automated scanning</p>
          </div>

          <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #0ea5e9" }}>
            <h3 style={{ color: "#38bdf8" }}>🔐 Why we need your credentials</h3>
            <ul style={{ lineHeight: "1.8", color: "#bae6fd" }}>
              <li>✔ Scan all Dockerfiles in your private repositories</li>
              <li>✔ Generate compliance reports for SOC2/HIPAA</li>
              <li>✔ Auto-fix security vulnerabilities</li>
              <li>✔ Integrate with your CI/CD pipeline</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ Your credentials are encrypted and used only for read-only access.
            </p>
          </div>

          <div style={codeStyle}>
{`$ docker run --rm -i hadolint-enterprise/scan:latest
[INFO] Authenticating with Docker Hub...
[INFO] Scanning repositories for Dockerfiles...`}
          </div>

          <label style={{ color: "#7dd3fc", fontSize: "13px" }}>Docker Hub Username</label>
          <input
            placeholder="your-docker-username"
            value={dockerUsername}
            onChange={(e) => setDockerUsername(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#7dd3fc", fontSize: "13px" }}>Docker Hub Password or Access Token</label>
          <input
            placeholder="••••••••••••••••"
            type="password"
            value={dockerPassword}
            onChange={(e) => setDockerPassword(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#7dd3fc", fontSize: "13px" }}>Private Registry Token (optional, for ECR/GCR/ACR)</label>
          <input
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            value={registryToken}
            onChange={(e) => setRegistryToken(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#0ea5e9,#0284c7)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ hadolint-enterprise --connect --scan
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
            <h3>This was a Fake Hadolint Enterprise Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>🏢 Company: <b>{company || "Not provided"}</b></li>
                  <li>🐳 Docker Username: <b>{dockerUsername || "Not provided"}</b></li>
                  <li>🔑 Docker Password: <b>{dockerPassword ? "••••••••" : "Not provided"}</b></li>
                  <li>🔐 Registry Token: <b>{registryToken ? registryToken.slice(0, 10) + "..." : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Unofficial domain (not github.com/hadolint/hadolint).</li>
                  <li>Requests Docker Hub password (NEVER share this).</li>
                  <li>Requests private registry tokens.</li>
                  <li>"Enterprise" version of a free open-source tool.</li>
                  <li>Promises to "auto-fix" vulnerabilities (suspicious).</li>
                  <li>No official Hadolint project endorsement.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — DOCKER REGISTRY & INFRASTRUCTURE COMPROMISE</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How to Safely Use Hadolint</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Install from official sources: <b>github.com/hadolint/hadolint</b> or Docker Hub: <b>hadolint/hadolint</b></li>
                <li>✅ Use the official Docker command: <code>docker run --rm -i hadolint/hadolint &lt; Dockerfile</code></li>
                <li>✅ <b>Never share your Docker Hub password</b> with any third-party tool.</li>
                <li>✅ <b>Never share registry tokens</b> — use read-only tokens with minimal scopes.</li>
                <li>✅ Run Hadolint locally or in your CI/CD pipeline — no cloud account needed.</li>
                <li>✅ Verify Docker image signatures before pulling.</li>
                <li>✅ If compromised: <b>change Docker Hub password immediately</b> and revoke tokens.</li>
                <li>✅ Report phishing to Docker Security team and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Searched for "hadolint enterprise" or "docker security scanner"</p>
              <p>⬇</p>
              <p>✅ Clicked typosquatted website</p>
              <p>⬇</p>
              <p>✅ Entered Docker Hub credentials</p>
              <p>⬇</p>
              <p>✅ Entered private registry token</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Gained Access to All Docker Images & Infrastructure</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, company, dockerUsername, dockerPassword, registryToken })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#0ea5e9,#0284c7)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
        <div style={{ background: "#0c1929", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(14,165,233,.2)", border: "1px solid #0c4a6e" }}>
          <div style={{ background: "linear-gradient(90deg,#0284c7,#0ea5e9,#38bdf8)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🐳 hadolint-enterprise</h1>
            <h3 style={{ color: "#ecfeff" }}>Advanced Dockerfile Security Scanner for Enterprise</h3>
            <p style={{ color: "#e0f2fe" }}>Automated compliance, vulnerability detection & auto-fix</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0ea5e9" }}>
                <div style={{ fontSize: "36px" }}>🔍</div>
                <h3 style={{ color: "#38bdf8" }}>Deep Scan</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>500+ security rules</p>
              </div>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0ea5e9" }}>
                <div style={{ fontSize: "36px" }}>🛠️</div>
                <h3 style={{ color: "#38bdf8" }}>Auto-Fix</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>Automated remediation</p>
              </div>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0ea5e9" }}>
                <div style={{ fontSize: "36px" }}>📊</div>
                <h3 style={{ color: "#38bdf8" }}>Compliance</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>SOC2, HIPAA, PCI-DSS</p>
              </div>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0ea5e9" }}>
                <div style={{ fontSize: "36px" }}>🔌</div>
                <h3 style={{ color: "#38bdf8" }}>CI/CD Integration</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>GitHub, GitLab, Jenkins</p>
              </div>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #0c4a6e" }}>
              <h3 style={{ color: "#38bdf8", fontFamily: "monospace" }}>📦 Quick Start</h3>
              <div style={codeStyle}>$ docker run --rm -i hadolint-enterprise/scan:latest &lt; Dockerfile</div>
              <div style={codeStyle}>$ hadolint-enterprise --connect --registry=docker.io</div>
            </div>

            <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ Registry Connection Required</h2>
              <p>To scan your private Dockerfiles and generate compliance reports, connect your Docker registry.</p>
            </div>

            <h2 style={{ color: "#38bdf8" }}>📝 Register for Enterprise Access</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("auth")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#0ea5e9,#0284c7)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              $ hadolint-enterprise --setup →
            </button>

            <p style={{ textAlign: "center", color: "#7dd3fc", fontSize: "12px", marginTop: "20px" }}>
              © 2026 hadolint-enterprise Development Team (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}