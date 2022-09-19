import React, { useRef, useEffect } from "react";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  HashNavigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { asset, GRK } from "../../../../utils/functions";
import Image from "../../../common/Image";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, HashNavigation, Scrollbar, A11y]);

export default function AvatarSwiper({ data, setReview }: any) {
  const swiperRef = useRef(null);
  const toSlide = (idx: number, item: any) => {
    // @ts-ignore
    swiperRef.current?.swiper.slideTo(idx);
    setReview(item);
  };

  useEffect(() => {
    toSlide(data.length / 2, data[Math.floor(data.length / 2)]);
  }, []);

  if (!data?.length) return <></>;

  return (
    <div className={`max-w-[500px] mx-auto overflow-hidden py-5 pb-10`}>
      <Swiper
        // id="main"
        // @ts-ignore
        ref={swiperRef}
        tag="section"
        centeredSlides={true}
        slidesPerView={data?.length || 0}
        onSlideChange={(swiper) => {
          setReview(data[swiper.realIndex]);
        }}
        onSwiper={(swiper) => console.log("swiperoo", swiper)}
      >
        {data?.map((item: any, index: number) => (
          <SwiperSlide
            key={GRK("avatar")}
            onClick={() => toSlide(index, item)}
            style={{
              cursor: "pointer",
            }}
          >
            <div className={`w-[80px] h-[80px] flex justify-center me-0`}>
              <Image
                src={asset(item.photo)}
                className={`w-[80px] h-[80px] relative`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
