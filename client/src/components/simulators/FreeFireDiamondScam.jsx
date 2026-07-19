import React, { useState } from "react";

export default function FreeFireDiamondSim({ onComplete }) {
  const [stage, setStage] = useState("message");
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (answer) => {
    setChoice(answer);

    if (answer === "claim") {
      setResult({
        type: "danger",
        message:
          "You entered the fake diamond reward process. Scammers use free diamond offers to steal game accounts, passwords, and payment information.",
      });
    } else {
      setResult({
        type: "safe",
        message:
          "Good choice! Free diamond generators and unofficial reward links are common gaming scams.",
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
      <h2>🎮 Free Fire Diamond Scam Simulator</h2>

      <p>
        You receive a message claiming you won unlimited free diamonds.
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
          "Congratulations! You have won 10,000 Free Fire diamonds.
          Verify your account now to claim your reward."
        </p>

        <p>
          Reward Link:
          <br />

          <span style={{ color: "red" }}>
            www-freefire-diamond-generator.com
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
            💎 Claim Free Diamonds
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
            🔍 Ignore & Verify Officially
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
              ? "Opened free diamond generator link"
              : "Ignored suspicious reward message"}
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
        <h3>🛡️ Gaming Scam Prevention Tips</h3>

        <ul>
          <li>
            Free diamond generators and hacks are usually scams.
          </li>

          <li>
            Never enter your game ID, password, or OTP on unknown websites.
          </li>

          <li>
            Download game updates and rewards only from official stores.
          </li>

          <li>
            Avoid clicking reward links shared by unknown users.
          </li>

          <li>
            Enable two-factor authentication to protect your gaming account.
          </li>
        </ul>
      </div>
    </div>
  );
}