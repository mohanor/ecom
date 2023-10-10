'use client'

import Link from 'next/link';
import Brand from './Logo'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { User, Cart, Like2, Search } from '@/components/svgs'

import Dropdown from './Dropdown'

import ShoppingCart from '../Cart/ShoppingCart';
import { useState } from 'react';


type NavContainerProps = {
  children: React.ReactNode
}

function NavbarContainer({ children }: NavContainerProps) {

  return (
    <div className='py-6 px-8'>
      <div className='flex items-center justify-between m-auto max-w-7xl'>
        {children}
      </div>
    </div>
  )
}

function NavBarLinks() {

  const items = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Shop',
      href: '/shop'
    },
    {
      name: 'Blog',
      href: '/blog'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ]

  return (
    <ul>
      {
        items.map((item: any) => (
          <Link
            key={item.name}
            className='capitalize text-sm sm:text-md text-black-500 hover:text-black-300 ml-12 duration-300 ease-in-out'
            href={item.href}
          >
            {item.name}
          </Link>
        ))
      }
    </ul>
  )

}

type NavBarContentProps = {
  setVisible: (param: boolean) => void
}

import Tooltip from '@/components/ui/Tooltip'
import { AnimatePresence } from 'framer-motion';


export function NavBarContent({ setVisible }: NavBarContentProps) {

  return (
    <div className='flex items-center gap-4 xs:gap-8 text-lg xs:text-xl'>

      <Tooltip content='profile'>
        <button className='outline-none'><User /></button>
      </Tooltip>

      <Tooltip content='cart'>
        <button className='outline-none' onClick={() => setVisible(true)}>
          <Cart />
        </button>
      </Tooltip>

      <Tooltip content='like'>
        <button className='outline-none'><Like2 /></button>
      </Tooltip>

      <Tooltip content='search'>
        <button className='outline-none'><Search /></button>
      </Tooltip>
    </div>
  )
}




export default function Nav() {

  const isMobile = useMediaQuery("only screen and (min-width : 760px)");
  const [visible, setVisible] = useState(true)

  return (
    <>
      <AnimatePresence>
        {visible && <ShoppingCart visible={visible} setVisible={setVisible} />}
      </AnimatePresence>
      <NavbarContainer>
        <Brand />
        {isMobile && <NavBarLinks />}
        <NavBarContent setVisible={setVisible} />
        {!isMobile && <Dropdown />}
      </NavbarContainer>
    </>
  );
}