import React, { useState } from 'react';

export default function FakeOpenCartSim({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 2000);
  };

  const handleReport = () => {
    onComplete(['Admin Credentials', 'Customer Credit Cards', 'Store Database']);
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
          <span className="text-slate-400">🔒 https://</span>
          <span className="text-slate-800 font-bold">opencart-security-patch.net</span>
          <span>/admin</span>
        </div>
      </div>

      <div className="p-4 sm:p-8 flex flex-col items-center justify-center min-h-[400px]">
        {step === 1 && (
          <div className="w-full max-w-sm animate-in fade-in duration-300">
            
            {/* Urgent Alert Banner */}
            <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded-t-lg flex items-start gap-2 text-sm font-medium">
              <span className="text-lg leading-none" role="img" aria-label="alert">⚠️</span>
              <p>Critical Security Update: Patch CVE-2026 immediately to prevent Magecart infection.</p>
            </div>

            {/* Login Box */}
            <div className="bg-white border-x border-b border-slate-300 rounded-b-lg shadow-md overflow-hidden">
              <div className="bg-[#1e293b] p-4 text-center">
                <h1 className="text-white text-xl font-semibold flex justify-center items-center gap-2">
                  <span role="img" aria-label="cart">🛒</span> OpenCart Admin
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
                    {isProcessing ? 'Authenticating...' : 'Login & Apply Patch'}
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
          <div className="w-full max-w-md bg-white border border-red-300 rounded-lg shadow-xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-red-600 p-6 text-center text-white">
              <span className="text-4xl block mb-2" role="img" aria-label="skull">☠️</span>
              <h2 className="text-2xl font-bold">Store Compromised!</h2>
            </div>
            
            <div className="p-6">
              <h3 className="text-slate-800 font-bold text-lg mb-2">Magecart Skimmer Injected</h3>
              <p className="text-slate-600 text-sm mb-4">
                You just provided your administrator credentials to a fake portal. The attacker has logged into your real store and injected a malicious JavaScript skimmer into your checkout page.
              </p>

              <div className="bg-slate-100 p-3 rounded border border-slate-300 text-xs text-slate-700 font-mono mb-4">
                <strong>ATTACK VECTOR:</strong><br/>
                1. Attacker accesses Admin Panel<br/>
                2. Modifies `header.tpl`<br/>
                3. Injects malicious JS skimmer<br/>
                4. Silently steals customer credit cards
              </div>
              
              <p className="text-red-700 text-sm font-bold text-center">
                Never log in via emergency email links!
              </p>
              <button
                onClick={() => onComplete(['Admin Credentials', 'Customer Credit Cards', 'Store Database'])}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-md transition-colors"
              >
                Proceed to Security Alert & Mitigation →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

