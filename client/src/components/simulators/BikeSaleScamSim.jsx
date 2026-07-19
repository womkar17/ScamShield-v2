import React, { useState } from "react";

export default function BikeSaleScamSim({ onComplete }) {

  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const bike = "Royal Enfield Classic 350";
  const originalPrice = "1,85,000";
  const salePrice = "72,000";
  const bookingAmount = "5,000";

  const handleContinue = () => {

    if (!name || !mobile || !address) {
      setError("Please fill all required details.");
      return;
    }

    setError("");
    setView("booking");

  };

  const handleBooking = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);
      setView("payment");

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
            background: "#37474F",
            color: "#fff",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "700"
          }}
        >

          Used Bike Sale

        </div>

        <div style={{ padding: "25px" }}>

          <h2>{bike}</h2>

          <p>
            ⭐ Excellent Condition • Single Owner
          </p>

          <div
            style={{
              background: "#ECEFF1",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >

            <h3 style={{ margin: 0 }}>Special Offer</h3>

            <p>
              <span style={{ textDecoration: "line-through" }}>
                ₹{originalPrice}
              </span>
            </p>

            <h2 style={{ color: "#D32F2F" }}>
              ₹{salePrice}
            </h2>

            Reserve today with a refundable booking amount of
            <strong> ₹{bookingAmount}</strong>.

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
              background: "#37474F",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "700"
            }}
          >

            Reserve Bike

          </button>

        </div>

      </div>

    );

  }
  if (view === "booking") {

  return (

    <div
      style={{
        maxWidth: "680px",
        margin: "30px auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,.2)"
      }}
    >

      <h2 style={{ color: "#37474F" }}>
        Booking Confirmation
      </h2>

      <hr />

      <p><strong>Buyer:</strong> {name}</p>
      <p><strong>Bike:</strong> {bike}</p>
      <p><strong>Sale Price:</strong> ₹{salePrice}</p>

      <div
        style={{
          background: "#ECEFF1",
          padding: "18px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        <h3>Reserve Your Bike</h3>

        <p>
          To reserve this bike, pay a refundable booking amount of
          <strong> ₹{bookingAmount}</strong>.
        </p>

        <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
          Hurry! Multiple buyers are interested. Your reservation expires in 10 minutes.
        </p>

      </div>

      <button
        onClick={handleBooking}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: "#37474F",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >

        {loading ? "Processing..." : `Pay ₹${bookingAmount}`}

      </button>

    </div>

  );

}

if (view === "payment") {

  return (

    <div
      style={{
        maxWidth: "680px",
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
        Your booking amount has been received.
      </p>

      <p>
        Enter the 6-digit OTP sent by your bank to confirm your reservation.
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

        ⚠ Genuine sellers never ask you to share your banking OTP.

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
        maxWidth: "760px",
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
          This was a fake bike sale scam. The seller used an attractive price,
          urgency, and a “refundable booking amount” to trick you into paying.
          After payment and OTP entry, the scammer collects money and disappears.
          No bike actually exists.
        </p>

      </div>

      <h3>Information You Shared</h3>

      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Mobile Number:</strong> {mobile}</li>
        <li><strong>Delivery Address:</strong> {address}</li>
        <li><strong>Bike:</strong> {bike}</li>
        <li><strong>Booking Amount Paid:</strong> ₹{bookingAmount}</li>
        <li>OTP entered during fake verification process.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        🚩 Red Flags
      </h3>

      <ul>
        <li>Price was far below market value.</li>
        <li>Seller demanded “refundable booking amount”.</li>
        <li>Urgency created using fake demand pressure.</li>
        <li>No physical inspection allowed before payment.</li>
        <li>OTP requested for “confirmation”.</li>
        <li>Communication only online with unknown seller.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>Always inspect the bike in person before paying.</li>
        <li>Never pay booking fees to unknown sellers.</li>
        <li>Verify RC (Registration Certificate) and ownership.</li>
        <li>Meet in safe public locations or RTO-approved transfer.</li>
        <li>Never share OTP, UPI PIN, CVV, or banking details.</li>
        <li>Be cautious of deals that are “too good to be true”.</li>
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
          <strong>1.</strong> Should you pay booking amount to unknown sellers online?
        </p>

        <p>
          <strong>Answer:</strong> No. Always verify the vehicle in person first.
        </p>

        <hr />

        <p>
          <strong>2.</strong> Why do scammers use “refundable deposit” tricks?
        </p>

        <p>
          <strong>Answer:</strong> To make the payment feel safe and convincing.
        </p>

        <hr />

        <p>
          <strong>3.</strong> What is the safest way to buy a used bike?
        </p>

        <p>
          <strong>Answer:</strong> Inspect the bike, verify documents, and complete transfer via RTO process.
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