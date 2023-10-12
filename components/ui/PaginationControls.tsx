'use client';
import React, { use, useEffect } from "react";

import { usePagination, PaginationItemType } from "@nextui-org/react";
import { Arrow as ChevronIcon } from "@/components/svgs";
import { twMerge } from "tailwind-merge";
import { useRouter, useSearchParams } from "next/navigation";
import { set } from "lodash";

export default function App() {


    const { activePage, range, setPage, onNext, onPrevious } = usePagination({
        total: 10,
        showControls: true,
        siblings: 1,
        boundaries: -1,
    });


    const router = useRouter()
    const searchParams = useSearchParams()

    const per_page = searchParams.get('per_page') ?? '5'

    const nextPage = () => {
        onNext();
        // router.push(`/blog?page=${Number(activePage) + 1}&per_page=${per_page}`)
    }

    const prevPage = () => {
        onPrevious();
        // router.push(`/blog?page=${Number(activePage) - 1}&per_page=${per_page}`)
    }


    useEffect(() => {
        if (searchParams.get('page')) {
            setPage(Number(searchParams.get('page')))
        }
    }, [])

    return (
        <div className="flex flex-col gap-2 items-center">
            <ul className="flex gap-6 items-center">
                {range.map((page) => {


                    if (page === PaginationItemType.NEXT) {

                        return (
                            <li key={page} aria-label="next page" className="">
                                <button
                                    className={`w-full h-full bg-[#F9F1E7] rounded-md font-light text-xs xs:text-base px-2 py-1 xs:px-4 xs:py-2 hover:scale-95 ${activePage === 10 && 'cursor-not-allowed'}`}
                                    onClick={nextPage}
                                    disabled={activePage === 10}
                                >
                                    Next
                                </button>
                            </li>
                        );
                    }

                    if (page === PaginationItemType.PREV) {
                        return (
                            <li key={page} aria-label="previous page" className="">
                                <button
                                    className={`w-full h-full bg-[#F9F1E7] rounded-md font-light text-xs xs:text-base px-2 py-1 xs:px-4 xs:py-2 hover:scale-95 ${activePage === 1 && 'cursor-not-allowed'}`}
                                    onClick={prevPage}
                                    disabled={activePage === 1}
                                >
                                    Prev
                                </button>
                            </li>
                        );
                    }

                    if (page === PaginationItemType.DOTS) {
                        return (
                            <></>
                        );
                    }

                    return (
                        <li key={page} aria-label={`page ${page}`} className="w-5 h-5 xs:w-10 xs:h-10 text-xs xs:text-base">
                            <button
                                className={twMerge(
                                    "w-full h-full bg-yellow-dark-500 hover:bg-green-dark-500 text-black-500 rounded-md",
                                    activePage === page && "bg-green-dark-500 text-white"
                                )}
                                onClick={() => setPage(page)}
                            >
                                {page}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
