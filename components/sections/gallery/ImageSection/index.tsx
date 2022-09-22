import SectionWrapper from "../../common/SectionWrapper";
import SectionHeading from "../../common/SectionHeading";
import Image from "../../../common/Image";
import Modal from "../../../common/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { GRK } from "../../../../utils/functions";
import { useState } from "react";
import { useOutSideClick } from "../../../../hooks";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSection({
  title,
  urls,
}: {
  title?: string;
  urls: string[];
}) {
  const [modal, setModal] = useState({ isVisible: 0, pressedIndex: 0 });

  const handleClick = (pressedIndex: number) => {
    if (!modal.isVisible) {
      setModal({ isVisible: 1, pressedIndex });
    }
  };
  const ref = useOutSideClick(() =>
    setModal({ isVisible: 0, pressedIndex: 0 })
  );

  return (
    <>
      <SectionWrapper style={{ marginTop: 0 }}>
        <header>{title && <SectionHeading text={title || ""} />}</header>
        {/* create image component */}
        <ul className=" flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-3 list-none p-0 ">
          {urls?.map((url, index) => (
            <li
              className="rounded-md overflow-hidden cursor-pointer "
              key={GRK(url)}
              onClick={() => handleClick(index)}
            >
              <Image
                src={url}
                alt=""
                className="relative h-52 border-0 rounded-none hover:scale-125 transition-all"
                priority
                objectFit="cover"
              />
            </li>
          ))}
        </ul>
        {/* create swiper component */}
        <Modal modalState={modal.isVisible} modalRef={ref}>
          {() => (
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation
              className="flex rounded-md h-[800px] w-full"
              initialSlide={modal.pressedIndex}
            >
              {urls?.map((url) => (
                <SwiperSlide key={GRK(url)}>
                  <Image
                    src={url}
                    alt=""
                    className="relative h-full border-0 rounded-none"
                    priority
                    objectFit="cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Modal>
      </SectionWrapper>
    </>
  );
}
