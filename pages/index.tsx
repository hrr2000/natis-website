import type {GetServerSideProps, GetStaticPropsContext, NextPage} from 'next'
// import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import {asset} from "../utils/functions";
import Page from "../models/Page";
import AboutSection from "../components/sections/home/AboutSection";
import Head from "next/head";
import MembersSection from "../components/sections/home/MembersSection";
import NewsSection from "../components/sections/home/NewsSection";
import TestimonialsSection from "../components/sections/home/TestimonialsSection";
import {DEFAULT_LOCALE} from "../utils/constants";

const Home: NextPage = ({content, committee_members, news, testimonials}: any) => {
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
      <AboutSection
        title={content.about_section_title}
        videoCover={asset(content.about_section_video_cover)}
        videoUrl={content.about_section_video_Url}
        goalsText={content.goals_mission_text}
        aboutText={content.about_nati}
      />
      <MembersSection
        title={content.members_section_title}
        headerLink={{text: content.members_section_view_all_text, url: "/"}}
        members={committee_members}
      />
      <TestimonialsSection
        title={content.testimonials_section_title}
        testimonials={testimonials}
      />
      <NewsSection
        title={content.new_section_title}
        headerLink={{text: content.new_section_view_all_text, url: "/"}}
        news={news}
      />
    </main>
  )
}

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
