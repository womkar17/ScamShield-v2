import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

dotenv.config();
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'scamshield_super_secret';
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseServiceKey || 'placeholder');

// Cloud-Safe Email Sender: Uses Brevo HTTP REST API (Port 443 HTTPS)
async function sendCloudEmail(toEmail, subject, htmlContent) {
  const senderEmail = process.env.BREVO_SENDER || process.env.BREVO_USER;
  const apiKey = process.env.BREVO_PASS || process.env.BREVO_API_KEY;

  if (!apiKey || !senderEmail) {
    throw new Error('Missing BREVO_SENDER or BREVO_PASS environment variables.');
  }

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
    console.log(`✅ Serverless Email sent via Brevo HTTP API to ${toEmail} | ID: ${data.messageId}`);
    return data;
  } else {
    const errJson = await res.json().catch(() => ({}));
    throw new Error(`Brevo HTTP API Error (${res.status}): ${errJson.message || 'Failed to send OTP email'}`);
  }
}

// AI Generation Helper
const SYSTEM_PROMPT = `You are ScamShield AI, an intelligent cybersecurity and scam-prevention assistant built into the ScamShield platform.
Your primary role is to protect users from digital threats, analyze suspicious links/emails/SMS, teach cybersecurity best practices, and explain cognitive biases.
When generating case studies, examples, or threat breakdowns, you MUST provide REAL-WORLD, DOCUMENTED historical facts and verified statistics (e.g. from FBI IC3, CISA, FTC, ENISA, or major cybersecurity vendor breach reports), including exact victim counts, actual organizations breached (when public), and verified financial loss numbers.
When answering cybersecurity or scam-related questions, be structured, clear, and actionable. Use bullet points and emojis to make your advice easy to read.`;

async function callGroq(messages) {
  const apiKey = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
  if (!apiKey) throw new Error("Missing GROQ_API_KEY");
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.7,
      max_tokens: 3072
    })
  });
  if (!res.ok) throw new Error(`Groq API Error (${res.status}): ${await res.text()}`);
  const data = await res.json();
  return data.choices[0].message.content;
}

async function callGemini(messages) {
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) throw new Error("Missing GEMINI_API_KEY");
  const contents = messages.map(msg => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }]
  }));
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents,
      generationConfig: { temperature: 0.7, maxOutputTokens: 3072 }
    })
  });
  if (!res.ok) throw new Error(`Gemini API Error (${res.status}): ${await res.text()}`);
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated";
}

async function generateChatResponse(messages, preferredEngine = 'groq') {
  try {
    if (preferredEngine === 'gemini') return { reply: await callGemini(messages), engine: 'Google Gemini (1.5 Flash)' };
    return { reply: await callGroq(messages), engine: 'Groq (Llama-3.3 70B)' };
  } catch (err) {
    const fallbackEngine = preferredEngine === 'gemini' ? 'groq' : 'gemini';
    if (fallbackEngine === 'gemini') return { reply: await callGemini(messages), engine: 'Google Gemini (Fallback)' };
    return { reply: await callGroq(messages), engine: 'Groq (Fallback)' };
  }
}

// Routes
app.post('/api/auth/send-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ ok: false, err: 'Email required' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const token = jwt.sign({ email, otp }, JWT_SECRET, { expiresIn: '10m' });

  try {
    await sendCloudEmail(
      email,
      'Your ScamShield Login OTP 🛡️',
      `<div style="font-family: Arial, sans-serif; padding: 20px; background: #0f172a; color: #fff; border-radius: 10px;">
        <h2 style="color: #38bdf8;">Welcome to ScamShield!</h2>
        <p>Your one-time login verification code is:</p>
        <h1 style="background: #1e293b; padding: 15px; border-radius: 8px; letter-spacing: 4px; color: #f59e0b; width: fit-content;">${otp}</h1>
        <p style="color: #94a3b8; font-size: 12px;">This code expires in 10 minutes. If you did not request this, please ignore this email.</p>
      </div>`
    );
    res.json({ ok: true, token });
  } catch (err) {
    console.error('OTP Send Error:', err.message);
    res.status(500).json({ ok: false, err: err.message });
  }
});

app.post('/api/auth/verify-otp', async (req, res) => {
  const { email, otp, token, username } = req.body;
  if (!email || !otp || !token) return res.status(400).json({ ok: false, err: 'Missing required parameters' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.email !== email || decoded.otp !== otp) {
      return res.status(401).json({ ok: false, err: 'Invalid OTP code' });
    }

    const userId = crypto.createHash('sha256').update(email).digest('hex');
    let { data: profile } = await supabase.from('profiles').select('*').eq('id', userId).single();

    if (!profile) {
      const defaultName = username || email.split('@')[0];
      const newProfile = { id: userId, email, username: defaultName, role: 'user', xp: 0, level: 1, streak: 1 };
      const { data, error } = await supabase.from('profiles').insert([newProfile]).select().single();
      if (error) {
        return res.json({ ok: true, session: { user: { id: userId, email } }, userProfile: newProfile });
      }
      profile = data;
    }

    res.json({ ok: true, session: { user: { id: userId, email } }, userProfile: profile });
  } catch (err) {
    res.status(401).json({ ok: false, err: 'Expired or invalid OTP token' });
  }
});

app.get('/api/health', async (req, res) => {
  const hasUrl = !!supabaseUrl;
  const hasKey = !!supabaseServiceKey;
  let dbOk = false;
  try {
    const { data, error } = await supabase.from('profiles').select('id').limit(1);
    dbOk = !error;
  } catch (e) { dbOk = false; }
  res.json({ ok: hasUrl && hasKey && dbOk, supabaseUrl: hasUrl, serviceKey: hasKey, dbConnection: dbOk });
});

app.post('/api/auth/oauth-sync', async (req, res) => {
  const { id, email, username } = req.body;
  if (!id || !email) return res.status(400).json({ ok: false, err: 'Missing parameters' });

  try {
    // Step 1: Check if a profile already exists with this exact Google OAuth ID
    let { data: idProfile } = await supabase.from('profiles').select('*').eq('id', id).single();
    if (idProfile) {
      console.log('oauth-sync: found profile by id, role:', idProfile.role);
      return res.json({ ok: true, profile: idProfile });
    }

    // Step 2: Check if a profile exists by email (admin was set before Google login linked the ID)
    let { data: emailProfiles } = await supabase.from('profiles').select('*').eq('email', email);
    if (emailProfiles && emailProfiles.length > 0) {
      // Pick the admin row if one exists, otherwise the one with the most XP
      const best = emailProfiles.find(p => p.role === 'admin') || emailProfiles.sort((a, b) => (b.xp || 0) - (a.xp || 0))[0];
      console.log('oauth-sync: found profile by email, role:', best.role, 'old id:', best.id, 'new id:', id);

      // Delete ALL old rows for this email (can't UPDATE a primary key in Postgres)
      await supabase.from('profiles').delete().eq('email', email);

      // Re-insert with the correct Google OAuth UUID, preserving role & progress
      const merged = {
        id,
        email,
        username: username || best.username || email.split('@')[0],
        role: best.role || 'user',
        xp: best.xp || 0,
        level: best.level || 1,
        streak: best.streak || 1
      };
      const { data: inserted, error: insertErr } = await supabase.from('profiles').insert([merged]).select().single();
      if (insertErr) {
        console.error('oauth-sync re-insert error:', insertErr.message);
        return res.json({ ok: true, profile: merged });
      }
      console.log('oauth-sync: merged profile created, role:', inserted.role);
      return res.json({ ok: true, profile: inserted });
    }

    // Step 3: Brand new user — no profile by ID or email
    const defaultName = username || email.split('@')[0];
    const newProfile = { id, email, username: defaultName, role: 'user', xp: 0, level: 1, streak: 1 };
    const { data: created, error: createErr } = await supabase.from('profiles').insert([newProfile]).select().single();
    if (createErr) {
      console.error('oauth-sync insert error:', createErr.message);
      return res.json({ ok: true, profile: newProfile });
    }
    console.log('oauth-sync: new user created, role: user');
    return res.json({ ok: true, profile: created });
  } catch (err) {
    console.error('oauth-sync exception:', err.message);
    res.status(500).json({ ok: false, err: err.message });
  }
});

app.get('/api/admin/users', async (req, res) => {
  try {
    const { data: users, error } = await supabase.from('profiles').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    res.json({ ok: true, users });
  } catch (err) {
    res.status(500).json({ ok: false, err: err.message });
  }
});

app.post('/api/admin/users/:id/role', async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const { data, error } = await supabase.from('profiles').update({ role }).eq('id', id).select().single();
    if (error) throw error;
    res.json({ ok: true, user: data });
  } catch (err) {
    res.status(500).json({ ok: false, err: err.message });
  }
});

app.post('/api/admin/users/reset-all-xp', async (req, res) => {
  try {
    const { data, error } = await supabase.from('profiles').update({ xp: 0, level: 1 }).neq('id', '00000000-0000-0000-0000-000000000000');
    if (error) throw error;
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, err: err.message });
  }
});

app.post('/api/admin/users/:id/xp', async (req, res) => {
  try {
    const { id } = req.params;
    const { xp = 0, level = 1 } = req.body;
    const { data, error } = await supabase.from('profiles').update({ xp, level }).eq('id', id).select().single();
    if (error) throw error;
    res.json({ ok: true, user: data });
  } catch (err) {
    res.status(500).json({ ok: false, err: err.message });
  }
});

app.delete('/api/admin/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from('profiles').delete().eq('id', id);
    if (error) throw error;
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, err: err.message });
  }
});

app.post('/api/ai/chat', async (req, res) => {
  try {
    const { messages, engine = 'groq' } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ ok: false, err: 'Invalid messages format' });
    }
    const result = await generateChatResponse(messages, engine);
    res.json({ ok: true, ...result });
  } catch (err) {
    res.status(500).json({ ok: false, err: err.message || 'AI generation failed' });
  }
});

app.get('/api/status', (req, res) => {
  res.json({ ok: true, status: 'online', service: 'ScamShield Serverless Vercel Backend ⚡' });
});

export default app;
