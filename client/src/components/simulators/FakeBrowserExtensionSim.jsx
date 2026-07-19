import React, { useState } from "react";

const FakeBrowserExtensionSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
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
    if (!formData.userName || !formData.email) {
      alert("Please enter your account details to activate the extension.");
      return;
    }

    if (formData.paymentMethod === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID for the verification fee.");
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
      let exposedData = ["User Name", "Email Address"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake Chrome Web Store Lure
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
              🔒 chromewebstore.google.extensions-secure.com
            </div>
          </div>

          <div style={styles.storeHeader}>
            <h2 style={{ margin: 0, fontSize: "18px", color: "#5f6368", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "24px" }}>🧩</span> Chrome Web Store
            </h2>
          </div>

          <div style={styles.storeBody}>
            <div style={styles.extensionHeader}>
              <div style={styles.extensionIcon}>🛡️</div>
              <div style={styles.extensionInfo}>
                <h1 style={{ margin: "0 0 5px 0", fontSize: "22px", color: "#202124" }}>AdBlock Pro + Lifetime VPN</h1>
                <p style={{ margin: "0 0 5px 0", fontSize: "14px", color: "#1a73e8" }}>Offered by: SecureWeb Solutions ✅</p>
                <div style={styles.rating}>
                  ⭐⭐⭐⭐⭐ <span style={{ color: "#5f6368", fontSize: "13px", marginLeft: "5px" }}>48,291 ratings</span>
                </div>
              </div>
              <button style={styles.addToChromeBtn} onClick={() => setView(1)}>
                Add to Chrome
              </button>
            </div>

            <div style={styles.tabs}>
              <span style={styles.activeTab}>Overview</span>
              <span style={styles.inactiveTab}>Privacy practices</span>
              <span style={styles.inactiveTab}>Reviews</span>
              <span style={styles.inactiveTab}>Support</span>
            </div>

            <div style={styles.description}>
              <p style={{ marginTop: 0 }}>
                Block all annoying YouTube ads, pop-ups, and trackers instantly! Plus, get a FREE lifetime VPN with unlimited bandwidth.
              </p>
              <ul>
                <li>🚀 Speeds up page loading by 40%</li>
                <li>📺 Blocks video ads seamlessly</li>
                <li>🌍 Military-grade encryption VPN included</li>
              </ul>
              <p style={{ fontSize: "12px", color: "#d93025", fontWeight: "bold" }}>
                * Over 5,000,000+ Active Users!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Extension Activation Popup
  // ---------------------------------------------------------
  return (
    <div style={styles.popupContainer}>
      <div style={styles.popupWindow}>
        <div style={styles.popupHeader}>
          <span style={{ fontSize: "18px" }}>🛡️</span>
          <span style={{ fontWeight: "bold", fontSize: "14px", color: "#333" }}>AdBlock Pro Setup</span>
        </div>

        <div style={styles.popupBody}>
          <h3 style={{ margin: "0 0 10px 0", textAlign: "center", color: "#1a73e8" }}>Installation Successful!</h3>
          
          <div style={styles.warningBox}>
            <strong>Step 2: Bot Verification Required</strong>
            <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#555" }}>
              To prevent abuse of our free VPN servers, a one-time refundable verification fee of <strong>₹99.00</strong> is required to activate your premium license.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={styles.formContainer}>
            <input
              style={styles.input}
              type="text"
              name="userName"
              placeholder="Your Full Name"
              value={formData.userName}
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

            <h4 style={{ margin: "10px 0 5px 0", fontSize: "13px", color: "#333" }}>Verification Method (₹99.00)</h4>
            
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
                placeholder="Enter UPI ID (e.g., name@bank)"
                value={formData.upiId}
                onChange={handleInputChange}
              />
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <input
                  style={styles.input}
                  type="text"
                  name="cardNumber"
                  placeholder="16-Digit Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
                <div style={{ display: "flex", gap: "8px" }}>
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
              {loading ? "Verifying..." : "Pay ₹99 & Activate"}
            </button>
            <p style={{ textAlign: "center", fontSize: "11px", color: "#888", marginTop: "10px" }}>
              🔒 Powered by Stripe Secure Payments
            </p>
          </form>
        </div>
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
    backgroundColor: "#e8eaed",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  browserWindow: {
    width: "700px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    overflow: "hidden",
    border: "1px solid #ccc",
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
    color: "#3c4043",
    border: "1px solid #dfe1e5",
  },
  storeHeader: {
    padding: "15px 20px",
    borderBottom: "1px solid #e0e0e0",
  },
  storeBody: {
    padding: "30px",
  },
  extensionHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    marginBottom: "25px",
  },
  extensionIcon: {
    width: "80px",
    height: "80px",
    backgroundColor: "#e8f0fe",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  extensionInfo: {
    flex: 1,
  },
  rating: {
    fontSize: "14px",
    marginTop: "5px",
  },
  addToChromeBtn: {
    backgroundColor: "#1a73e8",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.2s",
  },
  tabs: {
    display: "flex",
    borderBottom: "1px solid #ddd",
    marginBottom: "20px",
  },
  activeTab: {
    padding: "10px 20px",
    color: "#1a73e8",
    fontWeight: "bold",
    borderBottom: "3px solid #1a73e8",
    cursor: "pointer",
  },
  inactiveTab: {
    padding: "10px 20px",
    color: "#5f6368",
    cursor: "pointer",
  },
  description: {
    fontSize: "14px",
    color: "#3c4043",
    lineHeight: "1.6",
  },
  popupContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "650px",
    backgroundColor: "#e8eaed",
    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100%\\' height=\\'100%\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Crect width=\\'100%\\' height=\\'100%\\' fill=\\'%23e8eaed\\'/%3E%3C/svg%3E')", // Mimic a desktop background
  },
  popupWindow: {
    width: "360px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
    overflow: "hidden",
    border: "1px solid #bbb",
  },
  popupHeader: {
    backgroundColor: "#f8f9fa",
    padding: "12px 15px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderBottom: "1px solid #e0e0e0",
  },
  popupBody: {
    padding: "20px",
  },
  warningBox: {
    backgroundColor: "#fff3cd",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ffeeba",
    marginBottom: "20px",
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
    fontSize: "13px",
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
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    color: "#444",
  },
  submitBtn: {
    backgroundColor: "#1a73e8",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "14px",
    marginTop: "5px",
    transition: "background-color 0.2s",
  },
};

export default FakeBrowserExtensionSim;