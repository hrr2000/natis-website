import SectionWrapper from "../../common/SectionWrapper";
import SectionHeading from "../../common/SectionHeading";
import SubmissionForm from "./SubmissionForm";
import { LabelProvider } from "../../../../contexts/LabelProvider";
import { labelsType } from "../../../../Types/common";
import { useState } from "react";
import Modal from "../../../common/Modal";
import sending from "../../../../assets/sending.gif";
import sent from "../../../../assets/sent.gif";
import Image from "../../../common/Image";

const getSubmissionResources = (modalState: number) => {
  let src, heading, textContent;
  if (modalState === 1) {
    src = sending;
    heading = "Sending the request";
    textContent =
      "Currently, the application is being submitted to the NATI ESL Institute ...";
  } else if (modalState === 2) {
    src = sent;
    heading = "Completed request submission";
    textContent =
      "Your request has been sent to NATI ESL, check your email and wait for a response...";
  }

  return { src, heading, textContent };
};

export default function ApplicationSection({ title, labels }: { title: string, labels: labelsType }) {
  const [modalState, setModalState] = useState(0);
  return (
    <SectionWrapper>
      <header className={`mb-10`}>
        <SectionHeading text={title} />
      </header>
      <LabelProvider labels={labels}>
        <SubmissionForm setModalState={setModalState} />
      </LabelProvider>
      <Modal modalState={modalState}>
        {(modalState) => {
          const { src, heading, textContent } =
            getSubmissionResources(modalState);
          return (
            <div
              className={`flex flex-col justify-center items-center text-center min-h-[400px] ${
                modalState === 1 ? "gap-5" : "gap-4"
              } py-16`}
            >
              <h3
                className={`text-secondary ${
                  modalState === 2 && "order-2 text-xl md:text-2xl"
                }`}
              >
                {heading}
              </h3>
                <Image
                  className={`relative flex w-[300px] h-[300px] ${modalState === 2 && "order-1"}`}
                  src={src!}
                  objectFit="cover"
                />
              <p className="max-w-[50ch] order-3">{textContent}</p>
            </div>
          );
        }}
      </Modal>
    </SectionWrapper>
  );
}
