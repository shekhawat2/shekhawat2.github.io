import React from 'react';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      {children}
    </main>
  );
}
