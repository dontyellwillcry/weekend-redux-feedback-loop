import React from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import CommentsInput from "../CommentsInput/CommentsInput";
import SupportInput from "../SupportInput/SupportInput";
import UnderstandingInput from "../UnderstandingInput/UnderstandingInput";
import FeelingInput from "../FeelingInput/FeelingInput";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import SuccessPage from "../SuccessPage/SuccessPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Router>
          <div>
            <Route exact path="/">
              <FeelingInput />
            </Route>
            <Route exact path="/understanding">
              <UnderstandingInput />
            </Route>
            <Route exact path="/supported">
              <SupportInput />
            </Route>
            <Route exact path="/comments">
              <CommentsInput />
            </Route>
            <Route exact path="/review">
              <ReviewFeedback />
            </Route>
            <Route exact path="/success">
              <SuccessPage />
            </Route>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
