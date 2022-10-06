import SectionWrapper from "../../common/SectionWrapper";
import GoalsCard from "./GoalsCard";
import {asset, GRK} from "../../../../utils/functions";

interface IGoalsSection {
  title: string;
  description: string;
  items: {
    icon_svg: string;
    image: string;
    title: string;
    description: string;
  }[];
}

export default function GoalsSection({title, description, items}: IGoalsSection) {
  return (
    <SectionWrapper>
      <header className={`text-center`}>
        <h2 className={`text-secondary text-6xl pb-5`}>
          {title}
        </h2>
        <p className={`max-w-[500px] mx-auto`}>
          {description}
        </p>
      </header>
      <main className={`flex justify-center flex-wrap`}>
        {items?.map((item) => {
          return (
            <GoalsCard
              key={GRK('goals_item')}
              icon={item.icon_svg}
              image={asset(item.image)}
              title={item.title}
              description={item.description}
            />
          )
        })}
      </main>
    </SectionWrapper>
  )
}