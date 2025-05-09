import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const MDX_DIR = path.join(process.cwd(), 'src/app/articles');

export function getAllMdxFiles() {
  const files = fs.readdirSync(MDX_DIR).filter(file => file.endsWith('.mdx'));

  return files.map(filename => {
    const filePath = path.join(MDX_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug: filename.replace('.mdx', ''),
      title: data.title || filename,
    };
  });
}
