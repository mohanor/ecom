'use client'

import React from 'react'

import images from './images'
import { twMerge } from 'tailwind-merge';
// import Image from 'next/image'

export default function Tiker() {
    return (
        <div className='py-16'>
            <div className='text-center'>
                <p className='text-[#616161] font-medium mb-2'>Share your setup with</p>
                <h2 className='text-black-500 text-4xl font-bold antialiased'>#FuniroFurniture</h2>
            </div>
            <div>
                <div
                    className={twMerge(`grid grid-rows-2 gap-4 max-w-7xl m-auto overflow-auto w-full`)}
                    style={{ gridTemplateColumns: `repeat(${images.length }, minmax(100px, 1fr))` }}
                >

                       

                    


                </div>
            </div>
        </div>
    )
}
