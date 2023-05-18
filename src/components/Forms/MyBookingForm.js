import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BookingModal from "../Modals/BookingModal";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function createData(datetime, station, payment, slot, time, cancel) {
  return { datetime, station, payment, slot, time, cancel };
}
function cancelData(datetime, station, payment, slot, time, cancel) {
  return { datetime, station, payment, slot, time, cancel };
}

const rows = [
  createData(
    "17Jan-2022, 10:12 AM",
    "Shell Recharge,Tokyo",
    "Paid by Credit Card",
    "3:00 PM",
    "15 Min",
    <BookingModal />
  ),
  createData(
    "27Jan-2022, 10:12 AM",
    "Tata Power,Tokyo",
    "Cash On Delivery",
    "5:00 PM",
    "30 Min",
    <BookingModal />
  ),
  createData(
    "23Jan-2022, 10:12 AM",
    "Shell Recharge,Monay",
    "Paid through Wallet",
    "8:00 PM",
    "20 Min",
    <BookingModal />
  ),
  createData(
    "29Jan-2022, 10:12 AM",
    "Adani Power,Monay",
    "Cash On Delivery",
    "7:00 PM",
    "25 Min",
    <BookingModal />
  ),
];

const cancelrows = [
  cancelData(
    "17Jan-2022, 10:12 AM",
    "Shell Recharge,Tokyo",
    "Refund in process",
    "3:00 PM",
    "15 Min",
    <Link
      style={{ textColor: "#478B60" }}
      className="text-sm font-small text-red-400 dark:text-red-300 hover:underline "
      to="/auth/login"
    >
      {" "}
      Visit Again
    </Link>
  ),
  cancelData(
    "27Jan-2022, 10:12 AM",
    "Tata Power,Tokyo",
    "Cash On Delivery",
    "5:00 PM",
    "30 Min",
    <Link
      style={{ textColor: "#478B60" }}
      className="text-sm font-small text-red-400 dark:text-red-300 hover:underline "
      to="/auth/login"
    >
      {" "}
      Visit Again
    </Link>
  ),
  cancelData(
    "23Jan-2022, 10:12 AM",
    "Shell Recharge,Monay",
    "Cash On Delivery",
    "8:00 PM",
    "20 Min",
    <Link
      style={{ textColor: "#478B60" }}
      className="text-sm font-small text-red-400 dark:text-red-500 hover:underline "
      to="/auth/login"
    >
      {" "}
      Visit Again
    </Link>
  ),
  cancelData(
    "29Jan-2022, 10:12 AM",
    "Adani Power,Monay",
    "Refund In Process",
    "7:00 PM",
    "25 Min",
    <Link
      style={{ textColor: "#478B60" }}
      className="text-sm font-small text-red-400 dark:text-red-300 hover:underline "
      to="/auth/login"
    >
      {" "}
      Visit Again
    </Link>
  ),
];

export default function MyBookingForm() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{ width: "100%" }}
      style={{ marginTop: "15px", marginLeft: "-20px" }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="success"
          indicatorColor="primary"
        >
          <Tab label="Upcoming Bookings" {...a11yProps(0)} />
          <Tab label="Cancelled Bookings" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TableContainer style={{ width: "1000px" }}>
          <Table>
            <TableHead>
              <TableRow className="text-base text-cool-gray-600 bg-teal-50">
                <TableCell> Date & Time</TableCell>
                <TableCell>Stations</TableCell>
                <TableCell>Payment</TableCell>
                <TableCell>Slot</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="text-base text-cool-gray-600 bg-teal-50">
              {rows.map((row) => (
                <TableRow key={row.datetime}>
                  <TableCell component="th" scope="row">
                    {row.datetime}
                  </TableCell>
                  <TableCell>{row.station}</TableCell>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>{row.slot}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.cancel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableContainer style={{ width: "1000px" }}>
          <Table>
            <TableHead>
              <TableRow className="text-base text-cool-gray-600 bg-teal-50">
                <TableCell> Date & Time</TableCell>
                <TableCell>Stations</TableCell>
                <TableCell>Payment</TableCell>
                <TableCell>Slot</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="text-base text-cool-gray-600 bg-teal-50">
              {cancelrows.map((row) => (
                <TableRow key={row.datetime}>
                  <TableCell component="th" scope="row">
                    {row.datetime}
                  </TableCell>
                  <TableCell>{row.station}</TableCell>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>{row.slot}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.cancel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  );
}
