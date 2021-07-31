import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <Box textAlign="center" mt={11} mb={3}>
        <Typography variant="subtitle2">
          "You're off to great places, today is your day. Your mountain is
          waiting, so get on your way."
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
