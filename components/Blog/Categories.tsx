import Link from 'next/link'
import React from 'react'


type Props = {
    categorie: string
    count: number
}


function Item({ categorie, count }: Props) {
    return (
        <div className="flex justify-between text-gray-dark-500 font-light text-sm">
            <Link href={categorie.toLowerCase()}>{categorie}</Link>
            <p>{count}</p>
        </div>
    )
}

export default function Categories() {

    const categories = [
        {
            categorie: 'Crafts',
            count: 2
        },
        {
            categorie: 'Design',
            count: 8
        },
        {
            categorie: 'Handmade',
            count: 1
        },
        {
            categorie: 'Interior',
            count: 6
        },
        {
            categorie: 'Wood',
            count: 7
        }
    ]


  return (
    <div className='lg:pl-6'>
        <h2 className='text-3xl font-medium antialiased  text-black-900 mb-8'>Categories</h2>
        <div className="space-y-10 max-w-[300px]">
            {
                categories.map((item, index) => {
                    return <Item key={index} categorie={item.categorie} count={item.count} />
                })
            }
        </div>
    </div>
  )
}
