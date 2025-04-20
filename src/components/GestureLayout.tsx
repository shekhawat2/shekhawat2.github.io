"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useRef } from "react";
import Image from "next/image";

const routes = ["/", "/about", "/projects", "/contact"]; // Customize

export default function GestureLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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
      router.push(routes[currentIndex + 1]);
    } else if (deltaX < -50 && currentIndex > 0) {
      router.push(routes[currentIndex - 1]);
    }
  };

  return (
    <motion.main
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
      <footer>
        By
        <Image
          src="/shekhawat.svg"
          alt="Shekhawat Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </footer>
    </motion.main>
  );
}
