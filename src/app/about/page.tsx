import PageWrapper from "@/components/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-lg max-w-xl">
          Anand Singh Shekhawat is passionate about building clean, minimal web experiences with modern tools like Next.js, Tailwind, and Framer Motion.
        </p>
      </div>
    </PageWrapper>
  );
}