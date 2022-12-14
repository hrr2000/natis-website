import Head from "next/head";
import Navbar from "../Navbar";
import {ReactNode, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {ILink} from "../../../Types/common";
import Footer from "../Footer";
import HeroSection from "../../sections/HeroSection";
import {asset, dd} from "../../../utils/functions";
import Topbar from "../Topbar";
import MobileNav from "../MobileNav";
import {AiOutlineArrowUp} from "react-icons/ai";

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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

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
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.hero_description} />
        <meta property="og:image" content="https://nati-esl-usa.org/favicon.ico" />
        <meta name="description" content={content.hero_description} />
        <meta name="keywords" content={`Nati ESL USA, ${content.title}, University, USA, Study, English, ESL`} />
      </Head>
      <div className={`top-0 z-50 w-full transition-all duration-500 ${isNavbarFixed ? `fixed top-0` : `top-[-200px]`}`}>
        <Topbar
          links={content.topbar.links}
          apply_button_text={content.topbar.apply_button_text}
          searchState={{
            state: isSearchOpen,
            setState: setIsSearchOpen
          }}
          emailList={content.footer.email_list}
          phoneList={content.footer.phone_list}
        />
        <Navbar
          natis_logo={content.common_data.natis_logo}
          cea_logo={content.common_data.cea_logo}
          links={content.navbar.links}
          toggleMobileNav={() => setIsMobileNavOpen(state => !state)}
          isMobileNavOpen={isMobileNavOpen}
          searchState={{
            state: isSearchOpen,
            setState: setIsSearchOpen
          }}
        />
        {isMobileNavOpen && (
          <MobileNav
            natis_logo={content.common_data.natis_logo}
            cea_logo={content.common_data.cea_logo}
            links={content.navbar.links}
            topbar={{
              ...content.topbar,
              searchState: {
                state: isSearchOpen,
                setState: setIsSearchOpen
            }}}
          />
        )}
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
      <a href={'#'} className={`bg-secondary text-white p-4 rounded-xl shadow-lg hover:opacity-75 fixed right-10 duration-200 ${isNavbarFixed ? 'bottom-10' : '-bottom-96'}`}>
          <AiOutlineArrowUp size={25} />
      </a>
    </main>
  )
}