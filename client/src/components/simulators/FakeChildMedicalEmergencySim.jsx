import React, { useState } from "react";

const FakeChildMedicalEmergencySim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    donorName: "",
    mobile: "",
    email: "",
    amount: "2000",
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
    if (!formData.donorName || !formData.mobile || !formData.email) {
      alert("Please enter your contact details to proceed with the life-saving donation.");
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
      let exposedData = ["Donor Name", "Mobile Number", "Email Address"];
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
              <div style={styles.profilePic}>College Alumni Group 🎓</div>
            </div>
          </div>
          <div style={styles.chatBody}>
            <div style={styles.dateStamp}>Today</div>
            <div style={styles.messageBubble}>
              <div style={styles.forwardedLabel}>➦ Forwarded many times</div>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#d32f2f", fontWeight: "bold" }}>
                🆘 URGENT: BABY ANANYA NEEDS YOUR HELP! 🆘
              </p>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                My 6-month-old daughter Ananya has been diagnosed with SMA Type 1. She needs a Zolgensma injection worth ₹16 Crores to survive.
              </p>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                We have sold everything, but we still need ₹45 Lakhs before tomorrow morning or the hospital will discharge her! 😭 Please, even ₹100 will help save my baby's life.
              </p>
              <div style={styles.photoPlaceholder}>
                <span style={{ fontSize: "30px" }}>🏥 👶</span>
              </div>
              <p style={{ margin: "10px 0 15px 0", fontSize: "14px", fontWeight: "bold" }}>
                Please donate directly via the official campaign link below:
              </p>
              <button
                style={styles.chatButton}
                onClick={() => setView(1)}
              >
                Donate via HopeCrowd
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Crowdfunding Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "22px", letterSpacing: "1px" }}>
          ❤️ HopeCrowd
        </h2>
        <p style={{ margin: "5px 0 0 0", color: "#ffebee", fontSize: "12px" }}>
          India's #1 Trusted Medical Fundraising Platform
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.urgencyBanner}>
          ⏳ <strong>Only 14 Hours Left!</strong> 
          <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#b71c1c" }}>
            The deadline for the injection order is approaching fast. We need urgent funds!
          </p>
        </div>

        <div style={styles.campaignHeader}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "#333" }}>Help Baby Ananya Fight SMA</h3>
          
          <div style={styles.progressBarContainer}>
            <div style={styles.progressBarFill}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#333", fontWeight: "bold", marginBottom: "5px" }}>
            <span>₹15,55,400 raised</span>
            <span style={{ color: "#888", fontWeight: "normal" }}>Goal: ₹45,00,000</span>
          </div>
          <p style={{ margin: "0", fontSize: "12px", color: "#388e3c", fontWeight: "bold" }}>
            8,432 supporters • 244 shared this hour
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>1. Choose Donation Amount</h3>
          
          <div style={styles.amountGrid}>
            {["500", "1000", "2000", "5000"].map((amt) => (
              <div
                key={amt}
                style={{
                  ...styles.amountChip,
                  backgroundColor: formData.amount === amt ? "#d32f2f" : "#f1f3f4",
                  color: formData.amount === amt ? "#fff" : "#333",
                  borderColor: formData.amount === amt ? "#b71c1c" : "#ccc"
                }}
                onClick={() => setFormData({ ...formData, amount: amt })}
              >
                ₹{amt}
              </div>
            ))}
          </div>

          <h3 style={styles.sectionTitle}>2. Donor Details</h3>
          
          <input
            style={styles.input}
            type="text"
            name="donorName"
            placeholder="Full Name (For Blessings & Receipt)"
            value={formData.donorName}
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
            <input
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
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
              /> UPI / QR
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
              placeholder="Enter UPI ID (e.g., yournumber@upi)"
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
            {loading ? "Processing Donation..." : `Donate ₹${formData.amount} & Save Ananya`}
          </button>
          
          <p style={styles.secureText}>
            🔒 This payment is processed securely. 100% of your donation goes directly to the family's hospital account.
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
    backgroundColor: "#e5ddd5", // WhatsApp web background
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  phoneScreen: {
    width: "360px",
    height: "650px",
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
    overflowY: "auto",
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
  photoPlaceholder: {
    width: "100%",
    height: "120px",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chatButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#d32f2f",
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
    backgroundColor: "#d32f2f", // Deep red for urgency/heart
    padding: "20px",
    textAlign: "center",
  },
  portalBody: {
    padding: "20px",
  },
  urgencyBanner: {
    backgroundColor: "#ffebee",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ffcdd2",
    marginBottom: "20px",
    textAlign: "center",
    color: "#c62828",
  },
  campaignHeader: {
    marginBottom: "20px",
  },
  progressBarContainer: {
    width: "100%",
    height: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    marginBottom: "8px",
    overflow: "hidden",
  },
  progressBarFill: {
    width: "34%",
    height: "100%",
    backgroundColor: "#d32f2f",
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
    backgroundColor: "#d32f2f",
    color: "#fff",
    padding: "15px",
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
    marginTop: "15px",
    lineHeight: "1.4",
  }
};

export default FakeChildMedicalEmergencySim;