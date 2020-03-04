import React from "react";
import { Menu } from "./components";
import RegistrationForm from "./components/RegistrationForm";

class Register extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Register</h2>
        <RegistrationForm />
      </>
    );
  }
}

export default Register;
