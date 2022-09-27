import SectionWrapper from "../../common/SectionWrapper";

interface IGoalsSection {
  title: string;
  description: string;
}

export default function GoalsSection({title, description}: IGoalsSection) {
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
      <main>

      </main>
    </SectionWrapper>
  )
}