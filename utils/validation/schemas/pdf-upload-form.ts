import * as Yup from "yup";
import errorMessages from "../errors";
const submissionSchema = Yup.object({
  fullName: Yup.string().required(errorMessages.req),
  email: Yup.string().email().required(errorMessages.req),
});

const formInitData = {
  fullName: "",
  email: "",
};

const pdfUploadForm = { submissionSchema, formInitData };
export default pdfUploadForm;
