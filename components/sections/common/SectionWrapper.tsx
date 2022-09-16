import {ReactNode} from "react";


export default function SectionWrapper({ children, ...props }: any) {
  return (
    <section className={`container mx-auto my-20 py-5`} {...props}>
      {children}
    </section>
  )
}