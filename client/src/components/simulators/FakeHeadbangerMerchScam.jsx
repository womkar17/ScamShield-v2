import React, { useState } from "react";

export default function FakeHeadbangerMerchScam({ onComplete }) {
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
    border: "1px solid #dc2626",
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
        <div style={{ width: "100%", maxWidth: "720px", background: "#111", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(220,38,38,.4)", color: "#fff", border: "1px solid #dc2626" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🤘</div>
            <h1 style={{ color: "#dc2626", textTransform: "uppercase", letterSpacing: "2px" }}>Headbanger Official Store</h1>
            <h2>Secure Checkout</h2>
            <p style={{ color: "#94a3b8" }}>Complete your order to claim exclusive tour merchandise</p>
          </div>

          <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #dc2626" }}>
            <h2 style={{ color: "#dc2626" }}>Order Summary</h2>
            <h1 style={{ color: "#fff" }}>₹999</h1>
            <p>World Tour 2026 Exclusive Bundle (T-Shirt + Poster + Patch)</p>
            <p>🚚 Free Express Delivery</p>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 You saved ₹4,000!</p>
          </div>

          <h2 style={{ color: "#f8fafc" }}>Payment Information</h2>
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
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#dc2626,#991b1b)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" }}
          >
            Pay ₹999 & Claim Merch →
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
            <h3>This was a Fake Headbanger Merchandise Website.</h3>
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
                  <li>💳 UPI ID: <b>{upi || "Not provided"}</b></li>
                  <li>🔐 UPI PIN: <b>{pin ? "••••" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>80% discount on "exclusive" tour merchandise.</li>
                  <li>Unofficial website (not the band's verified store).</li>
                  <li>Requested UPI PIN (never needed to receive money).</li>
                  <li>No verified seller badge or official band endorsement.</li>
                  <li>Fake customer reviews & artificial urgency.</li>
                  <li>Unsecured payment form on a suspicious domain.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "98%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>VERY HIGH RISK — FINANCIAL FRAUD</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 Stay Safe While Buying Merch</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>Buy merchandise <b>only</b> from the band's official website or verified venue stalls.</li>
                <li>Verify the website URL — look for HTTPS and official social media links.</li>
                <li>Be highly suspicious of discounts above 50% on "limited edition" or "tour exclusive" items.</li>
                <li><b>Never share your UPI PIN</b> — it is only used to SEND money, never to receive it or "confirm" an order.</li>
                <li>Use trusted payment gateways with buyer protection (e.g., official brand checkout).</li>
                <li>Report fake merchandise websites to Cyber Crime Helpline (<b>1930</b> in India).</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake Headbanger Merch Website</p>
              <p>⬇</p>
              <p>✅ Selected "Exclusive Tour Bundle"</p>
              <p>⬇</p>
              <p>✅ Entered Personal & Delivery Details</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID & PIN</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Money & Personal Information</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, upi, pin })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#dc2626,#991b1b)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer", textTransform: "uppercase" }}
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
        <div style={{ background: "#111", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(220,38,38,.3)", border: "1px solid #333" }}>
          <div style={{ background: "linear-gradient(90deg,#000,#dc2626,#000)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "48px", margin: 0, textTransform: "uppercase", letterSpacing: "3px", textShadow: "3px 3px 6px rgba(0,0,0,.8)" }}>🤘 HEADBANGER</h1>
            <h3 style={{ color: "#fca5a5", marginTop: "10px" }}>World Tour 2026 Exclusive Merchandise</h3>
            <p style={{ color: "#94a3b8" }}>Limited Stock — Up to 80% OFF for Online Fans!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #dc2626" }}>
                <div style={{ fontSize: "60px" }}>👕</div>
                <h3>Tour T-Shirt (Black)</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹2,499</p>
                <h2 style={{ color: "#dc2626" }}>₹499</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>80% OFF</span>
              </div>
              <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #dc2626" }}>
                <div style={{ fontSize: "60px" }}>🧥</div>
                <h3>Embroidered Hoodie</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹4,999</p>
                <h2 style={{ color: "#dc2626" }}>₹999</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>80% OFF</span>
              </div>
              <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #dc2626" }}>
                <div style={{ fontSize: "60px" }}>🎸</div>
                <h3>Vinyl + Patch Bundle</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹3,499</p>
                <h2 style={{ color: "#dc2626" }}>₹699</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>80% OFF</span>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff", textTransform: "uppercase" }}>⚡ Flash Sale Ending Soon!</h2>
              <p style={{ color: "#fecaca" }}>Only <b>14 bundles</b> left in stock!</p>
              <p style={{ color: "#fff", fontWeight: "700" }}>⏰ Offer expires in 00:14:32</p>
            </div>

            <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #333" }}>
              <h2 style={{ color: "#dc2626", marginTop: 0 }}>🔥 What Fans Are Saying</h2>
              <p style={{ color: "#94a3b8" }}>"Insane quality for the price! Got it in 2 days!" — Rahul M. ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#94a3b8" }}>"Best tour merch I've ever bought. Highly recommend!" — Priya K. ⭐⭐⭐⭐⭐</p>
            </div>

            <h2 style={{ color: "#f8fafc", textTransform: "uppercase" }}>📝 Delivery Details</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("checkout")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#dc2626,#991b1b)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" }}
            >
              Proceed to Checkout →
            </button>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Headbanger Official Store (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}