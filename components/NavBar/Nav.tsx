'use client'

import Link from 'next/link';
import Brand from './Logo'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { User, Cart, Like2, Search } from '@/components/svgs'

import Dropdown from './Dropdown'

import ShoppingCart from '../Cart/ShoppingCart';


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
      name: 'About',
      href: '/about'
    },
    {
      name: 'Shop',
      href: '/shop'
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

export function NavBarContent() {

  return (
    <ul className='flex items-center gap-8 text-xl'>
      <li><button><User /></button></li>
      <li><button><Cart /></button></li>
      <li><button><Like2 /></button></li>
      <li><button><Search /></button></li>
    </ul>
  )
}




export default function Nav() {

  const isMobile = useMediaQuery("only screen and (min-width : 760px)");

  return (
    <>
      <ShoppingCart />
      <NavbarContainer>
        <Brand />
        {isMobile && <NavBarLinks />}
        <NavBarContent />
        {!isMobile && <Dropdown />}
      </NavbarContainer>
    </>
  );
}