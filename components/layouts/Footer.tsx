import Image from "../common/Image";
import {asset, GRK} from "../../utils/functions";
import {ILink} from "../../Types/common";
import Link from "next/link";
import {useEffect, useState} from "react";

interface IFooter {
  natis_logo: string;
  natis_logo_dark: string;
  cea_logo_dark: string;
  about_natis: string;
  content: any;
}

export default function Footer({natis_logo, natis_logo_dark, cea_logo_dark, about_natis, content}: IFooter) {
  return (
    <footer>
      <div className="bg-primary text-light">
        <div className={`container mx-auto py-10 grid grid-cols-12 justify-items-center`}>
          <div className={`col-span-3`}>
            <h4>{content.home_column_title}</h4>
            <ul className={`list-none p-0`}>
              {content.home_column_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-4`}>
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
            <h4>{content.about_column_title}</h4>
            <ul className={`list-none p-0`}>
              {content.about_column_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-4`}>
                  <Link href={link.url || ''}>
                    <a className={`opacity-80`}>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <h4>{content.student_column_title}</h4>
            <ul className={`list-none p-0`}>
              {content.student_column_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-4`}>
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

            <h4>{content.email_title}</h4>
            <ul className={`list-none p-0`}>
              {content.email_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-4`}>
                  <Link href={link.url || ''}>
                    <a className={`opacity-80`}>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <h4>{content.phone_title}</h4>
            <ul className={`list-none p-0`}>
              {content.phone_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-2`}>
                  <Link href={link.url || ''}>
                    <a className={`opacity-80`}>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <h4>{content.fax_title}</h4>
            <ul className={`list-none p-0`}>
              {content.fax_list?.map((link: ILink, index: number) => (
                <li key={GRK('footer_link')} className={`my-4`}>
                  <Link href={link.url || ''}>
                    <a className={`opacity-80`}>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`col-span-3 text-center flex flex-col gap-5 items-center px-[32px] text-md font-medium`}>
            <Image className={`relative w-[259.84px] h-[56.14px]`} src={asset(natis_logo)} />
            <p>
              {about_natis}
            </p>
          </div>
        </div>
      </div>
      <div className={`bg-secondary`}>
        <div className="container mx-auto py-4 flex justify-between items-center text-white">
          <div className={`flex h-full items-center gap-2`}>
            <Image className={`relative w-[163px] h-[38px]`} src={asset(natis_logo_dark)} />
            <Image className={`relative w-[75.49px] h-[26.26px]`} src={asset(cea_logo_dark)} />
          </div>
          <div>{content.copy_rights}</div>
          <div className={`flex h-full items-center gap-2`}>
            <Image className={`relative w-[163px] h-[38px]`} src={asset(natis_logo_dark)} />
            <Image className={`relative w-[75.49px] h-[26.26px]`} src={asset(cea_logo_dark)} />
          </div>
        </div>
      </div>
    </footer>
  )
}

