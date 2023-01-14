import InputField from "../../../common/InputField";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { contactForm } from "../../../../utils/validation/schemas";
import { awaitTimeout } from "../../../../utils/functions";
import {useRouter} from "next/router";

export default function SubmissionForm({setModalState}: {
  setModalState: (state: number) => void;
}) {
  const router = useRouter();
  return (
    <Formik
      initialValues={contactForm.formInitData}
      onSubmit={async (values, { resetForm }) => {
        setModalState(1);
        fetch("/api/contact", {
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
      validationSchema={contactForm.contactSchema}
    >
      {() => (
        <Form className="flex flex-col gap-9">
          <div className="lg:grid lg:grid-cols-3 gap-7 flex flex-col">
            <InputField id="full-name" name="fullName" required />
            <InputField id="email" name="email" required />
          </div>
          <div className="flex flex-col">
            <InputField id="telephone" name="telephone" required />
            <InputField textarea id="message" name="message" required />
          </div>
          <button
            className="bg-secondary w-max px-[2.5rem] py-[.5rem] rounded-md text-white font-semibold"
            type="submit"
          >
            {router.locale === 'ar-SA'? 'إرسال' : 'Send'}
          </button>
        </Form>
      )}
    </Formik>
  );
}
