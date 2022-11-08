import type { GetStaticPropsContext, NextPage } from "next";
import {asset, dd, getSubmissionResources, GRK} from "../utils/functions";
import Page from "../models/Page";
import {DEFAULT_LOCALE, REVALIDATE_BUILD_TIME} from "../utils/constants";
import MainLayout from "../components/layouts/MainLayout";
import SectionWrapper from "../components/sections/common/SectionWrapper";
import Link from "next/link";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import React, {useState} from "react";
import {ILink} from "../Types/common";;
import {LabelProvider} from "../contexts/LabelProvider";
import SubmissionForm from "../components/sections/contact/ContactForm";
import Modal from "../components/common/Modal";
import Image from "../components/common/Image";

const InstituteCampus: NextPage = ({ content, labels }: any) => {

  const [modalState, setModalState] = useState(0);

  return (
    <MainLayout content={content}>
      <SectionWrapper>
        <div className={`flex justify-between items-center flex-wrap gap-5`}>
          <div className={`flex flex-col gap-6`}>
            <h2>{content.information_title}</h2>
            <ContactItem title={content.address_label}>
              <p>20164 East Holly Avenue#112 Sterling, VA 207</p>
            </ContactItem>
            <ContactItem title={content.contact_label}>
              {content.footer?.phone_list?.map((link: ILink, index: number) => (
                <p key={GRK('footer_link')} className={`my-2`}>
                    {link.text}
                </p>
              ))}
              <p>{content.footer?.fax_title}: {content.footer?.phone_list?.[0]?.text}</p>
            </ContactItem>
            <ContactItem title={content.support_label}>
              <p>{content.footer?.email_list?.[0]?.text}</p>
              <div className={`text-secondary flex py-5 gap-4 me-5`}>
                <Link href={content.footer?.instagram || '/'} aria-label={`natis-instagram`}>
                  <a>
                    <FaInstagram size={20} />
                  </a>
                </Link>
                <Link href={content.footer?.twitter || '/'} aria-label={`natis-twitter`}>
                  <a>
                    <FaTwitter size={20} />
                  </a>
                </Link>
                <Link href={content.footer?.facebook || '/'} aria-label={`natis-facebook`}>
                  <a>
                    <FaFacebookF size={20} />
                  </a>
                </Link>
                <Link href={content.footer?.linkedin || '/'} aria-label={`natis-linkedin`}>
                  <a>
                    <FaLinkedin size={20} />
                  </a>
                </Link>
              </div>
            </ContactItem>
          </div>
          <div className={`w-full lg:w-[65%]`}>
            <LabelProvider labels={labels}>
              <SubmissionForm setModalState={setModalState} />
            </LabelProvider>
            <Modal modalState={modalState}>
              {(modalState) => {
                const { src, heading, textContent } =
                  getSubmissionResources(modalState);
                return (
                  <div
                    className={`flex flex-col justify-center items-center text-center min-h-[400px] ${
                      modalState === 1 ? "gap-5" : "gap-4"
                    } py-16`}
                  >
                    <h3
                      className={`text-secondary ${
                        modalState === 2 && "order-2 text-xl md:text-2xl"
                      }`}
                    >
                      {heading}
                    </h3>
                    <Image
                      className={`relative flex w-[300px] h-[300px] ${
                        modalState === 2 && "order-1"
                      }`}
                      src={src!}
                      objectFit="cover"
                      alt=""
                    />
                    <p className="max-w-[50ch] order-3">{textContent}</p>
                  </div>
                );
              }}
            </Modal>
          </div>
        </div>
      </SectionWrapper>
      <iframe loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.07143913768516!2d-77.40076023123493!3d38.99920258535457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63837e06908a1%3A0x93bddaa231f0c4e!2zMjA3IEUgSG9sbHkgQXZlICMxMTIsIFN0ZXJsaW5nLCBWQSAyMDE2NNiMINin2YTZiNmE2KfZitin2Kog2KfZhNmF2KrYrdiv2Kk!5e1!3m2!1sar!1sus!4v1629097719940!5m2!1sar!1sus"
        height="500px"
        className={`w-full`}
      ></iframe>
    </MainLayout>
  );
};

function ContactItem({title, children}: any) {
  return (
    <div className={`flex flex-col border-s-8 p-5 border-secondary shadow-md w-full lg:w-80`}>
      <h4 className={`text-2xl`}>{title}</h4>
      {children}
    </div>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const page = new Page("contact_page", locale || DEFAULT_LOCALE);
  const content = await page.data();
  const labels = {
    fullName: content.full_name_label || '',
    email: content.email_label || '',
    telephone: content.telephone_label || '',
    message: content.message_label || '',
  };
  return {
    props: {
      content,
      labels
    },
    revalidate: REVALIDATE_BUILD_TIME,
  };
}

export default InstituteCampus;
