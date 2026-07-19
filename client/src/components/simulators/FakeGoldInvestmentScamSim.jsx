import React, { useState } from "react";

export default function FakeGoldInvestmentScamSim({ onComplete }) {

  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [investment, setInvestment] = useState("50000");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const company = "Golden Future Investments";
  const plan = "24K Gold Wealth Plan";

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
            background: "#C9A227",
            color: "#fff",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "700"
          }}
        >

          Golden Future Investments

        </div>

        <div style={{ padding: "25px" }}>

          <h2>{plan}</h2>

          <div
            style={{
              background: "#FFF8DC",
              padding: "18px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >

            🪙 Invest in Digital Gold

            <br /><br />

            ✔ Guaranteed 25% Monthly Returns

            <br />

            ✔ Government Approved

            <br />

            ✔ Zero Risk Investment

            <br />

            ✔ Instant Withdrawal

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

          {error && (
            <p style={{ color: "red" }}>{error}</p>
          )}

          <button
            onClick={handleContinue}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px",
              background: "#C9A227",
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

      <h2 style={{ color: "#C9A227" }}>
        Gold Investment Plan
      </h2>

      <hr />

      <p><strong>Investor:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>

      <div
        style={{
          background: "#FFF8DC",
          padding: "18px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        <h3>Investment Summary</h3>

        <p>Plan: <strong>{plan}</strong></p>

        <p>Investment Amount:
          <strong> ₹{investment}</strong>
        </p>

        <p>Expected Monthly Return:
          <strong> 25%</strong>
        </p>

        <p>Guaranteed Profit Every Month</p>

        <hr />

        <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
          Complete payment to activate your Gold Investment Account.
        </p>

      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: "100%",
          padding: "15px",
          background: "#C9A227",
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
        Payment Authentication
      </h2>

      <p>
        Enter the OTP sent by your bank to activate your investment.
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

        ⚠ OTP verification is required to activate your Gold Portfolio.

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
  const profit = Math.round(invested * 0.25);

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
        Gold Portfolio
      </h2>

      <div
        style={{
          background: "#FFF8DC",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}
      >

        <p><strong>Total Investment:</strong> ₹{invested}</p>

        <p><strong>Current Profit:</strong> ₹{profit}</p>

        <p><strong>Total Portfolio Value:</strong> ₹{invested + profit}</p>

        <p style={{ color: "#2E7D32", fontWeight: "bold" }}>
          ✔ Your investment has earned a guaranteed monthly profit.
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

        Withdraw Funds

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
        Withdrawal Pending
      </h2>

      <div
        style={{
          background: "#FDECEA",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}
      >

        Your withdrawal request has been placed on hold.

        <br /><br />

        To release your funds, pay a
        <strong> Gold Processing Fee of ₹5,000.</strong>

        <br /><br />

        Payment must be completed within 30 minutes.

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

        Pay Processing Fee

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
          This was a <strong>Fake Gold Investment Scam.</strong>
          Fraudsters create fake gold investment platforms that promise
          guaranteed monthly returns, government approval, and instant
          withdrawals. They display fake portfolio values and profits to
          gain victims' trust. When investors try to withdraw their money,
          scammers demand additional processing fees, taxes, or verification
          charges before disappearing with the funds.
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
        <li>Guaranteed high monthly returns with no investment risk.</li>
        <li>Claims of being "Government Approved" without proof.</li>
        <li>Fake dashboards showing instant profits.</li>
        <li>Pressure to invest immediately.</li>
        <li>Unexpected processing or withdrawal fees.</li>
        <li>Requests for OTP, UPI PIN, passwords, or banking credentials.</li>
        <li>Promises that sound too good to be true.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>Verify investment companies through official financial regulators.</li>
        <li>Remember that no legitimate investment guarantees fixed returns.</li>
        <li>Research the platform before investing any money.</li>
        <li>Never pay extra fees to withdraw your own investment.</li>
        <li>Never share OTPs, passwords, UPI PINs, or banking details.</li>
        <li>Invest only through trusted and regulated financial institutions.</li>
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