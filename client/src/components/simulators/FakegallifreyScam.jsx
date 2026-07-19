import React, { useState } from "react";

export default function FakeGallifreyScam({ onComplete }) {
  const [view, setView] = useState("offer");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginBottom: "16px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,.2)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box" // Prevents inputs from overflowing
  };

  /* ===================================
        VERIFY SCREEN
  =================================== */
  if (view === "verify") {
    return (
      <div
        style={{
          background: "linear-gradient(135deg,#020617,#0f172a,#1e293b)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px"
        }}
      >
        <div
          style={{
            width: "720px",
            background: "rgba(255,255,255,.08)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,.12)",
            borderRadius: "22px",
            padding: "40px",
            color: "#fff"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "90px",
                height: "90px",
                margin: "auto",
                borderRadius: "50%",
                background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "42px"
              }}
            >
              🛡
            </div>
            <h1 style={{ marginTop: "20px" }}>Gallifrey Verification Center</h1>
            <p style={{ color: "#cbd5e1" }}>
              Verify your VIP membership to unlock rewards.
            </p>
          </div>

          <div style={{ marginTop: "35px" }}>
            <p>Verification Progress</p>
            <div
              style={{
                height: "12px",
                background: "#334155",
                borderRadius: "30px",
                overflow: "hidden"
              }}
            >
              <div style={{ width: "80%", height: "100%", background: "#06b6d4" }}></div>
            </div>
            <p style={{ marginTop: "8px" }}>80% Complete</p>
          </div>

          <input placeholder="Enter 6 Digit Verification Code" style={inputStyle} />

          <button
            onClick={() => setView("success")}
            style={{
              width: "100%",
              padding: "18px",
              marginTop: "25px",
              background: "linear-gradient(90deg,#7c3aed,#2563eb)",
              border: "none",
              color: "#fff",
              fontWeight: "700",
              fontSize: "18px",
              borderRadius: "12px",
              cursor: "pointer"
            }}
          >
            Verify Membership →
          </button>
        </div>
      </div>
    );
  }

  /* ===================================
        SUCCESS SCREEN
  =================================== */
  if (view === "success") {
    return (
      <div
        style={{
          background: "linear-gradient(135deg,#020617,#0f172a,#1e293b)",
          minHeight: "100vh",
          padding: "40px",
          color: "#fff"
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            background: "rgba(255,255,255,.08)",
            backdropFilter: "blur(18px)",
            borderRadius: "22px",
            padding: "35px",
            border: "1px solid rgba(255,255,255,.12)"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div
              style={{
                width: "90px",
                height: "90px",
                margin: "auto",
                borderRadius: "50%",
                background: "#dc2626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px"
              }}
            >
              🚨
            </div>
            <h1 style={{ marginTop: "20px", color: "#f87171" }}>SCAM DETECTED</h1>
            <p style={{ fontSize: "18px", color: "#cbd5e1" }}>
              The Gallifrey VIP Membership website was fake.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "25px" }}>
            {/* LEFT MENU */}
            <div style={{ background: "#111827", borderRadius: "15px", padding: "20px" }}>
              <h3 style={{ color: "#22d3ee" }}>Analysis</h3>
              <hr style={{ borderColor: "#374151" }} />
              <p>📂 Data Exposed</p>
              <p>🚩 Red Flags</p>
              <p>🛡 Safety Tips</p>
              <p>📈 Scam Flow</p>
              <div
                style={{
                  marginTop: "30px",
                  padding: "15px",
                  background: "#7f1d1d",
                  borderRadius: "10px",
                  textAlign: "center"
                }}
              >
                Risk Score
                <h1>92%</h1>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <div
                style={{
                  background: "#1f2937",
                  padding: "20px",
                  borderRadius: "15px",
                  marginBottom: "20px"
                }}
              >
                <h2>📂 Information Exposed</h2>
                <ul>
                  <li>👤 Full Name</li>
                  <li>📱 Mobile Number</li>
                  <li>📧 Email Address</li>
                  <li>🏷 Referral Code</li>
                </ul>
              </div>

              <div
                style={{
                  background: "#1f2937",
                  padding: "20px",
                  borderRadius: "15px",
                  marginBottom: "20px"
                }}
              >
                <h2>🚩 Red Flags</h2>
                <ul>
                  <li>Free expensive rewards.</li>
                  <li>Fake VIP membership.</li>
                  <li>Urgency through countdown.</li>
                  <li>No verified company details.</li>
                  <li>Unknown reward portal.</li>
                </ul>
              </div>

              <div
                style={{
                  background: "#1f2937",
                  padding: "20px",
                  borderRadius: "15px",
                  marginBottom: "20px"
                }}
              >
                <h2>🛡 Stay Safe</h2>
                <ul>
                  <li>Verify websites before registering.</li>
                  <li>Don't trust free reward claims.</li>
                  <li>Never share personal information unnecessarily.</li>
                  <li>Search for official company details.</li>
                  <li>Report suspicious websites to Cyber Crime (1930).</li>
                </ul>
              </div>

              <div
                style={{
                  background: "#1f2937",
                  padding: "20px",
                  borderRadius: "15px"
                }}
              >
                <h2>📈 Scam Flow</h2>
                <p>✅ Opened Fake Gallifrey Website</p>
                <p>⬇</p>
                <p>✅ Entered Personal Details</p>
                <p>⬇</p>
                <p>✅ Verified Membership</p>
                <p>⬇</p>
                <p style={{ color: "#ef4444", fontWeight: "700" }}>
                  ❌ Fraudsters Collected Your Information
                </p>
              </div>

              <button
                onClick={() =>
                  onComplete([
                    "Full Name",
                    "Mobile Number",
                    "Email Address",
                    "Referral Code"
                  ])
                }
                style={{
                  width: "100%",
                  marginTop: "25px",
                  padding: "18px",
                  background: "linear-gradient(90deg,#06b6d4,#2563eb)",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#fff",
                  cursor: "pointer"
                }}
              >
                Continue to Quiz →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ===================================
        OFFER PAGE (Default View)
  =================================== */
  return (
    <div
      style={{
        background: "linear-gradient(135deg,#020617,#0f172a,#1e293b)",
        minHeight: "100vh",
        padding: "40px",
        color: "#fff"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: "25px"
        }}
      >
        {/* SIDEBAR */}
        <div
          style={{
            background: "rgba(255,255,255,.08)",
            backdropFilter: "blur(15px)",
            borderRadius: "18px",
            padding: "25px"
          }}
        >
          <h2 style={{ color: "#22d3ee" }}>🌌 Gallifrey</h2>
          <hr style={{ borderColor: "#334155" }} />
          <p>🏠 Dashboard</p>
          <p>🎁 Rewards</p>
          <p>⭐ VIP Membership</p>
          <p>💬 Support</p>
          <p>⚙ Settings</p>
          <div
            style={{
              marginTop: "30px",
              padding: "15px",
              background: "#0f766e",
              borderRadius: "12px"
            }}
          >
            <h3>VIP Status</h3>
            <h1>GOLD</h1>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div
          style={{
            background: "rgba(255,255,255,.08)",
            backdropFilter: "blur(15px)",
            borderRadius: "18px",
            padding: "35px"
          }}
        >
          <h1>🎁 Congratulations!</h1>
          <h2>You've Been Selected</h2>
          <p>Claim your FREE Gallifrey VIP Membership worth ₹9,999.</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
              margin: "30px 0"
            }}
          >
            <div
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "15px",
                textAlign: "center"
              }}
            >
              ⌚
              <h3>Smart Watch</h3>
            </div>
            <div
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "15px",
                textAlign: "center"
              }}
            >
              🎧
              <h3>Earbuds</h3>
            </div>
            <div
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "15px",
                textAlign: "center"
              }}
            >
              💎
              <h3>VIP Access</h3>
            </div>
          </div>

          <h2>Claim Reward</h2>
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
            placeholder="Referral Code (Optional)"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("verify")}
            style={{
              width: "100%",
              padding: "18px",
              background: "linear-gradient(90deg,#06b6d4,#2563eb)",
              border: "none",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "700",
              borderRadius: "12px",
              cursor: "pointer"
            }}
          >
            Claim VIP Reward →
          </button>
        </div>
      </div>
    </div>
  );
}