import React, { useState } from "react";
import CancelBooking from "./CancelBooking";
import { Modal, ModalHeader, ModalBody, Button } from "@windmill/react-ui";
import { Link, useHistory } from "react-router-dom";

function BookingModal() {
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
        className="text-sm font-small text-red-400 dark:text-red-500 hover:underline "
        onClick={openModal}
      >
        Cancel
      </u>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        style={{ width: "350px", height: "180px" }}
      >
        <ModalBody>
          <center>
            <h5
              style={{
                color: "#040308",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "25px",
              }}
            >
              Are you sure you want to cancel this booking?
            </h5>
          </center>
        </ModalBody>
        {/* <ModalFooter> */}
        {/* I don't like this approach. Consider passing a prop to ModalFooter
         * that if present, would duplicate the buttons in a way similar to this.
         * Or, maybe find some way to pass something like size="large md:regular"
         * to Button
         */}
         <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
      
         <Button
          style={{
            backgroundColor: "white",
            color: "#478B60",
            borderColor: "#478B60",
            borderRadius: "5px",
            marginLeft: "60px",
            width: "80px",
            height: "40px",
          }}
          onClick={closeModal}
          className="mt-4"
          block
          type="submit"
          value="submit"
        >
          Back
        </Button>

      
                   <CancelBooking />
          </div>
        {/* </ModalFooter> */}
      </Modal>
    </>
  );
}

export default BookingModal;
