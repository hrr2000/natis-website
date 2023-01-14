import RadioGroup from "./RadioGroup";
import InputField from "../../../common/InputField";
import { Field, Form, Formik, ErrorMessage } from "formik";
import SelectField from "../../../common/SelectField";
import { submissionForm } from "../../../../utils/validation/schemas";
import { awaitTimeout } from "../../../../utils/functions";
import { useRouter } from "next/router";

export default function SubmissionForm({
  setModalState,
  classes
}: {
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
          <div className="lg:grid lg:grid-cols-3 gap-7 flex flex-col">
            <InputField id="full-name" name="fullName" required />
            <InputField id="identifier" name="identifier" required />
          </div>
          <div>
            <RadioGroup name="isUsaCitizen" id="is-usa-citizen" required>
              {(isUsaCitizen) => {
                return (
                  !isUsaCitizen && (
                    <SelectField
                      name="citizenType"
                      id="citizen-type"
                      options={[
                        "Resident alien",
                        "Refugee/asylee",
                        "Temporary protected status",
                        "None of these",
                      ]}
                      required
                    />
                  )
                );
              }}
            </RadioGroup>
          </div>
          <div className="lg:grid lg:grid-cols-3 gap-7 flex flex-col">
            <InputField id="address" name="address" />
            <InputField id="city" name="city" />
            <InputField id="state" name="state" required />
            <InputField id="zip-code" name="zipCode" />
            <InputField id="telephone" name="telephone" required />
            <InputField id="email" name="email" required />
            <InputField id="program-course" name="programCourse" required />
          </div>
          <div className="lg:grid lg:grid-cols-3 gap-7 flex flex-col">
            <SelectField
              required
              name="courseNumber"
              id="course-number"
              options={classes?.map((item) => item.title)}
            />
            <InputField
              id="total-clock-hours"
              label="total clock hours"
              name="totalClockHours"
              required
            />
            <SelectField
              required
              name="enrollmentPeriodTerm"
              id="enrollment-period-term"
              options={["Fall", "Winter", "Spring", "Summer"]}
            />
          </div>
          <label className="flex gap-2 items-center font-bold">
            <Field type="checkbox" className="rounded-md" name="isAgreeTerms" />
            {router.locale === 'ar-SA'? 'أنا أوافق' : 'I Accept The'}
            <span className="text-secondary">{router.locale === 'ar-SA'? 'السياسات والخصوصيات' : 'Terms And Conditions'}</span>
          </label>
          <ErrorMessage name="isAgreeTerms" />
          <button
            className="bg-secondary w-max px-[2.5rem] py-[.5rem] rounded-md text-white font-semibold"
            type="submit"
          >
            {router.locale === 'ar-SA'? 'سجل الآن' : 'Register Now'}
          </button>
        </Form>
      )}
    </Formik>
  );
}
