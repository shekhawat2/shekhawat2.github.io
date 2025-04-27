"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function PageWrapper({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "left" | "right" | null;
}) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  const variants = {
    initial: (dir: "left" | "right" | null) => ({
      x: dir === "left" ? 300 : dir === "right" ? -300 : 0,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: "left" | "right" | null) => ({
      x: dir === "left" ? -300 : dir === "right" ? 300 : 0,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        // After old page has exited, update displayChildren to real children
        setDisplayChildren(children);
      }}
    >
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={direction}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
        }}
      >
        {displayChildren}
      </motion.div>
    </AnimatePresence>
  );
}
