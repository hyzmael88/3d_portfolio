import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  const router = useRouter();
  console.log(router.pathname)

  return (
    <header className='header'>
      <Link href='/'>
        <p className='blue-gradient_text'>
          Home
        </p>
      </Link>
      <nav className='flex text-lg gap-7 font-medium'>
        <Link href='/About'>
          <p className={`${router.pathname === '/About' ? 'text-black' :'text-blue-500' }`}>
            About
          </p>
        </Link>
        <Link href='/Projects'>
          <p className={`${router.pathname === '/Projects' ? 'text-black':'text-blue-500'  }`}>
            Projects
          </p>
        </Link>
        <Link href='/Contact'>
          <p className={`${router.pathname === '/Contact' ? 'text-black': 'text-blue-500'}`}>
            Contact
          </p>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar