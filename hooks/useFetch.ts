

import axios from "@/api/axios";
import { useEffect, useState } from "react";



export const useFetch = (pathname: string, params: any) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(


        () => {
            axios.get(pathname, { params })
                .then((res) => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch(

                    (err: any) => {
                        setError(err);
                        setLoading(false);
                    }
                )

        }, []);

        return [ data, loading, error ];
};
