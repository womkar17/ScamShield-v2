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

let activeThreatBroadcast = null;

// Initialize Supabase Client (Service Role for backend DB access)
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Universal Google SMTP Email Sender
async function sendCloudEmail(toEmail, subject, htmlContent) {
  const smtpUser = process.env.SMTP_USER || process.env.SMPT_USER || process.env.GMAIL_USER || process.env.GMAIL_ADDRESS || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.SMPT_PASS || process.env.GMAIL_PASS || process.env.GMAIL_PASSWORD || process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;

  if (!smtpUser || !smtpPass) {
    const keysFound = Object.keys(process.env).filter(k => k.includes('SMTP') || k.includes('GMAIL') || k.includes('EMAIL') || k.includes('PASS') || k.includes('USER')).join(', ') || 'None found';
    throw new Error(`Vercel Server cannot find SMTP_USER or SMTP_PASS! (Related environment variables seen by Vercel container: [${keysFound}]). Remember: When you add or change variables in Vercel Settings, you MUST go to the Deployments tab and manually click 'Redeploy' on your latest deployment!`);
  }

  // Force Google SMTP (smtp.gmail.com) over SSL Port 465, ignoring any legacy Brevo host in Vercel env
  let smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  if (smtpHost.toLowerCase().includes('brevo') || smtpHost.toLowerCase().includes('sendinblue')) {
    smtpHost = 'smtp.gmail.com';
  }
  let smtpPort = parseInt(process.env.SMTP_PORT || '465');
  if (smtpHost === 'smtp.gmail.com') {
    smtpPort = 465; // Force SSL for Gmail
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  const mailOptions = {
    from: `"ScamShield Security" <${smtpUser}>`,
    to: toEmail,
    subject: subject,
    html: htmlContent
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(`✅ Email sent via Google SMTP (${smtpHost}:${smtpPort}) to ${toEmail} | MessageID: ${info.messageId}`);
  return info;
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

// Admin Users Management Endpoints
app.get('/api/admin/users', async (req, res) => {
  try {
    const { data: users, error } = await supabase
      .from('profiles')
      .select('*')
      .order('xp', { ascending: false });
    if (error) throw error;
    res.json({ ok: true, users: users || [] });
  } catch (err) {
    console.error('Fetch users error:', err);
    res.status(500).json({ ok: false, err: 'Failed to fetch users' });
  }
});

app.post('/api/admin/users/:id/role', async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const { data, error } = await supabase
      .from('profiles')
      .update({ role })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    res.json({ ok: true, user: data });
  } catch (err) {
    res.status(500).json({ ok: false, err: 'Failed to update role' });
  }
});

app.delete('/api/admin/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from('profiles').delete().eq('id', id);
    if (error) throw error;
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, err: 'Failed to delete user' });
  }
});

// Global Threat Broadcast Endpoints
app.get('/api/broadcast', (req, res) => {
  res.json({ ok: true, broadcast: activeThreatBroadcast });
});

app.post('/api/admin/broadcast', (req, res) => {
  activeThreatBroadcast = req.body;
  res.json({ ok: true, broadcast: activeThreatBroadcast });
});

let activeCustomGames = [];

// Global Custom Games Sync Endpoints (Syncs across all users & screens)
app.get('/api/games/custom', async (req, res) => {
  let combined = [...activeCustomGames];

  try {
    const { data, error } = await supabase.from('custom_games').select('*').order('created_at', { ascending: false });
    if (!error && Array.isArray(data)) {
      data.forEach(g => {
        if (!combined.some(existing => String(existing.id) === String(g.id) || existing.title === g.title)) {
          combined.push(g);
        }
      });
    }
  } catch (e) {}

  try {
    const { data: sysRow } = await supabase.from('profiles').select('username').eq('email', 'system_custom_games@scamshield.internal').maybeSingle();
    if (sysRow && sysRow.username) {
      const parsed = JSON.parse(sysRow.username);
      if (Array.isArray(parsed)) {
        parsed.forEach(g => {
          if (!combined.some(existing => String(existing.id) === String(g.id) || existing.title === g.title)) {
            combined.push(g);
          }
        });
      }
    }
  } catch (e) {}

  activeCustomGames = combined.filter(g => g.title !== 'Phishy Email Alert');
  res.json({ ok: true, games: activeCustomGames });
});

app.post('/api/admin/games/custom', async (req, res) => {
  const game = req.body;
  if (!game || !game.title) return res.status(400).json({ ok: false, err: 'Missing game title' });

  activeCustomGames = [game, ...activeCustomGames.filter(g => String(g.id) !== String(game.id) && g.title !== 'Phishy Email Alert')];

  // Try saving with full data column
  try {
    const dbRow = {
      id: game.id,
      title: game.title,
      description: game.description,
      type: game.type,
      difficulty: game.difficulty,
      xpreward: game.xpReward || game.xpreward || 50,
      data: game.data || null
    };
    const { error } = await supabase.from('custom_games').upsert([dbRow]);
    if (error && error.message?.includes('data')) {
      const dbRowNoData = { id: game.id, title: game.title, description: game.description, type: game.type, difficulty: game.difficulty, xpreward: game.xpReward || game.xpreward || 50 };
      await supabase.from('custom_games').upsert([dbRowNoData]);
    }
  } catch (e) {}

  try {
    const jsonStr = JSON.stringify(activeCustomGames);
    const { data: existing } = await supabase.from('profiles').select('id').eq('email', 'system_custom_games@scamshield.internal').maybeSingle();
    if (existing) {
      await supabase.from('profiles').update({ username: jsonStr }).eq('id', existing.id);
    } else {
      await supabase.from('profiles').insert([{
        id: '11111111-1111-1111-1111-111111111111',
        email: 'system_custom_games@scamshield.internal',
        username: jsonStr,
        role: 'system_storage',
        xp: 0,
        level: 1
      }]);
    }
  } catch (e) {}

  res.json({ ok: true, games: activeCustomGames });
});

app.delete('/api/admin/games/custom/:id', async (req, res) => {
  const { id } = req.params;
  activeCustomGames = activeCustomGames.filter(g => String(g.id) !== String(id));

  try { await supabase.from('custom_games').delete().eq('id', id); } catch (e) {}

  try {
    const jsonStr = JSON.stringify(activeCustomGames);
    await supabase.from('profiles').update({ username: jsonStr }).eq('email', 'system_custom_games@scamshield.internal');
  } catch (e) {}

  res.json({ ok: true, games: activeCustomGames });
});

// Send Phishing Drill Email via Google SMTP / Universal SMTP
app.post('/api/admin/phishing/send', async (req, res) => {
  try {
    const { targetEmail, campaignName, template, customSubject, customMessage, senderName } = req.body;
    if (!targetEmail) return res.status(400).json({ ok: false, err: 'Missing targetEmail' });

    if (targetEmail.toLowerCase().includes('all@') || targetEmail.includes(',')) {
      return res.json({ ok: true, simulated: true, message: 'Broadcast simulated across user database' });
    }

    const subject = customSubject || `[URGENT] ${template || 'Security Alert'}: Action Required Immediately`;
    const messageBody = customMessage || `We have detected suspicious login activity or pending security requirements on your corporate account. Please review and verify your identity within 24 hours to prevent account lockout.`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background: #0f172a; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; color: #f87171;">⚠️ ${template || 'Corporate Security Alert'}</h2>
        </div>
        <div style="padding: 24px; background: #f8fafc; color: #1e293b; line-height: 1.6;">
          <p>Hello,</p>
          <p style="font-size: 15px; color: #334155;">${messageBody.replace(/\n/g, '<br/>')}</p>
          <div style="margin: 30px 0; text-align: center;">
            <a href="http://localhost:5173/simulations" style="background: #dc2626; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
              Verify Account / Action Required →
            </a>
          </div>
          <p style="font-size: 13px; color: #64748b;">If you did not initiate this request, please contact IT Support immediately.</p>
        </div>
        <div style="background: #e2e8f0; padding: 15px; text-align: center; font-size: 12px; color: #475569; border-top: 1px solid #cbd5e1;">
          <strong>🛡️ ScamShield Security Awareness Drill Notice:</strong><br/>
          This email was dispatched by your system administrator as an authorized phishing drill. If you recognized this as a simulated scam, do NOT click the link above—report it to IT to earn XP!
        </div>
      </div>
    `;

    try {
      await sendCloudEmail(targetEmail, subject, htmlContent);
      return res.json({ ok: true, sent: true, recipient: targetEmail });
    } catch (emailErr) {
      console.warn(`[phishing/send] SMTP fallback (simulated delivery):`, emailErr.message);
      return res.json({ ok: true, sent: false, fallbackSimulated: true, err: emailErr.message });
    }
  } catch (err) {
    res.status(500).json({ ok: false, err: err.message });
  }
});

// AI Chatbot & Threat Scanner Route
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { engine = 'groq' } = req.body;
    let messages = req.body.messages;
    if (!messages && req.body.message) {
      messages = [{ role: 'user', content: req.body.message }];
    } else if (!messages && req.body.prompt) {
      messages = [{ role: 'user', content: req.body.prompt }];
    }
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
