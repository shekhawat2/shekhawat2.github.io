import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 px-4 py-16 sm:px-20 sm:py-32 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
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
  );
}
