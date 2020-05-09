import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import SignUpPage from "./components/pages/SignUpPage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ValidateTokenPage from "./components/pages/ValidateTokenPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import NewBookPage from "./components/pages/NewBookPage";
import TopNavigation from "./components/navigation/TopNavigation";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const App = ({ isAuthenticated }) => (
	<BrowserRouter>
		<div className="App ui container">
			{isAuthenticated && <TopNavigation />}
			<Switch>
				<Route path="/" exact component={Homepage} />
				<GuestRoute path="/signup" component={SignUpPage} />
				<GuestRoute path="/login" component={LoginPage} />
				<GuestRoute path="/forgot_password" component={ForgotPasswordPage} />
				<GuestRoute
					path="/api/auth/validate_token/:token"
					component={ValidateTokenPage}
				/>
				<GuestRoute path="/reset_password" component={ResetPasswordPage} />
				<UserRoute path="/dashboard" component={DashboardPage} />
				<UserRoute path="/books/new" component={NewBookPage} />
				<Route
					path="/api/auth/confirmation/:token"
					component={ConfirmationPage}
				/>
			</Switch>
		</div>
	</BrowserRouter>
);

App.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.email,
	};
}

export default connect(mapStateToProps, null)(App);
