// src/app/articles/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'src/app/articles');
  const files = fs.readdirSync(dir).filter(file => file.endsWith('.mdx'));

  return files.map(file => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), 'src/app/articles', `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-6">{data.title || params.slug}</h1>
      <MDXRemote source={content} />
    </article>
  );
}
