import { readdir } from "fs/promises";
import { join } from "path";

export async function listPdfFiles() {
  const filesDir = join(process.cwd(), "public/files");
  const files = await readdir(filesDir);

  // Only return .pdf files
  return files.filter((file) => file.endsWith(".pdf"));
}
