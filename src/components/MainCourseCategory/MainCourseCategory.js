import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyels } from "./MainCourseCategory.Styles";
import dummyimg from "../../images/img4.jpg";
const MainCourseCategory = () => {
  const categories = [
    { title: "Humor", NoOfQoutes: "3051 Qoutes" },
    { title: "Inspiration", NoOfQoutes: "3051 Qoutes" },
    { title: "Love", NoOfQoutes: "3051 Qoutes" },
    { title: "Wisdom", NoOfQoutes: "3051 Qoutes" },
    { title: "Life", NoOfQoutes: "3051 Qoutes" },
    { title: "Freindship", NoOfQoutes: "3051 Qoutes" },
    { title: "Success", NoOfQoutes: "3051 Qoutes" },
    { title: "Misccellaneious", NoOfQoutes: "3051 Qoutes" },
    { title: "Pain", NoOfQoutes: "3051 Qoutes" },
    { title: "Personality", NoOfQoutes: "3051 Qoutes" },
    { title: "Happiness", NoOfQoutes: "3051 Qoutes" },
    { title: "Motivation", NoOfQoutes: "3051 Qoutes" },
    { title: "Parenting", NoOfQoutes: "3051 Qoutes" },
    { title: "Nature", NoOfQoutes: "3051 Qoutes" },
    { title: "Anger", NoOfQoutes: "3051 Qoutes" },
    { title: "Behaviour", NoOfQoutes: "3051 Qoutes" },
    { title: "Dreams", NoOfQoutes: "3051 Qoutes" },
    { title: "Attitude", NoOfQoutes: "3051 Qoutes" },
    { title: "Animals", NoOfQoutes: "3051 Qoutes" },
  ];
  const classes = useStyels();
  return (
    <div>
     <Container>
     <Grid container spacing={3}>
        {categories.map((val) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ marginBottom: "30px" }}
          >
            <div
              style={{
                backgroundImage: `url(${dummyimg})`,
                backgroundSize: "100% 100%",
                height: "370px",
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
                borderRadius: "20px",
                cursor:"pointer"
              }}
            >
              {/* heading 1 */}

              <Box textAlign="center">
                <Typography variant="body1" className={classes.heading1}>
                  {val.title}
                </Typography>
              </Box>
              {/* heading 2 */}
              <Box textAlign="center">
                <Typography variant="body1" className={classes.heading2}>
                  {val.NoOfQoutes}
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

export default MainCourseCategory;
