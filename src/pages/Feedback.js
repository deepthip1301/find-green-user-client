import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui";

import Rating from "@mui/material/Rating";

function Feedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  const [value, setValue] = React.useState();
  return (
    <>
      <div className="mt-16 mb-8">
        <Button onClick={openModal}>Feedback</Button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        style={{ width: "432px", height: "257px" }}
      >
        <ModalHeader className="mt-1">Rate Tata Power </ModalHeader>
        <ModalBody>
          <p className="text-sm mb-4">How was your experience at Tata Power?</p>
          <center><Rating
            name="size-large"
      
            size="large"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          /></center>
        </ModalBody>

        <ModalFooter>
          <Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button className="w-full sm:w-auto" style={{backgroundColor:"#478B60"}}>Submit</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
export default Feedback;
