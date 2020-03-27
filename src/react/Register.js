import React from "react";
import { Menu } from "./components";
import RegistrationForm from "./components/RegistrationForm";
import "./components/RegistrationForm.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./Register.css";

class Register extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="mainContentWrapperRegister" id="yourAnchorTag">
          <h2>Register Below to Become a Member.</h2>
          <RegistrationForm />
        </div>
        <Footer />
      </>
    );
  }
}

export default Register;
