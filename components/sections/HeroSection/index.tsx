import { ILink } from "../../../Types/common";
import Image from "../../common/Image";
import Overlay from "../../common/Overlay";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroAttachments from "./HeroAttachments";
import ContentWrapper from "./ContentWrapper";
import HTMLRenderer from "../../common/HTMLRenderer";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {GRK} from "../../../utils/functions";
import React from "react";

interface IHeroSection {
  backgroundImage: string;
  heading: string;
  description: string;
  breadcrumbs: string[];
  links?: ILink[];
}

export default function HeroSection(content: IHeroSection) {
  if (!content) return <></>;

  const { backgroundImage, heading, description, breadcrumbs, links } = content;

  return (
    <header className={`relative w-full lg:min-h-[400px]`}>
      <Image objectFit={`cover`} src={backgroundImage} />
      <Overlay />
      <ContentWrapper>
        {!!breadcrumbs?.length && (
          <div className={`flex items-center gap-2 mb-4`}>
            <HTMLRenderer content={`
            <svg xmlns="http://www.w3.org/2000/svg" width="20.343" height="20" viewBox="0 0 20.343 20">
              <path id="Vector" d="M19,6.01,12.45.77A3.765,3.765,0,0,0,7.9.76L1.35,6.01A3.917,3.917,0,0,0,.04,9.44L1.3,16.98A3.716,3.716,0,0,0,4.87,20h10.6a3.773,3.773,0,0,0,3.58-3.03l1.26-7.54A4.018,4.018,0,0,0,19,6.01ZM10.92,16a.75.75,0,0,1-1.5,0V13a.75.75,0,0,1,1.5,0Z" fill="#e6de00"/>
            </svg>
            `} />
            <IoIosArrowForward />
            {breadcrumbs.map((breadcrumb, idx) => (
              <React.Fragment key={GRK('breadcrumb')}>
                <span className={`text-xs md:text-sm w-max`} style={{color: '#E6DE00'}}>
                  {breadcrumb}
                </span>
                {idx + 1 != breadcrumbs.length && <IoIosArrowForward />}
              </React.Fragment>
            ))}
          </div>
        )}
        <HeroHeading text={heading} />
        <HeroDescription text={description} />
        <HeroAttachments links={links} />
      </ContentWrapper>
    </header>
  );
}
