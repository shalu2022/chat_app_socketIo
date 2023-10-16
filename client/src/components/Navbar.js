import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";

import { setName } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { InputBase } from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar(props) {
  const { chatBoxScreen } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [searchKeyword, setSearchKeyword] = React.useState('');
  const dispatch = useDispatch();
  const activeRoom = useSelector((state) => state?.activeRoomName?.activeRoom);
  const peopleJoined = useSelector(
    (state) => state?.activeRoomName?.peopleJoined
  );
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (val) => {
    // setAnchorElNav(null);
    setAnchorElUser(null);
    // console.log("val of e", val);
    if (val === "Logout") {
      dispatch(setName(""));
      localStorage.clear();
    }
  };

  const handleCloseUserMenu = (val) => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#fffffa", zIndex: 2, color: "#000000" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {chatBoxScreen ? activeRoom : "ROOMS"}
            </Typography>
            {chatBoxScreen ? (
              <Typography variant="secondary" color="#F24C3D">
                {peopleJoined && `${peopleJoined} people joined`}
              </Typography>
            ) : null}
          </Box>
          {chatBoxScreen ? (
            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseNavMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Room..."
                value={searchKeyword}
                onChange={(e)=> setSearchKeyword(e.target.value)}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
