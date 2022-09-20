import SectionWrapper from "../../common/SectionWrapper";
import SectionHeading from "../../common/SectionHeading";
import SubmissionForm from "./SubmissionForm";
import { LabelProvider } from "../../../../contexts/LabelProvider";
import { labelsType } from "../../../../Types/common";
import { useState } from "react";
import Modal from "../../../common/Modal";
import Image from "next/image";
import sending from "../../../../assets/sending.webp";
import sent from "../../../../assets/sent.webp";

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

export default function ApplicationSection({ labels }: { labels: labelsType }) {
  const [modalState, setModalState] = useState(0);
  return (
    <SectionWrapper>
      <header>
        <SectionHeading text={"Submission Form"} />
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
              } p-5`}
            >
              <h2
                className={`${
                  modalState === 2 && "order-2 text-xl md:text-2xl"
                }`}
              >
                {heading}
              </h2>
              <figure className={` flex ${modalState === 2 && "order-1"}`}>
                <Image
                  src={src!}
                  width={300}
                  height={300}
                  objectFit="cover"
                  alt="koko"
                ></Image>
              </figure>

              <p className="max-w-[50ch]  order-3">{textContent}</p>
            </div>
          );
        }}
      </Modal>
    </SectionWrapper>
  );
}
