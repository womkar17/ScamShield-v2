import React, { useState } from "react";

const FakeTelemedicineAppSim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "male",
    symptoms: "",
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
    if (!formData.patientName || !formData.age || !formData.symptoms || !formData.phone) {
      alert("Please fill in all medical details so the doctor can review your case.");
      return;
    }

    if (formData.paymentMethod === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID to pay the consultation fee.");
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

    // Simulate connecting to the doctor, then complete simulation
    setTimeout(() => {
      let exposedData = ["Patient Name", "Age/Gender", "Medical Symptoms", "Phone Number"];
      if (formData.paymentMethod === "upi") {
        exposedData.push("UPI ID");
      } else {
        exposedData.push("Credit/Debit Card Details");
      }
      onComplete(exposedData);
    }, 2500);
  };

  // ---------------------------------------------------------
  // VIEW 0: The Fake SMS / Promotional Lure
  // ---------------------------------------------------------
  if (view === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.phoneScreen}>
          <div style={styles.smsHeader}>
            <div style={styles.smsHeaderLeft}>
              <div style={styles.backArrow}>←</div>
              <div style={styles.senderName}>VM-HealthPlus</div>
            </div>
          </div>
          <div style={styles.smsBody}>
            <div style={styles.dateStamp}>Today 10:42 AM</div>
            <div style={styles.messageBubble}>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                Feeling unwell? Don't wait in long hospital queues! 🏥
              </p>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                Consult India's Top Specialist Doctors online in exactly <strong>2 minutes</strong> via Video Call.
              </p>
              <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                Special Offer: 1st Consultation at just <strong>₹199</strong> (Valid for 1 hour).
              </p>
              <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#0066cc" }}>
                Click below to connect with a doctor instantly:
              </p>
              <button
                style={styles.smsButton}
                onClick={() => setView(1)}
              >
                Book Instant Consult
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Telemedicine App Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "20px" }}>🩺 HealthPlus Consult</h2>
        <p style={{ margin: "5px 0 0 0", color: "#e3f2fd", fontSize: "12px" }}>
          24/7 Verified Specialist Doctors
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.doctorProfile}>
          <div style={styles.doctorAvatar}>👨‍⚕️</div>
          <div style={styles.doctorInfo}>
            <h3 style={{ margin: "0 0 5px 0", fontSize: "16px", color: "#333" }}>Dr. Sanjay Kumar</h3>
            <p style={{ margin: "0 0 5px 0", fontSize: "13px", color: "#666" }}>MD - General Medicine (15 yrs exp)</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#28a745", fontWeight: "bold" }}>
              🟢 Online - Ready to connect
            </p>
          </div>
        </div>

        <div style={styles.feeBanner}>
          <span>Consultation Fee:</span>
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>₹199.00</span>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>Patient Details</h3>
          
          <input
            style={styles.input}
            type="text"
            name="patientName"
            placeholder="Patient's Full Name"
            value={formData.patientName}
            onChange={handleInputChange}
          />
          
          <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
            <input
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
            />
            <select
              style={{ ...styles.input, marginBottom: 0, flex: 1 }}
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <textarea
            style={{ ...styles.input, height: "60px", resize: "none" }}
            name="symptoms"
            placeholder="Briefly describe your symptoms (e.g., fever, headache since 2 days)"
            value={formData.symptoms}
            onChange={handleInputChange}
          />
          
          <input
            style={styles.input}
            type="tel"
            name="phone"
            placeholder="WhatsApp Number (for Video Link)"
            value={formData.phone}
            onChange={handleInputChange}
          />

          <h3 style={{ ...styles.sectionTitle, marginTop: "10px" }}>Payment Method</h3>
          
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
            {loading ? "Connecting to Doctor..." : "Pay ₹199 & Start Call"}
          </button>
          <p style={styles.secureText}>🔒 100% Secure & Confidential</p>
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
  phoneScreen: {
    width: "350px",
    height: "600px",
    backgroundColor: "#f9f9f9",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  smsHeader: {
    backgroundColor: "#f5f5f5",
    padding: "15px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
  },
  smsHeaderLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  backArrow: {
    fontSize: "20px",
    cursor: "pointer",
    color: "#007aff",
  },
  senderName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  smsBody: {
    padding: "20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  dateStamp: {
    textAlign: "center",
    color: "#8e8e93",
    fontSize: "12px",
    marginBottom: "15px",
  },
  messageBubble: {
    backgroundColor: "#e5e5ea",
    padding: "15px",
    borderRadius: "15px",
    borderBottomLeftRadius: "5px",
    color: "#000",
    maxWidth: "85%",
  },
  smsButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007aff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "5px",
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
    backgroundColor: "#0066cc",
    padding: "20px",
    textAlign: "center",
  },
  portalBody: {
    padding: "25px",
  },
  doctorProfile: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    border: "1px solid #e9ecef",
    marginBottom: "15px",
  },
  doctorAvatar: {
    width: "50px",
    height: "50px",
    backgroundColor: "#e3f2fd",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
  },
  doctorInfo: {
    flex: 1,
  },
  feeBanner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    padding: "12px 15px",
    borderRadius: "6px",
    marginBottom: "20px",
    border: "1px solid #c8e6c9",
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
    backgroundColor: "#0066cc",
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
    marginTop: "10px",
  }
};

export default FakeTelemedicineAppSim;