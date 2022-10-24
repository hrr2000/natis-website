import type { GetStaticPropsContext, NextPage } from "next";
import { asset } from "../utils/functions";
import Page from "../models/Page";
import SpecialCard from "../components/sections/common/SpecialCard";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../utils/constants";
import GoalsSection from "../components/sections/about/GoalsSection";
import MainLayout from "../components/layouts/MainLayout";
import AdminsSection from "../components/sections/about/AdminsSection";

const About: NextPage = ({ content, goals_and_objectives, committee_members }: any) => {
  return (
    <MainLayout content={content}>
      <div className={`w-full xl:h-[200px]`} />
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
        title={content.goals_section_title}
        description={content.goals_section_description}
        items={goals_and_objectives || []}
      />
      <AdminsSection
        title={content.admins_section_title}
        description={content.admins_section_description}
        items={committee_members || []}
      />
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("about_page", locale || DEFAULT_LOCALE);
  const [content, committee_members, goals_and_objectives] = await Promise.all([
    page.data(),
    page.getItems(`committee_members`),
    page.getItems(`goals_and_objectives`)
  ]);
  return {
    props: {
      content,
      committee_members,
      goals_and_objectives
    },
    revalidate: REVALIDATE_BUILD_TIME,
  };
}

export default About;
