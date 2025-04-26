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
    <div className="flex flex-col flex-1 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Available Files</h1>

      <ul className="space-y-6">
        {driveFiles.map((file) => (
          <li key={file.id} className="flex justify-between items-center border p-4 rounded-lg shadow-md">
            <span className="text-lg font-medium break-all">{file.name}</span>

            <div className="flex gap-4">
              {/* View File */}
              <a
                href={file.webViewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm"
              >
                View
              </a>

              {/* Download File */}
              <a
                href={`https://drive.google.com/uc?export=download&id=${file.id}`}
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
