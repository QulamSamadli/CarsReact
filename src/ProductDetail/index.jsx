import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const { id } = useParams();
const _url = "https://dummyjson.com/products/";

const ProductDetail = () => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios.get(_url + id).then((data) => {
      setDetail(data);
    });
  }, []);
  return (
    <div>
      <h2>{data.description}</h2>
      <p>{data.price}</p>
      <img src={data.images[1]} alt="" />
    </div>
  );
};

export default ProductDetail;
