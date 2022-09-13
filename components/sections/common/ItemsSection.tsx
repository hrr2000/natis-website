import {ILink} from "../../../Types/common";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import Link from "../../common/Link";
import {BsArrowRight} from "react-icons/bs";
import {asset, GRK, unComplete} from "../../../utils/functions";
import Image from "../../common/Image";

interface IItemsSection {
  title: string;
  headerLink: ILink;
  items: any[];
  template: Function;
}

export default function ItemsSection({title, headerLink, items, template}: IItemsSection) {
  return (
    <SectionWrapper>
      <header className={`flex flex-wrap justify-between items-center`}>
        <SectionHeading text={title} />
        <Link link={headerLink} className={`text-secondary uppercase font-bold flex items-center text-sm`}>
          <span className={`ms-3`}>
            <BsArrowRight />
          </span>
        </Link>
      </header>
      <main className={`my-10 w-full grid grid-cols-12 gap-5`}>
        {items?.map((item) => {
          return (
            template({key: GRK('item'), item})
          )
        })}
      </main>
    </SectionWrapper>
  )
}