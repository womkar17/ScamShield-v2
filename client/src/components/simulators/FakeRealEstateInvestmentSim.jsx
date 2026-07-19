import React, { useState } from "react";

export default function FakeRealEstateInvestmentSim({ onComplete }) {

  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [investment, setInvestment] = useState("100000");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const project = "Green Valley Smart City";
  const location = "Goa";
  const roi = "35%";

  const handleContinue = () => {

    if (!name || !mobile || !email || !investment) {

      setError("Please fill all required details.");
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
            background: "#2E7D32",
            color: "#fff",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "700"
          }}
        >

          Real Estate Investment

        </div>

        <div style={{ padding: "25px" }}>

          <h2>{project}</h2>

          <p>📍 {location}</p>

          <div
            style={{
              background: "#E8F5E9",
              padding: "18px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >

            🏢 Limited Pre-Launch Investment

            <br /><br />

            ✔ Guaranteed {roi} Annual Returns

            <br />

            ✔ Government Approved Project

            <br />

            ✔ Double Your Money in 3 Years

            <br />

            ✔ Only 20 Investment Slots Left

          </div>

          <label>Full Name</label>

          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Mobile Number</label>

          <input
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label>Email Address</label>

          <input
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Investment Amount (₹)</label>

          <input
            className="form-control"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />

          {error &&
            <p style={{ color: "red" }}>{error}</p>
          }

          <button
            onClick={handleContinue}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px",
              background: "#2E7D32",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold"
            }}
          >

            Invest Now

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

      <h2 style={{ color: "#2E7D32" }}>
        Investment Confirmation
      </h2>

      <hr />

      <p><strong>Investor:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>

      <div
        style={{
          background: "#E8F5E9",
          padding: "18px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        <h3>Investment Summary</h3>

        <p><strong>Project:</strong> {project}</p>

        <p><strong>Location:</strong> {location}</p>

        <p><strong>Investment Amount:</strong> ₹{investment}</p>

        <p><strong>Expected Annual Return:</strong> {roi}</p>

        <p style={{ color: "#2E7D32", fontWeight: "bold" }}>
          ✔ Investment slot reserved successfully.
        </p>

        <hr />

        <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
          Complete payment to confirm your investment.
        </p>

      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: "100%",
          padding: "15px",
          background: "#2E7D32",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold"
        }}
      >

        {loading ? "Processing..." : `Pay ₹${investment}`}

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
        Payment Verification
      </h2>

      <p>
        Enter the OTP sent by your bank to complete your investment.
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

        ⚠ OTP verification is required to activate your investment portfolio.

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

  const invested = Number(investment) || 0;
  const profit = Math.round(invested * 0.35);

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
        Investment Dashboard
      </h2>

      <div
        style={{
          background: "#E8F5E9",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}
      >

        <p><strong>Total Investment:</strong> ₹{invested}</p>

        <p><strong>Projected Profit:</strong> ₹{profit}</p>

        <p><strong>Portfolio Value:</strong> ₹{invested + profit}</p>

        <p style={{ color: "#2E7D32", fontWeight: "bold" }}>
          ✔ Your investment is performing exceptionally well.
        </p>

      </div>

      <button
        onClick={() => setView("withdraw")}
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

        Withdraw Profit

      </button>

    </div>

  );

}

if (view === "withdraw") {

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

      <h2 style={{ color: "#D32F2F" }}>
        Withdrawal On Hold
      </h2>

      <div
        style={{
          background: "#FDECEA",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}
      >

        Your withdrawal request cannot be processed.

        <br /><br />

        Please pay a
        <strong> Property Registration Fee of ₹10,000</strong>
        to release your investment and profits.

        <br /><br />

        This payment must be completed within 30 minutes.

      </div>

      <button
        onClick={() => setView("result")}
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

        Pay Registration Fee

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
          This was a <strong>Fake Real Estate Investment Scam.</strong>
          Fraudsters advertise fake pre-launch projects, luxury developments,
          or land investment opportunities with promises of guaranteed high
          returns and government approvals. Victims are convinced to invest
          money, shown fake profits on dashboards, and later asked to pay
          registration fees, legal charges, taxes, or processing fees before
          withdrawals. After collecting multiple payments, the scammers
          disappear.
        </p>

      </div>

      <h3>Information You Shared</h3>

      <ul>
        <li><strong>Full Name:</strong> {name}</li>
        <li><strong>Mobile Number:</strong> {mobile}</li>
        <li><strong>Email Address:</strong> {email}</li>
        <li><strong>Investment Amount:</strong> ₹{investment}</li>
        <li>OTP entered during fake payment verification.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        🚩 Red Flags
      </h3>

      <ul>
        <li>Guaranteed high returns from property investments.</li>
        <li>Claims of government approval without proof.</li>
        <li>Pressure to invest immediately due to "limited slots."</li>
        <li>Fake dashboards displaying instant profits.</li>
        <li>Unexpected registration, legal, or processing fees.</li>
        <li>Requests for OTP, UPI PIN, passwords, or banking details.</li>
        <li>Investment offers that sound too good to be true.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>Verify the builder, project, and property documents before investing.</li>
        <li>Check approvals with the relevant government authorities.</li>
        <li>Avoid investments promising guaranteed returns.</li>
        <li>Never pay additional fees to release your own investment.</li>
        <li>Never share OTPs, passwords, UPI PINs, or banking credentials.</li>
        <li>Consult legal and financial professionals before making large property investments.</li>
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