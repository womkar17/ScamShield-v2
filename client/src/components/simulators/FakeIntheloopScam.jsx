import React, { useState } from "react";

export default function FakeIntheloopScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
    outline: "none",
    background: "#f8fafc",
    color: "#0f172a",
    boxSizing: "border-box"
  };

  /* ===================================
        VERIFICATION / PAYOUT PAGE
  =================================== */
  if (view === "verify") {
    return (
      <div style={{ background: "#f1f5f9", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        <div style={{ width: "100%", maxWidth: "500px", background: "#fff", borderRadius: "12px", padding: "35px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
          <div style={{ textAlign: "center", marginBottom: "25px" }}>
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>💳</div>
            <h1 style={{ color: "#0f172a", fontSize: "24px", fontWeight: "700", margin: "0 0 5px 0" }}>Intheloop</h1>
            <h2 style={{ color: "#475569", fontSize: "16px", fontWeight: "500" }}>Secure Payout Verification</h2>
          </div>

          <div style={{ background: "#eff6ff", padding: "15px", borderRadius: "8px", marginBottom: "25px", border: "1px solid #bfdbfe" }}>
            <p style={{ margin: 0, color: "#1e40af", fontSize: "14px", fontWeight: "600" }}>🎉 Allowance Ready: £500.00</p>
            <p style={{ margin: "5px 0 0 0", color: "#1e40af", fontSize: "13px" }}>To prevent fraud, please verify your employee identity and bank details to process this deposit.</p>
          </div>

          <label style={{ color: "#475569", fontSize: "13px", fontWeight: "600" }}>Employee ID</label>
          <input
            placeholder="e.g., EMP-88472"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#475569", fontSize: "13px", fontWeight: "600" }}>Corporate Portal Password</label>
          <input
            placeholder="Enter your work password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <div>
              <label style={{ color: "#475569", fontSize: "13px", fontWeight: "600" }}>Sort Code</label>
              <input
                placeholder="XX-XX-XX"
                value={sortCode}
                onChange={(e) => setSortCode(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ color: "#475569", fontSize: "13px", fontWeight: "600" }}>Account Number</label>
              <input
                placeholder="XXXXXXXX"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "14px", background: "#0f172a", border: "none", color: "#fff", fontWeight: "600", fontSize: "16px", borderRadius: "8px", cursor: "pointer", marginTop: "10px" }}
          >
            Verify & Claim £500 →
          </button>

          <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "12px", marginTop: "20px" }}>
            🔒 Secured by 256-bit SSL Encryption
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
      <div style={{ background: "#f1f5f9", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.15)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ margin: 0 }}>🚨 SCAM DETECTED</h1>
            <h3 style={{ margin: "10px 0 0 0", fontWeight: "400" }}>This was a Fake Intheloop Employee Benefits Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "25px", borderRadius: "15px", border: "1px solid #fecaca" }}>
                <h2 style={{ color: "#991b1b", marginTop: 0 }}>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8", color: "#7f1d1d" }}>
                  <li>👤 Full Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Work Email: <b>{email || "Not provided"}</b></li>
                  <li>🆔 Employee ID: <b>{employeeId || "Not provided"}</b></li>
                  <li>🔑 Corporate Password: <b>{password ? "•••••••• (COMPROMISED)" : "Not provided"}</b></li>
                  <li>🏦 Sort Code: <b>{sortCode || "Not provided"}</b></li>
                  <li>🏦 Account Number: <b>{accountNumber ? "••••" + accountNumber.slice(-4) : "Not provided"}</b></li>
                </ul>
                <p style={{ color: "#dc2626", fontWeight: "700", fontSize: "14px", marginTop: "15px" }}>
                  ⚠️ Attackers can now access your corporate network and set up fraudulent direct debits.
                </p>
              </div>

              <div style={{ background: "#fff7ed", padding: "25px", borderRadius: "15px", border: "1px solid #fed7aa" }}>
                <h2 style={{ color: "#9a3412", marginTop: 0 }}>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8", color: "#7c2d12" }}>
                  <li>Unsolicited email/SMS claiming "free money" or "allowance payout".</li>
                  <li>Asking for your <b>corporate password</b> on an external web form.</li>
                  <li>Requesting bank details (Sort Code/Account Number) via a generic link.</li>
                  <li>Unofficial domain (not intheloop.com or your company's official HR portal).</li>
                  <li>Artificial urgency ("Claim within 24 hours or it expires").</li>
                  <li>Generic greetings or slight misspellings in the communication.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px", border: "1px solid #bfdbfe" }}>
              <h2 style={{ color: "#1e40af", marginTop: 0 }}>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>CRITICAL RISK — CORPORATE NETWORK BREACH & FINANCIAL FRAUD</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px", border: "1px solid #a7f3d0" }}>
              <h2 style={{ color: "#065f46", marginTop: 0 }}>🛡 How to Protect Yourself & Your Company</h2>
              <ul style={{ lineHeight: "1.8", color: "#064e3b" }}>
                <li><b>Never enter your work password</b> on any site unless you manually typed the official company URL or are using your official SSO portal.</li>
                <li>Legitimate HR/Benefits platforms (like Intheloop) <b>already have your bank details</b> on file via payroll. They will never ask you to re-enter them via an email link.</li>
                <li>If you receive an unexpected "allowance" or "bonus" email, <b>verify it directly with your HR department</b> via Slack, Teams, or in person.</li>
                <li>Check the sender's email address carefully. Scammers often use domains like <i>intheloop-benefits.com</i> instead of the official domain.</li>
                <li>If you entered your password: <b>change it immediately</b> and notify your IT/Security team.</li>
                <li>If you entered bank details: <b>contact your bank immediately</b> to monitor for fraudulent direct debits.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px", border: "1px solid #e2e8f0" }}>
              <h2 style={{ color: "#334155", marginTop: 0 }}>📈 Scam Timeline</h2>
              <p>✅ Received fake "Q3 Wellness Allowance" email/SMS</p>
              <p>⬇</p>
              <p>✅ Clicked the provided link to "claim" the funds</p>
              <p>⬇</p>
              <p>✅ Landed on a convincing fake Intheloop login page</p>
              <p>⬇</p>
              <p>✅ Entered Employee ID and Corporate Password</p>
              <p>⬇</p>
              <p>✅ Provided personal bank Sort Code and Account Number</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700", fontSize: "16px" }}>❌ Attackers Stole Corporate Credentials & Set Up Fraudulent Bank Mandates</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, employeeId, password, sortCode, accountNumber })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "#0f172a", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
            >
              Continue to Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ===================================
        HOME / LURE PAGE (Default Return)
  =================================== */
  return (
    <div style={{ background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}>
          <div style={{ background: "#0f172a", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "32px", margin: 0, fontWeight: "700", letterSpacing: "-0.5px" }}>Intheloop</h1>
            <h3 style={{ color: "#94a3b8", marginTop: "10px", fontWeight: "500" }}>Employee Benefits & Expenses Portal</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ textAlign: "center", marginBottom: "25px" }}>
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>🎉</div>
              <p style={{ color: "#0f172a", fontSize: "20px", fontWeight: "700", margin: "0 0 10px 0" }}>Your Q3 Wellness Allowance is Ready!</p>
              <p style={{ color: "#475569", fontSize: "15px", margin: 0, lineHeight: "1.5" }}>
                Your company has allocated <b>£500.00</b> to your Intheloop benefits account. 
                Click below to verify your details and have the funds deposited directly into your bank account within 24 hours.
              </p>
            </div>

            <div style={{ background: "#f0fdf4", padding: "15px", borderRadius: "8px", marginBottom: "25px", border: "1px solid #86efac", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <span style={{ fontSize: "20px" }}>⏰</span>
              <span style={{ fontSize: "14px", color: "#166534", fontWeight: "600" }}>Offer expires in 23:59:12</span>
            </div>

            <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#0f172a", marginBottom: "15px", textAlign: "center" }}>Start Your Claim</h3>
            
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
            <input
              placeholder="Work Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />

            <button
              onClick={() => setView("verify")}
              style={{ width: "100%", padding: "14px", background: "#0f172a", border: "none", color: "#fff", fontWeight: "600", fontSize: "16px", borderRadius: "8px", cursor: "pointer", marginTop: "10px" }}
            >
              Proceed to Secure Verification →
            </button>

            <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "12px", marginTop: "25px" }}>
              © 2026 Intheloop Ltd. (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}