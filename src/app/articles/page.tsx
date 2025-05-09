import Link from 'next/link';
import { getAllMdxFiles } from '@/lib/mdx';

export default function MdxIndexPage() {
  const files = getAllMdxFiles();

  return (
    <ul className="min-h-screen p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 font-[family-name:var(--font-geist-sans)] text-left">
      {files.map((file, index) => (
        <li key={file.slug} className="text-2xl flex items-baseline gap-2">
          <span className="text-gray-400 w-6 text-right">{index + 1}.</span>
          <Link
            href={`/articles/${file.slug}`}
            className="text-blue-600 hover:underline"
          >
            {file.title}
          </Link>
        </li>
      ))}
    </ul>
  );  
}
