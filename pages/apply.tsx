import type { GetStaticPropsContext, NextPage } from "next";
import Page from "../models/Page";

import ApplicationSection from "../components/sections/apply/ApplicationSection";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../utils/constants";
import MainLayout from "../components/layouts/MainLayout";

const Apply: NextPage = ({ content, labels }: any) => {
  return (
    <MainLayout content={content}>
      <ApplicationSection classes={content?.programPage?.program_classes || []} title={content.form_title} labels={labels} />
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("application_page", locale || DEFAULT_LOCALE);
  const programPage = new Page("our_program_page", locale || DEFAULT_LOCALE);
  const [content, programPageData] = await Promise.all([page.data(), programPage.data()]);

  const labels = {
    fullName: content.full_name_label || '',
    identifier: content.user_identity_label || '',
    isUsaCitizen: content.is_us_citizen_label || '',
    address: content.address_label || '',
    citizenType: content.citizen_type_label || '',
    email: content.email_label || '',
    state: content.state_label || '',
    city: content.city_label || '',
    zipCode: content.zip_code_label || '',
    telephone: content.telephone_label || '',
    programCourse: content.program_course_label || '',
    courseNumber: content.course_number_label || '',
    totalClockHours: content.total_clock_hours_label || '',
    enrollmentPeriodTerm: content.enrollment_period_term_label || '',
  };
  return {
    props: {
      content: {
        ...content,
        programPage: programPageData
      },
      labels,
    },
    revalidate: REVALIDATE_BUILD_TIME,
  };
}

export default Apply;
