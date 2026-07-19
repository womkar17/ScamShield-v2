import React, { useState } from "react";

export default function CustomsClearanceSim({ onComplete }) {
  const [stage, setStage] = useState("message");
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (answer) => {
    setChoice(answer);

    if (answer === "pay") {
      setResult({
        type: "danger",
        message:
          "You paid the fake customs charge. Scammers often create fake customs notices and demand urgent payments for imaginary packages.",
      });
    } else {
      setResult({
        type: "safe",
        message:
          "Good choice! You avoided the scam. Always verify customs charges through official government or courier channels.",
      });
    }

    setStage("result");
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div
      style={{
        padding: "25px",
        maxWidth: "700px",
        margin: "auto",
        fontFamily: "Arial",
      }}
    >
      <h2>📦 Customs Clearance Scam Simulator</h2>

      <p>
        You receive an SMS:
      </p>

      <div
        style={{
          background: "#f1f5f9",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "15px",
        }}
      >
        <b>Message:</b>

        <p>
          "Your international package is held by customs.
          Pay ₹999 clearance charges immediately to avoid
          package return."
        </p>

        <p>
          Link:
          <br />
          <span style={{ color: "red" }}>
            www-customs-payment-check.com
          </span>
        </p>
      </div>

      <h3>
        What will you do?
      </h3>
            {stage === "message" && (
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => handleChoice("pay")}
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              border: "none",
              background: "#dc2626",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            💳 Pay Customs Fee
          </button>

          <button
            onClick={() => handleChoice("verify")}
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              border: "none",
              background: "#16a34a",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            🔍 Verify First
          </button>
        </div>
      )}

      {choice && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#e2e8f0",
            borderRadius: "10px",
          }}
        >
          <p>
            Your selected action:
          </p>

          <strong>
            {choice === "pay"
              ? "Paid customs fee"
              : "Verified the customs request"}
          </strong>
        </div>
      )}
            {result && (
        <div
          style={{
            marginTop: "25px",
            padding: "20px",
            borderRadius: "12px",
            background:
              result.type === "safe"
                ? "#dcfce7"
                : "#fee2e2",
            border:
              result.type === "safe"
                ? "1px solid #22c55e"
                : "1px solid #ef4444",
          }}
        >
          <h3>
            {result.type === "safe"
              ? "✅ Scam Avoided"
              : "⚠️ You Fell For The Scam"}
          </h3>

          <p>
            {result.message}
          </p>

          {result.type === "safe" && (
            <button
              onClick={handleComplete}
              style={{
                marginTop: "15px",
                padding: "12px 25px",
                borderRadius: "8px",
                border: "none",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Complete Module
            </button>
          )}
        </div>
      )}

      <div
        style={{
          marginTop: "25px",
          padding: "20px",
          borderRadius: "12px",
          background: "#f8fafc",
          border: "1px solid #cbd5e1",
        }}
      >
        <h3>🛡️ Customs Scam Prevention Tips</h3>

        <ul>
          <li>
            Customs departments do not ask for random payments through SMS links.
          </li>

          <li>
            Always verify package details from the official courier website.
          </li>

          <li>
            Never share OTP, UPI PIN, card details, or banking passwords.
          </li>

          <li>
            Be careful with urgent messages creating fear or pressure.
          </li>
        </ul>
      </div>
    </div>
  );
}