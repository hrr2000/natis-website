import React, { useRef, useEffect } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { asset, GRK } from "../../../../utils/functions";
import Image from "../../../common/Image";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function AvatarSwiper({ data, setReview }: any) {
  const swiperRef = useRef(null);
  const toSlide = (idx: number, item: any) => {
    // @ts-ignore
    swiperRef.current?.swiper.slideTo(idx);
    setReview(item);
  };

  useEffect(() => {
    toSlide(data.length / 2, data[Math.floor(data.length / 2)]);
    //eslint-disable-next-line
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
        style={{ overflow: "visible !important" }}
      >
        {data?.map((item: any, index: number) => (
          <SwiperSlide
            key={GRK("avatar")}
            onClick={() => toSlide(index, item)}
            style={{
              cursor: "pointer",
            }}
          >
            {({ isActive }) => (
              <div
                className={`w-[80px] h-[80px] flex justify-center me-0 ${
                  isActive && "scale-125 transition-all"
                }`}
              >
                <Image
                  src={asset(item.photo)}
                  className={`w-[80px] h-[80px] relative overflow-hidden rounded-[50%] ${
                    isActive && "border-[3px] border-[#c3bc05]"
                  }`}
                  alt="user image"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
