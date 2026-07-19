import React, { useState } from "react";

export default function FakeGeoffGarsideScam({ onComplete }) {
  const [view, setView] = useState("offer");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #0ea5e9",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box" // Added to prevent padding from breaking width
  };

  /* ===================================
        LOGIN / DOWNLOAD PAGE
  =================================== */
  if (view === "login") {
    return (
      <div style={{ background: "#0f172a", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "700px", background: "#111827", borderRadius: "18px", padding: "35px", boxShadow: "0 20px 40px rgba(0,0,0,.4)", color: "#fff" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#38bdf8" }}>🛡 GeoffGarside Security</h1>
            <h2>Member Verification</h2>
            <p>Sign in to download the Premium Security Toolkit.</p>
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px", margin: "25px 0" }}>
            <h3>Toolkit Includes</h3>
            <ul style={{ lineHeight: "1.8" }}>
              <li>✔ Malware Scanner</li>
              <li>✔ Password Auditor</li>
              <li>✔ Network Scanner</li>
              <li>✔ Security Scripts</li>
            </ul>
          </div>

          <input
            placeholder="Account Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "18px", background: "#0ea5e9", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
          >
            Download Toolkit →
          </button>
        </div>
      </div>
    );
  }

  /* ===================================
        SUCCESS SCREEN (MOVED UP)
  =================================== */
  if (view === "success") {
    return (
      <div style={{ background: "#0f172a", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake GeoffGarside Security Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Full Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email Address: <b>{email || "Not provided"}</b></li>
                  <li>🏢 Company Name: <b>{company || "Not provided"}</b></li>
                  <li>💻 GitHub Username: <b>{username || "Not provided"}</b></li>
                  <li>🔑 Password: <b>{password ? "••••••••" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Free premium security toolkit.</li>
                  <li>Requested account password.</li>
                  <li>Login required before download.</li>
                  <li>Unverified security website.</li>
                  <li>No official developer information.</li>
                  <li>Fake download portal.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "95%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 Stay Safe</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>Download tools only from official developer websites (e.g., GitHub, official docs).</li>
                <li><b>Never enter your password</b> just to download a file.</li>
                <li>Verify website URLs before logging in.</li>
                <li>Enable Multi-Factor Authentication (MFA) on all accounts.</li>
                <li>Change your password immediately if you entered it on a suspicious site.</li>
                <li>Report fake websites to Cyber Crime Helpline (1930 in India).</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake Security Website</p>
              <p>⬇</p>
              <p>✅ Registered Free Account</p>
              <p>⬇</p>
              <p>✅ Entered Password</p>
              <p>⬇</p>
              <p>✅ Attempted Toolkit Download</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attackers Captured Your Login Credentials</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, company, username, password })}
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
    <div style={{ background: "#e2e8f0", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
        
        {/* Sidebar */}
        <div style={{ background: "#0f172a", color: "#fff", padding: "25px", borderRadius: "18px" }}>
          <h1>🛡 GeoffGarside</h1>
          <hr style={{ borderColor: "#334155", margin: "15px 0" }} />
          <h3>Popular Downloads</h3>
          <p>✔ Security Toolkit</p>
          <p>✔ Password Checker</p>
          <p>✔ Vulnerability Scanner</p>
          <p>✔ Linux Scripts</p>
          <div style={{ marginTop: "30px", background: "#1e293b", padding: "15px", borderRadius: "12px", textAlign: "center" }}>
            <h2>FREE</h2>
            <p>Premium Security Pack</p>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ background: "#fff", padding: "35px", borderRadius: "18px", boxShadow: "0 20px 40px rgba(0,0,0,.15)" }}>
          <h1 style={{ color: "#0284c7" }}>Free Cyber Security Toolkit</h1>
          <p>Download professional security tools used by ethical hackers.</p>

          <div style={{ background: "#f0f9ff", padding: "20px", borderRadius: "12px", margin: "25px 0" }}>
            <h2>Toolkit Features</h2>
            <ul style={{ lineHeight: "1.8" }}>
              <li>🛡 Threat Detection</li>
              <li>🔐 Password Audit</li>
              <li>💻 Network Scanner</li>
              <li>📊 Security Reports</li>
              <li>⚡ One Click Installation</li>
            </ul>
          </div>

          <h2>Create Free Account</h2>
          <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
          <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          <input placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle} />
          <input placeholder="GitHub Username" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />

          <button
            onClick={() => setView("login")}
            style={{ width: "100%", padding: "18px", background: "#0284c7", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}