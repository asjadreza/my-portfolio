# RAG Chatbot Setup Guide

This portfolio includes a RAG (Retrieval-Augmented Generation) chatbot that answers questions about your skills, experience, projects, and resume using LangChain, FAISS vector store, and Groq AI.

## Prerequisites

1. **Groq API Key** (Free):
   - Sign up at https://console.groq.com/
   - Get your free API key
   - Add it to your `.env.local` file

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory (if it doesn't exist) and add:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 2. Install Dependencies

All dependencies are already installed, but if you need to reinstall:

```bash
npm install
```

### 3. Initialize Vector Store

The vector store will be automatically created on the first API call. However, you can also initialize it manually by:

1. Start your development server:
   ```bash
   npm run dev
   ```

2. The vector store will be created automatically when you first use the chatbot. It will:
   - Extract text from your resume PDF (`public/resume/ASJAD_CV.pdf`)
   - Process your portfolio data (skills, experience, projects)
   - Create embeddings using HuggingFace Transformers (runs locally, free)
   - Store everything in a FAISS vector database (saved in `.vectorstore/` directory)

### 4. Using the Chatbot

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your portfolio in the browser

3. Click the chat bubble icon in the bottom-right corner

4. Ask questions like:
   - "What are your skills?"
   - "Tell me about your experience at SYMB Technologies"
   - "What projects have you built?"
   - "What technologies did you use in Beatdrop?"

## How It Works

1. **Data Collection**: The system extracts:
   - Text from your resume PDF
   - Structured data from your portfolio (skills, experience, projects)

2. **Embedding**: Text is split into chunks and converted to embeddings using HuggingFace Transformers (Xenova/all-MiniLM-L6-v2)

3. **Vector Store**: Embeddings are stored in a FAISS vector database (file-based, no server needed)

4. **Retrieval**: When you ask a question:
   - Your question is converted to an embedding
   - Similar chunks are retrieved from the vector store
   - Relevant context is sent to the LLM (Groq)

5. **Generation**: Groq's LLM generates an answer based on the retrieved context

## File Structure

```
src/
├── lib/
│   ├── portfolio-data.ts      # Portfolio data extraction
│   ├── pdf-processor.ts        # PDF text extraction
│   └── vector-store.ts         # Vector store management
├── app/
│   └── api/
│       └── chat/
│           └── route.ts        # RAG API endpoint
└── components/
    └── Chatbot.tsx             # Chatbot UI component
```

## Troubleshooting

### Vector Store Not Found
- The vector store will be created automatically on first use
- Check that `public/resume/ASJAD_CV.pdf` exists
- Ensure you have write permissions in the project directory

### API Errors
- Verify your `GROQ_API_KEY` is set in `.env.local`
- Check that the Groq API is accessible
- Review server logs for detailed error messages

### Embedding Model Issues
- The HuggingFace Transformers model downloads automatically on first use
- This may take a few minutes the first time
- Ensure you have internet connection for the initial download

## Free Resources Used

- **Groq API**: Free tier with generous rate limits
- **HuggingFace Transformers**: Free, runs locally
- **FAISS**: Free, open-source vector database
- **LangChain**: Free, open-source framework

## Notes

- The vector store is saved in `.vectorstore/` directory (gitignored)
- First initialization may take a few minutes to download the embedding model
- The chatbot uses context from your resume and portfolio data only
- All processing happens locally (embeddings) or via free APIs (Groq)

