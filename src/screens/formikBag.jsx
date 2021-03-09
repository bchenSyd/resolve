import React from "react";
import { useFormik } from "formik";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const SignupForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formikBag = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formikBag.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formikBag.handleChange}
            value={formikBag.values.firstName}
          />
          {formikBag.errors.firstName ? (
            <div>{formikBag.errors.firstName}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formikBag.handleChange}
            value={formikBag.values.lastName}
          />
          {formikBag.errors.lastName ? (
            <div>{formikBag.errors.lastName}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formikBag.handleChange}
            value={formikBag.values.email}
          />
          {formikBag.errors.email ? <div>{formikBag.errors.email}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
      <pre>
        {(() => {
          const { values, errors, touched } = formikBag;
          return JSON.stringify({ values, errors, touched }, null, 2);
        })()}
      </pre>
    </div>
  );
};

export default SignupForm;
