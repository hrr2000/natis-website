import InputField from "../../../common/InputField";
import { Field, Form, Formik } from "formik";
import { submissionForm } from "../../../../utils/validation/schemas";
import { awaitTimeout } from "../../../../utils/functions";
import { useRouter } from "next/router";
import React from "react";
import {pdfUploadForm} from "../../../../utils/validation/schemas";

export default function SubmissionForm({setModalState}: {
  setModalState: (state: number) => void;
}) {
  const router = useRouter();

  return (
    <Formik
      initialValues={pdfUploadForm.formInitData}
      onSubmit={async (values, { resetForm }) => {
        console.log(values);
        setModalState(1);
        fetch("/api/apply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
      }}
      validationSchema={pdfUploadForm.submissionSchema}
    >
      {() => (
        <Form className="flex flex-col gap-9">
          <div>
            <div className="lg:grid lg:grid-cols-2 gap-7 flex flex-col">
              <InputField id="fullName" name="fullName" required />
              <InputField id="email" name="email" required />
            </div>
            <div className="lg:grid lg:grid-cols-2 gap-7 flex flex-col mt-5">
              <input className={`rounded-md  placeholder:text-placeholder border-3 focus:border-secondary focus:ring-secondary`} name="file" id="file" type="file" required />
            </div>
          </div>
          <button
            className="bg-secondary hover:opacity-90 active:opacity-70 w-max px-[2.5rem] py-[.5rem] rounded-md text-white font-semibold"
            type="submit"
          >
            {router.locale === 'ar-SA'? 'أرسل' : 'Submit Form'}
          </button>
        </Form>
      )}
    </Formik>
  );
}
