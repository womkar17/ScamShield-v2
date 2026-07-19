import React, { useState } from "react";

export default function OLXCourierScamSim({ onComplete }) {

  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const product = "Honda Activa 6G";
  const price = "38,000";
  const courierCharge = "2,100";

  const handleContinue = () => {

    if (!name || !mobile || !address) {
      setError("Please fill all required details.");
      return;
    }

    setError("");
    setView("courier");

  };

  const handlePayment = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);
      setView("tracking");

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
            background: "#0D47A1",
            color: "#fff",
            padding: "18px",
            fontSize: "24px",
            fontWeight: "700"
          }}
        >

          OLX Vehicle Deal

        </div>

        <div style={{ padding: "25px" }}>

          <h2>{product}</h2>

          <p>
            Price: <strong>₹{price}</strong>
          </p>

          <div
            style={{
              background: "#E3F2FD",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >

            🚚 Seller says:

            <br /><br />

            "I'm an army officer posted to another city.
            I've already shipped the vehicle through a military courier.
            Pay the refundable courier charge to receive the bike."

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
              background: "#0D47A1",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "700"
            }}
          >

            View Courier Details

          </button>

        </div>

      </div>

    );

  }
  if (view === "courier") {

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

      <h2 style={{ color: "#0D47A1" }}>
        Courier Confirmation
      </h2>

      <hr />

      <p><strong>Product:</strong> {product}</p>
      <p><strong>Buyer:</strong> {name}</p>
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

        <h3>Courier Charges</h3>

        <p>Vehicle Price: ₹{price}</p>
        <p>Refundable Courier Fee: ₹{courierCharge}</p>

        <hr />

        <p style={{ color: "#D32F2F", fontWeight: "bold" }}>
          Pay ₹{courierCharge} now.
          The amount will be refunded upon delivery.
        </p>

        <p>
          Tracking ID:
          <strong> OLX45896231IN</strong>
        </p>

      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: "#0D47A1",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >

        {loading ? "Processing..." : `Pay ₹${courierCharge}`}

      </button>

    </div>

  );

}

if (view === "tracking") {

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

      <h2 style={{ color: "#2E7D32" }}>
        Shipment Tracking
      </h2>

      <div
        style={{
          background: "#E8F5E9",
          padding: "18px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >

        <p><strong>Tracking ID:</strong> OLX45896231IN</p>

        <p>Status:
          <strong> Awaiting Security Verification</strong>
        </p>

        <p>
          To release the shipment, enter the OTP sent by your bank to
          verify the refundable courier payment.
        </p>

      </div>

      <input
        className="form-control"
        placeholder="Enter 6-digit OTP"
        maxLength={6}
      />

      <button
        onClick={() => setView("result")}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "14px",
          background: "#D32F2F",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >

        Verify & Release Shipment

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
          This was a fake OLX courier scam. The scammer pretended to be an
          army officer and claimed the vehicle had already been shipped.
          They demanded a "refundable courier fee" and then asked for an OTP
          to steal money from your account. There was never any vehicle or
          courier shipment.
        </p>

      </div>

      <h3>Information You Shared</h3>

      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Mobile Number:</strong> {mobile}</li>
        <li><strong>Delivery Address:</strong> {address}</li>
        <li><strong>Product:</strong> {product}</li>
        <li><strong>Vehicle Price:</strong> ₹{price}</li>
        <li><strong>Courier Fee Paid:</strong> ₹{courierCharge}</li>
        <li>OTP entered during fake verification.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        🚩 Red Flags
      </h3>

      <ul>
        <li>Seller claimed to be an army officer to build trust.</li>
        <li>Asked for a refundable courier or security deposit.</li>
        <li>Refused to meet in person or allow inspection.</li>
        <li>Shared fake courier receipts and tracking IDs.</li>
        <li>Created urgency to make immediate payment.</li>
        <li>Requested an OTP to "release" the shipment.</li>
      </ul>

      <h3 style={{ marginTop: "25px" }}>
        ✅ Safety Tips
      </h3>

      <ul>
        <li>Never pay courier or security charges in advance.</li>
        <li>Meet the seller in person whenever possible.</li>
        <li>Inspect the vehicle or product before paying.</li>
        <li>Verify ownership and original documents.</li>
        <li>Never share OTP, UPI PIN, CVV, or banking credentials.</li>
        <li>Be cautious when someone claims to be an army officer and asks for advance payment.</li>
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
          <strong>1.</strong> Should you pay a refundable courier fee before receiving the product?
        </p>

        <p>
          <strong>Answer:</strong> No. Genuine sellers don't ask buyers to pay refundable courier charges.
        </p>

        <hr />

        <p>
          <strong>2.</strong> Why do scammers often pretend to be army officers?
        </p>

        <p>
          <strong>Answer:</strong> To gain trust quickly and make victims believe the offer is genuine.
        </p>

        <hr />

        <p>
          <strong>3.</strong> What should you do before buying expensive items on OLX?
        </p>

        <p>
          <strong>Answer:</strong> Meet the seller, inspect the item, verify documents, and avoid advance payments.
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