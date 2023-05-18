import { Formik, Form, Field } from "formik";
import { Input, Label, Select, Button, HelperText } from "@windmill/react-ui";

function ProfileForm(props) {
  const { userData, updateUser } = props;

  return (
    <Formik
      initialValues={{
        name: userData.Username,
        vmodel: userData.Vehicle_model,
        mobileno: userData.Phone_number,
        vname: userData.Vehicle_number,
        email: userData.Email,
        Country: userData.Country,
        ctype: userData.Connector_type,
        pincode: userData.Postal_code,
      }}
      onSubmit={(
        { name, vmodel, mobileno, vname, Country, ctype, pincode },
        { setStatus, setSubmitting }
      ) => {
        let items = {
          name: name,
          mobileNumber: mobileno,
          country: Country,
          postalCode: pincode,
          vehicle_modal: vmodel,
          vehicle_no: vname,
          connector_type: ctype,
        };
        updateUser(items);
      }}
    >
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "5px" }}
            >
              <Field className="mt-4" as={Input} name="name" type="text" />
            </Label>
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "5px" }}
            >
              <Field
                className="mt-4 w-auto"
                as={Input}
                name="vmodel"
                type="text"
                placeholder="Vehicle Model"
              />
            </Label>
          </div>
          <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "5px" }}
            >
              <Field className="mt-4" as={Input} name="mobileno" type="text" />
            </Label>
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "5px" }}
            >
              <Field
                className="mt-4"
                as={Input}
                name="vname"
                type="text"
                placeholder="Vehicle Name"
              />
            </Label>
          </div>
          <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "5px" }}
            >
              <Field className="mt-4" as={Input} name="email" type="text" />
            </Label>
            {status && <HelperText valid={false}>{status}</HelperText>}
            <Label className=" w-80">
              <Field className="mt-4" as={Select} name="ctype" type="text">
                <option>DC</option>
                <option>AC Type1</option>
                <option>AC Type2</option>
              </Field>
            </Label>
          </div>
          <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Label
              className="w-36"
              style={{ border: "1px", borderRadius: "5px" }}
            >
              <Field
                className="mt-4"
                as={Input}
                name="Country"
                type="text"
                placeholder="Country Name"
              />
            </Label>
            <Label
              className="w-36"
              style={{ border: "1px", borderRadius: "5px" }}
            >
              <Field
                className="mt-4"
                as={Input}
                name="pincode"
                type="text"
                placeholder="Pincode"
              />
            </Label>
          </div>
          <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Button
              style={{
                backgroundColor: "#FFFFFF",
                color: "#478B60",
                borderColor: "#478B60",
                borderRadius: "5px",
                marginLeft: "400px",
                marginTop: "15px",
                width: "120px",
                height: "40px",
              }}
              className="mt-4"
              type="reset"
            >
              Reset
            </Button>

            <Button
              style={{
                width: "120px",
                height: "40px",
                backgroundColor: "#478B60",
                color: "white",
                borderColor: "#478B60",
                borderRadius: "5px",
              }}
              className="mt-4"
              block
              type="submit"
              value="submit"
            >
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ProfileForm;
