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
import {Accordion} from "../../components/common/Accordion";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import PasswordProtected from "../../components/sections/forms/PasswordProtected";


export default function StudentFormsPage({content}: any) {
  return (
    <MainLayout content={content}>
      <PasswordProtected>
        <SectionWrapper className={`my-10`}>
          {content.accordion_files?.map((item: any, index: number) => {
            return (
              <Accordion key={GRK('accordion')} title={(active: boolean) => {
                return (
                  <h4 className={`text-start text-xl flex justify-between items-center`}>
                    <span>{item.title}</span>
                    <span className={`text-secondary bg-gray-100 p-3 rounded-full`}>
                      {active ? <AiOutlineMinus size={25} /> : <AiOutlinePlus size={25} />}
                    </span>
                  </h4>
                )
              }} content={() => {
                return (
                  <div className={`px-5 py-5 bg-gray-100 border-2`}>
                    <ul>
                      {item.files?.map((file: any) => {
                        return (<li key={GRK('file')}>
                          <Link href={file.file_url} passHref={true} >
                            <a className={`text-blue-600 hover:underline text-xl`}>
                              {file.file_title}
                            </a>
                          </Link>
                        </li>)
                      })}
                    </ul>
                  </div>)
              }} />
            )
          })}
        </SectionWrapper>
      </PasswordProtected>
    </MainLayout>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("files_page", locale || DEFAULT_LOCALE);
  const [content, accordion_files] = await Promise.all([page.data(), page.getItems(`accordion_files`)]);

  return {
    props: {
      content: {
        ...content,
        accordion_files
      },
    },
    revalidate: REVALIDATE_BUILD_TIME,
  };
}
