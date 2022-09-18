import SectionWrapper from "../../common/SectionWrapper";
import SectionHeading from "../../common/SectionHeading";
import SubmissionForm from "./SubmissionForm";
import { LabelProvider } from "../../../../contexts/LabelProvider";
import { labelsType } from "../../../../Types/common";

export default function ApplicationSection({ labels }: { labels: labelsType }) {
  return (
    <SectionWrapper>
      <header>
        <SectionHeading text={"Submission Form"} />
      </header>
      <LabelProvider labels={labels}>
        <SubmissionForm />
      </LabelProvider>
    </SectionWrapper>
  );
}
