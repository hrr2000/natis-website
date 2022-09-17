import type { GetStaticPropsContext, NextPage } from "next";
// import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import { asset } from "../utils/functions";
import Page from "../models/Page";
import Head from "next/head";

const About: NextPage = ({ content }: any) => {
  return (
    <main className={`w-full`}>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.hero_description} />
      </Head>
      {/*<Navbar/>*/}
      <HeroSection
        backgroundImage={asset(content.hero_image)}
        heading={content.hero_heading}
        description={content.hero_description}
        links={content.hero_links}
      />
      <div className="flex min-h-screen max-w-7xl items-center justify-center ">
        <div className="flex w-full justify-center bg-gray-50 py-6 sm:py-12 ">
          <div className="h-[400px] basis-2/12 bg-red-300"></div>
          <div className="ltr:-ml-1/12 rtl:-mr-1/12  -mt-24 h-[400px] basis-5/12 bg-red-700"></div>
          <div className="flex ltr:-ml-2/12 rtl:-mr-2/12 basis-6/12 flex-col justify-center bg-red-400 px-8 py-6">
            <header className="mb-8 flex flex-col gap-3 font-semibold capitalize">
              <h4 className="text-2xl">statement of ownership</h4>
              <h2 className="text-4xl">about nati esl</h2>
            </header>
            <main>
              <p className="max-w-[70ch]">
                North America Technical Institute ESL (NATI ESL) Institute Was
                Founded In 2022 And Is Privately Owned By Dr. Abed Sami Almala,
                A Veteran Educator Who Has Been Serving In Educational
                Institutions Since 1995. He Started His Career As A High
                Institute Teacher And Now Is A Higher Education Veteran. The
                Intensive English Program At The NATI ESL Is Accredited By The
                Commission On English Language Program Accreditation (CEA).
              </p>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("home_page", locale || "en-US");
  return {
    props: {
      content: await page.data(),
      committee_members: await page.getItems(`committee_members`),
      news: await page.getItems(`news`),
      testimonials: await page.getItems(`testimonials`),
    },
  };
}

export default About;
