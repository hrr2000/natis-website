import type { GetStaticPropsContext, NextPage } from "next";
import Page from "../../models/Page";
import { useRouter } from "next/router";
import ImageSection from "../../components/sections/gallery/ImageSection";
import MainLayout from "../../components/layouts/MainLayout";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../../utils/constants";


const Gallery: NextPage = ({ content, galleryDetails }: any) => {
  const router = useRouter();
  return (
    <MainLayout content={content}>
      <main className="min-h-screen">
        <ImageSection urls={galleryDetails.images} />
      </main>
    </MainLayout>
  );
}
  
export default Gallery;

export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
  const page = new Page("gallery_page",locale || DEFAULT_LOCALE);
  let slug = params?.slug;
  if(Array.isArray(slug)) slug = slug?.[0];
  const  gallery: any = await page.getItem('galleries', {key: 'slug', value: slug || ''});
  let images: any = await page.getItems('galleries_files_1');
  images = images.filter((image: any) => image.galleries_id === gallery.galleries_id);
  console.log(gallery);
  images = images.map((image: any) => image.directus_files_id);
  return {
    props: {
      content: {
        ...await page.data(),
        title: gallery.gallery_title,
        hero_heading: gallery.gallery_title,
        hero_description: gallery.gallery_title,
      },
      galleryDetails: {
        ...gallery,
        images
      },
    },
    revalidate: REVALIDATE_BUILD_TIME,
  };
}

export async function getStaticPaths() {
  const page = new Page();
  const paths = [];
  const galleries = await page.getItems(`galleries`);
  for(let gallery of galleries) {
    paths.push({params: {slug: gallery.slug}})
  }
  return {
    paths,
    fallback: 'blocking',
  }
}
