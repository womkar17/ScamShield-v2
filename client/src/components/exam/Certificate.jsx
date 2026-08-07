import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Certificate = ({ userName, score, total, date }) => {
  const certRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!certRef.current) return;
    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(certRef.current, {
        scale: 2, // High resolution
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      // A4 size: 297mm x 210mm (landscape)
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
      pdf.save(`ScamShield_Certificate_${userName.replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error("Failed to generate PDF", err);
    } finally {
      setIsDownloading(false);
    }
  };

  const percent = Math.round((score / total) * 100);
  const certId = `CERT-${Math.random().toString(36).substr(2, 9).toUpperCase()}-${Date.now().toString().slice(-4)}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      
      {/* The Certificate Template (Visible on screen, but scaled down if needed, full size for PDF) */}
      <div 
        ref={certRef}
        style={{
          width: '1122px', // A4 Landscape roughly at 96 DPI
          height: '793px',
          background: '#ffffff',
          color: '#1e293b',
          padding: '40px',
          boxSizing: 'border-box',
          fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          position: 'relative',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          transformOrigin: 'top center',
          transform: 'scale(0.6)', // Scale down for web display
          marginBottom: '-300px' // Compensate for scale
        }}
      >
        <div style={{
          border: '4px solid #3b82f6',
          height: '100%',
          width: '100%',
          boxSizing: 'border-box',
          padding: '2px'
        }}>
          <div style={{
            border: '2px solid #3b82f6',
            height: '100%',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(240,249,255,1) 100%)'
          }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
              <span style={{ fontSize: '3rem' }}>🛡️</span>
              <h1 style={{ fontSize: '2.5rem', color: '#1e3a8a', margin: 0, fontWeight: '900', letterSpacing: '2px' }}>
                SCAMSHIELD
              </h1>
            </div>

            <h2 style={{ fontSize: '3.5rem', color: '#0f172a', margin: '0 0 10px 0', fontWeight: '300' }}>
              Certificate of Excellence
            </h2>
            
            <p style={{ fontSize: '1.2rem', color: '#64748b', margin: '0 0 30px 0', textTransform: 'uppercase', letterSpacing: '4px' }}>
              This proudly certifies that
            </p>

            <h3 style={{ 
              fontSize: '4rem', 
              color: '#3b82f6', 
              margin: '0 0 30px 0',
              borderBottom: '2px solid #cbd5e1',
              paddingBottom: '10px',
              minWidth: '600px',
              fontStyle: 'italic'
            }}>
              {userName || 'Student'}
            </h3>

            <p style={{ fontSize: '1.2rem', color: '#334155', maxWidth: '800px', lineHeight: '1.6', margin: '0 0 40px 0' }}>
              Has successfully completed the <strong>ScamShield Proctored Cyber Defense Exam</strong>.<br/>
              They have demonstrated exceptional proficiency in identifying, analyzing, and mitigating <br/>
              advanced social engineering attacks, phishing, and financial fraud vectors.
            </p>

            <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a' }}>{score} / {total}</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase' }}>Simulations Passed</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>{percent}%</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase' }}>Final Score</div>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              width: '100%', 
              padding: '0 60px', 
              marginTop: 'auto' 
            }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '5px' }}>
                  {date}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '5px' }}>Date of Completion</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '5px', fontFamily: 'monospace' }}>
                  {certId}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '5px' }}>Certificate ID</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <button 
        onClick={handleDownload}
        disabled={isDownloading}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: isDownloading ? 'not-allowed' : 'pointer',
          boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        {isDownloading ? 'Generating PDF...' : '📥 Download Certificate (PDF)'}
      </button>

    </div>
  );
};

export default Certificate;
