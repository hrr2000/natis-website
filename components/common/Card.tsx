import React from "react";
import { asset, GRK, unComplete } from "../../utils/functions";
import Image from "./Image";

const Card = ({ photo, name, bio, role, clickable, onClick }: any) => {
  return (
    <article
      key={GRK(`member_card`)}
      className={`min-h-[400px] lg:col-span-4 md:col-span-6 col-span-12 flex flex-col shadow-lg rounded-md overflow-hidden ${
        clickable && "cursor-pointer"
      }`}
      onClick={clickable && onClick}
    >
      <Image
        src={asset(photo)}
        objectFit={`cover`}
        className={`relative h-1/2`}
        alt={""}
      />
      <div className={`p-10`}>
        <h3 className={`text-lg`}>{name}</h3>
        <span className={`text-secondary text-[.8rem] text-bold`}>
          {unComplete(role, 30)}
        </span>
        <p className={`text-sm`}>{unComplete(bio, 60)}</p>
      </div>
    </article>
  );
};

export default Card;
