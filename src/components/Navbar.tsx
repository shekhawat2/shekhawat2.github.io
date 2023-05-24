import React from 'react'
import Link from 'next/link'
import Styles from '../styles/Nav.module.css'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className={Styles.mainnav}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/blog"><li>Blog</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar
