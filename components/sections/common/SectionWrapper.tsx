export default function SectionWrapper({ children, dynamic, ...props }: any) {
  return (
    <section
      className={`${dynamic ? "w-dynamic" : "container"} mx-auto py-5`}
      {...props}
    >
      {children}
    </section>
  );
}
