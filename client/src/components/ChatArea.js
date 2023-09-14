import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ChatInput from "./ChatInput";
import MessagesList from "./MessagesList";
import { useSelector } from "react-redux";

function ChatArea(props) {
  // const { socket } = props;
  const selectedRoom = useSelector((state) => state?.activeRoomName?.activeRoom);
  // console.log("room", selectedRoom);

  return (
    <Box bgcolor="#fffffa" height="100%" flexGrow={4} sx={{ width: 420 }}>
      <Navbar chatBoxScreen={true} />
      {selectedRoom ? (
        <MessagesList />
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="80vh"
          // bgcolor="red"
        >
          <Typography variant="body">No Room Selected</Typography>
        </Box>
      )}
      <Box position="fixed" bottom="0px" width="73%">
        {selectedRoom && <ChatInput/>}
      </Box>
    </Box>
  );
}

export default ChatArea;
