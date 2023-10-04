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

                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                                (item) => {

                                    // if (item % 3 == 0) return <div key={item} className='bg-red-500 h-full flex items-center justify-center col-span-2 row-span-2'>
                                    //     {item}
                                    // </div>

                                    
                                    if (item % 2 == 0) return <div key={item} className='bg-green-dark-500 row-span-1'>
                                        {item}
                                    </div>
                                    
                                    return <div key={item} className={`bg-red-500 col-span-2 row-span-2`}>
                                        {item}
                                    </div>
                                }
                            )
                        }

                        {/* {
                            images.map((image, index) => (
                                <div key={index} className='row-span-2 col-span-2 h-fit'>
                                    <img
                                        key={index}
                                        src={image}
                                        alt='image'
                                        className={`w-full`}
                                    />
                                </div>
                            ))
                        } */}



                    {/* {
                        images.map((image, index) => {

                            const img = new Image();
                            img.src = image;

                            const imgWidth = img.width;
                            let cols = Math.ceil(imgWidth / 100);

                            if (cols <= 1) cols = 2;

                            return (

                                <div key={index} className={twMerge(`row-span-1 flex items-end`)}>
                                    <img
                                        key={index}
                                        src={image}
                                        alt='image'
                                        className={`w-full`}
                                    />
                                </div>
                            )
                        }

                        )
                    } */}


                </div>
            </div>
        </div>
    )
}
