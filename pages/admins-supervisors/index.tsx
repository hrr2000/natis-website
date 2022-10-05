import type { GetServerSideProps, GetStaticPropsContext, NextPage } from "next";
import Page from "../../models/Page";
import MembersSection from "../../components/sections/home/MembersSection";
import MainLayout from "../../components/layouts/MainLayout";
import {DEFAULT_LOCALE} from "../../utils/constants";

const AdminsSupervisors: NextPage = ({ content, committee_members }: any) => {
  return (
    <MainLayout content={content}>
      <MembersSection members={committee_members} />
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("admins_page", locale || DEFAULT_LOCALE);

  return {
    props: {
      content: await page.data(),
      committee_members: await page.getItems(`committee_members`),
    },
  };
}
export default AdminsSupervisors;
