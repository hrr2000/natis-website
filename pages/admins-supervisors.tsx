import type { GetServerSideProps, GetStaticPropsContext, NextPage } from "next";
// import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import { asset } from "../utils/functions";
import Page from "../models/Page";
import Head from "next/head";

const AdminsSupervisors: NextPage = ({ content }: any) => {
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
    </main>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("home_page", locale || "en-US");

  return {
    props: {
      content: await page.data(),
    },
  };
}

export default AdminsSupervisors;
