import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const _url = " https://dummyjson.com/products/";

const ProductDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios.get(_url + id).then(({ data }) => {
      setDetail(data);
    });
  }, [id]);
  return (
    <>
      {detail.id && (
        <div key={id}>
          <h2>{detail.description}</h2>
          <p>{detail.price}</p>
          <img src={detail?.images[0]} alt="" />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
