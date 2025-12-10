// Vector store initialization and management
// Using MemoryVectorStore (pure JavaScript, no native dependencies) with manual persistence
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/hf_transformers";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "@langchain/core/documents";
import { extractTextFromPDF } from "./pdf-processor";
import { getPortfolioText } from "./portfolio-data";
import path from "path";
import fs from "fs";

// Initialize embeddings - using HuggingFace Transformers (free, runs locally)
let embeddings: HuggingFaceTransformersEmbeddings;
let vectorStore: MemoryVectorStore;
const VECTOR_STORE_PATH = path.join(process.cwd(), ".vectorstore");
const VECTOR_STORE_FILE = path.join(VECTOR_STORE_PATH, "vectors.json");

export async function initializeVectorStore() {
  try {
    // Initialize embeddings model (free, runs locally)
    embeddings = new HuggingFaceTransformersEmbeddings({
      modelName: "Xenova/all-MiniLM-L6-v2", // Free, lightweight embedding model
    });

    // Check if vector store file exists
    if (fs.existsSync(VECTOR_STORE_FILE)) {
      // Load existing vector store from JSON
      console.log("Loading existing vector store...");
      const storeData = JSON.parse(fs.readFileSync(VECTOR_STORE_FILE, "utf-8"));
      const documents = storeData.documents.map(
        (doc: any) =>
          new Document({
            pageContent: doc.pageContent,
            metadata: doc.metadata,
          })
      );
      vectorStore = await MemoryVectorStore.fromDocuments(documents, embeddings);
      console.log("Vector store loaded successfully");
      return vectorStore;
    } else {
      // Create new vector store
      console.log("Vector store not found, creating new one...");
      return await createVectorStore();
    }
  } catch (error) {
    console.log("Error loading vector store, creating new one...", error);
    return await createVectorStore();
  }
}

export async function createVectorStore() {
  try {
    // Initialize embeddings
    embeddings = new HuggingFaceTransformersEmbeddings({
      modelName: "Xenova/all-MiniLM-L6-v2",
    });

    // Extract text from resume PDF
    console.log("Extracting text from resume PDF...");
    const resumeText = await extractTextFromPDF("resume/ASJAD_CV.pdf");

    // Get portfolio data text
    console.log("Processing portfolio data...");
    const portfolioText = getPortfolioText();

    // Combine all text
    const allText = `RESUME:\n\n${resumeText}\n\n\nPORTFOLIO DATA:\n\n${portfolioText}`;

    // Split text into chunks
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const chunks = await textSplitter.splitText(allText);
    const documents = chunks.map(
      (chunk) =>
        new Document({
          pageContent: chunk,
          metadata: { source: "portfolio-resume" },
        })
    );

    console.log(`Created ${documents.length} document chunks`);

    // Create vector store from documents (pure JavaScript, no native dependencies)
    vectorStore = await MemoryVectorStore.fromDocuments(documents, embeddings);

    // Save vector store to disk as JSON for persistence
    if (!fs.existsSync(VECTOR_STORE_PATH)) {
      fs.mkdirSync(VECTOR_STORE_PATH, { recursive: true });
    }
    
    // Save documents to JSON file (embeddings will be regenerated on load)
    const storeData = {
      documents: documents.map((doc) => ({
        pageContent: doc.pageContent,
        metadata: doc.metadata,
      })),
    };
    fs.writeFileSync(VECTOR_STORE_FILE, JSON.stringify(storeData, null, 2));
    console.log("Vector store created and saved successfully");

    return vectorStore;
  } catch (error) {
    console.error("Error creating vector store:", error);
    throw error;
  }
}

export async function getVectorStore(): Promise<MemoryVectorStore> {
  if (!vectorStore) {
    return await initializeVectorStore();
  }
  return vectorStore;
}

// Background warm-up to reduce cold-start latency.
// This will attempt to initialize the vector store on module import in non-test environments.
// Set `SKIP_VECTOR_WARMUP=1` in your environment to skip this behavior.
if (process.env.NODE_ENV !== "test" && !process.env.SKIP_VECTOR_WARMUP) {
  initializeVectorStore()
    .then(() => {
      console.info("Vector store background initialization complete");
    })
    .catch((err) => {
      console.warn("Vector store background initialization failed:", err?.message ?? err);
    });
}

