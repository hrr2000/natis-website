import ItemsSection from "../../common/ItemsSection";
import {asset, GRK, unComplete, relative_date} from "../../../../utils/functions";
import Image from "../../../common/Image";
import {ILink} from "../../../../Types/common";
import RelativeDate from "../../../common/RelativeDate";
import Link from "next/link";

interface INewsSection {
  title?: string;
  headerLink?: ILink;
  news: any[];
}

export default function NewsSection({title, headerLink, news}: INewsSection) {
  return (
    <ItemsSection title={title} headerLink={headerLink} items={news} template={({item}: { item: any }) => {
      return (
        <Link
          key={GRK(`member_card`)}
          href="/news/[slug]"
          as={`/news/${item.slug}`}
        >
          <a
            key={GRK(`member_card`)}
            className={`flex justify-center lg:col-span-4 md:col-span-6 col-span-12`}
          >
            <div className={`min-h-[360px] lg:max-w-[360px] w-full flex flex-col shadow-lg rounded-md overflow-hidden`}>
              <Image src={asset(item?.image)} objectFit={`cover`} className={`relative min-h-[200px]`} />
              <div className={`p-5 lg:p-10`}>
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
          </a>
        </Link>
      )
    }} />
  );
}