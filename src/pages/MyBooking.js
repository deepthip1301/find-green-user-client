import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import MyBookingForm from "../components/Forms/MyBookingForm";
export default function MyBooking() {
  const history = useHistory();
  return (
    <main className="flex items-left sm:p-12 md:w-11/12 mt-20">
      <div className="w-full" style={{ marginRight: "150px" }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="Homescreen">
            Home
          </Link>
          <Typography color="text.primary">My Booking</Typography>
        </Breadcrumbs>
        <MyBookingForm />
      </div>
    </main>
  );
}
