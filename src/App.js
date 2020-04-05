import React from "react";
import { Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { LoginPage } from "./components/LoginPage";

const App = () => (
  <div className="App ui container">
    <Route path="/" exact component={Homepage} />
    <Route path="/login" component={LoginPage} />
  </div>
);

export default App;
