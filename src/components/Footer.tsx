import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full z-50 py-2 flex justify-center items-center
                 will-change-transform transform-gpu"
      style={{
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <Link
        className="flex items-center gap-2 px-4"
        href="https://shekhawat2.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{' '}
        <Image
          src="/shekhawat.svg"
          alt="Shekhawat Logo"
          className="dark:invert"
          width={100}
          height={20}
          priority
        />
      </Link>
    </footer>
  );
};

export default Footer;
