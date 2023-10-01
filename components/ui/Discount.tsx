import React from 'react'

type Props = {
    discount: number
}

export default function Discount({ discount }: Props) {
  return (
    <div className='grid place-content-center rounded-full text-sm text-white bg-red-500 w-[48px] h-[48px]'>-{discount}%</div>
  )
}
