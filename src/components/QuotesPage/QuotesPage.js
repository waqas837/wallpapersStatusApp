import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./QuotesPage.styles";
import {
  yellow,
  red,
  pink,
  amber,
  blue,
  brown,
  indigo,
  lime,
  blueGrey,
  green,
  deepOrange,
  deepPurple,
} from "@material-ui/core/colors";
const QuotesPage = () => {
  const classes = useStyles();
  //   when we give it a data then we will also apply these colors to quotes data
  const RandomColors = [
    yellow[600],
    red[600],
    pink[600],
    amber[600],
    blue[600],
    brown[600],
    indigo[600],
    lime[600],
    blueGrey[600],
    green[600],
    deepOrange[600],
    deepPurple[600],
  ];

  return (
    <div>
      <CssBaseline />
      <Box mt={9}>
        <Container>
          <Grid container spacing={3}>
            {RandomColors.map((colors) => (
              <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                {" "}
                <Paper
                  elevation={5}
                  style={{ background: colors }}
                  className={classes.paper}
                  component="div"
                >
                  <Box my={1}>
                    <Typography variant="h6">Quotes</Typography>
                  </Box>
                  <Box my={2}>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      In provident, ipsam reprehenderit deserunt hic libero
                      quisquam minima nihil illum repellat iusto.
                    </Typography>
                  </Box>
                  <Typography variant="caption">__steve baloch</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default QuotesPage;
