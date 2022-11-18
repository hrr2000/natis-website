import React from "react";
import { asset, GRK, unComplete } from "../../utils/functions";
import Image from "./Image";
import Link from "next/link";

const Card = ({ photo, name, bio, role, slug }: any) => {
  return (
    <Link
      key={GRK(`member_card`)}
      href="/admins-supervisors/[slug]"
      as={`/admins-supervisors/${slug}`}
    >
      <a className={`min-h-[600px] lg:col-span-4 md:col-span-6 col-span-12 flex flex-col shadow-lg rounded-md overflow-hidden`}>
        <Image
          src={asset(photo)}
          objectFit={`cover`}
          className={`relative h-[500px]`}
          alt={""}
        />
        <div className={`p-5 lg:p-10`}>
          <h3 className={`text-lg`}>{name}</h3>
          <span className={`text-secondary text-[.8rem] text-bold`}>
          {unComplete(role, 30)}
        </span>
          <p className={`text-sm`}>{unComplete(bio, 60)}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
