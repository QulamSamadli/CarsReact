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
    <div className=" container flex flex-wrap justify-center gap-2  ">
      {products.map(({ title, brand, images, id,price,category }) => {
        return (
          <ProductsCard
            title={title}
            key={id}
            images={images}
            id={id}
            brand={brand}
            price={price}
            category={category}
          />
       
        );
      })}
    </div>
  );
};

export default Products;
