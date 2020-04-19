import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Homepage = ({ isAuthenticated }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <span style={{"margin":"10px"}}>
      <Link to="/register">Register</Link>
      </span>
      {isAuthenticated ? (
        <button>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

Homepage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({ isAuthenticated: !!state.user.token });

export default connect(mapStateToProps)(Homepage);
