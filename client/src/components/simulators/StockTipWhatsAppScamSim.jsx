import React, { useState } from "react";

export default function StockTipWhatsAppScamSim({ onComplete }) {

  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [investment, setInvestment] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const groupName = "Elite Stock Tips VIP";
  const members = "2,487";
  const returns = "300%";

  const handleJoin = () => {

    if (!name || !mobile || !investment) {

      setError("Please fill all required details.");
      return;

    }

    setError("");
    setView("vip");

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
          maxWidth: "720px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 15px 40px rgba(0,0,0,.2)"
        }}
      >

        <div
          style={{
            background: "#25D366",
            color: "#fff",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "700"
          }}
        >

          WhatsApp Stock Tips Group

        </div>

        <div style={{ padding: "25px" }}>

          <h2>{groupName}</h2>

          <p>👥 {members} Members</p>

          <div
            style={{
              background: "#E8F5E9",
              padding: "18px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >

            📈 Guaranteed Returns

            <br /><br />

            Earn up to <strong>{returns}</strong> profit every month.

            <br /><br />

            Join today and receive exclusive insider stock tips.

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
            onClick={handleJoin}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px",
              background: "#25D366",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "700"
            }}
          >

            Join VIP Group

          </button>

        </div>

      </div>

    );

  }
  if (view === "vip") {

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

      <h2 style={{ color: "#25D366" }}>
        VIP Membership
      </h2>

      <hr />

      <p><strong>Member:</strong> {name}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
      <p><strong>Investment Plan:</strong> ₹{investment}</p>

      <div
        style={{
          background: "#E8F5E9",
          padding: "18px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        <h3>Exclusive Offer</h3>

        <p>
          Congratulations! You've been selected for our
          <strong> Premium VIP Trading Group.</strong>
        </p>

        <p>
          ✔ Daily Intraday Tips
          <br />
          ✔ IPO Priority Access
          <br />
          ✔ Guaranteed 300% Returns
          <br />
          ✔ "SEBI Approved Expert Team"
        </p>

        <hr />

        <p>
          VIP Registration Fee:
          <strong> ₹999</strong>
        </p>

        <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
          Today only! Limited VIP seats remaining.
        </p>

      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: "#25D366",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >

        {loading ? "Processing..." : "Pay ₹999"}

      </button>

    </div>

  );

}

if (view === "otp") {

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

      <h2 style={{ color: "#D32F2F" }}>
        Payment Verification
      </h2>

      <p>
        Your VIP membership payment is under verification.
      </p>

      <p>
        Enter the OTP sent by your bank to activate your trading account.
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

        ⚠ OTP is required to activate your premium trading membership.

      </div>

      <button
        onClick={() => setView("result")}
        style={{
          width: "100%",
          padding: "14px",
          background: "#D32F2F",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >

        Verify OTP

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
          This was a fake WhatsApp stock tips scam. Fraudsters create
          WhatsApp or Telegram groups with fake profit screenshots,
          fabricated testimonials, and false promises of guaranteed returns.
          They collect membership fees or convince victims to transfer
          large investment amounts into fake trading platforms. Once the
          payment is made, the scammers disappear or demand additional money.
        </p>

      </div>

      <h3>Information You Shared</h3>

      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Mobile Number:</strong> {mobile}</li>
        <li><strong>Claimed Investment Amount:</strong> ₹{investment}</li>
        <li><strong>VIP Membership Fee Paid:</strong> ₹999</li>
        <li>OTP entered during fake payment verification.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        🚩 Red Flags
      </h3>

      <ul>
        <li>Guaranteed profits or "300% monthly returns."</li>
        <li>Pressure to join VIP groups immediately.</li>
        <li>Fake profit screenshots and testimonials.</li>
        <li>Claims of "SEBI approved" without verification.</li>
        <li>Requests for membership fees before providing any service.</li>
        <li>Requests for OTP, UPI PIN, or banking credentials.</li>
        <li>Unknown WhatsApp or Telegram admins asking for investments.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>There are no guaranteed profits in the stock market.</li>
        <li>Verify whether any investment advisor is genuinely registered with SEBI.</li>
        <li>Never transfer money based only on WhatsApp or Telegram messages.</li>
        <li>Ignore fake screenshots showing extraordinary profits.</li>
        <li>Never share OTP, UPI PIN, passwords, or banking details.</li>
        <li>Invest only through trusted brokers and official trading platforms.</li>
      </ul>

      <div
        style={{
          background: "#E8F5E9",
          padding: "20px",
          borderRadius: "8px",
          marginTop: "25px"
        }}
      >

        <h3>Quick Quiz</h3>

        <p>
          <strong>1.</strong> Is anyone able to guarantee stock market returns?
        </p>

        <p>
          <strong>Answer:</strong> No. Stock market returns are never guaranteed.
        </p>

        <hr />

        <p>
          <strong>2.</strong> What should you verify before following investment advice?
        </p>

        <p>
          <strong>Answer:</strong> Check whether the advisor is genuinely registered with SEBI and use trusted investment platforms.
        </p>

        <hr />

        <p>
          <strong>3.</strong> Should you share OTP or UPI PIN to activate a trading account?
        </p>

        <p>
          <strong>Answer:</strong> Never. OTP and UPI PIN should never be shared with anyone.
        </p>

      </div>

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