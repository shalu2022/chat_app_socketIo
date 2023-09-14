import { Box, Divider } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import RoomsList from './RoomsList'

function Sidebar() {
  return (
    <Box bgcolor="#fffffa" height="100%" flexGrow={0.5}>
      <Navbar />
      <Searchbar />
      <Divider />
      <RoomsList />
    </Box>
  );
}

export default Sidebar;
