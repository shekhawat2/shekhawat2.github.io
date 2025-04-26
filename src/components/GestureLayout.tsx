"use client";

import { useRouter, usePathname } from "next/navigation";
import { ReactNode, useRef, useState } from "react";

const routes = ["/", "/about", "/projects", "/contact"];

export default function GestureLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setDirection] = useState<"left" | "right">("left");

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const currentIndex = routes.indexOf(pathname);
    if (deltaX > 50 && currentIndex < routes.length - 1) {
      setDirection("left");
      router.push(routes[currentIndex + 1]);
    } else if (deltaX < -50 && currentIndex > 0) {
      setDirection("right");
      router.push(routes[currentIndex - 1]);
    }
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  );
}
