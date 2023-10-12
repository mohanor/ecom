
import Poducts from '@/components/products/Products'
import Range from '@/components/ui/Range'
import Header from '@/components/Header/Header'

import RoomsInspiration from '@/components/RoomsInspiration/RoomsInspiration'
import Tiker from '@/components/Tiker/Tiker'

export default function home() {
  return (
    <>
    <Header />
    <div className='px-1 my-16'>
      <div className='mb-12'>
        <div className='text-center space-y-2'>
          <h2 className='font-semibold text-2xl text-black-500'>Browse The Range</h2>
          <p className='text-gray-500 text-gray-dark-500 font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 sm:max-w-5xl gap-4 mt-8 m-auto'>
          <Range src="/images/rooms/dining-room.jpg" name="Dining" />
          <Range src="/images/rooms/living.jpg" name="Living" />
          <Range src="/images/rooms/bedroom.jpg" name="Bedroom" />
        </div>
      </div>
      <Poducts />
      <RoomsInspiration />
      {/* <Tiker /> */}
    </div>
    </>
  )
}