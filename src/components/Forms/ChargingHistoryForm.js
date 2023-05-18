import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useHistory } from "react-router-dom";
import StarRating from "../StarRating";

export default function ChargingHistoryForm(props) {
  const history = useHistory();
  const { historyData } = props;

  const id = historyData?.stationId;

  const noDataMessage =
    typeof historyData === "string" ? historyData : "No Booking Data";

  return (
    <Box className="mt-9">
      <TableContainer style={{ width: "1000px" }}>
        <div style={{ overflowY: "auto", height: "50vh" }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-base font-medium text-cool-gray-600 bg-teal-50"
                  style={{ borderBottom: "none" }}
                >
                  Charging History
                </TableCell>
              </TableRow>
              <TableRow className="text-base bg-teal-50">
                <TableCell style={{ color: "#7B7B7B" }}> Date & Time</TableCell>
                <TableCell style={{ color: "#7B7B7B" }}>Stations</TableCell>
                <TableCell style={{ color: "#7B7B7B" }}>
                  {" "}
                  Your Ratings
                </TableCell>
                <TableCell style={{ color: "#7B7B7B" }}>Amount</TableCell>
                <TableCell style={{ color: "#7B7B7B" }}>Slot</TableCell>
                <TableCell style={{ color: "#7B7B7B" }}>Time</TableCell>
                <TableCell style={{ color: "#7B7B7B" }}> Status</TableCell>
              </TableRow>
            </TableHead>

            {typeof historyData !== "string" ? (
              historyData?.map((data, index) => {
                return (
                  <TableBody className="text-sm text-black bg-teal-50">
                    <TableCell>{data.createdAt}</TableCell>
                    <TableCell
                      style={{ cursor: "pointer" }}
                      className="hover:underline"
                      onClick={(historyData) => {
                        history.push({
                          pathname: `/app/Bookingslot/${data.stationId}/${data.connectorType}`,
                        });
                      }}
                    >
                      {data.stationName}
                    </TableCell>
                    <TableCell>
                      <div
                        className="icon-style"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <StarRating star={data.rating} />
                      </div>
                    </TableCell>
                    <TableCell>
                      {data.tariff}
                      <br />
                      <div className="text-xs" style={{ color: "#7B7B7B" }}>
                        Paid via online
                      </div>
                    </TableCell>
                    <TableCell>{data.slottime}</TableCell>
                    <TableCell>{data.duration}</TableCell>
                    <TableCell style={{ color: "#31D88A" }}>
                      {data.bookingStatus}
                    </TableCell>
                  </TableBody>
                );
              })
            ) : (
              <TableBody>
                <div className="mt-8 text-center"> {noDataMessage}</div>
              </TableBody>
            )}
          </Table>
        </div>
      </TableContainer>
    </Box>
  );
}
