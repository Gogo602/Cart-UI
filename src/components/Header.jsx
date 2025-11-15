
import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { FaCartArrowDown } from "react-icons/fa";
import CartItems from './CartItems';


export default function Header() {
    const [showDropDwon, setShowDropDown ] = useState(false)
    const { cart } = useCart()
    const itemCount = cart.reduce((acc, item) => acc + item.qty, 0)
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)

    const handleShow = () => {
        setShowDropDown(!showDropDwon)
    }

  return (
    <div className='p-6 w-full'>
          <div className='flex items-center justify-between'>
                <h2 className="text-2xl font-bold text-gray-700">Shopper</h2>
                <div className='relative'>
                    <button onClick={() => handleShow()} className='cursor-pointer'>
                        <FaCartArrowDown size={25} className=' text-gray-700 shadow-2xl' />
                        {itemCount > 0 && (
                            <p
                                className='text-white bg-red-600 absolute z-1 -top-2 -right-2 text-xs border rounded-full h-5 w-5 flex items-center justify-center'>
                                {itemCount}
                            </p>
                        )}
                    </button>
                    {showDropDwon && (
                        <CartItems cart={cart} total={total} />
                    )}
              </div>
          </div> 
    </div>
  )
}
