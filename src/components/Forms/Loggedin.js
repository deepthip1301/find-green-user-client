import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";

import { Label, Input, HelperText, Button } from "@windmill/react-ui";

function Loggedin() {
  const { login } = useContext(AuthContext);
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
      })}
      onSubmit={({ email }, { setStatus, setSubmitting }) => {
        setSubmitting(true);
        setStatus();

        let loginData = {
          email: email,
        };
        console.log("submit", loginData);
        login(loginData)
          .then((res) => {
            if (res.status === 200) {
              sessionStorage.setItem("userId", res.data.data.userId);
              sessionStorage.setItem("email", res.data.data.email);
              history.push({ pathname: "/auth/login-otp" });
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
          <Label className="mt-4">
            <Field
              as={Input}
              name="email"
              type="text"
              placeholder="Enter email address"
            />
            {errors.mobilenumber && touched.mobilenumber ? (
              <div>
                <HelperText valid={false}>{errors.mobilenumber}</HelperText>
              </div>
            ) : null}
          </Label>

          <Button
            style={{ backgroundColor: "#478B60" }}
            className="mt-4 w-full rounded-md"
            type="submit"
            value="submit"
            disabled={isSubmitting}
          >
            Generate OTP
          </Button>
          {status && <HelperText valid={false}>{status}</HelperText>}

          <Button
            style={{
              backgroundColor: "#FFFFFF",
              color: "black",
              borderColor: "black",
            }}
            onClick={() => {
              history.push({ pathname: "/auth/create-account" });
            }}
            className="mt-4 w-full rounded-md"
            type="submit"
            value="submit"
            disabled={isSubmitting}
          >
            Register
          </Button>
          {status && <HelperText valid={false}>{status}</HelperText>}
        </Form>
      )}
    </Formik>
  );
}

export default Loggedin;
