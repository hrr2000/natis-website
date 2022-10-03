import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";
import AdminDetailsCard from "./AdminDetails";
import AdminDetailsText from "./AdminDetailsText";

export default function MemberSection({ title, name }: any) {
  return (
    <SectionWrapper>
      <header className={`mb-10`}>
        <SectionHeading text={name} />
      </header>
      <div className="flex gap-4 min-h-[80vh]">
        <AdminDetailsCard memberName={name} />
        <AdminDetailsText />
      </div>
    </SectionWrapper>
  );
}
