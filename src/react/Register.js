import React from "react";
import { Menu } from "./components";
import RegistrationForm from "./components/RegistrationForm";
import "./components/RegistrationForm.css";

class Register extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Register Below to Become a Member.</h2>
        <RegistrationForm />
      </>
    );
  }
}

export default Register;
