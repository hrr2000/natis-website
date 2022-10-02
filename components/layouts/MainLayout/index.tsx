import Head from "next/head";
import Navbar from "../Navbar";
import {ReactNode} from "react";
import {ILink} from "../../../Types/common";
import Footer from "../Footer";

interface IMainLayout {
  content: {
    title: string;
    hero_description: string;
    common_data: {
      natis_logo: string;
      cea_logo: string;
      about_natis: string;
    };
    navbar: {
      links: ILink[];
    }
  };
  children: ReactNode;
}

export default function MainLayout({content, children}: IMainLayout) {
  return (
    <main className={`w-full`}>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.hero_description} />
      </Head>
      <Navbar
        natis_logo={content.common_data.natis_logo}
        cea_logo={content.common_data.cea_logo}
        links={content.navbar.links}
      />
      {children}
      <Footer
        about_natis={content.common_data.about_natis}
        natis_logo={content.common_data.natis_logo}
      />
    </main>
  )
}