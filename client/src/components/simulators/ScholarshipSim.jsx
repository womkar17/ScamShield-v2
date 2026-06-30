import React, { useState } from 'react';

export default function ScholarshipSim({ onComplete }) {
  const [view, setView] = useState('whatsapp'); // 'whatsapp' | 'portal'
  const [formData, setFormData] = useState({ name: '', aadhaar: '', bank: '', ifsc: '', account: '', fee: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleApply = (e) => {
    e.preventDefault();
    setView('portal');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!formData.name.trim() || !formData.aadhaar.trim() || !formData.bank.trim() || !formData.ifsc.trim() || !formData.account.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Full Name', 'Aadhaar Number', 'Bank Account Number', 'IFSC Code', 'Bank Name'];
    setTimeout(() => onComplete(exposedArray), 1500);
  };

  if (view === 'whatsapp') {
    return (
      <div style={{
        maxWidth: '400px', margin: '0 auto', background: '#e5ddd5', borderRadius: '16px', overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', height: '650px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Header */}
        <div style={{ background: '#075e54', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>←</span>
          <div style={{ width: '38px', height: '38px', background: '#25d366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>👥</div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>College Friends 2024</h3>
            <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>Rahul, Priya, Amit, +15 others</p>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Date chip */}
          <div style={{ alignSelf: 'center', background: '#d9fdd3', padding: '4px 12px', borderRadius: '8px', fontSize: '0.75rem', color: '#667781' }}>Today</div>

          {/* Previous messages */}
          <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '10px', maxWidth: '80%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: 0, color: '#1fa855', fontSize: '0.8rem', fontWeight: '600' }}>~Rahul Sharma</p>
            <p style={{ margin: '4px 0 2px', color: '#333', fontSize: '0.9rem' }}>Has anyone applied for this? Looks genuine 👇</p>
            <span style={{ fontSize: '0.7rem', color: '#999' }}>10:32 AM</span>
          </div>

          {/* Forwarded scholarship message */}
          <div style={{ background: '#fff', padding: '10px 14px', borderRadius: '10px', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.75rem', color: '#8696a0', fontStyle: 'italic' }}>🔄 Forwarded many times</span>
            </div>
            <div style={{ background: '#f0faf0', border: '1px solid #c8e6c9', borderRadius: '8px', padding: '12px' }}>
              <p style={{ margin: '0 0 8px', fontSize: '1rem', fontWeight: '700', color: '#1b5e20', textAlign: 'center' }}>
                🇮🇳 PM VIDYA LAKSHMI SCHOLARSHIP 2024-25 🇮🇳
              </p>
              <p style={{ margin: '0 0 8px', fontSize: '0.9rem', color: '#2e7d32', textAlign: 'center', fontWeight: '600' }}>
                ₹75,000 for ALL Students!
              </p>
              <div style={{ fontSize: '0.85rem', color: '#333', lineHeight: '1.6' }}>
                <p style={{ margin: '0 0 6px' }}>📚 Eligibility: All students (Class 10 to Post-Graduation)</p>
                <p style={{ margin: '0 0 6px' }}>💰 Scholarship Amount: ₹75,000 directly to bank account</p>
                <p style={{ margin: '0 0 6px' }}>📅 Last Date: {new Date(Date.now() + 3 * 86400000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                <p style={{ margin: '0 0 6px' }}>✅ Government Approved Scheme</p>
                <p style={{ margin: '0 0 6px' }}>🔗 Apply Now: <span style={{ color: '#1565c0', textDecoration: 'underline' }}>pmvidyalakshmi-gov.in/apply</span></p>
              </div>
              <p style={{ margin: '8px 0 0', fontSize: '0.8rem', color: '#e65100', fontWeight: '600', textAlign: 'center' }}>
                ⚠️ Limited seats! Apply before slots fill up!
              </p>
              <p style={{ margin: '6px 0 0', fontSize: '0.8rem', color: '#666', textAlign: 'center' }}>
                Share with all students 🙏🙏🙏
              </p>
            </div>
            <span style={{ fontSize: '0.7rem', color: '#999', display: 'block', textAlign: 'right', marginTop: '4px' }}>10:33 AM</span>
          </div>

          {/* More messages */}
          <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '10px', maxWidth: '75%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: 0, color: '#6a1b9a', fontSize: '0.8rem', fontWeight: '600' }}>~Priya Patel</p>
            <p style={{ margin: '4px 0 2px', color: '#333', fontSize: '0.9rem' }}>My cousin got ₹75K last year from this!! Apply fast 🏃‍♂️</p>
            <span style={{ fontSize: '0.7rem', color: '#999' }}>10:35 AM</span>
          </div>

          <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '10px', maxWidth: '70%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: 0, color: '#c62828', fontSize: '0.8rem', fontWeight: '600' }}>~Amit Kumar</p>
            <p style={{ margin: '4px 0 2px', color: '#333', fontSize: '0.9rem' }}>Bro only 2 days left, hurry!</p>
            <span style={{ fontSize: '0.7rem', color: '#999' }}>10:36 AM</span>
          </div>
        </div>

        {/* Apply button */}
        <div style={{ padding: '12px 15px', background: '#f0f0f0' }}>
          <button onClick={handleApply} style={{
            width: '100%', padding: '14px', background: '#25d366', color: '#fff', border: 'none',
            borderRadius: '24px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer'
          }}>
            Open Scholarship Portal →
          </button>
        </div>
      </div>
    );
  }

  // Fake Government Portal
  return (
    <div style={{
      maxWidth: '700px', margin: '0 auto', background: '#fff', borderRadius: '8px', overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)', fontFamily: '"Noto Sans", Arial, sans-serif', color: '#222'
    }}>
      {/* Browser bar */}
      <div style={{ background: '#f5f5f5', padding: '8px 15px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem' }}>
        <span style={{ color: '#34a853' }}>🔒</span>
        <span style={{ color: '#555' }}>https://pmvidyalakshmi-gov.in/scholarship/apply</span>
      </div>

      {/* Gov Header */}
      <div style={{ background: 'linear-gradient(90deg, #ff9933, #fff, #138808)', padding: '3px 0' }} />
      <div style={{ background: '#1a237e', padding: '15px 25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ width: '55px', height: '55px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>🏛️</div>
        <div>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.1rem' }}>PM Vidya Lakshmi Scholarship Scheme</h2>
          <p style={{ margin: '3px 0 0', color: '#bbdefb', fontSize: '0.8rem' }}>Ministry of Education | Government of India</p>
        </div>
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <span style={{ color: '#fff', fontSize: '0.75rem', display: 'block' }}>Helpline: 1800-XXX-XXXX</span>
          <span style={{ color: '#ffcdd2', fontSize: '0.7rem' }}>Last Date: {new Date(Date.now() + 3 * 86400000).toLocaleDateString('en-IN')}</span>
        </div>
      </div>

      {/* Nav */}
      <div style={{ background: '#283593', padding: '0 25px', display: 'flex', gap: '20px' }}>
        {['Home', 'About', 'Apply Now', 'Track Status', 'Contact'].map((item, i) => (
          <span key={i} style={{ color: i === 2 ? '#ffeb3b' : '#fff', padding: '10px 0', fontSize: '0.85rem', cursor: 'pointer', borderBottom: i === 2 ? '2px solid #ffeb3b' : 'none' }}>{item}</span>
        ))}
      </div>

      {/* Notice */}
      <div style={{ background: '#fff3e0', padding: '10px 25px', borderBottom: '1px solid #ffe0b2' }}>
        <p style={{ margin: 0, fontSize: '0.82rem', color: '#e65100' }}>
          📢 <strong>Notice:</strong> Applications closing soon. Only {Math.floor(Math.random() * 500 + 200)} seats remaining. Apply immediately to secure your scholarship.
        </p>
      </div>

      {/* Form */}
      <div style={{ padding: '25px' }}>
        <h3 style={{ margin: '0 0 5px', color: '#1a237e', fontSize: '1.1rem' }}>📝 Online Application Form</h3>
        <p style={{ margin: '0 0 20px', color: '#666', fontSize: '0.85rem' }}>Fill in all details carefully. Scholarship amount (₹75,000) will be transferred directly to your bank account.</p>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.85rem', color: '#333' }}>Full Name *</label>
              <input type="text" required value={formData.name} onChange={handleChange('name')}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '0.9rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.85rem', color: '#333' }}>Aadhaar Number *</label>
              <input type="text" required maxLength="12" placeholder="XXXX XXXX XXXX" value={formData.aadhaar} onChange={handleChange('aadhaar')}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '0.9rem' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.85rem', color: '#333' }}>Bank Name *</label>
              <select required value={formData.bank} onChange={handleChange('bank')}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '0.9rem', background: '#fff' }}>
                <option value="">Select Bank</option>
                <option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option>
                <option>Punjab National Bank</option><option>Bank of Baroda</option><option>Axis Bank</option>
                <option>Canara Bank</option><option>Union Bank</option><option>Other</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.85rem', color: '#333' }}>IFSC Code *</label>
              <input type="text" required placeholder="e.g. SBIN0001234" value={formData.ifsc} onChange={handleChange('ifsc')}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '0.9rem' }} />
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.85rem', color: '#333' }}>Bank Account Number *</label>
            <input type="text" required placeholder="Enter your bank account number" value={formData.account} onChange={handleChange('account')}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '0.9rem' }} />
          </div>

          {/* Registration fee */}
          <div style={{ background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: '8px', padding: '15px', marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 8px', color: '#2e7d32', fontSize: '0.95rem' }}>💳 Registration Fee (One-time)</h4>
            <p style={{ margin: '0 0 10px', fontSize: '0.85rem', color: '#333', lineHeight: '1.5' }}>
              A nominal processing fee of <strong>₹599</strong> is required for application verification and document processing. 
              This fee is <strong>100% refundable</strong> if your application is rejected.
            </p>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', cursor: 'pointer', color: '#333' }}>
                <input type="radio" name="payment" value="upi" required onChange={handleChange('fee')} /> UPI Payment
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', cursor: 'pointer', color: '#333' }}>
                <input type="radio" name="payment" value="card" onChange={handleChange('fee')} /> Debit Card
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', cursor: 'pointer', color: '#333' }}>
                <input type="radio" name="payment" value="netbanking" onChange={handleChange('fee')} /> Net Banking
              </label>
            </div>
          </div>

          {error && <p style={{ color: '#c62828', fontSize: '0.85rem', margin: '0 0 10px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '14px', background: loading ? '#999' : '#1a237e', color: '#fff', border: 'none',
            borderRadius: '4px', fontSize: '1rem', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Processing Application...' : 'Pay ₹599 & Submit Application'}
          </button>

          <p style={{ margin: '12px 0 0', fontSize: '0.75rem', color: '#999', textAlign: 'center' }}>
            🔒 Your data is secured with 256-bit encryption | Powered by NIC
          </p>
        </form>
      </div>

      {/* Footer */}
      <div style={{ background: '#1a237e', padding: '12px 25px', color: '#bbdefb', fontSize: '0.75rem', textAlign: 'center' }}>
        © 2024 PM Vidya Lakshmi Scholarship Portal. All Rights Reserved. | Ministry of Education, Govt. of India
      </div>
    </div>
  );
}
