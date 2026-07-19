import React, { useState } from "react";

export default function FASTagKYCSim({ onComplete }) {
  const [stage, setStage] = useState("message");
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (answer) => {
    setChoice(answer);

    if (answer === "update") {
      setResult({
        type: "danger",
        message:
          "You entered details on a fake FASTag KYC page. Scammers use fake KYC updates to steal banking information and FASTag account access.",
      });
    } else {
      setResult({
        type: "safe",
        message:
          "Good choice! Always complete FASTag KYC only through your bank or official FASTag provider.",
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
      <h2>🚗 FASTag KYC Scam Simulator</h2>

      <p>
        You receive an SMS saying your FASTag will be blocked due to
        incomplete KYC.
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
          "Your FASTag KYC is incomplete.
          Update your details within 24 hours to avoid FASTag suspension."
        </p>

        <p>
          KYC Update Link:
          <br />

          <span style={{ color: "red" }}>
            www-fastag-kyc-update-online.com
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
            onClick={() => handleChoice("update")}
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
            🔗 Update KYC Now
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
            🔍 Check Official FASTag Account
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
            {choice === "update"
              ? "Opened unknown FASTag KYC link"
              : "Verified FASTag details through official portal"}
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
        <h3>🛡️ FASTag KYC Scam Prevention Tips</h3>

        <ul>
          <li>
            Never update FASTag KYC using links received through random SMS messages.
          </li>

          <li>
            Always use your bank or official FASTag provider application.
          </li>

          <li>
            Do not share OTP, CVV, card details, or UPI PIN.
          </li>

          <li>
            Check the website address carefully before entering personal details.
          </li>

          <li>
            Scammers create urgency by threatening FASTag deactivation.
          </li>
        </ul>
      </div>
    </div>
  );
}