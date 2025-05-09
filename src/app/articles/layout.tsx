import "../globals.css";

import GestureLayout from "../../components/GestureLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <GestureLayout>{children}</GestureLayout>
      </main>
    </div>
  );
}
