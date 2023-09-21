import { Box, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useSelector } from "react-redux";

function ChatInput(props) {
  const { socket } = props;
  const [currentMessage, setCurrentMessage] = useState("");
  const room = useSelector((state) => state?.room?.activeRoom);
  const user = useSelector((state) => state.user.user);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      var messageData = {
        room: room,
        user: user,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      console.log("sending mess");
      await socket.emit("send_message", messageData);
    }
  };

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     console.log(data);
  //   });
  //   console.log("changed");
  // }, [socket]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="10px"
    >
      <TextField
        id="outlined-basic"
        placeholder="Type here..."
        variant="outlined"
        size="small"
        onChange={(e) => setCurrentMessage(e.target.value)}
        fullWidth
      />
      <IconButton onClick={sendMessage}>
        <AddBoxIcon fontSize="large" sx={{ color: "#F24C3D" }} />
      </IconButton>
    </Box>
  );
}

export default ChatInput;
