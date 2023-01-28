import ItemsSection from "../../components/sections/common/ItemsSection";
import Link from "next/link";
import {asset, GRK, unComplete} from "../../utils/functions";
import Image from "../../components/common/Image";
import RelativeDate from "../../components/common/RelativeDate";
import SectionWrapper from "../../components/sections/common/SectionWrapper";
import MainLayout from "../../components/layouts/MainLayout";
import {GetStaticPropsContext} from "next";
import Page from "../../models/Page";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../../utils/constants";


export default function StudentFormsPage({content}: any) {
  return (
    <MainLayout content={content}>
      <SectionWrapper>
        <ItemsSection title={content.title} headerLink={{
          url: '#',
          text: ''
        }} items={[ ...content.forms]} template={({item}: { item: any }) => {
          return (
            <Link
              key={GRK(`member_card`)}
              href={item.file_url}
              passHref={true}
            >
              <a
                key={GRK(`member_card`)}
                className={`flex justify-center lg:col-span-4 md:col-span-6 col-span-12`}
              >
                <div className={`min-h-[360px] w-full flex flex-col justify-between shadow-lg rounded-md overflow-hidden`}>
                  <Image src={asset(item?.image_url)} objectFit={`cover`} className={`relative min-h-[280px]`} />
                  <div className={`p-5 lg:p-4 text-center`}>
                    <h3 className={`text-lg p-0`}>
                      {item.title}
                    </h3>
                    <button className={`mt-3 w-full bg-secondary text-white p-2 rounded-lg font-medium`}>
                      Click to download
                    </button>
                  </div>
                </div>
              </a>
            </Link>
          )
        }} />
        <hr />
        <div>

        </div>
      </SectionWrapper>
    </MainLayout>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("student_forms", locale || DEFAULT_LOCALE);
  const [content] = await Promise.all([page.data()]);


  return {
    props: {
      content: {
        ...content,
      },
    },
    revalidate: REVALIDATE_BUILD_TIME,
  };
}
