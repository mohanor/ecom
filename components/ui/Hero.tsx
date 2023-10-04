'use client'
import React from 'react'

import { usePathname } from 'next/navigation'
import { Arrow } from '../svgs'
import Link from 'next/link'
import Logo from '../NavBar/Logo'

export default function Header() {

  const pathname = usePathname()

  return (
    <header
        className='h-[315px] w-full bg-cover bg-center bg-red-500 flex flex-col justify-center items-center gap-4'
        style={{
            backgroundImage: "url('/images/hero.jpg')",
        }}
    >
     
        <Logo />
        <h1 className='text-4xl font-medium  text-black-900 text-center capitalize'>{pathname.slice(1)}</h1>
        <div className='flex gap-2 items-center'>
          <Link href="/" className='font-semibold text-black-900'>Home </Link> <Arrow className="text-[10px]" /> <span className='text-black-900 font-light'>{pathname.slice(1)}</span>
        </div>
     
    </header>
  )
}
