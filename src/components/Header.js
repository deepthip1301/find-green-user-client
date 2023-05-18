import React, { useState } from "react";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  BellIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
  ProfileIcon,
} from "../icons";
import { Button, Input, Dropdown, DropdownItem } from "@windmill/react-ui";
import { useHistory } from "react-router-dom";

function Header(props) {
  const { notification, setNotification } = props;
  console.log("Notification", notification);
  const history = useHistory();

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }
  function handleLocationClick() {
    setIsLocationMenuOpen(!isLocationMenuOpen);
  }
  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  function Location() {
    return (
      <div>
        <button
          className="relative align-middle rounded-md focus:outline-none "
          onClick={handleLocationClick}
          aria-label="Location"
          aria-haspopup="true"
        >
          <Link
            style={{ textColor: "#478B60" }}
            className="text-sm font-small text-red-600 dark:text-red-600 hover:underline "
          >
            {" "}
            Location
          </Link>
        </button>

        <Dropdown
          style={{ width: "300px", height: "200px" }}
          align="right"
          isOpen={isLocationMenuOpen}
          onClose={() => setIsLocationMenuOpen(false)}
        >
          <DropdownItem
            tag="a"
            href="#"
            className="justify-between"
            style={{ marginTop: "15px" }}
          >
            <Input type="text" placeholder="Full Address" />
          </DropdownItem>
          <DropdownItem tag="a" href="#" className="justify-between">
            <Input aria-label="Bad" placeholder="Pin Code" />
          </DropdownItem>
          <div className="space-x-3">
            <Button
              style={{
                width: "100px",
                height: "40px",
                marginLeft: "45px",
                backgroundColor: "#FFFFFF",
                color: "#478B60",
                borderColor: "#478B60",
                borderRadius: "5px",
              }}
              className="mt-4"
              block
              type="submit"
              value="submit"
            >
              Cancel
            </Button>
            <Button
              style={{
                width: "100px",
                height: "40px",
                backgroundColor: "#478B60",
                color: "white",
                borderColor: "#478B60",
                borderRadius: "5px",
              }}
              className="mt-4"
              block
              type="submit"
              value="submit"
              onClick={() => {
                history.push({ pathname: "/app/Bookingslide" });
              }}
            >
              Allow
            </Button>
          </div>
        </Dropdown>
      </div>
    );
  }

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 40,
        width: "100%",
        height: "10vh",
        padding: "1rem 2rem",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-black-600 dark:text-black-300">
        <aside className="hidden w-full lg:block">
          <div className="w-11/12">
            <Link to="/" className="text-xl font-bold text-gray-800 text-left">
              Find Green
            </Link>
          </div>
        </aside>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- location --> */}
          <VscLocation className="w-5 h-5" aria-hidden="true" />
          <li className="relative">
            <Location />
          </li>
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>{notification}</span>
                <KeyboardArrowRightIcon />
              </DropdownItem>
            </Dropdown>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              // className="rounded-full focus:shadow-outline-black focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <ProfileIcon
                className="w-5 h-5 "
                aria-hidden="true"
                style={{ fontSize: "2em" }}
              />
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#">
                <OutlinePersonIcon
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>My Profile</span>
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Log out!")}>
                <OutlineLogoutIcon
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>Log out</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
