import {useEffect, useState } from 'react'
import ProductList from './components/ProductList';

export default function App() {
  const [products, setProducts] = useState(null);
  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try{
          const res = await fetch("api/products")
          const data = await res.json()
          setProducts(data)
      }catch(err){
        setError(err.message)
      }finally{
        setLoading(false)
      }
    }
    getProducts()
  },[])

      

  return (
    <div className="flex items-center justify-center p-6 min-h-screen w-full bg-gray-700">
      <div className='space-y-8'>
        <h2 className='text-3xl font-bold text-white'>Product Catalogue</h2>
        {loading && (
          <p>Loading...</p>
        )}
        {error && (
          <p>{error.message}</p>
        )}
        <ProductList products={products}/>
      </div>
    </div>
  )
}
