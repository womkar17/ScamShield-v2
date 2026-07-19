import React, { useState } from "react";

export default function FakeHuskyScam({ onComplete }) {
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
    border: "1px solid #0ea5e9",
    fontSize: "16px",
    outline: "none",
    background: "#f0f9ff",
    color: "#0c4a6e",
    boxSizing: "border-box"
  };

  /* ===================================
        SHIPPING / PAYMENT PAGE
  =================================== */
  if (view === "shipping") {
    return (
      <div style={{ background: "#f0f9ff", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#fff", borderRadius: "20px", padding: "35px", boxShadow: "0 20px 50px rgba(14,165,233,.25)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🐕</div>
            <h1 style={{ color: "#0369a1" }}>Arctic Paws Husky Kennel</h1>
            <h2>Shipping & Vaccination Payment</h2>
            <p style={{ color: "#7dd3fc" }}>Complete payment to arrange safe delivery of your puppy</p>
          </div>

          <div style={{ background: "#e0f2fe", padding: "20px", borderRadius: "12px", margin: "25px 0", border: "2px solid #0ea5e9" }}>
            <h2 style={{ color: "#0369a1" }}>Your Puppy Details</h2>
            <p><b>Breed:</b> Siberian Husky (Purebred)</p>
            <p><b>Age:</b> 8 weeks old</p>
            <p><b>Color:</b> Black & White</p>
            <p><b>Name:</b> Snowball 🐾</p>
            <h1 style={{ color: "#0284c7", marginTop: "15px" }}>₹15,000</h1>
            <p style={{ fontSize: "13px", color: "#64748b" }}>Puppy price (already paid via advance)</p>
          </div>

          <div style={{ background: "#fef3c7", padding: "15px", borderRadius: "10px", marginBottom: "20px", border: "1px solid #f59e0b" }}>
            <p style={{ margin: 0, color: "#92400e" }}>
              📦 <b>Shipping & Documentation Fee:</b> ₹4,999<br />
              <small>Includes: Air-conditioned pet transport, vaccination certificate, health card, pedigree papers, and carrier crate</small>
            </p>
          </div>

          <h2 style={{ color: "#0c4a6e" }}>Payment for Shipping</h2>
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
            style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#0ea5e9,#0284c7)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
          >
            Pay ₹4,999 & Book Puppy →
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
      <div style={{ background: "#f0f9ff", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.25)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Puppy Selling Website.</h3>
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
                  <li>Stolen puppy photos from the internet (reverse image search reveals this).</li>
                  <li>Requests "shipping fee" before delivery — a classic advance-fee scam.</li>
                  <li>Refuses in-person meetings or video calls with the puppy.</li>
                  <li>Unregistered breeder with no kennel club affiliation.</li>
                  <li>Pressure tactics ("Another family is interested!").</li>
                  <li>Requested UPI PIN (never needed to receive money).</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "98%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>VERY HIGH RISK — FINANCIAL FRAUD & EMOTIONAL HARM</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How to Buy a Pet Safely</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li><b>Always visit the breeder in person</b> and see the puppy with its mother before paying.</li>
                <li>Verify the breeder is registered with the <b>Kennel Club of India</b> or local animal welfare bodies.</li>
                <li>Do a <b>reverse image search</b> on puppy photos — scammers steal them from real breeders.</li>
                <li><b>Never pay "shipping fees" in advance</b> — legitimate breeders arrange local pickup or verified pet transport.</li>
                <li><b>Never share your UPI PIN</b> — it is only used to SEND money, never to receive it.</li>
                <li>Ask for video calls to see the puppy live — scammers always refuse.</li>
                <li>Report pet scams to Cyber Crime Helpline (<b>1930</b>) and local animal welfare organizations.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Found "adorable husky puppies" on social media/classifieds</p>
              <p>⬇</p>
              <p>✅ Contacted fake breeder on WhatsApp</p>
              <p>⬇</p>
              <p>✅ Paid ₹15,000 "advance" to book the puppy</p>
              <p>⬇</p>
              <p>✅ Asked to pay ₹4,999 "shipping & vaccination fee"</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID & PIN</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Stole Money — No Puppy Exists, Photos Were Stolen</p>
            </div>

            <button
              onClick={() => onComplete({ name, mobile, email, address, upi, pin })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#0ea5e9,#0284c7)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
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
    <div style={{ background: "linear-gradient(135deg,#f0f9ff,#e0f2fe)", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(14,165,233,.2)" }}>
          <div style={{ background: "linear-gradient(90deg,#0284c7,#0ea5e9,#38bdf8)", padding: "40px", textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontSize: "48px", margin: 0, textShadow: "2px 2px 4px rgba(0,0,0,.2)" }}>🐺 Arctic Paws Husky Kennel</h1>
            <h3 style={{ color: "#e0f2fe", marginTop: "10px" }}>Premium Siberian Husky Puppies — Ethically Bred</h3>
            <p style={{ color: "#bae6fd" }}>Healthy, Vaccinated & KCI Registered Puppies Available Now!</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#f0f9ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #0ea5e9" }}>
                <div style={{ fontSize: "70px" }}>🐕</div>
                <h3>Snowball</h3>
                <p>Male • 8 weeks • Black & White</p>
                <h2 style={{ color: "#0284c7" }}>₹25,000</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>Vaccinated ✓</span>
              </div>
              <div style={{ background: "#f0f9ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #0ea5e9" }}>
                <div style={{ fontSize: "70px" }}>🐕‍🦺</div>
                <h3>Luna</h3>
                <p>Female • 10 weeks • Gray & White</p>
                <h2 style={{ color: "#0284c7" }}>₹28,000</h2>
                <span style={{ background: "#16a34a", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>KCI Registered ✓</span>
              </div>
              <div style={{ background: "#f0f9ff", padding: "20px", borderRadius: "15px", textAlign: "center", border: "2px solid #0ea5e9" }}>
                <div style={{ fontSize: "70px" }}>🐶</div>
                <h3>Ghost</h3>
                <p>Male • 12 weeks • Pure White</p>
                <h2 style={{ color: "#0284c7" }}>₹35,000</h2>
                <span style={{ background: "#dc2626", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>🔥 Rare Color</span>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#f59e0b,#d97706)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff" }}>⚠️ High Demand!</h2>
              <p style={{ color: "#fff" }}>Multiple families enquiring — <b>first come, first served!</b></p>
              <p style={{ color: "#fff", fontWeight: "700" }}>📞 Call/WhatsApp now to book your puppy</p>
            </div>

            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #cbd5e1" }}>
              <h2 style={{ color: "#0369a1", marginTop: 0 }}>💙 Happy Families</h2>
              <p style={{ color: "#475569" }}>"Got our husky last month, so playful and healthy!" — Meera S. ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#475569" }}>"Best breeder in India. Puppy came with all papers." — Vikram J. ⭐⭐⭐⭐⭐</p>
              <p style={{ color: "#475569" }}>"My kids are in love with their new fur baby!" — Anjali R. ⭐⭐⭐⭐⭐</p>
            </div>

            <h2 style={{ color: "#0369a1" }}>📝 Book Your Puppy Today</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Mobile Number (WhatsApp preferred)" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Delivery Address (for home delivery of puppy)" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("shipping")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#0ea5e9,#0284c7)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
            >
              Book Puppy & Proceed →
            </button>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "20px" }}>
              © 2026 Arctic Paws Husky Kennel (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}