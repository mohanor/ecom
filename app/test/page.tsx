
import Poducts from '@/components/products/Products'
import Range from '@/components/ui/Range'
import Header from '@/components/Header/Header'

import RoomsInspiration from '@/components/RoomsInspiration/RoomsInspiration'
import Tiker from '@/components/Tiker/Tiker'


export default function page() {
  return (
    <>
    <Header />
    <div className='px-1 my-16'>
      <div className='mb-12'>
        <div className='text-center space-y-2'>
          <h2 className='font-semibold text-2xl text-black-500'>Browse The Range</h2>
          <p className='text-gray-500 text-gray-dark-500 font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-wrap gap-4 justify-center mt-8'>
          <Range />
          <Range />
          <Range />
        </div>
      </div>
      <Poducts />
      <RoomsInspiration />
      <Tiker />
    </div>
    </>
  )
}
