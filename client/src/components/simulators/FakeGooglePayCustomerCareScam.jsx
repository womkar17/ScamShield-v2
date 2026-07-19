import React, { useState } from "react";

export default function FakeGooglePayCustomerCareScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [upiId, setUpiId] = useState("");
  const [upiPin, setUpiPin] = useState("");
  const [otp, setOtp] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [ifsc, setIfsc] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #4285f4",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box"
  };

  /* ===================================
        VERIFICATION / OTP PAGE
  =================================== */
  if (view === "verify") {
    return (
      <div style={{ background: "#f1f3f4", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#fff", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(66,133,244,.25)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>📞</div>
            <h1 style={{ color: "#1a73e8" }}>Google Pay Support</h1>
            <h2>Refund Verification</h2>
            <p style={{ color: "#5f6368" }}>Verify your identity to process the refund of ₹8,450</p>
          </div>

          <div style={{ background: "#fce8e6", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #ea4335" }}>
            <h3 style={{ color: "#c5221f" }}>⚠️ Transaction Failed</h3>
            <p><b>Amount Debited:</b> ₹8,450.00</p>
            <p><b>Transaction ID:</b> GPP2026071700847</p>
            <p><b>Status:</b> <span style={{ color: "#ea4335" }}>Money deducted but not credited</span></p>
            <p style={{ color: "#137333", fontWeight: "700", marginTop: "10px" }}>
              💰 Refund Amount: ₹8,450.00 (to be credited in 24 hours)
            </p>
          </div>

          <div style={{ background: "#e8f0fe", padding: "15px", borderRadius: "10px", marginBottom: "20px", border: "1px solid #4285f4" }}>
            <p style={{ margin: 0 }}>
              🔐 <b>Verification Required</b><br />
              <small>To prevent fraud, we need to verify your account before processing the refund.</small>
            </p>
          </div>

          <h2>Step 1: Account Verification</h2>
          <input
            placeholder="Registered UPI ID (e.g., name@okaxis)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Bank Account Number"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="IFSC Code"
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
            style={inputStyle}
          />

          <h2>Step 2: Secure Authorization</h2>
          <input
            placeholder="UPI PIN (to authorize refund credit)"
            type="password"
            value={upiPin}
            onChange={(e) => setUpiPin(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="6-digit OTP sent to your mobile"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "18px", background: "#1a73e8", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
          >
            Verify & Process Refund →
          </button>

          <p style={{ textAlign: "center", color: "#5f6368", fontSize: "12px", marginTop: "15px" }}>
            🔒 Your information is encrypted and secure
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
      <div style={{ background: "#f1f3f4", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Google Pay Customer Care Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Full Name: <b>{name || "Not provided"}</b></li>
                  <li>📱 Mobile: <b>{mobile || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>💳 UPI ID: <b>{upiId || "Not provided"}</b></li>
                  <li>🏦 Bank Account: <b>{bankAccount ? "••••" + bankAccount.slice(-4) : "Not provided"}</b></li>
                  <li>🔀 IFSC: <b>{ifsc || "Not provided"}</b></li>
                  <li>🔐 UPI PIN: <b>{upiPin ? "••••" : "Not provided"}</b></li>
                  <li>📲 OTP: <b>{otp || "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Google Pay <b>never</b> calls users first.</li>
                  <li>Requested UPI PIN (only used to SEND money, never receive).</li>
                  <li>Requested OTP (NEVER share OTP with anyone).</li>
                  <li>Unofficial website (not google.com/intl/en_in/googlepay).</li>
                  <li>Fake "transaction failed" alert with urgency.</li>
                  <li>No verified Google support badge.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>EXTREME RISK — FULL BANK ACCOUNT DRAIN</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How Real Google Pay Support Works</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Google Pay support is available <b>only inside the app</b> (Profile → Help & feedback).</li>
                <li>✅ Google <b>never calls you first</b> — you must initiate contact.</li>
                <li>✅ <b>UPI PIN is only for sending money</b> — never needed to receive money or refunds.</li>
                <li>✅ <b>NEVER share OTP</b> with anyone — not even "bank managers" or "Google support".</li>
                <li>✅ Failed transactions auto-reverse within <b>3-5 business days</b> — no action needed.</li>
                <li>✅ Official website: <b>pay.google.com</b> or <b>google.com/googlepay</b></li>
                <li>✅ Report fraud to Cyber Crime: <b>1930</b> or <b>cybercrime.gov.in</b></li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Received fake "transaction failed" SMS/email</p>
              <p>⬇</p>
              <p>✅ Called fake customer care number from SMS</p>
              <p>⬇</p>
              <p>✅ Redirected to fake Google Pay website</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID, bank details, UPI PIN & OTP</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Drained Your Bank Account Using Your Credentials</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, upiId, upiPin, otp, bankAccount, ifsc })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#4285f4,#1a73e8)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "#f1f3f4", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(66,133,244,.2)" }}>
          <div style={{ background: "linear-gradient(90deg,#4285f4,#34a853,#fbbc04,#ea4335)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "42px", margin: 0, textShadow: "2px 2px 4px rgba(0,0,0,.3)" }}>📱 Google Pay Customer Care</h1>
            <h3 style={{ color: "#fff" }}>24/7 Support — We're Here to Help</h3>
            <p style={{ color: "#fff" }}>Official Helpline: 1800-XXX-XXXX (FAKE)</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ background: "linear-gradient(135deg,#fce8e6,#fff)", padding: "30px", borderRadius: "15px", marginBottom: "30px", border: "2px solid #ea4335", textAlign: "center" }}>
              <div style={{ fontSize: "60px" }}>⚠️</div>
              <h2 style={{ color: "#c5221f" }}>Alert: Transaction Issue Detected</h2>
              <p style={{ fontSize: "18px" }}>Your recent payment of <b>₹8,450</b> has failed.</p>
              <p style={{ color: "#5f6368" }}>Money has been debited from your account but not credited to the recipient.</p>
              <p style={{ color: "#137333", fontWeight: "700", marginTop: "15px", fontSize: "20px" }}>
                💰 Refund of ₹8,450 will be processed after verification
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#e8f0fe", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "40px" }}>📞</div>
                <h3>Call Support</h3>
                <p style={{ color: "#5f6368", fontSize: "14px" }}>Toll-free: 1800-XXX-XXXX</p>
              </div>
              <div style={{ background: "#fce8e6", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "40px" }}>💬</div>
                <h3>Live Chat</h3>
                <p style={{ color: "#5f6368", fontSize: "14px" }}>24/7 available</p>
              </div>
              <div style={{ background: "#e6f4ea", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "40px" }}>🔒</div>
                <h3>Secure Refund</h3>
                <p style={{ color: "#5f6368", fontSize: "14px" }}>100% safe & verified</p>
              </div>
            </div>

            <div style={{ background: "#fef7e0", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "2px dashed #f9ab00", textAlign: "center" }}>
              <h2 style={{ color: "#b06000" }}>⏰ Act Now!</h2>
              <p>Refund request will <b>expire in 2 hours</b> if not verified.</p>
              <p style={{ color: "#ea4335", fontWeight: "700" }}>Transaction ID: GPP2026071700847</p>
            </div>

            <h2>📝 Start Refund Process</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Registered Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("verify")}
              style={{ width: "100%", padding: "18px", background: "#1a73e8", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
            >
              Proceed to Verification →
            </button>

            <p style={{ textAlign: "center", color: "#5f6368", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Google LLC (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}