import React, { useState } from "react";

const FakeTempleDonationSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    devoteeName: "",
    phone: "",
    city: "",
    donationType: "general",
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
    if (!formData.devoteeName || !formData.phone || !formData.city) {
      alert("Please fill in your details so the receipt can be generated.");
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
      let exposedData = ["Devotee Name", "Phone Number", "City/Location"];
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
              <div style={styles.profilePic}>Family Group 👨‍👩‍👧‍👦</div>
            </div>
          </div>
          <div style={styles.chatBody}>
            <div style={styles.dateStamp}>Today</div>
            <div style={styles.messageBubble}>
              <div style={styles.forwardedLabel}>➦ Forwarded</div>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#e65100", fontWeight: "bold" }}>
                🙏 SHREE CHARIDHAM TEMPLE TRUST 🙏
              </p>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                Special Online Pooja & VIP Darshan bookings are now open for the upcoming holy month!
              </p>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                Donate minimum ₹501 for Temple Construction and get Prasad delivered directly to your home.
              </p>
              <p style={{ margin: "0 0 15px 0", fontSize: "14px", fontWeight: "bold" }}>
                Click the official trust link below to book your Darshan and donate:
              </p>
              <button
                style={styles.chatButton}
                onClick={() => setView(1)}
              >
                Om Shri Trust - Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Temple Trust Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "22px" }}>🕉️ Charidham Temple Trust</h2>
        <p style={{ margin: "5px 0 0 0", color: "#ffe0b2", fontSize: "13px" }}>
          Official Online Donation & Booking Portal
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.trustBanner}>
          🌸 <strong>Blessed Online Seva</strong>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#5d4037" }}>
            100% Tax Exempted under 80G. Prasad will be shipped within 7 working days.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>Devotee Details</h3>
          
          <input
            style={styles.input}
            type="text"
            name="devoteeName"
            placeholder="Full Name (For Sankalp)"
            value={formData.devoteeName}
            onChange={handleInputChange}
          />
          
          <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
            <input
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>

          <h3 style={{ ...styles.sectionTitle, marginTop: "10px" }}>Seva / Donation Type</h3>
          <select
            style={{ ...styles.input, marginBottom: "15px" }}
            name="donationType"
            value={formData.donationType}
            onChange={handleInputChange}
          >
            <option value="general">General Donation - ₹501</option>
            <option value="pooja">Special Online Pooja + Prasad - ₹1100</option>
            <option value="vip">VIP Darshan Pass - ₹2100</option>
            <option value="construction">Temple Construction - ₹5001</option>
          </select>

          <h3 style={styles.sectionTitle}>Payment Method</h3>
          
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
              /> Card
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
            {loading ? "Processing..." : "Proceed to Pay"}
          </button>
          
          <p style={styles.secureText}>🔒 Secure Payment Gateway</p>
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
    backgroundColor: "#ece5dd",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  phoneScreen: {
    width: "350px",
    height: "600px",
    backgroundColor: "#e5ddd5",
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
    padding: "10px",
    backgroundColor: "#ff9800",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    fontSize: "14px",
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
    backgroundColor: "#e65100",
    padding: "20px",
    textAlign: "center",
  },
  portalBody: {
    padding: "25px",
  },
  trustBanner: {
    backgroundColor: "#fff3e0",
    color: "#e65100",
    padding: "15px",
    borderRadius: "6px",
    border: "1px solid #ffe0b2",
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
    backgroundColor: "#e65100",
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

export default FakeTempleDonationSim;