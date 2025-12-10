declare module "pdf-parse" {
  import type { Buffer } from "node:buffer";

  export type PdfParseOptions = Record<string, unknown>;

  export type PdfParseResult = {
    numpages: number;
    numrender: number;
    info: unknown;
    metadata: unknown;
    version: string;
    text: string;
  };

  export default function pdfParse(
    data: Buffer | Uint8Array | ArrayBuffer,
    options?: PdfParseOptions
  ): Promise<PdfParseResult>;
}

