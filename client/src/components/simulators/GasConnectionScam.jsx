import React, { useState } from "react";

export default function GasConnectionSim({ onComplete }) {
  const [stage, setStage] = useState("message");
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (answer) => {
    setChoice(answer);

    if (answer === "pay") {
      setResult({
        type: "danger",
        message:
          "You entered the scam flow. Fake gas connection messages often ask for small payments, KYC updates, or booking fees to steal money and personal details.",
      });
    } else {
      setResult({
        type: "safe",
        message:
          "Excellent! You verified the request first. Always use official LPG/gas provider apps and customer care numbers.",
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
      <h2>🔥 Gas Connection Scam Simulator</h2>

      <p>
        You receive a message claiming your gas connection needs urgent
        KYC verification.
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
          "Your LPG connection will be suspended due to incomplete KYC.
          Update details and pay ₹299 processing fee immediately."
        </p>

        <p>
          Verification Link:
          <br />

          <span style={{ color: "red" }}>
            www-lpg-kyc-update-service.com
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
            💳 Pay KYC Fee
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
            🔍 Verify With Gas Provider
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
              ? "Paid KYC fee using unknown link"
              : "Verified request through official channel"}
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
        <h3>🛡️ Gas Connection Scam Safety Tips</h3>

        <ul>
          <li>
            Never pay LPG/gas KYC fees through unknown SMS links.
          </li>

          <li>
            Verify KYC updates only through the official gas provider app or website.
          </li>

          <li>
            Do not share OTP, Aadhaar details, bank details, or UPI PIN.
          </li>

          <li>
            Scammers create urgency by threatening service suspension.
          </li>

          <li>
            Contact customer support using the official helpline number only.
          </li>
        </ul>
      </div>
    </div>
  );
}