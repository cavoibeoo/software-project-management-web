"use client";

import * as React from "react";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import Image from "next/image";

const ProductImg: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="product-details-image"
      >
        <SwiperSlide>
          <Image
            src="/images/products/product-details1.jpg"
            alt="product1"
            width={714}
            height={714}
            style={{ borderRadius: "7px" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/products/product-details2.jpg"
            alt="product2"
            width={714}
            height={714}
            style={{ borderRadius: "7px" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/products/product-details3.jpg"
            alt="product3"
            width={714}
            height={714}
            style={{ borderRadius: "7px" }}
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/products/product-details1.jpg"
            alt="product-thumbnail1"
            width={714}
            height={714}
            style={{ borderRadius: "7px", cursor: "pointer" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/products/product-details2.jpg"
            alt="product-thumbnail2"
            width={714}
            height={714}
            style={{ borderRadius: "7px", cursor: "pointer" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/products/product-details3.jpg"
            alt="product-thumbnail3"
            width={714}
            height={714}
            style={{ borderRadius: "7px", cursor: "pointer" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductImg;
