import React from 'react'
import QualityAssure from '@/components/QualityAssure/QualityAssure'

type Props = {
    children: React.ReactNode
}

export default function layout({ children }: Props) {
  return (
    <>
        {children}
        <QualityAssure />
    </>
  )
}
