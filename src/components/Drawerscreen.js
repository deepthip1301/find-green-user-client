import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import {  useHistory } from "react-router-dom";
import {
  Booking,
  FavouriteIcon,
  HistoryIcon,
  MenuIcon,
  OutlineLogoutIcon,
  ProfileIcon,
  SearchIcon,
  WalletIcon,
} from "../icons";

export const Drawerscreen = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const history = useHistory();
  return (
    <>
      <button
        className="absolute left-3 top-1/2 transform -translate-y-1/2 "
        aria-label="Menu"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon
          className="w-6 h-6"
          style={{ marginLeft: "1rem", marginTop: -1 }}
        />
      </button>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Find Green
            <hr />
            <br />
            <List>
              <ListItem>
                <ProfileIcon />
                <ListItemText
                  primary=" My Profile"
                  style={{ marginLeft: "25px" }}
                  onClick={() => {
                  history.push({ pathname: "/app/Profilescreen" });
                }}
                />
              </ListItem>
              <ListItem>
                <Booking />
                <ListItemText
                  primary=" My Bookings"
                  style={{ marginLeft: "25px" }}
                />
              </ListItem>
              <ListItem>
                <HistoryIcon />
                <ListItemText
                  primary=" Charging History"
                  style={{ marginLeft: "25px" }}
                />
              </ListItem>
              <ListItem>
                <WalletIcon />
                <ListItemText
                  primary=" Payments"
                  style={{ marginLeft: "25px" }}
                />
              </ListItem>
              <ListItem>
                <FavouriteIcon />
                <ListItemText
                  primary=" Favourite Stations"
                  style={{ marginLeft: "25px" }}
                  onClick={() => {
                  history.push({ pathname: "/app/Favouritestation" });
                }}
                />
              </ListItem>
            </List>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <List>
              <ListItem>
                <div className="w-5 h-5">
                  <OutlineLogoutIcon />
                </div>

                <ListItemText
                  primary=" Log Out"
                  style={{ marginLeft: "25px" }}
                />
              </ListItem>
            </List>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};