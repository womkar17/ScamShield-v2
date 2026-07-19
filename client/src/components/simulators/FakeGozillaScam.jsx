import React, { useState } from "react";

export default function FakeGozillaScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #dc2626",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box"
  };

  /* ===================================
        CHECKOUT / PAYMENT PAGE
  =================================== */
  if (view === "checkout") {
    return (
      <div style={{ background: "#0f0f0f", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#1a1a1a", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(220,38,38,.3)", color: "#fff", border: "1px solid #dc2626" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🦖</div>
            <h1 style={{ color: "#dc2626" }}>GOZILLA Official Store</h1>
            <h2>Secure Checkout</h2>
            <p style={{ color: "#94a3b8" }}>Complete your order to claim exclusive collectibles</p>
          </div>

          <div style={{ background: "#2a2a2a", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #dc2626" }}>
            <h2>Order Summary</h2>
            <h1 style={{ color: "#dc2626" }}>₹4,999</h1>
            <p>Limited Edition Godzilla Collectibles Bundle</p>
            <p>🚚 Free Express Delivery</p>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 You saved ₹15,000!</p>
          </div>

          <h2>Payment Information</h2>
          <input
            placeholder="Card Number (16 digits)"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={inputStyle}
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <input
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              style={inputStyle}
            />
            <input
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              style={inputStyle}
            />
          </div>

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#dc2626,#991b1b)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
          >
            Pay ₹4,999 & Confirm Order →
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
      <div style={{ background: "#0f0f0f", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.4)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Godzilla Merchandise Website.</h3>
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
                  <li>💳 Card Number: <b>{cardNumber ? "•••• •••• •••• " + cardNumber.slice(-4) : "Not provided"}</b></li>
                  <li>📅 Expiry: <b>{expiry || "Not provided"}</b></li>
                  <li>🔐 CVV: <b>{cvv ? "•••" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>75% discount on "limited edition" collectibles.</li>
                  <li>Unofficial website (not licensed by Toho Co., Ltd.).</li>
                  <li>No verified seller badge or official partnership.</li>
                  <li>Fake customer reviews & testimonials.</li>
                  <li>Urgency tactics ("Only 12 left!").</li>
                  <li>Request for full credit card details on unsecured site.</li>
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
              <h2>🛡 Stay Safe While Shopping for Collectibles</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>Buy merchandise only from <b>official licensed retailers</b> and brand websites.</li>
                <li>Verify the website URL — look for HTTPS and official brand partnerships.</li>
                <li>Be suspicious of discounts above 50% on "limited edition" items.</li>
                <li>Check for official licensing information (e.g., "Licensed by Toho Co., Ltd." for Godzilla).</li>
                <li>Read reviews from multiple sources, not just the website.</li>
                <li>Use trusted payment gateways with buyer protection.</li>
                <li>Report fake merchandise websites to Cyber Crime (1930 in India).</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake Godzilla Merchandise Website</p>
              <p>⬇</p>
              <p>✅ Selected "Limited Edition" Collectibles</p>
              <p>⬇</p>
              <p>✅ Entered Personal & Delivery Details</p>
              <p>⬇</p>
              <p>✅ Entered Credit Card Information</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Money & Personal Information</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, cardNumber, expiry, cvv })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#dc2626,#991b1b)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#0f0f0f,#1a1a1a)", minHeight: "100vh", padding: "40px", color: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#1a1a1a", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(220,38,38,.3)", border: "1px solid #dc2626" }}>
          <div style={{ background: "linear-gradient(90deg,#991b1b,#dc2626,#ef4444)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "48px", margin: 0, textShadow: "3px 3px 6px rgba(0,0,0,.5)" }}>🦖 GOZILLA</h1>
            <h3 style={{ color: "#fbbf24" }}>Official Limited Edition Collectibles</h3>
            <p style={{ color: "#fecaca" }}>Exclusive Merchandise — Up to 75% OFF!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#2a2a2a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #dc2626" }}>
                <div style={{ fontSize: "60px" }}>🦖</div>
                <h3>Godzilla Figure (30cm)</h3>
                <p style={{ textDecoration: "line-through", color: "#999" }}>₹19,999</p>
                <h2 style={{ color: "#dc2626" }}>₹4,999</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>75% OFF</span>
              </div>
              <div style={{ background: "#2a2a2a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #dc2626" }}>
                <div style={{ fontSize: "60px" }}>🎬</div>
                <h3>Movie Poster Collection</h3>
                <p style={{ textDecoration: "line-through", color: "#999" }}>₹7,999</p>
                <h2 style={{ color: "#dc2626" }}>₹1,999</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>75% OFF</span>
              </div>
              <div style={{ background: "#2a2a2a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #dc2626" }}>
                <div style={{ fontSize: "60px" }}>👕</div>
                <h3>Limited Edition T-Shirt</h3>
                <p style={{ textDecoration: "line-through", color: "#999" }}>₹3,999</p>
                <h2 style={{ color: "#dc2626" }}>₹999</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>75% OFF</span>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#dc2626,#ef4444)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff" }}>⚡ Flash Sale Ending Soon!</h2>
              <p style={{ color: "#fff" }}>Only <b>12 items</b> left in stock!</p>
              <p style={{ color: "#fff", fontWeight: "700" }}>⏰ Offer expires in 05:32 minutes</p>
            </div>

            <div style={{ background: "#2a2a2a", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #dc2626" }}>
              <h2 style={{ color: "#dc2626" }}>🏆 What Fans Are Saying</h2>
              <p>"Amazing quality! Worth every penny!" — Rahul K. ⭐⭐⭐⭐⭐</p>
              <p>"My son loves the Godzilla figure! Fast delivery!" — Priya M. ⭐⭐⭐⭐⭐</p>
              <p>"Best merchandise store ever!" — Amit S. ⭐⭐⭐⭐⭐</p>
            </div>

            <h2 style={{ color: "#dc2626" }}>📝 Delivery Details</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("checkout")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#dc2626,#991b1b)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
            >
              Proceed to Checkout →
            </button>

            <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "12px", marginTop: "20px" }}>
              © 2026 GOZILLA Official Store (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}