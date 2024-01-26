import React, { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";

import "swiper/css";
import style from "./Swiper.module.css";
import axios from "axios";
import { useParams } from "react-router";
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
            <Swiper
              
              autoplay={{ delay: 2000 }}
              modules={[Autoplay]}
              className={`${style.mySwiper}`}
            >
              <SwiperSlide className={` ${style.mySwiperSlide} `}>
                <img className="" src={detail?.images[0]} alt="" />
              </SwiperSlide>
              <SwiperSlide className={` ${style.mySwiperSlide} `}>
                <img className="" src={detail?.images[1]} alt="" />
              </SwiperSlide>
              <SwiperSlide className={` ${style.mySwiperSlide} `}>
                <img className="" src={detail?.images[2]} alt="" />
              </SwiperSlide>
              <SwiperSlide className={` ${style.mySwiperSlide} `}>
                <img className="" src={detail?.images[3]} alt="" />
              </SwiperSlide>
              <SwiperSlide className={` ${style.mySwiperSlide} `}>
                <img className="" src={detail?.images[4]} alt="" />
              </SwiperSlide>
              <SwiperSlide className={` ${style.mySwiperSlide} `}>
                
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
