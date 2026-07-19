import React, { useState } from "react";

const FakeArmyWelfareSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    citizenName: "",
    mobile: "",
    state: "",
    amount: "1000",
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
    if (!formData.citizenName || !formData.mobile || !formData.state) {
      alert("Please enter your details to generate your digital appreciation certificate.");
      return;
    }

    if (formData.paymentMethod === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID to complete your patriotic contribution.");
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
      let exposedData = ["Citizen Name", "Mobile Number", "State"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake WhatsApp Forward Lure
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.phoneScreen}>
          <div style={styles.chatHeader}>
            <div style={styles.chatHeaderLeft}>
              <div style={styles.backArrow}>←</div>
              <div style={styles.profilePic}>RWA Society Group 🇮🇳</div>
            </div>
          </div>
          <div style={styles.chatBody}>
            <div style={styles.dateStamp}>Today</div>
            <div style={styles.messageBubble}>
              <div style={styles.forwardedLabel}>➦ Forwarded many times</div>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#1b5e20", fontWeight: "bold" }}>
                🇮🇳 SALUTE TO OUR MARTYRS 🇮🇳
              </p>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                Dear Citizens, on the eve of Independence Day, let us stand with the families of the brave jawans who made the supreme sacrifice at the border. 🪖🕊️
              </p>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                The *Armed Forces Battle Casualties Welfare Fund* is accepting donations to support the education of martyrs' children. 
              </p>
              <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#d32f2f", fontWeight: "bold" }}>
                Even ₹500 makes a difference. As a token of gratitude, you will receive an Official Digital Certificate.
              </p>
              <button
                style={styles.chatButton}
                onClick={() => setView(1)}
              >
                Donate to Army Welfare
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Army Welfare Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          🛡️ National Defense Welfare Trust
        </h2>
        <p style={{ margin: "5px 0 0 0", color: "#c8e6c9", fontSize: "12px" }}>
          Citizen Support Portal • Govt. Recognised
        </p>
      </div>
      
      <div style={styles.tricolorBand}>
        <div style={{ flex: 1, backgroundColor: "#ff9933" }}></div>
        <div style={{ flex: 1, backgroundColor: "#ffffff" }}></div>
        <div style={{ flex: 1, backgroundColor: "#138808" }}></div>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.patriotBanner}>
          <strong>Fund: Martyrs' Family & Child Education</strong>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#333" }}>
            100% Tax Exemption under Section 80G(2).
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>1. Contribution Amount</h3>
          
          <div style={styles.amountGrid}>
            {["500", "1000", "2000", "5000"].map((amt) => (
              <div
                key={amt}
                style={{
                  ...styles.amountChip,
                  backgroundColor: formData.amount === amt ? "#2e3b32" : "#f1f3f4",
                  color: formData.amount === amt ? "#fff" : "#333",
                  borderColor: formData.amount === amt ? "#1a2421" : "#ccc"
                }}
                onClick={() => setFormData({ ...formData, amount: amt })}
              >
                ₹{amt}
              </div>
            ))}
          </div>

          <h3 style={styles.sectionTitle}>2. Citizen Information</h3>
          
          <input
            style={styles.input}
            type="text"
            name="citizenName"
            placeholder="Full Name (For Digital Certificate)"
            value={formData.citizenName}
            onChange={handleInputChange}
          />
          
          <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
            <input
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
            />
            <select
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            >
              <option value="" disabled>Select State</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="delhi">Delhi</option>
              <option value="karnataka">Karnataka</option>
              <option value="gujarat">Gujarat</option>
              <option value="other">Other</option>
            </select>
          </div>

          <h3 style={{ ...styles.sectionTitle, marginTop: "5px" }}>3. Secure Payment</h3>
          
          <div style={styles.paymentToggle}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === "upi"}
                onChange={handleInputChange}
              /> UPI (BHIM/GPay)
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
            {loading ? "Processing..." : `Donate ₹${formData.amount} & Generate Certificate`}
          </button>
          
          <p style={styles.secureText}>
            🛡️ Safe & Secure Gateway • Direct Transfer to Welfare Fund (Fake Claim)
          </p>
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
    backgroundColor: "#e5ddd5", 
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  phoneScreen: {
    width: "360px",
    height: "600px",
    backgroundColor: "#efe7dd",
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
  forwardedLabel: {
    fontSize: "12px",
    color: "#888",
    fontStyle: "italic",
    marginBottom: "8px",
  },
  chatButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1b5e20", // Military green
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    fontSize: "15px",
  },
  portalContainer: {
    maxWidth: "430px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    overflow: "hidden",
  },
  portalHeader: {
    backgroundColor: "#2e3b32", // Dark olive green / military theme
    padding: "20px",
    textAlign: "center",
  },
  tricolorBand: {
    display: "flex",
    height: "6px",
    width: "100%",
  },
  portalBody: {
    padding: "20px",
  },
  patriotBanner: {
    backgroundColor: "#e8f5e9",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #c8e6c9",
    marginBottom: "20px",
    textAlign: "center",
    color: "#1b5e20",
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
  amountGrid: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  amountChip: {
    flex: 1,
    padding: "12px 0",
    textAlign: "center",
    borderRadius: "6px",
    border: "1px solid #ccc",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "all 0.2s ease",
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
    backgroundColor: "#2e3b32",
    color: "#fff",
    padding: "15px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "15px",
    marginTop: "10px",
    transition: "background-color 0.2s",
  },
  secureText: {
    textAlign: "center",
    fontSize: "11px",
    color: "#888",
    marginTop: "15px",
    lineHeight: "1.4",
  }
};

export default FakeArmyWelfareSim;