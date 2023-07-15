import * as yup from "yup";

const ApiSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),

  environment: yup
    .string()
    .oneOf(["prod", "dev"], "Please select valid envirnment"),
});

export default ApiSchema;
