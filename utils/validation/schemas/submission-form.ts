import * as Yup from "yup";
import errorMessages from "../errors";
const submissionSchema = Yup.object({
  fullName: Yup.string().required(errorMessages.req),
  identifier: Yup.number()
    .typeError(errorMessages.num)
    .required(errorMessages.req),
  address: Yup.string(),
  city: Yup.string(),
  state: Yup.string().required(errorMessages.req),
  zipCode: Yup.number().typeError(errorMessages.num),
  isUsaCitizen: Yup.boolean().required(),
  citizenType: Yup.string().when("isUsaCitizen", {
    is: false,
    then: (schema) => schema.required(errorMessages.req),
  }),
  isAgreeTerms: Yup.boolean().equals(
    [true],
    "You have to accept the terms of service"
  ),
  telephone: Yup.number()
    .typeError(errorMessages.num)
    .required(errorMessages.req),
  email: Yup.string().email().required(errorMessages.req),
  programCourse: Yup.string().required(errorMessages.req),
  courseNumber: Yup.number()
    .typeError(errorMessages.num)
    .required(errorMessages.req),
  totalClockHours: Yup.number()
    .typeError(errorMessages.num)
    .required(errorMessages.req),
  enrollmentPeriodTerm: Yup.string().required(errorMessages.req),
});

const formInitData = {
  city: "",
  email: "",
  state: "",
  address: "",
  zipCode: "",
  fullName: "",
  telephone: "",
  identifier: "",
  citizenType: "",
  isUsaCitizen: true,
  isAgreeTerms: false,
  courseNumber: "",
  programCourse: "",
  totalClockHours: "",
  enrollmentPeriodTerm: "",
};

const submissionForm = { submissionSchema, formInitData };
export default submissionForm;
