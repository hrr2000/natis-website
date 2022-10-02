import Image from "../common/Image";
import {asset} from "../../utils/functions";

interface IFooter {
  natis_logo: string;
  about_natis: string;
}

export default function Footer({natis_logo, about_natis}: IFooter) {
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
          <div className={`col-span-3 text-center flex flex-col gap-5 items-center px-20 text-sm`}>
            <Image className={`relative w-[259.84px] h-[56.14px]`} src={asset(natis_logo)} />
            <p>
              {about_natis}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}