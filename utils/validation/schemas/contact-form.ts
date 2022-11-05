import * as Yup from "yup";
import errorMessages from "../errors";
const contactSchema = Yup.object({
  fullName: Yup.string().required(errorMessages.req),
  telephone: Yup.number()
    .typeError(errorMessages.num)
    .required(errorMessages.req),
  email: Yup.string().email().required(errorMessages.req),
  message: Yup.string().required(errorMessages.req),
});

const formInitData = {
  email: "",
  fullName: "",
  telephone: "",
  message: "",
};

const contactForm = { contactSchema, formInitData };
export default contactForm;
