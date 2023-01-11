import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {useState} from "react";
import {AiOutlineGlobal} from 'react-icons/ai';
import {GRK} from "../../utils/functions";
import {useRouter} from "next/router";
import {DEFAULT_LOCALE} from "../../utils/constants";
import Image from "./Image";

const languages: any = {
  'en-US': 'English',
  // 'ar-SA': 'العربية',
  // 'fr-FR': 'Français',
  // 'es-ES': 'Español'
};

const icons: any = {
  'en-US': '/flags/en-flag.svg',
  // 'ar-SA': '/flags/ar-flag.svg',
  // 'fr-FR': '/flags/fr-flag.svg',
  // 'es-ES': '/flags/sp-flag.svg'
};

const links: any = [];

for(const locale in languages) {
  links.push({
    text: languages?.[locale],
    locale,
  });
}

export default function LanguageButton({className, disabled, clickable, absolute}: any) {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>(router.locale || DEFAULT_LOCALE);
  return (
    <span
      className={`h-min relative`}
      onClick={(e) => {
        if(!clickable || !isCollapsed) return;
        e.stopPropagation();
        setIsCollapsed(false);
        window.addEventListener('click', () => {
          setIsCollapsed(true);
        });
      }}
      onMouseOver={() => {
        if(clickable) return;
        setIsCollapsed(false)
      }}
      onMouseLeave={() => {
        if(clickable) return;
        setIsCollapsed(true)
      }}
    >
        <span className={`flex items-center gap-2 w-max cursor-pointer  ${className || ""}`}>
          <span>
            <AiOutlineGlobal size={20} />
          </span>
          <span>
            {languages?.[language] || ""}
          </span>
          {!!links?.length && !disabled && (
            <span className={`ms-2`}>
              {isCollapsed ? (
                <IoIosArrowDown size={13} />
              ) : (
                <IoIosArrowUp size={13} />
              )}
          </span>
          )}
        </span>
      {!!links.length && !disabled && (
        <div
          className={
            `bg-primary lg:bg-white font-medium text-gray-400 duration-100 overflow-hidden flex flex-col
             ${isCollapsed ? 'h-0 p-0 px-0 w-0 min-w-0' : (absolute ? 'absolute py-2 px-4 min-w-full' : 'py-2 px-2 min-w-full')}`
          }
        >
          {links?.map((link: any) => {
            return (
              <div
                key={GRK('nav-lang')}
                className={`hover:text-secondary text-[.75rem] py-1 cursor-pointer flex items-center gap-4`}
                onClick={() => {
                  document.cookie = `NEXT_LOCALE=${link?.locale || DEFAULT_LOCALE}; max-age=31536000; path=/`;
                  setLanguage(link?.locale || DEFAULT_LOCALE);
                  setIsCollapsed(true);
                  router.push(router.asPath, undefined, { locale: link?.locale || DEFAULT_LOCALE }).then(() => {
                    router.reload();
                  });
                }}
              >
                <Image src={icons?.[link?.locale]} className={`w-[20px] h-[20px] relative`} />
                <span>
                  {link?.text  || ""}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </span>
  )
}
