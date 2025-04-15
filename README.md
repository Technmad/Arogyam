# Arogyam : Health Monitoring Platform

<div align="center">
  <img src="public/icons/logo.svg" alt="Arogyam Logo" width="120" />
  <h3>Personalized health monitoring and wellness recommendations</h3>
</div>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> 
</p>

Arogyam is a comprehensive health monitoring platform that helps users track their symptoms, manage medications, and receive personalized AI-powered health recommendations. With a focus on holistic wellness, Arogyam provides insights into physical health, mental wellbeing, and lifestyle factors.

![Dashboard Preview](/public/images/dashboard.png)

## Features

- 🏥 **Health Monitoring** - Track symptoms, medications, and vital signs
- 🤖 **AI Recommendations** - Receive personalized health insights powered by Google Gemini AI
- 💬 **Health Assistant** - Chat with an AI health assistant about your health concerns
- 📊 **Health Analytics** - Visualize health trends and patterns over time
- 🧠 **Mental Wellness** - Track mood, sleep quality, and stress levels
- 💻 **Responsive Design** - Seamless experience across desktop and mobile devices
- 🔒 **Secure Authentication** - Protected health data with Clerk authentication

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, Headless UI
- **Backend**: Next.js Server Components, Server Actions
- **Database**: MongoDB with Prisma ORM
- **Authentication**: Clerk
- **AI Integration**: Google Gemini AI
- **Payments**: Stripe
- **Deployment**: Vercel

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/arogyam.git

# Install dependencies
cd arogyam
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your environment variables

# Run database migrations
npx prisma generate

# Start the development server
npm run dev

```

## System Architecture
![Architecture Preview](/public/diagrams/system-architecture.png)


