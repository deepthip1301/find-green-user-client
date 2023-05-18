// import React from "react";
// import { VscFilter } from "react-icons/vsc";
// import { FaTelegramPlane, FaShareAlt, FaRegClock } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";
// import { FaHeart } from "react-icons/fa";
// import GoogleMapReact from "google-map-react";
// import { Input, Button } from "@windmill/react-ui";
// import { Link, useHistory } from "react-router-dom";
// import { MenuIcon, SearchIcon } from "../icons";
// import { Card, CardBody } from "@windmill/react-ui";
// import Sidenav from "./Sidenav";
// import Filtermodal from "./Filtermodal";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// function SimpleMap() {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };
//   return (
//     <div
//       style={{
//         height: "100%",
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//       className="h-full relative"
//     >
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
//       </GoogleMapReact>
//       <div className="absolute top-5 left-3">
//         <Search />
//       </div>
//     </div>
//   );
// }
// function Search() {
//   return (
//     <div className="w-full">
//       <div className="relative w-full max-w-xl mr-10">
//         <div className="flex items-center">
//           <Sidenav />
//         </div>
//         <div>
//           <Input
//             style={{ marginLeft: "1rem", marginTop: "-75px" }}
//             className="pl-8 text-gray-700"
//             placeholder="    Search Here"
//             aria-label="Search"
//             type="search"
//           />
//         </div>
//         <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
//           <SearchIcon className="w-5 h-5" style={{ marginTop: "35px" }} />
//         </div>
//         <Filtermodal />
//       </div>
//       <Cards />
//     </div>
//   );
// }

// function Cards() {
//   const history = useHistory();
//   return (
//     <Card colored className=" mt-4 ml-3.5 w-80 bg-white ">
//       <CardBody>
//         <div className="flex flex-col md:flex-row space-x-10">
//           <p className="font-sans text-base">Tata Power </p>
//           <p
//             style={{ textColor: "#478B60" }}
//             className=" mt-1 text-sm font-small text-green-400 dark:text-green-300 "
//           >
//             Open
//           </p>
//           <p className="mt-1 flex flex-col md:flex-row space-x-5">
//             <FaTelegramPlane />
//             <FaShareAlt />
//             <FaHeart style={{ color: "#478B60" }} />
//           </p>
//         </div>
//         <p className="mb-3 font-sans text-xs">Matsudo, Japan </p>

//         <div className="flex flex-col md:flex-row ">
//           <MdLocationOn />
//           <p className=" font-sans text-sm"> 4.5 km</p>

//           <FaRegClock className="ml-6" />
//           <p className="mb-3 ml-1 font-sans text-sm"> 9 am-11 pm</p>
//         </div>
//         <p className="mb-3 ml-2 font-sans text-xs">
//           Available Connectors - 2/2
//         </p>

//         <div className="mb-2 flex flex-col md:flex-row space-x-7">
//           <Button
//             className=" w-26 border-green-700"
//             style={{ backgroundColor: "white", color: "#478B60" }}
//           >
//             AC Type 1{" "}
//           </Button>
//           <Button
//             className=" w-26 border-green-700"
//             style={{ backgroundColor: "white", color: "#478B60" }}
//           >
//             AC Type 2{" "}
//           </Button>
//         </div>

//         <div className=" flex flex-col md:flex-row space-x-7">
//           <p className=" ml-5 font-sans text-xs ">₹ 45 / 15 min </p>
//           <p className=" font-sans text-xs ">₹ 55 / 15 min </p>
//         </div>
//       </CardBody>
//     </Card>
//   );
// }

// function Favouritestation() {
//   return (
//     <>
//       <SimpleMap />
//     </>
//   );
// }
// export default Favouritestation;
