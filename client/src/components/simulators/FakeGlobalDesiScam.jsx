import React, { useState } from "react";

export default function FakeGlobalDesiScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [upi, setUpi] = useState("");
  const [pin, setPin] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "12px",
    border: "1px solid #ec4899",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box"
  };

  /* ===================================
        CHECKOUT / PAYMENT PAGE
  =================================== */
  if (view === "checkout") {
    return (
      <div style={{ background: "#fdf2f8", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#fff", borderRadius: "20px", padding: "35px", boxShadow: "0 20px 50px rgba(236,72,153,.3)" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#db2777" }}>👗 Global Desi Official Store</h1>
            <h2>Secure Checkout</h2>
            <p>Complete your order to claim exclusive discount</p>
          </div>

          <div style={{ background: "#fce7f3", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #ec4899" }}>
            <h2>Order Summary</h2>
            <h1 style={{ color: "#db2777" }}>₹1,499</h1>
            <p>3 Ethnic Wear Items</p>
            <p>🚚 Free Express Delivery</p>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 You saved ₹8,500!</p>
          </div>

          <h2>Payment Information</h2>
          <input
            placeholder="UPI ID (e.g., name@paytm)"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="UPI PIN (to confirm payment)"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#ec4899,#db2777)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
          >
            Pay ₹1,499 & Confirm Order →
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
      <div style={{ background: "#fdf2f8", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Global Desi Shopping Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Full Name: <b>{name || "Not provided"}</b></li>
                  <li>📱 Mobile Number: <b>{mobile || "Not provided"}</b></li>
                  <li>📧 Email Address: <b>{email || "Not provided"}</b></li>
                  <li>🏠 Delivery Address: <b>{address || "Not provided"}</b></li>
                  <li>💳 UPI ID: <b>{upi || "Not provided"}</b></li>
                  <li>🔐 UPI PIN: <b>{pin ? "••••" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>85% discount on branded ethnic wear.</li>
                  <li>Unofficial website URL (not globaldesi.com).</li>
                  <li>Requested UPI PIN (never needed to receive money).</li>
                  <li>No verified seller badge or GST number.</li>
                  <li>Fake customer reviews & testimonials.</li>
                  <li>Urgency tactics ("Limited stock!").</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "97%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>VERY HIGH RISK — FINANCIAL FRAUD</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 Stay Safe While Shopping Online</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li><b>Never share your UPI PIN</b> — it's only for sending money, never receiving.</li>
                <li>Shop only from official brand websites (verify URL carefully).</li>
                <li>Check for HTTPS and verified seller badges.</li>
                <li>Be suspicious of discounts above 70% on branded items.</li>
                <li>Read reviews from multiple sources, not just the website.</li>
                <li>Use trusted payment gateways (Razorpay, PayU, official brand apps).</li>
                <li>Report fake shopping websites to Cyber Crime (1930 in India).</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake Global Desi Website</p>
              <p>⬇</p>
              <p>✅ Selected Ethnic Wear Products</p>
              <p>⬇</p>
              <p>✅ Entered Personal & Delivery Details</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID & PIN</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Money & Personal Information</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, upi, pin })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#ec4899,#db2777)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
            >
              Continue to Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ===================================
        HOME / OFFER PAGE (Default Return)
  =================================== */
  return (
    <div style={{ background: "linear-gradient(135deg,#fdf2f8,#fce7f3)", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(236,72,153,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#ec4899,#db2777,#be185d)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "42px", margin: 0 }}>👗 Global Desi</h1>
            <h3>Exclusive Ethnic Wear Collection</h3>
            <p>Mega Sale — Up to 85% OFF on all products!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#fce7f3", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #ec4899" }}>
                <div style={{ fontSize: "50px" }}>👗</div>
                <h3>Anarkali Suit Set</h3>
                <p style={{ textDecoration: "line-through", color: "#999" }}>₹4,999</p>
                <h2 style={{ color: "#db2777" }}>₹799</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>85% OFF</span>
              </div>
              <div style={{ background: "#fce7f3", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #ec4899" }}>
                <div style={{ fontSize: "50px" }}>🥻</div>
                <h3>Designer Saree</h3>
                <p style={{ textDecoration: "line-through", color: "#999" }}>₹6,999</p>
                <h2 style={{ color: "#db2777" }}>₹1,199</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>83% OFF</span>
              </div>
              <div style={{ background: "#fce7f3", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #ec4899" }}>
                <div style={{ fontSize: "50px" }}>👚</div>
                <h3>Kurti Collection</h3>
                <p style={{ textDecoration: "line-through", color: "#999" }}>₹2,499</p>
                <h2 style={{ color: "#db2777" }}>₹499</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>80% OFF</span>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#fbbf24,#f59e0b)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff" }}>⚡ Flash Sale Ending Soon!</h2>
              <p style={{ color: "#fff" }}>Only <b>23 items</b> left in stock!</p>
              <p style={{ color: "#fff", fontWeight: "700" }}>⏰ Offer expires in 12:45 minutes</p>
            </div>

            <h2>📝 Delivery Details</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("checkout")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#ec4899,#db2777)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
            >
              Proceed to Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}