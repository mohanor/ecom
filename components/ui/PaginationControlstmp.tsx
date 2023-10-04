'use client';

import { useRouter, useSearchParams } from "next/navigation"
import { PaginationButton } from "./Button"
import Pag from "./PaginationControls"

function GetRangeArray(start:number, lenght: number) {

    if (start <= 2 ) {
        return Array.from({ length: 3 }, (_, i) => i + 1)
    }

    if (lenght <= 3) {
        return Array.from({ length: lenght }, (_, i) => i + 1)
    }

    if (lenght - start <= 3) {
        return Array.from({ length: 3 }, (_, i) => lenght - 3 + i)
    }


    return Array.from({ length: 3 }, (_, i) => i + start)


}

export default function PaginationControls() {

    const router = useRouter()
    const searchParams = useSearchParams()
    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '5'

    return (
        <div className="space-x-4">
            <button
                onClick={() => {
                    router.push(`/blog?page=${Number(page) - 1}&per_page=${per_page}`)
                }}

                disabled={Number(page) === 1}
            >prev page</button>

            {
                GetRangeArray(Number(page), 10).map((item, index) => {
                    return <PaginationButton key={index} index={Number(page)} href='/blog' page={Number(item)} perPage={5} />
                })
            }

            <Pag />

            <button
                onClick={() => {
                    router.push(`/blog?page=${Number(page) + 1}&per_page=${per_page}`)
                }}
                disabled={Number(page) === 9}
                >
                next page
            </button>
        </div>
    )
}
