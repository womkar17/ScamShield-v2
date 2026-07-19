import React, { useState } from "react";

export default function FakeGadgets360Scam({ onComplete }) {
  const [view, setView] = useState("offer");

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
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box" // Prevents inputs from overflowing
  };

  /* ===========================
     PAYMENT SCREEN
  =========================== */
  if (view === "payment") {
    return (
      <div style={{ background: "#f3f4f6", minHeight: "100vh", padding: "40px" }}>
        <div
          style={{
            maxWidth: "720px",
            margin: "auto",
            background: "#fff",
            borderRadius: "18px",
            padding: "35px",
            boxShadow: "0 20px 40px rgba(0,0,0,.15)"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#2563eb" }}>📱 Gadgets 360 Mega Sale</h1>
            <h2>Complete Your Purchase</h2>
            <p>Secure your order before stock runs out.</p>
          </div>

          <div
            style={{
              background: "#eff6ff",
              padding: "20px",
              borderRadius: "12px",
              margin: "25px 0"
            }}
          >
            <h2>Order Summary</h2>
            <h1 style={{ color: "#2563eb" }}>₹999</h1>
            <p>Apple AirPods Pro (Flash Sale)</p>
            <p>🚚 Free Delivery</p>
          </div>

          <h2>Payment Details</h2>
          <input
            placeholder="UPI ID"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="UPI PIN"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{
              width: "100%",
              padding: "18px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontWeight: "700",
              fontSize: "18px",
              cursor: "pointer"
            }}
          >
            Pay ₹999 →
          </button>
        </div>
      </div>
    );
  }

  /* ===========================
     SUCCESS SCREEN
  =========================== */
  if (view === "success") {
    return (
      <div style={{ background: "#f3f4f6", minHeight: "100vh", padding: "40px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            background: "#fff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,.18)"
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg,#dc2626,#991b1b)",
              padding: "25px",
              color: "#fff",
              textAlign: "center"
            }}
          >
            <h1>🚨 SCAM DETECTED!</h1>
            <h3>This was a Fake Gadgets 360 Shopping Scam.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div
              style={{
                background: "#fee2e2",
                padding: "20px",
                borderRadius: "12px",
                marginBottom: "25px"
              }}
            >
              <h2>⚠ Risk Level</h2>
              <div
                style={{
                  height: "18px",
                  background: "#ddd",
                  borderRadius: "20px",
                  overflow: "hidden"
                }}
              >
                <div style={{ width: "95%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>HIGH RISK</h3>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "12px" }}>
                <h2>📂 Information Exposed</h2>
                <ul>
                  <li>👤 Full Name</li>
                  <li>📱 Mobile Number</li>
                  <li>📧 Email Address</li>
                  <li>🏠 Delivery Address</li>
                  <li>💳 UPI ID</li>
                  <li>🔐 UPI PIN</li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "12px" }}>
                <h2>🚩 Red Flags</h2>
                <ul>
                  <li>Premium gadgets sold at unbelievable prices.</li>
                  <li>Countdown timer created urgency.</li>
                  <li>Only advance payment accepted.</li>
                  <li>No verified seller information.</li>
                  <li>Fake customer reviews.</li>
                  <li>Recently created shopping website.</li>
                </ul>
              </div>
            </div>

            <div
              style={{
                marginTop: "25px",
                background: "#ecfdf5",
                padding: "20px",
                borderRadius: "12px"
              }}
            >
              <h2>🛡 Stay Safe</h2>
              <ul>
                <li>Buy electronics only from trusted websites.</li>
                <li>Verify the website URL before payment.</li>
                <li>Never share your UPI PIN.</li>
                <li>Avoid deals that look too good to be true.</li>
                <li>Check seller reviews and company details.</li>
                <li>Report fake shopping websites to Cyber Crime (1930).</li>
              </ul>
            </div>

            <div
              style={{
                marginTop: "25px",
                background: "#eff6ff",
                padding: "20px",
                borderRadius: "12px"
              }}
            >
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake Gadgets 360 Website</p>
              <p>⬇</p>
              <p>✅ Selected Discounted Product</p>
              <p>⬇</p>
              <p>✅ Entered Personal Details</p>
              <p>⬇</p>
              <p>✅ Entered UPI Information</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>
                ❌ Fraudsters Captured Your Personal & Payment Information
              </p>
            </div>

            <button
              onClick={() =>
                onComplete([
                  "Full Name",
                  "Mobile Number",
                  "Email Address",
                  "Delivery Address",
                  "UPI ID",
                  "UPI PIN"
                ])
              }
              style={{
                width: "100%",
                marginTop: "30px",
                padding: "18px",
                background: "linear-gradient(90deg,#2563eb,#4338ca)",
                border: "none",
                color: "#fff",
                fontWeight: "700",
                fontSize: "18px",
                borderRadius: "12px",
                cursor: "pointer"
              }}
            >
              Continue to Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ===========================
     OFFER PAGE (Default View)
  =========================== */
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", padding: "40px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,.15)"
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg,#2563eb,#1d4ed8)",
            padding: "25px",
            color: "#fff",
            textAlign: "center"
          }}
        >
          <h1>📱 Gadgets 360 Flash Sale</h1>
          <h3>Up to 90% OFF Electronics</h3>
        </div>

        <div style={{ padding: "35px" }}>
          <div
            style={{
              background: "#eff6ff",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "25px"
            }}
          >
            <h2>🔥 Today's Deal</h2>
            <h1 style={{ color: "#2563eb" }}>Apple AirPods Pro</h1>
            <h2 style={{ color: "#dc2626" }}>₹999 Only</h2>
            <p>MRP ₹24,900</p>
            <p>⏳ Offer Ends In 09:59 Minutes</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "25px"
            }}
          >
            <div style={{ background: "#f9fafb", padding: "20px", borderRadius: "12px" }}>
              <h2>Product Features</h2>
              <ul>
                <li>🎧 Active Noise Cancellation</li>
                <li>🔋 30 Hour Battery</li>
                <li>📦 Free Delivery</li>
                <li>🛡 1 Year Warranty</li>
                <li>⭐ Premium Quality</li>
              </ul>
            </div>

            <div style={{ background: "#fefce8", padding: "20px", borderRadius: "12px" }}>
              <h2>⭐⭐⭐⭐⭐ Reviews</h2>
              <p>"Amazing Deal!"</p>
              <p>"Received in one day."</p>
              <p>"Best price ever."</p>
            </div>
          </div>

          <h2>Shipping Information</h2>
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("payment")}
            style={{
              width: "100%",
              padding: "18px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer"
            }}
          >
            Proceed To Payment →
          </button>
        </div>
      </div>
    </div>
  );
}