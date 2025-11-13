import { createContext, useContext, useEffect, useState } from "react";


const ProductContext = createContext()

export function ProductProvider({ children }) {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [ error, setError ] = useState(null)


    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("api/products")
                const data = await res.json()
                setProducts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getProducts()
    }, [])

    return (
        <ProductContext.Provider value={{products, loading, error}}>
            { children }
        </ProductContext.Provider>
    )
}


// if using this syntax no need to export ProductContext
export const useProducts(){
    return useContext(ProductContext)
}