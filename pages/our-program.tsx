import type { GetStaticPropsContext, NextPage } from "next";
import {asset, dd, GRK} from "../utils/functions";
import Page from "../models/Page";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../utils/constants";
import MainLayout from "../components/layouts/MainLayout";
import SectionWrapper from "../components/sections/common/SectionWrapper";
import Video from "../components/sections/home/AboutSection/Video";
import HTMLRenderer from "../components/common/HTMLRenderer";
import Link from "../components/common/Link";
import Image from "../components/common/Image";
import Overlay from "../components/common/Overlay";
import ContentWrapper from "../components/sections/HeroSection/ContentWrapper";
import {Accordion} from "../components/common/Accordion";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";

const InstituteCampus: NextPage = ({ content }: any) => {
  return (
    <MainLayout content={content}>
      <SectionWrapper className={`my-10`}>
        <h2>{content.program_title}</h2>
        <p>{content.program_subtitle}</p>
        <br />
        <Video videoCover={asset(content.program_video_cover)} videoUrl={content.program_video_url} />
        <br />
        <h2>{content.program_objectives_heading}</h2>
        <br />
        <p>{content.program_description}</p>
        <br />
        <HTMLRenderer className={`test-center blog-content`} content={content.program_table} />
      </SectionWrapper>
      <div className={`w-full text-white text-center flex flex-col items-center gap-10 my-5 relative`}>
        <Image objectFit={`cover`} src={asset(content.advertisement_image)} />
        <Overlay color={`bg-[#272F54]`}/>
        <ContentWrapper className={`m-auto`}>
          <h3>{content.advertisement_title_prefix}</h3>
          <h1 className={`font-normal uppercase`} style={{color: '#C3BC05'}}>{content.advertisement_title}</h1>
          <p className={`font-bold text-xl my-5`}>{content.advertisement_description}</p>
          <Link
            link={{url: content.advertisement_button_url, text: content.advertisement_button_text}}
            className="bg-secondary uppercase w-max px-4 py-[.5rem] text-sm rounded-md text-white font-medium duration-300 hover:opacity-70 mx-auto" />
        </ContentWrapper>
      </div>
      <SectionWrapper className={`my-10`}>
        {content.program_classes?.map((item: any, index: number) => {
            return (
              <Accordion key={GRK('accordion')} title={(active: boolean) => {
                return (
                  <h4 className={`text-start text-xl flex justify-between items-center`}>
                    <span>{item.title}</span>
                    <span className={`text-secondary bg-gray-100 p-3 rounded-full`}>
                      {active ? <AiOutlineMinus size={25} /> : <AiOutlinePlus size={25} />}
                    </span>
                  </h4>
                )
              }} content={() => {
                return (
                  <div className={`px-5 py-5`}>
                    <span className={`text-secondary text-xl font-bold`}>{item.hours}</span>
                    <p className={`py-5 text-sm text-gray-400`}>
                      {item.description}
                    </p>
                  </div>)
              }} />
            )
        })}
      </SectionWrapper>
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("our_program_page", locale || DEFAULT_LOCALE);
  return {
    props: {
      content: await page.data(),
    },
    revalidate: REVALIDATE_BUILD_TIME,
  };
}

export default InstituteCampus;
