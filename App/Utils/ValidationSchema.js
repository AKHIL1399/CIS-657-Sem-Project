import * as Yup from "yup";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const registrationValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Must be a valid email")
    .required("Required"),
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  number: Yup.string().min(10).required("Required"),
  role: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Must be a valid email")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export { registrationValidationSchema, loginValidationSchema };
