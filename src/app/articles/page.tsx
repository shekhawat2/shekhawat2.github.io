import Link from 'next/link';
import { getAllMdxFiles } from '@/lib/mdx';

export default function MdxIndexPage() {
  const files = getAllMdxFiles();

  return (
    <ul className="space-y-4">
      {files.map(file => (
        <li key={file.slug}>
          <Link href={`/articles/${file.slug}`} className="text-blue-600 underline">
            {file.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
