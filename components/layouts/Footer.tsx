  import Image from "../common/Image";
import {asset} from "../../utils/functions";

interface IFooter {
  natis_logo: string;
  natis_logo_dark: string;
  cea_logo_dark: string;
  about_natis: string;
}

export default function Footer({natis_logo, natis_logo_dark, cea_logo_dark, about_natis}: IFooter) {
  return (
    <footer>
      <div className="bg-primary text-white">
        <div className={`container mx-auto py-10 grid grid-cols-12 justify-items-center`}>
          <div className={`col-span-3`}>
          </div>
          <div className={`col-span-3`}>
          </div>
          <div className={`col-span-3`}>
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
          <div>© Copyright 2022 NATI ESL, All Rights Reserved.</div>
          <div className={`flex h-full items-center gap-2`}>
            <Image className={`relative w-[163px] h-[38px]`} src={asset(natis_logo_dark)} />
            <Image className={`relative w-[75.49px] h-[26.26px]`} src={asset(cea_logo_dark)} />
          </div>
        </div>
      </div>
    </footer>
  )
}