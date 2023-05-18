import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { HelperText, Button } from "@windmill/react-ui";

function LandingForm() {
  const history = useHistory();
  return (
    <Formik>
      {({ status, isSubmitting }) => (
        <Form>
          <Button
            style={{ backgroundColor: "#478B60", borderRadius: "5px" }}
            onClick={() => {
              history.push({ pathname: "/auth/login" });
            }}
            className="mt-4"
            block
            type="submit"
            value="submit"
            disabled={isSubmitting}
          >
            Log In
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
              history.push({ pathname: "/auth/create-account" });
            }}
            className="mt-4"
            block
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

export default LandingForm;
