import React, { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui";
import { useHistory } from "react-router-dom";
import PaymentSuccess from "./PaymentSuccess";

function PaymentModal() {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <u
        style={{ textColor: "#478B60" }}
        className="mt-14 mx-16 w-28 text-sm font-small text-green-400 dark:text-green-300 hover:underline "
        onClick={openModal}
      >
        {" "}
        + Add Money
      </u>{" "}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        style={{ width: "380px", height: "330px" }}
      >
        <ModalHeader style={{ marginTop: "-20px", marginLeft: "5px" }}>
          <p>Add Money to Find Green Wallet</p>
        </ModalHeader>
        <hr />
        <ModalBody>
          <p className=" mt-4 ml-2 text-base">Available Balance - $ 45</p>
          <Box>
            <FormControl className="w-80">
              <OutlinedInput
                className="mt-4 ml-2"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Button className="mt-5 ml-2 mr-1" layout="outline" size="large">
            $ 10
          </Button>
          <Button className="ml-2 mr-1 " layout="outline" size="large">
            $ 20
          </Button>
          <Button className="ml-2 mr-1" layout="outline" size="large">
            $ 30
          </Button>
          <Button className="ml-2 mr-1 " layout="outline" size="large">
            $ 40
          </Button>
        </ModalBody>
        {/* <ModalFooter> */}
        {/* I don't like this approach. Consider passing a prop to ModalFooter
         * that if present, would duplicate the buttons in a way similar to this.
         * Or, maybe find some way to pass something like size="large md:regular"
         * to Button
         */}
        <hr />
        <div className="mt-3 ml-20">
          <Button
            className="mr-3 rounded-full  "
            layout="outline"
            onClick={closeModal}
            size="large"
          >
            CANCEL
          </Button>
          <PaymentSuccess />
        </div>
        {/* </ModalFooter> */}
      </Modal>
    </>
  );
}

export default PaymentModal;
