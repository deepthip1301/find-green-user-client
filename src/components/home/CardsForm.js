import React, { useEffect, useState } from "react";
import { FaTelegramPlane, FaShareAlt, FaRegClock } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Card, CardBody } from "@windmill/react-ui";
import { Button } from "@windmill/react-ui";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CardsForm(props) {
  const history = useHistory();
  const { data, isLiked, handleSelectFav } = props;

  const isFavSelected = isLiked.indexOf(data.id) >= 0;
  const arr = data.station_connector_type;
  const connector_type = arr.split(",");
  const userId = sessionStorage.getItem("userId");

  const handleClick = () => {
    handleSelectFav(data);
    if (isFavSelected) {
      removeFav();
    } else {
      addFav();
    }
  };

  const heartStyle = {
    color: isFavSelected ? "green" : "black",
    cursor: "pointer",
  };
  let fav = {
    userId: sessionStorage.getItem("userId"),
    stationId: data.id.toString(),
  };

  function addFav() {
    axios
      .post(`v1/fav/add_favorite`, fav)
      .then((res) => {
        console.log("res..", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function removeFav() {
    axios
      .delete(`v1/fav/remove_favorite`, fav)
      .then((res) => {
        console.log("res..", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <Card
        colored
        className="ml-3 w-96  bg-white "
        style={{ borderRadius: 0, padding: "2" }}
      >
        <CardBody>
          <div className="flex flex-col md:flex-row space-x-10 ">
            <p className="text-base" name="station_name">
              {data.station_name}
            </p>
            <p
              style={{ textColor: "#478B60" }}
              className=" mt-1 text-sm font-small text-green-400 dark:text-green-300 "
              name="station_status"
            >
              {data.station_status}
            </p>
            <p className="mt-1 flex flex-col md:flex-row space-x-5">
              <FaTelegramPlane />
              <div>
                <FaHeart style={heartStyle} onClick={handleClick} />
              </div>
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-x-0">
            <p className="mb-3 font-sans text-xs" name="area">
              {data.station_address} ,
            </p>
            <p className="mb-3 font-sans text-xs" name="city">
              {data.station_area}
            </p>
          </div>
          <div className="flex flex-col md:flex-row ">
            <MdLocationOn />
            <p className=" font-sans text-sm" name="distance">
              {" "}
              4.5 km
            </p>
            <FaRegClock className="ml-6" />
            <p className="mb-3 ml-1 font-sans text-sm" name="timing">
              {data.station_working_time}
            </p>
          </div>
          <p className="mb-3 ml-2 font-sans text-xs" name="connector">
            Available Connectors -{data.station_available_connector}
          </p>
          <div className="flex flex-col md:flex-row space-x-3  ">
            {connector_type.map((value, index) => {
              return (
                <div>
                  <Button
                    className="  border-green-700 "
                    style={{ backgroundColor: "white", color: "#478B60" }}
                    onClick={() => {
                      history.push({
                        pathname: `/app/Bookingslot/${data.id}/${value}`,
                      });
                    }}
                  >
                    {value}
                  </Button>
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export default CardsForm;
