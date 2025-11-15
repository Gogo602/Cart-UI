
import React from 'react'
import { useCart } from '../context/CartContext'
import { FaCartArrowDown } from "react-icons/fa";


export default function Header() {
    const { cart } = useCart()
    const itemCount = cart.reduce((acc, item) => acc + item.qty, 0)
  return (
    <div className='p-6 w-full'>
          <div className='flex items-center justify-between'>
                <h2 className="text-2xl font-bold text-gray-700">Shopper</h2>
                <div>
                    <FaCartArrowDown size={25} className='relative text-gray-700 shadow-2xl' />
                    <p className='text-white bg-red-600 absolute z-1 top-5 right-4 text-[10px] border rounded-full px-1.5 '>
                        {itemCount}
                    </p>
                </div>
          </div>   
    </div>
  )
}
