import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../store/userSlice";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, TextField, Box, Alert } from "@mui/material";

export default function Register(props) {
  const [userDetails, setUserDetails] = useState();
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const currUser = (val) => {
    setUserDetails({
      ...userDetails,
      [val.target.name]: val.target.value,
    });
  };
  // console.log("user vals", userDetails);
  const getBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function error() {
      console.log("error:", error);
    };
  };

  const handleFileUpload = async (e) => {
    // console.log("file", e.target.files[0]);
    await getBase64(e.target.files[0], function (avatar) {
      setUserDetails({ ...userDetails, profilePic: avatar });
    });
  };

  const joinChatApp = () => {
    axios
      .post("http://localhost:5000/api/v1/register", userDetails)
      .then((res) => {
        if (res.status === 201) {
          setOpen(true);
          setError(res?.data?.message)
          setSeverity("success")
          setTimeout(()=>{ navigate('/login')
        },1000)
        }
      }).catch(err=>(setOpen(true), setError(err?.response?.data?.message), setSeverity("error")));
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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
            Register
          </Typography>
          {/* <form> */}
          <TextField
            id="outlined-basic"
            label="User Name"
            name="userName"
            variant="outlined"
            fontWeight="300"
            fullWidth
            value={userDetails?.userName || ""}
            size="small"
            sx={{ mt: 2 }}
            onChange={(e) => currUser(e)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fontWeight="300"
            name="password"
            fullWidth
            value={userDetails?.password || ""}
            size="small"
            sx={{ mt: 2 }}
            onChange={(e) => currUser(e)}
          />
          <TextField
            id="outlined-basic"
            label="Profile Pic"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fontWeight="300"
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            type="file"
            inputProps={{ accept: "image/*" }}
            onChange={(e) => handleFileUpload(e)}
          />

          {/* <Link to={"/chat"}> */}
          <Button
            variant="contained"
            color="warning"
            sx={{
              mt: 2,
              /* bgcolor: "#F24C3D" */
            }}
            fullWidth
            type="submit"
            onClick={joinChatApp}
          >
            Join
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            // message="User Registered Successfully"
            action={action}
          >
            <Alert severity={severity}>{error}</Alert>
          </Snackbar>
          {/* </Link> */}
          {/* </form> */}
        </CardContent>
      </Card>
    </Box>
  );
}
