import type { GetStaticPropsContext, NextPage } from "next";
import HeroSection from "../../components/sections/HeroSection";
import { asset } from "../../utils/functions";
import Page from "../../models/Page";
import { useRouter } from "next/router";
import { createApi } from "unsplash-js";
import ImageSection from "../../components/sections/gallery/ImageSection";
import MainLayout from "../../components/layouts/MainLayout";

const serverApi = createApi({
  accessKey: "NETnB7iaAAPpCzrRDsMK4CecMBQXRv5sYR81UKipU5U",
});

const Gallery: NextPage = ({ content, photoUrls }: any) => {
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
        <ImageSection urls={photoUrls} />
      </main>
    </MainLayout>
  );
};

export async function getServerSideProps({
  locale,
  params,
}: GetStaticPropsContext) {
  const page = new Page("home_page", locale || "en-US");
  const photos = (
    await serverApi.search.getPhotos({
      query: params?.slug as string,
      page: 1,
      perPage: 10,
    })
  ).response?.results;

  const photoUrls = photos?.map((el: any) => el?.urls.full);
  return {
    props: {
      content: await page.data(),
      photoUrls,
    },
  };
}
export default Gallery;
