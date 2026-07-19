import React, { useState } from "react";

export default function ElectricityBillScam({ onComplete }) {
  const [stage, setStage] = useState("message");
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (answer) => {
    setChoice(answer);

    if (answer === "pay") {
      setResult({
        type: "danger",
        message:
          "You clicked the fake payment option. Electricity bill scams use fake disconnection threats to steal banking details and money.",
      });
    } else {
      setResult({
        type: "safe",
        message:
          "Great decision! Always verify electricity bills through the official electricity provider app or website.",
      });
    }

    setStage("result");
  };

  const handleComplete = () => {
  if (onComplete) {
    onComplete([
      "Electricity Bill Scam Link",
      "Attempted Payment Action"
    ]);
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
      <h2>⚡ Electricity Bill Scam Simulator</h2>

      <p>
        You receive an urgent SMS claiming your electricity connection
        will be disconnected.
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
          "Your electricity bill is unpaid. Your connection will be
          disconnected today at 6 PM. Pay immediately to avoid service
          interruption."
        </p>

        <p>
          Payment Link:
          <br />

          <span style={{ color: "red" }}>
            www-electricity-reconnect-payment.com
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
            💳 Pay Bill Now
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
            🔍 Verify Bill First
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
              ? "Attempted payment through SMS link"
              : "Checked bill using official source"}
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
              : "⚠️ Scam Triggered"}
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
        <h3>🛡️ Electricity Scam Safety Tips</h3>

        <ul>
          <li>
            Electricity providers do not ask for payments through unknown links.
          </li>

          <li>
            Never call phone numbers provided in suspicious SMS messages.
          </li>

          <li>
            Verify outstanding bills only through the official electricity board
            app or website.
          </li>

          <li>
            Never share OTP, UPI PIN, or banking credentials.
          </li>

          <li>
            Scammers create urgency by threatening immediate disconnection.
          </li>
        </ul>
      </div>
    </div>
  );
}