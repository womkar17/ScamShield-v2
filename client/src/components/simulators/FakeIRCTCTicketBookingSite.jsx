import React, { useState } from "react";

export default function FakeIRCTCScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [passengerName, setPassengerName] = useState("");
  const [age, setAge] = useState("");

  const [upi, setUpi] = useState("");
  const [pin, setPin] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #3b82f6",
    fontSize: "16px",
    outline: "none",
    background: "#f8fafc",
    color: "#1e293b",
    boxSizing: "border-box"
  };

  /* ===================================
        PAYMENT / BOOKING PAGE
  =================================== */
  if (view === "payment") {
    return (
      <div style={{ background: "#f1f5f9", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#fff", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(59,130,246,.2)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🚆</div>
            <h1 style={{ color: "#1e40af", fontWeight: "800" }}>IRCTC Quick Booking</h1>
            <h2>Payment & Confirmation</h2>
            <p style={{ color: "#64748b" }}>Complete payment to confirm your Tatkal ticket</p>
          </div>

          <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #3b82f6" }}>
            <h2 style={{ color: "#1e40af", marginTop: 0 }}>Journey Details</h2>
            <p><b>Train:</b> 12951 Mumbai Rajdhani Express</p>
            <p><b>From:</b> New Delhi (NDLS) → <b>To:</b> Mumbai Central (MMCT)</p>
            <p><b>Date:</b> 20 July 2026 | <b>Class:</b> AC 2 Tier</p>
            <p><b>Passenger:</b> {passengerName || "Not provided"}, Age {age || "?"}</p>
            <h1 style={{ color: "#16a34a", margin: "15px 0 5px 0" }}>₹2,850</h1>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 Tatkal Quota - Limited Seats Available!</p>
          </div>

          <h2 style={{ color: "#1e293b" }}>Payment via UPI</h2>
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
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#3b82f6,#1e40af)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
          >
            Pay ₹2,850 & Book Ticket →
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
            <h3>This was a Fake IRCTC Ticket Booking Website.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#991b1b", marginTop: 0 }}>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Full Name: <b>{name || "Not provided"}</b></li>
                  <li>📱 Mobile Number: <b>{mobile || "Not provided"}</b></li>
                  <li>📧 Email Address: <b>{email || "Not provided"}</b></li>
                  <li>🎫 Passenger Name: <b>{passengerName || "Not provided"}</b></li>
                  <li>🎂 Age: <b>{age || "Not provided"}</b></li>
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
                  <li>Unofficial website domain (not <b>irctc.co.in</b>).</li>
                  <li>Requested UPI PIN (never needed to receive money or confirm bookings).</li>
                  <li>Fake "Tatkal quota" claims to create urgency.</li>
                  <li>No secure, recognized payment gateway (e.g., PayU, Razorpay, official IRCTC payment).</li>
                  <li>Unrealistic "discounted" ticket prices.</li>
                  <li>No PNR generation or official IRCTC branding verification.</li>
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
              <h2 style={{ color: "#065f46", marginTop: 0 }}>🛡 How to Book Train Tickets Safely</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>Book tickets <b>only</b> on the official IRCTC website: <b>irctc.co.in</b> or the official IRCTC Rail Connect app.</li>
                <li>Verify the website URL carefully. Official domains will be exact matches (e.g., <b>irctc.co.in</b>).</li>
                <li><b>Never share your UPI PIN</b> — it is ONLY used to SEND money, never to receive a refund or "confirm" a booking.</li>
                <li>Legitimate IRCTC payments use secure gateways (PayU, Razorpay, or direct bank integration), not direct UPI PIN prompts.</li>
                <li>After booking, you will receive a <b>PNR number</b> — verify it on the official IRCTC site or NTES app.</li>
                <li>Be wary of third-party agents promising "guaranteed Tatkal tickets" for a fee.</li>
                <li>Report fake railway booking scams to the Cyber Crime Helpline (<b>1930</b> in India) or cybercrime.gov.in.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#334155", marginTop: 0 }}>📈 Scam Timeline</h2>
              <p>✅ Searched for "IRCTC Tatkal ticket booking" or clicked a social media ad</p>
              <p>⬇</p>
              <p>✅ Landed on a fake IRCTC-looking website</p>
              <p>⬇</p>
              <p>✅ Selected a train and entered passenger details</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID & PIN to "pay and confirm booking"</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700", fontSize: "16px" }}>❌ Fraudsters Stole Money & Personal Data. No ticket was booked.</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, passengerName, age, upi, pin })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#3b82f6,#1e40af)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
            >
              Continue to Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ===================================
        HOME / BOOKING PAGE (Default Return)
  =================================== */
  return (
    <div style={{ background: "linear-gradient(135deg,#f8fafc,#e2e8f0)", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(59,130,246,.15)" }}>
          <div style={{ background: "linear-gradient(90deg,#1e40af,#3b82f6,#f97316)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontWeight: "800" }}>🚆 IRCTC Quick Booking</h1>
            <h3 style={{ color: "#bfdbfe", marginTop: "10px", fontWeight: "600" }}>Indian Railway Catering and Tourism Corporation</h3>
            <p style={{ color: "#fef3c7" }}>Special Tatkal Quota Drive: Book Now, Travel Tomorrow!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #3b82f6" }}>
                <div style={{ fontSize: "50px" }}>🚄</div>
                <h3>Rajdhani Express</h3>
                <p style={{ fontSize: "14px", color: "#64748b" }}>Delhi → Mumbai | AC 2 Tier</p>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹3,500</p>
                <h2 style={{ color: "#1e40af" }}>₹2,850</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>Tatkal Available</span>
              </div>
              <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #3b82f6" }}>
                <div style={{ fontSize: "50px" }}>🚂</div>
                <h3>Shatabdi Express</h3>
                <p style={{ fontSize: "14px", color: "#64748b" }}>Chennai → Bangalore | Chair Car</p>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹1,800</p>
                <h2 style={{ color: "#1e40af" }}>₹1,450</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>Tatkal Available</span>
              </div>
              <div style={{ background: "#eff6ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #3b82f6" }}>
                <div style={{ fontSize: "50px" }}>🚃</div>
                <h3>Duronto Express</h3>
                <p style={{ fontSize: "14px", color: "#64748b" }}>Kolkata → Hyderabad | AC 3 Tier</p>
                <p style={{ textDecoration: "line-through", color: "#64748b" }}>₹2,900</p>
                <h2 style={{ color: "#1e40af" }}>₹2,350</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>Tatkal Available</span>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff" }}>⚠️ Limited Tatkal Seats!</h2>
              <p style={{ color: "#fecaca" }}>Only <b>4 seats</b> remaining for tomorrow's journey!</p>
              <p style={{ color: "#fff", fontWeight: "700" }}>⏰ Booking closes in 00:14:32</p>
            </div>

            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #cbd5e1" }}>
              <h2 style={{ color: "#1e40af", marginTop: 0, textAlign: "center" }}>⭐ Trusted by 10 Million+ Travelers</h2>
              <p style={{ color: "#475569", textAlign: "center", fontStyle: "italic" }}>"Got my Tatkal ticket in 2 minutes! Super fast and reliable." — Rajesh K. ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#475569", textAlign: "center", fontStyle: "italic" }}>"Best platform for last-minute bookings. Highly recommended!" — Priya S. ⭐⭐⭐⭐⭐</p>
            </div>

            <h2 style={{ color: "#1e293b", textAlign: "center" }}>📝 Book Your Tatkal Ticket</h2>
            <div style={{ maxWidth: "600px", margin: "auto" }}>
              <input placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
              <input placeholder="Mobile Number (for PNR SMS)" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
              <input placeholder="Email Address (for ticket confirmation)" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
              <input placeholder="Passenger Name (as per ID proof)" value={passengerName} onChange={(e) => setPassengerName(e.target.value)} style={inputStyle} />
              <input placeholder="Passenger Age" value={age} onChange={(e) => setAge(e.target.value)} style={inputStyle} />

              <button
                onClick={() => setView("payment")}
                style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#3b82f6,#1e40af)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", marginTop: "10px" }}
              >
                Proceed to Payment →
              </button>
            </div>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "25px" }}>
              © 2026 IRCTC Quick Booking (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}