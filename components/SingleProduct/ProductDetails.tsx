'use client';

import { Star, FB, TW, IN } from "../svgs";
import ProductImages from './ProductImages';

type SizeProps = {
    size: string
}

function Size({ size }: SizeProps) {
    return (
        <button
            className='bg-yellow-dark-500 focus:text-white focus:scale-95 uppercase focus:bg-green-dark-500 text-lg font-normal w-[50px] h-[50px] rounded-lg text-black-500'
        >
            {size}
        </button>)
}

function Color({ color }: { color: string }) {

    return (
        <button
            className="w-[30px] h-[30px] rounded-full"
            style={{ backgroundColor: color }}
        >
        </button>)
}

type QuantityProps = {
    quantity: number,
    setQuantity: (param: number) => void
}

function Quantity({ quantity, setQuantity }: QuantityProps) {

    return (
        <div className='flex justify-center items-center gap-6 border rounded-lg py-3 px-2 xl:px-4'>
            <button onClick={() => setQuantity(quantity - 1)}> - </button>
            <span className="w-7 text-center">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}> + </button>
        </div>
    )
}


function AddToCart() {

    const [added, setAdded] = useState(false)


    return (
        <>
        {
            added ? (
                <button className='capitalize border  py-3 px-2 xl:px-4 rounded-lg'>
                    Add to cart
                </button>
            ) : 
                <button className='capitalize border  py-3 px-2 xl:px-4 rounded-lg bg-green-dark-500 text-white'>
                    Added to cart
                </button>
        }

        </>
    )
}


function Compare() {

    return (
        <button
            className='border py-3 px-2 xl:px-4 rounded-lg space-x-2'
        >
            <span>+</span> <span>Compare</span>
        </button>
    )
}

type ReviewProps = {
    stars?: number
    numberOfReviews?: number
}

export function Stars({ stars = 4.5, numberOfReviews = 5 }: ReviewProps) {

    return (
        <div className='flex flex-col xs:flex-row gap-2 xs:gap-8 items-start xs:items-center'>
            <div
                className='overflow-hidden'
                style={{ width: `${stars * 27}px` }}
            >
                <div className='flex gap-2 text-xl w-fit'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
            </div>
            <div className='bg-gray-light-500 w-[2px] h-[35px] hidden xs:block'></div>
            <span>{numberOfReviews} Customer Review</span>
        </div>
    )
}

function Actions() {

    const [quantity, setQuantity] = useState(1)


    return (
        <div className='flex flex-col xs:flex-row text-sm xl:text-base gap-2 xl:gap-8'>
            <Quantity  quantity={quantity} setQuantity={setQuantity}/>
            <AddToCart />
            <Compare />
        </div>
    )

}

function ProductInfo() {
    return (
        <div className='space-y-8 w-[90%] m-auto'>
            <div className='space-y-2'>
                <div>
                    <h1 className='text-3xl xs:text-5xl mb-4'>Asgaard sofa</h1>
                    <span className='text-gray-dark-500 text-xl xs:text-2xl'>Rs. 250,000.00</span>
                </div>
                <Stars />
                <div>
                    <p className='text-xs xs:text-sm font-light'>
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </p>
                </div>
            </div>
            <div>
                <span className='block mb-2 font-light text-lg text-gray-dark-500'>Size</span>
                <div className='flex gap-4'>
                    <Size size='L' />
                    <Size size="xl" />
                    <Size size="xxl" />
                </div>
            </div>
            <div>
                <span className='block mb-2 font-light text-lg text-gray-dark-500'>Color</span>
                <div className='flex gap-4'>
                    <Color color="#B88E2F" />
                    <Color color="#B88E2F" />
                    <Color color="#B88E2F" />
                </div>
            </div>
            <Actions />
            <hr className='text-[#D9D9D9] hidden lg:block' />
            <div className='space-y-4 text-md text-gray-light-500'>
                <div className=''>
                    <span className='w-[100px] inline-block'>SKU</span>
                    <span>:</span>
                    <span className='pl-2'>SS001</span>
                </div>
                <div>
                    <span className='w-[100px] inline-block'>Category</span>
                    <span>:</span>
                    <span className='pl-2'>Sofas</span>
                </div>
                <div>
                    <span className='w-[100px] inline-block'>Tags</span>
                    <span>:</span>
                    <span className='pl-2'>Sofa, Chair, Home, Shop</span>
                </div>
                <div className='flex items-center'>
                    <span className='w-[100px] inline-block'>Share</span>
                    <span>:</span>
                    <span className='pl-2 flex gap-4 text-2xl'>
                        <FB />
                        <TW />
                        <IN />
                    </span>
                </div>
            </div>
        </div>
    )
}

import Tabs from '../ui/Tabs'
import { useState } from "react";

export default function ProductDetails() {
    return (
        <div>
            <div className='max-w-5xl xl:max-w-7xl m-auto flex flex-col lg:flex-row gap-10 xl:gap-20'>
                <ProductImages />
                <ProductInfo />
            </div>
            <hr className='mt-16 mb-12 text-[#D9D9D9]' />
            <Tabs />
        </div>
    )
}
