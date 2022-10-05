import NextLink from 'next/link';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import {ILink} from "../../Types/common";
import {useState} from "react";
import {GRK} from "../../utils/functions";

export default function Link({link, children, className, absolute, ...props}: any) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  return (
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
      {!!link?.items?.length && (
        <div
          className={
            `bg-white font-medium text-gray-400 duration-100 overflow-hidden flex flex-col
             ${isCollapsed ? 'h-0 p-0 px-0 w-0 min-w-0' : (absolute ? 'absolute py-2 px-4 min-w-full' : 'py-2 px-2 min-w-full')}`
          }
          onMouseOver={() => setIsCollapsed(false)}
          onMouseLeave={() => setIsCollapsed(true)}
        >
          {link.items?.map((subLink: ILink) => {
            return <Link key={GRK('nav_sublink')} className={`hover:text-secondary text-[.75rem] py-1`} link={subLink} />
          })}
        </div>
      )}
    </span>
  )
}