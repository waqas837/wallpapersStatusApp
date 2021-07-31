import React from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const font = "Open Sans";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
  button: {
    textTransform: "capitalize",
  },
});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Route>
            <Navbar />
            <Home />
          </Route>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
