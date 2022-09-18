import RadioGroup from "./RadioGroup";
import InputField from "./InputField";
import { Field, Form, Formik, ErrorMessage } from "formik";
import SelectField from "./SelectField";
import { submissionForm } from "../../../../utils/validation/schemas";
export default function SubmissionForm() {
  return (
    <Formik
      initialValues={submissionForm.formInitData}
      onSubmit={(values, { resetForm }) => {
        resetForm();
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
              options={["1", "2", "3"]}
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
              options={["1", "2", "3"]}
            />
          </div>
          <label className="flex gap-2 items-center font-bold">
            <Field type="checkbox" className="rounded-md" name="isAgreeTerms" />
            I Accept The
            <span className="text-secondary">Terms And Conditions</span>
          </label>
          <ErrorMessage name="isAgreeTerms" />
          <button
            className="bg-secondary w-max px-[2.5rem] py-[.5rem] rounded-md text-white font-semibold"
            type="submit"
          >
            Register Now
          </button>
        </Form>
      )}
    </Formik>
  );
}
