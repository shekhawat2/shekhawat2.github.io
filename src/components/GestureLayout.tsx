"use client";

import { useRouter, usePathname } from "next/navigation";
import { ReactNode, useRef, useState, useEffect } from "react";
import PageWrapper from "./PageWrapper";

const routes = ["/", "/about", "/projects", "/contact"];

export default function GestureLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

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

  useEffect(() => {
      setDirection((prev) => prev ?? null);
  }, [pathname]);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <PageWrapper direction={direction}>{children}</PageWrapper>
    </div>
  );
}
