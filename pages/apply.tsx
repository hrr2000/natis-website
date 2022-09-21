import type { GetServerSideProps, GetStaticPropsContext, NextPage } from "next";
// import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import { asset } from "../utils/functions";
import Page from "../models/Page";
import Head from "next/head";

import ApplicationSection from "../components/sections/apply/ApplicationSection";

const Apply: NextPage = ({ content, labels }: any) => {
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
      <ApplicationSection labels={labels} />
    </main>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const labels = {
    fullName: "full name",
    identifier: "Social Security Number/Driver License/Passport",
    isUsaCitizen: "are you a U.S. citizen ?",
    address: "address",
    citizenType: "do you have status as",
    email: "email",
    state: "state",
    city: "city",
    zipCode: "zip code",
    telephone: "telephone",
    programCourse: "program/course",
    courseNumber: "course number",
    totalClockHours: "total clock hours",
    enrollmentPeriodTerm: "enrollment period/term",
  };

  const page = new Page("home_page", locale || "en-US");
  const [content] = await Promise.all([await page.data()]);
  return {
    props: {
      content,
      labels,
    },
  };
}

export default Apply;
