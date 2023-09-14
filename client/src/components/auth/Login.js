import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../store/userSlice";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, TextField, Box } from "@mui/material";

export default function Login(props) {
  const { socket } = props;
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  // const joinChatApp = () => {
  //   if (userName === "") {
  //     setError("User Name is Required");
  //     // console.log("No user", error);
  //   } else {
  //     socket.emit("join_user", userName);
  //     dispatch(setName(userName));
  //     setUserName("");
  //     setError("");
  //   }
  // };
  // console.log("user val", error);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#fffff5"
    >
      <Card
        sx={{
          maxWidth: 600,
          fontFamily: "Roboto sans-serif",
          borderRadius: "40px",
        }}
      >
        <CardContent
          sx={{ textAlign: "center", margin: "30px 10px", padding: "30px" }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="500"
            fontSize="22px"
          >
            Join Chat
          </Typography>
          <form>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fontWeight="300"
              fullWidth
              value={userName}
              size="small"
              sx={{ mt: 2 }}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fontWeight="300"
              fullWidth
              // value={password}
              size="small"
              sx={{ mt: 2 }}
              // onChange={(e) => setUserName(e.target.value)}
            />
            <Link to={"/chat"}>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  mt: 2,
                  /* bgcolor: "#F24C3D" */
                }}
                fullWidth
                type="submit"
                // onClick={joinChatApp}
              >
                Log In
              </Button>
            </Link>
          </form>
          <Link to="/register" style={{textDecoration:"none"}}>
            <Typography style={{ marginTop: "10px", fontSize:"12px" }}>
              Do not have account? Register Now!
            </Typography>
          </Link>
          <Typography style={{ marginTop: "10px", color: "red" }}>
            {error}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
