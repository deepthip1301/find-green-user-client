import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { Label, Input, HelperText, Button } from "@windmill/react-ui";

function LoginOtpForm() {
  const { loginotp } = useContext(AuthContext);
  const { loginresend } = useContext(AuthContext);
  const history = useHistory();
  const email = sessionStorage.getItem("email");
  const atIndex = email.indexOf("@");
  const maskedEmail =
    email.substring(0, 5) + "*****" + email.substring(atIndex);

  function resendOTP() {
    let resend = {
      userId: sessionStorage.getItem("userId"),
      email: sessionStorage.getItem("email"),
    };
    console.log("Resend", resend);
    loginresend(resend)
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.message);
        } else {
          console.log("Some error occured. Please try again.");
        }
      });
  }
  return (
    <Formik
      initialValues={{
        one: "",
        two: "",
        three: "",
        four: "",
      }}
      onSubmit={({ one, two, three, four }, { setStatus, setSubmitting }) => {
        setSubmitting(true);
        setStatus();

        let otpField = {
          userId: sessionStorage.getItem("userId"),
          otp: one + "" + two + "" + three + "" + four,
        };

        console.log("submit", otpField);
        loginotp(otpField)
          .then((res) => {
            if (res.status === 200) {
              history.push({ pathname: "/app/Homescreen" });
              console.log("success");
            }
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data.message);
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
          <h3 className="mb-4 text-sm">We have sent an OTP to {maskedEmail}</h3>
          <div className=" flex mb-4 align-middle space-x-3 flex-row">
            <Label className=" ">
              <Field
                className=" border-2 rounded bg-transparent outline-none text-center font-semibold text-xl  border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                as={Input}
                name="one"
                type="text"
                autocomplete="off"
                style={{ width: "50px", height: "50px" }}
              />
              {errors.one && touched.one ? (
                <div>
                  <HelperText valid={false}>{errors.four}</HelperText>
                </div>
              ) : null}
            </Label>

            <Label>
              <Field
                className="border-2 rounded bg-transparent outline-none text-center font-semibold text-xl  border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                as={Input}
                name="two"
                type="text"
                autocomplete="off"
                style={{ width: "50px", height: "50px" }}
              />
              {errors.two && touched.two ? (
                <div>
                  <HelperText valid={false}>{errors.two}</HelperText>
                </div>
              ) : null}
            </Label>
            <Label>
              <Field
                className=" border-2 rounded bg-transparent outline-none text-center font-semibold text-xl  border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                as={Input}
                name="three"
                type="text"
                autocomplete="off"
                style={{ width: "50px", height: "50px" }}
              />
              {errors.three && touched.three ? (
                <div>
                  <HelperText valid={false}>{errors.three}</HelperText>
                </div>
              ) : null}
            </Label>
            <Label>
              <Field
                className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl  border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                as={Input}
                name="four"
                type="text"
                autocomplete="off"
                style={{ width: "50px", height: "50px" }}
              />
              {errors.four && touched.four ? (
                <div>
                  <HelperText valid={false}>{errors.four}</HelperText>
                </div>
              ) : null}
            </Label>
          </div>
          <h3 className="text-sm font-medium text-black-600 dark:text-black-400 ">
            Didn't receive the OTP? Click here to
            <Link
              className="text-sm font-medium text-red-600 dark:text-red-400 hover:underline"
              onClick={() => {
                resendOTP();
              }}
            >
              {" "}
              Resend OTP
            </Link>
          </h3>
          <Button
            style={{ backgroundColor: "#478B60", borderRadius: "5px" }}
            className="mt-4"
            block
            type="submit"
            value="submit"
            disabled={isSubmitting}
          >
            Confirm
          </Button>
          {status && <HelperText valid={false}>{status}</HelperText>}
          <Button
            style={{
              backgroundColor: "#FFFFFF",
              color: "black",
              borderColor: "black",
              borderRadius: "5px",
            }}
            onClick={() => {
              history.push({ pathname: "/auth/Login" });
            }}
            className="mt-4"
            block
            type="submit"
            value="submit"
            disabled={isSubmitting}
          >
            Go Back
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginOtpForm;
