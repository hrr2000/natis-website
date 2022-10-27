import Image from "../common/Image";
import {asset, GRK} from "../../utils/functions";
import {ILink} from "../../Types/common";
import Link from "../common/Link";
import {useRouter} from "next/router";
import LanguageButton from "../common/LanguagesButton";
import {ITopebar} from "./Topbar";

interface INavbar {
  natis_logo: string;
  cea_logo: string;
  links: ILink[];
  topbar: ITopebar;
}

export default function MobileNav({natis_logo, cea_logo, links, topbar}: INavbar) {
  const router = useRouter();
  return (
    <div className={`bg-primary py-4 xl:hidden h-screen -mt-1`}>
      <div className={`container mx-auto flex flex-col justify-between items-start`}>
        <nav className="flex overflow-visible relative z-50 gap-6 text-primary">
        </nav>
        <nav className="flex w-full flex-col overflow-visible relative z-50 gap-6 overflow-scroll mob-nav--height">
          {links?.map((link) => {
            return (
              <span key={GRK('nav_link')} className={`block`}>
                <Link className={`text-white py-2 hover:text-secondary duration-300 font-medium text-sm`} key={GRK('nav_link')} link={link} clickable={!!link?.items?.length}/>
              </span>
            )
          })}
          <LanguageButton className={`text-white py-2 hover:text-secondary duration-300 font-medium text-sm`} clickable />
          {topbar.links?.map((link) => {
            return (
              <span key={GRK('nav_link')} className={`block`}>
                <Link className={`text-white uppercase py-2 hover:text-secondary duration-300 font-medium text-sm`} key={GRK('nav_link')} link={link}/>
              </span>
            )
          })}
        </nav>
      </div>
    </div>
  )
}