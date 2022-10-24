import type {GetStaticPropsContext, NextPage} from "next";
import Page from "../../models/Page";
import MemberSection from "../../components/sections/member";
import MainLayout from "../../components/layouts/MainLayout";
import {asset, dd} from "../../utils/functions";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../../utils/constants";

const AdminsSupervisorsItem: NextPage = ({
  content,
  adminDetails: { adminName, adminRole, adminSrcImage, adminStory, adminSocial },
}: any) => {
  return (
    <MainLayout content={content}>
      <main className="min-h-screen">
        <MemberSection
          adminName={adminName}
          adminRole={adminRole}
          adminSrcImage={asset(adminSrcImage)}
          adminStory={adminStory}
          adminSocial={adminSocial}
        />
      </main>
    </MainLayout>
  );
};

export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
  const page = new Page("admins_page",locale || DEFAULT_LOCALE);
  let slug = params?.slug;
  if(Array.isArray(slug)) slug = slug?.[0];
  const committee_member: any = await page.getItem('committee_members', {key: 'slug', value: slug || ''});
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
        adminSocial: {
          facebook: committee_member.facebook_url,
          twitter: committee_member.twitter_url,
          linkedin: committee_member.linkedin_url,
          instagram: committee_member.instagram_url,
        },
        adminStory: committee_member.about,
      },
    },
    revalidate: REVALIDATE_BUILD_TIME,
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
    fallback: 'blocking',
  }
}


export default AdminsSupervisorsItem;
