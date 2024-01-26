import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ title, brand, images, id,price,category }) => {
  return (
    <Link
      to={`/products/${id}`}
      className=""
    >
      <div className="flex flex-col items-center border-2 rounded-md border-[#CDC7E5] w-[370px] m-4 p-4 h-[350px] text-[#6457A6] bg-[#white]">
        <div className="w-[150px] h-[200px]" ><img className=" object-contain w-[100%] h-[100%]" src={images[0]} alt="" /></div>
        <div className="text-center "><h2>{brand} {title}</h2></div>
        <div className="text-center text-[gold]  "><p>{category}</p></div>
        <div className="text-center text-[gold] text-[32px] "><p>{price}$</p></div>
      </div>
    </Link>
  );
};

export default ProductsCard;
