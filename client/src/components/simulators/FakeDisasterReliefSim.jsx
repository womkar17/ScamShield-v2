import React, { useState } from "react";

const FakeDisasterReliefSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
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
    if (!formData.fullName || !formData.email || !formData.mobile) {
      alert("Please enter your contact details to proceed with the donation.");
      return;
    }

    if (formData.paymentMethod === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID to complete the contribution.");
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
      let exposedData = ["Full Name", "Email Address", "Mobile Number"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake Social Media / News Lure
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.socialFeed}>
          <div style={styles.postHeader}>
            <div style={styles.avatar}>🏛️</div>
            <div>
              <h4 style={styles.pageName}>National Relief Updates</h4>
              <p style={styles.sponsoredText}>@NatReliefGov • 1h</p>
            </div>
          </div>
          
          <div style={styles.postContent}>
            <p style={{ fontSize: "15px", marginBottom: "10px", lineHeight: "1.4" }}>
              🚨 <strong>URGENT APPEAL:</strong> The recent flash floods in the Northern Valleys have displaced over 50,000 families. They are in critical need of food, clean water, and medical supplies. 
            </p>
            <p style={{ fontSize: "15px", marginBottom: "15px" }}>
              Every rupee counts. Stand with the nation and contribute to the Chief Minister's Emergency Relief Fund today.
            </p>
            
            <div style={styles.newsImagePlaceholder}>
              <h3 style={{ color: "#fff", margin: 0 }}>STATE EMERGENCY</h3>
              <p style={{ color: "#fff", margin: "5px 0 0 0", fontSize: "14px" }}>Click to Donate to Flood Relief</p>
            </div>
            
            <p style={{ fontSize: "13px", color: "#1da1f2", marginTop: "10px", fontWeight: "bold" }}>
              🔗 https://www.cm-relief-fund-support.in/donate
            </p>
          </div>
          
          <div style={styles.postAction}>
            <button style={styles.donateBtn} onClick={() => setView(1)}>
              Contribute Now
            </button>
          </div>
          
          <div style={styles.engagement}>
            <span>💬 842</span>
            <span>🔁 12.5K</span>
            <span>❤️ 24.1K</span>
            <span>📊 1.1M Views</span>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Disaster Relief Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "20px" }}>🇮🇳 CM Emergency Relief Fund</h2>
        <p style={{ margin: "5px 0 0 0", color: "#e0e0e0", fontSize: "12px" }}>
          Official Government Donation Portal
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.campaignBanner}>
          <span style={{ fontSize: "18px", marginRight: "10px" }}>🌊</span>
          <div>
            <strong>Northern Valley Flood Relief 2026</strong>
            <p style={{ margin: "3px 0 0 0", fontSize: "12px", color: "#666" }}>
              Your donation provides emergency ration kits and medical aid.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>1. Contribution Amount</h3>
          
          <div style={styles.amountGrid}>
            {["500", "1000", "2000", "5000"].map((amt) => (
              <div
                key={amt}
                style={{
                  ...styles.amountChip,
                  backgroundColor: formData.amount === amt ? "#ff9933" : "#f1f3f4",
                  color: formData.amount === amt ? "#fff" : "#333",
                  borderColor: formData.amount === amt ? "#e68a00" : "#ccc"
                }}
                onClick={() => setFormData({ ...formData, amount: amt })}
              >
                ₹{amt}
              </div>
            ))}
          </div>
          <p style={{ fontSize: "11px", color: "#28a745", margin: "0 0 15px 0", fontWeight: "bold" }}>
            * Contributions are 100% exempt from Income Tax under Section 80G.
          </p>

          <h3 style={styles.sectionTitle}>2. Citizen Details</h3>
          
          <input
            style={styles.input}
            type="text"
            name="fullName"
            placeholder="Full Name (As per PAN/Aadhaar)"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          
          <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
            <input
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              type="email"
              name="email"
              placeholder="Email ID for Receipt"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </div>

          <h3 style={{ ...styles.sectionTitle, marginTop: "10px" }}>3. Secure Payment</h3>
          
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
              /> Netbanking / Card
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
            {loading ? "Processing..." : `Donate ₹${formData.amount} Now`}
          </button>
          
          <p style={styles.secureText}>
            🔒 This transaction is protected by Govt. standard encryption.
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
    minHeight: "600px",
    backgroundColor: "#15202b", // Twitter dark mode vibe
    padding: "20px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  socialFeed: {
    width: "450px",
    backgroundColor: "#192734",
    border: "1px solid #38444d",
    borderRadius: "12px",
    overflow: "hidden",
    color: "#fff",
  },
  postHeader: {
    display: "flex",
    alignItems: "center",
    padding: "15px 15px 5px 15px",
    gap: "10px",
  },
  avatar: {
    width: "45px",
    height: "45px",
    backgroundColor: "#ff9933",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
  },
  pageName: {
    margin: 0,
    fontSize: "15px",
    fontWeight: "bold",
  },
  sponsoredText: {
    margin: 0,
    fontSize: "13px",
    color: "#8899a6",
  },
  postContent: {
    padding: "10px 15px",
  },
  newsImagePlaceholder: {
    backgroundColor: "#b71c1c", // Emergency red
    height: "180px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #e53935",
    marginTop: "10px",
  },
  postAction: {
    padding: "0 15px 15px 15px",
  },
  donateBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1da1f2", // Twitter blue action button
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
  },
  engagement: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    fontSize: "13px",
    color: "#8899a6",
    borderTop: "1px solid #38444d",
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
    backgroundColor: "#333", // Govt neutral dark
    padding: "20px",
    textAlign: "center",
    borderBottom: "4px solid #ff9933", // Saffron accent
  },
  portalBody: {
    padding: "20px",
  },
  campaignBanner: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: "15px",
    borderRadius: "6px",
    border: "1px solid #ddd",
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
  amountGrid: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  amountChip: {
    flex: 1,
    padding: "10px 0",
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
    backgroundColor: "#ff9933", // Saffron / Orange action
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

export default FakeDisasterReliefSim;