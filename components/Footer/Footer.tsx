import React from 'react'

import { Logo } from '../svgs'

export default function Footer() {
  return (
    <footer className='max-w-7xl m-auto mb-10 mt-28'>
        <div className='flex flex-col sm:grid grid-cols-12 border-b border-[#D9D9D9] pb-12 px-2 xs:px-8 gap-10 sm:gap-4'>
            <div className='col-span-12 sm:col-span-4'>
                <h2 className='mb-2 xs:mb-12 font-semibold text-2xl'>Funiro.</h2>
                <p className='text-gray-dark-700 text-md font-light'>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</p>
            </div>
            <div className='col-span-12 sm:col-span-2'>
                <h2 className='text-gray-dark-900 font-semibold text-lg mb-6 md:mb-12 capitalize'>Links</h2>
                <ul className='space-y-6'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='col-span-12 sm:col-span-2'>
                <h2 className='text-gray-dark-900 font-semibold text-lg mb-6 md:mb-12 capitalize'>Help</h2>
                <ul className='space-y-6'>
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>
            <div className='col-span-12 sm:col-span-4'>
                <h2 className='text-gray-dark-900 font-semibold text-lg mb-6 md:mb-12 capitalize'>Newsletter</h2>
                <form className='space-y-4 xs:space-y-0 space-x-2 sm:space-x-0 spc:space-x-2'>
                    <input type="text" placeholder='Enter Your Email Address' className='text-sm font-light border-b sm:w-[200px] border-black-900 outline-none pb-1 text-gray-dark-700'/>
                    <button className='uppercase text-sm border-b border-black-900 pb-1'>Subscribe</button>
                </form>
            </div>
        </div>
        <p className='mt-10 font-normal text-black-900 px-8'>2023 furino. All rights revered</p>
    </footer>
  )
}
