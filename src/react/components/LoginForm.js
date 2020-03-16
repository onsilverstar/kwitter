import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux";
import Button from "react-bootstrap/Button";
import "./LoginForm.css";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="loginFormColumn">
        <h3>Login to your account below.</h3>
        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <br />
          <Button type="submit" disabled={loading}>
            Login
          </Button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        <p>* If you do not have an account, register below.</p>
        <Link to="/register">
          <Button id="registerButton">Register New User</Button>
        </Link>
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.auth.login.result,
    loading: state.auth.login.loading,
    error: state.auth.login.error
  }),
  { login }
)(LoginForm);
