import type {GetStaticPropsContext, NextPage} from "next";
import Page from "../../models/Page";
import MemberSection from "../../components/sections/member";
import MainLayout from "../../components/layouts/MainLayout";
import {asset, dd} from "../../utils/functions";
import {DEFAULT_LOCALE} from "../../utils/constants";
import SectionWrapper from "../../components/sections/common/SectionWrapper";
import HTMLRenderer from "../../components/common/HTMLRenderer";

const AdminsSupervisorsItem: NextPage = ({content, page}: any) => {
  return (
    <MainLayout content={content}>
      <SectionWrapper className={`page-content min-h-[50vh] blog-content`}>
        <HTMLRenderer content={page.content} />
      </SectionWrapper>
    </MainLayout>
  );
};

export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
  const page = new Page("",locale || DEFAULT_LOCALE);
  let slug = params?.slug;
  if(Array.isArray(slug)) slug = slug?.[0];
  const  content_page: any = await page.getItem('content_pages', {key: 'slug', value: slug || ''});
  return {
    props: {
      content: {
        ...await page.data(),
        title: content_page.title,
        hero_heading: content_page.hero_heading,
        hero_description: content_page.hero_description,
        hero_image: content_page.hero_image
      },
      page: {
        content: content_page.content
      },
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const page = new Page();
  const paths = [];
  const content_pages = await page.getItems(`content_pages`);
  for(let member of content_pages) {
    paths.push({params: {slug: member.slug}})
  }
  return {
    paths,
    fallback: 'blocking',
  }
}


export default AdminsSupervisorsItem;
