import type { GetServerSideProps, GetStaticPropsContext, NextPage } from "next";
import HeroSection from "../../components/sections/HeroSection";
import { asset } from "../../utils/functions";
import Page from "../../models/Page";
import { useRouter } from "next/router";
import MemberSection from "../../components/sections/member";
import MainLayout from "../../components/layouts/MainLayout";

const AdminsSupervisors: NextPage = ({ content, committee_members }: any) => {
  const router = useRouter();
  return (
    <MainLayout content={content}>
      <HeroSection
        backgroundImage={asset(content.hero_image)}
        heading={content.hero_heading}
        description={content.hero_description}
        links={content.hero_links}
      />
      <main className="min-h-screen">
        <MemberSection adminName={router.query.slug} />
      </main>
    </MainLayout>
  );
};

export async function getServerSideProps({ locale }: GetStaticPropsContext) {
  const page = new Page("home_page", locale || "en-US");

  return {
    props: {
      content: await page.data(),
      committee_members: await page.getItems(`committee_members`),
    },
  };
}
export default AdminsSupervisors;
