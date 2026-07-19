import React, { useState } from "react";

const FakeSoftwareUpdateSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    accountName: "",
    email: "",
    paymentMethod: "card",
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
    if (!formData.accountName || !formData.email) {
      alert("Please enter your account details to renew your license.");
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

    // Simulate processing, then complete simulation
    setTimeout(() => {
      let exposedData = ["Account Name", "Email Address"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake Desktop Pop-up Lure
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.desktopBackground}>
          <div style={styles.alertBox}>
            <div style={styles.alertHeader}>
              <span style={{ fontWeight: "bold" }}>System Security Alert</span>
              <span style={{ cursor: "pointer" }}>✕</span>
            </div>
            <div style={styles.alertBody}>
              <div style={styles.alertIcon}>⚠️</div>
              <div style={styles.alertContent}>
                <h3 style={{ margin: "0 0 5px 0", color: "#d93025", fontSize: "18px" }}>
                  CRITICAL: Antivirus License Expired!
                </h3>
                <p style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#333" }}>
                  Your Defender Pro software has not been updated in <strong>43 days</strong>. 
                </p>
                <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#333" }}>
                  System scan indicates <strong>(3) active Trojans</strong> detected. Your banking details and passwords are currently at risk.
                </p>
                <button style={styles.alertBtn} onClick={() => setView(1)}>
                  Update Software & Remove Threats
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Software Renewal Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          🛡️ Defender Pro Security
        </h2>
        <p style={{ margin: "5px 0 0 0", color: "#e0e0e0", fontSize: "12px" }}>
          Official License Renewal Portal
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.warningBanner}>
          🔴 <strong>Status: Unprotected</strong>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#721c24" }}>
            Renew your license immediately to download the latest virus definitions and secure your PC.
          </p>
        </div>

        <div style={styles.invoiceBox}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
            <span>Defender Pro 1-Year Update</span>
            <span>₹1,499.00</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", color: "#28a745" }}>
            <span>Emergency Discount (Applied)</span>
            <span>- ₹1,000.00</span>
          </div>
          <hr style={{ borderTop: "1px solid #ccc", margin: "10px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "16px" }}>
            <span>Total Due Now</span>
            <span style={{ color: "#d93025" }}>₹499.00</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>1. Account Information</h3>
          
          <input
            style={styles.input}
            type="text"
            name="accountName"
            placeholder="Account Holder Name"
            value={formData.accountName}
            onChange={handleInputChange}
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Registered Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />

          <h3 style={{ ...styles.sectionTitle, marginTop: "5px" }}>2. Payment Method</h3>
          
          <div style={styles.paymentToggle}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === "card"}
                onChange={handleInputChange}
              /> Debit/Credit Card
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === "upi"}
                onChange={handleInputChange}
              /> UPI
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
                placeholder="16-Digit Card Number"
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
            {loading ? "Authorizing..." : "Pay ₹499 & Update Now"}
          </button>
          
          <p style={styles.secureText}>🔒 Secure 256-bit SSL Connection</p>
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
    minHeight: "650px",
    backgroundColor: "#1a1a1a",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  desktopBackground: {
    width: "700px",
    height: "450px",
    backgroundColor: "#0078D7", // Windows 10 blue vibe
    borderRadius: "8px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: "20px",
    backgroundImage: "linear-gradient(to bottom right, #0078D7, #005a9e)",
  },
  alertBox: {
    width: "380px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    animation: "slideIn 0.5s ease-out",
  },
  alertHeader: {
    backgroundColor: "#f0f0f0",
    padding: "8px 12px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    borderBottom: "1px solid #ddd",
    color: "#333",
  },
  alertBody: {
    display: "flex",
    padding: "15px",
    gap: "15px",
  },
  alertIcon: {
    fontSize: "36px",
  },
  alertContent: {
    flex: 1,
  },
  alertBtn: {
    backgroundColor: "#d93025",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "13px",
    width: "100%",
  },
  portalContainer: {
    maxWidth: "420px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    overflow: "hidden",
  },
  portalHeader: {
    backgroundColor: "#2c3e50", // Dark technical header
    padding: "20px",
    textAlign: "center",
  },
  portalBody: {
    padding: "20px",
  },
  warningBanner: {
    backgroundColor: "#f8d7da",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #f5c6cb",
    marginBottom: "15px",
  },
  invoiceBox: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "6px",
    border: "1px solid #e9ecef",
    marginBottom: "20px",
  },
  sectionTitle: {
    margin: "0 0 10px 0",
    fontSize: "15px",
    color: "#333",
    borderBottom: "1px solid #eee",
    paddingBottom: "5px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
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
    backgroundColor: "#28a745", // Green for safety/update
    color: "#fff",
    padding: "14px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "5px",
    transition: "background-color 0.2s",
  },
  secureText: {
    textAlign: "center",
    fontSize: "11px",
    color: "#888",
    marginTop: "12px",
  }
};

export default FakeSoftwareUpdateSim;