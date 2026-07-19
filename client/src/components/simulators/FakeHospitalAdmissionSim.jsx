import React, { useState, useEffect } from "react";

const FakeHospitalAdmissionSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    paymentMethod: "upi",
    upiId: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // Countdown timer logic for the fake hospital page
  useEffect(() => {
    if (view === 1 && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [view, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation to ensure fields aren't empty
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert("Please fill out all patient contact details.");
      return;
    }

    if (formData.paymentMethod === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID.");
      return;
    }

    if (
      formData.paymentMethod === "card" &&
      (!formData.cardNumber || !formData.expiry || !formData.cvv)
    ) {
      alert("Please enter complete card details.");
      return;
    }

    setLoading(true);

    // Simulate payment processing delay, then trigger completion
    setTimeout(() => {
      let exposedData = ["Full Name", "Phone Number", "Email Address"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The WhatsApp / SMS Phishing Lure
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.phoneScreen}>
          <div style={styles.chatHeader}>
            <div style={styles.chatHeaderLeft}>
              <div style={styles.backArrow}>←</div>
              <div style={styles.profilePic}>+91 98765 43210</div>
            </div>
          </div>
          <div style={styles.chatBody}>
            <div style={styles.dateStamp}>Today</div>
            <div style={styles.messageBubble}>
              <p style={{ margin: "0 0 10px 0", color: "#d93025", fontWeight: "bold" }}>
                🚨 EMERGENCY ALERT
              </p>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                Your emergency contact <strong>Mr. Rajesh Sharma</strong> has been admitted to CityCare Hospital following a severe road accident.
              </p>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                Admission ID: <strong>CH-2026-45891</strong><br />
                Required Deposit: <strong>₹25,000</strong>
              </p>
              <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#d93025" }}>
                *If payment is not received within 15 minutes, the emergency ICU bed will be released to another patient.*
              </p>
              <button
                style={styles.chatButton}
                onClick={() => setView(1)}
              >
                View Admission Details & Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Hospital Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "20px" }}>🏥 CityCare Hospitals</h2>
        <p style={{ margin: 0, color: "#e8eaed", fontSize: "12px" }}>24/7 Emergency Care</p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.warningBanner}>
          ⏳ <strong>Time Remaining: {formatTime(timeLeft)}</strong>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px" }}>
            Complete payment immediately to secure the ICU bed.
          </p>
        </div>

        <div style={styles.patientDetailsBox}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "16px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>
            Patient Admission Details
          </h3>
          <p style={styles.detailRow}><span>Patient Name:</span> <strong>Rajesh Sharma</strong></p>
          <p style={styles.detailRow}><span>Admission ID:</span> <strong>CH-2026-45891</strong></p>
          <p style={styles.detailRow}><span>Assigned Ward:</span> <strong>Trauma / ICU - Bed 4</strong></p>
          <p style={styles.detailRow}><span>Deposit Amount:</span> <strong style={{ color: "#d93025" }}>₹25,000.00</strong></p>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={{ margin: "0 0 15px 0", fontSize: "16px" }}>Next of Kin Details</h3>
          
          <input
            style={styles.input}
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <input
            style={styles.input}
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />

          <h3 style={{ margin: "20px 0 10px 0", fontSize: "16px" }}>Payment Method</h3>
          <div style={styles.paymentToggle}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === "upi"}
                onChange={handleInputChange}
              /> UPI
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === "card"}
                onChange={handleInputChange}
              /> Debit/Credit Card
            </label>
          </div>

          {formData.paymentMethod === "upi" ? (
            <input
              style={styles.input}
              type="text"
              name="upiId"
              placeholder="Enter UPI ID (e.g., name@okbank)"
              value={formData.upiId}
              onChange={handleInputChange}
            />
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                style={styles.input}
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
              />
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  style={{ ...styles.input, flex: 1 }}
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleInputChange}
                />
                <input
                  style={{ ...styles.input, flex: 1 }}
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            style={{
              ...styles.submitBtn,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer"
            }}
            disabled={loading}
          >
            {loading ? "Processing Payment..." : "Pay ₹25,000 Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// INLINE STYLES (Matching existing project architecture)
// ---------------------------------------------------------
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "500px",
    backgroundColor: "#f0f2f5",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  phoneScreen: {
    width: "350px",
    height: "600px",
    backgroundColor: "#e5ddd5",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  chatHeader: {
    backgroundColor: "#075e54",
    padding: "15px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
  chatHeaderLeft: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  backArrow: {
    fontSize: "20px",
    cursor: "pointer",
  },
  profilePic: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  chatBody: {
    padding: "20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  dateStamp: {
    textAlign: "center",
    backgroundColor: "#d1ddeb",
    padding: "5px 10px",
    borderRadius: "10px",
    alignSelf: "center",
    fontSize: "12px",
    marginBottom: "15px",
  },
  messageBubble: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "0 10px 10px 10px",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    maxWidth: "90%",
  },
  chatButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#25D366",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    fontSize: "14px",
  },
  portalContainer: {
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
  },
  portalHeader: {
    backgroundColor: "#004d99",
    padding: "20px",
    textAlign: "center",
  },
  portalBody: {
    padding: "20px",
  },
  warningBanner: {
    backgroundColor: "#fce8e6",
    color: "#d93025",
    padding: "15px",
    borderRadius: "5px",
    border: "1px solid #fad2cf",
    textAlign: "center",
    marginBottom: "20px",
  },
  patientDetailsBox: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "5px",
    border: "1px solid #e9ecef",
    marginBottom: "20px",
  },
  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0",
    fontSize: "14px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    width: "100%",
    boxSizing: "border-box",
  },
  paymentToggle: {
    display: "flex",
    gap: "20px",
    marginBottom: "15px",
  },
  radioLabel: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
  },
  submitBtn: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "15px",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "10px",
  },
};

export default FakeHospitalAdmissionSim;