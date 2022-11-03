import {BsEnvelopeFill} from "react-icons/bs";
import {ILink} from "../../../../Types/common";

export default function({list}: {list: ILink[]}) {
  return (
    <span className={`gap-2 items-center mt-2 md:flex hidden`}>
      <span className={`text-secondary`} >
        <BsEnvelopeFill size={18} />
      </span>
      <span className={`text-sm`}>
        {list?.[0].text}
      </span>
    </span>
  );
}