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
      <SpecialCard />
      <SpecialCard reverse />
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
