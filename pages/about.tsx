import type { GetStaticPropsContext, NextPage } from "next";
import { asset } from "../utils/functions";
import Page from "../models/Page";
import SpecialCard from "../components/sections/common/SpecialCard";
import {DEFAULT_LOCALE} from "../utils/constants";
import GoalsSection from "../components/sections/about/GoalsSection";
import MainLayout from "../components/layouts/MainLayout";

const About: NextPage = ({ content }: any) => {
  return (
    <MainLayout content={content}>
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
      <GoalsSection
        title={`Goals and Objectives`}
        description={`North America Technical Institute ESL (NATI ESL) is committed to the following institutional goals and objectives`}
      />
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("about_page", locale || DEFAULT_LOCALE);
  return {
    props: {
      content: await page.data(),
    },
  };
}

export default About;
