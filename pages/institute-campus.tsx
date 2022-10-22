import type { GetStaticPropsContext, NextPage } from "next";
import {asset, dd} from "../utils/functions";
import Page from "../models/Page";
import SpecialCard from "../components/sections/common/SpecialCard";
import {DEFAULT_LOCALE} from "../utils/constants";
import MainLayout from "../components/layouts/MainLayout";

const InstituteCampus: NextPage = ({ content }: any) => {
  return (
    <MainLayout content={content}>
      <div className={`w-full xl:h-[200px]`} />
      <SpecialCard
        image={asset(content.admissions_image)}
        bigTitle={content.admissions_title}
        description={content.admissions_description}
      />
      <SpecialCard
        image={asset(content.residence_image)}
        bigTitle={content.residence_title}
        description={content.residence_description}
        reverse
      />
      <SpecialCard
        image={asset(content.classrooms_image)}
        bigTitle={content.classrooms_title}
        description={content.classrooms_description}
      />
      <SpecialCard
        image={asset(content.living_image)}
        bigTitle={content.living_title}
        description={content.living_description}
        reverse
      />
      <iframe loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.07143913768516!2d-77.40076023123493!3d38.99920258535457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63837e06908a1%3A0x93bddaa231f0c4e!2zMjA3IEUgSG9sbHkgQXZlICMxMTIsIFN0ZXJsaW5nLCBWQSAyMDE2NNiMINin2YTZiNmE2KfZitin2Kog2KfZhNmF2KrYrdiv2Kk!5e1!3m2!1sar!1sus!4v1629097719940!5m2!1sar!1sus"
              height="500px"
              className={`w-full`}
      ></iframe>
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("institute_campus_page", locale || DEFAULT_LOCALE);
  dd(await page.data());
  return {
    props: {
      content: await page.data(),
    },
  };
}

export default InstituteCampus;
