import React, { useState } from "react";

export default function UsedCarScamSim({ onComplete }) {

  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const car = "Hyundai Creta SX Diesel";
  const originalPrice = "14,50,000";
  const offerPrice = "5,90,000";
  const tokenAmount = "10,000";

  const handleContinue = () => {

    if (!name || !mobile || !address) {
      setError("Please fill all required details.");
      return;
    }

    setError("");
    setView("deal");

  };

  const handleTokenPayment = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);
      setView("verification");

    }, 1500);

  };

  if (view === "home") {

    return (

      <div
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 15px 40px rgba(0,0,0,.2)"
        }}
      >

        <div
          style={{
            background: "#1B5E20",
            color: "#fff",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "700"
          }}
        >

          Used Car Marketplace

        </div>

        <div style={{ padding: "25px" }}>

          <h2>{car}</h2>

          <p>⭐⭐⭐⭐⭐ Verified Seller • Single Owner</p>

          <div
            style={{
              background: "#E8F5E9",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >

            <h3>🔥 Limited Time Deal</h3>

            <p>
              <span style={{ textDecoration: "line-through" }}>
                ₹{originalPrice}
              </span>
            </p>

            <h2 style={{ color: "#D32F2F" }}>
              ₹{offerPrice}
            </h2>

            <p>
              Token booking required: <strong>₹{tokenAmount}</strong>
            </p>

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
            rows="3"
            className="form-control"
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
              padding: "15px",
              background: "#1B5E20",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "700"
            }}
          >

            View Deal

          </button>

        </div>

      </div>

    );

  }
  if (view === "deal") {

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

      <h2 style={{ color: "#1B5E20" }}>
        Deal Confirmation
      </h2>

      <hr />

      <p><strong>Car:</strong> {car}</p>
      <p><strong>Buyer:</strong> {name}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
      <p><strong>Address:</strong> {address}</p>

      <div
        style={{
          background: "#E8F5E9",
          padding: "18px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        <h3>Seller Message</h3>

        <p>
          “I am currently out of station. The car is already packed for delivery.
          You just need to pay a refundable token amount to block the car.”
        </p>

        <hr />

        <p><strong>Token Amount:</strong> ₹{tokenAmount}</p>

        <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
          Pay now to reserve your vehicle. Multiple buyers are interested.
        </p>

      </div>

      <button
        onClick={handleTokenPayment}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: "#1B5E20",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >

        {loading ? "Processing..." : `Pay ₹${tokenAmount}`}

      </button>

    </div>

  );

}

if (view === "verification") {

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
        Your token payment is under processing.
      </p>

      <p>
        Enter the OTP sent by your bank to confirm your booking.
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

        ⚠ OTP is required to "release" the car from seller verification system.

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
          This was a fake used car scam. The seller used a fake “out of station”
          story and demanded a token amount to reserve the car. After payment
          and OTP entry, the scammer disappears. No car is ever delivered.
        </p>

      </div>

      <h3>Information You Shared</h3>

      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Mobile:</strong> {mobile}</li>
        <li><strong>Address:</strong> {address}</li>
        <li><strong>Car:</strong> {car}</li>
        <li><strong>Token Amount Paid:</strong> ₹{tokenAmount}</li>
        <li>OTP entered during fake verification process.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        🚩 Red Flags
      </h3>

      <ul>
        <li>Seller claimed to be out of station and refused physical meeting.</li>
        <li>Demanded refundable token amount before inspection.</li>
        <li>Unrealistically low car price compared to market value.</li>
        <li>Pressure created using “multiple buyers interested” message.</li>
        <li>OTP requested for “booking confirmation”.</li>
        <li>No proper documentation or test drive offered.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>Always inspect the car in person before paying anything.</li>
        <li>Verify RC, insurance, and ownership details.</li>
        <li>Never pay token or advance money to unknown sellers.</li>
        <li>Meet at a safe public place or authorized showroom.</li>
        <li>Never share OTP, UPI PIN, CVV, or bank details.</li>
        <li>Be cautious of deals that are significantly below market price.</li>
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
          <strong>1.</strong> Should you pay a token amount before inspecting a used car?
        </p>

        <p>
          <strong>Answer:</strong> No. Always inspect the vehicle first.
        </p>

        <hr />

        <p>
          <strong>2.</strong> Why do scammers say they are “out of station”?
        </p>

        <p>
          <strong>Answer:</strong> To avoid physical verification and push online payment.
        </p>

        <hr />

        <p>
          <strong>3.</strong> What is the safest way to buy a used car?
        </p>

        <p>
          <strong>Answer:</strong> Physical inspection, document verification, and secure transfer.
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