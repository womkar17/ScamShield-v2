import React, { useState } from "react";

export default function FakeIGAuditScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #dbdbdb",
    fontSize: "14px",
    outline: "none",
    background: "#fafafa",
    color: "#262626",
    boxSizing: "border-box"
  };

  const gradientButtonStyle = {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    border: "none",
    color: "#fff",
    fontWeight: "700",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px"
  };

  /* ===================================
        LOGIN / VERIFICATION PAGE
  =================================== */
  if (view === "verify") {
    return (
      <div style={{ background: "#fafafa", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        <div style={{ width: "100%", maxWidth: "400px", background: "#fff", borderRadius: "12px", padding: "40px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", border: "1px solid #dbdbdb", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: "32px", margin: "0 0 10px 0" }}>Instagram</h1>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#262626", marginBottom: "10px" }}>Account Verification</h2>
          <p style={{ color: "#8e8e8e", fontSize: "14px", marginBottom: "25px", lineHeight: "1.5" }}>
            To generate your private analytics report and see who viewed your profile, please log in to verify account ownership.
          </p>

          <div style={{ background: "#eff6ff", padding: "15px", borderRadius: "8px", marginBottom: "20px", border: "1px solid #bfdbfe", textAlign: "left" }}>
            <p style={{ margin: 0, color: "#1e40af", fontSize: "13px", fontWeight: "600" }}>🔒 Secure Connection</p>
            <p style={{ margin: "5px 0 0 0", color: "#1e40af", fontSize: "12px" }}>Your credentials are encrypted and only used for this one-time audit.</p>
          </div>

          <input
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={gradientButtonStyle}
          >
            Log In & Generate Report
          </button>

          <p style={{ color: "#8e8e8e", fontSize: "12px", marginTop: "20px" }}>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
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
      <div style={{ background: "#fafafa", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.15)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Instagram Audit Tool.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#991b1b", marginTop: 0 }}>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Instagram Username: <b>{username || "Not provided"}</b></li>
                  <li>📧 Email Address: <b>{email || "Not provided"}</b></li>
                  <li>🔑 Password: <b>{password ? "•••••••• (COMPROMISED)" : "Not provided"}</b></li>
                </ul>
                <p style={{ color: "#dc2626", fontWeight: "700", fontSize: "14px", marginTop: "15px" }}>
                  ⚠️ Attackers can now log into your account, lock you out, and scam your followers.
                </p>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#9a3412", marginTop: 0 }}>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Instagram <b>does not allow</b> third-party apps to see who viewed your profile.</li>
                  <li>Legitimate services <b>never</b> ask for your Instagram password.</li>
                  <li>Promises of "unfollower tracking" violate Meta's Terms of Service.</li>
                  <li>Unofficial domain (not instagram.com).</li>
                  <li>Fake "secure connection" badges to build false trust.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#1e40af", marginTop: 0 }}>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "100%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — FULL ACCOUNT TAKEOVER</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#065f46", marginTop: 0 }}>🛡 How to Protect Your Instagram Account</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li><b>Change your password immediately</b> on the official Instagram app or website.</li>
                <li><b>Enable Two-Factor Authentication (2FA)</b> using an authenticator app (not SMS, if possible).</li>
                <li><b>Never enter your password</b> on any third-party website, no matter how legitimate it looks.</li>
                <li>Revoke access to suspicious third-party apps in Instagram Settings → Security → Apps and Websites.</li>
                <li>Be aware that Instagram <b>will never</b> ask for your password to "verify" your account or provide analytics.</li>
                <li>Warn your followers if your account was compromised, as scammers often send them fake "crypto" or "giveaway" DMs.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#334155", marginTop: 0 }}>📈 Scam Timeline</h2>
              <p>✅ Clicked on an ad or link promising "Profile Viewer" or "Free Audit"</p>
              <p>⬇</p>
              <p>✅ Entered Instagram username and email</p>
              <p>⬇</p>
              <p>✅ Prompted to "Log In" to verify account ownership</p>
              <p>⬇</p>
              <p>✅ Entered Instagram password</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attackers Stole Credentials, Took Over Account, and Scammed Followers</p>
            </div>

            <button
              onClick={() => onComplete({ username, email, password })}
              style={{ ...gradientButtonStyle, marginTop: "30px" }}
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
    <div style={{ background: "linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #dbdbdb" }}>
          <div style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: "36px", margin: 0, letterSpacing: "-1px" }}>Instagram</h1>
            <h3 style={{ color: "#fff", marginTop: "10px", fontWeight: "600" }}>Free Account Audit & Viewer Tracker</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ textAlign: "center", marginBottom: "25px" }}>
              <p style={{ color: "#262626", fontSize: "16px", fontWeight: "600", margin: "0 0 10px 0" }}>🔍 See who viewed your profile!</p>
              <p style={{ color: "#8e8e8e", fontSize: "14px", margin: 0, lineHeight: "1.5" }}>
                Get a detailed report of your hidden profile visitors, track unfollowers, and analyze your engagement growth. 100% Free and Secure.
              </p>
            </div>

            <div style={{ background: "#f8f9fa", padding: "15px", borderRadius: "8px", marginBottom: "25px", border: "1px solid #e9ecef" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontSize: "20px", marginRight: "10px" }}>✅</span>
                <span style={{ fontSize: "14px", color: "#262626" }}>Instant Profile Viewer List</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontSize: "20px", marginRight: "10px" }}>✅</span>
                <span style={{ fontSize: "14px", color: "#262626" }}>Ghost Follower Detection</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "20px", marginRight: "10px" }}>✅</span>
                <span style={{ fontSize: "14px", color: "#262626" }}>Detailed Engagement Analytics</span>
              </div>
            </div>

            <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#262626", marginBottom: "15px", textAlign: "center" }}>Enter Your Details to Generate Report</h3>
            
            <input
              placeholder="Instagram Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
            />
            <input
              placeholder="Email Address (to send the report)"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />

            <button
              onClick={() => setView("verify")}
              style={gradientButtonStyle}
            >
              Generate Free Report →
            </button>

            <p style={{ textAlign: "center", color: "#8e8e8e", fontSize: "12px", marginTop: "25px" }}>
              © 2026 Meta Platforms, Inc. (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}