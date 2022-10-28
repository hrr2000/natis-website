import type { GetServerSideProps, GetStaticPropsContext, NextPage } from "next";
import Page from "../../models/Page";
import MembersSection from "../../components/sections/home/MembersSection";
import MainLayout from "../../components/layouts/MainLayout";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../../utils/constants";
import {CommitteeMember} from "../../Types/directus";

const AdminsSupervisors: NextPage = ({ content, committee_members }: any) => {
  return (
    <MainLayout content={content}>
      <MembersSection members={committee_members.sort((member1: CommitteeMember, member2: CommitteeMember) => member1.rank - member2.rank)} />
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
    revalidate: REVALIDATE_BUILD_TIME,
  };
}
export default AdminsSupervisors;
