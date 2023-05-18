import React, { useState, useRef } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "@windmill/react-ui";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";

function Filtermodal(props) {
  const { fetchData, isModalOpen, closeModal } = props;

  const [vehicle, setVehicle] = useState("");

  const handleVehicle = (event, val) => {
    setVehicle(val);
  };
  const [charger, setCharger] = useState("");

  const handleCharger = (event, val1) => {
    setCharger(val1);
  };
  const [connector, setConnector] = useState("");

  const handleConnector = (event, val2) => {
    setConnector(val2);
  };
  const [chargingStatus, setChargingStatus] = useState("");
  const handleChargingStatusChange = () => {
    setChargingStatus("Fast");
  };

  const label = { inputProps: { "aria-label": "Size switch demo" } };

  const handleSubmit = () => {
    console.log("state", vehicle);
    console.log("state1", charger);
    console.log("state2", connector);
    let obj = {
      vehicle: vehicle,
      charger: charger,
      connector: connector,
      chargingStatus: chargingStatus,
    };
    fetchData(obj);
  };

  const handleClear = () => {
    setVehicle("");
    setCharger("");
    setConnector("");
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      style={{ width: "100%", height: "400px" }}
    >
      <div>
        <ModalHeader className="-mt-4 ml-1">
          <p className="text-base mt-2">Filter</p>
          <div className="border-t border-cool-gray-600 my-1" />
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="mt-2 text-xs mb-2">Vehicle Type</div>
              <div>
                <ToggleButtonGroup
                  color="success"
                  value={vehicle}
                  exclusive
                  onChange={handleVehicle}
                  aria-label="Platform"
                >
                  <ToggleButton
                    classname="text-sm "
                    style={{
                      borderRadius: "20px",
                      fontSize: 10,
                      width: "50px",
                      height: "30px",
                    }}
                    value="Car"
                  >
                    Car
                  </ToggleButton>
                  <ToggleButton
                    style={{
                      borderRadius: "20px",
                      marginLeft: "10px",
                      width: "50px",
                      fontSize: 10,
                      height: "30px",
                    }}
                    value="Bike"
                  >
                    Bike
                  </ToggleButton>
                  <ToggleButton
                    style={{
                      borderRadius: "20px",
                      marginLeft: "10px",
                      width: "50px",
                      fontSize: 10,
                      height: "30px",
                    }}
                    value="Auto"
                  >
                    Auto
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>

              <div className="mt-2 text-xs mb-2">Charger Type</div>
              <p style={{ marginLeft: "-25px" }}>
                <ToggleButtonGroup
                  color="success"
                  value={charger}
                  exclusive
                  onChange={handleCharger}
                  aria-label="Platform"
                >
                  <ToggleButton
                    style={{
                      borderRadius: "20px",
                      marginLeft: "30px",
                      width: "50px",
                      fontSize: 10,
                      height: "30px",
                    }}
                    value="All"
                  >
                    All
                  </ToggleButton>
                  <ToggleButton
                    style={{
                      borderRadius: "20px",
                      marginLeft: "10px",
                      width: "50px",
                      fontSize: 10,
                      height: "30px",
                    }}
                    value="AC"
                  >
                    AC
                  </ToggleButton>
                  <ToggleButton
                    style={{
                      borderRadius: "20px",
                      marginLeft: "10px",
                      width: "50px",
                      fontSize: 10,
                      height: "30px",
                    }}
                    value="DC"
                  >
                    DC
                  </ToggleButton>
                </ToggleButtonGroup>
              </p>

              <div className="mt-2 text-xs mb-2">Connector Type</div>
              <p style={{ marginLeft: "-25px" }}>
                <ToggleButtonGroup
                  color="success"
                  value={connector}
                  exclusive
                  onChange={handleConnector}
                  aria-label="Platform"
                >
                  <ToggleButton
                    style={{
                      borderRadius: "20px",
                      marginLeft: "30px",
                      width: "85px",
                      fontSize: 10,
                      height: "30px",
                    }}
                    value="AC Type 1"
                  >
                    AC Type 1
                  </ToggleButton>
                  <ToggleButton
                    style={{
                      borderRadius: "20px",
                      marginLeft: "10px",
                      width: "85px",
                      fontSize: 10,
                      height: "30px",
                    }}
                    value="AC type 2"
                  >
                    AC Type 2
                  </ToggleButton>
                  <ToggleButton
                    style={{
                      borderRadius: "20px",
                      marginLeft: "10px",
                      width: "65px",
                      fontSize: 10,
                      height: "30px",
                    }}
                    value="CCS 1"
                  >
                    CCS 1
                  </ToggleButton>
                </ToggleButtonGroup>
              </p>
            </div>
          </div>

          <main className="flex items-center justify-center sm:p-5 ml-9 md:w-1/2">
            <div className="w-full mb-4 -mt-56">
              <p
                className="ml-56 mb-2"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                Available
                <div
                  className=""
                  style={{ marginLeft: "150px", marginTop: "-30px" }}
                >
                  <Switch
                    {...label}
                    defaultChecked
                    style={{ color: "#478B60" }}
                  />
                </div>
              </p>

              <p
                className="ml-56 mb-2"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                Show Favourite Stations
                <div
                  className=""
                  style={{ marginLeft: "150px", marginTop: "-30px" }}
                >
                  <Switch {...label} style={{ color: "#478B60" }} />
                </div>
              </p>
              <p
                className="ml-56 mb-2"
                style={{
                  whiteSpace: "nowrap",
                }}
                name="charging_status"
              >
                Fast Charging
                <div style={{ marginLeft: "150px", marginTop: "-30px" }}>
                  <Switch
                    {...label}
                    style={{ color: "#478B60" }}
                    onChange={handleChargingStatusChange}
                  />
                </div>
              </p>
              <p
                className="ml-56"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                Distance
                <div style={{ marginLeft: "70px", marginTop: "-20px" }}>
                  <Box width={170}>
                    <Slider
                      defaultValue={50}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      style={{ color: "#478B60" }}
                    />
                  </Box>
                </div>
              </p>
            </div>
          </main>
        </ModalBody>

        <div className=" text-left space-x-2">
          <Button
            className="rounded-3xl"
            style={{
              backgroundColor: "#478B60",
            }}
            onClick={handleSubmit}
          >
            APPLY
          </Button>
          <Button
            layout="outline"
            onClick={closeModal}
            style={{ borderRadius: "20px", marginRight: "250px" }}
          >
            CANCEL
          </Button>
          <Button
            style={{ borderRadius: "20px", backgroundColor: "#478B60" }}
            onClick={handleClear}
          >
            CLEAR
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default Filtermodal;
