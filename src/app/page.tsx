import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className="min-h-screen flex-col">
      <nav className={Styles.mainnav}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/blog"><li>Blog</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </nav>

      <div className="flex flex-col items-center justify-between p-11 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image 
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
          src="/anand.svg"
          alt="Anand Logo"
          width={180}
          height={37}
          priority
        />
        </div>
        <div className="fixed bottom-0">
        <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
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
        </a>
      </div>
    </main>
  )
}
