import * as yup from "yup";

const signupSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  firstName: yup.string().required("firstName is required"),
  lastName: yup.string().required("lastName is required"),
  password: yup.string().required("Password is required"),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export default signupSchema;
