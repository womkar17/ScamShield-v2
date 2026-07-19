import React, { useState } from 'react';

export default function FakeFedExDeliverySimulator({ onComplete }) {
  const [showPortal, setShowPortal] = useState(false);
  const [trackingNo, setTrackingNo] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDelivery = (e) => {
    e.preventDefault();

    if (!trackingNo.trim() || !mobile.trim()) {
      setError('Please complete all required details.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      onComplete([
        'Tracking Number',
        'Mobile Number'
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
            background: '#4D148C',
            color: '#fff',
            padding: '18px',
            fontSize: '22px',
            fontWeight: 'bold'
          }}
        >
          📦 FedEx Delivery Notification
        </div>

        <div style={{ padding: '25px' }}>
          <div
            style={{
              background: '#fff',
              borderRadius: '10px',
              padding: '20px',
              borderLeft: '5px solid #FF6600'
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              Delivery Attempt Failed
            </h3>

            <p>
              Dear Customer,
            </p>

            <p>
              We attempted to deliver your parcel today,
              but nobody was available to receive it.
            </p>

            <p>
              Schedule a free re-delivery by verifying
              your shipment information.
            </p>

            <div
              style={{
                background: '#fff3cd',
                padding: '14px',
                borderRadius: '8px',
                margin: '20px 0',
                fontWeight: '600',
                color: '#8a5300'
              }}
            >
              Parcel Status : Awaiting Customer Confirmation
            </div>

            <button
              onClick={() => setShowPortal(true)}
              style={{
                width: '100%',
                padding: '14px',
                border: 'none',
                borderRadius: '8px',
                background: '#4D148C',
                color: '#fff',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Schedule Re-Delivery
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
            background: '#4D148C',
            color: '#fff',
            padding: '18px',
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
          📦 FedEx Shipment Verification
        </div>

        <form
          onSubmit={handleDelivery}
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
            <label>Registered Mobile Number</label>

            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
                setError('');
              }}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label>Delivery Status</label>

            <input
              type="text"
              value="Awaiting Address Verification"
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
            Your shipment will be rescheduled immediately after verification.
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
              background: loading ? '#999' : '#4D148C',
              color: '#fff',
              fontWeight: '700',
              cursor: loading ? 'default' : 'pointer'
            }}
          >
            {loading
              ? 'Verifying Shipment...'
              : 'Verify & Schedule Delivery'}
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
              <small>Package</small>
            </div>

            <div>
              <div style={{ fontSize: '28px' }}>🚚</div>
              <small>Re-Delivery</small>
            </div>

            <div>
              <div style={{ fontSize: '28px' }}>🔒</div>
              <small>Secure</small>
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
              <li>Package will be delivered within 24 hours.</li>
              <li>Verification is required before re-delivery.</li>
              <li>No additional shipping charges.</li>
              <li>FedEx Delivery Management System.</li>
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
          © 2026 FedEx Delivery Services
          <br />
          Shipment Verification Portal
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