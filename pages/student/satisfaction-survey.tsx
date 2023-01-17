import type { GetStaticPropsContext, NextPage } from "next";
import Page from "../../models/Page";

import SatisfactionForm from "../../components/sections/forms/SatisfactionForm";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../../utils/constants";
import MainLayout from "../../components/layouts/MainLayout";
import SectionWrapper from "../../components/sections/common/SectionWrapper";
import PasswordProtected from "../../components/sections/forms/PasswordProtected";

const SatisfactionSurvey: NextPage = ({ content, labels }: any) => {
  return (
    <MainLayout content={content}>
      <SectionWrapper>
        <h2>{content.title}</h2>
      </SectionWrapper>
      <PasswordProtected>
        <SatisfactionForm classes={content?.programPage?.program_classes || []} title={content.form_title} labels={labels} />
      </PasswordProtected>
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("satisfaction_survey", locale || DEFAULT_LOCALE);
  const [content] = await Promise.all([page.data()]);

  const labels = {
    q1: 'Q1. Overall, how satisfied are you with your educational experience and services at NATI ESL?',
    q2a: 'A. Quality of the teaching faculty',
    q2b: 'B. Course availability',
    q2c: 'C. Academic advising',
    q2d: 'D. Access to teaching faculty',
    q2e: 'E. Fellow students\' academic ability',
    q2f: 'F. Academic reputation of the school',
    q2g: 'G. Value of the education for the price',
    q3: 'Q3. Is there anything else you’d like to share about your level of satisfaction with your educational experience?\n',
    q4a: 'A. Campus facilities',
    q4b: 'B. Staff support to students',
    q4c: 'C. Class and laboratory facilities',
    q4d: 'D. Registration Process',
    q4e: 'E. Library',
    q4f: 'F. Parking',
    q4g: 'G. Public transportation',
    q5: 'Q5. Is there anything else you’d like to share about your level of satisfaction with our support services and facilities?',
    q6a: 'A. Sport and recreational facilities',
    q6b: 'B. Clubs and student organizations',
    q6c: 'C. Student diversity',
    q6d: 'D. Campus safety',
    q6e: 'E. Extracurricular activities',
    q6f: 'F. Student safety',
    q6g: 'G. Social life',
    q7: 'Q7. Is there anything else you’d like to share about your level of satisfaction with your campus life?'
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

export default SatisfactionSurvey;
