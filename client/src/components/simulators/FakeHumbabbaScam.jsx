import React, { useState } from "react";

export default function FakeHumbabbaScam({ onComplete }) {
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
    border: "1px solid #0d9488",
    fontSize: "16px",
    outline: "none",
    background: "#f0fdfa",
    color: "#134e4a",
    boxSizing: "border-box"
  };

  /* ===================================
        CHECKOUT / PAYMENT PAGE
  =================================== */
  if (view === "checkout") {
    return (
      <div style={{ background: "#f0fdfa", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#fff", borderRadius: "20px", padding: "35px", boxShadow: "0 20px 50px rgba(13,148,136,.3)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🧸</div>
            <h1 style={{ color: "#0f766e" }}>Humbabba Official Store</h1>
            <h2>Secure Checkout</h2>
            <p style={{ color: "#5eead4" }}>Complete your order to claim your viral Humbabba merch</p>
          </div>

          <div style={{ background: "#ccfbf1", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #0d9488" }}>
            <h2 style={{ color: "#0f766e" }}>Order Summary</h2>
            <h1 style={{ color: "#0d9488" }}>₹899</h1>
            <p>Humbabba Giant Plush + Mystery Box Bundle</p>
            <p>🚚 Free Express Delivery</p>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 You saved ₹4,100!</p>
          </div>

          <h2 style={{ color: "#134e4a" }}>Payment Information</h2>
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
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#0d9488,#0f766e)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
          >
            Pay ₹899 & Claim Bundle →
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
      <div style={{ background: "#f0fdfa", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Humbabba Viral Merchandise Website.</h3>
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
                  <li>80%+ discount on "viral" or "trending" items.</li>
                  <li>Unofficial website (not the brand's verified domain).</li>
                  <li>Requested UPI PIN (never needed to receive money).</li>
                  <li>Fake "As Seen on TikTok/Instagram" badges.</li>
                  <li>Artificial urgency ("Only 3 left!", countdown timer).</li>
                  <li>No verified seller badge or secure payment gateway.</li>
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
              <h2>🛡 Stay Safe While Buying Viral Products</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>Buy merchandise <b>only</b> from the brand's official website or verified social media store links.</li>
                <li>Verify the website URL — look for HTTPS and cross-check with the brand's official Instagram/TikTok bio.</li>
                <li>Be highly suspicious of discounts above 50% on "trending" or "limited drop" items.</li>
                <li><b>Never share your UPI PIN</b> — it is only used to SEND money, never to receive it or "confirm" an order.</li>
                <li>Use trusted payment gateways with buyer protection (e.g., Razorpay, official brand checkout).</li>
                <li>Report fake merchandise websites to Cyber Crime Helpline (<b>1930</b> in India).</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Saw fake "Humbabba" ad on social media</p>
              <p>⬇</p>
              <p>✅ Clicked link to fake viral store website</p>
              <p>⬇</p>
              <p>✅ Selected "Giant Plush + Mystery Box"</p>
              <p>⬇</p>
              <p>✅ Entered Personal & Delivery Details</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID & PIN</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Money & Personal Information</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, upi, pin })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#0d9488,#0f766e)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#f0fdfa,#ccfbf1)", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(13,148,136,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#0f766e,#0d9488,#14b8a6)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "48px", margin: 0, textShadow: "2px 2px 4px rgba(0,0,0,.2)" }}>🧸 Humbabba</h1>
            <h3 style={{ color: "#f0fdfa", marginTop: "10px" }}>The Viral Sensation Everyone is Talking About!</h3>
            <p style={{ color: "#ccfbf1" }}>Exclusive Online Drop — Up to 85% OFF!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#f0fdfa", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #0d9488" }}>
                <div style={{ fontSize: "60px" }}>🧸</div>
                <h3>Giant Humbabba Plush</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹4,999</p>
                <h2 style={{ color: "#0d9488" }}>₹899</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>85% OFF</span>
              </div>
              <div style={{ background: "#f0fdfa", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #0d9488" }}>
                <div style={{ fontSize: "60px" }}>🎁</div>
                <h3>Mystery Box (5 Items)</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹2,499</p>
                <h2 style={{ color: "#0d9488" }}>₹499</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>80% OFF</span>
              </div>
              <div style={{ background: "#f0fdfa", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #0d9488" }}>
                <div style={{ fontSize: "60px" }}>✨</div>
                <h3>Glow-in-Dark Stickers</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹999</p>
                <h2 style={{ color: "#0d9488" }}>₹199</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>80% OFF</span>
                <p style={{ fontSize: "12px", color: "#0d9488", marginTop: "5px" }}>🔥 As Seen on TikTok!</p>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#f59e0b,#d97706)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff" }}>⚡ Flash Sale Ending Soon!</h2>
              <p style={{ color: "#fff" }}>Only <b>3 bundles</b> left in stock!</p>
              <p style={{ color: "#fff", fontWeight: "700" }}>⏰ Offer expires in 00:04:12</p>
            </div>

            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #cbd5e1" }}>
              <h2 style={{ color: "#0f766e", marginTop: 0 }}>⭐ What Fans Are Saying</h2>
              <p style={{ color: "#475569" }}>"OMG so cute! Got mine in 2 days!" — @aisha_vibes ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#475569" }}>"The mystery box was totally worth it. 10/10!" — @rahul_gamer ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#475569" }}>"Best purchase ever, my kids love it!" — @mom_of_3 ⭐⭐⭐⭐⭐</p>
            </div>

            <h2 style={{ color: "#0f766e" }}>📝 Delivery Details</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("checkout")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#0d9488,#0f766e)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
            >
              Proceed to Checkout →
            </button>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Humbabba Official Store (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}