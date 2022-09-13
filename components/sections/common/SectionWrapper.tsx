import {ReactNode} from "react";

interface ISectionWrapper {
  children: ReactNode;
}

export default function SectionWrapper({ children }: ISectionWrapper) {
  return (
    <section className={`container mx-auto my-20 py-5`}>
      {children}
    </section>
  )
}