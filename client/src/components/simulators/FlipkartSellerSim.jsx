import React, { useState } from "react";

export default function FlipkartSellerSim({ onComplete }) {
  const [view, setView] = useState("listing");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ ADDED: Missing state variables for UPI and OTP verification
  const [upiNumber, setUpiNumber] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otp, setOtp] = useState("");
  const [upiVerified, setUpiVerified] = useState(false);

  const bikeDetails = {
    name: "Royal Enfield Classic 350",
    condition: "Excellent Condition",
    owner: "Single Owner",
    originalPrice: "₹1,85,000",
    salePrice: "₹72,000",
    bookingAmount: "₹5,000"
  };

  // --- Layout Styles ---
  const container = {
    maxWidth: "700px",
    margin: "20px auto",
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0,0,0,.2)",
    fontFamily: "Segoe UI, sans-serif"
  };

  const header = {
    background: "#2874F0",
    color: "#fff",
    padding: "18px",
    fontSize: "24px",
    fontWeight: "700",
    textAlign: "center"
  };

  const cardHeader = {
    background: "#37474F",
    color: "#fff",
    padding: "18px",
    fontSize: "22px",
    fontWeight: "700",
    textAlign: "center"
  };

  const body = { padding: "25px" };

  const offerBox = {
    background: "#F5F5F5",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    marginBottom: "25px"
  };

  const label = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
    fontSize: "14px",
    color: "#333"
  };

  const input = {
    width: "100%",
    padding: "10px 12px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "15px",
    boxSizing: "border-box"
  };

  const btn = {
    width: "100%",
    padding: "14px",
    background: "#37474F",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px"
  };

  const err = {
    color: "#d32f2f",
    fontSize: "14px",
    marginTop: "-8px",
    marginBottom: "12px",
    fontWeight: "500"
  };

  // --- Validations ---
  const validateMobile = (m) => /^[6-9]\d{9}$/.test(m);
  const validateOTP = (o) => /^\d{6}$/.test(o);
  const validateUPI = (upi) => /^\d{12}$/.test(upi);

  const handleVerifyUPI = () => {
    if (!validateUPI(upiNumber)) {
      setError("Enter a valid 12-digit UPI Number.");
      return;
    }

    const fakeOtp = "456789";
    setGeneratedOtp(fakeOtp);
    setError("");
    alert("Demo OTP: " + fakeOtp);
  };

  const handleVerifyOTP = () => {
    if (otp !== generatedOtp) {
      setError("Invalid OTP.");
      return;
    }

    setUpiVerified(true);
    setError("");
  };

  const handleReserve = () => {
    if (!fullName.trim()) return setError("Full Name is required.");
    if (!validateMobile(mobile)) return setError("Mobile must be exactly 10 digits (starting with 6-9).");
    if (!address.trim()) return setError("Delivery Address is required.");
    setError("");
    setView("confirmation");
  };

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView("result");
    }, 2000);
  };

  if (view === "listing") {
    return (
      <div style={container}>
        <div style={header}>Flipkart Seller Scam</div>

        <div style={body}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "25px",
              alignItems: "center",
            }}
          >
            {/* Bike Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=700"
                alt="Bike"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>

            {/* Product Details */}
            <div>
              <h2>{bikeDetails.name}</h2>
              <p>⭐⭐⭐⭐⭐ 4.8 (2,341 Ratings)</p>
              <p style={{ color: "green", fontWeight: "bold" }}>
                ✔ Verified Seller
              </p>
              <p>
                <strong>Condition:</strong> {bikeDetails.condition}
              </p>
              <p>
                <strong>Owner:</strong> {bikeDetails.owner}
              </p>
              <p
                style={{
                  textDecoration: "line-through",
                  color: "#777",
                }}
              >
                {bikeDetails.originalPrice}
              </p>
              <h2 style={{ color: "#d32f2f" }}>
                {bikeDetails.salePrice}
              </h2>
              <p style={{ color: "#d32f2f", fontWeight: "bold" }}>
                🔥 Only 1 bike left
              </p>
              <p>
                👀 12 people are viewing this item
              </p>
              <p style={{ color: "#ff5722" }}>
                ⏰ Offer Ends in 09:59
              </p>
              <p>
                🚚 Delivery within 2 Days
              </p>
              <p>
                💳 Booking Amount:
                <strong> {bikeDetails.bookingAmount}</strong>
              </p>
            </div>
          </div>

          <hr style={{ margin: "25px 0" }} />

          <label style={label}>Full Name</label>
          <input
            style={input}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter Full Name"
          />

          <label style={label}>Mobile Number</label>
          <input
            style={input}
            maxLength={10}
            value={mobile}
            onChange={(e) =>
              setMobile(
                e.target.value.replace(/\D/g, "")
              )
            }
            placeholder="10-digit Mobile Number"
          />

          <label style={label}>Delivery Address</label>
          <textarea
            style={{
              ...input,
              minHeight: "90px",
            }}
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
            placeholder="Enter Complete Address"
          />

          {error && (
            <p style={err}>{error}</p>
          )}

          <button
            style={btn}
            onClick={handleReserve}
          >
            Reserve Bike
          </button>
        </div>
      </div>
    );
  }

  if (view === "confirmation") {
    return (
      <div style={container}>
        <div style={header}>Flipkart Secure Payment</div>

        <div style={body}>
          <h2>UPI Authentication</h2>

          <label style={label}>12-digit UPI Number</label>
          <input
            style={input}
            value={upiNumber}
            maxLength={12}
            onChange={(e) =>
              setUpiNumber(e.target.value.replace(/\D/g, ""))
            }
            placeholder="Enter 12-digit UPI Number"
          />

          <button
            style={btn}
            disabled={!validateUPI(upiNumber)}
            onClick={handleVerifyUPI}
          >
            Verify UPI
          </button>

          {generatedOtp && (
            <>
              <label style={{ ...label, marginTop: 20 }}>
                Enter OTP
              </label>

              <input
                style={input}
                value={otp}
                maxLength={6}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, ""))
                }
                placeholder="6-digit OTP"
              />

              <button
                style={btn}
                onClick={handleVerifyOTP}
              >
                Verify OTP
              </button>
            </>
          )}

          {error && (
            <p style={err}>{error}</p>
          )}

          <button
            style={{
              ...btn,
              background: upiVerified
                ? "#2E7D32"
                : "#9E9E9E",
            }}
            disabled={!upiVerified}
            onClick={handlePayment}
          >
            Pay ₹5,000
          </button>
        </div>
      </div>
    );
  }

  if (view === "result") {
    return (
      <div style={{ ...container, maxWidth: "750px" }}>
        <div style={{ ...header, background: "#D32F2F" }}>⚠ Scam Revealed!</div>
        <div style={body}>
          <div style={{ background: "#FDECEA", color: "#C62828", padding: "20px", borderRadius: "8px", marginBottom: "25px" }}>
            <h2>This Was a Fake Listing!</h2>
            <p>This scam used an unrealistically low price for a popular bike to trick you into paying a "refundable" booking amount. Once paid, the scammers disappeared with your money.</p>
          </div>

          <h3>Information You Shared</h3>
          <ul>
            <li><strong>Full Name:</strong> {fullName}</li>
            <li><strong>Mobile Number:</strong> {mobile}</li>
            <li><strong>Delivery Address:</strong> {address}</li>
            <li><strong>Bike:</strong> {bikeDetails.name}</li>
            <li><strong>Amount Paid:</strong> {bikeDetails.bookingAmount}</li>
          </ul>

          <h3 style={{ marginTop: "25px" }}>🚩 Red Flags</h3>
          <ul>
            <li>Price too good to be true (₹72,000 vs market price ₹1,85,000).</li>
            <li>Pressure to pay immediately (10-minute deadline).</li>
            <li>Claim of "multiple buyers interested" to create urgency.</li>
            <li>Request for advance payment without verification.</li>
            <li>Unverified seller on a fake Flipkart page.</li>
            <li>"Refundable" booking amount that is never refunded.</li>
          </ul>

          <h3 style={{ marginTop: "25px" }}>✅ Safety Tips</h3>
          <ul>
            <li>Always verify the seller and meet in person before paying.</li>
            <li>Check market prices—extremely low prices are suspicious.</li>
            <li>Never pay advance booking amounts to unknown sellers.</li>
            <li>Use official platforms with buyer protection.</li>
            <li>Inspect the product thoroughly before making any payment.</li>
            <li>Be wary of urgency tactics and time pressure.</li>
          </ul>

          <div style={{ background: "#E8F5E9", padding: "20px", borderRadius: "8px", marginTop: "25px" }}>
            <h3>Quick Quiz</h3>
            <p><strong>1.</strong> What is the biggest warning sign in this scam?</p>
            <p><strong>Answer:</strong> An unrealistically low price combined with pressure to pay immediately.</p>
            <hr />
            <p><strong>2.</strong> Should you pay a "refundable" booking amount to an unknown seller?</p>
            <p><strong>Answer:</strong> No. Never pay any amount before verifying the seller and product in person.</p>
            <hr />
            <p><strong>3.</strong> What should you do before buying a used vehicle online?</p>
            <p><strong>Answer:</strong> Meet the seller, inspect the vehicle, verify documents, and use secure payment methods.</p>
          </div>

          <button 
            onClick={() => onComplete && onComplete()} 
            style={{ ...btn, background: "#2E7D32", marginTop: "30px" }}
          >
            Finish Simulation
          </button>
        </div>
      </div>
    );
  }

  return null;
}