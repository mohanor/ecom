import React from 'react'

import { Filter as FilterIcon, Dots, Horizontal } from '@/components/svgs'

export default function Filter() {
    return (
        <div className='bg-[#F9F1E7] py-6 mb-16'>
            <div className='max-w-7xl m-auto flex items-center justify-between'>
                <div className='flex items-center gap-6'>
                    <button className='flex items-center gap-2'>
                        <FilterIcon />
                        <span>Filter</span>
                    </button>

                    <button><Dots /></button>
                    <button><Horizontal /></button>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='space-x-2'>
                        <span>Show</span>
                        <select name="" id="" className='p-2 text-gray-dark-500 font-light outline-none cursor-pointer appearance-none text-center'>
                            <option value="16">16</option>
                            <option value="32">32</option>
                            <option value="64">64</option>
                        </select>
                    </div>
                    <div className='space-x-2'>
                        <span>Short by</span>
                        <select name="" id="" className='py-2 pl-2 pr-12 text-gray-dark-500 font-light outline-none cursor-pointer appearance-none text-center'>
                            <option value="Default">Default</option>
                            <option value="Price">Price</option>
                            <option value="Name">Name</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
