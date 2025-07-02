const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/ask-ai', async (req, res) => {
  const { userMessage, userName } = req.body;

  const casualPhrases = ['hi', 'hello', 'ok', 'okay', 'hmm', 'thanks', 'thank you'];
  if (casualPhrases.includes(userMessage.trim().toLowerCase())) {
    return res.json({
      reply: `Would you like to know more about Soul Yatri or explore our services?`
    });
  }

  try {
    const faqData = fs.readFileSync('./knowledge_Base_soulyatri.md', 'utf-8');

    const systemPrompt = `
You are YatriBot, Soul Yatri's AI assistant.

✅ IMPORTANT RULES:
1. ONLY answer questions related to Soul Yatri.
2. NEVER answer unrelated topics like other than soul yatri, reply with: "Please ask something related to Soul Yatri."- NO EXCEPTIONS
3. KEEP REPLIES UNDER 100 WORDS — NO EXCEPTIONS.
4. Use short, simple, on-point sentences (max 3–4 lines).
5. DO NOT explain everything — be brief unless the user asks for “detailed explanation”.
6. Always include the user's name (${userName}) naturally in your reply to make it personal.
7. your reply should be in 3 sentences only. - follow these rules strictly.
8. if the user gives causal replies like ok,oh,yeah,nice, well like that then ask "how can i help you" more with their name 

Here is Soul Yatri's knowledge base:
${faqData}
    `;

    const response = await axios.post(
      'https://api.together.xyz/v1/chat/completions',
      {
        model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const botReply = response.data.choices[0].message.content;
    res.json({ reply: botReply });
  } catch (err) {
    console.error('AI error:', err.message);
    res.status(500).json({ error: 'Something went wrong with the AI.' });
  }
});

app.listen(5000, () => console.log(' AI backend running on port 5000'));
