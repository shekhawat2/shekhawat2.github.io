export default function Contact() {
  return (
    <div className="min-h-screen grid place-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-lg space-y-6 text-center sm:text-left">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="text-base">
          Want to connect? Send me a message on{" "}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400"
          >
            LinkedIn
          </a>{" "}
          or email me at{" "}
          <a
            href="mailto:your@email.com"
            className="underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400"
          >
            your@email.com
          </a>
          .
        </p>
      </main>
    </div>
  );
}
