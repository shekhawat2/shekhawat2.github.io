import Image from "next/image";
//import Link from 'next/link'
//import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className="min-h-screen flex-col">
      <div className="flex flex-col items-center justify-between p-11 ">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
          src="/anand.svg"
          alt="Anand Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
