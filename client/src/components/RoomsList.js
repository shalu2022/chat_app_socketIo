import React, { useState } from "react";
import Room from "./Room";
import { Box, ListItemButton } from "@mui/material";
import List from "@mui/material/List";

function RoomsList() {
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
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <Room
            roomName={"Room-1"}
            peopleJoined={"33"}
            isActive={selectedIndex === 0}
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <Room
            roomName={"Room-2"}
            peopleJoined={"9"}
            isActive={selectedIndex === 1}
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <Room
            roomName={"Room-3"}
            peopleJoined={"10"}
            isActive={selectedIndex === 2}
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <Room
            roomName={"Room-4"}
            peopleJoined={"54"}
            isActive={selectedIndex === 3}
          />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default RoomsList;
