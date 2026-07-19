import React, { useState } from "react";

const FakeBloodDonationSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    donorName: "",
    bloodGroup: "",
    phone: "",
    address: "",
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
    if (!formData.donorName || !formData.bloodGroup || !formData.phone || !formData.address) {
      alert("Please fill in all donor details so we can contact you immediately.");
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
      let exposedData = ["Donor Name", "Blood Group", "Phone Number", "Home Address"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake Social Media Post Lure
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.socialFeed}>
          <div style={styles.postHeader}>
            <div style={styles.avatar}>🔴</div>
            <div>
              <h4 style={styles.pageName}>Urgent Blood Donors India</h4>
              <p style={styles.sponsoredText}>2 hrs ago • 🌍</p>
            </div>
          </div>
          <div style={styles.postContent}>
            <p style={{ fontSize: "14px", marginBottom: "10px", color: "#d93025", fontWeight: "bold" }}>
              🚨 URGENT: 5 Units of O-ve Blood Required 🚨
            </p>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>
              A 7-year-old girl is in critical condition following a severe accident. She urgently needs 5 units of O-Negative blood for surgery in the next 3 hours.
            </p>
            <p style={{ fontSize: "14px", marginBottom: "15px" }}>
              Location: City Memorial Hospital<br/>
              Patient: Baby Aarohi
            </p>
            <div style={styles.adBanner}>
              <h2 style={{ margin: 0, fontSize: "20px" }}>PLEASE HELP SAVE A LIFE</h2>
              <p style={{ margin: "5px 0 0 0", fontSize: "14px" }}>Click below to register as a donor instantly.</p>
            </div>
          </div>
          <div style={styles.postAction}>
            <button style={styles.donateBtn} onClick={() => setView(1)}>
              Register to Donate Now
            </button>
          </div>
          <div style={styles.engagement}>
            <span>🔁 1.2K Retweets</span>
            <span>❤️ 3.4K Likes</span>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake NGO / Blood Bank Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "20px" }}>🩸 LifeDrop NGO</h2>
        <p style={{ margin: "5px 0 0 0", color: "#f8d7da", fontSize: "12px" }}>
          Emergency Donor Registration Portal
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.alertBanner}>
          ⚠️ <strong>CRITICAL ALERT: O-Negative Needed</strong>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#721c24" }}>
            Patient is in the ICU. Please complete registration immediately to receive the exact ward details and hospital contact.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>1. Donor Information</h3>
          
          <input
            style={styles.input}
            type="text"
            name="donorName"
            placeholder="Full Name"
            value={formData.donorName}
            onChange={handleInputChange}
          />
          
          <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
            <select
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
            >
              <option value="" disabled>Select Blood Group</option>
              <option value="O-">O Negative (O-)</option>
              <option value="O+">O Positive (O+)</option>
              <option value="A-">A Negative (A-)</option>
              <option value="A+">A Positive (A+)</option>
              <option value="B-">B Negative (B-)</option>
              <option value="B+">B Positive (B+)</option>
              <option value="AB-">AB Negative (AB-)</option>
              <option value="AB+">AB Positive (AB+)</option>
            </select>
            <input
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            style={{ ...styles.input, height: "60px", resize: "none" }}
            name="address"
            placeholder="Your Current Address / Landmark"
            value={formData.address}
            onChange={handleInputChange}
          />

          <h3 style={{ ...styles.sectionTitle, marginTop: "15px" }}>2. Donor Verification Fee</h3>
          
          <div style={styles.feeBox}>
            <span style={{ fontSize: "13px", color: "#555", lineHeight: "1.4" }}>
              To prevent spam and fake registrations, a refundable verification fee is required. This will be refunded in cash at the hospital.
            </span>
            <span style={{ fontWeight: "bold", fontSize: "16px", color: "#d93025", marginTop: "10px", display: "block" }}>
              Fee Amount: ₹49.00
            </span>
          </div>

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
            {loading ? "Verifying Donor Details..." : "Pay ₹49 & Get Hospital Details"}
          </button>
          
          <p style={styles.secureText}>🔒 Secure SSL Encrypted Connection</p>
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
    backgroundColor: "#fce8e6",
    color: "#d93025",
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
  adBanner: {
    backgroundColor: "#d93025",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  postAction: {
    padding: "10px 15px",
    backgroundColor: "#fff",
    borderTop: "1px solid #dadde1",
    borderBottom: "1px solid #dadde1",
  },
  donateBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#d93025",
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
    maxWidth: "450px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    overflow: "hidden",
  },
  portalHeader: {
    backgroundColor: "#c92a2a", // Deep red for blood/emergency
    padding: "20px",
    textAlign: "center",
  },
  portalBody: {
    padding: "25px",
  },
  alertBanner: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #f5c6cb",
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
    backgroundColor: "#fff3cd",
    padding: "12px 15px",
    borderRadius: "6px",
    border: "1px solid #ffeeba",
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
    backgroundColor: "#c92a2a",
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

export default FakeBloodDonationSim;
