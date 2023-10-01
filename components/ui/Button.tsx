import { cva } from 'class-variance-authority'
import React from 'react'
import { twMerge as tw } from 'tailwind-merge'

const buttonVariants = cva(
    'inline-flex items-center justify-center text-sm font-medium transition-colors capitalize',
    {
      variants: {
        variant: {
          default:
            'bg-green-dark-500 text-white hover:bg-green-dark-500 hover:text-white hover:bg-green-dark-600',
          outline:
            'bg-white font-semibold text-green-dark-500 border hover:bg-green-dark-500 hover:border-green-dark-500 hover:text-white',
          },
        size: {
          default: 'h-10 py-2 px-4',
          sm: 'h-9 px-2',
          lg: 'h-11 px-12',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    }
  )

type Props = {
    children: React.ReactNode,
    variant?: 'default' | 'outline',
    size?: 'default' | 'sm' | 'lg'
    className?: string
}


export default function Button({ children, variant, size, className = '' }: Props) {

  return (
    <button className={tw(buttonVariants({variant, size, className}))}>
        {children}
    </button>
  )
}
