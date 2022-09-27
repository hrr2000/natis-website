import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";
import AdminDetailsCard from "./AdminDetails";
import AdminDetailsText from "./AdminDetailsText";

export default function MemberSection({ title, adminName }: any) {
  return (
    <SectionWrapper>
      <header className={`mb-10`}>
        <SectionHeading text={adminName} />
      </header>
      <div className="flex gap-4 min-h-[80vh]">
        <AdminDetailsCard />
        <AdminDetailsText />
      </div>
    </SectionWrapper>
  );
}
