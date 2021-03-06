import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { register } from "../../redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
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

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  render() {
    const { loading, error, result } = this.props;
    return (
      <div className="registerFormColumn">
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
          <br />
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            required
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={this.handleChange}
          />
          <br />
          <Button variant="danger" type="submit" disabled={loading}>
            Register
          </Button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        {result && (
          <React.Fragment>
            <p>Registration Complete! Click Login!</p>
            <br />
            <Link to="/">
              <Button variant="danger" id="loginButton">
                Login
              </Button>
            </Link>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.users.register.result,
    loading: state.users.register.loading,
    error: state.users.register.error
  }),
  { register }
)(RegistrationForm);
