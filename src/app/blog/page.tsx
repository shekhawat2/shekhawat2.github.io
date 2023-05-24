import Link from "next/link";
import Styles from "../../styles/Styles.module.css";

// Mock data for demonstration
const blogData = [
  {
    slug: "blog-post-1",
    title: "Blog Post 1",
    summary: "This is the summary of Blog Post 1.",
  },
  {
    slug: "blog-post-2",
    title: "Blog Post 2",
    summary: "This is the summary of Blog Post 2.",
  },
  {
    slug: "blog-post-3",
    title: "Blog Post 3",
    summary: "This is the summary of Blog Post 3.",
  },
];

const Blog = () => (
  <div>
    <h1>Blog</h1>
    {blogData.map((post) => (
      <div key={post.slug} className={Styles.card}>
        <h2>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.summary}</p>
      </div>
    ))}
  </div>
);

export default Blog;
