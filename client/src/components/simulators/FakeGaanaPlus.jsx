import React, { useState } from "react";

export default function FakeGaanaPlus({ onComplete }) {
  const [view, setView] = useState("offer");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [upi, setUpi] = useState("");
  const [pin, setPin] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box" // Prevents inputs from overflowing their parent container
  };

  /* ===========================
     PAYMENT SCREEN
  =========================== */
  if (view === "payment") {
    return (
      <div style={{ background: "#f3f4f6", minHeight: "100vh", padding: "40px" }}>
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "#fff",
            borderRadius: "18px",
            padding: "35px",
            boxShadow: "0 20px 40px rgba(0,0,0,.15)"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "25px" }}>
            <h1 style={{ color: "#7c3aed" }}>🎵 Gaana Plus</h1>
            <h2>Upgrade to Premium</h2>
            <p>Enjoy Ad-Free Music, Unlimited Downloads & HD Audio.</p>
          </div>

          <div
            style={{
              background: "#ede9fe",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "25px"
            }}
          >
            <h2>Premium Plan</h2>
            <h1 style={{ color: "#7c3aed" }}>₹49</h1>
            <p>Limited Time Subscription Offer</p>
          </div>

          <h2>Payment Details</h2>
          <input
            placeholder="UPI ID"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="UPI PIN"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{
              width: "100%",
              padding: "18px",
              background: "#7c3aed",
              border: "none",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "700",
              borderRadius: "12px",
              cursor: "pointer"
            }}
          >
            Pay ₹49 & Activate Premium
          </button>
        </div>
      </div>
    );
  }

  /* ===========================
     SUCCESS SCREEN
  =========================== */
  if (view === "success") {
    return (
      <div style={{ background: "#f3f4f6", minHeight: "100vh", padding: "40px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            background: "#fff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,.18)"
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg,#dc2626,#991b1b)",
              padding: "25px",
              color: "#fff",
              textAlign: "center"
            }}
          >
            <h1>🚨 SCAM DETECTED!</h1>
            <h3>This was a Fake Gaana Plus Subscription Scam.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div
              style={{
                background: "#fee2e2",
                padding: "20px",
                borderRadius: "12px",
                marginBottom: "25px"
              }}
            >
              <h2>⚠ Risk Level</h2>
              <div
                style={{
                  height: "18px",
                  background: "#ddd",
                  borderRadius: "20px",
                  overflow: "hidden"
                }}
              >
                <div style={{ width: "90%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>HIGH RISK</h3>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "12px" }}>
                <h2>📂 Information Exposed</h2>
                <ul>
                  <li>👤 Full Name</li>
                  <li>📱 Mobile Number</li>
                  <li>📧 Email Address</li>
                  <li>🔑 Account Password</li>
                  <li>💳 UPI ID</li>
                  <li>🔐 UPI PIN</li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "12px" }}>
                <h2>🚩 Red Flags</h2>
                <ul>
                  <li>Very cheap premium subscription.</li>
                  <li>Fake Gaana look-alike website.</li>
                  <li>Requested account password.</li>
                  <li>Urgency created with limited-time offer.</li>
                  <li>No verified company information.</li>
                  <li>Collected payment details immediately.</li>
                </ul>
              </div>
            </div>

            <div
              style={{
                marginTop: "25px",
                background: "#ecfdf5",
                padding: "20px",
                borderRadius: "12px"
              }}
            >
              <h2>🛡 Stay Safe</h2>
              <ul>
                <li>Subscribe only through the official Gaana app.</li>
                <li>Never share your account password.</li>
                <li>Never share your UPI PIN.</li>
                <li>Verify website URLs carefully.</li>
                <li>Report suspicious websites to Cyber Crime (1930).</li>
              </ul>
            </div>

            <div
              style={{
                marginTop: "25px",
                background: "#eff6ff",
                padding: "20px",
                borderRadius: "12px"
              }}
            >
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake Gaana Plus Website</p>
              <p>⬇</p>
              <p>✅ Entered Personal Details</p>
              <p>⬇</p>
              <p>✅ Entered Password</p>
              <p>⬇</p>
              <p>✅ Entered UPI Details</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>
                ❌ Fraudsters Captured Your Information
              </p>
            </div>

            <button
              onClick={() =>
                onComplete([
                  "Full Name",
                  "Mobile Number",
                  "Email Address",
                  "Password",
                  "UPI ID",
                  "UPI PIN"
                ])
              }
              style={{
                width: "100%",
                marginTop: "30px",
                padding: "18px",
                background: "linear-gradient(90deg,#2563eb,#4338ca)",
                border: "none",
                color: "#fff",
                fontWeight: "700",
                fontSize: "18px",
                borderRadius: "12px",
                cursor: "pointer"
              }}
            >
              Continue to Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ===========================
     OFFER PAGE (Default View)
  =========================== */
  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh", padding: "40px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,.15)"
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg,#7c3aed,#5b21b6)",
            padding: "25px",
            color: "#fff",
            textAlign: "center"
          }}
        >
          <h1>🎵 Gaana Plus Premium</h1>
          <h3>Unlimited Music • No Ads • HD Audio</h3>
        </div>

        <div style={{ padding: "35px" }}>
          <div
            style={{
              background: "#ede9fe",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "25px"
            }}
          >
            <h2>🔥 Special Subscription Offer</h2>
            <h1 style={{ color: "#7c3aed" }}>Only ₹49</h1>
            <p>Get 12 Months Premium Access at an Exclusive Discount.</p>
            <p>⏳ Offer expires in 10 minutes.</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "30px"
            }}
          >
            <div style={{ background: "#faf5ff", padding: "20px", borderRadius: "12px" }}>
              <h2>Premium Benefits</h2>
              <ul>
                <li>🎧 Unlimited Songs</li>
                <li>🚫 No Ads</li>
                <li>⬇ Offline Downloads</li>
                <li>🎵 HD Audio</li>
                <li>📱 Unlimited Devices</li>
              </ul>
            </div>

            <div style={{ background: "#f3f4f6", padding: "20px", borderRadius: "12px" }}>
              <h2>⭐⭐⭐⭐⭐ Reviews</h2>
              <p>"Best Premium Offer Ever!"</p>
              <p>"Only ₹49 for one year!"</p>
              <p>"Instant activation."</p>
            </div>
          </div>

          <h2>Create Your Account</h2>
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Gaana Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("payment")}
            style={{
              width: "100%",
              padding: "18px",
              background: "#7c3aed",
              border: "none",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "700",
              borderRadius: "12px",
              cursor: "pointer"
            }}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
