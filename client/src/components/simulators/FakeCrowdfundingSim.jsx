import React, { useState } from "react";

const FakeCrowdfundingSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    donorName: "",
    email: "",
    tipAmount: "10", // Crowdfunding sites often ask for platform tips
    donationAmount: "1000",
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
    if (!formData.donorName || !formData.email) {
      alert("Please enter your name and email to proceed.");
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
      let exposedData = ["Donor Name", "Email Address"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake Social Media Ad (Emotional Lure)
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.socialFeed}>
          <div style={styles.postHeader}>
            <div style={styles.avatar}>🐾</div>
            <div>
              <h4 style={styles.pageName}>Animal Rescues India</h4>
              <p style={styles.sponsoredText}>Sponsored • 🌍</p>
            </div>
          </div>
          
          <div style={styles.postContent}>
            <p style={{ fontSize: "14px", marginBottom: "10px", lineHeight: "1.4" }}>
              🚨 <strong>Please help save Max!</strong> 🚨 <br/>
              We found this 3-month-old puppy abandoned on the highway with two broken legs. The vet says if he doesn't get surgery in the next 12 hours, he won't make it. 😭
            </p>
            
            <div style={styles.emotionalImagePlaceholder}>
              <span style={{ fontSize: "40px" }}>🐶 🏥</span>
              <p style={{ color: "#fff", fontWeight: "bold", margin: "10px 0 0 0" }}>URGENT: Surgery Needed</p>
            </div>
            
            <p style={{ fontSize: "14px", marginTop: "15px", marginBottom: "5px" }}>
              We've raised ₹12,000 but still need ₹35,000 to cover the operation costs!
            </p>
            <p style={{ fontSize: "13px", color: "#1565c0", fontWeight: "bold" }}>
              Tap below to contribute to Max's campaign!
            </p>
          </div>
          
          <div style={styles.postAction}>
            <button style={styles.donateBtn} onClick={() => setView(1)}>
              Donate to Save Max
            </button>
          </div>
          
          <div style={styles.engagement}>
            <span>❤️ 45.8K Likes</span>
            <span>8.2K Comments • 12K Shares</span>
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
        <h2 style={{ margin: 0, color: "#fff", fontSize: "22px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          💚 CareFundr
        </h2>
        <p style={{ margin: "5px 0 0 0", color: "#e8f5e9", fontSize: "12px" }}>
          Trusted by Millions to Change Lives
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.campaignHeader}>
          <h3 style={{ margin: "0 0 5px 0", fontSize: "18px", color: "#333" }}>Save Max's Life - Emergency Surgery</h3>
          <p style={{ margin: "0 0 15px 0", fontSize: "13px", color: "#666" }}>Organizer: Rajesh Kumar (Unverified)</p>
          
          <div style={styles.progressBarContainer}>
            <div style={styles.progressBarFill}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#333", fontWeight: "bold" }}>
            <span>₹12,450 raised</span>
            <span style={{ color: "#888", fontWeight: "normal" }}>of ₹47,000 goal</span>
          </div>
          <p style={{ margin: "10px 0 0 0", fontSize: "12px", color: "#d32f2f", fontWeight: "bold" }}>
            ⏳ 234 people donated in the last hour!
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>1. Enter Your Donation</h3>
          
          <div style={styles.amountGrid}>
            {["500", "1000", "2500", "5000"].map((amt) => (
              <div
                key={amt}
                style={{
                  ...styles.amountChip,
                  backgroundColor: formData.donationAmount === amt ? "#2e7d32" : "#f1f3f4",
                  color: formData.donationAmount === amt ? "#fff" : "#333",
                  borderColor: formData.donationAmount === amt ? "#1b5e20" : "#ccc"
                }}
                onClick={() => setFormData({ ...formData, donationAmount: amt })}
              >
                ₹{amt}
              </div>
            ))}
          </div>

          <div style={styles.tipBox}>
            <label style={{ fontSize: "13px", color: "#444", fontWeight: "bold", display: "block", marginBottom: "5px" }}>
              Support CareFundr Platform (Optional Tip)
            </label>
            <select
              style={{ ...styles.input, marginBottom: 0 }}
              name="tipAmount"
              value={formData.tipAmount}
              onChange={handleInputChange}
            >
              <option value="0">No Tip</option>
              <option value="10">10% Tip (Recommended)</option>
              <option value="15">15% Tip</option>
              <option value="20">20% Tip</option>
            </select>
          </div>

          <h3 style={styles.sectionTitle}>2. Donor Information</h3>
          
          <input
            style={styles.input}
            type="text"
            name="donorName"
            placeholder="Full Name"
            value={formData.donorName}
            onChange={handleInputChange}
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email Address (For Receipt)"
            value={formData.email}
            onChange={handleInputChange}
          />

          <h3 style={{ ...styles.sectionTitle, marginTop: "5px" }}>3. Payment Method</h3>
          
          <div style={styles.paymentToggle}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === "upi"}
                onChange={handleInputChange}
              /> UPI (Google Pay / PhonePe)
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === "card"}
                onChange={handleInputChange}
              /> Credit/Debit Card
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
            {loading ? "Processing..." : `Donate ₹${parseInt(formData.donationAmount) + (parseInt(formData.donationAmount) * (formData.tipAmount / 100))} Now`}
          </button>
          
          <p style={styles.secureText}>🔒 Secure Encryption • Funds Guaranteed (Fake Badge)</p>
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
    backgroundColor: "#e9ebee",
    padding: "20px",
    fontFamily: "Helvetica, Arial, sans-serif",
  },
  socialFeed: {
    width: "400px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  postHeader: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    gap: "10px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    backgroundColor: "#ffecb3",
    color: "#ff8f00",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "18px",
  },
  pageName: {
    margin: 0,
    fontSize: "15px",
    color: "#1c1e21",
    fontWeight: "bold",
  },
  sponsoredText: {
    margin: 0,
    fontSize: "12px",
    color: "#606770",
  },
  postContent: {
    padding: "0 15px",
  },
  emotionalImagePlaceholder: {
    backgroundColor: "#37474f",
    height: "170px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  postAction: {
    padding: "15px",
    backgroundColor: "#f5f6f7",
    borderTop: "1px solid #dadde1",
    borderBottom: "1px solid #dadde1",
    marginTop: "10px",
  },
  donateBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2e7d32", // Crowdfunding Green
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
  },
  engagement: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 15px",
    fontSize: "13px",
    color: "#606770",
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
    backgroundColor: "#2e7d32", // Green trust branding
    padding: "20px",
    textAlign: "center",
  },
  portalBody: {
    padding: "20px",
  },
  campaignHeader: {
    marginBottom: "20px",
  },
  progressBarContainer: {
    width: "100%",
    height: "8px",
    backgroundColor: "#e0e0e0",
    borderRadius: "4px",
    marginBottom: "8px",
    overflow: "hidden",
  },
  progressBarFill: {
    width: "26%",
    height: "100%",
    backgroundColor: "#2e7d32",
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
    padding: "10px 0",
    textAlign: "center",
    borderRadius: "6px",
    border: "1px solid #ccc",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "all 0.2s ease",
  },
  tipBox: {
    backgroundColor: "#f8f9fa",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #e9ecef",
    marginBottom: "20px",
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
    backgroundColor: "#2e7d32",
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

export default FakeCrowdfundingSim;