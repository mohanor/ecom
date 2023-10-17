'use client'

import Link from 'next/link'
import Table, { MobileTable } from './Table'
import { useMediaQuery } from '@/hooks/useMediaQuery'

function CartTrotals() {

    return (
        <div className='flex-[.3] bg-yellow-dark-500'>
            <div className='lg:text-center flex flex-col justify-between gap-8 h-full pt-8 pb-10 px-8'>
                <h2 className='font-semibold text-3xl'>Cart Totals</h2>

                <div className='flex justify-between items-center'>
                    <span >Subtotal</span>
                    <span className='text-green-dark-900 font-bold text-lg'>Rs. 250,000.00</span>
                </div>

                <Link href='/checkout' className='border border-black-900 py-4 lg:py-5 rounded-xl duration-300 hover:bg-yellow-dark-600 font-normal text-lg text-center'>
                    Check Out
                </Link>
            </div>
        </div>
    )
}

export default function Cart() {

    const isTablet = useMediaQuery('(min-width: 768px)')

    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-between gap-12 max-w-7xl m-auto my-10 md:my-20 md:px-4'>
                {
                    isTablet ?
                        <Table />
                        :
                        <MobileTable />
                }
                <CartTrotals />
            </div>
        </div>
    )

}
