import { useProducts } from '../context/ProductContext'
import ProductCard from './ProductCard'


export default function ProductList() {
    const {products, loading, error } = useProducts()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {loading && <p>Loading</p>}
      {error && <p>{error.message}</p>}
        {products && products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}
