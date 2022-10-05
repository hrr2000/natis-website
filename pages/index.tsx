import type { GetServerSideProps, GetStaticPropsContext, NextPage } from "next";
import Page from "../models/Page";
import MainLayout from "../components/layouts/MainLayout";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/home/AboutSection";
import MembersSection from "../components/sections/home/MembersSection";
import NewsSection from "../components/sections/home/NewsSection";
import TestimonialsSection from "../components/sections/home/TestimonialsSection";
import { asset } from "../utils/functions";
import {DEFAULT_LOCALE} from "../utils/constants";

const Home: NextPage = ({
  content,
  committee_members,
  news,
  testimonials,
}: any) => {
  return (
    <MainLayout content={content}>
      <AboutSection
        title={content.about_section_title}
        videoCover={asset(content.about_section_video_cover)}
        videoUrl={content.about_section_video_Url}
        goalsText={content.goals_mission_text}
        aboutText={content.about_nati}
      />
      <MembersSection
        title={content.members_section_title}
        headerLink={{
          text: content.members_section_view_all_text,
          url: "/admins-supervisors",
        }}
        members={committee_members.slice(-3)}
      />
      <TestimonialsSection
        title={content.testimonials_section_title}
        testimonials={testimonials}
      />
      <NewsSection
        title={content.new_section_title}
        headerLink={{ text: content.new_section_view_all_text, url: "/" }}
        news={news.slice(-3)}
      />
    </MainLayout>
  );
};

export async function getStaticProps({locale}: GetStaticPropsContext) {
  const page = new Page('home_page', locale || DEFAULT_LOCALE);
  const [content, committee_members, news, testimonials] = await Promise.all([
    page.data(),
    page.getItems(`committee_members`),
    page.getItems(`news`),
    page.getItems(`testimonials`),
  ]);
  return {
    props: {
      content,
      committee_members,
      news,
      testimonials,
    },
  }
}

export default Home;
