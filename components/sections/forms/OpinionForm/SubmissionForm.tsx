import RadioGroup from "../../../common/RadioGroup";
import InputField from "../../../common/InputField";
import { Field, Form, Formik, ErrorMessage } from "formik";
import SelectField from "../../../common/SelectField";
import { submissionForm } from "../../../../utils/validation/schemas";
import { awaitTimeout } from "../../../../utils/functions";
import { useRouter } from "next/router";
import React from "react";

const questionAnswers = [
  'Strongly Agreed',
  'Agreeing',
  'Disagreeing',
]

export default function SubmissionForm({setModalState, classes}: {
  setModalState: (state: number) => void;
  classes: any[]
}) {
  const router = useRouter();

  return (
    <Formik
      initialValues={submissionForm.formInitData}
      onSubmit={async (values, { resetForm }) => {
        console.log(values);
        setModalState(1);
        fetch("/api/apply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // @ts-ignore
          body: JSON.stringify(values)
        }).then(async (res) => {
          resetForm();
          const obj: any = await res.json();
          if(!obj?.message) {
            setModalState(0);
            alert('Failed to submit application');
          }
          setModalState(2);
          await awaitTimeout(2000);
          setModalState(0);
        }).catch(() => {
          setModalState(0);
          alert('Failed to submit application');
        })
        // router.push("/");
      }}
      validationSchema={submissionForm.submissionSchema}
    >
      {() => (
        <Form className="flex flex-col gap-9">
          <div>
            <div className="lg:grid lg:grid-cols-2 gap-7 flex flex-col">
              <InputField id="first-name" name="firstName" required />
              <InputField id="last-name" name="lastName" required />
            </div>
            <div className="my-3">
              <InputField id="email" name="email" required />
            </div>
            <h2 className={`my-3`}>Part A: Evaluation of Instructor</h2>
            <p className={`font-bold`}>
              q1. How would you rate the following aspects of your educational experience:
            </p>
            <div className={`px-5 py-5`}>
              <RadioGroup name="q1a" list={questionAnswers} id="q1a" required />
              <RadioGroup name="q1b" list={questionAnswers} id="q1b" required />
              <RadioGroup name="q1c" list={questionAnswers} id="q1c" required />
              <RadioGroup name="q1d" list={questionAnswers} id="q1d" required />
              <RadioGroup name="q1e" list={questionAnswers} id="q1e" required />
              <RadioGroup name="q1f" list={questionAnswers} id="q1f" required />
              <RadioGroup name="q1g" list={questionAnswers} id="q1g" required />
              <RadioGroup name="q1h" list={questionAnswers} id="q1h" required />
              <RadioGroup name="q1i" list={questionAnswers} id="q1i" required />
              <RadioGroup name="q1j" list={questionAnswers} id="q1j" required />
              <RadioGroup name="q1k" list={questionAnswers} id="q1k" required />
              <RadioGroup name="q1l" list={questionAnswers} id="q1l" required />
            </div>
            <h2 className={`my-3`}>Part B: Evaluation of Course Design</h2>
            <div className={`px-5 py-5`}>
              <RadioGroup name="q2a" list={questionAnswers} id="q2a" required />
              <RadioGroup name="q2b" list={questionAnswers} id="q2b" required />
              <RadioGroup name="q2c" list={questionAnswers} id="q2c" required />
              <RadioGroup name="q2d" list={questionAnswers} id="q2d" required />
              <RadioGroup name="q2e" list={questionAnswers} id="q2e" required />
              <RadioGroup name="q2f" list={questionAnswers} id="q2f" required />
            </div>
            <h2 className={`mt-3`}>Would you recommend this instructor to a friend or fellow student? (Choose one only)</h2>
            <p className={`mb-3`}>Scaled from zero (“not likely”) to ten (“very likely”).</p>
            <InputField type={`number`} id="_promoters" name="promoters" required />
            <InputField type={`number`} id="_passives" name="passives" required />
            <InputField type={`number`} id="_detractors" name="detractors" required />
          </div>
          <button
            className="bg-secondary w-max px-[2.5rem] py-[.5rem] rounded-md text-white font-semibold"
            type="submit"
          >
            {router.locale === 'ar-SA'? 'سجل الآن' : 'Submit Form'}
          </button>
        </Form>
      )}
    </Formik>
  );
}
