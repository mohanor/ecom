'use client';

import Card from "@/components/ui/Card";
import axios from '@/api/axios'

import { useEffect, useState } from "react";

export default function ProductsList() {

    const [products, setProducts] = useState([])

    const [limit, setLimit] = useState(8)

    useEffect(() => {
        axios.get('/products', {
            params: {
                limit
            }
        })
            .then(res => {
                setProducts(res.data)
                setLimit(prev => prev + 8)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
