# 🛡️ ScamShield — Next-Generation Gamified Cybersecurity & AI Threat Defense Platform

### 🌐 Live Website Demo: [https://scam-shield-v2-two.vercel.app/](https://scam-shield-v2-two.vercel.app/)

Welcome to **ScamShield**, an interactive, gamified cybersecurity web application designed to train users against real-world scams, social engineering attacks, phishing, and deepfake fraud. By combining interactive simulations, arcade mini-games, AI threat copilots, and gamified XP rewards, ScamShield builds muscle memory against digital deception.

---

## 🌟 Key Features

1. **🎮 18 Interactive Scam Simulators**: Hands-on roleplay scenarios where users experience real-world scams safely (e.g., *Digital Arrest*, *Fake Bank KYC*, *Deepfake Video Call*, *Crypto Investment Fraud*, *Job Offer Phishing*).
2. **🕹️ Arcade Cyber Games**: 6 engaging mini-game engines designed to train rapid threat recognition:
   - **Spot the Flag**: Interactive image inspection where users click magnifying target zones to uncover hidden phishing clues.
   - **Swipe Cyber Tinder**: Fast-paced left/right swiping game to classify SMS/emails as safe or scam.
   - **Threat Audio Analysis**: Real voice recordings and AI voice cloning detection.
   - **Cyber Chat Scam**: Live simulated WhatsApp/Telegram chat conversations with scammers.
   - **Password Shield**: Real-time password cracking resistance and entropy calculator.
   - **Cyber Quiz Arena**: Rapid-fire multiple-choice challenges.
3. **🤖 Real-World Factual AI Case Studies & Copilot**: Powered by **Groq (Llama-3.3 70B)** and **Google Gemini 1.5 Flash**. Generates documented, historical cybersecurity incident breakdowns based on real FBI IC3, CISA, and FTC data, complete with exact victim counts and financial losses.
4. **🏆 Comprehensive Gamification Engine**: Users earn XP, level up, unlock achievement badges, maintain daily learning streaks, and compete on community leaderboards.
5. **👑 Admin Control Panel**: Dedicated dashboard for system administrators to manage user accounts, toggle admin/user roles, delete suspicious profiles, and create custom phishing campaign templates.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 18 + Vite** | High-performance Single Page Application (SPA) with lightning-fast Hot Module Replacement. |
| **Styling & UI** | **Vanilla CSS (Custom Design System)** | Premium dark-mode glassmorphism, dynamic gradients, custom animations, and responsive layouts. |
| **Backend / API** | **Vercel Serverless Functions (Node.js/Express)** | Zero-maintenance serverless endpoints handling backend role sync, user queries, and AI generation. |
| **Authentication Engine** | **Supabase Auth (OAuth + OTP)** | Dual-mode authentication supporting one-click Google OAuth 2.0 and passwordless 6-digit Email OTP verification. |
| **Database & Auth Storage** | **Supabase (PostgreSQL)** | Relational database storing user profiles, XP progress, roles, and leaderboards with Row Level Security (RLS). |
| **Artificial Intelligence** | **Groq Cloud & Google Gemini** | Ultra-fast LLM inference engines providing real-time threat analysis and generating real-world cybersecurity case studies. |

---

## ⚡ How Our Hosting Works (100% Serverless on Vercel)

ScamShield is engineered to run **100% serverless on Vercel**, eliminating the need for paid or sleep-prone traditional backend servers (like Render or Heroku).

1. **Unified Deployment**: Your frontend React app and backend API live in the exact same repository.
2. **Smart Rewrites (`vercel.json`)**: When a user visits your website, Vercel checks the URL path:
   - If the path starts with `/api/*` (e.g., `/api/auth/sync` or `/api/ai/chat`), Vercel routes the request directly to our serverless Node.js handler (`api/index.js`).
   - If the path is a normal webpage (e.g., `/games`, `/admin`, or `/case-studies`), Vercel serves the React frontend (`/index.html`).
3. **Zero-Config API Resolving (`getApiUrl()`)**: In production, your frontend calls its API endpoints using relative paths (`/api/...`), meaning zero CORS errors and zero port configuration required.

---

## 🔐 How Authentication & Role Sync Works

ScamShield uses a **Dual-Mode Authentication Flow (Google OAuth 2.0 + Email OTP)** combined with secure serverless role synchronization:

```
[User Selects Google / Email OTP] ──> [Supabase Auth Verifies Identity & Issues JWT]
                                                               │
                                                               ▼
[Frontend Calls POST /api/auth/sync] <── [Passes Auth UUID, Email & Username]
        │
        ▼
[Backend Bypasses RLS via Admin Key] ──> [Checks/Creates Row in profiles Table] ──> [Returns Role ('user' or 'admin')]
```

1. **Step 1: Identity Verification**: Users can sign in instantly using **Google OAuth** or by entering their email to receive a 6-digit passwordless verification code sent directly via Supabase Auth.
2. **Step 2: Secure Backend Synchronization (`POST /api/auth/sync`)**: Once Supabase verifies the user's identity, the frontend calls our serverless backend API with the user's UUID and email.
3. **Step 3: Root Role Resolution**: Because frontend database queries can be restricted by Row Level Security (RLS), our backend connects to PostgreSQL using the **Supabase Service Role Key** (admin root access):
   - It searches for an existing profile matching the user's email address.
   - If an existing account has an `'admin'` role, it automatically syncs and merges that permission into the active session.
   - If the user is brand new, it cleanly initializes a new record in the `profiles` table with default stats (`xp: 0`, `level: 1`, `streak: 1`, and `role: 'user'`).
4. **Step 4: Dynamic UI Unlocking**: If the backend confirms an `'admin'` role, the frontend dynamically unlocks and reveals the **⚙️ Admin Panel** option in the navigation sidebar.

---

## 🗄️ Database Architecture (Supabase PostgreSQL)

Our primary database table is `profiles`, which is linked directly to Supabase Authentication:

| Column Name | Data Type | Description |
| :--- | :--- | :--- |
| `id` | `uuid` (Primary Key) | Foreign key referencing `auth.users(id)` with automatic `on delete cascade`. |
| `email` | `text` | User's registered email address (unique constraint). |
| `username` | `text` | Display name chosen by the user or derived from their email/Google profile. |
| `role` | `text` | Account permission level: `'user'` (default) or `'admin'`. |
| `xp` | `integer` | Total experience points earned from completing modules and games. |
| `level` | `integer` | Current user level (calculated automatically from XP progress). |
| `streak` | `integer` | Number of consecutive days the user has engaged with the platform. |
| `created_at` | `timestamptz` | Exact timestamp when the user account was initialized. |`created_at` | `timestamp` | Exact date and time when the user account was initialized. |

---

## 📂 Complete File & Folder Explanation

Here is a simple, easy-to-understand breakdown of every folder and file in the ScamShield project:

### 🌐 Root Configuration & Serverless Backend
* **`api/index.js`**: The core Vercel Serverless API handler. Contains the backend endpoints for OTP email sending, token verification, admin user management, and AI chat generation.
* **`vercel.json`**: Routing rules for Vercel. Tells Vercel to send `/api/*` requests to our serverless backend and all other requests to our React frontend.
* **`package.json`**: Root project configuration and build commands.
* **`server/`**: Standalone Express backend folder (used for local development or traditional VPS/Render hosting if desired):
  * **`server/server.js`**: Traditional Express server listening on port 5000.
  * **`server/aiService.js`**: Helper functions connecting to Groq Llama 3.3 and Google Gemini APIs.
  * **`server/.env`**: Secret API keys for local backend testing.

---

### 💻 Client Frontend (`client/`)

#### ⚙️ Configuration & Entry Points
* **`client/index.html`**: The main HTML file loaded by the web browser.
* **`client/vite.config.js`**: Vite configuration settings for fast compiling and development.
* **`client/package.json`**: Lists all frontend dependencies (React, Router, Supabase client, Lucide icons, etc.).
* **`client/src/main.jsx`**: The React starting point that mounts the application into the DOM and wraps it in Auth and Gamification providers.
* **`client/src/App.jsx`**: The main routing file that connects all URLs (`/`, `/games`, `/admin`, etc.) to their respective page components.
* **`client/src/index.css` & `App.css`**: Global design rules, CSS variables, dark-mode styling, and layout defaults.

#### 📄 Pages (`client/src/pages/`)
* **`HomePage.jsx`**: The main user dashboard showing active learning modules, XP progress cards, quick action buttons, and live threat alerts.
* **`LandingPage.jsx`**: The public-facing intro page shown to logged-out users explaining the features of ScamShield.
* **`AuthPage.jsx`**: The login and sign-up interface where users enter their email and submit verification OTP codes.
* **`GamesPage.jsx`**: The Arcade selection screen displaying all 6 playable mini-games with their difficulty ratings and XP rewards.
* **`ModulePage.jsx`**: The interactive training course page where users launch simulators, answer module checkpoints, and claim completion XP.
* **`CaseStudiesPage.jsx`**: The real-world cybersecurity incident archive. Includes interactive study notes, 10-question quizzes, and the `"🤖 Generate AI Case Study"` button.
* **`AdminPage.jsx`**: The system management console for administrators to view registered users, promote/demote admin roles, delete accounts, and design custom phishing templates.
* **`SettingsPage.jsx`**: Allows users to customize their display username and view their profile metadata.

#### 🧩 Core Components (`client/src/components/`)
* **`Sidebar.jsx`**: The left navigation menu for jumping between Dashboard, Arcade, Case Studies, Leaderboards, and Admin panels.
* **`StatsBar.jsx`**: The top header displaying the user's current Level, Total XP progress bar, Daily Streak fire counter, and quick navigation actions.
* **`AICopilot.jsx`**: The floating AI assistant chat widget visible to logged-in users for instant cybersecurity advice.
* **`BadgeGrid.jsx` & `LevelUpModal.jsx`**: UI modals that celebrate when a user reaches a new level or unlocks an achievement badge.
* **`LiveThreatBanner.jsx`**: Rotating alert banner on the dashboard warning users about trending 2026 scam techniques.
* **`Toast.jsx`**: Temporary pop-up alert notifications (e.g., *"✅ +50 XP Earned!"* or *"⚠️ Invalid OTP"*).

#### 🕹️ Arcade Games (`client/src/components/games/`)
* **`SpotTheFlagGame.jsx`**: The image inspection game where players click suspicious areas (red flags) on simulated scam emails and websites.
* **`SwipeGame.jsx`**: The swipe card game where users rapidly classify incoming messages as safe or scam.
* **`QuizGame.jsx`**: Multiple-choice trivia challenge testing general cybersecurity knowledge.
* **`AudioScamGame.jsx`**: Audio analysis game teaching users how to identify robotic artifacts and urgency cues in deepfake voice calls.
* **`ChatGame.jsx`**: Simulated instant messaging interface where players must choose the correct responses to defeat a persistent scammer.
* **`PasswordGame.jsx`**: Interactive password strength tester showing real-time entropy calculation and time-to-crack estimates.
* **`GameComponents.jsx` & `ThreatAnalysis.jsx`**: Shared UI cards, timers, score trackers, and threat breakdown screens used across games.

#### 🎭 Scam Simulators (`client/src/components/simulators/`)
* **`ScamSimulatorEngine.jsx`**: The core interactive engine that powers step-by-step branching dialogues, user choices, and feedback screens.
* **`DigitalArrestSim.jsx`**: Simulates a fake police/CBI video call threatening immediate arrest unless a "verification fee" is paid.
* **`BankKYCSim.jsx`**: Simulates an urgent SMS warning that a bank account will be blocked without immediate KYC verification.
* **`DeepfakeSim.jsx`**: Simulates an AI-generated CFO or family member emergency video call requesting urgent wire transfers.
* **`CryptoSim.jsx`**: Simulates a "pig butchering" or guaranteed 500% return cryptocurrency investment trap.
* **`JobOfferSim.jsx`**: Simulates a work-from-home Telegram task scam requiring upfront security deposits.
* *(Plus 13 additional realistic simulation engines including Tax Scams, WiFi Phishing, Parcel Delivery Traps, and Fake Interviews)*.

#### 🧠 Context Providers (`client/src/context/`)
* **`AuthContext.jsx`**: Manages user login state, token storage, admin role verification, and profile synchronization across the entire application.
* **`GamificationContext.jsx`**: Manages XP calculation, level progression, daily streak tracking, and achievement badge unlocking.
* **`AppContext.jsx`**: Global application UI state (theme toggles, active modals, and notification alerts).

#### 📊 Data & Game Libraries (`client/src/data/`)
* **`modules.js`**: Contains the complete curriculum, titles, descriptions, and learning goals for all 18 training modules.
* **`games.js` & `minigames.js`**: Contains the static question pools, red flag coordinates, and audio scripts for the arcade games.
* **`generateGames.js`**: Helper algorithms that randomize questions and shuffle daily arcade challenges.

#### 🔧 Utilities & Libraries (`client/src/lib/` & `utils/`)
* **`lib/api.js`**: Smart API URL resolver (`getApiUrl()`). Automatically routes API requests to Vercel Serverless in production or localhost in development.
* **`lib/supabase.js`**: Initializes the official Supabase database client using frontend environment variables.
* **`utils/soundEffects.js`**: Audio synthesizers and sound triggers for winning games, earning XP, and clicking buttons.
* **`utils/storage.js`**: Helper utilities for saving user notes, settings, and offline progress in browser `localStorage`.
* **`utils/validators.js`**: Regular expressions and helper functions for validating email addresses, passwords, and inputs.

---

## 🚀 Getting Started & Local Development

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
*Built with ❤️ for a safer, scam-free digital world.*
