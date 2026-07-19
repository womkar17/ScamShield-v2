import React, { useState } from "react";

export default function PUBGUCScamSim({ onComplete }) {
  const [stage, setStage] = useState("message");
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (answer) => {
    setChoice(answer);

    if (answer === "claim") {
      setResult({
        type: "danger",
        message:
          "You entered the fake UC reward process. Scammers use free UC offers to steal PUBG accounts, login credentials, and payment details.",
      });
    } else {
      setResult({
        type: "safe",
        message:
          "Great choice! Avoid unofficial UC generators and verify all rewards through official PUBG channels.",
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
      <h2>🎮 PUBG UC Scam Simulator</h2>

      <p>
        You receive a message offering free UC (Unknown Cash) rewards.
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
          "Congratulations! You have been selected for
          6000 free PUBG UC. Login now and verify your account
          to receive rewards."
        </p>

        <p>
          Reward Link:
          <br />

          <span style={{ color: "red" }}>
            www-freepubguc-rewards.com
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
            onClick={() => handleChoice("claim")}
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
            🪙 Claim Free UC
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
            🔍 Verify Official Reward
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
            {choice === "claim"
              ? "Opened free UC reward website"
              : "Checked reward authenticity"}
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
              : "⚠️ Gaming Scam Detected"}
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
        <h3>🛡️ PUBG UC Scam Prevention Tips</h3>

        <ul>
          <li>
            Free UC generators and hacks are almost always fake.
          </li>

          <li>
            Never enter your PUBG login details on unofficial websites.
          </li>

          <li>
            Do not share OTP, verification codes, or account recovery details.
          </li>

          <li>
            Purchase UC only through official PUBG payment channels.
          </li>

          <li>
            Enable two-factor authentication to secure your gaming account.
          </li>
        </ul>
      </div>
    </div>
  );
}