import type {GetServerSideProps, GetStaticPropsContext, NextPage} from 'next'
// import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import {asset} from "../utils/functions";
import Page from "../models/Page";
import AboutSection from "../components/sections/home/AboutSection";
import Head from "next/head";
import MembersSection from "../components/sections/home/MembersSection";
import NewsSection from "../components/sections/home/NewsSection";

const Home: NextPage = ({content, committee_members, news}: any) => {
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
      <NewsSection
        title={content.new_section_title}
        headerLink={{text: content.new_section_view_all_text, url: "/"}}
        news={news}
      />
    </main>
  )
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  const page = new Page('home_page', locale || 'en-US');
  console.log(await page.getItems(`news`));
  return {
    props: {
      content: await page.data(),
      committee_members: await page.getItems(`committee_members`),
      news: await page.getItems(`news`),
    }
  }
}

export default Home;
