import type { GetStaticPropsContext, NextPage } from "next";
import Page from "../../models/Page";
import MainLayout from "../../components/layouts/MainLayout";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../../utils/constants";
import {dd} from "../../utils/functions";
import GalleriesSection from "../../components/sections/gallery/GalleriesSection";

const Index: NextPage = ({ content, galleries }: any) => {
  dd(galleries[0].images);
  return (
    <MainLayout content={content}>
      <GalleriesSection galleries={galleries} />
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("gallery_page", locale || DEFAULT_LOCALE);

  return {
    props: {
      content: await page.data(),
      galleries: await page.getItems(`galleries`),
    },
    revalidate: REVALIDATE_BUILD_TIME,
  };
}
export default Index;
