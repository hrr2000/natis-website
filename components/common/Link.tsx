import NextLink from 'next/link';
import {ILink} from "../../Types/common";
import {ReactNode} from "react";

export default function Link({link, children, ...props}: any) {
  return (
    <NextLink href={link?.url || "/"}>
      <a {...props}>
        {link?.text || ""}  {children}
      </a>
    </NextLink>
  )
}