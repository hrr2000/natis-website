import {ReactNode} from "react";

export default function ContentWrapper({children, className}: {children: ReactNode, className?: string}) {
  return (
    <article className={`text-light w-full container mx-auto relative z-2`}>
      <div className={`py-20 max-w-[1000px]  ${className}`}>
        {children}
      </div>
    </article>
  );
}