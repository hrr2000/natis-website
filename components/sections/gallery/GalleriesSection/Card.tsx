import React from "react";
import { asset, GRK, unComplete } from "../../../../utils/functions";
import Image from "../../../common/Image";
import Link from "next/link";

const Card = ({ image, title, imagesCount, slug }: any) => {
  return (
    <Link
      key={GRK(`member_card`)}
      href="/gallery/[slug]"
      as={`/gallery/${slug}`}
    >
      <a className={`min-h-[400px] lg:col-span-4 md:col-span-6 col-span-12 flex flex-col shadow-lg rounded-md overflow-hidden`}>
        <Image
          src={asset(image)}
          objectFit={`cover`}
          className={`relative h-4/6`}
          alt={""}
        />
        <div className={`p-10 py-4`}>
          <h3 className={`text-lg`}>{title}</h3>
          <p className={`text-sm`}>{title}</p>
          <span className={`text-secondary font-bold`}>
            {imagesCount + ' ' + (imagesCount === 1 ? 'image' : 'images')}
          </span>
        </div>
      </a>
    </Link>
  );
};

export default Card;
