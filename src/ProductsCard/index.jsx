import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ title, brand, images, id }) => {
  return (
    <Link to={`/products/${id}`} className="border-2 rounded-md border-[#CDC7E5] w-[250px] h-[200px] grid grid-cols-2 text-[#6457A6] p-4 bg-[#white]">
      <div className="flex flex-col">
        <h1>{brand}</h1>
        <p>{title}</p>
      </div>
      <div className="w-[100px] h-[280px]">
        <img src={images[0]} alt="" />
      </div>
    </Link>
  );
};

export default ProductsCard;
