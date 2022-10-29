import {asset, GRK} from "../../utils/functions";
import {ILink} from "../../Types/common";
import Link from "../common/Link";
import {AiOutlineClose, AiOutlineSearch} from "react-icons/ai";
import {BsEnvelopeFill} from 'react-icons/bs';
import {MdPhoneInTalk} from 'react-icons/md';
import {useEffect, useState} from "react";
import Modal from "../common/Modal";
import {useRouter} from "next/router";


export interface ITopebar {
  links: ILink[];
  apply_button_text: string;
  searchState: {
    state: boolean;
    setState: Function;
  },
  emailList?: ILink[],
  phoneList?: ILink[]
}

export default function Topbar({links, apply_button_text, searchState, emailList, phoneList}: ITopebar) {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState<number>(0);
  const [searchResult, setSearchResult] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const router = useRouter();

  async function search () {
    setIsLoading(true);
    setSearchResult(await fetch(`/api/search?q=${query}&locale=${router.locale}`).then(res => res.json()));
    setIsLoading(false);
    setIsSearchBoxOpen(1);
  }

  return (
    <div className={`bg-topbar py-4 max-h-[65px] relative`}>
      <div className={`container mx-auto flex justify-between items-start`}>
        <nav className="flex overflow-visible relative z-50 gap-6 text-primary hidden xl:flex">
          {links?.map((link) => {
            return <span key={GRK('nav_link')} className={`block`}><Link absolute className={`text-primary uppercase opacity-50 py-2 hover:text-secondary duration-300 font-medium text-sm`} key={GRK('nav_link')} link={link}/></span>
          })}
        </nav>
        <div className={`flex gap-5 items-start relative z-[99] w-full justify-between md:justify-end`}>
          <span className={`gap-2 items-center mt-2 md:flex hidden`}>
            <span className={`text-secondary`} >
              <BsEnvelopeFill size={18} />
            </span>
            <span className={``}>
              {emailList?.[0].text}
            </span>
          </span>
          <Link className={`mt-2`} link={{text: phoneList?.[0].text || '', url: '#', items: phoneList}} clickable icon={() => (
            <span className={`text-secondary me-2`} >
              <MdPhoneInTalk size={20} />
            </span>
          )}/>
          <div className={`w-max`}>
            <Link
              link={{url: '/apply', text: apply_button_text}}
              className="bg-secondary uppercase w-full md:w-max px-4 py-[.5rem] text-sm rounded-md text-white font-semibold duration-300 hover:opacity-70" />
          </div>
        </div>
      </div>
      <div className={`absolute duration-200 ${!searchState.state ? '-top-[200px]' : 'top-0'} bg-[#D6D8DF] w-full h-full z-[100] flex justify-center items-center`}>
        <div className={`container flex justify-center items-center gap-5`}>
          <button onClick={() => searchState.setState(false)}>
            <AiOutlineClose size={25} />
          </button>
          <input type="text"
                 className={`bg-transparent border-0 border-b-2 h-5 w-full text-xl`}
                 onChange={(event) => {
                   setQuery(event?.target?.value || '');
                 }}
                 style={{ boxShadow: 'none' }}/>
          <button
            onClick={search}
            className="bg-secondary uppercase w-full w-max px-4 py-[.5rem] text-xs rounded-md text-white font-semibold duration-300 hover:opacity-70 flex items-center gap-2">
          <span>
            <AiOutlineSearch size={18} />
          </span>
            <span>
              {isLoading ? (
                router.locale === 'ar-SA' ? 'جارٍالبحث...' : 'Loading...'
              ) : (
                router.locale === 'ar-SA' ? 'بحث' : 'Search'
              )}
            </span>
          </button>
        </div>
        <Modal modalState={isSearchBoxOpen} className={`w-full md:w-dynamic-md bg-white rounded-md`}>
          {() => {
            return (
              <div className={`relative`}>
                <AiOutlineClose className={`absolute right-5 top-5 cursor-pointer`} size={25} onClick={() => setIsSearchBoxOpen(0)} />
                <div className={`bg-gray-100 w-full p-5 md:p-10 overflow-y-auto h-[500px] rounded-xl shadow-lg`}>
                  {searchResult.news.length > 0 && (
                    <h3>
                      {router.locale === 'ar-SA' ? 'الآخبار' : 'News'}
                    </h3>
                  )}
                  <ul>
                    {searchResult?.news?.slice(-10).map((item: any) => {
                      return (
                        <li key={GRK('news')}>
                          <Link onClick={() => {
                            setIsSearchBoxOpen(0);
                          }} link={{url: `/news/${item?.slug}`, text: item?.title}} className={`block text-primary hover:text-secondary duration-300`}/>
                          <p>
                            {item.short_description}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                  {searchResult.committeeMembers.length > 0 && (
                    <h3>
                      {router.locale === 'ar-SA' ? 'الأعضاء' : 'Members'}
                    </h3>
                  )}
                  <ul>
                    {searchResult?.committeeMembers?.slice(-10).map((item: any) => {
                      return (
                        <li key={GRK('member')}>
                          <Link onClick={() => {
                            setIsSearchBoxOpen(0);
                          }} link={{url: `/admins-supervisors/${item?.slug}`, text: item?.name}} className={`block text-primary hover:text-secondary duration-300`}/>
                          <p>
                            {item.role}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                  {searchResult.contentPages.length > 0 && (
                    <h3>
                      {router.locale === 'ar-SA' ? 'الصفحات' : 'Pages'}
                    </h3>
                  )}
                  <ul>
                    {searchResult?.contentPages?.slice(-10).map((item: any) => {
                      return (
                        <li key={GRK('content_page')}>
                          <Link onClick={() => {
                            setIsSearchBoxOpen(0);
                          }} link={{url: `/content/${item?.slug}`, text: item?.title}} className={`block text-primary hover:text-secondary duration-300`}/>
                          <p>
                            {item.hero_description}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          }}
      </Modal>
      </div>
    </div>
  )
}