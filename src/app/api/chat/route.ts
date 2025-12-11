// RAG Chatbot API Route
import { NextRequest, NextResponse } from "next/server";
import { ChatGroq } from "@langchain/groq";
import { StringOutputParser } from "@langchain/core/output_parsers";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { getPortfolioText } from "@/lib/portfolio-data";

// Initialize the LLM (Groq provides free API access)
const llm = new ChatGroq({
  model: "llama-3.1-8b-instant", // Free model from Groq
  temperature: 0.7,
  apiKey: process.env.GROQ_API_KEY, // You'll need to set this in .env.local
});

const STATIC_CONTEXT = `${getPortfolioText()}

Resume summary:
- Software Engineer (SYMB Technologies, Oct 2023 — June 2025) leading dashboard optimizations, drag-and-drop game management, REST + GraphQL APIs, and Vue 2 → Vue 3 migrations.
- Frontend Developer (Upwork/Freelance, Jun 2025 — Present) delivering BeatDrop (full-stack music streaming, JWT auth, real-time audio, Cloudinary), and Silanyas (end-to-end ecommerce with payments and auth).
- Core stack: React, Next.js, Vue/Nuxt, Node/Express, PostgreSQL, Prisma, MongoDB, Tailwind, Material UI, Redux, LangChain, Docker, Azure, Kubernetes.
- Portfolio projects: Beatdrop (Next.js/TS/Node/PostgreSQL/Prisma), Weather Web App, Todo Web App, Snake Game, Tic-Tac-Toe, Simon Game with demos and GitHub links.`;

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are Asjad's AI assistant. Identify yourself clearly as Asjad's AI assistant (for example: "I am Asjad's AI assistant") when speaking on behalf of Asjad.
    Never claim to be Asjad or a human. Use first-person phrasing like "I" when appropriate, but always make clear you are Asjad's AI assistant.

    Answer questions about Asjad Reza's portfolio, skills, experience, and projects using only the provided context. If the user asks about hiring or contacting, respond on Asjad's behalf and offer clear next steps (for example: contact via the website contact form or the resume). Do NOT invent private contact details; if exact contact details are not present in the provided context, direct the user to the website contact form or the resume for contact information.

    Be concise, helpful, and friendly. If you don't know something based on the context, say so politely and suggest how the user can reach Asjad for clarification.

    Context: {context}`,
  ],
  new MessagesPlaceholder("chat_history"),
  ["human", "{question}"],
]);

const chain = prompt.pipe(llm).pipe(new StringOutputParser());

export async function POST(req: NextRequest) {
  try {
    const { question, chat_history } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    console.log("Processing question:", question);

    // Invoke the chain with static context (no server-side file system work)
    const response = await chain.invoke({
      question,
      chat_history: chat_history || [],
      context: STATIC_CONTEXT,
    });

    return NextResponse.json({ answer: response });
  } catch (error: any) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      {
        error: "Failed to process question",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

