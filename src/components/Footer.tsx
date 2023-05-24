import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="fixed bottom-0 flex w-full items-end justify-center">
            <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
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
    )
}

export default Footer
