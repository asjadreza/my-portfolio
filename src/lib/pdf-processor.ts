// PDF processing utility to extract text from resume
// Using pdfjs-dist which works reliably in Node.js/serverless environments
import fs from "fs";
import path from "path";

// Lazy load pdfjs-dist only when function is called
let pdfjsLib: any = null;

async function getPdfjs() {
  if (!pdfjsLib) {
    // Use the Node.js compatible build
    pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
  }
  return pdfjsLib;
}

export async function extractTextFromPDF(pdfPath: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), "public", pdfPath);
    const dataBuffer = fs.readFileSync(filePath);
    
    // Convert Buffer to Uint8Array as required by pdfjs-dist
    const uint8Array = new Uint8Array(dataBuffer);
    
    // Use pdfjs-dist which is more reliable in Node.js environments
    const pdfjs = await getPdfjs();
    
    // Load the PDF document
    const loadingTask = pdfjs.getDocument({ 
      data: uint8Array,
      useSystemFonts: true,
    });
    
    const pdf = await loadingTask.promise;
    let fullText = "";
    
    // Extract text from all pages
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      
      // Combine all text items from the page
      const pageText = textContent.items
        .map((item: any) => {
          // Handle both string and object formats
          if (typeof item === "string") {
            return item;
          }
          return item.str || "";
        })
        .join(" ");
      
      fullText += pageText + "\n\n";
    }
    
    return fullText.trim();
  } catch (error: any) {
    console.error("Error extracting text from PDF:", error);
    throw new Error(
      `Failed to extract text from PDF: ${error.message}. ` +
      `Please ensure the PDF file exists at the specified path.`
    );
  }
}

