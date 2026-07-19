import React, { useState } from "react";

export default function FakeGeometryScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #a855f7",
    fontSize: "16px",
    outline: "none",
    background: "#1e1b2e",
    color: "#fff",
    boxSizing: "border-box"
  };

  /* ===================================
        VERIFICATION / PAYMENT PAGE
  =================================== */
  if (view === "verify") {
    return (
      <div style={{ background: "#0a0a14", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "700px", background: "#151525", borderRadius: "18px", padding: "35px", boxShadow: "0 20px 40px rgba(168,85,247,.3)", color: "#fff" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#c084fc" }}>🎮 Geometry Mega Hack v9</h1>
            <h2>Human Verification Required</h2>
            <p>To prevent bot abuse, please verify your account.</p>
          </div>

          <div style={{ background: "#1e1b2e", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "1px solid #a855f7" }}>
            <h3>⚠️ Verification Needed</h3>
            <p>Enter a parent/guardian payment card to confirm you are not a bot. You will NOT be charged.</p>
            <ul style={{ lineHeight: "1.8", color: "#d8b4fe" }}>
              <li>✔ Card number for age verification only</li>
              <li>✔ CVV for identity check</li>
              <li>✔ No charges will be made</li>
            </ul>
          </div>

          <input
            placeholder="Card Number (16 digits)"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="CVV (3 digits on back)"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#a855f7,#7c3aed)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
          >
            Verify & Download Hack →
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
      <div style={{ background: "#0a0a14", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Geometry Dash Hack Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Full Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>🎮 Game Username: <b>{username || "Not provided"}</b></li>
                  <li>🎂 Age: <b>{age || "Not provided"}</b></li>
                  <li>💳 Card Number: <b>{cardNumber ? "•••• •••• •••• " + cardNumber.slice(-4) : "Not provided"}</b></li>
                  <li>🔐 CVV: <b>{cvv ? "•••" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>"Free" paid game mods/hacks.</li>
                  <li>Claims to unlock ALL levels & features.</li>
                  <li>Asks for payment card for "verification".</li>
                  <li>Unofficial website (not robtopgames.com).</li>
                  <li>Urgency & "limited download" pressure.</li>
                  <li>No real developer contact info.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "99%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>EXTREME RISK — FINANCIAL FRAUD</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 Stay Safe</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li><b>Never enter a payment card</b> to "verify" a free download.</li>
                <li>Only download games/mods from official stores (Steam, App Store, Google Play).</li>
                <li>Game hacks often contain malware, spyware, or ransomware.</li>
                <li>Tell a parent or guardian immediately if you entered card details.</li>
                <li>Use a virtual/disposable card for online sign-ups if needed.</li>
                <li>Report gaming scams to Cyber Crime Helpline (1930 in India).</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake Geometry Hack Website</p>
              <p>⬇</p>
              <p>✅ Clicked "Download Mega Hack"</p>
              <p>⬇</p>
              <p>✅ Entered Personal Details</p>
              <p>⬇</p>
              <p>✅ Entered Parent's Card Details</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Payment Info — No Hack Exists</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, username, age, cardNumber, cvv })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#a855f7,#7c3aed)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#0a0a14,#1a0b2e)", minHeight: "100vh", padding: "40px", color: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#151525", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(168,85,247,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#7c3aed,#a855f7,#ec4899)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0 }}>🎮 Geometry Mega Hack v9</h1>
            <h3>Unlock EVERYTHING in Geometry Dash — 100% FREE</h3>
            <p>Used by 2,000,000+ players worldwide</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#1e1b2e", padding: "20px", borderRadius: "15px", textAlign: "center", border: "1px solid #a855f7" }}>
                <div style={{ fontSize: "40px" }}>🔓</div>
                <h3>Unlock All Levels</h3>
                <p style={{ color: "#d8b4fe" }}>Including demons & secrets</p>
              </div>
              <div style={{ background: "#1e1b2e", padding: "20px", borderRadius: "15px", textAlign: "center", border: "1px solid #a855f7" }}>
                <div style={{ fontSize: "40px" }}>⚡</div>
                <h3>God Mode</h3>
                <p style={{ color: "#d8b4fe" }}>Invincible gameplay</p>
              </div>
              <div style={{ background: "#1e1b2e", padding: "20px", borderRadius: "15px", textAlign: "center", border: "1px solid #a855f7" }}>
                <div style={{ fontSize: "40px" }}>🎵</div>
                <h3>Free Music Packs</h3>
                <p style={{ color: "#d8b4fe" }}>All premium tracks</p>
              </div>
              <div style={{ background: "#1e1b2e", padding: "20px", borderRadius: "15px", textAlign: "center", border: "1px solid #a855f7" }}>
                <div style={{ fontSize: "40px" }}>🎨</div>
                <h3>All Icons Unlocked</h3>
                <p style={{ color: "#d8b4fe" }}>Every custom icon</p>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#7c3aed,#ec4899)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2>⚠️ LIMITED DOWNLOAD SLOTS</h2>
              <p>Only <b>47 downloads</b> remaining today!</p>
              <p>⏰ Offer expires in 04:32 minutes</p>
            </div>

            <h2>📝 Enter Your Details</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Geometry Dash Username" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
            <input placeholder="Your Age" value={age} onChange={(e) => setAge(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("verify")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#a855f7,#ec4899)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
            >
              Download Hack →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}