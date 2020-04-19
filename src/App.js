import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
  <div className="App ui container">
    <Route path="/" exact component={Homepage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
  </div>
);

export default App;
