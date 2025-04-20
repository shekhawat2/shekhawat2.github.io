import PageWrapper from "@/components/PageWrapper";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg max-w-xl">
          Explore a curated list of projects crafted with passion and precision — spanning frontend interfaces, backend systems, and more.
        </p>
      </div>
    </PageWrapper>
  );
}
