import React, { useState } from "react";

const FakeWindowsUpdateSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
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
    if (!formData.customerName || !formData.email || !formData.phone) {
      alert("Please provide your contact details to register this support request.");
      return;
    }

    if (formData.paymentMethod === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID to process the support fee.");
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
      let exposedData = ["Customer Name", "Email", "Phone Number"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake Windows Security Alert (Lure)
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.bsodContainer}>
        <div style={styles.bsodContent}>
          <h1 style={{ fontSize: "80px", margin: "0 0 20px 0", fontWeight: "normal" }}>:(</h1>
          <h2 style={{ fontSize: "24px", fontWeight: "normal", marginBottom: "30px", lineHeight: "1.4" }}>
            Your PC ran into a problem and needs to be locked.<br/>
            We are collecting some error info, and then you need to contact Support.
          </h2>
          
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div style={styles.qrCodePlaceholder}></div>
            <div>
              <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
                For more information about this issue and possible fixes, visit
              </p>
              <p style={{ margin: "0 0 15px 0", fontSize: "16px", fontWeight: "bold" }}>
                https://www.windows-support-tech-alert.com/error
              </p>
              <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                If you call a support person, give them this info:
              </p>
              <p style={{ margin: "0 0 20px 0", fontSize: "14px" }}>
                Stop code: CRITICAL_PROCESS_DIED<br/>
                Threat detected: Trojan.Win32.Generic
              </p>
              <button style={styles.bsodButton} onClick={() => setView(1)}>
                Connect to Microsoft Tech Support Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Tech Support Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalWrapper}>
      <div style={styles.portalContainer}>
        <div style={styles.portalHeader}>
          <h2 style={{ margin: 0, color: "#fff", fontSize: "22px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "24px" }}>🪟</span> Microsoft Premium Support
          </h2>
          <p style={{ margin: "5px 0 0 0", color: "#e3f2fd", fontSize: "13px" }}>
            Official Device Unlock & Malware Removal
          </p>
        </div>

        <div style={styles.portalBody}>
          <div style={styles.warningBanner}>
            ⚠️ <strong>System Locked - Action Required</strong>
            <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#721c24" }}>
              Your IP address has been flagged for suspicious activity. Pay the one-time network diagnostic fee to restore access to your computer.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={styles.formContainer}>
            <h3 style={styles.sectionTitle}>1. Customer Information</h3>
            
            <input
              style={styles.input}
              type="text"
              name="customerName"
              placeholder="Registered Windows User Name"
              value={formData.customerName}
              onChange={handleInputChange}
            />
            
            <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
              <input
                style={{ ...styles.input, marginBottom: 0, flex: 1 }}
                type="email"
                name="email"
                placeholder="Microsoft Account Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                style={{ ...styles.input, marginBottom: 0, flex: 1 }}
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <h3 style={{ ...styles.sectionTitle, marginTop: "15px" }}>2. Tech Support Fee (₹1,999.00)</h3>
            
            <div style={styles.paymentToggle}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={formData.paymentMethod === "upi"}
                  onChange={handleInputChange}
                /> UPI (GPay/PhonePe)
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleInputChange}
                /> Credit / Debit Card
              </label>
            </div>

            {formData.paymentMethod === "upi" ? (
              <input
                style={styles.input}
                type="text"
                name="upiId"
                placeholder="Enter UPI ID (e.g., number@okbank)"
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
              {loading ? "Processing..." : "Pay ₹1,999 & Unlock PC"}
            </button>
            
            <p style={styles.secureText}>🔒 Secure connection verified by Windows Defender</p>
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
  bsodContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "650px",
    backgroundColor: "#0078d7", // Classic Windows 10 BSOD Blue
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "40px",
  },
  bsodContent: {
    maxWidth: "800px",
    width: "100%",
  },
  qrCodePlaceholder: {
    width: "120px",
    height: "120px",
    backgroundColor: "#fff",
    border: "5px solid #fff",
    backgroundImage: "radial-gradient(#000 20%, transparent 20%)",
    backgroundSize: "10px 10px",
  },
  bsodButton: {
    backgroundColor: "#fff",
    color: "#0078d7",
    border: "none",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "4px",
    marginTop: "10px",
  },
  portalWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "650px",
    backgroundColor: "#f3f2f1", // Microsoft neutral background
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  portalContainer: {
    maxWidth: "450px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    overflow: "hidden",
  },
  portalHeader: {
    backgroundColor: "#0078d7", // Microsoft Blue
    padding: "25px 20px",
    textAlign: "center",
  },
  portalBody: {
    padding: "25px",
  },
  warningBanner: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: "15px",
    borderRadius: "6px",
    border: "1px solid #f5c6cb",
    marginBottom: "20px",
  },
  sectionTitle: {
    margin: "0 0 12px 0",
    fontSize: "15px",
    color: "#333",
    borderBottom: "2px solid #eee",
    paddingBottom: "5px",
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
    backgroundColor: "#fafafa",
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
    gap: "6px",
    cursor: "pointer",
    color: "#444",
  },
  submitBtn: {
    backgroundColor: "#0078d7",
    color: "#fff",
    padding: "14px",
    border: "none",
    borderRadius: "4px",
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

export default FakeWindowsUpdateSim;