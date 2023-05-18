import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Card, CardBody } from "@windmill/react-ui";
import { Link } from "react-router-dom";
import { Label, Input, HelperText, Button } from "@windmill/react-ui";
import PaymentModal from "../Modals/PaymentModal";
export default function PaymentForm() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    
    <FormControl>
      
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        color="success"
      >
        <div className="flex flex-col md:flex-row space-x-16">
          <div className="md:w-1/3">
            <Card className="mt-6 w-96 bg-green-50 ">
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400">
                  <FormControlLabel
                    value="Card1"
                    control={<Radio color="success"/>}
                    label="American Express 5309 89** **** 7802"
                  />
                </p>
              </CardBody>
            </Card>
            </div>
          <Card className="mt-6 w-96 bg-green-50">
            <CardBody>
              <p className="text-gray-600 dark:text-gray-400">
                <FormControlLabel
                  value="Card2"
                  control={<Radio color="success"/>}
                  label="Find Green Wallet Available Balance $5"
                />
              </p>
            </CardBody>
          </Card>  
          <PaymentModal/>
          
        </div>
        
        <div className="flex flex-col md:flex-row space-x-16">
          <div className="md:w-1/3">
            <Card className="mt-6 w-96 bg-green-50">
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400">
                  <FormControlLabel
                    value="Card3"
                    control={<Radio color="success"/>}
                    label="Master Card 8359 89** **** 8193"
                  />
                </p>
              </CardBody>
            </Card>
            
            </div>
          <Card className="mt-6 w-96 bg-green-50">
            <CardBody>
            <Link
              style={{ textColor: "#478B60"   }}
              className="font-small text-green-400 dark:text-green-300 hover:underline align-middle " 
            > + Add New Payment Method
            </Link>{" "}
            </CardBody>
          </Card>  
          
        </div>
        <Card className="mb-8 mt-6 w-96 bg-green-50">
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400">
                  <FormControlLabel
                    value="Card5"
                    control={<Radio color="success"/>}
                    label="UPI user@googlepay.ybl"
                  />
                </p>
              </CardBody>
            </Card>
      </RadioGroup>
      <Button className="w-32 mr-3.5" style={{backgroundColor:"#478B60"}}>Remove</Button>
     
    </FormControl>
  );
}
