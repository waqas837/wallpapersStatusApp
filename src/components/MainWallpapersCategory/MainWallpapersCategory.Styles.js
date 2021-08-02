import { makeStyles } from "@material-ui/core";
const useStyels = makeStyles((theme) => ({
  heading1: {
    color: "white",
    paddingTop: "300px",
    borderRadius: "20px",
  },
  heading2: {
    color: "white",
    fontWeight: "bolder",
  },
  backgroundimg: {
    "&:hover": {
      border: "2px solid skyblue",
     },
  },
}));
export { useStyels };
