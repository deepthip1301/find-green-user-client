import React, { useState, useEffect } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import axios from "axios";

import ChargingHistoryForm from "../components/Forms/ChargingHistoryForm";

export default function ChargingHistory() {
  const [filter, setFilter] = useState("1 year");
  const [accessToken, setAccessToken] = useState(null);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const [loading, setLoading] = useState(true);
  const [historyData, setHistoryData] = useState([]);
  const userId = sessionStorage.getItem("userId");

  console.log(historyData?.rating);
  useEffect(() => {
    let url = `/v1/users/history?userId=${userId}`;
    if (filter) url += `&filter=${filter}`;
    axios
      .get(url)
      .then((res) => {
        console.log("res..", res);
        if (res.data && res.data.length > 0) {
          setHistoryData(res.data);
          setAccessToken(res.data.token);
          setLoading(false);
        } else {
          setHistoryData([]);
          setLoading(false);
        }
      })
      .catch((err) => {
        setHistoryData([]);
        setLoading(false);
      });
  }, [filter]);

  if (loading) return <h2> Loading </h2>;

  return (
    <main className="flex items-left sm:p-12 md:w-11/12 mt-20">
      <div className="w-full" style={{ marginRight: "150px" }}>
        <div className="flex flex-col md:flex-row">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="Homescreen">
              Home
            </Link>
            <Typography color="text.primary">Charging History</Typography>
          </Breadcrumbs>
          <FormControl size="small" style={{ marginLeft: "650px" }}>
            <NativeSelect value={filter} onChange={handleChange}>
              <option value={"1 year"}>Last 1 year</option>
              <option value={"6 months"}>Last 6 Month</option>
              <option value={"3 months"}>Last 3 Month</option>
              <option value={"1 month"}>Last 1 Month</option>
              <option value={"15 days"}>Last 15 days</option>
            </NativeSelect>
          </FormControl>
        </div>
        <ChargingHistoryForm historyData={historyData} />;
      </div>
    </main>
  );
}
