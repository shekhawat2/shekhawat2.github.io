import { useRouter } from "next/router";

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

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog data based on the slug
  const post = blogData.find((post) => post.slug === slug);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
    </div>
  );
};

export default BlogPost;
