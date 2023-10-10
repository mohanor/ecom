
import Button from '../ui/Button'
import Image from 'next/image'

import { twMerge as tw } from 'tailwind-merge'

import Carousel from './Carousel'
import Slider from './Slider'
// import Radio from './Radio'

type SlideProps = {
    src: string
    className?: string
}


export function Slide({ src, className = '' }: SlideProps) {
    return (
        <div className={tw('relative w-full h-[85%]', className)}>
            <Image
                src={src}
                width={420}
                height={300}
                alt='room1'
                className='h-full w-full object-cover user-select-none'
            />
        </div>
    )

}

export default function RoomsInspiration() {
    return (
        <div className='inspiration'>
            <div className='grid grid-cols-12 bg-yellow-light-500 py-10 gap-4'>
                <div className='col-span-12 sm:col-span-4 grid place-content-center'>
                    <div className='pl-2 lg:pl-16 2xl:pl-32'>
                        <div className='mb-8'>
                            <h2 className='text-black-500 font-bold text-3xl sm:text-3xl lg:text-4xl max-w-xl mb-4'>50+ Beautiful rooms inspiration</h2>
                            <p className='text-black-400 max-w-sm text-sm lg:text-base'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                        </div>
                        <Button size='lg' className='h-14 text-sm sm:text-base'>Explore More</Button>
                    </div>
                </div>
                <div className='col-span-12 p-2 sm:p-0 sm:col-span-8'>
                    <Slider />
                </div>
            </div>
        </div>
    )
}
