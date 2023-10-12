import { X, XCart } from '@/components/svgs'
import Image from 'next/image'
import Link from 'next/link'

import { useHideGlobalScroll } from '@/hooks/useHideGlobalScroll'
import { motion } from 'framer-motion'
import { useOutsideClick } from '@/hooks/useOutsideClick'


function ProductItem() {

    const str = "Asgaard"
    return (
        <div className='flex justify-between items-center px-6'>
            <div className='flex items-center gap-4'>
                <div className='h-[80px] w-[80px] rounded-lg overflow-hidden'>
                    <Image
                        src='/images/postitem.jpg'
                        width={80}
                        height={80}
                        alt='cart'
                        className='object-cover'
                    />
                </div>
                <div>
                    <p className='mb-2 text-md font-light'>
                        {str.length > 10 ? str.substring(0, 10) + '...' : str}
                    </p>
                    <div className='flex gap-3 items-center text-sm'>
                        <span>1</span> <span className='font-light'>X</span> <span className='text-green-dark-500'>Rs. 250,000.00</span>
                    </div>
                </div>
            </div>
            <button className='text-md'><X /></button>
        </div>
    )
}



type Props = {
    visible: boolean
    setVisible: (param: boolean) => void
}

export default function ShoppingCart({ visible, setVisible }: Props) {

    useHideGlobalScroll()
    const ref = useOutsideClick(setVisible)

    return (
        <div className='shopping-cart fixed z-50 h-screen w-screen bg-[#000000]/[.5]'>
            <div className='flex justify-end m-auto h-full'>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,

                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}

                    transition={{ duration: .3 }}
                    exit={{
                        x: 500,
                        opacity: 0,
                    }}

                    ref={ref} className='w-[80vw] sm:w-[417px] h-screen bg-white flex flex-col justify-between overflow-hidden'>
                    <div className='pt-8 flex flex-col flex-grow'>
                        <div className='px-6 flex justify-between items-center gap-16 mb-8'>
                            <h2 className='border-b border-gray-light-500 flex-grow pb-4 text-[24px] font-medium'>Shopping Cart</h2>
                            <XCart className="text-2xl" />
                        </div>

                        <div className='space-y-6 overflow-y-auto h-[calc(100vh-312px)]'>
                            <ProductItem />
                            <ProductItem />
                        </div>
                    </div>

                    <div>
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
                </motion.div>
            </div>
        </div>

    )
}
