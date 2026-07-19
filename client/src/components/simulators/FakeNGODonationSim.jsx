import React, { useState } from "react";

const FakeNGODonationSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    donorName: "",
    email: "",
    phone: "",
    panNumber: "", // Scammers love collecting this under the guise of tax exemption
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
    if (!formData.donorName || !formData.email || !formData.phone || !formData.panNumber) {
      alert("Please fill in all details, including your PAN for the 80G tax receipt.");
      return;
    }

    if (formData.paymentMethod === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID to complete the donation.");
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
      let exposedData = ["Donor Name", "Email", "Phone Number", "PAN Card Number"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake Social Media Ad
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.socialFeed}>
          <div style={styles.postHeader}>
            <div style={styles.avatar}>🙏</div>
            <div>
              <h4 style={styles.pageName}>Hope For All Foundation</h4>
              <p style={styles.sponsoredText}>Sponsored • 🌍</p>
            </div>
          </div>
          
          <div style={styles.postContent}>
            <div style={styles.emotionalImagePlaceholder}>
              <span style={{ fontSize: "40px" }}>🏥 🧒</span>
              <p style={{ color: "#fff", fontWeight: "bold", margin: "10px 0 0 0" }}>Help Save Baby Arav</p>
            </div>
            <p style={{ fontSize: "14px", marginTop: "15px", marginBottom: "10px", lineHeight: "1.4" }}>
              3-year-old Arav is fighting a severe heart condition. His father, a daily wage worker, has exhausted all his savings. 
              He needs ₹5,00,000 for an urgent transplant within the next 48 hours! 💔
            </p>
            <p style={{ fontSize: "14px", marginBottom: "15px", fontWeight: "bold", color: "#2e7d32" }}>
              *All donations are 50% Tax Exempted under Section 80G.*
            </p>
            
            <div style={styles.progressBarContainer}>
              <div style={styles.progressBarFill}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#555", marginBottom: "15px" }}>
              <span>₹4,12,500 raised</span>
              <span>Goal: ₹5,00,000</span>
            </div>
          </div>
          
          <div style={styles.postAction}>
            <button style={styles.donateBtn} onClick={() => setView(1)}>
              Donate Now
            </button>
          </div>
          
          <div style={styles.engagement}>
            <span>❤️ 15.2K Likes</span>
            <span>4.1K Comments • 8.9K Shares</span>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake NGO Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "22px" }}>Hope For All NGO</h2>
        <p style={{ margin: "5px 0 0 0", color: "#e3f2fd", fontSize: "13px" }}>
          Registered Trust • 80G Tax Exemption Available
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.campaignBanner}>
          <strong>Campaign:</strong> Saving Baby Arav
          <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#555" }}>
            Urgency: High (Surgery scheduled in 48 hours)
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
                  backgroundColor: formData.donationAmount === amt ? "#1565c0" : "#f1f3f4",
                  color: formData.donationAmount === amt ? "#fff" : "#333",
                }}
                onClick={() => setFormData({ ...formData, donationAmount: amt })}
              >
                ₹{amt}
              </div>
            ))}
          </div>

          <h3 style={{ ...styles.sectionTitle, marginTop: "15px" }}>2. Donor Details</h3>
          
          <input
            style={styles.input}
            type="text"
            name="donorName"
            placeholder="Full Name (For Tax Receipt)"
            value={formData.donorName}
            onChange={handleInputChange}
          />
          
          <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
            <input
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              type="email"
              name="email"
              placeholder="Email ID"
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

          <input
            type="text"
            name="panNumber"
            placeholder="PAN Card Number (Required for 80G)"
            value={formData.panNumber}
            onChange={handleInputChange}
            maxLength="10"
            style={{ ...styles.input, textTransform: "uppercase" }}
          />

          <h3 style={styles.sectionTitle}>3. Secure Payment</h3>
          
          <div style={styles.paymentToggle}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === "upi"}
                onChange={handleInputChange}
              /> UPI (0% Fee)
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
            {loading ? "Processing..." : `Donate ₹${formData.donationAmount} Now`}
          </button>
          
          <p style={styles.secureText}>🔒 100% Secure Payment | TrustSeal Verified</p>
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
    backgroundColor: "#1565c0",
    color: "#fff",
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
    height: "150px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarContainer: {
    width: "100%",
    height: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    marginBottom: "5px",
    overflow: "hidden",
  },
  progressBarFill: {
    width: "82%",
    height: "100%",
    backgroundColor: "#1565c0",
  },
  postAction: {
    padding: "10px 15px",
    backgroundColor: "#f5f6f7",
    borderTop: "1px solid #dadde1",
    borderBottom: "1px solid #dadde1",
  },
  donateBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1565c0",
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
    backgroundColor: "#1565c0",
    padding: "20px",
    textAlign: "center",
  },
  portalBody: {
    padding: "20px",
  },
  campaignBanner: {
    backgroundColor: "#f1f8e9",
    color: "#2e7d32",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #c5e1a5",
    marginBottom: "20px",
    textAlign: "center",
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
    backgroundColor: "#1565c0",
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

export default FakeNGODonationSim;