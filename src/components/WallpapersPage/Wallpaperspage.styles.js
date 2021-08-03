import { blue, green, grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 99,
    padding: 10,
    "&:hover": {
      background: "rgb(0,230,118)",
      cursor: "pointer",
    },
  },
  sideImage: {
    borderRadius: "30px",
  },
  imageStyle: {
    margin: "50px",
    borderRadius: "30px",
    [theme.breakpoints.down("sm")]: {
      margin: 50,
    },
  },
  lastText: {
    color: "green",
    marginTop: 80,
    [theme.breakpoints.down("sm")]: {
      background: green[400],
      color: "white",
      fontWeight: "bolder",
    },
  },
}));
export { useStyles };
