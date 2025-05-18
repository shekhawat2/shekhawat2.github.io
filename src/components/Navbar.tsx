// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-black shadow-md">
      <Link className="text-xl font-bold" href="/">Anand</Link>
      <div className="space-x-4">
        <Link href="/articles">Articles</Link>
        <Link href="/content">Content</Link>
        <Link href="/gdrive">Gdrive</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
