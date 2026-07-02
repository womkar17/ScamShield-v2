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
