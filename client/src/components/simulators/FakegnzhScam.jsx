import React, { useState } from "react";

export default function FakeGnzhScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [healthCondition, setHealthCondition] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "12px",
    border: "1px solid #10b981",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box"
  };

  /* ===================================
        SUBSCRIPTION / PAYMENT PAGE
  =================================== */
  if (view === "subscribe") {
    return (
      <div style={{ background: "#ecfdf5", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#fff", borderRadius: "20px", padding: "35px", boxShadow: "0 20px 50px rgba(16,185,129,.3)" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#059669" }}>🌿 GNZH Wellness</h1>
            <h2>Complete Your Subscription</h2>
            <p>Start your 30-day transformation journey today</p>
          </div>

          <div style={{ background: "#d1fae5", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #10b981" }}>
            <h2>Monthly Wellness Plan</h2>
            <h1 style={{ color: "#059669" }}>₹2,999/month</h1>
            <p>Complete supplement kit + personalized diet plan</p>
            <p>🚚 Free Home Delivery</p>
            <p style={{ color: "#dc2626", fontSize: "13px", marginTop: "10px" }}>
              ⚠️ Auto-renews monthly. Cancel anytime (terms apply).
            </p>
          </div>

          <h2>Payment Details</h2>
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
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#10b981,#059669)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
          >
            Start Subscription →
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
      <div style={{ background: "#ecfdf5", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake GNZH Wellness Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Full Name: <b>{name || "Not provided"}</b></li>
                  <li>📱 Mobile: <b>{mobile || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>🏠 Address: <b>{address || "Not provided"}</b></li>
                  <li>🏥 Health Condition: <b>{healthCondition || "Not provided"}</b></li>
                  <li>💳 Card Number: <b>{cardNumber ? "•••• •••• •••• " + cardNumber.slice(-4) : "Not provided"}</b></li>
                  <li>📅 Expiry: <b>{expiry || "Not provided"}</b></li>
                  <li>🔐 CVV: <b>{cvv ? "•••" : "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Unrealistic health claims ("cure diabetes in 30 days").</li>
                  <li>No scientific evidence or clinical trials cited.</li>
                  <li>Subscription trap with hidden auto-renewal.</li>
                  <li>Request for sensitive medical information.</li>
                  <li>Fake doctor endorsements & testimonials.</li>
                  <li>No FSSAI license or regulatory approval.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "96%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>VERY HIGH RISK — FINANCIAL & HEALTH DATA THEFT</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 Stay Safe with Health Products</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li><b>Be skeptical of miracle cures</b> — if it sounds too good to be true, it is.</li>
                <li>Check for FSSAI license number on all supplements.</li>
                <li>Consult a qualified doctor before taking any supplements.</li>
                <li>Read subscription terms carefully — watch for auto-renewal clauses.</li>
                <li>Never share medical history on unverified websites.</li>
                <li>Use virtual cards for online subscriptions to limit exposure.</li>
                <li>Report fake health products to FSSAI and Cyber Crime (1930).</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake GNZH Wellness Website</p>
              <p>⬇</p>
              <p>✅ Read unrealistic health claims</p>
              <p>⬇</p>
              <p>✅ Entered personal & medical information</p>
              <p>⬇</p>
              <p>✅ Entered credit card details</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Money & Sensitive Health Data</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, healthCondition, cardNumber, expiry, cvv })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#10b981,#059669)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#ecfdf5,#d1fae5)", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(16,185,129,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#10b981,#059669,#047857)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "42px", margin: 0 }}>🌿 GNZH Wellness</h1>
            <h3>Green Natural Zero Harm — Transform Your Health</h3>
            <p>Scientifically proven supplements for a healthier you</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#d1fae5", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #10b981" }}>
                <div style={{ fontSize: "50px" }}>💊</div>
                <h3>Immunity Booster</h3>
                <p>100% natural ingredients</p>
                <h2 style={{ color: "#059669" }}>₹1,499</h2>
              </div>
              <div style={{ background: "#d1fae5", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #10b981" }}>
                <div style={{ fontSize: "50px" }}>🧘</div>
                <h3>Stress Relief Formula</h3>
                <p>Clinically tested herbs</p>
                <h2 style={{ color: "#059669" }}>₹1,999</h2>
              </div>
              <div style={{ background: "#d1fae5", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #10b981" }}>
                <div style={{ fontSize: "50px" }}>⚡</div>
                <h3>Energy & Vitality</h3>
                <p>Boost metabolism naturally</p>
                <h2 style={{ color: "#059669" }}>₹2,499</h2>
              </div>
            </div>

            <div style={{ background: "#fef3c7", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "2px dashed #f59e0b" }}>
              <h2 style={{ color: "#d97706" }}>⚠️ Limited Time Offer!</h2>
              <p>Get <b>50% OFF</b> on your first month + FREE consultation with our "expert doctors"</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>⏰ Only 7 slots remaining!</p>
            </div>

            <div style={{ background: "#dbeafe", padding: "20px", borderRadius: "12px", marginBottom: "25px" }}>
              <h2 style={{ color: "#1e40af" }}>🏆 Proven Results</h2>
              <p>"I cured my diabetes in just 30 days using GNZH supplements!" — Dr. Rajesh Kumar (allegedly)</p>
              <p>"Lost 15kg without any diet or exercise!" — Priya Sharma (verified customer)</p>
            </div>

            <h2>📝 Get Your Personalized Plan</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />
            <input placeholder="Health Condition (optional)" value={healthCondition} onChange={(e) => setHealthCondition(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("subscribe")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#10b981,#059669)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
            >
              Start 30-Day Transformation →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}