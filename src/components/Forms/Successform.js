import React from "react";
import { Formik, Form } from "formik";
import { HelperText, Button } from "@windmill/react-ui";
import { useHistory } from "react-router-dom";

function Successform() {
  const history = useHistory();
  return (
    <Formik>
      {({ status, isSubmitting }) => (
        <Form>
          <Button
            style={{ backgroundColor: "#478B60", borderRadius: "5px" }}
            onClick={() => {
              history.push({ pathname: "/app/Homescreen" });
            }}
            className="mt-4"
            block
            type="submit"
            value="submit"
            disabled={isSubmitting}
          >
            Continue
          </Button>
          {status && <HelperText valid={false}>{status}</HelperText>}
        </Form>
      )}
    </Formik>
  );
}

export default Successform;
