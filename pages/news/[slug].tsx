import type {GetStaticPropsContext, NextPage} from "next";
import Page from "../../models/Page";
import MainLayout from "../../components/layouts/MainLayout";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../../utils/constants";
import HTMLRenderer from "../../components/common/HTMLRenderer";
import SectionWrapper from "../../components/sections/common/SectionWrapper";

const NewsItem: NextPage = ({ content, newsItemDetails }: any) => {
  return (
    <MainLayout content={content}>
        <SectionWrapper className={`min-h-[50vh] blog-content`}>
          <HTMLRenderer content={newsItemDetails.content} />
        </SectionWrapper>
    </MainLayout>
  );
};

export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
  const page = new Page("news_page",locale || DEFAULT_LOCALE);
  let slug = params?.slug;
  if(Array.isArray(slug)) slug = slug?.[0];
  const newsItem: any = await page.getItem('news', {key: 'slug', value: slug || ''});
  console.log(newsItem);
  return {
    props: {
      content: {
        ...await page.data(),
        hero_image: newsItem.image,
        title: newsItem.title,
        hero_heading: newsItem.title,
        hero_description: newsItem.short_description
      },
      newsItemDetails: {
        ...newsItem,
      },
    },
    revalidate: REVALIDATE_BUILD_TIME,
  };
}

export async function getStaticPaths() {
  const page = new Page();
  const paths = [];
  const news = await page.getItems(`news`);
  for(let newsItem of news) {
    paths.push({params: {slug: newsItem.slug}})
  }
  return {
    paths,
    fallback: 'blocking',
  }
}


export default NewsItem;
