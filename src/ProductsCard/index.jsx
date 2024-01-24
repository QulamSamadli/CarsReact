import React from 'react'


const ProductsCard = ({title,brand,images}) => {
  return (
    <div className='bg-[#435072] text-white' >
        <h1>{brand}</h1>
        <p>{title}</p>
      <div className='w-[200px] h-[275px]'>  <img src={images[0]} alt="" /></div>
    </div>
  )
}

export default ProductsCard