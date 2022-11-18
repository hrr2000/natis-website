import GeneralAnimator from "../../common/GeneralAnimator";

export default function SectionWrapper({ children, className, dynamic, ...props }: any) {
  return (
    <section
      className={`${dynamic ? "w-dynamic" : "container"} mx-auto py-2 lg:py-5 ${className} `}
      {...props}
    >
      <GeneralAnimator>
        {children}
      </GeneralAnimator>
    </section>
  );
}
