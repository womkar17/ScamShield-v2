import React, { useState, useEffect } from "react";

export default function FakeFunkyShoppingScamSim({ onComplete }) {
  const [view, setView] = useState("home");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [upiId, setUpiId] = useState("");
  const [upiPin, setUpiPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState({ h: 1, m: 59, s: 59 });
  const [notification, setNotification] = useState(0);

  const notifications = [
    "🔥 Priya from Mumbai purchased 2 minutes ago",
    "🔥 Rahul from Pune purchased 1 minute ago",
    "🔥 Sneha from Delhi just placed an order",
    "🔥 Aman from Nashik purchased now",
    "🔥 Neha from Bangalore booked this deal"
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setTimer(prev => {
        let { h, m, s } = prev;
        if (s > 0) {
          s--;
        } else {
          s = 59;
          if (m > 0) {
            m--;
          } else {
            m = 59;
            if (h > 0) {
              h--;
            }
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const n = setInterval(() => {
      setNotification(p => (p + 1) % notifications.length);
    }, 3500);
    return () => clearInterval(n);
  }, []);

  const handleNext = () => {
    if (!name || !mobile || !email || !address) {
      setError("Please fill all details.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Enter valid 10 digit mobile number.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter valid email.");
      return;
    }
    setError("");
    setView("payment");
  };

  const handlePayment = () => {
    const upiRegex = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z]{2,}$/;
    if (!upiRegex.test(upiId)) {
      setError("Enter a valid UPI ID (example@okaxis)");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView("otp");
    }, 1800);
  };

  const handleVerify = () => {
    if (!/^\d{4}$|^\d{6}$/.test(upiPin)) {
      setError("UPI PIN must be 4 or 6 digits.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView("success");
    }, 1800);
  };

  if (view === "home") {
    return (
      <div style={{ background: "#f5f7fb", minHeight: "100vh", padding: "30px" }}>
        <div style={{ maxWidth: "1100px", margin: "auto", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 15px 40px rgba(0,0,0,.15)" }}>
          <div style={{ background: "linear-gradient(90deg,#ff006e,#8338ec)", padding: "18px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" }}>
            <h2>🛍 Funky Fashion</h2>
            <div>Home   Products   Sale   Contact</div>
          </div>
          <div style={{ padding: "30px" }}>
            <div style={{ background: "linear-gradient(135deg,#ff006e,#fb5607)", padding: "25px", borderRadius: "16px", color: "#fff", marginBottom: "25px" }}>
              <h1>MEGA SALE</h1>
              <h2>80% OFF</h2>
              <h3>Branded Shoes • Hoodies • Watches</h3>
              <h1>₹499 Only</h1>
              <div style={{ marginTop: "15px", fontWeight: "700", fontSize: "22px" }}>
                Offer Ends In
                <br />
                {String(timer.h).padStart(2, "0")}:
                {String(timer.m).padStart(2, "0")}:
                {String(timer.s).padStart(2, "0")}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "30px" }}>
              {[
                { img: "👟", name: "Nike Air Max", old: "₹6,999", price: "₹499" },
                { img: "⌚", name: "Apple Watch", old: "₹24,999", price: "₹499" },
                { img: "🎧", name: "Sony Headphones", old: "₹8,999", price: "₹499" }
              ].map((p, i) => (
                <div key={i} style={{ border: "1px solid #eee", borderRadius: "14px", padding: "20px", textAlign: "center", boxShadow: "0 5px 20px rgba(0,0,0,.08)" }}>
                  <div style={{ fontSize: "60px" }}>{p.img}</div>
                  <h3>{p.name}</h3>
                  <p style={{ textDecoration: "line-through", color: "#999" }}>{p.old}</p>
                  <h2 style={{ color: "#e63946" }}>{p.price}</h2>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#ecfeff", padding: "20px", borderRadius: "12px" }}>
                <h3>⭐ Customer Reviews</h3>
                <p>★★★★★ Priya Sharma<br />Amazing quality. Fast delivery.</p>
                <hr />
                <p>★★★★★ Rahul Verma<br />Worth every rupee.</p>
                <hr />
                <p>★★★★★ Sneha Patel<br />Very genuine website.</p>
              </div>
              <div style={{ background: "#f0fdf4", padding: "20px", borderRadius: "12px" }}>
                <h3>✅ Why Shop With Us?</h3>
                <p>✔ Trusted by 10 Lakh+ Customers</p>
                <p>✔ Secure Checkout</p>
                <p>✔ Free Delivery</p>
                <p>✔ Easy Returns</p>
                <p>✔ Cash on Delivery Available</p>
              </div>
            </div>
            <div style={{ background: "#fff7ed", padding: "25px", borderRadius: "16px", border: "1px solid #fed7aa" }}>
              <h2>Complete Your Order</h2>
              <label>Full Name</label>
              <input className="form-control" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
              <label>Mobile Number</label>
              <input className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} placeholder="10-digit mobile" style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
              <label>Email Address</label>
              <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
              <label>Delivery Address</label>
              <textarea className="form-control" rows={3} value={address} onChange={e => setAddress(e.target.value)} placeholder="Enter delivery address" style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
              {error && (
                <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
              )}
              <button
                onClick={handleNext}
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "16px",
                  background: "linear-gradient(90deg,#ff006e,#8338ec)",
                  border: "none",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "700",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
              >
                Continue to Secure Checkout →
              </button>
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              left: "20px",
              background: "#16a34a",
              color: "#fff",
              padding: "14px 18px",
              borderRadius: "12px",
              boxShadow: "0 8px 25px rgba(0,0,0,.25)",
              fontWeight: "600",
              zIndex: 999
            }}
          >
            {notifications[notification]}
          </div>
        </div>
      </div>
    );
  }

  if (view === "payment") {
    return (
      <div style={{ background: "#f4f6fb", minHeight: "100vh", padding: "30px" }}>
        <div style={{ maxWidth: "900px", margin: "auto", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 15px 40px rgba(0,0,0,.15)" }}>
          <div style={{ background: "linear-gradient(90deg,#6a11cb,#2575fc)", padding: "20px", color: "#fff", fontSize: "24px", fontWeight: "700" }}>
            🔒 Secure Checkout
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", padding: "30px" }}>
            <div>
              <h2>Order Summary</h2>
              <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", marginTop: "15px" }}>
                <h3>🛍 Funky Fashion Mega Sale</h3>
                <hr />
                <p>Nike Air Max Shoes <span style={{ float: "right" }}>₹6,999</span></p>
                <p>Mega Discount <span style={{ float: "right", color: "green" }}>-₹6,500</span></p>
                <p>Shipping <span style={{ float: "right" }}>FREE</span></p>
                <p>GST <span style={{ float: "right" }}>₹0</span></p>
                <hr />
                <h2>Total <span style={{ float: "right", color: "#e63946" }}>₹499</span></h2>
              </div>
              <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "18px", borderRadius: "12px" }}>
                <h3>✔ Secure Payment</h3>
                <p>• 256-bit SSL Encryption</p>
                <p>• UPI Protected</p>
                <p>• RBI Compliant</p>
                <p>• Instant Confirmation</p>
              </div>
            </div>
            <div>
              <h2>Payment Details</h2>
              <label>UPI ID</label>
              <input
                className="form-control"
                placeholder="example@okaxis"
                value={upiId}
                onChange={(e) => {
                  setUpiId(e.target.value);
                  setError("");
                }}
                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
              />
              <p style={{ fontSize: "13px", color: "#555", marginTop: "10px" }}>
                Examples: rahul@ybl, priya@okaxis, amit@ibl
              </p>
              {error && (
                <p style={{ color: "red", fontWeight: "600" }}>{error}</p>
              )}
              <button
                disabled={loading}
                onClick={handlePayment}
                style={{
                  width: "100%",
                  marginTop: "25px",
                  padding: "16px",
                  background: loading ? "#999" : "linear-gradient(90deg,#6a11cb,#2575fc)",
                  border: "none",
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "18px",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
              >
                {loading ? "Connecting to Bank..." : "Pay ₹499"}
              </button>
              <div style={{ marginTop: "30px", padding: "18px", background: "#fff7ed", borderRadius: "12px", fontSize: "14px" }}>
                🔐 Your payment is protected using secure banking encryption.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === "otp") {
    return (
      <div style={{ background: "#eef2ff", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "650px", margin: "auto", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.18)" }}>
          <div style={{ background: "linear-gradient(90deg,#4338ca,#2563eb)", padding: "20px", color: "#fff" }}>
            <h2>🏦 UPI Payment Gateway</h2>
            <p>Powered by NPCI</p>
          </div>
          <div style={{ padding: "35px" }}>
            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", marginBottom: "25px" }}>
              <h3>Transaction Summary</h3>
              <hr />
              <p>Merchant <span style={{ float: "right" }}>Funky Fashion</span></p>
              <p>Transaction ID <span style={{ float: "right" }}>FF78293491</span></p>
              <p>Amount <span style={{ float: "right", fontWeight: "700", color: "#dc2626" }}>₹499</span></p>
            </div>
            <h3>Authenticate Payment</h3>
            <p>Enter your <b>4 or 6 digit</b> UPI PIN.</p>
            <input
              type="password"
              maxLength={6}
              className="form-control"
              placeholder="Enter UPI PIN"
              value={upiPin}
              onChange={(e) => {
                setUpiPin(e.target.value);
                setError("");
              }}
              style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <div style={{ marginTop: "18px", background: "#fef3c7", padding: "15px", borderRadius: "10px", fontSize: "14px" }}>
              ⚠ Never share your UPI PIN with anyone. Banks never ask for it.
            </div>
            {error && (
              <p style={{ color: "red", marginTop: "15px", fontWeight: "600" }}>{error}</p>
            )}
            <button
              disabled={loading}
              onClick={handleVerify}
              style={{
                width: "100%",
                marginTop: "25px",
                padding: "16px",
                background: loading ? "#999" : "linear-gradient(90deg,#4338ca,#2563eb)",
                border: "none",
                color: "#fff",
                fontWeight: "700",
                fontSize: "18px",
                borderRadius: "12px",
                cursor: "pointer"
              }}
            >
              {loading ? "Authenticating..." : "Confirm Payment"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === "success") {
    return (
      <div style={{ background: "#f3f4f6", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "900px", margin: "auto", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.18)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "25px", color: "#fff", textAlign: "center" }}>
            <h1>🚨 SCAM DETECTED!</h1>
            <h3>This was a Fake Shopping Website.</h3>
          </div>
          <div style={{ padding: "35px" }}>
            <div style={{ background: "#fee2e2", padding: "20px", borderRadius: "12px", marginBottom: "25px" }}>
              <h2>⚠ Risk Level</h2>
              <div style={{ height: "18px", background: "#ddd", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "95%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>HIGH RISK</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "12px" }}>
                <h2>📂 Information Exposed</h2>
                <ul>
                  <li>👤 Full Name</li>
                  <li>📱 Mobile Number</li>
                  <li>📧 Email Address</li>
                  <li>🏠 Delivery Address</li>
                  <li>💳 UPI ID</li>
                  <li>🔐 UPI PIN</li>
                </ul>
              </div>
              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "12px" }}>
                <h2>🚩 Red Flags</h2>
                <ul>
                  <li>80% discount on every product.</li>
                  <li>Countdown timer created urgency.</li>
                  <li>Fake customer reviews.</li>
                  <li>Recently created shopping website.</li>
                  <li>Requested payment immediately.</li>
                  <li>No verified company information.</li>
                </ul>
              </div>
            </div>
            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "12px" }}>
              <h2>🛡 Stay Safe</h2>
              <ul>
                <li>Shop only on trusted websites.</li>
                <li>Always verify the website URL.</li>
                <li>Never share your UPI PIN.</li>
                <li>Avoid unbelievable discounts.</li>
                <li>Use secure payment methods.</li>
                <li>Report suspicious websites to Cyber Crime (1930).</li>
              </ul>
            </div>
            <div style={{ marginTop: "30px", background: "#eff6ff", padding: "20px", borderRadius: "12px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Opened Fake Website</p>
              <p>⬇</p>
              <p>✅ Entered Personal Details</p>
              <p>⬇</p>
              <p>✅ Entered UPI ID</p>
              <p>⬇</p>
              <p>✅ Entered UPI PIN</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Fraudsters Captured Your Information</p>
            </div>
            <button
              onClick={() =>
                onComplete([
                  "Full Name",
                  "Mobile Number",
                  "Email Address",
                  "Delivery Address",
                  "UPI ID",
                  "UPI PIN"
                ])
              }
              style={{
                width: "100%",
                marginTop: "30px",
                padding: "18px",
                background: "linear-gradient(90deg,#2563eb,#4338ca)",
                border: "none",
                color: "#fff",
                fontWeight: "700",
                fontSize: "18px",
                borderRadius: "12px",
                cursor: "pointer"
              }}
            >
              Continue to Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}