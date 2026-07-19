import React, { useState } from "react";

const FakeHealthCardSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    applicantName: "",
    govtId: "",
    dob: "",
    phone: "",
    paymentMethod: "upi",
    upiId: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (!formData.applicantName || !formData.govtId || !formData.dob || !formData.phone) {
      alert("Please fill in all personal and identity details.");
      return;
    }

    if (formData.paymentMethod === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID to pay the processing fee.");
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

    // Simulate payment processing, then complete simulation
    setTimeout(() => {
      let exposedData = ["Applicant Name", "Government ID (Aadhaar/PAN)", "Date of Birth", "Phone Number"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake SMS Lure
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.phoneScreen}>
          <div style={styles.smsHeader}>
            <div style={styles.smsHeaderLeft}>
              <div style={styles.backArrow}>←</div>
              <div style={styles.senderName}>GOVT-HLTH</div>
            </div>
          </div>
          <div style={styles.smsBody}>
            <div style={styles.dateStamp}>Today 11:15 AM</div>
            <div style={styles.messageBubble}>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                Dear Citizen, your application for the <strong>Universal Digital Health Card</strong> is pending.
              </p>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                Get up to <strong>₹5,00,000</strong> in free medical coverage at all private and public hospitals.
              </p>
              <p style={{ margin: "0 0 15px 0", fontSize: "14px" }}>
                Last date to apply is tomorrow. A nominal processing fee of ₹50 applies.
              </p>
              <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#0056b3" }}>
                Apply and download your card instantly:
              </p>
              <button
                style={styles.smsButton}
                onClick={() => setView(1)}
              >
                Apply For Health Card
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Health Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          🏛️ National Health Portal
        </h2>
        <p style={{ margin: "5px 0 0 0", color: "#e0f7fa", fontSize: "12px" }}>
          Digital Health ID Generation Scheme
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.trustBanner}>
          ✅ <strong>Secure Government Registration</strong>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#155724" }}>
            Generate your Health ID in 2 minutes and download your digital e-card instantly.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>1. Identity Details</h3>
          
          <input
            style={styles.input}
            type="text"
            name="applicantName"
            placeholder="Full Name (As per Govt ID)"
            value={formData.applicantName}
            onChange={handleInputChange}
          />
          <input
            style={styles.input}
            type="text"
            name="govtId"
            placeholder="Aadhaar / PAN Number"
            value={formData.govtId}
            onChange={handleInputChange}
          />
          
          <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
            <div style={{ flex: 1 }}>
              <label style={styles.smallLabel}>Date of Birth</label>
              <input
                style={{ ...styles.input, marginBottom: 0 }}
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.smallLabel}>Mobile Number</label>
              <input
                style={{ ...styles.input, marginBottom: 0 }}
                type="tel"
                name="phone"
                placeholder="10-digit number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <h3 style={{ ...styles.sectionTitle, marginTop: "15px" }}>2. Card Activation Fee</h3>
          
          <div style={styles.feeBox}>
            <span style={{ fontSize: "14px", color: "#555" }}>Standard Processing Fee:</span>
            <span style={{ fontWeight: "bold", fontSize: "16px", color: "#d93025" }}>₹50.00</span>
          </div>

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
              placeholder="Enter UPI ID (e.g., number@upi)"
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
            {loading ? "Generating Health ID..." : "Pay ₹50 & Generate Card"}
          </button>
          
          <p style={styles.secureText}>🛡️ Portal is monitored by Ministry of Health Guidelines</p>
        </form>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// INLINE STYLES
// ---------------------------------------------------------
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "600px",
    backgroundColor: "#eef2f5",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  phoneScreen: {
    width: "350px",
    height: "600px",
    backgroundColor: "#f4f4f5",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  smsHeader: {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
  },
  smsHeaderLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  backArrow: {
    fontSize: "20px",
    cursor: "pointer",
    color: "#007aff",
  },
  senderName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  smsBody: {
    padding: "20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  dateStamp: {
    textAlign: "center",
    color: "#8e8e93",
    fontSize: "12px",
    marginBottom: "15px",
  },
  messageBubble: {
    backgroundColor: "#e1f5fe", // Light blue trust color
    padding: "15px",
    borderRadius: "15px",
    borderBottomLeftRadius: "5px",
    color: "#000",
    maxWidth: "85%",
    border: "1px solid #b3e5fc",
  },
  smsButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#0288d1",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "5px",
  },
  portalContainer: {
    maxWidth: "450px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    overflow: "hidden",
  },
  portalHeader: {
    backgroundColor: "#0056b3", // Government blue
    padding: "20px",
    textAlign: "center",
    borderBottom: "4px solid #ff9933", // Subtle Indian flag orange accent
  },
  portalBody: {
    padding: "25px",
  },
  trustBanner: {
    backgroundColor: "#d4edda",
    color: "#155724",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #c3e6cb",
    marginBottom: "20px",
  },
  sectionTitle: {
    margin: "0 0 10px 0",
    fontSize: "15px",
    color: "#333",
    borderBottom: "2px solid #eee",
    paddingBottom: "5px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  smallLabel: {
    fontSize: "12px",
    color: "#666",
    marginBottom: "4px",
    display: "block",
  },
  input: {
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#fafafa",
  },
  feeBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: "10px 15px",
    borderRadius: "6px",
    border: "1px solid #e9ecef",
    marginBottom: "15px",
  },
  paymentToggle: {
    display: "flex",
    gap: "15px",
    marginBottom: "15px",
  },
  radioLabel: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    color: "#444",
  },
  submitBtn: {
    backgroundColor: "#0056b3",
    color: "#fff",
    padding: "14px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "10px",
    transition: "background-color 0.2s",
  },
  secureText: {
    textAlign: "center",
    fontSize: "11px",
    color: "#888",
    marginTop: "12px",
  }
};

export default FakeHealthCardSim;