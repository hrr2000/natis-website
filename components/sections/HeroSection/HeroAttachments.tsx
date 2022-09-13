import AttachmentLink from "./AttachmentLink";
import {GRK} from "../../../utils/functions";
import {ILink} from "../../../Types/common";

export default function HeroAttachments({links}: {links: ILink[]}) {
  if(!links?.[0]) return <></>;
  return (
    <div className={`flex flex-wrap`}>
      {links.map(link => <AttachmentLink key={GRK(`hero_attachment_link`)} link={link} />)}
    </div>
  )
}