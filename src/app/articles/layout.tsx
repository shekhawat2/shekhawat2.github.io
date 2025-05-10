import "../globals.css";
import GestureLayout from "../../components/GestureLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-8 sm:p-20 min-h-screen font-[family-name:var(--font-geist-sans)] flex flex-col">
      <main className="flex-grow max-w-none">
        <GestureLayout>{children}</GestureLayout>
      </main>
    </div>
  );
}