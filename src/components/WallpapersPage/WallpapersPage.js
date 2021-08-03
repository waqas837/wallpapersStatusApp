import React from "react";
import { useStyles } from "./Wallpaperspage.styles";
import { Box, Container, Paper, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import dummyimg from "../../images/img4.jpg";
const WallpapersPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        {[
          { title: "Motivational", noOfquotes: "6+" },
          { title: "Quotes On Wall", noOfquotes: "7+" },
          { title: "Animated", noOfquotes: "9+" },
        ].map((val) => (
          <Paper elevation={7} my={5} p={3} className={classes.main}>
            <Typography variant="h6">{val.title}</Typography>
            <Grid container>
              {/* 1 */}
              <Grid item xs={1} sm md lg xl>
                <img
                  className={classes.sideImage}
                  src={dummyimg}
                  alt=""
                  width="200px"
                  height="200px"
                />
              </Grid>
              {/* 2 */}
              <Grid item xs={1} sm md lg xl>
                <img
                  src={dummyimg}
                  alt=""
                  className={classes.imageStyle}
                  width="100px"
                  height="100px"
                />
              </Grid>
              {/* 3 */}
              <Grid item xs={1} sm md lg xl>
                <img
                  className={classes.imageStyle}
                  src={dummyimg}
                  alt=""
                  width="100px"
                  height="100px"
                />
              </Grid>
              {/* 4 */}
              <Grid item xs={1} sm md lg xl>
                <img
                  className={classes.imageStyle}
                  src={dummyimg}
                  alt=""
                  width="100px"
                  height="100px"
                />
              </Grid>
              {/* 5 */}
              <Grid item xs={1} sm md lg xl>
                <img
                  className={classes.imageStyle}
                  src={dummyimg}
                  alt=""
                  width="100px"
                  height="100px"
                />
              </Grid>
              {/* 6 */}
              <Grid item xs={1} sm md lg xl>
                <Typography variant="subtitle1" className={classes.lastText}>
                  {val.noOfquotes}
                </Typography>{" "}
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Container>
    </div>
  );
};

export default WallpapersPage;
