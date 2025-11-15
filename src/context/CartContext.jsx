import { createContext, useContext, useEffect, useState } from "react"


const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        try {
            const getCart = localStorage.getItem("cart")
            return getCart ? JSON.parse(getCart) : [];
      
        } catch (error) {
        console.log(error)
        }
  })
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
    
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            if (existing) {
                return prev.map((item) => item.id === product.id ? {
                    ...item,
                    qty: item.qty + 1
                } : item)
            }
            return [...prev, {...product, qty: 1}]
        })
    }

    

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            { children }
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}