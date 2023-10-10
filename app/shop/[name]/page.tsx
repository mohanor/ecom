

import SingleProduct from '@/components/SingleProduct/SingleProduct'

type Props = {
    params : {
        name: string
    }
}


export default function page({params}: Props) {

  return (
    <SingleProduct  productName={params.name}/>
  )
}
