 import {ILink} from "../../../../Types/common";
  import Image from "../../../common/Image";
  import {asset, GRK, unComplete} from "../../../../utils/functions";
  import ItemsSection from "../../common/ItemsSection";

  interface IMembersSection {
    title: string;
    headerLink: ILink;
    members: any[];
  }

  export default function MembersSection ({title, headerLink, members}: IMembersSection) {
    return (
      <ItemsSection title={title} headerLink={headerLink} items={members} template={({item}: { item: any }) => {
        return (
          <article
            key={GRK(`member_card`)}
            className={`min-h-[400px] lg:col-span-4 md:col-span-6 col-span-12 flex flex-col shadow-lg rounded-md overflow-hidden`}
          >
            <Image src={asset(item?.photo)} objectFit={`cover`} className={`relative h-1/2`} />
            <div className={`p-10`}>
              <h3 className={`text-lg`}>
                {item.name}
              </h3>
              <span className={`text-secondary text-[.8rem] text-bold`}>
                {unComplete(item.role, 30)}
              </span>
              <p className={`text-sm`}>
                {unComplete(item.bio, 60)}
              </p>
            </div>
          </article>
        )
      }} />
    )
  }