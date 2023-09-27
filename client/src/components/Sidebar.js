import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import RoomsList from "./RoomsList";
import roomService from "../services/room.service";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  const getAllRooms = async () => {
    const res = await roomService.getAllRooms();
    if (res.status == 200) {
      setRooms(res?.data?.data);
    } else {
      setRooms([]);
    }
  };

  useEffect(() => {
    getAllRooms();
  }, []);

  return (
    <Box bgcolor="#fffffa" height="100%" flexGrow={0.5}>
      <Navbar />
      <Searchbar getAllRooms={getAllRooms} />
      <Divider />
      <RoomsList rooms={rooms} />
    </Box>
  );
}

export default Sidebar;
