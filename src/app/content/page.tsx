import fs from "fs";
import path from "path";

export default function ContentPage() {
  const filesDirectory = path.join(process.cwd(), "public/files/books");
  const formatsDirectory = path.join(process.cwd(), "public/files/formats");
  const fileNames = fs.readdirSync(filesDirectory);
  const formatsNames = fs.readdirSync(formatsDirectory);
  const pdfFiles = fileNames.filter((file) => file.endsWith(".pdf"));
  const formatsFiles = formatsNames.filter((file) => file.endsWith(".pdf"));

  return (
    <div className="flex-grow p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] items-center">
      <h1 className="text-3xl font-bold mb-8">Available Books</h1>

      <ul className="space-y-4 pb-8">
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
                href={`/files/books/${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-xs"
              >
                View
              </a>
              <a
                href={`/files/books/${file}`}
                download
                className="px-3 py-1 text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-md text-xs"
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
      <h1 className="text-3xl font-bold mb-8">Available formats</h1>
      <ul className="space-y-4">
        {formatsFiles.map((file, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-4 border p-4 rounded-lg shadow-md"
          >
            <span className="text-base font-medium break-words max-w-[60%]">
              {file.replace(/\.pdf$/, '').replace(/[-_]/g, ' ')}
            </span>
            <div className="flex gap-2">
              <a
                href={`/files/formats/${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-xs"
              >
                View
              </a>
              <a
                href={`/files/formats/${file}`}
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
