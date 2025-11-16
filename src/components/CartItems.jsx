import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartItems() {
    const { cart, removeFromCart } = useCart()
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    

  return (
    <div className='absolute right-0 nt-2 w-80 bg-white border rounded-lg shadow-lg z-50 p-3 space-y-5'>
            <h2 className='text-lg font-bold'>My Cart</h2>
            {cart.length > 0 ? (
              <>
                {cart.map((product) => (
                        <div key={product.id} className='border p-3 rounded-lg'>
                            <div className='flex items-center gap-1'>
                                <img src={product.image} alt={product.name} className='w-20 border rounded-lg'/>
                                <h2 className='text-lg font-bold'>{product.name}</h2>
                            </div>
                            <p className="text-sm">{product.description}</p>
                            <div className='flex items-center justify-between mt-2'>
                                <h5>Category</h5>
                                <p>{product.category}</p>
                            </div>
                            <div className='flex items-center justify-between mt-2'>
                                <h5>Quantity</h5>
                                <p>{product.qty}</p>
                            </div>
                            <div className='flex items-center justify-between mt-2'>
                                <h5>Price</h5>
                                <p>{product.price}</p>
                            </div>
                            <div className='flex items-center justify-between mt-2'>
                                <h5>Sub Total</h5>
                                <p>{Number(product.price * product.qty).toFixed(2)}</p>
                            </div>
                            <button onClick={() => removeFromCart(product.id)} className=" bg-gray-700 text-white font-bold rounded-lg text-center w-full py-2 mt-2">
                                Delete Item{product.qty > 1 ? "s" : ""}
                            </button>
                        </div>
                    ))}
                    <div className='flex items-center justify-between font-bold text-lg'>
                        <h2>Total</h2>
                        <p>{total}</p>
                    </div>
              </>
            ) : (
                <p className='text-center text-sm font-bold'>Cart is Empty </p>
            )}
        
    </div>
  )
}
