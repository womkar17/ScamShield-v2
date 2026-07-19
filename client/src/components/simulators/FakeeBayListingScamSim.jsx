import React, { useState } from "react";

export default function FakeeBayListingScamSim({ onComplete }) {

  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const product = "Apple iPhone 15 Pro";
  const originalPrice = "99,999";
  const offerPrice = "34,999";

  const handleContinue = () => {

    if (!name || !email || !mobile || !address) {
      setError("Please fill all required details.");
      return;
    }

    setError("");
    setView("checkout");

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
            background: "#0064D2",
            color: "#fff",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "700"
          }}
        >

          eBay Mega Deal

        </div>

        <div style={{ padding: "25px" }}>

          <h2>{product}</h2>

          <p>
            ⭐⭐⭐⭐⭐ Seller Rating: 4.9/5
          </p>

          <div
            style={{
              background: "#E3F2FD",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >

            🔥 Flash Sale

            <br /><br />

            <span style={{ textDecoration: "line-through" }}>
              ₹{originalPrice}
            </span>

            <h2 style={{ color: "#D32F2F" }}>
              ₹{offerPrice}
            </h2>

            Offer expires in 10 minutes.

          </div>

          <label>Full Name</label>

          <input
            className="form-control"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <label>Email</label>

          <input
            className="form-control"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label>Mobile Number</label>

          <input
            className="form-control"
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
          />

          <label>Delivery Address</label>

          <textarea
            rows="3"
            className="form-control"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />

          {error &&

            <p style={{ color: "red" }}>
              {error}
            </p>

          }

          <button
            onClick={handleContinue}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px",
              background: "#0064D2",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "700"
            }}
          >

            Buy Now

          </button>

        </div>

      </div>

    );

  }
  if (view === "checkout") {

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

      <h2 style={{ color: "#0064D2" }}>
        Checkout
      </h2>

      <hr />

      <p><strong>Product:</strong> {product}</p>
      <p><strong>Customer:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Delivery Address:</strong> {address}</p>

      <div
        style={{
          background: "#E3F2FD",
          padding: "18px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        <h3>Order Summary</h3>

        <p>Product Price: ₹{offerPrice}</p>
        <p>Shipping: FREE</p>
        <p><strong>Total: ₹{offerPrice}</strong></p>

        <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
          Complete payment within 5 minutes to secure this deal.
        </p>

      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: "#0064D2",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >

        {loading ? "Processing..." : `Pay ₹${offerPrice}`}

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
        Your payment is awaiting bank verification.
      </p>

      <p>
        Enter the 6-digit OTP sent to your registered mobile number.
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

        ⚠ Fraudsters often create fake checkout pages to steal payment details and OTPs.

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
          This was a fake eBay listing. The attractive price, fake seller
          ratings, and urgency were designed to convince you to pay before
          verifying the listing. The scammers collected your personal
          information and payment without intending to deliver any product.
        </p>

      </div>

      <h3>Information You Shared</h3>

      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Mobile Number:</strong> {mobile}</li>
        <li><strong>Delivery Address:</strong> {address}</li>
        <li><strong>Product:</strong> {product}</li>
        <li><strong>Amount Paid:</strong> ₹{offerPrice}</li>
        <li>OTP entered during fake payment verification.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        🚩 Red Flags
      </h3>

      <ul>
        <li>Huge discount compared to the market price.</li>
        <li>Pressure to complete payment within a few minutes.</li>
        <li>Fake seller ratings and reviews.</li>
        <li>Suspicious or unofficial website URL.</li>
        <li>Payment requested before verifying authenticity.</li>
        <li>OTP requested during a fake checkout process.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>Purchase only from trusted and verified marketplaces.</li>
        <li>Check the website URL carefully before making a payment.</li>
        <li>Compare prices—extremely low prices are a warning sign.</li>
        <li>Read genuine seller reviews from multiple sources.</li>
        <li>Never share OTP, CVV, UPI PIN, or banking credentials.</li>
        <li>Use secure payment methods that offer buyer protection.</li>
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
          <strong>Answer:</strong> An unrealistically low price combined with pressure to pay immediately.
        </p>

        <hr />

        <p>
          <strong>2.</strong> Should you trust seller ratings shown on an unknown website?
        </p>

        <p>
          <strong>Answer:</strong> No. Fake websites often display fabricated reviews and ratings.
        </p>

        <hr />

        <p>
          <strong>3.</strong> What should you do before making an online purchase?
        </p>

        <p>
          <strong>Answer:</strong> Verify the website, seller authenticity, reviews, and payment security.
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