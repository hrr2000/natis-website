import type {GetServerSideProps, GetStaticPaths, GetStaticPropsContext, NextPage} from "next";
import HeroSection from "../../components/sections/HeroSection";
import { asset } from "../../utils/functions";
import Page from "../../models/Page";
import { useRouter } from "next/router";
import MemberSection from "../../components/sections/member";
import MainLayout from "../../components/layouts/MainLayout";

const AdminsSupervisors: NextPage = ({
  content,
  adminDetails: { adminName, adminRole, adminSrcImage, adminStory },
}: any) => {
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
        <MemberSection
          adminName={adminName}
          adminRole={adminRole}
          adminSrcImage={adminSrcImage}
          adminStory={adminStory}
        />
      </main>
    </MainLayout>
  );
};

export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
  const page = new Page("committee_members",locale || "en-US");
  let slug = params?.slug;
  if(Array.isArray(slug)) slug = slug?.[0];
  const  committee_member = await page.getItem('committee_members', slug);
  const adminDetails = {
    adminName: "Dr. Abed Almala",
    adminSrcImage: "",
    adminRole: {
      name: "executive director",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus laudantium harum sed hic sequi minus aliquid voluptas non id numquam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat error labore, asperiores velit ducimus temporibus reiciendis in adipisci nihil neque iusto suscipit, quas possimus distinctio nesciunt debitis reprehenderit dolor.,
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat error labore, asperiores velit ducimus temporibus reiciendis in adipisci nihil neque iusto suscipit, quas possimus distinctio nesciunt debitis reprehenderit dolor.,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat error labore, asperiores velit ducimus temporibus reiciendis in adipisci nihil neque iusto suscipit, quas possimus distinctio nesciunt debitis reprehenderit dolor.,
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat error labore, asperiores velit ducimus temporibus reiciendis in adipisci nihil neque iusto suscipit, quas possimus distinctio nesciunt debitis reprehenderit dolor.,`,
    },
    adminStory: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat error labore, asperiores velit ducimus temporibus reiciendis in adipisci nihil neque iusto suscipit, quas possimus distinctio nesciunt debitis reprehenderit dolor.,
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat error labore, asperiores velit ducimus temporibus reiciendis in adipisci nihil neque iusto suscipit, quas possimus distinctio nesciunt debitis reprehenderit dolor.,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat error labore, asperiores velit ducimus temporibus reiciendis in adipisci nihil neque iusto suscipit, quas possimus distinctio nesciunt debitis reprehenderit dolor.,
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat error labore, asperiores velit ducimus temporibus reiciendis in adipisci nihil neque iusto suscipit, quas possimus distinctio nesciunt debitis reprehenderit dolor.,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat error labore, asperiores velit ducimus temporibus reiciendis in adipisci nihil neque iusto suscipit, quas possimus distinctio nesciunt debitis reprehenderit dolor.,
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat error labore, asperiores velit ducimus temporibus reiciendis in adipisci nihil neque iusto suscipit, quas possimus distinctio nesciunt debitis reprehenderit dolor.,`,
  };
  return {
    props: {
      content: await page.data(),
      adminDetails,
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
