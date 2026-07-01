const dotenv = require('dotenv');
dotenv.config();

const SYSTEM_PROMPT = `You are ScamShield AI, an intelligent cybersecurity and scam-prevention assistant built into the ScamShield platform.
Your primary role is to protect users from digital threats, analyze suspicious links/emails/SMS, teach cybersecurity best practices, and explain cognitive biases (like urgency, authority, and confirmation bias).
When generating case studies, examples, or threat breakdowns, you MUST provide REAL-WORLD, DOCUMENTED historical facts and verified statistics (e.g. from FBI IC3, CISA, FTC, ENISA, or major cybersecurity vendor breach reports), including exact victim counts, actual organizations breached (when public), and verified financial loss numbers.
However, you are also friendly, versatile, and highly capable—you can answer general knowledge questions, coding queries, or everyday advice if the user asks.
When answering cybersecurity or scam-related questions, be structured, clear, and actionable. Use bullet points and emojis to make your advice easy to read.`;

/**
 * Calls Groq API (Llama-3.3-70b-versatile)
 */
async function callGroq(messages) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("Missing GROQ_API_KEY");

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 3072
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Groq API Error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

/**
 * Calls Google Gemini REST API (gemini-1.5-flash)
 */
async function callGemini(messages) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("Missing GEMINI_API_KEY");

  // Format messages for Gemini REST format
  const contents = messages.map(msg => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }]
  }));

  // Prepend system prompt to the first user message if present, or as system_instruction
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 3072
      }
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API Error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!reply) throw new Error("No response text returned from Gemini");
  return reply;
}

/**
 * Main handler that routes to preferred engine with automatic fallback
 */
async function generateChatResponse(messages, preferredEngine = 'groq') {
  console.log(`[AI Service] Attempting chat with engine: ${preferredEngine}`);
  
  try {
    if (preferredEngine === 'gemini') {
      return { reply: await callGemini(messages), engine: 'Google Gemini (3.5 Flash)' };
    } else {
      return { reply: await callGroq(messages), engine: 'Groq (Llama-3.3)' };
    }
  } catch (primaryErr) {
    console.warn(`[AI Service] Primary engine (${preferredEngine}) failed:`, primaryErr.message);
    const fallbackEngine = preferredEngine === 'gemini' ? 'groq' : 'gemini';
    console.log(`[AI Service] Falling back to: ${fallbackEngine}`);
    
    try {
      if (fallbackEngine === 'gemini') {
        return { reply: await callGemini(messages), engine: 'Google Gemini (3.5 Flash Fallback)' };
      } else {
        return { reply: await callGroq(messages), engine: 'Groq (Fallback)' };
      }
    } catch (fallbackErr) {
      console.error(`[AI Service] Both engines failed!`, fallbackErr.message);
      throw new Error(`AI Service unavailable: ${primaryErr.message} | ${fallbackErr.message}`);
    }
  }
}

module.exports = {
  generateChatResponse
};
