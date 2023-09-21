import React, { useEffect, useState } from "react";
import Room from "./Room";
import { Box, ListItemButton } from "@mui/material";
import List from "@mui/material/List";

function RoomsList({ rooms }) {
  const [selectedIndex, setSelectedIndex] = React.useState();
  const [isActive, setIsActive] = useState(false);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      //   justifyContent="center"
      alignItems="center"
      height="80vh"
      sx={{
        overflowY: "auto",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ddd",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#aaa",
        },
      }}
    >
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{
          width: "90%",
          height: "90%",
        }}
        disablePadding
      >
        {rooms &&
          rooms?.map((room, index) => {
            return (
              <ListItemButton
                key={room?._id}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <Room
                  roomName={room?.roomName}
                  peopleJoined={room?.users?.length}
                  isActive={selectedIndex === index}
                />
              </ListItemButton>
            );
          })}
      </List>
    </Box>
  );
}

export default RoomsList;
