


import Path from './Path'
import ProductDetails from './ProductDetails'

type Props = {
    productName : string
}

export default function SingleProduct({productName}: Props) {
    return (
        <div className='space-y-8'>
            <Path productName={productName} />
            <ProductDetails />
        </div>
    )
}
