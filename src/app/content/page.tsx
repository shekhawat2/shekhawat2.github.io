import fs from "fs";
import path from "path";

export default function ContentPage() {
  const filesDirectory = path.join(process.cwd(), "public/files");
  const fileNames = fs.readdirSync(filesDirectory);
  const pdfFiles = fileNames.filter((file) => file.endsWith(".pdf"));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Available PDFs</h1>

      <ul className="space-y-6">
        {pdfFiles.map((file, index) => (
          <li key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border p-4 rounded-lg shadow-md">
            <span className="text-lg font-medium break-all">{file.replace(/\.pdf$/, '').replace(/[-_]/g, ' ')}</span>
            <div className="flex gap-4">
              <a
                href={`/files/${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm"
              >
                View
              </a>
              <a
                href={`/files/${file}`}
                download
                className="px-4 py-2 text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-md text-sm"
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
