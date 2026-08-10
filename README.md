# 🛡️ ScamShield v2 — Next-Generation Gamified Cybersecurity & AI Threat Defense Platform

### 🚀 Live Website Demo: [https://scam-shield-v2-ashen.vercel.app/](https://scam-shield-v2-ashen.vercel.app/)

Welcome to **ScamShield v2**, a full-stack, web-based educational platform designed to simulate modern cyber threats and evaluate user awareness through gamified modules and a strictly proctored certification exam. The platform leverages modern browser APIs, client-side computer vision heuristics, and a dynamic state machine to deliver a secure, interactive learning experience.

---

## 🏗️ Technical System Architecture

### 1. Automated Proctoring & Integrity Verification System
The certification exam relies on a robust client-side anti-cheating engine utilizing WebRTC and the HTML5 Canvas API.
*   **Environment Verification (360° Room Scan)**: Utilizes the `getUserMedia` API to capture sequential frames. Implements custom algorithms for color histogram comparison (Bhattacharyya distance) and spatial brightness grid variance to ensure the user provides dynamic, 3D environmental data rather than static imagery.
*   **Computer Vision (CV) Heuristics**: 
    *   **Face Detection Pipeline**: Continuously analyzes video frames using native `FaceDetector` APIs (with YCbCr skin-tone heuristics) to enforce presence and detect unauthorized secondary individuals.
    *   **Gaze Tracking**: Monitors ocular positioning to detect prolonged off-screen focus, flagging potential unauthorized reference material usage.
*   **Browser Sandbox Restrictions**: 
    *   Hooks into the `Page Visibility API` to detect tab-switching.
    *   Enforces the `Fullscreen API` and intercepts `copy/paste` keyboard events to prevent data exfiltration.
*   **Stateful Strike System**: A deterministic state machine logs integrity violations. Upon reaching 3 strikes, the exam state is immediately terminated.

### 2. Progression & Gamification State Machine
A persistent user state tracking system designed to drive engagement and retention.
*   **Experience (XP) Calculation Engine**: Algorithms calculate and award XP based on task completion time, accuracy, and difficulty modifiers.
*   **Dynamic Leveling System**: Maps user XP to a tiered rank hierarchy (Beginner to Shield Master).
*   **Achievement Attribution (Badges)**: Event listeners unlock specific SVG badges upon meeting milestone criteria.
*   **Engagement Tracking**: Uses timestamp deltas to calculate Daily Login Streaks.

### 3. Frontend UI/UX Architecture
*   **Hardware-Accelerated Animations**: Utilizes HTML5 `<canvas>` for performant background effects (global `NetworkBackground` nodes).
*   **3D CSS Transformations**: Implemented a reusable `TiltCard` wrapper component that applies dynamic `rotateX` and `rotateY` CSS transforms for a parallax depth effect.
*   **Theming Engine**: A CSS variable-based design system supporting deep dark-mode cyber aesthetics (glassmorphism, neon glows).

---

## 🎮 Detailed Feature Breakdown

### The Arcade (Interactive Minigame Mechanics)
The Arcade engine powers interactive scenarios categorized into advanced game mechanics:
*   **SwipeGame**: A fast-paced, Tinder-style binary classification game ("Safe" or "Scam").
*   **SpotTheFlagGame**: Anomaly detection inside DOM-rendered email/invoice templates.
*   **AudioScamGame & VisualScamGame**: Simulates vishing (voice phishing) and deepfake threat vectors.
*   **DeepfakeInterrogationGame**: Advanced media analysis requiring users to spot AI-generated artifacts.
*   **TerminalGame & ForensicsGame**: Simulates command-line interfaces and server log parsing to trace IP/network anomalies.
*   **WireAuditGame & PermissionPurgeGame**: Auditing financial transfers and identifying predatory mobile app permissions.
*   **PasswordGame & EmailThreadGame**: Interactive tools for building uncrackable passwords and analyzing long BEC (Business Email Compromise) chains.

### The Proctored Certification Exam
To earn the official "ScamShield Certification," users must pass a highly secured 40-minute exam featuring 30 hard-mode simulations without hints. It enforces the 360° Room Scan, Live Face Detection, Eye Tracking, and auto-forfeits upon 3 strikes.

### Administrative Control Plane (Admin Dashboard)
A dedicated dashboard available exclusively to accounts with `Admin` privileges.
*   **User Management**: View user base, edit profiles, grant admin permissions, ban users, or reset passwords.
*   **Content Management System (CMS)**: Dynamically add, edit, or delete training modules, exam questions, and arcade scenarios.
*   **Platform Analytics**: Track registered users, overall pass/fail rates, and module engagement metrics.

---

## 📚 Exhaustive Content Library: 50+ Simulators
ScamShield v2 contains a massive library of localized, highly specific threat simulations running inside the Arcade engine. Features include interactive forms, data exposure reveals, and knowledge-check quizzes for every scenario:

*   **E-Commerce, Marketplace & Delivery**: `OLXCourierScamSim`, `MeeshoScamSim`, `UsedCarScamSim`, `PhoneDealSim`, `ParcelSim`
*   **Financial, Banking & UPI**: `UPIAutoPaySim`, `UPIRefundSim`, `QRPaymentSim`, `QRStickerSim`, `LoanHarassmentSim`
*   **Web3, Crypto & Investment**: `NFTWhitelistMintScamSim`, `MetaversePropertySim`, `MetaverseJobInterviewScamSim`, `CryptoInvestmentSim`, `PonziInvestmentSchemeSim`, `MLMInvestmentScamSim`, `StockTipWhatsAppScamSim`
*   **Government, Utilities & Civic**: `PMKisanSim`, `LPGCylinderBookingSiteSim`, `SmartCitySchemeSim`, `TollPaymentScam`, `WaterBillScam`, `TaxSim`
*   **Social, Romance & Family**: `WhatsAppParentSim`, `WhatsAppOTPSim`, `SocialMediaSim`, `Nigerian419Sim`, `VideoCallSim`
*   **Gaming, Youth & Education**: `PubgUcScam`, `RobloxRobuxSim`, `PlayStationSim`, `SteamWalletSim`, `OnlineTuitionSim`, `ScholarshipSim`
*   **Employment & Tech Support**: `WorkFromHomeTaskScamSim`, `ResumeHarvestPortalSim`, `TechSupportSim`, `RobocallSim`, `MissedCallSim`, `SIMUpgradeSim`, `WiFiSim`

---

## 💻 Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 18 + Vite** | High-performance Single Page Application (SPA). |
| **Styling & UI** | **Vanilla CSS** | Premium dark-mode glassmorphism, dynamic gradients, 3D TiltCards. |
| **Backend / API** | **Vercel Serverless (Node.js)** | Zero-maintenance serverless endpoints handling backend role sync, user queries, and AI generation. |
| **Authentication Engine** | **Supabase Auth** | Dual-mode authentication (Google OAuth 2.0 & Email OTP). |
| **Database & Auth Storage** | **Supabase (PostgreSQL)** | Relational database storing user profiles, XP progress, roles, and leaderboards with Row Level Security (RLS). |
| **Artificial Intelligence** | **Groq Cloud & Google Gemini** | Ultra-fast LLM inference engines providing real-time threat analysis and case study generation. |

---

## ☁️ How Our Hosting Works (100% Serverless on Vercel)

ScamShield is engineered to run **100% serverless on Vercel**, eliminating the need for paid or sleep-prone traditional backend servers.

1. **Unified Deployment**: Your frontend React app and backend API live in the exact same repository.
2. **Smart Rewrites (`vercel.json`)**: When a user visits your website, Vercel routes `/api/*` requests to our serverless Node.js handler (`api/index.js`), and normal webpages to the React frontend.
3. **Zero-Config API Resolving (`getApiUrl()`)**: In production, your frontend calls its API endpoints using relative paths (`/api/...`), meaning zero CORS errors.

---

## 📂 Complete File & Folder Explanation

### ⚙️ Root Configuration & Serverless Backend
* **`api/index.js`**: The core Vercel Serverless API handler. Contains backend endpoints for OTP, token verification, admin user management, and AI generation.
* **`vercel.json`**: Routing rules for Vercel.
* **`package.json`**: Root project configuration.
* **`server/`**: Standalone Express backend folder (used for local development).

### 🖥️ Client Frontend (`client/`)
* **`client/src/main.jsx` & `App.jsx`**: The React starting point and main routing file.
* **`client/src/index.css` & `App.css`**: Global design rules and dark-mode styling.
* **`client/src/pages/`**: The main views (e.g. `HomePage.jsx`, `LandingPage.jsx`, `AuthPage.jsx`, `GamesPage.jsx`, `AdminPage.jsx`, `ExamPage.jsx`).
* **`client/src/components/`**: Reusable UI components (Sidebar, StatsBar, BadgeGrid, TiltCard).
* **`client/src/components/games/`**: Arcade engines (`SpotTheFlagGame.jsx`, `SwipeGame.jsx`, `TerminalGame.jsx`, etc.).
* **`client/src/components/simulators/`**: The 50+ branching interactive scam simulators.
* **`client/src/components/exam/`**: Proctored exam sub-components (`RoomScan.jsx`, `EyeCalibration.jsx`).
* **`client/src/context/`**: State providers for Auth, Gamification (XP/Levels), and Theme.
* **`client/src/data/`**: Static JSON arrays for curriculums and question pools.

---

## 🛠️ Getting Started & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/womkar17/ScamShield-v2.git
   cd client-v2
   ```

2. **Install frontend dependencies**:
   ```bash
   cd client
   npm install
   ```

3. **Start the local Vite dev server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173` to explore ScamShield locally!

---
*Built with 🛡️ for a safer, scam-free digital world.*
