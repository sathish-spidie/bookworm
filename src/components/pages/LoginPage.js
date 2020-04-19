import MyForm from "../forms/MyForm";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
    };
  }

  submit = (data) => {
    this.props
      .login(data)
      .then(() => this.props.history.push("/"))
      .catch((err) => 
        this.setState({ errors: err.response.data.errors })
        );
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <MyForm button="Login" errors={this.state.errors} submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default connect(null,{login})(LoginPage);
