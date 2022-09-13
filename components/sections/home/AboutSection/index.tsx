import SectionWrapper from "../../common/SectionWrapper";
import HTMLRenderer from "../../../common/HTMLRenderer";
import Video from "./Video";
import SectionHeading from "../../common/SectionHeading";

interface IAboutSection {
  title: string;
  videoCover: string;
  videoUrl: string;
  goalsText: string;
  aboutText: string;
}

export default function AboutSection({title, videoCover, videoUrl, goalsText, aboutText}: IAboutSection) {
  return (
    <SectionWrapper>
      <header>
        <SectionHeading text={title} />
      </header>
      <article className={`grid lg:grid-cols-12 leading-8 my-5`}>
        <main className={`lg:col-span-8 lg:pe-10 lg:me-10 lg:border-e-2`}>
          <Video videoCover={videoCover} videoUrl={videoUrl} />
          <HTMLRenderer className={`mt-5`} content={goalsText} block />
        </main>
        <aside className={`lg:col-span-4 text-sm leading-6 mt-20 lg:mt-5`}>
          <HTMLRenderer content={aboutText} block />
        </aside>
      </article>
    </SectionWrapper>
  )
}