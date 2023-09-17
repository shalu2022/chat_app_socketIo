import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../store/userSlice";
import Snackbar from "@mui/material/Snackbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  TextField,
  Box,
  CircularProgress,
  IconButton,
  Alert,
} from "@mui/material";
import userService from "../../services/user.service";
import route from "../../utils/route";
import CloseIcon from "@mui/icons-material/Close";

export default function Login(props) {
  const navigate = useNavigate();
  const { socket } = props;
  const [userDetail, setUserDetail] = useState({ userName: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleChange = (e) => {
    setUserDetail({
      ...userDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userDetail?.userName === "" || userDetail?.password === "") {
      setError("User Name and Password are Required Fields");
    }
    if (!error) {
      try {
        setLoading(true);
        const res = await userService.userLogin(userDetail);
        setUserDetail({ userName: "", password: "" });
        setError("");
        setOpen(true);
        setResponseMsg(res.message);
        setSeverity("success");
        navigate('/chat');
      } catch (err) {
        setOpen(true);
        setResponseMsg(err?.response?.data?.message);
        setSeverity("error");
      } finally {
        setLoading(false);
      }
    }
    // socket.emit("join_user", userName);
    // dispatch(setName(userName));
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
            Login
          </Typography>
          <form onSubmit={(e)=>handleLogin(e)}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fontWeight="300"
              fullWidth
              name="userName"
              value={userDetail?.userName}
              size="small"
              sx={{ mt: 2 }}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fontWeight="300"
              fullWidth
              name="password"
              value={userDetail?.password}
              size="small"
              sx={{ mt: 2 }}
              onChange={(e) => handleChange(e)}
            />
            {loading ? (
              <CircularProgress size={20} style={{ marginTop: "16px" }} />
            ) : (
              <Button
                variant="contained"
                color="warning"
                sx={{
                  mt: 2,
                  /* bgcolor: "#F24C3D" */
                }}
                fullWidth
                type="submit"
              >
                Log In
              </Button>
            )}
          </form>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Typography style={{ marginTop: "10px", fontSize: "12px" }}>
              Do not have account? Register Now!
            </Typography>
          </Link>
          <Typography style={{ marginTop: "10px", color: "red" }}>
            {error}
          </Typography>
        </CardContent>
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert severity={severity}>{responseMsg}</Alert>
      </Snackbar>
    </Box>
  );
}
