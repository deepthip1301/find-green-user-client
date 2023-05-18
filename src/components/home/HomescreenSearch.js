import React, { useState, useEffect } from "react";
import { Input } from "@windmill/react-ui";
import { SearchIcon } from "../../icons/index";
import Sidenav from "./Sidenav";
import { VscFilter } from "react-icons/vsc";
import CardsForm from "./CardsForm";
import axios from "axios";
import "../../assets/css/search.css";

export default function HomescreenSearch(props) {
  const { openModal, apiData, handleInputChange } = props;

  const [isLiked, setIsLiked] = useState([]);
  const [favouriteApiData, setFavouriteApiData] = useState();
  const userId = sessionStorage.getItem("userId");

  function getAllFav() {
    axios
      .get(`v1/fav/showall_favorite?userId=${userId}`)
      .then((res) => {
        console.log("res..", res);
        let data = res.data?.kum || [];
        setFavouriteApiData(data);
        const ids = data.map(({ stationId }) => stationId);
        const removeDuplicates = [...new Set(ids)];
        setIsLiked(removeDuplicates);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSelectFav(obj) {
    console.log("select:", obj);
    const index = isLiked.indexOf(obj.id);
    if (index === -1) {
      setIsLiked((prev) => [...prev, obj.id]);
    } else {
      const selectedRemovedArr = isLiked.filter((id) => id !== obj.id);
      setIsLiked(selectedRemovedArr);
    }
  }

  useEffect(() => {
    getAllFav();
  }, []);
  console.log("api", apiData, isLiked, favouriteApiData);

  return (
    <div className="w-full">
      <div className="relative w-full max-w-xl mr-10">
        <div className="flex items-center">
          <Sidenav />
        </div>
        <div>
          <Input
            style={{ marginLeft: "1rem", marginTop: "-75px" }}
            className="pl-8 text-gray-700"
            placeholder="    Search Here"
            aria-label="Search"
            type="search"
            onChange={handleInputChange}
          />
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <SearchIcon className="w-5 h-5" style={{ marginTop: "35px" }} />
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <VscFilter
              className="w-5 h-5"
              style={{ marginTop: 35, cursor: "pointer" }}
              onClick={openModal}
            />
          </div>
        </div>
      </div>
      <div className="mt-2" style={{ overflow: "auto", height: "79vh" }}>
        {apiData && apiData.length > 0
          ? apiData.map((data, index) => {
              return (
                <CardsForm
                  data={data}
                  isLiked={isLiked}
                  handleSelectFav={handleSelectFav}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
