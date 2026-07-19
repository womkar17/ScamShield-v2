import React, { useState } from 'react';

export default function FakePilgrimagePackageSimulator({ onComplete }) {
  const [view, setView] = useState('whatsapp'); // whatsapp | booking

  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [upi, setUpi] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBookClick = (e) => {
    e.preventDefault();
    setView('booking');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !fullName.trim() ||
      !mobile.trim() ||
      !aadhaar.trim() ||
      !upi.trim()
    ) {
      setError('Please fill all required details.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      onComplete([
        'Full Name',
        'Mobile Number',
        'Aadhaar Number',
        'UPI ID'
      ]);
    }, 1800);
  };

  if (view === 'whatsapp') {
    return (
      <div
        style={{
          maxWidth: '390px',
          margin: '0 auto',
          height: '700px',
          borderRadius: '28px',
          overflow: 'hidden',
          background: '#ece5dd',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0,0,0,.45)',
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'
        }}
      >

        {/* Status Bar */}

        <div
          style={{
            background: '#075E54',
            color: '#fff',
            padding: '12px 18px',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '.82rem'
          }}
        >
          <strong>9:41</strong>

          <div>
            📶 🔋92%
          </div>
        </div>

        {/* Header */}

        <div
          style={{
            background: '#075E54',
            color: '#fff',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem'
            }}
          >
            🛕
          </div>

          <div>
            <div
              style={{
                fontWeight: '700'
              }}
            >
              Temple Travels
            </div>

            <div
              style={{
                fontSize: '.75rem',
                color: '#d5f5e3'
              }}
            >
              online
            </div>
          </div>
        </div>

        {/* Chat */}

        <div
          style={{
            flex: 1,
            padding: '18px',
            overflow: 'auto'
          }}
        >

          <div
            style={{
              textAlign: 'center',
              marginBottom: '18px'
            }}
          >
            <span
              style={{
                background: '#d8d8d8',
                padding: '4px 14px',
                borderRadius: '12px',
                fontSize: '.75rem'
              }}
            >
              Today
            </span>
          </div>

          <div
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '18px',
              maxWidth: '95%',
              boxShadow: '0 2px 8px rgba(0,0,0,.12)'
            }}
          >

            <div
              style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '12px'
              }}
            >
              🛕 CHAR DHAM YATRA 2026
            </div>

            <p>
              ✅ Kedarnath
              <br />
              ✅ Badrinath
              <br />
              ✅ Gangotri
              <br />
              ✅ Yamunotri
            </p>

            <p>
              ✈ Flight Included
              <br />
              🏨 Hotel Included
              <br />
              🍱 Food Included
              <br />
              🙏 VIP Darshan
            </p>

            <div
              style={{
                background: '#FFF8E1',
                border: '1px dashed orange',
                borderRadius: '8px',
                padding: '12px',
                margin: '18px 0'
              }}
            >
              <div
                style={{
                  textDecoration: 'line-through',
                  color: '#999'
                }}
              >
                Original Price ₹32,999
              </div>

              <div
                style={{
                  fontSize: '1.7rem',
                  color: '#27AE60',
                  fontWeight: '700'
                }}
              >
                ₹4,999
              </div>

              <small>Today Only</small>
            </div>

            <div
              style={{
                color: '#E74C3C',
                fontWeight: '600',
                marginBottom: '16px'
              }}
            >
              ⚠ Only 8 Seats Remaining
            </div>

            <button
              onClick={handleBookClick}
              style={{
                width: '100%',
                padding: '14px',
                border: 'none',
                background: '#25D366',
                color: '#fff',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Book Now
            </button>

          </div>

          <div
            style={{
              marginTop: '18px',
              background: '#DCF8C6',
              padding: '12px',
              borderRadius: '12px',
              marginLeft: '70px'
            }}
          >
            Is this offer still available?
          </div>

        </div>
      </div>
    );
    }
      // ============================
  // Fake Pilgrimage Booking Page
  // ============================

  return (
    <div
      style={{
        maxWidth: '520px',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 12px 40px rgba(0,0,0,.18)',
        fontFamily: '"Segoe UI",sans-serif'
      }}
    >
      {/* Browser Bar */}

      <div
        style={{
          background: '#f1f1f1',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderBottom: '1px solid #ddd'
        }}
      >
        <div style={{ display: 'flex', gap: '4px' }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#ff5f57'
            }}
          />

          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#febc2e'
            }}
          />

          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#28c840'
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            background: '#fff',
            border: '1px solid #ccc',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '.82rem'
          }}
        >
          🔒 https://mahadev-pilgrimage-booking.in
        </div>
      </div>

      {/* Website Header */}

      <div
        style={{
          background:
            'linear-gradient(135deg,#ff9800,#ff5722)',
          color: '#fff',
          padding: '28px',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            fontSize: '3rem'
          }}
        >
          🛕
        </div>

        <h2
          style={{
            margin: '10px 0 5px'
          }}
        >
          Temple Travels
        </h2>

        <p
          style={{
            margin: 0,
            opacity: .95
          }}
        >
          Official Char Dham Booking Portal
        </p>
      </div>

      {/* Offer */}

      <div
        style={{
          background: '#fff8e1',
          padding: '18px',
          borderBottom: '1px solid #eee'
        }}
      >
        <h3
          style={{
            margin: 0,
            color: '#d35400'
          }}
        >
          🎉 Special Pilgrimage Offer
        </h3>

        <div
          style={{
            marginTop: '10px',
            fontSize: '2rem',
            color: '#27ae60',
            fontWeight: 'bold'
          }}
        >
          ₹4,999
        </div>

        <div
          style={{
            textDecoration: 'line-through',
            color: '#888'
          }}
        >
          ₹32,999
        </div>

        <p
          style={{
            color: '#e74c3c',
            marginTop: '8px',
            fontWeight: '600'
          }}
        >
          Only 8 seats left. Offer expires today.
        </p>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        style={{
          padding: '28px'
        }}
      >
        <div style={{ marginBottom: '18px' }}>
          <label>Full Name</label>

          <input
            type="text"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setError('');
            }}
            placeholder="Enter Full Name"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '18px' }}>
          <label>Mobile Number</label>

          <input
            type="tel"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
              setError('');
            }}
            placeholder="10-digit Mobile Number"
            maxLength={10}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '18px' }}>
          <label>Aadhaar Number</label>

          <input
            type="text"
            value={aadhaar}
            onChange={(e) => {
              setAadhaar(e.target.value);
              setError('');
            }}
            placeholder="XXXX XXXX XXXX"
            maxLength={12}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>UPI ID</label>

          <input
            type="text"
            value={upi}
            onChange={(e) => {
              setUpi(e.target.value);
              setError('');
            }}
            placeholder="example@upi"
            style={inputStyle}
          />
        </div>

        {error && (
          <div
            style={{
              color: '#e74c3c',
              marginBottom: '16px',
              fontWeight: '600'
            }}
          >
            {error}
          </div>
        )}

        <div
          style={{
            background: '#fff3cd',
            padding: '14px',
            borderRadius: '8px',
            marginBottom: '18px',
            fontSize: '.9rem'
          }}
        >
          ⚠ Booking confirmation will be sent immediately after successful payment.
        </div>
                <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '16px',
            border: 'none',
            borderRadius: '8px',
            background: loading ? '#95a5a6' : '#2ecc71',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: loading ? 'default' : 'pointer',
            transition: '.25s'
          }}
        >
          {loading ? 'Confirming Booking...' : 'Pay ₹4,999 & Confirm Booking'}
        </button>

        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            justifyContent: 'space-between',
            textAlign: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '1.8rem' }}>🔒</div>
            <small>Secure Payment</small>
          </div>

          <div>
            <div style={{ fontSize: '1.8rem' }}>✅</div>
            <small>Instant Confirmation</small>
          </div>

          <div>
            <div style={{ fontSize: '1.8rem' }}>☎</div>
            <small>24x7 Support</small>
          </div>
        </div>

        <div
          style={{
            marginTop: '28px',
            padding: '16px',
            background: '#f8f9fa',
            borderRadius: '8px',
            fontSize: '.82rem',
            color: '#666',
            lineHeight: '1.6'
          }}
        >
          <strong>Why thousands trust Temple Travels?</strong>

          <ul
            style={{
              marginTop: '10px',
              paddingLeft: '18px'
            }}
          >
            <li>Government Approved Pilgrimage Partner</li>
            <li>50,000+ Happy Pilgrims</li>
            <li>Lowest Price Guaranteed</li>
            <li>VIP Darshan Included</li>
          </ul>
        </div>
      </form>

      <div
        style={{
          padding: '18px',
          textAlign: 'center',
          background: '#fafafa',
          borderTop: '1px solid #eee',
          color: '#888',
          fontSize: '.8rem'
        }}
      >
        © 2026 Temple Travels Pvt. Ltd.
        <br />
        Terms | Privacy | Refund Policy
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  marginTop: '8px',
  border: '1px solid #dcdcdc',
  borderRadius: '6px',
  outline: 'none',
  fontSize: '.95rem',
  boxSizing: 'border-box',
  transition: '.2s'
};
