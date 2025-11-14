import ProductList from './components/ProductList';


export default function App() {
 
  return (
    <div className="flex items-center justify-center p-6 min-h-screen w-full bg-gray-700">
      <div className='space-y-8'>
        <h2 className='text-3xl font-bold text-white'>Product Catalogue</h2>
        <ProductList />
      </div>
    </div>
  )
}


