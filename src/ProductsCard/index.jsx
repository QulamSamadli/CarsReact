import React from 'react'
import { Link } from 'react-router-dom'


const ProductsCard = ({title,brand,images,id}) => {
  return (
    <Link to={`/products/${id}`} className='bg-[#435072] text-white' >
        <h1>{brand}</h1>
        <p>{title}</p>
      <div className='w-[200px] h-[275px]'>  <img src={images[0]} alt="" /></div>
    
    </Link>
  )
}

export default ProductsCard