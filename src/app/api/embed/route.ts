import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import Groq from "groq-sdk";

export async function POST() {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const pdfText = "paste parsed PDF data here (temporarily)";

  const embedding = await groq.embeddings.create({
    model: "text-embedding-3-small",
    input: pdfText,
  });

  await supabase.from("documents").insert({
    content: pdfText,
    embedding: embedding.data[0].embedding,
  });

  return NextResponse.json({ success: true });
}
