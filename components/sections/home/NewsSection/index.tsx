import ItemsSection from "../../common/ItemsSection";
import {asset, GRK, unComplete, relative_date} from "../../../../utils/functions";
import Image from "../../../common/Image";
import {ILink} from "../../../../Types/common";
import RelativeDate from "../../../common/RelativeDate";

interface INewsSection {
  title: string;
  headerLink: ILink;
  news: any[];
}

export default function NewsSection({title, headerLink, news}: INewsSection) {
  return (
    <ItemsSection title={title} headerLink={headerLink} items={news} template={({item}: { item: any }) => {
      return (
        <article
          key={GRK(`member_card`)}
          className={`flex justify-center lg:col-span-4 md:col-span-6 col-span-12`}
        >
          <div className={`min-h-[400px] lg:max-w-[360px] w-full flex flex-col shadow-lg rounded-md overflow-hidden`}>
            <Image src={asset(item?.image)} objectFit={`cover`} className={`relative min-h-[200px]`} />
            <div className={`p-10`}>
              <h3 className={`text-lg`}>
                {item.title}
              </h3>
              <p className={`text-sm`}>
                {unComplete(item.short_description, 60)}
              </p>
              <span className={`text-secondary text-[1rem] font-medium my-2 block`}>
                <RelativeDate date_string={item.date_created} icon/>
              </span>
            </div>
          </div>
        </article>
      )
    }} />
  );
}