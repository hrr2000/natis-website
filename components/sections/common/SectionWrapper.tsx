import GeneralAnimator from "../../common/GeneralAnimator";

export default function SectionWrapper({ children, className, dynamic, noAnimation, ...props }: any) {
  return (
    <section
      className={`${dynamic ? "w-dynamic" : "container"} mx-auto py-2 lg:py-5 ${className} `}
      {...props}
    >
      {noAnimation ? (
          children
      ) : (
        <GeneralAnimator>
          {children}
        </GeneralAnimator>
      )}
    </section>
  );
}
