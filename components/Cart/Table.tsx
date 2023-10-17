'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Delete } from '../svgs'
import { useMediaQuery } from '@/hooks/useMediaQuery'



function Tr() {

    const [quantity, setQuantity] = useState(1)

    const handdleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)

        if (Number.isNaN(value)) return;
        setQuantity(value)
    }

    return (
        <div className='grid grid-cols-12 place-content-center'>
            <div className='col-span-4 flex items-center gap-4'>
                <Image
                    src='/images/postitem.jpg'
                    alt='Picture of the author'
                    width={80}
                    height={80}
                    className='flex-shrink-0'
                />
                <span className='line-clamp-1'>Asgaard sofa sofa sofa sofa sofa sofa sofa</span>
            </div>
            <div className='col-span-2 grid place-content-center'>
                <span>Rs. 250,000.00</span>
            </div>
            <div className='col-span-2 grid place-content-center'>
                <label htmlFor="quantity" className='hidden'>Quantity</label>
                <input
                    type='text'
                    className='border border-gray-dark-400 h-10 outline-none w-10 rounded-md text-center'
                    value={quantity}
                    onChange={handdleQuantity}
                    id='quantity'
                />
            </div>
            <div className='col-span-2 grid place-content-center'>
                <span>Rs. 250,000.00</span>
            </div>
            <div className='col-span-2 grid place-content-center'>
                <button><Delete className="text-green-dark-500 hover:text-red-500" /></button>
            </div>
        </div>
    )
}


export default function Table() {
    return (
        <div className='flex-[.7]'>
            <div className='bg-yellow-dark-500 py-6 text-center font-medium grid grid-cols-12'>

                <div className='col-span-4'>Product</div>
                <div className='col-span-2'>Price</div>
                <div className='col-span-2'>Quantity</div>
                <div className='col-span-2'>Subtotal</div>
                <div className='col-span-2'></div>

            </div>
            <div className='text-center mt-8 space-y-6'>
                <Tr />
            </div>
        </div>
    )
}

type DeleteQuantityProps = {
    quantity: number,
    setQuantity: (value: number) => void,
    className?: string
}

function DeleteQuantity({ quantity, setQuantity, className='' }: DeleteQuantityProps) {

    return (
        <div className={`flex gap-4 ${className}`}>
            <div className='flex items-center bg-gray-light-200 gap-4 text-xl  font-semibold rounded-md overflow-hidden border border-gray-light-500'>
                <button
                    className='px-3 py-1 bg-gray-light-300 border-r border-gray-light-500'
                    aria-label="decrease quantity"
                    onClick={() => setQuantity(quantity - 1)}
                >-</button>
                <span className='font-normal'>{quantity}</span>
                <button
                    className='px-3 py-1 bg-gray-light-300 border-l border-gray-light-500'
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="increase quantity"
                >+</button>
            </div>
            <button aria-label="delete product from cart" className='rounded-md text-sm px-2 py-1 border border-gray-light-500 bg-gray-light-300'>Delete</button>
        </div>
    )

}


function MobileItem() {

    const [quantity, setQuantity] = useState(1)
    const xtraSmall = useMediaQuery('(min-width: 400px)')

    return (
        <div className='px-4 py-4 '>
            <div className='flex items-start gap-8'>
                <div className='relative h-[100px] w-[100px] rounded-2xl flex-shrink-0 overflow-hidden'>
                    <Image
                        src='/images/postitem.jpg'
                        alt='Picture of the author'
                        fill
                        className='w-full h-full object-cover'
                        sizes='(max-width: 768px) 100vw'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-lg line-clamp-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus et dolores rem alias repudiandae consequatur a fuga quibusdam, accusamus necessitatibus, blanditiis beatae cum optio similique eum culpa qui minus?
                    </span>
                    <span className='font-bold'>Rs. 250,000.00</span>
                    {xtraSmall && <DeleteQuantity setQuantity={setQuantity} quantity={quantity} />}
                </div>
            </div>

            {!xtraSmall && <DeleteQuantity setQuantity={setQuantity} quantity={quantity} className="mt-4" />}

        </div>
    )
}

export function MobileTable() {

    return (
        <div className='space-y-3'>
            <MobileItem />
            <MobileItem />
            <MobileItem />
        </div>
    )

}
