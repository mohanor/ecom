import React from 'react'

import { Logo } from '../svgs'

export default function Footer() {
  return (
    <div className='max-w-7xl m-auto mb-10 mt-28'>
        <div className='grid grid-cols-12 border-b border-[#D9D9D9] pb-12 px-8 gap-10 sm:gap-4'>
            <div className='col-span-12 sm:col-span-4'>
                <h2 className='mb-12 font-semibold text-2xl'>Funiro.</h2>
                <p className='text-gray-dark-500 text-sm font-light'>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</p>
            </div>
            <div className='col-span-6 sm:col-span-2'>
                <h2 className='text-gray-dark-500 text-sm mb-12 capitalize'>Links</h2>
                <ul className='space-y-6'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='col-span-6 sm:col-span-2'>
                <h2 className='text-gray-dark-500 text-sm mb-12 capitalize'>Help</h2>
                <ul className='space-y-6'>
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>
            <div className='col-span-12 sm:col-span-4'>
                <h2 className='text-gray-dark-500 text-sm mb-12 capitalize'>Newsletter</h2>
                <form className='space-y-4 xs:space-y-0 xs:space-x-2'>
                    <input type="text" placeholder='Enter Your Email Address' className='text-sm font-light border-b sm:w-[200px] border-black-900 outline-none pb-1 text-gray-dark-500'/>
                    <button className='uppercase text-sm border-b border-black-900 pb-1'>Subscribe</button>
                </form>
            </div>
        </div>
        <p className='mt-10 font-normal text-black-900 px-8'>2023 furino. All rights revered</p>
    </div>
  )
}
