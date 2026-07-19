import React, { useState } from 'react';

export default function FakeRailwayRefundSimulator({ onComplete }) {
  const [showPortal, setShowPortal] = useState(false);
  const [accountNo, setAccountNo] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRefund = (e) => {
    e.preventDefault();

    if (!accountNo.trim() || !ifsc.trim()) {
      setError('Please fill all details.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      onComplete([
        'Bank Account Number',
        'IFSC Code'
      ]);
    }, 1500);
  };

  if (!showPortal) {
    return (
      <div
        style={{
          maxWidth: '750px',
          margin: '40px auto',
          background: '#f4f6f8',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,.15)',
          fontFamily: 'Segoe UI'
        }}
      >
        <div
          style={{
            background: '#0052cc',
            color: '#fff',
            padding: '18px',
            fontSize: '22px',
            fontWeight: 'bold'
          }}
        >
          📩 SMS Inbox
        </div>

        <div style={{ padding: 25 }}>
          <div
            style={{
              background: '#fff',
              borderRadius: 10,
              padding: 20,
              borderLeft: '5px solid #0052cc'
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              IRCTC Refund Notification
            </h3>

            <p>
              Your cancelled railway ticket is eligible
              for a refund of
              <strong> ₹3,480.</strong>
            </p>

            <p>
              Due to a technical issue, the refund
              could not be credited automatically.
            </p>

            <p>
              Verify your bank account to receive
              the refund today.
            </p>

            <div
              style={{
                background: '#eef5ff',
                padding: 15,
                borderRadius: 8,
                marginTop: 20,
                marginBottom: 20,
                fontWeight: 'bold'
              }}
            >
              Refund Amount : ₹3,480
            </div>

            <button
              onClick={() => setShowPortal(true)}
              style={{
                width: '100%',
                padding: 15,
                border: 'none',
                borderRadius: 8,
                background: '#0052cc',
                color: '#fff',
                fontSize: 16,
                cursor: 'pointer'
              }}
            >
              Claim Refund
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
          maxWidth: '460px',
          background: '#fff',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0,0,0,.25)'
        }}
      >
        <div
          style={{
            background: '#0052cc',
            color: '#fff',
            padding: '18px',
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
          🚆 IRCTC Refund Portal
        </div>

        <form
          onSubmit={handleRefund}
          style={{
            padding: '25px'
          }}
        >
          <div style={{ marginBottom: '18px' }}>
            <label>Refund Amount</label>

            <input
              type="text"
              value="₹3,480"
              disabled
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label>Bank Account Number</label>

            <input
              type="text"
              placeholder="Enter Account Number"
              value={accountNo}
              onChange={(e) => {
                setAccountNo(e.target.value);
                setError('');
              }}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label>IFSC Code</label>

            <input
              type="text"
              placeholder="Enter IFSC Code"
              value={ifsc}
              onChange={(e) => {
                setIfsc(e.target.value.toUpperCase());
                setError('');
              }}
              style={inputStyle}
            />
          </div>

          <div
            style={{
              background: '#fff3cd',
              border: '1px solid #ffe69c',
              color: '#856404',
              padding: '14px',
              borderRadius: '8px',
              marginBottom: '20px',
              fontSize: '.9rem'
            }}
          >
            Your refund will be credited instantly after bank verification.
          </div>

          {error && (
            <div
              style={{
                color: '#d32f2f',
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
              background: loading ? '#9e9e9e' : '#0052cc',
              color: '#fff',
              cursor: loading ? 'default' : 'pointer',
              fontSize: '16px',
              fontWeight: '700'
            }}
          >
            {loading ? 'Processing Refund...' : 'Verify & Receive Refund'}
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
              <small>Secure</small>
            </div>

            <div>
              <div style={{ fontSize: '1.8rem' }}>💳</div>
              <small>Direct Credit</small>
            </div>

            <div>
              <div style={{ fontSize: '1.8rem' }}>⚡</div>
              <small>Instant</small>
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
            <strong>Refund Information</strong>

            <ul
              style={{
                marginTop: '10px',
                paddingLeft: '18px'
              }}
            >
              <li>Refund processed within 30 minutes.</li>
              <li>No processing charges.</li>
              <li>Amount credited directly to your bank account.</li>
              <li>IRCTC Refund Service Portal.</li>
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
          © 2026 Indian Railway Refund Portal
          <br />
          Secure Refund Gateway
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