import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { Input, Label, HelperText, Button } from "@windmill/react-ui";
import { useHistory } from "react-router-dom";

function CreateAccountForm() {
  const { register } = useContext(AuthContext);
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        email: "",
        mobilenumber: "",
        fname: "",
        lname: "",
        country: "",
        Pincode: "",
      }}
      validationSchema={Yup.object().shape({
        fname: Yup.string().required("First Name is required"),
        lname: Yup.string().required("Last Name is required"),
        email: Yup.string().email().required("Email is required"),
        mobilenumber: Yup.string().required("Mobile Number is required"),
        country: Yup.string().required("Country Name is required"),
        Pincode: Yup.string().required("Pincode is required"),
      })}
      onSubmit={(
        { email, mobilenumber, fname, lname, country, Pincode },
        { setStatus, setSubmitting }
      ) => {
        setSubmitting(true);
        setStatus();

        let postData = {
          name: fname + " " + lname,
          email: email,
          mobileNumber: mobilenumber.toString(),
          country: country,
          postalCode: Pincode,
        };
        console.log("submit", postData);
        register(postData)
          .then((res) => {
            if (res.status === 200) {
              sessionStorage.setItem("userId", res.data.data.userId);
              sessionStorage.setItem("email", res.data.data.email);
              history.push({ pathname: "/auth/register-otp" });
            }
          })
          .catch((error) => {
            if (error.response) {
              setStatus(error.response.data.message);
            } else {
              setStatus("Some error occured. Please try again.");
            }
            setSubmitting(false);
          });
      }}
    >
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Label className="w-80 h-10 mb-4">
              <Field
                className="mt-4 border-2 rounded-md "
                as={Input}
                name="fname"
                type="text"
                placeholder="First Name"
              />
              {errors.fname && touched.fname ? (
                <div>
                  <HelperText valid={false}>{errors.fname}</HelperText>
                </div>
              ) : null}
            </Label>

            <Label className="w-80 h-10 mb-4">
              <Field
                className="mt-4 border-2 rounded-md "
                as={Input}
                name="lname"
                type="text"
                placeholder="Last Name"
              />
              {errors.lname && touched.lname ? (
                <div>
                  <HelperText valid={false}>{errors.lname}</HelperText>
                </div>
              ) : null}
            </Label>
          </div>

          <Label className="w-full h-10 mb-4">
            <Field
              className="mt-4 border-2 rounded-md "
              as={Input}
              name="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && touched.email ? (
              <div>
                <HelperText valid={false}>{errors.email}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="w-full h-10 mb-4">
            <Field
              className="mt-4 border-2 rounded-md "
              as={Input}
              name="mobilenumber"
              type="text"
              placeholder="Mobile Number"
            />
            {errors.mobilenumber && touched.mobilenumber ? (
              <div>
                <HelperText valid={false}>{errors.mobilenumber}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="w-full h-10 mb-4">
            <Field
              className="mt-4 border-2 rounded-md "
              as={Input}
              name="country"
              type="text"
              placeholder="Country Name"
            />
            {errors.country && touched.country ? (
              <div>
                <HelperText valid={false}>{errors.country}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="w-full h-10 mb-4">
            <Field
              className="mt-4 border-2 rounded-md "
              as={Input}
              name="Pincode"
              type="text"
              placeholder="Pincode"
            />
            {errors.Pincode && touched.Pincode ? (
              <div>
                <HelperText valid={false}>{errors.Pincode}</HelperText>
              </div>
            ) : null}
          </Label>

          <Button
            style={{ backgroundColor: "#478B60", borderRadius: "5px" }}
            className="mt-4"
            block
            type="submit"
            value="submit"
            disabled={isSubmitting}
          >
            Create Account
          </Button>
          {status && <HelperText valid={false}>{status}</HelperText>}
        </Form>
      )}
    </Formik>
  );
}

export default CreateAccountForm;
