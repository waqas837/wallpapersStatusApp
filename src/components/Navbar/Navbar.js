import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.jpeg";
import Drawer from "../Drawer/Drawer";
import {
  AppBar,
  Box,
  Button,
  Container,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar, Typography,
} from "@material-ui/core";
import {
  BurstMode,
  ExpandMore,
  FormatQuote,
  Home,
  Menu,
  SupervisorAccount,
} from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import {useStyles,green} from "./Navbar.Styles"

const Navbar = () => {
  const classes = useStyles();

  const [opendrawer, setopendrawer] = useState(false);
  return (
    <div>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={5}
        style={{ height: "60px" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img src={logo} width="60px" height="55px" alt="" />
          </IconButton>
          {/* create spacing */}
          <Box className={classes.searchIcon}>/</Box>
          <Box className={classes.search}></Box>
          {/* main navigations */}

          <Box className={classes.grow}>
            <Button
              size="small"
              component={NavLink}
              to="/"
              exact
              activeClassName={classes.activeLink}
              style={{ fontSize: "12px" }}
            >
              <Home fontSize="small" /> Home
            </Button>
            <Button
              component={NavLink}
              to="/courses"
              exact
              activeClassName={classes.activeLink}
              style={{ fontSize: "12px" }}
              size="small"
            >
              <FormatQuote fontSize="small" /> Quotes
            </Button>
            <Button
              style={{ fontSize: "12px" }}
              component={NavLink}
              to="/quotes"
              exact
              activeClassName={classes.activeLink}
              size="small"
            >
              <SupervisorAccount fontSize="small" /> Authors
            </Button>
            <Button
              style={{ fontSize: "12px" }}
              component={NavLink}
              to="/authors"
              exact
              activeClassName={classes.activeLink}
              size="small"
            >
              <BurstMode fontSize="small" /> Wallpapers
            </Button>
          </Box>
          <Box className={classes.hideNavigationForSmallScreen}>
            <Button className={classes.buttonStyle} variant="contained">
              Login
            </Button>
            <Button
              className={classes.buttonStyleOutlined}
              size="small"
              variant="outlined"
            >
              Signup
            </Button>
          </Box>
          <Hidden only={["xl", "lg", "md"]}>
          <Box>
            <Typography style={{letterSpacing:"30px",color:green,fontWeight:"bolder"}} variant="h5">QUOTY</Typography>
          </Box>
            <Box ml="auto">
              <IconButton onClick={() => setopendrawer(true)}>
                <Menu fontSize="small" className={classes.menuButton} />
              </IconButton>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer opendrawer={opendrawer} setopendrawer={setopendrawer} />
    </div>
  );
};

export default Navbar;
