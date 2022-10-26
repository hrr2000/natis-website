import Head from "next/head";
import Navbar from "../Navbar";
import {ReactNode, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {ILink} from "../../../Types/common";
import Footer from "../Footer";
import HeroSection from "../../sections/HeroSection";
import {asset, dd} from "../../../utils/functions";
import Topbar from "../Topbar";

interface IMainLayout {
  content: {
    title: string;
    hero_image: string;
    hero_heading: string;
    hero_description: string;
    hero_links?: ILink[];
    breadcrumbs: any;
    common_data: {
      natis_logo: string;
      cea_logo: string;
      natis_logo_dark: string;
      cea_logo_dark: string;
      about_natis: string;
    };
    navbar: {
      links: ILink[];
    };
    topbar: {
      links: ILink[];
      apply_button_text: string;
    };
    footer: any;
  };
  children: ReactNode;
}

export default function MainLayout({content, children}: IMainLayout) {

  const router = useRouter();
  const [isNavbarFixed, setIsNavbarFixed] = useState<boolean>(false);
  const [isScrollEventAdded, setIsScrollEventAdded] = useState<boolean>(false);

  useEffect(() => {
    // console.log(router.pathname, content?.breadcrumbs);
    if(typeof window !== 'undefined' && !isScrollEventAdded) {
      setIsScrollEventAdded(true);
      window?.addEventListener('scroll', (e: any) => setIsNavbarFixed(window.scrollY > 70));
    }
  }, [])

  return (
    <main className={`w-full overflow-hidden ${isNavbarFixed ? 'pt-[130px]' : ''}`}>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.hero_description} />
      </Head>
      <div className={`top-0 z-50 w-full transition-all duration-500 ${isNavbarFixed ? `fixed top-0` : `top-[-200px]`}`}>
        <Topbar
          links={content.topbar.links}
          apply_button_text={content.topbar.apply_button_text}
        />
        <Navbar
          natis_logo={content.common_data.natis_logo}
          cea_logo={content.common_data.cea_logo}
          links={content.navbar.links}
        />
      </div>
      <HeroSection
        backgroundImage={asset(content.hero_image)}
        heading={content.hero_heading}
        description={content.hero_description}
        links={content.hero_links}
        breadcrumbs={content?.breadcrumbs?.[router.pathname] || []}
      />
      {children}
      <Footer
        content={content.footer}
        about_natis={content.common_data.about_natis}
        natis_logo={content.common_data.natis_logo}
        natis_logo_dark={content.common_data.natis_logo_dark}
        cea_logo_dark={content.common_data.cea_logo_dark}
      />
    </main>
  )
}