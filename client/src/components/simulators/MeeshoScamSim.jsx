import React, { useState } from "react";

export default function MeeshoScamSim({ onComplete }) {

  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [product, setProduct] = useState("Wireless Earbuds");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {

    if (!name || !mobile || !address) {
      setError("Please fill all details.");
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
          maxWidth: "700px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 15px 40px rgba(0,0,0,.2)"
        }}
      >

        <div
          style={{
            background: "#9C27B0",
            color: "#fff",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "700"
          }}
        >

          Meesho Flash Sale

        </div>

        <div style={{ padding: "25px" }}>

          <h2>Limited Time Deal</h2>

          <p>
            Buy premium Wireless Earbuds worth ₹2,999 for just ₹199.
          </p>

          <div
            style={{
              background: "#F3E5F5",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >

            🔥 Only today! 93% OFF.

            <br /><br />

            Complete payment within 5 minutes to reserve your order.

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

          <label>Delivery Address</label>

          <textarea
            className="form-control"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {error && (
            <p style={{ color: "red" }}>{error}</p>
          )}

          <button
            onClick={handleContinue}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "14px",
              background: "#9C27B0",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "700"
            }}
          >

            Continue

          </button>

        </div>

      </div>

    );

  }
  if (view === "offer") {

  return (

    <div
      style={{
        maxWidth: "650px",
        margin: "30px auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,.2)"
      }}
    >

      <h2 style={{ color: "#9C27B0" }}>
        Order Summary
      </h2>

      <hr />

      <p><strong>Customer:</strong> {name}</p>
      <p><strong>Product:</strong> {product}</p>
      <p><strong>Price:</strong> ₹199</p>
      <p><strong>Delivery:</strong> FREE</p>

      <div
        style={{
          background: "#F3E5F5",
          padding: "18px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        <h3>Special Flash Sale</h3>

        <p>
          Your product has been reserved for the next
          <strong> 5 minutes.</strong>
        </p>

        <p style={{ color: "red", fontWeight: "bold" }}>
          Complete payment now or your order will be cancelled.
        </p>

      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: "#9C27B0",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >

        {loading ? "Processing..." : "Pay ₹199"}

      </button>

    </div>

  );

}

if (view === "otp") {

  return (

    <div
      style={{
        maxWidth: "650px",
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
        Your payment is almost complete.
      </p>

      <p>
        Enter the 6-digit OTP received from your bank to confirm the transaction.
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

        ⚠ Never share your banking OTP with anyone.

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
        maxWidth: "750px",
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
          This was a fake Meesho shopping website designed to steal your
          payment and personal information. The huge discount and urgency
          were used to pressure you into making a quick payment.
        </p>

      </div>

      <h3>Information You Shared</h3>

      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Mobile Number:</strong> {mobile}</li>
        <li><strong>Delivery Address:</strong> {address}</li>
        <li><strong>Product Selected:</strong> {product}</li>
        <li><strong>Amount Paid:</strong> ₹199</li>
        <li>OTP requested during fake payment verification.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        🚩 Red Flags
      </h3>

      <ul>
        <li>Massive discount that looks too good to be true.</li>
        <li>Pressure to complete payment within a few minutes.</li>
        <li>Unverified shopping website pretending to be Meesho.</li>
        <li>Payment requested before confirming authenticity.</li>
        <li>OTP requested after payment.</li>
        <li>No official order ID or verified seller information.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>Shop only through the official Meesho app or website.</li>
        <li>Check the website URL carefully before making payments.</li>
        <li>Be cautious of unrealistic discounts.</li>
        <li>Never share OTP, UPI PIN, CVV, or banking credentials.</li>
        <li>Verify seller ratings and customer reviews.</li>
        <li>Use secure payment methods offered by trusted platforms.</li>
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
          <strong>1.</strong> What is the biggest warning sign in this scam?
        </p>

        <p>
          <strong>Answer:</strong> An unrealistic discount combined with pressure to pay immediately.
        </p>

        <hr />

        <p>
          <strong>2.</strong> Should you share a banking OTP to complete an online order?
        </p>

        <p>
          <strong>Answer:</strong> No. OTPs should never be shared for shopping verification.
        </p>

        <hr />

        <p>
          <strong>3.</strong> Where should you shop safely?
        </p>

        <p>
          <strong>Answer:</strong> Only through the official Meesho app or website and trusted sellers.
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