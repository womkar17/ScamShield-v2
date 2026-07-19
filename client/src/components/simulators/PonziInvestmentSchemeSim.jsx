import React, { useState } from "react";

export default function PonziInvestmentSchemeSim({ onComplete }) {

  const [view, setView] = useState("login");

  // Authentication
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // User Details
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [investment, setInvestment] = useState("50000");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const company = "Future Wealth Investments";
  const plan = "Elite Passive Income Plan";

  // Fake Login
  const handleLogin = () => {

    if (!username || !password) {
      setError("Enter username and password.");
      return;
    }

    setError("");
    setView("home");

  };

  // Fake Registration
  const handleRegister = () => {

    if (!name || !mobile || !investment) {
      setError("Please fill all details.");
      return;
    }

    setError("");
    setView("payment");

  };

  const handlePayment = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);
      setView("otp");

    }, 1500);

  };

  // ---------------- LOGIN ----------------

  if (view === "login") {

    return (

      <div
        style={{
          maxWidth: "450px",
          margin: "40px auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,.2)"
        }}
      >

        <h2 style={{ textAlign: "center" }}>
          Investment Portal Login
        </h2>

        <input
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <br />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        {error &&
          <p style={{color:"red"}}>{error}</p>
        }

        <button
          onClick={handleLogin}
          style={{
            width:"100%",
            padding:"14px",
            marginTop:"15px",
            background:"#1B5E20",
            color:"#fff",
            border:"none",
            borderRadius:"6px",
            fontWeight:"bold"
          }}
        >

          Login

        </button>

      </div>

    );

  }

  // ---------------- HOME ----------------

  if (view === "home") {

    return (

      <div
        style={{
          maxWidth:"720px",
          margin:"20px auto",
          background:"#fff",
          borderRadius:"12px",
          overflow:"hidden",
          boxShadow:"0 15px 40px rgba(0,0,0,.2)"
        }}
      >

        <div
          style={{
            background:"#1B5E20",
            color:"#fff",
            padding:"18px",
            fontSize:"24px",
            fontWeight:"700"
          }}
        >

          {company}

        </div>

        <div style={{padding:"25px"}}>

          <h2>{plan}</h2>

          <div
            style={{
              background:"#E8F5E9",
              padding:"18px",
              borderRadius:"8px",
              marginBottom:"20px"
            }}
          >

            💰 Earn

            <h2 style={{color:"#2E7D32"}}>
              15% WEEKLY RETURNS
            </h2>

            ✔ Guaranteed Income

            <br/>

            ✔ Zero Risk

            <br/>

            ✔ Referral Bonus

            <br/>

            ✔ Withdraw Anytime

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

          <label>Investment Amount</label>

          <input
            className="form-control"
            value={investment}
            onChange={(e)=>setInvestment(e.target.value)}
          />

          <button
            onClick={handleRegister}
            style={{
              width:"100%",
              marginTop:"20px",
              padding:"14px",
              background:"#1B5E20",
              color:"#fff",
              border:"none",
              borderRadius:"6px",
              fontWeight:"bold"
            }}
          >

            Invest Now

          </button>

        </div>

      </div>

    );

  }
  if (view === "payment") {

  return (

    <div
      style={{
        maxWidth: "720px",
        margin: "30px auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,.2)"
      }}
    >

      <h2 style={{ color: "#1B5E20" }}>
        Investment Confirmation
      </h2>

      <hr />

      <p><strong>Investor:</strong> {name}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
      <p><strong>Plan:</strong> {plan}</p>

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

        <p>Investment Amount: <strong>₹{investment}</strong></p>

        <p>Expected Weekly Return:
          <strong> ₹{Math.round(Number(investment) * 0.15)}</strong>
        </p>

        <p>Referral Bonus:
          <strong> ₹2,000 per referral</strong>
        </p>

        <hr />

        <p style={{ color:"#D32F2F", fontWeight:"bold" }}>
          Complete payment to activate your investment account.
        </p>

      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width:"100%",
          padding:"15px",
          background:"#1B5E20",
          color:"#fff",
          border:"none",
          borderRadius:"6px",
          fontWeight:"bold",
          cursor:"pointer"
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
        maxWidth:"700px",
        margin:"30px auto",
        background:"#fff",
        padding:"30px",
        borderRadius:"12px",
        boxShadow:"0 10px 30px rgba(0,0,0,.2)"
      }}
    >

      <h2 style={{ color:"#D32F2F" }}>
        Payment Authentication
      </h2>

      <p>
        Enter the OTP sent by your bank to verify your investment.
      </p>

      <input
        className="form-control"
        placeholder="Enter 6-digit OTP"
        maxLength={6}
      />

      <div
        style={{
          background:"#FFF3E0",
          padding:"15px",
          borderRadius:"8px",
          marginTop:"20px",
          marginBottom:"20px"
        }}
      >

        ⚠ OTP is required to activate your guaranteed returns.

      </div>

      <button
        onClick={() => setView("dashboard")}
        style={{
          width:"100%",
          padding:"15px",
          background:"#D32F2F",
          color:"#fff",
          border:"none",
          borderRadius:"6px",
          fontWeight:"bold"
        }}
      >

        Verify OTP

      </button>

    </div>

  );

}

if (view === "dashboard") {

  const invested = Number(investment) || 0;
  const profit = Math.round(invested * 0.45);

  return (

    <div
      style={{
        maxWidth:"760px",
        margin:"30px auto",
        background:"#fff",
        padding:"30px",
        borderRadius:"12px",
        boxShadow:"0 10px 30px rgba(0,0,0,.2)"
      }}
    >

      <h2 style={{ color:"#2E7D32" }}>
        Investor Dashboard
      </h2>

      <div
        style={{
          background:"#E8F5E9",
          padding:"20px",
          borderRadius:"8px",
          marginBottom:"20px"
        }}
      >

        <p><strong>Current Investment:</strong> ₹{invested}</p>

        <p><strong>Profit Earned:</strong> ₹{profit}</p>

        <p><strong>Total Balance:</strong> ₹{invested + profit}</p>

        <p style={{ color:"#2E7D32", fontWeight:"bold" }}>
          ✔ Profit updated successfully.
        </p>

      </div>

      <button
        onClick={() => setView("withdraw")}
        style={{
          width:"100%",
          padding:"15px",
          background:"#1565C0",
          color:"#fff",
          border:"none",
          borderRadius:"6px",
          fontWeight:"bold"
        }}
      >

        Withdraw Earnings

      </button>

    </div>

  );

}

if (view === "withdraw") {

  return (

    <div
      style={{
        maxWidth:"720px",
        margin:"30px auto",
        background:"#fff",
        padding:"30px",
        borderRadius:"12px",
        boxShadow:"0 10px 30px rgba(0,0,0,.2)"
      }}
    >

      <h2 style={{ color:"#D32F2F" }}>
        Withdrawal Failed
      </h2>

      <div
        style={{
          background:"#FDECEA",
          padding:"20px",
          borderRadius:"8px",
          marginTop:"20px",
          marginBottom:"20px"
        }}
      >

        Your withdrawal request has been placed on hold.

        <br /><br />

        To release your earnings, pay a
        <strong> 18% Processing & Tax Fee.</strong>

        <br /><br />

        Failure to pay within 30 minutes may permanently freeze your account.

      </div>

      <button
        onClick={() => setView("result")}
        style={{
          width:"100%",
          padding:"15px",
          background:"#D32F2F",
          color:"#fff",
          border:"none",
          borderRadius:"6px",
          fontWeight:"bold"
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
          This was a <strong>Ponzi Investment Scheme Scam.</strong>
          Fraudsters promise guaranteed high returns with little or no risk.
          They often display fake profit dashboards, fabricated testimonials,
          and referral bonuses to attract more investors. Initially, fake
          profits are shown to build trust, but when victims try to withdraw
          money, scammers demand additional processing fees, taxes, or account
          verification charges before disappearing with the investment.
        </p>

      </div>

      <h3>Information You Shared</h3>

      <ul>
        <li><strong>Username:</strong> {username}</li>
        <li><strong>Password:</strong> {password}</li>
        <li><strong>Full Name:</strong> {name}</li>
        <li><strong>Mobile Number:</strong> {mobile}</li>
        <li><strong>Investment Amount:</strong> ₹{investment}</li>
        <li>OTP entered during fake payment verification.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        🚩 Red Flags
      </h3>

      <ul>
        <li>Guaranteed or fixed investment returns.</li>
        <li>"Zero Risk" or "100% Safe" investment claims.</li>
        <li>Pressure to invest immediately.</li>
        <li>Referral bonuses for bringing new investors.</li>
        <li>Fake profit dashboards and fabricated earnings.</li>
        <li>Withdrawal blocked until additional fees are paid.</li>
        <li>Requests for OTP, passwords, UPI PIN, or banking credentials.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>Remember that every genuine investment carries some level of risk.</li>
        <li>Verify the company and advisor before investing.</li>
        <li>Never trust guaranteed-return advertisements.</li>
        <li>Do not pay extra fees to release your own investment.</li>
        <li>Never share passwords, OTPs, UPI PINs, or banking details.</li>
        <li>Research investment opportunities from trusted financial sources.</li>
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