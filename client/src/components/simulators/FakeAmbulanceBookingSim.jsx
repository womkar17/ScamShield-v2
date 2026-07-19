import React, { useState } from "react";

const FakeAmbulanceBookingSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    pickupLocation: "",
    contactNumber: "",
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
    if (!formData.patientName || !formData.pickupLocation || !formData.contactNumber) {
      alert("Please provide all patient and location details for dispatch.");
      return;
    }

    if (formData.paymentMethod === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID to complete the booking.");
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

    // Simulate payment processing, then complete simulation
    setTimeout(() => {
      let exposedData = ["Patient Name", "Pickup Location", "Contact Number"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2000);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake Search Engine Ad
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.mobileScreen}>
          <div style={styles.searchHeader}>
            <div style={styles.searchBar}>
              <span style={{ fontSize: "16px", color: "#5f6368" }}>🔍</span>
              <span style={{ marginLeft: "10px", fontSize: "14px", color: "#202124" }}>
                emergency ambulance near me
              </span>
            </div>
          </div>
          
          <div style={styles.searchResults}>
            {/* Fake Ad Result */}
            <div style={styles.adResult} onClick={() => setView(1)}>
              <div style={styles.adBadge}>Sponsored</div>
              <h3 style={styles.resultTitle}>🚨 24/7 City Ambulance Service - 10 Min Arrival</h3>
              <p style={styles.resultUrl}>https://www.city-ambulance-fast-dispatch.com</p>
              <p style={styles.resultDesc}>
                Emergency ICU Ambulances available instantly. Oxygen, Ventilator & Paramedics on board. Book online now for immediate dispatch.
              </p>
            </div>

            {/* Organic Result (Decoy) */}
            <div style={styles.organicResult}>
              <h3 style={styles.resultTitle}>Local Hospital Emergency Contacts</h3>
              <p style={styles.resultUrl}>https://www.statehealth.gov.in/emergency</p>
              <p style={styles.resultDesc}>
                List of official government and private hospital emergency numbers. Call 108 for free medical emergencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Ambulance Booking Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "22px" }}>🚑 FastCare Dispatch</h2>
        <p style={{ margin: "5px 0 0 0", color: "#f8d7da", fontSize: "13px" }}>
          Current Estimated Arrival: <strong>8-12 Minutes</strong>
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.alertBanner}>
          ⚠️ <strong>High Demand Alert</strong>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#721c24" }}>
            Due to high call volumes, we require a ₹1,500 refundable dispatch fee to confirm your booking and send the ambulance immediately.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>1. Dispatch Details</h3>
          
          <input
            style={styles.input}
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={formData.patientName}
            onChange={handleInputChange}
          />
          <textarea
            style={{ ...styles.input, height: "70px", resize: "none" }}
            name="pickupLocation"
            placeholder="Exact Pickup Address / Landmark"
            value={formData.pickupLocation}
            onChange={handleInputChange}
          />
          <input
            style={styles.input}
            type="tel"
            name="contactNumber"
            placeholder="Emergency Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
          />

          <h3 style={{ ...styles.sectionTitle, marginTop: "15px" }}>2. Dispatch Fee (₹1,500)</h3>
          
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
              placeholder="Enter UPI ID (e.g., 9876543210@ybl)"
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
            {loading ? "Dispatching Ambulance..." : "Pay ₹1,500 & Book Now"}
          </button>
          
          <p style={styles.secureText}>🔒 256-bit Secure Encrypted Payment</p>
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
    backgroundColor: "#f0f2f5",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  mobileScreen: {
    width: "375px",
    height: "667px",
    backgroundColor: "#fff",
    borderRadius: "30px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    border: "8px solid #333",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  searchHeader: {
    padding: "20px 15px 10px",
    borderBottom: "1px solid #ebebeb",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #dfe1e5",
    borderRadius: "24px",
    padding: "10px 15px",
    boxShadow: "0 1px 6px rgba(32,33,36,0.28)",
  },
  searchResults: {
    padding: "15px",
    flex: 1,
    overflowY: "auto",
    backgroundColor: "#f8f9fa",
  },
  adResult: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    marginBottom: "15px",
    cursor: "pointer",
    border: "1px solid #e0e0e0",
    transition: "box-shadow 0.2s",
  },
  adBadge: {
    fontWeight: "bold",
    color: "#202124",
    fontSize: "12px",
    marginBottom: "5px",
  },
  organicResult: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
    border: "1px solid #e0e0e0",
  },
  resultTitle: {
    color: "#1a0dab",
    fontSize: "16px",
    margin: "0 0 5px 0",
    fontWeight: "normal",
  },
  resultUrl: {
    color: "#006621",
    fontSize: "12px",
    margin: "0 0 5px 0",
  },
  resultDesc: {
    color: "#4d5156",
    fontSize: "13px",
    lineHeight: "1.4",
    margin: 0,
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
    backgroundColor: "#dc3545", // Medical red
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
    backgroundColor: "#dc3545", // Matches header
    color: "#fff",
    padding: "14px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "15px",
    transition: "background-color 0.2s",
  },
  secureText: {
    textAlign: "center",
    fontSize: "11px",
    color: "#888",
    marginTop: "10px",
  }
};

export default FakeAmbulanceBookingSim;