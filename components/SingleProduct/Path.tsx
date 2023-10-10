
import Link from "next/link"
import { Arrow } from "../svgs"

type Props = {
    productName : string
}



export default function Path({ productName }: Props) {
  return (
    <div className="bg-yellow-dark-500 py-6 px-8">
        <div className="flex items-center max-w-7xl m-auto gap-8 text-xs md:text-base">
            <ul className="flex items-center gap-4">
                <li className="text-gray-dark-500 font-light">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-xs"><Arrow /></li>
                <li className="text-gray-dark-500 font-light"><Link href="/shop">Shop</Link></li>
                <li className="text-xs"><Arrow /></li>
            </ul>
            <div className="w-[2px] h-[35px] bg-gray-light-500 hidden md:block"></div>
            <div>{decodeURIComponent(productName)}</div>
        </div>
    </div>
  )
}
