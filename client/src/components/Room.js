import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveRoom, setPeopleJoined } from "../store/roomSlice";

export default function Room(props) {
  const { peopleJoined, roomName, isActive } = props;
  const [room, setRoom] = useState("");
  const dispatch = useDispatch();

  const joinRoom = (e) => {
    setRoom(roomName);
    dispatch(setActiveRoom(roomName));
    dispatch(setPeopleJoined(peopleJoined));
  };
  // console.log("activeRoom", activeRoom, roomName);
  return (
    <ListItem
      display="flex"
      // justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "background.paper",
        margin: "20px 0px",
        borderRadius: "10px",
        padding: "20px",
        borderLeft: isActive ? "3px solid red" : "transparent",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
      onClick={joinRoom}
    >
      <ListItemText
        primary={roomName}
        secondary={`${peopleJoined} people joined`}
      />
      <Typography
        fontWeight="200"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          bgcolor: "#F24C3D",
          color: "#ffffff",
        }}
      >
        44
      </Typography>
    </ListItem>
  );
}
