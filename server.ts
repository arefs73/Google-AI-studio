import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini AI Client for Server-Side Live Online Support
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// API Routes
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// AI Online Support Endpoint
app.post('/api/support/chat', async (req, res) => {
  try {
    const { message, chatHistory } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Invalid message string' });
      return;
    }

    if (!process.env.GEMINI_API_KEY || !ai) {
      // Fallback responses if API key is not present in environment
      const defaultReply = `Hello! Welcome to RF Craft 24/7 Support. Our Gemini AI key is currently being configured, but our engineering team is available via phone (+31 6 14167492) or email (aref.s.1373@gmail.com). Core services we offer:
1. Data Analytics & Business Intelligence
2. Computer Infrastructure, Hosting & Data Processing
3. Custom Web Engineering & Enterprise Portals
4. Artificial Intelligence & LLM Solutions
5. Mobile Application Development`;
      res.json({ reply: defaultReply });
      return;
    }

    const systemInstruction = `You are the "AI Assistant and Online Support Representative for RF Craft".
RF Craft is a Dutch technology firm owned by Aref Soleymani (KvK-nummer: 99957922), delivering data analytics, computer infrastructure engineering, web development, AI models, and mobile application solutions.

Company Profile:
- Trade Name (Handelsnaam): RF Craft
- KvK Number: 99957922 | Vestigingsnummer: 000064995178
- Owner: Aref Soleymani
- Primary Activity: Data Analyst (SBI 63100 - Inrichten van computerinfrastructuur, gegevensverwerking, hosting en aanverwante activiteiten)
- Office Address: Burgersdijkstraat 20, 2522WE 's-Gravenhage, Netherlands
- Contact: Phone: +31 6 14167492 | Email: aref.s.1373@gmail.com

Core Services:
1. Data Analytics & Business Intelligence (PowerBI, interactive executive dashboards, automated ETL data pipelines, predictive models)
2. Computer Infrastructure & Hosting (High-availability servers, cloud architecture, data processing, network setup)
3. Web Engineering (High-performance web applications, portals using React, Next.js, Node.js, TypeScript)
4. Custom AI & Gemini Solutions (Gemini API integration, custom chatbots, document processing, computer vision)
5. Mobile App Engineering (Cross-platform iOS and Android apps using React Native and Flutter)

Your Responsibilities:
- Answer user inquiries professionally, politely, and warmly in English or Dutch as requested.
- Guide users toward selecting the optimal technology stack or service for their business goals.
- Highlight RF Craft's core expertise in Data Analytics and Computer Infrastructure.
- Provide initial project time and cost estimation guidelines.
- Encourage users to schedule a consultation or fill out the project quote calculator.
- Keep responses clear, accurate, concise, and well-formatted using bullet points when appropriate.
- Contact info: Phone: +31 6 14167492 | Email: aref.s.1373@gmail.com | Location: Burgersdijkstraat 20, 2522WE 's-Gravenhage, Netherlands.`;

    // Construct conversation prompt
    let formattedHistory = '';
    if (Array.isArray(chatHistory) && chatHistory.length > 0) {
      formattedHistory = chatHistory
        .slice(-6)
        .map((item: { sender: string; text: string }) => `${item.sender === 'user' ? 'User' : 'Support'}: ${item.text}`)
        .join('\n');
    }

    const fullPrompt = `${formattedHistory ? `Conversation History:\n${formattedHistory}\n\n` : ''}New User Inquiry: ${message}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'We could not generate a response at this moment. Please try again.';
    res.json({ reply });
  } catch (error: any) {
    console.error('Error in Gemini support endpoint:', error);
    res.status(500).json({
      error: 'Error communicating with online support AI server',
      reply: 'Online support assistant is currently experiencing high load. Please call our direct line or submit a project request form.',
    });
  }
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, budget, message } = req.body;

  if (!name || !phone) {
    res.status(400).json({ success: false, message: 'Please provide both your name and phone number.' });
    return;
  }

  const trackingId = 'RFC-' + Math.floor(100000 + Math.random() * 900000);

  res.json({
    success: true,
    trackingId,
    message: `Your project request has been submitted successfully. Tracking Reference: ${trackingId}. Our technical team will reach out within 24 business hours.`,
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  if (!process.env.VERCEL) {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://0.0.0.0:${PORT}`);
    });
  }
}

if (!process.env.VERCEL) {
  startServer();
}

export default app;
