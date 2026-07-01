require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');
const { generateChatResponse } = require('./aiService');

const app = express();
app.use(cors({ origin: '*' })); // Allow React frontend from localhost and Vercel!
app.use(express.json());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'scamshield_super_secret';

// Initialize Supabase Client (Service Role for backend DB access)
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Nodemailer transport for Brevo over Port 465 (SSL) to bypass cloud provider port 587 firewalls
const smtpPort = parseInt(process.env.SMTP_PORT) || 465;
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: smtpPort,
  secure: smtpPort === 465, // true for 465 (direct SSL), false for 587/2525
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
});

// Cloud-Safe Email Sender: Uses Brevo HTTP REST API (Port 443 HTTPS) to bypass cloud SMTP port firewalls
async function sendCloudEmail(toEmail, subject, htmlContent) {
  const senderEmail = process.env.BREVO_SENDER || process.env.BREVO_USER;
  const apiKey = process.env.BREVO_PASS || process.env.BREVO_API_KEY;

  if (!apiKey || !senderEmail) {
    throw new Error('Missing BREVO_SENDER or BREVO_PASS environment variables.');
  }

  // 1. Try Brevo HTTP REST API over standard HTTPS (Port 443 - NEVER blocked by cloud firewalls)
  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: 'ScamShield Platform', email: senderEmail },
        to: [{ email: toEmail }],
        subject: subject,
        htmlContent: htmlContent
      })
    });

    if (res.ok) {
      const data = await res.json();
      console.log(`✅ Email sent via HTTP API (Port 443) to ${toEmail} | Message ID: ${data.messageId}`);
      return data;
    } else {
      const errJson = await res.json().catch(() => ({}));
      console.warn(`⚠️ Brevo HTTP API reported (${res.status}): ${errJson.message || 'Attempting SMTP fallback...'}`);
      if (res.status === 401) {
        throw new Error('Invalid Brevo API/SMTP key. Please check BREVO_PASS in environment variables.');
      }
    }
  } catch (httpErr) {
    if (httpErr.message.includes('Invalid Brevo API')) throw httpErr;
    console.warn(`⚠️ HTTP API exception: ${httpErr.message}. Attempting SMTP fallback...`);
  }

  // 2. Fallback to Nodemailer SMTP
  return await transporter.sendMail({
    from: `"ScamShield" <${senderEmail}>`,
    to: toEmail,
    subject: subject,
    html: htmlContent
  });
}

// In-memory OTP store: { "email@example.com": { otp: "123456", expiresAt: 169... } }
const otpStore = new Map();

app.post('/api/auth/send-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ ok: false, err: 'Email is required' });

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Store it (expires in 10 minutes)
  otpStore.set(email.toLowerCase(), {
    otp,
    expiresAt: Date.now() + 10 * 60 * 1000
  });

  try {
    const senderEmail = process.env.BREVO_SENDER || process.env.BREVO_USER;
    console.log(`📧 Sending OTP to ${email} from ${senderEmail}...`);
    
    await sendCloudEmail(
      email,
      'Your ScamShield Login Code',
      `
        <div style="font-family: sans-serif; text-align: center; padding: 40px; background: #f8f9fa;">
          <div style="max-width: 400px; margin: 0 auto; background: white; border-radius: 12px; padding: 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          <h2 style="color: #1a1a2e; margin-bottom: 8px;">🛡️ ScamShield</h2>
            <p style="color: #666; margin-bottom: 24px;">Your one-time login code is:</p>
            <h1 style="font-size: 40px; letter-spacing: 8px; color: #4f46e5; margin: 16px 0; font-family: monospace;">${otp}</h1>
            <p style="color: #999; font-size: 13px;">This code expires in 10 minutes. Do not share it with anyone.</p>
          </div>
        </div>
      `
    );
    res.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ ok: false, err: `Email Error: ${err.message || 'Check credentials and settings.'}` });
  }
});

app.post('/api/auth/verify-otp', async (req, res) => {
  const { email, token } = req.body; // 'token' here means the 6-digit OTP code from frontend
  if (!email || !token) return res.status(400).json({ ok: false, err: 'Email and OTP are required' });

  const normalizedEmail = email.toLowerCase();
  const record = otpStore.get(normalizedEmail);

  if (!record) {
    return res.status(400).json({ ok: false, err: 'No OTP found for this email. Please request a new one.' });
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(normalizedEmail);
    return res.status(400).json({ ok: false, err: 'OTP has expired. Please request a new one.' });
  }

  if (record.otp !== token.toString()) {
    return res.status(400).json({ ok: false, err: 'Incorrect OTP code.' });
  }

  // OTP is valid!
  otpStore.delete(normalizedEmail);

  try {
    // 1. Check if user exists in Supabase DB
    let { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', normalizedEmail)
      .single();

    let isNewUser = false;

    // 2. If not, create them
    if (!profile) {
      isNewUser = true;
      const defaultUsername = normalizedEmail.split('@')[0];
      const { data: newProfile, error: insertError } = await supabase
        .from('profiles')
        .insert({
          id: crypto.randomUUID(),
          email: normalizedEmail,
          username: defaultUsername,
          role: 'user', // default role
          xp: 0,
          level: 1,
          streak: 0,
          theme: 'dark'
        })
        .select()
        .single();

      if (insertError) throw insertError;
      profile = newProfile;
    }

    // 3. Generate custom JWT token
    const authToken = jwt.sign(
      {
        sub: profile.id, // Subject matches profile.id
        email: profile.email,
        role: profile.role
      },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({
      ok: true,
      token: authToken,
      isNewUser: isNewUser,
      user: {
        id: profile.id,
        email: profile.email,
        role: profile.role
      }
    });

  } catch (err) {
    console.error('DB/JWT error:', err);
    res.status(500).json({ ok: false, err: 'Internal server error during login.' });
  }
});

// Update Profile Route
app.post('/api/auth/update-profile', async (req, res) => {
  try {
    // 1. Authenticate Request
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ ok: false, err: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch(err) {
      return res.status(401).json({ ok: false, err: 'Invalid token' });
    }

    const { username, theme } = req.body;

    // 2. Update Supabase
    const { data, error } = await supabase
      .from('profiles')
      .update({ username, theme })
      .eq('id', decoded.sub)
      .select()
      .single();

    if (error) throw error;

    res.json({ ok: true, profile: data });
  } catch (err) {
    console.error('Update profile error:', err);
    res.status(500).json({ ok: false, err: 'Internal Server Error' });
  }
});

// Simple middleware to verify our custom JWT
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ ok: false, err: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { sub, email, role }
    next();
  } catch (err) {
    res.status(401).json({ ok: false, err: 'Invalid token' });
  }
};

app.get('/api/auth/me', authenticate, async (req, res) => {
  try {
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', req.user.sub)
      .single();
      
    res.json({ ok: true, profile });
  } catch (err) {
    res.status(500).json({ ok: false, err: 'Server error fetching profile' });
  }
});

// AI Chatbot & Threat Scanner Route
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { messages, engine = 'groq' } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ ok: false, err: 'Invalid messages format' });
    }
    const result = await generateChatResponse(messages, engine);
    res.json({ ok: true, ...result });
  } catch (err) {
    console.error('AI Chat Error:', err);
    res.status(500).json({ ok: false, err: err.message || 'AI generation failed' });
  }
});

// Serve static frontend files if built locally
const path = require('path');
const fs = require('fs');
const _dirname = path.resolve();
const distPath = path.join(_dirname, '../client/dist');

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  // Cloud Backend Mode (Render API server where frontend is on Vercel)
  app.get('/', (req, res) => {
    res.status(200).json({
      ok: true,
      status: "online",
      service: "ScamShield Cyber Platform Backend API 🟢",
      message: "API server is ready! Please access the frontend via your Vercel URL."
    });
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
