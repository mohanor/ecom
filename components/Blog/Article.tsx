

import Image from 'next/image'

import { User2, Date, Wood } from '../svgs'
import React from 'react'
import Link from 'next/link'

type Props = {
    title: string
    icon: React.ReactNode
}

function Item({ title, icon }: Props) {
    return (
        <div className='flex gap-2 items-center'>
            {icon}
            <span className='text-sm'>{title}</span>
        </div>
    )
}

const items = [
    {
        title: 'Admin',
        icon: <User2 />
    },
    {
        title: 'May 12, 2021',
        icon: <Date />
    },
    {
        title: 'Wood',
        icon: <Wood />
    }
]

export default function Article() {



    return (
        <div>
            <div className='space-y-3'>
                <div>
                    <Image
                        src='/images/post.jpg'
                        alt='hero'
                        width={200}
                        height={200}
                        layout='responsive'
                    />
                </div>
                <div className='flex gap-8 text-gray-dark-500'>
                    {
                        items.map((item, index) => (
                            <Item key={index} title={item.title} icon={item.icon} />
                        ))
                    }
                </div>

                <h2 className='text-black-900 text-2xl font-medium mb-2'>Going all-in with millennial design</h2>
                <p className='text-gray-dark-500 text-justify text-sm leading-6 font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            </div>
            <Link 
                href='/blog'
                className='text-black-900 cursor-pointer h-9 font-[400] text-lg mt-8 block w-fit relative after:cotent[""] after:block after:h-[1px] after:absolute after:bottom-0 after:w-[80%] after:hover:w-full after:duration-300 after:ease-in-out after:left-[50%] after:translate-x-[-50%] after:bg-black-900'>
                Read more
            </Link>
        </div>
    )
}
