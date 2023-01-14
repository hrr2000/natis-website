import type { GetStaticPropsContext, NextPage } from "next";
import Page from "../../models/Page";

import OpinionForm from "../../components/sections/forms/OpinionForm";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../../utils/constants";
import MainLayout from "../../components/layouts/MainLayout";

const OpinionSurvey: NextPage = ({ content, labels }: any) => {
  return (
    <MainLayout content={content}>
      <OpinionForm title={content.title} classes={content?.programPage?.program_classes || []} labels={labels} />
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("opinion_survey", locale || DEFAULT_LOCALE);
  const [content] = await Promise.all([page.data()]);

  const labels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email Address',
    q1a: 'Q1A. Clearly informed students of course objectives',
    q1b: 'Q1B. Clearly explained theoretical concepts in course',
    q1c: 'Q1C. Class presentations explained course contents effectively',
    q1d: 'Q1D. Answered questions effectively',
    q1e: 'Q1E. Instructional technology used effectively',
    q1f: 'Q1F. Real-world projects & examples were used effectively',
    q1g: 'Q1G. Sufficient reading & assignments to master material',
    q1h: 'Q1H. Grading of students\' work done in a timely manner',
    q1i: 'Q1I. Instructor was available outside the classroom',
    q1j: 'Q1J. Instructor was prepared & organized for classerial',
    q1k: 'Q1K. Instructor was enthusiastic about teaching course material',
    q1l: 'Q1L. Instructor consistently treated students with respect',
    q2a: 'Q2A. Course syllabus stated learning objectives clearly',
    q2b: 'Q2B. Textbook/Instructional Materials helped to understand course concepts',
    q2c: 'Q2C. Course was intellectually challenging & stimulating',
    q2d: 'Q2D. Course improved knowledge & understanding of subject',
    q2e: 'Q2E. Felt academically prepared to take course',
    q2f: 'Q2F. Prepared to take more advanced courses in subject area',
    promoters: '“Promoters” / Very Likely to Recommend (%) Rate instructor as a 9 or 10.',
    passives: '“Passives” / Somewhat Likely to Recommend (%) Rate instructor as a 7 or 8.',
    detractors: '“Detractors” / Less Likely to Recommend (%) Rate instructor as a 6 or less.'
  };

  return {
    props: {
      content: {
        ...content,
      },
      labels,
    },
    revalidate: REVALIDATE_BUILD_TIME,
  };
}

export default OpinionSurvey;
