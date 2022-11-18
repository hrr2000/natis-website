import Image from "../common/Image";
import {asset, GRK} from "../../utils/functions";
import {ILink} from "../../Types/common";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import LanguageButton from "../common/LanguagesButton";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {CEA_URL} from "../../utils/constants";
import {useRouter} from "next/router";

interface IFooter {
  natis_logo: string;
  natis_logo_dark: string;
  cea_logo_dark: string;
  about_natis: string;
  content: any;
}

export default function Footer({natis_logo, natis_logo_dark, cea_logo_dark, about_natis, content}: IFooter) {

  const router = useRouter();

  return (
    <footer>
      <div className="bg-primary text-light">
          <div className={`container mx-auto py-10 flex flex-col md:flex-row flex-wrap justify-between lg:grid lg:grid-cols-12 justify-items-center`}>
          <div className={`col-span-3`}>
            <h4 className={`py-0 pt-5 lg:pt-0`}>{content.home_column_title}</h4>
            <ul className={`list-none my-0 p-0`}>
              {content.home_column_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-1`}>
                  <Link href={link.url || ''}>
                    <a className={`opacity-80`}>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`col-span-3`}>
            <h4 className={`py-0 pt-5 lg:pt-0`}>{content.about_column_title}</h4>
            <ul className={`list-none my-0 p-0`}>
              {content.about_column_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-1`}>
                  <Link href={link.url || ''}>
                    <a className={`opacity-80`}>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className={`py-0 pt-5 lg:pt-0`}>{content.student_column_title}</h4>
            <ul className={`list-none my-0 p-0`}>
              {content.student_column_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-1`}>
                  <Link href={link.url || ''}>
                    <a className={`opacity-80`}>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`col-span-3`}>

            <h4 className={`py-0 pt-5 lg:pt-0`}>{content.email_title}</h4>
            <ul className={`list-none my-0 p-0`}>
              {content.email_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-1`}>
                  <Link href={link.url || ''}>
                    <a className={`opacity-80`}>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className={`py-0 pt-5 lg:pt-0`}>{content.phone_title}</h4>
            <ul className={`list-none my-0 p-0`}>
              {content.phone_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-1`}>
                  <Link href={link.url || ''}>
                    <a className={`opacity-80`}>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className={`py-0 pt-5 lg:pt-0`}>{content.fax_title}</h4>
            <ul className={`list-none my-0 p-0`}>
              {content.fax_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-1`}>
                  <Link href={link.url || ''}>
                    <a className={`opacity-80`}>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`col-span-3 flex-col gap-5 text-md font-medium pt-10 lg:pt-0 hidden lg:flex`}>
            <Image className={`relative w-[259.84px] h-[56.14px]`} style={{
              marginInlineStart: '-9px',
            }} src={asset(natis_logo)} />
            <p className={`text-left text-justify lg:w-[259.84px]`}>
              {about_natis}
            </p>
          </div>
        </div>
      </div>
      <div className={`bg-secondary`}>
        <div className="container mx-auto flex pt-4 lg:pt-0 lg:gap-5 justify-center flex-col lg:flex-row lg:justify-between items-center text-white">
          <div className={`h-full items-center gap-2 hidden lg:flex`}>
            <Image className={`relative w-[163px] h-[38px] cursor-pointer`} src={asset(natis_logo_dark)} onClick={() => router.replace('/')} />
            <Image className={`relative w-[75.49px] h-[26.26px] cursor-pointer`} src={asset(cea_logo_dark)} onClick={() => router.replace(CEA_URL)} />
          </div>
          <div>{content.copy_rights}</div>
          <div className={`flex h-full items-center gap-2`}>

            <div className={`text-light flex py-5 gap-4 me-5`}>
              <Link href={content.instagram || '/'} aria-label={`natis-instagram`}>
                <a>
                  <FaInstagram size={20} />
                </a>
              </Link>
              <Link href={content.twitter || '/'} aria-label={`natis-twitter`}>
                <a>
                  <FaTwitter size={20} />
                </a>
              </Link>
              <Link href={content.facebook || '/'} aria-label={`natis-facebook`}>
                <a>
                  <FaFacebookF size={20} />
                </a>
              </Link>
              <Link href={content.linkedin || '/'} aria-label={`natis-linkedin`}>
                <a>
                  <FaLinkedin size={20} />
                </a>
              </Link>
            </div>
            <LanguageButton className={`text-white py-2 duration-300 font-medium text-sm`} disabled />
          </div>
        </div>
      </div>
    </footer>
  )
}

