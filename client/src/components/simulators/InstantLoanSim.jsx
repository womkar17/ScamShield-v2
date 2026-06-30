import React, { useState } from 'react';

export default function InstantLoanSim({ onComplete }) {
  const [step, setStep] = useState(1); // 1: app landing, 2: apply, 3: fee demand
  const [bankAccount, setBankAccount] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [loading, setLoading] = useState(false);
  const [showPermissions, setShowPermissions] = useState(false);
  const [error, setError] = useState('');

  const handleCardNumber = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 16) val = val.slice(0, 16);
    let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    setCardDetails({...cardDetails, number: formatted});
    if (error) setError('');
  };

  const handleExpiry = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);
    if (val.length > 2) val = val.slice(0, 2) + '/' + val.slice(2);
    setCardDetails({...cardDetails, expiry: val});
    if (error) setError('');
  };

  const handleCvv = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 3) val = val.slice(0, 3);
    setCardDetails({...cardDetails, cvv: val});
    if (error) setError('');
  };

  const handleAccount = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 18) val = val.slice(0, 18);
    setBankAccount(val);
    if (error) setError('');
  };

  const handleApply = () => {
    setShowPermissions(true);
  };

  const handleGrantPermissions = () => {
    setShowPermissions(false);
    setStep(2);
    // Simulate "approval" after a brief loading
    setTimeout(() => setStep(3), 2000);
  };

  const handlePayFee = (e) => {
    e.preventDefault();
    if (!bankAccount || bankAccount.length < 2) { setError('Please enter your bank account number'); return; }
    if (!cardDetails.number || cardDetails.number.replace(/\s/g, '').length < 4) { setError('Please enter a valid card number'); return; }
    if (!cardDetails.expiry || cardDetails.expiry.length < 4) { setError('Please enter card expiry date'); return; }
    if (!cardDetails.cvv || cardDetails.cvv.length < 3) { setError('Please enter CVV'); return; }
    setError('');
    setLoading(true);
    setTimeout(() => {
      const exposed = [];
      if (bankAccount) exposed.push('Bank Account Number');
      if (cardDetails.number) exposed.push('Debit/Credit Card Number');
      if (cardDetails.expiry) exposed.push('Card Expiry Date');
      if (cardDetails.cvv) exposed.push('CVV Security Code');
      exposed.push('Phone Contacts (via permissions)');
      exposed.push('Photo Gallery (via permissions)');
      exposed.push('SMS Access (via permissions)');
      onComplete(exposed);
    }, 1500);
  };

  const phoneStyle = {
    maxWidth: '390px',
    margin: '0 auto',
    background: '#fff',
    color: '#333',
    borderRadius: '32px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    position: 'relative'
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '1.5px solid #e0e0e0',
    borderRadius: '10px',
    boxSizing: 'border-box',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    background: '#fafafa'
  };

  return (
    <div style={phoneStyle}>
      {/* Phone Status Bar */}
      <div style={{ background: '#1a1a2e', padding: '8px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#fff' }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <span>📶</span>
          <span>🔋 87%</span>
        </div>
      </div>

      {/* App Header */}
      <div style={{ background: 'linear-gradient(135deg, #2ecc71, #27ae60)', color: 'white', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img src="/assets/quickcash_logo.png" alt="QuickCash" style={{ width: '44px', height: '44px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }} />
        <div>
          <h2 style={{ margin: 0, fontSize: '1.15rem', fontWeight: '700' }}>QuickCash</h2>
          <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.85 }}>RBI Licensed • 4.8 ⭐ (52K reviews)</p>
        </div>
      </div>

      {/* Permissions Modal */}
      {showPermissions && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '30px'
        }}>
          <div style={{
            background: '#fff', borderRadius: '16px', padding: '24px',
            width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ margin: '0 0 15px', fontSize: '1.1rem', textAlign: 'center' }}>QuickCash needs access to:</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {['📞 Contacts', '📷 Camera & Gallery', '📱 SMS Messages', '📍 Location'].map((perm, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: '#f8f9fa', borderRadius: '8px' }}>
                  <span style={{ fontSize: '1.2rem' }}>{perm.split(' ')[0]}</span>
                  <span style={{ fontSize: '0.95rem' }}>{perm.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
            <button onClick={handleGrantPermissions} style={{
              width: '100%', padding: '14px', background: '#2ecc71', color: 'white',
              border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer'
            }}>
              Allow All
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#999', marginTop: '10px', marginBottom: 0 }}>
              Required for loan verification
            </p>
          </div>
        </div>
      )}

      <div style={{ padding: '20px 24px', minHeight: '420px' }}>
        {/* Step 1: Landing */}
        {step === 1 && (
          <>
            <div style={{
              background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
              padding: '24px',
              borderRadius: '16px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              <p style={{ margin: '0 0 5px', color: '#2e7d32', fontSize: '0.85rem', fontWeight: '600' }}>🎉 Congratulations! You're pre-approved for</p>
              <h1 style={{ margin: '0', color: '#1b5e20', fontSize: '2.8rem', fontWeight: '800' }}>₹5,00,000</h1>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '12px' }}>
                <span style={{ fontSize: '0.8rem', color: '#1b5e20', background: '#a5d6a7', padding: '3px 10px', borderRadius: '20px', fontWeight: '600' }}>✓ KYC Done</span>
                <span style={{ fontSize: '0.8rem', color: '#1b5e20', background: '#a5d6a7', padding: '3px 10px', borderRadius: '20px', fontWeight: '600' }}>✓ CIBIL 750+</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              {[{label: 'Interest', value: '0%*'}, {label: 'Tenure', value: '36 mo'}, {label: 'Disbursal', value: '5 min'}].map((item, i) => (
                <div key={i} style={{
                  flex: 1, textAlign: 'center', padding: '12px', background: '#f1f8e9',
                  borderRadius: '10px', border: '1px solid #c8e6c9'
                }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1b5e20' }}>{item.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#555', marginTop: '3px' }}>{item.label}</div>
                </div>
              ))}
            </div>

            <button onClick={handleApply} style={{
              width: '100%', padding: '16px', background: 'linear-gradient(135deg, #2ecc71, #27ae60)',
              color: 'white', border: 'none', borderRadius: '12px',
              fontSize: '1.15rem', fontWeight: 'bold', cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(46,204,113,0.4)'
            }}>
              Apply Now — Get Money in 5 Minutes
            </button>

            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                {name: 'Rajesh K.', review: '"Got ₹2L in 3 minutes. Amazing app!"', stars: '⭐⭐⭐⭐⭐'},
                {name: 'Priya M.', review: '"Best loan app. No paperwork at all."', stars: '⭐⭐⭐⭐⭐'}
              ].map((r, i) => (
                <div key={i} style={{ fontSize: '0.8rem', color: '#444', background: '#f8f9fa', padding: '10px 12px', borderRadius: '8px' }}>
                  <strong style={{ color: '#333' }}>{r.name}</strong> {r.stars}<br/><span style={{ color: '#555' }}>{r.review}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Step 2: Processing */}
        {step === 2 && (
          <div style={{ textAlign: 'center', paddingTop: '60px' }}>
            <div style={{
              width: '60px', height: '60px', border: '4px solid #e0e0e0',
              borderTopColor: '#2ecc71', borderRadius: '50%',
              margin: '0 auto 20px',
              animation: 'spin 1s linear infinite'
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <h3 style={{ margin: '0 0 10px', fontSize: '1.2rem' }}>Verifying your details...</h3>
            <p style={{ color: '#999', fontSize: '0.9rem', margin: 0 }}>Checking CIBIL score & bank account</p>
          </div>
        )}

        {/* Step 3: Fee Demand */}
        {step === 3 && (
          <>
            <div style={{
              background: '#e8f5e9', padding: '16px', borderRadius: '12px',
              textAlign: 'center', marginBottom: '20px', border: '1px solid #a5d6a7'
            }}>
              <p style={{ margin: 0, color: '#2e7d32', fontWeight: 'bold', fontSize: '1rem' }}>
                ✅ Loan Approved! ₹5,00,000 ready for transfer
              </p>
            </div>

            <div style={{
              background: '#fff3cd', border: '1px solid #ffc107', padding: '16px',
              borderRadius: '12px', marginBottom: '20px'
            }}>
              <h4 style={{ margin: '0 0 8px', color: '#856404', fontSize: '0.95rem' }}>
                ⚠️ One-time Security Deposit Required
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#856404', lineHeight: '1.5' }}>
                To prevent fraud and verify your bank account, a <strong>fully refundable</strong> deposit of <strong>₹1,999</strong> is required. This amount will be added back to your loan disbursement.
              </p>
            </div>

            <form onSubmit={handlePayFee}>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: '#555', fontWeight: '600' }}>Bank Account Number</label>
                <input type="text" value={bankAccount} onChange={handleAccount}
                  placeholder="Enter your account number" required style={inputStyle} />
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: '#555', fontWeight: '600' }}>Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" value={cardDetails.number}
                  onChange={handleCardNumber} required style={inputStyle} />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: '#555', fontWeight: '600' }}>Expiry</label>
                  <input type="text" placeholder="MM/YY" value={cardDetails.expiry}
                    onChange={handleExpiry} required style={inputStyle} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', color: '#555', fontWeight: '600' }}>CVV</label>
                  <input type="password" placeholder="•••" value={cardDetails.cvv}
                    onChange={handleCvv} required style={inputStyle} />
                </div>
              </div>

              {error && <p style={{ color: '#e53935', fontSize: '0.85rem', margin: '0 0 10px', fontWeight: 600 }}>{error}</p>}

              <button type="submit" disabled={loading} style={{ 
                width: '100%', padding: '16px',
                background: loading ? '#bbb' : 'linear-gradient(135deg, #2ecc71, #27ae60)',
                color: 'white', border: 'none', borderRadius: '12px',
                fontSize: '1.1rem', fontWeight: 'bold',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}>
                {loading ? '💳 Processing Payment...' : 'Pay ₹1,999 & Receive Loan'}
              </button>
            </form>
          </>
        )}
      </div>

      {/* Phone bottom bar */}
      <div style={{ background: '#f8f9fa', padding: '12px', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #eee', fontSize: '0.7rem', color: '#999' }}>
        <span>🏠 Home</span>
        <span>💰 Loans</span>
        <span>📊 History</span>
        <span>👤 Profile</span>
      </div>
    </div>
  );
}
