"use client";

import { useEffect, useState } from "react";

interface DriveFile {
  id: string;
  name: string;
  webViewLink: string;
  mimeType: string;
}

export default function GdrivePage() {
  const [driveFiles, setDriveFiles] = useState<DriveFile[]>([]);

  useEffect(() => {
    async function fetchFiles() {
      const folderId = "13vw9Eu6maUy7eYXwV435K9_xOV4VZzg9";  // Replace with your folder ID
      const apiKey = "AIzaSyA3gXvb7c2ea6Pyk-7u4YUinKbOzI5t12M";      // Replace with your API key

      const res = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,mimeType,webViewLink)&key=${apiKey}`
      );
      const data = await res.json();
      setDriveFiles(data.files || []);
    }

    fetchFiles();
  }, []);

  return (
    <div className="flex-grow p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] items-center">
      <h1 className="text-3xl font-bold mb-8">Available Files</h1>

      {driveFiles.length === 0 ? (
      <p className="flex flex-col text-gray-500 items-center text-xl">No files found.</p>
      ) : (
      <ul className="space-y-4">
        {driveFiles.map((file) => (
          <li key={file.id} className="flex items-center justify-between gap-4 border p-4 rounded-lg shadow-md">
            <span className="text-base font-medium break-words max-w-[60%]">{file.name}</span>

            <div className="flex gap-2">
              {/* View File */}
              <a
                href={file.webViewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-xs"
              >
                View
              </a>

              {/* Download File */}
              <a
                href={`https://drive.google.com/uc?export=download&id=${file.id}`}
                download
                className="px-3 py-1 text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-md text-xs"
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    )}
    </div>
  );
}
