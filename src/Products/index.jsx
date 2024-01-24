import axios from 'axios'
import React, { useEffect, useState } from 'react'
const _url ="https://dummyjson.com/products"

const Products = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
axios.get(_url).then(({data})=>{
setProducts(data.products)
})

},[])

  return (
    <div>

{
    products.map(({title,id})=>{
        return <div key={id}>
          <p>{title}</p>
        </div>
    })
}

    </div>
  )
}

export default Products
