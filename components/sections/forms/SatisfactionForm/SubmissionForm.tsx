import RadioGroup from "../../../common/RadioGroup";
import InputField from "../../../common/InputField";
import { Field, Form, Formik, ErrorMessage } from "formik";
import SelectField from "../../../common/SelectField";
import { submissionForm } from "../../../../utils/validation/schemas";
import { awaitTimeout } from "../../../../utils/functions";
import { useRouter } from "next/router";
import React from "react";

const firstQuestionAnswers = [
  'Very satisfied',
  'Satisfied',
  'Neutral',
  'Dissatisfied',
  'dissatisfied'
]
const restQuestionAnswers = [
  'Poor',
  'Fair',
  'Good',
  'Very good',
  'Excellent',
  'Don’t Know'
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
            <RadioGroup name="q1" list={firstQuestionAnswers} id="q1" required />
            <p className={`font-bold`}>
              Q2. How would you rate the following aspects of your educational experience:
            </p>
            <div className={`px-5 py-5`}>
              <RadioGroup name="q2a" list={restQuestionAnswers} id="q2a" required />
              <RadioGroup name="q2b" list={restQuestionAnswers} id="q2b" required />
              <RadioGroup name="q2c" list={restQuestionAnswers} id="q2c" required />
              <RadioGroup name="q2d" list={restQuestionAnswers} id="q2d" required />
              <RadioGroup name="q2e" list={restQuestionAnswers} id="q2e" required />
              <RadioGroup name="q2f" list={restQuestionAnswers} id="q2f" required />
              <RadioGroup name="q2g" list={restQuestionAnswers} id="q2g" required />
            </div>
            <InputField textarea rows={5} id="q3" name="q3" required />
            <p className={`font-bold`}>
              Q4. How would you rate the following support services and quality of campus facilities:
            </p>
            <div className={`px-5 py-5`}>
              <RadioGroup name="q4a" list={restQuestionAnswers} id="q4a" required />
              <RadioGroup name="q4b" list={restQuestionAnswers} id="q4b" required />
              <RadioGroup name="q4c" list={restQuestionAnswers} id="q4c" required />
              <RadioGroup name="q4d" list={restQuestionAnswers} id="q4d" required />
              <RadioGroup name="q4e" list={restQuestionAnswers} id="q4e" required />
              <RadioGroup name="q4f" list={restQuestionAnswers} id="q4f" required />
              <RadioGroup name="q4g" list={restQuestionAnswers} id="q4g" required />
            </div>
            <InputField textarea rows={5} id="q5" name="q5" required />
            <p className={`font-bold`}>
              Q6. How would you rate the following aspects of student life at the school:
            </p>
            <div className={`px-5 py-5`}>
              <RadioGroup name="q6a" list={restQuestionAnswers} id="q6a" required />
              <RadioGroup name="q6b" list={restQuestionAnswers} id="q6b" required />
              <RadioGroup name="q6c" list={restQuestionAnswers} id="q6c" required />
              <RadioGroup name="q6d" list={restQuestionAnswers} id="q6d" required />
              <RadioGroup name="q6e" list={restQuestionAnswers} id="q6e" required />
              <RadioGroup name="q6f" list={restQuestionAnswers} id="q6f" required />
              <RadioGroup name="q6g" list={restQuestionAnswers} id="q6g" required />
            </div>
            <InputField textarea rows={5} id="q7" name="q7" required />
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
