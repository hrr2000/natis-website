import SectionWrapper from "../../common/SectionWrapper";
import SectionHeading from "../../common/SectionHeading";
import SubmissionForm from "./SubmissionForm";
import { LabelProvider } from "../../../../contexts/LabelProvider";
import { labelsType } from "../../../../Types/common";
import { useState } from "react";
import Modal from "../../../common/Modal";
import Image from "../../../common/Image";
import {getSubmissionResources} from "../../../../utils/functions";

export default function SatisfactionForm({title, labels, classes}: {
  title: string;
  labels: labelsType;
  classes: any[];
}) {
  const [modalState, setModalState] = useState(0);

  return (
    <SectionWrapper noAnimation>
      <header className={`mb-10`}>
        <SectionHeading text={title} />
      </header>
      <LabelProvider labels={labels}>
        <SubmissionForm classes={classes} setModalState={setModalState} />
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
                className={`relative flex w-[300px] h-[300px] ${
                  modalState === 2 && "order-1"
                }`}
                src={src!}
                objectFit="cover"
                alt=""
              />
              <p className="max-w-[50ch] order-3">{textContent}</p>
            </div>
          );
        }}
      </Modal>
    </SectionWrapper>
  );
}
