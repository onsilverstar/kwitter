import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { register } from "../../redux";
import "./RegistrationForm.css";

class RegistrationForm extends React.Component {
  state = { username: "", displayName: "", password: "" };

  handleRegistration = e => {
    e.preventDefault();
    this.props.register(this.state);
    document.getElementById("username").value = "";
    document.getElementById("displayName").value = "";
    document.getElementById("password").value = "";
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="registration-form" onSubmit={this.handleRegistration}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading}>
            Register
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.auth.register.result,
    loading: state.auth.register.loading,
    error: state.auth.register.error
  }),
  { register }
)(RegistrationForm);
