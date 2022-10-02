import Image from "../common/Image";
import {asset, GRK} from "../../utils/functions";
import {ILink} from "../../Types/common";
import Link from "../common/Link";

interface INavbar {
  natis_logo: string;
  cea_logo: string;
  links: ILink[];
}

export default function Navbar({natis_logo, cea_logo, links}: INavbar) {
  return (
    <div className={`bg-primary py-4 max-h-[65px]`}>
      <div className={`container mx-auto flex justify-between items-start`}>
        <div className={`flex h-full items-center gap-2 w-96`}>
          <Image className={`relative w-[163px] h-[38px]`} src={asset(natis_logo)} />
          <Image className={`relative w-[75.49px] h-[26.26px]`} src={asset(cea_logo)} />
        </div>
        <nav className="flex overflow-visible relative z-50 gap-6">
          {links.map((link) => {
            return <span key={GRK('nav_link')} className={`block`}><Link absolute className={`text-white py-2 hover:text-secondary duration-300 font-medium text-sm`} key={GRK('nav_link')} link={link}/></span>
          })}
        </nav>
      </div>
    </div>
  )
}