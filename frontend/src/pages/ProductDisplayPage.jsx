import React from 'react'
import {useParams} from 'react-router-dom'

const ProductDisplayPage = () => {
  const params = useParams();
  let productId = params?.product?.split("-")?.slice(-1)[0]

  console.log(productId)
  return (
    <div>ProductDisplayPage</div>
  )
}

export default ProductDisplayPage