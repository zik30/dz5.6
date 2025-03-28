import { useQueries, useQuery } from "@tanstack/react-query"
import axios from "axios"


export const fetchProducts = async () =>{
    const res = await axios.get("https://dummyjson.com/products")
    return res.data
}

export function useProducts (){
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })
}