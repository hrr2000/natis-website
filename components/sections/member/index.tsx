import SectionWrapper from "../common/SectionWrapper";
import AdminDetailsCard from "./AdminDetailsCard";
import AdminDetailsText from "./AdminDetailsText";
import { AdminDetails } from "../../../Types/common";
export default function MemberSection({
  adminName,
  adminRole,
  adminSrcImage,
  adminStory,
}: AdminDetails) {
  return (
    <SectionWrapper dynamic>
      <div className="flex flex-col lg:flex-row gap-10  min-h-[80vh] px-7 py-12">
        <AdminDetailsCard
          adminName={adminName}
          adminRole={adminRole}
          adminSrcImage={adminSrcImage}
        />
        <AdminDetailsText adminName={adminName} adminStory={adminStory} />
      </div>
    </SectionWrapper>
  );
}
