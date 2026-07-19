import React, { useState } from "react";

export default function FakeIdoLaunchpadScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const [seedPhrase, setSeedPhrase] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #8b5cf6",
    fontSize: "15px",
    outline: "none",
    background: "#1a1033",
    color: "#ddd6fe",
    fontFamily: "monospace",
    boxSizing: "border-box"
  };

  /* ===================================
        WALLET VERIFICATION / KYC PAGE
  =================================== */
  if (view === "verify") {
    return (
      <div style={{ background: "#0a0518", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#1a1033", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 50px rgba(139,92,246,.3)", color: "#fff", border: "1px solid #4c1d95" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>🚀</div>
            <h1 style={{ color: "#a78bfa", fontFamily: "monospace" }}>CryptoMoon Launchpad</h1>
            <h2>Whitelist Verification</h2>
            <p style={{ color: "#c4b5fd" }}>Verify your wallet to secure your IDO allocation</p>
          </div>

          <div style={{ background: "linear-gradient(135deg,#4c1d95,#6d28d9)", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #8b5cf6" }}>
            <h3 style={{ color: "#ddd6fe", marginTop: 0 }}>🎯 Your Allocation</h3>
            <p style={{ fontSize: "24px", color: "#fbbf24", fontWeight: "700", margin: "10px 0" }}>50,000 $MOON Tokens</p>
            <p style={{ color: "#c4b5fd" }}>Expected Listing Price: $0.50</p>
            <p style={{ color: "#16a34a", fontWeight: "700" }}>💰 Potential Profit: 100x 🚀🚀🚀</p>
          </div>

          <div style={{ background: "#2d1b4e", padding: "15px", borderRadius: "10px", marginBottom: "20px", border: "1px solid #fbbf24" }}>
            <p style={{ margin: 0, color: "#fde68a", fontSize: "13px" }}>
              🔐 <b>Wallet Verification Required:</b> To prevent bot abuse and confirm you're a real investor, we need to verify ownership of your wallet. Your seed phrase is encrypted and NEVER stored.
            </p>
          </div>

          <label style={{ color: "#c4b5fd", fontSize: "13px" }}>Your Wallet Address</label>
          <input
            placeholder="0x..."
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#c4b5fd", fontSize: "13px" }}>Wallet Seed Phrase (12 words) — for verification only</label>
          <textarea
            placeholder="word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12"
            value={seedPhrase}
            onChange={(e) => setSeedPhrase(e.target.value)}
            style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
          />

          <label style={{ color: "#c4b5fd", fontSize: "13px" }}>Investment Amount (USDT)</label>
          <input
            placeholder="e.g., 500"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#8b5cf6,#6d28d9)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            🚀 Verify & Claim Allocation →
          </button>
        </div>
      </div>
    );
  }

  /* ===================================
        SUCCESS / SCAM DETECTED PAGE
        (Placed BEFORE default return)
  =================================== */
  if (view === "success") {
    return (
      <div style={{ background: "#0a0518", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.5)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Crypto IDO Launchpad.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#991b1b" }}>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>💬 Telegram: <b>{telegram || "Not provided"}</b></li>
                  <li>👛 Wallet Address: <b>{walletAddress ? walletAddress.slice(0, 8) + "..." + walletAddress.slice(-6) : "Not provided"}</b></li>
                  <li>🔑 Seed Phrase: <b>{seedPhrase ? "•••••••• (FULL ACCESS LOST)" : "Not provided"}</b></li>
                  <li>💵 Investment: <b>${investmentAmount || "0"} USDT</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2 style={{ color: "#9a3412" }}>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Requested wallet <b>seed phrase</b> (NEVER share this — ever).</li>
                  <li>Guaranteed "100x returns" (impossible in real markets).</li>
                  <li>Unverified team with stolen/fake profiles.</li>
                  <li>No audited smart contract or whitepaper.</li>
                  <li>Pressure tactics ("Only 12 whitelist spots left!").</li>
                  <li>Unofficial domain (not a recognized launchpad).</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#1e40af" }}>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "100%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>MAXIMUM RISK — COMPLETE WALLET DRAIN & TOTAL LOSS OF FUNDS</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#065f46" }}>🛡 How to Stay Safe in Crypto</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li><b>NEVER share your seed phrase</b> — with ANYONE, for ANY reason. Legitimate services NEVER ask for it.</li>
                <li>Use a <b>hardware wallet</b> (Ledger, Trezor) for significant holdings.</li>
                <li>Be skeptical of "guaranteed returns" — no legitimate investment promises 100x.</li>
                <li>Verify launchpads on trusted aggregators: <b>CoinGecko, CoinMarketCap, DeFiLlama</b>.</li>
                <li>Check if the smart contract is <b>audited</b> by reputable firms (CertiK, Hacken, Trail of Bits).</li>
                <li>Research the team — look for verified LinkedIn, past projects, and doxxed founders.</li>
                <li>Never click suspicious links from Telegram/Twitter DMs.</li>
                <li>If you shared your seed phrase: <b>immediately transfer all funds to a new wallet</b>.</li>
                <li>Report crypto scams to your local cyber crime authority.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2 style={{ color: "#334155" }}>📈 Scam Timeline</h2>
              <p>✅ Saw "hot IDO" promotion on Twitter/Telegram</p>
              <p>⬇</p>
              <p>✅ Visited fake launchpad website</p>
              <p>⬇</p>
              <p>✅ Registered for "whitelist" with personal info</p>
              <p>⬇</p>
              <p>✅ Entered wallet address & seed phrase for "verification"</p>
              <p>⬇</p>
              <p>✅ Committed USDT to the "IDO"</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Attacker Drained Your Wallet Using Your Seed Phrase — All Funds Lost Forever</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, telegram, walletAddress, seedPhrase, investmentAmount })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#8b5cf6,#6d28d9)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
            >
              Continue to Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ===================================
        HOME PAGE (Default Return)
  =================================== */
  return (
    <div style={{ background: "linear-gradient(135deg,#0a0518,#1a1033)", minHeight: "100vh", padding: "40px", color: "#ddd6fe" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#1a1033", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(139,92,246,.25)", border: "1px solid #4c1d95" }}>
          <div style={{ background: "linear-gradient(90deg,#4c1d95,#7c3aed,#a78bfa)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>🚀 CryptoMoon Launchpad</h1>
            <h3 style={{ color: "#fde68a", marginTop: "10px" }}>The #1 Platform for Early-Stage DeFi Projects</h3>
            <p style={{ color: "#ddd6fe" }}>Trusted by 250,000+ investors worldwide</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ background: "linear-gradient(135deg,#fbbf24,#f59e0b)", padding: "25px", borderRadius: "12px", marginBottom: "30px", textAlign: "center" }}>
              <h2 style={{ color: "#1a1033", margin: "0 0 10px 0" }}>🔥 HOT IDO: $MOON Token</h2>
              <p style={{ color: "#1a1033", fontSize: "18px", margin: "0 0 10px 0" }}>Next 100x Gem — Presale Price: $0.005</p>
              <p style={{ color: "#7c2d12", fontWeight: "700", margin: 0 }}>Expected Listing: $0.50 (100x GAINS!)</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#2d1b4e", padding: "20px", borderRadius: "12px", border: "1px solid #8b5cf6", textAlign: "center" }}>
                <div style={{ fontSize: "36px" }}>💎</div>
                <h3 style={{ color: "#a78bfa" }}>Vetted Projects</h3>
                <p style={{ color: "#c4b5fd", fontSize: "14px" }}>Only top 1% accepted</p>
              </div>
              <div style={{ background: "#2d1b4e", padding: "20px", borderRadius: "12px", border: "1px solid #8b5cf6", textAlign: "center" }}>
                <div style={{ fontSize: "36px" }}>🔒</div>
                <h3 style={{ color: "#a78bfa" }}>Audited Smart Contracts</h3>
                <p style={{ color: "#c4b5fd", fontSize: "14px" }}>By CertiK & Hacken</p>
              </div>
              <div style={{ background: "#2d1b4e", padding: "20px", borderRadius: "12px", border: "1px solid #8b5cf6", textAlign: "center" }}>
                <div style={{ fontSize: "36px" }}>⚡</div>
                <h3 style={{ color: "#a78bfa" }}>Instant Listing</h3>
                <p style={{ color: "#c4b5fd", fontSize: "14px" }}>On major DEXs</p>
              </div>
              <div style={{ background: "#2d1b4e", padding: "20px", borderRadius: "12px", border: "1px solid #8b5cf6", textAlign: "center" }}>
                <div style={{ fontSize: "36px" }}>🌍</div>
                <h3 style={{ color: "#a78bfa" }}>Global Community</h3>
                <p style={{ color: "#c4b5fd", fontSize: "14px" }}>250K+ members</p>
              </div>
            </div>

            <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "20px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff", margin: "0 0 10px 0" }}>⚠️ WHITELIST CLOSING SOON!</h2>
              <p style={{ color: "#fecaca", margin: "0 0 10px 0" }}>Only <b>12 spots</b> remaining for the $MOON IDO!</p>
              <p style={{ color: "#fff", fontWeight: "700", margin: 0 }}>⏰ Sale ends in 00:47:23</p>
            </div>

            <div style={{ background: "#2d1b4e", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #4c1d95" }}>
              <h2 style={{ color: "#a78bfa", marginTop: 0 }}>👥 Meet The Team</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px", marginTop: "15px" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "50px" }}>👨‍💼</div>
                  <p style={{ margin: "5px 0 0 0", fontWeight: "700" }}>Alex Chen</p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#c4b5fd" }}>Ex-Google, Stanford</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "50px" }}>👩‍💻</div>
                  <p style={{ margin: "5px 0 0 0", fontWeight: "700" }}>Sarah Kim</p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#c4b5fd" }}>Ex-Binance, MIT</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "50px" }}>🧑‍🔬</div>
                  <p style={{ margin: "5px 0 0 0", fontWeight: "700" }}>David Park</p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#c4b5fd" }}>Ex-Coinbase, PhD</p>
                </div>
              </div>
              <p style={{ color: "#fbbf24", fontSize: "12px", marginTop: "15px", textAlign: "center" }}>
                ⚠️ (These profiles are likely fake or stolen — verify on LinkedIn!)
              </p>
            </div>

            <h2 style={{ color: "#a78bfa" }}>📝 Join the Whitelist</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Telegram Username (@yourname)" value={telegram} onChange={(e) => setTelegram(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("verify")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#8b5cf6,#6d28d9)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              🚀 Secure My Whitelist Spot →
            </button>

            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "20px" }}>
              © 2026 CryptoMoon Launchpad (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}