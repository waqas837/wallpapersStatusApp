import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "10px",
    borderRadius: "10px",
    color: "white",
    background: "red",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "6px 6px 6px grey",
    },
  },
}));
export { useStyles };
