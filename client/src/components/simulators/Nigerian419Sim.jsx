import React, { useState } from 'react';


export default function Nigerian419Sim({ onComplete }) {
  const [view, setView] = useState('email');
  const [formData, setFormData] = useState({
    fullName: '',
    bankAccount: '',
    swiftCode: '',
    routingNumber: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setView('fee');
  };

  const handlePayFee = (e) => {
    e.preventDefault();
    onComplete(['Full Name', 'Bank Account Details', 'Processing Fee Amount']);
  };

  return (
    <div className="sim-container" style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {view === 'email' && (
        <div className="email-client" style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
          <div className="email-header" style={{ backgroundColor: '#f1f3f4', padding: '15px', borderBottom: '1px solid #ccc' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#202124' }}>URGENT: Confidential Business Proposal</h3>
            <div style={{ fontSize: '14px', color: '#5f6368' }}>
              <strong>From:</strong> Barrister John Tumb &lt;barr.john@webmail.com&gt;<br />
              <strong>To:</strong> Undisclosed Recipients
            </div>
          </div>
          <div className="email-body" style={{ padding: '20px', backgroundColor: '#fff', color: '#333', lineHeight: '1.6' }}>
            <p>Dear Friend,</p>
            <p>I am Barrister John Tumb, legal practitioner to the late Prince of Nigeria. I am contacting you regarding a highly confidential matter involving the sum of <strong>$25,500,000.00 USD</strong> left by my late client.</p>
            <p>Due to current political situations, I cannot claim these funds directly. I need a trustworthy foreign partner to receive the funds into their account. For your assistance, you will receive <strong>30%</strong> of the total sum.</p>
            <p>To proceed with the legal transfer, please provide your banking details immediately.</p>
            
            <form onSubmit={handleNext} style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Bank Account Number:</label>
                <input type="text" name="bankAccount" value={formData.bankAccount} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>SWIFT / Routing Number:</label>
                <input type="text" name="swiftCode" value={formData.swiftCode} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
              <button type="submit" style={{ backgroundColor: '#1a73e8', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                Reply with Details
              </button>
            </form>
          </div>
        </div>
      )}

      {view === 'fee' && (
        <div className="fee-request" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#fff' }}>
          <h3 style={{ color: '#d93025', marginTop: 0 }}>Transfer Initiated - Action Required</h3>
          <p>Thank you, {formData.fullName}. The Central Bank has approved the transfer of $25,500,000.00 USD to your account: {formData.bankAccount}.</p>
          <div style={{ backgroundColor: '#fce8e6', borderLeft: '4px solid #d93025', padding: '15px', margin: '20px 0' }}>
            <strong>NOTICE:</strong> A mandatory International Transfer Tax of <strong>$500.00 USD</strong> must be paid upfront before the funds can be released. This fee cannot be deducted from the principal amount.
          </div>
          <form onSubmit={handlePayFee}>
            <button type="submit" style={{ width: '100%', backgroundColor: '#34a853', color: '#fff', border: 'none', padding: '12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
              Pay $500 Transfer Fee via Western Union
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
