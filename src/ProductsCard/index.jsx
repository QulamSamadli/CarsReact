import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ title, brand, images, id }) => {
  return (
    <Link
      to={`/products/${id}`}
      className=""
    >
      <div className="flex flex-col items-center border-2 rounded-md border-[#CDC7E5] w-[370px] m-4 p-4 h-[320px] text-[#6457A6] bg-[#white]">
        <div className="w-[200px] h-[2000px]" ><img src={images[0]} alt="" /></div>
        <div className=""><h2>{brand} {title}</h2></div>
      </div>
    </Link>
  );
};

export default ProductsCard;
