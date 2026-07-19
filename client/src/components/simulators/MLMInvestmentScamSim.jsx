import React, { useState } from "react";

export default function MLMInvestmentScamSim({ onComplete }) {

  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [investment, setInvestment] = useState("25000");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const company = "Global Success Network";
  const packageName = "Diamond Wealth Package";
  const joiningFee = "25000";

  const handleContinue = () => {

    if (!name || !mobile || !email || !investment) {

      setError("Please fill all required fields.");
      return;

    }

    setError("");
    setView("offer");

  };

  const handlePayment = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);
      setView("otp");

    }, 1500);

  };

  if (view === "home") {

    return (

      <div
        style={{
          maxWidth: "730px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 15px 40px rgba(0,0,0,.2)"
        }}
      >

        <div
          style={{
            background: "#6A1B9A",
            color: "#fff",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "700"
          }}
        >

          Global Success Network

        </div>

        <div style={{ padding: "25px" }}>

          <h2>{packageName}</h2>

          <div
            style={{
              background: "#F3E5F5",
              padding: "18px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >

            💎 Become Financially Free!

            <br /><br />

            ✔ Earn ₹1,00,000+ every month

            <br />

            ✔ Lifetime passive income

            <br />

            ✔ Referral commissions

            <br />

            ✔ No experience required

          </div>

          <label>Full Name</label>

          <input
            className="form-control"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <label>Mobile Number</label>

          <input
            className="form-control"
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
          />

          <label>Email</label>

          <input
            className="form-control"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label>Joining Investment (₹)</label>

          <input
            className="form-control"
            value={investment}
            onChange={(e)=>setInvestment(e.target.value)}
          />

          {error &&
            <p style={{color:"red"}}>{error}</p>
          }

          <button
            onClick={handleContinue}
            style={{
              width:"100%",
              marginTop:"20px",
              padding:"15px",
              background:"#6A1B9A",
              color:"#fff",
              border:"none",
              borderRadius:"6px",
              fontWeight:"bold"
            }}
          >

            Join Now

          </button>

        </div>

      </div>

    );

  }
  if (view === "offer") {

  return (

    <div
      style={{
        maxWidth: "730px",
        margin: "30px auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,.2)"
      }}
    >

      <h2 style={{ color: "#6A1B9A" }}>
        Diamond Membership
      </h2>

      <hr />

      <p><strong>Member:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>

      <div
        style={{
          background: "#F3E5F5",
          padding: "18px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        <h3>Exclusive Benefits</h3>

        <p>✔ Lifetime Passive Income</p>
        <p>✔ Daily Commission</p>
        <p>✔ Unlimited Referral Bonuses</p>
        <p>✔ Guaranteed Monthly Income</p>

        <hr />

        <p>
          Membership Fee:
          <strong> ₹{joiningFee}</strong>
        </p>

        <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
          Complete payment now to activate your account.
        </p>

      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: "100%",
          padding: "15px",
          background: "#6A1B9A",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold"
        }}
      >

        {loading ? "Processing..." : `Pay ₹${joiningFee}`}

      </button>

    </div>

  );

}

if (view === "otp") {

  return (

    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,.2)"
      }}
    >

      <h2 style={{ color: "#D32F2F" }}>
        Membership Verification
      </h2>

      <p>
        Enter the OTP sent by your bank to activate your Diamond Membership.
      </p>

      <input
        className="form-control"
        placeholder="Enter 6-digit OTP"
        maxLength={6}
      />

      <div
        style={{
          background: "#FFF3E0",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        ⚠ OTP verification is required to activate your earnings.

      </div>

      <button
        onClick={() => setView("dashboard")}
        style={{
          width: "100%",
          padding: "15px",
          background: "#D32F2F",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold"
        }}
      >

        Verify OTP

      </button>

    </div>

  );

}

if (view === "dashboard") {

  return (

    <div
      style={{
        maxWidth: "760px",
        margin: "30px auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,.2)"
      }}
    >

      <h2 style={{ color: "#2E7D32" }}>
        Member Dashboard
      </h2>

      <div
        style={{
          background: "#E8F5E9",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}
      >

        <p><strong>Total Investment:</strong> ₹{investment}</p>

        <p><strong>Referral Members:</strong> 0</p>

        <p><strong>Estimated Monthly Income:</strong> ₹1,20,000</p>

        <p><strong>Referral Bonus:</strong> ₹10,000 per member</p>

        <p style={{ color: "#2E7D32", fontWeight: "bold" }}>
          Invite friends to unlock higher income levels.
        </p>

      </div>

      <button
        onClick={() => setView("result")}
        style={{
          width: "100%",
          padding: "15px",
          background: "#1565C0",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold"
        }}
      >

        Continue

      </button>

    </div>

  );

}
if (view === "result") {

  return (

    <div
      style={{
        maxWidth: "780px",
        margin: "30px auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 12px 35px rgba(0,0,0,.2)"
      }}
    >

      <div
        style={{
          background: "#FDECEA",
          color: "#C62828",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "25px"
        }}
      >

        <h2>⚠ Scam Revealed!</h2>

        <p>
          This was an <strong>MLM (Multi-Level Marketing) Investment Scam.</strong>
          Fraudsters attract people by promising huge monthly income,
          passive earnings, and referral commissions. In many scams,
          income depends mainly on recruiting new members instead of
          selling genuine products or services. Victims lose their
          joining fees while promised earnings never materialize.
        </p>

      </div>

      <h3>Information You Shared</h3>

      <ul>
        <li><strong>Full Name:</strong> {name}</li>
        <li><strong>Mobile Number:</strong> {mobile}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Joining Amount:</strong> ₹{investment}</li>
        <li>OTP entered during fake membership verification.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        🚩 Red Flags
      </h3>

      <ul>
        <li>Guaranteed high monthly income with little or no effort.</li>
        <li>Strong focus on recruiting new members.</li>
        <li>Expensive joining or membership fees.</li>
        <li>Promises of passive income without realistic business activity.</li>
        <li>Pressure to join immediately to avoid missing the opportunity.</li>
        <li>Requests for OTP or banking credentials during registration.</li>
        <li>Unrealistic earnings shown on dashboards.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>Research the company before investing or joining.</li>
        <li>Be cautious of businesses focused mainly on recruitment.</li>
        <li>Avoid schemes promising guaranteed or unrealistic income.</li>
        <li>Never pay large joining fees without proper verification.</li>
        <li>Never share OTP, UPI PIN, passwords, or banking details.</li>
        <li>Consult trusted financial advisors before making investments.</li>
      </ul>

      <button
        onClick={() => onComplete && onComplete()}
        style={{
          width: "100%",
          marginTop: "30px",
          padding: "15px",
          background: "#2E7D32",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >

        Finish Simulation

      </button>

    </div>

  );

}
}