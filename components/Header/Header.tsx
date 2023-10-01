import React from 'react'

import Button from '../ui/Button'

export default function Header() {
  return (
    <div
      style={{ backgroundImage: 'url(/images/cover.jpg)' }}
      className='h-[700px] flex items-center sm:items-end justify-center bg-cover bg-center py-24 px-12'
    >
      <div className='w-full max-w-7xl flex items-end justify-end'>
        <div className='bg-yellow-dark-500 w-fit p-8'>
          <div className='mb-6 sm:mb-10'>
            <span className='text-sm sm:text-md font-medium text-black-500'>New Arrival</span>
            <h1 className='font-bold antialiased text-4xl sm:text-5xl max-w-xs sm:max-w-sm text-green-dark-500 sm:leading-[58px] mb-2'>Discover Our New Collection</h1>
            <p className='max-w-lg text-black-500 text-sm sm:text-md leading-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
          <Button className='font-semibold uppercase sm:px-14 sm:py-8'>buy now</Button>
        </div>
      </div>
    </div>
  )
}
