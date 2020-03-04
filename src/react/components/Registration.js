import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { register } from "../../redux";

class RegistrationForm extends React.Component {
  state = { username: "", displayName: "", password: "" };
  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="registration-form" onSubmit={this.handleRegistration}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="displayname">Display Name</label>
          <input
            type="text"
            name="displayname"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
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
