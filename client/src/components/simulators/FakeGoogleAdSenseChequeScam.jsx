import React, { useState } from "react";

export default function FakeGoogleAdSenseChequeScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [pan, setPan] = useState("");

  const [upi, setUpi] = useState("");
  const [pin, setPin] = useState("");

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
        VERIFICATION / FEE PAYMENT PAGE
  =================================== */
  if (view === "verify") {
    return (
      <div style={{ background: "#f8f9fa", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#fff", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(66,133,244,.25)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>📬</div>
            <h1 style={{ color: "#1a73e8" }}>Google AdSense Payment Center</h1>
            <h2>Cheque Release Verification</h2>
            <p style={{ color: "#5f6368" }}>Complete verification to receive your cheque</p>
          </div>

          <div style={{ background: "#e8f0fe", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #4285f4" }}>
            <h3>📋 Cheque Details</h3>
            <p><b>Cheque Number:</b> GOG-2026-IN-8847291</p>
            <p><b>Amount:</b> <span style={{ color: "#137333", fontWeight: "700" }}>₹1,24,500.00</span></p>
            <p><b>Issued By:</b> Google Asia Pacific Pte. Ltd.</p>
            <p><b>Status:</b> <span style={{ color: "#ea4335" }}>⏳ Pending — Processing Fee Required</span></p>
          </div>

          <div style={{ background: "#fef7e0", padding: "15px", borderRadius: "10px", marginBottom: "20px", border: "1px solid #f9ab00" }}>
            <p style={{ margin: 0 }}>
              💰 <b>Processing Fee:</b> ₹2,499 (GST included)<br />
              <small>One-time charge to release cheque via registered courier</small>
            </p>
          </div>

          <h2>Step 1: Bank Details (for future earnings)</h2>
          <input
            placeholder="Bank Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="IFSC Code"
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="PAN Number (for TDS verification)"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            style={inputStyle}
          />

          <h2>Step 2: Pay Processing Fee</h2>
          <input
            placeholder="UPI ID (to pay ₹2,499)"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="UPI PIN (to authorize payment)"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "18px", background: "#1a73e8", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
          >
            Verify & Release Cheque →
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
      <div style={{ background: "#f8f9fa", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Google AdSense Cheque Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Full Name: <b>{name || "Not provided"}</b></li>
                  <li>📱 Mobile: <b>{mobile || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>🏠 Address: <b>{address || "Not provided"}</b></li>
                  <li>🏦 Bank Account: <b>{accountNumber ? "••••" + accountNumber.slice(-4) : "Not provided"}</b></li>
                  <li>🔀 IFSC: <b>{ifsc || "Not provided"}</b></li>
                  <li>🪪 PAN: <b>{pan ? pan.slice(0, 5) + "••••" + pan.slice(-1) : "Not provided"}</b></li>
                  <li>💳 UPI ID: <b>{upi || "Not provided"}</b></li>
                  <li>🔐 UPI PIN: <b>{pin ? "••••" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Google <b>never</b> charges fees to release earnings.</li>
                  <li>AdSense payments are made via direct bank transfer (NEFT/Wire), not courier cheques.</li>
                  <li>Requested UPI PIN (never needed to receive money).</li>
                  <li>Unofficial website (not google.com/adsense).</li>
                  <li>Fake cheque number & fake "Google Asia Pacific" letterhead.</li>
                  <li>Urgency tactics ("cheque will expire in 24 hours").</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>EXTREME RISK — FINANCIAL & IDENTITY THEFT</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How Real Google AdSense Works</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Payments are made <b>automatically</b> between the 21st–26th of each month.</li>
                <li>✅ Payments go directly to your bank via <b>NEFT / Wire Transfer / EFT</b>.</li>
                <li>✅ <b>No fees, no taxes, no charges</b> are ever deducted to release earnings.</li>
                <li>✅ You can check real payment status only at <b>google.com/adsense</b>.</li>
                <li>✅ <b>Never share your UPI PIN</b> — it's only used to send money, never receive.</li>
                <li>✅ <b>Never share your bank password, OTP, or PIN</b> with anyone claiming to be from Google.</li>
                <li>✅ Report fraud to Cyber Crime Helpline: <b>1930</b> or <b>cybercrime.gov.in</b>.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Received fake "AdSense cheque waiting" email/SMS</p>
              <p>⬇</p>
              <p>✅ Clicked link to fake Google website</p>
              <p>⬇</p>
              <p>✅ Entered personal & bank details</p>
              <p>⬇</p>
              <p>✅ Entered PAN & UPI details</p>
              <p>⬇</p>
              <p>✅ Entered UPI PIN to "pay processing fee"</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Money, Bank Access & Identity Documents</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, accountNumber, ifsc, pan, upi, pin })}
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
    <div style={{ background: "#f8f9fa", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(66,133,244,.2)" }}>
          <div style={{ background: "linear-gradient(90deg,#4285f4,#34a853,#fbbc04,#ea4335)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "42px", margin: 0, textShadow: "2px 2px 4px rgba(0,0,0,.3)" }}>🎉 Congratulations!</h1>
            <h3 style={{ color: "#fff" }}>Your Google AdSense Cheque is Ready</h3>
            <p style={{ color: "#fff" }}>Issued by Google Asia Pacific Pte. Ltd.</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ background: "linear-gradient(135deg,#e8f0fe,#f8f9fa)", padding: "30px", borderRadius: "15px", marginBottom: "30px", border: "2px solid #4285f4", textAlign: "center" }}>
              <p style={{ color: "#5f6368", margin: "0 0 10px 0" }}>Your Earnings</p>
              <h1 style={{ color: "#137333", fontSize: "56px", margin: "10px 0" }}>₹1,24,500.00</h1>
              <p style={{ color: "#5f6368", margin: 0 }}>Payment Period: June 2026</p>
              <p style={{ color: "#ea4335", fontWeight: "700", marginTop: "15px" }}>
                ⚠️ Cheque will be dispatched within 24 hours after verification
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#e8f0fe", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "40px" }}>📬</div>
                <h3>Registered Courier</h3>
                <p style={{ color: "#5f6368", fontSize: "14px" }}>Delivered to your address</p>
              </div>
              <div style={{ background: "#fce8e6", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "40px" }}>🔒</div>
                <h3>Secure Verification</h3>
                <p style={{ color: "#5f6368", fontSize: "14px" }}>Bank & KYC required</p>
              </div>
              <div style={{ background: "#e6f4ea", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "40px" }}>💰</div>
                <h3>Small Processing Fee</h3>
                <p style={{ color: "#5f6368", fontSize: "14px" }}>₹2,499 only (GST extra)</p>
              </div>
            </div>

            <div style={{ background: "#fef7e0", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "2px dashed #f9ab00", textAlign: "center" }}>
              <h2 style={{ color: "#b06000" }}>⏰ Limited Time!</h2>
              <p>Cheque will be <b>cancelled</b> if not verified within <b>24 hours</b>.</p>
              <p style={{ color: "#ea4335", fontWeight: "700" }}>Reference: GOG-2026-IN-8847291</p>
            </div>

            <h2>📝 Verify Your Identity</h2>
            <input placeholder="Full Name (as per bank account)" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

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