import React, { useState } from "react";

export default function FakeIGyaanScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [childClass, setChildClass] = useState("");

  const [upi, setUpi] = useState("");
  const [pin, setPin] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #2563eb",
    fontSize: "16px",
    outline: "none",
    background: "#f8fafc",
    color: "#1e293b",
    boxSizing: "border-box"
  };

  /* ===================================
        CHECKOUT / PAYMENT PAGE
  =================================== */
  if (view === "checkout") {
    return (
      <div style={{ background: "#f1f5f9", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#fff", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(37,99,235,.2)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>📚</div>
            <h1 style={{ color: "#1d4ed8", fontWeight: "800" }}>iGyaan Smart Learning</h1>
            <h2>Secure Checkout</h2>
            <p style={{ color: "#64748b" }}>Complete your order to activate the smart learning kit</p>
          </div>

          <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #2563eb" }}>
            <h2 style={{ color: "#1d4ed8", marginTop: 0 }}>Order Summary</h2>
            <h1 style={{ color: "#16a34a", margin: "10px 0" }}>₹2,499</h1>
            <p><b>iGyaan Smart Tablet (8GB RAM) + 1 Year Premium Subscription</b></p>
            <p>🚚 Free Home Delivery & Setup</p>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 You saved ₹17,500! (Government Subsidy Applied)</p>
          </div>

          <h2 style={{ color: "#1e293b" }}>Payment Information</h2>
          <input
            placeholder="UPI ID (e.g., name@paytm)"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="UPI PIN (to confirm booking)"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#2563eb,#1d4ed8)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
          >
            Pay ₹2,499 & Activate Kit →
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
      <div style={{ background: "#f1f5f9", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.2)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake iGyaan Educational Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#991b1b", marginTop: 0 }}>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Parent's Name: <b>{name || "Not provided"}</b></li>
                  <li>📱 Mobile Number: <b>{mobile || "Not provided"}</b></li>
                  <li>📧 Email Address: <b>{email || "Not provided"}</b></li>
                  <li>🏠 Home Address: <b>{address || "Not provided"}</b></li>
                  <li>🎒 Child's Class: <b>{childClass || "Not provided"}</b></li>
                  <li>💳 UPI ID: <b>{upi || "Not provided"}</b></li>
                  <li>🔐 UPI PIN: <b>{pin ? "••••" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#9a3412", marginTop: 0 }}>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>85%+ discount on high-end educational tablets (too good to be true).</li>
                  <li>Unofficial website (not the official igyaan.com domain).</li>
                  <li>Requested UPI PIN (never needed to receive money or confirm bookings).</li>
                  <li>Fake "Government Subsidy" claims to create false legitimacy.</li>
                  <li>No secure, recognized payment gateway (e.g., Razorpay, BillDesk).</li>
                  <li>Artificial urgency ("Only 5 kits left in your district!").</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#1e40af", marginTop: 0 }}>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "98%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>VERY HIGH RISK — FINANCIAL FRAUD & DATA PRIVACY BREACH</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#065f46", marginTop: 0 }}>🛡 How to Buy Ed-Tech Products Safely</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>Purchase <b>only</b> from the official company website or authorized school distributors.</li>
                <li>Verify the website URL carefully. Official domains will be exact matches (e.g., <b>igyaan.com</b>).</li>
                <li>Be highly suspicious of massive discounts on premium hardware, even with "subsidy" claims.</li>
                <li><b>Never share your UPI PIN</b> — it is ONLY used to SEND money, never to receive a refund or "confirm" an order.</li>
                <li>Legitimate companies will never ask for your UPI PIN over the phone, WhatsApp, or a web form.</li>
                <li>Report fake educational scams to the Cyber Crime Helpline (<b>1930</b> in India) or cybercrime.gov.in.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#334155", marginTop: 0 }}>📈 Scam Timeline</h2>
              <p>✅ Saw fake "iGyaan Smart Tablet" ad on WhatsApp/Facebook</p>
              <p>⬇</p>
              <p>✅ Clicked link to fake educational technology website</p>
              <p>⬇</p>
              <p>✅ Entered parent & child details for "subsidy eligibility"</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID & PIN to "pay the nominal booking fee"</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700", fontSize: "16px" }}>❌ Fraudsters Stole Money & Family Data. No tablet will be delivered.</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, childClass, upi, pin })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#2563eb,#1d4ed8)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#f8fafc,#e2e8f0)", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(37,99,235,.15)" }}>
          <div style={{ background: "linear-gradient(90deg,#1d4ed8,#2563eb,#3b82f6)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontWeight: "800" }}>📚 iGyaan Smart Learning</h1>
            <h3 style={{ color: "#bfdbfe", marginTop: "10px", fontWeight: "600" }}>Empowering the Next Generation of India</h3>
            <p style={{ color: "#93c5fd" }}>Special Government Subsidy Drive: Premium Tablets at 85% OFF!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #2563eb" }}>
                <div style={{ fontSize: "60px" }}>📱</div>
                <h3>8GB RAM Smart Tablet</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹19,999</p>
                <h2 style={{ color: "#1d4ed8" }}>₹2,499</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>85% OFF</span>
              </div>
              <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #2563eb" }}>
                <div style={{ fontSize: "60px" }}>🎓</div>
                <h3>1-Year Premium Subscription</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹4,999</p>
                <h2 style={{ color: "#1d4ed8" }}>INCLUDED FREE</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>100% OFF</span>
              </div>
              <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #2563eb" }}>
                <div style={{ fontSize: "60px" }}>🚚</div>
                <h3>Home Delivery & Setup</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹999</p>
                <h2 style={{ color: "#1d4ed8" }}>INCLUDED FREE</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>FREE</span>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#f59e0b,#d97706)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff" }}>⚠️ Limited Subsidy Slots!</h2>
              <p style={{ color: "#fff" }}>Only <b>7 kits</b> remaining for your district!</p>
              <p style={{ color: "#fff", fontWeight: "700" }}>⏰ Offer expires in 00:14:32</p>
            </div>

            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #cbd5e1" }}>
              <h2 style={{ color: "#1d4ed8", marginTop: 0, textAlign: "center" }}>⭐ Trusted by 50,000+ Schools</h2>
              <p style={{ color: "#475569", textAlign: "center", fontStyle: "italic" }}>"My child's grades improved significantly after using the iGyaan tablet. Highly recommended!" — Sunita P., Parent ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#475569", textAlign: "center", fontStyle: "italic" }}>"Excellent content and very easy to use. The subsidy made it affordable." — Rajesh K., Parent ⭐⭐⭐⭐⭐</p>
            </div>

            <h2 style={{ color: "#1e293b", textAlign: "center" }}>📝 Claim Your Subsidized Kit</h2>
            <div style={{ maxWidth: "600px", margin: "auto" }}>
              <input placeholder="Parent's Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
              <input placeholder="Mobile Number (WhatsApp preferred)" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
              <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
              <input placeholder="Child's Class (e.g., 8th Grade)" value={childClass} onChange={(e) => setChildClass(e.target.value)} style={inputStyle} />
              <input placeholder="Home Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

              <button
                onClick={() => setView("checkout")}
                style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#2563eb,#1d4ed8)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", marginTop: "10px" }}
              >
                Proceed to Secure Checkout →
              </button>
            </div>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "25px" }}>
              © 2026 iGyaan Learning Solutions (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}