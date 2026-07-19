import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function FakeStudentLoanAppSim({ onComplete }) {
  const [view, setView] = useState('offer'); // 'offer' | 'disburse'
  const [formData, setFormData] = useState({ fullName: '', course: '', loanAmount: '', aadhaar: '', panCard: '', bankAccount: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleOfferStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', course: 'nonEmpty', loanAmount: 'amount' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('disburse');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { aadhaar: 'aadhaar', panCard: 'pan', bankAccount: 'bankAccount' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Course & Institution', 'Loan Amount', 'Aadhaar Number', 'PAN Number', 'Bank Account Number'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'offer') {
    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#c2410c', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>QuickEdu Loans</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.9 }}>Instant Education Loan — No Collateral, 0% Processing Fee*</p>
        </div>
        <div style={{ padding: '22px' }}>
          <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '16px' }}>Approved in 10 minutes.</p>
          <form onSubmit={handleOfferStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
            <Field label="Course & Institution" value={formData.course} onChange={handleChange('course')} placeholder="e.g. B.Tech, IIT Delhi" />
            <Field label="Loan Amount Needed" value={formData.loanAmount} onChange={handleChange('loanAmount')} type="number" placeholder="e.g. 200000" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#c2410c', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Check Instant Approval
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#c2410c', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Insurance Fee to Disburse Loan</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.9 }}>Mandatory ₹2,999 loan-insurance premium, deducted before disbursal</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Aadhaar Number" value={formData.aadhaar} onChange={handleChange('aadhaar')} placeholder="12-digit Aadhaar" />
          <Field label="PAN Number" value={formData.panCard} onChange={handleChange('panCard')} placeholder="e.g. ABCDE1234F" />
          <Field label="Bank Account Number" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#c2410c', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Disbursing…' : 'Pay & Disburse Loan'}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <div style={{ marginBottom: '13px' }}>
      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', padding: '11px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.92rem', outline: 'none' }} />
    </div>
  );
}
