import React, { useState } from "react";

import ImageDark from "../assets/img/fail.png";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui";
import { useHistory } from "react-router-dom";
function FailedModals() {
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
      

      <Modal isOpen={isModalOpen} onClose={closeModal}style={{width:'400px',height:'300px'}}>
        <ModalHeader>
          <center>
            <img
              style={{
                height: "70px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                gap: "10px",
              }}
              src={ImageDark}
              alt="Office"
            />

            <h3
              style={{
                color: "#040308",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "27px",
                lineHeight: "35px",
              }}
              className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-200"
            >
              Booking Failed
            </h3>
          </center>
        </ModalHeader>
        <ModalBody><center>Something went wrong, Please Try Again</center></ModalBody>
        {/* <ModalFooter> */}
          {/* I don't like this approach. Consider passing a prop to ModalFooter
           * that if present, would duplicate the buttons in a way similar to this.
           * Or, maybe find some way to pass something like size="large md:regular"
           * to Button
           */}
          <div className="hidden sm:block">
            <Button
              style={{ backgroundColor: "#478B60", borderRadius: "5px" ,marginLeft:'30px',width:'300px',height:'40px'}}
              onClick={() => {
                history.push({ pathname: "/app/Homescreen" });
              }}
              className="mt-4"
              block
              type="submit"
              value="submit"
            >
              Back 
            </Button>
          </div>
        {/* </ModalFooter> */}
      </Modal>
    </>
  );
}

export default FailedModals;
