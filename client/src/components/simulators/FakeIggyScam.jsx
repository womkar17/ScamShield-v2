import React, { useState } from "react";

export default function FakeIggyScam({ onComplete }) {
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
    borderRadius: "8px",
    border: "1px solid #fbbf24",
    fontSize: "16px",
    outline: "none",
    background: "#1a1a1a",
    color: "#fef3c7",
    boxSizing: "border-box"
  };

  /* ===================================
        CHECKOUT / PAYMENT PAGE
  =================================== */
  if (view === "checkout") {
    return (
      <div style={{ background: "#0a0a0a", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#111", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(251,191,36,.3)", color: "#fff", border: "1px solid #fbbf24" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>👑</div>
            <h1 style={{ color: "#fbbf24", textTransform: "uppercase", letterSpacing: "3px" }}>IGGY Official VIP Store</h1>
            <h2>Secure Checkout</h2>
            <p style={{ color: "#fde68a" }}>Complete your order to claim exclusive VIP merchandise</p>
          </div>

          <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #fbbf24" }}>
            <h2 style={{ color: "#fbbf24" }}>Order Summary</h2>
            <h1 style={{ color: "#fff" }}>₹1,999</h1>
            <p>"New Rules" Signed Vinyl + VIP Tour Hoodie Bundle</p>
            <p>🚚 Free Express Global Delivery</p>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 You saved ₹18,000!</p>
          </div>

          <h2 style={{ color: "#fef3c7" }}>Payment Information</h2>
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
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#fbbf24,#d97706)", border: "none", color: "#000", fontWeight: "800", fontSize: "18px", borderRadius: "12px", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" }}
          >
            Pay ₹1,999 & Secure VIP Bundle →
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
            <h3>This was a Fake Celebrity Merchandise Website.</h3>
          </div>

          <div style={{ padding: "35px", color: "#0f172a" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#991b1b", marginTop: 0 }}>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Full Name: <b>{name || "Not provided"}</b></li>
                  <li>📱 Mobile Number: <b>{mobile || "Not provided"}</b></li>
                  <li>📧 Email Address: <b>{email || "Not provided"}</b></li>
                  <li>🏠 Delivery Address: <b>{address || "Not provided"}</b></li>
                  <li>💳 UPI ID: <b>{upi || "Not provided"}</b></li>
                  <li>🔐 UPI PIN: <b>{pin ? "••••" : "Not provided"}</b></li>
                </ul>
                <p style={{ color: "#dc2626", fontWeight: "700", fontSize: "14px", marginTop: "15px" }}>
                  ⚠️ Fraudsters can now drain your bank account using your UPI PIN.
                </p>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#9a3412", marginTop: 0 }}>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>90% discount on "signed" or "VIP exclusive" celebrity merch.</li>
                  <li>Unofficial website (not linked from the artist's verified social media).</li>
                  <li>Requested UPI PIN (never needed to receive money or confirm orders).</li>
                  <li>Fake "verified" badges and stolen promotional photos.</li>
                  <li>Artificial urgency ("Only 3 VIP bundles left!").</li>
                  <li>No secure, recognized payment gateway (e.g., Razorpay, Shopify).</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#1e40af", marginTop: 0 }}>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "98%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>VERY HIGH RISK — FINANCIAL FRAUD & IDENTITY THEFT</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#065f46", marginTop: 0 }}>🛡 Stay Safe When Buying Celebrity Merch</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>Buy merchandise <b>only</b> from links provided in the artist's <b>verified</b> social media bios (blue checkmark).</li>
                <li>Verify the website URL. Official stores usually use platforms like Shopify, Warner Music Store, or official artist domains.</li>
                <li>Be highly suspicious of discounts above 50% on "signed" or "VIP" items.</li>
                <li><b>Never share your UPI PIN</b> — it is ONLY used to SEND money, never to receive a refund or "confirm" an order.</li>
                <li>Reverse image search product photos; scammers often steal them from official stores or past tours.</li>
                <li>Report fake celebrity merchandise websites to Cyber Crime Helpline (<b>1930</b> in India).</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#334155", marginTop: 0 }}>📈 Scam Timeline</h2>
              <p>✅ Saw fake "Iggy VIP Drop" ad on Instagram/TikTok</p>
              <p>⬇</p>
              <p>✅ Clicked link to fake celebrity merchandise website</p>
              <p>⬇</p>
              <p>✅ Selected "Signed Vinyl + Hoodie" bundle at 90% off</p>
              <p>⬇</p>
              <p>✅ Entered Personal & Delivery Details</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID & PIN to "complete order"</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700", fontSize: "16px" }}>❌ Fraudsters Stole Money & Personal Information. No merch will be delivered.</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, upi, pin })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#fbbf24,#d97706)", border: "none", color: "#000", fontWeight: "800", fontSize: "18px", borderRadius: "12px", cursor: "pointer", textTransform: "uppercase" }}
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
    <div style={{ background: "linear-gradient(135deg,#0a0a0a,#1a1a1a)", minHeight: "100vh", padding: "40px", color: "#fef3c7" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#111", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(251,191,36,.2)", border: "1px solid #333" }}>
          <div style={{ background: "linear-gradient(90deg,#000,#d97706,#fbbf24,#000)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "52px", margin: 0, textTransform: "uppercase", letterSpacing: "4px", textShadow: "3px 3px 6px rgba(0,0,0,.8)" }}>👑 IGGY</h1>
            <h3 style={{ color: "#fff", marginTop: "10px", fontWeight: "600" }}>Official VIP Fan Club Exclusive Drop</h3>
            <p style={{ color: "#fef3c7" }}>Limited Edition Signed Merch — Up to 90% OFF for Early Fans!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #fbbf24" }}>
                <div style={{ fontSize: "60px" }}>💿</div>
                <h3>Signed "New Rules" Vinyl</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹9,999</p>
                <h2 style={{ color: "#fbbf24" }}>₹999</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>90% OFF</span>
              </div>
              <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #fbbf24" }}>
                <div style={{ fontSize: "60px" }}>🧥</div>
                <h3>VIP Tour Hoodie (Black/Gold)</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹7,999</p>
                <h2 style={{ color: "#fbbf24" }}>₹799</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>90% OFF</span>
              </div>
              <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #fbbf24" }}>
                <div style={{ fontSize: "60px" }}>🎟️</div>
                <h3>Virtual Meet & Greet Pass</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹4,999</p>
                <h2 style={{ color: "#fbbf24" }}>₹499</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>90% OFF</span>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff", textTransform: "uppercase" }}>⚡ Flash Sale Ending Soon!</h2>
              <p style={{ color: "#fecaca" }}>Only <b>3 VIP bundles</b> remaining at this price!</p>
              <p style={{ color: "#fff", fontWeight: "700" }}>⏰ Offer expires in 00:06:14</p>
            </div>

            <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #333" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⭐ What Fans Are Saying</h2>
              <p style={{ color: "#94a3b8" }}>"OMG the vinyl is actually signed! Got it in 3 days!" — @musiclover_99 ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#94a3b8" }}>"Best VIP merch drop ever. The hoodie quality is insane." — @rapfan_delhi ⭐⭐⭐⭐⭐</p>
            </div>

            <h2 style={{ color: "#fef3c7", textTransform: "uppercase" }}>📝 Secure Your VIP Bundle</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("checkout")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#fbbf24,#d97706)", border: "none", color: "#000", fontSize: "18px", fontWeight: "800", borderRadius: "12px", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" }}
            >
              Proceed to Checkout →
            </button>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Iggy Official VIP Store (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}