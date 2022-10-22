import SectionWrapper from "../common/SectionWrapper";
import AdminDetailsCard from "./AdminDetailsCard";
import AdminDetailsText from "./AdminDetailsText";
import { AdminDetails } from "../../../Types/common";
export default function MemberSection({
  adminName,
  adminRole,
  adminSrcImage,
  adminSocial,
  adminStory,
}: AdminDetails) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-12 lg:flex-row gap-10 px-7 py-12">
        <AdminDetailsCard
          adminName={adminName}
          adminRole={adminRole}
          adminSrcImage={adminSrcImage}
          adminSocial={adminSocial}
        />
        <AdminDetailsText adminName={adminName} adminStory={adminStory} />
      </div>
    </SectionWrapper>
  );
}
