import Link from 'next/link'
import Table from './Table'

function CartTrotals() {

    return (
        <div className='flex-[.3] bg-yellow-dark-500 min-h-[390px]'>
            <div className='text-center flex flex-col justify-between h-full pt-8 pb-10 px-16'>
                <h2 className='font-semibold text-3xl'>Cart Totals</h2>
                <div className='space-y-6'>
                    <div className='flex justify-between items-center'>
                        <span >Subtotal</span>
                        <span className='text-gray-dark-500 text-sm'>Rs. 250,000.00</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span>Total</span>
                        <span className='text-green-dark-500 text-lg'>Rs. 250,000.00</span>
                    </div>
                </div>
                <Link href='/checkout' className='border py-5 rounded-xl font-normal text-xl'>
                    Check Out
                </Link>
            </div>
        </div>
    )
}

export default function Cart() {

    return (
        <div>
            <div className='flex justify-between gap-12 max-w-7xl m-auto my-20'>
                <Table />
                <CartTrotals />
            </div>
        </div>
    )

}
