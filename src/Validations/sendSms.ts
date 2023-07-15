import * as yup from "yup";

const Smschema = yup.object().shape({
  senderId: yup.string().required("SenderId is required"),
  message: yup.string().required("Message is required"),
});

export default Smschema;
