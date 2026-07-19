import React, { useState } from 'react';

export default function FakeIndiaPostTrackingSimulator({ onComplete }) {
  const [showPortal, setShowPortal] = useState(false);
  const [trackingNo, setTrackingNo] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerification = (e) => {
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
            background: '#d32f2f',
            color: '#fff',
            padding: '18px',
            fontSize: '22px',
            fontWeight: 'bold'
          }}
        >
          📮 India Post Tracking
        </div>

        <div style={{ padding: '25px' }}>
          <div
            style={{
              background: '#fff',
              borderRadius: '10px',
              padding: '20px',
              borderLeft: '5px solid #fbc02d'
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              Delivery Could Not Be Completed
            </h3>

            <p>Dear Customer,</p>

            <p>
              Your Speed Post / Registered Parcel has arrived
              at your nearest delivery office.
            </p>

            <p>
              Delivery could not be completed because your
              address requires confirmation.
            </p>

            <div
              style={{
                background: '#fff8e1',
                padding: '14px',
                borderRadius: '8px',
                margin: '20px 0',
                fontWeight: '600',
                color: '#8a5300'
              }}
            >
              Status : Awaiting Address Verification
            </div>

            <button
              onClick={() => setShowPortal(true)}
              style={{
                width: '100%',
                padding: '14px',
                border: 'none',
                borderRadius: '8px',
                background: '#d32f2f',
                color: '#fff',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Verify Delivery Details
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
            background: '#d32f2f',
            color: '#fff',
            padding: '18px',
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
          📮 India Post Delivery Verification
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
            <label>Parcel Status</label>

            <input
              type="text"
              value="Awaiting Address Verification"
              disabled
              style={inputStyle}
            />
          </div>

          <div
            style={{
              background: '#fff8e1',
              border: '1px solid #ffe082',
              borderRadius: '8px',
              padding: '14px',
              marginBottom: '20px',
              color: '#8a5300',
              fontSize: '.9rem'
            }}
          >
            Verify your details to schedule your parcel delivery.
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
              background: loading ? '#999' : '#d32f2f',
              color: '#fff',
              fontWeight: '700',
              cursor: loading ? 'default' : 'pointer'
            }}
          >
            {loading
              ? 'Verifying Parcel...'
              : 'Verify Delivery'}
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
              <small>Parcel</small>
            </div>

            <div>
              <div style={{ fontSize: '28px' }}>📮</div>
              <small>India Post</small>
            </div>

            <div>
              <div style={{ fontSize: '28px' }}>🏠</div>
              <small>Address</small>
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
            <strong>Delivery Notice</strong>

            <ul
              style={{
                marginTop: '10px',
                paddingLeft: '18px'
              }}
            >
              <li>Your parcel is ready for delivery.</li>
              <li>Recipient verification is required.</li>
              <li>Delivery will resume after successful verification.</li>
              <li>India Post Secure Tracking Portal.</li>
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
          © 2026 India Post
          <br />
          Secure Parcel Tracking System
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