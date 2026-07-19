import React, { useState } from "react";

export default function TollPaymentSim({ onComplete }) {
  const [stage, setStage] = useState("message");
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (answer) => {
    setChoice(answer);

    if (answer === "pay") {
      setResult({
        type: "danger",
        message:
          "You attempted payment through a fake toll payment link. Scammers create fake challan and toll notices to steal money and banking details.",
      });
    } else {
      setResult({
        type: "safe",
        message:
          "Good decision! Always verify toll payments and penalties through official government or FASTag platforms.",
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
      <h2>🛣️ Fake Toll Payment Scam Simulator</h2>

      <p>
        You receive an SMS claiming that an unpaid toll amount is pending.
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
          "Your vehicle has an unpaid toll charge of ₹450.
          Pay immediately to avoid penalty and legal action."
        </p>

        <p>
          Payment Link:
          <br />

          <span style={{ color: "red" }}>
            www-online-toll-payment-check.com
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
            💳 Pay Toll Fine
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
            🔍 Verify Toll Status
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
              ? "Paid toll amount using unknown link"
              : "Verified toll details from official source"}
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
        <h3>🛡️ Toll Payment Scam Prevention Tips</h3>

        <ul>
          <li>
            Never pay toll penalties through unknown SMS or WhatsApp links.
          </li>

          <li>
            Verify toll charges only through official FASTag or government portals.
          </li>

          <li>
            Do not share vehicle documents, OTP, or banking information.
          </li>

          <li>
            Be cautious of messages creating fear of legal action.
          </li>

          <li>
            Check the website URL before entering any payment details.
          </li>
        </ul>
      </div>
    </div>
  );
}