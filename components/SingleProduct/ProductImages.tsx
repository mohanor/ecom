'use client'

import Image from 'next/image'

import { useMediaQuery } from '@uidotdev/usehooks'
import { Swiper, SwiperSlide } from 'swiper/react';

function ImageItem() {
    return (
        <div className='bg-yellow-dark-500 h-[80px] w-[80px] overflow-hidden rounded-lg cursor-pointer'>
            <Image
                src="/images/sofa.png"
                alt="Picture of the author"
                width={80}
                height={80}
                className='h-full w-full object-cover hover:scale-110 hover:rotate-6 duration-300'
            />
        </div>
    )
}

import 'swiper/css';
import { twMerge } from 'tailwind-merge';

type Props = {
    slidesPerView?: number
    direction?: 'horizontal' | 'vertical'
}

function Slides({ direction = 'horizontal', slidesPerView = 3 }: Props) {

    return (
        <div className={twMerge('overflow-hidden', direction == 'vertical' ? 'h-[500px]' : null)}>

            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                breakpoints={{
                    375: {
                        slidesPerView: slidesPerView,
                    },
                }}
                direction={direction}
                className='h-full w-full'
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <SwiperSlide key={item}>
                            <ImageItem />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}



export default function ProductImages() {

    const isTablet = useMediaQuery('(min-width: 768px)')

    return (
        <div className='flex flex-col md:flex-row gap-8 lg:gap-4 xl:gap-8'>
            {isTablet && (<Slides direction="vertical" slidesPerView={5} />)}

            <div className='bg-yellow-dark-500  w-full lg:w-[500px] lg:h-[500px] rounded-lg'>
                <Image
                    src="/images/sofa.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className='h-full w-full object-contain'
                />
            </div>
            {!isTablet && <Slides slidesPerView={5} />}
        </div>
    )
}