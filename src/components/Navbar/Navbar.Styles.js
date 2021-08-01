import { makeStyles } from "@material-ui/core";

var green = "#00e676";
const useStyles = makeStyles((theme) => ({
  quoty: {
    letterSpacing: "30px",
    color: green,
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      letterSpacing: "10px",
      color: green,
      fontWeight: "bolder",
    },
  },
  grow: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    color: green,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(30),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  activeLink: {
    background: green,
    color: "white",
    borderRadius: "20px",
    marginLeft: "10px",
    marginRight: "10px",
    "&:hover": {
      background: green,
    },
  },
  text: {
    fontWeight: "bold",
    marginRight: "2px",
    fontSize: "12px",
  },
  hideNavigationForSmallScreen: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonStyle: {
    background: green,
    color: "white",
    borderRadius: "50px",
    fontSize: "12px",
    fontWeight: "bolder",
    "&:hover": {
      background: green,
    },
  },
  buttonStyleOutlined: {
    border: `2px solid ${green}`,
    color: green,
    borderRadius: "50px",
    fontSize: "12px",
    paddingLeft: "12px",
    paddingRight: "12px",
    fontWeight: "bolder",
    marginLeft: "5px",
    "&:hover": {
      border: `2px solid ${green}`,
      borderRadius: "50px",
      fontSize: "12px",
      paddingLeft: "12px",
      paddingRight: "12px",
      fontWeight: "bolder",
    },
  },

  resposiveFromSide: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
  },
  input: {
    height: "40px",
    borderRadius: "0px",
    marginBottom: "10px",
    fontWeight: "bolder",
  },
  formControl: {
    minWidth: 160,
  },
  formControl2: {
    minWidth: 160,
    marginTop: "-15px",
  },
  card: {
    width: "230px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-70px",
    },
  },

  paper: {
    borderRadius: "0px",
    marginTop: "20px",
  },
}));
export { useStyles, green };
