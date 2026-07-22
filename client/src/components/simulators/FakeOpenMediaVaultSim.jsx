import React, { useState } from 'react';

export default function FakeOpenMediaVaultSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 1500);
  };

  const handleReport = () => {
    onComplete(['NAS Admin Credentials', 'Personal Photos', 'Tax Documents', 'Enterprise Data']);
  };

  return (
    <div className="w-full bg-slate-100 flex flex-col font-sans rounded-lg border border-slate-300 shadow-lg overflow-hidden">
      
      {/* Simple Safari-style URL bar */}
      <div className="bg-slate-200 px-3 py-2 flex items-center gap-2 border-b border-slate-300">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="bg-white flex-1 rounded px-2 py-1 text-xs text-slate-500 font-mono shadow-inner truncate">
          <span className="text-red-500 font-bold px-1 border border-red-500 rounded text-[9px] uppercase tracking-wider mr-1">Not Secure</span>
          <span>http://</span>
          <span className="text-slate-800 font-bold">192.168.1.100.omv-update-gateway.com</span>
        </div>
      </div>

      <div className="p-4 sm:p-8 flex flex-col items-center justify-center min-h-[450px]">
        
        {step === 1 && (
          <div className="w-full max-w-sm animate-in fade-in duration-300">
            
            {/* Urgent Alert Banner */}
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-3 rounded-t-lg flex items-start gap-2 text-sm font-medium">
              <span className="text-lg leading-none" role="img" aria-label="alert">⚠️</span>
              <p>Critical Firmware Alert: Remote Code Execution detected. Login to apply security patch.</p>
            </div>

            {/* Login Box */}
            <div className="bg-white border-x border-b border-slate-300 rounded-b-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 p-4 text-center">
                <h1 className="text-white text-xl font-bold flex justify-center items-center gap-2">
                  <span role="img" aria-label="nas">🗄️</span> openmediavault
                </h1>
              </div>
              
              <div className="p-5">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Username</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Password</label>
                    <input 
                      type="password" 
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-md transition-colors disabled:bg-blue-400 flex justify-center items-center"
                  >
                    {isProcessing ? 'Authenticating...' : 'Login'}
                  </button>
                </form>
              </div>
            </div>

            <button 
              onClick={handleReport}
              className="mt-6 w-full text-center text-red-600 hover:text-red-800 text-sm font-bold flex items-center justify-center gap-1"
            >
              <span>🛡️</span> Report this page as Phishing
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-lg shadow-xl overflow-hidden animate-in zoom-in-95 duration-300 text-slate-300 font-mono">
            <div className="bg-black p-3 border-b border-slate-700 text-red-500 text-sm font-bold">
              root@openmediavault:~#
            </div>
            
            <div className="p-5">
              <div className="text-green-500 mb-3">$ Connection established.</div>
              
              <div className="space-y-1 mb-5 text-xs sm:text-sm">
                <div>&gt; Accessing `/srv/dev-disk-by-uuid/`... <span className="text-green-400">OK</span></div>
                <div>&gt; Deploying `eCh0raix_encryptor.sh`... <span className="text-green-400">SUCCESS</span></div>
                <div>&gt; Encrypting family_photos.zip... <span className="text-red-500">LOCKED</span></div>
                <div>&gt; Generating ransom note... <span className="text-green-400">OK</span></div>
              </div>

              <div className="bg-red-950 border border-red-900 p-3 rounded text-center">
                <h3 className="text-red-500 font-bold text-lg mb-2">NAS RANSOMWARE INFECTION</h3>
                <p className="text-slate-400 text-xs mb-2">
                  You just gave scammers administrative access to your Network-Attached Storage. Phishing links disguise external domains to look like your local IP.
                </p>
                <p className="text-red-400 font-bold text-xs">
                  Always verify you are on your true local network!
                </p>
                <button
                  onClick={() => onComplete(['NAS Admin Credentials', 'Personal Photos', 'Tax Documents', 'Enterprise Data'])}
                  className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded transition-colors"
                >
                  Proceed to Security Alert & Mitigation →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

