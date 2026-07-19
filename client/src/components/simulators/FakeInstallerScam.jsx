import React, { useState } from "react";

export default function FakeInstallerScam({ onComplete }) {
  const [view, setView] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [computerName, setComputerName] = useState("");
  const [username, setUsername] = useState("");

  const [adminPassword, setAdminPassword] = useState("");
  const [antivirusStatus, setAntivirusStatus] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #0ea5e9",
    fontSize: "15px",
    outline: "none",
    background: "#0c1929",
    color: "#bae6fd",
    fontFamily: "monospace",
    boxSizing: "border-box"
  };

  const codeStyle = {
    background: "#000",
    color: "#38bdf8",
    padding: "12px 16px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    margin: "10px 0",
    border: "1px solid #0c4a6e",
    overflowX: "auto",
    whiteSpace: "pre-wrap"
  };

  /* ===================================
        INSTALLATION / ADMIN AUTH PAGE
  =================================== */
  if (view === "install") {
    return (
      <div style={{ background: "#050d18", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <div style={{ width: "100%", maxWidth: "720px", background: "#0c1929", borderRadius: "16px", padding: "35px", boxShadow: "0 20px 40px rgba(14,165,233,.3)", color: "#fff", border: "1px solid #0c4a6e" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px" }}>📦</div>
            <h1 style={{ color: "#38bdf8", fontFamily: "monospace" }}>Setup Wizard</h1>
            <h2>Administrator Authentication Required</h2>
            <p style={{ color: "#7dd3fc" }}>Enter your system credentials to complete the installation</p>
          </div>

          <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "10px", margin: "25px 0", border: "1px solid #0ea5e9" }}>
            <h3 style={{ color: "#38bdf8" }}>⚠️ Why we need your admin credentials</h3>
            <ul style={{ lineHeight: "1.8", color: "#bae6fd" }}>
              <li>✔ Install system-level drivers and codecs</li>
              <li>✔ Register with Windows/Mac system registry</li>
              <li>✔ Configure firewall exceptions for optimal performance</li>
              <li>✔ Activate premium features automatically</li>
            </ul>
            <p style={{ color: "#fbbf24", fontSize: "13px", marginTop: "10px" }}>
              🔒 Your credentials are used only for this installation and never transmitted.
            </p>
          </div>

          <div style={codeStyle}>
{`$ sudo ./installer.sh --install
[INFO] Requesting administrator privileges...
[INFO] Installing system components...`}
          </div>

          <div style={{ background: "#7f1d1d", padding: "15px", borderRadius: "10px", marginBottom: "20px", border: "1px solid #dc2626" }}>
            <p style={{ margin: 0, color: "#fecaca", fontSize: "13px" }}>
              🛡️ <b>Security Notice:</b> For best results, temporarily disable your antivirus software during installation. Your system will prompt you for admin access.
            </p>
          </div>

          <label style={{ color: "#7dd3fc", fontSize: "13px" }}>Computer Name</label>
          <input
            placeholder="e.g., DESKTOP-ABC123"
            value={computerName}
            onChange={(e) => setComputerName(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#7dd3fc", fontSize: "13px" }}>Administrator Username</label>
          <input
            placeholder="e.g., Admin or your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#7dd3fc", fontSize: "13px" }}>Administrator Password</label>
          <input
            placeholder="Enter admin password..."
            type="password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            style={inputStyle}
          />

          <label style={{ color: "#7dd3fc", fontSize: "13px" }}>Current Antivirus Software (optional)</label>
          <input
            placeholder="e.g., Windows Defender, Norton, McAfee"
            value={antivirusStatus}
            onChange={(e) => setAntivirusStatus(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={() => setView("success")}
            style={{ width: "100%", padding: "16px", background: "linear-gradient(90deg,#0ea5e9,#0284c7)", border: "none", color: "#fff", fontSize: "16px", fontWeight: "700", borderRadius: "10px", cursor: "pointer", fontFamily: "monospace" }}
          >
            $ sudo ./installer.sh --grant-access
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
      <div style={{ background: "#050d18", minHeight: "100vh", padding: "40px" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.5)" }}>
          <div style={{ background: "linear-gradient(90deg,#dc2626,#991b1b)", padding: "30px", textAlign: "center", color: "#fff" }}>
            <h1>🚨 SCAM DETECTED</h1>
            <h3>This was a Fake Software Installer — Likely Containing Malware.</h3>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "15px" }}>
                <h2>📂 Information Exposed</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>👤 Name: <b>{name || "Not provided"}</b></li>
                  <li>📧 Email: <b>{email || "Not provided"}</b></li>
                  <li>💻 Computer Name: <b>{computerName || "Not provided"}</b></li>
                  <li>👤 Admin Username: <b>{username || "Not provided"}</b></li>
                  <li>🔑 Admin Password: <b>{adminPassword ? "•••••••• (COMPROMISED)" : "Not provided"}</b></li>
                  <li>🛡️ Antivirus Info: <b>{antivirusStatus || "Not provided"}</b></li>
                </ul>
              </div>

              <div style={{ background: "#fff7ed", padding: "20px", borderRadius: "15px" }}>
                <h2>🚩 Red Flags</h2>
                <ul style={{ lineHeight: "1.8" }}>
                  <li>Downloaded from unofficial source (not the vendor's official site).</li>
                  <li>Requested administrator/root password in a web form (NEVER do this).</li>
                  <li>Asked to disable antivirus "temporarily" (classic malware tactic).</li>
                  <li>Asked for computer name & AV details (used to evade detection).</li>
                  <li>No digital signature or verified publisher on the installer.</li>
                  <li>Installer asked for credentials it has no business needing.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "25px", background: "#eff6ff", padding: "20px", borderRadius: "15px" }}>
              <h2>📊 Risk Meter</h2>
              <div style={{ height: "18px", background: "#d1d5db", borderRadius: "20px", overflow: "hidden" }}>
                <div style={{ width: "100%", height: "100%", background: "#dc2626" }}></div>
              </div>
              <h3 style={{ marginTop: "10px", color: "#dc2626" }}>MAXIMUM RISK — FULL SYSTEM COMPROMISE & MALWARE INFECTION</h3>
            </div>

            <div style={{ marginTop: "25px", background: "#ecfdf5", padding: "20px", borderRadius: "15px" }}>
              <h2>🛡 How to Install Software Safely</h2>
              <ul style={{ lineHeight: "1.8" }}>
                <li>✅ Download software <b>only</b> from the official vendor website (e.g., videolan.org for VLC, rarlab.com for WinRAR).</li>
                <li>✅ <b>Never enter your admin password</b> into a web form — legitimate installers use the OS's built-in UAC/sudo prompt.</li>
                <li>✅ <b>Never disable your antivirus</b> to install software — this is the #1 sign of malware.</li>
                <li>✅ Verify the installer has a valid <b>digital signature</b> (right-click → Properties → Digital Signatures on Windows).</li>
                <li>✅ Use official package managers when possible: <code>winget</code>, <code>brew</code>, <code>apt</code>, <code>chocolatey</code>.</li>
                <li>✅ Check file hashes (SHA-256) against the vendor's published checksums.</li>
                <li>✅ Run new installers in a <b>virtual machine or sandbox</b> first if unsure.</li>
                <li>✅ If you already ran it: <b>disconnect from the internet, run a full antivirus scan, and change all passwords from a clean device.</b></li>
                <li>✅ Report malware to the vendor and CERT-In.</li>
              </ul>
            </div>

            <div style={{ marginTop: "25px", background: "#f8fafc", padding: "20px", borderRadius: "15px" }}>
              <h2>📈 Scam Timeline</h2>
              <p>✅ Searched for "download VLC" or "free WinRAR"</p>
              <p>⬇</p>
              <p>✅ Clicked on a sponsored ad or fake download site</p>
              <p>⬇</p>
              <p>✅ Downloaded the "installer.exe" or "setup.dmg"</p>
              <p>⬇</p>
              <p>✅ Ran the installer and was prompted for admin credentials</p>
              <p>⬇</p>
              <p>✅ Was asked to disable antivirus "for best results"</p>
              <p>⬇</p>
              <p>✅ Entered admin username & password into the installer</p>
              <p>⬇</p>
              <p style={{ color: "#dc2626", fontWeight: "700" }}>❌ Malware Installed with Admin Rights — System Fully Compromised, Credentials Stolen, Data at Risk</p>
            </div>

            <button
              onClick={() => onComplete({ name, email, computerName, username, adminPassword, antivirusStatus })}
              style={{ width: "100%", marginTop: "30px", padding: "18px", background: "linear-gradient(90deg,#0ea5e9,#0284c7)", border: "none", color: "#fff", fontWeight: "700", fontSize: "18px", borderRadius: "12px", cursor: "pointer" }}
            >
              Continue to Quiz →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ===================================
        HOME / DOWNLOAD PAGE (Default Return)
  =================================== */
  return (
    <div style={{ background: "linear-gradient(135deg,#050d18,#0c1929)", minHeight: "100vh", padding: "40px", color: "#bae6fd" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <div style={{ background: "#0c1929", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(14,165,233,.2)", border: "1px solid #0c4a6e" }}>
          <div style={{ background: "linear-gradient(90deg,#0284c7,#0ea5e9,#38bdf8)", padding: "40px", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", margin: 0, fontFamily: "monospace", color: "#fff" }}>📦 SuperTool Pro Installer</h1>
            <h3 style={{ color: "#e0f2fe" }}>The All-in-One System Utility — Free Download</h3>
            <p style={{ color: "#bae6fd" }}>Trusted by 5,000,000+ users worldwide</p>
          </div>

          <div style={{ padding: "35px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0ea5e9" }}>
                <div style={{ fontSize: "36px" }}>⚡</div>
                <h3 style={{ color: "#38bdf8" }}>System Booster</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>10x faster performance</p>
              </div>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0ea5e9" }}>
                <div style={{ fontSize: "36px" }}>🧹</div>
                <h3 style={{ color: "#38bdf8" }}>Disk Cleaner</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>Reclaim GBs of space</p>
              </div>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0ea5e9" }}>
                <div style={{ fontSize: "36px" }}>🔒</div>
                <h3 style={{ color: "#38bdf8" }}>Privacy Shield</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>Block trackers & ads</p>
              </div>
              <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", border: "1px solid #0ea5e9" }}>
                <div style={{ fontSize: "36px" }}>🛠️</div>
                <h3 style={{ color: "#38bdf8" }}>Registry Fixer</h3>
                <p style={{ color: "#7dd3fc", fontSize: "14px" }}>Repair broken entries</p>
              </div>
            </div>

            <div style={{ background: "linear-gradient(135deg,#16a34a,#15803d)", padding: "25px", borderRadius: "12px", marginBottom: "25px", textAlign: "center" }}>
              <h2 style={{ color: "#fff", margin: "0 0 10px 0" }}>🎁 FREE DOWNLOAD — Version 2026.7</h2>
              <p style={{ color: "#dcfce7", margin: "0 0 10px 0" }}>File: SuperTool_Pro_Setup.exe (24.3 MB)</p>
              <p style={{ color: "#fbbf24", fontWeight: "700", margin: 0 }}>⚠️ Administrator access required during installation</p>
            </div>

            <div style={{ background: "#000", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #0c4a6e" }}>
              <h3 style={{ color: "#38bdf8", fontFamily: "monospace" }}>📦 Installation Steps</h3>
              <div style={codeStyle}>1. Download SuperTool_Pro_Setup.exe</div>
              <div style={codeStyle}>2. Run the installer as Administrator</div>
              <div style={codeStyle}>3. Disable antivirus temporarily (for best results)</div>
              <div style={codeStyle}>4. Enter admin credentials when prompted</div>
              <div style={codeStyle}>5. Restart your computer to complete setup</div>
            </div>

            <div style={{ background: "#0c4a6e", padding: "20px", borderRadius: "12px", marginBottom: "25px", border: "1px solid #fbbf24" }}>
              <h2 style={{ color: "#fbbf24", marginTop: 0 }}>⚠️ Registration Required</h2>
              <p>To activate your free license and receive update notifications, please register below.</p>
            </div>

            <h2 style={{ color: "#38bdf8" }}>📝 Register for Free License</h2>
            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />

            <button
              onClick={() => setView("install")}
              style={{ width: "100%", padding: "18px", background: "linear-gradient(90deg,#0ea5e9,#0284c7)", border: "none", color: "#fff", fontSize: "18px", fontWeight: "700", borderRadius: "12px", cursor: "pointer", fontFamily: "monospace" }}
            >
              📥 Download & Install →
            </button>

            <p style={{ textAlign: "center", color: "#7dd3fc", fontSize: "12px", marginTop: "20px" }}>
              © 2026 SuperTool Pro (FAKE — for educational purposes only)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}