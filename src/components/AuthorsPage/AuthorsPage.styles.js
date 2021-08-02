import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  heading1: {
    color: "white",
    paddingTop: "300px",
    borderRadius: "0px",
    width:"50%",
    borderBottom:"3px solid skyblue",
    margin:"auto"
  },
  heading2: {
    color: "white",
    width: "6px",
    fontWeight: "bolder",
  },
  backgroundimg: {
    "&:hover": {
      border: "2px solid skyblue",
    },
  },
}));
export { useStyles };
