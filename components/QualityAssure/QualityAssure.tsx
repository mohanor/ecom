import { Quality, Protection, Shipping, Support } from '@/components/svgs'

type ItemProps = {
    title: string,
    description: string,
    icon: React.ReactNode
}

function Item({ title, description, icon }: ItemProps) {

    return (
        <div className='flex items-center m-auto gap-3 w-[250px]'>
            <div className="text-5xl">
                {icon}
            </div>
            <div className=''>
                <h2 className='font-semibold text-lg'>{title}</h2>
                <p className='text-gray-dark-500 text-md'>{description}</p>
            </div>
        </div>
    )


}

export default function QualityAssure() {

    const items = [
        {
            title: 'High Quality',
            description: 'crafted from top materials',
            icon: <Quality />
        },
        {
            title: 'Warranty Protection',
            description: 'Over 2 years',
            icon: <Protection />
        },
        {
            title: 'Free Shipping',
            description: 'Order over 150 $',
            icon: <Shipping />
        },
        {
            title: '24 / 7 Support',
            description: 'Dedicated support',
            icon: <Support />
        }

    ]


    return (
        <div className='bg-yellow-dark-500 my-8'>
            <div className='grid mid:grid-cols-2 clg:grid-cols-4 py-10 gap-16 max-w-7xl m-auto mid:h-[270px]'>
                {
                    items.map((item, index) => {
                        return <Item key={index} title={item.title} description={item.description} icon={item.icon} />
                    })
                }
            </div>
        </div>
    )
}
