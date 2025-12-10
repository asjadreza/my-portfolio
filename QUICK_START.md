# Quick Start Guide - RAG Chatbot

## 🚀 Quick Setup (3 Steps)

### 1. Get Your Free Groq API Key
- Visit: https://console.groq.com/
- Sign up (free)
- Copy your API key

### 2. Add API Key to Environment
Create `.env.local` in the root directory:
```env
GROQ_API_KEY=your_api_key_here
```

### 3. Start the App
```bash
npm run dev
```

The chatbot will automatically:
- ✅ Extract text from your resume PDF
- ✅ Process your portfolio data
- ✅ Create embeddings (first time may take a few minutes)
- ✅ Build the vector store

## 💬 Using the Chatbot

1. Click the chat bubble icon (bottom-right)
2. Ask questions like:
   - "What are your skills?"
   - "Tell me about your experience"
   - "What projects have you built?"
   - "What technologies did you use in Beatdrop?"

## 📁 What Was Created

- `src/lib/portfolio-data.ts` - Portfolio data extraction
- `src/lib/pdf-processor.ts` - PDF text extraction  
- `src/lib/vector-store.ts` - Vector store management
- `src/app/api/chat/route.ts` - RAG API endpoint
- `src/components/Chatbot.tsx` - Chatbot UI component

## 🔧 Manual Vector Store Initialization (Optional)

If you want to initialize the vector store manually:
```bash
curl -X POST http://localhost:3000/api/init-vectorstore
```

## ⚠️ Troubleshooting

**"GROQ_API_KEY not found"**
- Make sure `.env.local` exists with your API key
- Restart the dev server after adding the key

**"Vector store not found"**
- This is normal on first run - it will be created automatically
- Check that `public/resume/ASJAD_CV.pdf` exists

**Slow first response**
- First time downloads the embedding model (~100MB)
- Subsequent requests will be faster

## 🎯 Features

- ✅ Completely free (Groq API + HuggingFace + FAISS)
- ✅ Answers questions about your portfolio
- ✅ Uses your resume PDF as context
- ✅ Beautiful UI matching your portfolio design
- ✅ No external services needed (except free APIs)

For detailed documentation, see `RAG_SETUP.md`

