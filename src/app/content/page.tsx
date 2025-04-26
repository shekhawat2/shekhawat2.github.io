import fs from "fs";
import path from "path";

export default function ContentPage() {
  const filesDirectory = path.join(process.cwd(), "public/files");

  const fileNames = fs.readdirSync(filesDirectory);

  const pdfFiles = fileNames.filter((file) => file.endsWith(".pdf"));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available PDFs</h1>

      <ul className="space-y-4">
        {pdfFiles.map((file, index) => (
          <li key={index}>
            <a
              href={`/files/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-600 hover:underline"
            >
              {file}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
