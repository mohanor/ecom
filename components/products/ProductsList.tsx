// 'use client';

import Card from "@/components/ui/Card";
import axios from '@/api/axios'

import { useEffect, useState } from "react";

import { useFetch } from '@/hooks/useFetch'

import data from '@/data/data'

type Props = {
    shop?: boolean
}

export default function ProductsList({ shop = false }: Props) {

    // const [limit, setLimit] = useState(8)

    // const [products, loading, error] = useFetch('/products', {
    //     params: {
    //         limit
    //     }
    // })

    return (
        <>
            {shop ?
            
                data.slice(0, 16).map((product: any, index) => (
                    <Card key={index} content={product} />
                ))
            
            :
            
                data.slice(0, 8).map((product: any, index) => (
                    <Card key={index} content={product} />
                ))
            }
        </>
    )
}



