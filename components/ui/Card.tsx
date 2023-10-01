import React from 'react'

import Image from 'next/image'
import Button from './Button'
import New from '@/components/ui/New'
import Discount from './Discount'

import { Like, Share, Compare } from '@/components/svgs'

type Props = {
    type: "new" | "discount",
    discount?: number
}

function Infos({ type, discount = 0 }: Props) {

    if (type === 'new') {
        return (
            <div className='absolute top-4 right-4'>
                <New />
            </div>
        )
    }

    return (
        <div className='absolute top-4 right-4'>
            <Discount discount={discount} />
        </div>
    )
}

function Actions() {

    const items = [
        {
            name: 'Share',
            icon: <Share />
        },
        {
            name: 'Compare',
            icon: <Compare />
        },
        {
            name: 'Like',
            icon: <Like />
        }
    ]

    return (
        <div className='absolute z-10 w-full h-full bg-black-500/[.7] top-0 grid place-content-center opacity-0 hover:opacity-100 duration-500'>
            <div className='text-center space-y-2'>
                <Button
                    variant='outline'
                    size='lg'
                    className='border-none font-medium'
                >
                    Add to cart
                </Button>
                <ul className='flex flex-wrap justify-between text-white text-sm gap-4'>
                    {
                        items.map(({ icon, name }) => (
                            <li key={name} className='flex items-center gap-1 cursor-pointer'>
                                {icon}
                                <span className='font-semibold'>{name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}



type ContentProps = {
    image?: string,
    title?: string,
    description?: string,
    price?: number,
    discount?: number
}

function Content({ image = '/images/h.jpg', title = 'Syltherine', description = 'Stylish cafe chair', price = 2500000, discount = 350000 }: ContentProps) {
    return (
        <>
            <div className='h-[300px] bg-white'>
                <Image
                    src={image}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className='w-full h-full object-contain'
                />
            </div>
            <div className='px-4 pt-4 pb-8 space-y-2'>
                <h3 className='text-black-500 font-semibold text-lg leading-[1.2] line-clamp-2'>{title}</h3>
                <p className='text-gray-light-600 text-xs line-clamp-3'>{description}</p>
                <div className='flex justify-between items-center flex-wrap'>
                    <span className='text-black-500 font-semibold text-sm'>Rp {price}</span>
                    <span className='text-gray-light-500 text-xs'>Rp {discount}</span>
                </div>
            </div>
        </>
    )
}

type CardProps = {
    type?: "new" | "discount",
    discount?: number,
    content: {
        image?: string,
        title?: string,
        description?: string,
        price?: number,
        discount?: number
    }
}

export default function Card({ type = 'new', discount, content }: CardProps) {
    return (
        <div className='relative bg-gray-lighter-500 w-full border border-black-500/[.1]'>
            <Infos type={type} discount={discount} />
            <Content {...content} />
            <Actions />
        </div>
    )
}
