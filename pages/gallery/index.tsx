import type { GetStaticPropsContext, NextPage } from "next";
import Page from "../../models/Page";
import MainLayout from "../../components/layouts/MainLayout";
import {DEFAULT_LOCALE} from "../../utils/constants";

const Index: NextPage = ({ content }: any) => {
  return (
    <MainLayout content={content}>
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("home_page", locale || DEFAULT_LOCALE);

  return {
    props: {
      content: await page.data(),
    },
  };
}
export default Index;
