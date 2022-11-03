import Image from "../common/Image";
import {asset, GRK} from "../../utils/functions";
import {ILink} from "../../Types/common";
import Link from "../common/Link";
import {useRouter} from "next/router";
import LanguageButton from "../common/LanguagesButton";
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {CEA_URL} from "../../utils/constants";

interface INavbar {
  natis_logo: string;
  cea_logo: string;
  links: ILink[];
  toggleMobileNav: Function;
  isMobileNavOpen: boolean;
  searchState?: {
    state: boolean;
    setState: Function;
  }
}

export default function Navbar({natis_logo, cea_logo, links, toggleMobileNav, isMobileNavOpen, searchState}: INavbar) {
  const router = useRouter();
  return (
    <div className={`bg-primary py-4 max-h-[65px] shadow-lg shadow-[rgba(0,0,0,0.2)]`}>
      <div className={`container mx-auto flex gap-8 justify-between items-center xl:items-start`}>
        <div className={`flex h-full items-center gap-2 w-96 cursor-pointer`}>
          <Image
            className={`relative w-[120px] h-[27.98px] sm:w-[163px] sm:h-[38px]`}
            src={asset(natis_logo)}
            onClick={() => router.replace('/')} />
          <Image
            className={`relative w-[60px] h-[20.87px] sm:w-[75.49px] sm:h-[26.26px]`}
            src={asset(cea_logo)}
            onClick={() => router.replace(CEA_URL)} />
        </div>
        <div className={`flex items-center gap-4`}>
          <button className={`text-white flex  xl:hidden`} onClick={() => searchState?.setState(true)}>
            <AiOutlineSearch size={19} />
          </button>
          <button className={`text-white h-full flex items-center xl:hidden`} onClick={() => toggleMobileNav()}>
            {!isMobileNavOpen ? (
              <AiOutlineMenu size={25} />
            ) : (
              <AiOutlineClose size={25} />
            )}
          </button>
        </div>
        <nav className="flex overflow-visible relative z-50 gap-6 hidden xl:flex">
          <button className={`text-white flex mt-2`} style={{
            marginInlineEnd: '-10px',
          }} onClick={() => searchState?.setState(true)}>
            <AiOutlineSearch size={19} />
          </button>
          {links?.map((link) => {
            return (
              <span key={GRK('nav_link')} className={`block`}>
                <Link absolute className={`text-white py-2 hover:text-secondary duration-300 font-medium text-sm`} key={GRK('nav_link')} link={link}/>
              </span>
            )
          })}
          <LanguageButton absolute className={`text-white py-2 hover:text-secondary duration-300 font-medium text-sm`} />
        </nav>
      </div>
    </div>
  )
}