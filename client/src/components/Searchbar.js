import {useSelector} from 'react-redux'
import { Box, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import roomService from '../services/room.service'

function Searchbar() {
  const [newRoomName, setNewRoomName] = useState("");
  const user =  useSelector(state => state.user.user);
  const addNewRoom = async () => {
    const payload = {
      roomName: newRoomName,
      groupAdmin: user._id
    }
    const res = await roomService.addRoom(payload);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="10px"
    >
      <TextField
        id="outlined-basic"
        placeholder="Type new room name"
        variant="outlined"
        size="small"
        onChange={(e) => setNewRoomName(e.target.value)}
        fullWidth
      />
      <IconButton>
        <AddBoxIcon
          fontSize="large"
          sx={{ color: "#F24C3D" }}
          onClick={addNewRoom}
        />
      </IconButton>
    </Box>
  );
}

export default Searchbar;
