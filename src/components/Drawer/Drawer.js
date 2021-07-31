import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Home,
  CloseOutlined,
  PhoneInTalk,
  Hotel,
  Book,
  MenuBook,
  FormatQuote,
} from "@material-ui/icons";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  SwipeableDrawer,
} from "@material-ui/core";
import logo from "../../images/logo.jpeg";
import { grey } from "@material-ui/core/colors";
var green = "#00e676";
// main
const useStyles = makeStyles((theme) => ({
  activeLink: {
    borderLeft: `4px solid ${green}`,
    borderRadius: "0px",
    background: grey[100],
  },
}));
const Drawer = ({ opendrawer, setopendrawer }) => {
  const classes = useStyles();
  return (
    <div>
      <SwipeableDrawer
        open={opendrawer}
        onClose={() => setopendrawer(false)}
        anchor="top"
      >
        <List>
          {/* logo */}
          <ListItem button>
            <img src={logo} width="100px" height="60px" alt="" />
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => setopendrawer(false)}
            >
              <CloseOutlined style={{color:green}} />
            </IconButton>
          </ListItem>
          <Divider />
          {/* Home */}
          <ListItem
            button
            component={NavLink}
            to="/"
            exact
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {/* Courses */}
          <ListItem
            button
            component={NavLink}
            to="/wallpapers"
            exact
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <FormatQuote fontSize="small" />  
            </ListItemIcon>
            <ListItemText primary="Quotes" />
          </ListItem>

          {/* blogs*/}
          <ListItem button
           
            component={NavLink}
            to="/topwallpapers"
            exact
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary="Top" />
          </ListItem>

        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
