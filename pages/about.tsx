import type { GetStaticPropsContext, NextPage } from "next";
// import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import { asset } from "../utils/functions";
import Page from "../models/Page";
import Head from "next/head";
import SpecialCard from "../components/sections/common/SpecialCard";

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
      <SpecialCard
        image={asset(content.about_image)}
        smallTitle={content.about_small_title}
        bigTitle={content.about_big_title}
        description={content.about_description}
      />
      <SpecialCard
        image={asset(content.mission_image)}
        smallTitle={content.mission_small_title}
        bigTitle={content.mission_big_title}
        description={content.mission_description}
        reverse />
    </main>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("about_page", locale || "en-US");
  console.log(await page.data());
  return {
    props: {
      content: await page.data(),
    },
  };
}

export default About;
