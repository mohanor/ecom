import React from 'react'
import Button from '../ui/Button'
import Image from 'next/image'

import { twMerge as tw } from 'tailwind-merge'


// import Radio from './Radio'

type SlideProps = {
    src: string
    className?: string
}

function Slide({ src, className = '' }: SlideProps) {
    return (
        <div className={tw('h-[480px] w-[350px] flex-shrink-0', className)}>
            <Image
                src={src}
                width={500}
                height={500}
                alt='room1'
                className='h-full w-full object-cover'
            />
        </div>
    )

}

export default function RoomsInspiration() {
    return (
        <div className='h-[2000px]'>

            <div className='grid grid-cols-12 bg-yellow-light-500 py-10'>
                <div className='col-span-4 grid place-content-center'>
                    <div className='pl-32'>
                        <div className='mb-8'>
                            <h2 className='text-black-500 font-bold text-4xl max-w-xl mb-4'>50+ Beautiful rooms inspiration</h2>
                            <p className='text-black-400 max-w-sm'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                        </div>
                        <Button size='lg' className='h-14 text-base'>Explore More</Button>
                    </div>
                </div>
                <div className='col-span-8'>

                    <div className='flex gap-8'>
                        <Slide src='/images/room1.jpg' className='h-[580px] w-[400px]' />
                        <Slide  src='/images/room2.jpg'/>
                        <Slide  src='/images/room2.jpg'/>
                        <Slide  src='/images/room2.jpg'/>
                        <Slide  src='/images/room2.jpg'/>
                    </div>

                    {/* <Radio /> */}

                </div>

            </div>
        </div>
    )
}
