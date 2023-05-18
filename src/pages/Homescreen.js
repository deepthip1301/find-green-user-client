import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import HomescreenSearch from "../components/home/HomescreenSearch";
import Filtermodal from "./Filtermodal";
import axios from "axios";
function Homescreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");

  function handleInputChange(e) {
    const Timer = setTimeout(() => {
      setSearch(e.target.value);
      clearTimeout(Timer);
    }, 1000);
  }
  console.log(search);
  useEffect(() => {
    if (search === "") {
      setApiData([]);
    } else {
      axios
        .get(`/v1/station/filterStations?search=${search}`)
        .then((res) => {
          console.log("res..", res);
          if (res.status === 200) {
            setApiData(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [search]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  function fetchData(obj) {
    const { vehicle, charger, connector, chargingStatus } = obj;
    console.log("obj", obj);

    let queryString = new URLSearchParams();
    if (vehicle) queryString.append("station_vehicle_type", vehicle);
    if (charger) queryString.append("station_charger_type", charger);
    if (connector) queryString.append("station_connector_type", connector);
    if (chargingStatus) queryString.append("station_charging", chargingStatus);

    let url = `/v1/station/filterStations?${queryString}`;

    axios
      .get(url)
      .then((res) => {
        console.log("res..", res);
        if (res.status === 200) {
          setApiData(res.data);
          setIsModalOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <>
      <div style={{ height: "100%", overflow: "hidden" }}>
        <GoogleMapReact
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
        <div className="absolute top-11 left-4">
          <HomescreenSearch
            openModal={openModal}
            handleInputChange={handleInputChange}
            apiData={apiData}
          />
        </div>
      </div>

      <Filtermodal
        fetchData={fetchData}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
}
export default Homescreen;
