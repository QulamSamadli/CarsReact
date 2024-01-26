import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";

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
          <div className="flex flex-col items-center ">
            <h2>{detail.description}</h2>
            <p>{detail.price}</p>
          </div>
          <div className="flex flex-wrap gap-2  p-5 items-center">
            <Swiper className="mySwiper">
              <SwiperSlide>
                {" "}
                <img className="" src={detail?.images[0]} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src={detail?.images[1]} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src={detail?.images[2]} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src={detail?.images[3]} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src={detail?.images[4]} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img className="" src={detail?.images[5]} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
