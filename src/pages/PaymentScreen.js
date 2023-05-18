import React from "react";
import { Breadcrumbs, Typography, Box,Tab,TabPanel,value } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PaymentForm from "../components/Forms/PaymentForm";
export default function PaymentScreen() {
  const history = useHistory();
  return (
    <main className="flex items-left sm:p-12 md:w-11/12">
      <div className="w-full" style={{ marginRight: "150px" }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/app/Homescreen">
            Home
          </Link>
          <Typography color="text.primary">Manage Payments</Typography>
        </Breadcrumbs>
       <PaymentForm/>
      </div>
    </main>
  );
}
