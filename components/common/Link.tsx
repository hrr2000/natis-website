import NextLink from 'next/link';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import {ILink} from "../../Types/common";
import {useState} from "react";
import {GRK} from "../../utils/functions";

export default function Link({link, children, className, absolute, clickable, icon, ...props}: any) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  return (
    <>
      {clickable ? (
          <span
            className={`h-min relative`}
            onClick={(e) => {
              if(!clickable || !isCollapsed) return;
              e.stopPropagation();
              setIsCollapsed(false);
              window.addEventListener('click', () => {
                setIsCollapsed(true);
              }, {once: true});
            }}
          >
            <span {...props} className={`flex items-center w-max cursor-pointer ${className || ""}`}>
              {icon?.()}
              {link?.text || ""}  {children}
              {!!link?.items?.length && (
                <span className={`ms-2`}>
                  {isCollapsed ? (
                    <IoIosArrowDown size={13} />
                  ) : (
                    <IoIosArrowUp size={13} />
                  )}
              </span>
              )}
            </span>
          <SubLinksList link={link} isCollapsed={isCollapsed} absolute={absolute} />
        </span>
      ) : (
        <span
          className={`h-min relative`}
          onMouseOver={() => setIsCollapsed(false)}
          onMouseLeave={() => setIsCollapsed(true)}
        >
      <NextLink href={link?.url || "/"}>
        <a {...props} className={`flex items-center w-max ${className || ""}`}>
          {link?.text || ""}  {children}
          {!!link?.items?.length && (
            <span className={`ms-2`}>
              {isCollapsed ? (
                <IoIosArrowDown size={13} />
              ) : (
                <IoIosArrowUp size={13} />
              )}
          </span>
          )}
        </a>
      </NextLink>
      <SubLinksList link={link} isCollapsed={isCollapsed} absolute={absolute} />
    </span>
      )}
    </>

  )
}

export function SubLinksList({link, isCollapsed, absolute}: any) {
  return (
    <>
      {!!link?.items?.length && (
        <div
          className={
            `bg-primary lg:bg-white font-medium text-gray-400 duration-100 overflow-hidden flex flex-col
             ${isCollapsed ? 'h-0 p-0 px-0 w-0 min-w-0' : (absolute ? 'absolute py-2 px-4 min-w-full' : 'py-2 px-2 min-w-full')}`
          }
        >
          {link.items?.map((subLink: ILink) => {
            return <Link key={GRK('nav_sublink')} className={`hover:text-secondary text-lg lg:text-[.75rem] py-1`} link={subLink} clickable={!!subLink?.items?.length}/>
          })}
        </div>
      )}
    </>
  )
}