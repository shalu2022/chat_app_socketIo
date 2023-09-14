import React, { useState } from "react";
import Message from "./Message";
import { Box } from "@mui/material";

function MessagesList() {
  const [isOwner, setIsOwner] = useState(false);
  return (
    <Box
      height="80vh"
      sx={{
        display: "flex",
        flexDirection: !isOwner ? "column" : "column-reverse",
        alignItems: !isOwner ? "flex" : "flex-end",
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
      <Message isOwner={!isOwner} />
      <Message isOwner={isOwner} />
      <Message isOwner={!isOwner} />
      <Message isOwner={isOwner} />
      <Message isOwner={!isOwner} />
      <Message isOwner={isOwner} />
      <Message isOwner={!isOwner} />
      <Message isOwner={isOwner} />
      <Message isOwner={!isOwner} />
    </Box>
  );
}

export default MessagesList;
