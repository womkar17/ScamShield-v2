import React, { useState } from "react";

export default function FakeIMindMapScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #f97316",
    fontSize: "16px",
    outline: "none",
    background: "#fff7ed",
    color: "#7c2d12",
    boxSizing: "border-box"
  };

  /* ===================================
        CHECKOUT / PAYMENT PAGE
  =================================== */
  if (view === "checkout") {
    return (
      <div style={{ background: "#fff7ed", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#fff", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(249,115,22,.25)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🧠</div>
            <h1 style={{ color: "#ea580c", fontWeight: "800" }}>iMindMap Official Store</h1>
            <h2>Secure Checkout</h2>
            <p style={{ color: "#9a3412" }}>Complete your purchase to activate your lifetime license</p>
          </div>

          <div style={{ background: "#ffedd5", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #f97316" }}>
            <h2 style={{ color: "#ea580c", marginTop: 0 }}>Order Summary</h2>
            <h1 style={{ color: "#16a34a", margin: "10px 0" }}>₹999</h1>
            <p><b>iMindMap Ultimate Lifetime License</b></p>
            <p>Includes: Unlimited maps, HD export, cloud sync, and premium templates.</p>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 You saved ₹14,000! (Student/Educator Discount Applied)</p>
          </div>

          <h2 style={{ color: "#7c2d12" }}>Payment Information</h2>
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
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#f97316,#ea580c)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
          >
            Pay ₹999 & Activate License →
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
      <div style={{ background: "#fff7ed", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.2)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake iMindMap Software Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#991b1b", marginTop: 0 }}>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Full Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email Address: <b>{email || "Not provided"}</b></li>
                  <li>🏢 Company/School: <b>{company || "Not provided"}</b></li>
                  <li>💳 Card Number: <b>{cardNumber ? "•••• •••• •••• " + cardNumber.slice(-4) : "Not provided"}</b></li>
                  <li>📅 Expiry: <b>{expiry || "Not provided"}</b></li>
                  <li>🔐 CVV: <b>{cvv ? "•••" : "Not provided"}</b></li>
                </ul>
                <p style={{ color: "#dc2626", fontWeight: "700", fontSize: "14px", marginTop: "15px" }}>
                  ⚠️ Fraudsters can now make unauthorized charges or clone your card.
                </p>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#9a3412", marginTop: 0 }}>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>90%+ discount on premium, proprietary software (too good to be true).</li>
                  <li>Unofficial website domain (not imindmap.com or thinkbuzan.com).</li>
                  <li>No secure, recognized payment gateway (e.g., Razorpay, Stripe, PayPal).</li>
                  <li>Fake "Student/Educator Discount" claims to build false legitimacy.</li>
                  <li>Artificial urgency ("Only 4 licenses left at this price!").</li>
                  <li>Request for full credit card details on a suspicious page.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#1e40af", marginTop: 0 }}>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "97%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>VERY HIGH RISK — FINANCIAL FRAUD & IDENTITY THEFT</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#065f46", marginTop: 0 }}>🛡 How to Buy Software Safely</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>Purchase software <b>only</b> from the official vendor website or authorized resellers (e.g., Amazon, official education portals).</li>
                <li>Verify the website URL carefully. Official domains will be exact matches (e.g., <b>imindmap.com</b>).</li>
                <li>Be highly suspicious of massive discounts on premium software, even with "student" claims.</li>
                <li>Look for trusted payment gateways (PayPal, Stripe, Razorpay) that offer buyer protection.</li>
                <li>Use virtual credit cards or prepaid cards for online software purchases to limit exposure.</li>
                <li>If you entered your card details, <b>contact your bank immediately</b> to block the card and report the fraud.</li>
                <li>Report fake software scams to the Cyber Crime Helpline (<b>1930</b> in India) or cybercrime.gov.in.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#334155", marginTop: 0 }}>📈 Scam Timeline</h2>
              <p>✅ Searched for "iMindMap free download" or "cheap lifetime license"</p>
              <p>⬇</p>
              <p>✅ Clicked on a sponsored ad leading to a fake software store</p>
              <p>⬇</p>
              <p>✅ Selected "Ultimate Lifetime License" at 90% off</p>
              <p>⬇</p>
              <p>✅ Entered personal and professional details</p>
              <p>⬇</p>
              <p>✅ Entered Credit Card details to "complete purchase"</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700", fontSize: "16px" }}>❌ Fraudsters Stole Card Details. No software license will be provided.</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, company, cardNumber, expiry, cvv })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#f97316,#ea580c)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#fff7ed,#ffedd5)", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(249,115,22,.15)" }}>
          <div style={{ background: "linear-gradient(90deg,#ea580c,#f97316,#fb923c)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontWeight: "800" }}>🧠 iMindMap Official</h1>
            <h3 style={{ color: "#fff", marginTop: "10px", fontWeight: "600" }}>The Original Mind Mapping Software by Tony Buzan</h3>
            <p style={{ color: "#ffedd5" }}>Special Student & Educator Drive: Lifetime Licenses at 90% OFF!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #f97316" }}>
                <div style={{ fontSize: "60px" }}>🗺️</div>
                <h3>Ultimate Lifetime</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹14,999</p>
                <h2 style={{ color: "#ea580c" }}>₹999</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>90% OFF</span>
              </div>
              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #f97316" }}>
                <div style={{ fontSize: "60px" }}>☁️</div>
                <h3>Cloud Sync Pro</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹4,999/yr</p>
                <h2 style={{ color: "#ea580c" }}>INCLUDED FREE</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>FREE</span>
              </div>
              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #f97316" }}>
                <div style={{ fontSize: "60px" }}>🎓</div>
                <h3>Premium Templates</h3>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹2,999</p>
                <h2 style={{ color: "#ea580c" }}>INCLUDED FREE</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>FREE</span>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff" }}>⚠️ Limited Subsidy Slots!</h2>
              <p style={{ color: "#fecaca" }}>Only <b>4 licenses</b> remaining at this discounted price!</p>
              <p style={{ color: "#fff", fontWeight: "700" }}>⏰ Offer expires in 00:08:15</p>
            </div>

            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #cbd5e1" }}>
              <h2 style={{ color: "#ea580c", marginTop: 0, textAlign: "center" }}>⭐ Trusted by 100,000+ Students</h2>
              <p style={{ color: "#475569", textAlign: "center", fontStyle: "italic" }}>"This lifetime deal is a steal! The software works perfectly and helped me ace my exams." — Rahul S., University Student ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#475569", textAlign: "center", fontStyle: "italic" }}>"Got my license key instantly via email. Highly recommended for educators." — Priya M., Teacher ⭐⭐⭐⭐⭐</p>
            </div>

            <h2 style={{ color: "#7c2d12", textAlign: "center" }}>📝 Claim Your Discounted License</h2>
            <div style={{ maxWidth: "600px", margin: "auto" }}>
              <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
              <input placeholder="Email Address (to receive license key)" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
              <input placeholder="Company or School Name" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle} />

              <button
                onClick={() => setView("checkout")}
                style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#f97316,#ea580c)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", marginTop: "10px" }}
              >
                Proceed to Secure Checkout →
              </button>
            </div>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "25px" }}>
              © 2026 iMindMap Official Store (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}