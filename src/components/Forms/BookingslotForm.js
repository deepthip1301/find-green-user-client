import { Formik, Form, Field } from "formik";
import { Label, Select, Button, HelperText } from "@windmill/react-ui";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import moment from "moment";

function BookingslotForm(props) {
  const { slot, handleChange, connectorType, slotBooking, selectedOption } =
    props;
  const params = useParams();

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSelectDate = (date, index) => {
    const newDate = moment(date).format("YYYY-MM-DD");
    setSelectedDate(newDate);
    setSelectedButtonIndex(index);
  };

  // To display three days  from Current date

  const dayList = [];
  const today = new Date();
  for (let i = 0; i < 3; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    dayList.push(nextDate);
  }

  // To display booking slot available timings

  const timeRange = slot?.station_working_time;
  const [start, end] = timeRange.split("-");

  const startTime = moment(start, "ha");
  const endTime = moment(end, "ha");

  const timeArray = [];

  while (startTime.isSameOrBefore(endTime)) {
    timeArray.push(startTime.format("h:mma"));
    startTime.add(1, "hour");
  }

  return (
    <Formik
      initialValues={{}}
      onSubmit={({ slotTime, workingtime }, { setStatus, setSubmitting }) => {
        let items = {
          userId: sessionStorage.getItem("userId"),
          stationId: params.stationid,
          bookingDate: selectedDate,
          stationName: slot?.station_name,
          duration: slotTime,
          connectorType: selectedOption,
          capacity: slot?.station_capacity,
          tariff: slot?.station_tariff,
          payment: "ONLINE",
          slottime: workingtime,
        };
        slotBooking(items);
      }}
    >
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <div className="text-base text-left">
            <div className="mb-1 flex md:flex-row space-x-14">
              <p className="text-cool-gray-400">Connector Type :</p>
              <Label className=" w-40">
                <Field
                  as={Select}
                  name="connectortype"
                  onChange={handleChange}
                  value={selectedOption}
                >
                  {connectorType.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              </Label>
            </div>
            <div className="mb-1 flex flex-col md:flex-row space-x-20">
              <p className="text-cool-gray-400">Charger Type :</p>
              <p className="text-gray-900"> {slot?.station_charger_type}</p>
            </div>
            <div className="mb-1 flex flex-col md:flex-row space-x-28">
              <p className="text-cool-gray-400">Capacity :</p>
              <p className="text-gray-900"> {slot?.station_capacity}</p>
            </div>
            <div className="mb-1 flex flex-col md:flex-row space-x-36">
              <p className="text-cool-gray-400">Tariff:</p>
              <p className="text-gray-900">{slot?.station_tariff}</p>
            </div>
            <div className="mb-6 flex flex-col md:flex-row space-x-28">
              <p className="text-cool-gray-400">Amenities:</p>
              <p className="text-gray-900">{slot?.station_amenities}</p>
            </div>
            <div className="mb-3">
              <TextField
                type="date"
                value={selectedDate}
                sx={{ width: 350 }}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  min: new Date().toISOString().slice(0, 10),
                  max: new Date(new Date().setDate(new Date().getDate() + 5))
                    .toISOString()
                    .slice(0, 10),
                }}
              />
            </div>
            <div className="mb-5 flex flex-col md:flex-row space-x-7">
              {dayList.map((date, index) => (
                <Button
                  key={date}
                  className="border-black"
                  style={{
                    width: "100px",
                    height: "50px",
                    backgroundColor:
                      selectedButtonIndex === index ? "#75A88859" : "white",
                    color: selectedButtonIndex === index ? "white" : "black",
                    borderColor:
                      selectedButtonIndex === index ? "#75A888" : "gray",
                  }}
                  block
                  onClick={() => {
                    handleSelectDate(date, index);
                  }}
                >
                  {date.toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "short",
                  })}
                </Button>
              ))}
            </div>

            <div className="mb-3 flex flex-col md:flex-row  space-x-20 ">
              <p className="mt-2 text-cool-gray-400"> Slots available :</p>
              <Label className=" w-40">
                <Field as={Select} name="workingtime">
                  {timeArray.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </Field>
                {status && <HelperText valid={false}>{status}</HelperText>}
              </Label>
            </div>
            <div className="mb-4 flex flex-col md:flex-row  space-x-24 ">
              <p className="mt-2  text-cool-gray-400"> Select Time : </p>
              <Label className=" w-40">
                <Field as={Select} name="slotTime" type="text">
                  <option value="15">15 Min</option>
                  <option value="30">30 Min</option>
                  <option value="45">45 Min</option>
                  <option value="60">60 Min</option>
                </Field>
              </Label>
              {status && <HelperText valid={false}>{status}</HelperText>}
            </div>
            <div className="ml-24 flex flex-col md:flex-row  space-x-5">
              <Button
                style={{
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#FFFFFF",
                  color: "#478B60",
                  borderColor: "#478B60",
                }}
                className="mt-4 rounded-sm"
                block
                type="submit"
                value="submit"
              >
                Cancel
              </Button>
              <Button
                style={{
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#478B60",
                  color: "white",
                  borderColor: "#478B60",
                }}
                className="mt-4 rounded-sm"
                block
                type="submit"
                value="submit"
              >
                Proceed
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default BookingslotForm;
