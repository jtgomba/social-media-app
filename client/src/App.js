import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="762279673953-voqbc9f1s7mqc50gou0dhevtqsgsi623.apps.googleusercontent.com">
      <Router>
        <Container maxwidth="lg">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Container>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
