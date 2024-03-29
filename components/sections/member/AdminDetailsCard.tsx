import React from "react";
import Image from "../../common/Image";
import { AdminDetailsCard } from "../../../Types/common";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Link from "next/link";

const AdminDetailsCard = ({
  adminName,
  adminSrcImage,
  adminRole,
  adminSocial
}: AdminDetailsCard) => {
  return (
    <section className="grid-cols-custom grid-rows-custom md:grid flex-1 col-span-12 md:mb-10 lg:mb-0">
      <div className="col-1/3s row-1/3e bg-secondary hidden sm:block"></div>
      <div className="sm:col-2/-2 row-2/-2 col-span-5 bg-white z-20 flex flex-col md:flex-row">
        <Image
          src={adminSrcImage}
          alt=""
          className="relative border-0 rounded-none min-h-[490px] min-w-[100%] md:min-w-[490px]"
          objectFit="cover"
        />
        <div className="flex gap-4 lg:gap-2 p-6 flex-col flex-1 justify-center shadow-xl">
          <h4 className="p-0 lg:text-2xl text-secondary capitalize">
            {adminRole.name}
          </h4>
          <h2 className="p-0 lg:text-[3.125rem] leading-snug">{adminName}</h2>
          <p className="leading-[1.4] font-bold text-lg overflow-auto">
            {adminRole.description}
          </p>
          <div className={`text-primary flex py-5 gap-8`}>
            <Link href={adminSocial.instagram || '/'}>
              <a>
                <FaInstagram size={25} />
              </a>
            </Link>
            <Link href={adminSocial.twitter || '/'}>
              <a>
                <FaTwitter size={25} />
              </a>
            </Link>
            <Link href={adminSocial.facebook || '/'}>
              <a>
                <FaFacebookF size={25} />
              </a>
            </Link>
            <Link href={adminSocial.linkedin || '/'}>
              <a>
                <FaLinkedin size={25} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-1/3e row-1/3s bg-secondary hidden sm:block"></div>
    </section>
  );
};

export default AdminDetailsCard;
