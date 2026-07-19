import React, { useState } from "react";

export default function FakeInkMonkScam({ onComplete }) {
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
            <div style={{ fontSize: "60px" }}>🖨️</div>
            <h1 style={{ color: "#1d4ed8", fontWeight: "800" }}>InkMonk Express Printing</h1>
            <h2>Secure Checkout</h2>
            <p style={{ color: "#64748b" }}>Complete your order to start the printing process</p>
          </div>

          <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #2563eb" }}>
            <h2 style={{ color: "#1d4ed8", marginTop: 0 }}>Order Summary</h2>
            <h1 style={{ color: "#16a34a", margin: "10px 0" }}>₹99</h1>
            <p><b>1000 Premium Matte Business Cards (Double-sided)</b></p>
            <p>🚚 Free Express Delivery (2-3 Days)</p>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 You saved ₹800! (New Customer Mega Discount)</p>
          </div>

          <h2 style={{ color: "#1e293b" }}>Payment Information</h2>
          <input
            placeholder="UPI ID (e.g., name@paytm)"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="UPI PIN (to confirm printing order)"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#2563eb,#1d4ed8)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
          >
            Pay ₹99 & Start Printing →
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
            <h3>This was a Fake Online Printing Service Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
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
                  <li>Unrealistic pricing (1000 business cards for ₹99 is below cost price).</li>
                  <li>Unofficial website domain (not the official inkmonk.com).</li>
                  <li>Requested UPI PIN (never needed to receive money or confirm orders).</li>
                  <li>No secure, recognized payment gateway (e.g., Razorpay, PayU, BillDesk).</li>
                  <li>Fake "Verified Printer" badges and stolen portfolio images.</li>
                  <li>Artificial urgency ("Mega discount ends in 10 minutes!").</li>
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
              <h2 style={{ color: "#065f46", marginTop: 0 }}>🛡 How to Order Printing Services Safely</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>Order <b>only</b> from the official company website or well-known, verified platforms.</li>
                <li>Verify the website URL carefully. Official domains will be exact matches (e.g., <b>inkmonk.com</b>).</li>
                <li>Be highly suspicious of prices that are significantly below market cost (e.g., 1000 cards for under ₹300).</li>
                <li><b>Never share your UPI PIN</b> — it is ONLY used to SEND money, never to receive a refund or "confirm" an order.</li>
                <li>Legitimate businesses will use secure payment gateways (like Razorpay or Stripe), not direct UPI PIN prompts.</li>
                <li>Report fake e-commerce scams to the Cyber Crime Helpline (<b>1930</b> in India) or cybercrime.gov.in.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#334155", marginTop: 0 }}>📈 Scam Timeline</h2>
              <p>✅ Searched for "cheap business card printing" or saw a social media ad</p>
              <p>⬇</p>
              <p>✅ Clicked link to fake printing service website</p>
              <p>⬇</p>
              <p>✅ Selected "1000 Premium Cards" at an unrealistic price</p>
              <p>⬇</p>
              <p>✅ Entered personal and delivery details</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID & PIN to "pay the nominal printing fee"</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700", fontSize: "16px" }}>❌ Fraudsters Stole Money & Personal Data. No printing will occur.</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, upi, pin })}
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
          <div style={{ background: "linear-gradient(90deg,#1d4ed8,#2563eb,#f97316)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontWeight: "800" }}>🖨️ InkMonk Express</h1>
            <h3 style={{ color: "#bfdbfe", marginTop: "10px", fontWeight: "600" }}>India's Most Trusted Online Printing Partner</h3>
            <p style={{ color: "#fef3c7" }}>Mega New Customer Sale: Premium Printing at 85% OFF!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #2563eb" }}>
                <div style={{ fontSize: "60px" }}>💳</div>
                <h3>1000 Business Cards</h3>
                <p style={{ fontSize: "14px", color: "#64748b" }}>350 GSM Matte, Double-sided</p>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹899</p>
                <h2 style={{ color: "#1d4ed8" }}>₹99</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>85% OFF</span>
              </div>
              <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #2563eb" }}>
                <div style={{ fontSize: "60px" }}>📄</div>
                <h3>100 A4 Color Flyers</h3>
                <p style={{ fontSize: "14px", color: "#64748b" }}>130 GSM Glossy, Full Color</p>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹1,499</p>
                <h2 style={{ color: "#1d4ed8" }}>₹149</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>90% OFF</span>
              </div>
              <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #2563eb" }}>
                <div style={{ fontSize: "60px" }}>🚩</div>
                <h3>6x3 ft Vinyl Banner</h3>
                <p style={{ fontSize: "14px", color: "#64748b" }}>Weatherproof, Eyelet holes</p>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹1,299</p>
                <h2 style={{ color: "#1d4ed8" }}>₹199</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>85% OFF</span>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#f59e0b,#d97706)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff" }}>⚠️ Flash Sale Ending Soon!</h2>
              <p style={{ color: "#fff" }}>Only <b>12 slots</b> remaining at this subsidized rate!</p>
              <p style={{ color: "#fff", fontWeight: "700" }}>⏰ Offer expires in 00:09:45</p>
            </div>

            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #cbd5e1" }}>
              <h2 style={{ color: "#1d4ed8", marginTop: 0, textAlign: "center" }}>⭐ Trusted by 50,000+ Businesses</h2>
              <p style={{ color: "#475569", textAlign: "center", fontStyle: "italic" }}>"Got my 1000 visiting cards in just 2 days. Amazing quality for ₹99!" — Rajesh K., Startup Founder ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#475569", textAlign: "center", fontStyle: "italic" }}>"Best printing service ever. The vinyl banner looks so professional." — Priya S., Event Manager ⭐⭐⭐⭐⭐</p>
            </div>

            <h2 style={{ color: "#1e293b", textAlign: "center" }}>📝 Start Your Printing Order</h2>
            <div style={{ maxWidth: "600px", margin: "auto" }}>
              <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
              <input placeholder="Mobile Number (WhatsApp preferred)" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
              <input placeholder="Email Address (to receive design proof)" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
              <input placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

              <button
                onClick={() => setView("checkout")}
                style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#2563eb,#1d4ed8)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", marginTop: "10px" }}
              >
                Proceed to Secure Checkout →
              </button>
            </div>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "25px" }}>
              © 2026 InkMonk Express Printing (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}