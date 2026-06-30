import fs from 'fs';

const threatTemplates = {
  swipe: { psychology: 'Conditioning and Urgency', payload: 'Credentials or System access', defense: 'Always slow down and double-check URLs or sender addresses before reacting.' },
  password: { psychology: 'Convenience over Security', payload: 'Account takeover', defense: 'Use a password manager and enable 2FA.' },
  'spot-flag': { psychology: 'Authority and Trust', payload: 'Financial theft', defense: 'Verify out-of-band (e.g. call the person directly) before authorizing payments.' },
  quiz: { psychology: 'Curiosity or Fear', payload: 'General knowledge', defense: 'Continuous education is the best defense against evolving scams.' },
  chat: { psychology: 'Empathy or Intimidation', payload: 'Personal Info or Gift Cards', defense: 'Scammers create artificial emergencies. Hang up and verify.' },
  audio: { psychology: 'Authority Figure Impersonation', payload: 'Immediate Payment (Gift Cards/Crypto)', defense: 'The IRS, Police, or Tech Support will NEVER ask for payment via Gift Cards.' },
  visual: { psychology: 'Visual Deception', payload: 'Trust Manipulation', defense: 'Look for AI artifacts: blurred text, asymmetrical faces, weird shadows.' }
};

const games = [];

// Base 20 standard games (we will pad to 50)
for (let i = 1; i <= 50; i++) {
  const type = ['swipe', 'spot-flag', 'password', 'quiz', 'chat', 'audio', 'visual'][i % 7];
  let data = {};
  
  if (type === 'swipe') {
    data = {
      items: [
        { content: `https://secure-login-${i}.com`, isScam: true, explanation: 'Hyphenated domains mimicking secure logins are highly suspicious.' },
        { content: `https://google.com/search?q=${i}`, isScam: false, explanation: 'Legitimate search URL.' },
        { content: `From: IT_Support_Agent_${i}@company-secure.net`, isScam: true, explanation: 'Fake support domain.' }
      ]
    };
  } else if (type === 'spot-flag') {
    data = {
      scenario: `Invoice Request #${i}`,
      content: `<div style="padding: 20px; font-family: sans-serif;"><h3>URGENT INVOICE #${i}</h3><p>Please wire $${i}000 to our <strong>new offshore account</strong> immediately.</p></div>`,
      flags: [
        { id: 'flag1', text: 'new offshore account', hint: 'Unexpected changes to payment details are a huge red flag.' },
        { id: 'flag2', text: 'URGENT INVOICE', hint: 'Artificial urgency prevents verification.' }
      ]
    };
  } else if (type === 'password') {
    data = { target: `Pass${i}word!`, hint: 'Basic dictionary word with a number.', failMessages: ['Too weak'] };
  } else if (type === 'quiz') {
    data = {
      question: `What is the primary goal of phishing attack variant #${i}?`,
      options: [
        { text: 'To install a firewall.', isCorrect: false, explanation: 'Wrong.' },
        { text: 'To steal sensitive credentials or money.', isCorrect: true, explanation: 'Exactly.' },
        { text: 'To speed up your PC.', isCorrect: false, explanation: 'Wrong.' }
      ]
    };
  } else if (type === 'chat') {
    data = {
      messages: [
        { sender: 'scammer', text: `Hi, this is your boss. I need you to buy ${i} gift cards for a client immediately.` }
      ],
      choices: [
        { text: 'Sure, what amounts?', isCorrect: false, explanation: 'Never agree without verifying.' },
        { text: 'Let me call you to confirm.', isCorrect: true, explanation: 'Always verify unusual requests out-of-band.' }
      ]
    };
  } else if (type === 'audio') {
    data = {
      script: `Hello, this is officer number ${i}. There is a warrant out for your arrest. To resolve this, you must pay us in Apple gift cards immediately.`
    };
  } else if (type === 'visual') {
    data = {
      content: 'https://via.placeholder.com/400x300?text=Fake+ID+Card',
      flaws: ['Watermark missing', 'Fonts don\'t match']
    };
  }

  // Add Threat Analysis
  data.threatAnalysis = threatTemplates[type];

  games.push({
    id: `game_${i}`,
    title: `Cyber Challenge #${i} (${type.toUpperCase()})`,
    description: `Test your skills against this ${type} scenario.`,
    type: type,
    difficulty: i % 3 === 0 ? 'Hard' : (i % 2 === 0 ? 'Medium' : 'Easy'),
    thumbnail: ['🎣', '🚩', '🔓', '📝', '💬', '📞', '👁️'][i % 7],
    xpReward: 30 + (i % 5) * 10,
    data: data
  });
}

const fileContent = `export const MINIGAMES = ${JSON.stringify(games, null, 2)};\n`;

fs.writeFileSync('minigames.js', fileContent);
console.log('Successfully generated 50 minigames in minigames.js');
