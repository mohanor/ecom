'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Delete } from '../svgs'

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
                />
                <span>Asgaard sofa</span>
            </div>
            <div className='col-span-2 grid place-content-center'>
                <span>Rs. 250,000.00</span>
            </div>
            <div className='col-span-2 grid place-content-center'>
                <input
                    type='text'
                    className='border border-gray-dark-400 h-10 outline-none w-10 rounded-md text-center'
                    value={quantity}
                    onChange={handdleQuantity}
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
