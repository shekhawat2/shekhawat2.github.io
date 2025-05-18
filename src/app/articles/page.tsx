import Link from 'next/link';
import { getAllMdxFiles } from '@/lib/mdx';

export default function MdxIndexPage() {
  const files = getAllMdxFiles();

  return (
    <ul className="text-left max-w-none grid sm:grid-cols-2 sm:w-screen gap-x-8 gap-y-0 font-[family-name:var(--font-geist-sans)]">
      {files.map((file, index) => (
        <li key={file.slug} className="text-lg font-bold mb-2 flex gap-2">
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
