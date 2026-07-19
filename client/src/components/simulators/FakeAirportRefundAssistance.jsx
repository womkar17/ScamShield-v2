import React, { useState } from 'react';

export default function FakeAirportAssistanceSimulator({ onComplete }) {
  const [showPortal, setShowPortal] = useState(false);
  const [passengerName, setPassengerName] = useState('');
  const [pnr, setPnr] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();

    if (!passengerName.trim() || !pnr.trim()) {
      setError('Please complete all required details.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      onComplete([
        'Passenger Name',
        'PNR Number'
      ]);
    }, 1500);
  };

  if (!showPortal) {
    return (
      <div
        style={{
          maxWidth: '760px',
          margin: '40px auto',
          background: '#f4f6f8',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0,0,0,.15)',
          fontFamily: 'Segoe UI'
        }}
      >
        <div
          style={{
            background: '#004d99',
            color: '#fff',
            padding: '18px',
            fontSize: '22px',
            fontWeight: 'bold'
          }}
        >
          ✈ Airport Assistance Service
        </div>

        <div style={{ padding: '25px' }}>
          <div
            style={{
              background: '#fff',
              borderRadius: '10px',
              padding: '20px',
              borderLeft: '5px solid #004d99'
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              Complimentary Airport Assistance
            </h3>

            <p>
              Dear Passenger,
            </p>

            <p>
              You are eligible for
              <strong> FREE VIP Airport Assistance </strong>
              including priority check-in, baggage handling and lounge access.
            </p>

            <p>
              Verify your travel details to reserve your complimentary service before departure.
            </p>

            <div
              style={{
                background: '#eef6ff',
                padding: '14px',
                borderRadius: '8px',
                margin: '20px 0',
                fontWeight: '600',
                color: '#004d99'
              }}
            >
              Limited Complimentary Service
            </div>

            <button
              onClick={() => setShowPortal(true)}
              style={{
                width: '100%',
                padding: '14px',
                border: 'none',
                borderRadius: '8px',
                background: '#004d99',
                color: '#fff',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Reserve Assistance
            </button>
          </div>
        </div>
      </div>
    );
  }
    return (
    <div
      style={{
        minHeight: '100vh',
        background: 'rgba(0,0,0,.65)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Segoe UI'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '470px',
          background: '#fff',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0,0,0,.25)'
        }}
      >
        <div
          style={{
            background: '#004d99',
            color: '#fff',
            padding: '18px',
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
          ✈ VIP Airport Assistance
        </div>

        <form
          onSubmit={handleBooking}
          style={{
            padding: '25px'
          }}
        >
          <div style={{ marginBottom: '18px' }}>
            <label>Passenger Name</label>

            <input
              type="text"
              placeholder="Enter Passenger Name"
              value={passengerName}
              onChange={(e) => {
                setPassengerName(e.target.value);
                setError('');
              }}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label>PNR Number</label>

            <input
              type="text"
              placeholder="Enter PNR Number"
              value={pnr}
              onChange={(e) => {
                setPnr(e.target.value.toUpperCase());
                setError('');
              }}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label>Airport</label>

            <input
              type="text"
              value="Mumbai International Airport"
              disabled
              style={inputStyle}
            />
          </div>

          <div
            style={{
              background: '#fff3cd',
              border: '1px solid #ffe69c',
              borderRadius: '8px',
              padding: '14px',
              marginBottom: '20px',
              color: '#856404',
              fontSize: '.9rem'
            }}
          >
            Your complimentary airport assistance will be activated after passenger verification.
          </div>

          {error && (
            <div
              style={{
                color: '#dc3545',
                marginBottom: '15px',
                fontWeight: '600'
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '15px',
              border: 'none',
              borderRadius: '8px',
              background: loading ? '#9aa0a6' : '#004d99',
              color: '#fff',
              fontWeight: '700',
              cursor: loading ? 'default' : 'pointer'
            }}
          >
            {loading
              ? 'Verifying Passenger...'
              : 'Activate Free Assistance'}
          </button>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '25px',
              textAlign: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '28px' }}>🛄</div>
              <small>Baggage Help</small>
            </div>

            <div>
              <div style={{ fontSize: '28px' }}>🛋️</div>
              <small>Lounge</small>
            </div>

            <div>
              <div style={{ fontSize: '28px' }}>✅</div>
              <small>Priority Check-in</small>
            </div>
          </div>
                    <div
            style={{
              marginTop: '25px',
              padding: '15px',
              background: '#f8f9fa',
              borderRadius: '8px',
              color: '#666',
              fontSize: '.85rem',
              lineHeight: '1.6'
            }}
          >
            <strong>Passenger Notice</strong>

            <ul
              style={{
                marginTop: '10px',
                paddingLeft: '18px'
              }}
            >
              <li>VIP assistance is available only for selected passengers.</li>
              <li>Passenger verification is mandatory.</li>
              <li>Service confirmation is sent instantly.</li>
              <li>Airport staff will contact you before departure.</li>
            </ul>
          </div>
        </form>

        <div
          style={{
            padding: '15px',
            background: '#f1f1f1',
            textAlign: 'center',
            fontSize: '.8rem',
            color: '#666',
            borderTop: '1px solid #ddd'
          }}
        >
          © 2026 Airport Passenger Assistance Portal
          <br />
          Secure Passenger Verification System
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginTop: '8px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '15px',
  boxSizing: 'border-box',
  outline: 'none'
};