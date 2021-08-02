import React from "react";
import { useStyles } from "./AuthorsPage.styles";
import { Typography, Box, Grid, Container } from "@material-ui/core";
import dummyimg from "../../images/manbag.jpg";

const AuthorsPage = () => {
  const classes = useStyles();
  const categories = [
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "Personality" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch" },
    { author: "steve baloch " },
    { author: "steve baloch" },
    { author: "steve baloch" },
  ];
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {categories.map((val) => (
            <Grid
              item
              xs={6}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              style={{ marginBottom: "30px" }}
            >
              <div
                className={classes.backgroundimg}
                style={{
                  backgroundImage: `url(${dummyimg})`,
                  backgroundSize: "100% 100%",
                  height: "370px",
                  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
              >
                {/* heading 1 */}

                <Box textAlign="center">
                  <Typography variant="body1" className={classes.heading1}>
                    {val.author}
                  </Typography>
                </Box>
                 
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AuthorsPage;
