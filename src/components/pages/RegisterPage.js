import MyForm from "../forms/MyForm";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../actions/register";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
    };
  }

  submit = (data) => {
    this.props
      .register(data).then(res=>console.log(res))
      .then(() => this.props.history.push("/login"))
      .catch((err) =>
        this.setState({ errors: err.response.data.errors })
        );
  };
  render() {
    return (
      <div>
        <h1>Register Page</h1>
        <MyForm button="Register" errors={this.state.errors} submit={this.submit} />
      </div>
    );
  }
}


RegisterPage.propTypes = {
history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null,{register})(RegisterPage);
