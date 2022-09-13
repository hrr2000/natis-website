import HTMLRenderer from "../../common/HTMLRenderer";
import Link from "../../common/Link";
import {ILink} from "../../../Types/common";

export default function AttachmentLink({link}: {link: ILink}) {
  return (
    <span className={`flex me-10 justify-center items-center mb-5 font-bold`}>
      <span className={`me-3`}>
        <HTMLRenderer content={link?.icon_svg || ''} />
      </span>
      <span>
        <Link link={link} />
      </span>
    </span>
  )
}