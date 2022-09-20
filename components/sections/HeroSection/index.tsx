import {ILink} from "../../../Types/common";
import Image from "../../common/Image";
import Overlay from "../../common/Overlay";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroAttachments from "./HeroAttachments";
import ContentWrapper from "./ContentWrapper";

interface IHeroSection {
  backgroundImage: string;
  heading: string;
  description: string;
  links: ILink[];
}

export default function HeroSection(content: IHeroSection) {

  if(!content) return <></>;

  const {backgroundImage, heading, description, links} = content;

  return (
    <section className={`relative w-full min-h-[400px]`}>
      <Image objectFit={`cover`} src={backgroundImage} />
      <Overlay />
      <ContentWrapper>
        <HeroHeading text={heading} />
        <HeroDescription text={description} />
        <HeroAttachments links={links} />
      </ContentWrapper>
    </section>
  )

}