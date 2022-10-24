import type { GetStaticPropsContext, NextPage } from "next";
import Page from "../../models/Page";
import NewsSection from "../../components/sections/home/NewsSection";
import MainLayout from "../../components/layouts/MainLayout";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../../utils/constants";

const News: NextPage = ({ content, news }: any) => {
  return (
    <MainLayout content={content}>
        <NewsSection news={news} />
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("news_page", locale || DEFAULT_LOCALE);

  return {
    props: {
      content: await page.data(),
      news: await page.getItems(`news`),
    },
    revalidate: REVALIDATE_BUILD_TIME,
  };
}
export default News;
