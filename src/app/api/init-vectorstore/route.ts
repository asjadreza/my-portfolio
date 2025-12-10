// API route to manually initialize the vector store
import { NextResponse } from "next/server";
import { createVectorStore } from "@/lib/vector-store";

export async function POST() {
  try {
    console.log("Initializing vector store...");
    await createVectorStore();
    return NextResponse.json({
      success: true,
      message: "Vector store initialized successfully",
    });
  } catch (error: any) {
    console.error("Error initializing vector store:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to initialize vector store",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

