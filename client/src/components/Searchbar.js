import { Box, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";

function Searchbar() {
  const [newRoomName, setNewRoomName] = useState("");
  const addNewRoom = () => {};
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
