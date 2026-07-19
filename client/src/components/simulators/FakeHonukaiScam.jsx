import React, { useState } from "react";

export default function FakeHonukaiScam({ onComplete }) {
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
    borderRadius: "8px",
    border: "1px solid #ef4444",
    fontSize: "16px",
    outline: "none",
    background: "#1a1a1a",
    color: "#f8fafc",
    boxSizing: "border-box"
  };

  /* ===================================
        CHECKOUT / PAYMENT PAGE
  =================================== */
  if (view === "checkout") {
    return (
      <div style={{ background: "#0a0a0a", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#111", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(239,68,68,.4)", color: "#fff", border: "1px solid #ef4444" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🎌</div>
            <h1 style={{ color: "#ef4444", fontFamily: "serif", letterSpacing: "3px" }}>HONUCAI 魂ukai</h1>
            <h2>Secure Checkout</h2>
            <p style={{ color: "#94a3b8" }}>Complete your order for exclusive Tokyo streetwear</p>
          </div>

          <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #ef4444" }}>
            <h2 style={{ color: "#ef4444" }}>Order Summary</h2>
            <h1 style={{ color: "#fff" }}>₹3,999</h1>
            <p>Shibuya Collection 2026 - Limited Edition</p>
            <p>🚚 International Express Delivery</p>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 You saved ₹12,000!</p>
          </div>

          <h2 style={{ color: "#f8fafc" }}>Payment Information</h2>
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
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#ef4444,#dc2626)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer", letterSpacing: "1px" }}
          >
            Pay ₹3,999 & Confirm Order →
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
      <div style={{ background: "#0a0a0a", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.5)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Honukai Streetwear Website.</h3>
          </div>

          <div style={{ padding: "35px", color: "#0f172a" }}>
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
                  <li>70% discount on "limited edition" Japanese streetwear.</li>
                  <li>Unofficial website (not the brand's verified store).</li>
                  <li>No verified seller badge or official brand endorsement.</li>
                  <li>Fake customer reviews & artificial scarcity.</li>
                  <li>Urgency tactics ("Only 5 pieces left!").</li>
                  <li>Request for full credit card details on unsecured site.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "96%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>VERY HIGH RISK — FINANCIAL FRAUD</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 Stay Safe While Buying Streetwear</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>Buy merchandise <b>only</b> from the brand's official website or authorized retailers.</li>
                <li>Verify the website URL — check for HTTPS and official social media links.</li>
                <li>Be highly suspicious of discounts above 50% on "limited edition" items.</li>
                <li>Look for official brand authentication certificates or holograms.</li>
                <li>Use trusted payment gateways with buyer protection.</li>
                <li>Research the brand on official fashion forums and communities.</li>
                <li>Report fake merchandise websites to Cyber Crime Helpline (<b>1930</b> in India).</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake Honukai Streetwear Website</p>
              <p>⬇</p>
              <p>✅ Selected "Shibuya Collection" Items</p>
              <p>⬇</p>
              <p>✅ Entered Personal & Delivery Details</p>
              <p>⬇</p>
              <p>✅ Entered Credit Card Information</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Money & Personal Information</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, cardNumber, expiry, cvv })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#ef4444,#dc2626)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#0a0a0a,#1a1a1a)", minHeight: "100vh", padding: "40px", color: "#f8fafc" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#111", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(239,68,68,.3)", border: "1px solid #333" }}>
          <div style={{ background: "linear-gradient(90deg,#000,#ef4444,#000)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "52px", margin: 0, fontFamily: "serif", letterSpacing: "4px", textShadow: "3px 3px 6px rgba(0,0,0,.8)" }}>HONUCAI 魂ukai</h1>
            <h3 style={{ color: "#fca5a5", marginTop: "10px" }}>Tokyo Streetwear Collection 2026</h3>
            <p style={{ color: "#94a3b8" }}>Exclusive Limited Edition — Up to 70% OFF!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #ef4444" }}>
                <div style={{ fontSize: "60px" }}>👘</div>
                <h3>Shibuya Hoodie</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹12,999</p>
                <h2 style={{ color: "#ef4444" }}>₹3,999</h2>
                <span style={{ background: "#ef4444", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>70% OFF</span>
              </div>
              <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #ef4444" }}>
                <div style={{ fontSize: "60px" }}>👟</div>
                <h3>Harajuku Sneakers</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹18,999</p>
                <h2 style={{ color: "#ef4444" }}>₹5,699</h2>
                <span style={{ background: "#ef4444", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>70% OFF</span>
              </div>
              <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #ef4444" }}>
                <div style={{ fontSize: "60px" }}>🎒</div>
                <h3>Tokyo Tech Backpack</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹15,999</p>
                <h2 style={{ color: "#ef4444" }}>₹4,799</h2>
                <span style={{ background: "#ef4444", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>70% OFF</span>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#dc2626,#ef4444)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff" }}>⚡ Limited Drop - Only 5 Pieces!</h2>
              <p style={{ color: "#fecaca" }}>Exclusive Shibuya Collection - Selling Fast!</p>
              <p style={{ color: "#fff", fontWeight: "700" }}>⏰ Sale ends in 00:11:23</p>
            </div>

            <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #333" }}>
              <h2 style={{ color: "#ef4444", marginTop: 0 }}>⭐ Customer Reviews</h2>
              <p style={{ color: "#94a3b8" }}>"Amazing quality! The hoodie is exactly like the photos!" — Vikram T. ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#94a3b8" }}>"Fast shipping from Tokyo. Authentic Japanese streetwear!" — Ananya M. ⭐⭐⭐⭐⭐</p>
            </div>

            <h2 style={{ color: "#f8fafc" }}>📝 Delivery Details</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("checkout")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#ef4444,#dc2626)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", letterSpacing: "1px" }}
            >
              Proceed to Checkout →
            </button>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Honukai Official Store (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}