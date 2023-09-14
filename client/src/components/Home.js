import React from "react";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import { Box } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

function Home({ isAuth }) {
  // const { LayoutOutlet } = props;
      return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#F5F5F5"
      gap={2}
    >
      <Sidebar />
      <ChatArea />
    </Box>
      )};

export default Home;
