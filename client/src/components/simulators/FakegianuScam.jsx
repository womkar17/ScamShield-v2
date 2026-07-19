import React, { useState } from "react";

export default function FakeGianuScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [amount, setAmount] = useState("");
  const [upi, setUpi] = useState("");
  const [pin, setPin] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #f59e0b",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box"
  };

  /* ===================================
        DONATION / PAYMENT PAGE
  =================================== */
  if (view === "donate") {
    return (
      <div style={{ background: "#fef3c7", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "700px", background: "#fff", borderRadius: "18px", padding: "35px", boxShadow: "0 20px 40px rgba(245,158,11,.3)" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#d97706" }}>🙏 Giani Gianu Singh Ji</h1>
            <h2>Special Akhand Paath Seva</h2>
            <p>Book your family's spiritual blessing today</p>
          </div>

          <div style={{ background: "#fef9e7", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #f59e0b" }}>
            <h3>📿 Seva Details</h3>
            <ul style={{ lineHeight: "1.8" }}>
              <li>✔ Complete Akhand Paath Sahib</li>
              <li>✔ 48-hour continuous recitation</li>
              <li>✔ Bhog ceremony at your home</li>
              <li>✔ Langar arrangement included</li>
              <li>✔ Family names included in Ardaas</li>
            </ul>
          </div>

          <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "12px", marginBottom: "20px" }}>
            <h2 style={{ color: "#d97706" }}>Seva Amount: ₹11,000</h2>
            <p>Minimum donation: ₹5,100</p>
          </div>

          <input
            placeholder="Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="UPI ID"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="UPI PIN (to receive blessing confirmation)"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "18px", background: "#d97706", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
          >
            Book Seva & Pay →
          </button>
        </div>
      </div>
    );
  }

  /* ===================================
        SUCCESS / SCAM DETECTED PAGE
  =================================== */
  if (view === "success") {
    return (
      <div style={{ background: "#fef3c7", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Religious Service Website.</h3>
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
                  <li>💰 Amount: <b>₹{amount || "0"}</b></li>
                  <li>💳 UPI ID: <b>{upi || "Not provided"}</b></li>
                  <li>🔐 UPI PIN: <b>{pin ? "••••" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Unverified religious figure online.</li>
                  <li>Requested UPI PIN (never needed to receive money).</li>
                  <li>No official Gurdwara affiliation.</li>
                  <li>High-pressure "limited slots" tactic.</li>
                  <li>Unrealistic promises of spiritual benefits.</li>
                  <li>No verifiable contact information.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "98%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>EXTREME RISK — FINANCIAL & PERSONAL DATA THEFT</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 Stay Safe</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li><b>Never share your UPI PIN</b> — it's only for sending money, never receiving.</li>
                <li>Book religious services only through your local Gurdwara directly.</li>
                <li>Verify the identity of religious scholars through trusted community sources.</li>
                <li>Be cautious of online "special seva" offers with high costs.</li>
                <li>Legitimate religious services don't require advance online payment.</li>
                <li>Report religious fraud to Cyber Crime Helpline (1930 in India).</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake Religious Service Website</p>
              <p>⬇</p>
              <p>✅ Selected "Special Akhand Paath" Service</p>
              <p>⬇</p>
              <p>✅ Entered Personal & Address Details</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID & PIN</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Money & Personal Information</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, amount, upi, pin })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#d97706,#b45309)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#fef3c7,#fde68a)", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(245,158,11,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#d97706,#f59e0b)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "38px", margin: 0 }}>🙏 Giani Gianu Singh Ji</h1>
            <h3>Renowned Sikh Scholar & Spiritual Guide</h3>
            <p>Serving the Panth for 25+ years</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#fef9e7", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #f59e0b" }}>
                <div style={{ fontSize: "40px" }}>📿</div>
                <h3>Akhand Paath</h3>
                <p>Continuous 48-hour recitation</p>
                <h2 style={{ color: "#d97706" }}>₹11,000</h2>
              </div>
              <div style={{ background: "#fef9e7", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #f59e0b" }}>
                <div style={{ fontSize: "40px" }}>🎵</div>
                <h3>Kirtan Program</h3>
                <p>Professional Ragis at your home</p>
                <h2 style={{ color: "#d97706" }}>₹7,500</h2>
              </div>
              <div style={{ background: "#fef9e7", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #f59e0b" }}>
                <div style={{ fontSize: "40px" }}>🍲</div>
                <h3>Langar Seva</h3>
                <p>Complete arrangement for 100+ people</p>
                <h2 style={{ color: "#d97706" }}>₹15,000</h2>
              </div>
            </div>

            <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center", border: "2px dashed #d97706" }}>
              <h2>⚠️ Limited Slots Available</h2>
              <p>Only <b>12 bookings</b> remaining for this month!</p>
              <p>Book now to secure your family's spiritual blessing</p>
            </div>

            <h2>📝 Book Your Seva</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Home Address (for Seva)" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("donate")}
              style={{ width: "100%", padding: "18px", background: "#d97706", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
            >
              Proceed to Payment →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}