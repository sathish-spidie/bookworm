import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Homepage = ({ isAuthenticated, logout }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/signup">Register</Link>
      <span style={{ margin: "10px" }}>or</span>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

Homepage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ isAuthenticated: !!state.user.token });

export default connect(mapStateToProps, { logout })(Homepage);
