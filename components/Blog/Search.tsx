
'use client'

import { use, useCallback, useEffect, useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'

import { Search as SearchIcon } from '../svgs'

type Props = {
  search: string
}
const Results = ({search}: Props) => {

  return (
    <div className='absolute bg-red-500  w-full px-4 py-2 rounded-md'>
      
    
      {search}
    </div>
  )

}

export default function Search() {
  const [search, setSearch] = useState('')

  const debouncedSearchTerm = useDebounce(search, 300);


  return (
    <div className='relative mb-10'>
      <input
        type="text"
        className="border border-gray-dark-400 rounded-md px-2 py-3 w-full outline-none text-lg font-light text-gray-dark-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon className="absolute text-xl text-black-900 top-1/2 right-4 transform -translate-y-1/2" />
      {search.length > 0 && <Results search={debouncedSearchTerm} />}
    </div>
  )
}
