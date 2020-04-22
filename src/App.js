import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import SignUpPage from "./components/pages/SignUpPage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = () => (
	<div className="App ui container">
		<Route path="/" exact component={Homepage} />
		<GuestRoute path="/signup" component={SignUpPage} />
		<GuestRoute path="/login" component={LoginPage} />
		<UserRoute path="/dashboard" component={DashboardPage} />
		<Route path="/confirmation/:token" exact component={ConfirmationPage} />
	</div>
);

export default App;
