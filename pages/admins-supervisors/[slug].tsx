import type { GetServerSideProps, GetStaticPropsContext, NextPage } from "next";
// import Navbar from "../components/common/Navbar";
import HeroSection from "../../components/sections/HeroSection";
import { asset } from "../../utils/functions";
import Page from "../../models/Page";
import Head from "next/head";
import { useRouter } from "next/router";
import MemberSection from "../../components/sections/member";

const AdminsSupervisors: NextPage = ({
  content,
  adminDetails: { adminName, adminRole, adminSrcImage, adminStory },
}: any) => {
  const router = useRouter();
  return (
    <main className={`w-full`}>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.hero_description} />
      </Head>
      {/*<Navbar/>*/}
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
    </main>
  );
};

export async function getServerSideProps({ locale }: GetStaticPropsContext) {
  const page = new Page("home_page", locale || "en-US");
  const adminDetails = {
    adminName: "Dr. Abed Almala",
    adminSrcImage: shblanga,
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
export default AdminsSupervisors;
