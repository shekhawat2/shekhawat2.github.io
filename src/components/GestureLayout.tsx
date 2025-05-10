"use client";

import { useRouter, usePathname } from "next/navigation";
import { ReactNode, useRef, useState, useEffect } from "react";
import PageWrapper from "./PageWrapper";

const routes = ["/", "/articles", "/content", "/gdrive", "/about", "/contact"];

export default function GestureLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = touchStartX.current;
    touchEndY.current = touchStartY.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    const deltaY = touchEndY.current - touchStartY.current;

    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    const currentIndex = routes.indexOf(pathname);

    // Swipe must be mostly horizontal and more than 80px
    if (absX > 80 && absX > absY) {
      if (deltaX < 0 && currentIndex < routes.length - 1) {
        setDirection("left");
        router.push(routes[currentIndex + 1]);
      } else if (deltaX > 0 && currentIndex > 0) {
        setDirection("right");
        router.push(routes[currentIndex - 1]);
      }
    }
  };

  useEffect(() => {
    setDirection(null);
  }, [pathname]);

  return (
    <div
      className="min-h-screen"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <PageWrapper direction={direction}>{children}</PageWrapper>
    </div>
  );
}
