import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const ProductDetail = () => {
    const { id } = useParams();
    const _url = "https://dummyjson.com/products/";
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        axios.get(_url+id ).then(({data}) => {
            setDetail(data);
            console.log(data);
        });
  }, [id]);
  return (
    <div>
      <h2>{description}</h2>
      <p>{price}</p>
   
    </div>
  );
};

export default ProductDetail;
