import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

dotenv.config();
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'scamshield_super_secret';
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseServiceKey || 'placeholder');

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

// AI Generation Helper
const SYSTEM_PROMPT = `You are ScamShield AI, an intelligent cybersecurity and scam-prevention assistant built into the ScamShield platform.
Your primary role is to protect users from digital threats, analyze suspicious links/emails/SMS, teach cybersecurity best practices, and explain cognitive biases.
When generating case studies, examples, or threat breakdowns, you MUST provide REAL-WORLD, DOCUMENTED historical facts and verified statistics (e.g. from FBI IC3, CISA, FTC, ENISA, or major cybersecurity vendor breach reports), including exact victim counts, actual organizations breached (when public), and verified financial loss numbers. NEVER generate hypothetical AI examples or fictional company names.
When answering cybersecurity or scam-related questions, be structured, clear, and actionable. Use bullet points and emojis to make your advice easy to read.`;

// Global Live Threat Broadcast State (in-memory sync for all platform users)
let activeThreatBroadcast = null;

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
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
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

app.get('/api/health', async (req, res) => {
  const hasUrl = !!supabaseUrl;
  const hasKey = !!supabaseServiceKey;
  let dbOk = false;
  try {
    const { data, error } = await supabase.from('profiles').select('id').limit(1);
    dbOk = !error;
  } catch (e) { dbOk = false; }
  res.json({ ok: true, supabaseUrl: hasUrl, serviceKey: hasKey, dbConnection: dbOk });
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

// Send Phishing Drill Email via Google SMTP
app.post('/api/admin/phishing/send', async (req, res) => {
  try {
    const { targetEmail, campaignName, template, customSubject, customMessage, senderName } = req.body;
    if (!targetEmail) return res.status(400).json({ ok: false, err: 'Missing targetEmail' });

    // Don't attempt SMTP send for broadcast keywords, just simulate
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

    // Try sending real email using Google SMTP
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

app.post('/api/auth/sync', async (req, res) => {
  const { id, email, username } = req.body;
  if (!id || !email) return res.status(400).json({ ok: false, err: 'Missing parameters' });

  try {
    // 1. Check if profile exists by email (using admin Service Key, bypasses RLS)
    const { data: rows, error: searchErr } = await supabase.from('profiles').select('*').eq('email', email);
    if (searchErr) throw searchErr;

    if (rows && rows.length > 0) {
      // If user has an admin row, prioritize it
      const profile = rows.find(p => String(p.role || '').trim().toLowerCase() === 'admin') || rows[0];
      
      // If the auth UUID changed (e.g. from old test login), update it in profiles
      if (profile.id !== id) {
        await supabase.from('profiles').delete().eq('email', email).neq('id', profile.id).catch(() => {});
        await supabase.from('profiles').update({ id }).eq('email', email).catch(() => {});
        profile.id = id;
      }
      return res.json({ ok: true, profile });
    }

    // 2. If not found by email, check by ID
    const { data: idProfile } = await supabase.from('profiles').select('*').eq('id', id).maybeSingle();
    if (idProfile) {
      return res.json({ ok: true, profile: idProfile });
    }

    // 3. Brand new user -> Create profile with role 'user' (no hardcoded admins!)
    const cleanName = username || email.split('@')[0] || 'User';
    const newProfile = { id, email, username: cleanName, role: 'user', xp: 0, level: 1, streak: 1 };
    const { data: created, error: insertErr } = await supabase.from('profiles').insert([newProfile]).select().single();
    
    if (insertErr) {
      console.error('[auth/sync] insert error:', insertErr.message);
      return res.json({ ok: true, profile: newProfile });
    }

    return res.json({ ok: true, profile: created });
  } catch (err) {
    console.error('[auth/sync] exception:', err.message);
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
