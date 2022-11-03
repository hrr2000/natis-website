import Link from "../../../common/Link";
import {MdPhoneInTalk} from "react-icons/md";
import {ILink} from "../../../../Types/common";

export default function PhoneList({list}: {list: ILink[]}) {
  return (
    <Link className={`mt-2 text-xs sm:text-sm`} link={{text: list?.[0].text || '', url: '#', items: list}} clickable icon={() => (
      <span className={`text-secondary me-2`} >
        <MdPhoneInTalk size={20} />
      </span>
    )}/>
  )
}