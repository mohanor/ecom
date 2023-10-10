'use client';

import Card from "@/components/ui/Card";
import axios from '@/api/axios'

import { useEffect, useState } from "react";

import { useFetch } from '@/hooks/useFetch'

import Skeleton from '@/components/ui/Skeleton'

export default function ProductsList() {

    const [limit, setLimit] = useState(8)

    const [products, loading, error] = useFetch('/products', {
        params: {
            limit
        }
    })

    return (
        <>
            {
                products.map((product: any) => (
                    <Card key={product.id} content={product} />
                ))
            }
        </>
    )
}
