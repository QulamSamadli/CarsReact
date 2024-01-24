import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard";
const _url = "https://dummyjson.com/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setProducts(data.products);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {products.map(({ title,brand,images,id }) => {
        return (
         <ProductsCard title={title} key={id} images={images} brand={brand} />
        );
      })}
    </div>
  );
};

export default Products;
