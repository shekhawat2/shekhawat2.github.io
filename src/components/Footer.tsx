import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full py-4 bg-gray-800 text-white fixed bottom-0 left-0 z-50 flex justify-center items-center">
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
          height={24}
          priority
        />
      </Link>
    </div>
  );
};

export default Footer;
