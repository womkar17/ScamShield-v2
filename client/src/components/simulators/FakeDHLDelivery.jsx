import React, { useState } from 'react';

export default function FakeDHLDeliverySimulator({ onComplete }) {
  const [showPortal, setShowPortal] = useState(false);
  const [trackingNo, setTrackingNo] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerification = (e) => {
    e.preventDefault();

    if (!trackingNo.trim() || !email.trim()) {
      setError('Please complete all required details.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      onComplete([
        'Tracking Number',
        'Email Address'
      ]);
    }, 1500);
  };

  if (!showPortal) {
    return (
      <div
        style={{
          maxWidth: '760px',
          margin: '40px auto',
          background: '#f5f5f5',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0,0,0,.15)',
          fontFamily: 'Segoe UI'
        }}
      >
        <div
          style={{
            background: '#ffcc00',
            color: '#d40511',
            padding: '18px',
            fontSize: '22px',
            fontWeight: 'bold'
          }}
        >
          📦 DHL Express Notification
        </div>

        <div style={{ padding: '25px' }}>
          <div
            style={{
              background: '#fff',
              borderRadius: '10px',
              padding: '20px',
              borderLeft: '5px solid #d40511'
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              Shipment On Hold
            </h3>

            <p>Dear Customer,</p>

            <p>
              Your DHL shipment has reached the local
              delivery center but cannot be dispatched.
            </p>

            <p>
              Please verify your shipment information
              to continue delivery.
            </p>

            <div
              style={{
                background: '#fff7d6',
                padding: '14px',
                borderRadius: '8px',
                margin: '20px 0',
                fontWeight: '600',
                color: '#8a5300'
              }}
            >
              Status : Awaiting Customer Verification
            </div>

            <button
              onClick={() => setShowPortal(true)}
              style={{
                width: '100%',
                padding: '14px',
                border: 'none',
                borderRadius: '8px',
                background: '#d40511',
                color: '#fff',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Verify Shipment
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
            background: '#d40511',
            color: '#fff',
            padding: '18px',
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
          📦 DHL Shipment Verification
        </div>

        <form
          onSubmit={handleVerification}
          style={{
            padding: '25px'
          }}
        >
          <div style={{ marginBottom: '18px' }}>
            <label>Tracking Number</label>

            <input
              type="text"
              placeholder="Enter Tracking Number"
              value={trackingNo}
              onChange={(e) => {
                setTrackingNo(e.target.value.toUpperCase());
                setError('');
              }}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label>Shipment Status</label>

            <input
              type="text"
              value="Pending Address Confirmation"
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
            Verify your details to avoid shipment cancellation.
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
              background: loading ? '#999' : '#d40511',
              color: '#fff',
              fontWeight: '700',
              cursor: loading ? 'default' : 'pointer'
            }}
          >
            {loading
              ? 'Verifying Shipment...'
              : 'Verify Shipment'}
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
              <div style={{ fontSize: '28px' }}>📦</div>
              <small>Shipment</small>
            </div>

            <div>
              <div style={{ fontSize: '28px' }}>🚚</div>
              <small>Express</small>
            </div>

            <div>
              <div style={{ fontSize: '28px' }}>📧</div>
              <small>Email Verify</small>
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
            <strong>Shipment Notice</strong>

            <ul
              style={{
                marginTop: '10px',
                paddingLeft: '18px'
              }}
            >
              <li>Shipment is temporarily on hold.</li>
              <li>Verification must be completed today.</li>
              <li>Delivery resumes after successful verification.</li>
              <li>DHL Express Secure Delivery Portal.</li>
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
          © 2026 DHL Express
          <br />
          Shipment Verification Center
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