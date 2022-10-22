export default function SectionWrapper({ children, className, dynamic, ...props }: any) {
  return (
    <section
      className={`${dynamic ? "w-dynamic" : "container"} mx-auto py-5 ${className} `}
      {...props}
    >
      {children}
    </section>
  );
}
