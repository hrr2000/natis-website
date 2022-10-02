import type { GetStaticPropsContext, NextPage } from "next";
import HeroSection from "../../components/sections/HeroSection";
import { asset } from "../../utils/functions";
import Page from "../../models/Page";
import MainLayout from "../../components/layouts/MainLayout";

const Index: NextPage = ({ content }: any) => {
  return (
    <MainLayout content={content}>
      <HeroSection
        backgroundImage={asset(content.hero_image)}
        heading={content.hero_heading}
        description={content.hero_description}
        links={content.hero_links}
      />
    </MainLayout>
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
export default Index;
