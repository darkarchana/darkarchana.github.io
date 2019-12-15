import React from "react";
import "./App.css";

import Nav from "./main/components/Nav";
import Home from "./main/components/Home";
import About from "./main/components/About";
import Contact from "./main/components/Contact";
import List from "./main/components/List";
import Form from "./main/components/Form";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chapter from "main/components/Chapter";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/test"><List /><Form /></Route>
          <Route exact path="/chapter"><Chapter /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/contact"><Contact /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
