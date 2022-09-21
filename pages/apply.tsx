import type { GetServerSideProps, GetStaticPropsContext, NextPage } from "next";
// import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/HeroSection";
import { asset, dd } from "../utils/functions";
import Page from "../models/Page";
import Head from "next/head";

import ApplicationSection from "../components/sections/apply/ApplicationSection";
import { DEFAULT_LOCALE } from "../utils/constants";

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
      />
      <ApplicationSection title={content.form_title} labels={labels} />
    </main>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("application_page", locale || DEFAULT_LOCALE);
  const [content] = await Promise.all([page.data()]);

  const labels = {
    fullName: content.full_name_label,
    identifier: content.user_identity_label,
    isUsaCitizen: content.is_us_citizen_label,
    address: content.address_label,
    citizenType: content.citizen_type_label,
    email: content.email_label,
    state: content.state_label,
    city: content.city_label,
    zipCode: content.zip_code_label,
    telephone: content.telephone_label,
    programCourse: content.program_course_label,
    courseNumber: content.course_number_label,
    totalClockHours: content.total_clock_hours_label,
    enrollmentPeriodTerm: content.enrollment_period_term_label,
  };

  dd(content);
  return {
    props: {
      content,
      labels,
    },
  };
}

export default Apply;
