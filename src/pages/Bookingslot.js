import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { FaRegClock } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import ImageLight from "../assets/img/station.PNG";
import BookingslotForm from "../components/Forms/BookingslotForm";
import Modals from "./Modals";
import axios from "axios";

export default function Bookingslot(props) {
  const history = useHistory();
  console.log("Values", history);

  const params = useParams();
  console.log("Value1", params);

  const [slot, setSlot] = useState();
  const [loading, setLoading] = useState(true);
  const [connectorType, setConnectorType] = useState([]);
  const [selectedOption, setSelectedOption] = useState(
    params.connectortype?.trim()
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { setNotification } = props;

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    axios
      .get(`/v1/station/getStation/${params.stationid}`)
      .then((res) => {
        console.log("res..", res);
        if (res.status === 200) {
          setSlot(res.data);
          let options = res.data.station_connector_type?.split(",") || [];
          options = options.map((e) => e?.trim());
          setConnectorType(options);
        }
      })
      .catch((err) => {
        let message =
          typeof err.response !== "undefined"
            ? err.response.data.message
            : err.message;
        setErrorMessage(message);
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  function slotBooking(items) {
    console.log("Items : ", items);
    axios
      .post(`/v1/slot/add_slots`, items)
      .then((res) => {
        console.log("res..", res);
        if (res.data?.Notification) {
          setIsModalOpen(true);
          setNotification(res.data.Notification);
          setSelectedOption((prev) => prev);
          console.log("Notification : ", res.data.Notification);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (loading) return <h2> Loading... </h2>;
  if (errorMessage) return <h2>{errorMessage}</h2>;
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        <div className="ml-10 md:w-1/2">
          <div className="mb-4 mt-24">
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Typography color="text.primary">Home</Typography>
              <Typography color="text.primary">Booking Slots</Typography>
            </Breadcrumbs>
          </div>

          <img
            aria-hidden="true"
            className="mb-5"
            style={{ width: "500px", height: "250px" }}
            src={ImageLight}
            alt="Office"
          />
          <p className="mb-2">{slot?.station_name}</p>

          <div className="mb-2 flex flex-col md:flex-row space-x-3">
            <p>
              <HiLocationMarker style={{ color: "red" }} />
            </p>
            <p>
              {" "}
              {slot?.station_area},{slot?.station_city}
            </p>
          </div>
          <div className="mb-2 flex flex-col md:flex-row space-x-3">
            <p>
              <FaRegClock style={{ color: "red" }} />
            </p>
            <p> {slot?.station_working_time}</p>
          </div>
        </div>
        <main className="mt-32 -ml-10">
          {connectorType.length > 0 ? (
            <BookingslotForm
              slot={slot}
              connectorType={connectorType}
              handleChange={handleChange}
              params={params}
              slotBooking={slotBooking}
              selectedOption={selectedOption}
            />
          ) : null}
          <Modals isModalOpen={isModalOpen} closeModal={closeModal} />
        </main>
      </div>
    </div>
  );
}
