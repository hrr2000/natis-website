import type {GetStaticPropsContext, NextPage} from "next";
import Page from "../../models/Page";
import MemberSection from "../../components/sections/member";
import MainLayout from "../../components/layouts/MainLayout";
import {asset, dd} from "../../utils/functions";

const AdminsSupervisors: NextPage = ({
  content,
  adminDetails: { adminName, adminRole, adminSrcImage, adminStory },
}: any) => {
  return (
    <MainLayout content={content}>
      <main className="min-h-screen">
        <MemberSection
          adminName={adminName}
          adminRole={adminRole}
          adminSrcImage={asset(adminSrcImage)}
          adminStory={adminStory}
        />
      </main>
    </MainLayout>
  );
};

export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
  const page = new Page("admins_page",locale || "en-US");
  let slug = params?.slug;
  if(Array.isArray(slug)) slug = slug?.[0];
  const  committee_member: any = await page.getItem('committee_members', slug);
  return {
    props: {
      content: {
        ...await page.data(),
        title: committee_member.name,
        hero_heading: committee_member.name,
        hero_description: committee_member.role
      },
      adminDetails: {
        adminName: committee_member.name,
        adminSrcImage: committee_member.photo,
        adminRole: {
          name: committee_member.role,
          description: committee_member.bio,
        },
        adminStory: committee_member.about,
      },
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
    fallback: false,
  }
}


export default AdminsSupervisors;
