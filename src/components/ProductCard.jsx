import { useCart } from "../context/CartContext"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
   <div className='border p-6 rounded-md bg-white space-y-3'>
        <img src={product.image} alt={product.name} className='h-40 object-cover mx-auto'/>
        <h2 className='text-xl font-bold'>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {" "}${product.price}</p>
        <p>Quantity: {" "}{product.quantity}</p>
        <div className='flex items-center justify-between'>
          <p>Category: {" "}{product.category}</p>
          <p>Ratings: {" "}{product.rating}</p>
        </div>
        <button 
          onClick={ () => addToCart(product)}
          className=" bg-gray-700 text-white font-bold rounded-lg text-center w-full py-2">Add to Cart</button>
    </div>
  )
}
