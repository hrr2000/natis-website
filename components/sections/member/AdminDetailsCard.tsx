import React from "react";
import Image from "../../common/Image";
import { AdminDetailsCard } from "../../../Types/common";

const AdminDetailsCard = ({
  adminName,
  adminSrcImage,
  adminRole,
}: AdminDetailsCard) => {
  return (
    <section className="grid-cols-custom grid-rows-custom grid flex-1 min-h-[80vh] ">
      <div className="col-1/3s row-1/3s bg-secondary"></div>
      <div className="col-2/-2 row-2/-2 bg-white z-20 flex flex-col ">
        <Image
          src={adminSrcImage}
          alt=""
          className="relative border-0 rounded-none  flex-shrink-0 h-[400px]"
          priority
          objectFit="cover"
        />
        <div className="flex gap-6 lg:gap-2 p-6 flex-col flex-1 justify-center ">
          <h4 className="p-0 lg:text-2xl text-secondary capitalize">
            {adminRole.name}
          </h4>
          <h2 className="p-0 lg:text-[3.125rem] leading-snug">{adminName}</h2>
          <p className="leading-snug font-bold text-lg">
            {adminRole.description}
          </p>
        </div>
      </div>
      <div className="col-1/3e row-1/3e bg-secondary"></div>
    </section>
  );
};

export default AdminDetailsCard;
