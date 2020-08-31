import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import "./css/index.css";
import Hubs from "./components/Hubs.js";
import Hotels from "./components/Hotels.js";
import Manufacturer from "./components/Manufacturer.js";

function App() {
  return (
    <Router>
      <div className="app">
        <div>
          <NavBar />
        </div>
        <div className="routes">
          <Switch>
            <Route exact path="/" />
            <Route exact path="/hubs" component={Hubs} />
            <Route exact path="/hotels" component={Hotels} />
            <Route exact path="/manufacturers" component={Manufacturer} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
