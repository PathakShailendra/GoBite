import React from 'react'
import { useParams } from 'react-router-dom'

const ProductListPage = () => {
  const params = useParams();
  console.log(params)
  return (
    <section className='mt-7 lg:mt-0 sticky top-24 lg:top-20'>
      <div className='container sticky mx-auto grid grid-cols-[90px_1fr] md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr]'>
        {/* Sub category */}
        <div className='min-h-[80vh] bg-red-300'>
          Sub Category
        </div>


        {/* Product */}
        <div className='bg-green-300'>
          Product
        </div>
      </div>
    </section>
  )
}

export default ProductListPage