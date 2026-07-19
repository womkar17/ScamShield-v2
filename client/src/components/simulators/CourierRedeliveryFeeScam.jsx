import React, { useState } from "react";

export default function CourierRedeliveryFeeSim({ onComplete }) {
  const [stage, setStage] = useState("message");
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (answer) => {
    setChoice(answer);

    if (answer === "pay") {
      setResult({
        type: "danger",
        message:
          "You entered the fake courier payment process. Scammers send fake delivery failure messages and ask for small redelivery fees to steal money and personal information.",
      });
    } else {
      setResult({
        type: "safe",
        message:
          "Excellent choice! Always verify courier status using the official courier website or application.",
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
      <h2>📦 Courier Redelivery Fee Scam Simulator</h2>

      <p>
        You receive an SMS saying your package delivery failed and
        requires a small redelivery payment.
      </p>

      <div
        style={{
          background: "#f1f5f9",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "15px",
        }}
      >
        <b>SMS Message:</b>

        <p>
          "Your parcel delivery failed because address verification
          is incomplete. Pay ₹49 redelivery charges to schedule
          another delivery attempt."
        </p>

        <p>
          Payment Link:
          <br />

          <span style={{ color: "red" }}>
            www-courier-redelivery-payment.com
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
            💳 Pay Redelivery Fee
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
            🔍 Verify Courier Details
          </button>
        </div>
      )}

      {choice && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            borderRadius: "10px",
            background: "#e2e8f0",
          }}
        >
          <p>
            Your selected action:
          </p>

          <strong>
            {choice === "pay"
              ? "Paid redelivery charges using unknown link"
              : "Checked delivery status from official courier source"}
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
              : "⚠️ Scam Detected"}
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
        <h3>🛡️ Courier Redelivery Scam Prevention Tips</h3>

        <ul>
          <li>
            Never pay redelivery charges through unknown SMS links.
          </li>

          <li>
            Track parcels only using the official courier website or app.
          </li>

          <li>
            Do not share OTP, card details, UPI PIN, or passwords with anyone.
          </li>

          <li>
            Verify the sender number before clicking any delivery link.
          </li>

          <li>
            Scammers often use small payment amounts to appear genuine.
          </li>
        </ul>
      </div>
    </div>
  );
}