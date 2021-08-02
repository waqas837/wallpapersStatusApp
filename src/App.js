import React from "react";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import QuotesCategories from "./components/QuotesCategories/QuotesCategories";
import QuotesPage from "./components/QuotesPage/QuotesPage";
import AuthorsPage from "./components/AuthorsPage/AuthorsPage";
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
        {/* Home route */}
          <Route exact path="/">
            <Navbar />
            <Home />
            <QuotesCategories/>
          </Route>
          {/* Qoutes Route */}
          <Route exact path="/qoutes">
          <Navbar />
          <QuotesPage/>
          </Route>
           {/* Authors Route */}
           <Route exact path="/authors">
          <Navbar />
          <AuthorsPage/>
          </Route>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
