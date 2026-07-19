import React, { useState } from "react";

export default function FakeGovernmentGrantScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [ifsc, setIfsc] = useState("");
  
  const [upi, setUpi] = useState("");
  const [pin, setPin] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #1e3a8a",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box"
  };

  /* ===================================
        FINAL VERIFICATION / FEE PAGE
  =================================== */
  if (view === "verify") {
    return (
      <div style={{ background: "#f8fafc", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#fff", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(30,58,138,.25)", border: "1px solid #e2e8f0" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🏛️</div>
            <h1 style={{ color: "#1e3a8a" }}>National Grant Disbursement Portal</h1>
            <h2>Final Verification Step</h2>
            <p style={{ color: "#475569" }}>Complete this step to unlock your ₹50,000 grant</p>
          </div>

          <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #1e3a8a" }}>
            <h3 style={{ color: "#1e3a8a" }}>📋 Grant Summary</h3>
            <p><b>Scheme:</b> Bharat Digital Empowerment Grant (BDEG)</p>
            <p><b>Approved Amount:</b> <span style={{ color: "#16a34a", fontWeight: "700", fontSize: "20px" }}>₹50,000.00</span></p>
            <p><b>Status:</b> <span style={{ color: "#ea580c" }}>⏳ Pending Final Clearance</span></p>
          </div>

          <div style={{ background: "#fff7ed", padding: "15px", borderRadius: "10px", marginBottom: "20px", border: "1px solid #f97316" }}>
            <p style={{ margin: 0, color: "#9a3412" }}>
              ⚠️ <b>Refundable Processing Fee:</b> ₹499 only<br />
              <small>This nominal fee is mandated by the Finance Ministry to verify bank account authenticity. It will be refunded with your grant.</small>
            </p>
          </div>

          <h2>Step 1: Confirm Bank Details</h2>
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

          <h2>Step 2: Pay Verification Fee</h2>
          <input
            placeholder="Your UPI ID (to pay ₹499)"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="UPI PIN (to authorize fee deduction)"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#1e3a8a,#1e40af)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
          >
            Pay ₹499 & Claim ₹50,000 →
          </button>
          
          <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "15px" }}>
            🔒 Secured by National e-Governance Division (NeGD)
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
      <div style={{ background: "#f8fafc", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Government Grant Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Full Name: <b>{name || "Not provided"}</b></li>
                  <li>📱 Mobile: <b>{mobile || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>🪪 Aadhaar: <b>{aadhaar ? aadhaar.slice(0, 4) + " XXXX " + aadhaar.slice(-4) : "Not provided"}</b></li>
                  <li>🏦 Bank Account: <b>{bankAccount ? "••••" + bankAccount.slice(-4) : "Not provided"}</b></li>
                  <li>🔀 IFSC: <b>{ifsc || "Not provided"}</b></li>
                  <li>💳 UPI ID: <b>{upi || "Not provided"}</b></li>
                  <li>🔐 UPI PIN: <b>{pin ? "••••" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Government schemes <b>never</b> ask for "processing fees" or "refundable deposits".</li>
                  <li>Requested UPI PIN (only used to SEND money, never to receive grants).</li>
                  <li>Unofficial website domain (not ending in <b>.gov.in</b> or <b>.nic.in</b>).</li>
                  <li>Unsolicited SMS/WhatsApp messages with grant links.</li>
                  <li>Artificial urgency ("claim within 24 hours").</li>
                  <li>No requirement to check eligibility on official portals first.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>EXTREME RISK — FINANCIAL LOSS & IDENTITY THEFT</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How Real Government Grants Work</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ All genuine schemes are listed on official portals: <b>mygov.in</b>, <b>india.gov.in</b>, or specific ministry sites ending in <b>.gov.in</b>.</li>
                <li>✅ <b>Zero processing fees:</b> The government never asks for money to give you money.</li>
                <li>✅ <b>Never share your UPI PIN or OTP</b> with anyone claiming to be a "government official".</li>
                <li>✅ Grants are disbursed via Direct Benefit Transfer (DBT) directly to verified Jan Dhan or linked bank accounts.</li>
                <li>✅ You can verify any scheme by calling the official helpline or visiting a local Common Service Centre (CSC).</li>
                <li>✅ Report fraud immediately to Cyber Crime: <b>1930</b> or <b>cybercrime.gov.in</b>.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Received fake "Grant Approved" SMS/WhatsApp</p>
              <p>⬇</p>
              <p>✅ Clicked link to fake government portal</p>
              <p>⬇</p>
              <p>✅ Entered personal, Aadhaar & bank details</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID & PIN to pay "refundable fee"</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Money & Your Identity Documents</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, aadhaar, bankAccount, ifsc, upi, pin })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#1e3a8a,#1e40af)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
            >
              Continue to Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ===================================
        HOME / NOTIFICATION PAGE (Default Return)
  =================================== */
  return (
    <div style={{ background: "linear-gradient(135deg,#f8fafc,#e2e8f0)", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(30,58,138,.2)", border: "1px solid #cbd5e1" }}>
          <div style={{ background: "linear-gradient(90deg,#1e3a8a,#1e40af,#3b82f6)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "38px", margin: 0, textShadow: "2px 2px 4px rgba(0,0,0,.3)" }}>🇮🇳 Bharat Digital Empowerment Grant</h1>
            <h3 style={{ color: "#fbbf24", marginTop: "10px" }}>Government of India Initiative</h3>
            <p style={{ color: "#e2e8f0" }}>Empowering Citizens with Direct Financial Assistance</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ background: "linear-gradient(135deg,#eff6ff,#dbeafe)", padding: "30px", borderRadius: "15px", marginBottom: "30px", border: "2px solid #1e3a8a", textAlign: "center" }}>
              <p style={{ color: "#1e3a8a", margin: "0 0 10px 0", fontWeight: "600" }}>🎉 Congratulations! You have been pre-selected</p>
              <h1 style={{ color: "#16a34a", fontSize: "56px", margin: "10px 0" }}>₹50,000.00</h1>
              <p style={{ color: "#475569", margin: 0 }}>Grant Reference ID: GOI-BDEG-2026-88472</p>
              <p style={{ color: "#dc2626", fontWeight: "700", marginTop: "15px", fontSize: "18px" }}>
                ⚠️ Claim within 24 hours or your slot will be forfeited
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#f0fdf4", padding: "20px", borderRadius: "12px", textAlign: "center", border: "1px solid #86efac" }}>
                <div style={{ fontSize: "40px" }}>💰</div>
                <h3>Direct Benefit</h3>
                <p style={{ color: "#475569", fontSize: "14px" }}>Money sent directly to your bank</p>
              </div>
              <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "12px", textAlign: "center", border: "1px solid #93c5fd" }}>
                <div style={{ fontSize: "40px" }}>🔒</div>
                <h3>100% Secure</h3>
                <p style={{ color: "#475569", fontSize: "14px" }}>Verified by NeGD & NPCI</p>
              </div>
              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "12px", textAlign: "center", border: "1px solid #fdba74" }}>
                <div style={{ fontSize: "40px" }}>⚡</div>
                <h3>Instant Processing</h3>
                <p style={{ color: "#475569", fontSize: "14px" }}>Funds credited within 2 hours</p>
              </div>
            </div>

            <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "2px dashed #ef4444", textAlign: "center" }}>
              <h2 style={{ color: "#b91c1c", marginTop: 0 }}>⏰ Time is Running Out!</h2>
              <p>Only <b>47 slots</b> remaining for your district.</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>Offer expires in 00:23:45</p>
            </div>

            <h2 style={{ color: "#1e3a8a" }}>📝 Claim Your Grant Now</h2>
            <input placeholder="Full Name (as per Aadhaar)" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Registered Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Aadhaar Number (12 digits)" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("verify")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#16a34a,#15803d)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
            >
              Check Eligibility & Proceed →
            </button>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Government of India (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}