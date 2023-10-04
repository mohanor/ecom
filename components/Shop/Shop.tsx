import React from 'react'

import Filter from './Filter'
import Header from '../ui/Hero'

import ProductsList from '../products/ProductsList'
import PaginationControls from '../ui/PaginationControls'

export default function Shop() {
    return (
        <div>
            <Header />
            <Filter />
            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl m-auto mb-10'>
                <ProductsList />
            </div>
            <PaginationControls />
        </div>
    )
}
