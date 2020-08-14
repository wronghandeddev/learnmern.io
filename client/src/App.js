import React from "react";
// import { Controlled as CodeMirror } from "react-codemirror2";
// import axios from "axios";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import NavBar from "./components/NavBar";
import Jobs from "./pages/Jobs.js";
import Box from "@material-ui/core/Box";
import FreeUser from "./pages/FreeUser.js";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/members">
            <Home />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/">
            <FreeUser />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
      <Box mt={5}>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
