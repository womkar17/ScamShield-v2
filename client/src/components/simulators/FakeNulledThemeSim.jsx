import React, { useState } from 'react';

export default function FakeNulledThemeSim({ onComplete }) {
  const [step, setStep] = useState('upload'); // 'upload', 'installing', 'hacked'
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileClick = () => {
    setFileSelected(true);
  };

  const handleInstall = () => {
    if (!fileSelected) return;
    setStep('installing');
    
    setTimeout(() => {
      setStep('hacked');
      setTimeout(() => {
        onComplete(['Web Server Access', 'Admin Credentials', 'SEO Ranking']);
      }, 3500);
    }, 2000);
  };

  return (
    <div style={{
      maxWidth: '850px', height: '550px', margin: '0 auto', borderRadius: '8px', overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
      background: '#f1f1f1', border: '1px solid #c3c4c7'
    }}>
      
      {/* Fake CMS Header */}
      <div style={{ background: '#1d2327', color: '#fff', height: '32px', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: '13px' }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <span>W</span>
          <span>🏠 My Client Website</span>
          <span>1 Updates</span>
          <span>💬 0</span>
          <span>➕ New</span>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          Howdy, admin
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Fake CMS Sidebar */}
        <div style={{ width: '160px', background: '#1d2327', color: '#a7aaad', fontSize: '13px', paddingTop: '10px' }}>
          <div style={{ padding: '8px 12px', cursor: 'pointer' }}>Dashboard</div>
          <div style={{ padding: '8px 12px', cursor: 'pointer' }}>Posts</div>
          <div style={{ padding: '8px 12px', cursor: 'pointer' }}>Media</div>
          <div style={{ padding: '8px 12px', cursor: 'pointer' }}>Pages</div>
          <div style={{ padding: '8px 12px', background: '#2271b1', color: '#fff', fontWeight: '600' }}>Appearance</div>
          <div style={{ padding: '8px 12px', paddingLeft: '24px', color: '#fff' }}>Themes</div>
          <div style={{ padding: '8px 12px', paddingLeft: '24px' }}>Customize</div>
          <div style={{ padding: '8px 12px', cursor: 'pointer' }}>Plugins</div>
          <div style={{ padding: '8px 12px', cursor: 'pointer' }}>Users</div>
          <div style={{ padding: '8px 12px', cursor: 'pointer' }}>Settings</div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto', background: '#f0f0f1', position: 'relative' }}>
          
          <h1 style={{ fontSize: '23px', fontWeight: '400', margin: '0 0 20px 0', color: '#1d2327' }}>
            Add Themes
          </h1>

          {step === 'upload' && (
            <div style={{ background: '#fff', border: '1px solid #c3c4c7', padding: '20px', borderRadius: '3px' }}>
              <p style={{ fontSize: '14px', margin: '0 0 15px 0' }}>If you have a theme in a .zip format, you may install it by uploading it here.</p>
              
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button 
                  onClick={handleFileClick}
                  style={{ 
                    background: fileSelected ? '#f6f7f7' : '#f6f7f7', border: '1px solid #8c8f94', 
                    padding: '4px 10px', borderRadius: '3px', cursor: 'pointer', color: '#2c3338' 
                  }}
                >
                  Choose File
                </button>
                <span style={{ fontSize: '14px', fontStyle: fileSelected ? 'normal' : 'italic', color: fileSelected ? '#1d2327' : '#646970' }}>
                  {fileSelected ? 'premium-avada-theme-nulled-v7.zip' : 'No file chosen'}
                </span>
              </div>

              <button 
                onClick={handleInstall}
                disabled={!fileSelected}
                style={{
                  marginTop: '15px', background: fileSelected ? '#2271b1' : '#f6f7f7', 
                  color: fileSelected ? '#fff' : '#a7aaad', border: fileSelected ? 'none' : '1px solid #dcdcdc', 
                  padding: '6px 14px', borderRadius: '3px', cursor: fileSelected ? 'pointer' : 'not-allowed',
                  fontSize: '13px'
                }}
              >
                Install Now
              </button>
            </div>
          )}

          {step === 'installing' && (
            <div style={{ background: '#fff', border: '1px solid #c3c4c7', padding: '20px', borderRadius: '3px' }}>
              <h3 style={{ fontSize: '14px', margin: '0 0 10px 0', fontWeight: '600' }}>Installing Theme from uploaded file: premium-avada-theme-nulled-v7.zip</h3>
              <p style={{ fontSize: '13px', margin: '0 0 5px 0' }}>Unpacking the package...</p>
              <p style={{ fontSize: '13px', margin: '0 0 5px 0' }}>Installing the theme...</p>
              <p style={{ fontSize: '13px', margin: '0 0 5px 0', color: '#2271b1' }}>Theme installed successfully.</p>
            </div>
          )}

          {/* Hidden Backdoor Execution Overlay */}
          {step === 'hacked' && (
            <div style={{ 
              position: 'absolute', top: '10%', left: '5%', right: '5%', 
              background: 'rgba(0,0,0,0.9)', color: '#0f0', padding: '20px', 
              borderRadius: '6px', fontFamily: 'monospace', boxShadow: '0 10px 50px rgba(255,0,0,0.3)',
              border: '1px solid #f00', zIndex: 100
            }}>
              <div style={{ color: '#f00', fontWeight: 'bold', marginBottom: '10px', fontSize: '1.2rem', textAlign: 'center' }}>
                ⚠️ CRITICAL SECURITY COMPROMISE ⚠️
              </div>
              <div style={{ lineHeight: '1.5', fontSize: '0.9rem' }}>
                <div> Executing hidden payload in functions.php...</div>
                <div> eval(base64_decode('...')) executed successfully.</div>
                <div> Backdoor shell installed at /wp-content/themes/avada-nulled/class-db.php</div>
                <div> Downloading crypto-miner script... [OK]</div>
                <div> Injecting SEO spam links into database... [OK]</div>
                <div> Exfiltrating wp-config.php credentials... [OK]</div>
                <div style={{ color: '#ff0', marginTop: '10px' }}>Server takeover complete. Administrator access granted to remote C2.</div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
