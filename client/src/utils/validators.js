export const VALIDATORS = {
      // Name fields — letters, spaces, dots, hyphens only
      name: {
        test: v => /^[a-zA-Z\u0900-\u097F\s.\-']{2,60}$/.test(v.trim()),
        msg: 'Name must contain letters only (no numbers or symbols)'
      },
      // Mobile / phone — exactly 10 digits (Indian), optional +91 prefix
      mobile: {
        test: v => /^(\+91[\s-]?)?[6-9]\d{9}$/.test(v.replace(/\s/g, '')),
        msg: 'Enter a valid 10-digit Indian mobile number'
      },
      phone: {
        test: v => /^(\+91[\s-]?)?[6-9]\d{9}$/.test(v.replace(/\s/g, '')),
        msg: 'Enter a valid 10-digit phone number'
      },
      whatsapp: {
        test: v => /^(\+91[\s-]?)?[6-9]\d{9}$/.test(v.replace(/\s/g, '')),
        msg: 'Enter a valid 10-digit WhatsApp number'
      },
      // Aadhaar — 12 digits
      aadhaar: {
        test: v => /^\d{4}\s?\d{4}\s?\d{4}$/.test(v.trim()),
        msg: 'Aadhaar must be 12 digits (e.g. 1234 5678 9012)'
      },
      // PAN — 5 letters, 4 digits, 1 letter
      pan: {
        test: v => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(v.trim().toUpperCase()),
        msg: 'PAN format must be ABCDE1234F (5 letters, 4 digits, 1 letter)'
      },
      // Card number — 16 digits
      card: {
        test: v => /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/.test(v.replace(/\s/g, '')),
        msg: 'Card number must be 16 digits'
      },
      // Expiry — MM/YY or MM/YYYY
      expiry: {
        test: v => /^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/.test(v.trim()),
        msg: 'Use format MM/YY (e.g. 08/27)'
      },
      // CVV — 3 or 4 digits
      cvv: {
        test: v => /^\d{3,4}$/.test(v.trim()),
        msg: 'CVV must be 3 or 4 digits'
      },
      // OTP — 4 or 6 digits
      otp: {
        test: v => /^\d{4,6}$/.test(v.trim()),
        msg: 'OTP must be 4 or 6 digits'
      },
      // Email / Gmail
      email: {
        test: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
        msg: 'Enter a valid email address (must contain @)'
      },
      gmail: {
        test: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
        msg: 'Enter a valid email address (must contain @)'
      },
      // UPI ID — anything@anything
      upi: {
        test: v => /^[\w.\-]{2,}@[\w]{2,}$/.test(v.trim()),
        msg: 'UPI ID format: name@bank (e.g. user@okicici)'
      },
      // Address — min 10 chars
      address: {
        test: v => v.trim().length >= 10,
        msg: 'Enter a complete address (at least 10 characters)'
      },
      // Amount / number
      amount: {
        test: v => /^\d+(\.\d{1,2})?$/.test(v.trim()) && parseFloat(v) > 0,
        msg: 'Enter a valid amount (numbers only)'
      },
      // Bank name — letters only
      bank: {
        test: v => v.trim().length >= 3,
        msg: 'Enter your bank name (at least 3 characters)'
      },
      // Resume link — URL or text
      resume: {
        test: v => v.trim().length >= 5,
        msg: 'Enter a valid link or description'
      },
      // Relation
      relation: {
        test: v => /^[a-zA-Z\s]{3,30}$/.test(v.trim()),
        msg: 'Enter your relation (e.g. Son, Daughter, Parent)'
      },
      // App confirm / generic text
      app: {
        test: v => v.trim().length >= 3,
        msg: 'This field cannot be empty'
      },
      //Account Number /only numbers
      account: {
        test: v => /^\d{10,18}$/.test(v.replace(/[\s-]/g, '')),
        msg: 'Account number must be 10-18 digits'
      },
      ifsc: {
        test: v => /^[A-Z]{4}0[A-Z0-9]{6}$/i.test(v.trim()),
        msg: 'Invalid IFSC code (e.g. SBIN0001234)'
      },
      username: {
        test: v => /^[a-zA-Z0-9._]{3,30}$/.test(v.trim()),
        msg: 'Username must be 3-30 characters'
      },
      password: {
        test: v => v.length >= 8,
        msg: 'Password must be at least 8 characters'
      },
      dob: {
        test: v => /^\d{2}\/\d{2}\/\d{4}$/.test(v.trim()),
        msg: 'Use DD/MM/YYYY format'
      },
      employeeid: {
        test: v => /^[A-Za-z0-9-]{4,20}$/.test(v.trim()),
        msg: 'Enter a valid Employee ID'
      },
      wallet: {
        test: v => v.trim().length >= 20,
        msg: 'Enter a valid wallet address'
      },

    };

    // Determine which validator to use based on field name keyword
    export function getValidator(fieldN) {
      const n = fieldN.toLowerCase();
      if (n.includes('aadhaar') || n.includes('aadhar')) return VALIDATORS.aadhaar;
      if (n.includes('pan')) return VALIDATORS.pan;
      if (n.includes('mobile') || n.includes('phone')) return VALIDATORS.mobile;
      if (n.includes('whatsapp')) return VALIDATORS.whatsapp;
      if (n.includes('card') && !n.includes('expiry') && !n.includes('cvv')) return VALIDATORS.card;
      if (n.includes('expiry')) return VALIDATORS.expiry;
      if (n.includes('cvv')) return VALIDATORS.cvv;
      if (n.includes('otp')) return VALIDATORS.otp;
      if (n.includes('email') || n.includes('gmail')) return VALIDATORS.email;
      if (n.includes('upi')) return VALIDATORS.upi;
      if (n.includes('address')) return VALIDATORS.address;
      if (n.includes('name')) return VALIDATORS.name;
      if (n.includes('amount') || n.includes('investment')) return VALIDATORS.amount;
      if (n.includes('account')) return VALIDATORS.account;
      if (n.includes('bank')) return VALIDATORS.bank;
      if (n.includes('resume')) return VALIDATORS.resume;
      if (n.includes('relation')) return VALIDATORS.relation;
      if (n.includes('app') || n.includes('confirm')) return VALIDATORS.app;
      if (n.includes('ifsc')) return VALIDATORS.ifsc;
      if (n.includes('username') || n.includes('user')) return VALIDATORS.username;
      if (n.includes('password') || n.includes('pass')) return VALIDATORS.password;
      if (n.includes('dob') || n.includes('birth')) return VALIDATORS.dob;
      if (n.includes('employee')) return VALIDATORS.employeeid;
      if (n.includes('wallet')) return VALIDATORS.wallet;

      // fallback — just non-empty
      return { test: v => v.trim().length >= 2, msg: 'This field is required' };
    }

    export function validateField(idx) {
      const m = state.currentModule; if (!m) return true;
      const f = m.fields[idx];
      const inp = document.getElementById('field-' + idx);
      const err = document.getElementById('ferr-' + idx);
      if (!inp) return true;
      const val = inp.value;
      if (!val) { inp.className = 'scam-input'; err.textContent = ''; return false; }
      const v = getValidator(f.n + ' ' + f.p);
      const ok = v.test(val);
      inp.className = 'scam-input ' + (ok ? 'valid' : 'invalid');
      err.textContent = ok ? '' : v.msg;
      err.className = ok ? 'field-ok' : 'field-error';
      return ok;
    }