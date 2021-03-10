import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={yup.object().shape({
        inputPhone: yup
          .string()
          .when('inputMobile', (inputMobile: string, schema: any) =>
            inputMobile
              ? schema
              : schema.required(
                  getContent('payroll.contacts.inputPhone.error.required')
                )
          )
          .test(
            'phone-format',
            getContent('payroll.contacts.inputPhone.error.format'),
            (value) => validators.australiaPhone(value)
          ),
        inputMobile: yup
          .string()
          .when('inputPhone', (inputPhone: any, schema: any) =>
            inputPhone
              ? schema
              : schema.required(
                  getContent('payroll.contacts.inputMobile.error.required')
                )
          )
          .test(
            'mobile-format',
            getContent('payroll.contacts.inputMobile.error.format'),
            (value) => validators.australianMobilePhone(value)
          ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
