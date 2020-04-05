import LoginForm from "../forms/LoginForm";
import React, { Component } from "react";

export class LoginPage extends Component {
  submit = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}
