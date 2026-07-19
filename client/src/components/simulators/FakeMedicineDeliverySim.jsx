import React, { useState } from "react";

const FakeMedicineDeliverySim = ({ onComplete }) => {
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    deliveryAddress: "",
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
    if (!formData.customerName || !formData.deliveryAddress || !formData.phone) {
      alert("Please fill in all delivery details to proceed.");
      return;
    }

    if (formData.paymentMethod === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID to complete the order.");
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
      let exposedData = ["Customer Name", "Delivery Address", "Phone Number"];
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
            <div style={styles.avatar}>M</div>
            <div>
              <h4 style={styles.pageName}>MediDiscount India</h4>
              <p style={styles.sponsoredText}>Sponsored • 🌍</p>
            </div>
          </div>
          <div style={styles.postContent}>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>
              🚨 <strong>Flash Sale!</strong> Get 60% OFF on all prescription medicines. 
              Including hard-to-find diabetes, BP, and heart medications! 💊📉
            </p>
            <p style={{ fontSize: "14px", marginBottom: "15px", color: "#d93025" }}>
              *Limited stock available. Free home delivery within 24 hours.*
            </p>
            <div style={styles.adBanner}>
              <h2 style={{ margin: 0 }}>60% OFF</h2>
              <p style={{ margin: "5px 0 0 0" }}>ON ALL MEDICINES</p>
            </div>
          </div>
          <div style={styles.postAction}>
            <div style={{ flex: 1 }}>
              <p style={styles.urlText}>WWW.MEDIDISCOUNT-INDIA.COM</p>
              <p style={styles.headlineText}>Order Medicines Online - Huge Discounts</p>
            </div>
            <button style={styles.shopNowBtn} onClick={() => setView(1)}>
              Shop Now
            </button>
          </div>
          <div style={styles.engagement}>
            <span>👍 ❤️ 8.4K Likes</span>
            <span>2.1K Comments • 500 Shares</span>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // VIEW 1: The Fake Pharmacy Checkout Portal
  // ---------------------------------------------------------
  return (
    <div style={styles.portalContainer}>
      <div style={styles.portalHeader}>
        <h2 style={{ margin: 0, color: "#fff", fontSize: "22px" }}>💊 MediDiscount Checkout</h2>
        <p style={{ margin: "5px 0 0 0", color: "#e8eaed", fontSize: "13px" }}>
          100% Genuine Medicines • Fast Delivery
        </p>
      </div>

      <div style={styles.portalBody}>
        <div style={styles.cartSummary}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "16px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>
            Order Summary
          </h3>
          <div style={styles.cartItem}>
            <span>Diabetes Care Pack (3 Months)</span>
            <span style={{ textDecoration: "line-through", color: "#888", fontSize: "12px" }}>₹4,500</span>
          </div>
          <div style={styles.cartItem}>
            <span>Heart & BP Essentials</span>
            <span style={{ textDecoration: "line-through", color: "#888", fontSize: "12px" }}>₹3,200</span>
          </div>
          <div style={{ ...styles.cartItem, marginTop: "10px", fontWeight: "bold", fontSize: "16px", color: "#28a745" }}>
            <span>Total Amount (60% OFF Applied):</span>
            <span>₹3,080.00</span>
          </div>
        </div>

        <div style={styles.urgencyBanner}>
          ⚠️ <strong>Offer expires in 05:43 minutes!</strong> Complete payment now to lock in this discount. COD is currently unavailable due to high demand.
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <h3 style={styles.sectionTitle}>Delivery Details</h3>
          
          <input
            style={styles.input}
            type="text"
            name="customerName"
            placeholder="Full Name"
            value={formData.customerName}
            onChange={handleInputChange}
          />
          <textarea
            style={{ ...styles.input, height: "60px", resize: "none" }}
            name="deliveryAddress"
            placeholder="Complete Home Address & Pincode"
            value={formData.deliveryAddress}
            onChange={handleInputChange}
          />
          <input
            style={styles.input}
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleInputChange}
          />

          <h3 style={{ ...styles.sectionTitle, marginTop: "15px" }}>Payment Method</h3>
          
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
              /> Debit/Credit Card
            </label>
          </div>

          {formData.paymentMethod === "upi" ? (
            <input
              style={styles.input}
              type="text"
              name="upiId"
              placeholder="Enter UPI ID (e.g., yourname@bank)"
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
            {loading ? "Processing Order..." : "Pay ₹3,080 & Place Order"}
          </button>
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
    backgroundColor: "#28a745",
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
    backgroundColor: "#ffebee",
    color: "#c62828",
    padding: "30px 20px",
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "15px",
    border: "2px dashed #ef9a9a",
  },
  postAction: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    backgroundColor: "#f0f2f5",
    borderTop: "1px solid #dadde1",
    borderBottom: "1px solid #dadde1",
  },
  urlText: {
    margin: 0,
    fontSize: "11px",
    color: "#606770",
    textTransform: "uppercase",
  },
  headlineText: {
    margin: "3px 0 0 0",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#1c1e21",
  },
  shopNowBtn: {
    padding: "8px 15px",
    backgroundColor: "#e4e6eb",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
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
    backgroundColor: "#28a745", // Pharmacy Green
    padding: "20px",
    textAlign: "center",
  },
  portalBody: {
    padding: "25px",
  },
  cartSummary: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "5px",
    border: "1px solid #e9ecef",
    marginBottom: "15px",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0",
    fontSize: "14px",
  },
  urgencyBanner: {
    backgroundColor: "#fff3cd",
    color: "#856404",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ffeeba",
    marginBottom: "20px",
    fontSize: "13px",
    lineHeight: "1.4",
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
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "14px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "15px",
    transition: "background-color 0.2s",
  },
};

export default FakeMedicineDeliverySim;