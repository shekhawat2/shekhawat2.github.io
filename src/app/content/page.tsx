import fs from "fs";
import path from "path";

export default function ContentPage() {
  const filesDirectory = path.join(process.cwd(), "public/files");
  const fileNames = fs.readdirSync(filesDirectory);
  const pdfFiles = fileNames.filter((file) => file.endsWith(".pdf"));

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col sm:items-start text-center sm:text-left">
      <h1 className="text-3xl font-bold mb-8">Available PDFs</h1>

      <ul className="space-y-4">
        {pdfFiles.map((file, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-4 border p-4 rounded-lg shadow-md"
          >
            <span className="text-base font-medium break-words max-w-[60%]">
              {file.replace(/\.pdf$/, '').replace(/[-_]/g, ' ')}
            </span>
            <div className="flex gap-2">
              <a
                href={`/files/${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-xs"
              >
                View
              </a>
              <a
                href={`/files/${file}`}
                download
                className="px-3 py-1 text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-md text-xs"
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
