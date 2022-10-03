import type {GetServerSideProps, GetStaticPaths, GetStaticPropsContext, NextPage} from "next";
import HeroSection from "../../components/sections/HeroSection";
import { asset } from "../../utils/functions";
import Page from "../../models/Page";
import { useRouter } from "next/router";
import MemberSection from "../../components/sections/member";
import MainLayout from "../../components/layouts/MainLayout";
import DirectusClient from "../../services/DirectusClient";
import {isArray} from "util";

const AdminsSupervisors: NextPage = ({ content, committee_member }: any) => {
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
        <MemberSection adminName={content.name} />
      </main>
    </MainLayout>
  );
};

export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
  const page = new Page("committee_members",locale || "en-US");
  let slug = params?.slug;
  if(Array.isArray(slug)) slug = slug?.[0];
  return {
    props: {
      content: await page.data(),
      committee_member: await page.getItem('committee_members', slug),
    },
  };

}

export async function getStaticPaths() {
  const page = new Page();
  const paths = [];
  const committee_members = await page.getItems(`committee_members`);
  for(let member of committee_members) {
    paths.push({params: {slug: member.slug}})
  }
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}


export default AdminsSupervisors;
