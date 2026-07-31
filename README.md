# RF Craft - Data Analytics & IT Solutions Web Application

Official web platform for **RF Craft** (KvK-nummer: `99957922`), providing data analytics, computer infrastructure engineering, custom web applications, and AI integrations.

## 🚀 Key Features

- **Interactive Cost & Timeline Estimator**: Instant project scope, duration, and ballpark pricing calculator.
- **24/7 Gemini AI Assistant**: Real-time intelligent IT support agent powered by Google Gemini AI.
- **Interactive Headquarters Map**: Interactive Leaflet maps featuring RF Craft's office location in 's-Gravenhage (The Hague), Netherlands.
- **Service & Tech Stack Showcase**: Detailed overview of core engineering competencies (Data Analytics, PowerBI, Infrastructure, Web Architecture, Custom AI, Cross-platform Mobile Apps).
- **Official KvK Registration**: Verified KvK business registration details, SBI code `63100`, and contact details displayed transparently.

---

## 🛠 Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide Icons, Leaflet Maps, Motion
- **Backend**: Node.js, Express.js, `@google/genai` (Gemini AI SDK)
- **Deployment Ready**: Configured for Vercel, Cloud Run, Render, or Railway out of the box.

---

## 💻 Local Development

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 2. Environment Variables
Copy `.env.example` to `.env` and set your Google Gemini API key:
```bash
cp .env.example .env
```
In `.env`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Install Dependencies & Start Dev Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
# Build Vite frontend and bundle Express server
npm run build

# Start production server
npm start
```

---

## ⚡ Deployment to Vercel & GitHub

This project is pre-configured with `vercel.json` and a serverless entry point at `/api/index.ts`.

### Step-by-Step Vercel Deployment Guide:

1. **Push to GitHub**:
   - Create a new repository on your GitHub account (e.g., `rf-craft-website`).
   - Push your code to GitHub:
     ```bash
     git init
     git add .
     git commit -m "Initial commit for RF Craft web app"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/rf-craft-website.git
     git push -u origin main
     ```

2. **Connect to Vercel**:
   - Log in to your [Vercel Dashboard](https://vercel.com).
   - Click **Add New** -> **Project**.
   - Select your `rf-craft-website` GitHub repository.
   - Vercel will automatically detect **Vite** as the framework preset.

3. **Configure Environment Variables on Vercel**:
   - In the Vercel project deployment screen, open **Environment Variables**.
   - Add:
     - **Key**: `GEMINI_API_KEY`
     - **Value**: *Your Gemini API key*
   - Click **Deploy**.

4. **All Set!**:
   - Vercel will build the frontend SPA and automatically deploy the `/api/*` serverless functions for the Gemini AI assistant and project estimation forms.

---

## 🏢 Business Registration Details

- **Trade Name (Handelsnaam)**: RF Craft
- **KvK Number**: 99957922
- **Vestigingsnummer**: 000064995178
- **Owner**: Aref Soleymani
- **SBI Code**: `63100` - Inrichten van computerinfrastructuur, gegevensverwerking, hosting en aanverwante activiteiten
- **Address**: Burgersdijkstraat 20, 2522WE 's-Gravenhage, Netherlands
- **Phone**: +31 6 14167492
- **Email**: aref.s.1373@gmail.com
