export default function SectionWrapper({ children, className, dynamic, ...props }: any) {
  return (
    <section
      className={`${dynamic ? "w-dynamic" : "container"} ${className} mx-auto py-5`}
      {...props}
    >
      {children}
    </section>
  );
}
