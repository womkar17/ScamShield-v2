import React, { useState } from "react";

export default function FakeAirbnbScamSim({ onComplete }) {

  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const property = "Sea View Luxury Apartment";
  const location = "Goa Beachfront";
  const pricePerNight = "1,299";

  const handleContinue = () => {

    if (!name || !mobile || !email || !checkIn || !checkOut) {
      setError("Please fill all required details.");
      return;
    }

    setError("");
    setView("booking");

  };

  const handleBook = () => {

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
            background: "#FF5A5F",
            color: "#fff",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "700"
          }}
        >

          Airbnb Special Deal

        </div>

        <div style={{ padding: "25px" }}>

          <h2>{property}</h2>

          <p>{location}</p>

          <div
            style={{
              background: "#FFEAEA",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >

            🔥 Limited Offer

            <br /><br />

            ₹{pricePerNight} per night

            <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
              80% discount for early booking only today.
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

          <label>Email</label>

          <input
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Check-in</label>

          <input
            type="date"
            className="form-control"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />

          <label>Check-out</label>

          <input
            type="date"
            className="form-control"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
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
              background: "#FF5A5F",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "700"
            }}
          >

            Book Now

          </button>

        </div>

      </div>

    );

  }
  if (view === "booking") {

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

      <h2 style={{ color: "#FF5A5F" }}>
        Booking Confirmation
      </h2>

      <hr />

      <p><strong>Property:</strong> {property}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Guest:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Check-in:</strong> {checkIn}</p>
      <p><strong>Check-out:</strong> {checkOut}</p>

      <div
        style={{
          background: "#FFEAEA",
          padding: "18px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        <h3>Host Message</h3>

        <p>
          “Due to high demand, Airbnb requires a refundable security deposit
          to confirm your booking instantly.”
        </p>

        <hr />

        <p>
          Security Deposit Required:
          <strong> ₹2,500</strong>
        </p>

        <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
          Pay now to avoid automatic cancellation of your booking.
        </p>

      </div>

      <button
        onClick={handleBook}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: "#FF5A5F",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >

        {loading ? "Processing..." : "Pay ₹2,500"}

      </button>

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

      <h2 style={{ color: "#D32F2F" }}>
        Security Verification
      </h2>

      <p>
        Your payment is being processed.
      </p>

      <p>
        Enter the OTP sent by your bank to confirm your booking deposit.
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

        ⚠ Airbnb or hosts never ask for OTP outside the official app.

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
          This was a fake Airbnb booking scam. The scammer pretended to be a host
          and demanded a refundable security deposit. After collecting payment and OTP,
          the scammer disappears. The booking never existed outside the fake page.
        </p>

      </div>

      <h3>Information You Shared</h3>

      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Mobile:</strong> {mobile}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Property:</strong> {property}</li>
        <li><strong>Location:</strong> {location}</li>
        <li><strong>Check-in:</strong> {checkIn}</li>
        <li><strong>Check-out:</strong> {checkOut}</li>
        <li><strong>Deposit Paid:</strong> ₹2,500</li>
        <li>OTP entered during fake verification process.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        🚩 Red Flags
      </h3>

      <ul>
        <li>Request for “refundable security deposit” outside official platform.</li>
        <li>Pressure to pay immediately to avoid cancellation.</li>
        <li>No official Airbnb app or verified booking confirmation.</li>
        <li>OTP requested for payment confirmation.</li>
        <li>Deal significantly cheaper than normal market rates.</li>
        <li>Communication moved outside trusted platform.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>Always complete bookings only inside official Airbnb app or website.</li>
        <li>Never pay deposits directly to hosts outside the platform.</li>
        <li>Do not share OTP, UPI PIN, CVV, or bank details.</li>
        <li>Verify host identity and reviews carefully.</li>
        <li>Be cautious of urgent payment demands.</li>
        <li>If unsure, contact Airbnb support directly.</li>
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
          <strong>1.</strong> Should you pay a security deposit outside Airbnb app?
        </p>

        <p>
          <strong>Answer:</strong> No. All payments must be done inside the official platform.
        </p>

        <hr />

        <p>
          <strong>2.</strong> Why do scammers use fake urgency?
        </p>

        <p>
          <strong>Answer:</strong> To prevent users from verifying details and thinking clearly.
        </p>

        <hr />

        <p>
          <strong>3.</strong> What is the safest way to book accommodation?
        </p>

        <p>
          <strong>Answer:</strong> Use official apps/websites and verified payment systems only.
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