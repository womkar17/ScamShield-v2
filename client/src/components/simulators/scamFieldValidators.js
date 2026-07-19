// Real field-format validators for scam simulation forms.
// Unlike a presence-only check, these actually reject malformed input,
// matching how a real (if convincingly fake) portal would behave.

export const validators = {
  name: (v) => (/^[A-Za-z][A-Za-z\s.'-]{2,49}$/.test(v.trim()) ? '' : 'Enter a valid full name (min 3 letters).'),

  phone: (v) => (/^[6-9]\d{9}$/.test(v.replace(/[\s+-]/g, '').replace(/^91/, '')) ? '' : 'Enter a valid 10-digit mobile number.'),

  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email address.'),

  pan: (v) => (/^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(v.trim()) ? '' : 'Enter a valid PAN (e.g. ABCDE1234F).'),

  aadhaar: (v) => (/^\d{12}$/.test(v.replace(/\s/g, '')) ? '' : 'Enter a valid 12-digit Aadhaar number.'),

  bankAccount: (v) => (/^\d{9,18}$/.test(v.trim()) ? '' : 'Enter a valid bank account number (9-18 digits).'),

  ifsc: (v) => (/^[A-Z]{4}0[A-Z0-9]{6}$/i.test(v.trim()) ? '' : 'Enter a valid IFSC code (e.g. SBIN0001234).'),

  cardNumber: (v) => (/^\d{13,19}$/.test(v.replace(/\s/g, '')) ? '' : 'Enter a valid card number (13-19 digits).'),

  cardExpiry: (v) => {
    const m = v.trim().match(/^(\d{2})\/(\d{2})$/);
    if (!m) return 'Enter expiry as MM/YY.';
    const month = parseInt(m[1], 10);
    if (month < 1 || month > 12) return 'Enter a valid month (01-12).';
    return '';
  },

  cvv: (v) => (/^\d{3,4}$/.test(v.trim()) ? '' : 'Enter a valid 3-4 digit CVV.'),

  upiId: (v) => (/^[\w.-]{2,256}@[A-Za-z]{2,64}$/.test(v.trim()) ? '' : 'Enter a valid UPI ID (e.g. name@bank).'),

  passport: (v) => (/^[A-Z][0-9]{7}$/i.test(v.trim().replace(/\s/g, '')) ? '' : 'Enter a valid passport number (e.g. A1234567).'),

  atmPin: (v) => (/^\d{4,6}$/.test(v.trim()) ? '' : 'Enter a valid 4-6 digit PIN.'),

  walletAddress: (v) => (/^[A-Za-z0-9]{20,64}$/.test(v.trim()) ? '' : 'Enter a valid wallet address (20-64 characters).'),

  walletSeed: (v) => (v.trim().split(/\s+/).length >= 12 ? '' : 'Enter your full recovery phrase (12+ words).'),

  dob: (v) => (/^\d{2}\/\d{2}\/\d{4}$/.test(v.trim()) ? '' : 'Enter date of birth as DD/MM/YYYY.'),

  amount: (v) => (/^\d+(\.\d{1,2})?$/.test(v.trim()) && parseFloat(v) > 0 ? '' : 'Enter a valid amount.'),

  nonEmpty: (v) => (v.trim().length >= 2 ? '' : 'This field is required.'),

  age: (v) => (/^\d{1,2}$/.test(v.trim()) && parseInt(v, 10) >= 15 && parseInt(v, 10) <= 99 ? '' : 'Enter a valid age.'),
};

/**
 * Validate a set of {field: value} against a matching {field: validatorKey} map.
 * Returns the first error message found, or '' if everything passes.
 */
export function validateFields(values, schema) {
  for (const field of Object.keys(schema)) {
    const validatorKey = schema[field];
    const validatorFn = validators[validatorKey] || validators.nonEmpty;
    const msg = validatorFn(values[field] || '');
    if (msg) return msg;
  }
  return '';
}
