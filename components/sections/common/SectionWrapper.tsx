export default function SectionWrapper({ children, ...props }: any) {
  return (
    <section className={`container mx-auto  py-5`} {...props}>
      {children}
    </section>
  );
}
