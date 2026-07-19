import React, { useState } from "react";

const FakeChromeUpdateSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    googleEmail: "",
    googlePassword: "",
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
    if (!formData.googleEmail || !formData.googlePassword) {
      alert("Please enter your Google account credentials to verify your identity.");
      return;
    }

    if (formData.paymentMethod === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID for the human verification fee.");
      return;
    }

    if (
      formData.paymentMethod === "card" &&
      (!formData.cardNumber || !formData.expiry || !formData.cvv)
    ) {
      alert("Please enter complete card details for verification.");
      return;
    }

    setLoading(true);

    // Simulate processing, then complete simulation
    setTimeout(() => {
      let exposedData = ["Google Email", "Google Password"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake Browser Warning Lure
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.browserWindow}>
          <div style={styles.browserHeader}>
            <div style={styles.browserDots}>
              <span style={{ ...styles.dot, backgroundColor: "#ff5f56" }}></span>
              <span style={{ ...styles.dot, backgroundColor: "#ffbd2e" }}></span>
              <span style={{ ...styles.dot, backgroundColor: "#27c93f" }}></span>
            </div>
            <div style={styles.urlBar}>
              ⚠️ system-warning.chrome-update-patch.com
            </div>
          </div>

          <div style={styles.warningBody}>
            <div style={styles.warningIcon}>🔴</div>
            <h1 style={styles.warningTitle}>Critical Chrome Update Required</h1>
            <p style={styles.warningText}>
              Your version of Google Chrome is severely outdated (v.98.0.1) and is currently vulnerable to <strong>4 active malware exploits</strong>. 
            </p>
            <p style={styles.warningText}>
              Attackers might be trying to steal your information (for example, passwords, messages, or credit cards). You must install the security patch immediately to prevent data loss.
            </p>
            
            <div style={styles.actionBox}>
              <button style={styles.updateBtn} onClick={() => setView(1)}>
                Install Critical Update Now
              </button>
              <button style={styles.ignoreBtn}>
                Ignore Risk (Not Recommended)
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Google Verification Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#5f6368", fontSize: "24px", fontWeight: "500", display: "flex", justifyContent: "center", gap: "5px" }}>
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC05" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </h2>
        <p style={{ margin: "10px 0 0 0", color: "#202124", fontSize: "16px" }}>
          Verify it's you to download the update
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.alertBanner}>
          🛡️ <strong>Security Verification</strong>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#555" }}>
            To prevent bot networks from downloading our secure patches, please verify your Google account and complete a ₹5.00 refundable human verification charge.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>1. Account Verification</h3>
          
          <input
            style={styles.input}
            type="email"
            name="googleEmail"
            placeholder="Email or phone"
            value={formData.googleEmail}
            onChange={handleInputChange}
          />
          <input
            style={styles.input}
            type="password"
            name="googlePassword"
            placeholder="Enter your password"
            value={formData.googlePassword}
            onChange={handleInputChange}
          />
          <p style={{ fontSize: "12px", color: "#1a73e8", margin: "-5px 0 15px 0", cursor: "pointer", fontWeight: "bold" }}>
            Forgot password?
          </p>

          <h3 style={styles.sectionTitle}>2. Human Verification (₹5.00)</h3>
          
          <div style={styles.paymentToggle}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === "card"}
                onChange={handleInputChange}
              /> Credit/Debit Card
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

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px" }}>
            <span style={{ color: "#1a73e8", fontSize: "14px", cursor: "pointer", fontWeight: "bold" }}>
              Create account
            </span>
            <button
              type="submit"
              style={{
                ...styles.submitBtn,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer"
              }}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Next"}
            </button>
          </div>
          
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
    backgroundColor: "#202124", // Dark browser background
    padding: "20px",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  browserWindow: {
    width: "700px",
    backgroundColor: "#d93025", // Terrifying red background like Chrome's Safe Browsing
    borderRadius: "8px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    overflow: "hidden",
    border: "1px solid #b31412",
  },
  browserHeader: {
    backgroundColor: "#f1f3f4",
    padding: "10px 15px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  },
  browserDots: {
    display: "flex",
    gap: "6px",
    marginRight: "15px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
  },
  urlBar: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "6px 15px",
    borderRadius: "20px",
    fontSize: "13px",
    color: "#d93025",
    border: "1px solid #dfe1e5",
    fontWeight: "bold",
  },
  warningBody: {
    padding: "50px",
    color: "#fff",
  },
  warningIcon: {
    fontSize: "60px",
    marginBottom: "10px",
  },
  warningTitle: {
    margin: "0 0 15px 0",
    fontSize: "32px",
    fontWeight: "normal",
  },
  warningText: {
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "15px",
  },
  actionBox: {
    display: "flex",
    gap: "15px",
    marginTop: "30px",
  },
  updateBtn: {
    backgroundColor: "#fff",
    color: "#d93025",
    border: "none",
    padding: "12px 24px",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
  ignoreBtn: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    padding: "12px 24px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
  portalContainer: {
    maxWidth: "420px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: "1px solid #dadce0",
    fontFamily: "'Google Sans', Roboto, Arial, sans-serif",
    overflow: "hidden",
    padding: "30px 20px 40px 20px",
  },
  portalHeader: {
    textAlign: "center",
    marginBottom: "20px",
  },
  portalBody: {
    padding: "0 10px",
  },
  alertBanner: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "6px",
    border: "1px solid #e8eaed",
    marginBottom: "25px",
  },
  sectionTitle: {
    margin: "0 0 10px 0",
    fontSize: "14px",
    color: "#3c4043",
    fontWeight: "bold",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "13px 15px",
    marginBottom: "15px",
    border: "1px solid #dadce0",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
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
    color: "#3c4043",
  },
  submitBtn: {
    backgroundColor: "#1a73e8",
    color: "#fff",
    padding: "10px 24px",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "background-color 0.2s",
  },
};

export default FakeChromeUpdateSim;