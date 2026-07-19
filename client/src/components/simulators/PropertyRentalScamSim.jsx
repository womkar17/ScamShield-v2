import React, { useState } from "react";

export default function PropertyRentalScamSim({ onComplete }) {

  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [occupation, setOccupation] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const property = "1BHK Fully Furnished Apartment";
  const location = "Bandra West, Mumbai";
  const rent = "9,000";
  const deposit = "20,000";

  const handleContinue = () => {

    if (!name || !mobile || !occupation) {
      setError("Please fill all required details.");
      return;
    }

    setError("");
    setView("listing");

  };

  const handleAdvance = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);
      setView("agreement");

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
            background: "#6A1B9A",
            color: "#fff",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "700"
          }}
        >

          Rental Housing Portal

        </div>

        <div style={{ padding: "25px" }}>

          <h2>{property}</h2>

          <p>{location}</p>

          <div
            style={{
              background: "#F3E5F5",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >

            🔥 Limited Offer

            <br /><br />

            Rent: ₹{rent}/month  
            <br />
            Deposit: ₹{deposit} only (very low!)

            <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
              Book immediately — multiple tenants are interested.
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

          <label>Occupation</label>

          <input
            className="form-control"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
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
              background: "#6A1B9A",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "700"
            }}
          >

            View Property

          </button>

        </div>

      </div>

    );

  }
  if (view === "listing") {

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

      <h2 style={{ color: "#6A1B9A" }}>
        Property Details
      </h2>

      <hr />

      <p><strong>Property:</strong> {property}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Monthly Rent:</strong> ₹{rent}</p>
      <p><strong>Deposit:</strong> ₹{deposit}</p>
      <p><strong>Tenant:</strong> {name}</p>
      <p><strong>Occupation:</strong> {occupation}</p>

      <div
        style={{
          background: "#F3E5F5",
          padding: "18px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        <h3>Broker Message</h3>

        <p>
          “This property is in high demand. I am the official broker.
          You need to pay a small advance deposit to lock the flat before others take it.”
        </p>

        <hr />

        <p>
          Advance Deposit Required:
          <strong> ₹{deposit}</strong>
        </p>

        <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
          Pay now to confirm booking immediately.
        </p>

      </div>

      <button
        onClick={handleAdvance}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: "#6A1B9A",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >

        {loading ? "Processing..." : `Pay ₹${deposit}`}

      </button>

    </div>

  );

}

if (view === "agreement") {

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
        Rental Agreement Verification
      </h2>

      <p>
        Your deposit has been received successfully.
      </p>

      <p>
        To finalize the rental agreement, enter the OTP sent by your bank.
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

        ⚠ OTP is required to "activate" rental agreement and block the property.

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
          This was a fake property rental scam. The broker used a low rent
          offer and fake urgency to convince you to pay an advance deposit.
          After collecting the money and OTP, the scammer disappears and
          the property does not exist or is not available for rent.
        </p>

      </div>

      <h3>Information You Shared</h3>

      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Mobile:</strong> {mobile}</li>
        <li><strong>Occupation:</strong> {occupation}</li>
        <li><strong>Property:</strong> {property}</li>
        <li><strong>Location:</strong> {location}</li>
        <li><strong>Deposit Paid:</strong> ₹{deposit}</li>
        <li>OTP entered during fake rental verification.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        🚩 Red Flags
      </h3>

      <ul>
        <li>Extremely low rent in a high-demand area.</li>
        <li>Advance deposit demanded before visiting property.</li>
        <li>Fake “broker urgency” to pressure quick payment.</li>
        <li>No physical visit or property inspection allowed.</li>
        <li>OTP requested for “agreement activation”.</li>
        <li>No verified rental agreement or legal documentation.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>Always visit the property before paying any deposit.</li>
        <li>Verify ownership or broker identity properly.</li>
        <li>Never pay advance money to unknown brokers online.</li>
        <li>Use registered real estate agents or platforms.</li>
        <li>Never share OTP, UPI PIN, CVV, or banking credentials.</li>
        <li>Sign legal rental agreements before payment.</li>
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
          <strong>1.</strong> Should you pay a rental deposit before visiting the property?
        </p>

        <p>
          <strong>Answer:</strong> No. Always inspect the property first.
        </p>

        <hr />

        <p>
          <strong>2.</strong> Why do scammers use fake urgency?
        </p>

        <p>
          <strong>Answer:</strong> To stop you from thinking and push quick payment.
        </p>

        <hr />

        <p>
          <strong>3.</strong> What is the safest way to rent a house?
        </p>

        <p>
          <strong>Answer:</strong> Visit, verify ownership, and sign a legal agreement.
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