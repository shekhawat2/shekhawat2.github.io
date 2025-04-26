import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col min-h-screen gap-[32px] row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/anand.svg"
            alt="Anand logo"
            width={180}
            height={38}
            priority
          />
        </main>
      </div>
    </PageWrapper>
  );
}
