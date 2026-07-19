@echo off
echo ========================================================
echo        ScamShield v2 - Quick Start Launcher
echo ========================================================
echo.
echo [1/3] Checking and installing dependencies across folders...
call npm install --silent
cd client && call npm install --silent && cd ..
cd server && call npm install --silent && cd ..
echo Dependencies ready!
echo.
echo [2/3] Starting Backend API Server (Port 5000)...
start "ScamShield Backend API (Port 5000)" cmd /k "cd server && node server.js"
echo.
echo [3/3] Starting Frontend Dev Server (Port 5173)...
start "ScamShield Frontend Dev Server (Port 5173)" cmd /k "cd client && npm run dev"
echo.
echo ========================================================
echo ScamShield is starting! Open http://localhost:5173
echo ========================================================
pause
