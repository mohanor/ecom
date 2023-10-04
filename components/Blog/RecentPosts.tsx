import Image from 'next/image'

type Props = {
    src: string
    title: string
    date: string
}

function Item({ title, src, date }: Props) {
    return (
        <div className='flex items-center gap-3'>
            <div className='h-[80px] w-[80px] flex-shrink-0'>
                <Image
                    src={src}
                    alt='hero'
                    width={80}
                    height={80}
                    className='h-full w-full object-cover'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='max-w-[160px] line-clamp-2 text-md font-normal'>{title}</p>
                <span className='text-gray-dark-500 text-sm'>{date}</span>
            </div>
        </div>
    )
}

// src='/images/postitem.jpg'

export default function RecentPosts() {

    const items = [
        {
            src: '/images/postitem.jpg',
            title: 'Going all-in with millennial design',
            date: 'May 12, 2021'
        },
        {
            src: '/images/postitem.jpg',
            title: 'How to make a wooden table',
            date: 'May 12, 2021'
        },
        {
            src: '/images/postitem.jpg',
            title: 'How to make a wooden table',
            date: 'May 12, 2021'
        },
        {
            src: '/images/postitem.jpg',
            title: 'How to make a wooden table',
            date: 'May 12, 2021'
        }
    ]


    return (
        <div className='lg:pl-6'>
            <h2 className='text-3xl font-medium antialiased  text-black-900 mb-8'>Recent Posts</h2>
            <div className='space-y-8'>
                {
                    items.map((item, index) => (
                        <Item key={index} src={item.src} title={item.title} date={item.date} />
                    ))
                }
            </div>
        </div>
    )
}
