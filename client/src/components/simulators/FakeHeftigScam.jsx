import React, { useState } from "react";

export default function FakeHeftigScam({ onComplete }) {
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
    border: "1px solid #8b5cf6",
    fontSize: "16px",
    outline: "none",
    background: "#1e1b2e",
    color: "#e9d5ff",
    boxSizing: "border-box"
  };

  /* ===================================
        CHECKOUT / PAYMENT PAGE
  =================================== */
  if (view === "checkout") {
    return (
      <div style={{ background: "#0f0b1a", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#1e1b2e", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(139,92,246,.4)", color: "#fff", border: "1px solid #8b5cf6" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🎧</div>
            <h1 style={{ color: "#a78bfa", textTransform: "uppercase", letterSpacing: "2px" }}>Heftig Official Store</h1>
            <h2>Secure Checkout</h2>
            <p style={{ color: "#c4b5fd" }}>Complete your order for exclusive fan club merchandise</p>
          </div>

          <div style={{ background: "#2d2a3e", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #8b5cf6" }}>
            <h2 style={{ color: "#a78bfa" }}>Order Summary</h2>
            <h1 style={{ color: "#fff" }}>₹2,499</h1>
            <p>Neon Dreams Tour 2026 VIP Bundle</p>
            <p>🚚 Free Express Delivery</p>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 You saved ₹7,500!</p>
          </div>

          <h2 style={{ color: "#e9d5ff" }}>Payment Information</h2>
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
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#8b5cf6,#7c3aed)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" }}
          >
            Pay ₹2,499 & Get VIP Access →
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
      <div style={{ background: "#0f0b1a", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.5)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Heftig Merchandise Website.</h3>
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
                  <li>75% discount on "VIP exclusive" merchandise.</li>
                  <li>Unofficial website (not the artist's verified store).</li>
                  <li>No verified seller badge or official artist endorsement.</li>
                  <li>Fake fan testimonials & artificial scarcity.</li>
                  <li>Urgency tactics ("Only 8 bundles left!").</li>
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
              <h2>🛡 Stay Safe While Buying Fan Merch</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>Buy merchandise <b>only</b> from the artist's official website or verified concert venues.</li>
                <li>Verify the website URL — check for HTTPS and official social media links.</li>
                <li>Be highly suspicious of discounts above 50% on "limited edition" or "VIP exclusive" items.</li>
                <li>Look for official artist endorsement or verified fan club badges.</li>
                <li>Use trusted payment gateways with buyer protection.</li>
                <li>Report fake merchandise websites to Cyber Crime Helpline (<b>1930</b> in India).</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake Heftig Merch Website</p>
              <p>⬇</p>
              <p>✅ Selected "VIP Tour Bundle"</p>
              <p>⬇</p>
              <p>✅ Entered Personal & Delivery Details</p>
              <p>⬇</p>
              <p>✅ Entered Credit Card Information</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Money & Personal Information</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, cardNumber, expiry, cvv })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#8b5cf6,#7c3aed)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer", textTransform: "uppercase" }}
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
    <div style={{ background: "linear-gradient(135deg,#0f0b1a,#1e1b2e)", minHeight: "100vh", padding: "40px", color: "#e9d5ff" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#1e1b2e", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(139,92,246,.3)", border: "1px solid #4c1d95" }}>
          <div style={{ background: "linear-gradient(90deg,#4c1d95,#8b5cf6,#a78bfa)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "48px", margin: 0, textTransform: "uppercase", letterSpacing: "3px", textShadow: "3px 3px 6px rgba(0,0,0,.8)" }}>🎧 HEFTIG</h1>
            <h3 style={{ color: "#ddd6fe", marginTop: "10px" }}>Neon Dreams World Tour 2026</h3>
            <p style={{ color: "#c4b5fd" }}>Exclusive VIP Fan Club Merchandise — Up to 75% OFF!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#2d2a3e", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #8b5cf6" }}>
                <div style={{ fontSize: "60px" }}>👕</div>
                <h3>Neon Glow T-Shirt</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹3,999</p>
                <h2 style={{ color: "#a78bfa" }}>₹999</h2>
                <span style={{ background: "#8b5cf6", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>75% OFF</span>
              </div>
              <div style={{ background: "#2d2a3e", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #8b5cf6" }}>
                <div style={{ fontSize: "60px" }}>🧢</div>
                <h3>LED Snapback Cap</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹2,499</p>
                <h2 style={{ color: "#a78bfa" }}>₹649</h2>
                <span style={{ background: "#8b5cf6", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>74% OFF</span>
              </div>
              <div style={{ background: "#2d2a3e", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #8b5cf6" }}>
                <div style={{ fontSize: "60px" }}>🎒</div>
                <h3>Holographic Backpack</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹5,999</p>
                <h2 style={{ color: "#a78bfa" }}>₹1,499</h2>
                <span style={{ background: "#8b5cf6", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>75% OFF</span>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#7c3aed,#8b5cf6)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff", textTransform: "uppercase" }}>⚡ VIP Fan Club Exclusive!</h2>
              <p style={{ color: "#ddd6fe" }}>Only <b>8 bundles</b> remaining for this drop!</p>
              <p style={{ color: "#fff", fontWeight: "700" }}>⏰ Sale ends in 00:08:47</p>
            </div>

            <div style={{ background: "#2d2a3e", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #4c1d95" }}>
              <h2 style={{ color: "#a78bfa", marginTop: 0 }}>💜 What Fans Are Saying</h2>
              <p style={{ color: "#c4b5fd" }}>"The LED cap is absolutely insane! Best merch ever!" — Arjun S. ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#c4b5fd" }}>"Got the holographic backpack, looks even better in person!" — Neha R. ⭐⭐⭐⭐⭐</p>
            </div>

            <h2 style={{ color: "#e9d5ff", textTransform: "uppercase" }}>📝 Delivery Details</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("checkout")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#8b5cf6,#7c3aed)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" }}
            >
              Proceed to Checkout →
            </button>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Heftig Official Store (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}