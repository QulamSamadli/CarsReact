import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const ProductDetail = () => {
    const { id } = useParams();
    const _url = "https://dummyjson.com/products/"+id;
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        axios.get(_url ).then((data) => {
            setDetail(data);
            console.log(data);
        });
  }, [id]);
  return (
    <div key={id}>
      <h2>{detail.description}</h2>
      <p>{detail.price}</p>
      <img src={detail.images[0]} alt="" />
    </div>
  );
};

export default ProductDetail;
