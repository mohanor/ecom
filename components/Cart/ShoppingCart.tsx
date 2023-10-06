import { X, XCart } from '@/components/svgs'
import Image from 'next/image'
import Link from 'next/link'



function ProductItem() {
    return (
        <div className='flex justify-between items-center'>
            <div className='h-[100px] w-[100px] rounded-lg overflow-hidden'>
                <Image
                    src='/images/postitem.jpg'
                    width={100}
                    height={100}
                    alt='cart'
                    className='object-cover'
                />
            </div>
            <div>
                <p className='mb-4 text-xl font-light'>Asgaard sofa</p>
                <div className='flex gap-3 items-center'>
                    <span>1</span> <span className='font-light text-sm'>X</span> <span className='text-green-dark-500 text-md'>Rs. 250,000.00</span>
                </div>
            </div>
            <button className='text-xl'><X /></button>
        </div>
    )
}


export default function ShoppingCart() {
    return (
        <div className='fixed bg-[#000000]/[.3] inset-0 z-30 flex justify-end'>
            <div className='w-[417px] h-[792px] bg-white flex flex-col justify-between overflow-hidden'>
                <div className='px-6 pt-8 flex flex-col flex-grow'>
                    <div className='flex justify-between items-center gap-16 mb-8'>
                        <h2 className='border-b border-gray-light-500 flex-grow pb-4 text-[24px] font-medium'>Shopping Cart</h2>
                        <XCart className="text-2xl" />
                    </div>
                    
                    <div className='space-y-6 overflow-y-auto h-[480px]'>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        {/* <ProductItem /> */}
                    </div>
                </div>

                <div className=''>
                    <div className='px-6 py-8 flex justify-between text-xl'>
                        <h3>Subtotal</h3>
                        <p className='text-green-dark-500 font-medium'>Rs. 250,000.00</p>
                    </div>
                    <hr className='text-green-light-500' />
                    <div className='flex justify-between px-6 py-8'>
                        <Link href='/cart' className='border px-6 py-2 rounded-full text-sm'>
                            Cart
                        </Link>
                        <Link href='/checkout' className='border px-6 py-2 rounded-full  text-sm'>
                            Checkout
                        </Link>
                        <Link href='/comparison' className='border px-6 py-2 rounded-full  text-sm'>
                            Comparison
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
