import Image from "../common/Image";
import {asset, GRK} from "../../utils/functions";
import {ILink} from "../../Types/common";
import Link from "../common/Link";

interface ITopebar {
  links: ILink[];
  apply_button_text: string;
}

export default function Topbar({links, apply_button_text}: ITopebar) {
  return (
    <div className={`bg-topbar py-4 max-h-[65px]`}>
      <div className={`container mx-auto flex justify-between items-start`}>
        <nav className="flex overflow-visible relative z-50 gap-6 text-primary">
          {links?.map((link) => {
            return <span key={GRK('nav_link')} className={`block`}><Link absolute className={`text-primary uppercase opacity-50 py-2 hover:text-secondary duration-300 font-medium text-sm`} key={GRK('nav_link')} link={link}/></span>
          })}
        </nav>
        <div>
          <Link
            link={{url: '/apply', text: apply_button_text}}
            className="bg-secondary uppercase w-max px-4 py-[.5rem] text-sm rounded-md text-white font-semibold duration-300 hover:opacity-70" />
        </div>
      </div>
    </div>
  )
}