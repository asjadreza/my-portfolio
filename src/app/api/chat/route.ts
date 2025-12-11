// RAG Chatbot API Route
import { NextRequest, NextResponse } from "next/server";
import { ChatGroq } from "@langchain/groq";
import { getVectorStore } from "@/lib/vector-store";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";

// Initialize the LLM (Groq provides free API access)
const llm = new ChatGroq({
  model: "llama-3.1-8b-instant", // Free model from Groq
  temperature: 0.7,
  apiKey: process.env.GROQ_API_KEY, // You'll need to set this in .env.local
});

// Create the RAG chain
async function createRAGChain() {
  const vectorStore = await getVectorStore();

  // Create the prompt template
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

  // Create the chain
  const chain = RunnableSequence.from([
    {
      question: (input: { question: string; chat_history?: any[] }) =>
        input.question,
      chat_history: (input: { question: string; chat_history?: any[] }) =>
        input.chat_history || [],
      context: async (input: { question: string }) => {
        // Use similaritySearch directly instead of retriever
        const docs = await vectorStore.similaritySearch(input.question, 4);
        return docs.map((doc) => doc.pageContent).join("\n\n");
      },
    },
    prompt,
    llm,
    new StringOutputParser(),
  ]);

  return chain;
}

// Store chains in memory (in production, you might want to use a cache)
let ragChain: RunnableSequence<any, string> | null = null;

export async function POST(req: NextRequest) {
  try {
    // Initialize chain if not already initialized
    if (!ragChain) {
      console.log("Initializing RAG chain...");
      ragChain = await createRAGChain();
    }

    const { question, chat_history } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    console.log("Processing question:", question);

    // Invoke the chain
    const response = await ragChain.invoke({
      question,
      chat_history: chat_history || [],
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

