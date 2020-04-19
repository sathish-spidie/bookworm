import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import UserRoute from "./components/routes/UserRoute"
import GuestRoute from "./components/routes/GuestRoute"


const App = () => (
  <div className="App ui container">
    <Route path="/" exact component={Homepage} />
    <Route path="/register" component={RegisterPage} />
    <GuestRoute path="/login" component={LoginPage} />
    <UserRoute path="/dashboard" component={DashboardPage} />
  </div>
);

export default App;
